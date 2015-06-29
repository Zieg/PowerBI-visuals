"use strict";

var __extends = this.__extends || function (a, b) {
    function c() {
        this.constructor = a;
    }
    for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
    c.prototype = b.prototype, a.prototype = new c();
}, powerbi;

!function (a) {
    var b;
    !function (a) {
        var b = function () {
            function a() { }
            return a.prototype.visitEntity = function (a, b) {
                return this.visitDefault(a, b);
            }, a.prototype.visitColumnRef = function (a, b) {
                return this.visitDefault(a, b);
            }, a.prototype.visitMeasureRef = function (a, b) {
                return this.visitDefault(a, b);
            }, a.prototype.visitAggr = function (a, b) {
                return this.visitDefault(a, b);
            }, a.prototype.visitBetween = function (a, b) {
                return this.visitDefault(a, b);
            }, a.prototype.visitIn = function (a, b) {
                return this.visitDefault(a, b);
            }, a.prototype.visitAnd = function (a, b) {
                return this.visitDefault(a, b);
            }, a.prototype.visitOr = function (a, b) {
                return this.visitDefault(a, b);
            }, a.prototype.visitCompare = function (a, b) {
                return this.visitDefault(a, b);
            }, a.prototype.visitContains = function (a, b) {
                return this.visitDefault(a, b);
            }, a.prototype.visitExists = function (a, b) {
                return this.visitDefault(a, b);
            }, a.prototype.visitNot = function (a, b) {
                return this.visitDefault(a, b);
            }, a.prototype.visitStartsWith = function (a, b) {
                return this.visitDefault(a, b);
            }, a.prototype.visitConstant = function (a, b) {
                return this.visitDefault(a, b);
            }, a.prototype.visitDateSpan = function (a, b) {
                return this.visitDefault(a, b);
            }, a.prototype.visitDateAdd = function (a, b) {
                return this.visitDefault(a, b);
            }, a.prototype.visitNow = function (a, b) {
                return this.visitDefault(a, b);
            }, a.prototype.visitDefault = function () { }, a;
        }();
        a.DefaultSQExprVisitorWithArg = b;
        var c = function (a) {
            function b() {
                a.apply(this, arguments);
            }
            return __extends(b, a), b;
        }(b);
        a.DefaultSQExprVisitor = c;
        var d = function () {
            function a() { }
            return a.prototype.visitEntity = function (a) {
                this.visitDefault(a);
            }, a.prototype.visitColumnRef = function (a) {
                a.source.accept(this);
            }, a.prototype.visitMeasureRef = function (a) {
                a.source.accept(this);
            }, a.prototype.visitAggr = function (a) {
                a.arg.accept(this);
            }, a.prototype.visitBetween = function (a) {
                a.arg.accept(this), a.lower.accept(this), a.upper.accept(this);
            }, a.prototype.visitIn = function (a) {
                for (var b = a.args, c = 0, d = b.length; d > c; c++) b[c].accept(this);
                for (var e = a.values, c = 0, d = e.length; d > c; c++) for (var f = e[c], g = 0, h = e.length; h > g; g++) f[g].accept(this);
            }, a.prototype.visitAnd = function (a) {
                a.left.accept(this), a.right.accept(this);
            }, a.prototype.visitOr = function (a) {
                a.left.accept(this), a.right.accept(this);
            }, a.prototype.visitCompare = function (a) {
                a.left.accept(this), a.right.accept(this);
            }, a.prototype.visitContains = function (a) {
                a.left.accept(this), a.right.accept(this);
            }, a.prototype.visitExists = function (a) {
                a.arg.accept(this);
            }, a.prototype.visitNot = function (a) {
                a.arg.accept(this);
            }, a.prototype.visitStartsWith = function (a) {
                a.left.accept(this), a.right.accept(this);
            }, a.prototype.visitConstant = function (a) {
                this.visitDefault(a);
            }, a.prototype.visitDateSpan = function (a) {
                a.arg.accept(this);
            }, a.prototype.visitDateAdd = function (a) {
                a.arg.accept(this);
            }, a.prototype.visitNow = function (a) {
                this.visitDefault(a);
            }, a.prototype.visitDefault = function () { }, a;
        }();
        a.DefaultSQExprVisitorWithTraversal = d;
    }(b = a.data || (a.data = {}));
}(powerbi || (powerbi = {}));

var powerbi;

!function (a) {
    var b;
    !function (a) {
        var b;
        !function (b) {
            var c;
            !function (c) {
                function d(c, d, e) {
                    if (c && e) {
                        var f, g = JSON.parse(e), h = d;
                        if (d) {
                            var i = g.objects;
                            i && (f = b.DataViewObjectSerializer.deserializeObjects(i, h));
                        }
                        return a.DataViewTransform.createTransformActions(g.queryMetadata, g.visualElements, h, f);
                    }
                }
                function e(a) {
                    return JSON.stringify(a);
                }
                c.deserializeTransformActions = d, c.serializeTransformActions = e;
            }(c = b.DataViewTransformActionsSerializer || (b.DataViewTransformActionsSerializer = {}));
        }(b = a.services || (a.services = {}));
    }(b = a.data || (a.data = {}));
}(powerbi || (powerbi = {}));

var powerbi;

!function (a) {
    var b;
    !function (a) {
        a.right = "right", a.left = "left", a.center = "center";
    }(b = a.alignment || (a.alignment = {}));
}(powerbi || (powerbi = {}));

var powerbi;

!function (a) {
    var b;
    !function (a) {
        function b(a) {
            var b = [];
            if (a) for (var d = 0, e = c.length; e > d; d++) -1 !== a.indexOf(c[d].value) && b.push(c[d]);
            return b;
        }
        a.showBoth = "showBoth", a.showTitleOnly = "showTitleOnly";
        var c = [{
            value: a.showTitleOnly,
            displayName: function (a) {
                return a.get("Visual_Axis_ShowTitleOnly");
            }
        }, {
            value: a.showBoth,
            displayName: function (a) {
                return a.get("Visual_Axis_ShowBoth");
            }
        }];
        a.members = b;
    }(b = a.axisStyle || (a.axisStyle = {}));
}(powerbi || (powerbi = {}));

var powerbi;

!function (a) {
    var b;
    !function (a) {
        function b() {
            return [{
                value: a.scalar,
                displayName: function (a) {
                    return a.get("Visual_Axis_Scalar");
                }
            }, {
                value: a.categorical,
                displayName: function (a) {
                    return a.get("Visual_Axis_Categorical");
                }
            }];
        }
        a.scalar = "Scalar", a.categorical = "Categorical", a.both = "Both", a.members = b;
    }(b = a.axisType || (a.axisType = {}));
}(powerbi || (powerbi = {}));

var powerbi;

!function () { }(powerbi || (powerbi = {}));

var powerbi;

!function (a) {
    var b;
    !function (a) {
        function b() {
            return [{
                value: a.topLeft,
                displayName: function (a) {
                    return a.get("Visual_LabelPosition_TopLeft");
                }
            }, {
                value: a.topCenter,
                displayName: function (a) {
                    return a.get("Visual_LabelPosition_TopCenter");
                }
            }, {
                value: a.topRight,
                displayName: function (a) {
                    return a.get("Visual_LabelPosition_TopRight");
                }
            }, {
                value: a.middleLeft,
                displayName: function (a) {
                    return a.get("Visual_LabelPosition_MiddleLeft");
                }
            }, {
                value: a.middleCenter,
                displayName: function (a) {
                    return a.get("Visual_LabelPosition_MiddleCenter");
                }
            }, {
                value: a.middleRight,
                displayName: function (a) {
                    return a.get("Visual_LabelPosition_MiddleRight");
                }
            }, {
                value: a.bottomLeft,
                displayName: function (a) {
                    return a.get("Visual_LabelPosition_BottomLeft");
                }
            }, {
                value: a.bottomCenter,
                displayName: function (a) {
                    return a.get("Visual_LabelPosition_BottomCenter");
                }
            }, {
                value: a.bottomRight,
                displayName: function (a) {
                    return a.get("Visual_LabelPosition_BottomRight");
                }
            }, {
                value: a.insideCenter,
                displayName: function (a) {
                    return a.get("Visual_LabelPosition_InsideCenter");
                }
            }, {
                value: a.insideBase,
                displayName: function (a) {
                    return a.get("Visual_LabelPosition_InsideBase");
                }
            }, {
                value: a.insideEnd,
                displayName: function (a) {
                    return a.get("Visual_LabelPosition_InsideEnd");
                }
            }, {
                value: a.outsideBase,
                displayName: function (a) {
                    return a.get("Visual_LabelPosition_OutsideBase");
                }
            }, {
                value: a.outsideEnd,
                displayName: function (a) {
                    return a.get("Visual_LabelPosition_OutsideEnd");
                }
            }];
        }
        a.topLeft = "TopLeft", a.topCenter = "TopCenter", a.topRight = "TopRight", a.middleLeft = "MiddleLeft",
        a.middleCenter = "MiddleCenter", a.middleRight = "MiddleRight", a.bottomLeft = "BottomLeft",
        a.bottomCenter = "BottomCenter", a.bottomRight = "BottomRight", a.insideCenter = "InsideCenter",
        a.insideBase = "InsideBase", a.insideEnd = "InsideEnd", a.outsideBase = "OutsideBase",
        a.outsideEnd = "OutsideEnd", a.members = b;
    }(b = a.labelPosition || (a.labelPosition = {}));
}(powerbi || (powerbi = {}));

var powerbi;

!function (a) {
    var b;
    !function (a) {
        function b() {
            return [{
                value: a.top,
                displayName: function (a) {
                    return a.get("Visual_LegendPosition_Top");
                }
            }, {
                value: a.bottom,
                displayName: function (a) {
                    return a.get("Visual_LegendPosition_Bottom");
                }
            }, {
                value: a.left,
                displayName: function (a) {
                    return a.get("Visual_LegendPosition_Left");
                }
            }, {
                value: a.right,
                displayName: function (a) {
                    return a.get("Visual_LegendPosition_Right");
                }
            }];
        }
        a.top = "Top", a.bottom = "Bottom", a.left = "Left", a.right = "Right", a.members = b;
    }(b = a.legendPosition || (a.legendPosition = {}));
}(powerbi || (powerbi = {}));

var powerbi;

!function (a) {
    var b;
    !function (a) {
        function b(a) {
            return a.fill || a.fillRule || a.filter ? !0 : !1;
        }
        a.isValid = b;
    }(b = a.StructuralTypeDescriptor || (a.StructuralTypeDescriptor = {}));
}(powerbi || (powerbi = {}));

var powerbi;

!function (a) {
    function b(a) {
        return a & o;
    }
    function c(a) {
        return (a & p) === a;
    }
    function d(a) {
        if (c(a)) return null;
        var b = n[a];
        if (b) {
            var d = b.lastIndexOf("_");
            if (d > 0) {
                var e = b.slice(0, d);
                n[e] && (b = e);
            }
        }
        return b || null;
    }
    function e(a, c) {
        var d = m[a], e = n[d];
        if (null == e && (e = 0), a && c) {
            var f = n[c];
            if (f) {
                var g = b(f);
                0 === g ? (f = e | f, n[f] && (e = f)) : g === a && (e = f);
            }
        }
        return e;
    }
    function f(a, b) {
        return (a & q) === (b & q);
    }
    var g = jsCommon.EnumExtensions, h = function () {
        function a(a, b) {
            this.underlyingType = a, this.category = b, g.hasFlag(a, n.Temporal) && (this.temporalType = new i(a)),
            g.hasFlag(a, n.Geography) && (this.geographyType = new j(a)), g.hasFlag(a, n.Miscellaneous) && (this.miscType = new k(a)),
            g.hasFlag(a, n.Formatting) && (this.formattingType = new l(a));
        }
        return a.fromDescriptor = function (b) {
            if (b = b || {}, b.text) return a.fromExtendedType(1);
            if (b.integer) return a.fromExtendedType(n.Integer);
            if (b.numeric) return a.fromExtendedType(n.Double);
            if (b.bool) return a.fromExtendedType(5);
            if (b.dateTime) return a.fromExtendedType(n.DateTime);
            if (b.duration) return a.fromExtendedType(10);
            if (b.binary) return a.fromExtendedType(11);
            if (b.none) return a.fromExtendedType(12);
            if (b.temporal) {
                if (b.temporal.year) return a.fromExtendedType(n.Year_Integer);
                if (b.temporal.month) return a.fromExtendedType(n.Month_Integer);
            }
            if (b.geography) {
                if (b.geography.address) return a.fromExtendedType(n.Address);
                if (b.geography.city) return a.fromExtendedType(n.City);
                if (b.geography.continent) return a.fromExtendedType(n.Continent);
                if (b.geography.country) return a.fromExtendedType(n.Country);
                if (b.geography.county) return a.fromExtendedType(n.County);
                if (b.geography.region) return a.fromExtendedType(n.Region);
                if (b.geography.postalCode) return a.fromExtendedType(n.PostalCode_Text);
                if (b.geography.stateOrProvince) return a.fromExtendedType(n.StateOrProvince);
                if (b.geography.place) return a.fromExtendedType(n.Place);
                if (b.geography.latitude) return a.fromExtendedType(n.Latitude_Double);
                if (b.geography.longitude) return a.fromExtendedType(n.Longitude_Double);
            }
            if (b.misc) {
                if (b.misc.image) return a.fromExtendedType(n.Image);
                if (b.misc.imageUrl) return a.fromExtendedType(n.ImageUrl);
                if (b.misc.webUrl) return a.fromExtendedType(n.WebUrl);
            }
            if (b.formatting) {
                if (b.formatting.color) return a.fromExtendedType(n.Color);
                if (b.formatting.formatString) return a.fromExtendedType(n.FormatString);
                if (b.formatting.legendPosition) return a.fromExtendedType(n.LegendPosition);
                if (b.formatting.axisType) return a.fromExtendedType(n.AxisType);
                if (b.formatting.yAxisPosition) return a.fromExtendedType(n.YAxisPosition);
                if (b.formatting.axisStyle) return a.fromExtendedType(n.AxisStyle);
                if (b.formatting.alignment) return a.fromExtendedType(n.Alignment);
                if (b.formatting.labelDisplayUnits) return a.fromExtendedType(n.LabelDisplayUnits);
                if (b.formatting.labelPosition) return a.fromExtendedType(n.LabelPosition);
            }
            return a.fromExtendedType(b.extendedType ? b.extendedType : 0);
        }, a.fromExtendedType = function (c) {
            c = c || 0;
            var e = b(c), f = d(c);
            return a.fromPrimitiveTypeAndCategory(e, f);
        }, a.fromPrimitiveTypeAndCategory = function (b, c) {
            b = b || 0, c = c || null;
            var d = b.toString();
            return c && (d += "|" + c), a.typeCache[d] || (a.typeCache[d] = new a(e(b, c), c));
        }, Object.defineProperty(a.prototype, "primitiveType", {
            get: function () {
                return b(this.underlyingType);
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(a.prototype, "extendedType", {
            get: function () {
                return this.underlyingType;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(a.prototype, "categoryString", {
            get: function () {
                return this.category;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(a.prototype, "text", {
            get: function () {
                return 1 === this.primitiveType;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(a.prototype, "numeric", {
            get: function () {
                return g.hasFlag(this.underlyingType, n.Numeric);
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(a.prototype, "integer", {
            get: function () {
                return 4 === this.primitiveType;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(a.prototype, "bool", {
            get: function () {
                return 5 === this.primitiveType;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(a.prototype, "dateTime", {
            get: function () {
                return 7 === this.primitiveType || 6 === this.primitiveType || 9 === this.primitiveType;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(a.prototype, "duration", {
            get: function () {
                return 10 === this.primitiveType;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(a.prototype, "binary", {
            get: function () {
                return 11 === this.primitiveType;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(a.prototype, "none", {
            get: function () {
                return 12 === this.primitiveType;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(a.prototype, "temporal", {
            get: function () {
                return this.temporalType;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(a.prototype, "geography", {
            get: function () {
                return this.geographyType;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(a.prototype, "misc", {
            get: function () {
                return this.miscType;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(a.prototype, "formatting", {
            get: function () {
                return this.formattingType;
            },
            enumerable: !0,
            configurable: !0
        }), a.typeCache = {}, a;
    }();
    a.ValueType = h;
    var i = function () {
        function a(a) {
            this.underlyingType = a;
        }
        return Object.defineProperty(a.prototype, "year", {
            get: function () {
                return f(this.underlyingType, n.Year);
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(a.prototype, "month", {
            get: function () {
                return f(this.underlyingType, n.Month);
            },
            enumerable: !0,
            configurable: !0
        }), a;
    }();
    a.TemporalType = i;
    var j = function () {
        function a(a) {
            this.underlyingType = a;
        }
        return Object.defineProperty(a.prototype, "address", {
            get: function () {
                return f(this.underlyingType, n.Address);
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(a.prototype, "city", {
            get: function () {
                return f(this.underlyingType, n.City);
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(a.prototype, "continent", {
            get: function () {
                return f(this.underlyingType, n.Continent);
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(a.prototype, "country", {
            get: function () {
                return f(this.underlyingType, n.Country);
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(a.prototype, "county", {
            get: function () {
                return f(this.underlyingType, n.County);
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(a.prototype, "region", {
            get: function () {
                return f(this.underlyingType, n.Region);
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(a.prototype, "postalCode", {
            get: function () {
                return f(this.underlyingType, n.PostalCode);
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(a.prototype, "stateOrProvince", {
            get: function () {
                return f(this.underlyingType, n.StateOrProvince);
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(a.prototype, "place", {
            get: function () {
                return f(this.underlyingType, n.Place);
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(a.prototype, "latitude", {
            get: function () {
                return f(this.underlyingType, n.Latitude);
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(a.prototype, "longitude", {
            get: function () {
                return f(this.underlyingType, n.Longitude);
            },
            enumerable: !0,
            configurable: !0
        }), a;
    }();
    a.GeographyType = j;
    var k = function () {
        function a(a) {
            this.underlyingType = a;
        }
        return Object.defineProperty(a.prototype, "image", {
            get: function () {
                return f(this.underlyingType, n.Image);
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(a.prototype, "imageUrl", {
            get: function () {
                return f(this.underlyingType, n.ImageUrl);
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(a.prototype, "webUrl", {
            get: function () {
                return f(this.underlyingType, n.WebUrl);
            },
            enumerable: !0,
            configurable: !0
        }), a;
    }();
    a.MiscellaneousType = k;
    var l = function () {
        function a(a) {
            this.underlyingType = a;
        }
        return Object.defineProperty(a.prototype, "color", {
            get: function () {
                return f(this.underlyingType, n.Color);
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(a.prototype, "formatString", {
            get: function () {
                return f(this.underlyingType, n.FormatString);
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(a.prototype, "legendPosition", {
            get: function () {
                return f(this.underlyingType, n.LegendPosition);
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(a.prototype, "axisType", {
            get: function () {
                return f(this.underlyingType, n.AxisType);
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(a.prototype, "yAxisPosition", {
            get: function () {
                return f(this.underlyingType, n.YAxisPosition);
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(a.prototype, "axisStyle", {
            get: function () {
                return f(this.underlyingType, n.AxisStyle);
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(a.prototype, "alignment", {
            get: function () {
                return f(this.underlyingType, n.Alignment);
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(a.prototype, "labelDisplayUnits", {
            get: function () {
                return f(this.underlyingType, n.LabelDisplayUnits);
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(a.prototype, "labelPosition", {
            get: function () {
                return f(this.underlyingType, n.LabelPosition);
            },
            enumerable: !0,
            configurable: !0
        }), a;
    }();
    a.FormattingType = l, function (a) {
        a[a.Null = 0] = "Null", a[a.Text = 1] = "Text", a[a.Decimal = 2] = "Decimal", a[a.Double = 3] = "Double",
        a[a.Integer = 4] = "Integer", a[a.Boolean = 5] = "Boolean", a[a.Date = 6] = "Date",
        a[a.DateTime = 7] = "DateTime", a[a.DateTimeZone = 8] = "DateTimeZone", a[a.Time = 9] = "Time",
        a[a.Duration = 10] = "Duration", a[a.Binary = 11] = "Binary", a[a.None = 12] = "None";
    }(a.PrimitiveType || (a.PrimitiveType = {}));
    var m = a.PrimitiveType;
    !function (a) {
        a[a.Numeric = 256] = "Numeric", a[a.Temporal = 512] = "Temporal", a[a.Geography = 1024] = "Geography",
        a[a.Miscellaneous = 2048] = "Miscellaneous", a[a.Formatting = 4096] = "Formatting",
        a[a.Null = 0] = "Null", a[a.Text = 1] = "Text", a[a.Decimal = 2 | a.Numeric] = "Decimal",
        a[a.Double = 3 | a.Numeric] = "Double", a[a.Integer = 4 | a.Numeric] = "Integer",
        a[a.Boolean = 5] = "Boolean", a[a.Date = 6 | a.Temporal] = "Date", a[a.DateTime = 7 | a.Temporal] = "DateTime",
        a[a.DateTimeZone = 8 | a.Temporal] = "DateTimeZone", a[a.Time = 9 | a.Temporal] = "Time",
        a[a.Duration = 10] = "Duration", a[a.Binary = 11] = "Binary", a[a.None = 12] = "None",
        a[a.Year = 65536 | a.Temporal] = "Year", a[a.Year_Text = a.Year | a.Text] = "Year_Text",
        a[a.Year_Integer = a.Year | a.Integer] = "Year_Integer", a[a.Year_Date = a.Year | a.Date] = "Year_Date",
        a[a.Year_DateTime = a.Year | a.DateTime] = "Year_DateTime", a[a.Month = a.Temporal | 2 << 16] = "Month",
        a[a.Month_Text = a.Month | a.Text] = "Month_Text", a[a.Month_Integer = a.Month | a.Integer] = "Month_Integer",
        a[a.Month_Date = a.Month | a.Date] = "Month_Date", a[a.Month_DateTime = a.Month | a.DateTime] = "Month_DateTime",
        a[a.Address = a.Text | a.Geography | 6553600] = "Address", a[a.City = a.Text | a.Geography | 6619136] = "City",
        a[a.Continent = a.Text | a.Geography | 6684672] = "Continent", a[a.Country = a.Text | a.Geography | 6750208] = "Country",
        a[a.County = a.Text | a.Geography | 6815744] = "County", a[a.Region = a.Text | a.Geography | 6881280] = "Region",
        a[a.PostalCode = 6946816 | a.Geography] = "PostalCode", a[a.PostalCode_Text = a.PostalCode | a.Text] = "PostalCode_Text",
        a[a.PostalCode_Integer = a.PostalCode | a.Integer] = "PostalCode_Integer", a[a.StateOrProvince = a.Text | a.Geography | 7012352] = "StateOrProvince",
        a[a.Place = a.Text | a.Geography | 7077888] = "Place", a[a.Latitude = 7143424 | a.Geography] = "Latitude",
        a[a.Latitude_Decimal = a.Latitude | a.Decimal] = "Latitude_Decimal", a[a.Latitude_Double = a.Latitude | a.Double] = "Latitude_Double",
        a[a.Longitude = 7208960 | a.Geography] = "Longitude", a[a.Longitude_Decimal = a.Longitude | a.Decimal] = "Longitude_Decimal",
        a[a.Longitude_Double = a.Longitude | a.Double] = "Longitude_Double", a[a.Image = a.Binary | a.Miscellaneous | 200 << 16] = "Image",
        a[a.ImageUrl = a.Text | a.Miscellaneous | 201 << 16] = "ImageUrl", a[a.WebUrl = a.Text | a.Miscellaneous | 202 << 16] = "WebUrl",
        a[a.Color = a.Text | a.Formatting | 300 << 16] = "Color", a[a.FormatString = a.Text | a.Formatting | 301 << 16] = "FormatString",
        a[a.LegendPosition = a.Text | a.Formatting | 302 << 16] = "LegendPosition", a[a.AxisType = a.Text | a.Formatting | 303 << 16] = "AxisType",
        a[a.YAxisPosition = a.Text | a.Formatting | 304 << 16] = "YAxisPosition", a[a.AxisStyle = a.Text | a.Formatting | 305 << 16] = "AxisStyle",
        a[a.Alignment = a.Text | a.Formatting | 306 << 16] = "Alignment", a[a.LabelDisplayUnits = a.Text | a.Formatting | 307 << 16] = "LabelDisplayUnits",
        a[a.LabelPosition = a.Text | a.Formatting | 308 << 16] = "LabelPosition";
    }(a.ExtendedType || (a.ExtendedType = {}));
    var n = a.ExtendedType, o = 255, p = 65535, q = 4294901760;
}(powerbi || (powerbi = {}));

var powerbi;

!function (a) {
    var b;
    !function (b) {
        var c;
        !function (b) {
            var c = "Basic " + btoa(":Y0WB2f1urF4djkQzlvn0Jd6pcg/Y03fofJTGjlGMx8c="), d = function () {
                function b(a, b) {
                    this.cachedResults = {}, this.promiseFactory = a.promiseFactory(), this.httpService = b;
                }
                return b.prototype.execute = function (b) {
                    var d = b.command.searchKey;
                    if (d) {
                        var e = this.promiseFactory.defer(), f = this.cachedResults;
                        return b.allowCache && d in f ? e.resolve(f[d]) : this.httpService.get("https://api.datamarket.azure.com/Bing/Search/News?$format=json&NewsSortBy=%27Date%27&Query=%27" + encodeURIComponent(d) + "%27", {
                            headers: {
                                Authorization: c
                            },
                            responseType: "json"
                        }).then(function (a) {
                            var b = a.data.d.results;
                            f[d] = b, e.resolve(b);
                        }, function () {
                            return e.reject();
                        }), a.RejectablePromise(e);
                    }
                }, b;
            }();
            b.BingNewsDataProvider = d;
        }(c = b.bingNews || (b.bingNews = {}));
    }(b = a.data || (a.data = {}));
}(powerbi || (powerbi = {}));

var powerbi;

!function (a) {
    var b;
    !function (a) {
        var b = function () {
            function a() { }
            return a.prototype.findProperty = function (a, b) {
                var c = this.entities.withName(a);
                return c ? c.properties.withName(b) : void 0;
            }, a;
        }();
        a.ConceptualSchema = b, function (a) {
            a[a.Queryable = 0] = "Queryable", a[a.Error = 1] = "Error";
        }(a.ConceptualQueryableState || (a.ConceptualQueryableState = {}));
        a.ConceptualQueryableState;
        !function (a) {
            a[a.Column = 0] = "Column", a[a.Measure = 1] = "Measure", a[a.Kpi = 2] = "Kpi";
        }(a.ConceptualPropertyKind || (a.ConceptualPropertyKind = {}));
        a.ConceptualPropertyKind;
        !function (a) {
            a[a.Default = 0] = "Default", a[a.None = 1] = "None", a[a.Sum = 2] = "Sum", a[a.Count = 3] = "Count",
            a[a.Min = 4] = "Min", a[a.Max = 5] = "Max", a[a.Average = 6] = "Average", a[a.DistinctCount = 7] = "DistinctCount";
        }(a.ConceptualDefaultAggregate || (a.ConceptualDefaultAggregate = {}));
        a.ConceptualDefaultAggregate;
        !function (a) {
            a[a.None = 0] = "None", a[a.Address = 1] = "Address", a[a.City = 2] = "City", a[a.Company = 3] = "Company",
            a[a.Continent = 4] = "Continent", a[a.Country = 5] = "Country", a[a.County = 6] = "County",
            a[a.Date = 7] = "Date", a[a.Image = 8] = "Image", a[a.ImageUrl = 9] = "ImageUrl",
            a[a.Latitude = 10] = "Latitude", a[a.Longitude = 11] = "Longitude", a[a.Organization = 12] = "Organization",
            a[a.Place = 13] = "Place", a[a.PostalCode = 14] = "PostalCode", a[a.Product = 15] = "Product",
            a[a.StateOrProvince = 16] = "StateOrProvince", a[a.WebUrl = 17] = "WebUrl";
        }(a.ConceptualDataCategory || (a.ConceptualDataCategory = {}));
        a.ConceptualDataCategory;
    }(b = a.data || (a.data = {}));
}(powerbi || (powerbi = {}));

var powerbi;

!function (a) {
    var b;
    !function (a) {
        !function (a) {
            a[a.Version0 = 0] = "Version0", a[a.Version1 = 1] = "Version1";
        }(a.DataShapeBindingVersions || (a.DataShapeBindingVersions = {}));
        a.DataShapeBindingVersions;
        !function (a) {
            a[a.Top = 0] = "Top", a[a.First = 1] = "First", a[a.Last = 2] = "Last", a[a.Sample = 3] = "Sample",
            a[a.Bottom = 4] = "Bottom";
        }(a.DataShapeBindingLimitType || (a.DataShapeBindingLimitType = {}));
        a.DataShapeBindingLimitType;
        !function (a) {
            a[a.None = 0] = "None", a[a.Before = 1] = "Before", a[a.After = 2] = "After";
        }(a.SubtotalType || (a.SubtotalType = {}));
        a.SubtotalType;
    }(b = a.data || (a.data = {}));
}(powerbi || (powerbi = {}));

var powerbi;

!function (a) {
    var b;
    !function (a) {
        var b = function () {
            function a(a) {
                this.schemas = a.schemas, a.links && (this.links = a.links);
            }
            return a.prototype.schema = function (a) {
                return this.schemas[a];
            }, a;
        }();
        a.FederatedConceptualSchema = b;
    }(b = a.data || (a.data = {}));
}(powerbi || (powerbi = {}));

var powerbi;

!function (a) {
    var b;
    !function (b) {
        var c;
        !function (c) {
            function d(a, c) {
                if (!l.isUndefinedOrEmpty(a)) {
                    for (var d, e = 0, f = a.length; f > e; e++) {
                        var g = a[e], h = g.data, i = void 0;
                        if (h && h.length) for (var j = 0, k = h.length; k > j; j++) {
                            var m = g.data[j].expr;
                            m && (i = i ? b.SQExprBuilder.and(i, m) : m);
                        }
                        i && (d = d ? b.SQExprBuilder.or(d, i) : i);
                    }
                    return d && c && (d = b.SQExprBuilder.not(d)), b.SemanticFilter.fromSQExpr(d);
                }
            }
            function e(c, d) {
                var e = c.data;
                if (e.length !== d.length) return !1;
                for (var f = 0, g = e.length; g > f; f++) {
                    var h = c.data[f], i = h;
                    if (i.expr) {
                        if (!a.DataViewScopeIdentity.equals(i, d[f])) return !1;
                    } else if (!b.DataViewScopeWildcard.matches(h, d[f])) return !1;
                }
                return !0;
            }
            function f(a, c) {
                var d = a.data, e = d.length;
                if (e !== c.length) return !1;
                for (var f = 0; e > f; f++) {
                    var g, h = a.data[f];
                    if (g = h.expr ? b.ScopeIdentityKeyExtractor.run(h.expr) : h.exprs, g && !b.SQExprUtil.sequenceEqual(c[f], g)) return !1;
                }
                return !0;
            }
            function g(a, b) {
                return a = a || null, b = b || null, a === b ? !0 : !a != !b ? !1 : a.id !== b.id ? !1 : a.metadata !== b.metadata ? !1 : h(a.data, b.data) ? !0 : !1;
            }
            function h(a, b) {
                if (a = a || null, b = b || null, a === b) return !0;
                if (!a != !b) return !1;
                if (a.length !== b.length) return !1;
                for (var c = 0, d = a.length; d > c; c++) if (!i(a[c], b[c])) return !1;
                return !0;
            }
            function i(b, c) {
                return !b.expr && c.expr ? !1 : a.DataViewScopeIdentity.equals(b, c);
            }
            function j(a) {
                var b = {};
                if (a.data) {
                    for (var c = [], d = 0, e = a.data.length; e > d; d++) c.push(a.data[d].key);
                    b.data = c;
                }
                return a.metadata && (b.metadata = a.metadata), a.id && (b.id = a.id), JSON.stringify(b);
            }
            function k(a) {
                var b = a.data;
                if (!b) return !1;
                for (var c = 0, d = b.length; d > c; c++) {
                    var e = b[c];
                    if (e.exprs) return !0;
                }
                return !1;
            }
            var l = jsCommon.ArrayExtensions;
            c.filterFromSelector = d, c.matchesData = e, c.matchesKeys = f, c.equals = g, c.getKey = j,
            c.containsWildcard = k;
        }(c = b.Selector || (b.Selector = {}));
    }(b = a.data || (a.data = {}));
}(powerbi || (powerbi = {}));

var powerbi;

!function (a) {
    var b;
    !function (a) {
        !function (a) {
            a[a.ResourceCodeReference = 0] = "ResourceCodeReference", a[a.EmbeddedString = 1] = "EmbeddedString";
        }(a.PowerBIErrorResourceType || (a.PowerBIErrorResourceType = {}));
        a.PowerBIErrorResourceType;
        !function (a) {
            a[a.GeneralError = 0] = "GeneralError", a[a.CsdlFetching = 1] = "CsdlFetching",
            a[a.CsdlConvertXmlToConceptualSchema = 2] = "CsdlConvertXmlToConceptualSchema",
            a[a.CsdlCreateClientSchema = 3] = "CsdlCreateClientSchema", a[a.ExecuteSemanticQueryError = 4] = "ExecuteSemanticQueryError",
            a[a.ExecuteSemanticQueryInvalidStreamFormat = 5] = "ExecuteSemanticQueryInvalidStreamFormat";
        }(a.ServiceErrorStatusCode || (a.ServiceErrorStatusCode = {}));
        var b = (a.ServiceErrorStatusCode, function () {
            function a(a) {
                this.m_serviceError = a;
            }
            return Object.defineProperty(a.prototype, "code", {
                get: function () {
                    return a.codeName;
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(a.prototype, "ignorable", {
                get: function () {
                    return !1;
                },
                enumerable: !0,
                configurable: !0
            }), a.prototype.getDetails = function (a) {
                var b = c.GetDetailsFromServerErrorStatusCode(a, this.m_serviceError.statusCode);
                return c.addAdditionalInfo(b, this.m_serviceError.errorDetails, a), b;
            }, a.codeName = "ServiceErrorToClientError", a;
        }());
        a.ServiceErrorToClientError = b;
        var c = function () {
            function a() { }
            return a.addAdditionalInfo = function (b, c, d) {
                if (c) for (var e = 0; e < c.length; e++) {
                    var f = c[e], g = {
                        errorInfoKey: d.get(a.serverErrorPrefix + f.code),
                        errorInfoValue: 0 === f.detail.type ? d.get(a.serverErrorPrefix + f.detail.value) : f.detail.value
                    };
                    b.additionalErrorInfo.push(g);
                }
                return b;
            }, a.GetDetailsFromServerErrorStatusCode = function (a, b) {
                var c = "", d = "", e = "";
                switch (b) {
                    case 2:
                        c = a.get("ServiceError_ModelCannotLoad"), d = a.get("ServiceError_ModelConvertFailureKey"),
                        e = a.get("ServiceError_ModelConvertFailureValue");
                        break;

                    case 3:
                        c = a.get("ServiceError_ModelCannotLoad"), d = a.get("ServiceError_ModelCreationFailureKey"),
                        e = a.get("ServiceError_ModelCreationFailureValue");
                        break;

                    case 1:
                        c = a.get("ServiceError_ModelCannotLoad"), d = a.get("ServiceError_ModelFetchingFailureKey"),
                        e = a.get("ServiceError_ModelFetchingFailureValue");
                        break;

                    case 4:
                        c = a.get("ServiceError_CannotLoadVisual"), d = a.get("ServiceError_ExecuteSemanticQueryErrorKey"),
                        e = a.get("ServiceError_ExecuteSemanticQueryErrorValue");
                        break;

                    case 5:
                        c = a.get("ServiceError_CannotLoadVisual"), d = a.get("ServiceError_ExecuteSemanticQueryInvalidStreamFormatKey"),
                        e = a.get("ServiceError_ExecuteSemanticQueryInvalidStreamFormatValue");
                        break;

                    case 0:
                    default:
                        c = a.get("ServiceError_GeneralError"), d = a.get("ServiceError_GeneralErrorKey"),
                        e = a.get("ServiceError_GeneralErrorValue");
                }
                var f = [];
                f.push({
                    errorInfoKey: d,
                    errorInfoValue: e
                });
                var g = {
                    message: c,
                    additionalErrorInfo: f
                };
                return g;
            }, a.serverErrorPrefix = "ServerError_", a;
        }();
        a.PowerBIErrorDetailHelper = c;
    }(b = a.data || (a.data = {}));
}(powerbi || (powerbi = {}));

var powerbi;

!function (a) {
    var b;
    !function (a) {
        !function (a) {
            a[a.Day = 0] = "Day", a[a.Week = 1] = "Week", a[a.Month = 2] = "Month", a[a.Year = 3] = "Year",
            a[a.Decade = 4] = "Decade", a[a.Second = 5] = "Second", a[a.Minute = 6] = "Minute",
            a[a.Hour = 7] = "Hour";
        }(a.TimeUnit || (a.TimeUnit = {}));
        a.TimeUnit;
        !function (a) {
            a[a.Sum = 0] = "Sum", a[a.Avg = 1] = "Avg", a[a.Count = 2] = "Count", a[a.Min = 3] = "Min",
            a[a.Max = 4] = "Max", a[a.CountNonNull = 5] = "CountNonNull";
        }(a.QueryAggregateFunction || (a.QueryAggregateFunction = {}));
        a.QueryAggregateFunction;
        !function (a) {
            a[a.Ascending = 1] = "Ascending", a[a.Descending = 2] = "Descending";
        }(a.QuerySortDirection || (a.QuerySortDirection = {}));
        a.QuerySortDirection;
        !function (a) {
            a[a.Equal = 0] = "Equal", a[a.GreaterThan = 1] = "GreaterThan", a[a.GreaterThanOrEqual = 2] = "GreaterThanOrEqual",
            a[a.LessThan = 3] = "LessThan", a[a.LessThanOrEqual = 4] = "LessThanOrEqual";
        }(a.QueryComparisonKind || (a.QueryComparisonKind = {}));
        a.QueryComparisonKind;
        !function (a) {
            a[a.None = 0] = "None", a[a.Number = 1] = "Number", a[a.Integer = a.Number + 2] = "Integer",
            a[a.DateTime = 4] = "DateTime", a[a.Time = 8] = "Time", a[a.Date = a.DateTime + 16] = "Date",
            a[a.Month = a.Integer + 32] = "Month", a[a.Year = a.Integer + 64] = "Year", a[a.YearAndMonth = 128] = "YearAndMonth",
            a[a.MonthAndDay = 256] = "MonthAndDay", a[a.Decade = a.Integer + 512] = "Decade",
            a[a.YearAndWeek = 1024] = "YearAndWeek", a[a.String = 2048] = "String", a[a.Boolean = 4096] = "Boolean",
            a[a.Table = 8192] = "Table", a[a.Range = 16384] = "Range";
        }(a.SemanticType || (a.SemanticType = {}));
        a.SemanticType;
        !function (a) {
            a[a.None = 0] = "None", a[a.Group = 1] = "Group", a[a.Measure = 2] = "Measure";
        }(a.SelectKind || (a.SelectKind = {}));
        a.SelectKind;
        !function (a) {
            a[a.Default = 0] = "Default", a[a.Period = 1] = "Period";
        }(a.FilterKind || (a.FilterKind = {}));
        a.FilterKind;
    }(b = a.data || (a.data = {}));
}(powerbi || (powerbi = {}));

var powerbi;

!function (a) {
    !function (a) {
        a[a.Default = 0] = "Default", a[a.Verbose = 1] = "Verbose", a[a.WholeUnits = 2] = "WholeUnits";
    }(a.DisplayUnitSystemType || (a.DisplayUnitSystemType = {}));
    a.DisplayUnitSystemType;
}(powerbi || (powerbi = {}));

var powerbi;

!function (a) {
    var b;
    !function (a) {
        !function (a) {
            a[a.None = 0] = "None", a[a.Before = 1] = "Before", a[a.After = 2] = "After";
        }(a.CompiledSubtotalType || (a.CompiledSubtotalType = {}));
        a.CompiledSubtotalType;
    }(b = a.data || (a.data = {}));
}(powerbi || (powerbi = {}));

var powerbi;

!function (a) {
    var b;
    !function (a) {
        function b(a) {
            for (var b = new d(a.queryDefn, a.queryProjections, a.schema), c = [], e = a.mappings, f = 0, g = e.length; g > f; f++) c.push(b.compileMapping(e[f], a.objectDescriptors, a.objectDefinitions));
            return c;
        }
        var c = jsCommon.UnionExtensions;
        a.compileDataView = b;
        var d = function () {
            function b(a, b, c) {
                this.queryDefn = a, this.queryProjections = b, this.schema = c;
            }
            return b.prototype.compileMapping = function (a, b, c) {
                var d = this.compileMetadata(b, c), e = {
                    metadata: d
                };
                return a.categorical && (e.categorical = this.compileCategorical(a.categorical)),
                a.table && (e.table = this.compileTable(a.table)), a.single && (e.single = this.compileSingle(a.single)),
                a.tree && (e.tree = this.compileTree(a.tree)), a.matrix && (e.matrix = this.compileMatrix(a.matrix)),
                e;
            }, b.prototype.compileMetadata = function (a, b) {
                var c = {}, d = this.evaluateConstantMetadataObjects(a, b);
                return d && (c.objects = d), c;
            }, b.prototype.evaluateConstantMetadataObjects = function (b, c) {
                if (c && b) {
                    var d = a.DataViewObjectEvaluationUtils.groupObjectsBySelector(c);
                    return d.metadataOnce ? a.DataViewObjectEvaluationUtils.evaluateDataViewObjects(b, d.metadataOnce.objects) : void 0;
                }
            }, b.prototype.compileCategorical = function (a) {
                var b = {};
                a.categories && (b.categories = this.compileRoleMappingWithReduction(a.categories));
                var d = a.values;
                if (d) {
                    var e = this.compileGrouped(d), f = this.compileList(d), g = this.compileRoleMapping(d);
                    b.values = c.mergeUnionType(e, f, g);
                }
                return b;
            }, b.prototype.compileTable = function (a) {
                var b = this.compileRoleMappingWithReduction(a.rows), d = this.compileListWithReduction(a.rows), e = c.mergeUnionType(b, d);
                return {
                    rows: e
                };
            }, b.prototype.compileSingle = function (a) {
                var b = this.compileRole(a.role);
                return {
                    role: b
                };
            }, b.prototype.compileTree = function (a) {
                var b = {};
                return a.nodes && (b.nodes = this.compileGroupingRoleMapping(a.nodes)), a.values && (b.values = this.compileValuesRoleMapping(a.values)),
                b;
            }, b.prototype.compileMatrix = function (a) {
                var b = {};
                return a.rows && (b.rows = this.compileForWithReduction(a.rows)), a.columns && (b.columns = this.compileForWithReduction(a.columns)),
                a.values && (b.values = this.compileFor(a.values)), b;
            }, b.prototype.compileGroupingRoleMapping = function (a) {
                if (a.role) {
                    var b = this.compileRole(a.role);
                    return {
                        role: b
                    };
                }
            }, b.prototype.compileValuesRoleMapping = function (a) {
                var b = this;
                if (a.roles) {
                    var c = a.roles.map(function (a) {
                        return b.compileRole(a);
                    });
                    return {
                        roles: c
                    };
                }
            }, b.prototype.compileListWithReduction = function (a) {
                var b = this.compileList(a);
                if (b) return a.dataReductionAlgorithm && (b.dataReductionAlgorithm = this.compileReduction(a.dataReductionAlgorithm)),
                b;
            }, b.prototype.compileList = function (a) {
                var b = this;
                if (a.select) {
                    var c = a.select.map(function (a) {
                        return b.compileRoleMapping(a);
                    });
                    return {
                        select: c
                    };
                }
            }, b.prototype.compileGrouped = function (a) {
                var b = this;
                if (a.group) {
                    var c = this.compileRole(a.group.by), d = a.group.select.map(function (a) {
                        return b.compileRoleMapping(a);
                    }), e = {
                        group: {
                            by: c,
                            select: d
                        }
                    };
                    return a.group.dataReductionAlgorithm && (e.group.dataReductionAlgorithm = this.compileReduction(a.group.dataReductionAlgorithm)),
                    e;
                }
            }, b.prototype.compileRoleMapping = function (a) {
                var b = this.compileBind(a), d = this.compileFor(a);
                return c.mergeUnionType(b, d);
            }, b.prototype.compileRoleMappingWithReduction = function (a) {
                var b = this.compileRoleMapping(a);
                if (b) return a.dataReductionAlgorithm && (b.dataReductionAlgorithm = this.compileReduction(a.dataReductionAlgorithm)),
                b;
            }, b.prototype.compileBind = function (a) {
                if (a.bind) {
                    var b = this.compileRole(a.bind.to);
                    return {
                        bind: {
                            to: b
                        }
                    };
                }
            }, b.prototype.compileForWithReduction = function (a) {
                var b = this.compileFor(a);
                if (b) return a.dataReductionAlgorithm && (b.dataReductionAlgorithm = this.compileReduction(a.dataReductionAlgorithm)),
                b;
            }, b.prototype.compileFor = function (a) {
                if (a["for"]) {
                    var b = this.compileRole(a["for"]["in"]);
                    return {
                        "for": {
                            "in": b
                        }
                    };
                }
            }, b.prototype.compileRole = function (a) {
                var b, c = this, d = this.queryDefn.select(), e = this.queryProjections[a];
                return jsCommon.ArrayExtensions.isUndefinedOrEmpty(e) || (b = e.map(function (a) {
                    return c.createDataViewRoleItem(d.withName(a.queryRef));
                })), {
                    role: a,
                    items: b
                };
            }, b.prototype.createDataViewRoleItem = function (a) {
                var b = {}, c = a.expr.getMetadata(this.schema);
                return c && (b.type = c.type), b;
            }, b.prototype.compileReduction = function (a) {
                if (a) {
                    var b = {};
                    return a.top && (b.top = {}, a.top.count && (b.top.count = a.top.count)), a.bottom && (b.bottom = {},
                    a.bottom.count && (b.bottom.count = a.bottom.count)), a.sample && (b.sample = {},
                    a.sample.count && (b.sample.count = a.sample.count)), a.window && (b.window = {},
                    a.window.count && (b.window.count = a.window.count)), b;
                }
            }, b;
        }();
    }(b = a.data || (a.data = {}));
}(powerbi || (powerbi = {}));

var powerbi;

!function (a) {
    var b;
    !function (a) {
        var b;
        !function (b) {
            function c(b, c, d) {
                var e = b[c];
                e || (b[c] = e = []);
                for (var f = 0, g = e.length; g > f; f++) {
                    var h = e[f];
                    if (a.Selector.equals(h.selector, d)) return h;
                }
                var i = {
                    selector: d,
                    properties: {}
                };
                return e.push(i), i;
            }
            function d(b, c, d) {
                var e = b[c.objectName];
                if (e) for (var f = 0, g = e.length; g > f; f++) {
                    var h = e[f];
                    if (a.Selector.equals(h.selector, d)) return h.properties[c.propertyName];
                }
            }
            b.ensure = c, b.getValue = d;
        }(b = a.DataViewObjectDefinitions || (a.DataViewObjectDefinitions = {}));
    }(b = a.data || (a.data = {}));
}(powerbi || (powerbi = {}));

var powerbi;

!function (a) {
    var b;
    !function (b) {
        var c;
        !function (b) {
            function c(b) {
                return e(b, function (b) {
                    var c = a.ValueType.fromDescriptor(b.type).formatting;
                    return c && c.formatString;
                });
            }
            function d(a) {
                return e(a, function (a) {
                    var b = a.type;
                    return b && !!b.filter;
                });
            }
            function e(a, b) {
                if (a) for (var c in a) {
                    var d = a[c].properties;
                    for (var e in d) if (b(d[e])) return {
                        objectName: c,
                        propertyName: e
                    };
                }
            }
            b.findFormatString = c, b.findFilterOutput = d;
        }(c = b.DataViewObjectDescriptors || (b.DataViewObjectDescriptors = {}));
    }(b = a.data || (a.data = {}));
}(powerbi || (powerbi = {}));

var powerbi;

!function (a) {
    var b;
    !function (a) {
        var b;
        !function (b) {
            function c(b, c) {
                for (var d, e = 0, f = c.length; f > e; e++) {
                    var g = c[e], h = g.name, i = a.DataViewObjectEvaluator.run(b[h], g.properties);
                    i && (d || (d = {}), d[h] = i);
                }
                return d;
            }
            function d(a) {
                var b = {
                    data: []
                };
                if (a) for (var c in a) for (var d = a[c], f = 0, g = d.length; g > f; f++) {
                    var h = d[f];
                    e(b, h.selector).objects.push({
                        name: c,
                        properties: h.properties
                    });
                }
                return b;
            }
            function e(b, c) {
                if (!c) return b.metadataOnce || (b.metadataOnce = {
                    objects: []
                }), b.metadataOnce;
                var d;
                c.data ? d = b.data : c.metadata ? (b.metadata || (b.metadata = []), d = b.metadata) : c.id && (b.userDefined || (b.userDefined = []),
                d = b.userDefined);
                for (var e = 0, f = d.length; f > e; e++) {
                    var g = d[e];
                    if (a.Selector.equals(c, g.selector)) return g;
                }
                var g = {
                    selector: c,
                    objects: []
                };
                return d.push(g), g;
            }
            function f(b, c, d, e) {
                var f = a.DataViewObjectDescriptors.findFormatString(c);
                if (f) for (var i = 0, j = e.length; j > i; i++) {
                    var k = e[i];
                    k && h(b, f, k.queryName, k.format || g(d, i));
                }
            }
            function g(a, b) {
                for (var c = 0, d = a.length; d > c; c++) {
                    var e = a[c];
                    if (e && e.index === b) return e.format;
                }
            }
            function h(b, c, d, e) {
                if (e) {
                    var f = b.metadata;
                    f || (f = b.metadata = []);
                    var g, h = {
                        metadata: d
                    }, k = i(f, h);
                    if (k) {
                        if (g = k.objects, j(g, c)) return;
                    } else g = [], k = {
                        selector: h,
                        objects: g
                    }, f.push(k);
                    var l = {
                        name: c.objectName,
                        properties: {}
                    };
                    l.properties[c.propertyName] = a.SQExprBuilder.text(e), g.push(l);
                }
            }
            function i(b, c) {
                for (var d = 0, e = b.length; e > d; d++) {
                    var f = b[d];
                    if (a.Selector.equals(f.selector, c)) return f;
                }
            }
            function j(a, b) {
                for (var c = 0, d = a.length; d > c; c++) {
                    var e = a[c];
                    if (e.name === b.objectName && e.properties[b.propertyName]) return !0;
                }
                return !1;
            }
            b.evaluateDataViewObjects = c, b.groupObjectsBySelector = d, b.addDefaultFormatString = f;
        }(b = a.DataViewObjectEvaluationUtils || (a.DataViewObjectEvaluationUtils = {}));
    }(b = a.data || (a.data = {}));
}(powerbi || (powerbi = {}));

var powerbi;

!function (a) {
    var b;
    !function (b) {
        var c;
        !function (c) {
            function d(a, b) {
                if (a) {
                    var c, d = a.properties;
                    for (var f in b) {
                        var g = b[f], h = d[f];
                        if (h) {
                            var i = e(h, g);
                            void 0 !== i && (c || (c = {}), c[f] = i);
                        }
                    }
                    return c;
                }
            }
            function e(c, d) {
                var e = i(d, a.ValueType.fromDescriptor(c.type));
                if (void 0 !== e || d instanceof b.RuleEvaluation) return e;
                var h = c.type, j = f(d, h);
                if (j) return j;
                var k = g(d, h);
                return k ? k : d;
            }
            function f(b, c) {
                var d = c.fill;
                if (d) return d && d.solid && d.solid.color && b.solid ? {
                    solid: {
                        color: i(b.solid.color, a.ValueType.fromExtendedType(a.ExtendedType.Color))
                    }
                } : void 0;
            }
            function g(a, b) {
                if (b.fillRule) {
                    if (a.linearGradient2) {
                        var c = a.linearGradient2;
                        return {
                            linearGradient2: {
                                min: h(c.min),
                                max: h(c.max)
                            }
                        };
                    }
                    if (a.linearGradient3) {
                        var d = a.linearGradient3;
                        return {
                            linearGradient3: {
                                min: h(d.min),
                                mid: h(d.mid),
                                max: h(d.max)
                            }
                        };
                    }
                }
            }
            function h(a) {
                var b = {
                    color: i(a.color, j)
                }, c = i(a.value, k);
                return c && (b.value = c), b;
            }
            function i(a, c) {
                return a instanceof b.SQExpr ? l.evaluate(a, c) : a instanceof b.RuleEvaluation ? a.evaluate() : void 0;
            }
            var j = a.ValueType.fromDescriptor({
                formatting: {
                    color: !0
                }
            }), k = a.ValueType.fromDescriptor({
                numeric: !0
            });
            c.run = d, c.evaluateProperty = e;
            var l = function (a) {
                function b() {
                    a.apply(this, arguments);
                }
                return __extends(b, a), b.evaluate = function (a, c) {
                    return null != a ? a.accept(b.instance, c) : void 0;
                }, b.prototype.visitConstant = function (a) {
                    return a.value;
                }, b.instance = new b(), b;
            }(b.DefaultSQExprVisitorWithArg);
        }(c = b.DataViewObjectEvaluator || (b.DataViewObjectEvaluator = {}));
    }(b = a.data || (a.data = {}));
}(powerbi || (powerbi = {}));

var powerbi;

!function (a) {
    var b;
    !function (a) {
        function b(a, b, c) {
            if (!a) return c;
            var d = a[b.objectName];
            return d && void 0 !== d[b.propertyName] ? d[b.propertyName] : c;
        }
        function c(a, c) {
            var d = b(a, c);
            if (d && d.solid) return d.solid.color;
        }
        a.getValue = b, a.getFillColor = c;
    }(b = a.DataViewObjects || (a.DataViewObjects = {}));
}(powerbi || (powerbi = {}));

var powerbi;

!function (a) {
    var b;
    !function (a) {
        function b(a) {
            return function (b) {
                return b.get(a);
            };
        }
        a.createDisplayNameGetter = b;
    }(b = a.data || (a.data = {}));
}(powerbi || (powerbi = {}));

var powerbi;

!function (a) {
    !function (a) {
        a[a.Year = 0] = "Year", a[a.Month = 1] = "Month", a[a.Week = 2] = "Week", a[a.Day = 3] = "Day",
        a[a.Hour = 4] = "Hour", a[a.Minute = 5] = "Minute", a[a.Second = 6] = "Second",
        a[a.Millisecond = 7] = "Millisecond";
    }(a.DateTimeUnit || (a.DateTimeUnit = {}));
    a.DateTimeUnit;
}(powerbi || (powerbi = {}));

var powerbi;

!function (a) {
    var b;
    !function (a) {
        function b(a) {
            return new e(a);
        }
        function c(a) {
            return a || "dsr";
        }
        a.createDataProviderFactory = b;
        var d, e = function () {
            function a(a) {
                this.plugins = a;
            }
            return a.prototype.getPlugin = function (a) {
                var b = this.plugins[c(a || "dsr")];
                if (b) return b;
            }, a;
        }();
        !function (a) {
            function b(a) {
                for (var b, d = 0, e = a.length; e > d; d++) {
                    var f = c(a[d].type);
                    if (b && b !== f) return;
                    b = f;
                }
                return b;
            }
            a.findType = b;
        }(d = a.DataProviderUtils || (a.DataProviderUtils = {}));
    }(b = a.data || (a.data = {}));
}(powerbi || (powerbi = {}));

var powerbi;

!function (a) {
    var b;
    !function (b) {
        function c(a, b) {
            if (!b || 0 === b.length) return {
                dataView: a,
                isValid: !0
            };
            if (a) {
                var c = b[0];
                if (j(a, c)) return {
                    dataView: a,
                    isValid: !0
                };
                if (c.categorical) return d(a, c);
                if (c.tree) return f(a, c.tree);
                if (c.single) return e(a, c.single);
                if (c.table) return g(a, c.table);
            }
            return {
                isValid: !1
            };
        }
        function d(b, c) {
            var d = c.categorical, e = b.categorical;
            if (!e) return {
                isValid: !1
            };
            var f;
            if (d.rowCount && (f = d.rowCount.supported, f && f.max)) {
                var g, h = e.categories, i = f.max;
                if (h) for (var j = 0, l = h.length; l > j; j++) {
                    var m = h[j], n = m.values.length;
                    if (void 0 !== i && n > i) {
                        var o = s.range(m.values, 0, i - 1);
                        g = g || {
                            categories: []
                        }, g.categories.push({
                            source: m.source,
                            values: o
                        });
                    }
                }
                if (e.values && e.values.length > 0 && i && (n || (n = e.values[0].values.length),
                void 0 !== i && n > i)) {
                    g = g || {}, g.values = a.data.DataViewTransform.createValueColumns();
                    for (var j = 0, l = e.values.length; l > j; j++) {
                        var p = e.values[j], q = {
                            source: p.source,
                            values: s.range(p.values, 0, i - 1)
                        };
                        void 0 !== p.min && (q.min = p.min), void 0 !== p.max && (q.max = p.max), void 0 !== p.subtotal && (q.subtotal = p.subtotal),
                        g.values.push(q);
                    }
                }
                g && (b = {
                    metadata: b.metadata,
                    categorical: g
                });
            }
            return k(b, c) ? {
                dataView: b,
                isValid: !0
            } : null;
        }
        function e(a, b) {
            return a.single ? {
                dataView: a,
                isValid: !0
            } : {
                isValid: !1
            };
        }
        function f(a, b) {
            var c = a.metadata;
            return o(h(c.columns), b.depth) ? {
                dataView: a,
                isValid: !0
            } : {
                isValid: !1
            };
        }
        function g(a, b) {
            return a.table ? {
                dataView: a,
                isValid: !0
            } : {
                isValid: !1
            };
        }
        function h(a) {
            for (var b = 0, c = 0, d = a.length; d > c; c++) a[c].isMeasure || ++b;
            return b;
        }
        function i(a) {
            for (var b = 0, c = 0, d = a.length; d > c; c++) a[c].isMeasure && ++b;
            return b;
        }
        function j(a, b, c) {
            return b && a ? b.categorical && !k(a, b.categorical, c) ? !1 : b.tree && !m(a, b.tree) ? !1 : b.single && !l(a.single, b.single) ? !1 : b.table && !n(a.table, b.table, c) ? !1 : !0 : !1;
        }
        function k(a, b, c) {
            var d = a.categorical;
            if (!d) return !1;
            if (b.rowCount) {
                var e = b.rowCount.supported;
                if (c && b.rowCount.preferred && (e = b.rowCount.preferred), e) {
                    var f = 0;
                    if (d.values && d.values.length ? f = d.values[0].values.length : d.categories && d.categories.length && (f = d.categories[0].values.length),
                    !o(f, e)) return !1;
                }
            }
            return !0;
        }
        function l(a, b) {
            return a ? !0 : !1;
        }
        function m(a, b) {
            var c = a.metadata;
            return o(h(c.columns), b.depth);
        }
        function n(a, b, c) {
            if (!a) return !1;
            if (b.rowCount) {
                var d = b.rowCount.supported;
                if (c && b.rowCount.preferred && (d = b.rowCount.preferred), d) {
                    var e = 0;
                    if (a.rows && a.rows.length && (e = a.rows.length), !o(e, d)) return !1;
                }
            }
            return !0;
        }
        function o(a, b) {
            return b ? void 0 !== b.min && b.min > a ? !1 : void 0 !== b.max && b.max < a ? !1 : !0 : 0 === a;
        }
        function p(a, b) {
            for (var c = [], d = 0, e = b.length; e > d; d++) {
                var f = b[d], g = f.conditions;
                if (g && g.length) for (var h = 0, i = g.length; i > h; h++) {
                    var j = g[h];
                    if (q(a, j)) {
                        c.push(f);
                        break;
                    }
                } else c.push(f);
            }
            return s.emptyToNull(c);
        }
        function q(a, b) {
            for (var c = Object.keys(b), d = 0, e = c.length; e > d; d++) {
                var f = c[d], g = b[f], h = r(f, a);
                if (!o(h, g)) return !1;
            }
            return !0;
        }
        function r(a, b) {
            var c = b[a];
            return c ? c.length : 0;
        }
        var s = jsCommon.ArrayExtensions;
        b.validateAndReshape = c, b.countGroups = h, b.countMeasures = i, b.supports = j,
        b.conforms = o, b.chooseDataViewMappings = p, b.getPropertyCount = r;
    }(b = a.DataViewAnalysis || (a.DataViewAnalysis = {}));
}(powerbi || (powerbi = {}));

var powerbi;

!function () { }(powerbi || (powerbi = {}));

var powerbi;

!function (a) {
    var b, c = jsCommon.ArrayExtensions;
    !function (b) {
        function e(a, b, c) {
            return a = a || null, b = b || null, a === b ? !0 : !a != !b ? !1 : d.SQExpr.equals(a.expr, b.expr, c);
        }
        function f(b, d) {
            if (!c.isUndefinedOrEmpty(b)) {
                for (var e, f = 0, g = b.length; g > f; f++) {
                    var h = b[f];
                    e = e ? a.data.SQExprBuilder.or(e, h.expr) : h.expr;
                }
                return e && d && (e = a.data.SQExprBuilder.not(e)), a.data.SemanticFilter.fromSQExpr(e);
            }
        }
        b.equals = e, b.filterFromIdentity = f;
    }(b = a.DataViewScopeIdentity || (a.DataViewScopeIdentity = {}));
    var d;
    !function (a) {
        function b(a) {
            return new d(a);
        }
        var c = jsCommon.Lazy;
        a.createDataViewScopeIdentity = b;
        var d = function () {
            function b(b) {
                this._expr = b, this._key = new c(function () {
                    return a.SQExprShortSerializer.serialize(b);
                });
            }
            return Object.defineProperty(b.prototype, "expr", {
                get: function () {
                    return this._expr;
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(b.prototype, "key", {
                get: function () {
                    return this._key.getValue();
                },
                enumerable: !0,
                configurable: !0
            }), b;
        }();
    }(d = a.data || (a.data = {}));
}(powerbi || (powerbi = {}));

var powerbi;

!function (a) {
    var b;
    !function (a) {
        var b, c = jsCommon.Lazy;
        !function (b) {
            function d(b, c) {
                var d = a.ScopeIdentityKeyExtractor.run(c.expr);
                return d ? a.SQExprUtil.sequenceEqual(b.exprs, d) : !1;
            }
            function e(a) {
                return new f(a);
            }
            b.matches = d, b.fromExprs = e;
            var f = function () {
                function b(b) {
                    this._exprs = b, this._key = new c(function () {
                        return a.SQExprShortSerializer.serializeArray(b);
                    });
                }
                return Object.defineProperty(b.prototype, "exprs", {
                    get: function () {
                        return this._exprs;
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(b.prototype, "key", {
                    get: function () {
                        return this._key.getValue();
                    },
                    enumerable: !0,
                    configurable: !0
                }), b;
            }();
        }(b = a.DataViewScopeWildcard || (a.DataViewScopeWildcard = {}));
    }(b = a.data || (a.data = {}));
}(powerbi || (powerbi = {}));

var powerbi;

!function (a) {
    var b;
    !function (b) {
        var c, d = a.Prototype.inherit, e = jsCommon.ArrayExtensions;
        !function (c) {
            function f(a) {
                var b = a.prototype, c = a.objectDescriptors, d = a.dataViewMappings, f = a.transforms, i = a.colorAllocatorFactory;
                if (!b) return g(c, f, i);
                if (!f) return [b];
                var j = f.splits;
                if (e.isUndefinedOrEmpty(j)) return [h(b, c, d, f, i)];
                for (var k = [], l = 0, m = j.length; m > l; l++) {
                    var n = h(b, c, d, f, i, j[l].selects);
                    k.push(n);
                }
                return k;
            }
            function g(a, b, c) {
                if (b && b.objects) {
                    var d = {
                        metadata: {
                            columns: []
                        }
                    };
                    return x(d, a, b.objects, b.selects, c), [d];
                }
                return [];
            }
            function h(a, b, c, e, f, g) {
                var h = d(a);
                return h.metadata = d(a.metadata), h = i(h, c, e.selects, e.projectionOrdering, g),
                x(h, b, e.objects, e.selects, f), h;
            }
            function i(a, b, c, d, e) {
                var f = [];
                if (c && (a.metadata.columns = j(a.metadata.columns, c, f)), a.categorical && (a.categorical = n(a.categorical, f, e),
                a = W(a, b)), a.matrix) {
                    var g = {
                        rowHierarchyRewritten: !1,
                        columnHierarchyRewritten: !1,
                        hierarchyTreesRewritten: !1
                    };
                    a.matrix = q(a.matrix, f, b, d, g), Y(a.matrix, b) && eb(a.matrix, g);
                }
                return a.table && (a.table = o(a.table, f, b, d)), a;
            }
            function j(a, b, c) {
                if (!b) return a;
                for (var e = d(a), f = 0, g = a.length; g > f; f++) {
                    var h = a[f], i = b[h.index];
                    if (i) {
                        var j = e[f] = d(h);
                        i.roles && (j.roles = i.roles), i.type && (j.type = i.type), j.format = k(i, j),
                        i.displayName && (j.name = i.displayName), i.queryName && (j.queryName = i.queryName),
                        c.push({
                            from: h,
                            to: j
                        });
                    }
                }
                return e;
            }
            function k(a, b) {
                if (a.format) return a.format;
                if (b.format) return b.format;
                var c = b.type;
                if (c) {
                    if (c.dateTime) return "d";
                    if (c.integer) return "g";
                    if (c.numeric) return "#,0.00";
                }
                return void 0;
            }
            function l(c, d) {
                if (c) {
                    d || (d = {});
                    for (var e in c) {
                        var f = c[e], g = e, h = f, i = "general";
                        switch (e) {
                            case "hasScalarCategoryAxis":
                                i = "categoryAxis", g = "axisType", h = b.SQExprBuilder.text(f ? a.axisType.scalar : a.axisType.categorical);
                                break;

                            case "Totals":
                                g = "totals", h = b.SQExprBuilder["boolean"](!!f);
                                break;

                            case "textboxSettings":
                                g = "paragraphs", f && f.paragraphs && (h = f.paragraphs);
                                break;

                            case "VisualType1":
                                g = "visualType1", h = b.SQExprBuilder.text(f);
                                break;

                            case "VisualType2":
                                g = "visualType2", h = b.SQExprBuilder.text(f);
                                break;

                            case "imageVisualSettings":
                                g = "imageUrl", f && f.imageUrl && (h = b.SQExprBuilder.text(f.imageUrl));
                                break;

                            default:
                                continue;
                        }
                        m(d, i, g, h);
                    }
                    return d;
                }
            }
            function m(a, b, c, d) {
                var e = a[b];
                void 0 === e && (e = a[b] = []);
                var f = e[0];
                void 0 === f && (f = e[0] = {
                    properties: {}
                }), f.properties[c] = d;
            }
            function n(b, c, e) {
                function f(a) {
                    var b = v(a.source, c);
                    if (b) {
                        var e = d(a);
                        return e.source = b, e;
                    }
                }
                var g = d(b), h = a.Prototype.overrideArray(b.categories, f);
                h && (g.categories = h);
                var i = a.Prototype.overrideArray(b.values, f);
                if (i) {
                    if (e) for (var j = i.length - 1; j >= 0; j--) e[i[j].source.index] || i.splice(j, 1);
                    if (i.source) {
                        var k = v(i.source, c);
                        k && (i.source = k);
                    }
                    g.values = i, U(i);
                }
                return g;
            }
            function o(b, c, e, f) {
                if (!e || 1 !== e.length || !e[0].table) return b;
                var g = d(b), h = function (a) {
                    return v(a, c);
                }, i = a.Prototype.overrideArray(b.columns, h);
                if (i && (g.columns = i), !f) return g;
                var j = p(f, c);
                if (!j) return g;
                for (var k = i.slice(0), l = Object.keys(j), m = 0, n = l.length; n > m; m++) {
                    var o = k[j[l[m]]];
                    m === i.length ? i.push(o) : i[m] = o;
                }
                var q = a.Prototype.overrideArray(g.rows, function (a) {
                    for (var b = [], c = 0, d = l.length; d > c; ++c) b[c] = a[j[l[c]]];
                    return b;
                });
                return q && (g.rows = q), g;
            }
            function p(a, b) {
                var c = Object.keys(a), d = c[0], f = b.map(function (a) {
                    return a.from.index;
                }), g = a[d];
                return e.sequenceEqual(f, g, function (a, b) {
                    return a === b;
                }) ? void 0 : t(f, g);
            }
            function q(b, c, e, f, g) {
                function h(a) {
                    return v(a, c);
                }
                function i(b) {
                    var c = null, d = a.Prototype.overrideArray(b.levels, function (b) {
                        var c = null, d = a.Prototype.overrideArray(b.sources, h);
                        return d && (c = w(c, b, function (a) {
                            return a.sources = d;
                        })), c;
                    });
                    return d && (c = w(c, b, function (a) {
                        return a.levels = d;
                    })), c;
                }
                if (!e || 1 !== e.length || !e[0].matrix) return b;
                var j = d(b), k = i(j.rows);
                k && (j.rows = k, g.rowHierarchyRewritten = !0);
                var l = i(j.columns);
                l && (j.columns = l, g.columnHierarchyRewritten = !0);
                var m = a.Prototype.overrideArray(j.valueSources, h);
                if (m && (j.valueSources = m, f && m.length > 1)) {
                    var n = l.levels.length;
                    if (n > 0) {
                        var o = s(e[0].matrix, f, m, c);
                        if (o) {
                            var p = Object.keys(o), q = p.length;
                            l.root = cb(l.root), 1 === n ? r(l.root, o) : u(l.root, n - 2, function (a) {
                                return r(a, o);
                            }), j.rows.root = db(j.rows.root, function (a) {
                                for (var b = {}, c = Object.keys(a.values).length / q, d = 0, e = c; e > d; d++) for (var f = d * q, g = 0; q > g; g++) b[f + g] = a.values[f + o[p[g]]];
                                a.values = b;
                            }), g.hierarchyTreesRewritten = !0;
                        }
                    }
                }
                return j;
            }
            function r(a, b) {
                for (var c = Object.keys(b), d = c.length, e = a.children, f = e.slice(0), g = 0, h = d; h > g; g++) {
                    var i = f[b[c[g]]];
                    g === e.length ? e.push(i) : e[g] = i;
                }
            }
            function s(a, b, c, d) {
                function f(a) {
                    for (var b = 0, d = c.length; d > b; b++) {
                        var e = c[b];
                        if (e === a.to) return a;
                    }
                }
                for (var g = a.values["for"]["in"], h = [], i = 0, j = d.length; j > i; i++) {
                    var k = d[i];
                    f(k) && h.push(k);
                }
                var l = b[g], m = h.map(function (a) {
                    return a.from.index;
                });
                return e.sequenceEqual(m, l, function (a, b) {
                    return a === b;
                }) ? void 0 : t(m, l);
            }
            function t(a, b) {
                for (var c = {}, d = 0, e = b.length; e > d; ++d) {
                    var f = b[d];
                    c[d] = a.indexOf(f);
                }
                return c;
            }
            function u(a, b, c) {
                if (a.level === b) return void c(a);
                var d = a.children;
                if (d && d.length > 0) for (var e = 0, f = d.length; f > e; e++) u(d[e], b, c);
            }
            function v(a, b) {
                for (var c = 0, d = b.length; d > c; c++) {
                    var e = b[c];
                    if (e.from === a) return e.to;
                }
            }
            function w(a, b, c) {
                return a || (a = d(b)), c && c(a), a;
            }
            function x(a, c, d, e, f) {
                if (c) {
                    var g = b.DataViewObjectEvaluationUtils.groupObjectsBySelector(d);
                    e && b.DataViewObjectEvaluationUtils.addDefaultFormatString(g, c, a.metadata.columns, e);
                    var h = g.metadataOnce, i = g.data;
                    h && y(a, c, h.objects, i, f);
                    var j = g.metadata;
                    if (j) for (var k = 0, l = j.length; l > k; k++) {
                        var m = j[k];
                        I(a, c, m.selector, m.objects);
                    }
                    for (var k = 0, l = i.length; l > k; k++) {
                        var n = i[k];
                        E(a, c, n.selector, n.rules, n.objects);
                    }
                    g.userDefined;
                }
            }
            function y(a, c, d, e, f) {
                var g = b.DataViewObjectEvaluationUtils.evaluateDataViewObjects(c, d);
                if (g) {
                    a.metadata.objects = g;
                    for (var h in g) {
                        var i = g[h], j = c[h];
                        for (var k in i) {
                            var l = j.properties[k], m = l.rule;
                            if (m) {
                                var n = z(a, f, m, h, i[k], l.type);
                                n && e.push(n);
                            }
                        }
                    }
                }
            }
            function z(a, b, c, d, e, f) {
                var g = c.output;
                if (g) {
                    var h = K(a, g.selector);
                    return f.fillRule ? A(a, b, c, h, d, e) : f.filter ? D(a, c, h, d, e) : void 0;
                }
            }
            function A(a, c, d, e, f, g) {
                var h;
                if (g.linearGradient2 ? h = B(a, c, d, g, g.linearGradient2) : g.linearGradient3 && (h = C(a, c, d, g, g.linearGradient3)),
                h) {
                    var i = new b.ColorRuleEvaluation(d.inputRole, h), j = {};
                    return j[d.output.property] = {
                        solid: {
                            color: i
                        }
                    }, {
                        selector: e,
                        rules: [i],
                        objects: [{
                            name: f,
                            properties: j
                        }]
                    };
                }
            }
            function B(a, b, c, d, e) {
                var e = d.linearGradient2;
                if (void 0 === e.min.value || void 0 === e.max.value) {
                    var f = N(a, c.inputRole);
                    if (!f) return;
                    void 0 === e.min.value && (e.min.value = f.min), void 0 === e.max.value && (e.max.value = f.max);
                }
                return b.linearGradient2(d.linearGradient2);
            }
            function C(a, b, c, d, e) {
                var e = d.linearGradient3;
                if (void 0 === e.min.value || void 0 === e.mid.value || void 0 === e.max.value) {
                    var f = N(a, c.inputRole);
                    if (!f) return;
                    if (void 0 === e.min.value && (e.min.value = f.min), void 0 === e.max.value && (e.max.value = f.max),
                    void 0 === e.mid.value) {
                        var g = (e.max.value + e.min.value) / 2;
                        e.mid.value = g;
                    }
                }
                return b.linearGradient3(d.linearGradient3);
            }
            function D(a, c, d, e, f) {
                if (a.categorical && a.categorical.categories && 1 === a.categorical.categories.length) {
                    var g = a.categorical.categories[0].identityFields;
                    if (g) {
                        var h = b.SQExprConverter.asScopeIdsContainer(f, g);
                        if (h) {
                            var i = new b.FilterRuleEvaluation(h), j = {};
                            return j[c.output.property] = i, {
                                selector: d,
                                rules: [i],
                                objects: [{
                                    name: e,
                                    properties: j
                                }]
                            };
                        }
                    }
                }
            }
            function E(a, c, d, e, f) {
                var g = b.Selector.containsWildcard(d), h = a.categorical;
                if (h) {
                    if (F(h, c, d, e, g, f)) return;
                    if (H(h, c, d, e, g, f)) return;
                }
            }
            function F(a, c, d, e, f, g) {
                if (a.categories && 0 !== a.categories.length) {
                    var h = J(a, d);
                    if (h) {
                        for (var i, j, k = h.identities, l = 0, m = k.length; m > l; l++) {
                            var n = k[l];
                            if (f || b.Selector.matchesData(d, [n])) {
                                if (e) {
                                    j || (j = G(e, a));
                                    for (var o = 0, p = j.length; p > o; o++) {
                                        var q = j[o];
                                        q.rule.setContext(n, q.inputValues ? q.inputValues[l] : void 0);
                                    }
                                }
                                var r = b.DataViewObjectEvaluationUtils.evaluateDataViewObjects(c, g);
                                if (r && (h.column.objects || (h.column.objects = [], h.column.objects.length = m),
                                h.column.objects[l] = r), !f) return !0;
                                i = !0;
                            }
                        }
                        return i;
                    }
                }
            }
            function G(a, b) {
                for (var c = [], d = 0, e = a.length; e > d; d++) {
                    var f, g = a[d], h = L(b, g.inputRole);
                    h && (f = h.values), c.push({
                        rule: g,
                        inputValues: f
                    });
                }
                return c;
            }
            function H(a, c, d, e, f, g) {
                var h = a.values;
                if (h && h.identityFields && b.Selector.matchesKeys(d, [h.identityFields])) {
                    var i = h.grouped();
                    if (i) {
                        for (var j, k = 0, l = i.length; l > k; k++) {
                            var m = i[k];
                            if (f || b.Selector.matchesData(d, [m.identity])) {
                                var n = b.DataViewObjectEvaluationUtils.evaluateDataViewObjects(c, g);
                                if (n && (m.objects = n, U(h, i)), !f) return !0;
                                j = !0;
                            }
                        }
                        return j;
                    }
                }
            }
            function I(a, c, d, e) {
                for (var f = a.metadata.columns, g = d.metadata, h = 0, i = f.length; i > h; h++) {
                    var j = f[h];
                    if (j.queryName === g) {
                        var k = b.DataViewObjectEvaluationUtils.evaluateDataViewObjects(c, e);
                        k && (j.objects = k);
                    }
                }
            }
            function J(a, c) {
                var d = a.categories[0];
                if (d.identityFields && b.Selector.matchesKeys(c, [d.identityFields])) {
                    var e = d.identity, f = d, g = c.metadata;
                    if (g) {
                        var h = a.values;
                        if (h) for (var i = 0, j = h.length; j > i; i++) {
                            var k = h[i];
                            if (k.source.queryName === g) {
                                f = k;
                                break;
                            }
                        }
                    }
                    return {
                        column: f,
                        identities: e
                    };
                }
            }
            function K(a, c) {
                if (1 === c.length) {
                    var d = a.categorical;
                    if (d) {
                        var e = d.categories;
                        if (e && 1 === e.length) {
                            var f = e[0], g = f.source.roles;
                            if (g && g[c[0]]) return {
                                data: [b.DataViewScopeWildcard.fromExprs(f.identityFields)]
                            };
                        }
                    }
                }
            }
            function L(a, b) {
                return M(a.values, b) || M(a.categories, b);
            }
            function M(a, b) {
                if (a) for (var c = 0, d = a.length; d > c; c++) {
                    var e = a[c], f = e.source.roles;
                    if (f && f[b]) return e;
                }
            }
            function N(a, b) {
                var c = a.categorical;
                if (c) {
                    var d = c.values;
                    if (d) for (var e = 0, f = d.length; f > e; e++) {
                        var g = d[e], h = g.source.roles;
                        if (h && h[b]) {
                            var i = g.min;
                            if (void 0 === i && (i = g.minLocal), void 0 !== i) {
                                var j = g.max;
                                if (void 0 === j && (j = g.maxLocal), void 0 !== j) return {
                                    min: i,
                                    max: j
                                };
                            }
                        }
                    }
                }
            }
            function O(a, c, d, f) {
                if (a && !e.isUndefinedOrEmpty(a.Select) || !e.isUndefinedOrEmpty(c) || f) {
                    var g = {};
                    if (a) {
                        var h = a.Select;
                        if (h) for (var i = g.selects = [], j = 0, k = h.length; k > j; j++) {
                            var m = h[j], n = P(m, j);
                            if (i.push(n), n.format && d) {
                                var o = b.DataViewObjectDescriptors.findFormatString(d);
                                o && (f || (f = {}), b.DataViewObjectDefinitions.ensure(f, o.objectName, {
                                    metadata: n.queryName
                                }).properties[o.propertyName] = b.SQExprBuilder.text(n.format));
                            }
                        }
                    }
                    if (c) {
                        var p = c.length;
                        p > 1 && (g.splits = []);
                        for (var j = 0; p > j; j++) {
                            var q = c[j];
                            q.Settings && 0 === j && (f = l(q.Settings, f)), q.DataRoles && (g.selects || (g.selects = []),
                            Q(q.DataRoles, g.selects)), g.splits && g.splits.push(S(q.DataRoles));
                        }
                    }
                    return f && (g.objects = f), g;
                }
            }
            function P(a, c) {
                var d = {};
                return a.Restatement && (d.displayName = a.Restatement), a.Name ? d.queryName = a.Name : d.queryName || (d.queryName = "$select" + c),
                a.Format && (d.format = a.Format), a.Type && (d.type = b.dsr.DataShapeUtility.describeDataType(a.Type, b.ConceptualDataCategory[a.DataCategory])),
                d;
            }
            function Q(a, b) {
                for (var c = 0, d = a.length; d > c; c++) {
                    var e = a[c], f = e.Projection, g = b[f];
                    void 0 === g && (R(b, f), g = b[f] = {});
                    var h = g.roles;
                    void 0 === g.roles && (h = g.roles = {}), h[e.Name] = !0;
                }
            }
            function R(a, b) {
                for (var c = a.length; b > c; c++) a[c] = {};
            }
            function S(a) {
                var b = {}, c = {
                    selects: b
                };
                if (a) for (var d = 0, e = a.length; e > d; d++) {
                    var f = a[d];
                    b[f.Projection] = !0;
                }
                return c;
            }
            function T(a, b) {
                void 0 === a && (a = []);
                var c = a;
                return U(a), b && (c.identityFields = b), c;
            }
            function U(a, b) {
                a.grouped = b ? function () {
                    return b;
                } : function () {
                    return V(a);
                };
            }
            function V(a) {
                for (var b, c = [], d = 0, e = a.length; e > d; d++) {
                    var f = a[d];
                    if (!b || b.identity !== f.identity) {
                        if (b = {
                            values: []
                        }, f.identity) {
                            b.identity = f.identity;
                            var g = f.source;
                            void 0 !== g.groupName ? b.name = g.groupName : g.name && (b.name = g.name);
                        }
                        c.push(b);
                    }
                    b.values.push(f);
                }
                return c;
            }
            function W(a, b) {
                return X(a.categorical, b) ? ab(a) || a : a;
            }
            function X(a, b) {
                if (a && !e.isUndefinedOrEmpty(b)) {
                    var c = a.categories;
                    if (c && 1 === c.length) {
                        var d = a.values;
                        if (!e.isUndefinedOrEmpty(d) && !d.grouped().some(function (a) {
                            return !!a.identity;
                        })) for (var f = c[0].source.roles, g = 0, h = b.length; h > g; g++) {
                            var i = b[g].categorical;
                            if (i) {
                                var j = i.categories;
                                if (!Z(f, j) && !$(f, j) && _(f, i.values)) return !0;
                            }
                        }
                    }
                }
            }
            function Y(a, b) {
                if (a && !e.isUndefinedOrEmpty(b)) {
                    var c = a.rows.levels;
                    if (!(c.length < 1)) {
                        var d = a.rows.root.children;
                        if (d && 0 !== d.length) for (var f = c[0].sources[0].roles, g = 0, h = b.length; h > g; g++) {
                            var i = b[g].matrix;
                            if (i && !$(f, i.rows) && $(f, i.columns)) return !0;
                        }
                    }
                }
            }
            function Z(a, b) {
                return a && b && b.bind ? a[b.bind.to] : void 0;
            }
            function $(a, b) {
                return a && b && b["for"] ? a[b["for"]["in"]] : void 0;
            }
            function _(a, b) {
                return a && b && b.group ? a[b.group.by] : void 0;
            }
            function ab(a) {
                var b = a.categorical;
                if (!b) return null;
                var f = b.categories;
                if (!f || 1 !== f.length) return null;
                var g = b.values;
                if (e.isUndefinedOrEmpty(g)) return null;
                for (var h = f[0], i = h.identity, j = h.values, k = [], l = [], m = 0, n = j.length; n > m; m++) for (var o = j[m], p = i[m], q = 0, r = g.length; r > q; q++) {
                    var s = g[q], t = d(s.source);
                    if (s.identity) return null;
                    t.groupName = o;
                    var u = {
                        source: t,
                        values: [s.values[m]],
                        identity: p,
                        min: s.min,
                        max: s.max,
                        subtotal: s.subtotal
                    }, v = s.highlights;
                    v && (u.highlights = [v[m]]), k.push(t), l.push(u);
                }
                var w = d(a.metadata);
                w.columns = k;
                var g = c.createValueColumns(l, h.identityFields);
                return g.source = h.source, {
                    metadata: w,
                    categorical: {
                        values: g
                    },
                    matrix: a.matrix
                };
            }
            function bb(a, b) {
                var c = a.children;
                if (c && c.length > 0) for (var d = 0, e = c.length; e > d; d++) bb(c[d], b); else b(a);
            }
            function cb(a) {
                return db(a);
            }
            function db(b, c) {
                var d = a.Prototype.inherit(b), e = b.children;
                if (e && e.length > 0) {
                    for (var f = [], g = 0, h = e.length; h > g; g++) {
                        var i = db(e[g], c);
                        f.push(i);
                    }
                    d.children = f;
                } else c && c(d);
                return d;
            }
            function eb(b, c) {
                c.columnHierarchyRewritten || (b.columns = a.Prototype.inherit(b.columns));
                var d = b.columns;
                c.rowHierarchyRewritten || (b.rows = a.Prototype.inherit(b.rows));
                var e = b.rows;
                if (!(d.levels.length > 1)) {
                    var f = {
                        level: 0
                    }, g = d.root.children, h = g.length;
                    if (h > 0) {
                        var i = 0, j = function (a) {
                            if (a.values) {
                                f.values || (f.values = {});
                                for (var b = 0; h > b; b++) f.values[i++] = a.values[b];
                                delete a.values;
                            }
                            if (h > 1) {
                                var c = a.level + 1;
                                a.children || (a.children = []);
                                for (var d = 0; h > d; d++) {
                                    var e = {
                                        level: c
                                    }, j = g[d];
                                    e.levelSourceIndex = j.levelSourceIndex, a.isSubtotal && (e.isSubtotal = !0), a.children.push(e);
                                }
                            }
                        };
                        c.hierarchyTreesRewritten ? bb(e.root, j) : b.columns.root = db(e.root, j);
                    } else c.hierarchyTreesRewritten || (b.columns.root = cb(e.root));
                    if (h > 1) {
                        var k = {
                            sources: d.levels[0].sources
                        };
                        e.levels.push(k), d.levels.length = 0;
                    }
                    if (c.hierarchyTreesRewritten) b.columns.root = e.root, b.rows.root = {
                        children: [f]
                    }; else {
                        var l = a.Prototype.inherit(b.rows.root);
                        l.children = [f], b.rows.root = l;
                    }
                    b.columns.levels = e.levels, b.rows.levels = [];
                }
            }
            c.apply = f, c.upgradeSettingsToObjects = l, c.createTransformActions = O, c.createValueColumns = T,
            c.pivot = ab;
        }(c = b.DataViewTransform || (b.DataViewTransform = {}));
    }(b = a.data || (a.data = {}));
}(powerbi || (powerbi = {}));

var powerbi;

!function (a) {
    var b;
    !function (a) {
        var b = function () {
            function a(a) {
                a && (this.inputRole = a);
            }
            return a.prototype.setContext = function (a, b) {
                this.scopeId = a, this.value = b;
            }, a.prototype.evaluate = function () { }, a;
        }();
        a.RuleEvaluation = b;
    }(b = a.data || (a.data = {}));
}(powerbi || (powerbi = {}));

var powerbi;

!function (a) {
    var b;
    !function (a) {
        var b = function (a) {
            function b(b, c) {
                a.call(this, b), this.allocator = c;
            }
            return __extends(b, a), b.prototype.evaluate = function () {
                return this.allocator.color(this.value);
            }, b;
        }(a.RuleEvaluation);
        a.ColorRuleEvaluation = b;
    }(b = a.data || (a.data = {}));
}(powerbi || (powerbi = {}));

var powerbi;

!function (a) {
    var b;
    !function (b) {
        var c = function (b) {
            function c(a) {
                b.call(this), this.selection = a;
            }
            return __extends(c, b), c.prototype.evaluate = function () {
                for (var b = this.scopeId, c = this.selection.scopeIds, d = 0, e = c.length; e > d; d++) if (a.DataViewScopeIdentity.equals(b, c[d])) return !this.selection.isNot;
            }, c;
        }(b.RuleEvaluation);
        b.FilterRuleEvaluation = c;
    }(b = a.data || (a.data = {}));
}(powerbi || (powerbi = {}));

var powerbi;

!function (a) {
    var b;
    !function (a) {
        var b;
        !function (a) {
            function b(a, b, d) {
                var e = a.length;
                if (1 === e) return {
                    mapping: a[0]
                };
                for (var f, g = [], h = 0; e > h; h++) {
                    var i = a[h];
                    if (!i.categorical) return;
                    0 === h && (f = {
                        metadata: i.metadata,
                        categorical: {}
                    }), c.mergeCategorical(f.categorical, i.categorical), g.push(c.createSplit(b, d, i.categorical));
                }
                return {
                    mapping: f,
                    splits: g
                };
            }
            a.mergeMappings = b;
            var c;
            !function (a) {
                function b(a, b) {
                    if (b.categories && (a.categories || (a.categories = b.categories)), b.values) {
                        var e = a.values;
                        e || (e = a.values = {});
                        var f = b.values, g = f.group;
                        if (c(e, f), d(e, f.select), g) {
                            var h = a.values.group;
                            h ? d(h, g.select) : a.values.group = {
                                select: g.select.concat([]),
                                by: g.by,
                                dataReductionAlgorithm: g.dataReductionAlgorithm
                            };
                        }
                    }
                }
                function c(a, b) {
                    (b.bind || b["for"]) && (a.select || (a.select = []), a.select.push(b));
                }
                function d(a, b) {
                    b && (a.select || (a.select = []), Array.prototype.push.apply(a.select, b));
                }
                function e(a, b, c) {
                    var d = {
                        selects: {}
                    };
                    if (c.categories) {
                        var e = c.categories;
                        f(d, a, b, e), g(d, a, b, e);
                    }
                    if (c.values) {
                        var k = c.values;
                        if (k.group) {
                            var l = a[k.group.by.role];
                            j(d, l, b);
                            for (var m = 0, n = k.group.select.length; n > m; m++) i(d, a, b, k.group.select[m]);
                        } else i(d, a, b, c.values), h(d, a, b, c.values);
                    }
                    return d;
                }
                function f(a, b, c, d) {
                    return d && d.bind ? j(a, b[d.bind.to.role], c) : void 0;
                }
                function g(a, b, c, d) {
                    return d && d["for"] ? j(a, b[d["for"]["in"].role], c) : void 0;
                }
                function h(a, b, c, d) {
                    if (d && d.select) for (var e = 0, f = d.select.length; f > e; e++) i(a, b, c, d.select[e]);
                }
                function i(a, b, c, d) {
                    f(a, b, c, d), g(a, b, c, d);
                }
                function j(a, b, c) {
                    if (b) for (var d = [], e = 0, f = b.length; f > e; e++) {
                        var g = b[e].queryRef, h = c[g];
                        d[h] || (a.selects[h] = !0, d[h] = !0);
                    }
                }
                a.mergeCategorical = b, a.createSplit = e;
            }(c || (c = {}));
        }(b = a.dsr || (a.dsr = {}));
    }(b = a.data || (a.data = {}));
}(powerbi || (powerbi = {}));

var powerbi;

!function (a) {
    var b;
    !function (a) {
        var b;
        !function (a) {
            !function (a) {
                a[a.Append = 0] = "Append", a[a.Merge = 1] = "Merge";
            }(a.RestartFlagKind || (a.RestartFlagKind = {}));
            a.RestartFlagKind;
        }(b = a.dsr || (a.dsr = {}));
    }(b = a.data || (a.data = {}));
}(powerbi || (powerbi = {}));

var powerbi;

!function (a) {
    var b;
    !function (b) {
        var c;
        !function (c) {
            var d;
            !function (c) {
                function d(a, c) {
                    var d = f(a, c);
                    return d ? b.PrimitiveValueEncoding.parseValue(d.Value) : void 0;
                }
                function e(a, c) {
                    var d = f(a, c);
                    return d ? b.PrimitiveValueEncoding.parseValueToSQExpr(d.Value) : void 0;
                }
                function f(a, b) {
                    for (var c = 0, d = a.length; d > c; c++) {
                        var e = a[c];
                        if (e.Id === b) return e;
                    }
                }
                function g(a, b, c) {
                    if (!a || !a.DataShapes) return null;
                    for (var d = b.Select[c].Value, e = 0, g = a.DataShapes.length; g > e; e++) for (var h = a.DataShapes[e], i = 0, j = h.PrimaryHierarchy.length; j > i; i++) {
                        var k = h.PrimaryHierarchy[i];
                        if (k.Instances && k.Instances.length && f(k.Instances[0].Calculations, d)) return k.Instances.length;
                    }
                }
                function h(c, d) {
                    c = c || 0;
                    var e = 0;
                    switch (c) {
                        case 2048:
                            e = 1;
                            break;

                        case 1:
                            e = 3;
                            break;

                        case b.SemanticType.Integer:
                            e = 4;
                            break;

                        case 4096:
                            e = 5;
                            break;

                        case b.SemanticType.Date:
                            e = 6;
                            break;

                        case 4:
                            e = 7;
                            break;

                        case 8:
                            e = 9;
                            break;

                        case b.SemanticType.Year:
                            e = 4, d = "Year";
                            break;

                        case b.SemanticType.Month:
                            e = 4, d = "Month";
                    }
                    return a.ValueType.fromPrimitiveTypeAndCategory(e, d);
                }
                function i(a, b) {
                    var c = a.Limits;
                    if (c) for (var d = b - 5, e = 0, f = c.length; f > e; e++) {
                        var g = c[e];
                        void 0 !== g.Target.Primary && (g.Count = d);
                    }
                }
                function j(a, b) {
                    var d = a.SecondaryHierarchy;
                    return d ? b && b.Secondary ? c.getDynamicMember(d, b.Secondary.Groupings, 0) : c.getDynamicMemberFallback(d) : null;
                }
                function k(a, b, d) {
                    var e = a.PrimaryHierarchy;
                    if (!e) return null;
                    var f;
                    return d && (f = void 0 !== a.Calculations), b && b.Primary ? c.getDynamicMember(e, b.Primary.Groupings, 0, f) : c.getDynamicMemberFallback(e, f);
                }
                function l(a, b, d, e) {
                    if (0 === a.length) return null;
                    if (!b || 0 === b.length) return c.getDynamicMemberFallback(a, e);
                    var f = b[d].Member;
                    if (!f) return c.getDynamicMemberFallback(a, e);
                    for (var g = 0; g < a.length; g++) if (a[g].Id === f) return a[g];
                    return null;
                }
                function m(a, b) {
                    return 2 === a.length ? a[1] : void 0 === b || b === !0 ? a[0] : null;
                }
                c.findAndParseCalculation = d, c.findAndParseCalculationToSQExpr = e, c.findCalculation = f,
                c.getCalculationInstanceCount = g, c.describeDataType = h, c.increaseLimitForPrimarySegmentation = i,
                c.getTopLevelSecondaryDynamicMember = j, c.getTopLevelPrimaryDynamicMember = k,
                c.getDynamicMember = l, c.getDynamicMemberFallback = m;
            }(d = c.DataShapeUtility || (c.DataShapeUtility = {}));
        }(c = b.dsr || (b.dsr = {}));
    }(b = a.data || (a.data = {}));
}(powerbi || (powerbi = {}));

var powerbi;

!function (a) {
    var b = function () {
        function a(a) {
            this.oDataError = a, this.oDataCode = this.parseCode();
        }
        return Object.defineProperty(a.prototype, "code", {
            get: function () {
                return this.oDataCode;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(a.prototype, "ignorable", {
            get: function () {
                return !1;
            },
            enumerable: !0,
            configurable: !0
        }), a.prototype.getDetails = function (b) {
            var c = this.oDataError["azure:values"], d = null;
            if (c) for (var e = 0; e < c.length; e++) if (c[e].details) {
                d = c[e].details;
                break;
            }
            var f = this.getErrorKeyValueFromStatusCode(this.code, b), g = f.errorInfoKey, h = f.errorInfoValue, i = a.isCodeKnown(this.code) || !d ? [{
                errorInfoKey: g,
                errorInfoValue: h
            }] : [];
            if (d) {
                var j = 0 === i.length ? g : b.get("DsrError_MoreInfo");
                i.push({
                    errorInfoKey: j,
                    errorInfoValue: d
                });
            }
            var k = {
                message: b.get("DsrError_Message"),
                additionalErrorInfo: i
            };
            return k;
        }, a.prototype.getErrorKeyValueFromStatusCode = function (a, b) {
            var c = b.get("DsrError_Key"), d = b.get("DsrError_UnknownErrorValue");
            switch (a) {
                case "ErrorLoadingModel":
                    c = b.get("DsrError_LoadingModelKey"), d = b.get("DsrError_LoadingModelValue");
                    break;

                case "InvalidDataShapeNoOutputData":
                    d = b.get("DsrError_InvalidDataShapeValue");
                    break;

                case "InvalidUnconstrainedJoin":
                    c = b.get("DsrError_InvalidUnconstrainedJoinKey"), d = b.get("DsrError_InvalidUnconstrainedJoinValue");
                    break;

                case "ModelUnavailable":
                    d = b.get("DsrError_ModelUnavailableValue");
                    break;

                case "OverlappingKeysOnOppositeHierarchies":
                    c = b.get("DsrError_OverlappingKeysKey"), d = b.get("DsrError_OverlappingKeysValue");
                    break;

                case "rsDataShapeProcessingError":
                case "rsDataShapeQueryGenerationError":
                case "rsDataShapeQueryTranslationError":
                case "rsErrorExecutingCommand": }
            var e = {
                errorInfoKey: c,
                errorInfoValue: d
            };
            return e;
        }, a.prototype.parseCode = function () {
            var b = this.oDataError.code, c = this.oDataError["azure:values"], d = [];
            if (c) for (var e = 0; e < c.length; e++) c[e].additionalMessages && (d = c[e].additionalMessages);
            if (d.length > 0) for (var e = 0; e < d.length; e++) a.isCodeKnown(d[e].Code) && (b = d[e].Code);
            return b;
        }, a.isCodeKnown = function (a) {
            switch (a) {
                case "ErrorLoadingModel":
                case "InvalidDataShapeNoOutputData":
                case "InvalidUnconstrainedJoin":
                case "ModelUnavailable":
                case "OverlappingKeysOnOppositeHierarchies":
                    return !0;

                default:
                    return !1;
            }
        }, a;
    }();
    a.DsrClientError = b;
}(powerbi || (powerbi = {}));

var powerbi;

!function (a) {
    var b;
    !function (a) {
        var b;
        !function (a) {
            var b = function () {
                function b(b, c, d, e) {
                    this.proxy = new a.ExecuteSemanticQueryProxy(b, c, d, e);
                }
                return b.prototype.execute = function (a) {
                    return this.proxy.execute(a);
                }, b.prototype.transform = function (c) {
                    return void 0 === c ? {
                        dataView: {
                            metadata: {
                                columns: []
                            },
                            error: {
                                code: b.undefinedData
                            }
                        }
                    } : a.read(c);
                }, b.prototype.stopCommunication = function () {
                    this.proxy.stopCommunication();
                }, b.prototype.resumeCommunication = function () {
                    this.proxy.resumeCommunication();
                }, b.prototype.clearCache = function () {
                    this.proxy.clearCache();
                }, b.prototype.rewriteCacheEntries = function (a) {
                    this.proxy.rewriteCacheEntries(a);
                }, b.undefinedData = "UndefinedData", b;
            }();
            a.DsrDataProvider = b;
        }(b = a.dsr || (a.dsr = {}));
    }(b = a.data || (a.data = {}));
}(powerbi || (powerbi = {}));

var powerbi;

!function (a) {
    var b;
    !function (a) {
        var b;
        !function (a) {
            !function (a) {
                a[a.Unknown = -1] = "Unknown", a[a.Top = 0] = "Top", a[a.Bottom = 1] = "Bottom",
                a[a.Sample = 2] = "Sample";
            }(a.LimitType || (a.LimitType = {}));
            var b = (a.LimitType, function () {
                function a(a) {
                    this.queryBindingDescriptor = a;
                }
                return a.prototype.getDetails = function (b) {
                    var c = -1, d = -1, e = -1, f = [], g = [], h = [], i = 0, j = this.queryBindingDescriptor.Limits;
                    j && (j.Primary && (d = a.getLimitType(j.Primary), f = this.queryBindingDescriptor.Expressions.Primary.Groupings),
                    j.Secondary && (e = a.getLimitType(j.Secondary), g = this.queryBindingDescriptor.Expressions.Secondary.Groupings),
                    -1 !== d && -1 !== e ? (c = d, h = f, i = 2) : (-1 !== d || -1 !== e) && (-1 === d ? (c = e,
                    e = -1, h = g, g = []) : (c = d, e = -1, h = f, g = []), i = 1));
                    var k = -1 === c ? b.get("DsrLimitWarning_TooMuchDataValMultipleColumns") : this.getDetailedMessage(h, c, a.getDefaultDetailedMessage(c, b), b);
                    if (i > 1 && g.length > 0) {
                        var l = this.getDetailedMessage(g, e, "", b);
                        "" !== l && (k = k + " " + l);
                    }
                    var m = a.getMessage(c, b), n = a.getKey(c, b), o = {
                        message: m,
                        additionalErrorInfo: [{
                            errorInfoKey: n,
                            errorInfoValue: k
                        }]
                    };
                    return o;
                }, a.getMessage = function (a, b) {
                    var c;
                    switch (a) {
                        case 2:
                            c = b.get("DsrLimitWarning_RepresentativeSampleMessage");
                            break;

                        case 0:
                        case 1:
                        default:
                            c = b.get("DsrLimitWarning_TooMuchDataMessage");
                    }
                    return c;
                }, a.getKey = function (a, b) {
                    var c;
                    switch (a) {
                        case 2:
                            c = b.get("DsrLimitWarning_RepresentativeSampleKey");
                            break;

                        case 0:
                        case 1:
                        default:
                            c = b.get("DsrLimitWarning_TooMuchDataKey");
                    }
                    return c;
                }, a.prototype.getDetailedMessage = function (b, c, d, e) {
                    if (!b || 1 !== b.length) return d;
                    for (var f = b[0].Keys, g = 0; g < f.length; g++) {
                        var h = f[g];
                        if (null !== h.Select && void 0 !== h.Select) {
                            var i = this.columnNameFromIndex(h.Select);
                            if (i) {
                                var j = a.getDetailedMessageFormatForOneColumn(c, e);
                                return jsCommon.StringExtensions.format(j, i);
                            }
                            return d;
                        }
                    }
                    return d;
                }, a.getDetailedMessageFormatForOneColumn = function (a, b) {
                    switch (a) {
                        case 2:
                            return b.get("DsrLimitWarning_RepresentativeSampleVal");

                        case 0:
                        case 1:
                        default:
                            return b.get("DsrLimitWarning_TooMuchDataVal");
                    }
                }, a.getDefaultDetailedMessage = function (a, b) {
                    switch (a) {
                        case 2:
                            return b.get("DsrLimitWarning_RepresentativeSampleValMultipleColumns");

                        case 0:
                        case 1:
                        default:
                            return b.get("DsrLimitWarning_TooMuchDataValMultipleColumns");
                    }
                }, a.getLimitType = function (a) {
                    var b = -1;
                    return a.Top ? b = 0 : a.Bottom ? b = 1 : a.Sample && (b = 2), b;
                }, a;
            }());
            a.DsrLimitsWarning = b;
        }(b = a.dsr || (a.dsr = {}));
    }(b = a.data || (a.data = {}));
}(powerbi || (powerbi = {}));

var powerbi;

!function (a) {
    var b;
    !function (b) {
        var c;
        !function (c) {
            function d(a) {
                var b = a;
                return "string" == typeof a && (b = JSON.parse(a)), e(b.descriptor, b.dsr, b.schemaName);
            }
            function e(b, d, e) {
                if (!d.DataShapes || 1 !== d.DataShapes.length) return null;
                var g = d.DataShapes[0], h = g["odata.error"];
                if (h) {
                    var i = new a.DsrClientError(g["odata.error"]), j = {
                        error: i
                    };
                    return j;
                }
                var l = {
                    dataView: f(new k(b.Select, e)).read(b.Expressions, g)
                };
                return g.RestartTokens && (l.restartToken = g.RestartTokens), g.DataLimitsExceeded && g.DataLimitsExceeded.length > 0 && (l.warning = new c.DsrLimitsWarning(b)),
                l;
            }
            function f(a) {
                for (var b = 0, c = 0, d = a.selects, e = 0, f = d.length; f > e; e++) {
                    var g = d[e];
                    g && (null != g.Depth && (b = Math.max(b, g.Depth + 1)), null != g.SecondaryDepth && (c = Math.max(c, g.SecondaryDepth + 1)));
                }
                return c >= 1 && 1 === b ? new j(a) : new i(a);
            }
            function g(a, b) {
                var c = a.values;
                c || (c = a.values = {});
                var d = c[b];
                return d || (d = c[b] = {}), d;
            }
            c.read = d, c.readDsr = e;
            var h;
            !function (a) {
                function b(a, b, c, d) {
                    var e = [], g = [], j = [];
                    if (!f(a.selects, e, g, j, d.columns)) return null;
                    var k = [], l = i(a, g, j.length, b, c, k), m = h(a, e, b, c, k), n = {
                        root: m,
                        levels: e
                    }, o = {
                        root: l,
                        levels: g
                    }, p = {
                        rows: n,
                        columns: o,
                        valueSources: j
                    };
                    return p;
                }
                function d(a) {
                    for (var b = {
                        sources: []
                    }, c = 0, d = a.length; d > c; c++) b.sources.push(a[c]);
                    return b;
                }
                function e(a, b) {
                    for (var c = 0, d = a.length; d > c; c++) {
                        var e = a[c];
                        if (e && e.index === b) return e;
                    }
                    return null;
                }
                function f(a, b, c, f, g) {
                    for (var h = 0, i = a.length; i > h; h++) {
                        var j = a[h];
                        if (j) if (2 === j.Kind) {
                            var k = e(g, h);
                            f.push(k);
                        } else if (null != j.Depth) {
                            if (null != b[j.Depth]) return !1;
                            b[j.Depth] = d([e(g, h)]);
                        } else if (null != j.SecondaryDepth) {
                            if (null != c[j.SecondaryDepth]) return !1;
                            c[j.SecondaryDepth] = d([e(g, h)]);
                        }
                    }
                    return (f.length > 1 || f.length > 0 && (0 === b.length || 0 === c.length)) && c.push(d(f)),
                    !0;
                }
                function h(a, b, c, d, e) {
                    if (d.PrimaryHierarchy && 0 !== d.PrimaryHierarchy.length) {
                        var f;
                        c && c.Primary && (f = c.Primary.Groupings);
                        var g = 0, h = 0;
                        c && (g = k(c.Primary), h = k(c.Secondary));
                        var i = a.selects.filter(function (a) {
                            return a && 2 === a.Kind;
                        });
                        return n(a, b, d.PrimaryHierarchy, f, function (a, b, c) {
                            return s(a, i, b, c, e, g, h);
                        });
                    }
                }
                function i(a, b, c, d, e, f) {
                    if (!e.SecondaryHierarchy || 0 === e.SecondaryHierarchy.length) {
                        var g = {};
                        return m(g, c, 0, !1), g;
                    }
                    var h;
                    return d && d.Secondary && (h = d.Secondary.Groupings), n(a, b, e.SecondaryHierarchy, h, function (a, c, d, e) {
                        if (e < b.length) if (d.isSubtotal) {
                            var g = b.length - 1, h = b[g].sources.length;
                            h > 1 && m(d, h, g, !0);
                        } else {
                            var i = b[e];
                            m(d, i.sources.length, e, !1);
                        }
                        f.push(j(d));
                    });
                }
                function j(a) {
                    return a.isSubtotal ? a.level : a.level + 1;
                }
                function k(a) {
                    return a && a.Groupings ? a.Groupings.length : 0;
                }
                function l(a, b, c, d) {
                    return a + (d - b) * (c + 1);
                }
                function m(a, b, c, d) {
                    a.children = [];
                    for (var e = 0; b > e; e++) {
                        var f = {
                            level: c
                        };
                        e > 0 && (f.levelSourceIndex = e), a.children.push(f), d && (f.isSubtotal = !0);
                    }
                }
                function n(a, b, c, d, e) {
                    var f = {};
                    return o(a, b, f, c, d, 0, e), f;
                }
                function o(a, b, c, d, e, f, g) {
                    if (d) for (var h = a.selects, i = 0, j = d.length; j > i; i++) for (var k = d[i], l = 0, m = 0, n = k.Instances.length; n > m; m++) {
                        var r = k.Instances[m];
                        if (0 === l) {
                            var l = q(h, e, f, k, r);
                            if (4 === l) break;
                        }
                        var s = {
                            level: f
                        };
                        if (c.children || (c.children = []), c.children.push(s), 1 === l) {
                            var t = p(h, r.Calculations);
                            null != t && (s.value = t);
                        } else 3 === l && (s.isSubtotal = !0);
                        r.RestartFlag && 1 === r.RestartFlag && (s.isMerge = !0), e && 1 === l && (c.childIdentityFields = a.readKeys(e, f),
                        s.identity = a.readIdentity(e, r, f));
                        var u = r.Members;
                        u && u.length > 0 ? o(a, b, s, u, e, f + 1, g) : g && g(l, r, s, f + 1);
                    }
                }
                function p(a, b) {
                    for (var d = 0, e = a.length; e > d; d++) {
                        var f = a[d];
                        if (f && f.Value && 1 === f.Kind) {
                            var g = c.DataShapeUtility.findAndParseCalculation(b, f.Value);
                            if (null != g) return g;
                        }
                    }
                }
                function q(a, b, d, e, f) {
                    if (b && b.length > d && null != e.Id) {
                        var g = b[d];
                        if (e.Id === g.Member) return 1;
                        if (e.Id === g.SubtotalMember) return 3;
                    }
                    var h = f.Calculations;
                    if (h) {
                        for (var i = !1, j = 0, k = a.length; k > j; j++) {
                            var l = a[j];
                            if (l && c.DataShapeUtility.findCalculation(h, l.Value)) {
                                if (1 === l.Kind) return 1;
                                i || 2 !== l.Kind || (i = !0);
                            }
                        }
                        if (i) return 2;
                    }
                    return 4;
                }
                function r(a, b, d, e, f, h, i, k) {
                    if (d) for (var l = 0, m = 0, n = b.length; n > m; m++) {
                        var o = b[m], p = g(e, f.index), q = null;
                        if (3 !== a && (q = c.DataShapeUtility.findAndParseCalculation(d, o.Value)), null == q) {
                            var r = j(e), s = t(d, o, r, h, i, k);
                            void 0 !== s && (q = s);
                        }
                        p.value = q, l > 0 && (p.valueSourceIndex = l), f.index++, l++;
                    }
                }
                function s(a, b, c, d, e, f, g) {
                    var h = c.Intersections, i = {
                        index: 0
                    };
                    if (h) {
                        for (var j = 0, k = h.length; k > j; j++) if (h[j].Calculations) {
                            var l = e[j];
                            r(a, b, h[j].Calculations, d, i, l, f, g);
                        }
                    } else r(a, b, c.Calculations, d, i, 0, f, g);
                }
                function t(a, b, d, e, f, g) {
                    var h = b.Subtotal;
                    if (h) {
                        var i = l(d, e, f, g);
                        if (i < h.length) return c.DataShapeUtility.findAndParseCalculation(a, h[i]);
                    }
                    return void 0;
                }
                var u;
                !function (a) {
                    a[a.Undetermined = 0] = "Undetermined", a[a.GroupDynamic = 1] = "GroupDynamic",
                    a[a.MeasureStatic = 2] = "MeasureStatic", a[a.SubtotalStatic = 3] = "SubtotalStatic",
                    a[a.Unsupported = 4] = "Unsupported";
                }(u || (u = {})), a.parse = b;
            }(h || (h = {}));
            var i = function () {
                function d(a) {
                    this._context = a;
                }
                return d.prototype.read = function (a, b) {
                    var c = this.readMetadata(b.IsComplete), d = {
                        metadata: c
                    }, e = this.parseTree(a, b);
                    d.tree = {
                        root: e
                    };
                    var f = this.categorize(c, e);
                    f && (d.categorical = f);
                    var g = this.createSingleValue(c, e);
                    g && (d.single = g);
                    var i = this.createTable(c, e);
                    i && (d.table = i);
                    var j = h.parse(this._context, a, b, d.metadata);
                    return j && (d.matrix = j), d;
                }, d.prototype.readMetadata = function (a) {
                    for (var b = {
                        columns: []
                    }, c = this._context, d = c.selects, e = 0, f = d.length; f > e; e++) {
                        var g = d[e];
                        if (g) {
                            var h = c.columnMetadata(e);
                            b.columns.push(h);
                        }
                    }
                    return a || (b.segment = {}), b;
                }, d.prototype.parseTree = function (a, b) {
                    var e, f = {}, g = b.Calculations || d.getFirstInstanceCalcs(b.PrimaryHierarchy[0]);
                    e = c.DataShapeUtility.getTopLevelPrimaryDynamicMember(b, a, !0);
                    var h;
                    return a && a.Primary && (h = a.Primary.Groupings), this.parseRecursive(f, g, e, h, 0),
                    f;
                }, d.prototype.parseRecursive = function (a, b, e, f, g) {
                    var h = this._context;
                    if (b && this.parseValues(h.selects, a, b, g), e) {
                        var i, j = e.Instances, k = j.length;
                        k && (a.children = [], 0 === g && (i = l.create(a, h.selects)));
                        for (var m = 0; k > m; m++) {
                            var n = j[m], o = {};
                            a.children.push(o), n.RestartFlag && 1 === n.RestartFlag && (o.isMerge = !0), this.parseValues(h.selects, o, n.Calculations, g, i),
                            f && (a.childIdentityFields = h.readKeys(f, g), o.identity = h.readIdentity(f, n, g));
                            var p = n.Members;
                            if (p && p.length) {
                                var q = c.DataShapeUtility.getDynamicMember(p, f, g + 1);
                                this.parseRecursive(o, d.getFirstInstanceCalcs(p[0]), q, f, g + 1);
                            }
                        }
                        i && i.complete();
                    }
                }, d.getFirstInstanceCalcs = function (a) {
                    return a.Instances.length > 0 ? a.Instances[0].Calculations : null;
                }, d.prototype.parseValues = function (a, b, d, e, f) {
                    for (var h = 0, i = a.length; i > h; h++) {
                        var j = a[h];
                        if (j) {
                            if (j.Subtotal) {
                                var k = j.Subtotal[e];
                                if (k) {
                                    var l = c.DataShapeUtility.findAndParseCalculation(d, k);
                                    void 0 !== l && (g(b, h).subtotal = l);
                                }
                            }
                            if (j.Max) {
                                var k = j.Max[e];
                                if (k) {
                                    var l = c.DataShapeUtility.findAndParseCalculation(d, k);
                                    void 0 !== l && (g(b, h).max = l);
                                }
                            }
                            if (j.Min) {
                                var k = j.Min[e];
                                if (k) {
                                    var l = c.DataShapeUtility.findAndParseCalculation(d, k);
                                    void 0 !== l && (g(b, h).min = l);
                                }
                            }
                            if (j.Count) {
                                var k = j.Count[e];
                                if (k) {
                                    var l = c.DataShapeUtility.findAndParseCalculation(d, k);
                                    void 0 !== l && (g(b, h).count = l);
                                }
                            }
                            if (j.Value) {
                                var l = c.DataShapeUtility.findAndParseCalculation(d, j.Value);
                                void 0 !== l && (1 === j.Kind ? b.name = l : (b.value = l, f && f.add(h, l)), g(b, h).value = l);
                            }
                            if (j.Highlight) {
                                var m = c.DataShapeUtility.findAndParseCalculation(d, j.Highlight.Value);
                                void 0 !== m && (g(b, h).highlight = m);
                            }
                        }
                    }
                }, d.prototype.categorize = function (c, d) {
                    if (a.DataViewAnalysis.countGroups(c.columns) > 1) return null;
                    for (var e, f, g = {}, h = 0, i = c.columns.length; i > h; h++) {
                        var j = c.columns[h];
                        if (j.isMeasure) {
                            var k = {
                                source: j,
                                values: []
                            };
                            this.populateMeasureData(d, k, j.index), g.values || (g.values = b.DataViewTransform.createValueColumns()),
                            g.values.push(k);
                        } else e = j, f = j.index;
                    }
                    if (e) {
                        var l, m = d.children, n = {
                            source: e,
                            values: []
                        };
                        if (m) for (var o = 0, p = m.length; p > o; o++) {
                            var q = m[o];
                            if (n.values.push(q.values[f].value), this.writeCategoricalValues(c, q, g.values),
                            q.identity && (l || (l = []), l.push(q.identity)), q.isMerge) {
                                var r = g;
                                r.lastMergeIndex = o;
                            }
                        }
                        l && (n.identity = l), d.childIdentityFields && (n.identityFields = d.childIdentityFields),
                        g.categories = [n];
                    } else this.writeCategoricalValues(c, d, g.values);
                    return g;
                }, d.prototype.createTable = function (a, b) {
                    for (var c, d = this._context.selects, e = 0, f = d.length; f > e; e++) {
                        var g = d[e];
                        if (g) {
                            var h = d[e].Depth;
                            h >= 0 && (c = Math.max(h, c || 0));
                        }
                    }
                    if (c > 0) return null;
                    var i, j, k = [], l = d.length;
                    if (c >= 0) {
                        var m = b.children;
                        if (m) for (var e = 0, n = m.length; n > e; e++) {
                            var o = m[e];
                            this.toTableRow(o, l, k), o.isMerge && (i = e), o.identity && (j || (j = []), j.push(o.identity));
                        }
                    } else this.toTableRow(b, l, k);
                    var p = this.toTotals(b, l), q = {
                        rows: k,
                        columns: a.columns
                    };
                    if (j && (q.identity = j), p && (q.totals = p), i >= 0) {
                        var r = q;
                        r.lastMergeIndex = i;
                    }
                    return q;
                }, d.prototype.toTableRow = function (a, b, c) {
                    for (var d = [], e = 0; b > e; e++) {
                        var f = a.values[e];
                        f && d.push(f.value);
                    }
                    c.push(d);
                }, d.prototype.toTotals = function (a, b) {
                    var c = [], d = a.values, e = !1;
                    if (d) for (var f = this._context.selects, g = 0; b > g; g++) if (f[g]) {
                        var h = d[g], i = h ? h.subtotal : null;
                        e = e || null != i, c.push(i);
                    }
                    return e ? c : null;
                }, d.prototype.writeCategoricalValues = function (a, b, c) {
                    for (var d = a.columns, e = 0, f = 0, g = d.length; g > f; f++) {
                        var h = d[f];
                        if (h.isMeasure) {
                            var i = b.values[h.index], j = c[e++];
                            j.values.push(i.value), void 0 !== i.highlight && (j.highlights || (j.highlights = []),
                            j.highlights.push(i.highlight));
                        }
                    }
                }, d.prototype.populateMeasureData = function (a, b, c) {
                    if (a.values) {
                        var d = a.values[c];
                        d && (void 0 !== d.min && (b.min = d.min), void 0 !== d.max && (b.max = d.max),
                        void 0 !== d.subtotal && (b.subtotal = d.subtotal), void 0 !== d.maxLocal && (b.maxLocal = d.maxLocal),
                        void 0 !== d.minLocal && (b.minLocal = d.minLocal));
                    }
                }, d.prototype.createSingleValue = function (b, c) {
                    if (c.values) {
                        for (var d = b.columns, e = null, f = 0, g = d.length; g > f; f++) if (d[f].isMeasure) {
                            if (e) return null;
                            e = d[f];
                        }
                        if (!e) return null;
                        var h = c.values[e.index];
                        if (!h) return null;
                        var i = 0 === a.DataViewAnalysis.countGroups(b.columns) ? h.value : h.subtotal;
                        return void 0 === i ? null : {
                            value: i
                        };
                    }
                    return null;
                }, d;
            }(), j = function () {
                function a(a) {
                    this._context = a, this._categorySelects = [], this._primaryMeasureSelects = [],
                    this._measureSelects = [], this._secondarySelects = [], this._categoryColumn = null,
                    this._seriesColumn = null;
                }
                return a.prototype.read = function (a, b) {
                    var c = {
                        metadata: this.readMetadata(b.IsComplete)
                    }, d = this.categorize(b, c.metadata, a);
                    d && (c.categorical = d);
                    var e = h.parse(this._context, a, b, c.metadata);
                    return e && (c.matrix = e), c;
                }, a.prototype.readMetadata = function (a) {
                    for (var b = {
                        columns: []
                    }, c = this._context, d = c.selects, e = 0, f = d.length; f > e; e++) {
                        var g = d[e];
                        if (g) if (2 !== g.Kind) {
                            var h = c.columnMetadata(e);
                            b.columns.push(h), g.SecondaryDepth >= 0 ? (this._secondarySelects.push(g), this._secondaryDepth = Math.max(this._secondaryDepth || 0, g.SecondaryDepth),
                            this._seriesColumn = h) : (this._categoryColumn = h, this._categorySelects.push(g));
                        } else 0 === g.Depth ? this._primaryMeasureSelects.push(g) : this._measureSelects.push(g);
                    }
                    return a || (b.segment = {}), b;
                }, a.prototype.categorize = function (a, b, d) {
                    if (0 !== this._secondaryDepth || 1 !== this._categorySelects.length || this._measureSelects.length < 1) return null;
                    var e, f;
                    d && (d.Primary && (e = d.Primary.Groupings), d.Secondary && (f = d.Secondary.Groupings));
                    var g = c.DataShapeUtility.getTopLevelSecondaryDynamicMember(a, d), h = this.readColumnsFromSecondary(g, b, f, a.Calculations), i = c.DataShapeUtility.getTopLevelPrimaryDynamicMember(a, d), j = this.readCategoriesAndValues(i, b, h, e), k = {
                        categories: j.categories,
                        values: h
                    };
                    return void 0 !== j.lastMergeIndex && (k.lastMergeIndex = j.lastMergeIndex), k;
                }, a.prototype.readColumnsFromSecondary = function (a, d, e, f) {
                    var g, h = this._context;
                    e && (g = h.readKeys(e, 0));
                    var i = b.DataViewTransform.createValueColumns([], g), j = h.selects, k = this._measureSelects.length, l = a.Instances, m = l.length;
                    if (m) for (var n = 0; m > n; n++) {
                        var o, p = l[n], q = p.Calculations;
                        e && (o = h.readIdentity(e, p, 0));
                        for (var r = 0, s = this._secondarySelects.length; s > r; r++) for (var t = this._secondarySelects[r], u = c.DataShapeUtility.findAndParseCalculation(q, t.Value), v = 0; k > v; v++) {
                            var w = this._measureSelects[v], x = h.columnMetadata(j.indexOf(w));
                            void 0 !== u && (x.groupName = u), d.columns.push(x);
                            var y = {
                                source: x,
                                values: []
                            };
                            o && (y.identity = o), this.addColumnAggregates(f, w, y), i.push(y);
                        }
                    } else for (var v = 0; k > v; v++) {
                        var w = this._measureSelects[v], x = h.columnMetadata(j.indexOf(w));
                        d.columns.push(x);
                        var y = {
                            source: x,
                            values: []
                        };
                        this.addColumnAggregates(f, w, y), i.push(y);
                    }
                    for (var v = 0, z = this._primaryMeasureSelects.length; z > v; v++) {
                        var A = this._primaryMeasureSelects[v], x = h.columnMetadata(j.indexOf(A));
                        d.columns.push(x);
                        var y = {
                            source: x,
                            values: []
                        };
                        i.push(y);
                    }
                    return this._seriesColumn && (i.source = this._seriesColumn), i;
                }, a.prototype.addColumnAggregates = function (a, b, d) {
                    a && (b.Max && (d.max = c.DataShapeUtility.findAndParseCalculation(a, b.Max[0])),
                    b.Min && (d.min = c.DataShapeUtility.findAndParseCalculation(a, b.Min[0])));
                }, a.prototype.readCategoriesAndValues = function (a, b, d, e) {
                    var f, g = 0, h = this._context, i = this._categorySelects[g], j = {
                        source: this._categoryColumn,
                        values: []
                    }, k = a.Instances;
                    e && (f = j.identity = [], j.identityFields = h.readKeys(e, 0));
                    for (var l, m = this._primaryMeasureSelects, n = 0, o = k.length; o > n; n++) {
                        var p = k[n];
                        1 === p.RestartFlag && (l = n), j.values.push(c.DataShapeUtility.findAndParseCalculation(p.Calculations, i.Value)),
                        f && f.push(h.readIdentity(e, p, 0));
                        for (var q = p.Intersections, r = 0, s = 0, t = q.length; t > s; s++) for (var u = q[s].Calculations, v = 0, w = this._measureSelects.length; w > v; v++) {
                            var x = this._measureSelects[v], y = c.DataShapeUtility.findAndParseCalculation(u, x.Value);
                            if (void 0 !== y) {
                                var z = d[r++];
                                if (z.values.push(y), x.Highlight) {
                                    z.highlights || (z.highlights = []);
                                    var y = c.DataShapeUtility.findAndParseCalculation(u, x.Highlight.Value);
                                    z.highlights.push(y);
                                }
                            }
                        }
                        for (var s = 0, t = m.length; t > s; s++) {
                            var x = m[s], y = c.DataShapeUtility.findAndParseCalculation(p.Calculations, x.Value), z = d[r++];
                            if (z.values.push(y), x.Highlight) {
                                z.highlights || (z.highlights = []);
                                var y = c.DataShapeUtility.findAndParseCalculation(u, x.Highlight.Value);
                                z.highlights.push(y);
                            }
                        }
                    }
                    return {
                        categories: [j],
                        lastMergeIndex: l
                    };
                }, a;
            }(), k = function () {
                function a(a, b) {
                    this.selects = a, this.schema = b, this.cacheItems = [];
                }
                return a.prototype.columnMetadata = function (a) {
                    var b = this.selects[a], d = {
                        name: "",
                        index: a
                    };
                    return b.Format && (d.format = b.Format), d.type = c.DataShapeUtility.describeDataType(b.Type, b.DataCategory),
                    2 === b.Kind && (d.isMeasure = !0), d;
                }, a.prototype.readIdentity = function (a, d, e) {
                    for (var f, g = this.readKeys(a, e), h = a[e].Keys, i = 0, j = h.length; j > i; i++) {
                        var k = h[i], l = k.Calc || this.selects[k.Select].Value, m = c.DataShapeUtility.findAndParseCalculationToSQExpr(d.Calculations, l), n = b.SQExprBuilder.equal(g[i], m);
                        f = f ? b.SQExprBuilder.and(f, n) : n;
                    }
                    return b.createDataViewScopeIdentity(f);
                }, a.prototype.readKeys = function (a, b) {
                    var c = this.getAxisCache(a), d = c.exprs[b];
                    if (void 0 === d) {
                        d = c.exprs[b] = [];
                        for (var e = a[b].Keys, f = 0, g = e.length; g > f; f++) d.push(this.convertKey(e[f]));
                    }
                    return d;
                }, a.prototype.getAxisCache = function (a) {
                    for (var b = this.cacheItems, c = 0, d = b.length; d > c; c++) {
                        var e = b[c];
                        if (e.axisGroupings === a) return e;
                    }
                    return e = {
                        axisGroupings: a,
                        exprs: []
                    }, b.push(e), e;
                }, a.prototype.convertKey = function (a) {
                    var c = a.Source;
                    return b.SQExprBuilder.fieldDef({
                        schema: this.schema,
                        entity: c.Entity || c.EntitySet,
                        column: c.Property
                    });
                }, a;
            }(), l = function () {
                function a(a, b, c) {
                    this.node = a, this.length = b, this.aggregators = c;
                }
                return a.create = function (b, c) {
                    for (var d = b.values, e = !1, f = {}, g = 0, h = c.length; h > g; g++) {
                        var i = c[g];
                        if (i && 2 === i.Kind) {
                            var j, k;
                            if (d && (k = d[g])) {
                                if (j = [], void 0 === k.min && j.push(new n()), void 0 === k.max && j.push(new m()),
                                0 === j.length) continue;
                            } else j = [new n(), new m()];
                            f[g] = j, e = !0;
                        }
                    }
                    return e ? new a(b, h, f) : void 0;
                }, a.prototype.add = function (a, b) {
                    var c = this.aggregators[a];
                    if (c) for (var d = 0, e = c.length; e > d; d++) c[d].update(b);
                }, a.prototype.complete = function () {
                    for (var a = this.aggregators, b = this.node, c = 0, d = this.length; d > c; c++) {
                        var e = a[c];
                        if (e) for (var f = 0, h = e.length; h > f; f++) {
                            var i = e[f], j = i.value();
                            void 0 !== j && (g(b, c)[i.name] = j);
                        }
                    }
                }, a;
            }(), m = function () {
                function a() { }
                return Object.defineProperty(a.prototype, "name", {
                    get: function () {
                        return "maxLocal";
                    },
                    enumerable: !0,
                    configurable: !0
                }), a.prototype.update = function (a) {
                    if ("number" == typeof a && !isNaN(a)) {
                        var b = this.current;
                        this.current = void 0 === b ? a : Math.max(b, a);
                    }
                }, a.prototype.value = function () {
                    return this.current;
                }, a;
            }(), n = function () {
                function a() { }
                return Object.defineProperty(a.prototype, "name", {
                    get: function () {
                        return "minLocal";
                    },
                    enumerable: !0,
                    configurable: !0
                }), a.prototype.update = function (a) {
                    if ("number" == typeof a && !isNaN(a)) {
                        var b = this.current;
                        this.current = void 0 === b ? a : Math.min(b || 0, a);
                    }
                }, a.prototype.value = function () {
                    return this.current;
                }, a;
            }();
        }(c = b.dsr || (b.dsr = {}));
    }(b = a.data || (a.data = {}));
}(powerbi || (powerbi = {}));

var powerbi;

!function (a) {
    var b;
    !function (a) {
        var b;
        !function (a) {
            var b = jsCommon.JsonComparer, c = function () {
                function a(a, b, c) {
                    this.maxBatches = a, this.queryExecuteCallback = b, this.pending = [], this.timerFactory = c || jsCommon.TimerPromiseFactory.instance;
                }
                return a.prototype.enqueue = function (a) {
                    var b = this;
                    return this.pending.push(a), this.currentBatchDeferred || (this.currentBatchDeferred = $.Deferred(),
                    this.timerFactory.create(0).done(function () {
                        var a = b.createBatches();
                        b.clearPending(), b.queryExecuteCallback(a), b.currentBatchDeferred.resolve(), b.currentBatchDeferred = void 0;
                    })), this.currentBatchDeferred.promise();
                }, a.prototype.clearPending = function () {
                    this.pending = [];
                }, a.prototype.createBatches = function () {
                    var a = [], b = this.sortQueriesByDataSource();
                    if (b.length >= this.maxBatches) for (var c = 0, d = b.length; d > c; ++c) a.push(this.createBatchFromDataSourceGroup(b[c])); else a = this.splitDataSourcesIntoBatches(b, this.maxBatches);
                    return a;
                }, a.prototype.sortQueriesByDataSource = function () {
                    for (var a = [], b = this.pending, c = 0, d = b.length; d > c; ++c) {
                        var e = b[c];
                        if (!e.execution.rejected()) {
                            var f = this.findDataSourceGroup(e.options.dataSource, a);
                            if (f) f.queuedExecutions.push(e); else {
                                var g = {
                                    dataSource: e.options.dataSource,
                                    queuedExecutions: [e]
                                };
                                a.push(g);
                            }
                        }
                    }
                    return a;
                }, a.prototype.findDataSourceGroup = function (a, c) {
                    for (var d = 0, e = c.length; e > d; ++d) {
                        var f = c[d];
                        if (b.equals(a, f.dataSource)) return f;
                    }
                    return null;
                }, a.prototype.createBatchFromDataSourceGroup = function (a) {
                    for (var b = [], c = [], d = a.queuedExecutions, e = 0, f = d.length; f > e; ++e) {
                        var g = d[e], h = d[e].options;
                        b.push(h.command), c.push(g.deferred);
                    }
                    return {
                        dataSource: a.dataSource,
                        commands: b,
                        promises: c
                    };
                }, a.prototype.splitDataSourcesIntoBatches = function (a, b) {
                    for (var c = [], d = 0, e = a.length; e > d; ++d) c.push(this.createBatchFromDataSourceGroup(a[d]));
                    return c = this.splitBatches(c, b);
                }, a.prototype.splitBatches = function (a, b) {
                    for (var c = a.slice() ; c.length < b;) {
                        for (var d, e = 0, f = c.length; f > e; ++e) {
                            var g = c[e];
                            g.commands.length > 1 && (!d || d.commands.length < g.commands.length) && (d = g);
                        }
                        if (!d) return c;
                        c.push(this.splitBatch(d)), d = null;
                    }
                    return c;
                }, a.prototype.splitBatch = function (a) {
                    var b = a.commands.length, c = a.commands.splice(b / 2), d = a.promises.splice(b / 2);
                    return {
                        dataSource: a.dataSource,
                        commands: c,
                        promises: d
                    };
                }, a;
            }();
            a.ExecuteSemanticQueryBatcher = c;
        }(b = a.dsr || (a.dsr = {}));
    }(b = a.data || (a.data = {}));
}(powerbi || (powerbi = {}));

var powerbi;

!function (a) {
    var b;
    !function (b) {
        var c;
        !function (c) {
            function d(a) {
                return new h(a);
            }
            function e(a, b) {
                var c = {};
                a.rewriteCacheKey && (c.rewriteKey = function (b) {
                    var c = JSON.parse(b), d = a.rewriteCacheKey(c);
                    return d !== c ? f(d) : b;
                }), a.rewriteCacheResult && (c.rewriteResult = function (b, c) {
                    var d = JSON.parse(c), e = b, f = a.rewriteCacheResult({
                        descriptor: e.descriptor,
                        dsr: e.dsr,
                        schemaName: d.schemaName
                    });
                    return {
                        descriptor: f.descriptor,
                        dsr: f.dsr
                    };
                }), b.rewriteAllEntries(c);
            }
            function f(a) {
                return a && JSON.stringify(a);
            }
            c.createExecuteSemanticQueryProxyHttpCommunication = d;
            var g = function () {
                function d(b, e, f, g, h) {
                    var j = this;
                    void 0 === h && (h = d.defaultPreferredMaxConnections), this.promiseFactory = b.promiseFactory(),
                    this.communication = e, this.delayedResultHandler = f ? f : new i(), this.batcher = new c.ExecuteSemanticQueryBatcher(h, function (a) {
                        for (var b = 0, c = a.length; c > b; ++b) j.executeBatch(a[b]);
                    }, g), this.queryCache = new a.RejectablePromiseCache(this.promiseFactory);
                }
                return d.prototype.execute = function (b) {
                    var c = this.promiseFactory.defer(), d = a.RejectablePromise2(c);
                    if (b.dataSource) {
                        var e = this.generateCacheKey(b);
                        if (this.queryCache.hasCacheEntry(e)) return this.queryCache.bindCacheEntry(e);
                        var f = this.queryCache.createCacheEntry(e), g = {
                            options: b,
                            deferred: f.deferred,
                            execution: f.promise
                        };
                        return this.isCommunicationStopped ? (this.pausedQueries = this.pausedQueries || [],
                        this.pausedQueries.push(g)) : this.batcher.enqueue(g), this.queryCache.bindCacheEntry(e);
                    }
                    return c.resolve(b.command), d;
                }, d.prototype.stopCommunication = function () {
                    this.isCommunicationStopped = !0;
                }, d.prototype.resumeCommunication = function () {
                    this.isCommunicationStopped = !1;
                    var a = this.pausedQueries;
                    if (a) {
                        for (var b = 0, c = a.length; c > b; b++) {
                            var d = a[b];
                            d.execution.pending() && this.batcher.enqueue(d);
                        }
                        this.pausedQueries = void 0;
                    }
                }, d.prototype.rewriteCacheEntries = function (a) {
                    e(a, this.queryCache);
                }, d.prototype.clearCache = function () {
                    this.queryCache.clearAllEntries();
                }, d.prototype.generateCacheKey = function (a) {
                    if (a.dataSource) {
                        var b = a.dataSource, c = {
                            dbName: b.dbName,
                            vsName: b.vsName,
                            schemaName: b.schemaName,
                            command: a.command
                        };
                        return f(c);
                    }
                }, d.prototype.executeBatch = function (a) {
                    var b = this, c = a.promises, d = a.dataSource.schemaName;
                    this.communication.execute(a.commands, a.dataSource).then(function (a) {
                        return b.onSuccess(a, c, d);
                    }, function () {
                        return b.onError(c);
                    });
                }, d.prototype.onSuccess = function (a, c, d) {
                    for (var e = a.jobIds, f = {}, g = 0, h = c.length; h > g; ++g) f[e[g]] = c[g];
                    for (var i = a.results, g = 0, h = i.length; h > g; ++g) {
                        var j = i[g], k = j.result, l = f[j.jobId], m = k.data, n = k.error;
                        if (m) {
                            var o = {
                                descriptor: m.descriptor,
                                dsr: m.dsr,
                                schemaName: d
                            };
                            l.resolve(o);
                        } else if (n) {
                            var p = new b.ServiceErrorToClientError(n);
                            l.reject(p);
                        } else k.asyncResult && this.delayedResultHandler.registerDelayedResult(j.jobId, l, d);
                    }
                }, d.prototype.onError = function (a) {
                    for (var b = 0, c = a.length; c > b; b++) a[b].reject();
                }, d.defaultPreferredMaxConnections = 4, d;
            }();
            c.ExecuteSemanticQueryProxy = g, c.rewriteSemanticQueryCacheEntries = e;
            var h = function () {
                function a(a) {
                    this.httpService = a;
                }
                return a.prototype.execute = function (b, c) {
                    var d = this.httpService.powerbiRequestOptions(), e = {
                        semanticQueryDataShapeCommands: b,
                        databaseName: c.dbName,
                        virtualServerName: c.vsName,
                        modelId: c.modelId
                    };
                    return this.httpService.post(a.uri, e, d).then(function (a) {
                        return a.data;
                    });
                }, a.uri = "/explore/querydata", a;
            }(), i = function () {
                function b() { }
                return b.prototype.registerDelayedResult = function (b, c) {
                    c.reject(new a.UnknownClientError());
                }, b.prototype.setQueryResolver = function () { }, b;
            }();
        }(c = b.dsr || (b.dsr = {}));
    }(b = a.data || (a.data = {}));
}(powerbi || (powerbi = {}));

var powerbi;

!function (a) {
    var b;
    !function (a) {
        var b;
        !function (a) {
            function b(a, b, d) {
                b.visitDescriptor(a, d);
                var e = a.Select;
                if (e && e.length) for (var f = 0, g = e.length; g > f; f++) b.visitSelect(e[f], d);
                var h = a.Expressions;
                h && c(h, b, d);
            }
            function c(a, b, c) {
                b.visitExpressions(a, c), d(a.Primary, b, c);
                var e = a.Secondary;
                e && d(e, b, c);
            }
            function d(a, b, c) {
                b.visitDataShapeExpressionsAxis(a, c);
                for (var d = a.Groupings, f = 0, g = d.length; g > f; f++) e(d[f], b, c);
            }
            function e(a, b, c) {
                b.visitDataShapeExpressionsAxisGrouping(a, c);
                for (var d = a.Keys, e = 0, g = d.length; g > e; e++) f(d[e], b, c);
            }
            function f(a, b, c) {
                b.visitDataShapeExpressionsAxisGroupingKey(a, c), b.visitConceptualPropertyReference(a.Source, c);
            }
            a.traverseQueryBindingDescriptorWithArg = b;
            var g = function () {
                function a() { }
                return a.prototype.visitDescriptor = function () { }, a.prototype.visitSelect = function () { },
                a.prototype.visitExpressions = function () { }, a.prototype.visitDataShapeExpressionsAxis = function () { },
                a.prototype.visitDataShapeExpressionsAxisGrouping = function () { }, a.prototype.visitDataShapeExpressionsAxisGroupingKey = function () { },
                a.prototype.visitConceptualPropertyReference = function () { }, a;
            }();
            a.DefaultQueryBindingDescriptorVisitor = g;
        }(b = a.dsr || (a.dsr = {}));
    }(b = a.data || (a.data = {}));
}(powerbi || (powerbi = {}));

var powerbi;

!function (a) {
    var b;
    !function (a) {
        var b;
        !function (b) {
            function c() {
                return new e();
            }
            function d(a) {
                for (var b = [], c = 0, d = a.length; d > c; c++) {
                    var e = a[c];
                    e.entityRename && b.push(new g(e.entityRename)), e.propertyRename && b.push(new h(e.propertyRename));
                }
                return b;
            }
            b.createQueryCacheHandler = c;
            var e = function () {
                function a() { }
                return a.prototype.apply = function (a, b) {
                    var c = new f(b);
                    a.rewriteCacheEntries("dsr", c);
                }, a;
            }(), f = function () {
                function c(b) {
                    this.descriptorRewriters = d(b), this.schemaRewriters = a.createSchemaChangeRewriters(b);
                }
                return c.prototype.rewriteCacheKey = function (b) {
                    for (var c = a.services.SemanticQuerySerializer, d = this.schemaRewriters, e = b.command, f = c.deserializeQuery(e.Query), g = 0, h = d.length; h > g; g++) f = f.rewrite(d[g]);
                    return e.Query = c.serializeQuery(f), b.command = e, b;
                }, c.prototype.rewriteCacheResult = function (a) {
                    for (var c = this.descriptorRewriters, d = 0, e = c.length; e > d; d++) {
                        var f = c[d];
                        b.traverseQueryBindingDescriptorWithArg(a.descriptor, f, a.schemaName);
                    }
                    return a;
                }, c;
            }(), g = function (a) {
                function b(b) {
                    a.call(this), this.change = b;
                }
                return __extends(b, a), b.prototype.visitConceptualPropertyReference = function (a, b) {
                    this.change.schema === b && a.Entity === this.change.before && (a.Entity = this.change.after);
                }, b;
            }(b.DefaultQueryBindingDescriptorVisitor), h = function (a) {
                function b(b) {
                    a.call(this), this.change = b;
                }
                return __extends(b, a), b.prototype.visitConceptualPropertyReference = function (a, b) {
                    this.change.schema === b && a.Property === this.change.before && (a.Property = this.change.after);
                }, b;
            }(b.DefaultQueryBindingDescriptorVisitor);
        }(b = a.dsr || (a.dsr = {}));
    }(b = a.data || (a.data = {}));
}(powerbi || (powerbi = {}));

var powerbi;

!function (a) {
    var b;
    !function (a) {
        var b;
        !function (a) {
            var b = jsCommon.ArrayExtensions, c = function () {
                function a(a, b) {
                    this._metadata = a, this._binding = b;
                }
                return a.prototype.getSelectRestatements = function () {
                    return this.getRestatements();
                }, a.prototype.getGroupRestatements = function () {
                    return this.getRestatements(1);
                }, a.prototype.getMeasureRestatements = function () {
                    return this.getRestatements(2);
                }, a.prototype.getFilterRestatements = function () {
                    var a = this._metadata.Filters;
                    if (b.isUndefinedOrEmpty(a)) return null;
                    for (var c = [], d = 0, e = a.length; e > d; d++) {
                        var f = a[d];
                        c.push(f ? f.Restatement : "");
                    }
                    return b.emptyToNull(c);
                }, a.prototype.getRestatements = function (a) {
                    for (var c = this._metadata, d = this._binding, e = [], f = 0, g = d.Select.length; g > f; f++) {
                        var h = d.Select[f], i = c.Select[f];
                        h && (void 0 === a || h.Kind === a) && e.push(i.Restatement || "");
                    }
                    return b.emptyToNull(e);
                }, a;
            }();
            a.QueryDescription = c;
        }(b = a.dsr || (a.dsr = {}));
    }(b = a.data || (a.data = {}));
}(powerbi || (powerbi = {}));

var powerbi;

!function (a) {
    var b;
    !function (a) {
        var b;
        !function (b) {
            function c() {
                return new f(a.services.SemanticQuerySerializer);
            }
            function d(a, b, c, d, e, f, h) {
                var i = g.generateBaseDataShapeBinding(b, c, d, f);
                return i && (i.Version = 1, h && i.DataReduction && i.DataReduction.Primary && i.DataReduction.Primary.Window && (i.DataReduction.Primary.Window.RestartTokens = h),
                e && (i.Highlights = [a.serializeFilter(e)])), i;
            }
            b.createQueryGenerator = c;
            var e = function () {
                function a() { }
                return a.DefaultDataVolume = 3, a;
            }(), f = function () {
                function a(a) {
                    this.serializer = a;
                }
                return a.prototype.run = function (a) {
                    var c = a.query, f = a.mappings, h = a.highlightFilter, i = g.getIndicesByName(c), j = b.mergeMappings(f, a.projections, i), k = a.dataVolume;
                    k || (k = e.DefaultDataVolume);
                    var l = d(this.serializer, a.projections, i, j.mapping, h, k, a.restartToken), m = this.serializer.serializeQuery(c);
                    return {
                        command: {
                            Query: m,
                            Binding: l
                        },
                        splits: j.splits
                    };
                }, a;
            }();
            b.generateDataShapeBinding = d;
            var g;
            !function (a) {
                function b(a, b, f, g) {
                    return f.categorical ? c(a, b, f.categorical, g) : f.table ? d(a, b, f.table, g) : f.matrix ? e(a, b, f.matrix, g) : void 0;
                }
                function c(a, b, c, d) {
                    var e, f, g = {
                        Primary: {
                            Groupings: [{
                                Projections: []
                            }]
                        }
                    }, h = g.Primary.Groupings[0].Projections, o = !1;
                    if (c.categories) {
                        var r = c.categories;
                        k(h, a, b, r), l(h, a, b, r), o = h.length > 0, o && (e = q(r.dataReductionAlgorithm));
                    }
                    if (c.values) {
                        var s = c.values;
                        if (s.group) {
                            var t = a[s.group.by.role];
                            if (t && t.length > 0) {
                                var u;
                                o && !i(t, h, b) ? (g.Secondary = {
                                    Groupings: [{
                                        Projections: []
                                    }]
                                }, u = g.Secondary.Groupings[0].Projections, f = q(s.group.dataReductionAlgorithm)) : (u = h,
                                e = q(s.group.dataReductionAlgorithm)), n(u, t, b);
                            }
                            for (var v = 0, w = s.group.select.length; w > v; v++) j(h, a, b, s.group.select[v]);
                            var x = c.values;
                            if (x.select) {
                                var y = [];
                                j(h, a, b, c.values, y), m(h, a, b, c.values, y), g.Secondary && (g.Secondary.Groupings[0].SuppressedProjections = y);
                            }
                        } else j(h, a, b, c.values), m(h, a, b, c.values);
                    }
                    return p(g, d, e, f), g;
                }
                function d(a, b, c, d) {
                    var e = c.rows, f = [];
                    if (j(f, a, b, e), m(f, a, b, e), f.length > 0) {
                        var h = {
                            Primary: {
                                Groupings: [{
                                    Projections: f
                                }]
                            }
                        }, i = e;
                        i && g(h.Primary.Groupings, i);
                        var k = e;
                        if (k) {
                            var l = q(k.dataReductionAlgorithm);
                            p(h, d, l);
                        }
                        return h;
                    }
                }
                function e(a, b, c, d) {
                    var e, f, h = {
                        Primary: {
                            Groupings: []
                        }
                    }, i = h.Primary.Groupings, k = !1, l = !1;
                    if (c.rows && (o(i, a, b, c.rows), k = i.length > 0, k && (e = q(c.rows.dataReductionAlgorithm),
                    g(i, c.rows))), c.columns) {
                        var m = [];
                        o(m, a, b, c.columns), l = m.length > 0, l && (g(m, c.columns), k ? (h.Secondary = {
                            Groupings: m
                        }, f = q(c.columns.dataReductionAlgorithm)) : (h.Primary.Groupings = m, e = q(c.columns.dataReductionAlgorithm)));
                    }
                    if (c.values) {
                        var n = l ? h.Secondary && h.Secondary.Groupings ? h.Secondary.Groupings : [] : i;
                        if (r = n.length, 0 === r) var r = n.push({
                            Projections: []
                        });
                        var s = n[r - 1].Projections, t = j(s, a, b, c.values);
                        t > 0 && l && !h.Secondary && (h.Secondary = {
                            Groupings: n
                        });
                    }
                    return p(h, d, e, f), h;
                }
                function f(a) {
                    switch (a["for"]["in"].subtotalType) {
                        case 1:
                            return 1;

                        case 2:
                            return 2;

                        case 0:
                            return 0;
                    }
                }
                function g(a, b) {
                    var c = f(b);
                    if (null != c) for (var d = 0, e = a.length; e > d; d++) a[d].Subtotal = c;
                }
                function h(a) {
                    for (var b = {}, c = a.select(), d = 0, e = c.length; e > d; d++) b[c[d].name] = d;
                    return b;
                }
                function i(a, b, c) {
                    for (var d = 0, e = a.length; e > d; d++) {
                        var f = a[d].queryRef, g = c[f];
                        if (b.indexOf(g) < 0) return !1;
                    }
                    return !0;
                }
                function j(a, b, c, d, e) {
                    return k(a, b, c, d, e) + l(a, b, c, d, e);
                }
                function k(a, b, c, d, e) {
                    return d && d.bind ? n(a, b[d.bind.to.role], c, e) : 0;
                }
                function l(a, b, c, d, e) {
                    return d && d["for"] ? n(a, b[d["for"]["in"].role], c, e) : 0;
                }
                function m(a, b, c, d, e) {
                    if (d && d.select) {
                        for (var f = 0, g = 0, h = d.select.length; h > g; g++) f += j(a, b, c, d.select[g], e);
                        return f;
                    }
                    return 0;
                }
                function n(a, b, c, d) {
                    if (!b) return 0;
                    for (var e = 0, f = b.length; f > e; e++) {
                        var g = b[e].queryRef, h = c[g];
                        a.indexOf(h) >= 0 || (a.push(h), d && d.push(h));
                    }
                    return a.length;
                }
                function o(a, b, c, d) {
                    if (d && d["for"]) {
                        var e = b[d["for"]["in"].role];
                        if (e) for (var f = 0, g = e.length; g > f; f++) {
                            var h = e[f].queryRef, i = c[h];
                            a.some(function (a) {
                                return a.Projections.indexOf(i) >= 0;
                            }) || a.push({
                                Projections: [i]
                            });
                        }
                    }
                }
                function p(a, b, c, d) {
                    (c || d) && (a.DataReduction = {}, b && (a.DataReduction.DataVolume = b), c && (a.DataReduction.Primary = c),
                    d && (a.DataReduction.Secondary = d));
                }
                function q(a) {
                    if (a) {
                        var b;
                        return a.top && (b = {
                            Top: {}
                        }, a.top.count && (b.Top.Count = a.top.count)), a.bottom && (b = {
                            Bottom: {}
                        }, a.bottom.count && (b.Bottom.Count = a.bottom.count)), a.sample && (b = {
                            Sample: {}
                        }, a.sample.count && (b.Sample.Count = a.sample.count)), a.window && (b = {
                            Window: {}
                        }, a.window.count && (b.Window.Count = a.window.count)), b;
                    }
                }
                a.generateBaseDataShapeBinding = b, a.getIndicesByName = h;
            }(g || (g = {}));
        }(b = a.dsr || (a.dsr = {}));
    }(b = a.data || (a.data = {}));
}(powerbi || (powerbi = {}));

var powerbi;

!function (a) {
    var b;
    !function (a) {
        var b;
        !function (a) {
            var b;
            !function (a) {
                function b(a, b) {
                    !h(a.metadata.columns, b.metadata.columns), b.metadata.segment || delete a.metadata.segment,
                    a.table && b.table && c(a.table, b.table), a.categorical && b.categorical && d(a.categorical, b.categorical),
                    a.tree && b.tree && f(a.tree.root, b.tree.root, !0), a.matrix && b.matrix && f(a.matrix.rows.root, b.matrix.rows.root, !1);
                }
                function c(a, b) {
                    0 !== b.rows.length && e(a.rows, b.rows, b.lastMergeIndex + 1);
                }
                function d(a, b) {
                    if (a.categories && b.categories) for (var c = b.categories.length, d = 0; c > d; d++) {
                        var f = b.categories[d], g = a.categories[d];
                        !g.values && f.values && (g.values = []), f.values && e(g.values, f.values, b.lastMergeIndex + 1),
                        !g.identity && f.identity && (g.identity = []), f.identity && e(g.identity, f.identity, b.lastMergeIndex + 1);
                    }
                    if (a.values && b.values) for (var h = b.values.length, i = 0; h > i; i++) {
                        var j = b.values[i], k = a.values[i];
                        !k.values && j.values && (k.values = []), j.values && e(k.values, j.values, b.lastMergeIndex + 1),
                        j.highlights && e(k.highlights, j.highlights, b.lastMergeIndex + 1);
                    }
                }
                function e(a, b, c) {
                    if (c >= b.length) return b;
                    var d = [];
                    return void 0 !== c && (d = b.splice(0, c)), Array.prototype.push.apply(a, b), d;
                }
                function f(a, b, c) {
                    if (b.children && 0 !== b.children.length) {
                        if (c && (!a.children || 0 === a.children.length)) return void (a.children = b.children);
                        var d = i(b.children), g = a.children[a.children.length - 1], h = e(a.children, b.children, d);
                        h.length > 0 && f(g, h[h.length - 1], c);
                    }
                }
                function g(a, b) {
                    return a.name !== b.name ? !1 : a.isMeasure !== b.isMeasure ? !1 : a.type !== b.type ? !1 : !0;
                }
                function h(a, b) {
                    if (a.length !== b.length) return !1;
                    for (var c = 0; c < a.length; c++) if (!g(a[c], b[c])) return !1;
                    return !0;
                }
                function i(a) {
                    if (0 === a.length) return 0;
                    for (var b = 0; b < a.length; b++) {
                        var c = a[b];
                        if (!c.isMerge) break;
                    }
                    return b;
                }
                a.mergeDataViews = b, a.mergeTables = c, a.mergeCategorical = d, a.mergeTreeNodes = f,
                a.areColumnArraysMergeEquivalent = h;
            }(b = a.DataViewMerger || (a.DataViewMerger = {}));
        }(b = a.segmentation || (a.segmentation = {}));
    }(b = a.data || (a.data = {}));
}(powerbi || (powerbi = {}));

var powerbi;

!function (a) {
    var b;
    !function (a) {
        var b;
        !function (a) {
            function b(a, b) {
                var d = a.conditions(), e = d[0];
                if (e) {
                    var f = new c(b[0]);
                    if (e.accept(f)) return f.getResult();
                }
            }
            function e(a) {
                var b = a.expr.accept(new d());
                return b ? b.value : void 0;
            }
            a.asScopeIdsContainer = b, a.getFirstComparandValue = e;
        }(b = a.SQExprConverter || (a.SQExprConverter = {}));
        var c = function (b) {
            function c(c) {
                b.call(this), this.isRoot = !0, this.isNot = !1, this.valueExprs = [], this.fieldExpr = a.SQExprBuilder.removeEntityVariables(c);
            }
            return __extends(c, b), c.prototype.getResult = function () {
                for (var a = this.valueExprs, b = [], d = 0, e = a.length; e > d; d++) b.push(c.getScopeIdentity(this.fieldExpr, a[d]));
                return {
                    isNot: this.isNot,
                    scopeIds: b
                };
            }, c.getScopeIdentity = function (b, c) {
                return a.createDataViewScopeIdentity(a.SQExprBuilder.equal(b, c));
            }, c.prototype.visitOr = function (a) {
                return this.isRoot = !1, a.left.accept(this) && a.right.accept(this);
            }, c.prototype.visitNot = function (a) {
                return this.isRoot ? (this.isNot = !0, a.arg.accept(this)) : this.unsupportedSQExpr();
            }, c.prototype.visitConstant = function (a) {
                return this.isRoot && 0 === a.type.primitiveType ? this.unsupportedSQExpr() : (this.valueExprs.push(a),
                !0);
            }, c.prototype.visitCompare = function (a) {
                return this.isRoot = !1, 0 !== a.kind ? this.unsupportedSQExpr() : a.left.accept(this) && a.right.accept(this);
            }, c.prototype.visitColumnRef = function (b) {
                if (this.isRoot) return this.unsupportedSQExpr();
                var c = a.SQExprBuilder.removeEntityVariables(b);
                return a.SQExpr.equals(this.fieldExpr, c);
            }, c.prototype.visitDefault = function () {
                return this.unsupportedSQExpr();
            }, c.prototype.unsupportedSQExpr = function () {
                return !1;
            }, c;
        }(a.DefaultSQExprVisitor), d = function (b) {
            function c() {
                b.apply(this, arguments);
            }
            return __extends(c, b), c.prototype.visitAnd = function (a) {
                return a.left.accept(this) || a.right.accept(this);
            }, c.prototype.visitCompare = function (b) {
                if (0 === b.kind) {
                    if (b.right instanceof a.SQConstantExpr) return b.right;
                    if (b.left instanceof a.SQConstantExpr) return b.left;
                }
            }, c;
        }(a.DefaultSQExprVisitor);
    }(b = a.data || (a.data = {}));
}(powerbi || (powerbi = {}));

var powerbi;

!function (a) {
    var b;
    !function (a) {
        var b, c = jsCommon.ArrayExtensions;
        !function (b) {
            function d(a) {
                var b = new e();
                return a.accept(b), b.malformed ? null : c.emptyToNull(b.keys);
            }
            b.run = d;
            var e = function (a) {
                function b() {
                    a.apply(this, arguments), this.keys = [];
                }
                return __extends(b, a), b.prototype.visitAnd = function (a) {
                    a.left.accept(this), a.right.accept(this);
                }, b.prototype.visitCompare = function (a) {
                    return 0 !== a.kind ? void this.visitDefault(a) : (a.left.accept(this), void a.right.accept(this));
                }, b.prototype.visitColumnRef = function (a) {
                    this.keys.push(a);
                }, b.prototype.visitConstant = function () { }, b.prototype.visitDefault = function () {
                    this.malformed = !0;
                }, b;
            }(a.DefaultSQExprVisitor);
        }(b = a.ScopeIdentityKeyExtractor || (a.ScopeIdentityKeyExtractor = {}));
    }(b = a.data || (a.data = {}));
}(powerbi || (powerbi = {}));

var powerbi;

!function (a) {
    var b;
    !function (a) {
        var b;
        !function (a) {
            function b(a) {
                return a.accept(d.instance);
            }
            a.asSQFieldDef = b;
        }(b = a.SQExprConverter || (a.SQExprConverter = {}));
        var c;
        !function (a) {
            function b(a) {
                return c(a) || d(a) || e(a) || f(a);
            }
            function c(b) {
                var c = b.aggregate;
                if (void 0 !== c) {
                    var e = d(b) || f(b);
                    if (e) return a.aggregate(e, c);
                }
            }
            function d(b) {
                var c = b.column;
                if (c) {
                    var d = f(b);
                    if (d) return a.columnRef(d, c);
                }
            }
            function e(b) {
                var c = b.measure;
                if (c) {
                    var d = f(b);
                    if (d) return a.measureRef(d, c);
                }
            }
            function f(b) {
                return a.entity(b.schema, b.entity, b.entityVar);
            }
            a.fieldDef = b;
        }(c = a.SQExprBuilder || (a.SQExprBuilder = {}));
        var d = function (a) {
            function b() {
                a.apply(this, arguments);
            }
            return __extends(b, a), b.prototype.visitColumnRef = function (a) {
                var b = a.source.accept(this);
                return b ? (b.column = a.ref, b) : void 0;
            }, b.prototype.visitMeasureRef = function (a) {
                var b = a.source.accept(this);
                return b ? (b.measure = a.ref, b) : void 0;
            }, b.prototype.visitAggr = function (a) {
                var b = a.arg.accept(this);
                return b ? (b.aggregate = a.func, b) : void 0;
            }, b.prototype.visitEntity = function (a) {
                var b = {
                    schema: a.schema,
                    entity: a.entity
                };
                return a.variable && (b.entityVar = a.variable), b;
            }, b.instance = new b(), b;
        }(a.DefaultSQExprVisitor);
    }(b = a.data || (a.data = {}));
}(powerbi || (powerbi = {}));

var powerbi;

!function (a) {
    var b;
    !function (a) {
        var b, c = jsCommon.DateExtensions, d = jsCommon.StringExtensions;
        !function (b) {
            function e(a) {
                return a + "M";
            }
            function f(a) {
                return a + "D";
            }
            function g(a) {
                return a + "L";
            }
            function h(a) {
                var b = new Date(a.getTime() - 6e4 * a.getTimezoneOffset()), c = b.toISOString();
                return jsCommon.StringExtensions.endsWith(c, "Z") && (c = c.substr(0, c.length - 1)),
                "datetime'" + c + "'";
            }
            function i(a) {
                return "'" + a.replace("'", "''") + "'";
            }
            function j() {
                return "null";
            }
            function k(a) {
                return a ? "true" : "false";
            }
            function l(a) {
                return n(a);
            }
            function m(a) {
                return n(a, !0);
            }
            function n(b, e) {
                if ("string" == typeof b) {
                    if (d.endsWith(b, "L")) {
                        var f = parseInt(b, 10);
                        return e ? a.SQExprBuilder.integer(f, b) : f;
                    }
                    if (d.endsWith(b, "D")) {
                        var g = o(b);
                        return e ? a.SQExprBuilder["double"](g, b) : g;
                    }
                    if (d.endsWith(b, "M")) {
                        var h = o(b);
                        return e ? a.SQExprBuilder.decimal(h, b) : h;
                    }
                    if (d.endsWith(b, "'")) {
                        if ("'" === b.charAt(0)) {
                            var i = b.substring(1, b.length - 1).replace("''", "'");
                            return e ? a.SQExprBuilder.text(i, b) : i;
                        }
                        if (0 === b.indexOf("datetime'")) {
                            var j = b.substring(9, b.length - 1), k = c.parseIsoDate(j);
                            return e ? a.SQExprBuilder.dateTime(k, b) : k;
                        }
                    }
                    if ("null" === b) return e ? a.SQExprBuilder.nullConstant() : null;
                    if ("true" === b) return e ? a.SQExprBuilder["boolean"](!0) : !0;
                    if ("false" === b) return e ? a.SQExprBuilder["boolean"](!1) : !1;
                }
                return "boolean" == typeof b ? e ? a.SQExprBuilder["boolean"](b) : b : null == b ? e ? a.SQExprBuilder.nullConstant() : null : b;
            }
            function o(a) {
                var b = parseFloat(a);
                return isNaN(b) ? parseFloat(a.replace("INF", "Infinity")) : b;
            }
            b.decimal = e, b["double"] = f, b.integer = g, b.dateTime = h, b.text = i, b.nullEncoding = j,
            b["boolean"] = k, b.parseValue = l, b.parseValueToSQExpr = m;
        }(b = a.PrimitiveValueEncoding || (a.PrimitiveValueEncoding = {}));
    }(b = a.data || (a.data = {}));
}(powerbi || (powerbi = {}));

var powerbi;

!function (a) {
    var b;
    !function (a) {
        !function (a) {
            a[a.Version0 = 0] = "Version0", a[a.Version1 = 1] = "Version1", a[a.Version2 = 2] = "Version2";
        }(a.SemanticQueryVersions || (a.SemanticQueryVersions = {}));
        a.SemanticQueryVersions;
    }(b = a.data || (a.data = {}));
}(powerbi || (powerbi = {}));

var powerbi;

!function (a) {
    var b;
    !function (a) {
        var b = jsCommon.ArrayExtensions, c = function () {
            function c() { }
            return c.prototype.visitColumnRef = function (b) {
                var c = b.source, d = c.accept(this);
                return c === d ? b : new a.SQColumnRefExpr(d, b.ref);
            }, c.prototype.visitMeasureRef = function (b) {
                var c = b.source, d = c.accept(this);
                return c === d ? b : new a.SQMeasureRefExpr(d, b.ref);
            }, c.prototype.visitAggr = function (b) {
                var c = b.arg, d = c.accept(this);
                return c === d ? b : new a.SQAggregationExpr(d, b.func);
            }, c.prototype.visitEntity = function (a) {
                return a;
            }, c.prototype.visitAnd = function (b) {
                var c = b.left, d = c.accept(this), e = b.right, f = e.accept(this);
                return c === d && e === f ? b : new a.SQAndExpr(d, f);
            }, c.prototype.visitBetween = function (b) {
                var c = b.arg, d = c.accept(this), e = b.lower, f = e.accept(this), g = b.upper, h = g.accept(this);
                return c === d && e === f && g === h ? b : new a.SQBetweenExpr(d, f, h);
            }, c.prototype.visitIn = function (c) {
                for (var d, e = c.args, f = this.rewriteAll(e), g = c.values, h = 0, i = g.length; i > h; h++) {
                    var j = g[h], k = this.rewriteAll(j);
                    j === k || d || (d = b.take(g, h)), d && d.push(k);
                }
                return e !== f || d ? new a.SQInExpr(f, d || g) : c;
            }, c.prototype.rewriteAll = function (a) {
                for (var c, d = 0, e = a.length; e > d; d++) {
                    var f = a[d], g = f.accept(this);
                    f === g || c || (c = b.take(a, d)), c && c.push(g);
                }
                return c || a;
            }, c.prototype.visitOr = function (b) {
                var c = b.left, d = c.accept(this), e = b.right, f = e.accept(this);
                return c === d && e === f ? b : new a.SQOrExpr(d, f);
            }, c.prototype.visitCompare = function (b) {
                var c = b.left, d = c.accept(this), e = b.right, f = e.accept(this);
                return c === d && e === f ? b : new a.SQCompareExpr(b.kind, d, f);
            }, c.prototype.visitContains = function (b) {
                var c = b.left, d = c.accept(this), e = b.right, f = e.accept(this);
                return c === d && e === f ? b : new a.SQContainsExpr(d, f);
            }, c.prototype.visitExists = function (b) {
                var c = b.arg, d = c.accept(this);
                return c === d ? b : new a.SQExistsExpr(d);
            }, c.prototype.visitNot = function (b) {
                var c = b.arg, d = c.accept(this);
                return c === d ? b : new a.SQNotExpr(d);
            }, c.prototype.visitStartsWith = function (b) {
                var c = b.left, d = c.accept(this), e = b.right, f = e.accept(this);
                return c === d && e === f ? b : new a.SQStartsWithExpr(d, f);
            }, c.prototype.visitConstant = function (a) {
                return a;
            }, c.prototype.visitDateSpan = function (b) {
                var c = b.arg, d = c.accept(this);
                return c === d ? b : new a.SQDateSpanExpr(b.unit, d);
            }, c.prototype.visitDateAdd = function (b) {
                var c = b.arg, d = c.accept(this);
                return c === d ? b : new a.SQDateAddExpr(b.unit, b.amount, d);
            }, c.prototype.visitNow = function (a) {
                return a;
            }, c;
        }();
        a.SQExprRewriter = c;
    }(b = a.data || (a.data = {}));
}(powerbi || (powerbi = {}));

var powerbi;

!function (a) {
    var b;
    !function (a) {
        function b(a) {
            for (var b = [], e = 0, f = a.length; f > e; e++) {
                var g = a[e];
                g.entityRename && b.push(new c(g.entityRename)), g.propertyRename && b.push(new d(g.propertyRename));
            }
            return b;
        }
        a.createSchemaChangeRewriters = b;
        var c = function (b) {
            function c(a) {
                b.call(this), this.change = a;
            }
            return __extends(c, b), c.prototype.visitEntity = function (b) {
                var c = this.change;
                return b.schema === c.schema && b.entity === c.before ? new a.SQEntityExpr(b.schema, c.after, b.variable) : b;
            }, c;
        }(a.SQExprRewriter), d = function (b) {
            function c(a) {
                b.call(this), this.change = a;
            }
            return __extends(c, b), c.prototype.visitColumnRef = function (b) {
                var c = this.change;
                return this.matches(c, b) ? new a.SQColumnRefExpr(b.source, c.after) : b;
            }, c.prototype.visitMeasureRef = function (b) {
                var c = this.change;
                return this.matches(c, b) ? new a.SQMeasureRefExpr(b.source, c.after) : b;
            }, c.prototype.matches = function (a, b) {
                var c = b.asFieldDef();
                return c.schema === a.schema && c.entity === a.entity && b.ref === a.before;
            }, c;
        }(a.SQExprRewriter);
    }(b = a.data || (a.data = {}));
}(powerbi || (powerbi = {}));

var powerbi;

!function (a) {
    var b;
    !function (b) {
        function c(a) {
            return a.integer || a.numeric ? 0 : 2;
        }
        function d(a) {
            switch (a) {
                case 6:
                    return 1;

                case 3:
                    return 5;

                case 7:
                    return 2;

                case 5:
                    return 4;

                case 4:
                    return 3;

                case 2:
                    return 0;

                default:
                    return;
            }
        }
        var e = jsCommon.StringExtensions, f = function () {
            function e() { }
            return e.prototype.asFieldDef = function () {
                return b.SQExprConverter.asSQFieldDef(this);
            }, e.equals = function (a, b, c) {
                return A.run(a, b, c);
            }, e.prototype.validate = function (a) {
                var b = new C(a);
                return this.accept(b), b.errors;
            }, e.prototype.accept = function () { }, e.prototype.getMetadata = function (a) {
                var b = this.asFieldDef();
                if (b) return b.column || b.measure ? this.getMetadataForProperty(b, a) : e.getMetadataForEntity(b, a);
            }, e.prototype.getDefaultAggregate = function (a, b) {
                void 0 === b && (b = !1);
                var e = this.getConceptualProperty(a);
                if (e) {
                    var f;
                    if (e && 0 === e.kind) {
                        var g = e.column ? e.column.defaultAggregate : null;
                        (e.type.integer || e.type.numeric) && 1 !== g && (f = d(g), void 0 === f && (f = c(e.type))),
                        void 0 === f && b && (f = 5);
                    }
                    return f;
                }
            }, e.prototype.getKeyColumns = function (a) {
                var b = E.getColumnRefSQExpr(this);
                if (b) {
                    var c = this.getConceptualProperty(a);
                    if (c) {
                        var d = [], e = c.column ? c.column.keys : void 0;
                        if (e && e.length > 0) for (var f = 0, g = e.length; g > f; f++) d.push(y.columnRef(b.source, e[f].name)); else d.push(b);
                        return d;
                    }
                }
            }, e.prototype.getConceptualProperty = function (a) {
                var b = this.asFieldDef();
                if (b) return a.schema(b.schema).findProperty(b.entity, b.column || b.measure);
            }, e.prototype.getMetadataForProperty = function (b, c) {
                var d = this.getConceptualProperty(c);
                if (d) {
                    var e = d.format, f = d.type;
                    return (2 === b.aggregate || 5 === b.aggregate) && (f = a.ValueType.fromExtendedType(a.ExtendedType.Integer),
                    e = void 0), {
                        kind: 1 === d.kind || void 0 !== b.aggregate ? 1 : 0,
                        type: f,
                        format: e,
                        idOnEntityKey: d.column ? d.column.idOnEntityKey : !1,
                        aggregate: b.aggregate,
                        defaultAggregate: d.column ? d.column.defaultAggregate : null
                    };
                }
            }, e.getMetadataForEntity = function (b, c) {
                var d = c.schema(b.schema).entities.withName(b.entity);
                if (d) return 2 === b.aggregate || 5 === b.aggregate ? {
                    kind: 1,
                    type: a.ValueType.fromExtendedType(a.ExtendedType.Integer),
                    format: void 0,
                    idOnEntityKey: !1,
                    aggregate: b.aggregate
                } : void 0;
            }, e;
        }();
        b.SQExpr = f, function (a) {
            a[a.Column = 0] = "Column", a[a.Measure = 1] = "Measure";
        }(b.FieldKind || (b.FieldKind = {}));
        b.FieldKind;
        b.defaultAggregateForDataType = c, b.defaultAggregateToQueryAggregateFunction = d;
        var g = function (a) {
            function b(b, c, d) {
                a.call(this), this.schema = b, this.entity = c, d && (this.variable = d);
            }
            return __extends(b, a), b.prototype.accept = function (a, b) {
                return a.visitEntity(this, b);
            }, b;
        }(f);
        b.SQEntityExpr = g;
        var h = function (a) {
            function b(b, c) {
                a.call(this), this.source = b, this.ref = c;
            }
            return __extends(b, a), b;
        }(f);
        b.SQPropRefExpr = h;
        var i = function (a) {
            function b(b, c) {
                a.call(this, b, c);
            }
            return __extends(b, a), b.prototype.accept = function (a, b) {
                return a.visitColumnRef(this, b);
            }, b;
        }(h);
        b.SQColumnRefExpr = i;
        var j = function (a) {
            function b(b, c) {
                a.call(this, b, c);
            }
            return __extends(b, a), b.prototype.accept = function (a, b) {
                return a.visitMeasureRef(this, b);
            }, b;
        }(h);
        b.SQMeasureRefExpr = j;
        var k = function (a) {
            function b(b, c) {
                a.call(this), this.arg = b, this.func = c;
            }
            return __extends(b, a), b.prototype.accept = function (a, b) {
                return a.visitAggr(this, b);
            }, b;
        }(f);
        b.SQAggregationExpr = k;
        var l = function (a) {
            function b(b, c) {
                a.call(this), this.left = b, this.right = c;
            }
            return __extends(b, a), b.prototype.accept = function (a, b) {
                return a.visitAnd(this, b);
            }, b;
        }(f);
        b.SQAndExpr = l;
        var m = function (a) {
            function b(b, c, d) {
                a.call(this), this.arg = b, this.lower = c, this.upper = d;
            }
            return __extends(b, a), b.prototype.accept = function (a, b) {
                return a.visitBetween(this, b);
            }, b;
        }(f);
        b.SQBetweenExpr = m;
        var n = function (a) {
            function b(b, c) {
                a.call(this), this.args = b, this.values = c;
            }
            return __extends(b, a), b.prototype.accept = function (a, b) {
                return a.visitIn(this, b);
            }, b;
        }(f);
        b.SQInExpr = n;
        var o = function (a) {
            function b(b, c) {
                a.call(this), this.left = b, this.right = c;
            }
            return __extends(b, a), b.prototype.accept = function (a, b) {
                return a.visitOr(this, b);
            }, b;
        }(f);
        b.SQOrExpr = o;
        var p = function (a) {
            function b(b, c, d) {
                a.call(this), this.kind = b, this.left = c, this.right = d;
            }
            return __extends(b, a), b.prototype.accept = function (a, b) {
                return a.visitCompare(this, b);
            }, b;
        }(f);
        b.SQCompareExpr = p;
        var q = function (a) {
            function b(b, c) {
                a.call(this), this.left = b, this.right = c;
            }
            return __extends(b, a), b.prototype.accept = function (a, b) {
                return a.visitContains(this, b);
            }, b;
        }(f);
        b.SQContainsExpr = q;
        var r = function (a) {
            function b(b, c) {
                a.call(this), this.left = b, this.right = c;
            }
            return __extends(b, a), b.prototype.accept = function (a, b) {
                return a.visitStartsWith(this, b);
            }, b;
        }(f);
        b.SQStartsWithExpr = r;
        var s = function (a) {
            function b(b) {
                a.call(this), this.arg = b;
            }
            return __extends(b, a), b.prototype.accept = function (a, b) {
                return a.visitExists(this, b);
            }, b;
        }(f);
        b.SQExistsExpr = s;
        var t = function (a) {
            function b(b) {
                a.call(this), this.arg = b;
            }
            return __extends(b, a), b.prototype.accept = function (a, b) {
                return a.visitNot(this, b);
            }, b;
        }(f);
        b.SQNotExpr = t;
        var u = function (a) {
            function b(b, c, d) {
                a.call(this), this.type = b, this.value = c, this.valueEncoded = d;
            }
            return __extends(b, a), b.prototype.accept = function (a, b) {
                return a.visitConstant(this, b);
            }, b;
        }(f);
        b.SQConstantExpr = u;
        var v = function (a) {
            function b(b, c) {
                a.call(this), this.unit = b, this.arg = c;
            }
            return __extends(b, a), b.prototype.accept = function (a, b) {
                return a.visitDateSpan(this, b);
            }, b;
        }(f);
        b.SQDateSpanExpr = v;
        var w = function (a) {
            function b(b, c, d) {
                a.call(this), this.unit = b, this.arg = d, this.amount = c;
            }
            return __extends(b, a), b.prototype.accept = function (a, b) {
                return a.visitDateAdd(this, b);
            }, b;
        }(f);
        b.SQDateAddExpr = w;
        var x = function (a) {
            function b() {
                a.call(this);
            }
            return __extends(b, a), b.prototype.accept = function (a, b) {
                return a.visitNow(this, b);
            }, b;
        }(f);
        b.SQNowExpr = x;
        var y;
        !function (c) {
            function d(a, b, c) {
                return new g(a, b, c);
            }
            function e(a, b) {
                return new i(a, b);
            }
            function f(a, b) {
                return new j(a, b);
            }
            function h(a, b) {
                return new k(a, b);
            }
            function y(a, b) {
                return new l(a, b);
            }
            function z(a, b, c) {
                return new m(a, b, c);
            }
            function A(a, b) {
                return new n(a, b);
            }
            function B(a, b) {
                return new o(a, b);
            }
            function C(a, b, c) {
                return new p(a, b, c);
            }
            function D(a, b) {
                return new q(a, b);
            }
            function E(a) {
                return new s(a);
            }
            function I(a, b) {
                return C(0, a, b);
            }
            function J(a) {
                return new t(a);
            }
            function K(a, b) {
                return new r(a, b);
            }
            function L() {
                return new u(a.ValueType.fromExtendedType(0), null, b.PrimitiveValueEncoding.nullEncoding());
            }
            function M() {
                return new x();
            }
            function N(c) {
                return new u(a.ValueType.fromExtendedType(5), c, b.PrimitiveValueEncoding["boolean"](c));
            }
            function O(a, b, c) {
                return new w(a, b, c);
            }
            function P(c, d) {
                return void 0 === d && (d = b.PrimitiveValueEncoding.dateTime(c)), new u(a.ValueType.fromExtendedType(a.ExtendedType.DateTime), c, d);
            }
            function Q(a, b) {
                return new v(a, b);
            }
            function R(c, d) {
                return void 0 === d && (d = b.PrimitiveValueEncoding.decimal(c)), new u(a.ValueType.fromExtendedType(a.ExtendedType.Decimal), c, d);
            }
            function S(c, d) {
                return void 0 === d && (d = b.PrimitiveValueEncoding["double"](c)), new u(a.ValueType.fromExtendedType(a.ExtendedType.Double), c, d);
            }
            function T(c, d) {
                return void 0 === d && (d = b.PrimitiveValueEncoding.integer(c)), new u(a.ValueType.fromExtendedType(a.ExtendedType.Integer), c, d);
            }
            function U(c, d) {
                return new u(a.ValueType.fromExtendedType(1), c, d || b.PrimitiveValueEncoding.text(c));
            }
            function V(a, b) {
                return F.rewrite(a, b);
            }
            function W(a) {
                return G.rewrite(a);
            }
            function X(a) {
                return H.rewrite(a);
            }
            function Y(a, b, d) {
                var e = a.getDefaultAggregate(b, d);
                return void 0 !== e && (a = c.aggregate(a, e)), a;
            }
            c.entity = d, c.columnRef = e, c.measureRef = f, c.aggregate = h, c.and = y, c.between = z,
            c.inExpr = A, c.or = B, c.compare = C, c.contains = D, c.exists = E, c.equal = I,
            c.not = J, c.startsWith = K, c.nullConstant = L, c.now = M, c["boolean"] = N, c.dateAdd = O,
            c.dateTime = P, c.dateSpan = Q, c.decimal = R, c["double"] = S, c.integer = T, c.text = U,
            c.setAggregate = V, c.removeAggregate = W, c.removeEntityVariables = X, c.createExprWithAggregate = Y;
        }(y = b.SQExprBuilder || (b.SQExprBuilder = {}));
        var z;
        !function (a) {
            function b(a) {
                return D.getAggregate(a);
            }
            a.getAggregate = b;
        }(z = b.SQExprInfo || (b.SQExprInfo = {}));
        var A = function () {
            function a(a) {
                this.ignoreCase = a;
            }
            return a.run = function (b, c, d) {
                return b = b || null, c = c || null, b === c ? !0 : !b != !c ? !1 : d ? b.accept(a.ignoreCaseInstance, c) : b.accept(a.instance, c);
            }, a.prototype.visitColumnRef = function (a, b) {
                return b instanceof i && a.ref === b.ref && this.equals(a.source, b.source);
            }, a.prototype.visitMeasureRef = function (a, b) {
                return b instanceof j && a.ref === b.ref && this.equals(a.source, b.source);
            }, a.prototype.visitAggr = function (a, b) {
                return b instanceof k && a.func === b.func && this.equals(a.arg, b.arg);
            }, a.prototype.visitBetween = function (a, b) {
                return b instanceof m && this.equals(a.arg, b.arg) && this.equals(a.lower, b.lower) && this.equals(a.upper, b.upper);
            }, a.prototype.visitIn = function (a, b) {
                if (!(b instanceof n && this.equalsAll(a.args, b.args))) return !1;
                var c = a.values, d = b.values;
                if (c.length !== d.length) return !1;
                for (var e = 0, f = c.length; f > e; e++) if (!this.equalsAll(c[e], d[e])) return !1;
                return !0;
            }, a.prototype.visitEntity = function (a, b) {
                return b instanceof g && a.schema === b.schema && a.entity === b.entity && this.optionalEqual(a.variable, b.variable);
            }, a.prototype.visitAnd = function (a, b) {
                return b instanceof l && this.equals(a.left, b.left) && this.equals(a.right, b.right);
            }, a.prototype.visitOr = function (a, b) {
                return b instanceof o && this.equals(a.left, b.left) && this.equals(a.right, b.right);
            }, a.prototype.visitCompare = function (a, b) {
                return b instanceof p && a.kind === b.kind && this.equals(a.left, b.left) && this.equals(a.right, b.right);
            }, a.prototype.visitContains = function (a, b) {
                return b instanceof q && this.equals(a.left, b.left) && this.equals(a.right, b.right);
            }, a.prototype.visitDateSpan = function (a, b) {
                return b instanceof v && a.unit === b.unit && this.equals(a.arg, b.arg);
            }, a.prototype.visitDateAdd = function (a, b) {
                return b instanceof w && a.unit === b.unit && a.amount === b.amount && this.equals(a.arg, b.arg);
            }, a.prototype.visitExists = function (a, b) {
                return b instanceof s && this.equals(a.arg, b.arg);
            }, a.prototype.visitNot = function (a, b) {
                return b instanceof t && this.equals(a.arg, b.arg);
            }, a.prototype.visitNow = function (a, b) {
                return b instanceof x;
            }, a.prototype.visitStartsWith = function (a, b) {
                return b instanceof r && this.equals(a.left, b.left) && this.equals(a.right, b.right);
            }, a.prototype.visitConstant = function (a, b) {
                return b instanceof u && a.type === b.type ? a.type.text && this.ignoreCase ? e.equalIgnoreCase(a.valueEncoded, b.valueEncoded) : a.valueEncoded === b.valueEncoded : !1;
            }, a.prototype.optionalEqual = function (a, b) {
                return a && b ? a === b : !0;
            }, a.prototype.equals = function (a, b) {
                return a.accept(this, b);
            }, a.prototype.equalsAll = function (a, b) {
                var c = a.length;
                if (c !== b.length) return !1;
                for (var d = 0; c > d; d++) if (!this.equals(a[d], b[d])) return !1;
                return !0;
            }, a.instance = new a(!1), a.ignoreCaseInstance = new a(!0), a;
        }(), B = function (a) {
            function b() {
                a.apply(this, arguments);
            }
            return __extends(b, a), b.prototype.visitDefault = function (a) {
                return a;
            }, b;
        }(b.DefaultSQExprVisitor);
        !function (a) {
            a[a.invalidSchemaReference = 0] = "invalidSchemaReference", a[a.invalidEntityReference = 1] = "invalidEntityReference",
            a[a.invalidColumnReference = 2] = "invalidColumnReference", a[a.invalidMeasureReference = 3] = "invalidMeasureReference",
            a[a.invalidLeftOperandType = 4] = "invalidLeftOperandType", a[a.invalidRightOperandType = 5] = "invalidRightOperandType";
        }(b.SQExprValidationError || (b.SQExprValidationError = {}));
        var C = (b.SQExprValidationError, function (a) {
            function b(b) {
                a.call(this), this.schema = b;
            }
            return __extends(b, a), b.prototype.visitColumnRef = function (a) {
                var b = a.asFieldDef();
                if (b) {
                    var c = this.validateEntity(b.schema, b.entity);
                    if (c) {
                        var d = c.properties.withName(b.column);
                        d && 0 === d.kind || this.register(2);
                    }
                }
                return a;
            }, b.prototype.visitMeasureRef = function (a) {
                var b = a.asFieldDef();
                if (b) {
                    var c = this.validateEntity(b.schema, b.entity);
                    if (c) {
                        var d = c.properties.withName(b.measure);
                        d && 1 === d.kind || this.register(3);
                    }
                }
                return a;
            }, b.prototype.visitEntity = function (a) {
                return this.validateEntity(a.schema, a.entity), a;
            }, b.prototype.visitContains = function (a) {
                var b = a.left, c = a.right;
                return b instanceof i ? c instanceof u && c.type.text || this.register(5) : this.register(4),
                a;
            }, b.prototype.visitStartsWith = function (a) {
                var b = a.left, c = a.right;
                return b instanceof i ? c instanceof u && c.type.text || this.register(5) : this.register(4),
                a;
            }, b.prototype.validateEntity = function (a, b) {
                var c = this.schema.schema(a);
                if (c) {
                    var d = c.entities.withName(b);
                    if (d) return d;
                    this.register(1);
                } else this.register(0);
            }, b.prototype.register = function (a) {
                this.errors || (this.errors = []), this.errors.push(a);
            }, b;
        }(b.SQExprRewriter)), D = function (a) {
            function b() {
                a.apply(this, arguments);
            }
            return __extends(b, a), b.prototype.visitAggr = function (a) {
                return a.func;
            }, b.prototype.visitDefault = function () { }, b.getAggregate = function (a) {
                var c = new b();
                return a.accept(c);
            }, b;
        }(b.DefaultSQExprVisitor), E = function (a) {
            function b() {
                a.apply(this, arguments);
            }
            return __extends(b, a), b.prototype.visitColumnRef = function (a) {
                return a;
            }, b.prototype.visitDefault = function () { }, b.getColumnRefSQExpr = function (a) {
                var c = new b();
                return a.accept(c);
            }, b;
        }(b.DefaultSQExprVisitor), F = function (a) {
            function b(b) {
                a.call(this), this.func = b;
            }
            return __extends(b, a), b.prototype.visitAggr = function (a) {
                return a.func === this.func ? a : new k(a.arg, this.func);
            }, b.prototype.visitColumnRef = function (a) {
                return new k(a, this.func);
            }, b.rewrite = function (a, c) {
                var d = new b(c);
                return a.accept(d);
            }, b;
        }(B), G = function (a) {
            function b() {
                a.apply(this, arguments);
            }
            return __extends(b, a), b.prototype.visitAggr = function (a) {
                return a.arg;
            }, b.rewrite = function (a) {
                return a.accept(b.instance);
            }, b.instance = new b(), b;
        }(B), H = function (a) {
            function b() {
                a.apply(this, arguments);
            }
            return __extends(b, a), b.prototype.visitEntity = function (a) {
                return a.variable ? y.entity(a.schema, a.entity) : a;
            }, b.rewrite = function (a) {
                return a.accept(b.instance);
            }, b.instance = new b(), b;
        }(b.SQExprRewriter);
    }(b = a.data || (a.data = {}));
}(powerbi || (powerbi = {}));

var powerbi;

!function (a) {
    var b;
    !function (a) {
        var b = function () {
            function b(a) {
                this.exprRewriter = a;
            }
            return b.prototype.rewriteFrom = function (b) {
                for (var c = {}, d = b, e = d.keys(), f = 0, g = e.length; g > f; f++) {
                    var h = e[f], i = d.entity(h), j = a.SQExprBuilder.entity(i.schema, i.entity, h), k = j.accept(this.exprRewriter);
                    c[h] = {
                        schema: k.schema,
                        entity: k.entity
                    };
                }
                return new a.SQFrom(c);
            }, b.prototype.rewriteSelect = function (b, c) {
                if (b && 0 !== b.length) {
                    for (var d = [], e = 0, f = b.length; f > e; e++) {
                        var g = b[e];
                        d.push({
                            name: g.name,
                            expr: a.SQExprRewriterWithSourceRenames.rewrite(g.expr.accept(this.exprRewriter), c)
                        });
                    }
                    return d;
                }
            }, b.prototype.rewriteOrderBy = function (b, c) {
                if (b && 0 !== b.length) {
                    for (var d = [], e = 0, f = b.length; f > e; e++) {
                        var g = b[e], h = a.SQExprRewriterWithSourceRenames.rewrite(g.expr.accept(this.exprRewriter), c);
                        d.push({
                            direction: g.direction,
                            expr: h
                        });
                    }
                    return d;
                }
            }, b.prototype.rewriteWhere = function (b, c) {
                var d = this;
                if (b && 0 !== b.length) {
                    for (var e = [], f = 0, g = b.length; g > f; f++) {
                        var h = b[f], i = {
                            condition: a.SQExprRewriterWithSourceRenames.rewrite(h.condition.accept(this.exprRewriter), c)
                        };
                        h.target && (i.target = h.target.map(function (b) {
                            return a.SQExprRewriterWithSourceRenames.rewrite(b.accept(d.exprRewriter), c);
                        })), e.push(i);
                    }
                    return e;
                }
            }, b;
        }();
        a.SemanticQueryRewriter = b;
    }(b = a.data || (a.data = {}));
}(powerbi || (powerbi = {}));

var powerbi;

!function (a) {
    var b;
    !function (a) {
        var b = jsCommon.ArrayExtensions, c = jsCommon.StringExtensions, d = function () {
            function c(a, b, c, d) {
                this.fromValue = a, this.whereItems = b, this.orderByItems = c, this.selectItems = d;
            }
            return c.create = function () {
                return c.empty || (c.empty = new c(new f(), null, null, [])), c.empty;
            }, c.createWithTrimmedFrom = function (a, b, d, e) {
                var f = new k(a.keys());
                if (b) for (var g = 0, h = b.length; h > g; g++) {
                    var i = b[g];
                    i.condition.accept(f);
                    var j = i.target;
                    if (j) for (var l = 0, m = j.length; m > l; l++) j[l] && j[l].accept(f);
                }
                if (d) for (var g = 0, h = d.length; h > g; g++) d[g].expr.accept(f);
                for (var g = 0, h = e.length; h > g; g++) e[g].expr.accept(f);
                for (var n = f.result(), g = 0, h = n.length; h > g; g++) a.remove(n[g]);
                return new c(a, b, d, e);
            }, c.prototype.from = function () {
                return this.fromValue.clone();
            }, c.prototype.select = function (a) {
                return 0 === arguments.length ? this.getSelect() : this.setSelect(a);
            }, c.prototype.getSelect = function () {
                return b.extendWithName(this.selectItems.map(function (a) {
                    return {
                        name: a.name,
                        expr: a.expr
                    };
                }));
            }, c.prototype.setSelect = function (a) {
                for (var b = [], d = this.fromValue.clone(), e = 0, f = a.length; f > e; e++) {
                    var g = a[e];
                    b.push({
                        name: g.name,
                        expr: i.rewrite(g.expr, d)
                    });
                }
                return c.createWithTrimmedFrom(d, this.whereItems, this.orderByItems, b);
            }, c.prototype.removeSelect = function (b) {
                for (var d = this.selectItems, e = [], f = 0, g = d.length; g > f; f++) {
                    var h = d[f];
                    a.SQExpr.equals(h.expr, b) || e.push(h);
                }
                return c.createWithTrimmedFrom(this.fromValue.clone(), this.whereItems, this.orderByItems, e);
            }, c.prototype.removeOrderBy = function (b) {
                for (var d = this.orderBy(), e = d.length - 1; e >= 0; e--) a.SQExpr.equals(d[e].expr, b) && d.splice(e, 1);
                return c.createWithTrimmedFrom(this.fromValue.clone(), this.whereItems, d, this.selectItems);
            }, c.prototype.selectNameOf = function (a) {
                var b = g.indexOfExpr(this.selectItems.map(function (a) {
                    return a.expr;
                }), a);
                return b >= 0 ? this.selectItems[b].name : void 0;
            }, c.prototype.setSelectAt = function (a, b) {
                if (!(a >= this.selectItems.length)) {
                    var d = this.select(), e = this.fromValue.clone(), f = d[a].name;
                    return d[a] = {
                        name: f,
                        expr: i.rewrite(b, e)
                    }, c.createWithTrimmedFrom(e, this.whereItems, this.orderByItems, d);
                }
            }, c.prototype.addSelect = function (a) {
                var b = this.select(), d = this.fromValue.clone();
                return b.push({
                    name: h.uniqueName(b),
                    expr: i.rewrite(a, d)
                }), c.createWithTrimmedFrom(d, this.whereItems, this.orderByItems, b);
            }, c.prototype.orderBy = function (a) {
                return 0 === arguments.length ? this.getOrderBy() : this.setOrderBy(a);
            }, c.prototype.getOrderBy = function () {
                var a = [], b = this.orderByItems;
                if (b) for (var c = 0, d = b.length; d > c; c++) {
                    var e = b[c];
                    a.push({
                        expr: e.expr,
                        direction: e.direction
                    });
                }
                return a;
            }, c.prototype.setOrderBy = function (a) {
                for (var b = [], d = this.fromValue.clone(), e = 0, f = a.length; f > e; e++) {
                    var g = a[e];
                    b.push({
                        expr: i.rewrite(g.expr, d),
                        direction: g.direction
                    });
                }
                return c.createWithTrimmedFrom(d, this.whereItems, b, this.selectItems);
            }, c.prototype.where = function (a) {
                return 0 === arguments.length ? this.getWhere() : this.setWhere(a);
            }, c.prototype.getWhere = function () {
                var a = [], b = this.whereItems;
                if (b) for (var c = 0, d = b.length; d > c; c++) a.push(b[c]);
                return a;
            }, c.prototype.setWhere = function (a) {
                for (var b = [], d = this.fromValue.clone(), e = 0, f = a.length; f > e; e++) {
                    var g = a[e], h = {
                        condition: i.rewrite(g.condition, d)
                    }, j = g.target;
                    if (j) {
                        h.target = [];
                        for (var k = 0, l = j.length; l > k; k++) if (j[k]) {
                            var m = i.rewrite(j[k], d);
                            h.target.push(m);
                        }
                    }
                    b.push(h);
                }
                return c.createWithTrimmedFrom(d, b, this.orderByItems, this.selectItems);
            }, c.prototype.addWhere = function (a) {
                for (var b = this.where(), d = a.where(), e = this.fromValue.clone(), f = 0, g = d.length; g > f; f++) {
                    var h = d[f], j = {
                        condition: i.rewrite(h.condition, e)
                    };
                    h.target && (j.target = h.target.map(function (a) {
                        return i.rewrite(a, e);
                    })), b.push(j);
                }
                return c.createWithTrimmedFrom(e, b, this.orderByItems, this.selectItems);
            }, c.prototype.rewrite = function (b) {
                var d = new a.SemanticQueryRewriter(b), e = d.rewriteFrom(this.fromValue), f = d.rewriteWhere(this.whereItems, e), g = d.rewriteOrderBy(this.orderByItems, e), h = d.rewriteSelect(this.selectItems, e);
                return c.createWithTrimmedFrom(e, f, g, h);
            }, c;
        }();
        a.SemanticQuery = d;
        var e = function () {
            function c(a, b) {
                this.fromValue = a, this.whereItems = b;
            }
            return c.fromSQExpr = function (a) {
                var b = new f(), d = i.rewrite(a, b), e = [{
                    condition: d
                }];
                return new c(b, e);
            }, c.prototype.from = function () {
                return this.fromValue.clone();
            }, c.prototype.conditions = function () {
                for (var a = [], b = this.whereItems, c = 0, d = b.length; d > c; c++) {
                    var e = b[c];
                    a.push(e.condition);
                }
                return a;
            }, c.prototype.where = function () {
                for (var a = [], b = this.whereItems, c = 0, d = b.length; d > c; c++) a.push(b[c]);
                return a;
            }, c.prototype.rewrite = function (b) {
                var d = new a.SemanticQueryRewriter(b), e = d.rewriteFrom(this.fromValue), f = d.rewriteWhere(this.whereItems, e);
                return new c(e, f);
            }, c.merge = function (a) {
                if (b.isUndefinedOrEmpty(a)) return null;
                if (1 === a.length) return a[0];
                for (var d = a[0], e = d.from(), f = b.take(d.whereItems, d.whereItems.length), g = 1, h = a.length; h > g; g++) c.applyFilter(a[g], e, f);
                return new c(e, f);
            }, c.applyFilter = function (a, b, c) {
                for (var d = a.whereItems, e = 0; e < d.length; e++) {
                    var f = d[e], g = {
                        condition: i.rewrite(f.condition, b)
                    };
                    f.target && (g.target = f.target.map(function (a) {
                        return i.rewrite(a, b);
                    })), c.push(g);
                }
            }, c;
        }();
        a.SemanticFilter = e;
        var f = function () {
            function a(a) {
                this.items = a || {};
            }
            return a.prototype.keys = function () {
                return Object.keys(this.items);
            }, a.prototype.entity = function (a) {
                return this.items[a];
            }, a.prototype.ensureEntity = function (a, b) {
                for (var c = this.keys(), d = 0, e = c.length; e > d; d++) {
                    var f = c[d], g = this.items[f];
                    if (g && a.entity === g.entity && a.schema === g.schema) return {
                        name: f
                    };
                }
                for (var h = b || this.candidateName(a.entity), i = h, d = 2; this.items[i];) i = h + d++;
                return this.items[i] = a, {
                    name: i,
                    "new": !0
                };
            }, a.prototype.remove = function (a) {
                delete this.items[a];
            }, a.prototype.candidateName = function (a) {
                var b = a.lastIndexOf(".");
                return b >= 0 && b !== a.length - 1 && (a = a.substr(b + 1)), a.substring(0, 1).toLowerCase();
            }, a.prototype.clone = function () {
                var b = new a();
                return $.extend(b.items, this.items), b;
            }, a;
        }();
        a.SQFrom = f;
        var g;
        !function (b) {
            function c(b, c) {
                for (var d = 0, e = b.length; e > d; d++) if (a.SQExpr.equals(b[d], c)) return d;
                return -1;
            }
            function d(b, c) {
                var d = b.length;
                if (d !== c.length) return !1;
                for (var e = 0; d > e; e++) if (!a.SQExpr.equals(b[e], c[e])) return !1;
                return !0;
            }
            b.indexOfExpr = c, b.sequenceEqual = d;
        }(g = a.SQExprUtil || (a.SQExprUtil = {}));
        var h;
        !function (a) {
            function b(a) {
                for (var b = {}, d = 0, e = a.length; e > d; d++) b[a[d].name] = !0;
                return c.findUniqueName(b, "select");
            }
            a.uniqueName = b;
        }(h || (h = {}));
        var i = function (c) {
            function d(a) {
                c.call(this), this.renames = a;
            }
            return __extends(d, c), d.prototype.visitEntity = function (b) {
                var d = this.renames[b.entity];
                return d ? new a.SQEntityExpr(b.schema, b.entity, d) : c.prototype.visitEntity.call(this, b);
            }, d.prototype.rewriteFilter = function (a) {
                var b = void 0;
                a.target && (b = this.rewriteArray(a.target));
                var c = a.condition.accept(this);
                if (a.condition === c && a.target === b) return a;
                var d = {
                    condition: c
                };
                return b && (d.target = b), d;
            }, d.prototype.rewriteArray = function (a) {
                for (var c, d = 0, e = a.length; e > d; d++) {
                    var f = a[d], g = f.accept(this);
                    f === g || c || (c = b.take(a, d)), c && c.push(g);
                }
                return c || a;
            }, d.rewrite = function (a, b) {
                var c = j.run(a, b), e = new d(c);
                return a.accept(e);
            }, d;
        }(a.SQExprRewriter);
        a.SQExprRewriterWithSourceRenames = i;
        var j = function (a) {
            function b(b) {
                a.call(this), this.from = b, this.renames = {};
            }
            return __extends(b, a), b.run = function (a, c) {
                var d = new b(c);
                return a.accept(d), d.renames;
            }, b.prototype.visitEntity = function (a) {
                var b = this.from.entity(a.variable);
                if (!b || b.schema !== a.schema || b.entity !== a.entity) {
                    var c = this.from.ensureEntity({
                        schema: a.schema,
                        entity: a.entity
                    }, a.variable);
                    this.renames[a.entity] = c.name;
                }
            }, b;
        }(a.DefaultSQExprVisitorWithTraversal), k = function (a) {
            function b(b) {
                a.call(this), this.keys = b;
            }
            return __extends(b, a), b.prototype.visitEntity = function (a) {
                var b = this.keys.indexOf(a.variable);
                b >= 0 && this.keys.splice(b, 1);
            }, b.prototype.result = function () {
                return this.keys;
            }, b;
        }(a.DefaultSQExprVisitorWithTraversal);
    }(b = a.data || (a.data = {}));
}(powerbi || (powerbi = {}));

var powerbi;

!function (a) {
    var b;
    !function (a) {
        var b = function () {
            function b(a) {
                this.from = a, this.selectItems = [];
            }
            return b.prototype.addWhere = function (a) {
                this.whereItems || (this.whereItems = []), this.whereItems.push(a);
            }, b.prototype.addOrderBy = function (a) {
                this.orderByItems || (this.orderByItems = []), this.orderByItems.push(a);
            }, b.prototype.addSelect = function (a) {
                this.selectItems.push(a);
            }, b.prototype.toQuery = function () {
                return new a.SemanticQuery(this.from, this.whereItems, this.orderByItems, this.selectItems);
            }, b.prototype.toFilter = function () {
                return this.from && this.whereItems ? new a.SemanticFilter(this.from, this.whereItems) : void 0;
            }, b;
        }();
        a.SemanticQueryBuilder = b;
    }(b = a.data || (a.data = {}));
}(powerbi || (powerbi = {}));

var powerbi;

!function (a) {
    var b;
    !function (b) {
        function c(a, b) {
            return new g(a, b);
        }
        function d(a, b, c) {
            return new h(a, b, c);
        }
        var e = jsCommon.JsonComparer, f = jsCommon.TimerPromiseFactory;
        b.createDataProxy = c, b.createSingleExecutableDataProxy = d;
        var g = function () {
            function a(a, b) {
                this.providerHost = {
                    promiseFactory: function () {
                        return a;
                    }
                }, this.dataProviderFactory = b, this.dataProviders = {};
            }
            return a.prototype.execute = function (a) {
                var b = this.getProvider(a.type);
                return b.execute(a.query);
            }, a.prototype.getProvider = function (a) {
                var b = this.dataProviders[a];
                if (b) return b;
                var c = this.dataProviderFactory.getPlugin(a);
                return c ? this.dataProviders[a] = new i(c, this.providerHost.promiseFactory(), this.providerHost) : void 0;
            }, a.prototype.stopCommunication = function (a) {
                var b = this.getProvider(a);
                b.stopCommunication();
            }, a.prototype.resumeCommunication = function (a) {
                var b = this.getProvider(a);
                b.resumeCommunication();
            }, a.prototype.clearCache = function (a) {
                var b = this.getProvider(a);
                b.clearCache();
            }, a.prototype.rewriteCacheEntries = function (a, b) {
                var c = this.getProvider(a);
                c.rewriteCacheEntries(b);
            }, a;
        }(), h = function () {
            function b(a, b, c) {
                this.proxy = a, this.promiseFactory = b, this.timerFactory = c || f.instance;
            }
            return b.prototype.execute = function (b) {
                var c = this, d = this.lastExecute;
                if (d && d.promise.pending()) {
                    if (e.equals(b, d.query)) return d.promise;
                    this.lastExecute.promise.reject(new a.IgnorableClientError());
                }
                var f = this.promiseFactory.defer(), g = a.RejectablePromise2(f), h = this.lastExecute = {
                    query: b,
                    deferred: f,
                    promise: g
                };
                return this.queuedExecution || (this.queuedExecution = !0, this.timerFactory.create(0).done(function () {
                    c.queuedExecution = !1;
                    var a = c.lastExecute, b = c.proxy.execute(a.query);
                    b.then(function (b) {
                        return a.deferred.resolve(b);
                    }, function (b) {
                        return a.deferred.reject(b);
                    }), a.promise["catch"](function () {
                        return b.reject();
                    });
                })), g["finally"](function () {
                    h === c.lastExecute && (c.lastExecute = void 0);
                }), g;
            }, b;
        }(), i = function () {
            function b(a, b, c) {
                this.name = a.name, this.promiseFactory = b, this.provider = a.create(c);
            }
            return b.prototype.execute = function (b) {
                var c = this, d = this.promiseFactory.defer(), e = this.provider;
                if (e.execute) {
                    var f = e.execute(b);
                    d.promise["catch"](function () {
                        return f.reject(new a.UnknownClientError());
                    }), f.then(function (b) {
                        if (b) {
                            var e = c.transform(b);
                            e.error && d.reject(e.error), d.resolve({
                                dataProviderResult: e,
                                dataViewSource: {
                                    data: b
                                }
                            });
                        } else d.reject(new a.UnknownClientError());
                    }, function (a) {
                        d.reject(a);
                    });
                    var g = a.RejectablePromise2(d);
                    return g["catch"](function (b) {
                        return f.reject(b || new a.UnknownClientError());
                    }), g;
                }
                return b.command ? d.resolve({
                    dataProviderResult: this.transform(b.command)
                }) : d.reject(), a.RejectablePromise2(d);
            }, b.prototype.stopCommunication = function () {
                var a = this.provider;
                a.stopCommunication && a.stopCommunication();
            }, b.prototype.resumeCommunication = function () {
                var a = this.provider;
                a.resumeCommunication && a.resumeCommunication();
            }, b.prototype.clearCache = function () {
                var a = this.provider;
                a.clearCache && a.clearCache();
            }, b.prototype.rewriteCacheEntries = function (a) {
                var b = this.provider;
                b.rewriteCacheEntries && b.rewriteCacheEntries(a);
            }, b.prototype.transform = function (a) {
                var b = this.provider;
                if (b.transform) return b.transform(a);
                var c = {
                    metadata: {
                        columns: []
                    }
                };
                return c[this.name] = a, {
                    dataView: c
                };
            }, b;
        }();
    }(b = a.data || (a.data = {}));
}(powerbi || (powerbi = {}));

var powerbi;

!function (a) {
    var b, c = jsCommon.StringExtensions, d = jsCommon.Formatting;
    !function (a) {
        function b(a, b) {
            for (var d = b.length, e = 0; d > e; e++) {
                var f = "\\" + b[e], g = String.fromCharCode(57344 + e);
                a = c.replaceAll(a, f, g);
            }
            return a;
        }
        function d(a, b) {
            for (var d = b.length, e = 0; d > e; e++) {
                var f = String.fromCharCode(57344 + e), g = b[e];
                a = c.replaceAll(a, f, g);
            }
            return c.replaceAll(a, "\\", "");
        }
        function e(a, b) {
            a = c.replaceAll(a, '"', "'");
            for (var d = 0; ; d++) {
                var e = a.indexOf("'");
                if (0 > e) break;
                var f = a.indexOf("'", e + 1);
                if (0 > f) break;
                var g = a.substring(e, f + 1);
                b.push(g.substring(1, f - e));
                var h = String.fromCharCode(57600 + d);
                a = a.replace(g, h);
            }
            return a;
        }
        function f(a, b) {
            for (var c = b.length, d = 0; c > d; d++) {
                var e = String.fromCharCode(57600 + d), f = b[d];
                a = a.replace(e, f);
            }
            return a;
        }
        a.preserveEscaped = b, a.restoreEscaped = d, a.preserveLiterals = e, a.restoreLiterals = f;
    }(b || (b = {}));
    var e, f = function () {
        function a() { }
        return a.prototype.formatValue = function (a, b, c) {
            if (void 0 === a || null === a) return "";
            var d = this.getCulture(c);
            return e.canFormat(a) ? e.format(a, b, d) : g.canFormat(a) ? g.format(a, b, d) : a.toString();
        }, a.prototype.format = function (a, b, c) {
            var d = this;
            if (!a) return "";
            var e = a.replace(/({{)|(}})|{(\d+[^}]*)}/g, function (a, e, f, g) {
                if (e) return "{";
                if (f) return "}";
                var h = g.split(":"), i = parseInt(h[0], 10), j = h[1];
                return d.formatValue(b[i], j, c);
            });
            return e;
        }, a.prototype.isStandardNumberFormat = function (a) {
            return g.isStandardFormat(a);
        }, a.prototype.formatNumberWithCustomOverride = function (a, b, c, d) {
            var e = this.getCulture(d);
            return g.formatWithCustomOverride(a, b, c, e);
        }, a.prototype.dateFormatString = function (a) {
            return this._dateTimeScaleFormatInfo.getFormatString(a);
        }, a.prototype.setCurrentCulture = function (a) {
            this._currentCultureSelector !== a && (this._currentCulture = this.getCulture(a),
            this._currentCultureSelector = a, this._dateTimeScaleFormatInfo = new h(this._currentCulture));
        }, a.prototype.getCulture = function (a) {
            if (null == a) return null == this._currentCulture && this.initialize(), this._currentCulture;
            var b = Globalize.findClosestCulture(a);
            return b || (b = Globalize.culture("en-US")), b;
        }, a.prototype.initialize = function () {
            var a = this.getUrlParam("language") || window.cultureInfo || window.navigator.userLanguage || window.navigator.language || Globalize.culture().name;
            this.setCurrentCulture(a);
            var b = this.getUrlParam("calendar");
            if (b) {
                var c = this._currentCulture, d = c.calendars[b];
                d && (c.calendar = d);
            }
        }, a.prototype.getUrlParam = function (a) {
            var b = window.location.search.match(RegExp("[?&]" + a + "=([^&]*)"));
            return b ? b[1] : void 0;
        }, a;
    }();
    !function (a) {
        function e(a) {
            var b = a instanceof Date;
            return b;
        }
        function f(a, b, c) {
            b = b || "G";
            var d = 1 === b.length;
            try {
                return d ? g(a, b, c) : h(a, b, c);
            } catch (e) {
                return g(a, "G", c);
            }
        }
        function g(a, b, c) {
            var e = c.calendar.patterns;
            k(c.calendar);
            var f = d.findDateFormat(a, b, c.name);
            return b = 1 === f.format.length ? e[f.format] : f.format, c = Globalize.culture("en-US"),
            Globalize.format(f.value, b, c);
        }
        function h(a, d, e) {
            var f, g = [];
            if (d = b.preserveEscaped(d, "\\dfFghHKmstyz:/%'\""), d = b.preserveLiterals(d, g),
            d = c.replaceAll(d, '"', "'"), d.indexOf("F") > -1) {
                d = c.replaceAll(d, "FFFF", "FFF");
                var h = a.getMilliseconds();
                if (h % 10 >= 1 && (d = c.replaceAll(d, "FFF", "fff")), d = c.replaceAll(d, "FFF", "FF"),
                h % 100 / 10 >= 1 && (d = c.replaceAll(d, "FF", "ff")), d = c.replaceAll(d, "FF", "F"),
                h % 1e3 / 100 >= 1 && (d = c.replaceAll(d, "F", "f")), d = c.replaceAll(d, "F", ""),
                "" === d || "%" === d) return "";
            }
            return d = i(d), f = Globalize.format(a, d, e), f = j(f, e.calendar), f = b.restoreLiterals(f, g),
            f = b.restoreEscaped(f, "\\dfFghHKmstyz:/%'\"");
        }
        function i(a) {
            return a === l ? m : (l = a, a = d.fixDateTimeFormat(a), m = a, a);
        }
        function j(a, b) {
            var c = b[":"];
            if (":" === c) return a;
            for (var d = "", e = a.length, f = 0; e > f; f++) {
                var g = a.charAt(f);
                switch (g) {
                    case ":":
                        d += c;
                        break;

                    default:
                        d += g;
                }
            }
            return d;
        }
        function k(a) {
            var b = a.patterns;
            void 0 === b.g && (b.g = b.f.replace(b.D, b.d), b.G = b.F.replace(b.D, b.d));
        }
        var l, m;
        a.canFormat = e, a.format = f;
    }(e || (e = {}));
    var g;
    !function (d) {
        function e(a) {
            var b = "number" == typeof a;
            return b;
        }
        function f(a) {
            var b = /^[a-z]\d{0,2}$/gi;
            return b.test(a);
        }
        function g(a, b, c) {
            b = b || "G";
            try {
                return f(b) ? i(a, b, c) : j(a, b, c);
            } catch (d) {
                return Globalize.format(a, void 0, c);
            }
        }
        function h(a, b, c, d) {
            return j(a, b, d, c);
        }
        function i(a, b, d) {
            var e, f = b.length > 1 ? parseInt(b.substr(1, b.length - 1), 10) : void 0, g = d.numberFormat, h = b.charAt(0);
            switch (h) {
                case "e":
                case "E":
                    void 0 === f && (f = 6);
                    var i = c.repeat("0", f);
                    b = "0." + i + h + "+000", e = j(a, b, d);
                    break;

                case "f":
                case "F":
                    e = a.toFixed(void 0 !== f ? f : g.decimals), e = r(e, g);
                    break;

                case "g":
                case "G":
                    var k = Math.abs(a);
                    0 === k || k >= 1e-4 && 1e15 > k ? e = void 0 !== f ? a.toPrecision(f) : a.toString() : (e = void 0 !== f ? a.toExponential(f) : a.toExponential(),
                    e = e.replace("e", "E")), e = r(e, g);
                    break;

                case "r":
                case "R":
                    e = a.toString(), e = r(e, g);
                    break;

                case "x":
                case "X":
                    if (e = a.toString(16), "X" === h && (e = e.toUpperCase()), void 0 !== f) {
                        var l = e.length, m = 0 > a;
                        m && l--;
                        var n = f - l;
                        if (n > 0) var o = c.repeat("0", n);
                        e = m ? "-" + o + e.substr(1) : o + e;
                    }
                    e = r(e, g);
                    break;

                default:
                    e = Globalize.format(a, b, d);
            }
            return e;
        }
        function j(c, d, e, f) {
            var g, h = e.numberFormat;
            if (!isFinite(c)) return Globalize.format(c, void 0);
            var i = d.split(";");
            if (i.length > 1) {
                var j = d, p = d, q = d;
                2 === i.length ? (p = q = i[0], j = i[1]) : (p = i[0], j = i[1], q = i[2]), d = c > 0 ? p : 0 === c ? q : j,
                c = Math.abs(c);
            }
            var r = l(d);
            r.hasEscapes && (d = b.preserveEscaped(d, "\\0#.,%�"));
            var t = [];
            if (r.hasQuotes && (d = b.preserveLiterals(d, t)), r.hasE && !f) {
                var u = /e[+-]*0+/gi.exec(d);
                if (u) {
                    var v = d.substr(0, u.index), w = d.substr(u.index + u[0].indexOf("0")), x = m(v, r), y = n(v, r);
                    1 !== y && (c *= y);
                    var z = c.toExponential(x), A = z.indexOf("e"), B = z.substr(0, A), C = z.substr(A + 1), D = o(B, v, h), E = o(C, w, h);
                    "+" === E.charAt(0) && "+" !== u[0].charAt(1) && (E = E.substr(1));
                    var F = u[0].charAt(0);
                    g = D + F + E;
                }
            }
            if (void 0 === g) {
                var G;
                if (f) G = a.formattingService.format(f, [c], e.name); else {
                    var x = m(d, r), y = n(d, r);
                    1 !== y && (c *= y), G = k(c, x);
                }
                g = o(G, d, h, !!f);
            }
            return r.hasQuotes && (g = b.restoreLiterals(g, t)), r.hasEscapes && (g = b.restoreEscaped(g, "\\0#.,%�")),
            s = r, g;
        }
        function k(b, d) {
            var e = "", f = 0;
            d > 16 && (f = d - 16, d = 16);
            var g = a.Double.log10(Math.abs(b));
            if (16 > g) {
                if (g > 0) {
                    var h = 16 - g;
                    d > h && (f += d - h, d = h);
                }
                e = b.toFixed(d);
            } else if (16 === g) e = b.toFixed(0), f += d, f > 0 && (e += "."); else {
                e = b.toExponential(15);
                var i = e.indexOf("e");
                if (i > 0) {
                    var j = e.indexOf("."), k = e.substr(0, i), l = e.substr(i + 1), m = parseInt(l, 10) - (k.length - j - 1);
                    e = k.replace(".", "") + c.repeat("0", m), d > 0 && (e = e + "." + c.repeat("0", d));
                }
            }
            return f > 0 && (e += c.repeat("0", f)), e;
        }
        function l(a) {
            if (void 0 !== s && a === s.format) return s;
            for (var b = {
                format: a,
                hasEscapes: !1,
                hasQuotes: !1,
                hasE: !1,
                hasCommas: !1,
                hasDots: !1,
                hasPercent: !1,
                hasPermile: !1,
                precision: -1,
                scale: -1
            }, c = a.length, d = 0; c > d; d++) {
                var e = a.charAt(d);
                switch (e) {
                    case "\\":
                        b.hasEscapes = !0;
                        break;

                    case "'":
                    case '"':
                        b.hasQuotes = !0;
                        break;

                    case "e":
                    case "E":
                        b.hasE = !0;
                        break;

                    case ",":
                        b.hasCommas = !0;
                        break;

                    case ".":
                        b.hasDots = !0;
                        break;

                    case "%":
                        b.hasPercent = !0;
                        break;

                    case "�":
                        b.hasPermile = !0;
                }
            }
            return b;
        }
        function m(a, b) {
            if (b.precision > -1) return b.precision;
            var c = 0;
            if (b.hasDots) {
                var d = a.indexOf(".");
                if (d > -1) {
                    for (var e = a.length, f = d; e > f; f++) {
                        var g = a.charAt(f);
                        ("#" === g || "0" === g) && c++;
                    }
                    c = Math.min(19, c);
                }
            }
            return b.precision = c, c;
        }
        function n(a, b) {
            if (b.scale > -1) return b.scale;
            var c = 1;
            if (b.hasPercent && a.indexOf("%") > -1 && (c = 100 * c), b.hasPermile && a.indexOf("�") > -1 && (c = 1e3 * c),
            b.hasCommas) {
                var d = a.indexOf(".");
                -1 === d && (d = a.length);
                for (var e = d - 1; e > -1; e--) {
                    var f = a.charAt(e);
                    if ("," !== f) break;
                    c /= 1e3;
                }
            }
            return b.scale = c, c;
        }
        function o(a, b, c, d) {
            var e = b.split(".", 2);
            if (2 === e.length) {
                var f = e[0], g = e[1], h = a.split(".", 2), i = h[0], j = 2 === h.length ? h[1].replace(/0+$/, "") : "", k = p(i, f, c, d), l = q(j, g, d);
                return l.fmtOnly || "" === l.value ? k + l.value : k + c["."] + l.value;
            }
            return p(a, b, c, d);
        }
        function p(a, b, c, d) {
            var e = b.indexOf(","), f = e > -1 && e < Math.max(b.lastIndexOf("0"), b.lastIndexOf("#")) && c[","], g = 0, h = 0, i = c.groupSizes || [3], j = i[0], k = c[","], l = "", m = a.charAt(0);
            ("+" === m || "-" === m) && (l = c[m], a = a.substr(1));
            for (var n = "0" === a, o = "", p = "", q = a.length - 1, r = b.length - 1; r > -1; r--) {
                var s = b.charAt(r);
                switch (s) {
                    case "0":
                    case "#":
                        "" !== p && (o = p + o, p = ""), d || ((q > -1 || "0" === s) && f && (g === j ? (o = k + o,
                        h++, h < i.length && (j = i[h]), g = 1) : g++), q > -1 ? (n && "#" === s || (o = a.charAt(q) + o),
                        q--) : "#" !== s && (o = s + o));
                        break;

                    case ",":
                        break;

                    default:
                        p = s + p;
                }
            }
            if (!d) {
                if (q > -1 && "" !== o) if (f) for (; q > -1;) g === j ? (o = k + o, h++, h < i.length && (j = i[h]),
                g = 1) : g++, o = a.charAt(q) + o, q--; else o = a.substr(0, q + 1) + o;
                return l + p + o;
            }
            return l + p + a;
        }
        function q(a, b, c) {
            var d = 0, e = b.length, f = a.length;
            if (c) return "0" !== b.charAt(e - 1) && "#" !== b.charAt(e - 1) ? {
                value: a + b.charAt(e - 1)
            } : {
                value: a
            };
            for (var g = "", h = !0, i = 0; e > i; i++) {
                var j = b.charAt(i);
                if (f > d) switch (j) {
                    case "0":
                    case "#":
                        g += a[d++], h = !1;
                        break;

                    default:
                        g += j;
                } else "#" !== j && (g += j, h = h && "0" !== j);
            }
            return {
                value: g,
                fmtOnly: h
            };
        }
        function r(a, b) {
            var c = b["+"], d = b["-"], e = b["."], f = b[","];
            if ("+" === c && "-" === d && "." === e && "," === f) return a;
            for (var g = a.length, h = "", i = 0; g > i; i++) {
                var j = a.charAt(i);
                switch (j) {
                    case "+":
                        h += c;
                        break;

                    case "-":
                        h += d;
                        break;

                    case ".":
                        h += e;
                        break;

                    case ",":
                        h += f;
                        break;

                    default:
                        h += j;
                }
            }
            return h;
        }
        var s;
        d.canFormat = e, d.isStandardFormat = f, d.format = g, d.formatWithCustomOverride = h,
        d.getCustomFormatMetadata = l;
    }(g = a.NumberFormat || (a.NumberFormat = {}));
    var h = function () {
        function a(a) {
            var b = a.calendar, c = b.patterns, d = b.months.namesAbbr, e = d && d[0], f = c.Y, g = c.M, h = c.f, i = c.T, j = c.t, k = h.indexOf(",") > -1 ? ", " : " ", l = 0 === f.indexOf("yyyy'") && f.length > 6 && "'" === f[6];
            this.YearPattern = l ? f.substr(0, 7) : "yyyy";
            var m = h.indexOf("yy"), n = h.indexOf("MMMM");
            this.MonthPattern = e && n > -1 ? m > n ? "MMM yyyy" : "yyyy MMM" : f, this.DayPattern = e ? g.replace("MMMM", "MMM") : g;
            var o = h.indexOf("mm"), p = h.indexOf("tt"), q = p > -1 ? j.replace(":mm ", "") : j;
            switch (this.HourPattern = o > m ? this.DayPattern + k + q : q + k + this.DayPattern,
            this.MinutePattern = j, this.SecondPattern = i, this.MillisecondPattern = i.replace("ss", "ss.fff"),
            a.name) {
                case "fi-FI":
                    this.DayPattern = this.DayPattern.replace("'ta'", ""), this.HourPattern = this.HourPattern.replace("'ta'", "");
            }
        }
        return a.prototype.getFormatString = function (a) {
            switch (a) {
                case 0:
                    return this.YearPattern;

                case 1:
                    return this.MonthPattern;

                case 2:
                case 3:
                    return this.DayPattern;

                case 4:
                    return this.HourPattern;

                case 5:
                    return this.MinutePattern;

                case 6:
                    return this.SecondPattern;

                case 7:
                    return this.MillisecondPattern;
            }
        }, a;
    }();
    a.formattingService = new f();
}(powerbi || (powerbi = {}));

var powerbi;

!function (a) {
    var b;
    !function (b) {
        var c;
        !function (c) {
            var d;
            !function () { }(d = c.wireContracts || (c.wireContracts = {}));
            var e;
            !function (d) {
                function e(a, b) {
                    if (a && b) {
                        var c = {};
                        for (var d in a) {
                            var e = b[d];
                            if (e) for (var g = a[d], h = c[d] = [], i = 0, j = g.length; j > i; i++) h.push(f(g[i], e));
                        }
                        return c;
                    }
                }
                function f(a, b) {
                    if (a) {
                        var c = {
                            properties: i(a.properties, b.properties)
                        }, d = g(a.selector);
                        return d && (c.selector = d), c;
                    }
                }
                function g(a) {
                    if (a) {
                        var b = {};
                        return a.data && (b.data = a.data.map(function (a) {
                            return h(a);
                        })), a.metadata && (b.metadata = a.metadata), a.id && (b.id = a.id), b;
                    }
                }
                function h(a) {
                    return a.scopeId ? b.createDataViewScopeIdentity(c.SemanticQuerySerializer.deserializeExpr(a.scopeId)) : a.wildcard ? b.DataViewScopeWildcard.fromExprs(a.wildcard.map(c.SemanticQuerySerializer.deserializeExpr)) : void 0;
                }
                function i(a, b) {
                    if (a) {
                        var c = {};
                        for (var d in a) {
                            var e = j(a[d], b[d]);
                            void 0 !== e && (c[d] = e);
                        }
                        return c;
                    }
                }
                function j(a, b) {
                    if (b) {
                        var c = u(b.type);
                        return c.value ? k(a, c.value) : l(a, c.structural);
                    }
                }
                function k(a, b) {
                    return void 0 !== b.primitiveType && a.expr ? c.SemanticQuerySerializer.deserializeExpr(a.expr) : void 0;
                }
                function l(b, d) {
                    if (d.fill && d.fill.solid && d.fill.solid.color && b) {
                        var e = b;
                        return {
                            solid: {
                                color: k(e.solid.color, a.ValueType.fromPrimitiveTypeAndCategory(1))
                            }
                        };
                    }
                    if (d.fillRule) {
                        var f = b, g = v(f, k);
                        if (g) return g;
                    }
                    return d.filter && b && b.filter ? c.SemanticQuerySerializer.deserializeFilter(b.filter) : b;
                }
                function m(a, b) {
                    if (a && b) {
                        var c = {};
                        for (var d in a) {
                            var e = b[d];
                            if (e) for (var f = a[d], g = c[d] = [], h = 0, i = f.length; i > h; h++) g.push(n(f[h], e));
                        }
                        return c;
                    }
                }
                function n(a, b) {
                    if (a) {
                        var c = q(a.properties, b.properties);
                        if (c) {
                            var d = {
                                properties: c
                            }, e = o(a.selector);
                            return e && (d.selector = e), d;
                        }
                    }
                }
                function o(a) {
                    if (a) {
                        var b = {};
                        return a.data && (b.data = a.data.map(function (a) {
                            return p(a);
                        })), a.metadata && (b.metadata = a.metadata), a.id && (b.id = a.id), b;
                    }
                }
                function p(a) {
                    var b = a;
                    if (b.expr) return {
                        scopeId: c.SemanticQuerySerializer.serializeExpr(b.expr)
                    };
                    var d = a;
                    return d.exprs ? {
                        wildcard: d.exprs.map(c.SemanticQuerySerializer.serializeExpr)
                    } : void 0;
                }
                function q(a, b) {
                    if (a) {
                        var c = {};
                        for (var d in a) {
                            var e = r(a[d], b[d]);
                            void 0 !== e && (c[d] = e);
                        }
                        return c;
                    }
                }
                function r(a, b) {
                    if (b) {
                        var c = u(b.type);
                        return c.value ? s(a, c.value) : t(a, c.structural);
                    }
                }
                function s(a, d) {
                    return void 0 !== d.primitiveType && a instanceof b.SQExpr ? {
                        expr: c.SemanticQuerySerializer.serializeExpr(a)
                    } : void 0;
                }
                function t(b, d) {
                    if (d.fill && d.fill.solid && d.fill.solid.color && b) {
                        var e = b;
                        return {
                            solid: {
                                color: s(e.solid.color, a.ValueType.fromPrimitiveTypeAndCategory(1))
                            }
                        };
                    }
                    if (d.fillRule) {
                        var f = b, g = v(f, s);
                        if (g) return g;
                    }
                    return d.filter && b ? {
                        filter: c.SemanticQuerySerializer.serializeFilter(b)
                    } : b;
                }
                function u(b) {
                    var c = a.ValueType.fromDescriptor(b);
                    return 0 !== c.primitiveType ? {
                        value: c
                    } : {
                        structural: b
                    };
                }
                function v(b, c) {
                    if (b.linearGradient2) {
                        var d = b.linearGradient2, e = {
                            max: {
                                color: c(d.max.color, a.ValueType.fromPrimitiveTypeAndCategory(1))
                            },
                            min: {
                                color: c(d.min.color, a.ValueType.fromPrimitiveTypeAndCategory(1))
                            }
                        };
                        return d.max.value && (e.max.value = c(d.max.value, a.ValueType.fromPrimitiveTypeAndCategory(3))),
                        d.min.value && (e.min.value = c(d.min.value, a.ValueType.fromPrimitiveTypeAndCategory(3))),
                        {
                            linearGradient2: e
                        };
                    }
                    if (b.linearGradient3) {
                        var d = b.linearGradient3, f = {
                            max: {
                                color: c(d.max.color, a.ValueType.fromPrimitiveTypeAndCategory(1))
                            },
                            mid: {
                                color: c(d.mid.color, a.ValueType.fromPrimitiveTypeAndCategory(1))
                            },
                            min: {
                                color: c(d.min.color, a.ValueType.fromPrimitiveTypeAndCategory(1))
                            }
                        };
                        return d.max.value && (f.max.value = c(d.max.value, a.ValueType.fromPrimitiveTypeAndCategory(3))),
                        d.mid.value && (f.mid.value = c(d.mid.value, a.ValueType.fromPrimitiveTypeAndCategory(3))),
                        d.min.value && (f.min.value = c(d.min.value, a.ValueType.fromPrimitiveTypeAndCategory(3))),
                        {
                            linearGradient3: f
                        };
                    }
                    return null;
                }
                d.deserializeObjects = e, d.serializeObjects = m;
            }(e = c.DataViewObjectSerializer || (c.DataViewObjectSerializer = {}));
        }(c = b.services || (b.services = {}));
    }(b = a.data || (a.data = {}));
}(powerbi || (powerbi = {}));

var powerbi;

!function (a) {
    var b;
    !function (a) {
        var b;
        !function (b) {
            var c;
            !function (b) {
                function c(a) {
                    for (var b = [], c = a.from(), d = c.keys(), e = 0, f = d.length; f > e; e++) {
                        var g = d[e], h = c.entity(g);
                        b.push({
                            Name: g,
                            Entity: h.entity,
                            Schema: h.schema
                        });
                    }
                    var i, j = a.where();
                    if (j && j.length) {
                        i = [];
                        for (var e = 0, f = j.length; f > e; e++) {
                            var l = j[e], m = {
                                Condition: k.create(l.condition)
                            };
                            l.target && (m.Target = l.target.map(k.create)), i.push(m);
                        }
                    }
                    var n, o = a.orderBy();
                    if (o && o.length) {
                        n = [];
                        for (var e = 0, f = o.length; f > e; e++) {
                            var p = o[e];
                            n.push({
                                Direction: p.direction,
                                Expression: k.create(p.expr)
                            });
                        }
                    }
                    for (var q = [], r = a.select(), e = 0, f = r.length; f > e; e++) q.push(k.createNamed(r[e]));
                    var s = {
                        Version: 2,
                        From: b,
                        Select: q
                    };
                    return i && (s.Where = i), n && (s.OrderBy = n), s;
                }
                function d(b) {
                    var c = b.Version ? b.Version : 0, d = 1 > c, e = j.from(b.From), f = new a.SemanticQueryBuilder(e), g = b.Where;
                    if (g) for (var h = 0, i = g.length; i > h; h++) {
                        var k = j.filter(g[h], e);
                        k && (d && (k = n.Upgrade(c, k)), f.addWhere(k));
                    }
                    var l = b.OrderBy;
                    if (l) for (var h = 0, i = l.length; i > h; h++) f.addOrderBy(j.sort(l[h], e));
                    for (var m = b.Select, o = {}, h = 0, i = m.length; i > h; h++) f.addSelect(j.select(m[h], o, e));
                    return f.toQuery();
                }
                function e(a) {
                    for (var b = [], c = a.from(), d = c.keys(), e = 0, f = d.length; f > e; e++) {
                        var g = d[e], h = c.entity(g);
                        b.push({
                            Name: g,
                            Entity: h.entity,
                            Schema: h.schema
                        });
                    }
                    for (var i = [], j = a.where(), e = 0, f = j.length; f > e; e++) {
                        var l = j[e], m = {
                            Condition: k.create(l.condition)
                        };
                        l.target && (m.Target = l.target.map(k.create)), i.push(m);
                    }
                    var n = {
                        Version: 2,
                        From: b,
                        Where: i
                    };
                    return n;
                }
                function f(b) {
                    for (var c = b.Version ? b.Version : 0, d = 1 > c, e = j.from(b.From), f = new a.SemanticQueryBuilder(e), g = b.Where, h = 0, i = g.length; i > h; h++) {
                        var k = j.filter(g[h], e);
                        k && (d && (k = n.Upgrade(c, k)), f.addWhere(k));
                    }
                    return f.toFilter();
                }
                function g(a) {
                    return k.createStandalone(a);
                }
                function h(a) {
                    return m.createStandalone(a);
                }
                var i = jsCommon.StringExtensions;
                b.serializeQuery = c, b.deserializeQuery = d, b.serializeFilter = e, b.deserializeFilter = f,
                b.serializeExpr = g, b.deserializeExpr = h;
                var j;
                !function (b) {
                    function c(b) {
                        for (var c = {}, d = 0, e = b.length; e > d; d++) {
                            var f = b[d];
                            c[f.Name] = {
                                entity: f.Entity,
                                schema: f.Schema
                            };
                        }
                        return new a.SQFrom(c);
                    }
                    function d(a, b) {
                        var c = m.create(a.Condition, b);
                        if (c) {
                            var d = {
                                condition: c
                            };
                            return a.Target && (d.target = a.Target.map(function (a) {
                                return m.create(a, b);
                            })), d;
                        }
                    }
                    function e(a, b) {
                        return {
                            direction: a.Direction,
                            expr: m.create(a.Expression, b)
                        };
                    }
                    function f(a, b, c) {
                        var d = a.Name || i.findUniqueName(b, "select");
                        return b[d] = !0, {
                            name: d,
                            expr: m.create(a, c)
                        };
                    }
                    b.from = c, b.filter = d, b.sort = e, b.select = f;
                }(j || (j = {}));
                var k = function () {
                    function a(a) {
                        this.standalone = a;
                    }
                    return a.create = function (b) {
                        return b.accept(a.instance);
                    }, a.createNamed = function (b) {
                        var c = b.expr.accept(a.instance);
                        return b.name && (c.Name = b.name), c;
                    }, a.createStandalone = function (b) {
                        return b.accept(a.standaloneInstance);
                    }, a.prototype.visitColumnRef = function (a) {
                        return {
                            Column: {
                                Expression: a.source.accept(this),
                                Property: a.ref
                            }
                        };
                    }, a.prototype.visitMeasureRef = function (a) {
                        return {
                            Measure: {
                                Expression: a.source.accept(this),
                                Property: a.ref
                            }
                        };
                    }, a.prototype.visitAggr = function (a) {
                        return {
                            Aggregation: {
                                Expression: a.arg.accept(this),
                                Function: a.func
                            }
                        };
                    }, a.prototype.visitBetween = function (a) {
                        return {
                            Between: {
                                Expression: a.arg.accept(this),
                                LowerBound: a.lower.accept(this),
                                UpperBound: a.upper.accept(this)
                            }
                        };
                    }, a.prototype.visitIn = function (a) {
                        for (var b = a.values, c = [], d = 0, e = b.length; e > d; d++) c.push(this.serializeAll(b[d]));
                        return {
                            In: {
                                Expressions: this.serializeAll(a.args),
                                Values: c
                            }
                        };
                    }, a.prototype.visitEntity = function (a) {
                        var b;
                        if (this.standalone) {
                            var c = {
                                Schema: a.schema,
                                Entity: a.entity
                            };
                            b = c;
                        } else b = {
                            Source: a.variable
                        };
                        return {
                            SourceRef: b
                        };
                    }, a.prototype.visitAnd = function (a) {
                        return {
                            And: {
                                Left: a.left.accept(this),
                                Right: a.right.accept(this)
                            }
                        };
                    }, a.prototype.visitOr = function (a) {
                        return {
                            Or: {
                                Left: a.left.accept(this),
                                Right: a.right.accept(this)
                            }
                        };
                    }, a.prototype.visitCompare = function (a) {
                        return {
                            Comparison: {
                                ComparisonKind: a.kind,
                                Left: a.left.accept(this),
                                Right: a.right.accept(this)
                            }
                        };
                    }, a.prototype.visitContains = function (a) {
                        return {
                            Contains: {
                                Left: a.left.accept(this),
                                Right: a.right.accept(this)
                            }
                        };
                    }, a.prototype.visitDateAdd = function (a) {
                        return {
                            DateAdd: {
                                Expression: a.arg.accept(this),
                                Amount: a.amount,
                                TimeUnit: a.unit
                            }
                        };
                    }, a.prototype.visitDateSpan = function (a) {
                        return {
                            DateSpan: {
                                Expression: a.arg.accept(this),
                                TimeUnit: a.unit
                            }
                        };
                    }, a.prototype.visitExists = function (a) {
                        return {
                            Exists: {
                                Expression: a.arg.accept(this)
                            }
                        };
                    }, a.prototype.visitNot = function (a) {
                        return {
                            Not: {
                                Expression: a.arg.accept(this)
                            }
                        };
                    }, a.prototype.visitNow = function (a) {
                        return {
                            Now: {}
                        };
                    }, a.prototype.visitStartsWith = function (a) {
                        return {
                            StartsWith: {
                                Left: a.left.accept(this),
                                Right: a.right.accept(this)
                            }
                        };
                    }, a.prototype.visitConstant = function (a) {
                        switch (a.type.primitiveType) {
                            case 5:
                            case 7:
                            case 2:
                            case 4:
                            case 3:
                            case 0:
                            case 1:
                                return {
                                    Literal: {
                                        Value: a.valueEncoded
                                    }
                                };
                        }
                    }, a.prototype.serializeAll = function (a) {
                        for (var b = [], c = 0, d = a.length; d > c; c++) b.push(a[c].accept(this));
                        return b;
                    }, a.instance = new a(), a.standaloneInstance = new a(!0), a;
                }();
                !function (a) {
                    a[a.Column = 0] = "Column", a[a.Measure = 1] = "Measure", a[a.Exists = 2] = "Exists";
                }(b.VisualFilterKind || (b.VisualFilterKind = {}));
                var l = (b.VisualFilterKind, function (a) {
                    function b() {
                        a.call(this), this.filterKind = 0;
                    }
                    return __extends(b, a), b.run = function (a) {
                        var c = new b();
                        return a.accept(c), c.filterKind;
                    }, b.prototype.visitMeasureRef = function () {
                        this.filterKind = 1;
                    }, b.prototype.visitExists = function () {
                        this.filterKind = 2;
                    }, b.prototype.visitAggr = function () {
                        this.filterKind = 1;
                    }, b;
                }(a.DefaultSQExprVisitorWithTraversal));
                b.FilterKindDetector = l;
                var m, n = function () {
                    function a() { }
                    return a.Upgrade = function (a, b) {
                        if (!b) return null;
                        if (!b.condition) return null;
                        var c = l.run(b.condition);
                        return 0 === a && 2 !== c ? {
                            condition: b.condition
                        } : b;
                    }, a;
                }();
                !function (b) {
                    function c(a, b) {
                        return h(a.Column, b) || i(a.Measure, b) || g(a.SourceRef, b) || j(a.Aggregation, b) || k(a.And, b) || l(a.Between, b) || m(a.In, b) || n(a.Or, b) || o(a.Contains, b) || p(a.Comparison, b) || q(a.DateAdd, b) || r(a.DateSpan, b) || s(a.Exists, b) || t(a.Not, b) || u(a.Now) || v(a.StartsWith, b) || F(a.Literal) || f(a);
                    }
                    function d(a) {
                        return c(a, null);
                    }
                    function e(a, b) {
                        for (var d = [], e = 0, f = a.length; f > e; e++) d.push(c(a[e], b));
                        return d;
                    }
                    function f(a) {
                        return w(a.Boolean) || x(a.DateTime) || y(a.DateTimeSecond) || x(a.Date) || z(a.Decimal) || A(a.Integer) || B(a.Null) || C(a.Number) || D(a.String);
                    }
                    function g(b, c) {
                        if (b) {
                            if (!c) {
                                var d = b;
                                return a.SQExprBuilder.entity(d.Schema, d.Entity);
                            }
                            var e = b, f = e.Source, g = c.entity(f);
                            return g ? a.SQExprBuilder.entity(g.schema, g.entity, f) : void 0;
                        }
                    }
                    function h(b, d) {
                        if (b) {
                            var e = c(b.Expression, d);
                            if (e) return a.SQExprBuilder.columnRef(e, b.Property);
                        }
                    }
                    function i(b, d) {
                        if (b) {
                            var e = c(b.Expression, d);
                            if (e) return a.SQExprBuilder.measureRef(e, b.Property);
                        }
                    }
                    function j(b, d) {
                        return b ? a.SQExprBuilder.aggregate(c(b.Expression, d), b.Function) : void 0;
                    }
                    function k(b, d) {
                        return b ? a.SQExprBuilder.and(c(b.Left, d), c(b.Right, d)) : void 0;
                    }
                    function l(b, d) {
                        return b ? a.SQExprBuilder.between(c(b.Expression, d), c(b.LowerBound, d), c(b.UpperBound, d)) : void 0;
                    }
                    function m(b, c) {
                        return b ? a.SQExprBuilder.inExpr(e(b.Expressions, c), b.Values.map(function (a) {
                            return e(a, c);
                        })) : void 0;
                    }
                    function n(b, d) {
                        return b ? a.SQExprBuilder.or(c(b.Left, d), c(b.Right, d)) : void 0;
                    }
                    function o(b, d) {
                        if (b) {
                            var e = c(b.Left, d), f = c(b.Right, d);
                            if (e && f) return a.SQExprBuilder.contains(e, f);
                        }
                    }
                    function p(b, d) {
                        if (b) {
                            var e = c(b.Left, d), f = c(b.Right, d);
                            if (e && f) return a.SQExprBuilder.compare(b.ComparisonKind, e, f);
                        }
                    }
                    function q(b, d) {
                        if (b) {
                            var e = c(b.Expression, d);
                            return a.SQExprBuilder.dateAdd(b.TimeUnit, b.Amount, e);
                        }
                    }
                    function r(b, d) {
                        if (b) {
                            var e = c(b.Expression, d);
                            return a.SQExprBuilder.dateSpan(b.TimeUnit, e);
                        }
                    }
                    function s(b, d) {
                        if (b) {
                            var e = c(b.Expression, d);
                            if (e) return a.SQExprBuilder.exists(e);
                        }
                    }
                    function t(b, d) {
                        if (b) {
                            var e = c(b.Expression, d);
                            if (e) return a.SQExprBuilder.not(e);
                        }
                    }
                    function u(b) {
                        return b ? a.SQExprBuilder.now() : void 0;
                    }
                    function v(b, d) {
                        if (b) {
                            var e = c(b.Left, d), f = c(b.Right, d);
                            if (e && f) return a.SQExprBuilder.startsWith(e, f);
                        }
                    }
                    function w(b) {
                        return b ? a.SQExprBuilder["boolean"](b.Value) : void 0;
                    }
                    function x(b) {
                        if (b) {
                            var c = E(b);
                            if (c) return a.SQExprBuilder.dateTime(c);
                        }
                    }
                    function y(b) {
                        if (b) {
                            var c = E(b);
                            return a.SQExprBuilder.dateSpan(5, a.SQExprBuilder.dateTime(c));
                        }
                    }
                    function z(b) {
                        if (b) {
                            var c = b.Value;
                            return a.SQExprBuilder.decimal(c);
                        }
                    }
                    function A(b) {
                        if (b) {
                            var c = b.Value;
                            return a.SQExprBuilder.integer(c);
                        }
                    }
                    function B(b) {
                        return b ? a.SQExprBuilder.nullConstant() : void 0;
                    }
                    function C(b) {
                        return b ? a.PrimitiveValueEncoding.parseValueToSQExpr(b.Value) : void 0;
                    }
                    function D(b) {
                        if (b) {
                            var c = b.Value;
                            return a.SQExprBuilder.text(c);
                        }
                    }
                    function E(a) {
                        return jsCommon.DateExtensions.tryDeserializeDate(a.Value);
                    }
                    function F(b) {
                        return b ? a.PrimitiveValueEncoding.parseValueToSQExpr(b.Value) : void 0;
                    }
                    b.create = c, b.createStandalone = d, b.createConst = f;
                }(m || (m = {}));
            }(c = b.SemanticQuerySerializer || (b.SemanticQuerySerializer = {}));
        }(b = a.services || (a.services = {}));
    }(b = a.data || (a.data = {}));
}(powerbi || (powerbi = {}));

var powerbi;

!function (a) {
    var b;
    !function (a) {
        var b;
        !function (b) {
            function c(a) {
                return JSON.stringify(a.accept(e.instance));
            }
            function d(a) {
                for (var c = "[", d = 0, e = a.length; e > d; d++) d > 0 && (c += ","), c += b.serialize(a[d]);
                return c + "]";
            }
            b.serialize = c, b.serializeArray = d;
            var e = function (a) {
                function b() {
                    a.apply(this, arguments);
                }
                return __extends(b, a), b.prototype.visitColumnRef = function (a) {
                    return {
                        col: {
                            s: a.source.accept(this),
                            r: a.ref
                        }
                    };
                }, b.prototype.visitMeasureRef = function (a) {
                    return {
                        measure: {
                            s: a.source.accept(this),
                            r: a.ref
                        }
                    };
                }, b.prototype.visitAggr = function (a) {
                    return {
                        agg: {
                            a: a.arg.accept(this),
                            f: a.func
                        }
                    };
                }, b.prototype.visitEntity = function (a) {
                    return {
                        e: a.entity
                    };
                }, b.prototype.visitAnd = function (a) {
                    return {
                        and: {
                            l: a.left.accept(this),
                            r: a.right.accept(this)
                        }
                    };
                }, b.prototype.visitCompare = function (a) {
                    return {
                        comp: {
                            k: a.kind,
                            l: a.left.accept(this),
                            r: a.right.accept(this)
                        }
                    };
                }, b.prototype.visitConstant = function (a) {
                    return {
                        "const": {
                            t: a.type.primitiveType,
                            v: a.value
                        }
                    };
                }, b.prototype.visitDefault = function () { }, b.instance = new b(), b;
            }(a.DefaultSQExprVisitor);
        }(b = a.SQExprShortSerializer || (a.SQExprShortSerializer = {}));
    }(b = a.data || (a.data = {}));
}(powerbi || (powerbi = {}));

var powerbi;

!function (a) {
    var b;
    !function (a) {
        function b() {
            return [{
                value: a.left,
                displayName: function (a) {
                    return a.get("Visual_yAxis_Left");
                }
            }, {
                value: a.right,
                displayName: function (a) {
                    return a.get("Visual_yAxis_Right");
                }
            }];
        }
        a.left = "Left", a.right = "Right", a.members = b;
    }(b = a.yAxisPosition || (a.yAxisPosition = {}));
}(powerbi || (powerbi = {}));
//# sourceMappingURL=Data.min.js.map