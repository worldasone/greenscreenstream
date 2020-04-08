/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./example/App.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./example/App.js":
/*!************************!*\
  !*** ./example/App.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst GreenScreenStream_1 = __webpack_require__(/*! ../src/GreenScreenStream */ \"./src/GreenScreenStream.js\");\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n    let instance = GreenScreenStream_1.GreenScreenStream.getInstance(\"assets/palmtrees.jpg\");\n    navigator.getUserMedia({ video: true, audio: false }, (m) => {\n        instance.addVideoTrack(m.getTracks()[0]);\n        instance.render();\n        document.querySelector(\"video\").srcObject = instance.captureStream(25);\n        const detectedColor = document.querySelector(\".dominates\");\n        // detect color 2 / second\n        setInterval(() => {\n            let colors = instance.getColorsFromStream();\n            let d = colors.dominant;\n            //let p = colors.palette; // not displayed\n            const s = `rgb(${d[0]},${d[1]},${d[2]}`;\n            detectedColor.style.background = s;\n        }, 1000 / 2);\n    }, (e) => console.error(e));\n    // expose to  window.\n    window[\"greatStream\"] = instance;\n});\n\n\n//# sourceURL=webpack:///./example/App.js?");

/***/ }),

/***/ "./node_modules/demolishedrenderer/index.js":
/*!**************************************************!*\
  !*** ./node_modules/demolishedrenderer/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nfunction __export(m) {\n    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];\n}\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__export(__webpack_require__(/*! ./src/DR */ \"./node_modules/demolishedrenderer/src/DR.js\"));\n\n\n//# sourceURL=webpack:///./node_modules/demolishedrenderer/index.js?");

/***/ }),

/***/ "./node_modules/demolishedrenderer/src/DR.js":
/*!***************************************************!*\
  !*** ./node_modules/demolishedrenderer/src/DR.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar DR = (function () {\n    function DR(canvas, v, f, cU) {\n        if (cU === void 0) { cU = {}; }\n        this.canvas = canvas;\n        this.cU = cU;\n        this.header = \"#version 300 es\\n#ifdef GL_ES\\nprecision highp float;\\nprecision highp int;\\nprecision mediump sampler3D;\\n#endif\\n\";\n        this.targets = new Map();\n        this.programs = new Map();\n        this.textureCache = new Map();\n        this.gl = canvas.getContext(\"webgl2\", { preserveDrawingBuffer: true });\n        var gl = this.gl;\n        var c = 0, d;\n        for (var i in gl)\n            \"function\" == typeof gl[i] && (d = (c++ & 255).toString(16), d = d.match(/^[0-9].*$/) ? \"x\" + d : d, gl[d] = gl[i]);\n        gl.viewport(0, 0, canvas.width, canvas.height);\n        this.buffer = gl.createBuffer();\n        this.surfaceBuffer = gl.createBuffer();\n        this.mainProgram = gl.createProgram();\n        this.cS(this.mainProgram, 35633, this.header + v);\n        this.cS(this.mainProgram, 35632, this.header + f);\n        gl.linkProgram(this.mainProgram);\n        this.gl.validateProgram(this.mainProgram);\n        if (!gl.getProgramParameter(this.mainProgram, gl.LINK_STATUS)) {\n            var info = gl.getProgramInfoLog(this.mainProgram);\n            throw 'Could not compile WebGL program. \\n\\n' + info;\n        }\n        gl.useProgram(this.mainProgram);\n        this.screenVertexPosition = gl.getAttribLocation(this.mainProgram, \"pos\");\n        gl.enableVertexAttribArray(this.screenVertexPosition);\n        gl.bindBuffer(34962, this.buffer);\n        gl.bufferData(34962, new Float32Array([-1.0, -1.0, 1.0, -1.0, -1.0, 1.0, 1.0, -1.0, 1.0, 1.0, -1.0, 1.0]), 35044);\n    }\n    DR.prototype.cS = function (program, type, source) {\n        var gl = this.gl;\n        var shader = gl.createShader(type);\n        gl.shaderSource(shader, source);\n        gl.compileShader(shader);\n        gl.attachShader(program, shader);\n        if (!this.gl.getShaderParameter(shader, 35713)) {\n            this.gl.getShaderInfoLog(shader).trim().split(\"\\n\").forEach(function (l) {\n                return console.error(\"[shader] \" + l);\n            });\n            throw new Error(\"Error while compiling vertex/fragment\" + source);\n        }\n        ;\n    };\n    DR.prototype.aP = function (name) {\n        var p = this.gl.createProgram();\n        this.programs.set(name, p);\n        return p;\n    };\n    DR.prototype.t = function (data, d) {\n        var gl = this.gl;\n        var texture = gl.createTexture();\n        gl.activeTexture(d);\n        gl.bindTexture(3553, texture);\n        if (data instanceof Image) {\n            var ispowerof2 = data.width == data.height;\n            gl.texImage2D(3553, 0, 6408, 6408, 5121, data);\n        }\n        else {\n            gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, data);\n        }\n        gl.generateMipmap(3553);\n        return texture;\n    };\n    DR.prototype.aA = function (assets, cb) {\n        var _this = this;\n        var cache = function (k, n, v, f) {\n            _this.textureCache.set(k, { num: n, src: v, fn: f });\n        };\n        var p = function (key, texture) {\n            return new Promise(function (resolve, reject) {\n                if (!texture.src) {\n                    var unit = texture.num;\n                    cache(key, unit, _this.t(new Uint8Array(1024), unit), texture.fn);\n                    resolve(key);\n                }\n                else {\n                    var m_1 = new Image();\n                    m_1.onload = function (e) {\n                        var unit = texture.num;\n                        cache(key, unit, _this.t(m_1, unit), null);\n                        resolve(key);\n                    };\n                    m_1.src = texture.src;\n                }\n            });\n        };\n        Promise.all(Object.keys(assets).map(function (key) {\n            return p(key, assets[key]);\n        })).then(function (result) {\n            cb();\n        }).catch(function (ex) {\n            console.log(ex);\n        });\n        return this;\n    };\n    DR.prototype.aB = function (name, vertex, fragment, textures, customUniforms) {\n        var _this = this;\n        var gl = this.gl;\n        var target = this.cT(this.canvas.width, this.canvas.height, textures ? textures : [], customUniforms ? customUniforms : {});\n        this.targets.set(name, target);\n        var program = this.aP(name);\n        this.cS(program, 35633, this.header + vertex);\n        this.cS(program, 35632, this.header + fragment);\n        gl.linkProgram(program);\n        gl.validateProgram(program);\n        if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {\n            var info = gl.getProgramInfoLog(program);\n            throw 'Could not compile WebGL program. \\n\\n' + info;\n        }\n        gl.useProgram(program);\n        if (textures) {\n            textures.forEach(function (tk) {\n                gl.bindTexture(3553, _this.textureCache.get(tk).src);\n            });\n        }\n        this.vertexPosition = gl.getAttribLocation(program, \"pos\");\n        gl.enableVertexAttribArray(this.vertexPosition);\n        var nu = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS);\n        for (var i = 0; i < nu; ++i) {\n            var u = gl.getActiveUniform(program, i);\n            target.locations.set(u.name, gl.getUniformLocation(program, u.name));\n        }\n        return this;\n    };\n    DR.prototype.R = function (time) {\n        var _this = this;\n        var gl = this.gl;\n        var main = this.mainProgram;\n        var tc = 0;\n        this.programs.forEach(function (current, key) {\n            gl.useProgram(current);\n            var target = _this.targets.get(key);\n            gl.uniform2f(target.locations.get(\"resolution\"), _this.canvas.width, _this.canvas.height);\n            gl.uniform1f(target.locations.get(\"time\"), time);\n            var customUniforms = target.uniforms;\n            customUniforms && Object.keys(customUniforms).forEach(function (v) {\n                customUniforms[v](target.locations.get(v), gl, current, time);\n            });\n            target.textures.forEach(function (tk, index) {\n                var ct = _this.textureCache.get(tk);\n                ct.fn &&\n                    ct.fn(gl, ct.src);\n                var loc = gl.getUniformLocation(current, tk);\n                gl.uniform1i(loc, index);\n                gl.activeTexture(ct.num);\n                gl.bindTexture(gl.TEXTURE_2D, ct.src);\n                tc++;\n            });\n            gl.bindBuffer(34962, _this.surfaceBuffer);\n            gl.vertexAttribPointer(0, 2, 5126, false, 0, 0);\n            gl.bindBuffer(34962, _this.buffer);\n            gl.vertexAttribPointer(0, 2, 5126, false, 0, 0);\n            gl.bindFramebuffer(36160, target.framebuffer);\n            gl.clear(16384 | 256);\n            gl.drawArrays(4, 0, 6);\n        });\n        gl.useProgram(main);\n        gl.uniform2f(gl.getUniformLocation(main, \"resolution\"), this.canvas.width, this.canvas.height);\n        gl.uniform1f(gl.getUniformLocation(main, \"time\"), time);\n        Object.keys(this.cU).forEach(function (v) {\n            _this.cU[v](gl.getUniformLocation(main, v), gl, main, time);\n        });\n        gl.bindBuffer(34962, this.buffer);\n        gl.vertexAttribPointer(0, 2, 5126, false, 0, 0);\n        this.targets.forEach(function (target, key) {\n            gl.uniform1i(gl.getUniformLocation(main, key), tc);\n            gl.activeTexture(33984 + tc);\n            gl.bindTexture(3553, target.texture);\n            tc++;\n        });\n        gl.bindFramebuffer(36160, null);\n        gl.clear(16384 | 256);\n        gl.drawArrays(4, 0, 6);\n    };\n    DR.prototype.cT = function (width, height, textures, customUniforms) {\n        var gl = this.gl;\n        var target = {\n            \"framebuffer\": gl.createFramebuffer(),\n            \"renderbuffer\": gl.createRenderbuffer(),\n            \"texture\": gl.createTexture(),\n            \"textures\": textures,\n            \"uniforms\": customUniforms,\n            \"locations\": new Map()\n        };\n        gl.bindTexture(3553, target.texture);\n        gl.texImage2D(3553, 0, 6408, width, height, 0, 6408, 5121, null);\n        gl.texParameteri(3553, 10242, 33071);\n        gl.texParameteri(3553, 10243, 33071);\n        gl.texParameteri(3553, 10240, 9728);\n        gl.texParameteri(3553, 10241, 9728);\n        gl.bindFramebuffer(36160, target.framebuffer);\n        gl.framebufferTexture2D(36160, 36064, 3553, target.texture, 0);\n        gl.bindRenderbuffer(36161, target.renderbuffer);\n        gl.renderbufferStorage(36161, 33189, width, height);\n        gl.framebufferRenderbuffer(36160, 36096, 36161, target.renderbuffer);\n        gl.bindTexture(3553, null);\n        gl.bindRenderbuffer(36161, null);\n        gl.bindFramebuffer(36160, null);\n        return target;\n    };\n    DR.prototype.run = function (t, fps) {\n        var _this = this;\n        var pt = performance.now();\n        var interval = 1000 / fps;\n        var dt = 0;\n        var a = function (t) {\n            requestAnimationFrame(a);\n            dt = t - pt;\n            _this.textureCache;\n            if (dt > interval) {\n                pt = t - (dt % interval);\n                _this.R(pt / 1000);\n            }\n        };\n        a(t | 0);\n        return this;\n    };\n    return DR;\n}());\nexports.DR = DR;\n\n\n//# sourceURL=webpack:///./node_modules/demolishedrenderer/src/DR.js?");

/***/ }),

/***/ "./node_modules/quantize/quantize.js":
/*!*******************************************!*\
  !*** ./node_modules/quantize/quantize.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*\n * quantize.js Copyright 2008 Nick Rabinowitz\n * Ported to node.js by Olivier Lesnicki\n * Licensed under the MIT license: http://www.opensource.org/licenses/mit-license.php\n */\n\n// fill out a couple protovis dependencies\n/*\n * Block below copied from Protovis: http://mbostock.github.com/protovis/\n * Copyright 2010 Stanford Visualization Group\n * Licensed under the BSD License: http://www.opensource.org/licenses/bsd-license.php\n */\nif (!pv) {\n    var pv = {\n        map: function(array, f) {\n            var o = {};\n            return f ? array.map(function(d, i) {\n                o.index = i;\n                return f.call(o, d);\n            }) : array.slice();\n        },\n        naturalOrder: function(a, b) {\n            return (a < b) ? -1 : ((a > b) ? 1 : 0);\n        },\n        sum: function(array, f) {\n            var o = {};\n            return array.reduce(f ? function(p, d, i) {\n                o.index = i;\n                return p + f.call(o, d);\n            } : function(p, d) {\n                return p + d;\n            }, 0);\n        },\n        max: function(array, f) {\n            return Math.max.apply(null, f ? pv.map(array, f) : array);\n        }\n    }\n}\n\n/**\n * Basic Javascript port of the MMCQ (modified median cut quantization)\n * algorithm from the Leptonica library (http://www.leptonica.com/).\n * Returns a color map you can use to map original pixels to the reduced\n * palette. Still a work in progress.\n * \n * @author Nick Rabinowitz\n * @example\n \n// array of pixels as [R,G,B] arrays\nvar myPixels = [[190,197,190], [202,204,200], [207,214,210], [211,214,211], [205,207,207]\n                // etc\n                ];\nvar maxColors = 4;\n \nvar cmap = MMCQ.quantize(myPixels, maxColors);\nvar newPalette = cmap.palette();\nvar newPixels = myPixels.map(function(p) { \n    return cmap.map(p); \n});\n \n */\nvar MMCQ = (function() {\n    // private constants\n    var sigbits = 5,\n        rshift = 8 - sigbits,\n        maxIterations = 1000,\n        fractByPopulations = 0.75;\n\n    // get reduced-space color index for a pixel\n\n    function getColorIndex(r, g, b) {\n        return (r << (2 * sigbits)) + (g << sigbits) + b;\n    }\n\n    // Simple priority queue\n\n    function PQueue(comparator) {\n        var contents = [],\n            sorted = false;\n\n        function sort() {\n            contents.sort(comparator);\n            sorted = true;\n        }\n\n        return {\n            push: function(o) {\n                contents.push(o);\n                sorted = false;\n            },\n            peek: function(index) {\n                if (!sorted) sort();\n                if (index === undefined) index = contents.length - 1;\n                return contents[index];\n            },\n            pop: function() {\n                if (!sorted) sort();\n                return contents.pop();\n            },\n            size: function() {\n                return contents.length;\n            },\n            map: function(f) {\n                return contents.map(f);\n            },\n            debug: function() {\n                if (!sorted) sort();\n                return contents;\n            }\n        };\n    }\n\n    // 3d color space box\n\n    function VBox(r1, r2, g1, g2, b1, b2, histo) {\n        var vbox = this;\n        vbox.r1 = r1;\n        vbox.r2 = r2;\n        vbox.g1 = g1;\n        vbox.g2 = g2;\n        vbox.b1 = b1;\n        vbox.b2 = b2;\n        vbox.histo = histo;\n    }\n    VBox.prototype = {\n        volume: function(force) {\n            var vbox = this;\n            if (!vbox._volume || force) {\n                vbox._volume = ((vbox.r2 - vbox.r1 + 1) * (vbox.g2 - vbox.g1 + 1) * (vbox.b2 - vbox.b1 + 1));\n            }\n            return vbox._volume;\n        },\n        count: function(force) {\n            var vbox = this,\n                histo = vbox.histo;\n            if (!vbox._count_set || force) {\n                var npix = 0,\n                    i, j, k, index;\n                for (i = vbox.r1; i <= vbox.r2; i++) {\n                    for (j = vbox.g1; j <= vbox.g2; j++) {\n                        for (k = vbox.b1; k <= vbox.b2; k++) {\n                            index = getColorIndex(i, j, k);\n                            npix += (histo[index] || 0);\n                        }\n                    }\n                }\n                vbox._count = npix;\n                vbox._count_set = true;\n            }\n            return vbox._count;\n        },\n        copy: function() {\n            var vbox = this;\n            return new VBox(vbox.r1, vbox.r2, vbox.g1, vbox.g2, vbox.b1, vbox.b2, vbox.histo);\n        },\n        avg: function(force) {\n            var vbox = this,\n                histo = vbox.histo;\n            if (!vbox._avg || force) {\n                var ntot = 0,\n                    mult = 1 << (8 - sigbits),\n                    rsum = 0,\n                    gsum = 0,\n                    bsum = 0,\n                    hval,\n                    i, j, k, histoindex;\n                for (i = vbox.r1; i <= vbox.r2; i++) {\n                    for (j = vbox.g1; j <= vbox.g2; j++) {\n                        for (k = vbox.b1; k <= vbox.b2; k++) {\n                            histoindex = getColorIndex(i, j, k);\n                            hval = histo[histoindex] || 0;\n                            ntot += hval;\n                            rsum += (hval * (i + 0.5) * mult);\n                            gsum += (hval * (j + 0.5) * mult);\n                            bsum += (hval * (k + 0.5) * mult);\n                        }\n                    }\n                }\n                if (ntot) {\n                    vbox._avg = [~~(rsum / ntot), ~~ (gsum / ntot), ~~ (bsum / ntot)];\n                } else {\n                    //console.log('empty box');\n                    vbox._avg = [~~(mult * (vbox.r1 + vbox.r2 + 1) / 2), ~~ (mult * (vbox.g1 + vbox.g2 + 1) / 2), ~~ (mult * (vbox.b1 + vbox.b2 + 1) / 2)];\n                }\n            }\n            return vbox._avg;\n        },\n        contains: function(pixel) {\n            var vbox = this,\n                rval = pixel[0] >> rshift;\n            gval = pixel[1] >> rshift;\n            bval = pixel[2] >> rshift;\n            return (rval >= vbox.r1 && rval <= vbox.r2 &&\n                gval >= vbox.g1 && gval <= vbox.g2 &&\n                bval >= vbox.b1 && bval <= vbox.b2);\n        }\n    };\n\n    // Color map\n\n    function CMap() {\n        this.vboxes = new PQueue(function(a, b) {\n            return pv.naturalOrder(\n                a.vbox.count() * a.vbox.volume(),\n                b.vbox.count() * b.vbox.volume()\n            )\n        });;\n    }\n    CMap.prototype = {\n        push: function(vbox) {\n            this.vboxes.push({\n                vbox: vbox,\n                color: vbox.avg()\n            });\n        },\n        palette: function() {\n            return this.vboxes.map(function(vb) {\n                return vb.color\n            });\n        },\n        size: function() {\n            return this.vboxes.size();\n        },\n        map: function(color) {\n            var vboxes = this.vboxes;\n            for (var i = 0; i < vboxes.size(); i++) {\n                if (vboxes.peek(i).vbox.contains(color)) {\n                    return vboxes.peek(i).color;\n                }\n            }\n            return this.nearest(color);\n        },\n        nearest: function(color) {\n            var vboxes = this.vboxes,\n                d1, d2, pColor;\n            for (var i = 0; i < vboxes.size(); i++) {\n                d2 = Math.sqrt(\n                    Math.pow(color[0] - vboxes.peek(i).color[0], 2) +\n                    Math.pow(color[1] - vboxes.peek(i).color[1], 2) +\n                    Math.pow(color[2] - vboxes.peek(i).color[2], 2)\n                );\n                if (d2 < d1 || d1 === undefined) {\n                    d1 = d2;\n                    pColor = vboxes.peek(i).color;\n                }\n            }\n            return pColor;\n        },\n        forcebw: function() {\n            // XXX: won't  work yet\n            var vboxes = this.vboxes;\n            vboxes.sort(function(a, b) {\n                return pv.naturalOrder(pv.sum(a.color), pv.sum(b.color))\n            });\n\n            // force darkest color to black if everything < 5\n            var lowest = vboxes[0].color;\n            if (lowest[0] < 5 && lowest[1] < 5 && lowest[2] < 5)\n                vboxes[0].color = [0, 0, 0];\n\n            // force lightest color to white if everything > 251\n            var idx = vboxes.length - 1,\n                highest = vboxes[idx].color;\n            if (highest[0] > 251 && highest[1] > 251 && highest[2] > 251)\n                vboxes[idx].color = [255, 255, 255];\n        }\n    };\n\n    // histo (1-d array, giving the number of pixels in\n    // each quantized region of color space), or null on error\n\n    function getHisto(pixels) {\n        var histosize = 1 << (3 * sigbits),\n            histo = new Array(histosize),\n            index, rval, gval, bval;\n        pixels.forEach(function(pixel) {\n            rval = pixel[0] >> rshift;\n            gval = pixel[1] >> rshift;\n            bval = pixel[2] >> rshift;\n            index = getColorIndex(rval, gval, bval);\n            histo[index] = (histo[index] || 0) + 1;\n        });\n        return histo;\n    }\n\n    function vboxFromPixels(pixels, histo) {\n        var rmin = 1000000,\n            rmax = 0,\n            gmin = 1000000,\n            gmax = 0,\n            bmin = 1000000,\n            bmax = 0,\n            rval, gval, bval;\n        // find min/max\n        pixels.forEach(function(pixel) {\n            rval = pixel[0] >> rshift;\n            gval = pixel[1] >> rshift;\n            bval = pixel[2] >> rshift;\n            if (rval < rmin) rmin = rval;\n            else if (rval > rmax) rmax = rval;\n            if (gval < gmin) gmin = gval;\n            else if (gval > gmax) gmax = gval;\n            if (bval < bmin) bmin = bval;\n            else if (bval > bmax) bmax = bval;\n        });\n        return new VBox(rmin, rmax, gmin, gmax, bmin, bmax, histo);\n    }\n\n    function medianCutApply(histo, vbox) {\n        if (!vbox.count()) return;\n\n        var rw = vbox.r2 - vbox.r1 + 1,\n            gw = vbox.g2 - vbox.g1 + 1,\n            bw = vbox.b2 - vbox.b1 + 1,\n            maxw = pv.max([rw, gw, bw]);\n        // only one pixel, no split\n        if (vbox.count() == 1) {\n            return [vbox.copy()]\n        }\n        /* Find the partial sum arrays along the selected axis. */\n        var total = 0,\n            partialsum = [],\n            lookaheadsum = [],\n            i, j, k, sum, index;\n        if (maxw == rw) {\n            for (i = vbox.r1; i <= vbox.r2; i++) {\n                sum = 0;\n                for (j = vbox.g1; j <= vbox.g2; j++) {\n                    for (k = vbox.b1; k <= vbox.b2; k++) {\n                        index = getColorIndex(i, j, k);\n                        sum += (histo[index] || 0);\n                    }\n                }\n                total += sum;\n                partialsum[i] = total;\n            }\n        } else if (maxw == gw) {\n            for (i = vbox.g1; i <= vbox.g2; i++) {\n                sum = 0;\n                for (j = vbox.r1; j <= vbox.r2; j++) {\n                    for (k = vbox.b1; k <= vbox.b2; k++) {\n                        index = getColorIndex(j, i, k);\n                        sum += (histo[index] || 0);\n                    }\n                }\n                total += sum;\n                partialsum[i] = total;\n            }\n        } else { /* maxw == bw */\n            for (i = vbox.b1; i <= vbox.b2; i++) {\n                sum = 0;\n                for (j = vbox.r1; j <= vbox.r2; j++) {\n                    for (k = vbox.g1; k <= vbox.g2; k++) {\n                        index = getColorIndex(j, k, i);\n                        sum += (histo[index] || 0);\n                    }\n                }\n                total += sum;\n                partialsum[i] = total;\n            }\n        }\n        partialsum.forEach(function(d, i) {\n            lookaheadsum[i] = total - d\n        });\n\n        function doCut(color) {\n            var dim1 = color + '1',\n                dim2 = color + '2',\n                left, right, vbox1, vbox2, d2, count2 = 0;\n            for (i = vbox[dim1]; i <= vbox[dim2]; i++) {\n                if (partialsum[i] > total / 2) {\n                    vbox1 = vbox.copy();\n                    vbox2 = vbox.copy();\n                    left = i - vbox[dim1];\n                    right = vbox[dim2] - i;\n                    if (left <= right)\n                        d2 = Math.min(vbox[dim2] - 1, ~~ (i + right / 2));\n                    else d2 = Math.max(vbox[dim1], ~~ (i - 1 - left / 2));\n                    // avoid 0-count boxes\n                    while (!partialsum[d2]) d2++;\n                    count2 = lookaheadsum[d2];\n                    while (!count2 && partialsum[d2 - 1]) count2 = lookaheadsum[--d2];\n                    // set dimensions\n                    vbox1[dim2] = d2;\n                    vbox2[dim1] = vbox1[dim2] + 1;\n                    // console.log('vbox counts:', vbox.count(), vbox1.count(), vbox2.count());\n                    return [vbox1, vbox2];\n                }\n            }\n\n        }\n        // determine the cut planes\n        return maxw == rw ? doCut('r') :\n            maxw == gw ? doCut('g') :\n            doCut('b');\n    }\n\n    function quantize(pixels, maxcolors) {\n        // short-circuit\n        if (!pixels.length || maxcolors < 2 || maxcolors > 256) {\n            // console.log('wrong number of maxcolors');\n            return false;\n        }\n\n        // XXX: check color content and convert to grayscale if insufficient\n\n        var histo = getHisto(pixels),\n            histosize = 1 << (3 * sigbits);\n\n        // check that we aren't below maxcolors already\n        var nColors = 0;\n        histo.forEach(function() {\n            nColors++\n        });\n        if (nColors <= maxcolors) {\n            // XXX: generate the new colors from the histo and return\n        }\n\n        // get the beginning vbox from the colors\n        var vbox = vboxFromPixels(pixels, histo),\n            pq = new PQueue(function(a, b) {\n                return pv.naturalOrder(a.count(), b.count())\n            });\n        pq.push(vbox);\n\n        // inner function to do the iteration\n\n        function iter(lh, target) {\n            var ncolors = 1,\n                niters = 0,\n                vbox;\n            while (niters < maxIterations) {\n                vbox = lh.pop();\n                if (!vbox.count()) { /* just put it back */\n                    lh.push(vbox);\n                    niters++;\n                    continue;\n                }\n                // do the cut\n                var vboxes = medianCutApply(histo, vbox),\n                    vbox1 = vboxes[0],\n                    vbox2 = vboxes[1];\n\n                if (!vbox1) {\n                    // console.log(\"vbox1 not defined; shouldn't happen!\");\n                    return;\n                }\n                lh.push(vbox1);\n                if (vbox2) { /* vbox2 can be null */\n                    lh.push(vbox2);\n                    ncolors++;\n                }\n                if (ncolors >= target) return;\n                if (niters++ > maxIterations) {\n                    // console.log(\"infinite loop; perhaps too few pixels!\");\n                    return;\n                }\n            }\n        }\n\n        // first set of colors, sorted by population\n        iter(pq, fractByPopulations * maxcolors);\n        // console.log(pq.size(), pq.debug().length, pq.debug().slice());\n\n        // Re-sort by the product of pixel occupancy times the size in color space.\n        var pq2 = new PQueue(function(a, b) {\n            return pv.naturalOrder(a.count() * a.volume(), b.count() * b.volume())\n        });\n        while (pq.size()) {\n            pq2.push(pq.pop());\n        }\n\n        // next set - generate the median cuts using the (npix * vol) sorting.\n        iter(pq2, maxcolors - pq2.size());\n\n        // calculate the actual colors\n        var cmap = new CMap();\n        while (pq2.size()) {\n            cmap.push(pq2.pop());\n        }\n\n        return cmap;\n    }\n\n    return {\n        quantize: quantize\n    }\n})();\n\nmodule.exports = MMCQ.quantize\n\n\n//# sourceURL=webpack:///./node_modules/quantize/quantize.js?");

/***/ }),

/***/ "./src/GreenScreenStream.js":
/*!**********************************!*\
  !*** ./src/GreenScreenStream.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst demolishedrenderer_1 = __webpack_require__(/*! demolishedrenderer */ \"./node_modules/demolishedrenderer/index.js\");\nconst quantize_1 = __importDefault(__webpack_require__(/*! quantize */ \"./node_modules/quantize/quantize.js\"));\nclass GreenScreenStream {\n    /**\n     *Creates an instance of GreenScreenStream.\n     * @param {string} backgroudImage backgound image that replaces the \"green\"\n     * @param {HTMLCanvasElement} [canvas] HTML5 Canvas element to render to, optional\n     * @param {number} [width] width of the HTML5 Canvas element, optional.\n     * @param {number} [height] height of the HTML5 Canvas element, optional.\n     * @memberof GreenScreenStream\n     */\n    constructor(backgroudImage, canvas, width, height) {\n        this.mainFrag = `uniform vec2 resolution;\n    uniform sampler2D A;\n    out vec4 fragColor;\n    void main(){\n        vec2 uv = gl_FragCoord.xy/resolution.xy;\n        \n        fragColor = texture(A, uv);\n    }`;\n        this.mainVert = `layout(location = 0) in vec2 pos; \n    out vec4 fragColor;                \n    void main() { \n        gl_Position = vec4(pos.xy,0.0,1.0);\n    }    \n    `;\n        this.bufferFrag = `uniform float time;\n    uniform vec2 resolution;   \n    uniform sampler2D webcam;\n    uniform sampler2D background;\n    out vec4 fragColor;\n\n    void mainImage( out vec4 fragColor, in vec2 fragCoord )\n    {\n        vec2 q = 1. - fragCoord.xy / resolution.xy;\n    \n        vec3 bg = texture( background, q ).xyz;\n        vec3 fg = texture( webcam, q ).xyz;\n        \n        float maxrb = max( fg.r, fg.b );\n        \n        float k = clamp( (fg.g-maxrb)*5.0, 0.0, 1.0 );\n                \n        float ll = length( fg );\n        fg.g = min( fg.g, maxrb*0.8 );\n        fg = ll*normalize(fg);\n    \n        fragColor = vec4( mix(fg, bg, k), 1.0 );\n}\n\n    void main(){    \n        mainImage(fragColor,gl_FragCoord.xy);\n      \n    }`;\n        if (canvas) {\n            this.canvas = canvas;\n        }\n        else {\n            this.canvas = document.createElement(\"canvas\");\n            this.canvas.width = width || 800;\n            this.canvas.height = height || 450;\n        }\n        this.ctx = this.canvas.getContext(\"webgl2\");\n        this.mediaStream = new MediaStream();\n        this.renderer = new demolishedrenderer_1.DR(this.canvas, this.mainVert, this.mainFrag);\n        this.renderer.aA({\n            \"background\": {\n                num: 33985,\n                src: backgroudImage\n            },\n            \"webcam\": {\n                num: 33984,\n                fn: (gl, texture) => {\n                    gl.bindTexture(gl.TEXTURE_2D, texture);\n                    gl.texImage2D(3553, 0, 6408, 6408, 5121, this.video);\n                    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);\n                    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);\n                    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);\n                    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);\n                }\n            }\n        }, () => {\n            this.renderer.aB(\"A\", this.mainVert, this.bufferFrag, [\"webcam\", \"background\"]);\n        });\n    }\n    getColorsFromStream() {\n        let glCanvas = this.canvas;\n        let tempCanvas = document.createElement(\"canvas\");\n        tempCanvas.width = glCanvas.width;\n        tempCanvas.height = glCanvas.height;\n        let ctx = tempCanvas.getContext(\"2d\");\n        ctx.drawImage(this.video, 0, 0);\n        let imageData = ctx.getImageData(0, 0, tempCanvas.width, tempCanvas.height);\n        const pixels = this.canvas.width * this.canvas.height;\n        return {\n            palette: this.pallette(imageData, pixels),\n            dominant: this.dominant(imageData, pixels)\n        };\n    }\n    /**\n     * Start render the new media stream\n     *\n     * @param {number} [fps] Frames per second\n     * @memberof GreenScreenStream\n     */\n    render(fps) {\n        this.renderer.run(0, fps || 25);\n    }\n    /**\n     * Add a MediaStreamTrack track (i.e webcam )\n     *\n     * @param {MediaStreamTrack} track\n     * @memberof GreenScreenStream\n     */\n    addVideoTrack(track) {\n        this.mediaStream.addTrack(track);\n        this.video = document.createElement(\"video\");\n        this.video.autoplay = true;\n        this.video.srcObject = this.mediaStream;\n        this.video.play();\n    }\n    /**\n     * Capture the rendered result to a MediaStream\n     *\n     * @param {number} [fps] Frames per second\n     * @returns {MediaStream}\n     * @memberof GreenScreenStream\n     */\n    captureStream(fps) {\n        return this.canvas[\"captureStream\"](fps || 25);\n    }\n    /**\n     *  Get an instance instance of GreenScreenStream.\n     * @static\n      * @param {string} backgroudImage backgound image that replaces the \"green\"\n     * @param {HTMLCanvasElement} [canvas] HTML5 Canvas element to render to, optional\n     * @param {number} [width] width of the HTML5 Canvas element, optional.\n     * @param {number} [height] height of the HTML5 Canvas element, optiona\n     * @returns {GreenScreenStream}\n     * @memberof GreenScreenStream\n     */\n    static getInstance(backgroudImage, canvas, width, height) {\n        return new GreenScreenStream(backgroudImage, canvas, width, height);\n    }\n    pixelArray(pixels, pixelCount, quality) {\n        const pixelArray = [];\n        for (let i = 0, offset, r, g, b, a; i < pixelCount; i = i + quality) {\n            offset = i * 4;\n            r = pixels[offset + 0];\n            g = pixels[offset + 1];\n            b = pixels[offset + 2];\n            a = pixels[offset + 3];\n            if (typeof a === 'undefined' || a >= 125) {\n                if (!(r > 250 && g > 250 && b > 250)) {\n                    pixelArray.push([r, g, b]);\n                }\n            }\n        }\n        return pixelArray;\n    }\n    dominant(imageData, pixelCount) {\n        const p = this.pallette(imageData, pixelCount);\n        const d = p[0];\n        return d;\n    }\n    ;\n    pallette(imageData, pixelCount) {\n        const pixelArray = this.pixelArray(imageData.data, pixelCount, 10);\n        const cmap = quantize_1.default(pixelArray, 8);\n        const palette = cmap ? cmap.palette() : null;\n        return palette;\n    }\n    ;\n}\nexports.GreenScreenStream = GreenScreenStream;\n\n\n//# sourceURL=webpack:///./src/GreenScreenStream.js?");

/***/ })

/******/ });