﻿//-----------------------------------------------------------------------
// <copyright company="Microsoft Corporation">
//        Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//-----------------------------------------------------------------------

module powerbi.data {
    export module DataViewPivotMatrix {
        /** Pivots row hierarchy members in a matrix DataView into column hierarchy. */
        export function apply(dataViewMatrix: DataViewMatrix, context: MatrixTransformationContext): void {
            debug.assertValue(dataViewMatrix, 'dataViewMatrix');

            if (!context.columnHierarchyRewritten)
                dataViewMatrix.columns = Prototype.inherit(dataViewMatrix.columns);
            var columns = dataViewMatrix.columns;

            if (!context.rowHierarchyRewritten)
                dataViewMatrix.rows = Prototype.inherit(dataViewMatrix.rows);
            var rows = dataViewMatrix.rows;

            if (columns.levels.length > 1)
                return;

            var pivotedRowNode: DataViewMatrixNode = {
                level: 0
            };

            var columnLeafNodes: DataViewMatrixNode[] = columns.root.children;
            var columnCount = columnLeafNodes.length;

            if (columnCount > 0) {
                var index = 0;
                var callback = function (node: DataViewMatrixNode) {
                    // Collect values and remove them from row leaves
                    if (node.values) {
                        if (!pivotedRowNode.values)
                            pivotedRowNode.values = {};

                        for (var i = 0; i < columnCount; i++)
                            pivotedRowNode.values[index++] = node.values[i];

                        delete node.values;
                    }

                    // Create measure headers if there are more than one measures
                    if (columnCount > 1) {
                        var level = node.level + 1;
                        if (!node.children)
                            node.children = [];

                        for (var j = 0; j < columnCount; j++) {
                            var measureHeaderLeaf: DataViewMatrixNode = { level: level };

                            // Copy levelSourceIndex from columnLeafNodes (as they might have been reordered)
                            var columnLeafNode = columnLeafNodes[j];
                            measureHeaderLeaf.levelSourceIndex = columnLeafNode.levelSourceIndex;

                            if (node.isSubtotal)
                                measureHeaderLeaf.isSubtotal = true;

                            node.children.push(measureHeaderLeaf);
                        }
                    }
                };

                if (context.hierarchyTreesRewritten) {
                    forEachLeaf(rows.root, callback);
                }
                else {
                    dataViewMatrix.columns.root = cloneTreeExecuteOnLeaf(rows.root, callback);
                }
            }
            else {
                if (!context.hierarchyTreesRewritten) {
                    dataViewMatrix.columns.root = cloneTree(rows.root);
                }
            }

            if (columnCount > 1) {
                // Keep measure headers, but move them to the innermost level
                var level: DataViewHierarchyLevel = { sources: columns.levels[0].sources };
                rows.levels.push(level);

                columns.levels.length = 0;
            }

            if (context.hierarchyTreesRewritten) {
                dataViewMatrix.columns.root = rows.root;
                dataViewMatrix.rows.root = {
                    children: [pivotedRowNode]
                };
            }
            else {
                var updatedRowRoot = Prototype.inherit(dataViewMatrix.rows.root);
                updatedRowRoot.children = [pivotedRowNode];
                dataViewMatrix.rows.root = updatedRowRoot;
            }

            dataViewMatrix.columns.levels = rows.levels;
            dataViewMatrix.rows.levels = [];
        }

        function forEachLeaf(root: DataViewMatrixNode, callback: (node: DataViewMatrixNode) => void): void {
            var children = root.children;
            if (children && children.length > 0) {
                for (var i = 0, ilen = children.length; i < ilen; i++)
                    forEachLeaf(children[i], callback);

                return;
            }

            callback(root);
        }

        export function cloneTree(node: DataViewMatrixNode): DataViewMatrixNode {
            return cloneTreeExecuteOnLeaf(node);
        }

        export function cloneTreeExecuteOnLeaf(node: DataViewMatrixNode, callback?: (node: DataViewMatrixNode) => void): DataViewMatrixNode {
            var updatedNode = Prototype.inherit(node);

            var children = node.children;
            if (children && children.length > 0) {
                var newChildren: DataViewTreeNode[] = [];

                for (var i = 0, ilen = children.length; i < ilen; i++) {
                    var updatedChild = cloneTreeExecuteOnLeaf(children[i], callback);
                    newChildren.push(updatedChild);
                }
                updatedNode.children = newChildren;
            }
            else {
                if (callback)
                    callback(updatedNode);
            }

            return updatedNode;
        }
    }
} 