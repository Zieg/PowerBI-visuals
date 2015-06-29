var powerbi;

!function (a) {
    var b = function () {
        function a() { }
        return Object.defineProperty(a.prototype, "code", {
            get: function () {
                return "UnknownClientError";
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
            var b = {
                message: a.get("ClientError_UnknownClientErrorValue"),
                additionalErrorInfo: [{
                    errorInfoKey: a.get("ClientError_UnknownClientErrorKey"),
                    errorInfoValue: a.get("ClientError_UnknownClientErrorValue")
                }]
            };
            return b;
        }, a;
    }();
    a.UnknownClientError = b;
    var c = function () {
        function a() { }
        return Object.defineProperty(a.prototype, "code", {
            get: function () {
                return "IgnorableClientError";
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(a.prototype, "ignorable", {
            get: function () {
                return !0;
            },
            enumerable: !0,
            configurable: !0
        }), a.prototype.getDetails = function () {
            var a = {
                message: "",
                additionalErrorInfo: []
            };
            return a;
        }, a;
    }();
    a.IgnorableClientError = c;
}(powerbi || (powerbi = {}));

var jsCommon;

!function (a) {
    var b;
    !function (a) {
        function b(a, b) {
            for (var c = [], d = a.length - 1; d >= 0; --d) -1 !== b.indexOf(a[d]) && c.push(a[d]);
            return c;
        }
        function c(a, b) {
            for (var c = [], d = a.length - 1; d >= 0; --d) {
                var e = a[d];
                -1 === b.indexOf(e) && c.push(e);
            }
            return c;
        }
        function d(a) {
            for (var b = [], c = 0, d = a.length; d > c; c++) {
                var e = a[c];
                -1 === b.indexOf(e) && b.push(e);
            }
            return b;
        }
        function e(a, b) {
            for (var c = 0, d = b.length; d > c; ++c) f(a, b[c]);
        }
        function f(a, b) {
            a.indexOf(b) < 0 && a.push(b);
        }
        function g(a, b, c) {
            for (var d = [], e = b; c >= e; ++e) d.push(a[e]);
            return d;
        }
        function h(a, b) {
            for (var c = [], d = 0; b > d; ++d) c.push(a[d]);
            return c;
        }
        function i(a, b, c) {
            if (a === b) return !0;
            if (!!a != !!b) return !1;
            var d = a.length;
            if (d !== b.length) return !1;
            for (var e = 0; d > e && c(a[e], b[e]) ;)++e;
            return e === d;
        }
        function j(a) {
            return a && 0 === a.length ? null : a;
        }
        function k(a, b) {
            for (var c = 0, d = a.length; d > c; ++c) if (b(a[c])) return c;
            return -1;
        }
        function l() {
            return m([]);
        }
        function m(a) {
            var b = a;
            return b.withId = o, b;
        }
        function n(a, b) {
            for (var c = 0, d = a.length; d > c; c++) {
                var e = a[c];
                if (e.id === b) return e;
            }
        }
        function o(b) {
            return a.findWithId(this, b);
        }
        function p() {
            return q([]);
        }
        function q(a) {
            var b = a;
            return b.withName = t, b;
        }
        function r(a, b) {
            var c = s(a, b);
            return c >= 0 ? a[c] : void 0;
        }
        function s(a, b) {
            for (var c = 0, d = a.length; d > c; c++) {
                var e = a[c];
                if (e.name === b) return c;
            }
            return -1;
        }
        function t(a) {
            var b = this;
            return r(b, a);
        }
        function u(a) {
            a.length = 0;
        }
        function v(a) {
            return a && 0 !== a.length ? !1 : !0;
        }
        a.intersect = b, a.diff = c, a.distinct = d, a.union = e, a.unionSingle = f, a.range = g,
        a.take = h, a.sequenceEqual = i, a.emptyToNull = j, a.indexOf = k, a.createWithId = l,
        a.extendWithId = m, a.findWithId = n, a.createWithName = p, a.extendWithName = q,
        a.findItemWithName = r, a.indexWithName = s, a.clear = u, a.isUndefinedOrEmpty = v;
    }(b = a.ArrayExtensions || (a.ArrayExtensions = {}));
}(jsCommon || (jsCommon = {}));

var InJs;

!function (a) {
    var b;
    !function (a) {
        function b() {
            return $("<div/>");
        }
        function c() {
            return $("<span/>");
        }
        function d() {
            return $('<input type="checkbox"/>');
        }
        function e() {
            return $("<ul/>");
        }
        function f() {
            return $("<li/>");
        }
        function g() {
            return $('<input type="button"/>');
        }
        function h() {
            return $("<select/>");
        }
        function i() {
            return $('<input type="text"/>');
        }
        function j() {
            return $("<img/>");
        }
        function k() {
            return $("<iframe/>");
        }
        a.div = b, a.span = c, a.checkbox = d, a.ul = e, a.li = f, a.button = g, a.select = h,
        a.textBox = i, a.img = j, a.iframe = k;
    }(b = a.DomFactory || (a.DomFactory = {}));
}(InJs || (InJs = {}));

var jsCommon;

!function (a) {
    var b = function () {
        function b(c) {
            var d = this;
            this._modalContainer = null, this._modalDialogElement = null, this._dialogTitle = null,
            this._dialogCloseButton = null, this._dialogContent = null, this._dialogActions = null,
            this._messageQueue = new Array(), this._isReady = !1, this._messageCurrentlyShown = !1,
            $(document).ready(function () {
                d._modalContainer = $(b.ModalDialogHtml), d._modalDialogElement = d._modalContainer.find(b.modalDialogClassSelector),
                d._dialogTitle = d._modalContainer.find(b.dialogTitleClassSelector), d._dialogCloseButton = d._modalContainer.find(b.dialogCloseIconClassSelector),
                d._dialogContent = d._modalContainer.find(b.dialogContentClassSelector), d._dialogActions = d._modalContainer.find(b.dialogActionsClassSelector);
                var e = d;
                if (d._dialogCloseButton.on(a.DOMConstants.mouseClickEventName, function () {
                    return e.hideDialog();
                }), !c) {
                    var f = $(b.modalDialogContainerHostClassSelector);
                    f && f.length > 0 && f.remove(), f = InJs.DomFactory.div().addClass(b.modalDialogContainerHostClassName),
                    c = $(a.DOMConstants.DocumentBody).append(f), c = f;
                }
                c.append(d._modalContainer), d._isReady = !0, d._messageQueue.length > 0 && d.showDialogInternal(d._messageQueue.shift());
            });
        }
        return b.prototype.showMessage = function (b, c) {
            var d = this;
            a.Utility.throwIfNullOrEmptyString(b, null, "ShowMessage", "messageTitle"), a.Utility.throwIfNullOrEmptyString(c, null, "ShowMessage", "messageText");
            var e = [];
            e[0] = this.createButton(InJs.Strings.dialogCloseActionLabel, function () {
                d.hideDialog();
            }), this.pushMessage(b, c, null, e, !0, null);
        }, b.prototype.showPrompt = function (b, c, d, e) {
            a.Utility.throwIfNullOrEmptyString(b, null, "ShowPrompt", "promptTitle"), a.Utility.throwIfNullOrEmptyString(c, null, "ShowPrompt", "promptText"),
            a.Utility.throwIfNullOrUndefined(d, null, "ShowPrompt", "promptActions");
            for (var f = new Array(), g = 0; g < d.length; g++) {
                var h = d[g], i = h.cssClass;
                0 === g && (i += " primary"), f[g] = this.createButton(h.labelText, h.actionCallback, h.data, i, h.disabled);
            }
            this.pushMessage(b, c, null, f, e, null);
        }, b.prototype.showError = function (a, b, c, d, e) {
            this.showCustomError(InJs.Strings.errorDialogTitle, a, b, 6 !== b, c, d, e);
        }, b.prototype.showCustomError = function (b, c, d, e, f, g, h) {
            var i = this;
            a.Utility.throwIfNullOrEmptyString(b, null, "ShowError", "errorTitle"), a.Utility.throwIfNullOrEmptyString(c, null, "ShowError", "errorText");
            var j = new Array();
            h ? h.forEach(function (a) {
                j.push(i.createButton(a.label, function () {
                    i.hideDialog(), $.isFunction(g) && g(a.resultValue);
                }));
            }) : j[0] = 6 !== d ? this.createButton(InJs.Strings.dialogCloseActionLabel, function () {
                i.hideDialog(), $.isFunction(g) && g(0);
            }) : this.createButton(InJs.Strings.dialogRefreshPageActionLabel, function () {
                window.location.reload();
            }, null, "primary");
            var k = $("<div/>").text(c);
            this.addAdditionalErrorInfo(k, f), this.pushMessage(b || InJs.Strings.errorDialogTitle, null, k, j, e, null);
        }, b.prototype.showCustomDialog = function (a, b, c, d, e, f) {
            for (var g = [], h = 0; h < c.length; h++) {
                var i = c[h], j = i.cssClass;
                0 === h && (j += " primary"), g[h] = this.createButton(i.labelText, i.actionCallback, i.data, j, i.disabled);
            }
            return this.pushMessage(a, null, b, g, e, d, f), this._dialogContent;
        }, b.prototype.hideDialog = function () {
            var c = this;
            this._modalContainer.fadeTo(b.AnimationSpeedMs, 0, function () {
                if (c._modalContainer.css(a.CssConstants.displayProperty, a.CssConstants.noneValue),
                c._messageCurrentlyShown = !1, c._messageQueue.length) {
                    var b = c._messageQueue.shift();
                    c.showDialogInternal(b);
                }
            });
        }, b.prototype.updatePosition = function (c) {
            var d = this._modalDialogElement.height();
            c ? this._modalDialogElement.animate({
                "margin-top": (-1 * (d / 2)).toString() + a.CssConstants.pixelUnits
            }, b.AnimationSpeedMs) : this._modalDialogElement.css(a.CssConstants.marginTopProperty, (-1 * (d / 2)).toString() + a.CssConstants.pixelUnits);
        }, b.prototype.addAdditionalErrorInfo = function (b, c) {
            var d = this;
            if (c) {
                for (var e = $("<p />"), f = 0; f < c.length; f++) e.append(InJs.InfoNavUtility.constructErrorField(c[f].errorInfoKey, c[f].errorInfoValue));
                var g = InJs.InfoNavUtility.constructShowDetailsContainer(e);
                b.append($("<br />")), b.append(g), b.find(".showAdditionalDetailsLink").on(a.DOMConstants.mouseClickEventName, function () {
                    d.updatePosition(!0);
                });
            }
        }, b.prototype.pushMessage = function (a, b, d, e, f, g, h) {
            "undefined" == typeof f && (f = !0);
            var i = new c();
            i.titleText = a, i.messageText = b, i.dialogContent = d, i.dialogButtons = e, i.onDialogDisplayed = g,
            i.isDismissable = f, this._messageQueue.push(i), !this._messageCurrentlyShown && this._isReady && this.showDialogInternal(this._messageQueue.shift(), h);
        }, b.prototype.showDialogInternal = function (c, d) {
            var e = this;
            if (this._messageCurrentlyShown = !0, this._dialogTitle.empty(), this._dialogContent.empty(),
            this._dialogActions.empty(), this._dialogTitle.text(c.titleText), a.StringExtensions.isNullOrEmpty(c.messageText) ? this._dialogContent.append(c.dialogContent) : this._dialogContent.text(c.messageText),
            c.isDismissable ? this._dialogCloseButton.css(a.CssConstants.displayProperty, a.CssConstants.blockValue) : this._dialogCloseButton.css(a.CssConstants.displayProperty, a.CssConstants.noneValue),
            c.dialogButtons.length > 0) {
                this._dialogActions.show();
                for (var f = 0; f < c.dialogButtons.length; f++) this._dialogActions.append(c.dialogButtons[f]);
            } else this._dialogActions.hide();
            var g = this._modalContainer.css(a.CssConstants.displayProperty) === a.CssConstants.noneValue ? this._modalContainer : this._modalDialogElement;
            g.fadeTo(0, 0), this.updatePosition(!1), g.fadeTo(b.AnimationSpeedMs, 1, function () {
                e._modalDialogElement.focus();
                var a = e._dialogActions.find("input");
                a.length > 0 && a[0].focus(), c.onDialogDisplayed && c.onDialogDisplayed(e._dialogContent),
                d && e._dialogContent.parent().find(".infonav-dialogActions input[type=button]:first").focus();
            });
        }, b.prototype.createButton = function (c, d, e, f, g) {
            var h = this, i = $(b.NewButtonSelector);
            return i.attr("value", c), i.on(a.DOMConstants.mouseClickEventName, function () {
                d(i, h._dialogContent, e);
            }), f && i.addClass(f), g && i.prop("disabled", !0), i;
        }, b.AnimationSpeedMs = 250, b.modalDialogCssClass = "infonav-modalDialog", b.dialogTitleCssClass = "infonav-dialogTitle",
        b.dialogCloseIconCssClass = "infonav-dialogCloseIcon", b.dialogContentCssClass = "infonav-dialogContent",
        b.dialogActionsCssClass = "infonav-dialogActions", b.modalDialogClassSelector = "." + b.modalDialogCssClass,
        b.dialogTitleClassSelector = "." + b.dialogTitleCssClass, b.dialogCloseIconClassSelector = "." + b.dialogCloseIconCssClass,
        b.dialogContentClassSelector = "." + b.dialogContentCssClass, b.dialogActionsClassSelector = "." + b.dialogActionsCssClass,
        b.modalDialogContainerHostClassName = "infonav-modalContainerHost", b.modalDialogContainerHostClassSelector = "." + b.modalDialogContainerHostClassName,
        b.ModalDialogHtml = '<div class="infonav-modalContainer' + (-1 !== location.search.indexOf("renderAsModalDialog") ? " small" : "") + '"><div class="' + b.modalDialogCssClass + '" tabindex="-1"><div class="infonav-dialogLayout"><div class="' + b.dialogTitleCssClass + '"></div><div class="' + b.dialogCloseIconCssClass + '"></div><div class="' + b.dialogContentCssClass + '"></div><div class="' + b.dialogActionsCssClass + '"></div></div></div></div>',
        b.NewButtonSelector = '<input type="button"></input>', b;
    }();
    a.ModalDialog = b;
    var c = function () {
        function a() {
            this.titleText = null, this.messageText = null, this.dialogContent = null, this.dialogButtons = null,
            this.onDialogDisplayed = null, this.isDismissable = !0;
        }
        return a;
    }();
}(jsCommon || (jsCommon = {}));

var InJs;

!function (a) {
    var b = function () {
        function a(a, b, c, d, e) {
            this.labelText = a, this.actionCallback = b, this.data = c, this.cssClass = d, this.disabled = !!e;
        }
        return a;
    }();
    a.ModalDialogAction = b;
}(InJs || (InJs = {}));

var jsCommon;

!function (a) {
    var b;
    !function (b) {
        function c(a, b) {
            if (0 === b) return a;
            var c = d(a), g = e(c), j = i(g, b), k = h(j);
            return f(k);
        }
        function d(b) {
            a.Utility.throwIfNullOrEmpty(b, "RgbColor", "parse", "rgbString"), a.Utility.throwIfNotTrue(7 === b.length, "RgbColor", "parse", "rgbString");
            var c = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(b);
            return a.Utility.throwIfNullOrUndefined(c, "RgbColor", "parse", "rgbString"), {
                R: parseInt(c[1], 16),
                G: parseInt(c[2], 16),
                B: parseInt(c[3], 16)
            };
        }
        function e(a) {
            var b, c, d = a.R / 255, e = a.G / 255, f = a.B / 255, g = Math.min(d, Math.min(e, f)), h = Math.max(d, Math.max(e, f)), i = h, j = h - g;
            return 0 === h || 0 === j ? (b = 0, c = 0) : (b = j / h, c = d === h ? (e - f) / j : e === h ? 2 + (f - d) / j : 4 + (d - e) / j),
            c /= 6, 0 > c && (c += 1), {
                H: c,
                S: b,
                V: i
            };
        }
        function f(a) {
            return "#" + g(a.R) + g(a.G) + g(a.B);
        }
        function g(a) {
            var b = a.toString(16).toUpperCase();
            return 1 === b.length ? "0" + b : b;
        }
        function h(a) {
            var b, c, d, e = a.H, f = a.S, g = a.V;
            if (0 === f) b = g, c = g, d = g; else {
                var h, i, j, k, l, m;
                switch (m = 6 * e, l = Math.floor(m), k = m - l, h = g * (1 - f), i = g * (1 - f * k),
                j = g * (1 - f * (1 - k)), l) {
                    case 0:
                        b = g, c = j, d = h;
                        break;

                    case 1:
                        b = i, c = g, d = h;
                        break;

                    case 2:
                        b = h, c = g, d = j;
                        break;

                    case 3:
                        b = h, c = i, d = g;
                        break;

                    case 4:
                        b = j, c = h, d = g;
                        break;

                    case 5:
                        b = g, c = h, d = i;
                }
            }
            return {
                R: Math.floor(255 * b),
                G: Math.floor(255 * c),
                B: Math.floor(255 * d)
            };
        }
        function i(a, b) {
            var c = a.H + b;
            return {
                H: c > 1 ? c - 1 : c,
                S: a.S,
                V: a.V
            };
        }
        function j(a, b) {
            var c = Math.floor(b);
            return {
                R: Math.max(0, a.R - c),
                G: Math.max(0, a.G - c),
                B: Math.max(0, a.B - c)
            };
        }
        function k(a, b) {
            return m(a.R, a.G, a.B, b);
        }
        function l(a) {
            return "rgb(" + a.R + "," + a.G + "," + a.B + ")";
        }
        function m(a, b, c, d) {
            return "rgba(" + a + "," + b + "," + c + "," + d + ")";
        }
        function n(a) {
            var b = /^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/, c = b.exec(a);
            return c ? p(c[1], c[2], c[3]) : "";
        }
        function o(a) {
            var b = /^rgba\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3}),\s*(\d*(?:\.\d+)?)\)$/, c = b.exec(a);
            return c ? p(c[1], c[2], c[3]) : "";
        }
        function p(a, b, c) {
            var d = parseInt(a, 10).toString(16), e = parseInt(b, 10).toString(16), f = parseInt(c, 10).toString(16);
            return "#" + (1 === d.length ? "0" + d : d) + (1 === e.length ? "0" + e : e) + (1 === f.length ? "0" + f : f);
        }
        b.rotate = c, b.parseRgb = d, b.rgbToHexString = f, b.darken = j, b.rgbWithAlphaString = k,
        b.rgbString = l, b.rgbaString = m, b.rgbStringToHexString = n, b.rgbaStringToHexString = o;
    }(b = a.color || (a.color = {}));
}(jsCommon || (jsCommon = {}));

var jsCommon;

!function (a) {
    var b;
    !function (a) {
        a.styleAttribute = "style", a.pixelUnits = "px", a.heightProperty = "height", a.widthProperty = "width",
        a.topProperty = "top", a.bottomProperty = "bottom", a.leftProperty = "left", a.rightProperty = "right",
        a.marginTopProperty = "margin-top", a.marginLeftProperty = "margin-left", a.displayProperty = "display",
        a.backgroundProperty = "background", a.backgroundColorProperty = "background-color",
        a.backgroundRepeatProperty = "background-repeat", a.backgroundSizeProperty = "background-size",
        a.backgroundImageProperty = "background-image", a.textShadowProperty = "text-shadow",
        a.borderTopWidthProperty = "border-top-width", a.borderBottomWidthProperty = "border-bottom-width",
        a.borderLeftWidthProperty = "border-left-width", a.borderRightWidthProperty = "border-right-width",
        a.fontWeightProperty = "font-weight", a.colorProperty = "color", a.opacityProperty = "opacity",
        a.paddingLeftProperty = "padding-left", a.paddingRightProperty = "padding-right",
        a.positionProperty = "position", a.maxWidthProperty = "max-width", a.minWidthProperty = "min-width",
        a.overflowProperty = "overflow", a.cursorProperty = "cursor", a.visibilityProperty = "visibility",
        a.absoluteValue = "absolute", a.zeroPixelValue = "0px", a.autoValue = "auto", a.hiddenValue = "hidden",
        a.noneValue = "none", a.blockValue = "block", a.inlineBlockValue = "inline-block",
        a.transparentValue = "transparent", a.boldValue = "bold", a.visibleValue = "visible",
        a.tableRowValue = "table-row", a.coverValue = "cover", a.pointerValue = "pointer";
    }(b = a.CssConstants || (a.CssConstants = {}));
}(jsCommon || (jsCommon = {}));

var jsCommon;

!function (a) {
    var b;
    !function (a) {
        a.escKeyCode = 27, a.enterKeyCode = 13, a.tabKeyCode = 9, a.upArrowKeyCode = 38,
        a.downArrowKeyCode = 40, a.leftArrowKeyCode = 37, a.rightArrowKeyCode = 39, a.homeKeyCode = 36,
        a.endKeyCode = 35, a.backSpaceKeyCode = 8, a.deleteKeyCode = 46, a.spaceKeyCode = 32,
        a.shiftKeyCode = 16, a.ctrlKeyCode = 17, a.altKeyCode = 18, a.aKeyCode = 65, a.cKeyCode = 67,
        a.vKeyCode = 86, a.xKeyCode = 88, a.yKeyCode = 89, a.zKeyCode = 90, a.DocumentBody = "body",
        a.Anchor = "a", a.EditableTextElements = "input, textarea, select", a.disabledAttributeOrValue = "disabled",
        a.readonlyAttributeOrValue = "readonly", a.styleAttribute = "style", a.hrefAttribute = "href",
        a.targetAttribute = "target", a.blankValue = "_blank", a.classAttribute = "class",
        a.titleAttribute = "title", a.srcAttribute = "src", a.contextmenuEventName = "contextmenu",
        a.blurEventName = "blur", a.keyUpEventName = "keyup", a.inputEventName = "input",
        a.changeEventName = "change", a.cutEventName = "cut", a.keyDownEventName = "keydown",
        a.mouseMoveEventName = "mousemove", a.mouseDownEventName = "mousedown", a.mouseEnterEventName = "mouseenter",
        a.mouseLeaveEventName = "mouseleave", a.mouseOverEventName = "mouseover", a.mouseOutEventName = "mouseout",
        a.mouseClickEventName = "click", a.pasteEventName = "paste", a.scrollEventName = "scroll",
        a.dropEventName = "drop", a.focusInEventName = "focusin", a.focusOutEventName = "focusout",
        a.selectEventName = "select", a.messageEventName = "message", a.loadEventName = "load",
        a.beforeUnload = "beforeunload", a.inputAndSelectEventNames = "input, select";
    }(b = a.DOMConstants || (a.DOMConstants = {}));
}(jsCommon || (jsCommon = {}));

var debug;

!function (a) {
    function b(a, b) {
        a !== !0 && e(b || "condition: " + a);
    }
    function c(a, b) {
        (null === a || void 0 === a) && e(b || "condition: " + a);
    }
    function d() { }
    function e(b) {
        (a.assertFailFunction || alert)("Debug Assert failed: " + b);
    }
    a.assertFailFunction, a.assert = b, a.assertValue = c, a.assertAnyValue = d, a.assertFail = e;
}(debug || (debug = {}));

var powerbi;

!function (a) {
    function b(a) {
        return new e(a);
    }
    function c(a) {
        return new e(a);
    }
    a.RejectablePromise2 = b, a.RejectablePromise = c;
    var d;
    !function (a) {
        a[a.pending = 0] = "pending", a[a.resolved = 1] = "resolved", a[a.rejected = 2] = "rejected";
    }(d || (d = {}));
    var e = function () {
        function a(a) {
            var b = this;
            this.deferred = a, this.state = 0, a.promise.then(function () {
                return b.state = 1;
            }, function () {
                return b.state = 2;
            });
        }
        return a.prototype.then = function (a, b) {
            return this.deferred.promise.then(a, b);
        }, a.prototype["catch"] = function (a) {
            return this.deferred.promise["catch"](a);
        }, a.prototype["finally"] = function (a) {
            return this.deferred.promise["finally"](a);
        }, a.prototype.resolved = function () {
            return 1 === this.state;
        }, a.prototype.rejected = function () {
            return 2 === this.state;
        }, a.prototype.pending = function () {
            return 0 === this.state;
        }, a.prototype.reject = function (a) {
            this.pending() && (this.deferred.reject(a), this.state = 2);
        }, a;
    }();
}(powerbi || (powerbi = {}));

var jsCommon;

!function (a) {
    var b;
    !function (b) {
        function c(a) {
            return b.isMidnight(a) ? a.toLocaleDateString() : a.toLocaleString();
        }
        function d(a) {
            return b.isMomentPresent() ? moment(a).fromNow() : c(a);
        }
        function e(a) {
            return a.getTime() % q === 0;
        }
        function f(a, b) {
            var c = moment(a);
            return moment().diff(c, b);
        }
        function g() {
            return "undefined" != typeof moment;
        }
        function h(a) {
            return moment(a).toDate();
        }
        function i(a) {
            return moment.utc(a).toDate();
        }
        function j(a) {
            return moment(a).fromNow();
        }
        function k(a) {
            return n + a.getTime().toString() + o;
        }
        function l(c) {
            if (a.Utility.throwIfNullOrEmptyString(c, null, "deserializeDate", "Cannot deserialize empty string"),
            a.Utility.throwIfNotTrue(0 === c.indexOf(n) && a.StringExtensions.endsWith(c, o), null, "deserializeDate", "Cannot deserialize empty string"),
            b.isMomentPresent()) {
                var d = moment(c);
                return a.Utility.throwIfNotTrue(d.isValid(), null, "deserializeDate", "parsedValue.isValid must be true"),
                d.toDate();
            }
            var e = c.substring(n.length, c.length - o.length);
            a.Utility.throwIfNotTrue(/^\-?\d+$/.test(e), null, "deserializeDate", "Cannot deserialize invalid date");
            var f = parseInt(e, 10);
            return a.Utility.throwIfNotTrue(!isNaN(f), null, "deserializeDate", "Cannot deserialize invalid date"),
            new Date(f);
        }
        function m(a) {
            try {
                return l(a);
            } catch (b) { }
        }
        var n = "/Date(", o = ")/";
        b.formatAbsolute = c, b.formatPretty = d;
        var p = 36e5, q = 24 * p;
        b.isMidnight = e, b.elapsedToNow = f, b.isMomentPresent = g, b.parseIsoDate = h,
        b.parseUtcDate = i, b.fromNow = j, b.serializeDate = k, b.deserializeDate = l, b.tryDeserializeDate = m;
    }(b = a.DateExtensions || (a.DateExtensions = {}));
}(jsCommon || (jsCommon = {}));

var powerbi;

!function (a) {
    function b(a, b) {
        return void 0 !== a ? a : b;
    }
    var c;
    !function (a) {
        function c(b) {
            return b >= 0 ? b < a.POSITIVE_POWERS.length ? a.POSITIVE_POWERS[b] : 1 / 0 : (b = -b,
            b > 0 && b < a.NEGATIVE_POWERS.length ? a.NEGATIVE_POWERS[b] : 0);
        }
        function d(b) {
            if (b > 1 && 1e16 > b) return 1e8 > b ? 1e4 > b ? 100 > b ? 10 > b ? 0 : 1 : 1e3 > b ? 2 : 3 : 1e6 > b ? 1e5 > b ? 4 : 5 : 1e7 > b ? 6 : 7 : 1e12 > b ? 1e10 > b ? 1e9 > b ? 8 : 9 : 1e11 > b ? 10 : 11 : 1e14 > b ? 1e13 > b ? 12 : 13 : 1e15 > b ? 14 : 15;
            if (b > 1e-16 && 1 > b) return 1e-8 > b ? 1e-12 > b ? 1e-14 > b ? 1e-15 > b ? -16 : -15 : 1e-13 > b ? -14 : -13 : 1e-10 > b ? 1e-11 > b ? -12 : -11 : 1e-9 > b ? -10 : -9 : 1e-4 > b ? 1e-6 > b ? 1e-7 > b ? -8 : -7 : 1e-5 > b ? -6 : -5 : .01 > b ? .001 > b ? -4 : -3 : .1 > b ? -2 : -1;
            var c = Math.log(b) / a.LOG_E_10;
            return a.floorWithPrecision(c);
        }
        function e(b, c) {
            if (void 0 === c && (c = a.DEFAULT_PRECISION_IN_DECIMAL_DIGITS), !b) return void 0;
            var d = a.log10(Math.abs(b));
            if (d < a.MIN_EXP) return 0;
            var e = Math.max(d - c, -a.NEGATIVE_POWERS.length + 1);
            return a.pow10(e);
        }
        function f(c, d, e) {
            return e = b(e, a.DEFAULT_PRECISION), c === d || Math.abs(c - d) < e;
        }
        function g(c, d, e) {
            return e = b(e, a.DEFAULT_PRECISION), d > c && Math.abs(c - d) > e;
        }
        function h(c, d, e) {
            return e = b(e, a.DEFAULT_PRECISION), d > c || Math.abs(c - d) < e;
        }
        function i(c, d, e) {
            return e = b(e, a.DEFAULT_PRECISION), c > d && Math.abs(c - d) > e;
        }
        function j(c, d, e) {
            return e = b(e, a.DEFAULT_PRECISION), c > d || Math.abs(c - d) < e;
        }
        function k(c, d) {
            d = b(d, a.DEFAULT_PRECISION);
            var e = Math.round(c);
            return Math.abs(c - e) < d ? e : Math.floor(c);
        }
        function l(c, d) {
            d = b(d, a.DEFAULT_PRECISION);
            var e = Math.round(c);
            return Math.abs(c - e) < d ? e : Math.ceil(c);
        }
        function m(c, d) {
            return d = b(d, a.DEFAULT_PRECISION), 0 === d || 0 === c ? c : Math.floor(c / d) * d;
        }
        function n(c, d) {
            return d = b(d, a.DEFAULT_PRECISION), 0 === d || 0 === c ? c : Math.ceil(c / d) * d;
        }
        function o(c, d) {
            if (d = b(d, a.DEFAULT_PRECISION), 0 === d || 0 === c) return c;
            var e = Math.round(c / d) * d, f = Math.round(a.log10(Math.abs(c)) - a.log10(d)) + 1;
            return f > 0 && 16 > f && (e = parseFloat(e.toPrecision(f))), e;
        }
        function p(a, b, c) {
            return void 0 === a || null === a ? a : b > a ? b : a > c ? c : a;
        }
        function q(a) {
            return .5 + a << 0;
        }
        function r(a, b, c, d, e) {
            if (0 === c || 0 === e) return a >= b && b + c >= a ? d : 0 / 0;
            var f = (a - b) / c, g = d + f * e;
            return g;
        }
        function s(a) {
            return o(a, e(a));
        }
        function t(a) {
            return null !== a && a % 1 === 0;
        }
        a.MIN_VALUE = -Number.MAX_VALUE, a.MAX_VALUE = Number.MAX_VALUE, a.MIN_EXP = -308,
        a.MAX_EXP = 308, a.EPSILON = 1e-323, a.DEFAULT_PRECISION = 1e-4, a.DEFAULT_PRECISION_IN_DECIMAL_DIGITS = 12,
        a.LOG_E_10 = Math.log(10), a.POSITIVE_POWERS = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13, 1e14, 1e15, 1e16, 1e17, 1e18, 1e19, 1e20, 1e21, 1e22, 1e23, 1e24, 1e25, 1e26, 1e27, 1e28, 1e29, 1e30, 1e31, 1e32, 1e33, 1e34, 1e35, 1e36, 1e37, 1e38, 1e39, 1e40, 1e41, 1e42, 1e43, 1e44, 1e45, 1e46, 1e47, 1e48, 1e49, 1e50, 1e51, 1e52, 1e53, 1e54, 1e55, 1e56, 1e57, 1e58, 1e59, 1e60, 1e61, 1e62, 1e63, 1e64, 1e65, 1e66, 1e67, 1e68, 1e69, 1e70, 1e71, 1e72, 1e73, 1e74, 1e75, 1e76, 1e77, 1e78, 1e79, 1e80, 1e81, 1e82, 1e83, 1e84, 1e85, 1e86, 1e87, 1e88, 1e89, 1e90, 1e91, 1e92, 1e93, 1e94, 1e95, 1e96, 1e97, 1e98, 1e99, 1e100, 1e101, 1e102, 1e103, 1e104, 1e105, 1e106, 1e107, 1e108, 1e109, 1e110, 1e111, 1e112, 1e113, 1e114, 1e115, 1e116, 1e117, 1e118, 1e119, 1e120, 1e121, 1e122, 1e123, 1e124, 1e125, 1e126, 1e127, 1e128, 1e129, 1e130, 1e131, 1e132, 1e133, 1e134, 1e135, 1e136, 1e137, 1e138, 1e139, 1e140, 1e141, 1e142, 1e143, 1e144, 1e145, 1e146, 1e147, 1e148, 1e149, 1e150, 1e151, 1e152, 1e153, 1e154, 1e155, 1e156, 1e157, 1e158, 1e159, 1e160, 1e161, 1e162, 1e163, 1e164, 1e165, 1e166, 1e167, 1e168, 1e169, 1e170, 1e171, 1e172, 1e173, 1e174, 1e175, 1e176, 1e177, 1e178, 1e179, 1e180, 1e181, 1e182, 1e183, 1e184, 1e185, 1e186, 1e187, 1e188, 1e189, 1e190, 1e191, 1e192, 1e193, 1e194, 1e195, 1e196, 1e197, 1e198, 1e199, 1e200, 1e201, 1e202, 1e203, 1e204, 1e205, 1e206, 1e207, 1e208, 1e209, 1e210, 1e211, 1e212, 1e213, 1e214, 1e215, 1e216, 1e217, 1e218, 1e219, 1e220, 1e221, 1e222, 1e223, 1e224, 1e225, 1e226, 1e227, 1e228, 1e229, 1e230, 1e231, 1e232, 1e233, 1e234, 1e235, 1e236, 1e237, 1e238, 1e239, 1e240, 1e241, 1e242, 1e243, 1e244, 1e245, 1e246, 1e247, 1e248, 1e249, 1e250, 1e251, 1e252, 1e253, 1e254, 1e255, 1e256, 1e257, 1e258, 1e259, 1e260, 1e261, 1e262, 1e263, 1e264, 1e265, 1e266, 1e267, 1e268, 1e269, 1e270, 1e271, 1e272, 1e273, 1e274, 1e275, 1e276, 1e277, 1e278, 1e279, 1e280, 1e281, 1e282, 1e283, 1e284, 1e285, 1e286, 1e287, 1e288, 1e289, 1e290, 1e291, 1e292, 1e293, 1e294, 1e295, 1e296, 1e297, 1e298, 1e299, 1e300, 1e301, 1e302, 1e303, 1e304, 1e305, 1e306, 1e307, 1e308],
        a.NEGATIVE_POWERS = [1, .1, .01, .001, 1e-4, 1e-5, 1e-6, 1e-7, 1e-8, 1e-9, 1e-10, 1e-11, 1e-12, 1e-13, 1e-14, 1e-15, 1e-16, 1e-17, 1e-18, 1e-19, 1e-20, 1e-21, 1e-22, 1e-23, 1e-24, 1e-25, 1e-26, 1e-27, 1e-28, 1e-29, 1e-30, 1e-31, 1e-32, 1e-33, 1e-34, 1e-35, 1e-36, 1e-37, 1e-38, 1e-39, 1e-40, 1e-41, 1e-42, 1e-43, 1e-44, 1e-45, 1e-46, 1e-47, 1e-48, 1e-49, 1e-50, 1e-51, 1e-52, 1e-53, 1e-54, 1e-55, 1e-56, 1e-57, 1e-58, 1e-59, 1e-60, 1e-61, 1e-62, 1e-63, 1e-64, 1e-65, 1e-66, 1e-67, 1e-68, 1e-69, 1e-70, 1e-71, 1e-72, 1e-73, 1e-74, 1e-75, 1e-76, 1e-77, 1e-78, 1e-79, 1e-80, 1e-81, 1e-82, 1e-83, 1e-84, 1e-85, 1e-86, 1e-87, 1e-88, 1e-89, 1e-90, 1e-91, 1e-92, 1e-93, 1e-94, 1e-95, 1e-96, 1e-97, 1e-98, 1e-99, 1e-100, 1e-101, 1e-102, 1e-103, 1e-104, 1e-105, 1e-106, 1e-107, 1e-108, 1e-109, 1e-110, 1e-111, 1e-112, 1e-113, 1e-114, 1e-115, 1e-116, 1e-117, 1e-118, 1e-119, 1e-120, 1e-121, 1e-122, 1e-123, 1e-124, 1e-125, 1e-126, 1e-127, 1e-128, 1e-129, 1e-130, 1e-131, 1e-132, 1e-133, 1e-134, 1e-135, 1e-136, 1e-137, 1e-138, 1e-139, 1e-140, 1e-141, 1e-142, 1e-143, 1e-144, 1e-145, 1e-146, 1e-147, 1e-148, 1e-149, 1e-150, 1e-151, 1e-152, 1e-153, 1e-154, 1e-155, 1e-156, 1e-157, 1e-158, 1e-159, 1e-160, 1e-161, 1e-162, 1e-163, 1e-164, 1e-165, 1e-166, 1e-167, 1e-168, 1e-169, 1e-170, 1e-171, 1e-172, 1e-173, 1e-174, 1e-175, 1e-176, 1e-177, 1e-178, 1e-179, 1e-180, 1e-181, 1e-182, 1e-183, 1e-184, 1e-185, 1e-186, 1e-187, 1e-188, 1e-189, 1e-190, 1e-191, 1e-192, 1e-193, 1e-194, 1e-195, 1e-196, 1e-197, 1e-198, 1e-199, 1e-200, 1e-201, 1e-202, 1e-203, 1e-204, 1e-205, 1e-206, 1e-207, 1e-208, 1e-209, 1e-210, 1e-211, 1e-212, 1e-213, 1e-214, 1e-215, 1e-216, 1e-217, 1e-218, 1e-219, 1e-220, 1e-221, 1e-222, 1e-223, 1e-224, 1e-225, 1e-226, 1e-227, 1e-228, 1e-229, 1e-230, 1e-231, 1e-232, 1e-233, 1e-234, 1e-235, 1e-236, 1e-237, 1e-238, 1e-239, 1e-240, 1e-241, 1e-242, 1e-243, 1e-244, 1e-245, 1e-246, 1e-247, 1e-248, 1e-249, 1e-250, 1e-251, 1e-252, 1e-253, 1e-254, 1e-255, 1e-256, 1e-257, 1e-258, 1e-259, 1e-260, 1e-261, 1e-262, 1e-263, 1e-264, 1e-265, 1e-266, 1e-267, 1e-268, 1e-269, 1e-270, 1e-271, 1e-272, 1e-273, 1e-274, 1e-275, 1e-276, 1e-277, 1e-278, 1e-279, 1e-280, 1e-281, 1e-282, 1e-283, 1e-284, 1e-285, 1e-286, 1e-287, 1e-288, 1e-289, 1e-290, 1e-291, 1e-292, 1e-293, 1e-294, 1e-295, 1e-296, 1e-297, 1e-298, 1e-299, 1e-300, 1e-301, 1e-302, 1e-303, 1e-304, 1e-305, 1e-306, 1e-307, 1e-308, 1e-309, 1e-310, 1e-311, 1e-312, 1e-313, 1e-314, 1e-315, 1e-316, 1e-317, 1e-318, 1e-319, 1e-320, 1e-321, 1e-322, 1e-323, 0],
        a.pow10 = c, a.log10 = d, a.getPrecision = e, a.equalWithPrecision = f, a.lessWithPrecision = g,
        a.lessOrEqualWithPrecision = h, a.greaterWithPrecision = i, a.greaterOrEqualWithPrecision = j,
        a.floorWithPrecision = k, a.ceilWithPrecision = l, a.floorToPrecision = m, a.ceilToPrecision = n,
        a.roundToPrecision = o, a.ensureInRange = p, a.round = q, a.project = r, a.removeDecimalNoise = s,
        a.isInteger = t;
    }(c = a.Double || (a.Double = {}));
}(powerbi || (powerbi = {}));

var jsCommon;

!function (a) {
    function b(a) {
        void 0 === a && (a = 1);
        var b, c;
        try {
            throw new Error();
        } catch (d) {
            b = d.stack, null != b && (c = b.split("\n"), c.splice(1, a), b = c.join("\n"));
        }
        return b;
    }
    var c;
    !function (a) {
        function c() {
            return {
                name: "infoNavAppAlreadyPresent",
                message: "Cannot initialize embedded scenario when the InfoNav App is already present in this context",
                stack: k()
            };
        }
        function d(a) {
            return {
                name: "invalidOperation",
                message: a,
                stack: k()
            };
        }
        function e(a, b) {
            return {
                name: "invalidArgumentError",
                argument: a,
                message: b,
                stack: k()
            };
        }
        function f(a) {
            return {
                name: "argumentNull",
                argument: a,
                message: "Argument was null",
                stack: k()
            };
        }
        function g(a) {
            return {
                name: "argumentUndefined",
                argument: a,
                message: "Argument was undefined",
                stack: k()
            };
        }
        function h(a) {
            return {
                name: "argumentOutOfRange",
                argument: a,
                message: "Argument was out of range",
                stack: k()
            };
        }
        function i(a, b) {
            return {
                name: "pureVirtualMethodException",
                message: "This method must be overriden by the derived class:" + a + "." + b,
                stack: k()
            };
        }
        function j(a) {
            return {
                name: "notImplementedException",
                message: a,
                stack: k()
            };
        }
        function k() {
            return b(2);
        }
        a.infoNavAppAlreadyPresent = c, a.invalidOperation = d, a.argument = e, a.argumentNull = f,
        a.argumentUndefined = g, a.argumentOutOfRange = h, a.pureVirtualMethodException = i,
        a.notImplementedException = j;
    }(c = a.Errors || (a.Errors = {})), a.getStackTrace = b;
}(jsCommon || (jsCommon = {}));

var jsCommon;

!function (a) {
    var b;
    !function (a) {
        function b(a, b, c) {
            switch (b) {
                case "m":
                    b = "M";
                    break;

                case "O":
                case "o":
                    b = "yyyy'-'MM'-'dd'T'HH':'mm':'ss'.'fff'0000'";
                    break;

                case "R":
                case "r":
                    a = new Date(a.getUTCFullYear(), a.getUTCMonth(), a.getUTCDate(), a.getUTCHours(), a.getUTCMinutes(), a.getUTCSeconds(), a.getUTCMilliseconds()),
                    b = "ddd, dd MMM yyyy HH':'mm':'ss 'GMT'";
                    break;

                case "s":
                    b = "S";
                    break;

                case "u":
                    a = new Date(a.getUTCFullYear(), a.getUTCMonth(), a.getUTCDate(), a.getUTCHours(), a.getUTCMinutes(), a.getUTCSeconds(), a.getUTCMilliseconds()),
                    b = "yyyy'-'MM'-'dd HH':'mm':'ss'Z'";
                    break;

                case "U":
                    a = new Date(a.getUTCFullYear(), a.getUTCMonth(), a.getUTCDate(), a.getUTCHours(), a.getUTCMinutes(), a.getUTCSeconds(), a.getUTCMilliseconds()),
                    b = "F";
                    break;

                case "y":
                case "Y":
                    switch (c) {
                        case "default":
                        case "en":
                        case "en-US":
                            b = "MMMM, yyyy";
                            break;

                        default:
                            b = "Y";
                    }
            }
            return {
                value: a,
                format: b
            };
        }
        function c(a) {
            if (a = a.replace(/%K/g, "zzz"), a = a.replace(/K/g, "zzz"), a = a.replace(/fffffff/g, "fff0000"),
            a = a.replace(/ffffff/g, "fff000"), a = a.replace(/fffff/g, "fff00"), a = a.replace(/ffff/g, "fff0"),
            a = a.replace(/yyyyy/g, "0yyyy"), a = a.replace(/(^y|^)yyy(^y|$)/g, "yyyy"), d || (d = ["d", "f", "F", "g", "h", "H", "K", "m", "M", "s", "t", "y", "z", ":", "/"].map(function (a) {
                return {
                r: new RegExp("%" + a + "(?!" + a + ")", "g"),
                s: a
            };
            })), -1 !== a.indexOf("%") && a.length > 2) for (var b = 0; b < d.length; b++) a = a.replace(d[b].r, d[b].s);
            return a;
        }
        var d;
        a.findDateFormat = b, a.fixDateTimeFormat = c;
    }(b = a.Formatting || (a.Formatting = {}));
}(jsCommon || (jsCommon = {})), $.fn.multiline = function (a) {
    return this.text(a), this.html(this.html().replace(/\n/g, "<br/>")), this;
}, $.fn.togglePanelControl = function () {
    return this.each(function () {
        $(this).addClass("ui-accordion ui-accordion-icons ui-widget ui-helper-reset").find(".accordionHeader").addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-top ui-corner-bottom").hover(function () {
            $(this).toggleClass("ui-state-hover");
        }).prepend('<span class="ui-icon ui-icon-triangle-1-e"></span>').click(function () {
            return $(this).toggleClass("ui-accordion-header-active ui-state-active ui-state-default ui-corner-bottom").find("> .ui-icon").toggleClass("ui-icon-triangle-1-e ui-icon-triangle-1-s").end().next().slideToggle(),
            !1;
        }).next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").hide();
    });
};

var jsCommon;

!function (a) {
    var b;
    !function (a) {
        a.VisibleSelector = ":visible";
    }(b = a.JQueryConstants || (a.JQueryConstants = {}));
}(jsCommon || (jsCommon = {}));

var jsCommon;

!function (a) {
    var b = function () {
        function b(b) {
            a.Utility.throwIfNullOrUndefined(b, this, "constructor", "factoryMethod"), this._factoryMethod = b;
        }
        return b.prototype.getValue = function () {
            return null !== this._factoryMethod && (this._value = this._factoryMethod(), this._factoryMethod = null),
            this._value;
        }, b;
    }();
    a.Lazy = b;
}(jsCommon || (jsCommon = {}));

var jsCommon;

!function (a) {
    var b = function () {
        function a(a) {
            this._segments = a;
        }
        return a.prototype.getLeafSegment = function () {
            return this._segments[this._segments.length - 1];
        }, a.prototype.isExtensionOf = function (a) {
            if (this._segments.length <= a._segments.length) return !1;
            for (var b = 0, c = a._segments.length; c > b; ++b) if (this._segments[b] !== a._segments[b]) return !1;
            return !0;
        }, a.prototype.extend = function (b) {
            return new a(this._segments.concat([b]));
        }, a;
    }();
    a.Path = b;
}(jsCommon || (jsCommon = {}));

var powerbi;

!function (a) {
    var b;
    !function (a) {
        function b(a, b) {
            function c() { }
            c.prototype = a;
            var d = new c();
            return b && b(d), d;
        }
        function c(a, c) {
            if (a) {
                for (var d, e = 0, f = a.length; f > e; e++) {
                    var g = c(a[e]);
                    g && (d || (d = b(a)), d[e] = g);
                }
                return d;
            }
        }
        a.inherit = b, a.overrideArray = c;
    }(b = a.Prototype || (a.Prototype = {}));
}(powerbi || (powerbi = {}));

var jsCommon;

!function (a) {
    var b = function () {
        function b() { }
        return b.clearQueryString = function (a) {
            var c = b.parseQueryString();
            return delete c[a], b.rebuildQueryString(c);
        }, b.addOrUpdateQueryString = function (a, c) {
            var d = b.parseQueryString();
            return d[a] = c, b.rebuildQueryString(d);
        }, b.getQueryStringValue = function (a) {
            var c = b.parseQueryString();
            return c[a];
        }, b.parseQueryString = function (b) {
            void 0 === b && (b = window.location.search);
            var c = {}, d = b;
            if (!a.StringExtensions.isNullOrEmpty(d) && "?" === d.substr(0, 1)) for (var e = d.substr(1).split("&"), f = 0; f < e.length; f++) {
                var g = e[f].split("=");
                c[decodeURIComponent(g[0])] = decodeURIComponent(g[1]);
            }
            return c;
        }, b.rebuildQueryString = function (a) {
            var b = "", c = !0;
            for (var d in a) c || (b += "&"), b += encodeURIComponent(d), a[d] && (b += "=" + encodeURIComponent(a[d])),
            c = !1;
            return c || (b = "?" + b), b;
        }, b.OriginClientActivityIdParameterName = "caid", b.OriginRootActivityIdParameterName = "raid",
        b.OriginActivityIdParameterName = "aid", b;
    }();
    a.QueryStringUtil = b;
}(jsCommon || (jsCommon = {}));

var jsCommon;

!function (a) {
    var b = function () {
        function a(a) {
            this._parts = new Array(), a && this._parts.push(a);
        }
        return a.prototype.append = function (a) {
            a && (this._parts[this._parts.length] = a);
        }, a.prototype.appendLine = function (a) {
            this._parts[this._parts.length] = a ? a + "\r\n" : "\r\n";
        }, a.prototype.clear = function () {
            this._parts = new Array();
        }, a.prototype.isEmpty = function () {
            return 0 === this._parts.length || "" === this.toString("");
        }, a.prototype.toString = function (a) {
            var b = this._parts.join(a || "");
            return b;
        }, a;
    }();
    a.StringBuilder = b;
}(jsCommon || (jsCommon = {}));

var InJs;

!function (a) {
    var b;
    !function (a) {
        a.dateTimeFormat = "M/d/yyyy h:mm tt", a.serverErrorTitleText = "Sorry, something went wrong",
        a.serverErrorDetailsText = "Please try your query again. If the error continues please contact your system administrator.",
        a.serverTimeoutDetailsText = "There was a timeout processing your request. Please try again. If the error continues please contact your system administrator.",
        a.serverReloadDetailsText = "There was a mismatch in the metadata. This usually occurs when the data on the server has been updated. Please refresh the browser and try your query again.",
        a.infoNavErrorCodeTemplate = "{0} ({1})", a.infoNavErrorWithActivityIdTemplate = "{0} (Activity Id: {1})",
        a.errorCodeText = "Error Code", a.errorActivityIdText = "Activity Id", a.errorRequestIdText = "Request Id",
        a.errorLineNumberText = "Line number", a.errorColumnNumberText = "Column number",
        a.errorStackTraceText = "Stack trace", a.errorSourceFileText = "Source file", a.errorTimestampText = "Time",
        a.errorCallStackText = "Call stack", a.emptyResultTitleText = "Sorry, I wasn't able to find a good answer.",
        a.emptyResultDescriptionText = "", a.showDetailsText = "Show technical details",
        a.showMoreVisualizationsLabel = "show more", a.showFewerVisualizationsLabel = "show fewer",
        a.stackedBarChartVisualizationsLabel = "bar chart", a.clusteredBarChartVisualizationsLabel = "clustered bar chart",
        a.hundredPercentBarChartVisualizationsLabel = "100% stacked bar chart", a.stackedColumnChartVisualizationsLabel = "column chart",
        a.clusteredColumnChartVisualizationsLabel = "clustered column chart", a.hundredPercentColumnChartVisualizationsLabel = "100% stacked column chart",
        a.scatterChartVisualizationsLabel = "scatter chart", a.lineChartVisualizationsLabel = "line chart",
        a.pieChartVisualizationsLabel = "pie chart", a.mapVisualizationsLabel = "map", a.matrixVisualizationsLabel = "matrix",
        a.tableVisualizationsLabel = "table", a.cardVisualizationsLabel = "card", a.sharePointAppSettingsLinkLabel = "Settings",
        a.sharePointAppAddSamplesLinkLabel = "Add sample data...", a.sharePointAppSettingsPaneTitle = "Settings",
        a.sharePointAppCloseSettingsPaneButtonLabel = "Close", a.sharePointSettingsInvalidModelUrlLabel = "Please enter a valid URL",
        a.sharePointSettingsRetrievingModelLabel = "Looking for a workbook at the given URL...",
        a.sharePointSettingsModelNeedsPublishingLabel = "Your workbook needs to be enabled for web viewing before it can be searched with Power BI Q&A.",
        a.sharePointSettingsModelRetrievalFailedLabel = "There was a problem retrieving the specified workbook",
        a.sharePointSettingsModelRemovalFailedLabel = "There was a problem removing the specified workbook",
        a.sharePointSettingsDuplicateModelSpecifiedLabel = "The specified workbook has already been added",
        a.sharePointSettingsModelsSectionTitleLabel = "Models", a.sharePointSettingsModelsLoadingLabel = "Please wait...",
        a.sharePointSettingsAddModelDialogTitle = "Add workbook", a.sharePointSettingsAddModelBtnLabel = "Add workbook...",
        a.sharePointSettingsAddModelDialogText = "To add a new workbook, enter the workbook's URL in the box below and click 'Add'.",
        a.sharePointSettingsAddModelDialogAddActionLabel = "Add", a.sharePointSettingsRemoveModelBtnLabel = "Remove",
        a.sharePointSettingsRemoveModelDialogTitle = "Are you sure you want to remove this workbook?",
        a.sharePointSettingsRemoveModelDialogText = "This will remove {0} from the list of workbooks.",
        a.sharePointSettingsModelNameColumnLabel = "Workbook Name", a.sharePointSettingsModelUrlColumnLabel = "URL",
        a.sharePointSettingsModelStatusColumnLabel = "Status", a.sharePointSettingsModelsLoadFailedLabel = "We were unable to load the list of workbooks at this time, please try again later",
        a.sharePointSettingsBICenterAppNotInstalled = "Please install the BI Center app to configure Power BI Q&A",
        a.sharePointSettingsBICenterAppErrorInstallation = "Please fix the status of BI Center app to configure Power BI Q&A",
        a.sharePointSettingsModelsSectionFirstParagraghText = "These are the workbooks that Power BI Q&A will use when querying for results.",
        a.sharePointSettingsModelsSectionSecondParagraghText = "To add a workbook, click on the 'Add workbook...' button below. Similarly, you may remove previously added workbooks by clicking the Remove button for the corresponding workbook.",
        a.sharePointSettingsAddModelErrorText = "The add operation failed. Error: {0}",
        a.sharePointSettingsModelStatusNoneLabel = "None", a.sharePointSettingsModelStatusValidatingLabel = "Validating",
        a.sharePointSettingsModelStatusPublishingLabel = "Publishing", a.sharePointSettingsModelStatusDeletePendingLabel = "Deleting",
        a.sharePointSettingsModelStatusPublishSuccessfulLabel = "Published", a.sharePointSettingsModelPublishErrorNone = "None",
        a.sharePointSettingsModelPublishMissingError = "Workbook does not contain a model",
        a.sharePointSettingsModelPublishAboveLimitError = "Workbook size without model is above size limit",
        a.sharePointSettingsModelPublishXmlaError = "Xmla operation exception was thrown",
        a.sharePointSettingsModelNotPublishedError = "The workbook is not published", a.sharePointSettingsModelPublishCheckoutError = "Workbook in this checkout type is already being processed",
        a.sharePointSettingsModelPublishUnknownError = "Unknown error", a.addModelNonSharePointUrlError = "This is not a SharePoint URL. You must provide the URL of an Excel workbook in the current SharePoint site.",
        a.addModelSharePointDocumentNotFoundError = "No document exists for this URL. You must provide the URL of an Excel workbook in the current SharePoint site.",
        a.addModelSharePointInvalidUrlError = "This URL is not an Excel workbook. You must provide the URL of an Excel workbook in the current SharePoint site.",
        a.addModelSharePointUrlNotInCurrentSiteError = "This Excel workbook is not stored in the same site as the Power BI Q&A application is installed in.  You must provide the URL of an Excel workbook in the current SharePoint site.",
        a.addModelOperationFailedError = "The workbook could not be added at this time.  Please try again.  If the problem persists, please contact support.",
        a.addModelDisallowedError = "The workbook could not be added since it is disallowed by the server.",
        a.addModelErrorHelpLinkText = "Find out more about adding workbooks", a.sharePointAppLoadModelsErrorText = "There was a problem accessing the current set of workbooks. Refresh the page to try again.  If the problem persists, please contact support.",
        a.sharePointAppNoModelsConfiguredTitle = "You need to set up Power BI Q&A", a.sharePointAppNoModelsConfiguredMessage = "You need to choose the workbooks to search before you can start asking questions using Power BI Q&A.",
        a.sharePointAppNoModelsConfiguredUserTitle = "Oops, not ready yet", a.sharePointAppNoModelsConfiguredUserMessage = "No workbooks have been set up for Power BI Q&A. Contact a site owner to set up the site.",
        a.sharePointAppNoModelsActionLabel = "Go to settings...", a.sharePointSettingsAccessDeniedMessage = "You do not have permission to manage the Power BI Q&A application for this site.  Only Site Owners or users with the manage site permission level can manage the Power BI Q&A application.",
        a.dialogCancelActionLabel = "Cancel", a.dialogCloseActionLabel = "Close", a.dialogSendActionLabel = "Send",
        a.dialogRefreshPageActionLabel = "Refresh Page", a.dialogGoBackActionLabel = "Go Back",
        a.errorDialogTitle = "oops, something went wrong", a.fatalErrorDialogText = "The page could not be loaded at this time.  Refresh the page to try again.  If the problem persists, please contact support.",
        a.unsupportedUrlMessageText = "The URL of this page has changed. Please return to SharePoint to get the latest URL.",
        a.linguisticSchemaWarningTitle = "Get better search results", a.linguisticSchemaSingleWorkbookWarningTemplate = "{WorkbookLink} will return better results if you add language information to the workbook.",
        a.linguisticSchemaMultipleWorkbookWarningTemplate = "{WorkbookLink} and other workbooks will return better results if you add language information to the workbooks.",
        a.linguisticSchemaWarningMoreInfoLink = "Learn about language modeling", a.refinementPaneOpenWorkbookLabel = "Open workbook",
        a.refinementPaneLastModifiedDateFormat = "MMM' 'd', 'yyyy' at 'h':'mmtt", a.unsupportedBrowserMessageTitle = "Unsupported browser detected",
        a.unsupportedBrowserMessageText = "Power BI Q&A requires Internet Explorer 10 or higher, please upgrade your browser and try again",
        a.modelingClarifyTermCommand = "Help us understand what {term} means", a.modelingAddSynonymTermCommand = "Change how {term} is being understood",
        a.modelingTermHasNoTemplates = "Sorry, we don't have any suggestions for the term you selected",
        a.modelingSynonymTemplateDisplayText = "the same as", a.pendingAddModelOperationsText = "There are pending publish operations.",
        a.showCollageText = "See some other questions we do have answers for...", a.silverlightInstallRequiredText = "Power BI Q&A requires Silverlight 5. Click here to Install Silverlight",
        a.workbooksLoadingTimeoutTitle = "Please wait", a.workbooksLoadingTimeoutText = "Contacting Power BI Q&A service...",
        a.interpretRetryMaxCountExceededMessageText = "There was a timeout executing your query. Please try again later. If the problem persists, contact your administrator.",
        a.sharePointAppNoSamplesTitle = "We've been making some great changes to our sample workbooks",
        a.sharePointAppNoSamplesMessage = "Go back to the Power BI page, click the settings gear in the top right corner and click add sample data to update your samples.",
        a.powerBIChromeBrandingText = "Power BI for Office 365", a.notAuthenticatedErrorMessage = "You need to sign in before we can show you this page.  Click the Refresh Page button to continue.",
        a.tokenInvalidOrExpiredErrorText = "We couldn’t connect to Power BI right now.",
        a.connectionExpiredTitleText = "Connection expired", a.helpViewerControlTitleText = "ABOUT THIS DATA",
        a.helpViewerFeedbackBannerTitle = "Learn More. Give Feedback.", a.helpViewerFeedbackBannerText = "We're working to improve Power BI Q&A. Share feedback and learn more about what's coming next.",
        a.helpViewerHelpUnavailableCaptionText = "We're sorry, there is no help content available at this time.",
        a.helpViewerHelpLoadingCaptionText = "Looking for content...", a.backToBISiteLinkText = "Back to Power BI Site",
        a.showFeaturedQuestionsLinkText = "Show Featured Questions", a.copyResultLinkText = "Copy URL",
        a.shareResultLinkText = "Share", a.shareResultEmailSubjectText = "Check out this data insight",
        a.shareResultEmailBodyTemplateText = "{0}\r\rDiscovered with Power BI Q&A", a.resultLinkCopiedNotificationText = "A link to this result was copied to the clipboard.",
        a.CollageItemEditorAddItemTitle = "Feature a question", a.CollageItemEditorEditItemTitle = "Edit featured question",
        a.CollageItemEditorUtteranceFormRegionTitle = "Type a question", a.CollageItemEditorUtteranceInputPlaceholder = "Enter your question...",
        a.CollageItemEditorUtteranceInputCaption = "You can ask anything about the workbooks currently available on the site",
        a.CollageItemEditorUtteranceInputSearchingCaption = "We're trying to find an answer to your question...",
        a.CollageItemEditorUtteranceInputNoResultsCaption = "We're sorry, we couldn't find an answer to your question",
        a.CollageItemEditorUtteranceInputResultFoundCaption = "We've found an answer to your question!",
        a.CollageItemEditorFeatureOnPowerBICheckboxCaption = "Show on the Power BI site home page",
        a.CollageItemEditorTileSizeFormRegionTitle = "Tile size", a.CollageItemEditorTileSizeSmallCaption = "Small",
        a.CollageItemEditorTileSizeLargeCaption = "Large", a.CollageItemEditorTileColorRegionTitle = "Background color",
        a.CollageItemEditorTileIconRegionTitle = "Background icon", a.CollageItemCustomImageRegionTitle = "Background image",
        a.CollageItemCustomImageUrlInputPlaceholder = "Enter image URL here (optional)",
        a.CollageItemCustomImageUrlCaption = "For best results use an image that is 250 pixels wide or larger",
        a.CollageItemCustomImageUrlLoadingCaption = "Loading image...", a.CollageItemCustomImageUrlLoadErrorCaption = "We're sorry, we couldn't find an image at the specified location",
        a.CollageItemCustomImageUrlBadAddressCaption = "Please enter a valid URL", a.CollageItemCustomImageUrlSuccessCaption = "Image loaded successfully",
        a.CollageItemEditorPreviewRegionTitle = "Preview", a.CollageItemEditorSaveBtnTxt = "Save",
        a.CollageItemEditorCancelBtnTxt = "Cancel", a.CollageControlMaxNumberOfItemsMessageTitle = "Maximum number of featured questions reached",
        a.CollageControlMaxNumberOfItemsMessageText = "You have reached the maximum number of featured questions that can be displayed. Please remove some questions to continue",
        a.CollageDeleteItemDialogTitle = "Remove Featured Question", a.CollageDeleteItemDialogText = "Are you sure you want to permanently remove this featured question?",
        a.ModelSelectionControlPulldownDescriptionText = "results from", a.YesDialogOption = "Yes",
        a.NoDialogOption = "No", a.mainHelpPageTitle = "Q&A", a.mainHelpPageDescription = "Power BI Q&A makes it easy for anyone to discover and explore their data.",
        a.mainHelpPageWorkbookListTitle = "Workbooks", a.modelHelpPageDescription = "Here are some examples of questions you could ask about this workbook.",
        a.modelHelpPageQuestionListTitle = "Featured questions", a.helpPageAddFeaturedQuestion = "add featured question",
        a.helpPageFeaturedQuestions = "featured questions", a.helpPageNoItemsListed = "no items listed",
        a.flagUtteranceTooltip = "Flag the result of this question as not helpful.", a.utteranceFeedbackTooltip = "Help improve Q&A",
        a.utteranceFeedbackDialogTitle = "Q&A Feedback", a.utteranceFeedbackDialogPrompt = "Please rate how well Q&A helped find data to answer your question.",
        a.utteranceFeedbackResultBad = "Way Off", a.utteranceFeedbackResultMedium = "Got Close",
        a.utteranceFeedbackResultGood = "Great", a.modelSelectionHasErrors = "Some workbooks did not load successfully";
    }(b = a.Strings || (a.Strings = {}));
}(InJs || (InJs = {}));

var powerbi;

!function (a) {
    var b = function () {
        function b(a) {
            this.cache = {}, this.promiseFactory = a;
        }
        return b.prototype.getEntryCount = function () {
            return Object.keys(this.cache).length;
        }, b.prototype.hasCacheEntry = function (a) {
            return !!this.getCacheEntry(a);
        }, b.prototype.createCacheEntry = function (c) {
            var d = this.getCacheEntry(c);
            if (c && !d) {
                this.getEntryCount() > b.maxCacheEntries && (this.cache = {});
                var e = this.promiseFactory, f = this.cache, g = e.defer(), h = a.RejectablePromise(g), i = e.defer(), j = a.RejectablePromise(i);
                return d = f[c] = {
                    promise: j,
                    refCount: 0
                }, h.then(function (a) {
                    d.updateResult && (a = d.updateResult(a)), d.result = a, i.resolve(a);
                }, function (a) {
                    return i.reject(a);
                })["finally"](function () {
                    delete d.updateResult;
                }), j["catch"](function () {
                    return h.reject();
                }), j["finally"](function () {
                    f[c] && (delete f[c].promise, j.rejected() && delete f[c]);
                }), {
                    deferred: g,
                    promise: h
                };
            }
        }, b.prototype.clearEntry = function (a, b) {
            var c = this.getCacheEntry(a);
            if (c) {
                var d = c.promise;
                return b && d ? d.reject() : delete this.cache[a], !0;
            }
            return !1;
        }, b.prototype.clearAllEntries = function (a) {
            for (var b in this.cache) this.clearEntry(b, a);
        }, b.prototype.bindCacheEntry = function (b) {
            var c = this.getCacheEntry(b);
            if (void 0 !== c) {
                var d = this.promiseFactory.defer(), e = a.RejectablePromise(d);
                if (c.result) return d.resolve(c.result), e;
                var f = c.promise;
                return f ? (c.refCount++, e["finally"](function () {
                    c.refCount--, 0 === c.refCount && f.pending() && f.reject();
                }), f.then(function (a) {
                    return d.resolve(a);
                }, function (a) {
                    return d.reject(a);
                }), e) : (d.reject(null), e);
            }
        }, b.prototype.rewriteAllEntries = function (a) {
            var b = [], c = !!a.rewriteKey, d = !!a.rewriteResult, e = this.cache;
            for (var f in e) {
                if (c) {
                    var g = a.rewriteKey(f);
                    g !== f && b.push({
                        oldKey: f,
                        newKey: g
                    });
                }
                if (d) {
                    var h = e[f];
                    h && h.result ? h.result = a.rewriteResult(h.result, f) : h.updateResult = function (b) {
                        return a.rewriteResult(b, f);
                    };
                }
            }
            for (var i = 0, j = b.length; j > i; i++) this.changeCacheKey(b[i].oldKey, b[i].newKey);
        }, b.prototype.changeCacheKey = function (a, b) {
            if (!b) return this.clearEntry(a, !0);
            if (this.hasCacheEntry(b) || !this.hasCacheEntry(a)) return !1;
            var c = this.getCacheEntry(a);
            return delete this.cache[a], this.cache[b] = c, !0;
        }, b.prototype.getCacheEntry = function (a) {
            var b;
            return a && (b = this.cache[a]) && (b.promise || b.result) ? b : void 0;
        }, b.maxCacheEntries = 100, b;
    }();
    a.RejectablePromiseCache = b;
}(powerbi || (powerbi = {}));

var jsCommon;

!function (a) {
    function b(a, b) {
        void 0 === b && (b = function () { }), c(a.cssFiles || []);
        var e = a.javaScriptFilesWithCallback || [];
        if (a.javaScriptFiles) for (var f = 0, g = a.javaScriptFiles.length; g > f; ++f) e.push({
            javascriptFile: a.javaScriptFiles[f]
        });
        d(e, b);
    }
    function c(a) {
        a.forEach(function (a) {
            -1 === u.indexOf(a) && (u.push(a), e(a));
        });
    }
    function d(a, b) {
        function c() {
            --e || j(a, h);
        }
        function d() {
            --g || b();
        }
        var e = a.length, g = e, h = [];
        a.forEach(function (a, b) {
            var e = a.javascriptFile;
            -1 === v.indexOf(e) ? e in w ? w[e].push(function () {
                c(), d();
            }) : (w[e] = [function () {
                d();
            }], l(e) ? (h[b] = a, c()) : f(e, function (a) {
                h[b] = {
                    javascriptFile: a
                }, c();
            })) : (c(), d());
        });
    }
    function e(a) {
        var b = s.cloneNode();
        b.href = a, r ? q.insertBefore(b, r) : q.appendChild(b);
    }
    function f(a, b) {
        k(a, function () {
            b(this.responseText);
        });
    }
    function g(a, b) {
        if (void 0 === b && (b = function () { }), !a) return void b();
        var c = a.javascriptFile, d = b;
        if (a.onLoadCallback) {
            var e = function () {
                a.onLoadCallback().then(b);
            };
            d = e;
        }
        l(c) ? i(c, d) : h(c, d);
    }
    function h(a, b) {
        void 0 === b && (b = function () { });
        var c;
        a && (c = t.cloneNode(), c.setAttribute("type", "text/javascript"), c.innerHTML = a,
        q.appendChild(c)), setTimeout(b, 0);
    }
    function i(a, b) {
        var c;
        a && (c = t.cloneNode(), c.setAttribute("src", a), c.setAttribute("charset", "utf-8"),
        c.onload = b, q.appendChild(c));
    }
    function j(a, b) {
        o(b, g, function () {
            a.forEach(function (a) {
                var b = a.javascriptFile, c = w[b];
                c && c.forEach(function (a) {
                    a();
                }), delete w[b], -1 === v.indexOf(b) && v.push(b);
            });
        });
    }
    function k(a, b, c) {
        var d = new XMLHttpRequest();
        try {
            d.open("GET", a, !0), d.onload = b, d.onerror = c, d.send(null);
        } catch (e) { }
    }
    function l(a) {
        var b = location.protocol + "//" + location.host + "/";
        return /^http[s]?:\/\/.+/i.test(a) && 0 !== a.indexOf(b);
    }
    function m() {
        for (var a = [], b = 0; b < arguments.length; b++) a[b - 0] = arguments[b];
    }
    function n() {
        for (var a = [], b = 0; b < arguments.length; b++) a[b - 0] = arguments[b];
        if (0 !== a.length) {
            for (var c = [], d = a.length; d--;) !function (b) {
                c[b] = function () {
                    a[b](c[b + 1] || m);
                };
            }(d);
            c[0]();
        }
    }
    function o(a, b, c) {
        for (var d = [], e = 0, f = a.length; f - 1 > e; e++) !function (c) {
            d[c] = function (d) {
                b(a[c], d);
            };
        }(e);
        d[f - 1] = function () {
            b(a[f - 1], c);
        }, n.apply(null, d);
    }
    var p = document, q = p.head, r = q.getElementsByTagName("script")[0], s = p.createElement("link"), t = p.createElement("script"), u = [], v = [], w = [];
    s.setAttribute("rel", "stylesheet"), a.requires = b;
}(jsCommon || (jsCommon = {}));

var jsCommon;

!function (a) {
    function b(b) {
        void 0 === b && (b = function () { }), a.requires(m, b);
    }
    function c(b) {
        a.requires(n, b);
    }
    function d() {
        k = !0, l && (l.resolve(), l = void 0);
    }
    function e() {
        var a;
        return k ? (a = $.Deferred(), a.resolve()) : a = l = $.Deferred(), a.promise();
    }
    var f = "https://ajax.aspnetcdn.com/ajax/jquery.ui/1.10.3/jquery-ui.min.js", g = "https://ajax.aspnetcdn.com/ajax/jquery.ui/1.10.3/i18n/jquery-ui-i18n.min.js", h = "https://ajax.aspnetcdn.com/ajax/globalize/0.1.1/globalize.js", i = "https://ecn.dev.virtualearth.net/mapcontrol/mapcontrol.ashx?v=7.0&s=1&onscriptload=globalMapControlLoaded", j = "https://ajax.aspnetcdn.com/ajax/jquery.ui/1.10.3/themes/base/jquery-ui.css", k = !1, l = null, m = {
        javaScriptFiles: [f, g, h, powerbi.build + "/externals/globalize.cultures.js", powerbi.build + "/externals/pv/webclient.js"],
        cssFiles: [j, powerbi.build + "/externals/pv/Styles/_all.css"],
        javaScriptFilesWithCallback: [{
            javascriptFile: i,
            onLoadCallback: e
        }]
    };
    a.ensurePowerView = b;
    var n = {
        javaScriptFilesWithCallback: [{
            javascriptFile: i,
            onLoadCallback: e
        }]
    };
    a.ensureMap = c, a.mapControlLoaded = d, a.waitForMapControlLoaded = e;
}(jsCommon || (jsCommon = {}));

var globalMapControlLoaded = function () {
    jsCommon.mapControlLoaded();
}, powerbi;

!function (a) {
    function b(a) {
        return new c(a);
    }
    a.CategoryTypes = {
        Address: "Address",
        City: "City",
        Continent: "Continent",
        CountryRegion: "Country",
        County: "County",
        Longitude: "Longitude",
        Latitude: "Latitude",
        Place: "Place",
        PostalCode: "PostalCode",
        StateOrProvince: "StateOrProvince"
    }, a.createGeoTaggingAnalyzerService = b;
    var c = function () {
        function b(a) {
            this.GeotaggingString_VRMBackCompat_CountryRegion = "CountryRegion", this.GeotaggingString_VRMBackCompat_StateOrProvince = "StateOrProvince",
            this.GeotaggingString_Continent = a("GeotaggingString_Continent").toLowerCase(),
            this.GeotaggingString_Continents = a("GeotaggingString_Continents").toLowerCase(),
            this.GeotaggingString_Country = a("GeotaggingString_Country").toLowerCase(), this.GeotaggingString_Countries = a("GeotaggingString_Countries").toLowerCase(),
            this.GeotaggingString_State = a("GeotaggingString_State").toLowerCase(), this.GeotaggingString_States = a("GeotaggingString_States").toLowerCase(),
            this.GeotaggingString_City = a("GeotaggingString_City").toLowerCase(), this.GeotaggingString_Cities = a("GeotaggingString_Cities").toLowerCase(),
            this.GeotaggingString_Town = a("GeotaggingString_Town").toLowerCase(), this.GeotaggingString_Towns = a("GeotaggingString_Towns").toLowerCase(),
            this.GeotaggingString_Province = a("GeotaggingString_Province").toLowerCase(), this.GeotaggingString_Provinces = a("GeotaggingString_Provinces").toLowerCase(),
            this.GeotaggingString_County = a("GeotaggingString_County").toLowerCase(), this.GeotaggingString_Counties = a("GeotaggingString_Counties").toLowerCase(),
            this.GeotaggingString_Village = a("GeotaggingString_Village").toLowerCase(), this.GeotaggingString_Villages = a("GeotaggingString_Villages").toLowerCase(),
            this.GeotaggingString_Post = a("GeotaggingString_Post").toLowerCase(), this.GeotaggingString_Zip = a("GeotaggingString_Zip").toLowerCase(),
            this.GeotaggingString_Code = a("GeotaggingString_Code").toLowerCase(), this.GeotaggingString_Place = a("GeotaggingString_Place").toLowerCase(),
            this.GeotaggingString_Places = a("GeotaggingString_Places").toLowerCase(), this.GeotaggingString_Address = a("GeotaggingString_Address").toLowerCase(),
            this.GeotaggingString_Addresses = a("GeotaggingString_Addresses").toLowerCase(),
            this.GeotaggingString_Street = a("GeotaggingString_Street").toLowerCase(), this.GeotaggingString_Streets = a("GeotaggingString_Streets").toLowerCase(),
            this.GeotaggingString_Longitude = a("GeotaggingString_Longitude").toLowerCase(),
            this.GeotaggingString_Longitude_Short = a("GeotaggingString_Longitude_Short").toLowerCase(),
            this.GeotaggingString_Latitude = a("GeotaggingString_Latitude").toLowerCase(), this.GeotaggingString_Latitude_Short = a("GeotaggingString_Latitude_Short").toLowerCase(),
            this.GeotaggingString_PostalCode = a("GeotaggingString_PostalCode").toLowerCase(),
            this.GeotaggingString_PostalCodes = a("GeotaggingString_PostalCodes").toLowerCase(),
            this.GeotaggingString_ZipCode = a("GeotaggingString_ZipCode").toLowerCase(), this.GeotaggingString_ZipCodes = a("GeotaggingString_ZipCodes").toLowerCase(),
            this.GeotaggingString_Territory = a("GeotaggingString_Territory").toLowerCase(),
            this.GeotaggingString_Territories = a("GeotaggingString_Territories").toLowerCase();
        }
        return b.prototype.isLongitudeOrLatitude = function (a) {
            return this.isLongitude(a) || this.isLatitude(a);
        }, b.prototype.isGeographic = function (a) {
            return this.isLongitudeOrLatitude(a) || this.isGeocodable(a);
        }, b.prototype.isGeocodable = function (a) {
            return this.isAddress(a) || this.isCity(a) || this.isContinent(a) || this.isCountry(a) || this.isCounty(a) || this.isStateOrProvince(a) || this.isPlace(a) || this.isPostalCode(a) || this.isTerritory(a);
        }, b.prototype.isAddress = function (a) {
            return b.hasMatches(a, [this.GeotaggingString_Address, this.GeotaggingString_Addresses, this.GeotaggingString_Street, this.GeotaggingString_Streets]);
        }, b.prototype.isPlace = function (a) {
            return b.hasMatches(a, [this.GeotaggingString_Place, this.GeotaggingString_Places]);
        }, b.prototype.isCity = function (a) {
            return b.hasMatches(a, [this.GeotaggingString_City, this.GeotaggingString_Cities, this.GeotaggingString_Town, this.GeotaggingString_Towns, this.GeotaggingString_Village, this.GeotaggingString_Villages]);
        }, b.prototype.isStateOrProvince = function (a) {
            return b.hasMatches(a, [this.GeotaggingString_State, this.GeotaggingString_States, this.GeotaggingString_Province, this.GeotaggingString_Provinces, this.GeotaggingString_VRMBackCompat_StateOrProvince]);
        }, b.prototype.isCountry = function (a) {
            return b.hasMatches(a, [this.GeotaggingString_Country, this.GeotaggingString_Countries, this.GeotaggingString_VRMBackCompat_CountryRegion]);
        }, b.prototype.isCounty = function (a) {
            return b.hasMatches(a, [this.GeotaggingString_County, this.GeotaggingString_Counties]);
        }, b.prototype.isContinent = function (a) {
            return b.hasMatches(a, [this.GeotaggingString_Continent, this.GeotaggingString_Continents]);
        }, b.prototype.isPostalCode = function (a) {
            var c = b.hasMatches(a, [this.GeotaggingString_Post, this.GeotaggingString_Zip]) && b.hasMatches(a, [this.GeotaggingString_Code]) || b.hasMatches(a, [this.GeotaggingString_PostalCode, this.GeotaggingString_PostalCodes, this.GeotaggingString_ZipCode, this.GeotaggingString_ZipCodes]);
            if (!c) {
                var d = new RegExp("s");
                c = b.hasMatches(a, [this.GeotaggingString_PostalCode.replace(d, ""), this.GeotaggingString_PostalCodes.replace(d, ""), this.GeotaggingString_ZipCode.replace(d, ""), this.GeotaggingString_ZipCodes.replace(d, "")]);
            }
            return c;
        }, b.prototype.isLongitude = function (a) {
            return b.hasMatches(a, [this.GeotaggingString_Longitude, this.GeotaggingString_Longitude_Short]);
        }, b.prototype.isLatitude = function (a) {
            return b.hasMatches(a, [this.GeotaggingString_Latitude, this.GeotaggingString_Latitude_Short]);
        }, b.prototype.isTerritory = function (a) {
            return b.hasMatches(a, [this.GeotaggingString_Territory, this.GeotaggingString_Territories]);
        }, b.hasMatches = function (a, b) {
            for (var c = a.toLowerCase(), d = 0, e = b.length; e > d; d++) {
                var f = b[d];
                if (c.indexOf(f) > -1) return !0;
            }
            return !1;
        }, b.prototype.getFieldType = function (b) {
            return this.isLatitude(b) ? a.CategoryTypes.Latitude : this.isLongitude(b) ? a.CategoryTypes.Longitude : this.isPostalCode(b) ? a.CategoryTypes.PostalCode : this.isAddress(b) ? a.CategoryTypes.Address : this.isPlace(b) ? a.CategoryTypes.Place : this.isCity(b) ? a.CategoryTypes.City : this.isCountry(b) ? a.CategoryTypes.CountryRegion : this.isCounty(b) ? a.CategoryTypes.County : this.isStateOrProvince(b) ? a.CategoryTypes.StateOrProvince : this.isContinent(b) ? a.CategoryTypes.Continent : void 0;
        }, b;
    }();
    a.GeoTaggingAnalyzerService = c;
}(powerbi || (powerbi = {}));

var powerbi;

!function (a) {
    !function (a) {
        a[a.AngularCancelOrTimeout = 0] = "AngularCancelOrTimeout", a[a.OK = 200] = "OK",
        a[a.BadRequest = 400] = "BadRequest", a[a.Unauthorized = 401] = "Unauthorized",
        a[a.Forbidden = 403] = "Forbidden", a[a.NotFound = 404] = "NotFound", a[a.RequestTimeout = 408] = "RequestTimeout";
    }(a.HttpStatusCode || (a.HttpStatusCode = {}));
    a.HttpStatusCode;
}(powerbi || (powerbi = {}));

var powerbi;

!function (a) {
    function b() {
        return new c();
    }
    a.createJQueryPromiseFactory = b;
    var c = function () {
        function a() { }
        return a.prototype.defer = function () {
            return new d($.Deferred());
        }, a.prototype.reject = function (a) {
            var b = this.defer();
            return b.reject(a), b.promise;
        }, a.prototype.resolve = function (a) {
            var b = this.defer();
            return b.resolve(a), b.promise;
        }, a;
    }(), d = function () {
        function a(a) {
            this.deferred = a, this.promise = new e(a.promise());
        }
        return a.prototype.resolve = function (a) {
            this.deferred.resolve(a);
        }, a.prototype.reject = function (a) {
            this.deferred.reject(a);
        }, a;
    }(), e = function () {
        function a(a) {
            this.promise = a;
        }
        return a.prototype.then = function (b, c) {
            return new a(this.promise.then(a.wrapCallback(b), a.wrapCallback(c)));
        }, a.prototype["catch"] = function (a) {
            return this.then(null, a);
        }, a.prototype["finally"] = function (b) {
            return this.promise.always(a.wrapCallback(b)), this;
        }, a.wrapCallback = function (b) {
            return b ? function (c) {
                var d = b(c);
                return d instanceof a ? d.promise : d;
            } : b;
        }, a;
    }();
}(powerbi || (powerbi = {}));

var powerbi;

!function (a) {
    var b = function () {
        function a() { }
        return a.prototype.getData = function (a) {
            try {
                if (localStorage) return JSON.parse(localStorage[a]);
            } catch (b) { }
            return null;
        }, a.prototype.setData = function (a, b) {
            try {
                localStorage && (localStorage[a] = JSON.stringify(b));
            } catch (c) { }
        }, a;
    }();
    a.localStorageService = new b();
}(powerbi || (powerbi = {}));

var powerbi;

!function (a) {
    var b;
    !function (a) {
        function b() {
            l || (l = $("<span/>"), $("body").append(l), m = d3.select($("body").get(0)).append("svg").append("text"),
            n = $("<canvas/>").get(0).getContext("2d"));
        }
        function c(a) {
            b(), l.removeAttr("style").empty().css("visibility", "hidden"), l.text(a.text).css({
                fontFamily: a.fontFamily,
                fontSize: a.fontSize,
                fontWeight: a.fontWeight,
                fontStyle: a.fontStyle,
                whiteSpace: a.whiteSpace || "nowrap"
            });
            var c = parseInt(getComputedStyle(l[0]).width, 10);
            return c;
        }
        function d(a) {
            return b(), n.font = a.fontSize + " " + a.fontFamily, n.measureText(a.text).width;
        }
        function e(a) {
            return b(), m.style(null), m.text(a.text).attr({
                visibility: "hidden",
                "font-family": a.fontFamily,
                "font-size": a.fontSize,
                "font-weight": a.fontWeight,
                "font-style": a.fontStyle,
                "white-space": a.whiteSpace || "nowrap"
            }), m.node().getBoundingClientRect().height;
        }
        function f(a) {
            return d(h(a));
        }
        function g(a) {
            return {
                text: a.val() || a.text(),
                fontFamily: a.css("font-family"),
                fontSize: a.css("font-size"),
                fontWeight: a.css("font-weight"),
                fontStyle: a.css("font-style"),
                whiteSpace: a.css("white-space")
            };
        }
        function h(a) {
            var b = window.getComputedStyle(a, null);
            return {
                text: a.textContent,
                fontFamily: b.fontFamily,
                fontSize: b.fontSize,
                fontWeight: b.fontWeight,
                fontStyle: b.fontStyle,
                whiteSpace: b.whiteSpace
            };
        }
        function i(a) {
            return getComputedStyle(a[0]).width;
        }
        function j(a, c) {
            b();
            var e = "...", f = a.text.length;
            if (0 === f) return a.text;
            var g = d(a);
            if (c > g) return a.text;
            for (var h = a.text = e + a.text, i = 1, j = h.length, k = 3; j >= i;) if (k = (i + j) / 2 | 0,
            a.text = h.substr(0, k), g = d(a), c > g) i = k + 1; else {
                if (!(g > c)) break;
                j = k - 1;
            }
            return a.text = h.substr(0, k), g = d(a), g > c && k--, h.substr(3, k - 3) + e;
        }
        function k(a, b) {
            var c = h(a), d = j(c, b);
            c.text !== d && (a.textContent = d);
        }
        var l, m, n;
        a.measureTextWidth = c, a.measureSvgTextWidth = d, a.measureSvgTextHeight = e, a.measureSvgTextElementWidth = f,
        a.getMeasurementProperties = g, a.getSvgMeasurementProperties = h, a.getDivElementWidth = i,
        a.getTailoredTextOrDefault = j, a.svgEllipsis = k;
    }(b = a.TextMeasurementService || (a.TextMeasurementService = {}));
}(powerbi || (powerbi = {}));

var jsCommon;

!function (a) {
    var b;
    !function (a) {
        function b(a, b, c) {
            return a || b || c ? !a || b || c ? a || !b || c ? a || b || !c ? $.extend(a, b, c) : c : b : a : void 0;
        }
        a.mergeUnionType = b;
    }(b = a.UnionExtensions || (a.UnionExtensions = {}));
}(jsCommon || (jsCommon = {}));

var InJs;

!function (a) {
    var b = function () {
        function b() { }
        return b.constructAdditionalErrorInfoBlock = function (c, d, e, f, g, h) {
            var i = $("<p />");
            if (!jsCommon.StringExtensions.isNullOrEmpty(c)) {
                var j = c;
                jsCommon.StringExtensions.isNullOrEmpty(d) || (j = jsCommon.StringExtensions.format(a.Strings.infoNavErrorCodeTemplate, c, d)),
                i.append(b.constructErrorField(a.Strings.errorCodeText, j));
            }
            return jsCommon.StringExtensions.isNullOrEmpty(e) || i.append(b.constructErrorField(a.Strings.errorActivityIdText, e)),
            jsCommon.StringExtensions.isNullOrEmpty(f) || i.append(b.constructErrorField(a.Strings.errorRequestIdText, f)),
            h && (h.sourceUrl && i.append(b.constructErrorField(a.Strings.errorSourceFileText, h.sourceUrl)),
            h.lineNumber && i.append(b.constructErrorField(a.Strings.errorLineNumberText, h.lineNumber.toString())),
            h.columnNumber && i.append(b.constructErrorField(a.Strings.errorColumnNumberText, h.columnNumber.toString())),
            h.stack && i.append(b.constructErrorField(a.Strings.errorStackTraceText, h.stack))),
            g || (g = new Date()), i.append(b.constructErrorField(a.Strings.errorTimestampText, g.toString())),
            i;
        }, b.constructShowDetailsContainer = function (c) {
            var d = $("<div />"), e = $("<a class=\"showAdditionalDetailsLink\" href='javascript:' />");
            return e.addClass(b.infonavShowAdditionalErrorClass), e.text(a.Strings.showDetailsText),
            e.on(jsCommon.DOMConstants.mouseClickEventName, function () {
                d.find(jsCommon.Utility.createClassSelector(b.infonavShowAdditionalErrorClass)).remove(),
                d.find(jsCommon.Utility.createClassSelector(b.infonavAdditionalErrorClass)).css(jsCommon.CssConstants.displayProperty, jsCommon.CssConstants.blockValue);
            }), c.css(jsCommon.CssConstants.displayProperty, jsCommon.CssConstants.noneValue),
            c.addClass(b.infonavAdditionalErrorClass), d.append(e), d.append(c), d;
        }, b.constructErrorField = function (a, c) {
            var d = $(b.infoNavErrorInfoFieldTemplate.replace("{FieldTitle}", a));
            return d.find(".infonav-errorInfoText").multiline(c), d;
        }, b.infonavAdditionalErrorClass = "infonav-additionalError", b.infonavShowAdditionalErrorClass = "infonav-showAdditionalError",
        b.infoNavErrorInfoFieldTemplate = '<div class="infonav-errorInfoItem"><span class="infonav-errorInfoHeader">{FieldTitle}</span><span class="infonav-errorInfoText">{FieldValue}</span></div>',
        b;
    }();
    a.InfoNavUtility = b;
}(InJs || (InJs = {}));

var jsCommon;

!function (a) {
    var b = function () {
        function b(b, c, d) {
            this._operation = b, this._timerFactory = c || a.TimerPromiseFactory.instance, this._batches = [],
            d && (this._maxBatchSize = d, this._batchSize = 0);
        }
        return b.prototype.enqueue = function () {
            var a, b = this, c = this._batches;
            return ++this._batchSize, 0 === c.length ? (a = $.Deferred(), c.push(a), this._timerFactory.create(0).done(function () {
                return b.completeBatches();
            })) : this._maxBatchSize && this._batchSize >= this._maxBatchSize ? (this._batchSize = 0,
            a = $.Deferred(), c.push(a)) : a = c[c.length - 1], a.promise();
        }, b.prototype.completeBatches = function () {
            for (var a; a = this._batches.pop() ;) this.completeBatch(a);
        }, b.prototype.completeBatch = function (a) {
            this._operation().done(function (b) {
                return a.resolve(b);
            }).fail(function (b) {
                return a.reject(b);
            });
        }, b;
    }();
    a.DeferredBatch = b;
}(jsCommon || (jsCommon = {}));

var jsCommon;

!function (a) {
    var b = function () {
        function b(b) {
            this.timerFactory = a.TimerPromiseFactory.instance, this.delay = 0, b && (this.delay = b);
        }
        return b.prototype.run = function (a) {
            var b = this;
            this.fn ? this.fn = a : (this.fn = a, this.timerFactory.create(this.delay).done(function () {
                return b.timerComplete(b.fn);
            }));
        }, b.prototype.timerComplete = function (a) {
            a(), this.fn = null;
        }, b;
    }();
    a.ThrottleUtility = b;
}(jsCommon || (jsCommon = {}));

var jsCommon;

!function (a) {
    var b = function () {
        function a() { }
        return a.prototype.create = function (a) {
            var b = $.Deferred();
            return window.setTimeout(function () {
                return b.resolve();
            }, a), b;
        }, a.instance = new a(), a;
    }();
    a.TimerPromiseFactory = b;
}(jsCommon || (jsCommon = {}));

var jsCommon;

!function (a) {
    !function (a) {
        a[a.OK = 200] = "OK", a[a.BadRequest = 400] = "BadRequest", a[a.Unauthorized = 401] = "Unauthorized",
        a[a.Forbidden = 403] = "Forbidden";
    }(a.HttpStatusCode || (a.HttpStatusCode = {}));
    {
        var b;
        a.HttpStatusCode;
    }
    !function (a) {
        a.ApplicationOctetStream = "application/octet-stream", a.MultiPartFormData = "multipart/form-data";
    }(b = a.HttpConstants || (a.HttpConstants = {}));
    var c;
    !function (a) {
        function b() {
            for (var a = [], b = 0; b < arguments.length; b++) a[b - 0] = arguments[b];
            var c = a[0];
            if (h(c)) return c;
            for (var d = 0; d < a.length - 1; d++) {
                var e = new RegExp("\\{" + d + "\\}", "gm");
                c = c.replace(e, a[d + 1]);
            }
            return c;
        }
        function c(b, c) {
            return a.normalizeCase(b) === a.normalizeCase(c);
        }
        function e(b, c) {
            var d = a.normalizeCase(c);
            return 0 === a.normalizeCase(b).indexOf(d);
        }
        function f(b) {
            return d.throwIfNullOrUndefined(b, a, "normalizeCase", "value"), b.toUpperCase();
        }
        function g(a) {
            return null == a || 0 === a.length;
        }
        function h(b) {
            return a.isNullOrEmpty(b) || a.isNullOrEmpty(b.trim());
        }
        function i(a) {
            d.throwIfNullOrUndefined(a, this, "containsWhitespace", "str");
            var b = /\s/;
            return b.test(a);
        }
        function j(a) {
            return d.throwIfNullOrUndefined(a, this, "isWhitespace", "str"), "" === a.trim();
        }
        function k(a) {
            return d.throwIfNullOrUndefined(a, this, "trimTrailingWhitespace", "str"), a.replace(/\s+$/, "");
        }
        function l(a) {
            return d.throwIfNullOrUndefined(a, this, "trimWhitespace", "str"), a.replace(/^\s+/, "").replace(/\s+$/, "");
        }
        function m(a, b) {
            return d.throwIfNullOrUndefined(a, this, "getLengthDifference", "left"), d.throwIfNullOrUndefined(b, this, "getLengthDifference", "right"),
            Math.abs(a.length - b.length);
        }
        function n(a, b) {
            for (var c = "", d = 0; b > d; d++) c += a;
            return c;
        }
        function o(a, b, c) {
            if (!b) return a;
            var d = b.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1");
            return a.replace(new RegExp(d, "g"), c);
        }
        function p(a, b) {
            var c, d = 0;
            do c = b + d++; while (a[c]);
            return c;
        }
        a.format = b, a.equalIgnoreCase = c, a.startsWithIgnoreCase = e, a.normalizeCase = f,
        a.isNullOrEmpty = g, a.isNullOrUndefinedOrWhiteSpaceString = h, a.containsWhitespace = i,
        a.isWhitespace = j, a.trimTrailingWhitespace = k, a.trimWhitespace = l, a.getLengthDifference = m,
        a.repeat = n, a.replaceAll = o, a.findUniqueName = p;
    }(c = a.StringExtensions || (a.StringExtensions = {}));
    var d = function () {
        function d() { }
        return d.throwIfNullOrUndefined = function (b, c, e, f) {
            null === b ? d.throwException(a.Errors.argumentNull(d.getComponentName(c) + e + "." + f)) : typeof b === d.Undefined && d.throwException(a.Errors.argumentUndefined(d.getComponentName(c) + e + "." + f));
        }, d.throwIfNullOrEmpty = function (b, c, e, f) {
            d.throwIfNullOrUndefined(b, c, e, f), b.length || d.throwException(a.Errors.argumentOutOfRange(d.getComponentName(c) + e + "." + f));
        }, d.throwIfNullOrEmptyString = function (b, c, e, f) {
            d.throwIfNullOrUndefined(b, c, e, f), b.length < 1 && d.throwException(a.Errors.argumentOutOfRange(d.getComponentName(c) + e + "." + f));
        }, d.throwIfNullEmptyOrWhitespaceString = function (b, e, f, g) {
            d.throwIfNullOrUndefined(b, e, f, g), c.isNullOrUndefinedOrWhiteSpaceString(b) && d.throwException(a.Errors.argumentOutOfRange(d.getComponentName(e) + f + "." + g));
        }, d.throwIfNotTrue = function (b, c, e, f) {
            b || d.throwException(a.Errors.argument(f, d.getComponentName(c) + e + "." + f));
        }, d.isString = function (a) {
            return "string" == typeof a;
        }, d.isBoolean = function (a) {
            return "boolean" == typeof a;
        }, d.isNumber = function (a) {
            return "number" == typeof a;
        }, d.isDate = function (a) {
            return d.isObject(a) && a instanceof Date;
        }, d.isObject = function (a) {
            return null != a && "object" == typeof a;
        }, d.isNullOrUndefined = function (a) {
            return null === a || typeof a === d.Undefined;
        }, d.urlCombine = function (a, b) {
            if (d.throwIfNullOrUndefined(a, null, "urlCombine", "baseUrl"), d.throwIfNullOrUndefined(b, null, "urlCombine", "path"),
            c.isNullOrUndefinedOrWhiteSpaceString(b)) return a;
            if (c.isNullOrUndefinedOrWhiteSpaceString(a)) return b;
            var e = a;
            return "/" === e.charAt(e.length - 1) ? "/" === b.charAt(0) && (b = b.slice(1)) : "/" !== b.charAt(0) && (b = "/" + b),
            e + b;
        }, d.getAbsoluteUri = function (a) {
            d.throwIfNullOrUndefined(a, null, "getAbsoluteUri", "path");
            var b = a;
            return b && -1 === b.indexOf("http") && (b = d.urlCombine(clusterUri, b)), b;
        }, d.getStaticResourceUri = function (b) {
            d.throwIfNullOrUndefined(b, null, "getStaticResourceUri", "path");
            var c = b;
            return c && -1 === c.indexOf("http") && (c = a.Utility.urlCombine(d.staticContentLocation, c)),
            c;
        }, d.getComponentName = function (a) {
            return a ? (typeof a).toString() + "." : "";
        }, d.throwException = function (b) {
            throw a.Trace.error(c.format("Throwing exception: {0}", JSON.stringify(b)), null != b.stack ? !1 : !0),
            b;
        }, d.createClassSelector = function (a) {
            return d.throwIfNullOrEmptyString(a, null, "CreateClassSelector", "className"),
            "." + a;
        }, d.createIdSelector = function (a) {
            return d.throwIfNullOrEmptyString(a, null, "CreateIdSelector", "id"), "#" + a;
        }, d.generateGuid = function () {
            for (var a = "", b = 0; 32 > b; b++) {
                var c = Math.floor(16 * Math.random());
                switch (b) {
                    case 8:
                    case 12:
                    case 16:
                    case 20:
                        a += "-";
                }
                a += c.toString(16);
            }
            return a;
        }, d.generateConnectionGroupName = function () {
            for (var a = "", b = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", c = 0; 7 > c; c++) a += b.charAt(Math.floor(Math.random() * b.length));
            return a;
        }, d.getCookieValue = function (a) {
            for (var b = document.cookie.split(";"), c = 0; c < b.length; c++) {
                var d = b[c], e = d.split("=");
                if (e.length > 0 && e[0].trim() === a) return d.substr(d.indexOf("=") + 1);
            }
            return null;
        }, d.getDomainForUrl = function (a) {
            var b = d.getHrefObjectFromUrl(a);
            return b.prop("protocol") + "//" + b.prop("hostname");
        }, d.getHostNameForUrl = function (a) {
            var b = d.getHrefObjectFromUrl(a);
            return d.urlCombine(b.prop("hostname"), b.prop("pathname"));
        }, d.getUrlWithoutQueryString = function (a) {
            var b = d.getHrefObjectFromUrl(a);
            return b.prop("protocol") + "//" + d.urlCombine(b.prop("host"), b.prop("pathname"));
        }, d.getProtocolFromUrl = function (a) {
            return d.getHrefObjectFromUrl(a).prop("protocol").replace(":", "");
        }, d.getHrefObjectFromUrl = function (a) {
            var b = $("<a>");
            return b = b.prop("href", a);
        }, d.convertWcfToJsDictionary = function (a) {
            for (var b = {}, c = 0; c < a.length; c++) {
                var d = a[c];
                b[d.Key] = d.Value;
            }
            return b;
        }, d.getDateFromWcfJsonString = function (a, b) {
            if (c.isNullOrEmpty(a)) return null;
            var d = a.indexOf("("), e = a.indexOf(")");
            if (-1 !== d && -1 !== e) {
                var f = parseInt(a.substring(d + 1, e), 10);
                if (b) return new Date(f);
                var g = new Date(0);
                return g.setUTCMilliseconds(f), g;
            }
            return null;
        }, d.getOuterHtml = function (a) {
            return $("<div>").append(a).html();
        }, d.compareInt = function (a, b) {
            return a - b;
        }, d.getIndexOfMinValue = function (a) {
            for (var b = 0, c = a[0], d = 0; d < a.length; d++) a[d] < c && (c = a[d], b = d);
            return b;
        }, d.isValidUrl = function (a) {
            return !c.isNullOrEmpty(a) && (c.startsWithIgnoreCase(a, "http://") || c.startsWithIgnoreCase(a, "https://"));
        }, d.extractUrlFromCssBackgroundImage = function (a) {
            return a.replace(/"/g, "").replace(/url\(|\)$/gi, "");
        }, d.saveAsFile = function (a, c) {
            var d = new Blob([a], {
                type: b.ApplicationOctetStream
            }), e = window.webkitURL || URL, f = e.createObjectURL(d), g = c || f;
            if (window.navigator.msSaveOrOpenBlob) return void window.navigator.msSaveOrOpenBlob(d, g);
            var h = document.createElement("a");
            h.href = f, h.target = "_blank", h.download = g, document.body.appendChild(h), h.click(),
            document.body.removeChild(h);
        }, d.getType = function (b) {
            d.throwIfNullEmptyOrWhitespaceString(b.__type, this, "getType", "obj");
            var c = b.__type.split(":");
            return 2 !== c.length && a.Errors.argument("obj.__type", "Type String not in expected format [Type]#[Namespace]: " + b.__type),
            c[1] !== d.TypeNamespace && a.Errors.argument("obj.__type", "Type Namespace not expected: " + c[1]),
            c[0];
        }, d.isEventSupported = function (a, b) {
            a = "on" + a;
            var c = a in b;
            return c || (b.setAttribute || (b = document.createElement("div")), b.setAttribute && b.removeAttribute && (b.setAttribute(a, ""),
            c = "function" == typeof b[a], "undefined" != typeof b[a] && (b[a] = null), b.removeAttribute(a))),
            b = null, c;
        }, d.toPixel = function (b) {
            return d.throwIfNullOrUndefined(b, this, "toPixel", "pixelAmount"), b.toString() + a.CssConstants.pixelUnits;
        }, d.getPropertyCount = function (a) {
            return d.throwIfNullOrUndefined(a, this, "getPropertyCount", "object"), Object.getOwnPropertyNames(a).length;
        }, d.getFileExtension = function (a) {
            if (a) {
                var b = a.lastIndexOf(".");
                if (b >= 0) return a.substr(b + 1);
            }
            return "";
        }, d.canUseClipboard = function () {
            return "undefined" == typeof MSApp;
        }, d.is64BitOperatingSystem = function () {
            return -1 !== navigator.userAgent.indexOf("WOW64") || -1 !== navigator.userAgent.indexOf("Win64");
        }, d.parseNumber = function (a, b) {
            if (null === a) return null;
            if (void 0 === a) return b;
            var c = Number(a);
            return isFinite(c) ? c : isNaN(c) && "number" != typeof a && "NaN" !== a ? b : c;
        }, d.TypeNamespace = "http://schemas.microsoft.com/sqlbi/2013/01/NLRuntimeService",
        d.JsonContentType = "application/json", d.JpegContentType = "image/jpeg", d.XJavascriptContentType = "application/x-javascript",
        d.JsonDataType = "json", d.BlobDataType = "blob", d.HttpGetMethod = "GET", d.HttpPostMethod = "POST",
        d.HttpPutMethod = "PUT", d.HttpDeleteMethod = "DELETE", d.HttpContentTypeHeader = "Content-Type",
        d.HttpAcceptHeader = "Accept", d.Undefined = "undefined", d.staticContentLocation = window.location.protocol + "//" + window.location.host,
        d;
    }();
    a.Utility = d;
    var e = function () {
        function a() { }
        return a.compareVersions = function (a, b) {
            for (var c = a.split(".").map(parseFloat), d = b.split(".").map(parseFloat), e = Math.max(c.length, d.length), f = 0; e > f; f++) {
                var g = c[f] || 0, h = d[f] || 0;
                if (g > h) return 1;
                if (h > g) return -1;
            }
            return 0;
        }, a;
    }();
    a.VersionUtility = e;
    var f;
    !function (a) {
        function b(a) {
            return new c(a);
        }
        var c = function () {
            function a(b) {
                this._name = b, this._start = a.begin(b);
            }
            return a.begin = function (a) {
                return void 0 !== window.performance && void 0 !== performance.mark ? (console.time,
                a = "Begin " + a, performance.mark(a), a) : void 0;
            }, a.prototype.end = function () {
                if (void 0 !== window.performance && void 0 !== performance.mark && void 0 !== performance.measure) {
                    var a = this._name, b = "End " + a;
                    performance.mark(b), performance.measure(a, this._start, b), console.timeEnd;
                }
            }, a;
        }();
        a.PerfMarker = c, a.create = b;
    }(f = a.PerformanceUtil || (a.PerformanceUtil = {}));
    var g;
    !function (b) {
        function d(b) {
            if (b) try {
                var d = atob(b), e = pako.inflate(d, {
                    to: "string"
                });
                return e;
            } catch (f) {
                var g = "Error while uncompressing TileData: {0}";
                a.Trace.error(c.format(g, JSON.stringify(f)), null != f.stack ? !1 : !0);
            }
            return null;
        }
        function e(b) {
            if (b) try {
                var d = pako.gzip(b, {
                    to: "string"
                }), e = btoa(d);
                return e;
            } catch (f) {
                return a.Trace.error(c.format("Error while compressing TileData: {0}", JSON.stringify(f)), null != f.stack ? !1 : !0),
                null;
            }
            return null;
        }
        b.uncompress = d, b.compress = e;
    }(g = a.GzipUtility || (a.GzipUtility = {}));
    var h;
    !function (a) {
        function b(a) {
            var b, c, d, e = this;
            return window.requestAnimationFrame || (window.requestAnimationFrame = function (a) {
                return setTimeout(a, 20);
            }), function () {
                b || (b = !0, c = arguments, d = e, window.requestAnimationFrame(function () {
                    b = !1, a.apply(d, c);
                }));
            };
        }
        a.deferUntilNextFrame = b;
    }(h = a.DeferUtility || (a.DeferUtility = {}));
    var i = function () {
        function a(a, b, c, d) {
            this.rsaMaxLength = 85, this.rsaEncryptedLength = 128, this.callback = d, this.plainTextBytes = this.toUTF8Array(a),
            this.publicKey = b, this.entropy = c, this.segments = Math.ceil(this.plainTextBytes.length / this.rsaMaxLength),
            this.currentSegment = 0, this.encryptedBytes = new Uint8Array(this.segments * this.rsaEncryptedLength);
        }
        return a.prototype.RSAEncrypt = function () {
            var a = this, b = this.toSupportedRSAPublicKey(this.publicKey), c = this.toSupportedArray(b);
            msrCrypto.subtle.forceSync = !0, msrCrypto.initPrng && msrCrypto.initPrng(this.entropy);
            var d = msrCrypto.subtle.importKey("jwk", c, {
                name: "RSA-OAEP",
                hash: {
                    name: "sha-1"
                }
            });
            d.oncomplete = function (b) {
                return a.rsaPublicKeyImportComplete(b);
            };
        }, a.generateEntropy = function () {
            for (var a = [], b = 0; 48 > b; b++) a.push(Math.floor(256 * Math.random()));
            return a;
        }, a.prototype.rsaPublicKeyImportComplete = function (a) {
            this.publicKeyHandle = a.target.result, this.rsaEncryption();
        }, a.prototype.rsaEncryption = function () {
            var a = this, b = msrCrypto.subtle.encrypt({
                name: "RSA-OAEP",
                hash: {
                    name: "sha-1"
                }
            }, this.publicKeyHandle, this.plainTextBytes.subarray(this.currentSegment * this.rsaMaxLength, (this.currentSegment + 1) * this.rsaMaxLength));
            b.oncomplete = function (b) {
                return a.rsaEncryptionSegmentComplete(b);
            };
        }, a.prototype.rsaEncryptionSegmentComplete = function (a) {
            this.encryptedBytes.set(new Uint8Array(a.target.result), this.currentSegment * this.rsaEncryptedLength),
            this.currentSegment++, this.currentSegment < this.segments ? this.rsaEncryption() : this.callback(this.arrayToBase64String(this.encryptedBytes));
        }, a.prototype.toSupportedRSAPublicKey = function (a) {
            return '{                 "kty" : "RSA",                 "extractable" : true,                 "n" : "' + a + '",                 "e" : "AQAB"             }';
        }, a.prototype.arrayToBase64String = function (a) {
            for (var b = "", c = a.length, d = 0; c > d; d++) b += String.fromCharCode(a[d]);
            return window.btoa(b);
        }, a.prototype.toSupportedArray = function (a) {
            var b = "undefined" != typeof Uint8Array, c = Object.prototype.toString.call(a);
            switch (c = c.substring(8, c.length - 1)) {
                case "Array":
                    return b ? new Uint8Array(a) : a;

                case "ArrayBuffer":
                    return new Uint8Array(a);

                case "Uint8Array":
                    return a;

                case "Uint16Array":
                case "Uint32Array":
                    return new Uint8Array(a);

                case "String":
                    for (var d = a.length, e = b ? new Uint8Array(d) : new Array(d), f = 0; d > f; f++) e[f] = a.charCodeAt(f);
                    return e;

                default:
                    throw new Error("toSupportedArray : unsupported data type " + c);
            }
        }, a.prototype.toUTF8Array = function (a) {
            for (var b = [], c = 0; c < a.length; c++) {
                var d = a.charCodeAt(c);
                128 > d ? b.push(d) : 2048 > d ? b.push(192 | d >> 6, 128 | 63 & d) : 55296 > d || d >= 57344 ? b.push(224 | d >> 12, 128 | d >> 6 & 63, 128 | 63 & d) : (c++,
                d = 65536 + ((1023 & d) << 10 | 1023 & a.charCodeAt(c)), b.push(240 | d >> 18, 128 | d >> 12 & 63, 128 | d >> 6 & 63, 128 | 63 & d));
            }
            var e = new Uint8Array(b.length);
            return e.set(b, 0), e;
        }, a;
    }();
    a.EncryptionContext = i;
}(jsCommon || (jsCommon = {}));

var jsCommon;

!function (a) {
    var b;
    !function (a) {
        function b(a, b) {
            return (a & b) === b;
        }
        function c(a, b) {
            return a[b];
        }
        a.hasFlag = b, a.toString = c;
    }(b = a.EnumExtensions || (a.EnumExtensions = {}));
    var c;
    !function (a) {
        function b(a, b) {
            return -1 !== a.indexOf(b, a.length - b.length);
        }
        a.endsWith = b;
    }(c = a.StringExtensions || (a.StringExtensions = {}));
    var d;
    !function (a) {
        function b(a, b) {
            return (a || b) && !(a && b);
        }
        a.XOR = b;
    }(d = a.LogicExtensions || (a.LogicExtensions = {}));
    var e;
    !function (a) {
        function b(a, b) {
            return a === b ? !0 : JSON.stringify(a) === JSON.stringify(b);
        }
        a.equals = b;
    }(e = a.JsonComparer || (a.JsonComparer = {}));
}(jsCommon || (jsCommon = {}));

var jsCommon;

!function (a) {
    var b = function () {
        function b() { }
        return b.removeInvalidCharacters = function (c) {
            for (var d, e = 0, f = 0, g = c.length; g > f; f++) b.isValidXmlCharacter(c, f) || (d || (d = new a.StringBuilder()),
            e !== f && d.append(c.substring(e, f)), e = f + 1);
            return d ? (e <= c.length - 1 && d.append(c.substring(e, c.length)), d.toString()) : c;
        }, b.isValidXmlCharacter = function (a, c) {
            var d = a.charCodeAt(c);
            return d === b.TabCharCode || d === b.NewLineCharCode || d === b.CarriageReturnCharCode || d >= 32 && 55295 >= d || d >= 57344 && 65533 >= d || d >= 65536 && 1114111 >= d;
        }, b.TabCharCode = 9, b.NewLineCharCode = 10, b.CarriageReturnCharCode = 13, b;
    }();
    a.XmlUtility = b;
}(jsCommon || (jsCommon = {}));

var powerbi;

!function (a) {
    var b;
    !function (b) {
        var c = jsCommon.Utility.generateGuid;
        b.BaseEvent = function (b, d) {
            void 0 === d && (d = !1);
            var e = {
                parentId: b,
                isError: d
            }, f = {
                name: "BaseEvent",
                time: Date.now(),
                id: c(),
                getFormattedInfoObject: function () {
                    return {
                        parentId: e.parentId,
                        isError: e.isError
                    };
                },
                info: e
            };
            return "undefined" != typeof a.telemetry.BaseEventLoggers && (f.loggers = a.telemetry.BaseEventLoggers),
            f;
        }, b.Trace = function (b, d) {
            var e = {
                type: b,
                message: d
            }, f = {
                name: "Trace",
                category: 3,
                time: Date.now(),
                id: c(),
                getFormattedInfoObject: function () {
                    return {
                        type: e.type,
                        message: e.message
                    };
                },
                info: e
            };
            return "undefined" != typeof a.telemetry.TraceLoggers && (f.loggers = a.telemetry.TraceLoggers),
            f;
        }, b.Error = function (b) {
            var d = {
                message: b
            }, e = {
                name: "Error",
                category: 2,
                time: Date.now(),
                id: c(),
                getFormattedInfoObject: function () {
                    return {
                        message: d.message
                    };
                },
                info: d
            };
            return "undefined" != typeof a.telemetry.ErrorLoggers && (e.loggers = a.telemetry.ErrorLoggers),
            e;
        }, b.ErrorWithStackTrace = function (b, d) {
            var e = {
                stack: b,
                message: d
            }, f = {
                name: "ErrorWithStackTrace",
                category: 2,
                time: Date.now(),
                id: c(),
                getFormattedInfoObject: function () {
                    return {
                        stack: e.stack,
                        message: e.message
                    };
                },
                info: e
            };
            return "undefined" != typeof a.telemetry.ErrorWithStackTraceLoggers && (f.loggers = a.telemetry.ErrorWithStackTraceLoggers),
            f;
        }, b.ErrorWithStackTraceAndSourceDetails = function (b, d, e, f, g) {
            var h = {
                source: b,
                lineNumber: d,
                columnNumber: e,
                stack: f,
                message: g
            }, i = {
                name: "ErrorWithStackTraceAndSourceDetails",
                category: 2,
                time: Date.now(),
                id: c(),
                getFormattedInfoObject: function () {
                    return {
                        source: h.source,
                        lineNumber: h.lineNumber,
                        columnNumber: h.columnNumber,
                        stack: h.stack,
                        message: h.message
                    };
                },
                info: h
            };
            return "undefined" != typeof a.telemetry.ErrorWithStackTraceAndSourceDetailsLoggers && (i.loggers = a.telemetry.ErrorWithStackTraceAndSourceDetailsLoggers),
            i;
        }, b.CustomerAction = function (b, d) {
            void 0 === d && (d = !1);
            var e = {
                parentId: b,
                isError: d
            }, f = {
                name: "CustomerAction",
                category: 1,
                time: Date.now(),
                id: c(),
                getFormattedInfoObject: function () {
                    return {
                        parentId: e.parentId,
                        isError: e.isError
                    };
                },
                info: e
            };
            return "undefined" != typeof a.telemetry.CustomerActionLoggers && (f.loggers = a.telemetry.CustomerActionLoggers),
            f;
        }, b.Verbose = function (b, d) {
            void 0 === d && (d = !1);
            var e = {
                parentId: b,
                isError: d
            }, f = {
                name: "Verbose",
                category: 0,
                time: Date.now(),
                id: c(),
                getFormattedInfoObject: function () {
                    return {
                        parentId: e.parentId,
                        isError: e.isError
                    };
                },
                info: e
            };
            return "undefined" != typeof a.telemetry.VerboseLoggers && (f.loggers = a.telemetry.VerboseLoggers),
            f;
        }, b.DashboardRootSession = function (b, d) {
            void 0 === d && (d = !1);
            var e = {
                parentId: b,
                isError: d
            }, f = {
                name: "PBI.Dashboard.RootSession",
                category: 1,
                time: Date.now(),
                id: c(),
                getFormattedInfoObject: function () {
                    return {
                        parentId: e.parentId,
                        isError: e.isError
                    };
                },
                info: e
            };
            return "undefined" != typeof a.telemetry.DashboardRootSessionLoggers && (f.loggers = a.telemetry.DashboardRootSessionLoggers),
            f;
        }, b.WFEInvitationSignUp = function (b, d) {
            void 0 === d && (d = !1);
            var e = {
                parentId: b,
                isError: d
            }, f = {
                name: "PBI.WFE.InvitationSignUp",
                category: 1,
                time: Date.now(),
                id: c(),
                getFormattedInfoObject: function () {
                    return {
                        parentId: e.parentId,
                        isError: e.isError
                    };
                },
                info: e
            };
            return "undefined" != typeof a.telemetry.WFEInvitationSignUpLoggers && (f.loggers = a.telemetry.WFEInvitationSignUpLoggers),
            f;
        }, b.WFEError = function (b, d, e, f) {
            void 0 === f && (f = !1);
            var g = {
                errorCode: b,
                errorType: d,
                parentId: e,
                isError: f
            }, h = {
                name: "PBI.WFE.Error",
                category: 1,
                time: Date.now(),
                id: c(),
                getFormattedInfoObject: function () {
                    return {
                        errorCode: g.errorCode,
                        errorType: g.errorType,
                        parentId: g.parentId,
                        isError: g.isError
                    };
                },
                info: g
            };
            return "undefined" != typeof a.telemetry.WFEErrorLoggers && (h.loggers = a.telemetry.WFEErrorLoggers),
            h;
        }, b.DashboardErrorDialog = function (b, d, e, f) {
            var g = {
                raid: b,
                caid: d,
                errorType: e,
                message: f
            }, h = {
                name: "PBI.Dashboard.ErrorDialog",
                category: 2,
                time: Date.now(),
                id: c(),
                getFormattedInfoObject: function () {
                    return {
                        raid: g.raid,
                        caid: g.caid,
                        errorType: g.errorType,
                        message: g.message
                    };
                },
                info: g
            };
            return "undefined" != typeof a.telemetry.DashboardErrorDialogLoggers && (h.loggers = a.telemetry.DashboardErrorDialogLoggers),
            h;
        }, b.MobileLandingContinuedToWeb = function (b, d) {
            void 0 === d && (d = !1);
            var e = {
                parentId: b,
                isError: d
            }, f = {
                name: "PBI.MobileLanding.ContinuedToWeb",
                category: 1,
                time: Date.now(),
                id: c(),
                getFormattedInfoObject: function () {
                    return {
                        parentId: e.parentId,
                        isError: e.isError
                    };
                },
                info: e
            };
            return "undefined" != typeof a.telemetry.MobileLandingContinuedToWebLoggers && (f.loggers = a.telemetry.MobileLandingContinuedToWebLoggers),
            f;
        }, b.MobileLandingDownloadApp = function (b, d) {
            void 0 === d && (d = !1);
            var e = {
                parentId: b,
                isError: d
            }, f = {
                name: "PBI.MobileLanding.DownloadApp",
                category: 1,
                time: Date.now(),
                id: c(),
                getFormattedInfoObject: function () {
                    return {
                        parentId: e.parentId,
                        isError: e.isError
                    };
                },
                info: e
            };
            return "undefined" != typeof a.telemetry.MobileLandingDownloadAppLoggers && (f.loggers = a.telemetry.MobileLandingDownloadAppLoggers),
            f;
        }, b.DashboardUnhandledAngularException = function (b, d) {
            var e = {
                stack: b,
                message: d
            }, f = {
                name: "PBI.Dashboard.UnhandledAngularException",
                category: 2,
                time: Date.now(),
                id: c(),
                getFormattedInfoObject: function () {
                    return {
                        stack: e.stack,
                        message: e.message
                    };
                },
                info: e
            };
            return "undefined" != typeof a.telemetry.DashboardUnhandledAngularExceptionLoggers && (f.loggers = a.telemetry.DashboardUnhandledAngularExceptionLoggers),
            f;
        }, b.DashboardUnhandledException = function (b, d, e, f, g) {
            var h = {
                source: b,
                lineNumber: d,
                columnNumber: e,
                stack: f,
                message: g
            }, i = {
                name: "PBI.Dashboard.UnhandledException",
                category: 2,
                time: Date.now(),
                id: c(),
                getFormattedInfoObject: function () {
                    return {
                        source: h.source,
                        lineNumber: h.lineNumber,
                        columnNumber: h.columnNumber,
                        stack: h.stack,
                        message: h.message
                    };
                },
                info: h
            };
            return "undefined" != typeof a.telemetry.DashboardUnhandledExceptionLoggers && (i.loggers = a.telemetry.DashboardUnhandledExceptionLoggers),
            i;
        };
    }(b = a.telemetry || (a.telemetry = {}));
}(powerbi || (powerbi = {}));

var powerbi;

!function (a) {
    var b;
    !function (a) {
        a.pbiClientName = "PowerBI.com", a.httpActivityIdHeader = "ActivityId", a.httpRequestIdHeader = "RequestId";
    }(b = a.telemetryConstants || (a.telemetryConstants = {}));
}(powerbi || (powerbi = {}));

var powerbi;

!function (a) {
    !function (a) {
        a[a.Verbose = 0] = "Verbose", a[a.CustomerAction = 1] = "CustomerAction", a[a.CriticalError = 2] = "CriticalError",
        a[a.Trace = 3] = "Trace";
    }(a.TelemetryCategory || (a.TelemetryCategory = {}));
    a.TelemetryCategory;
    !function (a) {
        a[a.Localytics = 1] = "Localytics", a[a.AppInsightDeprecated = 2] = "AppInsightDeprecated",
        a[a.AppInsight = 4] = "AppInsight", a[a.Etw = 8] = "Etw", a[a.Mobile = 16] = "Mobile",
        a[a.WinJs = 32] = "WinJs", a[a.Designer = 64] = "Designer";
    }(a.LoggerServiceType || (a.LoggerServiceType = {}));
    a.LoggerServiceType;
}(powerbi || (powerbi = {}));

var powerbi;

!function (a) {
    function b(a) {
        return new d(a);
    }
    a.createTelemetryService = b;
    var c = function () {
        function a() { }
        return a;
    }();
    a.PerfEvent = c;
    var d = function () {
        function b(a) {
            this.loggerServices = a ? a.getLoggerServices() : [], this.hostData = a ? a.getHostData() : {},
            this.startSession(), this.startSessionTimeout(), this.isSuspended = !1, this.perfEvents = [];
        }
        return b.prototype.startSession = function () {
            for (var b = 0, c = this.loggerServices.length; c > b; b++) this.loggerServices[b].initialize(this.hostData);
            this._rootEvent = a.telemetry.DashboardRootSession("", !1), this.logEventInternal(this._rootEvent);
        }, b.prototype.startSessionTimeout = function () {
            var a = this;
            this.sessionExpirationTimerId = window.setTimeout(function () {
                a.hostData.sessionId = jsCommon.Utility.generateGuid(), a.startSession();
            }, b.SessionTimeout);
        }, b.prototype.resetSessionTimeout = function () {
            window.clearTimeout(this.sessionExpirationTimerId), this.startSessionTimeout();
        }, b.prototype.suspend = function () {
            this.isSuspended = !0, window.clearTimeout(this.sessionExpirationTimerId);
        }, b.prototype.resume = function () {
            this.isSuspended = !1, this.resetSessionTimeout();
        }, b.prototype.removeEvent = function (a) {
            for (var b = 0, c = this.perfEvents.length; c > b; b++) if (this.perfEvents[b].telemetryEvent.event.id === a) return this.perfEvents[b].resolved = !0,
            0 === this.perfEvents[b].childCount ? (this.perfEvents.splice(b, 1), !0) : !1;
        }, b.prototype.removeScopeEvent = function (a) {
            for (var b = 0, c = this.perfEvents.length; c > b; b++) if (this.perfEvents[b].scopeId === a) return this.perfEvents[b].resolved = !0,
            0 === this.perfEvents[b].childCount ? (this.perfEvents.splice(b, 1), !0) : !1;
        }, b.prototype.resolveParent = function (a) {
            for (var b = 0, c = this.perfEvents.length; c > b; b++) if (this.perfEvents[b].telemetryEvent.event.id === a) return void (0 === --this.perfEvents[b].childCount && this.perfEvents[b].resolved && this.perfEvents[b].telemetryEvent.resolve());
        }, b.prototype.forceResolve = function (a) {
            for (var b = 0, c = this.perfEvents.length; c > b; b++) if (this.perfEvents[b].scopeId === a) return this.perfEvents[b].childCount = 0,
            void this.perfEvents[b].telemetryEvent.reject();
        }, b.prototype.startPerfEvent = function (a, b) {
            for (var c = this, d = [], f = 2; f < arguments.length; f++) d[f - 2] = arguments[f];
            var g, h = null, i = this.perfEvents.length;
            if (a && i > 0) {
                this.forceResolve(a.$id), i = this.perfEvents.length;
                for (var j = a.$parent; j && !h;) {
                    for (var k = j.$id, l = 0; i > l; l++) if (this.perfEvents[l].scopeId === k && this.perfEvents[l].telemetryEvent.event.id) {
                        h = this.perfEvents[l].telemetryEvent.event.id, this.perfEvents[l].childCount++;
                        break;
                    }
                    j = j.$parent;
                }
            }
            d.push(h ? h : this.root.id);
            var m = {
                info: {}
            };
            b && (m = b.apply(null, d), this.startTimedEventInternal(m));
            var n;
            g = new e(m, function (d) {
                if (m.id) {
                    if (!c.removeEvent(m.id)) return;
                } else if (!c.removeScopeEvent(a.$id)) return;
                b && c.endTimedEventInternal(d), h && c.resolveParent(h), n && window.clearTimeout(n);
            }), n = window.setTimeout(function () {
                c.forceResolve(a.$id);
            }, 12e4);
            var o = {
                scopeId: a ? a.$id : null,
                telemetryEvent: g,
                parentTelemetryId: h,
                childCount: 0,
                resolved: !1
            };
            return this.perfEvents.push(o), g;
        }, b.prototype.logEvent = function (a) {
            for (var b = [], c = 1; c < arguments.length; c++) b[c - 1] = arguments[c];
            b.push(this.root.id);
            var d = a.apply(null, b);
            return this.logEventInternal(d), d;
        }, b.prototype.logChildEvent = function (a, b) {
            for (var c = [], d = 2; d < arguments.length; d++) c[d - 2] = arguments[d];
            c.push(a.id);
            var e = b.apply(null, c);
            return this.logEventInternal(e), e;
        }, b.prototype.startEvent = function (a) {
            for (var b = this, c = [], d = 1; d < arguments.length; d++) c[d - 1] = arguments[d];
            c.push(this.root.id);
            var f = a.apply(null, c);
            return this.startTimedEventInternal(f), new e(f, function (a) {
                return b.endTimedEventInternal(a);
            });
        }, b.prototype.startChildEvent = function (a, b) {
            for (var c = this, d = [], f = 2; f < arguments.length; f++) d[f - 2] = arguments[f];
            d.push(a.id);
            var g = b.apply(null, d);
            return this.startTimedEventInternal(g), new e(g, function (a) {
                return c.endTimedEventInternal(a);
            });
        }, b.prototype.logTrace = function (b) {
            var c = a.telemetry.Trace(b.type, b.text);
            this.logEventInternal(c);
        }, b.prototype.logEventDeprecated = function (a) {
            this.logEventInternal(a);
        }, b.prototype.startTimedEventInternal = function (a) {
            this.resetSessionTimeout();
            for (var b = this.getLoggerServices(), c = 0, d = b.length; d > c; c++) b[c].startTimedEvent(a);
        }, b.prototype.endTimedEventInternal = function (a) {
            this.resetSessionTimeout();
            for (var b = this.getLoggerServices(), c = 0, d = b.length; d > c; c++) b[c].endTimedEvent(a);
        }, b.prototype.logEventInternal = function (a) {
            this.resetSessionTimeout();
            for (var b = this.getLoggerServices(), c = 0, d = b.length; d > c; c++) b[c].logEvent(a);
        }, Object.defineProperty(b.prototype, "sessionId", {
            get: function () {
                return this.hostData.sessionId;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(b.prototype, "root", {
            get: function () {
                return this._rootEvent;
            },
            enumerable: !0,
            configurable: !0
        }), b.prototype.getLoggerServices = function () {
            return this.isSuspended ? [] : this.loggerServices;
        }, b.SessionTimeout = 18e5, b;
    }(), e = function () {
        function a(a, b) {
            this.event = a, this.end = b;
        }
        return a.prototype.resolve = function () {
            this.end(this.event);
        }, a.prototype.reject = function () {
            var a = this.event;
            a.info.isError = !0, this.end(a);
        }, a;
    }();
}(powerbi || (powerbi = {}));

var appInsights;

appInsights = appInsights || {
    trackPageView: function () { },
    trackEvent: function () { },
    trackTrace: function () { }
};

var powerbi;

!function (a) {
    function b() {
        if (("undefined" == typeof isTelemetryDisabled || !isTelemetryDisabled) && "undefined" != typeof appInsightsV2InstrKey) {
            var a = "undefined" != typeof appInsightsV2InstrKey ? appInsightsV2InstrKey : "";
            appInsights = function (a) {
                function b(a) {
                    c[a] = function () {
                        var b = arguments;
                        c.queue.push(function () {
                            c[a].apply(c, b);
                        });
                    };
                }
                var c = {
                    config: a
                }, d = document, e = window, f = "script", g = d.createElement(f);
                g.src = a.url || "//az416426.vo.msecnd.net/scripts/a/ai.0.js", d.getElementsByTagName(f)[0].parentNode.appendChild(g),
                c.cookie = d.cookie, c.queue = [];
                for (var h = ["Event", "Exception", "Metric", "PageView", "Trace"]; h.length;) b("track" + h.pop());
                if (!a.disableExceptionTracking) {
                    var i = "onerror";
                    b("_" + i);
                    var j = e[i];
                    e[i] = function (a, b, d, e, f) {
                        var g = j && j(a, b, d, e, f);
                        return g !== !0 && c["_" + i](a, b, d, e, f), g;
                    };
                }
                return c;
            }({
                instrumentationKey: a
            });
        }
    }
    var c = function () {
        function b(a) {
            this.hostData = null, this.appInsightsV2Service = a, this.appInsightsV2Service.trackPageView();
        }
        return b.prototype.initialize = function (a) {
            this.hostData = a;
        }, b.prototype.getType = function () {
            return 2;
        }, b.prototype.getCategoryOfEvent = function (b) {
            var c = b.category ? b.category : 0;
            return a.TelemetryCategory[c];
        }, b.prototype.logEvent = function (a) {
            if (3 === a.category) this.trackTraceInternal(a.getFormattedInfoObject(), this.hostData); else {
                var b = $.extend({}, this.hostData, a.getFormattedInfoObject(), {
                    id: a.id,
                    start: new Date(a.time).toISOString(),
                    category: this.getCategoryOfEvent(a)
                });
                this.trackEventInternal(a.name, b);
            }
        }, b.prototype.startTimedEvent = function () { }, b.prototype.endTimedEvent = function (a) {
            var b = $.extend({}, this.hostData, a.getFormattedInfoObject(), {
                id: a.id,
                start: new Date(a.time).toISOString(),
                end: new Date().toISOString(),
                category: this.getCategoryOfEvent(a)
            });
            this.trackEventInternal(a.name, b);
        }, b.prototype.trackEventInternal = function (a, b) {
            try {
                this.appInsightsV2Service.trackEvent(a, b);
            } catch (c) { }
        }, b.prototype.trackTraceInternal = function (a, b) {
            try {
                this.appInsightsV2Service.trackTrace(a, b);
            } catch (c) { }
        }, b;
    }();
    a.AppInsightsV2Service = c, a.loadAppInsightsV2 = b, b();
}(powerbi || (powerbi = {}));

var powerbi;

!function (a) {
    !function (a) {
        a[a.Open = 0] = "Open", a[a.CanBeClosed = 1] = "CanBeClosed";
    }(a.Status || (a.Status = {}));
    var b = (a.Status, function () {
        function a(a) {
            this.eventsInStorage = [], this.loggerService = a;
        }
        return a.prototype.initialize = function (a) {
            this.loggerService.initialize(a);
        }, a.prototype.getType = function () {
            return this.loggerService.getType();
        }, a.prototype.logEvent = function (a) {
            this.loggerService.logEvent(a);
        }, a.prototype.startTimedEvent = function (a) {
            this.eventsInStorage.push({
                eventData: a,
                status: 0
            }), this.loggerService.startTimedEvent(a);
        }, a.prototype.endTimedEvent = function (a) {
            var b = this, c = this.getChildren(a.id);
            if (this.removeEventsWithId(a.id), 0 === c.length) {
                this.loggerService.endTimedEvent(a);
                for (var d = a; d;) {
                    var e = this.eventsInStorage.filter(function (a) {
                        return d.info.parentId && a.eventData.id === d.info.parentId && 1 === a.status && 0 === b.getChildren(a.eventData.id).length;
                    });
                    e.length > 0 ? (this.loggerService.endTimedEvent(e[0].eventData), this.removeEventsWithId(e[0].eventData.id),
                    d = e[0].eventData) : d = null;
                }
            } else this.eventsInStorage.push({
                eventData: a,
                status: 1
            });
        }, a.prototype.getChildren = function (a) {
            return this.eventsInStorage.filter(function (b) {
                return void 0 !== b.eventData.info.parentId && b.eventData.info.parentId === a;
            });
        }, a.prototype.removeEventsWithId = function (a) {
            for (var b = this.eventsInStorage.length - 1; b >= 0; b--) {
                var c = this.eventsInStorage[b].eventData;
                c.id === a && this.eventsInStorage.splice(b, 1);
            }
        }, a;
    }());
    a.AutoEndingWrapper = b;
}(powerbi || (powerbi = {}));

var powerbi;

!function (a) {
    var b = function () {
        function a() { }
        return a.prototype.initialize = function (a) {
            this.hostData = a;
        }, a.prototype.getType = function () {
            return 8;
        }, a.prototype.logEvent = function () { }, a.prototype.startTimedEvent = function (a) {
            if (this.isProfilerAvailable()) {
                var b = a, c = b.info.parentId ? b.info.parentId : "", d = a.name + "_A:" + a.id + "_P:" + c + "_C:" + this.hostData.sessionId + ":Begin";
                window.msWriteProfilerMark(d);
            }
        }, a.prototype.endTimedEvent = function (a) {
            if (this.isProfilerAvailable()) {
                var b = a, c = b.info.parentId ? b.info.parentId : "", d = a.name + "_A:" + a.id + "_P:" + c + "_C:" + this.hostData.sessionId + ":End";
                window.msWriteProfilerMark(d);
            }
        }, a.prototype.isProfilerAvailable = function () {
            return null != window.msWriteProfilerMark;
        }, a;
    }();
    a.EtwPerfLoggerService = b;
}(powerbi || (powerbi = {}));

var powerbi;

!function (a) {
    var b = function () {
        function a() { }
        return a.prototype.setTimeout = function (a, b, c) {
            return setTimeout(a, b, c);
        }, a.prototype.setInterval = function (a, b, c) {
            return setInterval(a, b, c);
        }, a.prototype.clearTimeout = function (a) {
            clearTimeout(a);
        }, a.prototype.clearInterval = function (a) {
            clearInterval(a);
        }, a;
    }();
    a.DefaultTimer = b;
    var c = function () {
        function a(a, c, d) {
            this.callbacks = [], this.isIdle = !1;
            var e = this;
            this.timer = void 0 !== d ? d : new b(), this.pollingDelay = a, this.callbackDelay = c;
            var f = $(document);
            f.on("click", null, e, this.somethingJustHappenedCallback), f.on("dblclick", null, e, this.somethingJustHappenedCallback),
            f.on("input", null, e, this.somethingJustHappenedCallback), f.on("keydown", null, e, this.somethingJustHappenedCallback),
            f.on("mouseenter", null, e, this.somethingJustHappenedCallback), f.on("mousemove", null, e, this.somethingJustHappenedCallback),
            f.on("scroll", null, e, this.somethingJustHappenedCallback), this.somethingJustHappened(e);
        }
        return a.prototype.somethingJustHappenedCallback = function (a) {
            a.data.somethingJustHappened(a.data);
        }, a.prototype.somethingJustHappened = function (a) {
            var b = new Date().getTime();
            a.startedIdle = b, a.timer.clearTimeout(a.idleTimer), a.timer.clearInterval(a.callbackTimer),
            a.idleTimer = a.timer.setTimeout(a.idleTimerCallback, a.pollingDelay, a);
        }, a.prototype.idleTimerCallback = function (a) {
            a.callback(a), a.callbackTimer = a.timer.setInterval(a.callback, a.callbackDelay, a);
        }, a.prototype.addCallback = function (a) {
            this.removeCallback(a), this.callbacks.push(a);
        }, a.prototype.removeCallback = function (a) {
            for (var b = this.callbacks.length - 1; b >= 0; b--) this.callbacks[b] === a && this.callbacks.splice(b, 1);
        }, a.prototype.callback = function (a) {
            for (var b = 0; b < a.callbacks.length; b++) a.callbacks[b]();
        }, a;
    }();
    a.IdleCallbackTimer = c;
}(powerbi || (powerbi = {}));

var powerbi;

!function (a) {
    a.localytics;
    var b = function () {
        function b(a, c, d, e) {
            var f = this;
            if (f.idleTimer = c, d) f.localyticsSdk = d; else try {
                f.localyticsSdk = LocalyticsSession(a, {
                    logger: !1,
                    namespace: b.namespace
                });
            } catch (g) { }
            this.document = e ? e : document, this.eventQueue = [], f.idleTimer && this.idleTimer.addCallback(function () {
                if (f.eventQueue.length > 0) {
                    var a = f.eventQueue.shift();
                    a();
                }
            }), $(document).on("beforeunload", null, f, function () {
                if (f.idleTimer) for (; f.eventQueue.length > 0;) {
                    var a = f.eventQueue.shift();
                    a();
                }
            });
        }
        return b.prototype.initialize = function (c) {
            this.hostData = c;
            var d = this;
            d.executeOrQueue(d, function () {
                d.document.cookie = d.getCookieString(d.document.location.hostname, b.localyticsSessionIdCookie, '"' + c.sessionId + '"');
                var e = a.getHashCode(c.userId), f = '"11111111-1111-1111-1111-11' + e + '"';
                d.document.cookie = d.getCookieString(d.document.location.hostname, b.localyticsUserIdCookie, f),
                d.localyticsSdk.open(), c.isInternalUser ? d.localyticsSdk.setCustomDimension(0, "MSFT") : d.localyticsSdk.setCustomDimension(0, "External");
            });
        }, b.prototype.getType = function () {
            return 1;
        }, b.prototype.getCookieString = function (a, b, c) {
            var d = a.match(/[a-z0-9][a-z0-9\-]+\.[a-z\.]{2,6}$/i), e = d ? d[0] : "", f = b + "=" + c + ";domain=." + e + ";max-age=max-age-in-seconds=2592000";
            return f;
        }, b.prototype.logEvent = function (b) {
            var c = this, d = this.hostData, e = $.extend({}, b.getFormattedInfoObject(), {
                client: d.client,
                version: d.build,
                cluster: d.cluster,
                activityId: b.id,
                hashedUuid: a.getHashCode(d.userId),
                isInternal: d.isInternalUser
            });
            e.duration && "number" == typeof e.duration && (e.duration = c.bucketTime(e.duration)),
            c.executeOrQueue(c, function () {
                c.localyticsSdk.tagEvent(b.name, e);
            });
        }, b.prototype.startTimedEvent = function () { }, b.prototype.endTimedEvent = function (b) {
            var c = this, d = this.hostData, e = $.extend({}, b.getFormattedInfoObject(), {
                duration: c.bucketTime(Date.now() - b.time),
                client: d.client,
                version: d.build,
                cluster: d.cluster,
                activityId: b.id,
                hashedUuid: a.getHashCode(d.userId),
                isInternal: d.isInternalUser
            });
            c.executeOrQueue(c, function () {
                c.localyticsSdk.tagEvent(b.name, e);
            });
        }, b.prototype.bucketTime = function (a) {
            var b = "1min+";
            return 10 > a ? b = "< 10ms" : 100 > a ? b = 10 * Math.floor(a / 10) + "ms" : 1e3 > a ? b = 100 * Math.floor(a / 100) + "ms" : 5e3 > a ? b = Math.floor(a / 1e3) + "s" : 1e4 >= a ? b = "5 - 10s" : 6e4 >= a && (b = "10 - 60s"),
            b;
        }, b.prototype.executeOrQueue = function (a, b) {
            a.idleTimer ? a.eventQueue.push(function () {
                try {
                    b();
                } catch (a) { }
            }) : b();
        }, b.namespace = "PowerBI", b.localyticsUserIdCookie = "__ll_PowerBI_iu", b.localyticsSessionIdCookie = "__ll_PowerBI_csu",
        b;
    }();
    a.LocalyticsService = b;
}(powerbi || (powerbi = {}));

var powerbi;

!function (a) {
    var b = function () {
        function a(a, b) {
            this.loggerService = a, this.rule = b;
        }
        return a.prototype.initialize = function (a) {
            this.loggerService.initialize(a);
        }, a.prototype.getType = function () {
            return this.loggerService.getType();
        }, a.prototype.shouldLog = function (a) {
            return this.rule.shoudLog(a, this.getType()) ? !0 : !1;
        }, a.prototype.logEvent = function (a) {
            this.shouldLog(a) && this.loggerService.logEvent(a);
        }, a.prototype.startTimedEvent = function (a) {
            this.loggerService.startTimedEvent(a);
        }, a.prototype.endTimedEvent = function (a) {
            this.shouldLog(a) && this.loggerService.endTimedEvent(a);
        }, a;
    }();
    a.LoggerServiceWrapper = b;
}(powerbi || (powerbi = {}));

var powerbi;

!function (a) {
    function b(a) {
        var b, c, d, e = 0;
        if (0 === a.length) return e;
        var f = a.toLowerCase();
        for (b = 0, d = f.length; d > b; b++) c = f.charCodeAt(b), e = (e << 5) - e + c,
        e |= 0;
        return e;
    }
    a.getHashCode = b;
}(powerbi || (powerbi = {}));

var powerbi;

!function (a) {
    var b;
    !function (b) {
        function c() {
            return new d(a.telemetrySamplingRules, a.session.userInfo, a.build, clusterUri, a.telemetryConstants.pbiClientName, telemetrySessionId);
        }
        b.createTelemetryHostService = c;
        var d = function () {
            function b(b, c, d, f, g, h) {
                this.loggers = e.getDefaultLoggingCollection(b), this.hostData = {
                    sessionId: h || "",
                    client: g || "",
                    build: d || "",
                    cluster: f || "",
                    userId: c && c.puid ? c.puid : "00000000-0000-0000-0000-000000000000",
                    isInternalUser: a.session.UserInfoUtils.isInternalUser()
                };
            }
            return b.prototype.getLoggerServices = function () {
                return this.loggers;
            }, b.prototype.getHostData = function () {
                return this.hostData;
            }, b;
        }(), e = function () {
            function b() { }
            return b.getDefaultLoggingCollection = function (a) {
                return "standard" === a ? b.getStandardCollectionRules() : "none" === a ? b.getLogNothingCollectionRules() : b.getLoggingCollection(a);
            }, b.getLoggingCollection = function (c) {
                var d = new Array(), e = "undefined" != typeof localyticsInstrKey ? localyticsInstrKey : "", f = new a.IdleCallbackTimer(b.timeBeforeBrowserConsideredIdleInMs, b.timeBetweenUploadsInMs);
                return c && (c.perf && d.push(this.wrapLogger(c.perf, new a.AutoEndingWrapper(new a.EtwPerfLoggerService()))),
                c.appInsights && d.push(this.wrapLogger(c.appInsights, new a.AppInsightsV2Service(appInsights))),
                c.localytics && d.push(this.wrapLogger(c.localytics, new a.LocalyticsService(e, f)))),
                d;
            }, b.getStandardCollectionRules = function () {
                var c = new Array(), d = "undefined" != typeof localyticsInstrKey ? localyticsInstrKey : "", e = new a.IdleCallbackTimer(b.timeBeforeBrowserConsideredIdleInMs, b.timeBetweenUploadsInMs);
                return c.push(this.wrapLogger(b.EtwStandardLoggerConfig, new a.AutoEndingWrapper(new a.EtwPerfLoggerService()))),
                c.push(this.wrapLogger(b.AppInsightStandardLoggerConfig, new a.AppInsightsV2Service(appInsights))),
                c.push(this.wrapLogger(b.LocalyticsStandardLoggerConfig, new a.LocalyticsService(d || "", e))),
                c;
            }, b.getLogNothingCollectionRules = function () {
                var a = new Array();
                return a;
            }, b.wrapLogger = function (b, c) {
                var d = b ? new a.LoggerServiceRule(b) : new a.SendNothingRule(), e = new a.LoggerServiceWrapper(c, d);
                return e;
            }, b.timeBetweenUploadsInMs = 250, b.timeBeforeBrowserConsideredIdleInMs = 1e3,
            b.LocalyticsStandardLoggerConfig = [{
                purpose: "CriticalError",
                sampleRate: 1
            }, {
                purpose: "CustomerAction",
                sampleRate: 1
            }, {
                purpose: "Verbose",
                sampleRate: 0
            }, {
                purpose: "Trace",
                sampleRate: 0
            }], b.AppInsightStandardLoggerConfig = [{
                purpose: "CriticalError",
                sampleRate: 1
            }, {
                purpose: "CustomerAction",
                sampleRate: 1
            }, {
                purpose: "Verbose",
                sampleRate: 1
            }, {
                purpose: "Trace",
                sampleRate: 0
            }], b.EtwStandardLoggerConfig = [{
                purpose: "CriticalError",
                sampleRate: 1
            }, {
                purpose: "CustomerAction",
                sampleRate: 1
            }, {
                purpose: "Verbose",
                sampleRate: 1
            }, {
                purpose: "Trace",
                sampleRate: 0
            }], b;
        }();
        b.TelemetryConfigurations = e;
    }(b = a.telemetry || (a.telemetry = {}));
}(powerbi || (powerbi = {}));

var powerbi;

!function (a) {
    var b = function () {
        function a() { }
        return a.prototype.shoudLog = function () {
            return !0;
        }, a;
    }();
    a.SendAllRule = b;
    var c = function () {
        function a() { }
        return a.prototype.shoudLog = function () {
            return !1;
        }, a;
    }();
    a.SendNothingRule = c;
    var d = function () {
        function b(a) {
            this.shouldLogMap = [];
            for (var b = 0; b < a.length; b++) {
                var c = a[b], d = c.purpose;
                this.shouldLogMap[d] = c.sampleRate >= 1 - Math.random();
            }
        }
        return b.prototype.shoudLog = function (b, c) {
            var d = b.loggers;
            if (d) return (d & c) === c;
            var e = b.category ? a.TelemetryCategory[b.category] : a.TelemetryCategory[0];
            return void 0 !== this.shouldLogMap[e] ? this.shouldLogMap[e] : !1;
        }, b;
    }();
    a.LoggerServiceRule = d;
}(powerbi || (powerbi = {}));

var powerbi;

!function (a) {
    var b;
    !function (b) {
        b.userInfo;
        var c = function () {
            function b() { }
            return b.getFullName = function () {
                return a.session.userInfo.givenName + " " + a.session.userInfo.surname;
            }, b.isInternalUser = function () {
                var b = a.session.userInfo.name.toLowerCase();
                return b.indexOf("@microsoft.com") >= 0 || b.indexOf(".microsoft.com") >= 0;
            }, b.getEmailAddressForReceivingMail = function () {
                var b = a.session.userInfo;
                return null == b ? "" : jsCommon.StringExtensions.isNullOrEmpty(b.alternateEmail) ? b.name : b.alternateEmail;
            }, b;
        }();
        b.UserInfoUtils = c;
    }(b = a.session || (a.session = {}));
}(powerbi || (powerbi = {}));

var jsCommon;

!function (a) {
    var b = function () {
        function b(a, b, c, d) {
            this.text = a, this.type = b, this.sessionId = c, this.requestId = d, this.timeStamp = new Date();
        }
        return b.prototype.toString = function () {
            var c = new a.StringBuilder();
            return c.append(a.StringExtensions.format("{0} ({1}): {2}", b.traceTypeStrings[this.type], this.timeStamp.toUTCString(), this.text)),
            this.requestId && c.append("\n(Request id: " + this.requestId + ")"), c.toString();
        }, b.traceTypeStrings = ["INFORMATION", "VERBOSE", "WARNING", "ERROR", "EXPECTEDERROR", "UNEXPECTEDERROR", "FATAL"],
        b;
    }();
    a.TraceItem = b;
}(jsCommon || (jsCommon = {}));

var jsCommon;

!function (a) {
    var b = function () {
        function a() { }
        return a.prototype.logTrace = function (a) { }, a;
    }();
    a.ConsoleTracer = b;
    var c;
    !function (c) {
        function d(b, c) {
            n(new a.TraceItem(b, 2, c));
        }
        function e(b, c, d) {
            c && (b = a.StringExtensions.format("{0}.\nStack:\n{1}", b, a.getStackTrace())),
            n(new a.TraceItem(b, 3, d));
        }
        function f(b, c) {
            n(new a.TraceItem(b, 1, c));
        }
        function g(a) {
            s.push(a);
        }
        function h(a) {
            var b = s.indexOf(a);
            b >= 0 && s.splice(b, 1);
        }
        function i() {
            s = new Array(r);
        }
        function j() {
            q = -1;
        }
        function k() {
            if (!(0 > q)) {
                for (var a = new Array(q + 1), b = 0; q >= b; b++) a[b] = p[b];
                return a;
            }
        }
        function l() {
            h(r);
        }
        function m() {
            g(r);
        }
        function n(a) {
            q + 1 >= o && j(), p[++q] = a;
            for (var b = 0, c = s.length; c > b; b++) s[b].logTrace(a);
        }
        var o = 1e3, p = new Array(o), q = -1, r = new b(), s = new Array(r);
        c.warning = d, c.error = e, c.verbose = f, c.addListener = g, c.removeListener = h,
        c.resetListeners = i, c.reset = j, c.getTraces = k, c.disableDefaultListener = l,
        c.enableDefaultListener = m;
    }(c = a.Trace || (a.Trace = {}));
}(jsCommon || (jsCommon = {}));

var jsCommon;

!function (a) {
    !function (a) {
        a[a.Information = 0] = "Information", a[a.Verbose = 1] = "Verbose", a[a.Warning = 2] = "Warning",
        a[a.Error = 3] = "Error", a[a.ExpectedError = 4] = "ExpectedError", a[a.UnexpectedError = 5] = "UnexpectedError",
        a[a.Fatal = 6] = "Fatal";
    }(a.TraceType || (a.TraceType = {}));
    a.TraceType;
}(jsCommon || (jsCommon = {}));
//# sourceMappingURL=Utility.min.js.map