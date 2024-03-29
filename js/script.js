"use strict";
! function () {
    let t = navigator.userAgent.toLowerCase(),
        e = -1 !== t.indexOf("msie") ? parseInt(t.split("msie")[1], 10) : -1 !== t.indexOf("trident") ? 11 : -1 !== t.indexOf("edge") && 12;
    if (!1 !== e && e < 12) {
        var a = document.createElement("script");
        a.src = "./js/support.js", document.querySelector("head").appendChild(a)
    }
    let o = new Date,
        r = $(document),
        i = $(window),
        n = $("html"),
        l = $("body"),
        s = n.hasClass("desktop"),
        c = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
        d = !1,
        u = !1,
        p = {
            bootstrapTooltip: $('[data-bs-toggle="tooltip"]'),
            bootstrapModal: $(".modal"),
            bootstrapTabs: $(".tabs-custom"),
            bootstrapCards: $(".card-group-custom"),
            customToggle: $("[data-custom-toggle]"),
            captcha: $(".recaptcha"),
            campaignMonitor: $(".campaign-mailform"),
            copyrightYear: $(".copyright-year"),
            checkbox: $('input[type="checkbox"]'),
            isotope: $(".isotope-wrap"),
            lightGallery: $('[data-lightgallery="group"]'),
            lightGalleryItem: $('[data-lightgallery="item"]'),
            lightDynamicGalleryItem: $('[data-lightgallery="dynamic"]'),
            materialParallax: $(".parallax-container"),
            mailchimp: $(".mailchimp-mailform"),
            owl: document.querySelectorAll(".owl-carousel"),
            popover: $('[data-bs-toggle="popover"]'),
            preloader: $(".preloader"),
            rdNavbar: document.querySelectorAll(".rd-navbar"),
            rdMailForm: $(".rd-mailform"),
            rdInputLabel: $(".form-label"),
            regula: $("[data-constraints]"),
            radio: $('input[type="radio"]'),
            swiper: document.querySelectorAll(".swiper-container"),
            search: $(".rd-search"),
            searchResults: $(".rd-search-results"),
            statefulButton: $(".btn-stateful"),
            viewAnimate: $(".view-animate"),
            wow: $(".wow"),
            maps: $(".google-map-container"),
            counter: document.querySelectorAll("[data-counter]"),
            progressLinear: document.querySelectorAll(".progress-linear"),
            progressCircle: document.querySelectorAll(".progress-circle"),
            countdown: document.querySelectorAll(".countdown"),
            accordion: document.querySelectorAll(".accordion"),
            multiswitch: document.querySelectorAll("[data-multi-switch]"),
            imageHover: document.querySelectorAll(".image-hover"),
            modal: document.querySelectorAll(".modal"),
            modalBtn: document.querySelectorAll("[data-modal-trigger]"),
            slick: document.querySelectorAll(".slick-slider")
        };

    function m(t) {
        return !!u || t.offset().top + t.outerHeight() >= i.scrollTop() && t.offset().top <= i.scrollTop() + i.height()
    }

    function g(t) {
        try {
            return t ? JSON.parse(t) : {}
        } catch (t) {
            return {}
        }
    }
    i.on("load", (function () {
        if (p.preloader.length && !u && pageTransition({
                target: document.querySelector(".page"),
                delay: 0,
                duration: 500,
                classIn: "fadeIn",
                classOut: "fadeOut",
                classActive: "animated",
                conditions: function (t, e) {
                    return e && !/(\#|javascript:void\(0\)|callto:|tel:|mailto:|:\/\/)/.test(e) && !t.currentTarget.hasAttribute("data-lightgallery") && !t.currentTarget.matches('[target="_blank"]')
                },
                onTransitionStart: function (t) {
                    setTimeout((function () {
                        p.preloader.removeClass("loaded")
                    }), .75 * t.duration)
                },
                onReady: function () {
                    p.preloader.addClass("loaded"), d = !0
                }
            }), p.counter) {
            let t = new IntersectionObserver((function (t, e) {
                t.forEach((function (t) {
                    let a = t.target;
                    t.isIntersecting && (a.counter.run(), e.unobserve(a))
                }))
            }), {
                rootMargin: "0px",
                threshold: 1
            });
            p.counter.forEach((function (e) {
                let a = new bCounter(Object.assign({
                    node: e,
                    duration: 1e3,
                    autorun: !1
                }, g(e.getAttribute("data-counter"))));
                window.xMode ? a.run() : t.observe(e)
            }))
        }
        if (p.progressLinear)
            for (let t = 0; t < p.progressLinear.length; t++) {
                let e = p.progressLinear[t],
                    a = aCounter({
                        node: e.querySelector(".progress-linear-counter"),
                        duration: e.getAttribute("data-duration") || 1e3,
                        onStart: function () {
                            this.custom.bar.style.width = this.params.to + "%"
                        }
                    });
                a.custom = {
                    container: e,
                    bar: e.querySelector(".progress-linear-bar"),
                    onScroll: function () {
                        (Util.inViewport(this.custom.container) && !this.custom.container.classList.contains("animated") || u) && (this.run(), this.custom.container.classList.add("animated"))
                    }.bind(a),
                    onBlur: function () {
                        this.params.to = parseInt(this.params.node.textContent, 10), this.run()
                    }.bind(a)
                }, u ? (a.run(), a.params.node.addEventListener("blur", a.custom.onBlur)) : (a.custom.onScroll(), document.addEventListener("scroll", a.custom.onScroll))
            }
        if (p.progressCircle)
            for (let t = 0; t < p.progressCircle.length; t++) {
                let e = p.progressCircle[t],
                    a = aCounter({
                        node: e.querySelector(".progress-circle-counter"),
                        duration: 500,
                        onUpdate: function (t) {
                            this.custom.bar.render(3.6 * t)
                        }
                    });
                a.params.onComplete = a.params.onUpdate, a.custom = {
                    container: e,
                    bar: aProgressCircle({
                        node: e.querySelector(".progress-circle-bar")
                    }),
                    onScroll: function () {
                        Util.inViewport(this.custom.container) && !this.custom.container.classList.contains("animated") && (this.run(), this.custom.container.classList.add("animated"))
                    }.bind(a),
                    onBlur: function () {
                        this.params.to = parseInt(this.params.node.textContent, 10), this.run()
                    }.bind(a)
                }, u ? (a.run(), a.params.node.addEventListener("blur", a.custom.onBlur)) : (a.custom.onScroll(), window.addEventListener("scroll", a.custom.onScroll))
            }
        if (p.isotope.length)
            for (let t = 0; t < p.isotope.length; t++) {
                let a = p.isotope[t],
                    o = function (t) {
                        t.preventDefault();
                        for (let t = 0; t < this.isoGroup.filters.length; t++) this.isoGroup.filters[t].classList.remove("active");
                        this.classList.add("active"), this.isoGroup.isotope.arrange({
                            filter: "*" !== this.getAttribute("data-isotope-filter") ? '[data-filter*="' + this.getAttribute("data-isotope-filter") + '"]' : "*"
                        })
                    },
                    r = function () {
                        this.isoGroup.isotope.layout()
                    };
                a.isoGroup = {}, a.isoGroup.filters = a.querySelectorAll("[data-isotope-filter]"), a.isoGroup.node = a.querySelector(".isotope"), a.isoGroup.layout = a.isoGroup.node.getAttribute("data-isotope-layout") ? a.isoGroup.node.getAttribute("data-isotope-layout") : "masonry", a.isoGroup.isotope = new Isotope(a.isoGroup.node, {
                    itemSelector: ".isotope-item",
                    layoutMode: a.isoGroup.layout,
                    filter: "*",
                    columnWidth: a.isoGroup.node.hasAttribute("data-column-class") ? a.isoGroup.node.getAttribute("data-column-class") : a.isoGroup.node.hasAttribute("data-column-width") ? parseFloat(a.isoGroup.node.getAttribute("data-column-width")) : void 0
                });
                for (let t = 0; t < a.isoGroup.filters.length; t++) {
                    let e = a.isoGroup.filters[t];
                    e.isoGroup = a.isoGroup, e.addEventListener("click", o)
                }
                if (window.addEventListener("resize", r.bind(a)), !e) {
                    let t = document.querySelectorAll('img[loading="lazy"]');
                    for (let e = 0; e < t.length; e++) {
                        t[e].addEventListener("load", (function (t) {
                            window.dispatchEvent(new Event("resize"))
                        }))
                    }
                }
            }
        if (p.materialParallax.length)
            if (u || e || c)
                for (let t = 0; t < p.materialParallax.length; t++) {
                    let e = $(p.materialParallax[t]);
                    e.addClass("parallax-disabled"), e.css({
                        "background-image": "url(" + e.data("parallax-img") + ")"
                    })
                } else p.materialParallax.parallax()
    })), $((function () {
        function t(t) {
            return Object.prototype.toString.call(t).slice(8, -1)
        }

        function a(e, o) {
            for (let r in o) {
                let i = t(o[r]);
                "Object" === i ? ("object" != typeof e[r] && (e[r] = {}), e[r] = a(e[r], o[r])) : "Null" !== i && (e[r] = o[r])
            }
            return e
        }

        function c(e, a) {
            for (let o in e) {
                let r = t(e[o]),
                    i = t(a[o]);
                ["Object", "Array", "Number", "String", "Boolean", "Null", "Undefined"].indexOf(r) > -1 && ("Object" === r && r === i ? e[o] = c(e[o], a[o]) : "Undefined" === i || "Undefined" !== r && "Null" !== r && r !== i || (e[o] = a[o]))
            }
            return e
        }

        function d(t, e) {
            $("#" + t.live).removeClass("cleared").html(), t.current++, t.spin.addClass("loading"), $.get(e, {
                s: decodeURI(t.term),
                liveSearch: t.live,
                dataType: "html",
                liveCount: t.liveCount,
                filter: t.filter,
                template: t.template
            }, (function (e) {
                t.processed++;
                let a = $("#" + t.live);
                t.processed !== t.current || a.hasClass("cleared") || (a.find("> #search-results").removeClass("active"), a.html(e), setTimeout((function () {
                    a.find("> #search-results").addClass("active")
                }), 50)), t.spin.parents(".rd-search").find(".input-group-addon").removeClass("loading")
            }))
        }

        function h(t, e) {
            let a, o = 0;
            if (t.length) {
                for (let e = 0; e < t.length; e++) {
                    let r = $(t[e]);
                    if ((a = r.regula("validate")).length)
                        for (let t = 0; t < a.length; t++) o++, r.siblings(".form-validation").text(a[t].message).parent().addClass("has-error");
                    else r.siblings(".form-validation").text("").parent().removeClass("has-error")
                }
                return e && e.length ? f(e) && 0 === o : 0 === o
            }
            return !0
        }

        function f(t) {
            return 0 !== t.find(".g-recaptcha-response").val().length || (t.siblings(".form-validation").html("Please, prove that you are not robot.").addClass("active"), t.closest(".form-wrap").addClass("has-error"), t.on("propertychange", (function () {
                let t = $(this);
                t.find(".g-recaptcha-response").val().length > 0 && (t.closest(".form-wrap").removeClass("has-error"), t.siblings(".form-validation").removeClass("active").html(""), t.off("propertychange"))
            })), !1)
        }

        function v(t) {
            p.bootstrapTooltip.tooltip("dispose"), window.innerWidth < 576 ? p.bootstrapTooltip.tooltip({
                placement: "bottom"
            }) : p.bootstrapTooltip.tooltip({
                placement: t
            })
        }

        function b(t, e) {
            u || $(t).on("click", (function () {
                $(t).lightGallery({
                    thumbnail: "false" !== $(t).attr("data-lg-thumbnail"),
                    selector: "[data-lightgallery='item']",
                    autoplay: "true" === $(t).attr("data-lg-autoplay"),
                    pause: parseInt($(t).attr("data-lg-autoplay-delay")) || 5e3,
                    addClass: e,
                    mode: $(t).attr("data-lg-animation") || "lg-slide",
                    loop: "false" !== $(t).attr("data-lg-loop"),
                    dynamic: !0,
                    dynamicEl: JSON.parse($(t).attr("data-lg-dynamic-elements")) || []
                })
            }))
        }

        function y(t, e) {
            u || $(t).lightGallery({
                selector: "this",
                addClass: e,
                counter: !1,
                youtubePlayerParams: {
                    modestbranding: 1,
                    showinfo: 0,
                    rel: 0,
                    controls: 0
                },
                vimeoPlayerParams: {
                    byline: 0,
                    portrait: 0
                }
            })
        }

        function w(t, e, a, o) {
            let r = {};
            try {
                r = JSON.parse(t), o(new google.maps.LatLng(r.lat, r.lng), e, a)
            } catch (r) {
                a.geocoder.geocode({
                    address: t
                }, (function (t, r) {
                    if (r === google.maps.GeocoderStatus.OK) {
                        let r = t[0].geometry.location.lat(),
                            i = t[0].geometry.location.lng();
                        o(new google.maps.LatLng(parseFloat(r), parseFloat(i)), e, a)
                    }
                }))
            }
        }
        if (u = window.xMode, window.onloadCaptchaCallback = function () {
                for (let t = 0; t < p.captcha.length; t++) {
                    let e = $(p.captcha[t]),
                        a = function () {
                            let t = this.querySelector("iframe"),
                                e = this.firstElementChild,
                                a = e.firstElementChild,
                                o = null,
                                r = null,
                                i = null;
                            a.style.transform = "", e.style.height = "auto", e.style.width = "auto", o = this.getBoundingClientRect(), r = t.getBoundingClientRect(), i = o.width / r.width, i < 1 && (a.style.transform = "scale(" + i + ")", e.style.height = r.height * i + "px", e.style.width = r.width * i + "px")
                        }.bind(p.captcha[t]);
                    grecaptcha.render(e.attr("id"), {
                        sitekey: e.attr("data-sitekey"),
                        size: e.attr("data-size") ? e.attr("data-size") : "normal",
                        theme: e.attr("data-theme") ? e.attr("data-theme") : "light",
                        callback: function () {
                            $(".recaptcha").trigger("propertychange")
                        }
                    }), e.after("<span class='form-validation'></span>"), p.captcha[t].hasAttribute("data-auto-size") && (a(), window.addEventListener("resize", a))
                }
            }, p.captcha.length && $.getScript("//www.google.com/recaptcha/api.js?onload=onloadCaptchaCallback&render=explicit&hl=en"), navigator.platform.match(/(Mac)/i) && n.addClass("mac-os"), e && (12 === e && n.addClass("ie-edge"), 11 === e && n.addClass("ie-11"), e < 10 && n.addClass("lt-ie-10"), e < 11 && n.addClass("ie-10")), p.bootstrapTooltip.length) {
            let t = p.bootstrapTooltip.attr("data-bs-placement");
            v(t), i.on("resize orientationchange", (function () {
                v(t)
            }))
        }
        if (p.bootstrapModal.length)
            for (let t = 0; t < p.bootstrapModal.length; t++) {
                let e = $(p.bootstrapModal[t]);
                e.on("hidden.bs.modal", $.proxy((function () {
                    let t = $(this),
                        e = t.find("video"),
                        a = t.find("iframe");
                    if (e.length && e[0].pause(), a.length) {
                        let t = a.attr("src");
                        a.attr("src", "").attr("src", t)
                    }
                }), e))
            }
        if (p.popover.length && (window.innerWidth < 767 ? (p.popover.attr("data-bs-placement", "bottom"), p.popover.popover()) : p.popover.popover()), p.statefulButton.length && $(p.statefulButton).on("click", (function () {
                let t = $(this).button("loading");
                setTimeout((function () {
                    t.button("reset")
                }), 2e3)
            })), p.bootstrapTabs.length)
            for (let t = 0; t < p.bootstrapTabs.length; t++) {
                let e = $(p.bootstrapTabs[t]);
                e.find(".slick-slider").length && e.find(".tabs-custom-list > li > a").on("click", $.proxy((function () {
                    let t = $(this);
                    setTimeout((function () {
                        t.find(".tab-content .tab-pane.active .slick-slider").slick("setPosition")
                    }), u ? 1500 : 300)
                }), e));
                let a = p.bootstrapTabs[t].querySelectorAll(".nav li a");
                for (var x = 0; x < a.length; x++) {
                    var k = a[x],
                        C = document.querySelector(a[x].getAttribute("href"));
                    k.classList.remove("active", "show"), C.classList.remove("active", "show"), 0 === x && (k.classList.add("active", "show"), C.classList.add("active", "show"))
                }
            }
        if (p.bootstrapCards.length)
            for (let t = 0; t < p.bootstrapCards.length; t++) {
                let e = p.bootstrapCards[t].querySelectorAll(".card-header a");
                for (let t = 0; t < e.length; t++) {
                    let a = e[t];
                    a.classList.add("collapsed"), a.setAttribute("aria-expanded", "false"), 0 === t && (a.classList.remove("collapsed"), a.setAttribute("aria-expanded", "true"))
                }
            }
        if (p.copyrightYear.length && p.copyrightYear.text(o.getFullYear()), p.maps.length && function (t, e) {
                let a = function () {
                    !t.hasClass("lazy-loaded") && m(t) && (e.call(t), t.addClass("lazy-loaded"))
                };
                a(), i.on("scroll", a)
            }(p.maps, (function () {
                let t;
                for (let e = 0; e < p.maps.length; e++)
                    if (p.maps[e].hasAttribute("data-key")) {
                        t = p.maps[e].getAttribute("data-key");
                        break
                    } $.getScript("//maps.google.com/maps/api/js?" + (t ? "key=" + t + "&" : "") + "libraries=geometry,places&v=quarterly", (function () {
                    let t = document.getElementsByTagName("head")[0],
                        e = t.insertBefore;
                    t.insertBefore = function (a, o) {
                        a.href && -1 !== a.href.indexOf("//fonts.googleapis.com/css?family=Roboto") || -1 !== a.innerHTML.indexOf("gm-style") || e.call(t, a, o)
                    };
                    let a = new google.maps.Geocoder;
                    for (let t = 0; t < p.maps.length; t++) {
                        let e = parseInt(p.maps[t].getAttribute("data-zoom"), 10) || 11,
                            o = p.maps[t].hasAttribute("data-styles") ? JSON.parse(p.maps[t].getAttribute("data-styles")) : [],
                            r = p.maps[t].getAttribute("data-center") || "New York",
                            i = new google.maps.Map(p.maps[t].querySelectorAll(".google-map")[0], {
                                zoom: e,
                                styles: o,
                                scrollwheel: !1,
                                center: {
                                    lat: 0,
                                    lng: 0
                                }
                            });
                        p.maps[t].map = i, p.maps[t].geocoder = a, p.maps[t].keySupported = !0, p.maps[t].google = google, w(r, null, p.maps[t], (function (t, e, a) {
                            a.map.setCenter(t)
                        }));
                        let n = p.maps[t].querySelectorAll(".google-map-markers li");
                        if (n.length) {
                            let e = [];
                            for (let a = 0; a < n.length; a++) {
                                let o = n[a];
                                w(o.getAttribute("data-location"), o, p.maps[t], (function (t, a, o) {
                                    let r = a.getAttribute("data-icon") || o.getAttribute("data-icon"),
                                        n = (a.getAttribute("data-icon-active") || o.getAttribute("data-icon-active"), a.getAttribute("data-description") || ""),
                                        l = new google.maps.InfoWindow({
                                            content: n
                                        });
                                    a.infoWindow = l;
                                    let s = {
                                        position: t,
                                        map: o.map
                                    };
                                    r && (s.icon = r);
                                    let c = new google.maps.Marker(s);
                                    a.gmarker = c, e.push({
                                        markerElement: a,
                                        infoWindow: l
                                    }), c.isActive = !1, google.maps.event.addListener(l, "closeclick", function (t, e) {
                                        let a = null;
                                        t.gmarker.isActive = !1, a = t.getAttribute("data-icon") || e.getAttribute("data-icon"), t.gmarker.setIcon(a)
                                    }.bind(this, a, o)), google.maps.event.addListener(c, "click", function (t, a) {
                                        let o;
                                        if (0 === t.infoWindow.getContent().length) return;
                                        let r, n, l = t.gmarker;
                                        for (let i = 0; i < e.length; i++) e[i].markerElement === t && (n = e[i].infoWindow), r = e[i].markerElement.gmarker, r.isActive && e[i].markerElement !== t && (r.isActive = !1, o = e[i].markerElement.getAttribute("data-icon") || a.getAttribute("data-icon"), r.setIcon(o), e[i].infoWindow.close());
                                        l.isActive = !l.isActive, l.isActive ? ((o = t.getAttribute("data-icon-active") || a.getAttribute("data-icon-active")) && l.setIcon(o), n.open(i, c)) : ((o = t.getAttribute("data-icon") || a.getAttribute("data-icon")) && l.setIcon(o), n.close())
                                    }.bind(this, a, o))
                                }))
                            }
                        }
                    }
                }))
            })), p.radio.length)
            for (let t = 0; t < p.radio.length; t++) $(p.radio[t]).addClass("radio-custom").after("<span class='radio-custom-dummy'></span>");
        if (p.checkbox.length)
            for (let t = 0; t < p.checkbox.length; t++) $(p.checkbox[t]).addClass("checkbox-custom").after("<span class='checkbox-custom-dummy'></span>");
        if (s && !u && $().UItoTop({
                easingType: "easeOutQuad",
                containerClass: "ui-to-top mdi-chevron-up"
            }), p.rdNavbar.length && p.rdNavbar.forEach((function (t) {
                let e = t.querySelectorAll(".navbar-navigation-back-btn"),
                    a = g(t.getAttribute("data-rd-navbar")),
                    o = {
                        stickUpClone: !1,
                        anchorNav: !0,
                        autoHeight: !1,
                        stickUpOffset: "1px",
                        responsive: {
                            0: {
                                layout: "rd-navbar-fixed",
                                deviceLayout: "rd-navbar-fixed",
                                focusOnHover: "ontouchstart" in window,
                                stickUp: !1
                            },
                            992: {
                                layout: "rd-navbar-fixed",
                                deviceLayout: "rd-navbar-fixed",
                                focusOnHover: "ontouchstart" in window,
                                stickUp: !1
                            },
                            1200: {
                                layout: "rd-navbar-fullwidth",
                                deviceLayout: "rd-navbar-fullwidth",
                                stickUp: !0,
                                stickUpOffset: "1px"
                            }
                        },
                        callbacks: {
                            onStuck: function () {
                                document.documentElement.classList.add("rd-navbar-stuck")
                            },
                            onUnstuck: function () {
                                document.documentElement.classList.remove("rd-navbar-stuck")
                            },
                            onDropdownToggle: function () {
                                this.classList.contains("opened") ? this.parentElement.classList.add("overlaid") : this.parentElement.classList.remove("overlaid")
                            },
                            onDropdownClose: function () {
                                this.parentElement.classList.remove("overlaid")
                            }
                        }
                    },
                    r = t.RDNavbar = new RDNavbar(t, Util.merge(window.xMode ? [o, a, {
                        stickUpClone: !1,
                        anchorNav: !1,
                        responsive: {
                            0: {
                                stickUp: !1,
                                stickUpClone: !1
                            },
                            992: {
                                stickUp: !1,
                                stickUpClone: !1
                            },
                            1200: {
                                stickUp: !1,
                                stickUpClone: !1
                            }
                        },
                        callbacks: {
                            onDropdownOver: function () {
                                return !1
                            }
                        }
                    }] : [o, a]));
                e.length && e.forEach((function (t) {
                    t.addEventListener("click", (function () {
                        let t = this.closest(".rd-navbar-submenu");
                        t.parentElement;
                        r.dropdownToggle.call(t, r)
                    }))
                }))
            })), p.search.length || p.searchResults) {
            let t = "bat/rd-search.php",
                e = '<h5 class="search-title"><a target="_top" href="#{href}" class="search-link">#{title}</a></h5><p>...#{token}...</p><p class="match"><em>Terms matched: #{count} - URL: #{href}</em></p>',
                a = "*.html";
            if (p.search.length)
                for (let o = 0; o < p.search.length; o++) {
                    let r = $(p.search[o]),
                        i = {
                            element: r,
                            filter: r.attr("data-search-filter") ? r.attr("data-search-filter") : a,
                            template: r.attr("data-search-template") ? r.attr("data-search-template") : e,
                            live: !!r.attr("data-search-live") && r.attr("data-search-live"),
                            liveCount: r.attr("data-search-live-count") ? parseInt(r.attr("data-search-live"), 10) : 4,
                            current: 0,
                            processed: 0,
                            timer: {}
                        },
                        n = $(".rd-navbar-search-toggle");
                    if (n.length && n.on("click", function (t) {
                            return function () {
                                $(this).hasClass("active") || t.find("input").val("").trigger("propertychange")
                            }
                        }(r)), i.live) {
                        let e = !1;
                        r.find("input").on("input propertychange", $.proxy((function () {
                            this.term = this.element.find("input").val().trim(), this.spin = this.element.find(".input-group-addon"), clearTimeout(this.timer), this.term.length > 2 ? (this.timer = setTimeout(d(this, t), 200), !1 === e && (e = !0, l.on("click", (function (t) {
                                0 === $(t.toElement).parents(".rd-search").length && $("#rd-search-results-live").addClass("cleared").html("")
                            })))) : 0 === this.term.length && $("#" + this.live).addClass("cleared").html("")
                        }), i, this))
                    }
                    r.submit($.proxy((function () {
                        return $("<input />").attr("type", "hidden").attr("name", "filter").attr("value", this.filter).appendTo(this.element), !0
                    }), i, this))
                }
            if (p.searchResults.length) {
                let a = /\?.*s=([^&]+)\&filter=([^&]+)/g.exec(location.search);
                null !== a && $.get(t, {
                    s: decodeURI(a[1]),
                    dataType: "html",
                    filter: a[2],
                    template: e,
                    live: ""
                }, (function (t) {
                    p.searchResults.html(t)
                }))
            }
        }
        if (p.viewAnimate.length)
            for (let t = 0; t < p.viewAnimate.length; t++) {
                let e = $(p.viewAnimate[t]).not(".active");
                r.on("scroll", $.proxy((function () {
                    m(this) && this.addClass("active")
                }), e)).trigger("scroll")
            }
        if (p.swiper.length && p.swiper.forEach((function (t) {
                function e() {
                    this.el.querySelector(".swiper-counter") && (this.el.querySelector(".swiper-counter").innerHTML = '<span class="swiper-counter-count">' + o(this.realIndex + 1) + '</span><span class="swiper-counter-divider"></span><span class="swiper-counter-total">' + o(this.slides.length) + "</span>")
                }

                function o(t) {
                    return t < 10 ? "0" + t : t
                }
                let r, i, n = t.querySelectorAll(".swiper-slide[data-slide-bg]"),
                    l = t.querySelectorAll(".swiper-wrapper [data-caption-animate]"),
                    s = t.querySelectorAll(".swiper-wrapper video"),
                    c = t.querySelector(".swiper-pagination[data-pagination-ordered]"),
                    d = t.querySelector(".swiper-pagination[data-pagination-progress]"),
                    u = a({
                        speed: 500,
                        loop: !0,
                        autoHeight: !1,
                        pagination: {
                            el: ".swiper-pagination",
                            clickable: !0,
                            renderBullet: function (t, e) {
                                return '<span class="' + e + '">' + (c ? function (t, e) {
                                    let a = "" + t;
                                    for (; a.length < e;) a = "0" + a;
                                    return a
                                }(t + 1, 2) : "") + (d ? '<svg class="swiper-progress" x="0px" y="0px" width="100" height="100" viewbox="0 0 100 100"><circle class="swiper-progress-bg" cx="50" cy="50" r="50"></circle><circle class="swiper-progress-dot" cx="50" cy="50" r="14"></circle><circle class="clipped" cx="50" cy="50" r="48"></circle></svg>' : "") + "</span>"
                            }
                        },
                        navigation: {
                            nextEl: ".swiper-button-next",
                            prevEl: ".swiper-button-prev"
                        },
                        scrollbar: {
                            el: ".swiper-scrollbar"
                        },
                        autoplay: {
                            delay: 0,
                            disableOnInteraction: !1
                        },
                        on: {
                            init: e,
                            slideChange: e,
                            paginationUpdate: function () {
                                if (d) {
                                    let t = d.querySelectorAll(".swiper-pagination-bullet"),
                                        e = d.querySelector(".swiper-pagination-bullet-active .swiper-progress");
                                    r = new aProgressCircle({
                                        node: e
                                    }), i = new VirtualTimer({
                                        onTick: function () {
                                            r.render(this.progress / this.duration * 360)
                                        }
                                    }), i.reset(), i.duration = this.originalParams.autoplay.delay - 100, i.start(), t.forEach((function (t) {
                                        t.addEventListener("click", (function () {
                                            i.stop()
                                        }))
                                    }))
                                }
                            },
                            sliderMove: function () {
                                i.stop(), i.reset()
                            }
                        }
                    }, g(t.getAttribute("data-swiper")));
                if (window.xMode && (u = a(u, {
                        autoplay: !1,
                        loop: !1,
                        simulateTouch: !1
                    })), n.forEach((function (t) {
                        t.style.backgroundImage = "url(" + t.getAttribute("data-slide-bg") + ")"
                    })), l.length && (u.on || (u.on = {}), u.on.transitionEnd = function () {
                        let t = this.wrapperEl.children[this.activeIndex],
                            e = this.wrapperEl.children[this.previousIndex];
                        t.querySelectorAll("[data-caption-animate]").forEach((function (t) {
                            t.classList.add(t.getAttribute("data-caption-animate")), t.classList.add("animated")
                        })), e.querySelectorAll("[data-caption-animate]").forEach((function (t) {
                            t.classList.remove(t.getAttribute("data-caption-animate")), t.classList.remove("animated")
                        }))
                    }), s.length && (u.on || (u.on = {}), u.on.transitionStart = function () {
                        let t = this.wrapperEl.children[this.activeIndex],
                            e = this.wrapperEl.children[this.previousIndex];
                        t.querySelectorAll("video").forEach((function (t) {
                            t.paused && t.play()
                        })), e.querySelectorAll("video").forEach((function (t) {
                            t.paused || t.pause()
                        }))
                    }), u.thumbs && u.thumbs.swiper) {
                    let e = document.querySelector(u.thumbs.swiper);
                    e.swiper ? (u.thumbs.swiper = e.swiper, new Swiper(t, u), t.dispatchEvent(new CustomEvent("swiper:ready"))) : e.addEventListener("swiper:ready", (function () {
                        u.thumbs.swiper = e.swiper, new Swiper(t, u), t.dispatchEvent(new CustomEvent("swiper:ready"))
                    }))
                } else new Swiper(t, u), t.dispatchEvent(new CustomEvent("swiper:ready"))
            })), p.owl.length && p.owl.forEach((function (t) {
                let e = g(t.getAttribute("data-owl")),
                    a = {
                        items: 1,
                        margin: 30,
                        loop: !0,
                        mouseDrag: !0,
                        stagePadding: 0,
                        nav: !1,
                        navText: [],
                        dots: !1,
                        autoplay: !0,
                        autoplayHoverPause: !0
                    };
                t.owl = $(t);
                let o = Util.merge(window.xMode ? [a, e, {
                    autoplay: !1,
                    loop: !1,
                    mouseDrag: !1
                }] : [a, e]);
                $(t).owlCarousel(o)
            })), n.hasClass("wow-animation") && p.wow.length && !u && s && (new WOW).init(), p.rdInputLabel.length && p.rdInputLabel.RDInputLabel(), p.regula.length && function (t) {
                regula.custom({
                    name: "PhoneNumber",
                    defaultMessage: "Invalid phone number format",
                    validator: function () {
                        return "" === this.value || /^(\+\d)?[0-9\-\(\) ]{5,}$/i.test(this.value)
                    }
                });
                for (let e = 0; e < t.length; e++) {
                    let a, o = $(t[e]);
                    o.addClass("form-control-has-validation").after("<span class='form-validation'></span>"), a = o.parent().find(".form-validation"), a.is(":last-child") && o.addClass("form-control-last-child")
                }
                t.on("input change propertychange blur", (function (t) {
                    let e, a = $(this);
                    if (("blur" === t.type || a.parent().hasClass("has-error")) && !a.parents(".rd-mailform").hasClass("success"))
                        if ((e = a.regula("validate")).length)
                            for (let t = 0; t < e.length; t++) a.siblings(".form-validation").text(e[t].message).parent().addClass("has-error");
                        else a.siblings(".form-validation").text("").parent().removeClass("has-error")
                })).regula("bind");
                let e = [{
                    type: regula.Constraint.Required,
                    newMessage: "The text field is required."
                }, {
                    type: regula.Constraint.Email,
                    newMessage: "The email is not a valid email."
                }, {
                    type: regula.Constraint.Numeric,
                    newMessage: "Only numbers are required"
                }, {
                    type: regula.Constraint.Selected,
                    newMessage: "Please choose an option."
                }];
                for (let t = 0; t < e.length; t++) {
                    let a = e[t];
                    regula.override({
                        constraintType: a.type,
                        defaultMessage: a.newMessage
                    })
                }
            }(p.regula), p.mailchimp.length)
            for (let t = 0; t < p.mailchimp.length; t++) {
                let e = $(p.mailchimp[t]),
                    a = e.find('input[type="email"]');
                e.attr("novalidate", "true"), a.attr("name", "EMAIL"), e.on("submit", $.proxy((function (e, a) {
                    a.preventDefault();
                    let o = this,
                        r = {},
                        i = o.attr("action").replace("/post?", "/post-json?").concat("&c=?"),
                        n = o.serializeArray(),
                        l = $("#" + o.attr("data-form-output"));
                    for (t = 0; t < n.length; t++) r[n[t].name] = n[t].value;
                    return $.ajax({
                        data: r,
                        url: i,
                        dataType: "jsonp",
                        error: function (t, e) {
                            l.html("Server error: " + e), setTimeout((function () {
                                l.removeClass("active")
                            }), 4e3)
                        },
                        success: function (t) {
                            l.html(t.msg).addClass("active"), e[0].value = "";
                            let a = $('[for="' + e.attr("id") + '"]');
                            a.length && a.removeClass("focus not-empty"), setTimeout((function () {
                                l.removeClass("active")
                            }), 6e3)
                        },
                        beforeSend: function (t) {
                            let e = window.xMode,
                                a = function () {
                                    let t, e = 0,
                                        a = o.find("[data-constraints]");
                                    if (a.length) {
                                        for (let o = 0; o < a.length; o++) {
                                            let r = $(a[o]);
                                            if ((t = r.regula("validate")).length)
                                                for (let a = 0; a < t.length; a++) e++, r.siblings(".form-validation").text(t[a].message).parent().addClass("has-error");
                                            else r.siblings(".form-validation").text("").parent().removeClass("has-error")
                                        }
                                        return 0 === e
                                    }
                                    return !0
                                }();
                            if (e || !a) return !1;
                            l.html("Submitting...").addClass("active")
                        }
                    }), !1
                }), e, a))
            }
        if (p.campaignMonitor.length)
            for (let t = 0; t < p.campaignMonitor.length; t++) {
                let e = $(p.campaignMonitor[t]);
                e.on("submit", $.proxy((function (e) {
                    let a = {},
                        o = this.attr("action"),
                        r = this.serializeArray(),
                        i = $("#" + p.campaignMonitor.attr("data-form-output")),
                        n = $(this);
                    for (t = 0; t < r.length; t++) a[r[t].name] = r[t].value;
                    $.ajax({
                        data: a,
                        url: o,
                        dataType: "jsonp",
                        error: function (t, e) {
                            i.html("Server error: " + e), setTimeout((function () {
                                i.removeClass("active")
                            }), 4e3)
                        },
                        success: function (t) {
                            i.html(t.Message).addClass("active"), setTimeout((function () {
                                i.removeClass("active")
                            }), 6e3)
                        },
                        beforeSend: function (t) {
                            if (u || !h(n.find("[data-constraints]"))) return !1;
                            i.html("Submitting...").addClass("active")
                        }
                    });
                    let l = n[0].getElementsByTagName("input");
                    for (let t = 0; t < l.length; t++) {
                        l[t].value = "";
                        let e = document.querySelector('[for="' + l[t].getAttribute("id") + '"]');
                        e && e.classList.remove("focus", "not-empty")
                    }
                    return !1
                }), e))
            }
        if (p.rdMailForm.length) {
            let t, e = {
                MF000: "Successfully sent!",
                MF001: "Recipients are not set!",
                MF002: "Form will not work locally!",
                MF003: "Please, define email field in your form!",
                MF004: "Please, define type of your form!",
                MF254: "Something went wrong with PHPMailer!",
                MF255: "Aw, snap! Something went wrong."
            };
            for (t = 0; t < p.rdMailForm.length; t++) {
                let a = $(p.rdMailForm[t]),
                    o = !1;
                a.attr("novalidate", "novalidate").ajaxForm({
                    data: {
                        "form-type": a.attr("data-form-type") || "contact",
                        counter: t
                    },
                    beforeSubmit: function (t, e, a) {
                        if (u) return;
                        let r = $(p.rdMailForm[this.extraData.counter]),
                            i = r.find("[data-constraints]"),
                            n = $("#" + r.attr("data-form-output")),
                            l = r.find(".recaptcha"),
                            s = !0;
                        if (n.removeClass("active error success"), !h(i, l)) return !1;
                        if (l.length) {
                            let t = l.find(".g-recaptcha-response").val(),
                                e = {
                                    CPT001: 'Please, setup you "site key" and "secret key" of reCaptcha',
                                    CPT002: "Something wrong with google reCaptcha"
                                };
                            o = !0, $.ajax({
                                method: "POST",
                                url: "bat/reCaptcha.php",
                                data: {
                                    "g-recaptcha-response": t
                                },
                                async: !1
                            }).done((function (t) {
                                "CPT000" !== t && (n.hasClass("snackbars") ? (n.html('<p><span class="icon text-middle mdi mdi-check icon-xxs"></span><span>' + e[t] + "</span></p>"), setTimeout((function () {
                                    n.removeClass("active")
                                }), 3500), s = !1) : n.html(e[t]), n.addClass("active"))
                            }))
                        }
                        if (!s) return !1;
                        r.addClass("form-in-process"), n.hasClass("snackbars") && (n.html('<p><span class="icon text-middle fa fa-circle-o-notch fa-spin icon-xxs"></span><span>Sending</span></p>'), n.addClass("active"))
                    },
                    error: function (t) {
                        if (u) return;
                        let a = $("#" + $(p.rdMailForm[this.extraData.counter]).attr("data-form-output")),
                            r = $(p.rdMailForm[this.extraData.counter]);
                        a.text(e[t]), r.removeClass("form-in-process"), o && (grecaptcha.reset(), window.dispatchEvent(new Event("resize")))
                    },
                    success: function (t) {
                        if (u) return;
                        let a = $(p.rdMailForm[this.extraData.counter]),
                            r = $("#" + a.attr("data-form-output")),
                            i = a.find("select");
                        a.addClass("success").removeClass("form-in-process"), o && (grecaptcha.reset(), window.dispatchEvent(new Event("resize"))), t = 5 === t.length ? t : "MF255", r.text(e[t]), "MF000" === t ? r.hasClass("snackbars") ? r.html('<p><span class="icon text-middle mdi mdi-check icon-xxs"></span><span>' + e[t] + "</span></p>") : r.addClass("active success") : r.hasClass("snackbars") ? r.html(' <p class="snackbars-left"><span class="icon icon-xxs mdi mdi-alert-outline text-middle"></span><span>' + e[t] + "</span></p>") : r.addClass("active error"), a.clearForm(), i.length && i.select2("val", ""), a.find("input, textarea").trigger("blur"), setTimeout((function () {
                            r.removeClass("active error success"), a.removeClass("success")
                        }), 3500)
                    }
                })
            }
        }
        if (p.lightGallery.length)
            for (let t = 0; t < p.lightGallery.length; t++) A = p.lightGallery[t], S = void 0, u || $(A).lightGallery({
                thumbnail: "false" !== $(A).attr("data-lg-thumbnail"),
                selector: "[data-lightgallery='item']",
                autoplay: "true" === $(A).attr("data-lg-autoplay"),
                pause: parseInt($(A).attr("data-lg-autoplay-delay")) || 5e3,
                addClass: S,
                mode: $(A).attr("data-lg-animation") || "lg-slide",
                loop: "false" !== $(A).attr("data-lg-loop")
            });
        var A, S;
        if (p.lightGalleryItem.length) {
            let t = [];
            for (let e = 0; e < p.lightGalleryItem.length; e++) $(p.lightGalleryItem[e]).parents(".owl-carousel").length || $(p.lightGalleryItem[e]).parents(".swiper-slider").length || $(p.lightGalleryItem[e]).parents(".slick-slider").length || t.push(p.lightGalleryItem[e]);
            p.lightGalleryItem = t;
            for (let t = 0; t < p.lightGalleryItem.length; t++) y(p.lightGalleryItem[t])
        }
        if (p.lightDynamicGalleryItem.length)
            for (let t = 0; t < p.lightDynamicGalleryItem.length; t++) b(p.lightDynamicGalleryItem[t]);
        if (p.customToggle.length)
            for (let t = 0; t < p.customToggle.length; t++) {
                let e = $(p.customToggle[t]);
                e.on("click", $.proxy((function (t) {
                    t.preventDefault();
                    let e = $(this);
                    $(e.attr("data-custom-toggle")).add(this).toggleClass("active")
                }), e)), "true" === e.attr("data-custom-toggle-hide-on-blur") && l.on("click", e, (function (t) {
                    t.target !== t.data[0] && $(t.data.attr("data-custom-toggle")).find($(t.target)).length && 0 === t.data.find($(t.target)).length && $(t.data.attr("data-custom-toggle")).add(t.data[0]).removeClass("active")
                })), "true" === e.attr("data-custom-toggle-disable-on-blur") && l.on("click", e, (function (t) {
                    t.target !== t.data[0] && 0 === $(t.data.attr("data-custom-toggle")).find($(t.target)).length && 0 === t.data.find($(t.target)).length && $(t.data.attr("data-custom-toggle")).add(t.data[0]).removeClass("active")
                }))
            }
        if (p.countdown.length && p.countdown.forEach((function (t) {
                new Countdown(c({
                    node: t,
                    from: null,
                    to: null,
                    count: "auto",
                    tick: 100
                }, g(t.getAttribute("data-countdown"))))
            })), p.accordion.length && p.accordion.forEach((function (t) {
                let e = t.querySelectorAll(".accordion-item"),
                    a = device.ios() ? "touchstart" : "click";
                e.forEach((function (e) {
                    let o = e.querySelector(".accordion-head"),
                        r = e.querySelector(".accordion-body");
                    MultiSwitch({
                        node: o,
                        targets: [e, r],
                        isolate: t.querySelectorAll(".accordion-head"),
                        state: e.classList.contains("active"),
                        event: a
                    }), r.multiSwitchTarget.groups.active.state || (r.style.display = "none"), r.addEventListener("switch:active", (function () {
                        let t = $(this);
                        this.multiSwitchTarget.groups.active.state ? t.stop().slideDown(300) : t.stop().slideUp(300)
                    }))
                }))
            })), p.multiswitch.length) {
            let t = device.ios() ? "touchstart" : "click";
            p.multiswitch.forEach((function (e) {
                "A" === e.tagName && e.addEventListener(t, (function (t) {
                    t.preventDefault()
                })), MultiSwitch(Object.assign({
                    node: e,
                    event: t
                }, g(e.getAttribute("data-multi-switch"))))
            }))
        }
        if (p.imageHover.length) {
            let t = function (t) {
                var e = t.parent || void 0,
                    a = t.displacementImage || void 0,
                    o = t.image1 || void 0,
                    r = t.image2 || void 0,
                    i = t.intensity || 1,
                    n = t.speedIn || 1.6,
                    l = t.speedOut || 1.2,
                    s = void 0 === t.hover || t.hover,
                    c = t.easing || Expo.easeOut,
                    d = new THREE.Scene,
                    u = new THREE.OrthographicCamera(e.offsetWidth / -2, e.offsetWidth / 2, e.offsetHeight / 2, e.offsetHeight / -2, 1, 1e3);
                u.position.z = 1;
                var p = new THREE.WebGLRenderer({
                    antialias: !1
                });
                p.setPixelRatio(window.devicePixelRatio), p.setClearColor(16777215, 0), p.setSize(e.offsetWidth, e.offsetHeight), e.appendChild(p.domElement);
                var m = new THREE.TextureLoader;
                m.crossOrigin = "";
                var g = m.load(o),
                    h = m.load(r),
                    f = m.load(a);
                f.wrapS = f.wrapT = THREE.RepeatWrapping, g.magFilter = h.magFilter = THREE.LinearFilter, g.minFilter = h.minFilter = THREE.LinearFilter, g.anisotropy = p.getMaxAnisotropy(), h.anisotropy = p.getMaxAnisotropy();
                var v = new THREE.ShaderMaterial({
                        uniforms: {
                            effectFactor: {
                                type: "f",
                                value: i
                            },
                            dispFactor: {
                                type: "f",
                                value: 0
                            },
                            texture: {
                                type: "t",
                                value: g
                            },
                            texture2: {
                                type: "t",
                                value: h
                            },
                            disp: {
                                type: "t",
                                value: f
                            }
                        },
                        vertexShader: "\n        varying vec2 vUv;\n        void main() {\n          vUv = uv;\n          gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n        }\n    ",
                        fragmentShader: "\n        varying vec2 vUv;\n\n        uniform sampler2D texture;\n        uniform sampler2D texture2;\n        uniform sampler2D disp;\n\n        // uniform float time;\n        // uniform float _rot;\n        uniform float dispFactor;\n        uniform float effectFactor;\n\n        // vec2 rotate(vec2 v, float a) {\n        //  float s = sin(a);\n        //  float c = cos(a);\n        //  mat2 m = mat2(c, -s, s, c);\n        //  return m * v;\n        // }\n\n        void main() {\n\n            vec2 uv = vUv;\n\n            // uv -= 0.5;\n            // vec2 rotUV = rotate(uv, _rot);\n            // uv += 0.5;\n\n            vec4 disp = texture2D(disp, uv);\n\n            vec2 distortedPosition = vec2(uv.x + dispFactor * (disp.r*effectFactor), uv.y);\n            vec2 distortedPosition2 = vec2(uv.x - (1.0 - dispFactor) * (disp.r*effectFactor), uv.y);\n\n            vec4 _texture = texture2D(texture, distortedPosition);\n            vec4 _texture2 = texture2D(texture2, distortedPosition2);\n\n            vec4 finalTexture = mix(_texture, _texture2, dispFactor);\n\n            gl_FragColor = finalTexture;\n            // gl_FragColor = disp;\n        }\n    ",
                        transparent: !0,
                        opacity: 1
                    }),
                    b = new THREE.PlaneBufferGeometry(e.offsetWidth, e.offsetHeight, 1),
                    y = new THREE.Mesh(b, v);
                d.add(y);
                var w, x, k, C;
                s && (k = "mouseenter", C = "mouseleave", x = !1, w = navigator.userAgent || navigator.vendor || window.opera, (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(w) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(w.substr(0, 4))) && (x = !0), x && (k = "touchstart", C = "touchend"), e.addEventListener(k, (function (t) {
                    TweenMax.to(v.uniforms.dispFactor, n, {
                        value: 1,
                        ease: c
                    })
                })), e.addEventListener(C, (function (t) {
                    TweenMax.to(v.uniforms.dispFactor, l, {
                        value: 0,
                        ease: c
                    })
                }))), window.addEventListener("resize", (function (t) {
                    p.setSize(e.offsetWidth, e.offsetHeight)
                })), this.next = function () {
                    TweenMax.to(v.uniforms.dispFactor, n, {
                        value: 1,
                        ease: c
                    })
                }, this.previous = function () {
                    TweenMax.to(v.uniforms.dispFactor, l, {
                        value: 0,
                        ease: c
                    })
                };
                var $ = function () {
                    requestAnimationFrame($), p.render(d, u)
                };
                $()
            };
            p.imageHover.forEach((function (e) {
                let a = e.querySelector("img"),
                    o = a.getAttribute("src"),
                    r = a.getAttribute("data-image-to");
                new t({
                    parent: e,
                    intensity: -.2,
                    speedIn: 1.2,
                    image1: o,
                    image2: r || o,
                    displacementImage: "images/4.png"
                })
            }))
        }
        p.modal.length && p.modal.forEach((function (t) {
            $(t).modal({
                show: !1,
                focus: !1
            })
        })), p.modalBtn.length && p.modalBtn.forEach((function (t) {
            let e = g(t.getAttribute("data-modal-trigger"));
            t.addEventListener("click", (function () {
                let t = document.querySelector(e.target);
                t.classList.contains("show") ? $(t).modal("hide") : $(t).modal("show")
            }))
        })), p.slick.length && p.slick.forEach((function (t) {
            let e, a = {
                    xs: 480,
                    sm: 576,
                    md: 768,
                    lg: 992,
                    xl: 1200,
                    xxl: 1600
                },
                o = [];
            for (let e in a) t.hasAttribute("data-slick-" + e) && o.push({
                breakpoint: a[e],
                settings: g(t.getAttribute("data-slick-" + e))
            });
            e = {
                responsive: o
            };
            let r = Util.merge([{
                autoplay: !0,
                prevArrow: '<button type="button" class="slick-prev"></button>',
                nextArrow: '<button type="button" class="slick-next"></button>'
            }, e]);
            $(t).slick(r), document.querySelectorAll(".slick-filter-link").forEach((function (e) {
                e.addEventListener("click", (function () {
                    let a = e.getAttribute("data-filter");
                    $(t).slick("slickUnfilter"), "*" !== a && $(t).slick("slickFilter", '[data-category="' + a + '"]')
                }))
            }))
        }))
    }))
}();


$(document).ready((function () {
    setTimeout((function () {
        $("a[href].no-link").each((function () {
            var n = this.href;
            $(this).removeAttr("href").css("cursor", "pointer").click((function () {
                n.toLowerCase().indexOf("#") >= 0 || window.open(n, "_self")
            }))
        }))
    }), 500)
}));