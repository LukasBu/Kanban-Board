/*
jQWidgets v4.5.2 (2017-May)
Copyright (c) 2011-2017 jQWidgets.
License: http://jqwidgets.com/license/
*/
! function(a) {
    "use strict";
    a.jqx.jqxWidget("jqxKanban", "", {}), a.extend(a.jqx._jqxKanban.prototype, {
        defineInstance: function() {
            var b = {
                animationDelay: 100,
                columnRenderer: null,
                columns: null,
                connectWith: null,
                headerWidth: 30,
                headerHeight: 30,
                height: 400,
                handle: null,
                itemRenderer: null,
                ready: null,
                resources: null,
                rtl: !1,
                source: null,
                template: "<div class='jqx-kanban-item' id=''><div class='jqx-kanban-item-color-status'></div><div class='jqx-kanban-item-avatar'></div><div class='jqx-kanban-item-text'></div><div class='jqx-kanban-item-footer'></div></div>",
                templateContent: {
                    id: 0,
                    status: "work",
                    text: "New text",
                    content: "New content",
                    tags: "New, tags",
                    color: "green",
                    resourceId: 0,
                    className: ""
                },
                width: 600,
                verticalTextOrientation: "topToBottom",
                _kanbanId: null,
                _dropKanbanId: null,
                _connectWith: null,
                _kanbanColumns: null,
                _selectedItemId: null,
                _selectedItemValues: null,
                _draggedItemId: null,
                _draggedItemValues: null,
                _selectedColumn: null,
                _source: null,
                _resourcesLength: null,
                _items: [],
                _ie8: a.jqx.browser.msie && 8 == a.jqx.browser.version,
                _ie7: a.jqx.browser.msie && a.jqx.browser.version < 8,
                _parentsTag: null,
                _columns: [],
                _collapsedColumns: 0,
                _expandedColumns: null,
                _columnBorders: [1, 1, 1, 1],
                _css_color_names: ["AliceBlue", "AntiqueWhite", "Aqua", "Aquamarine", "Azure", "Beige", "Bisque", "Black", "BlanchedAlmond", "Blue", "BlueViolet", "Brown", "BurlyWood", "CadetBlue", "Chartreuse", "Chocolate", "Coral", "CornflowerBlue", "Cornsilk", "Crimson", "Cyan", "DarkBlue", "DarkCyan", "DarkGoldenRod", "DarkGray", "DarkGrey", "DarkGreen", "DarkKhaki", "DarkMagenta", "DarkOliveGreen", "Darkorange", "DarkOrchid", "DarkRed", "DarkSalmon", "DarkSeaGreen", "DarkSlateBlue", "DarkSlateGray", "DarkSlateGrey", "DarkTurquoise", "DarkViolet", "DeepPink", "DeepSkyBlue", "DimGray", "DimGrey", "DodgerBlue", "FireBrick", "FloralWhite", "ForestGreen", "Fuchsia", "Gainsboro", "GhostWhite", "Gold", "GoldenRod", "Gray", "Grey", "Green", "GreenYellow", "HoneyDew", "HotPink", "IndianRed", "Indigo", "Ivory", "Khaki", "Lavender", "LavenderBlush", "LawnGreen", "LemonChiffon", "LightBlue", "LightCoral", "LightCyan", "LightGoldenRodYellow", "LightGray", "LightGrey", "LightGreen", "LightPink", "LightSalmon", "LightSeaGreen", "LightSkyBlue", "LightSlateGray", "LightSlateGrey", "LightSteelBlue", "LightYellow", "Lime", "LimeGreen", "Linen", "Magenta", "Maroon", "MediumAquaMarine", "MediumBlue", "MediumOrchid", "MediumPurple", "MediumSeaGreen", "MediumSlateBlue", "MediumSpringGreen", "MediumTurquoise", "MediumVioletRed", "MidnightBlue", "MintCream", "MistyRose", "Moccasin", "NavajoWhite", "Navy", "OldLace", "Olive", "OliveDrab", "Orange", "OrangeRed", "Orchid", "PaleGoldenRod", "PaleGreen", "PaleTurquoise", "PaleVioletRed", "PapayaWhip", "PeachPuff", "Peru", "Pink", "Plum", "PowderBlue", "Purple", "Red", "RosyBrown", "RoyalBlue", "SaddleBrown", "Salmon", "SandyBrown", "SeaGreen", "SeaShell", "Sienna", "Silver", "SkyBlue", "SlateBlue", "SlateGray", "SlateGrey", "Snow", "SpringGreen", "SteelBlue", "Tan", "Teal", "Thistle", "Tomato", "Turquoise", "Violet", "Wheat", "White", "WhiteSmoke", "Yellow", "YellowGreen"],
                _clearing: "<div class='jqx-kanban-clearing'></div>",
                _commonItem: {
                    id: null,
                    name: "no name",
                    image: "data:image/png;base64,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"
                },
                _events: ["initialized", "itemSelected", "itemCreated", "itemMoved", "itemReceived", "columnSelected", "columnUnselected", "columnCollapsed", "columnExpanded", "itemAttrClicked", "columnAttrClicked"]
            };
            return this === a.jqx._jqxKanban.prototype ? b : (a.extend(!0, this, b), b)
        },
        createInstance: function() {
            var b = this;
            a("#" + b.element.id).empty(), b._createKanban()
        },
        _createKanban: function() {
            var a = this;
            a._ie8Plugin(), a._kanbanId = a.element.id;
            var b = function() {
                a._getParent(), a._createKanbanField(), a._createKanbanLayout(), a._addCSS();
                var b = function() {
                    a._setKanbanConnections(), a._transformToSortable(), a._addEventHandlers(), a._rtlCheck(), a._refreshEventHandlers(), a._handlerExpandCollapse(), a._raiseEvent("0"), a._ready()
                };
                a._populateKanban(b)
            };
            a._serializeSource(b)
        },
        propertyChangedHandler: function(b, c, d, e) {
            return "width" === c ? (b.host.width(e - 4), void that._calculateExpandedColumnsWidth()) : "height" === c ? void b.host.height(e) : (a("#" + b.element.id).empty(), void b._createKanban())
        },
        _getParent: function() {
            var a = this;
            a._parentsTag = a.host.parent().get(0).tagName.toLowerCase()
        },
        _createKanbanField: function() {
            var b = this,
                c = b.columns.length;
            if (null == b.width && null == b.height) "body" == b._parentsTag ? (b.width = a(window).innerWidth(), b.height = a(window).innerHeight(), (b._ie7 || b._ie8) && b.host.height(b.height), b.host.addClass(this.toThemeProperty("jqx-kanban-full-frame"))) : (b.width = b.host.parent().width(), b.height = b.host.parent().height(), b.host.addClass(this.toThemeProperty("jqx-kanban-in-frame")));
            else if (null != b.width && null == b.height) {
                if (b.width <= b.headerWidth * c) throw new Error("jqxKanban: Insert valid Kanban dimensions. Width must be greather than sum of the collapsed header's width");
                b.host.width(b.width)
            } else if (null != b.heigth && null == b.width) {
                if (b.height <= b.headerHeight) throw new Error("jqxKanban: Insert valid Kanban dimensions. Height must be greather than headerHeight");
                b.host.heigth(b.heigth)
            } else {
                if (b.width <= b.headerWidth * c) throw new Error("jqxKanban: Insert valid Kanban dimensions. Width must be greather than sum of the collapsed header's width");
                if (b.height <= b.headerHeight) throw new Error("jqxKanban: Insert valid Kanban dimensions. Height must be greather than headerHeight");
                b.host.width(b.width), b.host.height(b.height)
            }
            b.host.addClass(this.toThemeProperty("jqx-widget"))
        },
        _createKanbanLayout: function() {
            var b = this,
                c = b.columns.length;
            b._expandedColumns = c;
            for (var d = b._calculateColumnDimensions(c), e = b._calculateContainerDimensions(c), f = 0; f < c; f++) {
                var g = a("<div id='" + b._kanbanId + "-column-" + f + "' class='jqx-kanban-column' data-column-data-field='" + b.columns[f].dataField + "' style='width:" + d[0] + "; height:" + d[1] + ";'></div>");
                void 0 === b.columns[f].maxItems && (b.columns[f].maxItems = 9999), b._columns.push(g), b.host.append(g);
                var h = "jqx-kanban-column-vertical-container",
                    i = b.columns[f].collapseDirection;
                i || (i = "left"), "right" == i && (h = "jqx-kanban-column-vertical-container-inverse");
                var j = b.columns[f].iconClassName ? b.toThemeProperty(b.columns[f].iconClassName) : "",
                    k = j ? "<div class='" + b.toThemeProperty("jqx-window-collapse-button-background jqx-kanban-column-header-custom-button") + "'><div style='width: 100%; height: 100%;' class='" + j + "'></div></div>" : "",
                    l = j ? "<div class='" + b.toThemeProperty("jqx-window-collapse-button-background jqx-kanban-column-header-custom-button") + "'><div style='width: 100%; height: 100%;' class='" + j + "'></div></div>" : "",
                    m = a("<div id='" + b._kanbanId + "-column-header-collapsed-" + f + "' data-kanban-column-header-collapsed='" + f + "' class='" + b.toThemeProperty("jqx-kanban-column-header-collapsed") + "'><div class='" + h + "'><span class='" + b.toThemeProperty("jqx-kanban-column-header-title") + "'>" + b.columns[f].text + "</span><span class='" + b.toThemeProperty("jqx-kanban-column-header-status") + "'></span></div>" + k + "<div class='" + b.toThemeProperty("jqx-window-collapse-button-background jqx-kanban-column-header-button") + "'><div style='width: 100%; height: 100%;' class='" + b.toThemeProperty("jqx-window-collapse-button " + ("right" == i ? "jqx-icon-arrow-left" : "jqx-icon-arrow-right")) + "'></div></div></div>");
                g.append(m);
                var n = a("<div id='" + b._kanbanId + "-column-header-" + f + "' data-kanban-column-header='" + f + "' class='" + b.toThemeProperty("jqx-kanban-column-header") + "'><span class='" + b.toThemeProperty("jqx-kanban-column-header-title") + "'>" + b.columns[f].text + "</span><span class='" + b.toThemeProperty("jqx-kanban-column-header-status") + "'></span>" + l + "<div class='" + b.toThemeProperty("jqx-window-collapse-button-background jqx-kanban-column-header-button") + "'><div style='width: 100%; height: 100%;' class='" + b.toThemeProperty("jqx-window-collapse-button " + ("right" == i ? "jqx-icon-arrow-right" : "jqx-icon-arrow-left")) + "'></div></div></div>");
                b.rtl && (n.find(".jqx-kanban-column-header-button").addClass("jqx-kanban-column-header-button-rtl"), n.find(".jqx-kanban-column-header-custom-button").addClass("jqx-kanban-column-header-custom-button-rtl")), n.outerHeight(b.headerHeight), n.css("line-height", b.headerHeight + "px"), g.append(n);
                var o = a("<div id='" + b._kanbanId + "-column-container-" + f + "' data-kanban-column-container='" + b.columns[f].dataField + "' class='jqx-kanban-column-container' style='height:" + e[1] + "; overflow-y: auto;'></div>");
                if (g.append(o), g.data("kanban-column-collapsed", !1), b.columns[f].headerElement = n, b.columns[f].collapsedHeaderElement = m, b.columnRenderer && b.columnRenderer(n, m, b.columns[f]), "left" == i) {
                    var p = n.find(".jqx-kanban-column-header-title").width();
                    p += n.find(".jqx-kanban-column-header-status").width(), p -= 10, g.find(".jqx-kanban-column-header-title").css("left", -p + "px"), g.find(".jqx-kanban-column-header-status").css("left", -p + "px")
                }
                b.columns[f].collapsible === !1 && g.find(".jqx-kanban-column-header-button").hide()
            }
            1 == c && b.host.find(".jqx-kanban-column-header-button").hide()
        },
       _calculateColumnDimensions: function(b) {
            var c = this,
                d = [],
                e = 100 / b,
                f = 100,
                g = 100;
            return 0 == this.host.height() && this.host.height(400), 0 == this.host.width() && this.host.width(600), c._ie7 ? (e = this.host.width() / b - (this._columnBorders[1] + this._columnBorders[3]), f = this.host.height() - (this._columnBorders[0] + this._columnBorders[2]), g = f - this.headerHeight, e += "px", f += "px", g += "px") : (g = this.host.height() - a("#" + c._kanbanId + " div.jqx-kanban-column-header").outerHeight(), e += "%", f += "%", g += "px"), d.push(e), d.push(f), d.push(g), d
        },
        _calculateContainerDimensions: function(a) {
            var b = this,
                c = [],
                d = 100,
                e = 100;
            return b._ie7 ? (d = this.host.width() / a - 20, e = this.host.height() - this.headerHeight, d += "px", e += "px") : (e = this.host.height() - this.headerHeight, d += "%", e += "px"), c.push(d), c.push(e), c
        },
        _addCSS: function() {
            var b = this;
            if (a(b.host).addClass(b.toThemeProperty("jqx-kanban")), a("#" + b._kanbanId + " div.jqx-kanban-column").addClass(b.toThemeProperty("jqx-widget-content")), a("#" + b._kanbanId + " div.jqx-kanban-column-header").addClass(b.toThemeProperty("jqx-widget-header")), a("#" + b._kanbanId + " div.jqx-kanban-column-header-collapsed").addClass(b.toThemeProperty("jqx-widget-header")), a("#" + b._kanbanId + " div.jqx-kanban-column-container").addClass(b.toThemeProperty("jqx-widget-content")), b._ie8 || b._ie7 ? a("#" + b._kanbanId + "-column-0").addClass(b.toThemeProperty("jqx-kanban-column-first")) : (b._columnBorders[0] = a("#" + b._kanbanId + " div.jqx-kanban-column:first-of-type").css("border-top-width").slice(0, -2), b._columnBorders[1] = a("#" + b._kanbanId + " div.jqx-kanban-column:first-of-type").css("border-right-width").slice(0, -2), b._columnBorders[2] = a("#" + b._kanbanId + " div.jqx-kanban-column:first-of-type").css("border-bottom-width").slice(0, -2), b._columnBorders[3] = a("#" + b._kanbanId + " div.jqx-kanban-column:first-of-type").css("border-top-width").slice(0, -2)), "bottomToTop" == b.verticalTextOrientation) {
                var c = a("#" + b._kanbanId).find(".jqx-kanban-column-vertical-container");
                c.removeClass("jqx-kanban-column-vertical-container"), c.addClass("jqx-kanban-column-vertical-container-inverse")
            }
        },
        _rtlCheck: function() {
            var b = this;
            1 == b.rtl && (a(b.host).addClass(b.toThemeProperty("jqx-kanban-rtl")), a("#" + b._kanbanId + " div.jqx-kanban-column-container").addClass(b.toThemeProperty("jqx-kanban-rtl")), a("#" + b._kanbanId + " div.jqx-kanban-item-keyword").addClass(b.toThemeProperty("jqx-kanban-item-keyword-rtl")))
        },
        _serializeSource: function(a) {
            var b = this;
            b._source = [], b._sourceKeys = [];
            var c = function(c) {
                    if (c) {
                        for (var d = 0; d < c.length; d++) {
                            var e = {};
                            e.id = void 0 != c[d].id ? c[d].id : b.element.id + "_" + d, e.status = c[d].status || b.templateContent.status, e.text = c[d].text || b.templateContent.text, e.content = c[d].content || b.templateContent.content, e.tags = c[d].tags || b.templateContent.tags, e.color = c[d].color || b.templateContent.color, e.resourceId = c[d].resourceId || b.templateContent.resourceId, e.className = c[d].className || b.templateContent.className, b._source.push(e), b._sourceKeys[e.id] = e
                        }
                        a()
                    }
                },
                d = b.source && b.source.dataBind;
            if (d) {
                var e = b.element.id;
                if (b.source.unbindBindingUpdate(e), b.source.dataBind(), 0 == b.source.records.length) {
                    var f = function() {
                        c(b.source.records)
                    };
                    b.source.unbindDownloadComplete(e), b.source.bindDownloadComplete(e, f)
                } else c(b.source.records);
                return b.source.unbindBindingUpdate(e), void b.source.bindBindingUpdate(e, function() {
                    c(b.source.records)
                })
            }
            c(b.source)
        },
        _populateKanban: function(b) {
            var c = this,
                d = 0;
            null !== c._source && (d = c._source.length || 0), c._resources = new Array;
            var e = function(e) {
                    if (c._resources = e, null !== e && void 0 !== e) {
                        c._resourcesLength = e.length;
                        for (var f = 0; f < c._resourcesLength; f++) 1 == e[f].common && (c._commonItem = e[f])
                    }
                    for (var f = 0; f < d; f++) {
                        var g = a(c.template);
                        g.data("kanban-item-id", c._source[f].id);
                        for (var h = c._commonItem, i = 0; i < c._resourcesLength; i++) e[i].id == c._source[f].resourceId && (h = e[i]);
                        var j = "<img class='jqx-kanban-item-avatar-image' alt='" + h.name + "' title='" + h.name + "' src='" + h.image + "' />";
                        g.addClass(c.toThemeProperty("jqx-rc-all")), g.find(".jqx-kanban-item-avatar").append(j), "" != c.theme && g.addClass(c.toThemeProperty("jqx-kanban-item"));
                        var k = c.host.find("[data-kanban-column-container='" + c._source[f].status + "']");
                        g.find(".jqx-kanban-item-color-status").css({
                            "background-color": c._source[f].color
                        }), c.rtl && (g.find(".jqx-kanban-item-color-status").addClass("jqx-kanban-item-color-status-rtl"), g.find(".jqx-kanban-item-avatar").addClass("jqx-kanban-item-avatar-rtl")), g.find(".jqx-kanban-item-text").append(c._source[f].text), g.find(".jqx-kanban-item-content").append(c._source[f].content);
                        var l = "",
                            m = [];
                        null !== c._source[f].tags && void 0 !== c._source[f].tags && (m = c._source[f].tags.replace(/\,\s/g, ",").split(",")), m.forEach(function(a) {
                            l = l + "<div class='" + c.toThemeProperty("jqx-kanban-item-keyword jqx-fill-state-normal jqx-rc-all") + "'>" + a + "</div>"
                        }), l += c._clearing, g.find(".jqx-kanban-item-footer").append(l), g.append(c._clearing), g.attr("id", c._kanbanId + "_" + c._source[f].id), null !== c._source[f].className && void 0 !== c._source[f].className && g.addClass(c.toThemeProperty(c._source[f].className)), c.itemRenderer && c.itemRenderer(g, c._source[f], h), k.append(g), c._items[c._source[f].id] = g
                    }
                    b()
                },
                f = c.resources && c.resources.dataBind;
            if (f) {
                var g = c.element.id;
                if (c.resources.dataBind(), 0 == c.resources.records.length) {
                    var h = function() {
                        e(c.resources.records)
                    };
                    c.resources.unbindDownloadComplete(g), c.resources.bindDownloadComplete(g, h)
                } else e(c.resources.records);
                return c.resources.unbindBindingUpdate(g), void c.resources.bindBindingUpdate(g, function() {
                    e(c.resources.records)
                })
            }
            c._resources = c.resources, e(c.resources), a("#" + c._kanbanId + " div.jqx-kanban-item").addClass(this.toThemeProperty("jqx-widget-content"))
        },
        _ready: function() {
            var a = this;
            null != a.ready && "function" == typeof a.ready && a.ready()
        },
        /*collapseColumn: function(a) {
            for (var b = 0; b < this.columns.length; b++)
                if (this.columns[b].dataField == a) return this._collapseColumn(b), !0;
            return !1
        },*/
        expandColumn: function(a) {
            for (var b = 0; b < this.columns.length; b++)
                if (this.columns[b].dataField == a) return this._expand(b), !0;
            return !1
        },
      /*  _collapseColumn: function(b) {
            var c = this,
                d = b || 0;
            a("#" + c._kanbanId + "-column-header-collapsed-" + d).addClass(c.toThemeProperty("jqx-kanban-column-header-collapsed-show")), a("#" + c._kanbanId + "-column-header-" + d).addClass(c.toThemeProperty("jqx-kanban-column-hide")), a("#" + c._kanbanId + "-column-container-" + d).addClass(c.toThemeProperty("jqx-kanban-column-hide")), (c._ie8 || c._ie7) && (a("#" + c._kanbanId + " .jqx-kanban-column-vertical-container").addClass(c.toThemeProperty("jqx-kanban-column-vertical-container-ie8-fix")), a("#" + c._kanbanId + " .jqx-kanban-column-vertical-container-inverse").addClass(c.toThemeProperty("jqx-kanban-column-vertical-container-inverse-ie8-fix"))), c._columns[d].data("kanban-column-collapsed", !0), c.columns[d].collapsed = !0, c._calculateExpandedColumnsWidth(), c._raiseEvent("7", {
                column: c.columns[d]
            })
        },*/
        _expandColumn: function(b) {
            var c = this,
                d = b || 0;
            a("#" + c._kanbanId + "-column-header-collapsed-" + d).removeClass(c.toThemeProperty("jqx-kanban-column-header-collapsed-show")), a("#" + c._kanbanId + "-column-header-" + d).removeClass(c.toThemeProperty("jqx-kanban-column-hide")), a("#" + c._kanbanId + "-column-container-" + d).removeClass(c.toThemeProperty("jqx-kanban-column-hide")), c.columns[d].collapsed = !1, c._columns[d].data("kanban-column-collapsed", !1), c._calculateExpandedColumnsWidth(), c._raiseEvent("8", {
                column: c.columns[d]
            })
        },
        _calculateExpandedColumnsWidth: function() {
            var a = this,
                b = a._columns.length;
            a._collapsedColumns = 0, a._expandedColumns = 0;
            for (var c = 0, d = a.headerWidth, e = 0; e < b; e++) 1 == a._columns[e].data("kanban-column-collapsed") ? a._collapsedColumns++ : a._expandedColumns++;
            c = (a.host.width() - a.headerWidth * a._collapsedColumns) / a._expandedColumns;
            var f = c - (this._columnBorders[1] + this._columnBorders[3]);
            if (a._ie7 && (c = f, d = a.headerWidth - 2), a.width && a.width.toString().indexOf("%") >= 0)
                for (var g = (a.host.width() + 2) / 100, h = 1 / g, i = d * h, e = 0; e < b; e++) 1 == a._columns[e].data("kanban-column-collapsed") ? a._columns[e][0].style.width = i + "%" : a._columns[e][0].style.width = c * h + "%";
            else
                for (var e = 0; e < b; e++) 1 == a._columns[e].data("kanban-column-collapsed") ? a._columns[e].outerWidth(d) : a._columns[e].outerWidth(c)
        },
        _handlerExpandCollapse: function() {
            var b = this;
            b.addHandler(a("#" + b._kanbanId + " .jqx-kanban-column-header"), "click", function(c) {
                var d = a(this).parent().index(),
                    e = b.columns[d],
                    f = {
                        attribute: "title",
                        column: e,
                        cancelToggle: !1
                    };
                if (a(c.target).parent()[0].className.indexOf("jqx-kanban-column-header-custom-button") >= 0) var f = {
                    attribute: "button",
                    column: e,
                    cancelToggle: !1
                };
                /*
                if (b._raiseEvent("10", f), !f.cancelToggle && b._expandedColumns > 1) {
                    if (e.collapsible === !1) return;
                    b._collapseColumn(d)
                }*/
            }), b.addHandler(a("#" + b._kanbanId + " .jqx-kanban-column-header-collapsed"), "click", function(c) {
                var d = a(this).parent().index(),
                    d = a(this).parent().index(),
                    e = b.columns[d],
                    f = {
                        attribute: "title",
                        cancelToggle: !1,
                        column: e
                    };
                if (a(c.target).parent()[0].className.indexOf("jqx-kanban-column-header-custom-button") >= 0) var f = {
                    attribute: "button",
                    cancelToggle: !1,
                    column: e
                };
                b._raiseEvent("10", f), f.cancelToggle || b._expandColumn(d)
            })
        },
        _setKanbanConnections: function() {
            var a = this;
            if (a._kanbanColumns = "#" + a._kanbanId + " div.jqx-kanban-column-container", a._connectWith = a._kanbanColumns, null != a.connectWith) {
                var b = a.connectWith.replace(/\,\s/g, ",").split(",");
                b.forEach(function(b) {
                    a._connectWith = a._connectWith + ", " + b + " div.jqx-kanban-column-container"
                })
            }
        },
        _transformToSortable: function() {
            for (var b = this, c = 0; c < a(b._kanbanColumns).length; c++) a(a(b._kanbanColumns)[c]).jqxSortable({
                connectWith: b._connectWith,
                maxItems: b.columns[c].maxItems || 9999,
                cancel: ".jqx-kanban-column-container-cancel",
                placeholderShow: "jqx-kanban-item-placeholder",
                revert: b.animationDelay,
                cursor: "move",
                tolerance: "pointer",
                containment: "window"
            });
            a.jqx.utilities.resize(b.host, null, !0), a.jqx.utilities.resize(b.host, function() {
                for (var c = 0; c < a(b._kanbanColumns).length; c++) a(a(b._kanbanColumns)[c]).jqxSortable({
                    containment: "window"
                })
            }), null !== b.handle && (a(b._kanbanColumns).jqxSortable({
                handle: "." + b.handle
            }), a("#" + b._kanbanId + " ." + b.handle).addClass("jqx-kanban-handle"))
        },
        _calculateItemsPerColumn: function(a) {},
        _calculateRestrictions: function() {},
        _redrawColumnHeader: function(a, b) {},
        addItem: function(b) {
            var c = this,
                d = b.id,
                e = null != c._source ? c._source.length : 0;
            void 0 == d && (d = e);
            var f = c._kanbanId + "_" + d;
            c._source = null != c._source ? c._source : [];
            var g = null;
            c._css_color_names.indexOf(b.color) > -1 ? g = b.color : /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(b.color) ? g = b.color : /(^[0-9A-F]{6}$)|(^[0-9A-F]{3}$)/i.test(b.color) && (g = "#" + b.color);
            var h = {
                    id: d,
                    status: b.status || c.templateContent.status,
                    text: b.text || c.templateContent.text,
                    content: b.content || c.templateContent.content,
                    tags: b.tags || c.templateContent.tags,
                    color: g || c.templateContent.color,
                    resourceId: b.resourceId || c.templateContent.resourceId,
                    className: b.className || c.templateContent.className
                },
                i = this.getColumn(h.status);
            if (i.maxItems || (i.maxItems = 9999), !(i.maxItems < this.getColumnItems(i.dataField).length + 1)) {
                for (var j = c._commonItem, k = 0; k < c._resources.length; k++) c._resources[k].id == h.resourceId && (j = c._resources[k]);
                var l = c.host.find("[data-kanban-column-container='" + h.status + "']"),
                    b = a(c.template);
                "" != c.theme && b.addClass(c.toThemeProperty("jqx-kanban-item")), b.find(".jqx-kanban-item-color-status").css({
                    "background-color": h.color
                });
                var m = "<img class='jqx-kanban-item-avatar-image' alt='" + j.name + "' title='" + j.name + "' src='" + j.image + "' />";
                b.find(".jqx-kanban-item-avatar").append(m), b.find(".jqx-kanban-item-text").append(h.text), b.find(".jqx-kanban-item-content").append(h.content);
                var n = h.tags.replace(/\,\s/g, ",").split(","),
                    o = "";
                n.forEach(function(a) {
                    o = o + "<div class='" + c.toThemeProperty("jqx-kanban-item-keyword jqx-fill-state-normal jqx-rc-all") + "'>" + a + "</div>"
                }), o += "<div style='clear:both'></div>", b.find(".jqx-kanban-item-footer").append(o), l.append(b), a("#" + c._kanbanId + " .jqx-kanban-item").removeClass(this.toThemeProperty("jqx-widget-content jqx-rc-all")), a("#" + c._kanbanId + " .jqx-kanban-item").addClass(this.toThemeProperty("jqx-widget-content jqx-rc-all")), b.attr("id", f), c._source[e] = h, c._sourceKeys[d] = h, b.data("kanban-item-id", e), null !== h.className && void 0 !== h.className && b.addClass(this.toThemeProperty(h.className)), c.itemRenderer && c.itemRenderer(b, h, j);
                var i = this.getColumn(h.status);
                i && c.columnRenderer && (c.columnRenderer(i.headerElement, i.collapsedHeaderElement, i), c._updateColumnTitle(i)), c._raiseEvent("2", {
                    itemId: f
                }), c._refreshEventHandlers()
            }
        },
        _updateColumnTitle: function(a) {
            if ("left" == a.collapseDirection) {
                var b = a.headerElement.find(".jqx-kanban-column-header-title").width();
                b += a.headerElement.find(".jqx-kanban-column-header-status").width(), b -= 10, a.headerElement.find(".jqx-kanban-column-header-title").css("left", -b + "px"), a.headerElement.find(".jqx-kanban-column-header-status").css("left", -b + "px")
            }
        },
        _selectItem: function(b) {
            var c = this,
                d = b.data.self;
            d._selectedItemId = a(c).attr("id"), a("#" + d._kanbanId + " .jqx-kanban-item").removeClass(d.toThemeProperty("jqx-kanban-item-selected")), a(c).addClass(d.toThemeProperty("jqx-kanban-item-selected"));
            var e = a(this).data().kanbanItemId;
            d._selectedId = e, d._raiseEvent("1", {
                item: d._sourceKeys[e]
            }), d._refreshEventHandlers()
        },
        selectItem: function(b) {
            var c = this,
                d = a("#" + c._kanbanId + "_" + b);
            0 != d.length && (a("#" + self._kanbanId + " .jqx-kanban-item").removeClass(self.toThemeProperty("jqx-kanban-item-selected")), a(d).addClass(c.toThemeProperty("jqx-kanban-item-selected")), c._selectedId = b)
        },
        _selectColumn: function(b) {
            for (var c, d, e = this, f = b.data.self, g = a(e).attr("data-column-data-field"), h = f.columns.length, i = 0; i < h; i++) f.columns[i].dataField == g && (d = i), f.columns[i].dataField == f._selectedColumn && (c = i);
            a("#" + f._kanbanId + " .jqx-kanban-column").removeClass(f.toThemeProperty("jqx-kanban-column-selected")),
                a(e).addClass(f.toThemeProperty("jqx-kanban-column-selected")), null != f._selectedColumn && f._selectedColumn != g && f._raiseEvent("6", {
                    column: f._selectedColumn,
                    dataField: c
                }), f._selectedColumn = g, f._raiseEvent("5", {
                    column: f._selectedColumn,
                    dataField: d
                })
        },
        getSelectedColumn: function() {
            var a = this;
            return a._selectedColumn
        },
        _removeSourceIndexById: function(b) {
            var c = this,
                d = -1;
            a.each(c._source, function(a, c) {
                if (this && this.id == b) return d = a, !1
            }), d != -1 && c._source.splice(d, 1), c._sourceKeys[b] = null, delete c._sourceKeys[b]
        },
        removeItem: function(b) {
            var c = this,
                d = "#" + c._kanbanId + "_" + b,
                e = b.toString().replace(c._kanbanId + "_", "");
            a(d).remove();
            var f = this.getColumn(c._sourceKeys[b].status);
            c._items[e] = null, c._removeSourceIndexById(b), c._sourceKeys[b] = null, f && c.columnRenderer && (c.columnRenderer(f.headerElement, f.collapsedHeaderElement, f), c._updateColumnTitle(f)), c._selectedItemId = null
        },
        updateItem: function(b, c) {
            var d = this,
                e = a("#" + d._kanbanId + "_" + b);
            if (0 != e.length) {
                var f = e.data("kanban-item-id"),
                    g = d._sourceKeys[f],
                    h = g.className || "",
                    i = null;
                d._css_color_names.indexOf(c.color) > -1 ? i = c.color : /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(c.color) ? i = c.color : /(^[0-9A-F]{6}$)|(^[0-9A-F]{3}$)/i.test(c.color) ? i = "#" + c.color : c.color && (i = c.color);
                var j = {
                    id: g.id,
                    status: g.status,
                    text: c.text || g.text,
                    content: c.content || g.content,
                    tags: c.tags || g.tags,
                    color: i || g.color,
                    resourceId: c.resourceId || g.resourceId,
                    className: c.className || g.className
                };
                d._source[f] = j, d._sourceKeys[f] = j;
                for (var k = d._commonItem, l = 0; l < d._resources.length; l++) d._resources[l].id == j.resourceId && (k = d._resources[l]);
                var m = "<img class='jqx-kanban-item-avatar-image' alt='" + k.name + "' title='" + k.name + "' src='" + k.image + "' />";
                e.find(".jqx-kanban-item-avatar").html(m), e.find(".jqx-kanban-item-color-status").css({
                    "background-color": j.color
                }), e.find(".jqx-kanban-item-text").html(j.text), e.find(".jqx-kanban-item-content").html(j.content);
                var n = j.tags.replace(/\,\s/g, ",").split(","),
                    o = "";
                n.forEach(function(a) {
                    o = o + "<div class='" + d.toThemeProperty("jqx-kanban-item-keyword jqx-fill-state-normal jqx-rc-all") + "'>" + a + "</div>"
                }), o += "<div style='clear:both'></div>", e.find(".jqx-kanban-item-footer").html(o), null !== j.className && void 0 !== j.className && (e.removeClass(this.toThemeProperty(h)), e.addClass(this.toThemeProperty(j.className))), d.itemRenderer && d.itemRenderer(e, j, k);
                var p = this.getColumn(j.status);
                p && d.columnRenderer && (d.columnRenderer(p.headerElement, p.collapsedHeaderElement, p), d._updateColumnTitle(p))
            }
        },
        getSelectedItem: function() {
            var a = this,
                b = a._sourceKeys[a._selectedId];
            return b
        },
        getColumn: function(a) {
            for (var b = 0; b < this.columns.length; b++)
                if (this.columns[b].dataField == a) return this.columns[b];
            return null
        },
        getColumnItems: function(a) {
            for (var b = this, c = [], d = b._source.length, e = 0; e < d; e++) null != b._source[e] && b._source[e].status == a && c.push(b._source[e]);
            return c
        },
        getItems: function() {
            var a = this;
            return null !== a._source ? a._source.filter(function(a) {
                return null != a
            }) : null
        },
        _ie8Plugin: function() {
            "function" != typeof Array.prototype.forEach && (Array.prototype.forEach = function(a) {
                for (var b = 0; b < this.length; b++) a.apply(this, [this[b], b, this])
            }), window.getComputedStyle || (window.getComputedStyle = function(a, b) {
                return this.el = a, this.getPropertyValue = function(b) {
                    var c = /(\-([a-z]){1})/g;
                    return "float" == b && (b = "styleFloat"), c.test(b) && (b = b.replace(c, function() {
                        return arguments[2].toUpperCase()
                    })), a.currentStyle[b] ? a.currentStyle[b] : null
                }, this
            })
        },
        _addEventHandlers: function() {
            var b = this;
            b.addHandler(a(window), "resize.kanban" + b.element.id, function(a) {
               b._calculateExpandedColumnsWidth()
            }), b.addHandler(a(b._kanbanColumns), "start", function(c) {
                b._selectedItemId = c.args.item[0].id, b._draggedItemId = b._selectedItemId, b._draggedItemDataId = a("#" + b._draggedItemId).data().kanbanItemId, b._draggedItemValues = b._sourceKeys[b._draggedItemDataId], b._selectedItemValues = b._draggedItemValues;
                var d = a("#" + b._draggedItemId).height();
                a(".jqx-kanban-item-placeholder").height(d)
            }), b.addHandler(a(b._kanbanColumns), "stop", function(c) {
                for (var d = a("#" + b._draggedItemId).parent().attr("data-kanban-column-container"), e = d, f = null, g = 0; g < b.columns.length; g++)
                    if (b.columns[g].dataField == e) {
                        f = b.columns[g];
                        break
                    }
                if (b._sourceKeys[b._draggedItemDataId]) {
                    for (var h = null, i = a("#" + b._kanbanId).jqxKanban("columns"), j = b._sourceKeys[b._draggedItemDataId].status, g = 0; g < i.length; g++)
                        if (i[g].dataField == j) {
                            h = i[g];
                            break
                        }
                    if (b._kanbanId !== b._dropKanbanId) {
                        b._raiseEvent("3", {
                            oldParentId: b._kanbanId,
                            newParentId: b._dropKanbanId,
                            itemId: b._selectedId,
                            newColumn: f,
                            oldColumn: h,
                            itemData: b._draggedItemValues
                        });
                        b._source.length;
                        b._draggedItemValues.status = d, a("#" + b._dropKanbanId).trigger("_itemReceived", [b._selectedItemId, b._kanbanId, b._dropKanbanId, b._draggedItemValues, b._selectedId, f, h]), b._sourceKeys[b._draggedItemDataId] = null
                    } else b._raiseEvent("3", {
                        newColumn: f,
                        oldColumn: h,
                        oldParentId: b._kanbanId,
                        newParentId: b._dropKanbanId,
                        itemId: b._selectedId,
                        itemData: b._draggedItemValues
                    }), b._raiseEvent("4", {
                        newColumn: f,
                        oldColumn: h,
                        oldParentId: b._kanbanId,
                        newParentId: b._dropKanbanId,
                        itemId: b._selectedId,
                        itemData: b._draggedItemValues
                    }), b._sourceKeys[b._draggedItemDataId].status = d;
                    if (b.columnRenderer)
                        for (var g = 0; g < b.columns.length; g++) b.columns[g].dataField == e && (b.columnRenderer(b.columns[g].headerElement, b.columns[g].collapsedHeaderElement, b.columns[g]), b._updateColumnTitle(b.columns[g])), b.columns[g].dataField == j && (b.columnRenderer(b.columns[g].headerElement, b.columns[g].collapsedHeaderElement, b.columns[g]), b._updateColumnTitle(b.columns[g]))
                }
                b._draggedItemDataId = null, b._draggedItemId = null, b._draggedItemValues = null
            }), b.addHandler(a(b._kanbanColumns), "sort", function(c) {
                b._dropKanbanId = a(".jqx-kanban-item-placeholder").parent().parent().parent().attr("id")
            }), b.addHandler(a(b.host), "_itemReceived", function(c, d, e, f, g) {
                b._raiseEvent("4", {
                    itemId: d,
                    oldParentId: e,
                    newParentId: f,
                    itemData: g
                });
                var h = a("#" + d),
                    i = a(b.template);
                "" != b.theme && i.addClass(b.toThemeProperty("jqx-kanban-item")), i.data("kanban-item-id", g.id);
                for (var j = b._commonItem, k = 0; k < b._resources.length; k++) b._resources[k].id == g.resourceId && (j = b._resources[k]);
                var l = "<img class='jqx-kanban-item-avatar-image' alt='" + j.name + "' title='" + j.name + "' src='" + j.image + "' />";
                i.find(".jqx-kanban-item-avatar").append(l), i.find(".jqx-kanban-item-text").append(g.text), i.find(".jqx-kanban-item-color-status").css({
                    "background-color": g.color
                }), i.find(".jqx-kanban-item-content").append(g.content);
                var m = g.tags.replace(/\,\s/g, ",").split(","),
                    n = "";
                m.forEach(function(a) {
                    n = n + "<div class='" + b.toThemeProperty("jqx-kanban-item-keyword jqx-fill-state-normal jqx-rc-all") + "'>" + a + "</div>"
                }), n += "<div style='clear:both'></div>", i.find(".jqx-kanban-item-footer").append(n), i.attr("id", b._kanbanId + "_" + g.id), h.replaceWith(i), a("#" + f + " div.jqx-kanban-item").addClass(b.toThemeProperty("jqx-widget-content")), null !== g.className && void 0 !== g.className && i.addClass(b.toThemeProperty(g.className)), a("#" + f + " div.jqx-kanban-item").removeClass(b.toThemeProperty("jqx-kanban-item-selected")), a("#" + d).addClass(b.toThemeProperty("jqx-kanban-item-selected")), a("#" + f).jqxKanban("_refreshEventHandlers"), b._source.push(g);
                var o = a("#" + f).jqxKanban("getInstance"),
                    p = a("#" + e).jqxKanban("getInstance");
                if (o._sourceKeys[g.id] = g, p._removeSourceIndexById(g.id), o.columnRenderer)
                    for (var q = 0; q < o.columns.length; q++) o.columnRenderer(o.columns[q].headerElement, o.columns[q].collapsedHeaderElement, o.columns[q]);
                if (p.columnRenderer)
                    for (var q = 0; q < p.columns.length; q++) p.columnRenderer(p.columns[q].headerElement, p.columns[q].collapsedHeaderElement, p.columns[q])
            }), b.addHandler(a("#" + b._kanbanId + " .jqx-kanban-item"), "click", b._selectItem, {
                self: this
            }), b.addHandler(a("#" + b._kanbanId + " .jqx-kanban-column"), "click", b._selectColumn, {
                self: this
            }), b.addHandler(a(".jqx-kanban-item-color-status, .jqx-kanban-item-avatar, .jqx-kanban-item-text, .jqx-kanban-item-content, .jqx-kanban-item-keyword, .jqx-kanban-item-template-content"), "click", function() {
                for (var c = "jqx-kanban-item-color-status jqx-kanban-item-avatar jqx-kanban-item-text jqx-kanban-item-content jqx-kanban-item-keyword jqx-kanban-item-template-content".split(" "), d = a(this).attr("class").split(" "), e = d.length, f = null, g = a(this).parents(".jqx-kanban-item").data().kanbanItemId, h = {
                        attribute: null,
                        item: b._sourceKeys[g],
                        itemId: g
                    }, i = 0; i < e; i++) c.indexOf(d[i]) > -1 && (f = d[i]);
                switch (f) {
                    case "jqx-kanban-item-color-status":
                        h.attribute = "colorStatus";
                        break;
                    case "jqx-kanban-item-avatar":
                        h.attribute = "avatar";
                        break;
                    case "jqx-kanban-item-text":
                        h.attribute = "text";
                        break;
                    case "jqx-kanban-item-content":
                        h.attribute = "content";
                        break;
                    case "jqx-kanban-item-keyword":
                        h.attribute = "keyword";
                        break;
                    case "jqx-kanban-item-template-content":
                        h.attribute = "template"
                }
                b._raiseEvent("9", h)
            })
        },
        destroy: function() {
            var b = this;
            a.jqx.utilities.resize(b.host, null, !0), b._removeEventHandlers(), b.host.remove()
        },
        _removeEventHandlers: function() {
            var b = this;
            b.removeHandler(a(window), "resize.kanban" + b.element.id), b.removeHandler(a(b._kanbanColumns), "start"), b.removeHandler(a(b._kanbanColumns), "stop"), b.removeHandler(a(b._kanbanColumns), "sort"), b.removeHandler(a(b.host), "_itemReceived"), b.removeHandler(a("#" + b._kanbanId + " .jqx-kanban-item"), "click"), b.removeHandler(a("#" + b._kanbanId + " .jqx-kanban-column"), "click"), b.removeHandler(a(".jqx-kanban-item-color-status, .jqx-kanban-item-avatar, .jqx-kanban-item-text, .jqx-kanban-item-content, .jqx-kanban-item-keyword, .jqx-kanban-item-template-content"), "click")
        },
        _refreshEventHandlers: function() {
            var a = this;
            a._removeEventHandlers(), a._addEventHandlers()
        },
        _raiseEvent: function(b, c) {
            that = this;
            var d = a.Event(that._events[b]);
            return d.args = c, that.host.trigger(d)
        },
        _getEvent: function(a) {
            return that = this, that._isTouchDevice ? that._touchEvents[a] : a
        }
    })
}(jqxBaseFramework);
