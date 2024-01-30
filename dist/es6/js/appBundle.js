/**
 * App version: 1.0.0
 * SDK version: 5.5.0
 * CLI version: 2.13.0
 * 
 * Generated: Tue, 30 Jan 2024 19:23:36 GMT
 */

var APP_com_domain_app_ottdemoapplng = (function () {
  'use strict';

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  const settings$1 = {};
  const subscribers$1 = {};
  const initSettings$1 = (appSettings, platformSettings) => {
    settings$1['app'] = appSettings;
    settings$1['platform'] = platformSettings;
    settings$1['user'] = {};
  };
  const publish$1 = (key, value) => {
    subscribers$1[key] && subscribers$1[key].forEach(subscriber => subscriber(value));
  };
  const dotGrab$2 = function () {
    let obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    let key = arguments.length > 1 ? arguments[1] : undefined;
    if (obj === null) return undefined;
    const keys = key.split('.');
    for (let i = 0; i < keys.length; i++) {
      obj = obj[keys[i]] = obj[keys[i]] !== undefined ? obj[keys[i]] : {};
    }
    return typeof obj === 'object' && obj !== null ? Object.keys(obj).length ? obj : undefined : obj;
  };
  var Settings$2 = {
    get(type, key) {
      let fallback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
      const val = dotGrab$2(settings$1[type], key);
      return val !== undefined ? val : fallback;
    },
    has(type, key) {
      return !!this.get(type, key);
    },
    set(key, value) {
      settings$1['user'][key] = value;
      publish$1(key, value);
    },
    subscribe(key, callback) {
      subscribers$1[key] = subscribers$1[key] || [];
      subscribers$1[key].push(callback);
    },
    unsubscribe(key, callback) {
      if (callback) {
        const index = subscribers$1[key] && subscribers$1[key].findIndex(cb => cb === callback);
        index > -1 && subscribers$1[key].splice(index, 1);
      } else {
        if (key in subscribers$1) {
          subscribers$1[key] = [];
        }
      }
    },
    clearSubscribers() {
      for (const key of Object.getOwnPropertyNames(subscribers$1)) {
        delete subscribers$1[key];
      }
    }
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  const prepLog = (type, args) => {
    const colors = {
      Info: 'green',
      Debug: 'gray',
      Warn: 'orange',
      Error: 'red'
    };
    args = Array.from(args);
    return ['%c' + (args.length > 1 && typeof args[0] === 'string' ? args.shift() : type), 'background-color: ' + colors[type] + '; color: white; padding: 2px 4px; border-radius: 2px', args];
  };
  var Log$1 = {
    info() {
      Settings$2.get('platform', 'log') && console.log.apply(console, prepLog('Info', arguments));
    },
    debug() {
      Settings$2.get('platform', 'log') && console.debug.apply(console, prepLog('Debug', arguments));
    },
    error() {
      Settings$2.get('platform', 'log') && console.error.apply(console, prepLog('Error', arguments));
    },
    warn() {
      Settings$2.get('platform', 'log') && console.warn.apply(console, prepLog('Warn', arguments));
    }
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  var t = window.lng;

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  class ColorShift extends t.shaders.WebGLDefaultShader {
    set brightness(v) {
      this._brightness = (v - 50) / 100;
      this.redraw();
    }
    set contrast(v) {
      this._contrast = (v + 50) / 100;
      this.redraw();
    }
    set gamma(v) {
      this._gamma = (v + 50) / 100;
      this.redraw();
    }
    setupUniforms(operation) {
      super.setupUniforms(operation);
      const gl = this.gl;
      this._setUniform('colorAdjust', [this._brightness || 0.0, this._contrast || 1.0, this._gamma || 1.0], gl.uniform3fv);
    }
  }
  ColorShift.before = "\n    #ifdef GL_ES\n    # ifdef GL_FRAGMENT_PRECISION_HIGH\n    precision highp float;\n    # else\n    precision lowp float;\n    # endif\n    #endif\n        \n    varying vec2 vTextureCoord;\n    varying vec4 vColor;\n    uniform sampler2D uSampler;\n    uniform vec3 colorAdjust;\n    \n    const mat3 RGBtoOpponentMat = mat3(0.2814, -0.0971, -0.0930, 0.6938, 0.1458,-0.2529, 0.0638, -0.0250, 0.4665);\n    const mat3 OpponentToRGBMat = mat3(1.1677, 0.9014, 0.7214, -6.4315, 2.5970, 0.1257, -0.5044, 0.0159, 2.0517);    \n";
  ColorShift.after = "    \n    vec3 brightnessContrast(vec3 value, float brightness, float contrast)\n    {\n        return (value - 0.5) * contrast + 0.5 + brightness;\n    }   \n    \n    vec3 updateGamma(vec3 value, float param)\n    {\n        return vec3(pow(abs(value.r), param),pow(abs(value.g), param),pow(abs(value.b), param));\n    } \n       \n    void main(void){\n        vec4 fragColor = texture2D(uSampler, vTextureCoord);        \n        vec4 color = filter(fragColor) * vColor;       \n        \n        vec3 bc = brightnessContrast(color.rgb,colorAdjust[0],colorAdjust[1]);        \n        vec3 ga = updateGamma(bc.rgb, colorAdjust[2]);  \n              \n        gl_FragColor = vec4(ga.rgb, color.a);          \n    }    \n";

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  class ProtanopiaShader extends ColorShift {}
  ProtanopiaShader.fragmentShaderSource = "\n    ".concat(ColorShift.before, "    \n    vec4 vision(vec4 color)\n    {\n        vec4 r = vec4( 0.20,  0.99, -0.19, 0.0);\n        vec4 g = vec4( 0.16,  0.79,  0.04, 0.0);\n        vec4 b = vec4( 0.01, -0.01,  1.00, 0.0);\n       \n        return vec4(dot(color, r), dot(color, g), dot(color, b), color.a);\t\n    }\n    \n    vec4 filter( vec4 color )\n    {   \n        vec3 opponentColor = RGBtoOpponentMat * vec3(color.r, color.g, color.b);\n        opponentColor.x -= opponentColor.y * 1.5; \n        vec3 rgbColor = OpponentToRGBMat * opponentColor;\n        return vision(vec4(rgbColor.r, rgbColor.g, rgbColor.b, color.a));      \n    }    \n    ").concat(ColorShift.after, " \n");

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  class DeuteranopiaShader extends ColorShift {}
  DeuteranopiaShader.fragmentShaderSource = "\n    ".concat(ColorShift.before, "\n    vec4 vision(vec4 color)\n    {\n        vec4 r = vec4( 0.43,  0.72, -0.15, 0.0 );\n        vec4 g = vec4( 0.34,  0.57,  0.09, 0.0 );\n        vec4 b = vec4(-0.02,  0.03,  1.00, 0.0 );\n       \n        return vec4(dot(color, r), dot(color, g), dot(color, b), color.a);\t\n    }\n       \n    vec4 filter( vec4 color )\n    {   \n        vec3 opponentColor = RGBtoOpponentMat * vec3(color.r, color.g, color.b);\n        opponentColor.x -= opponentColor.y * 1.5; \n        vec3 rgbColor = OpponentToRGBMat * opponentColor;\n        return vision(vec4(rgbColor.r, rgbColor.g, rgbColor.b, color.a));    \n    }\n    ").concat(ColorShift.after, "    \n");

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  class TritanopiaShader extends ColorShift {}
  TritanopiaShader.fragmentShaderSource = "\n    ".concat(ColorShift.before, "    \n    vec4 vision(vec4 color)\n    {\n        vec4 r = vec4( 0.97,  0.11, -0.08, 0.0 );\n        vec4 g = vec4( 0.02,  0.82,  0.16, 0.0 );\n        vec4 b = vec4(-0.06,  0.88,  0.18, 0.0 );\n       \n        return vec4(dot(color, r), dot(color, g), dot(color, b), color.a);\t\n    }   \n    \n    vec4 filter( vec4 color )\n    {   \n        vec3 opponentColor = RGBtoOpponentMat * vec3(color.r, color.g, color.b);\n        opponentColor.x -= ((3.0 * opponentColor.z) - opponentColor.y) * 0.25;\n        vec3 rgbColor = OpponentToRGBMat * opponentColor;\n        return vision(vec4(rgbColor.r, rgbColor.g, rgbColor.b, color.a));\n    }   \n    ").concat(ColorShift.after, " \n");

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  class NeutralShader extends ColorShift {}
  NeutralShader.fragmentShaderSource = "\n    ".concat(ColorShift.before, "\n    vec4 filter( vec4 color )\n    {\n        return color;\n    }\n    ").concat(ColorShift.after, "\n");

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  class MonochromacyShader extends ColorShift {}
  MonochromacyShader.fragmentShaderSource = "\n    ".concat(ColorShift.before, "\n    vec4 filter( vec4 color )\n    {   \n        float grey = dot(color.rgb, vec3(0.299, 0.587, 0.114));\n        return vec4(vec3(grey, grey, grey), 1.0 ); \n    }\n    ").concat(ColorShift.after, "\n");

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  const colorshiftShader = type => {
    const shadersMap = {
      normal: NeutralShader,
      monochromacy: MonochromacyShader,
      deuteranopia: DeuteranopiaShader,
      tritanopia: TritanopiaShader,
      protanopia: ProtanopiaShader
    };
    type = typeof type === 'string' && type.toLowerCase() || null;
    return Object.keys(shadersMap).indexOf(type) > -1 ? shadersMap[type] : false;
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  /* global SpeechSynthesisErrorEvent */
  function flattenStrings() {
    let series = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    const flattenedSeries = [];
    for (var i = 0; i < series.length; i++) {
      if (typeof series[i] === 'string' && !series[i].includes('PAUSE-')) {
        flattenedSeries.push(series[i]);
      } else {
        break;
      }
    }
    // add a "word boundary" to ensure the Announcer doesn't automatically try to
    // interpret strings that look like dates but are not actually dates
    // for example, if "Rising Sun" and "1993" are meant to be two separate lines,
    // when read together, "Sun 1993" is interpretted as "Sunday 1993"
    return [flattenedSeries.join(',\b ')].concat(series.slice(i));
  }
  function delay(pause) {
    return new Promise(resolve => {
      setTimeout(resolve, pause);
    });
  }

  /**
   * Speak a string
   *
   * @param {string} phrase Phrase to speak
   * @param {SpeechSynthesisUtterance[]} utterances An array which the new SpeechSynthesisUtterance instance representing this utterance will be appended
   * @return {Promise<void>} Promise resolved when the utterance has finished speaking, and rejected if there's an error
   */
  function speak(phrase, utterances) {
    let lang = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'en-US';
    const synth = window.speechSynthesis;
    return new Promise((resolve, reject) => {
      const utterance = new SpeechSynthesisUtterance(phrase);
      utterance.lang = lang;
      utterance.onend = () => {
        resolve();
      };
      utterance.onerror = e => {
        reject(e);
      };
      utterances.push(utterance);
      synth.speak(utterance);
    });
  }
  function speakSeries(series, lang) {
    let root = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    const synth = window.speechSynthesis;
    const remainingPhrases = flattenStrings(Array.isArray(series) ? series : [series]);
    const nestedSeriesResults = [];
    /*
      We hold this array of SpeechSynthesisUtterances in order to prevent them from being
      garbage collected prematurely on STB hardware which can cause the 'onend' events of
      utterances to not fire consistently.
    */
    const utterances = [];
    let active = true;
    const seriesChain = (async () => {
      try {
        while (active && remainingPhrases.length) {
          const phrase = await Promise.resolve(remainingPhrases.shift());
          if (!active) {
            // Exit
            // Need to check this after the await in case it was cancelled in between
            break;
          } else if (typeof phrase === 'string' && phrase.includes('PAUSE-')) {
            // Pause it
            let pause = phrase.split('PAUSE-')[1] * 1000;
            if (isNaN(pause)) {
              pause = 0;
            }
            await delay(pause);
          } else if (typeof phrase === 'string' && phrase.length) {
            // Speak it
            const totalRetries = 3;
            let retriesLeft = totalRetries;
            while (active && retriesLeft > 0) {
              try {
                await speak(phrase, utterances, lang);
                retriesLeft = 0;
              } catch (e) {
                // eslint-disable-next-line no-undef
                if (e instanceof SpeechSynthesisErrorEvent) {
                  if (e.error === 'network') {
                    retriesLeft--;
                    console.warn("Speech synthesis network error. Retries left: ".concat(retriesLeft));
                    await delay(500 * (totalRetries - retriesLeft));
                  } else if (e.error === 'canceled' || e.error === 'interrupted') {
                    // Cancel or interrupt error (ignore)
                    retriesLeft = 0;
                  } else {
                    throw new Error("SpeechSynthesisErrorEvent: ".concat(e.error));
                  }
                } else {
                  throw e;
                }
              }
            }
          } else if (typeof phrase === 'function') {
            const seriesResult = speakSeries(phrase(), lang, false);
            nestedSeriesResults.push(seriesResult);
            await seriesResult.series;
          } else if (Array.isArray(phrase)) {
            // Speak it (recursively)
            const seriesResult = speakSeries(phrase, lang, false);
            nestedSeriesResults.push(seriesResult);
            await seriesResult.series;
          }
        }
      } finally {
        active = false;
      }
    })();
    return {
      series: seriesChain,
      get active() {
        return active;
      },
      append: toSpeak => {
        remainingPhrases.push(toSpeak);
      },
      cancel: () => {
        if (!active) {
          return;
        }
        if (root) {
          synth.cancel();
        }
        nestedSeriesResults.forEach(nestedSeriesResults => {
          nestedSeriesResults.cancel();
        });
        active = false;
      }
    };
  }
  let currentSeries;
  function SpeechEngine (toSpeak, lang) {
    currentSeries && currentSeries.cancel();
    currentSeries = speakSeries(toSpeak, lang);
    return currentSeries;
  }

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *
   * Code from: https://github.com/jashkenas/underscore is
   * Copyright (c) 2009-2022 Jeremy Ashkenas, Julian Gonggrijp, and DocumentCloud and Investigative Reporters & Editors
   * Licensed under the MIT License based off:
   * http://unscriptable.com/2009/03/20/debouncing-javascript-methods/ which is:
   * Copyright (c) 2007-2009 unscriptable.com and John M. Hann
   * Licensed under the MIT License (with X11 advertising exception)
   */

  function getElmName(elm) {
    return elm.ref || elm.constructor.name;
  }

  /**
   * Returns a function, that, as long as it continues to be invoked, will not
   * be triggered. The function will be called after it stops being called for
   * N milliseconds. If `immediate` is passed, trigger the function on the
   * leading edge, instead of the trailing. The function also has a property 'clear'
   * that is a function which will clear the timer to prevent previously scheduled executions.
   *
   * @source underscore.js
   * @see http://unscriptable.com/2009/03/20/debouncing-javascript-methods/
   * @param {Function} function to wrap
   * @param {Number} timeout in ms (`100`)
   * @param {Boolean} whether to execute at the beginning (`false`)
   * @api public
   */
  function debounce(func, wait, immediate) {
    var timeout, args, context, timestamp, result;
    if (null == wait) wait = 100;
    function later() {
      var last = Date.now() - timestamp;
      if (last < wait && last >= 0) {
        timeout = setTimeout(later, wait - last);
      } else {
        timeout = null;
        if (!immediate) {
          result = func.apply(context, args);
          context = args = null;
        }
      }
    }
    var debounced = function () {
      context = this;
      args = arguments;
      timestamp = Date.now();
      var callNow = immediate && !timeout;
      if (!timeout) timeout = setTimeout(later, wait);
      if (callNow) {
        result = func.apply(context, args);
        context = args = null;
      }
      return result;
    };
    debounced.clear = function () {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
    };
    debounced.flush = function () {
      if (timeout) {
        result = func.apply(context, args);
        context = args = null;
        clearTimeout(timeout);
        timeout = null;
      }
    };
    return debounced;
  }

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  let resetFocusPathTimer;
  let prevFocusPath = [];
  let currentlySpeaking;
  let voiceOutDisabled = false;
  const fiveMinutes = 300000;
  function onFocusChangeCore() {
    let focusPath = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    if (!Announcer.enabled) {
      return;
    }
    const loaded = focusPath.every(elm => !elm.loading);
    const focusDiff = focusPath.filter(elm => !prevFocusPath.includes(elm));
    resetFocusPathTimer();
    if (!loaded) {
      Announcer.onFocusChange();
      return;
    }
    prevFocusPath = focusPath.slice(0);
    let toAnnounceText = [];
    let toAnnounce = focusDiff.reduce((acc, elm) => {
      if (elm.announce) {
        acc.push([getElmName(elm), 'Announce', elm.announce]);
        toAnnounceText.push(elm.announce);
      } else if (elm.title) {
        acc.push([getElmName(elm), 'Title', elm.title]);
        toAnnounceText.push(elm.title);
      }
      return acc;
    }, []);
    focusDiff.reverse().reduce((acc, elm) => {
      if (elm.announceContext) {
        acc.push([getElmName(elm), 'Context', elm.announceContext]);
        toAnnounceText.push(elm.announceContext);
      } else {
        acc.push([getElmName(elm), 'No Context', '']);
      }
      return acc;
    }, toAnnounce);
    if (Announcer.debug) {
      console.table(toAnnounce);
    }
    if (toAnnounceText.length) {
      return Announcer.speak(toAnnounceText.reduce((acc, val) => acc.concat(val), []));
    }
  }
  function textToSpeech(toSpeak) {
    if (voiceOutDisabled) {
      return;
    }
    return currentlySpeaking = SpeechEngine(toSpeak);
  }
  const Announcer = {
    enabled: true,
    debug: false,
    cancel: function () {
      currentlySpeaking && currentlySpeaking.cancel();
    },
    clearPrevFocus: function () {
      let depth = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      prevFocusPath = prevFocusPath.slice(0, depth);
      resetFocusPathTimer();
    },
    speak: function (text) {
      let {
        append = false,
        notification = false
      } = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      if (Announcer.enabled) {
        Announcer.onFocusChange.flush();
        if (append && currentlySpeaking && currentlySpeaking.active) {
          currentlySpeaking.append(text);
        } else {
          Announcer.cancel();
          textToSpeech(text);
        }
        if (notification) {
          voiceOutDisabled = true;
          currentlySpeaking.series.finally(() => {
            voiceOutDisabled = false;
            Announcer.refresh();
          });
        }
      }
      return currentlySpeaking;
    },
    setupTimers: function () {
      let {
        focusDebounce = 400,
        focusChangeTimeout = fiveMinutes
      } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      Announcer.onFocusChange = debounce(onFocusChangeCore, focusDebounce);
      resetFocusPathTimer = debounce(() => {
        // Reset focus path for full announce
        prevFocusPath = [];
      }, focusChangeTimeout);
    }
  };
  Announcer.setupTimers();

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  var Accessibility = {
    Announcer,
    colorshift(component) {
      let type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      let config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
        brightness: 50,
        contrast: 50,
        gamma: 50
      };
      config = {
        ...{
          brightness: 50,
          contrast: 50,
          gamma: 50
        },
        ...config
      };
      const shader = type && colorshiftShader(type);
      if (shader) {
        Log$1.info('Accessibility Colorshift', type, config);
        component.rtt = true;
        component.shader = {
          type: shader,
          ...config
        };
      } else {
        Log$1.info('Accessibility Colorshift', 'Disabled');
        component.rtt = false;
        component.shader = null;
      }
    }
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  let Log;
  let Settings$1;
  let ApplicationInstance$1;
  let Ads$1;
  let Lightning;
  const initLightningSdkPlugin = {
    set log(v) {
      Log = v;
    },
    set settings(v) {
      Settings$1 = v;
    },
    set ads(v) {
      Ads$1 = v;
    },
    set lightning(v) {
      Lightning = v;
    },
    set appInstance(v) {
      ApplicationInstance$1 = v;
    }
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  const initMetrics = config => {
    sendMetric = config.sendMetric;
  };
  let sendMetric = (type, event, params) => {
    Log.info('Sending metric', type, event, params);
  };

  // available metric per category
  const metrics$1 = {
    app: ['launch', 'loaded', 'ready', 'close'],
    page: ['view', 'leave'],
    user: ['click', 'input'],
    media: ['abort', 'canplay', 'ended', 'pause', 'play',
    // with some videos there occur almost constant suspend events ... should investigate
    // 'suspend',
    'volumechange', 'waiting', 'seeking', 'seeked']
  };

  // error metric function (added to each category)
  const errorMetric = function (type, message, code, visible) {
    let params = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
    params = {
      params,
      ...{
        message,
        code,
        visible
      }
    };
    sendMetric(type, 'error', params);
  };
  const Metric = function (type, events) {
    let options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    return events.reduce((obj, event) => {
      obj[event] = function (name) {
        let params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        params = {
          ...options,
          ...(name ? {
            name
          } : {}),
          ...params
        };
        sendMetric(type, event, params);
      };
      return obj;
    }, {
      error(message, code, params) {
        errorMetric(type, message, code, params);
      },
      event(name, params) {
        sendMetric(type, name, params);
      }
    });
  };
  const Metrics = types => {
    return Object.keys(types).reduce((obj, type) => {
      // media metric works a bit different!
      // it's a function that accepts a url and returns an object with the available metrics
      // url is automatically passed as a param in every metric
      type === 'media' ? obj[type] = url => Metric(type, types[type], {
        url
      }) : obj[type] = Metric(type, types[type]);
      return obj;
    }, {
      error: errorMetric,
      event: sendMetric
    });
  };
  var Metrics$1 = Metrics(metrics$1);

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  const formatLocale = locale => {
    if (locale && locale.length === 2) {
      return "".concat(locale.toLowerCase(), "-").concat(locale.toUpperCase());
    } else {
      return locale;
    }
  };
  const getLocale = defaultValue => {
    if ('language' in navigator) {
      const locale = formatLocale(navigator.language);
      return Promise.resolve(locale);
    } else {
      return Promise.resolve(defaultValue);
    }
  };
  const getLanguage = defaultValue => {
    if ('language' in navigator) {
      const language = formatLocale(navigator.language).slice(0, 2);
      return Promise.resolve(language);
    } else {
      return Promise.resolve(defaultValue);
    }
  };
  const getCountryCode = defaultValue => {
    if ('language' in navigator) {
      const countryCode = formatLocale(navigator.language).slice(3, 5);
      return Promise.resolve(countryCode);
    } else {
      return Promise.resolve(defaultValue);
    }
  };
  const hasOrAskForGeoLocationPermission = () => {
    return new Promise(resolve => {
      // force to prompt for location permission
      if (Settings$1.get('platform', 'forceBrowserGeolocation') === true) resolve(true);
      if ('permissions' in navigator && typeof navigator.permissions.query === 'function') {
        navigator.permissions.query({
          name: 'geolocation'
        }).then(status => {
          resolve(status.state === 'granted' || status.status === 'granted');
        });
      } else {
        resolve(false);
      }
    });
  };
  const getLatLon = defaultValue => {
    return new Promise(resolve => {
      hasOrAskForGeoLocationPermission().then(granted => {
        if (granted === true) {
          if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(
            // success
            result => result && result.coords && resolve([result.coords.latitude, result.coords.longitude]),
            // error
            () => resolve(defaultValue),
            // options
            {
              enableHighAccuracy: true,
              timeout: 5000,
              maximumAge: 0
            });
          } else {
            return queryForLatLon().then(result => resolve(result || defaultValue));
          }
        } else {
          return queryForLatLon().then(result => resolve(result || defaultValue));
        }
      });
    });
  };
  const queryForLatLon = () => {
    return new Promise(resolve => {
      fetch('https://geolocation-db.com/json/').then(response => response.json()).then(_ref => {
        let {
          latitude,
          longitude
        } = _ref;
        return latitude && longitude ? resolve([latitude, longitude]) : resolve(false);
      }).catch(() => resolve(false));
    });
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  const defaultProfile = {
    ageRating: 'adult',
    city: 'New York',
    zipCode: '27505',
    countryCode: () => getCountryCode('US'),
    ip: '127.0.0.1',
    household: 'b2244e9d4c04826ccd5a7b2c2a50e7d4',
    language: () => getLanguage('en'),
    latlon: () => getLatLon([40.7128, 74.006]),
    locale: () => getLocale('en-US'),
    mac: '00:00:00:00:00:00',
    operator: 'metrological',
    platform: 'metrological',
    packages: [],
    uid: 'ee6723b8-7ab3-462c-8d93-dbf61227998e',
    stbType: 'metrological'
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  let getInfo = key => {
    const profile = {
      ...defaultProfile,
      ...Settings$1.get('platform', 'profile')
    };
    return Promise.resolve(typeof profile[key] === 'function' ? profile[key]() : profile[key]);
  };
  let setInfo = (key, params) => {
    if (key in defaultProfile) return defaultProfile[key] = params;
  };
  const initProfile = config => {
    getInfo = config.getInfo ? config.getInfo : getInfo;
    setInfo = config.setInfo ? config.setInfo : setInfo;
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  const initPurchase = config => {
    if (config.billingUrl) config.billingUrl;
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  const defaultChannels = [{
    number: 1,
    name: 'Metro News 1',
    description: 'New York Cable News Channel',
    entitled: true,
    program: {
      title: 'The Morning Show',
      description: "New York's best morning show",
      startTime: new Date(new Date() - 60 * 5 * 1000).toUTCString(),
      // started 5 minutes ago
      duration: 60 * 30,
      // 30 minutes
      ageRating: 0
    }
  }, {
    number: 2,
    name: 'MTV',
    description: 'Music Television',
    entitled: true,
    program: {
      title: 'Beavis and Butthead',
      description: 'American adult animated sitcom created by Mike Judge',
      startTime: new Date(new Date() - 60 * 20 * 1000).toUTCString(),
      // started 20 minutes ago
      duration: 60 * 45,
      // 45 minutes
      ageRating: 18
    }
  }, {
    number: 3,
    name: 'NBC',
    description: 'NBC TV Network',
    entitled: false,
    program: {
      title: 'The Tonight Show Starring Jimmy Fallon',
      description: 'Late-night talk show hosted by Jimmy Fallon on NBC',
      startTime: new Date(new Date() - 60 * 10 * 1000).toUTCString(),
      // started 10 minutes ago
      duration: 60 * 60,
      // 1 hour
      ageRating: 10
    }
  }];
  const channels = () => Settings$1.get('platform', 'tv', defaultChannels);
  const randomChannel = () => channels()[~~(channels.length * Math.random())];

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  let currentChannel;
  const callbacks = {};
  const emit$3 = function (event) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    callbacks[event] && callbacks[event].forEach(cb => {
      cb.apply(null, args);
    });
  };

  // local mock methods
  let methods = {
    getChannel() {
      if (!currentChannel) currentChannel = randomChannel();
      return new Promise((resolve, reject) => {
        if (currentChannel) {
          const channel = {
            ...currentChannel
          };
          delete channel.program;
          resolve(channel);
        } else {
          reject('No channel found');
        }
      });
    },
    getProgram() {
      if (!currentChannel) currentChannel = randomChannel();
      return new Promise((resolve, reject) => {
        currentChannel.program ? resolve(currentChannel.program) : reject('No program found');
      });
    },
    setChannel(number) {
      return new Promise((resolve, reject) => {
        if (number) {
          const newChannel = channels().find(c => c.number === number);
          if (newChannel) {
            currentChannel = newChannel;
            const channel = {
              ...currentChannel
            };
            delete channel.program;
            emit$3('channelChange', channel);
            resolve(channel);
          } else {
            reject('Channel not found');
          }
        } else {
          reject('No channel number supplied');
        }
      });
    }
  };
  const initTV = config => {
    methods = {};
    if (config.getChannel && typeof config.getChannel === 'function') {
      methods.getChannel = config.getChannel;
    }
    if (config.getProgram && typeof config.getProgram === 'function') {
      methods.getProgram = config.getProgram;
    }
    if (config.setChannel && typeof config.setChannel === 'function') {
      methods.setChannel = config.setChannel;
    }
    if (config.emit && typeof config.emit === 'function') {
      config.emit(emit$3);
    }
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  const initPin = config => {
    if (config.submit && typeof config.submit === 'function') {
      config.submit;
    }
    if (config.check && typeof config.check === 'function') {
      config.check;
    }
  };

  var executeAsPromise = (function (method) {
    let args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    let context = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    let result;
    if (method && typeof method === 'function') {
      try {
        result = method.apply(context, args);
      } catch (e) {
        result = e;
      }
    } else {
      result = method;
    }

    // if it looks like a duck .. ehm ... promise and talks like a promise, let's assume it's a promise
    if (result !== null && typeof result === 'object' && result.then && typeof result.then === 'function') {
      return result;
    }
    // otherwise make it into a promise
    else {
      return new Promise((resolve, reject) => {
        if (result instanceof Error) {
          reject(result);
        } else {
          resolve(result);
        }
      });
    }
  });

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  var events$1 = {
    abort: 'Abort',
    canplay: 'CanPlay',
    canplaythrough: 'CanPlayThrough',
    durationchange: 'DurationChange',
    emptied: 'Emptied',
    encrypted: 'Encrypted',
    ended: 'Ended',
    error: 'Error',
    interruptbegin: 'InterruptBegin',
    interruptend: 'InterruptEnd',
    loadeddata: 'LoadedData',
    loadedmetadata: 'LoadedMetadata',
    loadstart: 'LoadStart',
    pause: 'Pause',
    play: 'Play',
    playing: 'Playing',
    progress: 'Progress',
    ratechange: 'Ratechange',
    seeked: 'Seeked',
    seeking: 'Seeking',
    stalled: 'Stalled',
    // suspend: 'Suspend', // this one is called a looooot for some videos
    timeupdate: 'TimeUpdate',
    volumechange: 'VolumeChange',
    waiting: 'Waiting'
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  var autoSetupMixin = (function (sourceObject) {
    let setup = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : () => {};
    let ready = false;
    const doSetup = () => {
      if (ready === false) {
        setup();
        ready = true;
      }
    };
    return Object.keys(sourceObject).reduce((obj, key) => {
      if (typeof sourceObject[key] === 'function') {
        obj[key] = function () {
          doSetup();
          return sourceObject[key].apply(sourceObject, arguments);
        };
      } else if (typeof Object.getOwnPropertyDescriptor(sourceObject, key).get === 'function') {
        obj.__defineGetter__(key, function () {
          doSetup();
          return Object.getOwnPropertyDescriptor(sourceObject, key).get.apply(sourceObject);
        });
      } else if (typeof Object.getOwnPropertyDescriptor(sourceObject, key).set === 'function') {
        obj.__defineSetter__(key, function () {
          doSetup();
          return Object.getOwnPropertyDescriptor(sourceObject, key).set.sourceObject[key].apply(sourceObject, arguments);
        });
      } else {
        obj[key] = sourceObject[key];
      }
      return obj;
    }, {});
  });

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  let timeout = null;
  var easeExecution = ((cb, delay) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      cb();
    }, delay);
  });

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  var VideoTexture = (() => {
    return class VideoTexture extends Lightning.Component {
      static _template() {
        return {
          Video: {
            alpha: 1,
            visible: false,
            pivot: 0.5,
            texture: {
              type: Lightning.textures.StaticTexture,
              options: {}
            }
          }
        };
      }
      set videoEl(v) {
        this._videoEl = v;
      }
      get videoEl() {
        return this._videoEl;
      }
      get videoView() {
        return this.tag('Video');
      }
      get videoTexture() {
        return this.videoView.texture;
      }
      get isVisible() {
        return this.videoView.alpha === 1 && this.videoView.visible === true;
      }
      _init() {
        this._createVideoTexture();
      }
      _createVideoTexture() {
        const stage = this.stage;
        const gl = stage.gl;
        const glTexture = gl.createTexture();
        gl.bindTexture(gl.TEXTURE_2D, glTexture);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        this.videoTexture.options = {
          source: glTexture,
          w: this.videoEl.width,
          h: this.videoEl.height
        };
        this.videoView.w = this.videoEl.width / this.stage.getRenderPrecision();
        this.videoView.h = this.videoEl.height / this.stage.getRenderPrecision();
      }
      start() {
        const stage = this.stage;
        this._lastTime = 0;
        if (!this._updateVideoTexture) {
          this._updateVideoTexture = () => {
            if (this.videoTexture.options.source && this.videoEl.videoWidth && this.active) {
              const gl = stage.gl;
              const currentTime = new Date().getTime();
              const getVideoPlaybackQuality = this.videoEl.getVideoPlaybackQuality();

              // When BR2_PACKAGE_GST1_PLUGINS_BAD_PLUGIN_DEBUGUTILS is not set in WPE, webkitDecodedFrameCount will not be available.
              // We'll fallback to fixed 30fps in this case.
              // As 'webkitDecodedFrameCount' is about to deprecate, check for the 'totalVideoFrames'
              const frameCount = getVideoPlaybackQuality ? getVideoPlaybackQuality.totalVideoFrames : this.videoEl.webkitDecodedFrameCount;
              const mustUpdate = frameCount ? this._lastFrame !== frameCount : this._lastTime < currentTime - 30;
              if (mustUpdate) {
                this._lastTime = currentTime;
                this._lastFrame = frameCount;
                try {
                  gl.bindTexture(gl.TEXTURE_2D, this.videoTexture.options.source);
                  gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, false);
                  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, this.videoEl);
                  this._lastFrame = this.videoEl.webkitDecodedFrameCount;
                  this.videoView.visible = true;
                  this.videoTexture.options.w = this.videoEl.width;
                  this.videoTexture.options.h = this.videoEl.height;
                  const expectedAspectRatio = this.videoView.w / this.videoView.h;
                  const realAspectRatio = this.videoEl.width / this.videoEl.height;
                  if (expectedAspectRatio > realAspectRatio) {
                    this.videoView.scaleX = realAspectRatio / expectedAspectRatio;
                    this.videoView.scaleY = 1;
                  } else {
                    this.videoView.scaleY = expectedAspectRatio / realAspectRatio;
                    this.videoView.scaleX = 1;
                  }
                } catch (e) {
                  Log.error('texImage2d video', e);
                  this.stop();
                }
                this.videoTexture.source.forceRenderUpdate();
              }
            }
          };
        }
        if (!this._updatingVideoTexture) {
          stage.on('frameStart', this._updateVideoTexture);
          this._updatingVideoTexture = true;
        }
      }
      stop() {
        const stage = this.stage;
        stage.removeListener('frameStart', this._updateVideoTexture);
        this._updatingVideoTexture = false;
        this.videoView.visible = false;
        if (this.videoTexture.options.source) {
          const gl = stage.gl;
          gl.bindTexture(gl.TEXTURE_2D, this.videoTexture.options.source);
          gl.clearColor(0, 0, 0, 1);
          gl.clear(gl.COLOR_BUFFER_BIT);
        }
      }
      position(top, left) {
        this.videoView.patch({
          x: left,
          y: top
        });
      }
      size(width, height) {
        this.videoView.patch({
          w: width,
          h: height
        });
      }
      show() {
        this.videoView.alpha = 1;
      }
      hide() {
        this.videoView.alpha = 0;
      }
    };
  });

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  let mediaUrl$1 = url => url;
  let videoEl;
  let videoTexture;
  let metrics;
  let consumer$1;
  let precision = 1;
  let textureMode = false;
  const initVideoPlayer = config => {
    if (config.mediaUrl) {
      mediaUrl$1 = config.mediaUrl;
    }
  };
  // todo: add this in a 'Registry' plugin
  // to be able to always clean this up on app close
  let eventHandlers = {};
  const state$2 = {
    adsEnabled: false,
    playing: false,
    _playingAds: false,
    get playingAds() {
      return this._playingAds;
    },
    set playingAds(val) {
      if (this._playingAds !== val) {
        this._playingAds = val;
        fireOnConsumer$1(val === true ? 'AdStart' : 'AdEnd');
      }
    },
    skipTime: false,
    playAfterSeek: null
  };
  const hooks = {
    play() {
      state$2.playing = true;
    },
    pause() {
      state$2.playing = false;
    },
    seeked() {
      state$2.playAfterSeek === true && videoPlayerPlugin.play();
      state$2.playAfterSeek = null;
    },
    abort() {
      deregisterEventListeners();
    }
  };
  const withPrecision = val => Math.round(precision * val) + 'px';
  const fireOnConsumer$1 = (event, args) => {
    if (consumer$1) {
      consumer$1.fire('$videoPlayer' + event, args, videoEl.currentTime);
      consumer$1.fire('$videoPlayerEvent', event, args, videoEl.currentTime);
    }
  };
  const fireHook = (event, args) => {
    hooks[event] && typeof hooks[event] === 'function' && hooks[event].call(null, event, args);
  };
  let customLoader = null;
  let customUnloader = null;
  const loader$1 = (url, videoEl, config) => {
    return customLoader && typeof customLoader === 'function' ? customLoader(url, videoEl, config) : new Promise(resolve => {
      url = mediaUrl$1(url);
      videoEl.setAttribute('src', url);
      videoEl.load();
      resolve();
    });
  };
  const unloader = videoEl => {
    return customUnloader && typeof customUnloader === 'function' ? customUnloader(videoEl) : new Promise(resolve => {
      videoEl.removeAttribute('src');
      videoEl.load();
      resolve();
    });
  };
  const setupVideoTag = () => {
    const videoEls = document.getElementsByTagName('video');
    if (videoEls && videoEls.length) {
      return videoEls[0];
    } else {
      const videoEl = document.createElement('video');
      const platformSettingsWidth = Settings$1.get('platform', 'width') ? Settings$1.get('platform', 'width') : 1920;
      const platformSettingsHeight = Settings$1.get('platform', 'height') ? Settings$1.get('platform', 'height') : 1080;
      videoEl.setAttribute('id', 'video-player');
      videoEl.setAttribute('width', withPrecision(platformSettingsWidth));
      videoEl.setAttribute('height', withPrecision(platformSettingsHeight));
      videoEl.style.position = 'absolute';
      videoEl.style.zIndex = '1';
      videoEl.style.display = 'none';
      videoEl.style.visibility = 'hidden';
      videoEl.style.top = withPrecision(0);
      videoEl.style.left = withPrecision(0);
      videoEl.style.width = withPrecision(platformSettingsWidth);
      videoEl.style.height = withPrecision(platformSettingsHeight);
      document.body.appendChild(videoEl);
      return videoEl;
    }
  };
  const setUpVideoTexture = () => {
    if (!ApplicationInstance$1.tag('VideoTexture')) {
      const el = ApplicationInstance$1.stage.c({
        type: VideoTexture(),
        ref: 'VideoTexture',
        zIndex: 0,
        videoEl
      });
      ApplicationInstance$1.childList.addAt(el, 0);
    }
    return ApplicationInstance$1.tag('VideoTexture');
  };
  const registerEventListeners = () => {
    Log.info('VideoPlayer', 'Registering event listeners');
    Object.keys(events$1).forEach(event => {
      const handler = e => {
        // Fire a metric for each event (if it exists on the metrics object)
        if (metrics && metrics[event] && typeof metrics[event] === 'function') {
          metrics[event]({
            currentTime: videoEl.currentTime
          });
        }
        // fire an internal hook
        fireHook(event, {
          videoElement: videoEl,
          event: e
        });

        // fire the event (with human friendly event name) to the consumer of the VideoPlayer
        fireOnConsumer$1(events$1[event], {
          videoElement: videoEl,
          event: e
        });
      };
      eventHandlers[event] = handler;
      videoEl.addEventListener(event, handler);
    });
  };
  const deregisterEventListeners = () => {
    Log.info('VideoPlayer', 'Deregistering event listeners');
    Object.keys(eventHandlers).forEach(event => {
      videoEl.removeEventListener(event, eventHandlers[event]);
    });
    eventHandlers = {};
  };
  const videoPlayerPlugin = {
    consumer(component) {
      consumer$1 = component;
    },
    loader(loaderFn) {
      customLoader = loaderFn;
    },
    unloader(unloaderFn) {
      customUnloader = unloaderFn;
    },
    position() {
      let top = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      let left = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      videoEl.style.left = withPrecision(left);
      videoEl.style.top = withPrecision(top);
      if (textureMode === true) {
        videoTexture.position(top, left);
      }
    },
    size() {
      let width = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1920;
      let height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1080;
      videoEl.style.width = withPrecision(width);
      videoEl.style.height = withPrecision(height);
      videoEl.width = parseFloat(videoEl.style.width);
      videoEl.height = parseFloat(videoEl.style.height);
      if (textureMode === true) {
        videoTexture.size(width, height);
      }
    },
    area() {
      let top = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      let right = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1920;
      let bottom = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1080;
      let left = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      this.position(top, left);
      this.size(right - left, bottom - top);
    },
    open(url) {
      let config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      if (!this.canInteract) return;
      metrics = Metrics$1.media(url);
      this.hide();
      deregisterEventListeners();
      if (this.src == url) {
        this.clear().then(this.open(url, config));
      } else {
        const adConfig = {
          enabled: state$2.adsEnabled,
          duration: 300
        };
        if (config.videoId) {
          adConfig.caid = config.videoId;
        }
        Ads$1.get(adConfig, consumer$1).then(ads => {
          state$2.playingAds = true;
          ads.prerolls().then(() => {
            state$2.playingAds = false;
            loader$1(url, videoEl, config).then(() => {
              registerEventListeners();
              this.show();
              this.play();
            }).catch(e => {
              fireOnConsumer$1('Error', {
                videoElement: videoEl,
                event: e
              });

              // This is not API-compliant, as it results in firing "$videoPlayererror" rather than "$videoPlayerError".
              // See docs here for API-compliant events -> https://github.com/Metrological/metrological-sdk/blob/master/docs/plugins/videoplayer.md#event-overview
              // It has been kept for backwards compatability for library consumers who may have already written handler functions to match it.
              fireOnConsumer$1('error', {
                videoElement: videoEl,
                event: e
              });
            });
          });
        });
      }
    },
    reload() {
      if (!this.canInteract) return;
      const url = videoEl.getAttribute('src');
      this.close();
      this.open(url);
    },
    close() {
      Ads$1.cancel();
      if (state$2.playingAds) {
        state$2.playingAds = false;
        Ads$1.stop();
        // call self in next tick
        setTimeout(() => {
          this.close();
        });
      }
      if (!this.canInteract) return;
      this.clear();
      this.hide();
      deregisterEventListeners();
    },
    clear() {
      if (!this.canInteract) return;
      // pause the video first to disable sound
      this.pause();
      if (textureMode === true) videoTexture.stop();
      return unloader(videoEl).then(() => {
        fireOnConsumer$1('Clear', {
          videoElement: videoEl
        });
      });
    },
    play() {
      if (!this.canInteract) return;
      if (textureMode === true) videoTexture.start();
      executeAsPromise(videoEl.play, null, videoEl).catch(e => {
        fireOnConsumer$1('Error', {
          videoElement: videoEl,
          event: e
        });

        // This is not API-compliant, as it results in firing "$videoPlayererror" rather than "$videoPlayerError".
        // See docs here for API-compliant events -> https://github.com/Metrological/metrological-sdk/blob/master/docs/plugins/videoplayer.md#event-overview
        // It has been kept for backwards compatability for library consumers who may have already written handler functions to match it.
        fireOnConsumer$1('error', {
          videoElement: videoEl,
          event: e
        });
      });
    },
    pause() {
      if (!this.canInteract) return;
      videoEl.pause();
    },
    playPause() {
      if (!this.canInteract) return;
      this.playing === true ? this.pause() : this.play();
    },
    mute() {
      let muted = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      if (!this.canInteract) return;
      videoEl.muted = muted;
    },
    loop() {
      let looped = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      videoEl.loop = looped;
    },
    seek(time) {
      if (!this.canInteract) return;
      if (!this.src) return;
      // define whether should continue to play after seek is complete (in seeked hook)
      if (state$2.playAfterSeek === null) {
        state$2.playAfterSeek = !!state$2.playing;
      }
      // pause before actually seeking
      this.pause();
      // currentTime always between 0 and the duration of the video (minus 0.1s to not set to the final frame and stall the video)
      videoEl.currentTime = Math.max(0, Math.min(time, this.duration - 0.1));
    },
    skip(seconds) {
      if (!this.canInteract) return;
      if (!this.src) return;
      state$2.skipTime = (state$2.skipTime || videoEl.currentTime) + seconds;
      easeExecution(() => {
        this.seek(state$2.skipTime);
        state$2.skipTime = false;
      }, 300);
    },
    show() {
      if (!this.canInteract) return;
      if (textureMode === true) {
        videoTexture.show();
      } else {
        videoEl.style.display = 'block';
        videoEl.style.visibility = 'visible';
      }
    },
    hide() {
      if (!this.canInteract) return;
      if (textureMode === true) {
        videoTexture.hide();
      } else {
        videoEl.style.display = 'none';
        videoEl.style.visibility = 'hidden';
      }
    },
    enableAds() {
      let enabled = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      state$2.adsEnabled = enabled;
    },
    /* Public getters */
    get duration() {
      return videoEl && (isNaN(videoEl.duration) ? Infinity : videoEl.duration);
    },
    get currentTime() {
      return videoEl && videoEl.currentTime;
    },
    get muted() {
      return videoEl && videoEl.muted;
    },
    get looped() {
      return videoEl && videoEl.loop;
    },
    get src() {
      return videoEl && videoEl.getAttribute('src');
    },
    get playing() {
      return state$2.playing;
    },
    get playingAds() {
      return state$2.playingAds;
    },
    get canInteract() {
      // todo: perhaps add an extra flag wether we allow interactions (i.e. pauze, mute, etc.) during ad playback
      return state$2.playingAds === false;
    },
    get top() {
      return videoEl && parseFloat(videoEl.style.top);
    },
    get left() {
      return videoEl && parseFloat(videoEl.style.left);
    },
    get bottom() {
      return videoEl && parseFloat(videoEl.style.top - videoEl.style.height);
    },
    get right() {
      return videoEl && parseFloat(videoEl.style.left - videoEl.style.width);
    },
    get width() {
      return videoEl && parseFloat(videoEl.style.width);
    },
    get height() {
      return videoEl && parseFloat(videoEl.style.height);
    },
    get visible() {
      if (textureMode === true) {
        return videoTexture.isVisible;
      } else {
        return videoEl && videoEl.style.display === 'block';
      }
    },
    get adsEnabled() {
      return state$2.adsEnabled;
    },
    // prefixed with underscore to indicate 'semi-private'
    // because it's not recommended to interact directly with the video element
    get _videoEl() {
      return videoEl;
    },
    get _consumer() {
      return consumer$1;
    }
  };
  var VideoPlayer = autoSetupMixin(videoPlayerPlugin, () => {
    precision = ApplicationInstance$1 && ApplicationInstance$1.stage && ApplicationInstance$1.stage.getRenderPrecision() || precision;
    videoEl = setupVideoTag();
    textureMode = Settings$1.get('platform', 'textureMode', false);
    if (textureMode === true) {
      videoEl.setAttribute('crossorigin', 'anonymous');
      videoTexture = setUpVideoTexture();
    }
  });

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  let consumer;
  let getAds = () => {
    // todo: enable some default ads during development, maybe from the settings.json
    return Promise.resolve({
      prerolls: [],
      midrolls: [],
      postrolls: []
    });
  };
  const initAds = config => {
    if (config.getAds) {
      getAds = config.getAds;
    }
  };
  const state$1 = {
    active: false
  };
  const playSlot = function () {
    let slot = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    return slot.reduce((promise, ad) => {
      return promise.then(() => {
        return playAd(ad);
      });
    }, Promise.resolve(null));
  };
  const playAd = ad => {
    return new Promise(resolve => {
      if (state$1.active === false) {
        Log$1.info('Ad', 'Skipping add due to inactive state');
        return resolve();
      }
      // is it safe to rely on videoplayer plugin already created the video tag?
      const videoEl = document.getElementsByTagName('video')[0];
      videoEl.style.display = 'block';
      videoEl.style.visibility = 'visible';
      videoEl.src = mediaUrl$1(ad.url);
      videoEl.load();
      let timeEvents = null;
      let timeout;
      const cleanup = () => {
        // remove all listeners
        Object.keys(handlers).forEach(handler => videoEl.removeEventListener(handler, handlers[handler]));
        resolve();
      };
      const handlers = {
        play() {
          Log$1.info('Ad', 'Play ad', ad.url);
          fireOnConsumer('Play', ad);
          sendBeacon(ad.callbacks, 'defaultImpression');
        },
        ended() {
          fireOnConsumer('Ended', ad);
          sendBeacon(ad.callbacks, 'complete');
          cleanup();
        },
        timeupdate() {
          if (!timeEvents && videoEl.duration) {
            // calculate when to fire the time based events (now that duration is known)
            timeEvents = {
              firstQuartile: videoEl.duration / 4,
              midPoint: videoEl.duration / 2,
              thirdQuartile: videoEl.duration / 4 * 3
            };
            Log$1.info('Ad', 'Calculated quartiles times', {
              timeEvents
            });
          }
          if (timeEvents && timeEvents.firstQuartile && videoEl.currentTime >= timeEvents.firstQuartile) {
            fireOnConsumer('FirstQuartile', ad);
            delete timeEvents.firstQuartile;
            sendBeacon(ad.callbacks, 'firstQuartile');
          }
          if (timeEvents && timeEvents.midPoint && videoEl.currentTime >= timeEvents.midPoint) {
            fireOnConsumer('MidPoint', ad);
            delete timeEvents.midPoint;
            sendBeacon(ad.callbacks, 'midPoint');
          }
          if (timeEvents && timeEvents.thirdQuartile && videoEl.currentTime >= timeEvents.thirdQuartile) {
            fireOnConsumer('ThirdQuartile', ad);
            delete timeEvents.thirdQuartile;
            sendBeacon(ad.callbacks, 'thirdQuartile');
          }
        },
        stalled() {
          fireOnConsumer('Stalled', ad);
          timeout = setTimeout(() => {
            cleanup();
          }, 5000); // make timeout configurable
        },
        canplay() {
          timeout && clearTimeout(timeout);
        },
        error() {
          fireOnConsumer('Error', ad);
          cleanup();
        },
        // this doesn't work reliably on sky box, moved logic to timeUpdate event
        // loadedmetadata() {
        //   // calculate when to fire the time based events (now that duration is known)
        //   timeEvents = {
        //     firstQuartile: videoEl.duration / 4,
        //     midPoint: videoEl.duration / 2,
        //     thirdQuartile: (videoEl.duration / 4) * 3,
        //   }
        // },
        abort() {
          cleanup();
        }
        // todo: pause, resume, mute, unmute beacons
      };
      // add all listeners
      Object.keys(handlers).forEach(handler => videoEl.addEventListener(handler, handlers[handler]));
      videoEl.play();
    });
  };
  const sendBeacon = (callbacks, event) => {
    if (callbacks && callbacks[event]) {
      Log$1.info('Ad', 'Sending beacon', event, callbacks[event]);
      return callbacks[event].reduce((promise, url) => {
        return promise.then(() => fetch(url)
        // always resolve, also in case of a fetch error (so we don't block firing the rest of the beacons for this event)
        // note: for fetch failed http responses don't throw an Error :)
        .then(response => {
          if (response.status === 200) {
            fireOnConsumer('Beacon' + event + 'Sent');
          } else {
            fireOnConsumer('Beacon' + event + 'Failed' + response.status);
          }
          Promise.resolve(null);
        }).catch(() => {
          Promise.resolve(null);
        }));
      }, Promise.resolve(null));
    } else {
      Log$1.info('Ad', 'No callback found for ' + event);
    }
  };
  const fireOnConsumer = (event, args) => {
    if (consumer) {
      consumer.fire('$ad' + event, args);
      consumer.fire('$adEvent', event, args);
    }
  };
  var Ads = {
    get(config, videoPlayerConsumer) {
      if (config.enabled === false) {
        return Promise.resolve({
          prerolls() {
            return Promise.resolve();
          }
        });
      }
      consumer = videoPlayerConsumer;
      return new Promise(resolve => {
        Log$1.info('Ad', 'Starting session');
        getAds(config).then(ads => {
          Log$1.info('Ad', 'API result', ads);
          resolve({
            prerolls() {
              if (ads.preroll) {
                state$1.active = true;
                fireOnConsumer('PrerollSlotImpression', ads);
                sendBeacon(ads.preroll.callbacks, 'slotImpression');
                return playSlot(ads.preroll.ads).then(() => {
                  fireOnConsumer('PrerollSlotEnd', ads);
                  sendBeacon(ads.preroll.callbacks, 'slotEnd');
                  state$1.active = false;
                });
              }
              return Promise.resolve();
            },
            midrolls() {
              return Promise.resolve();
            },
            postrolls() {
              return Promise.resolve();
            }
          });
        });
      });
    },
    cancel() {
      Log$1.info('Ad', 'Cancel Ad');
      state$1.active = false;
    },
    stop() {
      Log$1.info('Ad', 'Stop Ad');
      state$1.active = false;
      // fixme: duplication
      const videoEl = document.getElementsByTagName('video')[0];
      videoEl.pause();
      videoEl.removeAttribute('src');
    }
  };

  var isMergeableObject = function isMergeableObject(value) {
    return isNonNullObject(value) && !isSpecial(value);
  };
  function isNonNullObject(value) {
    return !!value && typeof value === 'object';
  }
  function isSpecial(value) {
    var stringValue = Object.prototype.toString.call(value);
    return stringValue === '[object RegExp]' || stringValue === '[object Date]' || isReactElement(value);
  }

  // see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25
  var canUseSymbol = typeof Symbol === 'function' && Symbol.for;
  var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for('react.element') : 0xeac7;
  function isReactElement(value) {
    return value.$$typeof === REACT_ELEMENT_TYPE;
  }
  function emptyTarget(val) {
    return Array.isArray(val) ? [] : {};
  }
  function cloneUnlessOtherwiseSpecified(value, options) {
    return options.clone !== false && options.isMergeableObject(value) ? deepmerge(emptyTarget(value), value, options) : value;
  }
  function defaultArrayMerge(target, source, options) {
    return target.concat(source).map(function (element) {
      return cloneUnlessOtherwiseSpecified(element, options);
    });
  }
  function getMergeFunction(key, options) {
    if (!options.customMerge) {
      return deepmerge;
    }
    var customMerge = options.customMerge(key);
    return typeof customMerge === 'function' ? customMerge : deepmerge;
  }
  function getEnumerableOwnPropertySymbols(target) {
    return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(target).filter(function (symbol) {
      return Object.propertyIsEnumerable.call(target, symbol);
    }) : [];
  }
  function getKeys(target) {
    return Object.keys(target).concat(getEnumerableOwnPropertySymbols(target));
  }
  function propertyIsOnObject(object, property) {
    try {
      return property in object;
    } catch (_) {
      return false;
    }
  }

  // Protects from prototype poisoning and unexpected merging up the prototype chain.
  function propertyIsUnsafe(target, key) {
    return propertyIsOnObject(target, key) // Properties are safe to merge if they don't exist in the target yet,
    && !(Object.hasOwnProperty.call(target, key) // unsafe if they exist up the prototype chain,
    && Object.propertyIsEnumerable.call(target, key)); // and also unsafe if they're nonenumerable.
  }
  function mergeObject(target, source, options) {
    var destination = {};
    if (options.isMergeableObject(target)) {
      getKeys(target).forEach(function (key) {
        destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
      });
    }
    getKeys(source).forEach(function (key) {
      if (propertyIsUnsafe(target, key)) {
        return;
      }
      if (propertyIsOnObject(target, key) && options.isMergeableObject(source[key])) {
        destination[key] = getMergeFunction(key, options)(target[key], source[key], options);
      } else {
        destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
      }
    });
    return destination;
  }
  function deepmerge(target, source, options) {
    options = options || {};
    options.arrayMerge = options.arrayMerge || defaultArrayMerge;
    options.isMergeableObject = options.isMergeableObject || isMergeableObject;
    // cloneUnlessOtherwiseSpecified is added to `options` so that custom arrayMerge()
    // implementations can use it. The caller may not replace it.
    options.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;
    var sourceIsArray = Array.isArray(source);
    var targetIsArray = Array.isArray(target);
    var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;
    if (!sourceAndTargetTypesMatch) {
      return cloneUnlessOtherwiseSpecified(source, options);
    } else if (sourceIsArray) {
      return options.arrayMerge(target, source, options);
    } else {
      return mergeObject(target, source, options);
    }
  }
  deepmerge.all = function deepmergeAll(array, options) {
    if (!Array.isArray(array)) {
      throw new Error('first argument should be an array');
    }
    return array.reduce(function (prev, next) {
      return deepmerge(prev, next, options);
    }, {});
  };
  var deepmerge_1 = deepmerge;
  var cjs = deepmerge_1;

  /*!
   * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
   *
   * Copyright (c) 2014-2017, Jon Schlinkert.
   * Released under the MIT License.
   */

  function isObject$2(o) {
    return Object.prototype.toString.call(o) === '[object Object]';
  }

  function isPlainObject$1(o) {
    var ctor,prot;

    if (isObject$2(o) === false) return false;

    // If has modified constructor
    ctor = o.constructor;
    if (ctor === undefined) return true;

    // If has modified prototype
    prot = ctor.prototype;
    if (isObject$2(prot) === false) return false;

    // If constructor does not have an Object-specific method
    if (prot.hasOwnProperty('isPrototypeOf') === false) {
      return false;
    }

    // Most likely a plain Object
    return true;
  }

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  let warned = false;
  const deprecated = function () {
    let force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    if (force === true || warned === false) {
      console.warn(["The 'Locale'-plugin in the Lightning-SDK is deprecated and will be removed in future releases.", "Please consider using the new 'Language'-plugin instead.", 'https://rdkcentral.github.io/Lightning-SDK/#/plugins/language'].join('\n\n'));
    }
    warned = true;
  };
  class Locale {
    constructor() {
      this.__enabled = false;
    }

    /**
     * Loads translation object from external json file.
     *
     * @param {String} path Path to resource.
     * @return {Promise}
     */
    async load(path) {
      if (!this.__enabled) {
        return;
      }
      await fetch(path).then(resp => resp.json()).then(resp => {
        this.loadFromObject(resp);
      });
    }

    /**
     * Sets language used by module.
     *
     * @param {String} lang
     */
    setLanguage(lang) {
      deprecated();
      this.__enabled = true;
      this.language = lang;
    }

    /**
     * Returns reference to translation object for current language.
     *
     * @return {Object}
     */
    get tr() {
      deprecated(true);
      return this.__trObj[this.language];
    }

    /**
     * Loads translation object from existing object (binds existing object).
     *
     * @param {Object} trObj
     */
    loadFromObject(trObj) {
      deprecated();
      const fallbackLanguage = 'en';
      if (Object.keys(trObj).indexOf(this.language) === -1) {
        Log$1.warn('No translations found for: ' + this.language);
        if (Object.keys(trObj).indexOf(fallbackLanguage) > -1) {
          Log$1.warn('Using fallback language: ' + fallbackLanguage);
          this.language = fallbackLanguage;
        } else {
          const error = 'No translations found for fallback language: ' + fallbackLanguage;
          Log$1.error(error);
          throw Error(error);
        }
      }
      this.__trObj = trObj;
      for (const lang of Object.values(this.__trObj)) {
        for (const str of Object.keys(lang)) {
          lang[str] = new LocalizedString(lang[str]);
        }
      }
    }
  }

  /**
   * Extended string class used for localization.
   */
  class LocalizedString extends String {
    /**
     * Returns formatted LocalizedString.
     * Replaces each placeholder value (e.g. {0}, {1}) with corresponding argument.
     *
     * E.g.:
     * > new LocalizedString('{0} and {1} and {0}').format('A', 'B');
     * A and B and A
     *
     * @param  {...any} args List of arguments for placeholders.
     */
    format() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      const sub = args.reduce((string, arg, index) => string.split("{".concat(index, "}")).join(arg), this);
      return new LocalizedString(sub);
    }
  }
  var Locale$1 = new Locale();

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  class VersionLabel extends t.Component {
    static _template() {
      return {
        rect: true,
        color: 0xbb0078ac,
        h: 40,
        w: 100,
        x: w => w - 50,
        y: h => h - 50,
        mount: 1,
        Text: {
          w: w => w,
          h: h => h,
          y: 5,
          x: 20,
          text: {
            fontSize: 22,
            lineHeight: 26
          }
        }
      };
    }
    _firstActive() {
      this.tag('Text').text = "APP - v".concat(this.version, "\nSDK - v").concat(this.sdkVersion);
      this.tag('Text').loadTexture();
      this.w = this.tag('Text').renderWidth + 40;
      this.h = this.tag('Text').renderHeight + 5;
    }
  }

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  class FpsIndicator extends t.Component {
    static _template() {
      return {
        rect: true,
        color: 0xffffffff,
        texture: t.Tools.getRoundRect(80, 80, 40),
        h: 80,
        w: 80,
        x: 100,
        y: 100,
        mount: 1,
        Background: {
          x: 3,
          y: 3,
          texture: t.Tools.getRoundRect(72, 72, 36),
          color: 0xff008000
        },
        Counter: {
          w: w => w,
          h: h => h,
          y: 10,
          text: {
            fontSize: 32,
            textAlign: 'center'
          }
        },
        Text: {
          w: w => w,
          h: h => h,
          y: 48,
          text: {
            fontSize: 15,
            textAlign: 'center',
            text: 'FPS'
          }
        }
      };
    }
    _setup() {
      this.config = {
        ...{
          log: false,
          interval: 500,
          threshold: 1
        },
        ...Settings$2.get('platform', 'showFps')
      };
      this.fps = 0;
      this.lastFps = this.fps - this.config.threshold;
      const fpsCalculator = () => {
        this.fps = ~~(1 / this.stage.dt);
      };
      this.stage.on('frameStart', fpsCalculator);
      this.stage.off('framestart', fpsCalculator);
      this.interval = setInterval(this.showFps.bind(this), this.config.interval);
    }
    _firstActive() {
      this.showFps();
    }
    _detach() {
      clearInterval(this.interval);
    }
    showFps() {
      if (Math.abs(this.lastFps - this.fps) <= this.config.threshold) return;
      this.lastFps = this.fps;
      // green
      let bgColor = 0xff008000;
      // orange
      if (this.fps <= 40 && this.fps > 20) bgColor = 0xffffa500;
      // red
      else if (this.fps <= 20) bgColor = 0xffff0000;
      this.tag('Background').setSmooth('color', bgColor);
      this.tag('Counter').text = "".concat(this.fps);
      this.config.log && Log$1.info('FPS', this.fps);
    }
  }

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  var fetchJson = (file => {
    return new Promise((resolve, reject) => {
      var xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function () {
        if (xhr.readyState == XMLHttpRequest.DONE) {
          // file protocol returns 0
          // http(s) protocol returns 200
          if (xhr.status === 0 || xhr.status === 200) resolve(JSON.parse(xhr.responseText));else reject(xhr.statusText);
        }
      };
      xhr.open('GET', file);
      xhr.send(null);
    });
  });

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  let basePath;
  let proxyUrl;
  const initUtils = config => {
    basePath = ensureUrlWithProtocol(makeFullStaticPath(window.location.pathname, config.path || '/'));
    if (config.proxyUrl) {
      proxyUrl = ensureUrlWithProtocol(config.proxyUrl);
    }
  };
  var Utils = {
    asset(relPath) {
      return basePath + relPath;
    },
    proxyUrl(url) {
      let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return proxyUrl ? proxyUrl + '?' + makeQueryString(url, options) : url;
    },
    makeQueryString() {
      return makeQueryString(...arguments);
    },
    // since imageworkers don't work without protocol
    ensureUrlWithProtocol() {
      return ensureUrlWithProtocol(...arguments);
    }
  };
  const ensureUrlWithProtocol = url => {
    if (/^\/[^/]/i.test(url) && /^(?:file:)/i.test(window.location.protocol)) {
      return window.location.protocol + '//' + url;
    }
    if (/^\/\//.test(url)) {
      return window.location.protocol + url;
    }
    if (!/^(?:https?:)/i.test(url)) {
      return window.location.origin + url;
    }
    return url;
  };
  const makeFullStaticPath = function () {
    let pathname = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '/';
    let path = arguments.length > 1 ? arguments[1] : undefined;
    // ensure path has traling slash
    path = path.charAt(path.length - 1) !== '/' ? path + '/' : path;

    // if path is URL, we assume it's already the full static path, so we just return it
    if (/^(?:https?:)?(?:\/\/)/.test(path)) {
      return path;
    }
    if (path.charAt(0) === '/') {
      return path;
    } else {
      // cleanup the pathname (i.e. remove possible index.html)
      pathname = cleanUpPathName(pathname);

      // remove possible leading dot from path
      path = path.charAt(0) === '.' ? path.substr(1) : path;
      // ensure path has leading slash
      path = path.charAt(0) !== '/' ? '/' + path : path;
      return pathname + path;
    }
  };
  const cleanUpPathName = pathname => {
    if (pathname.slice(-1) === '/') return pathname.slice(0, -1);
    const parts = pathname.split('/');
    if (parts[parts.length - 1].indexOf('.') > -1) parts.pop();
    return parts.join('/');
  };
  const makeQueryString = function (url) {
    let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    let type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'url';
    // add operator as an option
    options.operator = 'metrological'; // Todo: make this configurable (via url?)
    // add type (= url or qr) as an option, with url as the value
    options[type] = url;
    return Object.keys(options).map(key => {
      return encodeURIComponent(key) + '=' + encodeURIComponent('' + options[key]);
    }).join('&');
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  let meta = {};
  let translations = {};
  let language = null;
  const initLanguage = function (file) {
    let language = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    return new Promise((resolve, reject) => {
      fetchJson(file).then(json => {
        setTranslations(json);
        // set language (directly or in a promise)
        typeof language === 'object' && 'then' in language && typeof language.then === 'function' ? language.then(lang => setLanguage(lang).then(resolve).catch(reject)).catch(e => {
          Log$1.error(e);
          reject(e);
        }) : setLanguage(language).then(resolve).catch(reject);
      }).catch(() => {
        const error = 'Language file ' + file + ' not found';
        Log$1.error(error);
        reject(error);
      });
    });
  };
  const setTranslations = obj => {
    if ('meta' in obj) {
      meta = {
        ...obj.meta
      };
      delete obj.meta;
    }
    translations = obj;
  };
  const setLanguage = lng => {
    language = null;
    return new Promise((resolve, reject) => {
      if (lng in translations) {
        language = lng;
      } else {
        if ('map' in meta && lng in meta.map && meta.map[lng] in translations) {
          language = meta.map[lng];
        } else if ('default' in meta && meta.default in translations) {
          const error = 'Translations for Language ' + language + ' not found. Using default language ' + meta.default;
          Log$1.warn(error);
          language = meta.default;
        } else {
          const error = 'Translations for Language ' + language + ' not found.';
          Log$1.error(error);
          reject(error);
        }
      }
      if (language) {
        Log$1.info('Setting language to', language);
        const translationsObj = translations[language];
        if (typeof translationsObj === 'object') {
          resolve();
        } else if (typeof translationsObj === 'string') {
          const url = Utils.asset(translationsObj);
          fetchJson(url).then(json => {
            // save the translations for this language (to prevent loading twice)
            translations[language] = json;
            resolve();
          }).catch(e => {
            const error = 'Error while fetching ' + url;
            Log$1.error(error, e);
            reject(error);
          });
        }
      }
    });
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  const registry = {
    eventListeners: [],
    timeouts: [],
    intervals: [],
    targets: []
  };
  var Registry = {
    // Timeouts
    setTimeout(cb, timeout) {
      for (var _len = arguments.length, params = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        params[_key - 2] = arguments[_key];
      }
      const timeoutId = setTimeout(() => {
        registry.timeouts = registry.timeouts.filter(id => id !== timeoutId);
        cb.apply(null, params);
      }, timeout, params);
      Log$1.info('Set Timeout', 'ID: ' + timeoutId);
      registry.timeouts.push(timeoutId);
      return timeoutId;
    },
    clearTimeout(timeoutId) {
      if (registry.timeouts.indexOf(timeoutId) > -1) {
        registry.timeouts = registry.timeouts.filter(id => id !== timeoutId);
        Log$1.info('Clear Timeout', 'ID: ' + timeoutId);
        clearTimeout(timeoutId);
      } else {
        Log$1.error('Clear Timeout', 'ID ' + timeoutId + ' not found');
      }
    },
    clearTimeouts() {
      registry.timeouts.forEach(timeoutId => {
        this.clearTimeout(timeoutId);
      });
    },
    // Intervals
    setInterval(cb, interval) {
      for (var _len2 = arguments.length, params = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        params[_key2 - 2] = arguments[_key2];
      }
      const intervalId = setInterval(() => {
        registry.intervals.filter(id => id !== intervalId);
        cb.apply(null, params);
      }, interval, params);
      Log$1.info('Set Interval', 'ID: ' + intervalId);
      registry.intervals.push(intervalId);
      return intervalId;
    },
    clearInterval(intervalId) {
      if (registry.intervals.indexOf(intervalId) > -1) {
        registry.intervals = registry.intervals.filter(id => id !== intervalId);
        Log$1.info('Clear Interval', 'ID: ' + intervalId);
        clearInterval(intervalId);
      } else {
        Log$1.error('Clear Interval', 'ID ' + intervalId + ' not found');
      }
    },
    clearIntervals() {
      registry.intervals.forEach(intervalId => {
        this.clearInterval(intervalId);
      });
    },
    // Event listeners
    addEventListener(target, event, handler) {
      target.addEventListener(event, handler);
      const targetIndex = registry.targets.indexOf(target) > -1 ? registry.targets.indexOf(target) : registry.targets.push(target) - 1;
      registry.eventListeners[targetIndex] = registry.eventListeners[targetIndex] || {};
      registry.eventListeners[targetIndex][event] = registry.eventListeners[targetIndex][event] || [];
      registry.eventListeners[targetIndex][event].push(handler);
      Log$1.info('Add eventListener', 'Target:', target, 'Event: ' + event, 'Handler:', handler.toString());
    },
    removeEventListener(target, event, handler) {
      const targetIndex = registry.targets.indexOf(target);
      if (targetIndex > -1 && registry.eventListeners[targetIndex] && registry.eventListeners[targetIndex][event] && registry.eventListeners[targetIndex][event].indexOf(handler) > -1) {
        registry.eventListeners[targetIndex][event] = registry.eventListeners[targetIndex][event].filter(fn => fn !== handler);
        Log$1.info('Remove eventListener', 'Target:', target, 'Event: ' + event, 'Handler:', handler.toString());
        target.removeEventListener(event, handler);
        // remove key from event listeners object when no events are registered for that event
        Object.keys(registry.eventListeners[targetIndex]).forEach(event => {
          if (registry.eventListeners[targetIndex][event].length === 0) {
            delete registry.eventListeners[targetIndex][event];
          }
        });
        // remove reference to the target when target has no event listeners registered
        if (Object.keys(registry.eventListeners[targetIndex]).length === 0) {
          registry.targets.splice(targetIndex, 1);
          registry.eventListeners.splice(targetIndex, 1);
        }
      } else {
        Log$1.error('Remove eventListener', 'Not found', 'Target', target, 'Event: ' + event, 'Handler', handler.toString());
      }
    },
    // if `event` is omitted, removes all registered event listeners for target
    // if `target` is also omitted, removes all registered event listeners
    removeEventListeners(target, event) {
      if (target && event) {
        const targetIndex = registry.targets.indexOf(target);
        if (targetIndex > -1) {
          registry.eventListeners[targetIndex][event].forEach(handler => {
            this.removeEventListener(target, event, handler);
          });
        }
      } else if (target) {
        const targetIndex = registry.targets.indexOf(target);
        if (targetIndex > -1) {
          Object.keys(registry.eventListeners[targetIndex]).forEach(_event => {
            this.removeEventListeners(target, _event);
          });
        }
      } else {
        Object.keys(registry.eventListeners).forEach(targetIndex => {
          this.removeEventListeners(registry.targets[targetIndex]);
        });
      }
    },
    // Clear everything (to be called upon app close for proper cleanup)
    clear() {
      this.clearTimeouts();
      this.clearIntervals();
      this.removeEventListeners();
      registry.eventListeners = [];
      registry.timeouts = [];
      registry.intervals = [];
      registry.targets = [];
    }
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  const isObject$1 = v => {
    return typeof v === 'object' && v !== null;
  };
  const isString$1 = v => {
    return typeof v === 'string';
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  let colors = {
    white: '#ffffff',
    black: '#000000',
    red: '#ff0000',
    green: '#00ff00',
    blue: '#0000ff',
    yellow: '#feff00',
    cyan: '#00feff',
    magenta: '#ff00ff'
  };
  const normalizedColors = {
    //store for normalized colors
  };
  const addColors = (colorsToAdd, value) => {
    if (isObject$1(colorsToAdd)) {
      // clean up normalizedColors if they exist in the to be added colors
      Object.keys(colorsToAdd).forEach(color => cleanUpNormalizedColors(color));
      colors = Object.assign({}, colors, colorsToAdd);
    } else if (isString$1(colorsToAdd) && value) {
      cleanUpNormalizedColors(colorsToAdd);
      colors[colorsToAdd] = value;
    }
  };
  const cleanUpNormalizedColors = color => {
    for (let c in normalizedColors) {
      if (c.indexOf(color) > -1) {
        delete normalizedColors[c];
      }
    }
  };
  const initColors = file => {
    return new Promise((resolve, reject) => {
      if (typeof file === 'object') {
        addColors(file);
        return resolve();
      }
      fetchJson(file).then(json => {
        addColors(json);
        return resolve();
      }).catch(() => {
        const error = 'Colors file ' + file + ' not found';
        Log$1.error(error);
        return reject(error);
      });
    });
  };

  var name$1 = "@lightningjs/sdk";
  var version$1 = "5.5.0";
  var license = "Apache-2.0";
  var types = "index.d.ts";
  var scripts = {
  	postinstall: "node ./scripts/postinstall.js",
  	lint: "eslint '**/*.js'",
  	release: "npm publish --access public",
  	typedoc: "typedoc --tsconfig tsconfig.typedoc.json",
  	tsd: "tsd"
  };
  var husky = {
  	hooks: {
  		"pre-commit": "lint-staged"
  	}
  };
  var dependencies = {
  	"@babel/polyfill": "^7.11.5",
  	"@lightningjs/core": "^2.7.0",
  	"@metrological/sdk": "^1.0.0",
  	"@michieljs/execute-as-promise": "^1.0.0",
  	deepmerge: "^4.2.2",
  	"is-plain-object": "^5.0.0",
  	localcookies: "^2.0.0",
  	shelljs: "^0.8.5",
  	"url-polyfill": "^1.1.10",
  	"whatwg-fetch": "^3.0.0"
  };
  var devDependencies = {
  	"@babel/core": "^7.11.6",
  	"@babel/plugin-transform-parameters": "^7.10.5 ",
  	"@babel/plugin-transform-spread": "^7.11.0",
  	"@babel/preset-env": "^7.11.5",
  	"babel-eslint": "^10.1.0",
  	eslint: "^7.10.0",
  	"eslint-config-prettier": "^6.12.0",
  	"eslint-plugin-prettier": "^3.1.4",
  	husky: "^4.3.0",
  	"lint-staged": "^10.4.0",
  	prettier: "^1.19.1",
  	rollup: "^1.32.1",
  	"rollup-plugin-babel": "^4.4.0",
  	tsd: "^0.22.0",
  	typedoc: "^0.23.9"
  };
  var repository = {
  	type: "git",
  	url: "git@github.com:rdkcentral/Lightning-SDK.git"
  };
  var bugs = {
  	url: "https://github.com/rdkcentral/Lightning-SDK/issues"
  };
  var packageInfo = {
  	name: name$1,
  	version: version$1,
  	license: license,
  	types: types,
  	scripts: scripts,
  	"lint-staged": {
  	"*.js": [
  		"eslint --fix"
  	],
  	"src/startApp.js": [
  		"rollup -c ./rollup.config.js"
  	]
  },
  	husky: husky,
  	dependencies: dependencies,
  	devDependencies: devDependencies,
  	repository: repository,
  	bugs: bugs
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  let AppInstance;
  const defaultOptions = {
    stage: {
      w: 1920,
      h: 1080,
      precision: 1,
      clearColor: 0x00000000,
      canvas2d: false
    },
    debug: false,
    defaultFontFace: 'RobotoRegular',
    keys: {
      8: 'Back',
      13: 'Enter',
      27: 'Menu',
      37: 'Left',
      38: 'Up',
      39: 'Right',
      40: 'Down',
      174: 'ChannelDown',
      175: 'ChannelUp',
      178: 'Stop',
      250: 'PlayPause',
      191: 'Search',
      // Use "/" for keyboard
      409: 'Search'
    }
  };
  const customFontFaces = [];
  const fontLoader = (fonts, store) => new Promise((resolve, reject) => {
    fonts.map(_ref => {
      let {
        family,
        url,
        urls,
        descriptors
      } = _ref;
      return () => {
        const src = urls ? urls.map(url => {
          return 'url(' + url + ')';
        }) : 'url(' + url + ')';
        const fontFace = new FontFace(family, src, descriptors || {});
        store.push(fontFace);
        Log$1.info('Loading font', family);
        document.fonts.add(fontFace);
        return fontFace.load();
      };
    }).reduce((promise, method) => {
      return promise.then(() => method());
    }, Promise.resolve(null)).then(resolve).catch(reject);
  });
  function Application (App, appData, platformSettings) {
    const {
      width,
      height
    } = platformSettings;
    if (width && height) {
      defaultOptions.stage['w'] = width;
      defaultOptions.stage['h'] = height;
      defaultOptions.stage['precision'] = width / 1920;
    }

    // support for 720p browser
    if (!width && !height && window.innerHeight === 720) {
      defaultOptions.stage['w'] = 1280;
      defaultOptions.stage['h'] = 720;
      defaultOptions.stage['precision'] = 1280 / 1920;
    }
    return class Application extends t.Application {
      constructor(options) {
        const config = cjs(defaultOptions, options, {
          isMergeableObject: isPlainObject$1
        });
        super(config);
        this.config = config;
      }
      static _template() {
        return {
          w: 1920,
          h: 1080
        };
      }
      colorshift() {
        let type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        let config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        Accessibility.colorshift(this, type, config);
      }
      get keymapping() {
        return this.stage.application.config.keys;
      }

      /**
       * This function overrides the default keymap with the latest keymap.
       * @param customKeyMap
       * @param keepDuplicates
       */
      overrideKeyMap(customKeyMap) {
        let keepDuplicates = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        const baseKeyMap = this.stage.application.config.keys;
        Object.keys(customKeyMap).reduce((keymapping, key) => {
          // prevent duplicate values to exist in final keymapping (i.e. 2 keys triggering 'Back')
          if (!keepDuplicates) {
            Object.keys(baseKeyMap).forEach(baseKey => {
              if (baseKey != key && baseKeyMap[baseKey] == customKeyMap[key]) {
                delete keymapping[baseKey];
              }
            });
          }
          keymapping[key] = customKeyMap[key];
          return keymapping;
        }, baseKeyMap);
        return baseKeyMap;
      }
      _setup() {
        Promise.all([this.loadFonts(App.config && App.config.fonts || App.getFonts && App.getFonts() || []),
        // to be deprecated
        Locale$1.load(App.config && App.config.locale || App.getLocale && App.getLocale()), App.language && this.loadLanguage(App.language()), App.colors && this.loadColors(App.colors())]).then(() => {
          Metrics$1.app.loaded();
          this.w = this.config.stage.w / this.config.stage.precision;
          this.h = this.config.stage.h / this.config.stage.precision;
          AppInstance = this.stage.c({
            ref: 'App',
            type: App,
            zIndex: 1,
            forceZIndexContext: !!platformSettings.showVersion || !!platformSettings.showFps
          });
          this.childList.a(AppInstance);
          this._refocus();
          Log$1.info('App version', this.config.version);
          Log$1.info('SDK version', packageInfo.version);
          if (platformSettings.showVersion) {
            this.childList.a({
              ref: 'VersionLabel',
              type: VersionLabel,
              version: this.config.version,
              sdkVersion: packageInfo.version,
              zIndex: 1
            });
          }
          if (platformSettings.showFps) {
            this.childList.a({
              ref: 'FpsCounter',
              type: FpsIndicator,
              zIndex: 1
            });
          }
          super._setup();
        }).catch(console.error);
      }
      _handleBack() {
        this.closeApp();
      }
      _handleExit() {
        this.closeApp();
      }
      closeApp() {
        Log$1.info('Signaling App Close');
        if (platformSettings.onClose && typeof platformSettings.onClose === 'function') {
          platformSettings.onClose(...arguments);
        } else {
          this.close();
        }
      }
      close() {
        Log$1.info('Closing App');
        Settings$2.clearSubscribers();
        Registry.clear();
        this.childList.remove(this.tag('App'));
        this.cleanupFonts();
        // force texture garbage collect
        this.stage.gc();
        this.destroy();
      }
      loadFonts(fonts) {
        return platformSettings.fontLoader && typeof platformSettings.fontLoader === 'function' ? platformSettings.fontLoader(fonts, customFontFaces) : fontLoader(fonts, customFontFaces);
      }
      cleanupFonts() {
        if ('delete' in document.fonts) {
          customFontFaces.forEach(fontFace => {
            Log$1.info('Removing font', fontFace.family);
            document.fonts.delete(fontFace);
          });
        } else {
          Log$1.info('No support for removing manually-added fonts');
        }
      }
      loadLanguage(config) {
        let file = Utils.asset('translations.json');
        let language = config;
        if (typeof language === 'object') {
          language = config.language || null;
          file = config.file || file;
        }
        return initLanguage(file, language);
      }
      loadColors(config) {
        let file = Utils.asset('colors.json');
        if (config && (typeof config === 'string' || typeof config === 'object')) {
          file = config;
        }
        return initColors(file);
      }
      set focus(v) {
        this._focussed = v;
        this._refocus();
      }
      _getFocused() {
        return this._focussed || this.tag('App');
      }
    };
  }

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  class ScaledImageTexture extends t.textures.ImageTexture {
    constructor(stage) {
      super(stage);
      this._scalingOptions = undefined;
    }
    set options(options) {
      this.resizeMode = this._scalingOptions = options;
    }
    _getLookupId() {
      return "".concat(this._src, "-").concat(this._scalingOptions.type, "-").concat(this._scalingOptions.w, "-").concat(this._scalingOptions.h);
    }
    getNonDefaults() {
      const obj = super.getNonDefaults();
      if (this._src) {
        obj.src = this._src;
      }
      return obj;
    }
  }

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  const events = ['timeupdate', 'error', 'ended', 'loadeddata', 'canplay', 'play', 'playing', 'pause', 'loadstart', 'seeking', 'seeked', 'encrypted'];
  let mediaUrl = url => url;
  const initMediaPlayer = config => {
    if (config.mediaUrl) {
      mediaUrl = config.mediaUrl;
    }
  };
  class Mediaplayer extends t.Component {
    _construct() {
      this._skipRenderToTexture = false;
      this._metrics = null;
      this._textureMode = Settings$2.get('platform', 'textureMode') || false;
      Log$1.info('Texture mode: ' + this._textureMode);
      console.warn(["The 'MediaPlayer'-plugin in the Lightning-SDK is deprecated and will be removed in future releases.", "Please consider using the new 'VideoPlayer'-plugin instead.", 'https://rdkcentral.github.io/Lightning-SDK/#/plugins/videoplayer'].join('\n\n'));
    }
    static _template() {
      return {
        Video: {
          VideoWrap: {
            VideoTexture: {
              visible: false,
              pivot: 0.5,
              texture: {
                type: t.textures.StaticTexture,
                options: {}
              }
            }
          }
        }
      };
    }
    set skipRenderToTexture(v) {
      this._skipRenderToTexture = v;
    }
    get textureMode() {
      return this._textureMode;
    }
    get videoView() {
      return this.tag('Video');
    }
    _init() {
      //re-use videotag if already there
      const videoEls = document.getElementsByTagName('video');
      if (videoEls && videoEls.length > 0) this.videoEl = videoEls[0];else {
        this.videoEl = document.createElement('video');
        this.videoEl.setAttribute('id', 'video-player');
        this.videoEl.style.position = 'absolute';
        this.videoEl.style.zIndex = '1';
        this.videoEl.style.display = 'none';
        this.videoEl.setAttribute('width', '100%');
        this.videoEl.setAttribute('height', '100%');
        this.videoEl.style.visibility = this.textureMode ? 'hidden' : 'visible';
        document.body.appendChild(this.videoEl);
      }
      if (this.textureMode && !this._skipRenderToTexture) {
        this._createVideoTexture();
      }
      this.eventHandlers = [];
    }
    _registerListeners() {
      events.forEach(event => {
        const handler = e => {
          if (this._metrics && this._metrics[event] && typeof this._metrics[event] === 'function') {
            this._metrics[event]({
              currentTime: this.videoEl.currentTime
            });
          }
          this.fire(event, {
            videoElement: this.videoEl,
            event: e
          });
        };
        this.eventHandlers.push(handler);
        this.videoEl.addEventListener(event, handler);
      });
    }
    _deregisterListeners() {
      Log$1.info('Deregistering event listeners MediaPlayer');
      events.forEach((event, index) => {
        this.videoEl.removeEventListener(event, this.eventHandlers[index]);
      });
      this.eventHandlers = [];
    }
    _attach() {
      this._registerListeners();
    }
    _detach() {
      this._deregisterListeners();
      this.close();
    }
    _createVideoTexture() {
      const stage = this.stage;
      const gl = stage.gl;
      const glTexture = gl.createTexture();
      gl.bindTexture(gl.TEXTURE_2D, glTexture);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      this.videoTexture.options = {
        source: glTexture,
        w: this.videoEl.width,
        h: this.videoEl.height
      };
    }
    _startUpdatingVideoTexture() {
      if (this.textureMode && !this._skipRenderToTexture) {
        const stage = this.stage;
        if (!this._updateVideoTexture) {
          this._updateVideoTexture = () => {
            if (this.videoTexture.options.source && this.videoEl.videoWidth && this.active) {
              const gl = stage.gl;
              const currentTime = new Date().getTime();

              // When BR2_PACKAGE_GST1_PLUGINS_BAD_PLUGIN_DEBUGUTILS is not set in WPE, webkitDecodedFrameCount will not be available.
              // We'll fallback to fixed 30fps in this case.
              const frameCount = this.videoEl.webkitDecodedFrameCount;
              const mustUpdate = frameCount ? this._lastFrame !== frameCount : this._lastTime < currentTime - 30;
              if (mustUpdate) {
                this._lastTime = currentTime;
                this._lastFrame = frameCount;
                try {
                  gl.bindTexture(gl.TEXTURE_2D, this.videoTexture.options.source);
                  gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, false);
                  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, this.videoEl);
                  this._lastFrame = this.videoEl.webkitDecodedFrameCount;
                  this.videoTextureView.visible = true;
                  this.videoTexture.options.w = this.videoEl.videoWidth;
                  this.videoTexture.options.h = this.videoEl.videoHeight;
                  const expectedAspectRatio = this.videoTextureView.w / this.videoTextureView.h;
                  const realAspectRatio = this.videoEl.videoWidth / this.videoEl.videoHeight;
                  if (expectedAspectRatio > realAspectRatio) {
                    this.videoTextureView.scaleX = realAspectRatio / expectedAspectRatio;
                    this.videoTextureView.scaleY = 1;
                  } else {
                    this.videoTextureView.scaleY = expectedAspectRatio / realAspectRatio;
                    this.videoTextureView.scaleX = 1;
                  }
                } catch (e) {
                  Log$1.error('texImage2d video', e);
                  this._stopUpdatingVideoTexture();
                  this.videoTextureView.visible = false;
                }
                this.videoTexture.source.forceRenderUpdate();
              }
            }
          };
        }
        if (!this._updatingVideoTexture) {
          stage.on('frameStart', this._updateVideoTexture);
          this._updatingVideoTexture = true;
        }
      }
    }
    _stopUpdatingVideoTexture() {
      if (this.textureMode) {
        const stage = this.stage;
        stage.removeListener('frameStart', this._updateVideoTexture);
        this._updatingVideoTexture = false;
        this.videoTextureView.visible = false;
        if (this.videoTexture.options.source) {
          const gl = stage.gl;
          gl.bindTexture(gl.TEXTURE_2D, this.videoTexture.options.source);
          gl.clearColor(0, 0, 0, 1);
          gl.clear(gl.COLOR_BUFFER_BIT);
        }
      }
    }
    updateSettings() {
      let settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      // The Component that 'consumes' the media player.
      this._consumer = settings.consumer;
      if (this._consumer && this._consumer.getMediaplayerSettings) {
        // Allow consumer to add settings.
        settings = Object.assign(settings, this._consumer.getMediaplayerSettings());
      }
      if (!t.Utils.equalValues(this._stream, settings.stream)) {
        if (settings.stream && settings.stream.keySystem) {
          navigator.requestMediaKeySystemAccess(settings.stream.keySystem.id, settings.stream.keySystem.config).then(keySystemAccess => {
            return keySystemAccess.createMediaKeys();
          }).then(createdMediaKeys => {
            return this.videoEl.setMediaKeys(createdMediaKeys);
          }).then(() => {
            if (settings.stream && settings.stream.src) this.open(settings.stream.src);
          }).catch(() => {
            console.error('Failed to set up MediaKeys');
          });
        } else if (settings.stream && settings.stream.src) {
          // This is here to be backwards compatible, will be removed
          // in future sdk release
          if (Settings$2.get('app', 'hls')) {
            if (!window.Hls) {
              window.Hls = class Hls {
                static isSupported() {
                  console.warn('hls-light not included');
                  return false;
                }
              };
            }
            if (window.Hls.isSupported()) {
              if (!this._hls) this._hls = new window.Hls({
                liveDurationInfinity: true
              });
              this._hls.loadSource(settings.stream.src);
              this._hls.attachMedia(this.videoEl);
              this.videoEl.style.display = 'block';
            }
          } else {
            this.open(settings.stream.src);
          }
        } else {
          this.close();
        }
        this._stream = settings.stream;
      }
      this._setHide(settings.hide);
      this._setVideoArea(settings.videoPos);
    }
    _setHide(hide) {
      if (this.textureMode) {
        this.tag('Video').setSmooth('alpha', hide ? 0 : 1);
      } else {
        this.videoEl.style.visibility = hide ? 'hidden' : 'visible';
      }
    }
    open(url) {
      let settings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
        hide: false,
        videoPosition: null
      };
      // prep the media url to play depending on platform (mediaPlayerplugin)
      url = mediaUrl(url);
      this._metrics = Metrics$1.media(url);
      Log$1.info('Playing stream', url);
      if (this.application.noVideo) {
        Log$1.info('noVideo option set, so ignoring: ' + url);
        return;
      }
      // close the video when opening same url as current (effectively reloading)
      if (this.videoEl.getAttribute('src') === url) {
        this.close();
      }
      this.videoEl.setAttribute('src', url);

      // force hide, then force show (in next tick!)
      // (fixes comcast playback rollover issue)
      this.videoEl.style.visibility = 'hidden';
      this.videoEl.style.display = 'none';
      setTimeout(() => {
        this.videoEl.style.display = 'block';
        this.videoEl.style.visibility = 'visible';
      });
      this._setHide(settings.hide);
      this._setVideoArea(settings.videoPosition || [0, 0, 1920, 1080]);
    }
    close() {
      // We need to pause first in order to stop sound.
      this.videoEl.pause();
      this.videoEl.removeAttribute('src');

      // force load to reset everything without errors
      this.videoEl.load();
      this._clearSrc();
      this.videoEl.style.display = 'none';
    }
    playPause() {
      if (this.isPlaying()) {
        this.doPause();
      } else {
        this.doPlay();
      }
    }
    get muted() {
      return this.videoEl.muted;
    }
    set muted(v) {
      this.videoEl.muted = v;
    }
    get loop() {
      return this.videoEl.loop;
    }
    set loop(v) {
      this.videoEl.loop = v;
    }
    isPlaying() {
      return this._getState() === 'Playing';
    }
    doPlay() {
      this.videoEl.play();
    }
    doPause() {
      this.videoEl.pause();
    }
    reload() {
      var url = this.videoEl.getAttribute('src');
      this.close();
      this.videoEl.src = url;
    }
    getPosition() {
      return Promise.resolve(this.videoEl.currentTime);
    }
    setPosition(pos) {
      this.videoEl.currentTime = pos;
    }
    getDuration() {
      return Promise.resolve(this.videoEl.duration);
    }
    seek(time) {
      let absolute = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      if (absolute) {
        this.videoEl.currentTime = time;
      } else {
        this.videoEl.currentTime += time;
      }
    }
    get videoTextureView() {
      return this.tag('Video').tag('VideoTexture');
    }
    get videoTexture() {
      return this.videoTextureView.texture;
    }
    _setVideoArea(videoPos) {
      if (t.Utils.equalValues(this._videoPos, videoPos)) {
        return;
      }
      this._videoPos = videoPos;
      if (this.textureMode) {
        this.videoTextureView.patch({
          smooth: {
            x: videoPos[0],
            y: videoPos[1],
            w: videoPos[2] - videoPos[0],
            h: videoPos[3] - videoPos[1]
          }
        });
      } else {
        const precision = this.stage.getRenderPrecision();
        this.videoEl.style.left = Math.round(videoPos[0] * precision) + 'px';
        this.videoEl.style.top = Math.round(videoPos[1] * precision) + 'px';
        this.videoEl.style.width = Math.round((videoPos[2] - videoPos[0]) * precision) + 'px';
        this.videoEl.style.height = Math.round((videoPos[3] - videoPos[1]) * precision) + 'px';
      }
    }
    _fireConsumer(event, args) {
      if (this._consumer) {
        this._consumer.fire(event, args);
      }
    }
    _equalInitData(buf1, buf2) {
      if (!buf1 || !buf2) return false;
      if (buf1.byteLength != buf2.byteLength) return false;
      const dv1 = new Int8Array(buf1);
      const dv2 = new Int8Array(buf2);
      for (let i = 0; i != buf1.byteLength; i++) if (dv1[i] != dv2[i]) return false;
      return true;
    }
    error(args) {
      this._fireConsumer('$mediaplayerError', args);
      this._setState('');
      return '';
    }
    loadeddata(args) {
      this._fireConsumer('$mediaplayerLoadedData', args);
    }
    play(args) {
      this._fireConsumer('$mediaplayerPlay', args);
    }
    playing(args) {
      this._fireConsumer('$mediaplayerPlaying', args);
      this._setState('Playing');
    }
    canplay(args) {
      this.videoEl.play();
      this._fireConsumer('$mediaplayerStart', args);
    }
    loadstart(args) {
      this._fireConsumer('$mediaplayerLoad', args);
    }
    seeked() {
      this._fireConsumer('$mediaplayerSeeked', {
        currentTime: this.videoEl.currentTime,
        duration: this.videoEl.duration || 1
      });
    }
    seeking() {
      this._fireConsumer('$mediaplayerSeeking', {
        currentTime: this.videoEl.currentTime,
        duration: this.videoEl.duration || 1
      });
    }
    durationchange(args) {
      this._fireConsumer('$mediaplayerDurationChange', args);
    }
    encrypted(args) {
      const video = args.videoElement;
      const event = args.event;
      // FIXME: Double encrypted events need to be properly filtered by Gstreamer
      if (video.mediaKeys && !this._equalInitData(this._previousInitData, event.initData)) {
        this._previousInitData = event.initData;
        this._fireConsumer('$mediaplayerEncrypted', args);
      }
    }
    static _states() {
      return [class Playing extends this {
        $enter() {
          this._startUpdatingVideoTexture();
        }
        $exit() {
          this._stopUpdatingVideoTexture();
        }
        timeupdate() {
          this._fireConsumer('$mediaplayerProgress', {
            currentTime: this.videoEl.currentTime,
            duration: this.videoEl.duration || 1
          });
        }
        ended(args) {
          this._fireConsumer('$mediaplayerEnded', args);
          this._setState('');
        }
        pause(args) {
          this._fireConsumer('$mediaplayerPause', args);
          this._setState('Playing.Paused');
        }
        _clearSrc() {
          this._fireConsumer('$mediaplayerStop', {});
          this._setState('');
        }
        static _states() {
          return [class Paused extends this {}];
        }
      }];
    }
  }

  class localCookie {
    constructor(e) {
      return e = e || {}, this.forceCookies = e.forceCookies || !1, !0 === this._checkIfLocalStorageWorks() && !0 !== e.forceCookies ? {
        getItem: this._getItemLocalStorage,
        setItem: this._setItemLocalStorage,
        removeItem: this._removeItemLocalStorage,
        clear: this._clearLocalStorage,
        keys: this._getLocalStorageKeys
      } : {
        getItem: this._getItemCookie,
        setItem: this._setItemCookie,
        removeItem: this._removeItemCookie,
        clear: this._clearCookies,
        keys: this._getCookieKeys
      };
    }
    _checkIfLocalStorageWorks() {
      if ("undefined" == typeof localStorage) return !1;
      try {
        return localStorage.setItem("feature_test", "yes"), "yes" === localStorage.getItem("feature_test") && (localStorage.removeItem("feature_test"), !0);
      } catch (e) {
        return !1;
      }
    }
    _getItemLocalStorage(e) {
      return window.localStorage.getItem(e);
    }
    _setItemLocalStorage(e, t) {
      return window.localStorage.setItem(e, t);
    }
    _removeItemLocalStorage(e) {
      return window.localStorage.removeItem(e);
    }
    _clearLocalStorage() {
      return window.localStorage.clear();
    }
    _getLocalStorageKeys() {
      return Object.keys(window.localStorage);
    }
    _getItemCookie(e) {
      var t = document.cookie.match(RegExp("(?:^|;\\s*)" + function (e) {
        return e.replace(/([.*+?\^${}()|\[\]\/\\])/g, "\\$1");
      }(e) + "=([^;]*)"));
      return t && "" === t[1] && (t[1] = null), t ? t[1] : null;
    }
    _setItemCookie(e, t) {
      var o = new Date(),
        r = new Date(o.getTime() + 15768e7);
      document.cookie = "".concat(e, "=").concat(t, "; expires=").concat(r.toUTCString(), ";");
    }
    _removeItemCookie(e) {
      document.cookie = "".concat(e, "=;Max-Age=-99999999;");
    }
    _clearCookies() {
      document.cookie.split(";").forEach(e => {
        document.cookie = e.replace(/^ +/, "").replace(/=.*/, "=;expires=Max-Age=-99999999");
      });
    }
    _getCookieKeys() {
      return document.cookie.split(";").map(e => e.split("=")[0]);
    }
  }

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  const initStorage = () => {
    Settings$2.get('platform', 'id');
    // todo: pass options (for example to force the use of cookies)
    new localCookie();
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  const hasRegex = /\{\/(.*?)\/([igm]{0,3})\}/g;
  const isWildcard = /^[!*$]$/;
  const hasLookupId = /\/:\w+?@@([0-9]+?)@@/;
  const isNamedGroup = /^\/:/;

  /**
   * Test if a route is part regular expressed
   * and replace it for a simple character
   * @param route
   * @returns {*}
   */
  const stripRegex = function (route) {
    let char = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'R';
    // if route is part regular expressed we replace
    // the regular expression for a character to
    // simplify floor calculation and backtracking
    if (hasRegex.test(route)) {
      route = route.replace(hasRegex, char);
    }
    return route;
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  /**
   * Create a local request register
   * @param flags
   * @returns {Map<any, any>}
   */
  const createRegister = flags => {
    const reg = new Map()
    // store user defined and router
    // defined flags in register
    ;
    [...Object.keys(flags), ...Object.getOwnPropertySymbols(flags)].forEach(key => {
      reg.set(key, flags[key]);
    });
    return reg;
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  class Request {
    constructor() {
      let hash = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      let navArgs = arguments.length > 1 ? arguments[1] : undefined;
      let storeCaller = arguments.length > 2 ? arguments[2] : undefined;
      /**
       * Hash we navigate to
       * @type {string}
       * @private
       */
      this._hash = hash;

      /**
       * Do we store previous hash in history
       * @type {boolean}
       * @private
       */
      this._storeCaller = storeCaller;

      /**
       * Request and navigate data
       * @type {Map}
       * @private
       */
      this._register = new Map();

      /**
       * Flag if the instance is created due to
       * this request
       * @type {boolean}
       * @private
       */
      this._isCreated = false;

      /**
       * Flag if the instance is shared between
       * previous and current request
       * @type {boolean}
       * @private
       */
      this._isSharedInstance = false;

      /**
       * Flag if the request has been cancelled
       * @type {boolean}
       * @private
       */
      this._cancelled = false;

      /**
       * if instance is shared between requests we copy state object
       * from instance before the new request overrides state
       * @type {null}
       * @private
       */
      this._copiedHistoryState = null;

      // if there are arguments attached to navigate()
      // we store them in new request
      if (isObject(navArgs)) {
        this._register = createRegister(navArgs);
      } else if (isBoolean(navArgs)) {
        // if second navigate() argument is explicitly
        // set to false we prevent the calling page
        // from ending up in history
        this._storeCaller = navArgs;
      }
      // @todo: remove because we can simply check
      // ._storeCaller property
      this._register.set(symbols.store, this._storeCaller);
    }
    cancel() {
      Log$1.debug('[router]:', "cancelled ".concat(this._hash));
      this._cancelled = true;
    }
    get url() {
      return this._hash;
    }
    get register() {
      return this._register;
    }
    get hash() {
      return this._hash;
    }
    set hash(args) {
      this._hash = args;
    }
    get route() {
      return this._route;
    }
    set route(args) {
      this._route = args;
    }
    get provider() {
      return this._provider;
    }
    set provider(args) {
      this._provider = args;
    }
    get providerType() {
      return this._providerType;
    }
    set providerType(args) {
      this._providerType = args;
    }
    set page(args) {
      this._page = args;
    }
    get page() {
      return this._page;
    }
    set isCreated(args) {
      this._isCreated = args;
    }
    get isCreated() {
      return this._isCreated;
    }
    get isSharedInstance() {
      return this._isSharedInstance;
    }
    set isSharedInstance(args) {
      this._isSharedInstance = args;
    }
    get isCancelled() {
      return this._cancelled;
    }
    set copiedHistoryState(v) {
      this._copiedHistoryState = v;
    }
    get copiedHistoryState() {
      return this._copiedHistoryState;
    }
  }

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  class Route {
    constructor() {
      let config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      // keep backwards compatible
      let type = ['on', 'before', 'after'].reduce((acc, type) => {
        return isFunction(config[type]) ? type : acc;
      }, undefined);
      this._cfg = config;
      if (type) {
        this._provider = {
          type,
          request: config[type]
        };
      }
    }
    get path() {
      return this._cfg.path;
    }
    get name() {
      return this._cfg.name;
    }
    get component() {
      return this._cfg.component;
    }
    get options() {
      return this._cfg.options;
    }
    get widgets() {
      return this._cfg.widgets;
    }
    get cache() {
      return this._cfg.cache;
    }
    get hook() {
      return this._cfg.hook;
    }
    get beforeNavigate() {
      return this._cfg.beforeNavigate;
    }
    get provider() {
      return this._provider;
    }
  }

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  /**
   * Simple route length calculation
   * @param route {string}
   * @returns {number} - floor
   */
  const getFloor = route => {
    return stripRegex(route).split('/').length;
  };

  /**
   * return all stored routes that live on the same floor
   * @param floor
   * @returns {Array}
   */
  const getRoutesByFloor = floor => {
    const matches = [];
    // simple filter of level candidates
    for (let [route] of routes$1.entries()) {
      if (getFloor(route) === floor) {
        matches.push(route);
      }
    }
    return matches;
  };

  /**
   * return a matching route by provided hash
   * hash: home/browse/12 will match:
   * route: home/browse/:categoryId
   * @param hash {string}
   * @returns {boolean|{}} - route
   */
  const getRouteByHash = hash => {
    // @todo: clean up on handleHash
    hash = hash.replace(/^#/, '');
    const getUrlParts = /(\/?:?[^/]+)/g;
    // grab possible candidates from stored routes
    const candidates = getRoutesByFloor(getFloor(hash));
    // break hash down in chunks
    const hashParts = hash.match(getUrlParts) || [];

    // to simplify the route matching and prevent look around
    // in our getUrlParts regex we get the regex part from
    // route candidate and store them so that we can reference
    // them when we perform the actual regex against hash
    let regexStore = [];
    let matches = candidates.filter(route => {
      let isMatching = true;
      // replace regex in route with lookup id => @@{storeId}@@
      if (hasRegex.test(route)) {
        const regMatches = route.match(hasRegex);
        if (regMatches && regMatches.length) {
          route = regMatches.reduce((fullRoute, regex) => {
            const lookupId = regexStore.length;
            fullRoute = fullRoute.replace(regex, "@@".concat(lookupId, "@@"));
            regexStore.push(regex.substring(1, regex.length - 1));
            return fullRoute;
          }, route);
        }
      }
      const routeParts = route.match(getUrlParts) || [];
      for (let i = 0, j = routeParts.length; i < j; i++) {
        const routePart = routeParts[i];
        const hashPart = hashParts[i];

        // Since we support catch-all and regex driven name groups
        // we first test for regex lookup id and see if the regex
        // matches the value from the hash
        if (hasLookupId.test(routePart)) {
          const routeMatches = hasLookupId.exec(routePart);
          const storeId = routeMatches[1];
          const routeRegex = regexStore[storeId];

          // split regex and modifiers so we can use both
          // to create a new RegExp
          // eslint-disable-next-line
          const regMatches = /\/([^\/]+)\/([igm]{0,3})/.exec(routeRegex);
          if (regMatches && regMatches.length) {
            const expression = regMatches[1];
            const modifiers = regMatches[2];
            const regex = new RegExp("^/".concat(expression, "$"), modifiers);
            if (!regex.test(hashPart)) {
              isMatching = false;
            }
          }
        } else if (isNamedGroup.test(routePart)) {
          // we kindly skip namedGroups because this is dynamic
          // we only need to the static and regex drive parts
          continue;
        } else if (hashPart && routePart.toLowerCase() !== hashPart.toLowerCase()) {
          isMatching = false;
        }
      }
      return isMatching;
    });
    if (matches.length) {
      if (matches.indexOf(hash) !== -1) {
        const match = matches[matches.indexOf(hash)];
        return routes$1.get(match);
      } else {
        // we give prio to static routes over dynamic
        matches = matches.sort(a => {
          return isNamedGroup.test(a) ? -1 : 1;
        });
        // would be strange if this fails
        // but still we test
        if (routeExists(matches[0])) {
          return routes$1.get(matches[0]);
        }
      }
    }
    return false;
  };
  const getValuesFromHash = function () {
    let hash = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    let path = arguments.length > 1 ? arguments[1] : undefined;
    // replace the regex definition from the route because
    // we already did the matching part
    path = stripRegex(path, '');
    const getUrlParts = /(\/?:?[\w%\s:.-]+)/g;
    const hashParts = hash.match(getUrlParts) || [];
    const routeParts = path.match(getUrlParts) || [];
    const getNamedGroup = /^\/:([\w-]+)\/?/;
    return routeParts.reduce((storage, value, index) => {
      const match = getNamedGroup.exec(value);
      if (match && match.length) {
        storage.set(match[1], decodeURIComponent(hashParts[index].replace(/^\//, '')));
      }
      return storage;
    }, new Map());
  };
  const getOption = (stack, prop) => {
    // eslint-disable-next-line
    if (stack && stack.hasOwnProperty(prop)) {
      return stack[prop];
    }
    // we explicitly return undefined since we're testing
    // for explicit test values
  };

  /**
   * create and return new Route instance
   * @param config
   */
  const createRoute = config => {
    // we need to provide a bit of additional logic
    // for the bootComponent
    if (config.path === '$') {
      let options = {
        preventStorage: true
      };
      if (isObject(config.options)) {
        options = {
          ...config.options,
          ...options
        };
      }
      config.options = options;
      // if configured add reference to bootRequest
      // as router after provider
      if (bootRequest) {
        config.after = bootRequest;
      }
    }
    return new Route(config);
  };

  /**
   * Create a new Router request object
   * @param url
   * @param args
   * @param store
   * @returns {*}
   */
  const createRequest = (url, args, store) => {
    return new Request(url, args, store);
  };
  const getHashByName = obj => {
    if (!obj.to && !obj.name) {
      return false;
    }
    const route = getRouteByName(obj.to || obj.name);
    const hasDynamicGroup = /\/:([\w-]+)\/?/;
    let hash = route;

    // if route contains dynamic group
    // we replace them with the provided params
    if (hasDynamicGroup.test(route)) {
      if (obj.params) {
        const keys = Object.keys(obj.params);
        hash = keys.reduce((acc, key) => {
          return acc.replace(":".concat(key), obj.params[key]);
        }, route);
      }
      if (obj.query) {
        return "".concat(hash).concat(objectToQueryString(obj.query));
      }
    }
    return hash;
  };
  const getRouteByName = name => {
    for (let [path, route] of routes$1.entries()) {
      if (route.name === name) {
        return path;
      }
    }
    return false;
  };
  const keepActivePageAlive = (route, request) => {
    if (isString(route)) {
      const routes = getRoutes();
      if (routes.has(route)) {
        route = routes.get(route);
      } else {
        return false;
      }
    }
    const register = request.register;
    const routeOptions = route.options;
    if (register.has('keepAlive')) {
      return register.get('keepAlive');
    } else if (routeOptions && routeOptions.keepAlive) {
      return routeOptions.keepAlive;
    }
    return false;
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  var emit$2 = (function (page) {
    let events = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    let params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    if (!isArray(events)) {
      events = [events];
    }
    events.forEach(e => {
      const event = "_on".concat(ucfirst(e));
      if (isFunction(page[event])) {
        page[event](params);
      }
    });
  });

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  let activeWidget = null;
  const getReferences = () => {
    if (!widgetsHost) {
      return;
    }
    return widgetsHost.get().reduce((storage, widget) => {
      const key = widget.ref.toLowerCase();
      storage[key] = widget;
      return storage;
    }, {});
  };

  /**
   * update the visibility of the available widgets
   * for the current page / route
   * @param page
   */
  const updateWidgets = (widgets, page) => {
    // force lowercase lookup
    const configured = (widgets || []).map(ref => ref.toLowerCase());
    widgetsHost.forEach(widget => {
      widget.visible = configured.indexOf(widget.ref.toLowerCase()) !== -1;
      if (widget.visible) {
        emit$2(widget, ['activated'], page);
      }
    });
    if (app.state === 'Widgets' && activeWidget && !activeWidget.visible) {
      app._setState('');
    }
  };
  const getWidgetByName = name => {
    name = ucfirst(name);
    return widgetsHost.getByRef(name) || false;
  };

  /**
   * delegate app focus to a on-screen widget
   * @param name - {string}
   */
  const focusWidget = name => {
    const widget = getWidgetByName(name);
    if (widget) {
      setActiveWidget(widget);

      // if app is already in 'Widgets' state we can assume that
      // focus has been delegated from one widget to another so
      // we need to set the new widget reference and trigger a
      // new focus calculation of Lightning's focuspath
      if (app.state === 'Widgets') {
        app.reload(activeWidget);
      } else {
        app._setState('Widgets', [activeWidget]);
      }
    }
  };
  const restoreFocus = () => {
    activeWidget = null;
    app._setState('');
  };
  const getActiveWidget = () => {
    return activeWidget;
  };
  const setActiveWidget = instance => {
    activeWidget = instance;
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  const createComponent = (stage, type) => {
    return stage.c({
      type,
      visible: false,
      widgets: getReferences()
    });
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  /**
   * Simple flat array that holds the visited hashes + state Object
   * so the router can navigate back to them
   * @type {Array}
   */
  let history = [];
  const updateHistory = request => {
    const hash = getActiveHash();
    if (!hash) {
      return;
    }

    // navigate storage flag
    const register = request.register;
    const forceNavigateStore = register.get(symbols.store);

    // test preventStorage on route configuration
    const activeRoute = getRouteByHash(hash);
    const preventStorage = getOption(activeRoute.options, 'preventStorage');

    // we give prio to navigate storage flag
    let store = isBoolean(forceNavigateStore) ? forceNavigateStore : !preventStorage;
    if (store) {
      const toStore = hash.replace(/^\//, '');
      const location = locationInHistory(toStore);
      const stateObject = getStateObject(getActivePage(), request);
      const routerConfig = getRouterConfig();

      // store hash if it's not a part of history or flag for
      // storage of same hash is true
      if (location === -1 || routerConfig.get('storeSameHash')) {
        history.push({
          hash: toStore,
          state: stateObject
        });
      } else {
        // if we visit the same route we want to sync history
        const prev = history.splice(location, 1)[0];
        history.push({
          hash: prev.hash,
          state: stateObject
        });
      }
    }
  };
  const locationInHistory = hash => {
    for (let i = 0; i < history.length; i++) {
      if (history[i].hash === hash) {
        return i;
      }
    }
    return -1;
  };
  const getHistoryState = hash => {
    let state = null;
    if (history.length) {
      // if no hash is provided we get the last
      // pushed history record
      if (!hash) {
        const record = history[history.length - 1];
        // could be null
        state = record.state;
      } else {
        if (locationInHistory(hash) !== -1) {
          const record = history[locationInHistory(hash)];
          state = record.state;
        }
      }
    }
    return state;
  };
  const replaceHistoryState = function () {
    let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    let hash = arguments.length > 1 ? arguments[1] : undefined;
    if (!history.length) {
      return;
    }
    const location = hash ? locationInHistory(hash) : history.length - 1;
    if (location !== -1 && isObject(state)) {
      history[location].state = state;
    }
  };
  const getStateObject = (page, request) => {
    // if the new request shared instance with the
    // previous request we used the copied state object
    if (request.isSharedInstance) {
      if (request.copiedHistoryState) {
        return request.copiedHistoryState;
      }
    } else if (page && isFunction(page.historyState)) {
      return page.historyState();
    }
    return null;
  };
  const getHistory = () => {
    return history.slice(0);
  };
  const setHistory = function () {
    let arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    if (isArray(arr)) {
      history = arr;
    }
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  /**
   * @type {Lightning.Application}
   */
  let application;

  /**
   * Actual instance of the app
   * @type {Lightning.Component}
   */
  let app;

  /**
   * Component that hosts all routed pages
   * @type {Lightning.Component}
   */
  let pagesHost;

  /**
   * @type {Lightning.Stage}
   */
  let stage;

  /**
   * Platform driven Router configuration
   * @type {Map<string>}
   */
  let routerConfig;

  /**
   * Component that hosts all attached widgets
   * @type {Lightning.Component}
   */
  let widgetsHost;

  /**
   * Hash we point the browser to when we boot the app
   * and there is no deep-link provided
   * @type {string|Function}
   */
  let rootHash;

  /**
   * Boot request will fire before app start
   * can be used to execute some global logic
   * and can be configured
   */
  let bootRequest;

  /**
   * Flag if we need to update the browser location hash.
   * Router can work without.
   * @type {boolean}
   */
  let updateHash = true;

  /**
   * Will be called before a route starts, can be overridden
   * via routes config
   * @param from - route we came from
   * @param to - route we navigate to
   * @returns {Promise<*>}
   */
  // eslint-disable-next-line
  let beforeEachRoute = async (from, to) => {
    return true;
  };

  /**
   *  * Will be called after a navigate successfully resolved,
   * can be overridden via routes config
   */
  let afterEachRoute = () => {};

  /**
   * All configured routes
   * @type {Map<string, object>}
   */
  let routes$1 = new Map();

  /**
   * Store all page components per route
   * @type {Map<string, object>}
   */
  let components = new Map();

  /**
   * Flag if router has been initialised
   * @type {boolean}
   */
  let initialised = false;

  /**
   * Current page being rendered on screen
   * @type {null}
   */
  let activePage = null;
  let activeHash;
  let activeRoute;

  /**
   *  During the process of a navigation request a new
   *  request can start, to prevent unwanted behaviour
   *  the navigate()-method stores the last accepted hash
   *  so we can invalidate any prior requests
   */
  let lastAcceptedHash;

  /**
   * With on()-data providing behaviour the Router forced the App
   * in a Loading state. When the data-provider resolves we want to
   * change the state back to where we came from
   */
  let previousState;
  const mixin = app => {
    // by default the Router Baseclass provides the component
    // reference in which we store our pages
    if (app.pages) {
      pagesHost = app.pages.childList;
    }
    // if the app is using widgets we grab refs
    // and hide all the widgets
    if (app.widgets && app.widgets.children) {
      widgetsHost = app.widgets.childList;
      // hide all widgets on boot
      widgetsHost.forEach(w => w.visible = false);
    }
    app._handleBack = e => {
      step(-1);
      e.preventDefault();
    };
  };
  const bootRouter = (config, instance) => {
    let {
      appInstance,
      routes
    } = config;

    // if instance is provided and it's and Lightning Component instance
    if (instance && isPage(instance)) {
      app = instance;
    }
    if (!app) {
      app = appInstance || AppInstance;
    }
    application = app.application;
    pagesHost = application.childList;
    stage = app.stage;
    routerConfig = getConfigMap();
    mixin(app);
    if (isArray(routes)) {
      setup(config);
    } else if (isFunction(routes)) {
      console.warn('[Router]: Calling Router.route() directly is deprecated.');
      console.warn('Use object config: https://rdkcentral.github.io/Lightning-SDK/#/plugins/router/configuration');
    }
  };
  const setup = config => {
    if (!initialised) {
      init$1(config);
    }
    config.routes.forEach(r => {
      const path = cleanHash(r.path);
      if (!routeExists(path)) {
        const route = createRoute(r);
        routes$1.set(path, route);
        // if route has a configured component property
        // we store it in a different map to simplify
        // the creating and destroying per route
        if (route.component) {
          let type = route.component;
          if (isComponentConstructor(type)) {
            if (!routerConfig.get('lazyCreate')) {
              type = createComponent(stage, type);
              pagesHost.a(type);
            }
          }
          components.set(path, type);
        }
      } else {
        console.error("".concat(path, " already exists in routes configuration"));
      }
    });
  };
  const init$1 = config => {
    rootHash = config.root;
    if (isFunction(config.boot)) {
      bootRequest = config.boot;
    }
    if (isBoolean(config.updateHash)) {
      updateHash = config.updateHash;
    }
    if (isFunction(config.beforeEachRoute)) {
      beforeEachRoute = config.beforeEachRoute;
    }
    if (isFunction(config.afterEachRoute)) {
      afterEachRoute = config.afterEachRoute;
    }
    if (config.bootComponent) {
      console.warn('[Router]: Boot Component is now available as a special router: https://rdkcentral.github.io/Lightning-SDK/#/plugins/router/configuration?id=special-routes');
      console.warn('[Router]: setting { bootComponent } property will be deprecated in a future release');
      if (isPage(config.bootComponent)) {
        config.routes.push({
          path: '$',
          component: config.bootComponent,
          // we try to assign the bootRequest as after data-provider
          // so it will behave as any other component
          after: bootRequest || null,
          options: {
            preventStorage: true
          }
        });
      } else {
        console.error("[Router]: ".concat(config.bootComponent, " is not a valid boot component"));
      }
    }
    config.routes.forEach(item => {
      // replacing regexes with 'R' to avoid issues with pattern matching below
      const strippedPath = stripRegex(item.path);

      // Pattern to identify the last path of the route
      // It should start with "/:" + any word  and ends with "?"
      // It should be the last path of the route
      // valid => /player/:asset/:assetId? (:assetId is optional)
      // invalid => /player/:asset/:assetId?/test (:assetId? is not an optional path)
      // invalid => /player/:asset?/:assetId? (second path is not considered as an optional path)
      const pattern = /.*\/:.*?\?$/u;
      if (pattern.test(strippedPath)) {
        const optionalPath = item.path.substring(0, item.path.lastIndexOf('/'));
        const originalPath = item.path.substring(0, item.path.lastIndexOf('?'));
        item.path = originalPath;
        //Create another entry with the optional path
        let optionalItem = {
          ...item
        };
        optionalItem.path = optionalPath;
        config.routes.push(optionalItem);
      }
    });
    initialised = true;
  };
  const storeComponent = (route, type) => {
    if (components.has(route)) {
      components.set(route, type);
    }
  };
  const getComponent = route => {
    if (components.has(route)) {
      return components.get(route);
    }
    return null;
  };

  // delete existing route instance from memory
  const deleteCurrentInstance = route => {
    if (components.has(route) && pagesHost.getIndex(components.get(route)) !== -1) {
      pagesHost.remove(components.get(route));
      storeComponent(route, components.get(route)._routedType || components.get(route).constructor);
    }
  };

  /**
   * Test if router needs to update browser location hash
   * @returns {boolean}
   */
  const mustUpdateLocationHash = () => {
    if (!routerConfig || !routerConfig.size) {
      return false;
    }
    // we need support to either turn change hash off
    // per platform or per app
    const updateConfig = routerConfig.get('updateHash');
    return !(isBoolean(updateConfig) && !updateConfig || isBoolean(updateHash) && !updateHash);
  };

  /**
   * Will be called when a new navigate() request has completed
   * and has not been expired due to it's async nature
   * @param request
   */
  const onRequestResolved = request => {
    const hash = request.hash;
    const route = request.route;
    const register = request.register;
    const page = request.page;

    // clean up history if modifier is set
    if (getOption(route.options, 'clearHistory')) {
      setHistory([]);
    } else if (hash && !isWildcard.test(route.path)) {
      updateHistory(request);
    }

    // we only update the stackLocation if a route
    // is not expired before it resolves
    storeComponent(route.path, page);
    if (request.isSharedInstance || !request.isCreated) {
      emit$2(page, 'changed');
    } else if (request.isCreated) {
      emit$2(page, 'mounted');
    }

    // only update widgets if we have a host
    if (widgetsHost) {
      updateWidgets(route.widgets, page);
    }

    // we want to clean up if there is an
    // active page that is not being shared
    // between current and previous route
    if (getActivePage() && !request.isSharedInstance) {
      cleanUp(activePage, request);
    }

    // provide history object to active page
    if (register.get(symbols.historyState) && isFunction(page.historyState)) {
      page.historyState(register.get(symbols.historyState));
    }
    setActivePage(page);
    activeHash = request.hash;
    activeRoute = route.path;

    // cleanup all cancelled requests
    for (let request of navigateQueue.values()) {
      if (request.isCancelled && request.hash) {
        navigateQueue.delete(request.hash);
      }
    }
    afterEachRoute(request);
    Log$1.info('[route]:', route.path);
    Log$1.info('[hash]:', hash);
  };
  const cleanUp = (page, request) => {
    const route = activeRoute;
    const register = request.register;
    const lazyDestroy = routerConfig.get('lazyDestroy');
    const destroyOnBack = routerConfig.get('destroyOnHistoryBack');
    const keepAlive = register.get('keepAlive');
    const isFromHistory = register.get(symbols.backtrack);
    let doCleanup = false;

    // if this request is executed due to a step back in history
    // and we have configured to destroy active page when we go back
    // in history or lazyDestory is enabled
    if (isFromHistory && (destroyOnBack || lazyDestroy)) {
      doCleanup = true;
    }

    // clean up if lazyDestroy is enabled and the keepAlive flag
    // in navigation register is false
    if (lazyDestroy && !keepAlive) {
      doCleanup = true;
    }

    // if the current and new request share the same route blueprint
    if (activeRoute === request.route.path) {
      doCleanup = true;
    }
    if (doCleanup) {
      // grab original class constructor if
      // statemachine routed else store constructor
      storeComponent(route, page._routedType || page.constructor);

      // actual remove of page from memory
      pagesHost.remove(page);

      // force texture gc() if configured
      // so we can cleanup textures in the same tick
      if (routerConfig.get('gcOnUnload')) {
        stage.gc();
      }
    } else {
      // If we're not removing the page we need to
      // reset it's properties
      page.patch({
        x: 0,
        y: 0,
        scale: 1,
        visible: false,
        alpha: 1
      });
    }
  };
  const getActiveHash = () => {
    return activeHash;
  };
  const setActivePage = page => {
    activePage = page;
  };
  const getActivePage = () => {
    return activePage;
  };
  const getActiveRoute = () => {
    return activeRoute;
  };
  const getLastHash = () => {
    return lastAcceptedHash;
  };
  const setLastHash = hash => {
    lastAcceptedHash = hash;
  };
  const setPreviousState = state => {
    previousState = state;
  };
  const getPreviousState = () => {
    return previousState;
  };
  const routeExists = key => {
    return routes$1.has(key);
  };
  const getRootHash = () => {
    return rootHash;
  };
  const getBootRequest = () => {
    return bootRequest;
  };
  const getRouterConfig = () => {
    return routerConfig;
  };
  const getRoutes = () => {
    return routes$1;
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  const isFunction = v => {
    return typeof v === 'function';
  };
  const isObject = v => {
    return typeof v === 'object' && v !== null;
  };
  const isBoolean = v => {
    return typeof v === 'boolean';
  };
  const isPage = v => {
    if (v instanceof t.Element || isComponentConstructor(v)) {
      return true;
    }
    return false;
  };
  const isComponentConstructor = type => {
    return type.prototype && 'isComponent' in type.prototype;
  };
  const isArray = v => {
    return Array.isArray(v);
  };
  const ucfirst = v => {
    return "".concat(v.charAt(0).toUpperCase()).concat(v.slice(1));
  };
  const isString = v => {
    return typeof v === 'string';
  };
  const isPromise = method => {
    let result;
    if (isFunction(method)) {
      try {
        result = method.apply(null);
      } catch (e) {
        result = e;
      }
    } else {
      result = method;
    }
    return isObject(result) && isFunction(result.then);
  };
  const cleanHash = function () {
    let hash = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    return hash.replace(/^#/, '').replace(/\/+$/, '');
  };
  const getConfigMap = () => {
    const routerSettings = Settings$2.get('platform', 'router');
    const isObj = isObject(routerSettings);
    return ['backtrack', 'gcOnUnload', 'destroyOnHistoryBack', 'lazyCreate', 'lazyDestroy', 'reuseInstance', 'autoRestoreRemote', 'numberNavigation', 'updateHash', 'storeSameHash'].reduce((config, key) => {
      config.set(key, isObj ? routerSettings[key] : Settings$2.get('platform', key));
      return config;
    }, new Map());
  };
  const getQueryStringParams = function () {
    let hash = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : getActiveHash();
    const resumeHash = getResumeHash();
    if ((hash === '$' || !hash) && resumeHash) {
      if (isString(resumeHash)) {
        hash = resumeHash;
      }
    }
    let parse = '';
    const getQuery = /([?&].*)/;
    const matches = getQuery.exec(hash);
    const params = {};
    if (document.location && document.location.search) {
      parse = document.location.search;
    }
    if (matches && matches.length) {
      let hashParams = matches[1];
      if (parse) {
        // if location.search is not empty we
        // remove the leading ? to create a
        // valid string
        hashParams = hashParams.replace(/^\?/, '');
        // we parse hash params last so they we can always
        // override search params with hash params
        parse = "".concat(parse, "&").concat(hashParams);
      } else {
        parse = hashParams;
      }
    }
    if (parse) {
      const urlParams = new URLSearchParams(parse);
      for (const [key, value] of urlParams.entries()) {
        params[key] = value;
      }
      return params;
    } else {
      return false;
    }
  };
  const objectToQueryString = obj => {
    if (!isObject(obj)) {
      return '';
    }
    return '?' + Object.keys(obj).map(key => {
      return "".concat(key, "=").concat(obj[key]);
    }).join('&');
  };
  const symbols = {
    route: Symbol('route'),
    hash: Symbol('hash'),
    store: Symbol('store'),
    fromHistory: Symbol('fromHistory'),
    expires: Symbol('expires'),
    resume: Symbol('resume'),
    backtrack: Symbol('backtrack'),
    historyState: Symbol('historyState'),
    queryParams: Symbol('queryParams')
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  const dataHooks = {
    on: request => {
      setPreviousState(app.state || '');
      app._setState('Loading');
      return execProvider(request);
    },
    before: request => {
      return execProvider(request);
    },
    after: request => {
      try {
        execProvider(request, true);
      } catch (e) {
        // for now we fail silently
      }
      return Promise.resolve();
    }
  };
  const execProvider = (request, emitProvided) => {
    const route = request.route;
    const provider = route.provider;
    const expires = route.cache ? route.cache * 1000 : 0;
    const params = addPersistData(request);
    return provider.request(request.page, {
      ...params
    }).then(() => {
      request.page[symbols.expires] = Date.now() + expires;
      if (emitProvided) {
        emit$2(request.page, 'dataProvided');
      }
    }).catch(e => {
      request.page[symbols.expires] = Date.now();
      throw e;
    });
  };
  const addPersistData = _ref => {
    let {
      page,
      route,
      hash,
      register = new Map()
    } = _ref;
    const urlValues = getValuesFromHash(hash, route.path);
    const queryParams = getQueryStringParams(hash);
    const pageData = new Map([...urlValues, ...register]);
    const params = {};

    // make dynamic url data available to the page
    // as instance properties
    for (let [name, value] of pageData) {
      params[name] = value;
    }
    if (queryParams) {
      params[symbols.queryParams] = queryParams;
    }

    // check navigation register for persistent data
    if (register.size) {
      const obj = {};
      for (let [k, v] of register) {
        obj[k] = v;
      }
      page.persist = obj;
    }

    // make url data and persist data available
    // via params property
    page.params = params;
    emit$2(page, ['urlParams'], params);
    return params;
  };

  /**
   * Test if page passed cache-time
   * @param page
   * @returns {boolean}
   */
  const isPageExpired = page => {
    if (!page[symbols.expires]) {
      return false;
    }
    const expires = page[symbols.expires];
    const now = Date.now();
    return now >= expires;
  };
  const hasProvider = path => {
    if (routeExists(path)) {
      const record = routes$1.get(path);
      return !!record.provider;
    }
    return false;
  };
  const getProvider = route => {
    // @todo: fix, route already is passed in
    if (routeExists(route.path)) {
      const {
        provider
      } = routes$1.get(route.path);
      return {
        type: provider.type,
        provider: provider.request
      };
    }
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  const fade = (i, o) => {
    return new Promise(resolve => {
      i.patch({
        alpha: 0,
        visible: true,
        smooth: {
          alpha: [1, {
            duration: 0.5,
            delay: 0.1
          }]
        }
      });
      // resolve on y finish
      i.transition('alpha').on('finish', () => {
        if (o) {
          o.visible = false;
        }
        resolve();
      });
    });
  };
  const crossFade = (i, o) => {
    return new Promise(resolve => {
      i.patch({
        alpha: 0,
        visible: true,
        smooth: {
          alpha: [1, {
            duration: 0.5,
            delay: 0.1
          }]
        }
      });
      if (o) {
        o.patch({
          smooth: {
            alpha: [0, {
              duration: 0.5,
              delay: 0.3
            }]
          }
        });
      }
      // resolve on y finish
      i.transition('alpha').on('finish', () => {
        resolve();
      });
    });
  };
  const moveOnAxes = (axis, direction, i, o) => {
    const bounds = axis === 'x' ? 1920 : 1080;
    return new Promise(resolve => {
      i.patch({
        ["".concat(axis)]: direction ? bounds * -1 : bounds,
        visible: true,
        smooth: {
          ["".concat(axis)]: [0, {
            duration: 0.4,
            delay: 0.2
          }]
        }
      });
      // out is optional
      if (o) {
        o.patch({
          ["".concat(axis)]: 0,
          smooth: {
            ["".concat(axis)]: [direction ? bounds : bounds * -1, {
              duration: 0.4,
              delay: 0.2
            }]
          }
        });
      }
      // resolve on y finish
      i.transition(axis).on('finish', () => {
        resolve();
      });
    });
  };
  const up = (i, o) => {
    return moveOnAxes('y', 0, i, o);
  };
  const down = (i, o) => {
    return moveOnAxes('y', 1, i, o);
  };
  const left = (i, o) => {
    return moveOnAxes('x', 0, i, o);
  };
  const right = (i, o) => {
    return moveOnAxes('x', 1, i, o);
  };
  var Transitions = {
    fade,
    crossFade,
    up,
    down,
    left,
    right
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  /**
   * execute transition between new / old page and
   * toggle the defined widgets
   * @todo: platform override default transition
   * @param pageIn
   * @param pageOut
   */
  const executeTransition = function (pageIn) {
    let pageOut = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    const transition = pageIn.pageTransition || pageIn.easing;
    const hasCustomTransitions = !!(pageIn.smoothIn || pageIn.smoothInOut || transition);
    const transitionsDisabled = getRouterConfig().get('disableTransitions');
    if (pageIn.easing) {
      console.warn('easing() method is deprecated and will be removed. Use pageTransition()');
    }

    // default behaviour is a visibility toggle
    if (!hasCustomTransitions || transitionsDisabled) {
      pageIn.visible = true;
      if (pageOut) {
        pageOut.visible = false;
      }
      return Promise.resolve();
    }
    if (transition) {
      let type;
      try {
        type = transition.call(pageIn, pageIn, pageOut);
      } catch (e) {
        type = 'crossFade';
      }
      if (isPromise(type)) {
        return type;
      }
      if (isString(type)) {
        const fn = Transitions[type];
        if (fn) {
          return fn(pageIn, pageOut);
        }
      }

      // keep backwards compatible for now
      if (pageIn.smoothIn) {
        // provide a smooth function that resolves itself
        // on transition finish
        const smooth = function (p, v) {
          let args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
          return new Promise(resolve => {
            pageIn.visible = true;
            pageIn.setSmooth(p, v, args);
            pageIn.transition(p).on('finish', () => {
              resolve();
            });
          });
        };
        return pageIn.smoothIn({
          pageIn,
          smooth
        });
      }
    }
    return Transitions.crossFade(pageIn, pageOut);
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  /**
   * The actual loading of the component
   * */
  const load = async request => {
    let expired = false;
    try {
      request = await loader(request);
      if (request && !request.isCancelled) {
        // in case of on() providing we need to reset
        // app state;
        if (app.state === 'Loading') {
          if (getPreviousState() === 'Widgets') {
            app._setState('Widgets', [getActiveWidget()]);
          } else {
            app._setState('');
          }
        }
        // Do page transition if instance
        // is not shared between the routes
        if (!request.isSharedInstance && !request.isCancelled) {
          await executeTransition(request.page, getActivePage());
        }
      } else {
        expired = true;
      }
      // on expired we only cleanup
      if (expired || request.isCancelled) {
        Log$1.debug('[router]:', "Rejected ".concat(request.hash, " because route to ").concat(getLastHash(), " started"));
        if (request.isCreated && !request.isSharedInstance) {
          // remove from render-tree
          pagesHost.remove(request.page);
        }
      } else {
        onRequestResolved(request);
        // resolve promise
        return request.page;
      }
    } catch (request) {
      if (!request.route) {
        console.error(request);
      } else if (!expired) {
        // @todo: revisit
        const {
          route
        } = request;
        // clean up history if modifier is set
        if (getOption(route.options, 'clearHistory')) {
          setHistory([]);
        } else if (!isWildcard.test(route.path)) {
          updateHistory(request);
        }
        if (request.isCreated && !request.isSharedInstance) {
          // remove from render-tree
          pagesHost.remove(request.page);
        }
        handleError(request);
      }
    }
  };
  const loader = async request => {
    const route = request.route;
    const hash = request.hash;
    const register = request.register;

    // todo: grab from Route instance
    let type = getComponent(route.path);
    let isConstruct = isComponentConstructor(type);
    let provide = false;

    // if it's an instance bt we're not coming back from
    // history we test if we can re-use this instance
    if (!isConstruct && !register.get(symbols.backtrack)) {
      if (!mustReuse(route)) {
        type = type.constructor;
        isConstruct = true;
      }
    }

    // If page is Lightning Component instance
    if (!isConstruct) {
      request.page = type;
      // if we have have a data route for current page
      if (hasProvider(route.path)) {
        if (isPageExpired(type) || type[symbols.hash] !== hash) {
          provide = true;
        }
      }
      let currentRoute = getActivePage() && getActivePage()[symbols.route];
      // if the new route is equal to the current route it means that both
      // route share the Component instance and stack location / since this case
      // is conflicting with the way before() and after() loading works we flag it,
      // and check platform settings in we want to re-use instance
      if (route.path === currentRoute) {
        request.isSharedInstance = true;
        // since we're re-using the instance we must attach
        // historyState to the request to prevent it from
        // being overridden.
        if (isFunction(request.page.historyState)) {
          request.copiedHistoryState = request.page.historyState();
        }
      }
    } else {
      request.page = createComponent(stage, type);
      pagesHost.a(request.page);
      // test if need to request data provider
      if (hasProvider(route.path)) {
        provide = true;
      }
      request.isCreated = true;
    }

    // we store hash and route as properties on the page instance
    // that way we can easily calculate new behaviour on page reload
    request.page[symbols.hash] = hash;
    request.page[symbols.route] = route.path;
    try {
      if (provide) {
        // extract attached data-provider for route
        // we're processing
        const {
          type: loadType,
          provider
        } = getProvider(route);

        // update running request
        request.provider = provider;
        request.providerType = loadType;
        await dataHooks[loadType](request);

        // we early exit if the current request is expired
        if (hash !== getLastHash()) {
          return false;
        } else {
          if (request.providerType !== 'after') {
            emit$2(request.page, 'dataProvided');
          }
          // resolve promise
          return request;
        }
      } else {
        addPersistData(request);
        return request;
      }
    } catch (e) {
      request.error = e;
      return Promise.reject(request);
    }
  };
  const handleError = request => {
    if (request && request.error) {
      console.error(request.error);
    } else if (request) {
      Log$1.error(request);
    }
    if (request.page && routeExists('!')) {
      navigate('!', {
        request
      }, false);
    }
  };
  const mustReuse = route => {
    const opt = getOption(route.options, 'reuseInstance');
    const config = routerConfig.get('reuseInstance');

    // route always has final decision
    if (isBoolean(opt)) {
      return opt;
    }
    return !(isBoolean(config) && config === false);
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  class RoutedApp extends t.Component {
    static _template() {
      return {
        Pages: {
          forceZIndexContext: true
        },
        /**
         * This is a default Loading page that will be made visible
         * during data-provider on() you CAN override in child-class
         */
        Loading: {
          rect: true,
          w: 1920,
          h: 1080,
          color: 0xff000000,
          visible: false,
          zIndex: 99,
          Label: {
            mount: 0.5,
            x: 960,
            y: 540,
            text: {
              text: 'Loading..'
            }
          }
        }
      };
    }
    static _states() {
      return [class Loading extends this {
        $enter() {
          this.tag('Loading').visible = true;
        }
        $exit() {
          this.tag('Loading').visible = false;
        }
      }, class Widgets extends this {
        $enter(args, widget) {
          // store widget reference
          this._widget = widget;

          // since it's possible that this behaviour
          // is non-remote driven we force a recalculation
          // of the focuspath
          this._refocus();
        }
        _getFocused() {
          // we delegate focus to selected widget
          // so it can consume remotecontrol presses
          return this._widget;
        }

        // if we want to widget to widget focus delegation
        reload(widget) {
          this._widget = widget;
          this._refocus();
        }
        _handleKey() {
          const restoreFocus = routerConfig.get('autoRestoreRemote');
          /**
           * The Router used to delegate focus back to the page instance on
           * every unhandled key. This is barely usefull in any situation
           * so for now we offer the option to explicity turn that behaviour off
           * so we don't don't introduce a breaking change.
           */
          if (!isBoolean(restoreFocus) || restoreFocus === true) {
            Router.focusPage();
          }
        }
      }];
    }

    /**
     * Return location where pages need to be stored
     */
    get pages() {
      return this.tag('Pages');
    }

    /**
     * Tell router where widgets are stored
     */
    get widgets() {
      return this.tag('Widgets');
    }

    /**
     * we MUST register _handleBack method so the Router
     * can override it
     * @private
     */
    _handleBack() {}

    /**
     * We MUST return Router.activePage() so the new Page
     * can listen to the remote-control.
     */
    _getFocused() {
      return Router.getActivePage();
    }
  }

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  /*
  rouThor ==[x]
   */
  let navigateQueue = new Map();
  let forcedHash = '';
  let resumeHash = '';

  /**
   * Start routing the app
   * @param config - route config object
   * @param instance - instance of the app
   */
  const startRouter = (config, instance) => {
    bootRouter(config, instance);
    registerListener();
    start();
  };

  // start translating url
  const start = () => {
    let hash = (getHash() || '').replace(/^#/, '');
    const bootKey = '$';
    const params = getQueryStringParams(hash);
    const bootRequest = getBootRequest();
    const rootHash = getRootHash();
    const isDirectLoad = hash.indexOf(bootKey) !== -1;

    // prevent direct reload of wildcard routes
    // expect bootComponent
    if (isWildcard.test(hash) && hash !== bootKey) {
      hash = '';
    }

    // store resume point for manual resume
    resumeHash = isDirectLoad ? rootHash : hash || rootHash;
    const ready = () => {
      if (!hash && rootHash) {
        if (isString(rootHash)) {
          navigate(rootHash);
        } else if (isFunction(rootHash)) {
          rootHash().then(res => {
            if (isObject(res)) {
              navigate(res.path, res.params);
            } else {
              navigate(res);
            }
          });
        }
      } else {
        queue(hash);
        handleHashChange().then(() => {
          app._refocus();
        }).catch(e => {
          console.error(e);
        });
      }
    };
    if (routeExists(bootKey)) {
      if (hash && !isDirectLoad) {
        if (!getRouteByHash(hash)) {
          navigate('*', {
            failedHash: hash
          });
          return;
        }
      }
      navigate(bootKey, {
        resume: resumeHash,
        reload: bootKey === hash
      }, false);
    } else if (isFunction(bootRequest)) {
      bootRequest(params).then(() => {
        ready();
      }).catch(e => {
        handleBootError(e);
      });
    } else {
      ready();
    }
  };
  const handleBootError = e => {
    if (routeExists('!')) {
      navigate('!', {
        request: {
          error: e
        }
      });
    } else {
      console.error(e);
    }
  };

  /**
   * start a new request
   * @param url
   * @param args
   * @param store
   */
  const navigate = function (url) {
    let args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    let store = arguments.length > 2 ? arguments[2] : undefined;
    if (isObject(url)) {
      url = getHashByName(url);
      if (!url) {
        return;
      }
    }
    let hash = getHash();
    if (!mustUpdateLocationHash() && forcedHash) {
      hash = forcedHash;
    }
    if (hash.replace(/^#/, '') !== url) {
      // push request in the queue
      queue(url, args, store);
      if (mustUpdateLocationHash()) {
        setHash(url);
      } else {
        forcedHash = url;
        handleHashChange(url).then(() => {
          app._refocus();
        }).catch(e => {
          console.error(e);
        });
      }
    } else if (args.reload) {
      // push request in the queue
      queue(url, args, store);
      handleHashChange(url).then(() => {
        app._refocus();
      }).catch(e => {
        console.error(e);
      });
    }
  };
  const queue = function (hash) {
    let args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    let store = arguments.length > 2 ? arguments[2] : undefined;
    hash = cleanHash(hash);
    if (!navigateQueue.has(hash)) {
      for (let request of navigateQueue.values()) {
        request.cancel();
      }
      const request = createRequest(hash, args, store);
      navigateQueue.set(decodeURIComponent(hash), request);
      return request;
    }
    return false;
  };

  /**
   * Handle change of hash
   * @param override
   * @returns {Promise<void>}
   */
  const handleHashChange = async override => {
    const hash = cleanHash(override || getHash());
    const queueId = decodeURIComponent(hash);
    let request = navigateQueue.get(queueId);

    // handle hash updated manually
    if (!request && !navigateQueue.size) {
      request = queue(hash);
    }
    const route = getRouteByHash(hash);
    if (!route) {
      if (routeExists('*')) {
        navigate('*', {
          failedHash: hash
        });
      } else {
        console.error("Unable to navigate to: ".concat(hash));
      }
      return;
    }

    // update current processed request
    request.hash = hash;
    request.route = route;
    let result = await beforeEachRoute(getActiveHash(), request);

    // test if a local hook is configured for the route
    if (result && route.beforeNavigate) {
      result = await route.beforeNavigate(getActiveHash(), request);
    }
    if (isBoolean(result)) {
      // only if resolve value is explicitly true
      // we continue the current route request
      if (result) {
        return resolveHashChange(request);
      }
    } else {
      // if navigation guard didn't return true
      // we cancel the current request
      request.cancel();
      navigateQueue.delete(queueId);
      if (isString(result)) {
        navigate(result);
      } else if (isObject(result)) {
        let store = true;
        if (isBoolean(result.store)) {
          store = result.store;
        }
        navigate(result.path, result.params, store);
      }
    }
  };

  /**
   * Continue processing the hash change if not blocked
   * by global or local hook
   * @param request - {}
   */
  const resolveHashChange = request => {
    const hash = request.hash;
    const route = request.route;
    const queueId = decodeURIComponent(hash);
    // store last requested hash so we can
    // prevent a route that resolved later
    // from displaying itself
    setLastHash(hash);
    if (route.path) {
      const component = getComponent(route.path);
      // if a hook is provided for the current route
      if (isFunction(route.hook)) {
        const urlParams = getValuesFromHash(hash, route.path);
        const params = {};
        for (const key of urlParams.keys()) {
          params[key] = urlParams.get(key);
        }
        route.hook(app, {
          ...params
        });
      }
      // if there is a component attached to the route
      if (component) {
        // force page to root state to prevent shared state issues
        const activePage = getActivePage();
        if (activePage) {
          const keepAlive = keepActivePageAlive(getActiveRoute(), request);
          if (activePage && route.path === getActiveRoute() && !keepAlive) {
            activePage._setState('');
          }
        }
        if (isPage(component)) {
          load(request).then(() => {
            app._refocus();
            navigateQueue.delete(queueId);
          });
        } else {
          // of the component is not a constructor
          // or a Component instance we can assume
          // that it's a dynamic import
          component().then(contents => {
            return contents.default;
          }).then(module => {
            storeComponent(route.path, module);
            return load(request);
          }).then(() => {
            app._refocus();
            navigateQueue.delete(queueId);
          });
        }
      } else {
        navigateQueue.delete(queueId);
      }
    }
  };

  /**
   * Directional step in history
   * @param level
   */
  const step = function () {
    let level = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    if (!level || isNaN(level)) {
      return false;
    }
    const history = getHistory();
    // for now we only support negative numbers
    level = Math.abs(level);

    //Check whether we have any history avaialble or not
    if (history.length) {
      // for now we only support history back
      const route = history.splice(history.length - level, level)[0];
      // store changed history
      setHistory(history);
      return navigate(route.hash, {
        [symbols.backtrack]: true,
        [symbols.historyState]: route.state
      }, false);
    } else if (routerConfig.get('backtrack')) {
      const hashLastPart = /(\/:?[\w%\s-]+)$/;
      let hash = stripRegex(getHash());
      let floor = getFloor(hash);

      // test if we got deep-linked
      if (floor > 1) {
        while (floor--) {
          // strip of last part
          hash = hash.replace(hashLastPart, '');
          // if we have a configured route
          // we navigate to it
          if (getRouteByHash(hash)) {
            return navigate(hash, {
              [symbols.backtrack]: true
            }, false);
          }
        }
      }
    }

    // we can't step back past the amount
    // of history entries
    if (level > history.length) {
      if (isFunction(app._handleAppClose)) {
        return app._handleAppClose();
      }
      return app.application.closeApp();
    }
    return false;
  };

  /**
   * Resume Router's page loading process after
   * the BootComponent became visible;
   */
  const resume = () => {
    if (isString(resumeHash)) {
      navigate(resumeHash, false);
      resumeHash = '';
    } else if (isFunction(resumeHash)) {
      resumeHash().then(res => {
        resumeHash = '';
        if (isObject(res)) {
          navigate(res.path, res.params);
        } else {
          navigate(res);
        }
      });
    } else {
      console.warn('[Router]: resume() called but no hash found');
    }
  };

  /**
   * Force reload active hash
   */
  const reload = () => {
    if (!isNavigating()) {
      const hash = getActiveHash();
      navigate(hash, {
        reload: true
      }, false);
    }
  };

  /**
   * Query if the Router is still processing a Request
   * @returns {boolean}
   */
  const isNavigating = () => {
    if (navigateQueue.size) {
      let isProcessing = false;
      for (let request of navigateQueue.values()) {
        if (!request.isCancelled) {
          isProcessing = true;
        }
      }
      return isProcessing;
    }
    return false;
  };
  const getResumeHash = () => {
    return resumeHash;
  };

  /**
   * By default we return the location hash
   * @returns {string}
   */
  let getHash = () => {
    return document.location.hash;
  };

  /**
   * Update location hash
   * @param url
   */
  let setHash = url => {
    document.location.hash = url;
  };

  /**
   * This can be called from the platform / bootstrapper to override
   * the default getting and setting of the hash
   * @param config
   */
  const initRouter = config => {
    if (config.getHash) {
      getHash = config.getHash;
    }
    if (config.setHash) {
      setHash = config.setHash;
    }
  };

  /**
   * On hash change we start processing
   */
  const registerListener = () => {
    Registry.addEventListener(window, 'hashchange', async () => {
      if (mustUpdateLocationHash()) {
        try {
          await handleHashChange();
        } catch (e) {
          console.error(e);
        }
      }
    });
  };

  /**
   * Navigate to root hash
   */
  const root = () => {
    const rootHash = getRootHash();
    if (isString(rootHash)) {
      navigate(rootHash);
    } else if (isFunction(rootHash)) {
      rootHash().then(res => {
        if (isObject(res)) {
          navigate(res.path, res.params);
        } else {
          navigate(res);
        }
      });
    }
  };
  const deletePage = param => {
    deleteCurrentInstance(param);
  };

  // export API
  var Router = {
    startRouter,
    navigate,
    resume,
    step,
    go: step,
    back: step.bind(null, -1),
    activePage: getActivePage,
    getActivePage() {
      // warning
      return getActivePage();
    },
    deletePage,
    getActiveRoute,
    getActiveHash,
    focusWidget,
    getActiveWidget,
    restoreFocus,
    isNavigating,
    getHistory,
    setHistory,
    getHistoryState,
    replaceHistoryState,
    getQueryStringParams,
    reload,
    symbols,
    App: RoutedApp,
    // keep backwards compatible
    focusPage: restoreFocus,
    root: root,
    /**
     * Deprecated api methods
     */
    setupRoutes() {
      console.warn('Router: setupRoutes is deprecated, consolidate your configuration');
      console.warn('https://rdkcentral.github.io/Lightning-SDK/#/plugins/router/configuration');
    },
    on() {
      console.warn('Router.on() is deprecated, consolidate your configuration');
      console.warn('https://rdkcentral.github.io/Lightning-SDK/#/plugins/router/configuration');
    },
    before() {
      console.warn('Router.before() is deprecated, consolidate your configuration');
      console.warn('https://rdkcentral.github.io/Lightning-SDK/#/plugins/router/configuration');
    },
    after() {
      console.warn('Router.after() is deprecated, consolidate your configuration');
      console.warn('https://rdkcentral.github.io/Lightning-SDK/#/plugins/router/configuration');
    }
  };

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  let ApplicationInstance;
  var Launch = ((App, appSettings, platformSettings, appData) => {
    initSettings$1(appSettings, platformSettings);
    initUtils(platformSettings);
    initStorage();
    // Initialize plugins
    if (platformSettings.plugins) {
      platformSettings.plugins.profile && initProfile(platformSettings.plugins.profile);
      platformSettings.plugins.metrics && initMetrics(platformSettings.plugins.metrics);
      platformSettings.plugins.mediaPlayer && initMediaPlayer(platformSettings.plugins.mediaPlayer);
      platformSettings.plugins.mediaPlayer && initVideoPlayer(platformSettings.plugins.mediaPlayer);
      platformSettings.plugins.ads && initAds(platformSettings.plugins.ads);
      platformSettings.plugins.router && initRouter(platformSettings.plugins.router);
      platformSettings.plugins.tv && initTV(platformSettings.plugins.tv);
      platformSettings.plugins.purchase && initPurchase(platformSettings.plugins.purchase);
      platformSettings.plugins.pin && initPin(platformSettings.plugins.pin);
    }
    const app = Application(App, appData, platformSettings);
    initLightningSdkPlugin.log = Log$1;
    initLightningSdkPlugin.settings = Settings$2;
    initLightningSdkPlugin.ads = Ads;
    initLightningSdkPlugin.lightning = t;
    ApplicationInstance = new app(appSettings);
    initLightningSdkPlugin.appInstance = ApplicationInstance;
    return ApplicationInstance;
  });

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 Metrological
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  class SubtitleComponent extends t.Component {
    static _template() {
      return {
        visible: false,
        rect: true,
        color: 0x90000000,
        shader: {
          type: t.shaders.RoundedRectangle,
          radius: 5
        },
        Text: {
          y: 5,
          x: 20,
          text: {
            textColor: 0xffffffff,
            fontSize: 38,
            lineHeight: 38 * 1.4,
            textAlign: 'center',
            wordWrap: true,
            maxLines: 3,
            shadow: true,
            shadowColor: 0xff333333
          }
        }
      };
    }
    _init() {
      this._textTextureDefaults = new t.textures.TextTexture(this.stage).cloneArgs();
      this.tag('Text').on('txLoaded', _ref => {
        let {
          _source
        } = _ref;
        this.w = _source.w + this.tag('Text').x * 2;
        this.h = _source.h;
        this.position();
      });
    }
    get textFormat() {
      const textTag = this.tag('Text').text;
      return {
        fontFace: textTag.fontFace || 'sans-serif',
        fontSize: textTag.fontSize,
        lineHeight: textTag.lineHeight,
        textAlign: textTag.textAlign,
        wordWrap: true,
        maxLines: textTag.maxLines
      };
    }
    show() {
      this.visible = true;
    }
    hide() {
      this.visible = false;
    }
    position() {
      this.x = this._calculateX(this.xPos);
      this.y = this._calculateY(this.yPos);
    }
    set viewportW(v) {
      this._viewportW = v;
      this.x = this._calculateX(this.xPos);
    }
    get viewportW() {
      return this._viewportW || this.application.finalW;
    }
    set viewportH(v) {
      this._viewportH = v;
      this.y = this._calculateY(this.yPos);
    }
    get viewportH() {
      return this._viewportH || this.application.finalH;
    }
    _calculateX(x) {
      if (x === 'center') {
        x = (this.viewportW - this.finalW) / 2;
      } else if (x === 'left') {
        x = 60;
      } else if (x === 'right') {
        x = this.viewportW - this.finalW - 60;
      }
      return x;
    }
    set xPos(v) {
      this._x = v;
      this.x = this._calculateX(v);
    }
    get xPos() {
      return this._x || 'center';
    }
    _calculateY(y) {
      if (y === 'center') {
        return (this.viewportH - this.finalH) / 2;
      } else if (y === 'top') {
        return 60;
      } else if (y === 'bottom') {
        return this.viewportH - this.finalH - 60;
      }
      return y;
    }
    set yPos(v) {
      this._y = v;
      this.y = this._calculateY(v);
    }
    get yPos() {
      return this._y || 'bottom';
    }
    set fontFamily(v) {
      this.tag('Text').text.fontFace = v;
    }
    set fontSize(v) {
      this.tag('Text').text.fontSize = v;
      this.tag('Text').text.lineHeight = v * 1.3;
    }
    set fontColor(v) {
      this.tag('Text').color = v;
    }
    set backgroundColor(v) {
      this.color = v;
    }
    _defineBreakpoint(text, breakpoint) {
      if (breakpoint >= this.maxWidth) return this.maxWidth;
      const info = t.textures.TextTexture.renderer(this.stage, this.stage.platform.getDrawingCanvas(), {
        ...this._textTextureDefaults,
        ...this.textFormat,
        ...{
          wordWrapWidth: breakpoint
        },
        text
      })._calculateRenderInfo();
      if (info.width <= breakpoint && info.lines.length <= 2) {
        return breakpoint;
      } else {
        return this._defineBreakpoint(text, breakpoint * 1.25);
      }
    }
    set text(v) {
      this.alpha = 0;
      if (v && v.length) {
        const breakpoint = this._defineBreakpoint(v, 640);
        this.tag('Text').text.wordWrapWidth = breakpoint;
        this.tag('Text').text = v;
        this.alpha = 1;
      }
    }
    set textAlign(v) {
      this._textAlign = v;
      this.tag('Text').text.textAlign = v;
    }
    set maxWidth(v) {
      this._maxWidth = v;
    }
    get maxWidth() {
      return (this._maxWidth || 1200) - this.tag('Text').x * 2;
    }
    set maxLines(v) {
      this.tag('Text').text.maxLines = v;
    }
  }

  /*
   * Copyright 2021 Comcast Cable Communications Management, LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *
   * SPDX-License-Identifier: Apache-2.0
   */


  const win$3 = typeof window !== 'undefined' ? window : {};

  let listener;
  const setMockListener = func => { listener = func; };

  let mock$1;
  const pending = [];
  const eventMap = {};

  let callback;
  let testHarness;

  if (win$3.__firebolt && win$3.__firebolt.testHarness) {
    testHarness = win$3.__firebolt.testHarness;
  }

  function send(message) {
    console.debug('Sending message to transport: ' + message);
    let json = JSON.parse(message);

    // handle bulk sends
    if (Array.isArray(json)) {
      json.forEach(j => send(JSON.stringify(j)));
      return
    }

    let [module, method] = json.method.split('.');

    if (testHarness && testHarness.onSend) {
      testHarness.onSend(module, method, json.params, json.id);
    }

    // store the ID of the first listen for each event
    if (method.match(/^on[A-Z]/)) {
      if (json.params.listen) {
        eventMap[json.id] = module.toLowerCase() + '.' + method[2].toLowerCase() + method.substr(3);
      } else {
        Object.keys(eventMap).forEach(key => {
          if (eventMap[key] === module.toLowerCase() + '.' + method[2].toLowerCase() + method.substr(3)) {
            delete eventMap[key];
          }
        });
      }
    }

    if (mock$1)
      handle(json);
    else
      pending.push(json);
  }

  function handle(json) {
    let result;
    try {
      result = getResult(json.method, json.params);
    }
    catch (error) {
      setTimeout(() => callback(JSON.stringify({ 
        jsonrpc: '2.0',
        error: {
          code: -32602,
          message: "Invalid params (this is a mock error from the mock transport layer)"
        },
        id: json.id
      })));
    }

    setTimeout(() => callback(JSON.stringify({ 
      jsonrpc: '2.0',
      result: result,
      id: json.id
    })));
  }

  function receive(_callback) {
    callback = _callback;

    if (testHarness && (typeof testHarness.initialize === 'function')) {
      testHarness.initialize({
        emit: event,
        listen: function(...args) { listener(...args); },
      });
    }
  }

  function event(module, event, value) {
   const listener = Object.entries(eventMap).find(([k, v]) => v.toLowerCase() === module.toLowerCase() + '.' + event.toLowerCase());
    if (listener) {
      let message = JSON.stringify({
        jsonrpc: '2.0',
        id: parseInt(listener[0]),
        result: value
      });
      callback(message);
    }
  }

  function dotGrab$1(obj = {}, key) {
    const keys = key.split('.');
    let ref = obj;
    for (let i = 0; i < keys.length; i++) {
      ref = (Object.entries(ref).find( ([k, v]) => k.toLowerCase() === keys[i].toLowerCase()) || [null, {}])[1];
    }
    return ref
  }

  function getResult(method, params) {
    let api = dotGrab$1(mock$1, method);

    if (method.match(/^[a-zA-Z]+\.on[A-Za-z]+$/)) {
      api = {
        event: method,
        listening: true
      };
    }

    if (typeof api === 'function') {
      return params == null ? api() : api(params)
    } else return api
  }

  function setMockResponses(m) {
    mock$1 = m;

    pending.forEach(json => handle(json));
    pending.length = 0;
  }

  var mock$2 = {
    send: send,
    receive: receive,
    event: event
  };

  function router (params, callbackOrValue, contextParameterCount) {
      const numArgs = params ? Object.values(params).length : 0;
    
      if (numArgs === contextParameterCount && callbackOrValue === undefined) {
        // getter
        return "getter"
      } else if (numArgs === contextParameterCount && typeof callbackOrValue === 'function') {
        // subscribe
        return "subscriber"
      } else if (numArgs === (contextParameterCount) && callbackOrValue !== undefined) {
        // setter
        return "setter"
      }

      return null
  }

  const mocks = {};

  function mock(module, method, params, value, contextParameterCount, def) {
    const type = router(params, value, contextParameterCount);
    const hash = contextParameterCount ? '.' + Object.keys(params).filter(key => key !== 'value').map(key => params[key]).join('.') : '';
    const key = `${module}.${method}${hash}`;

    if (type === "getter") {
      const value = mocks.hasOwnProperty(key) ? mocks[key] : def;
      return value
    }
    else if (type === "subscriber") ;
    else if (type === "setter") {
      mocks[key] = value;
      mock$2.event(module, `${method}Changed`, { value });
      return null
    }  
  }

  var MockProps = {
    mock: mock
  };

  /*
   * Copyright 2021 Comcast Cable Communications Management, LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *
   * SPDX-License-Identifier: Apache-2.0
   */

  var _Accessibility = {
      closedCaptions:  {"enabled":true,"styles":{"fontFamily":"monospaced_sanserif","fontSize":1,"fontColor":"#ffffff","fontEdge":"none","fontEdgeColor":"#7F7F7F","fontOpacity":100,"backgroundColor":"#000000","backgroundOpacity":100,"textAlign":"center","textAlignVertical":"middle","windowColor":"white","windowOpacity":50},"preferredLanguages":["eng","spa"]},
      closedCaptionsSettings: function (params) {
          return MockProps.mock('Accessibility', 'closedCaptionsSettings', params, undefined, 0, {"enabled":true,"styles":{"fontFamily":"monospaced_sanserif","fontSize":1,"fontColor":"#ffffff","fontEdge":"none","fontEdgeColor":"#7F7F7F","fontOpacity":100,"backgroundColor":"#000000","backgroundOpacity":100,"textAlign":"center","textAlignVertical":"middle","windowColor":"white","windowOpacity":50},"preferredLanguages":["eng","spa"]})
      },
      voiceGuidance:  {"enabled":true,"speed":2},
      voiceGuidanceSettings: function (params) {
          return MockProps.mock('Accessibility', 'voiceGuidanceSettings', params, undefined, 0, {"enabled":true,"speed":2})
      },
      audioDescriptionSettings: function (params) {
          return MockProps.mock('Accessibility', 'audioDescriptionSettings', params, undefined, 0, {"enabled":true})
      }
  };

  /*
   * Copyright 2021 Comcast Cable Communications Management, LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *
   * SPDX-License-Identifier: Apache-2.0
   */

  var _Account = {
      id: function (params) {
          return MockProps.mock('Account', 'id', params, undefined, 0, "123")
      },
      uid: function (params) {
          return MockProps.mock('Account', 'uid', params, undefined, 0, "ee6723b8-7ab3-462c-8d93-dbf61227998e")
      }
  };

  /*
   * Copyright 2021 Comcast Cable Communications Management, LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *
   * SPDX-License-Identifier: Apache-2.0
   */

  var _Advertising = {
      config:  {"adServerUrl":"https://demo.v.fwmrm.net/ad/p/1","adServerUrlTemplate":"https://demo.v.fwmrm.net/ad/p/1?flag=+sltp+exvt+slcb+emcr+amcb+aeti&prof=12345:caf_allinone_profile &nw=12345&mode=live&vdur=123&caid=a110523018&asnw=372464&csid=gmott_ios_tablet_watch_live_ESPNU&ssnw=372464&vip=198.205.92.1&resp=vmap1&metr=1031&pvrn=12345&vprn=12345&vcid=1X0Ce7L3xRWlTeNhc7br8Q%3D%3D","adNetworkId":"519178","adProfileId":"12345:caf_allinone_profile","adSiteSectionId":"caf_allinone_profile_section","adOptOut":true,"privacyData":"ew0KICAicGR0IjogImdkcDp2MSIsDQogICJ1c19wcml2YWN5IjogIjEtTi0iLA0KICAibG10IjogIjEiIA0KfQ0K","ifaValue":"01234567-89AB-CDEF-GH01-23456789ABCD","ifa":"ewogICJ2YWx1ZSI6ICIwMTIzNDU2Ny04OUFCLUNERUYtR0gwMS0yMzQ1Njc4OUFCQ0QiLAogICJpZmFfdHlwZSI6ICJzc3BpZCIsCiAgImxtdCI6ICIwIgp9Cg==","appName":"FutureToday","appBundleId":"FutureToday.comcast","distributorAppId":"1001","deviceAdAttributes":"ewogICJib0F0dHJpYnV0ZXNGb3JSZXZTaGFyZUlkIjogIjEyMzQiCn0=","coppa":0,"authenticationEntity":"60f72475281cfba3852413bd53e957f6"},
      policy: function (params) {
          return MockProps.mock('Advertising', 'policy', params, undefined, 0, {"skipRestriction":"adsUnwatched","limitAdTracking":false})
      },
      advertisingId:  {"ifa":"01234567-89AB-CDEF-GH01-23456789ABCD","ifa_type":"idfa","lmt":"0"},
      deviceAttributes:  {},
      appBundleId:  "operator.app"
  };

  /*
   * Copyright 2021 Comcast Cable Communications Management, LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *
   * SPDX-License-Identifier: Apache-2.0
   */

  var _Authentication = {
      token:  {"value":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c","expires":"2022-04-23T18:25:43.511Z","type":"platform"},
      device:  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
      session:  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
      root:  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
  };

  /*
   * Copyright 2021 Comcast Cable Communications Management, LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *
   * SPDX-License-Identifier: Apache-2.0
   */

  var _Capabilities = {
      supported:  true,
      available:  true,
      permitted:  true,
      granted:  true,
      info:  [{"capability":"xrn:firebolt:capability:device:model","supported":true,"available":true,"use":{"permitted":true,"granted":true},"manage":{"permitted":true,"granted":true},"provide":{"permitted":true,"granted":true}},{"capability":"xrn:firebolt:capability:input:keyboard","supported":true,"available":true,"use":{"permitted":true,"granted":true},"manage":{"permitted":true,"granted":true},"provide":{"permitted":true,"granted":true}},{"capability":"xrn:firebolt:capability:protocol:bluetoothle","supported":false,"available":false,"use":{"permitted":true,"granted":true},"manage":{"permitted":true,"granted":true},"provide":{"permitted":true,"granted":true},"details":["unsupported"]},{"capability":"xrn:firebolt:capability:token:device","supported":true,"available":true,"use":{"permitted":true,"granted":true},"manage":{"permitted":true,"granted":true},"provide":{"permitted":true,"granted":true}},{"capability":"xrn:firebolt:capability:token:platform","supported":true,"available":false,"use":{"permitted":true,"granted":true},"manage":{"permitted":true,"granted":true},"provide":{"permitted":true,"granted":true},"details":["unavailable"]},{"capability":"xrn:firebolt:capability:protocol:moca","supported":true,"available":false,"use":{"permitted":true,"granted":true},"manage":{"permitted":true,"granted":true},"provide":{"permitted":true,"granted":true},"details":["disabled","unavailable"]},{"capability":"xrn:firebolt:capability:wifi:scan","supported":true,"available":true,"use":{"permitted":true,"granted":true},"manage":{"permitted":true,"granted":true},"provide":{"permitted":true,"granted":true},"details":["unpermitted"]},{"capability":"xrn:firebolt:capability:localization:postal-code","supported":true,"available":true,"use":{"permitted":true,"granted":null},"manage":{"permitted":true,"granted":true},"provide":{"permitted":true,"granted":true},"details":["ungranted"]},{"capability":"xrn:firebolt:capability:localization:postal-code","supported":true,"available":true,"use":{"permitted":true,"granted":true},"manage":{"permitted":true,"granted":true},"provide":{"permitted":true,"granted":true},"details":["ungranted"]},{"capability":"xrn:firebolt:capability:localization:locality","supported":true,"available":true,"use":{"permitted":true,"granted":true},"manage":{"permitted":true,"granted":true},"provide":{"permitted":true,"granted":true},"details":["grantDenied","ungranted"]}],
      request:  [{"capability":"xrn:firebolt:capability:commerce:purchase","supported":true,"available":true,"use":{"permitted":true,"granted":true},"manage":{"permitted":true,"granted":true},"provide":{"permitted":true,"granted":true}}]
  };

  /*
   * Copyright 2021 Comcast Cable Communications Management, LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *
   * SPDX-License-Identifier: Apache-2.0
   */

  var _Device = {
      id: function (params) {
          return MockProps.mock('Device', 'id', params, undefined, 0, "123")
      },
      distributor: function (params) {
          return MockProps.mock('Device', 'distributor', params, undefined, 0, "Company")
      },
      platform: function (params) {
          return MockProps.mock('Device', 'platform', params, undefined, 0, "WPE")
      },
      uid: function (params) {
          return MockProps.mock('Device', 'uid', params, undefined, 0, "ee6723b8-7ab3-462c-8d93-dbf61227998e")
      },
      type: function (params) {
          return MockProps.mock('Device', 'type', params, undefined, 0, "STB")
      },
      model: function (params) {
          return MockProps.mock('Device', 'model', params, undefined, 0, "xi6")
      },
      sku: function (params) {
          return MockProps.mock('Device', 'sku', params, undefined, 0, "AX061AEI")
      },
      make: function (params) {
          return MockProps.mock('Device', 'make', params, undefined, 0, "Arris")
      },
      version: function (params) {
          return MockProps.mock('Device', 'version', params, undefined, 0, {"sdk":{"major":0,"minor":8,"patch":0,"readable":"Firebolt JS SDK v0.8.0"},"api":{"major":0,"minor":8,"patch":0,"readable":"Firebolt API v0.8.0"},"firmware":{"major":1,"minor":2,"patch":3,"readable":"Device Firmware v1.2.3"},"os":{"major":0,"minor":1,"patch":0,"readable":"Firebolt OS v0.1.0"},"debug":"Non-parsable build info for error logging only."})
      },
      hdcp: function (params) {
          return MockProps.mock('Device', 'hdcp', params, undefined, 0, {"hdcp1.4":true,"hdcp2.2":true})
      },
      hdr: function (params) {
          return MockProps.mock('Device', 'hdr', params, undefined, 0, {"hdr10":true,"hdr10Plus":true,"dolbyVision":true,"hlg":true})
      },
      audio: function (params) {
          return MockProps.mock('Device', 'audio', params, undefined, 0, {"stereo":true,"dolbyDigital5.1":true,"dolbyDigital5.1+":true,"dolbyAtmos":true})
      },
      screenResolution: function (params) {
          return MockProps.mock('Device', 'screenResolution', params, undefined, 0, [1920,1080])
      },
      videoResolution: function (params) {
          return MockProps.mock('Device', 'videoResolution', params, undefined, 0, [1920,1080])
      },
      name: function (params) {
          return MockProps.mock('Device', 'name', params, undefined, 0, "Living Room")
      },
      network: function (params) {
          return MockProps.mock('Device', 'network', params, undefined, 0, {"state":"connected","type":"wifi"})
      }
  };

  /*
   * Copyright 2021 Comcast Cable Communications Management, LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *
   * SPDX-License-Identifier: Apache-2.0
   */

  var _Discovery = {
      policy: function (params) {
          return MockProps.mock('Discovery', 'policy', params, undefined, 0, {"enableRecommendations":true,"shareWatchHistory":true,"rememberWatchedPrograms":true})
      },
      entityInfo:  true,
      purchasedContent:  true,
      watched:  true,
      watchNext:  true,
      entitlements:  true,
      contentAccess:  null,
      clearContentAccess:  null,
      launch:  true,
      signIn:  true,
      signOut:  true
  };

  /*
   * Copyright 2021 Comcast Cable Communications Management, LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *
   * SPDX-License-Identifier: Apache-2.0
   */

  var _Keyboard = {
      email:  "user@domain.com",
      password:  "abc123",
      standard:  "Living Room"
  };

  /*
   * Copyright 2021 Comcast Cable Communications Management, LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *
   * SPDX-License-Identifier: Apache-2.0
   */

  let inactive = {"state":"inactive","previous":"initializing"};
  let foreground = {"state":"foreground","previous":"inactive"};
  let unloading = {"state":"unloading","previous":"inactive"};

  const emit$1 = (value) => {
    mock$2.event('Lifecycle', value.state, value);
  };

  const win$2 = typeof window !== 'undefined' ? window : {};
  const automation = win$2.__firebolt ? !!win$2.__firebolt.automation : false;

  var _Lifecycle = {
    ready: function() {
      inactive.previous = 'initializing';
      setTimeout(() => emit$1(inactive), automation ? 1 : 500);
      foreground.previous = 'inactive';
      setTimeout(() => emit$1(foreground), automation ? 2 : 1000);
    },

    close: function(params) {
      let reason = params.reason;
      if (reason === 'remoteButton') {
        inactive.previous = 'foreground';
        setTimeout(() => emit$1(inactive), automation ? 1 : 500);
      }
      else if (['userExit', 'error'].includes(reason)) {
        inactive.previous = 'foreground';
        unloading.previous = 'inactive';
        setTimeout(() => emit$1(inactive), automation ? 1 : 500);
        setTimeout(() => emit$1(unloading), automation ? 2 : 1000);
      }
      else {
        throw "Invalid close reason"
      }
    },

    finished: function() {
      if (win$2.location)
        win$2.location.href = "about:blank";
    },
  };

  /*
   * Copyright 2021 Comcast Cable Communications Management, LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *
   * SPDX-License-Identifier: Apache-2.0
   */

  var _Localization = {
      locality: function (params) {
          return MockProps.mock('Localization', 'locality', params, undefined, 0, "Philadelphia")
      },
      postalCode: function (params) {
          return MockProps.mock('Localization', 'postalCode', params, undefined, 0, "19103")
      },
      countryCode: function (params) {
          return MockProps.mock('Localization', 'countryCode', params, undefined, 0, "US")
      },
      language: function (params) {
          return MockProps.mock('Localization', 'language', params, undefined, 0, "en")
      },
      preferredAudioLanguages: function (params) {
          return MockProps.mock('Localization', 'preferredAudioLanguages', params, undefined, 0, ["spa","eng"])
      },
      locale: function (params) {
          return MockProps.mock('Localization', 'locale', params, undefined, 0, "en-US")
      },
      latlon:  [39.9549,75.1699],
      additionalInfo:  {}
  };

  /*
   * Copyright 2021 Comcast Cable Communications Management, LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *
   * SPDX-License-Identifier: Apache-2.0
   */

  var _Metrics = {
      ready:  true,
      signIn:  true,
      signOut:  true,
      startContent:  true,
      stopContent:  true,
      page:  true,
      action:  true,
      error:  true,
      mediaLoadStart:  true,
      mediaPlay:  true,
      mediaPlaying:  true,
      mediaPause:  true,
      mediaWaiting:  true,
      mediaProgress:  true,
      mediaSeeking:  true,
      mediaSeeked:  true,
      mediaRateChange:  true,
      mediaRenditionChange:  true,
      mediaEnded:  true
  };

  /*
   * Copyright 2021 Comcast Cable Communications Management, LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *
   * SPDX-License-Identifier: Apache-2.0
   */

  var _Parameters = {
      initialization:  {"lmt":0,"us_privacy":"1-Y-","discovery":{"navigateTo":{"action":"entity","data":{"entityId":"abc","entityType":"program","programType":"movie"},"context":{"source":"voice"}}}}
  };

  /*
   * Copyright 2021 Comcast Cable Communications Management, LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *
   * SPDX-License-Identifier: Apache-2.0
   */

  var _Profile = {
      approveContentRating:  false,
      approvePurchase:  false,
      flags:  {"userExperience":"1000"}
  };

  /*
   * Copyright 2021 Comcast Cable Communications Management, LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *
   * SPDX-License-Identifier: Apache-2.0
   */

  var _SecondScreen = {
      protocols:  {"dial1.7":true},
      device:  "device-id",
      friendlyName: function (params) {
          return MockProps.mock('SecondScreen', 'friendlyName', params, undefined, 0, "Living Room")
      }
  };

  /*
   * Copyright 2021 Comcast Cable Communications Management, LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *
   * SPDX-License-Identifier: Apache-2.0
   */

  var _SecureStorage = {
      get:  "VGhpcyBub3QgYSByZWFsIHRva2VuLgo=",
      set:  null,
      remove:  null,
      clear:  null
  };

  /*
   * Copyright 2021 Comcast Cable Communications Management, LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *
   * SPDX-License-Identifier: Apache-2.0
   */

  var _Platform = {
    localization: _Localization,
    device: _Device,
    accessibility: _Accessibility,
  };

  /*
   * Copyright 2021 Comcast Cable Communications Management, LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *
   * SPDX-License-Identifier: Apache-2.0
   */

  class Queue {
    constructor () {
      this._callback = null;
      this._queue = [];
    }

    send (json) {
      this._queue.push(json);
    }

    receive (_callback) {
      this._callback = _callback;
    }

    flush (transport) {
      transport.receive(this._callback);
      this._queue.forEach(item => transport.send(item));
    }
  }

  /*
   * Copyright 2021 Comcast Cable Communications Management, LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *
   * SPDX-License-Identifier: Apache-2.0
   */

  const settings = {};
  const subscribers = {};

  const initSettings = (appSettings, platformSettings) => {
    settings['app'] = appSettings;
    settings['platform'] = {
      logLevel: 'WARN',
      ...platformSettings
    };
    settings['user'] = {};
  };

  const publish = (key, value) => {
    subscribers[key] && subscribers[key].forEach(subscriber => subscriber(value));
  };

  const dotGrab = (obj = {}, key) => {
    const keys = key.split('.');
    for (let i = 0; i < keys.length; i++) {
      obj = obj[keys[i]] = obj[keys[i]] !== undefined ? obj[keys[i]] : {};
    }
    return typeof obj === 'object' ? (Object.keys(obj).length ? obj : undefined) : obj
  };

  var Settings = {
    get(type, key, fallback = undefined) {
      const val = dotGrab(settings[type], key);
      return val !== undefined ? val : fallback
    },
    has(type, key) {
      return !!this.get(type, key)
    },
    set(key, value) {
      settings['user'][key] = value;
      publish(key, value);
    },
    subscribe(key, callback) {
      subscribers[key] = subscribers[key] || [];
      subscribers[key].push(callback);
    },
    unsubscribe(key, callback) {
      if (callback) {
        const index = subscribers[key] && subscribers[key].findIndex(cb => cb === callback);
        index > -1 && subscribers[key].splice(index, 1);
      } else {
        if (key in subscribers) {
          subscribers[key] = [];
        }
      }
    },
    clearSubscribers() {
      for (const key of Object.getOwnPropertyNames(subscribers)) {
        delete subscribers[key];
      }
    },
    setLogLevel (logLevel) {
      settings.platform.logLevel = logLevel;
    },
    getLogLevel () {
      return settings.platform.logLevel
    }
  };

  /*
   * Copyright 2021 Comcast Cable Communications Management, LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *
   * SPDX-License-Identifier: Apache-2.0
   */

  const win$1 = typeof window !== 'undefined' ? window : {};

  class LegacyTransport {
    constructor (bridge) {
      this.bridge = bridge;
    }

    send (msg) {
      this.bridge.JSMessageChanged(msg, () => {});
    }

    receive (callback) {
      win$1.$badger = win$1.$badger || {};
      /** Hold on to real $badger callback and event methods so they can be called for non-jsonrpc messages */
      const badgerCallback = win$1.$badger.callback ? win$1.$badger.callback.bind(win$1.$badger) : null;
      const badgerEvent = win$1.$badger.event ? win$1.$badger.event.bind(win$1.$badger) : null;
      win$1.$badger.callback = (pid, success, json) => {
        if (json.jsonrpc) {
          callback(JSON.stringify(json));
        } else if (badgerCallback) {
          badgerCallback(pid, success, json);
        }
      };
      win$1.$badger.event = (handlerId, json) => {
        if (json.jsonrpc) {
          callback(JSON.stringify(json));
        } else if (badgerEvent) {
          badgerEvent(handlerId, json);
        }
      };
    }

    static isLegacy (transport) {
      return LegacyTransport.isXREProxy(transport) || ((transport.send === undefined) && (transport.JSMessageChanged))
    }

    static isXREProxy (transport) {
      /** Set top boxes running XRE has a "Proxy" transport
       * native object that intercepts ALL method calls, so we
       * cannot test for transport.send existence because it will return true
       * even though it actually is not supported. Check if some obscure method
       * name like "proxyObjectTest" is defined. If it is then we know we are using a
       * Proxy object and thus is legacy transport.
       */
      return transport.proxyObjectTest !== undefined
    }
  }

  const MAX_QUEUED_MESSAGES = 100;

  class WebsocketTransport {
    constructor (endpoint) {
      this._endpoint = endpoint;
      this._ws = null;
      this._connected = false;
      this._queue = [];
      this._callbacks = [];
    }

    send (msg) {
      this._connect();

      if (this._connected) {
        this._ws.send(msg);
      } else {
        if (this._queue.length < MAX_QUEUED_MESSAGES) {
          this._queue.push(msg);
        }
      }
    }

    receive (callback) {
      if (!callback) return
      this._connect();
      this._callbacks.push(callback);
    }

    _notifyCallbacks (message) {
      for (let i = 0; i < this._callbacks.length; i++) {
        setTimeout(() => this._callbacks[i](message), 1);
      }
    }

    _connect () {
      if (this._ws) return
      this._ws = new WebSocket(this._endpoint, ['jsonrpc']);
      this._ws.addEventListener('message', message => {
        this._notifyCallbacks(message.data);
      });
      this._ws.addEventListener('error', message => {
      });
      this._ws.addEventListener('close', message => {
        this._ws = null;
        this._connected = false;
      });
      this._ws.addEventListener('open', message => {
        this._connected = true;
        for (let i = 0; i < this._queue.length; i++) {
          this._ws.send(this._queue[i]);
        }
        this._queue = [];
      });
    }
  }

  /*
  methods = Map<string, {
      x-this-param: 'accessory',
      x-additional-params: ['timeout'],
      x-method: 'Accessory.pair'
  }>
  */

  function transform(result, transforms) {

      if (!transforms || !transforms.methods) {
          return result
      }

      const { methods } = transforms;
      const transformed = JSON.parse(JSON.stringify(result));

      Object.keys(methods).forEach(key => {
          const method_info = methods[key];
          const rpc_method = method_info['x-method'];
          const [module, method] = rpc_method.split('.');
          const params = {};
          params[method_info['x-this-param']] = transformed;
          transformed[key] = (...args) => {
              // copy the args into the correct RPC param names
              for (var i=0; i<args.length; i++) {
                  params[method_info['x-additional-params'][i]] = args[i];
              }
              return Transport.send(module.toLowerCase(), method, params)
          };
      });
      return transformed
  }

  var Results = {
      transform
  };

  /*
   * Copyright 2021 Comcast Cable Communications Management, LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *
   * SPDX-License-Identifier: Apache-2.0
   */

  const LEGACY_TRANSPORT_SERVICE_NAME = 'com.comcast.BridgeObject_1';
  let moduleInstance = null;

  const isEventSuccess = x => x && (typeof x.event === 'string') && (typeof x.listening === 'boolean');

  const win = typeof window !== 'undefined' ? window : {};

  class Transport {
    constructor () {
      this._promises = [];
      this._transport = null;
      this._id = 1;
      this._eventEmitters = [];
      this._eventIds = [];
      this._queue = new Queue();
      this._deprecated = {};
      this.isMock = false;
    }

    static addEventEmitter (emitter) {
      Transport.get()._eventEmitters.push(emitter);
    }

    static registerDeprecatedMethod (module, method, alternative) {
      Transport.get()._deprecated[module.toLowerCase() + '.' + method.toLowerCase()] = {
        alternative: alternative || ''
      };
    }

    _endpoint () {
      if (win.__firebolt && win.__firebolt.endpoint) {
        return win.__firebolt.endpoint
      }
      return null
    }

    constructTransportLayer () {
      let transport;
      const endpoint = this._endpoint();
      if (endpoint && (endpoint.startsWith('ws://') || endpoint.startsWith('wss://'))) {
        transport = new WebsocketTransport(endpoint);
        transport.receive(this.receiveHandler.bind(this));
      } else if (
        typeof win.ServiceManager !== 'undefined' &&
        win.ServiceManager &&
        win.ServiceManager.version
      ) {
        // Wire up the queue
        transport = this._queue;
        // get the default bridge service, and flush the queue
        win.ServiceManager.getServiceForJavaScript(LEGACY_TRANSPORT_SERVICE_NAME, service => {
          if (LegacyTransport.isLegacy(service)) {
            transport = new LegacyTransport(service);
          } else {
            transport = service;
          }
          this.setTransportLayer(transport);
        });
      } else {
        this.isMock = true;
        transport = mock$2;
        transport.receive(this.receiveHandler.bind(this));
      }
      return transport
    }

    setTransportLayer (tl) {
      this._transport = tl;
      this._queue.flush(tl);
    }

    static send (module, method, params, transforms) {
      /** Transport singleton across all SDKs to keep single id map */
      return Transport.get()._send(module, method, params, transforms)
    }

    static listen(module, method, params, transforms) {
      return Transport.get()._sendAndGetId(module, method, params, transforms)
    }

    _send (module, method, params, transforms) {
      if (Array.isArray(module) && !method && !params) {
        return this._batch(module)
      }
      else {
        return this._sendAndGetId(module, method, params, transforms).promise
      }
    }

    _sendAndGetId (module, method, params, transforms) {
      const {promise, json, id } = this._processRequest(module, method, params, transforms);
      const msg = JSON.stringify(json);
      if (Settings.getLogLevel() === 'DEBUG') {
        console.debug('Sending message to transport: ' + msg);
      }
      this._transport.send(msg);

      return { id, promise }
    }

    _batch (requests) {
      const results = [];
      const json = [];

      requests.forEach( ({module, method, params, transforms}) => {
        const result = this._processRequest(module, method, params, transforms);
        results.push({
          promise: result.promise,
          id: result.id
        });
        json.push(result.json);
      });

      const msg = JSON.stringify(json);
      if (Settings.getLogLevel() === 'DEBUG') {
        console.debug('Sending message to transport: ' + msg);
      }
      this._transport.send(msg);

      return results
    }

    _processRequest (module, method, params, transforms) {

      const p = this._addPromiseToQueue(module, method, params, transforms);
      const json = this._createRequestJSON(module, method, params);

      const result = {
        promise: p,
        json: json,
        id: this._id
      };

      this._id++;

      return result
    }

    _createRequestJSON (module, method, params) {
      return { jsonrpc: '2.0', method: module.toLowerCase() + '.' + method, params: params, id: this._id }
    }

    _addPromiseToQueue (module, method, params, transforms) {
      return new Promise((resolve, reject) => {
        this._promises[this._id] = {};
        this._promises[this._id].promise = this;
        this._promises[this._id].resolve = resolve;
        this._promises[this._id].reject = reject;
        this._promises[this._id].transforms = transforms;

        const deprecated = this._deprecated[module.toLowerCase() + '.' + method.toLowerCase()];
        if (deprecated) {
          console.warn(`WARNING: ${module}.${method}() is deprecated. ` + deprecated.alternative);
        }

        // store the ID of the first listen for each event
        // TODO: what about wild cards?
        if (method.match(/^on[A-Z]/)) {
          if (params.listen) {
            this._eventIds.push(this._id);
          } else {
            this._eventIds = this._eventIds.filter(id => id !== this._id);
          }
        }
      })
    }

    /**
     * If we have a global transport, use that. Otherwise, use the module-scoped transport instance.
     * @returns {Transport}
     */
    static get () {
      /** Set up singleton and initialize it */
      win.__firebolt = win.__firebolt || {};
      if ((win.__firebolt.transport == null) && (moduleInstance == null)) {
        const transport = new Transport();
        transport.init();
        if (transport.isMock) {
          /** We should use the mock transport built with the SDK, not a global */
          moduleInstance = transport;
        } else {
          win.__firebolt = win.__firebolt || {};
          win.__firebolt.transport = transport;
        }
        win.__firebolt.setTransportLayer = transport.setTransportLayer.bind(transport);
      }
      return win.__firebolt.transport ? win.__firebolt.transport : moduleInstance
    }

    receiveHandler (message) {
      if (Settings.getLogLevel() === 'DEBUG') {
        console.debug('Received message from transport: ' + message);
      }
      const json = JSON.parse(message);
      const p = this._promises[json.id];

      if (p) {
        if (json.error) p.reject(json.error);
        else {
          // Do any module-specific transforms on the result
          let result = json.result;

          if (p.transforms) {
            if (Array.isArray(json.result)) {
              result = result.map(x => Results.transform(x, p.transforms));
            }
            else {
              result = Results.transform(result, p.transforms);
            }
          }
          
          p.resolve(result);
        }
        delete this._promises[json.id];
      }

      // event responses need to be emitted, even after the listen call is resolved
      if (this._eventIds.includes(json.id) && !isEventSuccess(json.result)) {
        this._eventEmitters.forEach(emit => {
          emit(json.id, json.result);
        });
      }
    }

    init () {
      initSettings({}, { log: true });
      this._queue.receive(this.receiveHandler.bind(this));
      if (win.__firebolt) {
        if (win.__firebolt.mockTransportLayer === true) {
          this.isMock = true;
          this.setTransportLayer(mock$2);
        } else if (win.__firebolt.getTransportLayer) {
          this.setTransportLayer(win.__firebolt.getTransportLayer());
        }
      }
      if (this._transport == null) {
        this._transport = this.constructTransportLayer();
      }
    }
  }
  win.__firebolt = win.__firebolt || {};
  win.__firebolt.setTransportLayer = transport => {
    Transport.get().setTransportLayer(transport);
  };

  /*
   * Copyright 2021 Comcast Cable Communications Management, LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *
   * SPDX-License-Identifier: Apache-2.0
   */

  let listenerId = 0;

  // holds two maps of ${module}.${event} => listenerId, e.g. callback method id
  // note that one callback can listen to multiple events, e.g. 'discovery.*'
  // internal is only available via a private export that we use to ensure our modules know about
  // events before the apps using the SDK (otherwise state errors can happen)
  const listeners = {
    internal: {},
    external: {},

    // Several convenience functions below for checking both internal & external lists w/ one operation

    // gets a merge list of ids for a single event key
    get: (key) => {
      return Object.assign(Object.assign({}, listeners.internal[key]), listeners.external[key])
    },
    // adds a callback/id to a key on the external list only 
    set: (key, id, value) => {
      listeners.external[key] = listeners.external[key] || {};
      listeners.external[key][id] = value;
    },
    // adds a callback/id to a key on the internal list only 
    setInternal: (key, id, value) => {
      listeners.internal[key] = listeners.internal[key] || {};
      listeners.internal[key][id] = value;
    },
    // finds the key for an id in either list (it can only be in one)
    find: (id) => {
      let key;
      [listeners.internal, listeners.external].find(group => {
        key = Object.keys(group).find(key => group[key][id]);
        if (key) return true
      });
      return key
    },
    // removes an id from either list
    remove: (id) => {
      [listeners.internal, listeners.external].forEach(group => {
        Object.keys(group).forEach(key => {
          if (group[key] && group[key][id]) {
            delete group[key][id];
            if (Object.values(group[key]).length === 0) {
              delete group[key];
            }
          }
        });
      });
    },
    // removes a key from both lists if _internal is true, otherwise only the external list
    removeKey: (key, _internal=false) => {
      _internal && listeners.internal[key] && delete listeners.internal[key];
      listeners.external[key] && delete listeners.external[key];
    },
    // gives a list of all keys
    keys: () => {
      return Array.from(new Set(Object.keys(listeners.internal).concat(Object.keys(listeners.external))))
    },
    // counts how many listeners are in a key across both lists
    count: (key) => {
      return Object.values(listeners.get(key)).length
    }
  };

  // holds a map of RPC Ids => Context Key, e.g. the RPC id of an onEvent call mapped to the corresponding context parameters key for that RPC call
  const keys = {};

  // holds a map of ${module}.${event} => Transport.send calls (only called once per event)
  // note that the keys here MUST NOT contain wild cards
  const oncers = [];
  const validEvents = {};
  const validContext = {};

  let transportInitialized = false;

  const emit = (id, value) => {
    callCallbacks(listeners.internal[keys[id]], [value]);
    callCallbacks(listeners.external[keys[id]], [value]);
  };

  const registerEvents = (module, events) => {
    validEvents[module.toLowerCase()] = events.concat();
  };

  const registerEventContext = (module, event, context) => {
    validContext[module.toLowerCase()] = validContext[module.toLowerCase()] || {};
    validContext[module.toLowerCase()][event] = context.concat();
  };

  const callCallbacks = (cbs, args) => {
    cbs &&
      Object.keys(cbs).forEach(listenerId => {
        let callback = cbs[listenerId];
        if (oncers.indexOf(parseInt(listenerId)) >= 0) {
          oncers.splice(oncers.indexOf(parseInt(listenerId)), 1);
          delete cbs[listenerId];
        }
        callback.apply(null, args);
      });
  };

  const doListen = function(module, event, callback, context, once, internal=false) {
    init();

    if (typeof callback !== 'function') {
      return Promise.reject('No valid callback function provided.')
    } else {
      if (module === '*') {
        return Promise.reject('No valid module name provided')
      }

      const wildcard = event === '*';
      const events = (wildcard ? validEvents[module] : [event]); // explodes wildcards into an array
      const promises = [];
      const hasContext = Object.values(context).length > 0;
      const contextKey = Object.keys(context).sort().map(key => key + '=' + JSON.stringify(context[key])).join('&');

      listenerId++;

      if (once) {
        oncers.push(listenerId);
      }

      events.forEach(event => {
        const key = module + '.' + event + (hasContext ? `.${contextKey}`  : '');

        if (Object.values(listeners.get(key)).length === 0) {
          const args = Object.assign({ listen: true }, context);
          const { id, promise } = Transport.listen(module, 'on' + event[0].toUpperCase() + event.substring(1), args);
          keys[id] = key;
          promises.push(promise);
        }

        const setter = internal ? listeners.setInternal : listeners.set;

        if (wildcard) {
          setter(key, ''+listenerId, value => callback(event, value));
        }
        else {
          setter(key, ''+listenerId, callback);
        }
      });

      let resolve, reject;
      let p = new Promise((res, rej) => {
        resolve = res;
        reject = rej;
      });

      if (promises.length) {
        Promise.all(promises).then(responses => {
          resolve(listenerId);
        }).catch(error => {
          // Promise.all rejects if at least one promise rejects... we don't want that behavior here
          // TODO: Do something better than fail silently
          if (event === '*') {
            resolve(listenerId);
          }
          else {
            reject(error);
          }
        });
      }
      else {
        resolve(listenerId);
      }

      return p
    }
  };

  const getListenArgs = function(...args) {
    const callback = args.pop();
    const [module, event, context] = getClearArgs(...args);

    return [module, event, callback, context]
  };

  const getClearArgs = function(...args) {
    const module = (args.shift() || '*').toLowerCase();
    const event = args.shift() || '*';
    const context = {};
    
    for (let i = 0; args.length; i++) {
      context[validContext[module][event][i]] = args.shift();
    }

    return [module, event, context]
  };

  const once$2 = function(...args) {
    const [module, event, callback, context] = getListenArgs(...args);
    return doListen(module, event, callback, context, true)
  };

  const listen$2 = function(...args) {
    const [module, event, callback, context] = getListenArgs(...args);
    return doListen(module, event, callback, context, false)
  };

  const clear$2 = function(...args) {
    if (args && args.length && typeof args[0] === 'number') {
      return doClear(args[0])
    }
    else if (args && args.length && typeof args[1] === 'number') {
      return doClear(args[1])
    }
    else {
      const [moduleOrId, event, context] = getClearArgs(...args);
      return doClear(moduleOrId, event, context)
    }
  };

  // calls doListen with a priority flag for internal listeners to get priority
  const prioritize = function(...args) {
    const [module, event, callback, context] = getListenArgs(...args);
    return doListen(module, event, callback, context, false, true)
  };

  const unsubscribe = (key, context) => {
    const [module, event] = key.split('.').slice(0, 2);
    const args = Object.assign({ listen: false }, context);
    Transport.send(module, 'on' + event[0].toUpperCase() + event.substr(1), args);
  };


  // TODO: clear needs to go through Transport Layer
  const doClear = function (moduleOrId = false, event = false, context) {
    if (event === '*') {
      event = false;
    }

    if (typeof moduleOrId === 'number') {
      const searchId = moduleOrId.toString();
      const key = listeners.find(searchId);

      if (key) {
        listeners.remove(searchId);
        if (listeners.count(key) === 0) {
          unsubscribe(key);
        }
        return true
      }
      return false
    } else {
      if (!moduleOrId && !event) {
        listeners.keys().forEach(key => {
          listeners.removeKey(key);
          unsubscribe(key);
        });
      } else if (!event) {
        listeners.keys().forEach(key => {
          if (key.indexOf(moduleOrId.toLowerCase()) === 0) {
            listeners.removeKey(key);
            unsubscribe(key);
          }
        });
      } else {
        const hasContext = Object.values(context).length > 0;
        const contextKey = Object.keys(context).sort().map(key => key + '=' + JSON.stringify(context[key])).join('&');
        const key = moduleOrId + '.' + event + (hasContext ? `.${contextKey}`  : '');

        listeners.removeKey(key);
        unsubscribe(key, context);
      }
    }
  };

  const init = () => {
    if (!transportInitialized) {
      Transport.addEventEmitter(emit);
      setMockListener(listen$2);
      transportInitialized = true;
    }
  };

  var Events = {
    listen: listen$2,
    once: once$2,
    clear: clear$2,
    broadcast(event, value) {
      emit(Object.entries(keys).find( ([k, v]) => v === 'app.'+event)[0], value);
    },
  };

  function prop(moduleName, key, params, callbackOrValue = undefined, immutable, readonly, contextParameterCount) {
    const numArgs = Object.values(params).length;
    const type = router(params, callbackOrValue, contextParameterCount);

    if (type === "getter") {
      return Transport.send(moduleName, key, params)
    }
    else if (type === "subscriber") {
      // subscriber
      if (immutable) {
        throw new Error('Cannot subscribe to an immutable property')
      }
      return Events.listen(moduleName, key + 'Changed', ...Object.values(params), callbackOrValue)
    }
    else if (type === "setter") {
      // setter
      if (immutable) {
        throw new Error('Cannot set a value to an immutable property')
      }
      if (readonly) {
        throw new Error('Cannot set a value to a readonly property')
      }
      return Transport.send(moduleName, 'set' + key[0].toUpperCase() + key.substring(1), Object.assign({
        value: callbackOrValue
      }, params))
    }
    else if (numArgs < contextParameterCount) {
      throw new Error('Cannot get a value without all required context parameters.')
    }
    else {
      throw new Error('Property accessed with unexpected number of parameters.')
    }
  }

  var Prop = {
    prop: prop
  };

  /*
   * Copyright 2021 Comcast Cable Communications Management, LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *
   * SPDX-License-Identifier: Apache-2.0
   */

  registerEvents('Accessibility', ["audioDescriptionSettingsChanged","closedCaptionsSettingsChanged","voiceGuidanceSettingsChanged"]);


  Transport.registerDeprecatedMethod('Accessibility', 'closedCaptions', 'Use Accessibility.closedCaptionsSettings() instead.');
  Transport.registerDeprecatedMethod('Accessibility', 'voiceGuidance', 'Use Accessibility.voiceGuidanceSettings() instead.');

  /*
   * Copyright 2021 Comcast Cable Communications Management, LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *
   * SPDX-License-Identifier: Apache-2.0
   */

  registerEvents('Advertising', ["policyChanged"]);

  /*
   * Copyright 2021 Comcast Cable Communications Management, LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *
   * SPDX-License-Identifier: Apache-2.0
   */



  Transport.registerDeprecatedMethod('Authentication', 'token', 'Use Authentication module has individual methods for each token type. instead.');

  /*
   * Copyright 2021 Comcast Cable Communications Management, LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *
   * SPDX-License-Identifier: Apache-2.0
   */

  registerEvents('Capabilities', ["available","granted","revoked","unavailable"]);



  // onAvailable is accessed via listen('available, ...)

  registerEventContext('Capabilities', 'available', ["capability"]);
  // onGranted is accessed via listen('granted, ...)

  registerEventContext('Capabilities', 'granted', ["role","capability"]);
  // onRevoked is accessed via listen('revoked, ...)

  registerEventContext('Capabilities', 'revoked', ["role","capability"]);
  // onUnavailable is accessed via listen('unavailable, ...)

  registerEventContext('Capabilities', 'unavailable', ["capability"]);

  /*
   * Copyright 2021 Comcast Cable Communications Management, LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *
   * SPDX-License-Identifier: Apache-2.0
   */

  registerEvents('Device', ["audioChanged","deviceNameChanged","hdcpChanged","hdrChanged","nameChanged","networkChanged","screenResolutionChanged","videoResolutionChanged"]);


  Transport.registerDeprecatedMethod('Device', 'onDeviceNameChanged', 'Use Device.name() instead.');

  function version() {
    return new Promise( (resolve, reject) => {
        Transport.send('device', 'version').then( v => {
            v = v || {};
            v.sdk = v.sdk || {};
            v.sdk.major = parseInt('1');
            v.sdk.minor = parseInt('0');
            v.sdk.patch = parseInt('0');
            v.sdk.readable = 'Firebolt Core SDK 1.0.0';
            resolve(v);    
        }).catch(error => {
            reject(error);
        });
    })
  }


      // Methods
  function audio() {
    const callbackOrValue = arguments[0];
    return Prop.prop('Device',  'audio', {  }, callbackOrValue, false, true, 0)
  }
    function clear$1(...args) {
      return Events.clear('Device', ...args)
    }

  function distributor() {
    const callbackOrValue = arguments[0];
    return Prop.prop('Device',  'distributor', {  }, callbackOrValue, true, true, 0)
  }
  function hdcp() {
    const callbackOrValue = arguments[0];
    return Prop.prop('Device',  'hdcp', {  }, callbackOrValue, false, true, 0)
  }
  function hdr() {
    const callbackOrValue = arguments[0];
    return Prop.prop('Device',  'hdr', {  }, callbackOrValue, false, true, 0)
  }
  function id() {
    const callbackOrValue = arguments[0];
    return Prop.prop('Device',  'id', {  }, callbackOrValue, true, true, 0)
  }
    function listen$1(...args) {
      return Events.listen('Device', ...args)
    } 
    
  function make() {
    const callbackOrValue = arguments[0];
    return Prop.prop('Device',  'make', {  }, callbackOrValue, true, true, 0)
  }
  function model() {
    const callbackOrValue = arguments[0];
    return Prop.prop('Device',  'model', {  }, callbackOrValue, true, true, 0)
  }
  function name() {
    const callbackOrValue = arguments[0];
    return Prop.prop('Device',  'name', {  }, callbackOrValue, false, true, 0)
  }
  function network() {
    const callbackOrValue = arguments[0];
    return Prop.prop('Device',  'network', {  }, callbackOrValue, false, true, 0)
  }
    function once$1(...args) {
      return Events.once('Device', ...args)
    }

  function platform() {
    const callbackOrValue = arguments[0];
    return Prop.prop('Device',  'platform', {  }, callbackOrValue, true, true, 0)
  }
  function screenResolution() {
    const callbackOrValue = arguments[0];
    return Prop.prop('Device',  'screenResolution', {  }, callbackOrValue, false, true, 0)
  }
  function sku() {
    const callbackOrValue = arguments[0];
    return Prop.prop('Device',  'sku', {  }, callbackOrValue, true, true, 0)
  }
  function type() {
    const callbackOrValue = arguments[0];
    return Prop.prop('Device',  'type', {  }, callbackOrValue, true, true, 0)
  }
  function uid() {
    const callbackOrValue = arguments[0];
    return Prop.prop('Device',  'uid', {  }, callbackOrValue, true, true, 0)
  }
  function videoResolution() {
    const callbackOrValue = arguments[0];
    return Prop.prop('Device',  'videoResolution', {  }, callbackOrValue, false, true, 0)
  }

  var Device = {

  events: {
      DEVICE_NAME_CHANGED: 'deviceNameChanged',
      NAME_CHANGED: 'nameChanged',
      HDCP_CHANGED: 'hdcpChanged',
      HDR_CHANGED: 'hdrChanged',
      AUDIO_CHANGED: 'audioChanged',
      SCREEN_RESOLUTION_CHANGED: 'screenResolutionChanged',
      VIDEO_RESOLUTION_CHANGED: 'videoResolutionChanged',
      NETWORK_CHANGED: 'networkChanged'
  },

  NetworkState: {
      CONNECTED: 'connected',
      DISCONNECTED: 'disconnected'
  },

  NetworkType: {
      WIFI: 'wifi',
      ETHERNET: 'ethernet',
      HYBRID: 'hybrid'
  },

  AudioProfile: {
      STEREO: 'stereo',
      DOLBY_DIGITAL_5_1: 'dolbyDigital5.1',
      DOLBY_DIGITAL_7_1: 'dolbyDigital7.1',
      DOLBY_DIGITAL_5_1_PLUS: 'dolbyDigital5.1+',
      DOLBY_DIGITAL_7_1_PLUS: 'dolbyDigital7.1+',
      DOLBY_ATMOS: 'dolbyAtmos'
  },


    version,
  audio,
clear:   clear$1,
  distributor,
  hdcp,
  hdr,
  id,
listen:   listen$1,
  make,
  model,
  name,
  network,
once:   once$1,
  platform,
  screenResolution,
  sku,
  type,
  uid,
  videoResolution
  };

  /*
   * Copyright 2021 Comcast Cable Communications Management, LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *
   * SPDX-License-Identifier: Apache-2.0
   */




  function ready$1() {
    return Transport.send('metrics', 'ready', {})
  }

  /*
   * Copyright 2021 Comcast Cable Communications Management, LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *
   * SPDX-License-Identifier: Apache-2.0
   */

  registerEvents('Discovery', ["navigateTo","policyChanged"]);


  Transport.registerDeprecatedMethod('Discovery', 'entitlements', 'Use Discovery.contentAccess() instead.');

  /*
   * Copyright 2021 Comcast Cable Communications Management, LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *
   * SPDX-License-Identifier: Apache-2.0
   */

  registerEvents('Lifecycle', ["background","foreground","inactive","suspended","unloading"]);



  const store = {
    _current: 'initializing',
    get current() {
      return this._current
    }
  };

  async function ready() {
    let readyRes;
    await prioritize('Lifecycle', (event, value) => {
      store._current = event;
    });
    readyRes =await Transport.send('lifecycle', 'ready', {});
    setTimeout(_ => {
      ready$1();
    });
    return readyRes
  }


      // Methods
    function clear(...args) {
      return Events.clear('Lifecycle', ...args)
    }


  function close(reason) {

    const transforms = null;

    return Transport.send('Lifecycle', 'close', { reason }, transforms)
  }
    function listen(...args) {
      return Events.listen('Lifecycle', ...args)
    } 
    
    function once(...args) {
      return Events.once('Lifecycle', ...args)
    }


  function state() {
    return store.current
  }

  function finished() {
    if (store.current === 'unloading') {
      return Transport.send('lifecycle', 'finished')
    } else {
      throw 'Cannot call finished() except when in the unloading transition'
    }
  }

  // public API
  var Lifecycle = {

  events: {
      INACTIVE: 'inactive',
      FOREGROUND: 'foreground',
      BACKGROUND: 'background',
      SUSPENDED: 'suspended',
      UNLOADING: 'unloading'
  },


  CloseReason: {
      REMOTE_BUTTON: 'remoteButton',
      USER_EXIT: 'userExit',
      DONE: 'done',
      ERROR: 'error'
  },

  LifecycleState: {
      INITIALIZING: 'initializing',
      INACTIVE: 'inactive',
      FOREGROUND: 'foreground',
      BACKGROUND: 'background',
      UNLOADING: 'unloading',
      SUSPENDED: 'suspended'
  },


    ready,
    state,
    finished,

  clear,
  close,
  listen,
  once
  };

  /*
   * Copyright 2021 Comcast Cable Communications Management, LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *
   * SPDX-License-Identifier: Apache-2.0
   */

  registerEvents('Localization', ["countryCodeChanged","languageChanged","localeChanged","localityChanged","postalCodeChanged","preferredAudioLanguagesChanged"]);


  Transport.registerDeprecatedMethod('Localization', 'language', 'Use Localization.locale instead.');
  Transport.registerDeprecatedMethod('Localization', 'onLanguageChanged', 'Use language instead.');

  /*
   * Copyright 2021 Comcast Cable Communications Management, LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *
   * SPDX-License-Identifier: Apache-2.0
   */

  registerEvents('SecondScreen', ["closeRequest","friendlyNameChanged","launchRequest"]);

  /*
   * Copyright 2021 Comcast Cable Communications Management, LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *
   * SPDX-License-Identifier: Apache-2.0
   */

  setMockResponses({
      Accessibility: _Accessibility,
      Account: _Account,
      Advertising: _Advertising,
      Authentication: _Authentication,
      Capabilities: _Capabilities,
      Device: _Device,
      Discovery: _Discovery,
      Keyboard: _Keyboard,
      Lifecycle: _Lifecycle,
      Localization: _Localization,
      Metrics: _Metrics,
      Parameters: _Parameters,
      Profile: _Profile,
      SecondScreen: _SecondScreen,
      SecureStorage: _SecureStorage,
      Platform: _Platform,
  });

  function set(t,i,o,r){return set="undefined"!=typeof Reflect&&Reflect.set?Reflect.set:function set(t,i,o,r){var a,l=_superPropBase(t,i);if(l){if((a=Object.getOwnPropertyDescriptor(l,i)).set)return a.set.call(r,o),!0;if(!a.writable)return !1}if(a=Object.getOwnPropertyDescriptor(r,i)){if(!a.writable)return !1;a.value=o,Object.defineProperty(r,i,a);}else _defineProperty$1(r,i,o);return !0},set(t,i,o,r)}function _set(t,i,o,r,a){if(!set(t,i,o,r||t)&&a)throw new TypeError("failed to set property");return o}function _createForOfIteratorHelper(t,i){var o="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!o){if(Array.isArray(t)||(o=_unsupportedIterableToArray(t))||i&&t&&"number"==typeof t.length){o&&(t=o);var r=0,a=function F(){};return {s:a,n:function n(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function e(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,c=!0,u=!1;return {s:function s(){o=o.call(t);},n:function n(){var t=o.next();return c=t.done,t},e:function e(t){u=!0,l=t;},f:function f(){try{c||null==o.return||o.return();}finally{if(u)throw l}}}}function _get(){return _get="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function _get(t,i,o){var r=_superPropBase(t,i);if(r){var a=Object.getOwnPropertyDescriptor(r,i);return a.get?a.get.call(arguments.length<3?t:o):a.value}},_get.apply(this,arguments)}function _superPropBase(t,i){for(;!Object.prototype.hasOwnProperty.call(t,i)&&null!==(t=_getPrototypeOf(t)););return t}function _inherits(t,i){if("function"!=typeof i&&null!==i)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(i&&i.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),i&&_setPrototypeOf(t,i);}function _setPrototypeOf(t,i){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function _setPrototypeOf(t,i){return t.__proto__=i,t},_setPrototypeOf(t,i)}function _createSuper(t){var i=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return !1;if(Reflect.construct.sham)return !1;if("function"==typeof Proxy)return !0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return !1}}();return function _createSuperInternal(){var o,r=_getPrototypeOf(t);if(i){var a=_getPrototypeOf(this).constructor;o=Reflect.construct(r,arguments,a);}else o=r.apply(this,arguments);return function _possibleConstructorReturn(t,i){if(i&&("object"===_typeof(i)||"function"==typeof i))return i;if(void 0!==i)throw new TypeError("Derived constructors may only return object or undefined");return function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,o)}}function _getPrototypeOf(t){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function _getPrototypeOf(t){return t.__proto__||Object.getPrototypeOf(t)},_getPrototypeOf(t)}function _regeneratorRuntime(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */_regeneratorRuntime=function _regeneratorRuntime(){return i};var t,i={},o=Object.prototype,r=o.hasOwnProperty,a=Object.defineProperty||function(t,i,o){t[i]=o.value;},l="function"==typeof Symbol?Symbol:{},c=l.iterator||"@@iterator",u=l.asyncIterator||"@@asyncIterator",h=l.toStringTag||"@@toStringTag";function define(t,i,o){return Object.defineProperty(t,i,{value:o,enumerable:!0,configurable:!0,writable:!0}),t[i]}try{define({},"");}catch(t){define=function define(t,i,o){return t[i]=o};}function wrap(t,i,o,r){var l=i&&i.prototype instanceof Generator?i:Generator,c=Object.create(l.prototype),u=new Context(r||[]);return a(c,"_invoke",{value:makeInvokeMethod(t,o,u)}),c}function tryCatch(t,i,o){try{return {type:"normal",arg:t.call(i,o)}}catch(t){return {type:"throw",arg:t}}}i.wrap=wrap;var d="suspendedStart",p="suspendedYield",_="executing",g="completed",m={};function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}var v={};define(v,c,(function(){return this}));var S=Object.getPrototypeOf,k=S&&S(S(values([])));k&&k!==o&&r.call(k,c)&&(v=k);var b=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(v);function defineIteratorMethods(t){["next","throw","return"].forEach((function(i){define(t,i,(function(t){return this._invoke(i,t)}));}));}function AsyncIterator(t,i){function invoke(o,a,l,c){var u=tryCatch(t[o],t,a);if("throw"!==u.type){var h=u.arg,d=h.value;return d&&"object"==_typeof(d)&&r.call(d,"__await")?i.resolve(d.__await).then((function(t){invoke("next",t,l,c);}),(function(t){invoke("throw",t,l,c);})):i.resolve(d).then((function(t){h.value=t,l(h);}),(function(t){return invoke("throw",t,l,c)}))}c(u.arg);}var o;a(this,"_invoke",{value:function value(t,r){function callInvokeWithMethodAndArg(){return new i((function(i,o){invoke(t,r,i,o);}))}return o=o?o.then(callInvokeWithMethodAndArg,callInvokeWithMethodAndArg):callInvokeWithMethodAndArg()}});}function makeInvokeMethod(i,o,r){var a=d;return function(l,c){if(a===_)throw new Error("Generator is already running");if(a===g){if("throw"===l)throw c;return {value:t,done:!0}}for(r.method=l,r.arg=c;;){var u=r.delegate;if(u){var h=maybeInvokeDelegate(u,r);if(h){if(h===m)continue;return h}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(a===d)throw a=g,r.arg;r.dispatchException(r.arg);}else "return"===r.method&&r.abrupt("return",r.arg);a=_;var v=tryCatch(i,o,r);if("normal"===v.type){if(a=r.done?g:p,v.arg===m)continue;return {value:v.arg,done:r.done}}"throw"===v.type&&(a=g,r.method="throw",r.arg=v.arg);}}}function maybeInvokeDelegate(i,o){var r=o.method,a=i.iterator[r];if(a===t)return o.delegate=null,"throw"===r&&i.iterator.return&&(o.method="return",o.arg=t,maybeInvokeDelegate(i,o),"throw"===o.method)||"return"!==r&&(o.method="throw",o.arg=new TypeError("The iterator does not provide a '"+r+"' method")),m;var l=tryCatch(a,i.iterator,o.arg);if("throw"===l.type)return o.method="throw",o.arg=l.arg,o.delegate=null,m;var c=l.arg;return c?c.done?(o[i.resultName]=c.value,o.next=i.nextLoc,"return"!==o.method&&(o.method="next",o.arg=t),o.delegate=null,m):c:(o.method="throw",o.arg=new TypeError("iterator result is not an object"),o.delegate=null,m)}function pushTryEntry(t){var i={tryLoc:t[0]};1 in t&&(i.catchLoc=t[1]),2 in t&&(i.finallyLoc=t[2],i.afterLoc=t[3]),this.tryEntries.push(i);}function resetTryEntry(t){var i=t.completion||{};i.type="normal",delete i.arg,t.completion=i;}function Context(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(pushTryEntry,this),this.reset(!0);}function values(i){if(i||""===i){var o=i[c];if(o)return o.call(i);if("function"==typeof i.next)return i;if(!isNaN(i.length)){var a=-1,l=function next(){for(;++a<i.length;)if(r.call(i,a))return next.value=i[a],next.done=!1,next;return next.value=t,next.done=!0,next};return l.next=l}}throw new TypeError(_typeof(i)+" is not iterable")}return GeneratorFunction.prototype=GeneratorFunctionPrototype,a(b,"constructor",{value:GeneratorFunctionPrototype,configurable:!0}),a(GeneratorFunctionPrototype,"constructor",{value:GeneratorFunction,configurable:!0}),GeneratorFunction.displayName=define(GeneratorFunctionPrototype,h,"GeneratorFunction"),i.isGeneratorFunction=function(t){var i="function"==typeof t&&t.constructor;return !!i&&(i===GeneratorFunction||"GeneratorFunction"===(i.displayName||i.name))},i.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,GeneratorFunctionPrototype):(t.__proto__=GeneratorFunctionPrototype,define(t,h,"GeneratorFunction")),t.prototype=Object.create(b),t},i.awrap=function(t){return {__await:t}},defineIteratorMethods(AsyncIterator.prototype),define(AsyncIterator.prototype,u,(function(){return this})),i.AsyncIterator=AsyncIterator,i.async=function(t,o,r,a,l){void 0===l&&(l=Promise);var c=new AsyncIterator(wrap(t,o,r,a),l);return i.isGeneratorFunction(o)?c:c.next().then((function(t){return t.done?t.value:c.next()}))},defineIteratorMethods(b),define(b,h,"Generator"),define(b,c,(function(){return this})),define(b,"toString",(function(){return "[object Generator]"})),i.keys=function(t){var i=Object(t),o=[];for(var r in i)o.push(r);return o.reverse(),function next(){for(;o.length;){var t=o.pop();if(t in i)return next.value=t,next.done=!1,next}return next.done=!0,next}},i.values=values,Context.prototype={constructor:Context,reset:function reset(i){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(resetTryEntry),!i)for(var o in this)"t"===o.charAt(0)&&r.call(this,o)&&!isNaN(+o.slice(1))&&(this[o]=t);},stop:function stop(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function dispatchException(i){if(this.done)throw i;var o=this;function handle(r,a){return c.type="throw",c.arg=i,o.next=r,a&&(o.method="next",o.arg=t),!!a}for(var a=this.tryEntries.length-1;a>=0;--a){var l=this.tryEntries[a],c=l.completion;if("root"===l.tryLoc)return handle("end");if(l.tryLoc<=this.prev){var u=r.call(l,"catchLoc"),h=r.call(l,"finallyLoc");if(u&&h){if(this.prev<l.catchLoc)return handle(l.catchLoc,!0);if(this.prev<l.finallyLoc)return handle(l.finallyLoc)}else if(u){if(this.prev<l.catchLoc)return handle(l.catchLoc,!0)}else {if(!h)throw new Error("try statement without catch or finally");if(this.prev<l.finallyLoc)return handle(l.finallyLoc)}}}},abrupt:function abrupt(t,i){for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var l=a;break}}l&&("break"===t||"continue"===t)&&l.tryLoc<=i&&i<=l.finallyLoc&&(l=null);var c=l?l.completion:{};return c.type=t,c.arg=i,l?(this.method="next",this.next=l.finallyLoc,m):this.complete(c)},complete:function complete(t,i){if("throw"===t.type)throw t.arg;return "break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&i&&(this.next=i),m},finish:function finish(t){for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i];if(o.finallyLoc===t)return this.complete(o.completion,o.afterLoc),resetTryEntry(o),m}},catch:function _catch(t){for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i];if(o.tryLoc===t){var r=o.completion;if("throw"===r.type){var a=r.arg;resetTryEntry(o);}return a}}throw new Error("illegal catch attempt")},delegateYield:function delegateYield(i,o,r){return this.delegate={iterator:values(i),resultName:o,nextLoc:r},"next"===this.method&&(this.arg=t),m}},i}function asyncGeneratorStep(t,i,o,r,a,l,c){try{var u=t[l](c),h=u.value;}catch(t){return void o(t)}u.done?i(h):Promise.resolve(h).then(r,a);}function _asyncToGenerator(t){return function(){var i=this,o=arguments;return new Promise((function(r,a){var l=t.apply(i,o);function _next(t){asyncGeneratorStep(l,r,a,_next,_throw,"next",t);}function _throw(t){asyncGeneratorStep(l,r,a,_next,_throw,"throw",t);}_next(void 0);}))}}function _toConsumableArray(t){return function _arrayWithoutHoles(t){if(Array.isArray(t))return _arrayLikeToArray(t)}(t)||function _iterableToArray(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||_unsupportedIterableToArray(t)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ownKeys(t,i){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);i&&(r=r.filter((function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable}))),o.push.apply(o,r);}return o}function _objectSpread(t){for(var i=1;i<arguments.length;i++){var o=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(o),!0).forEach((function(i){_defineProperty$1(t,i,o[i]);})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):ownKeys(Object(o)).forEach((function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(o,i));}));}return t}function _defineProperty$1(t,i,o){return (i=_toPropertyKey$1(i))in t?Object.defineProperty(t,i,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[i]=o,t}function _slicedToArray(t,i){return function _arrayWithHoles(t){if(Array.isArray(t))return t}(t)||function _iterableToArrayLimit(t,i){var o=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=o){var r,a,l,c,u=[],h=!0,d=!1;try{if(l=(o=o.call(t)).next,0===i){if(Object(o)!==o)return;h=!1;}else for(;!(h=(r=l.call(o)).done)&&(u.push(r.value),u.length!==i);h=!0);}catch(t){d=!0,a=t;}finally{try{if(!h&&null!=o.return&&(c=o.return(),Object(c)!==c))return}finally{if(d)throw a}}return u}}(t,i)||_unsupportedIterableToArray(t,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _unsupportedIterableToArray(t,i){if(t){if("string"==typeof t)return _arrayLikeToArray(t,i);var o=Object.prototype.toString.call(t).slice(8,-1);return "Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?_arrayLikeToArray(t,i):void 0}}function _arrayLikeToArray(t,i){(null==i||i>t.length)&&(i=t.length);for(var o=0,r=new Array(i);o<i;o++)r[o]=t[o];return r}function _typeof(t){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_typeof(t)}function _classCallCheck(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,i){for(var o=0;o<i.length;o++){var r=i[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,_toPropertyKey$1(r.key),r);}}function _createClass(t,i,o){return i&&_defineProperties(t.prototype,i),o&&_defineProperties(t,o),Object.defineProperty(t,"prototype",{writable:!1}),t}function _toPropertyKey$1(t){var i=function _toPrimitive(t,i){if("object"!==_typeof(t)||null===t)return t;var o=t[Symbol.toPrimitive];if(void 0!==o){var r=o.call(t,i||"default");if("object"!==_typeof(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return ("string"===i?String:Number)(t)}(t,"string");return "symbol"===_typeof(i)?i:String(i)}var i=new(function(){function Logger(){_classCallCheck(this,Logger),this._logCallback=void 0,this._prefix="LightningUI",this._debug=!1;}return _createClass(Logger,[{key:"debug",get:function get(){return this._debug},set:function set(t){this._debug=Boolean(t);}},{key:"logCallback",get:function get(){return this._logCallback},set:function set(t){"function"==typeof t?this._logCallback=t:this.warn("logCallback value must be a function, instead received ".concat(_typeof(t)));}},{key:"log",value:function log(){for(var t=arguments.length,i=new Array(t),o=0;o<t;o++)i[o]=arguments[o];var r;(this._logCallback&&this._logCallback({level:"log",payload:i}),this.debug)&&(r=console).log.apply(r,[this._prefix].concat(i));}},{key:"info",value:function info(){for(var t=arguments.length,i=new Array(t),o=0;o<t;o++)i[o]=arguments[o];var r;(this._logCallback&&this._logCallback({level:"info",payload:i}),this.debug)&&(r=console).info.apply(r,[this._prefix].concat(i));}},{key:"warn",value:function warn(){for(var t=arguments.length,i=new Array(t),o=0;o<t;o++)i[o]=arguments[o];var r;(this._logCallback&&this._logCallback({level:"warn",payload:i}),this.debug)&&(r=console).warn.apply(r,[this._prefix].concat(i));}},{key:"error",value:function error(){for(var t=arguments.length,i=new Array(t),o=0;o<t;o++)i[o]=arguments[o];var r;(this._logCallback&&this._logCallback({level:"error",payload:i}),this.debug)&&(r=console).error.apply(r,[this._prefix].concat(i));}}]),Logger}());function getEuclideanDistance(t,i,o,r){var a=t-o,l=i-r;return Math.sqrt(Math.pow(a,2)+Math.sqrt(Math.pow(l,2)))}function isComponentOnScreen(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!t)return !1;var o=t.w,r=t.h,a=t.core,l=void 0===a?{}:a,c=l.renderContext,u=c.px,h=c.py,d=l._scissor,p=void 0===d?[]:d,_=t.stage.h/t.stage.getRenderPrecision(),g=t.stage.w/t.stage.getRenderPrecision(),m=u,v=h,S=u-t.x,k=h-t.y,b=i.offsetX-S||0,C=i.offsetY-k||0;if(t.transition("x")&&(m=u-t.x+t.transition("x").targetValue),t.transition("y")&&(v=h-t.y+t.transition("y").targetValue),v+=C,!((m+=b)>=0&&m+o<=g)||!(v>=0&&v+r<=_))return !1;if(p&&p.length){var T=_slicedToArray(p,4),I=T[0],A=void 0===I?null:I,P=T[1],L=void 0===P?null:P,B=T[2],O=void 0===B?null:B,W=T[3],j=void 0===W?null:W,D=Math.round(m+o)>=Math.round(A),M=Math.round(m)<=Math.round(A+O),R=Math.round(v+r)>=Math.round(L),N=Math.round(v+r)<=Math.round(L+j);return D&&M&&R&&N}return !0}function getWidthByUpCount(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,o=t.layout.screenW,r=t.layout.columnCount,a=t.layout.marginX,l=t.layout.gutterX;if(!(i<1||i>r))return (o-2*a-(i-1)*l)/i;console.error("Column expects a number between 1 & ".concat(r,". Received ").concat(i));}function getWidthByColumnSpan(t,i){var o=t.layout.columnCount,r=t.layout.gutterX;return getWidthByUpCount(t,o)*i+r*(i-1)}function getDimensions(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=i.w,a=i.h,l=i.ratioX,c=i.ratioY,u=i.upCount,h=o.w||0,d=o.h||0,p={};return p=r&&a?{w:r,h:a}:a&&l&&c?{w:Math.round(a*l/c),h:a}:l&&c&&u?function getItemRatioDimensions(t,i,o,r){var a,l;i&&o&&r?(a=Math.round(getWidthByUpCount(t,r)),l=Math.round(a/i*o)):(a=0,l=0);return {w:a,h:l}}(t,l,c,u):a&&u?{w:Math.round(getWidthByUpCount(t,u)),h:a}:a?{w:h,h:a}:r?{w:r,h:d}:{w:h,h:d},p=_objectSpread(_objectSpread({},p),{},{ratioX:l,ratioY:c,upCount:u})}function getHexColor(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;if(!t)return 0;"number"==typeof t&&(t=t.toString(16).slice(2)),t=t.replace("#","");var o=Math.round(255*i).toString(16),r="0x".concat(o).concat(t);return Number(r)}function getValidColor(i){if(/^0x[0-9a-fA-F]{8}/g.test(i))return Number(i);if(/^#[0-9a-fA-F]{6}/g.test(i))return getHexColor(i.substr(1,6));if("string"==typeof i&&/^[0-9]{8,10}/g.test(i))return parseInt(i);if("number"==typeof i&&/^[0-9]{8,10}/g.test(i.toString()))return i;if("string"==typeof i&&i.indexOf("rgba")>-1)return rgba2argb(i);if("string"==typeof i&&i.indexOf("rgb")>-1){var o=[].concat(_toConsumableArray(i.replace(/rgb\(|\)/g,"").split(",")),["255"]);return t.StageUtils.getArgbNumber(o)}return null}function reduceFraction(t){return function simplifyFraction(t){for(var i=_slicedToArray(t,2),o=i[0],r=i[1],a=o;a>0;a--)if(!(o%a||r%a))return [o/a,r/a]}(t.split("/").map((function(t){return +t}))).join("/")}var o=function getValFromObjPath(t,i){return "string"==typeof i&&(i=i.split(".").filter((function(t){return t.length}))),i.reduce((function(t,i){return t&&t[i]}),t)};function rgba2argb(i){var o=i.replace(/rgba\(|\)/g,"").split(",");return o[3]=255*o[3],t.StageUtils.getArgbNumber(o)}function capitalizeFirstLetter(t){return t.charAt(0).toUpperCase()+t.slice(1)}var r={getWidth:function getWidth(t){var i=_objectSpread({padding:0,paddingLeft:0,paddingRight:0,strokeWidth:0},arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}),o=i.padding,r=i.paddingLeft,a=i.paddingRight,l=i.strokeWidth;return t?t-(r||o)-(a||o)-l:0},getHeight:function getHeight(t){var i=_objectSpread({padding:0,paddingBottom:0,paddingTop:0,strokeWidth:0},arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}),o=i.padding,r=i.paddingBottom,a=i.paddingTop,l=i.strokeWidth;return t?t-(r||o)-(a||o)-l:0}};function clone(t,i){var o=Object.create(Object.getPrototypeOf(t));if(Object.defineProperties(o,Object.getOwnPropertyDescriptors(t)),!i||t===i)return o;for(var r in i){var a=i[r];t.hasOwnProperty(r)?o[r]=getMergeValue(r,t,i):o[r]=a;}return o}function getMergeValue(t,i,o){var r=i[t],a=o[t],l=_typeof(r),c=_typeof(a);return l!==c||"function"===c||Array.isArray(a)?a:a&&"object"===c?clone(r,a):a}function measureTextWidth(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=document.createElement("canvas").getContext("2d"),o=t.fontStyle,r=t.fontWeight,a=t.fontSize,l=t.fontFamily,c=void 0===l?t.fontFace||"sans-serif":l,u=[o,r,a?"".concat(a,"px"):"0","'".concat(c,"'")].filter(Boolean).join(" ");i.font=u;var h=i.measureText(t.text||"");return Math.round(h.width)}function getDimension(t,i){if(!i)return 0;var o=i.transition(t);return o.isRunning()?o.targetValue:i[t]}var a=getDimension.bind(null,"x"),l=getDimension.bind(null,"y");function flatten(t){return t.reduce((function(t,i){return t.concat(Array.isArray(i)?flatten(i):i)}),[])}function stringifyCompare(t,i){return JSON.stringify(t)===JSON.stringify(i)}function delayForAnimation(t){setTimeout(t,arguments.length>1&&void 0!==arguments[1]?arguments[1]:16);}var c=function degreesToRadians(t){return t*(Math.PI/180)},u=/({ICON.*?}|{BADGE:.*?}|{NEWLINE}|{TEXT:.*?})/g;function max(){if(arguments){var t=Array.from(arguments).filter((function(t){return !isNaN(t)&&null!=t}));if(t.length)return Math.max.apply(Math,_toConsumableArray(t))}}function watchForUpdates(t){var o,r=t.element,a=t.watchProps,l=void 0===a?[]:a,c=t.sideEffect,u=void 0===c?function(){}:c;null!=r&&r.isElement||i.error("watchForUpdates: Expected a Lightning Element passed to element parameter, received ".concat(_typeof(r)));var h=null===(o=r.__core)||void 0===o?void 0:o._onAfterUpdate;return r.onAfterUpdate=function(t){var i=!1;l.forEach((function(o){if(!t.transition(o)||!t.transition(o).isRunning()){var r="__watchPrev".concat(o),a=t[o];a!==t[r]&&(t[r]=a,i=!0);}})),i&&u(),h&&h(t);}.bind(this),r}var h={isMarkupString:function isMarkupString(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return "string"==typeof t&&u.test(t)},capitalizeFirstLetter:capitalizeFirstLetter,degreesToRadians:c,downloadFile:function downloadFile(t,i,o){["plain","json"].includes(o)||(o="plain");var r="data:text/".concat(o,";charset=utf-8,")+encodeURIComponent(JSON.stringify(t)),a=document.createElement("a");a.setAttribute("href",r),a.setAttribute("download",i),a.click();},delayForAnimation:delayForAnimation,stringifyCompare:stringifyCompare,objectPropertyOf:function objectPropertyOf(t,i){return i.reduce((function(t,i){return t&&"undefined"!==t[i]?t[i]:void 0}),t)},flatten:flatten,getDimension:getDimension,getFirstNumber:function getFirstNumber(){for(var t=arguments.length,i=new Array(t),o=0;o<t;o++)i[o]=arguments[o];return i.find(Number.isFinite)},measureTextWidth:measureTextWidth,clone:clone,getMergeValue:getMergeValue,RoundRect:r,rgba2argb:rgba2argb,getValFromObjPath:o,reduceFraction:reduceFraction,getValidColor:getValidColor,getHexColor:getHexColor,getAspectRatioH:function getAspectRatioH(t){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:":",o=_slicedToArray((arguments.length>1&&void 0!==arguments[1]?arguments[1]:"16:9").split(i),2);return t/(o[0]/o[1])},getAspectRatioW:function getAspectRatioW(t){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:":",o=_slicedToArray((arguments.length>1&&void 0!==arguments[1]?arguments[1]:"16:9").split(i),2);return t*(o[0]/o[1])},getWidthByUpCount:getWidthByUpCount,getDimensions:getDimensions,getWidthByColumnSpan:getWidthByColumnSpan,createConditionalZContext:function createConditionalZContext(t,i){t.zIndex||void 0===i||0===i||(t.forceZIndexContext=!0,t.zIndex=0);},watchForUpdates:watchForUpdates,convertTextAlignToFlexJustify:function convertTextAlignToFlexJustify(t){switch(t){case"left":return "flex-start";case"center":return "center";case"right":return "flex-end";default:return console.warn('Expected "textAlign" values are "left," "center," and "right," but instead, '.concat(t,' was received and will fall back to "left."')),"flex-start"}}},d=new(function(){function Metrics(){_classCallCheck(this,Metrics),this._keyMetricsCallback=void 0;}return _createClass(Metrics,[{key:"keyMetricsCallback",get:function get(){return this._keyMetricsCallback},set:function set(t){-1<["undefined","function"].indexOf(_typeof(t))?this._keyMetricsCallback=t:i.warn("context keyMetricsCallback expected a function. Received ".concat(_typeof(t)));}}]),Metrics}()),p=new t.EventEmitter,_={name:"Base Lightning TV",alpha:{primary:1,secondary:.7,tertiary:.1,inactive:.5,full:1,none:0,alpha1:.1,alpha2:.3,alpha3:.5,alpha4:.7,alpha5:.9},animation:{duration:{none:0,xfast:.1,fast:.25,normal:.5,slow:.75,xslow:.9},delay:{none:0,xfast:.01,fast:.025,normal:.05,slow:.075,xslow:.09},expressive:{timingFunction:"cubic-bezier(0, 0, 1, 1)",delay:0,duration:.25},expressiveEntrance:{timingFunction:"cubic-bezier(0, 0, 1, 1)",delay:0,duration:.25},expressiveExit:{timingFunction:"cubic-bezier(0, 0, 1, 1)",delay:0,duration:.25},standard:{timingFunction:"cubic-bezier(0, 0, 1, 1)",delay:0,duration:.25},standardEntrance:{timingFunction:"cubic-bezier(0, 0, 1, 1)",delay:0,duration:.25},standardExit:{timingFunction:"cubic-bezier(0, 0, 1, 1)",delay:0,duration:.25},utility:{timingFunction:"cubic-bezier(0, 0, 1, 1)",delay:0,duration:.25},utilityEntrance:{timingFunction:"cubic-bezier(0, 0, 1, 1)",delay:0,duration:.25},utilityExit:{timingFunction:"cubic-bezier(0, 0, 1, 1)",delay:0,duration:.25}},asset:{arrowLeft:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAGKADAAQAAAABAAAAGAAAAADiNXWtAAAAi0lEQVRIDWNgGAWjIfD//38JID5Fk5AAGqwKxPeA+D/VLQCaaQLEr0CGgwBVLQCa5wbEn0EGwwDVLAAaGA3Ev2AGw2iqWAA0rBiI/8EMRaYptgBoWDeygehsci1gIlcjWfqArqZdEMFcBLSEdpGMZAntkimSJbTLaEiW0K6oQLKEdoUdzJJRemiHAAD4n+yzPWCs7QAAAABJRU5ErkJggg==",arrowRight:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAGKADAAQAAAABAAAAGAAAAADiNXWtAAAAg0lEQVRIDWNgGAWjIYArBP7//38KiCVwyVMsDjQcBO4BsSrFhmEzAGw8hHgFpEywqaFIDMkCEPMzELtRZCC6ZjQLQNxfQByNro5sPhYLQEL/gLiYbEORNeKwACbcDVPLBGMMOhrmVDSapkFE00imaTKlaUajaVFB28Ju0CXrUQfhDAEAEgHss6NhpLQAAAAASUVORK5CYII=",backspaceOutline:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJAAAACQCAYAAADnRuK4AAAAAXNSR0IArs4c6QAACmpJREFUeF7tnVmoZUcVhv/feY4gBEVEH/KgCCZxCK2itNo4xQQH+kUN0TjEiDGKKBqnaExwBjUaR6KY+NQgiQkOMSYhYEScIopGJOqDE2hHjfP0y4p1Oqdv33v2qr32Prv2Paug6Ye7Vu2qv75TtWvtGohMqUBAAQZ80zUVQAKUEIQUSIBC8qVzApQMhBRIgELypXMClAyEFEiAQvKlcwKUDIQUSIBC8qVzApQMhBRIgELypXMClAyEFEiAQvKlcwKUDIQUSIBC8qVzApQMhBRIgELypXMClAyEFEiAQvKlcwKUDIQUSIBC8qVzApQMhBRIgELypXMClAyEFEiAQvKlcwKUDIQUSIBC8qVzApQMhBRIgELypfPsAJJ0NYC92XRHKPB3AAfLv18BuBLAFSR/NKZWswJI0vkA3jCmILsw75sAvIfkR8eo22wAknQSgMvGEGFD8vwxgFeQvGrI+s4CIEnHAPgugHsMWfkNzevDAM4i+Z8h6t88QJLuXOB5yBAVzjxuVeBaAM8ieXNUjzkAdAmA50Yrmv5HKPATACeQ/GNEm6YBkvRyANblZhpHAXsfekpkOGsWIEmPAHA9gDuOo13mWhS4gOSZfdVoEiBJ9wFwA4D7961Y+lUpsK/v7KxVgL4K4ElOCS4l+Uyn7a41k3Q0gMcC2ANgH4CHV1T2OyStx69OzQEk6TwAZztr8lMAx5P8s9N+Y8wk2cTjfQDu66z080h+zml7yKwpgCSdCOByZyX+BuBRJH/otN84M0kWN/s0gOc4Kv8Nko922B1m0gxAkh4I4AcVwcL9JA/UVnjT7CXdHYD9yEzfVUkAjib5uxqNmgCoBAu/CeBhzsJ/kORZTtuNN5Nk70bXAZ0Hy59G8qIawVoB6LMAnu8suE3tH0/y3077NAMg6esAuoaoC0la7M2dJgdI0ssAXOgs8W8BHEvS/s9UoYCkdwN4bYfL5STto7U7TQpQZbDQehzreawHylSpgKSTAVza4XYDyeNqsp4MoB7BwteQfH9N5dL2NgWK3l0vyAdJWhDXnSYBSNLtANh3GO/KwgMk97trlYbbKiDJPpzea5U8JKuYqDIeql0kvQPAG5352ZLMR5L8q9M+zXZQYFcAJOnJAL7sbGWLMFuk2SLOmYIKzB6gEiz8HoB7O7U4meQXnLZp1qGApD8BuOcsh7AewcL3kuyadg4OjSSbhRxH0j4BjJok2Ufga0j+YdQHlcznDlBNsPAa+xpP8r/rEHbxjAKPbRuyHvKFY0Ik6QUALOprPfIT1gHRbAGSdDoA77aSX5Zg4e8nhGfx6FEgWoJn8Zy1QCTplq5vjc3NwnoEC/eQ/HYD8IwC0TbwrA2i2QHUI1h4JskLGoJnUIhWwLMWiGYFkCSLMX2t5WDhlneeLm5Dw5kDntEhkmRhEVvesWNqZgiTdC6AN3W1Svn72oOFkuxF+WcVIQUrai+IKuA5BBHJ453auc1mA1AJFn7Jsf7EKj9ZsLBHw1ZDtI5neAmaBUBzCxaO2cBj5u2FZtlO0l8A3K3ZIaxHsPB8kt5vYn00c/mM0dBj5OmqzAqjOQDUfLBwJ32HbPAh84pCM5seSNJLAHzcWeFJgoVdZRui4YfIo6ucff8uyVY03LW5IawyWPgvW5u77mChV/QIABFfb/kidk0CVKbDth3Huw35dJLeniqiV2/fniDYx1f7vlWTeoUFah6wZQhrqwcqwUKbrtsaH0+6mOQpHsOpbXpCVFPstcJjBZNkmzHv0swQJultAN7iVO375TyafzjtJzcbEaK1w9McQJXBQlvvYmtsfjE5FZUFGAGiSeBpCqDKYKFtmX0qya9Utl0z5gNCNBk8BSA7CtiODNwxjf4trEew8BySNtTNOg0A0aTwtARQTbDQeh3rfawXmn0KQDQ5PC0B9EkAL3LSkAD9X6hWALIJzJ3mNoSdS9I7U3NyuX6zQO+zKOzkEEmaHqDSFdpZM97tOfkSfRvvk0LUDEAFIgseetf85DS+AYgk/bPr1NvRZ2HLg4ektwI4xzmgZCBxYohaBMjWPeenDOcvaIvZ2oez5gAqQ5mtLbb3oa4z+Bb6nTHW1UP92vFIr54vzJ8BcGplGdYKkSRbCXGHSWdh2z1ckp1taGccroxyFt9cznG4iGuDqFmASk9kZxxakNGTckHZBBA1DVCB6BMAXuwhyA4VmGL/+05l6zlsbdt7DJmXU0uXmSQ7JvD2zQ1hiwJJsotRvlVxXO87SU5+heUYDT5Gni5KVhg1D1DphWqCjOYy6RlAYzb0mHn3gWkWABWIaoKMubHwSBpGebGWZNdc2vmUO6a1BhJXFUSSff/yLuOYamvzzwEcVfFr7tWwPXqi6uN2PXWYG0C1Qca1n8RaDlewl3kPRL3gWXo/XBwo1dXWdk/a3jEOnJoVQGUoqw0yvpLkh7oUHvLvTohC8FRANBo8pT3sxLeVJ/M2M4QtiVYTZJzkNPoOiAaBxwHRqPDMFqBS8Jog4yT3YewA0aDwrIBodHhmDVApvG0mtO3PnjTJjTxbIBoFnm0gWgs8pQ06lxY3N4QtCWZBRgPDezdnHvPr+alV2EiaL0DlF2Dbn20bdB40XtHwQ5nOHqAC0SyCjEM1Wkv57AqACkRvBvB2p7hrDzI6yzU7s90EUPNBxtnR4SjwrgGo9EK1Qca8cM4ByU4mkuz++F93ZHELyZX3iW31n+S+sKWZWfNBxkCbNeUq6ekArugo1I0kH1xT8EkBKj1R80HGGkFbtZVkZ3bb2d2r0tUkn1hTh8kBKhB9DMBLnQWfJMjoLFuTZpJsO/ONAB7UUcBLSHqvX781q1YAqg0yfoDkq5psrQYLJeldAF7nKFr1x+wmACq9kAUZLazvvTV4P8kDDlE22kTSQ4uuK9dCF5HuR/I3NYI1A1CBaB+AK50VsAMj7TJeixNl2kYBSccCsB/ZMQ6Brif5GIfdYSZNAVQg8rzsLSphl/Hapby2LDZTUaBcq/56ALb1fOVxLkuinULy4loRmwOoQGQX7T7DWZnPk3y203bXmkl6AIA91isDOBGADV3e1HsJbasA1QYZvUKl3fYKPI2knXFQnZoEqPRCNUHG6oqnwyEFLiJ5Wl89mgWoQFQTZOyrwSb7WUztcSRtu0+v1DRABaKPADijV+3SaZUCNgE5geTNEZnmAFBtkDGix6b4Xld2BNvJcaHUPEClF6oNMoZE2eXOtm3q1ZFha1mfWQBUINoL4Kqurbm7vPEj1bOAqx3udW0kk62+swGoQHQ2gPOGFGAD8roJgF0t+qkx6jorgApElwE4aQwxZp6n3YNxsPyzA7yst/4iSdvEMFqaHUCjKZEZ91IgAeolWzotFEiAkoWQAglQSL50ToCSgZACCVBIvnROgJKBkAIJUEi+dE6AkoGQAglQSL50ToCSgZACCVBIvnROgJKBkAIJUEi+dE6AkoGQAglQSL50ToCSgZACCVBIvnROgJKBkAIJUEi+dE6AkoGQAglQSL50ToCSgZACCVBIvnROgJKBkAIJUEi+dE6AkoGQAglQSL50ToCSgZACCVBIvnT+H0jPT81J3xWWAAAAAElFTkSuQmCC",check:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAOCAYAAAAi2ky3AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACtSURBVHgBvdPdDcIgEAfwoy8Nb45QN3AGF2s36Ahu4gpuIDoBfSgfpdoTlCbEWEMh6T8hFzjyg5AAkBHOcQe5UWqspRx435sDpMYj6IYQwwVSEiJ2MKVUBWuzLSLl2HL+uxmNCGFO8yaL7RHxve6qRZoAuS4hxac8735elWVx7jrtMKL1o0Gcat9jhExHSukN/kUIFZ7MpDRtzE1isDRkAUtDvrA8ZI597FUf8gWH9P0b4gko9wAAAABJRU5ErkJggg=="},color:{white:["#ffffff",1],black:["#000000",1],grey:["#929096",1],red:["#e74c3c",1],orange:["#dc7633",1],yellow:["#f7dc6f",1],green:["#2Ecc71",1],blue:["#93a9fd",1],purple:["#663399",1],palette:{"grey-05":["#f8f7fa",1],"grey-40":["#929096",1],"grey-70":["#48474b",1],"grey-90":["#181819",1],"blue-20":["#becffe",1],"blue-40":["#93a9fd",1],"blue-90":["#000033",1]},material:["#181819",1],materialBrand:["#000033",1],overlay:["#181819",.7],textNeutral:["#f8f7fa",1],textNeutralSecondary:["#f8f7fa",.7],textNeutralTertiary:["#f8f7fa",.1],textNeutralDisabled:["#f8f7fa",.5],textInverse:["#181819",1],textInverseSecondary:["#181819",.7],textInverseTertiary:["#181819",.1],textInverseDisabled:["#181819",.5],textBrand:["#93a9fd",1],textBrandSecondary:["#93a9fd",.7],textBrandTertiary:["#93a9fd",.1],textBrandDisabled:["#93a9fd",.5],textPositive:["#2Ecc71",1],textNegative:["#e74c3c",1],textInfo:["#93a9fd",1],textCaution:["#dc7633",1],fillTransparent:["#ffffff",0],fillNeutral:["#f8f7fa",1],fillNeutralSecondary:["#f8f7fa",.7],fillNeutralTertiary:["#f8f7fa",.1],fillNeutralDisabled:["#f8f7fa",.5],fillInverse:["#181819",1],fillInverseSecondary:["#181819",.7],fillInverseTertiary:["#181819",.1],fillInverseDisabled:["#181819",.5],fillBrand:["#93a9fd",1],fillBrandSecondary:["#93a9fd",.7],fillBrandTertiary:["#93a9fd",.1],fillBrandDisabled:["#93a9fd",.5],fillPositive:["#2Ecc71",1],fillNegative:["#e74c3c",1],fillInfo:["#93a9fd",1],fillCaution:["#dc7633",1],strokeNeutral:["#f8f7fa",1],strokeNeutralSecondary:["#f8f7fa",.7],strokeNeutralTertiary:["#f8f7fa",.1],strokeNeutralDisabled:["#f8f7fa",.5],strokeInverse:["#181819",1],strokeInverseSecondary:["#181819",.7],strokeInverseTertiary:["#181819",.1],strokeInverseDisabled:["#181819",.5],strokeBrand:["#93a9fd",1],strokeBrandSecondary:["#93a9fd",.7],strokeBrandTertiary:["#93a9fd",.1],strokeBrandDisabled:["#93a9fd",.5],strokePositive:["#2Ecc71",1],strokeNegative:["#e74c3c",1],strokeInfo:["#93a9fd",1],strokeCaution:["#dc7633",1],interactiveNeutral:["#ffffff",.1],interactiveNeutralFocus:["#ffffff",1],interactiveNeutralFocusSoft:["#ffffff",.1],interactiveInverse:["#48474b",void 0],interactiveInverseFocus:["#48474b",1],interactiveInverseFocusSoft:["#48474b",.1],interactiveBrand:["#becffe",.1],interactiveBrandFocus:["#becffe",1],interactiveBrandFocusSoft:["#becffe",.1],shadowNeutral:["#000000",.7],shadowNeutralFocus:["#000000",.7],shadowNeutralFocusSoft:["#000000",.7],shadowNeutralText:["#000000",1],shadowInverse:["#000000",.7],shadowInverseFocus:["#000000",.7],shadowInverseFocusSoft:["#000000",.7],shadowInverseText:["#000000",1],shadowBrand:["#000000",.7],shadowBrandFocus:["#000000",.7],shadowBrandFocusSoft:["#000000",.7],shadowBrandText:["#000000",1]},componentConfig:{Keyboard:{style:{keyProps:{delete:{title:null,icon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJAAAACQCAYAAADnRuK4AAAAAXNSR0IArs4c6QAACmpJREFUeF7tnVmoZUcVhv/feY4gBEVEH/KgCCZxCK2itNo4xQQH+kUN0TjEiDGKKBqnaExwBjUaR6KY+NQgiQkOMSYhYEScIopGJOqDE2hHjfP0y4p1Oqdv33v2qr32Prv2Paug6Ye7Vu2qv75TtWvtGohMqUBAAQZ80zUVQAKUEIQUSIBC8qVzApQMhBRIgELypXMClAyEFEiAQvKlcwKUDIQUSIBC8qVzApQMhBRIgELypXMClAyEFEiAQvKlcwKUDIQUSIBC8qVzApQMhBRIgELypXMClAyEFEiAQvKlcwKUDIQUSIBC8qVzApQMhBRIgELypXMClAyEFEiAQvKlcwKUDIQUSIBC8qVzApQMhBRIgELypfPsAJJ0NYC92XRHKPB3AAfLv18BuBLAFSR/NKZWswJI0vkA3jCmILsw75sAvIfkR8eo22wAknQSgMvGEGFD8vwxgFeQvGrI+s4CIEnHAPgugHsMWfkNzevDAM4i+Z8h6t88QJLuXOB5yBAVzjxuVeBaAM8ieXNUjzkAdAmA50Yrmv5HKPATACeQ/GNEm6YBkvRyANblZhpHAXsfekpkOGsWIEmPAHA9gDuOo13mWhS4gOSZfdVoEiBJ9wFwA4D7961Y+lUpsK/v7KxVgL4K4ElOCS4l+Uyn7a41k3Q0gMcC2ANgH4CHV1T2OyStx69OzQEk6TwAZztr8lMAx5P8s9N+Y8wk2cTjfQDu66z080h+zml7yKwpgCSdCOByZyX+BuBRJH/otN84M0kWN/s0gOc4Kv8Nko922B1m0gxAkh4I4AcVwcL9JA/UVnjT7CXdHYD9yEzfVUkAjib5uxqNmgCoBAu/CeBhzsJ/kORZTtuNN5Nk70bXAZ0Hy59G8qIawVoB6LMAnu8suE3tH0/y3077NAMg6esAuoaoC0la7M2dJgdI0ssAXOgs8W8BHEvS/s9UoYCkdwN4bYfL5STto7U7TQpQZbDQehzreawHylSpgKSTAVza4XYDyeNqsp4MoB7BwteQfH9N5dL2NgWK3l0vyAdJWhDXnSYBSNLtANh3GO/KwgMk97trlYbbKiDJPpzea5U8JKuYqDIeql0kvQPAG5352ZLMR5L8q9M+zXZQYFcAJOnJAL7sbGWLMFuk2SLOmYIKzB6gEiz8HoB7O7U4meQXnLZp1qGApD8BuOcsh7AewcL3kuyadg4OjSSbhRxH0j4BjJok2Ufga0j+YdQHlcznDlBNsPAa+xpP8r/rEHbxjAKPbRuyHvKFY0Ik6QUALOprPfIT1gHRbAGSdDoA77aSX5Zg4e8nhGfx6FEgWoJn8Zy1QCTplq5vjc3NwnoEC/eQ/HYD8IwC0TbwrA2i2QHUI1h4JskLGoJnUIhWwLMWiGYFkCSLMX2t5WDhlneeLm5Dw5kDntEhkmRhEVvesWNqZgiTdC6AN3W1Svn72oOFkuxF+WcVIQUrai+IKuA5BBHJ453auc1mA1AJFn7Jsf7EKj9ZsLBHw1ZDtI5neAmaBUBzCxaO2cBj5u2FZtlO0l8A3K3ZIaxHsPB8kt5vYn00c/mM0dBj5OmqzAqjOQDUfLBwJ32HbPAh84pCM5seSNJLAHzcWeFJgoVdZRui4YfIo6ucff8uyVY03LW5IawyWPgvW5u77mChV/QIABFfb/kidk0CVKbDth3Huw35dJLeniqiV2/fniDYx1f7vlWTeoUFah6wZQhrqwcqwUKbrtsaH0+6mOQpHsOpbXpCVFPstcJjBZNkmzHv0swQJultAN7iVO375TyafzjtJzcbEaK1w9McQJXBQlvvYmtsfjE5FZUFGAGiSeBpCqDKYKFtmX0qya9Utl0z5gNCNBk8BSA7CtiODNwxjf4trEew8BySNtTNOg0A0aTwtARQTbDQeh3rfawXmn0KQDQ5PC0B9EkAL3LSkAD9X6hWALIJzJ3mNoSdS9I7U3NyuX6zQO+zKOzkEEmaHqDSFdpZM97tOfkSfRvvk0LUDEAFIgseetf85DS+AYgk/bPr1NvRZ2HLg4ektwI4xzmgZCBxYohaBMjWPeenDOcvaIvZ2oez5gAqQ5mtLbb3oa4z+Bb6nTHW1UP92vFIr54vzJ8BcGplGdYKkSRbCXGHSWdh2z1ckp1taGccroxyFt9cznG4iGuDqFmASk9kZxxakNGTckHZBBA1DVCB6BMAXuwhyA4VmGL/+05l6zlsbdt7DJmXU0uXmSQ7JvD2zQ1hiwJJsotRvlVxXO87SU5+heUYDT5Gni5KVhg1D1DphWqCjOYy6RlAYzb0mHn3gWkWABWIaoKMubHwSBpGebGWZNdc2vmUO6a1BhJXFUSSff/yLuOYamvzzwEcVfFr7tWwPXqi6uN2PXWYG0C1Qca1n8RaDlewl3kPRL3gWXo/XBwo1dXWdk/a3jEOnJoVQGUoqw0yvpLkh7oUHvLvTohC8FRANBo8pT3sxLeVJ/M2M4QtiVYTZJzkNPoOiAaBxwHRqPDMFqBS8Jog4yT3YewA0aDwrIBodHhmDVApvG0mtO3PnjTJjTxbIBoFnm0gWgs8pQ06lxY3N4QtCWZBRgPDezdnHvPr+alV2EiaL0DlF2Dbn20bdB40XtHwQ5nOHqAC0SyCjEM1Wkv57AqACkRvBvB2p7hrDzI6yzU7s90EUPNBxtnR4SjwrgGo9EK1Qca8cM4ByU4mkuz++F93ZHELyZX3iW31n+S+sKWZWfNBxkCbNeUq6ekArugo1I0kH1xT8EkBKj1R80HGGkFbtZVkZ3bb2d2r0tUkn1hTh8kBKhB9DMBLnQWfJMjoLFuTZpJsO/ONAB7UUcBLSHqvX781q1YAqg0yfoDkq5psrQYLJeldAF7nKFr1x+wmACq9kAUZLazvvTV4P8kDDlE22kTSQ4uuK9dCF5HuR/I3NYI1A1CBaB+AK50VsAMj7TJeixNl2kYBSccCsB/ZMQ6Brif5GIfdYSZNAVQg8rzsLSphl/Hapby2LDZTUaBcq/56ALb1fOVxLkuinULy4loRmwOoQGQX7T7DWZnPk3y203bXmkl6AIA91isDOBGADV3e1HsJbasA1QYZvUKl3fYKPI2knXFQnZoEqPRCNUHG6oqnwyEFLiJ5Wl89mgWoQFQTZOyrwSb7WUztcSRtu0+v1DRABaKPADijV+3SaZUCNgE5geTNEZnmAFBtkDGix6b4Xld2BNvJcaHUPEClF6oNMoZE2eXOtm3q1ZFha1mfWQBUINoL4Kqurbm7vPEj1bOAqx3udW0kk62+swGoQHQ2gPOGFGAD8roJgF0t+qkx6jorgApElwE4aQwxZp6n3YNxsPyzA7yst/4iSdvEMFqaHUCjKZEZ91IgAeolWzotFEiAkoWQAglQSL50ToCSgZACCVBIvnROgJKBkAIJUEi+dE6AkoGQAglQSL50ToCSgZACCVBIvnROgJKBkAIJUEi+dE6AkoGQAglQSL50ToCSgZACCVBIvnROgJKBkAIJUEi+dE6AkoGQAglQSL50ToCSgZACCVBIvnROgJKBkAIJUEi+dE6AkoGQAglQSL50ToCSgZACCVBIvnT+H0jPT81J3xWWAAAAAElFTkSuQmCC"}}}}},font:[],layout:{columnCount:10,focusScale:1.2,gutterX:20,gutterY:20,marginX:150,marginY:150,safe:50,screenW:1920,screenH:1080},radius:{none:0,xs:2,sm:4,md:8,lg:16,xl:24},spacer:{none:0,xxs:2,xs:4,sm:8,md:10,lg:20,xl:30,xxl:40,xxxl:50},stroke:{none:0,sm:2,md:4,lg:6,xl:8},typography:{display1:{fontFamily:"Arial",fontSize:75,lineHeight:85,fontStyle:"500",verticalAlign:"middle",textBaseline:"bottom"},display2:{fontFamily:"Arial",fontSize:50,lineHeight:60,fontStyle:"500",verticalAlign:"middle",textBaseline:"bottom"},headline1:{fontFamily:"Arial",fontSize:35,fontStyle:"500",lineHeight:48,verticalAlign:"middle",textBaseline:"bottom"},headline2:{fontFamily:"Arial",fontSize:30,fontStyle:"500",lineHeight:40,verticalAlign:"middle",textBaseline:"bottom"},headline3:{fontFamily:"Arial",fontSize:25,fontStyle:"500",lineHeight:36,verticalAlign:"middle",textBaseline:"bottom"},body1:{fontFamily:"Arial",fontSize:25,fontStyle:"300",lineHeight:40,verticalAlign:"middle",textBaseline:"bottom"},body2:{fontFamily:"Arial",fontSize:22,fontStyle:"300",lineHeight:32,verticalAlign:"middle",textBaseline:"bottom"},body3:{fontFamily:"Arial",fontSize:20,fontStyle:"300",lineHeight:32,verticalAlign:"middle",textBaseline:"bottom"},button1:{fontFamily:"Arial",fontSize:25,fontStyle:"500",lineHeight:32,verticalAlign:"middle",textBaseline:"bottom"},button2:{fontFamily:"Arial",fontSize:20,fontStyle:"500",lineHeight:32,verticalAlign:"middle",textBaseline:"bottom"},callout1:{fontFamily:"Arial",fontSize:20,fontStyle:"500",lineHeight:32,verticalAlign:"middle",textBaseline:"bottom"},caption1:{fontFamily:"Arial",fontSize:15,fontStyle:"500",lineHeight:24,verticalAlign:"middle",textBaseline:"bottom"},tag1:{fontFamily:"Arial",fontSize:20,fontStyle:"500",lineHeight:24,verticalAlign:"middle",textBaseline:"bottom"},footnote1:{fontFamily:"Arial",fontSize:22,fontStyle:"300",lineHeight:30,verticalAlign:"middle",textBaseline:"bottom"}}},g=[],m=function fontLoader(t){for(var o=[],r=function _loop(){var r=t[a],l=r.family,c=r.src,u=r.descriptors,h=c&&Array.isArray(c)&&c.length?c.map((function(t){return "local"===t.substr(0,5)?t:"url(".concat(t,")")})).join(","):"url("+c+")",d=new FontFace(l,h,u||{});i.info("Loading font",l),document.fonts.add(d),o.push(new Promise((function(t){d.load().then((function(){g.push(d),t(l);})).catch((function(i){t(new Error("".concat(l,": ").concat(i.message)));}));})));},a=0;a<t.length;a++)r();return Promise.all(o).then((function(t){var o=t.filter((function(t){return !(t instanceof Error)})).join(", ");o&&i.log("Fonts loaded: ".concat(o));var r=t.filter((function(t){return t instanceof Error})).map((function(t){return t.message})).join(", ");r&&i.error("Unable to load fonts: ".concat(r));}))},v=function(){var t=_asyncToGenerator(_regeneratorRuntime().mark((function _callee(t){return _regeneratorRuntime().wrap((function _callee$(o){for(;;)switch(o.prev=o.next){case 0:if(!document.fonts||!("delete"in document.fonts)){o.next=6;break}if(g.length){o.next=3;break}return o.abrupt("return");case 3:g=g.filter((function(o){return t.find((function(t){return t.family===o.family}))?o:(i.info("Removing font",o.family),document.fonts.delete(o),!1)})),o.next=7;break;case 6:i.info("Unable to remove manually-added fonts");case 7:case"end":return o.stop()}}),_callee)})));return function cleanupFonts(i){return t.apply(this,arguments)}}(),S={fontFamily:"fontFace"},k=function all(t){for(var i={},o=0;o<t.length;o++)i=clone(i,t[o]);return i},b=[],C=function isSubTheme(t){return "subTheme"===t.slice(0,8)};var T=new(function(){function ThemeManager(){_classCallCheck(this,ThemeManager),this._cache=new Map,"undefined"!=typeof window&&(window.LUI||(window.LUI={}),window.LUI.themeManagerInstances?window.LUI.themeManagerInstances.push({themeManager:this,events:p}):window.LUI.themeManagerInstances=[{themeManager:this,events:p}]);}var t,r,a,l,c;return _createClass(ThemeManager,[{key:"_setCache",value:function _setCache(t,i){"undefined"!=typeof window&&window.LUI.themeManagerInstances.forEach((function(o){var r=o.themeManager;r&&r._cache.set(t,i);}));}},{key:"_deleteCache",value:function _deleteCache(t){"undefined"!=typeof window&&window.LUI.themeManagerInstances.forEach((function(i){var o=i.themeManager;o&&o._cache.delete(t);}));}},{key:"_emit",value:function _emit(t,i){"undefined"!=typeof window&&window.LUI.themeManagerInstances.forEach((function(o){o.events.emit(t,i);}));}},{key:"getTheme",value:function getTheme(){if(this._cache.has("theme"))return this._cache.get("theme");var t=this._processTheme.call(this);return this._setCache("theme",t),t}},{key:"setTheme",value:(c=_asyncToGenerator(_regeneratorRuntime().mark((function _callee2(t){var o,r;return _regeneratorRuntime().wrap((function _callee2$(a){for(;;)switch(a.prev=a.next){case 0:if("object"===_typeof(o=Array.isArray(t)?k(t):t)&&null!==o){a.next=4;break}return i.warn("context theme expected an object. Received ".concat(_typeof(o))),a.abrupt("return");case 4:return this._clearCache(),r=this._processTheme.call(this,[o],o.extensions),this._setCache("theme",r),a.next=9,v(r.font);case 9:if(!r.font||!r.font.length){a.next=12;break}return a.next=12,this._loadFonts(r.font);case 12:return this._refreshSubThemes(),this._emit("themeExtensionsUpdate"),this._emit("themeUpdate"),a.abrupt("return",r);case 16:case"end":return a.stop()}}),_callee2,this)}))),function setTheme(t){return c.apply(this,arguments)})},{key:"getSubTheme",value:function getSubTheme(t){if(this._cache.has("subTheme".concat(t)))return this._cache.get("subTheme".concat(t)).result}},{key:"setSubTheme",value:(l=_asyncToGenerator(_regeneratorRuntime().mark((function _callee3(t,o){var r,a,l,c=arguments;return _regeneratorRuntime().wrap((function _callee3$(u){for(;;)switch(u.prev=u.next){case 0:if(r=!(c.length>2&&void 0!==c[2])||c[2],t){u.next=4;break}return i.warn("Sub theme name not specified"),u.abrupt("return");case 4:if("string"==typeof t){u.next=7;break}return i.warn("Sub theme name must be a string. Received an ".concat(_typeof(t))),u.abrupt("return");case 7:if("object"===_typeof(o)&&Object.keys(o).length){u.next=10;break}return i.warn("Could not set subTheme ".concat(t,", value should be an object with properties. Received an ").concat(_typeof(o))),u.abrupt("return");case 10:if(a=this.getTheme(),!(l=this._processTheme.call(this,[a,o])).font||!l.font.length){u.next=15;break}return u.next=15,this._loadFonts(l.font);case 15:return this._setCache("subTheme".concat(t),{original:o,result:l}),r&&this._emit("themeUpdate".concat(t)),u.abrupt("return",l);case 18:case"end":return u.stop()}}),_callee3,this)}))),function setSubTheme(t,i){return l.apply(this,arguments)})},{key:"_refreshSubThemes",value:function _refreshSubThemes(){var t=this;_toConsumableArray(this._cache.keys()).forEach((function(i){if("string"==typeof i&&C(i)){var o=t._cache.get(i);o.original&&t.updateSubTheme(i.replace(/^subTheme/,""),o.original);}}));}},{key:"_loadFonts",value:(a=_asyncToGenerator(_regeneratorRuntime().mark((function _callee4(t){return _regeneratorRuntime().wrap((function _callee4$(o){for(;;)switch(o.prev=o.next){case 0:return o.prev=0,o.next=3,m(t);case 3:o.next=8;break;case 5:o.prev=5,o.t0=o.catch(0),i.error("Unable to load font: ".concat(o.t0));case 8:case"end":return o.stop()}}),_callee4,null,[[0,5]])}))),function _loadFonts(t){return a.apply(this,arguments)})},{key:"updateTheme",value:(r=_asyncToGenerator(_regeneratorRuntime().mark((function _callee5(t){var i,o,r;return _regeneratorRuntime().wrap((function _callee5$(a){for(;;)switch(a.prev=a.next){case 0:if(i=Array.isArray(t)?k(t):t,o={},this._cache.has("theme")&&(o=this._cache.get("theme")),this._clearCache(),r=this._processTheme.call(this,[o,i],i.extensions||o.extensions),this._setCache("theme",r),!r.font||!r.font.length){a.next=9;break}return a.next=9,this._loadFonts(r.font);case 9:return this._refreshSubThemes(),i.extensions&&this._emit("themeExtensionsUpdate"),this._emit("themeUpdate"),a.abrupt("return",r);case 13:case"end":return a.stop()}}),_callee5,this)}))),function updateTheme(t){return r.apply(this,arguments)})},{key:"_clearCache",value:function _clearCache(){var t=this;b.filter((function(t){return window.URL&&"function"==typeof window.URL.revokeObjectURL&&URL.revokeObjectURL(t),!1})),this._cache.forEach((function(i,o){"string"==typeof o&&C(o)||t._deleteCache(o);})),this._cache.forEach((function(i,o){"string"==typeof o&&C(o)&&t.setSubTheme(o.replace("subTheme",""),i.original,!1);}));}},{key:"updateSubTheme",value:(t=_asyncToGenerator(_regeneratorRuntime().mark((function _callee6(t,o){var r,a,l,c,u=arguments;return _regeneratorRuntime().wrap((function _callee6$(h){for(;;)switch(h.prev=h.next){case 0:if(r=!(u.length>2&&void 0!==u[2])||u[2],t){h.next=4;break}return i.warn("Sub theme name not specified"),h.abrupt("return");case 4:if("object"===_typeof(o)&&Object.keys(o).length){h.next=7;break}return i.warn("Could not update subTheme ".concat(t," due to invalid value")),h.abrupt("return");case 7:if(a=this.getTheme(),l={},this._cache.has("subTheme".concat(t))&&(l=this._cache.get("subTheme".concat(t)).original),!(c=this._processTheme.call(this,[a,l,o])).font||!c.font.length){h.next=14;break}return h.next=14,this._loadFonts(c.font);case 14:return this._setCache("subTheme".concat(t),{original:clone(l,o),result:c}),r&&this._emit("themeUpdate".concat(t)),h.abrupt("return",c);case 17:case"end":return h.stop()}}),_callee6,this)}))),function updateSubTheme(i,o){return t.apply(this,arguments)})},{key:"removeSubTheme",value:function removeSubTheme(t){this._cache.has("subTheme".concat(t))&&this._deleteCache("subTheme".concat(t)),this._emit("themeUpdate".concat(t));}},{key:"_getComponentUUID",value:function _getComponentUUID(t){return "componentStyle".concat(t)}},{key:"_processTheme",value:function _processTheme(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],r=arguments.length>1?arguments[1]:void 0;if(!Array.isArray(t))throw new Error("context processTheme expected an array. Received ".concat(_typeof(t)));var a=k([_].concat(_toConsumableArray(t))),l={},c=JSON.stringify(a,(function(t,r){var c=r;if(c&&"object"===_typeof(c)){var u=r;for(var h in c)Object.hasOwnProperty.call(c,h)&&S[h]&&(u[h&&S[h]]=c[h],delete u[h]);c=u;}var d=function checkBase64EncodedImage(t){var i=/^data:image\/(jpeg|jpg|png|gif);base64,/,o=i.test(t);return {isImage:o,mimeType:o?function getMimeTypeFromDataUri(t){var i=t.match(/^data:(.*?);base64,/);return i&&2===i.length?i[1]:null}(t.match(i)[0]):null}}(c),p=d.isImage,_=d.mimeType;if(window.URL&&"function"==typeof window.URL.createObjectURL&&p)try{var g=function base64ToBlobURL(t,o){var r=atob(t.substring(t.indexOf(",")+1)),a=[];try{for(var l=0;l<r.length;l+=512){for(var c=r.slice(l,l+512),u=new Array(c.length),h=0;h<c.length;h++)u[h]=c.charCodeAt(h);var d=new Uint8Array(u);a.push(d);}var p=new Blob(a,{type:o});return URL.createObjectURL(p)}catch(t){return i.info("Unable to convert base64 image to URL"),null}}(c,_);return b.push(g),g}catch(t){return c}if(Array.isArray(c)&&2===c.length&&!c[0].targetComponent&&c[0].length&&"#"===c[0].substr(0,1))return getHexColor(c[0],c[1]);if("extensions"!==t&&"function"!=typeof c&&("object"!==_typeof(c)||null===c||"Object"===c.constructor.name||Array.isArray(c))){if("string"==typeof c&&c.includes("theme.")){var m=o({theme:a},c);return m||c}var v=getValidColor(c);return v||c}l[t]=c;}));return _objectSpread(_objectSpread(_objectSpread({},JSON.parse(c)),l),{},{extensions:r})}}]),ThemeManager}()),I=new(function(){function Context(){_classCallCheck(this,Context);}return _createClass(Context,[{key:"theme",get:function get(){return T.getTheme()},set:function set(t){i.warn("Context.theme must be set using context.setTheme or context.updateTheme");}},{key:"keyMetricsCallback",get:function get(){return d.keyMetricsCallback},set:function set(t){i.warn("Context.keyMetricsCallback must be set using context.setKeyMetricsCallback");}},{key:"debug",get:function get(){return i.debug},set:function set(t){i.debug=t;}},{key:"on",value:function on(){return p.on.apply(p,arguments)}},{key:"off",value:function off(){return p.off.apply(p,arguments)}},{key:"emit",value:function emit(){return p.emit.apply(p,arguments)}},{key:"log",value:function log(){i.log.apply(i,arguments);}},{key:"info",value:function info(){i.info.apply(i,arguments);}},{key:"warn",value:function warn(){i.warn.apply(i,arguments);}},{key:"error",value:function error(){for(var t=arguments.length,o=new Array(t),r=0;r<t;r++)o[r]=arguments[r];i.error(o);}},{key:"setTheme",value:function setTheme(t){return T.setTheme(t)}},{key:"updateTheme",value:function updateTheme(t){return T.updateTheme(t)}},{key:"getSubTheme",value:function getSubTheme(t){return T.getSubTheme(t)}},{key:"setSubThemes",value:function setSubThemes(t){if("object"===_typeof(t))for(var o in t)T.setSubTheme(o,t[o]);else i.warn("subThemes must be an object");}},{key:"setSubTheme",value:function setSubTheme(t,i){return T.setSubTheme(t,i)}},{key:"updateSubTheme",value:function updateSubTheme(t,i){return T.updateSubTheme(t,i)}},{key:"removeSubTheme",value:function removeSubTheme(t){T.removeSubTheme(t);}},{key:"setLogCallback",value:function setLogCallback(t){i.logCallback=t;}},{key:"setKeyMetricsCallback",value:function setKeyMetricsCallback(t){d.keyMetricsCallback=t;}},{key:"config",value:function config(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=Object.keys(t),o=0;o<i.length;o++){var r=this["set"+capitalizeFirstLetter(i[o])];r&&r(t[i[o]]);}return this}}]),Context}()),A=new(function(){function GlobalUpdateManager(){_classCallCheck(this,GlobalUpdateManager),this._updateThemeSet=new Set,this._requestUpdateSet=new Set,this._timeout=null,this._runUpdatesTimeoutHandler=this._runUpdatesTimeoutHandler.bind(this);}return _createClass(GlobalUpdateManager,[{key:"_runUpdatesTimeoutHandler",value:function _runUpdatesTimeoutHandler(){this._timeout=null,this._updateThemeSet.forEach((function(t){try{t._updateThemeComponent();}catch(t){I.error("Error updating component themes",t);}})),this._updateThemeSet.clear(),this._requestUpdateSet.forEach((function(t){try{t.requestUpdate();}catch(t){I.error("Error updating component",t);}})),this._requestUpdateSet.clear();}},{key:"flush",value:function flush(){this._timeout&&(clearTimeout(this._timeout),this._runUpdatesTimeoutHandler());}},{key:"addUpdateTheme",value:function addUpdateTheme(t){this._updateThemeSet.add(t),this._timeout||(this._timeout=setTimeout(this._runUpdatesTimeoutHandler,0));}},{key:"deleteUpdateTheme",value:function deleteUpdateTheme(t){this._updateThemeSet.delete(t);}},{key:"addRequestUpdate",value:function addRequestUpdate(t){this._requestUpdateSet.add(t),this._timeout||(this._timeout=setTimeout(this._runUpdatesTimeoutHandler,0));}},{key:"deleteRequestUpdate",value:function deleteRequestUpdate(t){this._requestUpdateSet.delete(t);}}]),GlobalUpdateManager}());var O=[{pattern:"TV-14",replacer:"Rated TV-14"},{pattern:"CC",replacer:"Closed Captions available"},{pattern:"HD",replacer:"High Definition available"},{pattern:/ENG(?!\+)/,replacer:"English Available"},{pattern:/ENG\+ES/,replacer:"Available in English and Spanish"},{pattern:"AD",replacer:"Audio Description available"},{pattern:"RT",replacer:"Rotten Tomatoes"},{pattern:/(S)+(\d+)+(E)+(\d+)+/,replacer:function replacer(t,i,o,r,a){return "Season ".concat(o," Episode ").concat(a)}}];generateAbbrevConfig(O);function wrapWithBoundary(t){return "\\b".concat(t,"\\b")}function generateAbbrevConfig(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,i=(arguments.length>1?arguments[1]:void 0)?[].concat(O,_toConsumableArray(t)):t,o={},r={},a="",l=0;return i.forEach((function(t,i){var c,u=t.pattern,h=t.replacer;u instanceof RegExp?(r[i+l]={pattern:u,replacer:h},c=wrapWithBoundary(u.source),l+=function getNumberOfCaptureGroups(t){return new RegExp(t.toString()+"|").exec("").length-1}(u)):(o[u]={replacer:h},c=wrapWithBoundary(u));a=""===a?"(".concat(c,")"):"".concat(a,"|(").concat(c,")");})),{abbreviationsPattern:a=new RegExp(a,"g"),stringPatternMap:o,regExpPatternMap:r}}function withHandleKey(t){return function(i){_inherits(_class2,i);var o=_createSuper(_class2);function _class2(){return _classCallCheck(this,_class2),o.apply(this,arguments)}return _createClass(_class2,[{key:"_handleKey",value:function _handleKey(t){return this._processEvent(t)}},{key:"_handleKeyRelease",value:function _handleKeyRelease(t){return this._processEvent(t,"Release")}},{key:"_processEvent",value:function _processEvent(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",o=(this.stage.application.__keymap||{})[t.keyCode];return o||(o=t.key),!(!o||"function"!=typeof this["on".concat(o).concat(i)])&&(this._invokeKeyPayloadCallback(o+i),this["on".concat(o).concat(i)].call(this,this,t))}},{key:"_invokeKeyPayloadCallback",value:function _invokeKeyPayloadCallback(t){this.metricsPayload&&"function"==typeof I.keyMetricsCallback&&I.keyMetricsCallback(t,this.metricsPayload);}}],[{key:"name",get:function get(){return t.name}}]),_class2}(t)}function withLayout(t){return function(t){_inherits(_class3,t);var i=_createSuper(_class3);function _class3(){return _classCallCheck(this,_class3),i.apply(this,arguments)}return _createClass(_class3,[{key:"_construct",value:function _construct(){_get(_getPrototypeOf(_class3.prototype),"_construct",this)&&_get(_getPrototypeOf(_class3.prototype),"_construct",this).call(this),this._previousDimensionData=null;}},{key:"itemLayout",get:function get(){return this._itemLayout},set:function set(t){var i,o=this.constructor._componentName||this.constructor.name;t&&(i=JSON.parse(JSON.stringify(t,(function(t,i){if(!("circle"!==t&&i<0))return "circle"===t?Boolean(i):i;I.error("itemLayout for ".concat(o," received an invalid value of ").concat(i," for ").concat(t));})))),stringifyCompare(this._itemLayout,i)||(i&&!i.upCount?(this._originalW=this.w,this._originalH=this.h,this._itemLayout=_objectSpread({w:this._originalW,h:this._originalH},i)):this._itemLayout=i,this._updateItemLayout());}},{key:"_allowUpdate",value:function _allowUpdate(){var t=this._itemLayout||{},i=t.w,o=void 0===i?"":i,r=t.h,a=void 0===r?"":r,l=t.circle,c=void 0===l?"":l,u=t.ratioX,h=void 0===u?"":u,d=t.ratioY,p=void 0===d?"":d,_=t.upCount,g=void 0===_?"":_,m=Object.values(I.theme.layout).join("")+"".concat(o).concat(a).concat(c?1:0).concat(h).concat(p).concat(g);return m!==this._previousDimensionData&&(this._previousDimensionData=m,!0)}},{key:"_updateItemLayout",value:function _updateItemLayout(){if(this._allowUpdate()){var t=getDimensions(this.theme,this._itemLayout),i=t.w,o=t.h;if(o||i){var r=I.theme.layout.screenW,a=I.theme.layout.screenH,l=i||o*(r/a),c=o||i*(a/r);this.w=this._itemLayout&&this._itemLayout.circle?c:l,this.h=c,this._itemLayout&&this._itemLayout.circle&&this.style.radius?(this._circleSet=!0,this._originalRadius=this.style.radius,this.style=_objectSpread(_objectSpread({},this.style),{},{radius:c/2})):this._circleSet&&(this.style=_objectSpread(_objectSpread({},this.style),{},{radius:this._originalRadius}),this._originalRadius=void 0,this._circleSet=!1),this.queueRequestUpdate&&this.queueRequestUpdate(),this.fireAncestors("$itemChanged");}}}}]),_class3}(t)}function withMarqueeSync(t){return function(o){_inherits(_class4,o);var r=_createSuper(_class4);function _class4(){return _classCallCheck(this,_class4),r.apply(this,arguments)}return _createClass(_class4,[{key:"_init",value:function _init(){_get(_getPrototypeOf(_class4.prototype),"_init",this).call(this),this._shouldSync&&this._updateSignals();}},{key:"_update",value:function _update(){_get(_getPrototypeOf(_class4.prototype),"_update",this).call(this),this._shouldSync?this._updateSignals():this._cleanupSyncValues();}},{key:"_cleanupSyncValues",value:function _cleanupSyncValues(){this.syncArray.map((function(t){t.marqueeOverrideLoopX=void 0,t.signals&&t.signals.willMarquee&&delete t.signals.willMarquee;}));}},{key:"_updateSignals",value:function _updateSignals(){this.syncArray&&this.syncArray.map((function(t){t.signals=_objectSpread(_objectSpread({},t.signals),{},{willMarquee:"_willMarquee"});}));}},{key:"_willMarquee",value:function _willMarquee(t){var i=this;this._shouldSync&&(this._longestMarqueeWidth=Math.max(t._textRenderedW||0,this._longestMarqueeWidth||0),this.syncArray.map((function(t){t.marqueeOverrideLoopX=i._longestMarqueeWidth;})));}},{key:"_shouldSync",get:function get(){return !1!==this.style.marqueeSync&&(this.syncArray?Array.isArray(this.syncArray)?!(this.syncArray.length<2)||(i.warn("warning: syncArray must contain at least two component references."),!1):(i.warn("warning: syncArray must be typeof array."),!1):(i.warn("warning: components using MarqueeSync must have a syncArray getter defined."),!1))}}],[{key:"name",get:function get(){return t.name}}]),_class4}(t)}var M=function getCharacterValue(t,i){return t.charCodeAt(0)*(i+1)},R=function sortObject(t){var i={};return Object.keys(t).sort().forEach((function(o){"object"!==_typeof(t[o])||null===t[o]||Array.isArray(t[o])?i[o]=t[o]:i[o]=sortObject(t[o]);})),i},N=function getCharacterSum(t){for(var i=R(t),o=JSON.stringify(i).replace(/[{}:",\s]/g,""),r=0,a=0;a<o.length;a++)r+=M(o[a],a);return r};function executeWithContextRecursive(t,i){if("function"==typeof t)return executeWithContextRecursive(t(i),i);if(Array.isArray(t))return t.map((function(t){return executeWithContextRecursive(t,i)}));if("object"===_typeof(t)&&null!==t){var o={};for(var r in t)t.hasOwnProperty(r)&&(o[r]=executeWithContextRecursive(t[r],i));return o}return t}function isPlainObject(t){return !("object"!==_typeof(t)||null===t||Array.isArray(t)||t instanceof Date||t instanceof RegExp||t instanceof Function||t instanceof Error)}var z=function getSubTheme(t){for(;t&&(!t.subTheme||"string"!=typeof t.subTheme);)t=t.p;return t?t.subTheme:void 0},E=function getComponentConfig(t){var i;return isPlainObject(t)&&(null==t||null===(i=t.theme)||void 0===i||null===(i=i.componentConfig)||void 0===i?void 0:i[t.constructor.__componentName])||{}};function removeEmptyObjects(t){for(var i in t)t.hasOwnProperty(i)&&isPlainObject(t[i])&&(removeEmptyObjects(t[i]),0===Object.keys(t[i]).length&&delete t[i]);return t}function getUniqueProperties(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];if(!Array.isArray(t))throw new TypeError("Expected defaultProps to be an array of strings.");return _toConsumableArray(new Set(t))}function generatePayload(t,i,o,r,a,l){var c,u,h=clone(i,t);return h=clone(h,null==a?void 0:a[o]),h=clone(h,null==l?void 0:l[r]),h=clone(h,(null==a||null===(c=a[o])||void 0===c||null===(c=c.mode)||void 0===c?void 0:c[r])||{}),h=clone(h,(null==l||null===(u=l[r])||void 0===u||null===(u=u.tone)||void 0===u?void 0:u[o])||{})}function findNestedKeys(t,i){var o=[];function searchNestedKeys(t){if("object"===_typeof(t)&&null!==t)for(var i in t)t.hasOwnProperty(i)&&o.push(i);}return function searchForKey(t){if("object"===_typeof(t)&&null!==t)for(var o in t)if(t.hasOwnProperty(o)){if(o===i){searchNestedKeys(t[o]);break}searchForKey(t[o]);}}(t),o}var H=["unfocused_neutral","unfocused_inverse","unfocused_brand","focused_neutral","focused_inverse","focused_brand","disabled_neutral","disabled_inverse","disabled_brand"];var U=function generateComponentStyleSource(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=t.theme,o=void 0===i?{}:i,r=t.styleChain,a=void 0===r?[]:r,l=t.inlineStyle,c=void 0===l?{}:l,u=t.alias,h=void 0===u?[]:u;if("object"!==_typeof(o))throw new Error("Expected theme to be an object");if(!Array.isArray(a))throw new Error("Expected styleChain to be an array");if("object"!==_typeof(c))throw new Error("Expected inlineStyle to be an object");if(!Array.isArray(h))throw new Error("Expected alias to be an array");var d,p=a.map((function(t){var i=t.style;if("object"!==_typeof(i)||i.base||i.mode||i.tone||i.default){var o,r=i.base,a=void 0===r?{}:r,l=i.mode,c=void 0===l?{}:l,u=i.tone,h=void 0===u?{}:u;if(i){var d=JSON.parse(JSON.stringify(i));delete d.base,delete d.tone,delete d.mode,o=d;}return {defaultStyle:o||{},base:a,mode:c,tone:h}}return {base:i}}));if(c){var _=JSON.parse(JSON.stringify(c));delete _.base,delete _.tone,delete _.mode,d=_;}var g={defaultStyle:d||{},base:(null==c?void 0:c.base)||{},mode:(null==c?void 0:c.mode)||{},tone:(null==c?void 0:c.tone)||{}},m=[].concat(_toConsumableArray(p),[g]).map((function(t){return executeWithContextRecursive(t,o)})),v=findNestedKeys(m,"mode"),S=findNestedKeys(m,"tone"),k=m.reduce((function(t,i){return clone(t,function generateSolution(t){var i,o=t.base,r=void 0===o?{}:o,a=t.tone,l=void 0===a?{}:a,c=t.mode,u=void 0===c?{}:c,h=t.defaultStyle,d=void 0===h?{}:h,p=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],_={},g=getUniqueProperties(["focused","disabled"].concat(_toConsumableArray(arguments.length>1&&void 0!==arguments[1]?arguments[1]:[]),["unfocused"])),m=getUniqueProperties(["neutral","inverse","brand"].concat(_toConsumableArray(p))),v=_createForOfIteratorHelper(g);try{for(v.s();!(i=v.n()).done;){var S,k=i.value,b=_createForOfIteratorHelper(m);try{for(b.s();!(S=b.n()).done;){var C=S.value,T=generatePayload(r,d,C,k,l,u);_["".concat(k,"_").concat(C)]=T;}}catch(t){b.e(t);}finally{b.f();}}}catch(t){v.e(t);}finally{v.f();}return _}(i,v,S))}),{}),b=function createSharedReferences(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=new Map;return function process(t){for(var o in t)if(t.hasOwnProperty(o)){var r=t[o];if("object"===_typeof(r)&&null!==r){var a=(l=r,JSON.stringify(l,Object.keys(l).sort()));i.has(a)?t[o]=i.get(a):(i.set(a,r),process(r));}}var l;}(t),t}(Y(removeEmptyObjects(K({theme:o},k))||{},h));return function enforceContract(t){for(var i={},o=0,r=[].concat(H,_toConsumableArray(Object.keys(t)));o<r.length;o++){var a=r[o];if(t.hasOwnProperty(a))"object"!==_typeof(t[a])?i[a]={}:i[a]=t[a];else {var l=H.find((function(i){return t.hasOwnProperty(i)}));if(l){var c=t[l];i[a]="object"!==_typeof(c)?{}:c;}else i[a]={};}}return i}(b)},K=function colorParser(t,i){if("object"!==_typeof(t)||null===t)throw new TypeError("targetObject must be an object.");if("object"!==_typeof(i)||null===i)throw new TypeError("styleObj must be an object.");var r=JSON.stringify(i,(function(i,r){if(!(-1<["tone","mode"].indexOf(i)))return "string"==typeof r&&r.startsWith("theme.")?o(t,r):Array.isArray(r)&&2===r.length?getHexColor(r[0],r[1]):r}));return JSON.parse(r||{})};function generateNameFromPrototypeChain(t){var i,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(!t)return o;var r=Object.getPrototypeOf(t);return r&&r.constructor?generateNameFromPrototypeChain(r,"".concat(o?o+".":"").concat((null==r||null===(i=r.constructor)||void 0===i?void 0:i.__componentName)||"").replace(/\.*$/,"").trim()):o}var q={},V=function getStyleChainMemoized(t){var i=generateNameFromPrototypeChain(t);if(q[i])return q[i];var o=X(t);return q[i]=o,o},X=function getStyleChain(t){var i,o=new Map;do{var r;if((null===(r=i=i?Object.getPrototypeOf(i):t)||void 0===r?void 0:r.constructor)===Object)break;if(i&&"object"===_typeof(i)&&i.hasOwnProperty("constructor")){var a=E(i).style;Object.keys(a||{}).length&&(o.has(a)||o.set(a,{style:a}));var l=i.constructor.hasOwnProperty("__themeStyle")&&i.constructor.__themeStyle;Object.keys(l||{}).length?o.has(l)||o.set(l,{style:_objectSpread({},l)}):"function"==typeof l&&(o.has(l)||o.set(l,{style:l}));var c=i.constructor.hasOwnProperty("__mixinStyle")&&i.constructor.__mixinStyle;Object.keys(c||{}).length&&(o.has(c)||o.set(c,{style:c}));}}while(i);return Array.from(o.values()).map((function(t){return t})).reverse()},Y=function formatStyleObj(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];if("object"!==_typeof(t)||null===t)throw new Error("The originalObj parameter must be an object.");var o=new Set;return o.add([G,[i]]),Array.from(o).reduce((function(t,i){var o=_slicedToArray(i,2),r=o[0],a=o[1];return r.apply(void 0,[t].concat(_toConsumableArray(a)))}),t)},G=function replaceAliasValues(t){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];if("object"!==_typeof(t)||null===t)throw new Error("Value must be an object");if(!Array.isArray(o))throw new Error("Alias styles must be an array");var r=JSON.stringify(t);return [{prev:"height",curr:"h",skipWarn:!0},{prev:"width",curr:"w",skipWarn:!0}].concat(_toConsumableArray(o||[])).forEach((function(t){t&&"string"==typeof t.prev&&"string"==typeof t.curr&&(!t.skipWarn&&r.search('"'.concat(t.prev,'":'))>=0&&i.warn('The style property "'.concat(t.prev,'" is deprecated and will be removed in a future release. Please use "').concat(t.curr,'" instead.')),r=r.replace(new RegExp('"'.concat(t.prev,'":'),"gi"),'"'.concat(t.curr,'":')));})),JSON.parse(r)},Q=new Map;I.on("themeUpdate",(function(){Q.clear();}));var $=Q,J=function(i){_inherits(StyleManager,t.EventEmitter);var o=_createSuper(StyleManager);function StyleManager(){var t,i=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).component,r=void 0===i?{}:i;return _classCallCheck(this,StyleManager),(t=o.apply(this,arguments)).init(r),t}return _createClass(StyleManager,[{key:"init",value:function init(t){this.isActive=!0,this.component=t,this.setupListeners(),this._style={},this.update();}},{key:"setupListeners",value:function setupListeners(){this._boundThemeUpdate=this._onThemeUpdate.bind(this),this._hasSubTheme=Boolean(this.component._targetSubTheme),this.component._targetSubTheme?I.on("themeUpdate".concat(this.component._targetSubTheme),this._boundThemeUpdate):I.on("themeUpdate",this._boundThemeUpdate);}},{key:"clearListeners",value:function clearListeners(){this._boundThemeUpdate&&(this.component._targetSubTheme?I.off("themeUpdate".concat(this.component._targetSubTheme),this._boundThemeUpdate):I.off("themeUpdate",this._boundThemeUpdate));}},{key:"destroy",value:function destroy(){this.isActive=!1,this._cleanupCache(),this.clearListeners(),this._styleCache=null,this._boundThemeUpdate=null,this.component=null;}},{key:"_onThemeUpdate",value:function _onThemeUpdate(){!function clearStyleChainCache(){for(var t in q)q.hasOwnProperty(t)&&delete q[t];}(),this.clearSourceCache(),this.clearStyleCache(),this.update();}},{key:"clearSourceCache",value:function clearSourceCache(){if(this.component){var t=this._generateCacheKey("styleSource");this._removeCache(t);}}},{key:"clearStyleCache",value:function clearStyleCache(){if(this.component){var t=this.component,i=t.tone,o=t.mode,r=this._generateCacheKey("style_".concat(o,"_").concat(i));$.delete(r);}}},{key:"_generateCacheKey",value:function _generateCacheKey(t){return [t,this.component.constructor.__componentName,this._customStyleHash].filter(Boolean).join("_")}},{key:"_addCache",value:function _addCache(t,i){var o=this._generateCacheKey(t),r=$.get(o);$.set(o,{ids:_toConsumableArray(new Set([].concat(_toConsumableArray((null==r?void 0:r.ids)||[]),[this.component.__id]))),payload:i});}},{key:"_cleanupCache",value:function _cleanupCache(){var t=this;this.component&&$.forEach((function(i,o){var r=i.ids,a=i.payload,l=r&&r.length&&r.indexOf(t.component.__id);l>-1&&r.length>1?$.set(o,{ids:r.slice(0,l).concat(r.slice(l+1)),payload:a}):l>-1&&$.delete(o);}));}},{key:"_removeCache",value:function _removeCache(t){$.delete(t);}},{key:"_getCache",value:function _getCache(t){var i=this._generateCacheKey(t);return $.get(i)}},{key:"update",value:function update(){if(this.component){var t=this.component,i=t.mode,o=t.tone;try{var r,a,l=null===(r=this._getCache("styleSource"))||void 0===r?void 0:r.payload;l||(l=U({alias:this.component.constructor.aliasStyles,componentConfig:this.component._componentConfig,inlineStyle:this.component._componentLevelStyle,styleChain:V(this.component),theme:this.component.theme}),this._addCache("styleSource",l));var c=null===(a=this._getCache("style_".concat(i,"_").concat(o)))||void 0===a?void 0:a.payload;c||(c=function generateStyle(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!isPlainObject(t))return {};var o=t.mode,r=void 0===o?"unfocused":o,a=t.tone,l=void 0===a?"neutral":a;return i["".concat(r,"_").concat(l)]||i.unfocused_neutral||{}}(this.component,l),this._addCache("style_".concat(i,"_").concat(o),c)),this._style=c,this.emit("styleUpdate",this.style);}catch(t){I.error("styleManager: ",t.message);}}}},{key:"style",get:function get(){return this._style},set:function set(t){I.warn("styleManager: Cannot mutate style directly");}},{key:"props",get:function get(){var t=this;return Object.keys(this.component._componentConfig).reduce((function(i,o){return ["base","tone","mode","style","styleConfig"].includes(o)||(i[o]=t.component._componentConfig[o]),i}),{})},set:function set(t){I.warn("styleManager: Cannot mutate props directly");}},{key:"_customStyleHash",get:function get(){if(Boolean(Object.keys(this.component.constructor.__mixinStyle||{}).length)||Boolean(Object.keys(this.component._componentLevelStyle||{}).length))return function getHash(t){return JSON.stringify(t).length+"-"+N(t)}(clone(this.component.constructor.__mixinStyle||{},this.component._componentLevelStyle||{}))}}]),StyleManager}();function mergeObjectsWithSecondDominant(t,i){if(null!==t&&"object"===_typeof(t)){if(Array.isArray(t))return t.map((function(t,o){return mergeObjectsWithSecondDominant(t,Array.isArray(i)?i[o]:void 0)}));var o={};return new Set([].concat(_toConsumableArray(Object.keys(t)),_toConsumableArray(Object.keys(i)))).forEach((function(r){"object"===_typeof(t[r])&&null!==t[r]?o[r]=mergeObjectsWithSecondDominant(t[r],i[r]||{}):"object"===_typeof(i[r])&&null!==i[r]?o[r]=mergeObjectsWithSecondDominant(t[r]||{},i[r]):o[r]=i.hasOwnProperty(r)?i[r]:void 0;})),o}return t}function withThemeStyles(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function(o){_inherits(_class6,o);var r=_createSuper(_class6);function _class6(){return _classCallCheck(this,_class6),r.apply(this,arguments)}return _createClass(_class6,[{key:"_construct",value:function _construct(){var t=this;this._withThemeStylesSetupComplete||(this._hSetByUser=!1,this._wSetByUser=!1,this._styleManager=new J({component:this}),this._style=this._styleManager.style,this._updatePropDefaults(),this._styleManager.on("styleUpdate",(function(){t._style=t._styleManager.style,t._updatePropDefaults(),t.queueThemeUpdate();})),this._withThemeStylesSetupComplete=!0),_get(_getPrototypeOf(_class6.prototype),"_construct",this).call(this);}},{key:"_setup",value:function _setup(){_get(_getPrototypeOf(_class6.prototype),"_setup",this)&&_get(_getPrototypeOf(_class6.prototype),"_setup",this).call(this),this._targetSubTheme=z(this),this._targetSubTheme&&(this._styleManager.clearListeners(),this._styleManager.setupListeners(),this._styleManager.clearStyleCache(),this._styleManager.clearSourceCache(),this._styleManager.update());}},{key:"_updatePropDefaults",value:function _updatePropDefaults(){if(JSON.stringify(this._styleManager.props)!==JSON.stringify(this._prevComponentConfigProps)){var t=this._prevComponentConfigProps?mergeObjectsWithSecondDominant(this._prevComponentConfigProps||{},this._styleManager.props||{}):this._styleManager.props||{};this._prevComponentConfigProps=this._styleManager.props&&JSON.parse(JSON.stringify(this._styleManager.props)),this.__componentConfigProps=t;}}},{key:"_attach",value:function _attach(){_get(_getPrototypeOf(_class6.prototype),"_attach",this).call(this),this._styleManager.isActive||this._styleManager.init(this);}},{key:"_detach",value:function _detach(){_get(_getPrototypeOf(_class6.prototype),"_detach",this).call(this),this._styleManager.destroy();}},{key:"_unfocus",value:function _unfocus(){this._isFocusedMode&&(this.mode="unfocused"),_get(_getPrototypeOf(_class6.prototype),"_unfocus",this).call(this);}},{key:"_focus",value:function _focus(){this._isDisabledMode||(this.mode="focused"),_get(_getPrototypeOf(_class6.prototype),"_focus",this).call(this);}},{key:"_checkDimensionUpdates",value:function _checkDimensionUpdates(){var t=!1;!this._wSetByUser&&this.style.w&&this._w!==this.style.w&&(this._w=this.style.w,t=!0),!this._hSetByUser&&this.style.h&&this._h!==this.style.h&&(this._h=this.style.h,t=!0),t&&this._updateDimensions();}},{key:"_updateThemeComponent",value:function _updateThemeComponent(){this.style&&this._isAttached()&&(this._checkDimensionUpdates(),this.queueRequestUpdate?this.queueRequestUpdate():this._update&&this._update(),this._updateItemLayout&&this._updateItemLayout());}},{key:"queueThemeUpdate",value:function queueThemeUpdate(){A.addUpdateTheme(this);}},{key:"theme",get:function get(){return this._targetSubTheme&&I.getSubTheme(this._targetSubTheme)||I.theme}},{key:"style",get:function get(){return this._style},set:function set(t){"[object Object]"===Object.prototype.toString.call(t)?(this._componentLevelStyle=t,this._styleManager.clearStyleCache(),this._styleManager.update()):I.error("style must be an object");}},{key:"_componentStyle",get:function get(){return I.info("_componentStyle will soon be deprecated. Please use Component.style"),this._style}},{key:"styleConfig",get:function get(){return this._styleConfig},set:function set(t){I.info("style config is deprecated. Please use style = { base: {}, tone: {}, mode: {} }"),this._styleConfig=t,this._styleManager.update();}},{key:"_componentConfig",get:function get(){return E(this)}},{key:"mode",get:function get(){var t;return this._mode||(null===(t=this._componentConfig)||void 0===t?void 0:t.mode)||"unfocused"},set:function set(t){if("string"==typeof t&&this._mode!==t){this._mode=t;var i=this["on".concat(capitalizeFirstLetter(t))];i&&"function"==typeof i&&i.call(this),this._styleManager.update();}}},{key:"tone",get:function get(){return this._tone||this._componentConfig.tone||"neutral"},set:function set(t){"string"==typeof t&&this._tone!==t&&(this._tone=t,this._styleManager.update());}},{key:"w",get:function get(){var t;return this._wSetByUser&&this._w||(null===(t=this.style)||void 0===t?void 0:t.w)||0},set:function set(t){this._w!==t&&(_set(_getPrototypeOf(_class6.prototype),"w",t,this,!0),this._wSetByUser=!0,this._updateThemeComponent());}},{key:"h",get:function get(){var t;return this._hSetByUser&&this._h||(null===(t=this.style)||void 0===t?void 0:t.h)||this._h||0},set:function set(t){this._h!==t&&(_set(_getPrototypeOf(_class6.prototype),"h",t,this,!0),this._hSetByUser=!0,this._updateThemeComponent());}}],[{key:"name",get:function get(){return t.name}},{key:"__componentName",get:function get(){if(!_get(_getPrototypeOf(_class6),"__componentName",this))throw new Error("A valid static __componentName property is required for theming to work properly. Please add this to the ".concat(this.constructor.name," class."));return _get(_getPrototypeOf(_class6),"__componentName",this)}},{key:"__mixinStyle",get:function get(){return i}}]),_class6}(t)}function withTags(t){return function(i){_inherits(_class7,i);var o=_createSuper(_class7);function _class7(){return _classCallCheck(this,_class7),o.apply(this,arguments)}return _createClass(_class7,[{key:"_construct",value:function _construct(){var t=Object.getPrototypeOf(this);t._withTagsInitialized||((this.constructor.tags||[]).forEach((function(i){if("object"===_typeof(i))var o=i.name,r=i.path;else o=i,r=i;var a="_"+o,l=function getPropertyDescriptor$1(t){return {get:function get(){return this.tag(t)},configurable:!0,enumerable:!0}}(r);Object.defineProperty(t,a,l);})),t._withTagsInitialized=!0);_get(_getPrototypeOf(_class7.prototype),"_construct",this)&&_get(_getPrototypeOf(_class7.prototype),"_construct",this).call(this);}}],[{key:"name",get:function get(){return t.name}}]),_class7}(t)}function capital(t){return t.charAt(0).toUpperCase()+t.slice(1)}function mergeProps(t,i){var o,r=i;return "object"===_typeof(t)&&Object.keys(t).length&&"object"===_typeof(i)&&(r=clone(t,i)),null!==(o=r)&&void 0!==o?o:t}function withUpdates(t){return function(i){_inherits(_class8,i);var o=_createSuper(_class8);function _class8(){return _classCallCheck(this,_class8),o.apply(this,arguments)}return _createClass(_class8,[{key:"_construct",value:function _construct(){var t=this,i=Object.getPrototypeOf(this);i._withUpdatesInitialized||((this.constructor.properties||[]).forEach((function(t){var o=function getPropertyDescriptor(t,i){return {get:function get(){var o,r=this["_get".concat(capital(t))];if(r&&"function"==typeof r){var a,l,c=r.call(this,this[i]);return this[i]=c||(null===(a=this.__componentConfigProps)||void 0===a?void 0:a[t]),mergeProps(null===(l=this.__componentConfigProps)||void 0===l?void 0:l[t],c)}return mergeProps(null===(o=this.__componentConfigProps)||void 0===o?void 0:o[t],this[i])},set:function set(o){if(o!==this[i]){var r=this["_set".concat(capital(t))];r&&"function"==typeof r&&(o=r.call(this,o));var a="style"===i?clone(this[i],o):o;if("object"===_typeof(this[i])&&null!==this[i]&&this[i].style){var l=clone(this[i].style,o.style||{});a.style=l;}this[i]=a,this.queueRequestUpdate();}},configurable:!0,enumerable:!0}}(t,"_"+t);void 0!==o&&Object.defineProperty(i,t,o);})),(this.constructor.aliasProperties||[]).forEach((function(t){if(t&&"string"==typeof t.prev&&"string"==typeof t.curr){var o=function getAliasPropertyDescriptor(t,i){var o='The property "'.concat(t,'" is deprecated and will be removed in a future release. Please use "').concat(i,'" instead.');return {get:function get(){return console.warn(o),this[i]},set:function set(t){console.warn(o),this[i]=t;}}}(t.prev,t.curr);void 0!==o&&Object.defineProperty(i,t.prev,o);}})),i._withUpdatesInitialized=!0);this._whenEnabled=new Promise((function(i){t._whenEnabledResolver=i;})),_get(_getPrototypeOf(_class8.prototype),"_construct",this)&&_get(_getPrototypeOf(_class8.prototype),"_construct",this).call(this);}},{key:"queueRequestUpdate",value:function queueRequestUpdate(){this._isAttached()&&A.addRequestUpdate(this);}},{key:"_firstEnable",value:function _firstEnable(){this._readyForUpdates=!0,this._whenEnabledResolver(),A.deleteRequestUpdate(this),this.requestUpdate(),_get(_getPrototypeOf(_class8.prototype),"_firstEnable",this)&&_get(_getPrototypeOf(_class8.prototype),"_firstEnable",this).call(this);}},{key:"_detach",value:function _detach(){_get(_getPrototypeOf(_class8.prototype),"_detach",this).call(this),A.deleteRequestUpdate(this);}},{key:"requestUpdate",value:function requestUpdate(){var t=this,i=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(this._readyForUpdates||i){var o=this._update();"object"===_typeof(o)&&null!==o&&o.catch&&o.catch((function(i){I.error("asyncronous _update() error in '".concat(t.constructor.__componentName,"'"),t,i);}));}}},{key:"logPropTable",value:function logPropTable(){console.table(this._propTable);}},{key:"_propTable",get:function get(){var t=this;return this.constructor.properties.reduce((function(i,o){return i[o]=t[o],i}),{})}}],[{key:"name",get:function get(){return t.name}}]),_class8}(t)}var Z="__original";function withExtensions(t){return t.prototype.constructor._withExtensionsApplied?t:function(i){_inherits(_class10,i);var o=_createSuper(_class10);function _class10(){return _classCallCheck(this,_class10),o.apply(this,arguments)}return _createClass(_class10,[{key:"_prototypeChain",get:function get(){if(this.__prototypeChain)return this.__prototypeChain;var t=new Set,i=this;do{if(null!==(i=Object.getPrototypeOf(i))&&"object"===_typeof(i))try{i.constructor.__componentName&&t.add(i.constructor.__componentName);}catch(t){}}while(i);return this.__prototypeChain=t,t}},{key:"_extensions",get:function get(){var t=I&&I.theme&&I.theme.extensions;return !t||!Array.isArray(t)||Array.isArray(t)&&!t.length?[]:t.filter((function(t){var i=t.targetComponent,o=t.extension;return ("string"==typeof i||Array.isArray(i))&&"function"==typeof o})).slice().reverse()||[]}},{key:"_componentExtensions",get:function get(){var t=this;return this._extensions.filter((function(i){var o=i.targetComponent;return "string"==typeof o?o===t.constructor.__componentName||t._prototypeChain.has(o):!!Array.isArray(o)&&o.find((function(i){if(i.startsWith("/")&&i.endsWith("/")){var o=new RegExp(i.slice(1,-1));return Array.from(t._prototypeChain).some((function(t){return o.test(t)}))}return t._prototypeChain.has(i)}))})).reduce((function(t,i){var o=i.extension;return t.push(o),t}),[])}},{key:"_extensionApplied",get:function get(){return this._currentComponentExtensionLength===this._appliedExtensionLength}},{key:"_construct",value:function _construct(){this._appliedExtensionLength=0,this._extendedList={},this._extensionInstance={},this._setupExtensionBound=this._setupExtension.bind(this),I.on("themeUpdate",this._setupExtensionBound),this._currentComponentExtensionLength=this._calculateComponentExtensionLength(),this._createExtension(),_get(_getPrototypeOf(_class10.prototype),"_construct",this).call(this);}},{key:"_detach",value:function _detach(){_get(_getPrototypeOf(_class10.prototype),"_detach",this).call(this),I.off("themeUpdate",this._setupExtensionBound);}},{key:"_setupExtension",value:function _setupExtension(){this._currentComponentExtensionLength=this._calculateComponentExtensionLength(),this._createExtension.call(this);}},{key:"_resetComponent",value:function _resetComponent(){var t=this;this._extensionInstance._extensionCleanup&&this._extensionInstance._extensionCleanup.call(this),(Object.keys(this._extendedList)||[]).forEach((function(i){delete t[i],delete t[i+Z];})),this._extensionInstance={},this._extendedList={};}},{key:"_calculateComponentExtensionLength",value:function _calculateComponentExtensionLength(){return this._componentExtensions.reduce((function(t,i){return t+=i.toString().length}),0)}},{key:"_createExtension",value:function _createExtension(){if(!this._extensionApplied){this._resetComponent();var t=new(this._createExtensionClass());this._extendedList=this._createExtensionAliases(t),this._extensionInstance=t,this._setComponentAliases(this._extendedList);}}},{key:"_createExtensionClass",value:function _createExtensionClass(){var t=this._componentExtensions.reduce((function(t,i){return i(t)}),(function ExtensionBase(){}));return this._appliedExtensionLength=this._calculateComponentExtensionLength(),t}},{key:"_createExtensionAliases",value:function _createExtensionAliases(t){for(var i=t,o=0;o<this._componentExtensions.length+1;o++)i=Object.getPrototypeOf(i);var r={},a=this._componentExtensions.reduce((function(t,i){var o=new new i(_createClass((function FakeClass(){_classCallCheck(this,FakeClass);}))),a=Object.getOwnPropertyDescriptors(Object.getPrototypeOf(o));return Object.keys(a).forEach((function(i){if(!["constructor"].includes(i)){if(a[i].get||a[i].set)return r[i]={type:"accessor"},void(t[i]={get:function get(){return this[i+Z]},set:function set(t){this[i+Z]=t;}});r[i]={type:"method"},t[i]={value:function value(){this[i+Z]&&this[i+Z]();}};}})),t}),{});return Object.defineProperties(i,a),Object.setPrototypeOf(i,this),r}},{key:"_setComponentAliases",value:function _setComponentAliases(t){var i=this;Object.keys(t).forEach((function(o){i[o+Z]=i[o],"method"===t[o].type?i[o]=i._extensionInstance[o]:"accessor"===t[o].type&&Object.defineProperty(i,o,{configurable:!0,get:function get(){return this._extensionInstance[o]},set:function set(t){this._extensionInstance[o]=t;}});}));}}],[{key:"name",get:function get(){return t.name}},{key:"__componentName",get:function get(){if(!_get(_getPrototypeOf(_class10),"__componentName",this))throw new Error("A valid static __componentName property is required for theming to work properly. Please add this to the ".concat(this.constructor.name," class."));return _get(_getPrototypeOf(_class10),"__componentName",this)}},{key:"_withExtensionsApplied",get:function get(){return !0}}]),_class10}(t)}var tt=function withMixins(t){return withExtensions(withLayout(withThemeStyles(withUpdates(withTags(withHandleKey(t))))))}(function(i){_inherits(Base,t.Component);var o=_createSuper(Base);function Base(){return _classCallCheck(this,Base),o.apply(this,arguments)}return _createClass(Base,[{key:"_construct",value:function _construct(){this.skipPlinko=!1,this.centerInParent=!1,this.loaded||(this.loaded=Promise.resolve());}},{key:"_init",value:function _init(){this.queueRequestUpdate();}},{key:"_resetLoadedPromise",value:function _resetLoadedPromise(){var t=this;this.loaded=new Promise((function(i,o){t._resolveLoadedPromise=i,t._rejectLoadedPromise=o;}));}},{key:"_update",value:function _update(){}},{key:"_focus",value:function _focus(){this._updateShouldSmooth(),this.queueRequestUpdate();}},{key:"_unfocus",value:function _unfocus(){this.queueRequestUpdate();}},{key:"_updateShouldSmooth",value:function _updateShouldSmooth(){void 0===this.shouldSmooth&&(this.shouldSmooth=!0);}},{key:"applySmooth",value:function applySmooth(t,i,o){this.shouldSmooth?t.smooth=o||i:t.patch(i);}},{key:"announce",get:function get(){return this._announce},set:function set(t){this._announce=t;}},{key:"announceContext",get:function get(){return this._announceContext},set:function set(t){this._announceContext=t;}},{key:"shouldSmooth",get:function get(){return this._shouldSmooth},set:function set(t){this._shouldSmooth=t;}},{key:"_isDisabledMode",get:function get(){return "disabled"===this.mode}},{key:"_isUnfocusedMode",get:function get(){return "unfocused"===this.mode}},{key:"_isFocusedMode",get:function get(){return "focused"===this.mode}},{key:"isFullyOnScreen",value:function isFullyOnScreen(t){return isComponentOnScreen(this,t)}},{key:"getFocusScale",value:function getFocusScale(){return I.theme.layout.focusScale}},{key:"getUnfocusScale",value:function getUnfocusScale(){return 1}}],[{key:"__componentName",get:function get(){return "Base"}}]),Base}()),et=Object.freeze({__proto__:null,base:function base$R(t){return {gradientTop:t.color.fillTransparent,radius:t.radius.none}},tone:function tone$p(t){return {neutral:{gradientColor:t.color.material},inverse:{gradientColor:t.color.fillNeutral},brand:{gradientColor:t.color.fillBrand}}}}),nt=function(i){_inherits(Gradient,tt);var o=_createSuper(Gradient);function Gradient(){return _classCallCheck(this,Gradient),o.apply(this,arguments)}return _createClass(Gradient,[{key:"_update",value:function _update(){this.patch({rect:!0,rtt:!0,colorTop:this.style.gradientTop,colorBottom:this.style.gradientColor,texture:t.Tools.getRoundRect(this.w,this.h,this.style.radius)});}}],[{key:"__componentName",get:function get(){return "Gradient"}},{key:"__themeStyle",get:function get(){return et}}]),Gradient}(),it=Object.freeze({__proto__:null,base:function base$Q(t){return {animationBlurEntrance:t.animation.utilityEntrance,animationBlurExit:t.animation.utilityExit,animationComponentEntrance:t.animation.utilityEntrance,animationGradientEntrance:t.animation.utilityEntrance,animationGradientExit:t.animation.utilityExit,animationImageScaleEntrance:t.animation.standardEntrance,animationImageScaleExit:t.animation.standardEntrance,blur:4,centerImageRadius:t.radius.md,fallbackSrc:void 0,fillColor:t.color.overlay,gradientColor:t.color.material,imageScale:1,imageScalePivotX:.5,imageScalePivotY:.5,padding:t.spacer.md,radius:0,zIndexSet:{image:1,blur:2,centerImage:3,fill:4,gradient:5,foreground:6}}}});var ot=function(i){_inherits(CustomImageTexture,t.Texture);var o=_createSuper(CustomImageTexture);function CustomImageTexture(t){var i;return _classCallCheck(this,CustomImageTexture),(i=o.call(this,t))._src=void 0,i._hasAlpha=!1,i}return _createClass(CustomImageTexture,[{key:"src",get:function get(){return this._src},set:function set(t){this._src!==t&&(this._src=t,this._changed());}},{key:"hasAlpha",get:function get(){return this._hasAlpha},set:function set(t){this._hasAlpha!==t&&(this._hasAlpha=t,this._changed());}},{key:"w",get:function get(){return this._w},set:function set(t){this._w=t,this._changed();}},{key:"h",get:function get(){return this._h},set:function set(t){this._h=t,this._changed();}},{key:"_getIsValid",value:function _getIsValid(){return !!this._src}},{key:"_getLookupId",value:function _getLookupId(){return this._src}},{key:"_getSourceLoader",value:function _getSourceLoader(){var i=this,o=this._w,r=this._h,a=this._src,l=this._hasAlpha;if(this.stage.getOption("srcBasePath")){var c=a.charCodeAt(0);-1===a.indexOf("//")&&(c>=65&&c<=90||c>=97&&c<=122||46==c)&&(a=this.stage.getOption("srcBasePath")+a);}return function(c){switch(function checkFileType(t){return t.startsWith("<svg")?"SVG":t.startsWith("blob:")?"Blob":/\.(jpeg|jpg|gif|png|svg)$/i.test(t)?"Image":"Unknown"}(a)){case"SVG":return function createSvg(i,o,r,a,l){var c=o.platform.getDrawingCanvas(),u=c.getContext("2d");u.imageSmoothingEnabled=!0;var h=new Image;h.onload=function(){c.width=a,c.height=l,u.drawImage(h,0,0,c.width,c.height),i(null,{source:c,w:a,h:l});},h.onerror=function(t){i(t);},t.Utils.isPS4||(h.crossOrigin="Anonymous"),h.src=r;}(c,i.stage,"data:image/svg+xml,".concat(encodeURIComponent(a)),o,r);case"Blob":return function imageLoader(i,o){var r=i.src,a=new Image;return "data:"==r.substr(0,5)||t.Utils.isPS4||(a.crossOrigin="Anonymous"),a.onerror=function(){if(a.src)return o("Image load error")},a.onload=function(){o(null,{source:a,renderInfo:{src:r,compressed:!1},hasAlpha:!0});},a.src=r,function(){a.onerror=null,a.onload=null,a.removeAttribute("src");}}({src:a},c);default:return i.stage.platform.loadSrcTexture({src:a,hasAlpha:l},c)}}}},{key:"getNonDefaults",value:function getNonDefaults(){var t=_get(_getPrototypeOf(CustomImageTexture.prototype),"getNonDefaults",this).call(this);return this._src&&(t.src=this._src),t}}]),CustomImageTexture}(),rt=function(i){_inherits(Artwork,tt);var o,r,a,l,c=_createSuper(Artwork);function Artwork(){return _classCallCheck(this,Artwork),c.apply(this,arguments)}return _createClass(Artwork,[{key:"_shouldBlur",get:function get(){var t=this._blur||this._hasCenterImage;return this._Image.rtt=t,t}},{key:"_hasCenterImage",get:function get(){return -1<["circle","square"].indexOf(this.format)||"contain"===this.format&&!this._aspectRatioEqual}},{key:"w",get:function get(){return _get(_getPrototypeOf(Artwork.prototype),"w",this)},set:function set(t){t!==_get(_getPrototypeOf(Artwork.prototype),"w",this)&&(_set(_getPrototypeOf(Artwork.prototype),"w",t,this,!0),this._componentSrc=this._generatePromise());}},{key:"h",get:function get(){return _get(_getPrototypeOf(Artwork.prototype),"h",this)},set:function set(t){t!==_get(_getPrototypeOf(Artwork.prototype),"h",this)&&(_set(_getPrototypeOf(Artwork.prototype),"h",t,this,!0),this._componentSrc=this._generatePromise());}},{key:"_actualAspectRatio",get:function get(){return this.w&&this.h?reduceFraction("".concat(this.w,"/").concat(this.h)).replace("/","x"):null}},{key:"_supportedAspectRatioHeights",get:function get(){var t=this;return this.srcCallbackAspectRatios.map((function(i){var o=_slicedToArray(i.split("x").map((function(t){return parseInt(t)})),2),r=o[0],a=o[1];return t.w/r*a}))}},{key:"_closestSupportedAspectRatio",get:function get(){var t=this,i=this._supportedAspectRatioHeights.reduce((function(i,o){return Math.abs(o-t.h)<Math.abs(i-t.h)?o:i}));return this.srcCallbackAspectRatios[this._supportedAspectRatioHeights.indexOf(i)]}},{key:"_processedImageSrc",get:function get(){var t=this.src||this.fallbackSrc;return t!==this.fallbackSrc&&this.srcCallback&&"function"==typeof this.srcCallback&&(t=this.srcCallback({closestAspectRatio:this._closestSupportedAspectRatio,aspectRatio:this._actualAspectRatio,src:this.src,w:this.w,h:this.h})),t&&t.then?t:Promise.resolve(t)}},{key:"_gradientPatch",get:function get(){return {alpha:!this._Gradient&&this.shouldSmooth?.001:1,style:{gradientColor:getValidColor(this.style.gradientColor)},h:this.h+4,type:nt,w:this.w+4,x:-2,y:-2,zIndex:this.core.findZContext().zIndex+this.style.zIndexSet.gradient}}},{key:"_construct",value:function _construct(){_get(_getPrototypeOf(Artwork.prototype),"_construct",this).call(this),this._srcCallbackAspectRatios=["16x9","3x4","4x3","2x1","1x1"];}},{key:"_setSrc",value:function _setSrc(t){return this._componentSrc=this._generatePromise(),t}},{key:"_getFallbackSrc",value:function _getFallbackSrc(){return this._fallbackSrc||this.style&&this.style.fallbackSrc}},{key:"_generatePromise",value:function _generatePromise(){var t,i;return {complete:new Promise((function(o,r){t=o,i=r;})),resolve:t,reject:i}}},{key:"_setup",value:function _setup(){this.alpha=.001,this._componentSrc=this._generatePromise(),this._aspectRatioEqual=!1,this._Image.on("txLoaded",this._resolveLoading.bind(this)),this._Image.on("txError",this._rejectLoading.bind(this));}},{key:"_resolveLoading",value:function _resolveLoading(){this._aspectRatioEqual=!!this._Image.texture.source&&parseFloat(this.finalW/this.finalH).toFixed(2)===parseFloat(this._Image.texture.source.w/this._Image.texture.source.h).toFixed(2),this._componentSrc.resolve&&this._componentSrc.resolve(),this.signal("imageLoaded");}},{key:"_rejectLoading",value:function _rejectLoading(t){this._componentSrc.reject&&this._componentSrc.reject(t);}},{key:"_update",value:(l=_asyncToGenerator(_regeneratorRuntime().mark((function _callee9(){return _regeneratorRuntime().wrap((function _callee9$(t){for(;;)switch(t.prev=t.next){case 0:return this._updateRadius(),this._updateGradient(),t.next=4,this._updateImage();case 4:if(this._updateFillColor(),this._updateForegroundImage(),this.src){t.next=9;break}return this._showComponent(),t.abrupt("return");case 9:return t.prev=9,t.next=12,this._componentSrc.complete;case 12:return t.next=14,this._updateCenterImage();case 14:this._updateBlur(),this._showComponent(),this._updateScale(),t.next=22;break;case 19:t.prev=19,t.t0=t.catch(9),this._handleImageLoadError();case 22:void 0===this.shouldSmooth&&(this.shouldSmooth=!0);case 23:case"end":return t.stop()}}),_callee9,this,[[9,19]])}))),function _update(){return l.apply(this,arguments)})},{key:"_updateScale",value:function _updateScale(){if(this.shouldScale){var t;switch(_typeof(this.style.imageScale)){case"function":t=this.style.imageScale(this.w);break;case"number":t=this.style.imageScale;break;default:t=1;}this._Image.smooth={pivotX:this.style.imageScalePivotX,pivotY:this.style.imageScalePivotY,scale:[t,this._Image.scale<t?this.style.animationImageScaleEntrance:this.style.animationImageScaleExit]};}else {this._Image.smooth={scale:[1,this.style.animationImageScaleExit]};}}},{key:"_handleImageLoadError",value:function _handleImageLoadError(){this.src!==this.fallbackSrc&&(I.error("Image ".concat(this._src," failed to load")),this.fallbackSrc&&this.fallbackSrc!==this.src&&(this.src=this.fallbackSrc));}},{key:"_showComponent",value:function _showComponent(){this.smooth={alpha:[1,this.style.animationComponentEntrance]};}},{key:"_updateForegroundImage",value:(a=_asyncToGenerator(_regeneratorRuntime().mark((function _callee10(){var t,i=this;return _regeneratorRuntime().wrap((function _callee10$(o){for(;;)switch(o.prev=o.next){case 0:if(this._foregroundSrc){o.next=3;break}return this._ForegroundImage&&this.patch({ForegroundImage:void 0}),o.abrupt("return");case 3:t={mount:.5,x:this.w/2,y:this.h/2,zIndex:this.core.findZContext().zIndex+this.style.zIndexSet.foreground,texture:{type:ot,src:this._foregroundSrc,hasAlpha:!0}},this.foregroundWidth&&this.foregroundHeight?(t.h=this.foregroundHeight,t.w=this.foregroundWidth,this.patch({ForegroundImage:t})):(this.foregroundWidth||this.foregroundHeight)&&(this.patch({ForegroundImage:_objectSpread(_objectSpread({},t),{},{alpha:.001})}),this._ForegroundImage.once("txLoaded",(function(){var t=i._ForegroundImage.texture.getRenderWidth(),o=i._ForegroundImage.texture.getRenderHeight();i._ForegroundImage.patch({alpha:1,w:i.foregroundHeight?i.foregroundHeight*(t/o):i.foregroundWidth,h:i.foregroundWidth?i.foregroundWidth*(o/t):i.foregroundHeight});}))),this.patch({ForegroundImage:t});case 6:case"end":return o.stop()}}),_callee10,this)}))),function _updateForegroundImage(){return a.apply(this,arguments)})},{key:"_updateBlur",value:function _updateBlur(){var i=this;(!this._shouldBlur||this._Image&&this._Image.texture&&this._Image.texture.src===this.fallbackSrc)&&this._Blur?this.shouldSmooth?(this._Blur._getTransition("alpha").once("finish",(function(){i.patch({Blur:void 0});})),this._Blur.smooth={alpha:[0,this.style.animationBlurExit]}):this.patch({Blur:void 0}):!this._srcFailed&&this._shouldBlur&&(this.patch({Blur:{alpha:!this._Blur&&this.shouldSmooth?.001:1,amount:this.style.blur,zIndex:this.core.findZContext().zIndex+this.style.zIndexSet.blur,content:{Image:{h:this.h,texture:this._Image.getTexture(),w:this.w}},h:this.h,rtt:!0,type:t.components.FastBlurComponent,w:this.w}}),this._Blur.alpha<1&&(this._Blur.smooth={alpha:[1,this.style.animationBlurEntrance]}));}},{key:"_updateCenterImage",value:function _updateCenterImage(){"contain"===this.format?this._updateFormatContain():"circle"===this.format||"square"===this.format?this._updateFormatSquareCircle():this._CenterImage&&this.patch({CenterImage:void 0});}},{key:"_updateFormatContain",value:(r=_asyncToGenerator(_regeneratorRuntime().mark((function _callee11(){var t,i,o,r,a;return _regeneratorRuntime().wrap((function _callee11$(l){for(;;)switch(l.prev=l.next){case 0:if(!(this._CenterImage&&this._CenterImage.mode!==this.format||this.src===this.fallbackSrc||this._aspectRatioEqual)){l.next=5;break}if(this.patch({CenterImage:void 0}),this.src!==this.fallbackSrc&&!this._aspectRatioEqual){l.next=5;break}return this._Image.alpha=1,l.abrupt("return");case 5:return o=Math.abs(this._Image.texture.source.w/this._Image.texture.source.h),r=Math.abs(this._Image.texture.source.h/this._Image.texture.source.w),this._Image.texture.source.w<this._Image.texture.source.h?this.h*o<this.w?(t=this.h*o,i=this.h):(t=this.w,i=this.w*r):this._Image.texture.source.w>this._Image.texture.source.h?this.w*r<this.h?(t=this.w,i=this.w*r):(t=this.h*o,i=this.h):(t=Math.min(this.w,this.h),i=t),l.next=10,this._processedImageSrc;case 10:a=l.sent,this.patch({CenterImage:{format:this.format,mount:.5,w:t,h:i,x:this.w/2,y:this.h/2,zIndex:this.core.findZContext().zIndex+this.style.zIndexSet.centerImage,texture:{src:a,resizeMode:{h:i,type:"cover",w:t},type:ot}}});case 12:case"end":return l.stop()}}),_callee11,this)}))),function _updateFormatContain(){return r.apply(this,arguments)})},{key:"_updateFormatSquareCircle",value:function _updateFormatSquareCircle(){if(!(this._CenterImage&&this._CenterImage.mode!==this.format||this.src===this.fallbackSrc)||(this.patch({CenterImage:void 0}),this.src!==this.fallbackSrc)){var i=Math.min(this.w,this.h)-2*this.style.padding;this.patch({CenterImage:{format:this.format,h:i,shader:{radius:"circle"===this.format?i/2:this.style.centerImageRadius,type:t.shaders.RoundedRectangle},w:i,zIndex:this.core.findZContext().zIndex+this.style.zIndexSet.centerImage,Image:{h:i,mount:.5,rtt:!0,w:i,x:this.w/2,y:this.h/2,texture:{src:this._Image.texture.src,resizeMode:{h:i,type:"cover",w:i},type:ot}}}});}}},{key:"_updateGradient",value:function _updateGradient(){var t=this;this.gradient?this._createGradient():this._Gradient&&(this.shouldSmooth?(this._Gradient._getTransition("alpha").once("finish",(function(){var i=t._Gradient&&t._Gradient._getTransition("alpha");!t.gradient&&i&&1===i.p&&t.patch({Gradient:void 0});})),this._Gradient.patch(this._gradientPatch),this._Gradient.smooth={alpha:[0,this.style.animationGradientExit]}):this.patch({Gradient:void 0}));}},{key:"_createGradient",value:function _createGradient(){this.patch({Gradient:this._gradientPatch}),this.shouldSmooth&&this.applySmooth(this._Gradient,{alpha:[1,this.style.animationGradientEntrance]});}},{key:"_updateImage",value:(o=_asyncToGenerator(_regeneratorRuntime().mark((function _callee12(){var t;return _regeneratorRuntime().wrap((function _callee12$(i){for(;;)switch(i.prev=i.next){case 0:if(this._aspectRatioEqual=!1,this._processedImageSrc){i.next=4;break}return this._Image&&(this._Image.texture=void 0),i.abrupt("return");case 4:return i.next=6,this._processedImageSrc;case 6:t=i.sent,this._Image.patch({alpha:this.src!==this.fallbackSrc&&(this._blur||this._hasCenterImage)?.001:1,h:this.h,texture:{type:ot,src:t,resizeMode:{type:"cover",w:this.w,h:this.h}},w:this.w,zIndex:this.core.findZContext().zIndex+this.style.zIndexSet.image});case 8:case"end":return i.stop()}}),_callee12,this)}))),function _updateImage(){return o.apply(this,arguments)})},{key:"_updateFillColor",value:function _updateFillColor(){this.fill?this.patch({FillColor:{rect:!0,w:this.w,h:this.h,color:this.style.fillColor,zIndex:5}}):this.patch({FillColor:void 0});}},{key:"_updateRadius",value:function _updateRadius(){this.patch(this.style.radius?{shader:{type:t.shaders.RoundedRectangle,radius:this.style.radius}}:{shader:void 0});}}],[{key:"__componentName",get:function get(){return "Artwork"}},{key:"__themeStyle",get:function get(){return it}},{key:"properties",get:function get(){return ["blur","fallbackSrc","foregroundHeight","foregroundSrc","foregroundWidth","gradient","format","src","fill","shouldScale","srcCallback","srcCallbackAspectRatios"]}},{key:"tags",get:function get(){return ["Blur","CenterImage","FillColor","ForegroundImage","Gradient","Image","Item"]}},{key:"aliasProperties",get:function get(){return [{prev:"foregroundH",curr:"foregroundHeight"},{prev:"foregroundW",curr:"foregroundWidth"}]}},{key:"_template",value:function _template(){return {rtt:!0,Image:{}}}}]),Artwork}(),at=Object.freeze({__proto__:null,tone:function tone$o(t){return {neutral:{color:t.color.fillNeutral},inverse:{color:t.color.fillInverse},brand:{color:t.color.fillBrand}}}}),st=function(i){_inherits(Icon,tt);var o=_createSuper(Icon);function Icon(){return _classCallCheck(this,Icon),o.apply(this,arguments)}return _createClass(Icon,[{key:"_init",value:function _init(){var t=this;this.on("txLoaded",(function(){t.fixed||t._notify.bind(t)();})),this.on("txError",this._handleTxtError.bind(this));}},{key:"_getColor",value:function _getColor(){return this._color||this.style.color}},{key:"_notify",value:function _notify(){this.w=this.finalW,this.h=this.finalH,this.signal("itemChanged",this),this.fireAncestors("$itemChanged");}},{key:"_handleTxtError",value:function _handleTxtError(){I.error("Unable to load icon ".concat(this._icon)),this._icon=null,this.texture=null;}},{key:"_update",value:function _update(){this._icon?this.patch(this._iconPatch):this.texture=null;}},{key:"_iconPatch",get:function get(){var i,o=_slicedToArray([/^<svg.*<\/svg>$/,/\.svg$/].map((function(t){return RegExp.prototype.test.bind(t)})),2),r=o[0],a=o[1],l=r(this.icon),c=a(this.icon);i=l?t.Tools.getSvgTexture("data:image/svg+xml,".concat(encodeURIComponent(this.icon)),this.w,this.h):c?t.Tools.getSvgTexture(this.icon,this.w,this.h):{type:ot,w:this.w,h:this.h,src:this.icon};var u=getValidColor(this._color||this.style.color);return _objectSpread({texture:i,shader:this.radius||this.style.radius?{radius:this.radius||this.style.radius,type:t.shaders.RoundedRectangle}:void 0},u?{colorUl:u,colorUr:u,colorBl:u,colorBr:u}:{})}}],[{key:"__componentName",get:function get(){return "Icon"}},{key:"__themeStyle",get:function get(){return at}},{key:"properties",get:function get(){return ["icon","fixed","color"]}}]),Icon}(),lt=Object.freeze({__proto__:null,base:function base$P(t){return {contentSpacing:t.spacer.xs,offsetY:1,paddingX:t.spacer.md,paddingY:t.spacer.xs,radius:t.radius.sm,strokeWidth:t.stroke.sm,textStyle:_objectSpread(_objectSpread({},t.typography.tag1),{},{textAlign:"center"})}},tone:function tone$n(t){return {neutral:{backgroundColor:t.color.fillInverseSecondary,iconColor:t.color.textNeutral,textStyle:{textColor:t.color.textNeutral},strokeColor:t.color.strokeNeutralSecondary},inverse:{backgroundColor:t.color.fillNeutralSecondary,iconColor:t.color.textInverse,textStyle:{textColor:t.color.textInverse},strokeColor:t.color.strokeInverseSecondary},brand:{backgroundColor:t.color.fillBrand,iconColor:t.color.textNeutral,textStyle:{textColor:t.color.textNeutral},strokeColor:t.color.strokeInverseSecondary}}}}),ct=function(i){_inherits(Badge,tt);var o=_createSuper(Badge);function Badge(){return _classCallCheck(this,Badge),o.apply(this,arguments)}return _createClass(Badge,[{key:"_init",value:function _init(){this._Text.on("txLoaded",this._updateLayout.bind(this)),_get(_getPrototypeOf(Badge.prototype),"_init",this).call(this);}},{key:"_update",value:function _update(){this._updateText(),this._updateIcon(),this._updateLayout(),this._updateVisibility();}},{key:"_updateVisibility",value:function _updateVisibility(){this.alpha=this.title||this.icon?1:0;}},{key:"_updateLayout",value:function _updateLayout(){this._updateWidth(),this._updateBackground(),this._updatePositions(),this.signal("loadedBadge",this);}},{key:"_updateBackground",value:function _updateBackground(){var i=Math.max(this._Text.renderHeight,this._Icon.h)+2*this.style.paddingY;this.patch({h:i,texture:t.Tools.getRoundRect(this.w,i,this.style.radius,this.style.strokeWidth,this.style.strokeColor,!0,this.style.backgroundColor)});}},{key:"_updateText",value:function _updateText(){this._Text&&this._Text.patch({text:_objectSpread(_objectSpread({},this.style.textStyle),{},{text:this.title||""})});}},{key:"_updateIcon",value:function _updateIcon(){this._Icon.patch({icon:this.icon,w:this.iconWidth,h:this.iconHeight,style:{color:getHexColor(this.style.iconColor)}});}},{key:"_updateWidth",value:function _updateWidth(){var t=0;this.title&&this.icon?t=this._Text.renderWidth+this._Icon.finalW+this.style.contentSpacing+2*this.style.paddingX:this.title?t=this._Text.renderWidth+2*this.style.paddingX:this.icon&&(t=this._Icon.finalW+2*this.style.paddingX),this.w=t;}},{key:"_updatePositions",value:function _updatePositions(){this._Icon.y=this.h/2,"left"===this.iconAlign&&this.title&&this.icon?(this._Icon.x=this.style.paddingX,this._Text.x=this._Icon.x+this._Icon.finalW+this.style.contentSpacing):"right"===this.iconAlign&&this.title&&this.icon?(this._Text.x=this.style.paddingX,this._Icon.x=this._Text.x+this._Text.renderWidth+this.style.contentSpacing):(this._Text.x=this.style.paddingX,this._Icon.x=this.style.paddingX),this._Text.y=this._h/2+this.style.offsetY;}},{key:"_getIconHeight",value:function _getIconHeight(){return this.icon?!this._Icon.finalH&&this._Text?this._Text.text.lineHeight:this._Icon.finalH:0}},{key:"announce",get:function get(){return this._announce||this.title},set:function set(t){_set(_getPrototypeOf(Badge.prototype),"announce",t,this,!0);}}],[{key:"_template",value:function _template(){return {Text:{mountY:.5},Icon:{type:st,mountY:.5,signals:{itemChanged:"_updateLayout"}}}}},{key:"__componentName",get:function get(){return "Badge"}},{key:"__themeStyle",get:function get(){return lt}},{key:"properties",get:function get(){return ["title","icon","iconAlign","iconWidth","iconHeight"]}},{key:"tags",get:function get(){return ["Background","Text","Icon"]}}]),Badge}(),ut=Object.freeze({__proto__:null,base:function base$O(t){return {width:0,justify:"center",minWidth:getWidthByColumnSpan(t,3),paddingX:t.spacer.xxxl,paddingXNoTitle:t.spacer.xl,paddingY:t.spacer.xl,radius:t.radius.sm,contentSpacing:t.spacer.md,itemSpacing:t.spacer.md,textStyle:_objectSpread(_objectSpread({},t.typography.button1),{},{maxLines:1,textColor:t.color.textNeutral}),contentColor:t.color.fillNeutral}},mode:function mode$g(t){return {focused:{textStyle:{textColor:t.color.textInverse},contentColor:t.color.fillInverse,tone:{inverse:{textStyle:{textColor:t.color.textNeutral},contentColor:t.color.fillNeutral},brand:{contentColor:t.color.fillNeutral}}},disabled:{textStyle:{textColor:t.color.textNeutralDisabled},contentColor:t.color.fillNeutralDisabled}}}}),ht=function(t){_inherits(FocusManager,tt);var i=_createSuper(FocusManager);function FocusManager(){return _classCallCheck(this,FocusManager),i.apply(this,arguments)}return _createClass(FocusManager,[{key:"_construct",value:function _construct(){_get(_getPrototypeOf(FocusManager.prototype),"_construct",this).call(this),this._selectedIndex=0,this._itemPosX=0,this._itemPosY=0,this.direction=this.direction||"row";}},{key:"_init",value:function _init(){this._checkSkipFocus();}},{key:"Items",get:function get(){return this.tag("Items")||this.patch({Items:{}}),this._Items}},{key:"_setDirection",value:function _setDirection(t){var i={none:"None",column:"Column",row:"Row"}[t];return i&&this._setState(i),t}},{key:"_getItems",value:function _getItems(){return this._Items.children}},{key:"items",get:function get(){return this.Items.children},set:function set(t){this._resetItems(),this._selectedIndex=0,this.appendItems(t),this._checkSkipFocus();}},{key:"itemPosX",get:function get(){return this._itemPosX},set:function set(t){this.Items.x=this._itemPosX=t;}},{key:"itemPosY",get:function get(){return this._itemPosY},set:function set(t){this.Items.y=this._itemPosY=t;}},{key:"_resetItems",value:function _resetItems(){this.Items.childList.clear(),this.Items.patch({w:0,h:0,x:this.itemPosX,y:this.itemPosY});}},{key:"_appendLazyItem",value:function _appendLazyItem(t){this.appendItems([t]);}},{key:"appendItems",value:function appendItems(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];this.Items.childList.a(t),this._refocus();}},{key:"appendItemsAt",value:function appendItemsAt(){var t=this,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],o=arguments.length>1?arguments[1]:void 0,r=Number.isInteger(o)?o:this.Items.children.length;this.shouldSmooth=!1,this._lastAppendedIdx=r,i.forEach((function(i,o){t.Items.childList.addAt(_objectSpread(_objectSpread({},i),{},{parentFocus:t.hasFocus()}),r+o);})),this.selectedIndex>=this._lastAppendedIdx&&(this._selectedIndex+=i.length),this.requestUpdate(),this._refocus();}},{key:"prependItems",value:function prependItems(t){this.appendItemsAt(t,0);}},{key:"removeItemAt",value:function removeItemAt(t){this.shouldSmooth=!1,this.Items.childList.removeAt(t),(this.selectedIndex>t||this.selectedIndex===this.Items.children.length)&&this._selectedIndex--,this.requestUpdate(),this._refocus();}},{key:"_checkSkipFocus",value:function _checkSkipFocus(){var t=this.Items.children[this.selectedIndex];t&&t.skipFocus&&this.selectNext();}},{key:"selected",get:function get(){return this.Items.children[this.selectedIndex]}},{key:"selectedIndex",get:function get(){return this._selectedIndex},set:function set(t){this.prevSelected=this.selected,this.Items.children.length&&this.Items.children[t]&&this.Items.children[t].skipFocus||(t!==this._selectedIndex&&(this._selectedIndex=t),this.selected&&this._selectedChange(this.selected,this.prevSelected),this._refocus());}},{key:"_selectedChange",value:function _selectedChange(t,i){this._render(t,i),this.signal("selectedChange",t,i);}},{key:"_render",value:function _render(){}},{key:"_firstFocusableIndex",value:function _firstFocusableIndex(){return this.items.length?this.items.reduce((function(t,i,o){return i.skipFocus||t.push(_objectSpread(_objectSpread({},i),{},{originalIdx:o})),t}),[]).shift().originalIdx:0}},{key:"_lastFocusableIndex",value:function _lastFocusableIndex(){return this.items.length?this.items.reduce((function(t,i,o){return i.skipFocus||t.push(_objectSpread(_objectSpread({},i),{},{originalIdx:o})),t}),[]).pop().originalIdx:0}},{key:"selectPrevious",value:function selectPrevious(){this.shouldSmooth=!0;var t=!!(this.items||[]).filter((function(t){return !t.skipFocus})).length;if(0===this.selectedIndex&&!this.wrapSelected||!t)return !1;var i=this.items.map((function(t){return !!t.skipFocus})).lastIndexOf(!1,this._selectedIndex-1);return i>-1?(this.selectedIndex=i,!0):!!this.wrapSelected&&(this.selectedIndex=this._lastFocusableIndex(),!0)}},{key:"selectNext",value:function selectNext(){var t=this;this.shouldSmooth=!0,this._lazyItems&&this._lazyItems.length&&delayForAnimation((function(){t._appendLazyItem(t._lazyItems.splice(0,1)[0]);}));var i=!!(this.items||[]).filter((function(t){return !t.skipFocus})).length;if(this.selectedIndex===this.Items.children.length-1&&!this.wrapSelected||!i)return !1;var o=this.items.findIndex((function(i,o){return !i.skipFocus&&o>t._selectedIndex}));return o>-1?(this.selectedIndex=o,!0):!!this.wrapSelected&&(this.selectedIndex=this._firstFocusableIndex(),!0)}},{key:"_getIndexOfItemNear",value:function _getIndexOfItemNear(t,i){var o=i.selected;if(!(t&&t.items&&t.items.length&&o))return 0;var r=_slicedToArray(o.core.getAbsoluteCoords(0,0),2),a=r[0],l=r[1],c=[a+o.w/2,l+o.h/2],u=t.items.map((function(t,i){return {index:i,distance:t.skipFocus?null:(o=c,r=t,a=_slicedToArray(o,2),l=a[0],u=a[1],h=_slicedToArray(r.core?r.core.getAbsoluteCoords(0,0):[0,0],2),d=h[0],p=h[1],_=getEuclideanDistance(l,u,d,p),g=getEuclideanDistance(l,u,d+r.w/2,p+r.h/2),m=getEuclideanDistance(l,u,d+r.w,p+r.h),Math.min(_,g,m))};var o,r,a,l,u,h,d,p,_,g,m;})).filter((function(t){return null!==t.distance})).sort((function(t,i){return t.distance-i.distance}));return u[0].index}},{key:"_focus",value:function _focus(){_get(_getPrototypeOf(FocusManager.prototype),"_focus",this).call(this),this.items.forEach((function(t){return t.parentFocus=!0}));}},{key:"_unfocus",value:function _unfocus(){_get(_getPrototypeOf(FocusManager.prototype),"_unfocus",this).call(this),this.items.forEach((function(t){return t.parentFocus=!1}));}},{key:"_updateShouldSmooth",value:function _updateShouldSmooth(){}},{key:"_getFocused",value:function _getFocused(){var t=this.selected;if(t){if(t.focusRef)return t.tag(t.focusRef);if(t.cparent)return t}return this}},{key:"_updateTransitionTarget",value:function _updateTransitionTarget(t,i,o){t&&t.transition(i)&&!t.transition(i).isRunning()&&t.transition(i).targetValue!==o&&t.transition(i).updateTargetValue(o);}},{key:"onScreenItems",get:function get(){var t=this;return this.Items.children.filter((function(i){return t._isOnScreen(i)}))}},{key:"_isOnScreenCompletely",value:function _isOnScreenCompletely(t){return t.isFullyOnScreen?t.isFullyOnScreen():isComponentOnScreen(t)}},{key:"fullyOnScreenItems",get:function get(){var t=this;return this.Items.children.reduce((function(i,o){return o instanceof FocusManager?[].concat(_toConsumableArray(i),_toConsumableArray(o.Items.children.filter(t._isOnScreenCompletely))):t._isOnScreenCompletely(o)?[].concat(_toConsumableArray(i),[o]):i}),[])}},{key:"_isOnScreen",value:function _isOnScreen(){throw new Error("'_isOnScreen' must be implemented by 'row'/'column'")}},{key:"_isComponentHorizontallyVisible",value:function _isComponentHorizontallyVisible(t){var i=a(t);if(!Number.isFinite(i))return !1;var o=this.getTransitionXTargetValue(),r=this.core.renderContext.px+o+i,l=_slicedToArray(this.core._scissor||[],3),c=l[0],u=void 0===c?null:c,h=l[2],d=void 0===h?null:h,p=this.stage.w/this.stage.getRenderPrecision(),_=t.w;if(!(r>=0)||!(r+_<=p))return !1;var g=!0,m=!0;return Number.isFinite(u)&&(g=Math.round(r+_)>=Math.round(u),m=Math.round(r)<=Math.round(u+d)),g&&m}},{key:"_isComponentVerticallyVisible",value:function _isComponentVerticallyVisible(t){var i=l(t);if(!Number.isFinite(i))return !1;var o=this.getTransitionYTargetValue(),r=this.core.renderContext.py,a=_slicedToArray(this.core._scissor||[],4),c=a[1],u=void 0===c?null:c,h=a[3],d=void 0===h?null:h,p=t.h,_=r+o+i,g=this.stage.h/this.stage.getRenderPrecision();if(!(_+p>=0)||!(_<=g))return !1;var m=!0,v=!0;return Number.isFinite(u)&&(m=Math.round(_+p)>Math.round(u),v=Math.round(_)<Math.round(u+d)),m&&v}},{key:"getTransitionXTargetValue",value:function getTransitionXTargetValue(){return this.Items.transition("x").targetValue}},{key:"getTransitionYTargetValue",value:function getTransitionYTargetValue(){return this.Items.transition("y").targetValue}}],[{key:"__componentName",get:function get(){return "FocusManager"}},{key:"tags",get:function get(){return ["Items"]}},{key:"properties",get:function get(){return ["direction","wrapSelected"]}},{key:"_states",value:function _states(){return [function(t){_inherits(None,t);var i=_createSuper(None);function None(){return _classCallCheck(this,None),i.apply(this,arguments)}return _createClass(None)}(this),function(t){_inherits(Row,t);var i=_createSuper(Row);function Row(){return _classCallCheck(this,Row),i.apply(this,arguments)}return _createClass(Row,[{key:"_handleLeft",value:function _handleLeft(){return "function"==typeof this.onLeft?this.onLeft(this):this.selectPrevious()}},{key:"_handleRight",value:function _handleRight(){return "function"==typeof this.onRight?this.onRight(this):this.selectNext()}}]),Row}(this),function(t){_inherits(Column,t);var i=_createSuper(Column);function Column(){return _classCallCheck(this,Column),i.apply(this,arguments)}return _createClass(Column,[{key:"_handleUp",value:function _handleUp(){return "function"==typeof this.onUp?this.onUp(this):this.selectPrevious()}},{key:"_handleDown",value:function _handleDown(){return "function"==typeof this.onDown?this.onDown(this):this.selectNext()}}]),Column}(this)]}}]),FocusManager}(),dt=Object.freeze({__proto__:null,base:function base$N(t){return {alwaysScroll:!1,itemSpacing:t.layout.gutterX,itemTransition:t.animation.utility,neverScroll:!1,scrollIndex:0}}}),pt={row:{axis:"x",crossAxis:"y",lengthDimension:"w",crossDimension:"h",innerLengthDimension:"innerW",innerCrossDimension:"innerH"},column:{axis:"y",crossAxis:"x",lengthDimension:"h",crossDimension:"w",innerLengthDimension:"innerH",innerCrossDimension:"innerW"}},_t=function(t){_inherits(NavigationManager,ht);var i=_createSuper(NavigationManager);function NavigationManager(){return _classCallCheck(this,NavigationManager),i.apply(this,arguments)}return _createClass(NavigationManager,[{key:"_construct",value:function _construct(){_get(_getPrototypeOf(NavigationManager.prototype),"_construct",this).call(this),this.shouldSmooth=!1,this._lazyUpCountBuffer=2;}},{key:"_init",value:function _init(){var t=this._directionPropNames,i=t.lengthDimension,o=t.axis;this[i]||this._initComponentSize(),this.Items.transition(o).on("finish",this._transitionListener.bind(this)),_get(_getPrototypeOf(NavigationManager.prototype),"_init",this).call(this);}},{key:"_initComponentSize",value:function _initComponentSize(){var t=this._directionPropNames.lengthDimension;if((null==this?void 0:this.parent.parent)instanceof NavigationManager&&null!=this&&this.parent.parent[t])this[t]=this.parent.parent[t];else {for(var i=this.parent;i&&!i[t];)i=i.parent;this[t]=i&&i[t]||this.stage.h/this.stage.getRenderPrecision();}}},{key:"_update",value:function _update(){this._updateLayout();}},{key:"_updateLayout",value:function _updateLayout(){for(var t,i=this._directionPropNames,o=i.lengthDimension,r=i.crossDimension,a=i.crossAxis,l=i.innerCrossDimension,c=0,u=0,h=0,d=[],p=[],_=0;_<this.Items.children.length;_++){var g=this.Items.children[_],m=this._calcCrossDimensionSize(g);if(!this.waitForDimensions||m&&g[o]||p.push(g),u=max(u,m),h=max(h,g[l]||0),this.updatePositionOnAxis(g,c),c+=g[o],_<this.Items.children.length-1){var v=g.extraItemSpacing||0;c+=this.style.itemSpacing+v;}if(g.centerInParent){var S=g.Items&&g.Items[r]||g[r];(S<this[r]||!this.Items[l])&&d.push({childIdx:_,childCrossDimensionSize:S});}else g[a]=0;}var k=this.Items[r]!==u||this.Items[o]!==c;this.waitForDimensions&&(this.Items.alpha=p.length?.001:1),this.Items.patch((_defineProperty$1(t={},r,u),_defineProperty$1(t,l,h||u),_defineProperty$1(t,o,c+(this._totalAddedWidth||0)),t)),this._autoResize(),this._centerItemsInParent(d),this._updateLastScrollIndex(),k&&(this._performRender(),this.fireAncestors("$itemChanged"));}},{key:"_centerItemsInParent",value:function _centerItemsInParent(t){var i=this,o=this._directionPropNames,r=o.crossDimension,a=o.crossAxis,l=o.innerCrossDimension;if(t.length){var c=[this.Items[r],this.Items[l]];1===this.children.length&&c.push(this[r]);var u=Math.max.apply(Math,c);t.forEach((function(t){var o=t.childIdx,r=t.childCrossDimensionSize;i.Items.children[o][a]=(u-r)/2;}));}}},{key:"_autoResize",value:function _autoResize(){this.autoResizeWidth&&(this.w=this.Items.w),this.autoResizeHeight&&(this.h=this.Items.h);}},{key:"_updateLastScrollIndex",value:function _updateLastScrollIndex(){var t=this._directionPropNames,i=t.axis,o=t.lengthDimension;if(this.alwaysScroll)this._lastScrollIndex=this.Items.children.length-1;else {var r=(this.Items.children[this.scrollIndex]||_defineProperty$1({},i,0))[i],a=this.Items.childList.last,l=a?this._calcAxisPosition(a)+a[o]:0;if(l>this[o]){for(var c,u=this.Items.children.length-1;u>=0;u--){if(!(this._calcAxisPosition(this.Items.children[u])+this[o]-r>l))break;c=u;}this._lastScrollIndex=c;}else this._lastScrollIndex>this.items.length&&(this._lastScrollIndex=this.items.length-1);}}},{key:"_calcCrossDimensionSize",value:function _calcCrossDimensionSize(t){return this._isRow?function getH(t){return getDimension("h",t)||t.renderHeight}(t):this._isColumn?function getW(t){return getDimension("w",t)||t.renderWidth}(t):void 0}},{key:"_calcAxisPosition",value:function _calcAxisPosition(t){return this._isRow?a(t):this._isColumn?l(t):void 0}},{key:"_transitionListener",value:function _transitionListener(){this.shouldSmooth=!1,this.transitionDone();}},{key:"_withAfterUpdate",value:function _withAfterUpdate(t){return watchForUpdates({element:t,watchProps:[this._directionPropNames.crossAxis,"w","h","innerW","innerH"],sideEffect:this.queueRequestUpdate.bind(this)})}},{key:"_performRender",value:function _performRender(){}},{key:"_appendItem",value:function _appendItem(t){this.shouldSmooth=!1,t.parentFocus=this.hasFocus(),t=this.Items.childList.a(t);var i=this._directionPropNames.crossDimension;if(!t[i]){var o=this._isRow?this.renderHeight:this.renderWidth;t[i]=t[i]||o;}t=this._withAfterUpdate(t);}},{key:"_appendLazyItem",value:function _appendLazyItem(t){this._appendItem(t),this.queueRequestUpdate(),this._refocus();}},{key:"$itemChanged",value:function $itemChanged(){this.queueRequestUpdate();}},{key:"appendItems",value:function appendItems(){var t,i=this,o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];(this.shouldSmooth=!1,this._lazyItems)?(t=this._lazyItems).push.apply(t,_toConsumableArray(o)):(o.length>this.lazyUpCount+this.lazyUpCountBuffer&&(this._lazyItems=o.splice(this.lazyUpCount+this.lazyUpCountBuffer)),o.forEach((function(t){return i._appendItem(t)})),this.queueRequestUpdate(),this._refocus());}},{key:"appendItemsAt",value:function appendItemsAt(){var t=this,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],o=arguments.length>1?arguments[1]:void 0;if(this._lazyItems&&o>this.items.length-1){var r,a=o-this.items.length;(r=this._lazyItems).splice.apply(r,[a,0].concat(_toConsumableArray(i)));}else {var l=this._directionPropNames,c=l.crossDimension,u=l.lengthDimension,h=l.innerLengthDimension,d=Number.isInteger(o)?o:this.Items.children.length;this.shouldSmooth=!1,this._lastAppendedIdx=d,this._totalAddedLength=0,i.forEach((function(i,o){var r=_objectSpread(_objectSpread({},t._withAfterUpdate(i)),{},{parentFocus:t.hasFocus()});i[c]||(r[c]=i[c]||t.Items[c]),t.Items.childList.addAt(r,d+o);var a=i[u]||i[h]||0,l=i.extraItemSpacing||0;t._totalAddedLength+=a+t.style.itemSpacing+l;})),this.selectedIndex>=this._lastAppendedIdx&&(this._selectedPastAdded=!0,this._selectedIndex+=i.length),this.requestUpdate(),this._refocus();}}},{key:"updatePositionOnAxis",value:function updatePositionOnAxis(t,i){var o=this._directionPropNames.axis;this.applySmooth(t,_defineProperty$1({},o,i),_defineProperty$1({},o,[i,this.style.itemTransition])),this.shouldSmooth||this._updateTransitionTarget(t,o,i);}},{key:"scrollTo",value:function scrollTo(t){var i=this,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100*this.style.itemTransition.duration;if(null!=t)if(0!==o)for(var r=0;r!==Math.abs(this.selectedIndex-t);r++)setTimeout((function(){i.selectedIndex>t?i.selectPrevious():i.selectNext();}),o*r);else this.selectedIndex=t;}},{key:"transitionDone",value:function transitionDone(){}},{key:"shouldScrollLeft",value:function shouldScrollLeft(){return this._isRow&&this._canScrollBack}},{key:"shouldScrollRight",value:function shouldScrollRight(){return this._isRow&&this._canScrollNext}},{key:"shouldScrollUp",value:function shouldScrollUp(){return this._isColumn&&this._canScrollBack}},{key:"shouldScrollDown",value:function shouldScrollDown(){return this._isColumn&&this._canScrollNext}},{key:"_directionPropNames",get:function get(){return pt[this.direction]}},{key:"_canScrollBack",get:function get(){var t=!1;return this._lastScrollIndex?(t=this.selectedIndex<this._lastScrollIndex,void 0!==this._prevLastScrollIndex&&this._prevLastScrollIndex!==this._lastScrollIndex&&(t=!0)):t=this.selectedIndex>=this.scrollIndex,(this._isRow?this._itemsX:this._itemsY)<0&&t}},{key:"_canScrollNext",get:function get(){var t,i=this._directionPropNames,o=i.axis,r=i.lengthDimension,a=this.Items.childList.last;return this._isRow&&(t=Math.abs(this._itemsX-this.w)),this._isColumn&&(t=Math.abs(this.itemPosY-this.h)),this.selectedIndex>this.scrollIndex&&t<a[o]+a[r]}},{key:"_isColumn",get:function get(){return "column"===this.direction}},{key:"_isRow",get:function get(){return "row"===this.direction}},{key:"_itemsX",get:function get(){return a(this.Items)}},{key:"_getAlwaysScroll",value:function _getAlwaysScroll(){return void 0!==this._alwaysScroll?this._alwaysScroll:this.style.alwaysScroll}},{key:"_getNeverScroll",value:function _getNeverScroll(){return !this.alwaysScroll&&(void 0!==this._neverScroll?this._neverScroll:this.style.neverScroll)}},{key:"_setScrollIndex",value:function _setScrollIndex(t){return t>=0?t:0}},{key:"_getScrollIndex",value:function _getScrollIndex(){return void 0!==this._scrollIndex?this._scrollIndex:this.style.scrollIndex}},{key:"isFullyOnScreen",value:function isFullyOnScreen(){var t,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=i.offsetX,r=void 0===o?0:o,a=i.offsetY,l=void 0===a?0:a,c=null===(t=this.parent)||void 0===t?void 0:t.parent;return c instanceof ht&&(r+=c.Items.transition("x").targetValue||0,l+=c.Items.transition("y").targetValue||0),_get(_getPrototypeOf(NavigationManager.prototype),"isFullyOnScreen",this).call(this,{offsetX:r,offsetY:l})}}],[{key:"__componentName",get:function get(){return "NavigationManager"}},{key:"__themeStyle",get:function get(){return dt}},{key:"properties",get:function get(){return [].concat(_toConsumableArray(_get(_getPrototypeOf(NavigationManager),"properties",this)),["alwaysScroll","neverScroll","scrollIndex","autoResizeWidth","autoResizeHeight","lazyUpCount","lazyUpCountBuffer","waitForDimensions"])}}]),NavigationManager}(),yt=Object.freeze({__proto__:null,base:function base$M(t){return {itemSpacing:t.layout.gutterX,scrollIndex:0,alwaysScroll:!1,neverScroll:!1,itemTransition:_objectSpread(_objectSpread({},t.animation.standardEntrance),{},{duration:t.animation.duration.fast})}}}),ft=function(t){_inherits(Row,_t);var i=_createSuper(Row);function Row(){return _classCallCheck(this,Row),i.apply(this,arguments)}return _createClass(Row,[{key:"_isOnScreenForScrolling",value:function _isOnScreenForScrolling(t){if(!t)return !1;var i=a(t);if(!Number.isFinite(i))return !1;var o=this.getTransitionXTargetValue(),r=this.core.renderContext.px,l=r+o+i;return t.transition("x")&&(l-=t.x-t.transition("x").targetValue),l>=r&&l+t.w<=r+this.w}},{key:"_shouldScroll",value:function _shouldScroll(){var t=this.Items.childList.getIndex(this.prevSelected);if(this.lazyScroll&&(this.selectedIndex<this.startLazyScrollIndex||this.selectedIndex>this.stopLazyScrollIndex||t<this.startLazyScrollIndex&&this.selectedIndex===this.startLazyScrollIndex||t>this.stopLazyScrollIndex&&this.selectedIndex===this.stopLazyScrollIndex))return !0;var i=this.alwaysScroll||this._selectedPastAdded;if(!i&&!this.neverScroll){var o=this._isOnScreenForScrolling(this.selected);if(this.lazyScroll)i=!o;else i=this.Items.childList.last&&(this.shouldScrollLeft()||this.shouldScrollRight()||!o);}return i}},{key:"_getPrependedOffset",value:function _getPrependedOffset(){return this._selectedPastAdded=!1,this.Items.x-this._totalAddedWidth}},{key:"_getLazyScrollX",value:function _getLazyScrollX(t){var i=this.Items.childList.getIndex(this.prevSelected);if(this._selectedPastAdded)return this._getPrependedOffset();if(this.selectedIndex<=this.startLazyScrollIndex)return this._getScrollX();if(this.selectedIndex>=this.stopLazyScrollIndex&&this.selectedIndex<i)return this.Items.x+(this.prevSelected.w+this.style.itemSpacing+(this.selected.extraItemSpacing||0));if(t&&this.selectedIndex>this.stopLazyScrollIndex)return -t.x+this.prevSelected.w+this.style.itemSpacing+(this.selected.extraItemSpacing||0);if(t){var o,r=this.Items.childList.getIndex(t),a=this.selected.x;if(-1===r)return;return r>this.selectedIndex?o=-a:r<this.selectedIndex&&(o=this.w-a-this.selected.w),o}return this._getScrollX()}},{key:"_getScrollX",value:function _getScrollX(){if(this._selectedPastAdded)return this._getPrependedOffset();var t,i=this.selectedIndex-this.scrollIndex;return (i=i<0?0:i)===this._firstFocusableIndex()&&(i=0),this.Items.children[i]&&(t=this.Items.children[i].transition("x")?-this.Items.children[i].transition("x").targetValue:-this.Items.children[i].x),t}},{key:"_render",value:function _render(t,i){var o;this.plinko&&i&&i.selected&&(t.selectedIndex=this._getIndexOfItemNear(t,i)),this._prevLastScrollIndex=this._lastScrollIndex,this.Items.children.length?this._shouldScroll()&&(o=this.lazyScroll&&i?this._getLazyScrollX(i):this._getScrollX()):o=this.itemPosX,void 0!==o&&this.updatePositionOnAxis(this.Items,o),this.onScreenEffect(this.onScreenItems);}},{key:"_performRender",value:function _performRender(){this._render(this.selected,this.prevSelected);}},{key:"_isOnScreen",value:function _isOnScreen(t){return !!t&&this._isComponentHorizontallyVisible(t)}},{key:"onScreenEffect",value:function onScreenEffect(){}},{key:"_totalAddedWidth",get:function get(){return this._totalAddedLength}},{key:"_getLazyScroll",value:function _getLazyScroll(){return !this.alwaysScroll&&(void 0!==this._lazyScroll?this._lazyScroll:this.style.lazyScroll)}},{key:"_getNeverScroll",value:function _getNeverScroll(){return !this.alwaysScroll&&!this.lazyScroll&&(void 0!==this._neverScroll?this._neverScroll:this.style.neverScroll)}}],[{key:"__componentName",get:function get(){return "Row"}},{key:"__themeStyle",get:function get(){return yt}},{key:"_template",value:function _template(){return _objectSpread(_objectSpread({},_get(_getPrototypeOf(Row),"_template",this).call(this)),{},{direction:"row"})}},{key:"properties",get:function get(){return [].concat(_toConsumableArray(_get(_getPrototypeOf(Row),"properties",this)),["lazyScroll","startLazyScrollIndex","stopLazyScrollIndex"])}}]),Row}(),gt=Object.freeze({__proto__:null,base:function base$L(t){return {backgroundColor:t.color.interactiveNeutral,radius:t.radius.md,animation:{}}},mode:function mode$f(t){return {focused:{backgroundColor:t.color.interactiveNeutralFocus,tone:{inverse:{backgroundColor:t.color.interactiveInverseFocus}}},disabled:{backgroundColor:t.color.fillNeutralDisabled}}},tone:function tone$m(t){return {inverse:{backgroundColor:t.color.interactiveInverse}}}}),mt=function(i){_inherits(Surface,tt);var o=_createSuper(Surface);function Surface(){return _classCallCheck(this,Surface),o.apply(this,arguments)}return _createClass(Surface,[{key:"innerH",get:function get(){return this.h}},{key:"innerW",get:function get(){return this.w}},{key:"_update",value:function _update(){this._updateLayout(),this._updateScale();}},{key:"_updateLayout",value:function _updateLayout(){this._Background.patch({texture:t.Tools.getRoundRect(this.innerW-2,this.innerH-2,this.style.radius,0,null,!0,this.style.backgroundColor)});}},{key:"_updateScale",value:function _updateScale(){var t=this._isFocusedMode?this.getFocusScale(this.w,this.h):this.getUnfocusScale(this.w,this.h);this.applySmooth(this,{scale:t},{scale:[t,this.style.animation]});}}],[{key:"_template",value:function _template(){return {Background:{}}}},{key:"__componentName",get:function get(){return "Surface"}},{key:"__themeStyle",get:function get(){return gt}},{key:"properties",get:function get(){return []}},{key:"tags",get:function get(){return ["Background"]}}]),Surface}(),vt=Object.freeze({__proto__:null,base:function base$K(t){return {offsetY:t.spacer.xxs,offsetX:0,textStyle:t.typography.body1}},tone:function tone$l(t){return {neutral:{textStyle:{textColor:t.color.fillNeutral}},inverse:{textStyle:{textColor:t.color.fillInverse}},brand:{textStyle:{textColor:t.color.fillBrand}}}}}),xt=Object.freeze({__proto__:null,base:function base$J(t){return {textY:0,iconWidth:t.spacer.xxl+t.spacer.xs,iconHeight:t.spacer.xxl+t.spacer.xs,contentSpacing:t.spacer.md,marginBottom:t.typography.body1.lineHeight/-10,textStyle:_objectSpread(_objectSpread({},t.typography.body1),{},{verticalAlign:"bottom"}),maxLines:1,justify:"flex-start"}}}),St=function isText(t){return "string"==typeof t||!!t.text},kt=function isIcon(t){return !!t.icon},bt=function(t){_inherits(InlineContent,tt);var i=_createSuper(InlineContent);function InlineContent(){return _classCallCheck(this,InlineContent),i.apply(this,arguments)}return _createClass(InlineContent,[{key:"_construct",value:function _construct(){_get(_getPrototypeOf(InlineContent.prototype),"_construct",this).call(this),this._maxLinesSuffix="..";}},{key:"_update",value:function _update(){this._updateContent(),this._waitForComponentLoad();}},{key:"_updateContent",value:function _updateContent(){var t=this;this.childList.clear(),this._shouldTruncate&&(this.alpha=.001),this._parsedContent&&this._parsedContent.length&&(this.patch({flex:{direction:"row",wrap:!!this.contentWrap,justifyContent:null!=this.justify?this.justify:this.style.justify}}),this._parsedContent.forEach((function(i,o){var r=o===t._parsedContent.length-1,a={flexItem:_objectSpread(_objectSpread({},t.contentProperties),{},{marginBottom:r?0:t._marginBottom,marginRight:r?0:t.contentProperties.marginRight||t.style.contentSpacing})};if(St(i)){var l=t._parsedContent[o+1];l&&St(l)&&(a.flexItem.marginRight=0),t.childList.a(t._createText(a,i));}else kt(i)?t.childList.a(t._createIcon(a,i)):!function isBadge(t){return !!t.badge}(i)?i.newline&&t.contentWrap&&t.childList.a({h:0,w:t.w}):t.childList.a(t._createBadge(a,i.badge));})));}},{key:"_waitForComponentLoad",value:function _waitForComponentLoad(){var t=this;this.children.length?Promise.all(this.children.map((function(i){return new Promise((function(o){0===i.h&&i.w===t.w?o():i.on("txLoaded",o);}))}))).finally((function(){return t._contentLoaded()})):(this.h=0,this._contentLoaded());}},{key:"_notifyAncestors",value:function _notifyAncestors(){this.fireAncestors("$loadedInlineContent",this),this.signal("loadedInlineContent",this.finalW,this.multiLineHeight);}},{key:"_contentLoaded",value:function _contentLoaded(){var t=this;this.children.length?setTimeout((function(){t.multiLineHeight=t.finalH,t.flex&&t.flex._layout&&t.flex._layout._lineLayouter&&t.flex._layout._lineLayouter._lines?(t.multiLineHeight=t.style.textStyle.lineHeight*t.flex._layout._lineLayouter._lines.length,t.h=t.multiLineHeight,t._shouldTruncate&&t._renderMaxLines(),t._notifyAncestors()):t._contentLoaded();}),10):this._notifyAncestors();}},{key:"_renderMaxLines",value:function _renderMaxLines(){var t=this,i=this._calcChildrenDimensions();this.childList.clear();var o=!1;i.forEach((function(r,a){if(!o){var l=i[a+1];if(l){var c=r.line===t.maxLines,u=c&&l.line>t.maxLines&&r.hasSpaceForSuffix,h=c&&r.hasSpaceForSuffix&&!l.hasSpaceForSuffix,d=!l||u||h;r.line<=t.maxLines&&(d&&a!==i.length-1?(t.childList.add(t._addSuffix(r)),o=!0):t.childList.add(r.component));}else t.childList.add(r.component);}})),this.alpha=1;}},{key:"_calcChildrenDimensions",value:function _calcChildrenDimensions(){var t=this,i=measureTextWidth(_objectSpread(_objectSpread({},this.style.textStyle),{},{text:this.maxLinesSuffix})),o=0,r=1;return this.children.reduce((function(a,l){var c,u,h,d=l;if(l.w==t.w&&0===l.h){r++,o=0;var p={type:"linebreak",component:d,content:u,line:r,hasSpaceForSuffix:!0};return a.push(p),a}St(l)?(c="text",u=l.text.text,h=l.texture.getRenderWidth()):kt(l)?(c="icon",h=l.w):"Badge"===l.constructor.__componentName&&(c="badge",h=l.w),o+=h,o+=l.flexItem.marginRight,Math.ceil(o)>=t.w&&(r++,o=h);var _=Math.ceil(o)+i<=t.w,g={type:c,component:d,content:u,line:r,hasSpaceForSuffix:_};return a.push(g),a}),[])}},{key:"_addSuffix",value:function _addSuffix(t){var i,o=t.type,r=t.component,a=t.content,l=-1*r.flexItem.marginRight;return "text"===o?i=this._createText({flexItem:this.contentProperties},"".concat(a.trim()).concat(this.maxLinesSuffix)):(this.childList.add(r),i=this._createText({flexItem:_objectSpread(_objectSpread({},this.contentProperties),{},{marginLeft:l})},this.maxLinesSuffix)),i}},{key:"_createIcon",value:function _createIcon(t,i){var o=(this.textHeight>this.style.textStyle.lineHeight?this.textHeight:this.style.textStyle.lineHeight)-this.style.iconHeight;return _objectSpread(_objectSpread({},t),{},{type:st,y:o,w:this.style.iconWidth,h:this.style.iconHeight,signals:{itemChanged:"_updateIconPosition"}},i)}},{key:"_createText",value:function _createText(t,i){var o="string"==typeof i.style?this.customStyleMappings[i.style]:i.style;return _objectSpread(_objectSpread({},t),{},{y:void 0!==this.textY?this.textY:this.style.textY,h:this.textHeight,text:_objectSpread(_objectSpread(_objectSpread({},this.style.textStyle),o),{},{text:i.text||i})})}},{key:"_createBadge",value:function _createBadge(t,i){return _objectSpread(_objectSpread(_objectSpread({},t),{},{y:this.badgeY||0},this.badgeProperties),{},{type:ct,title:i,signals:{loadedBadge:"_loadedBadge"}})}},{key:"_updateIconPosition",value:function _updateIconPosition(t){t.y=this.style.textStyle.lineHeight-t.h;}},{key:"_loadedBadge",value:function _loadedBadge(t){void 0===this.badgeY&&(t.y=this.style.textStyle.lineHeight-t.h);}},{key:"_formatSpaces",value:function _formatSpaces(t){var i=/(.+?\s+)/;return flatten((t||[]).reduce((function(t,o){var r=o;if(St(o)){if("object"===_typeof(o)){var a=o.text.split(i).map((function(t){return t&&_objectSpread(_objectSpread({},o),{},{text:t})}));return t.push.apply(t,_toConsumableArray(a)),t}r=o.split(i);}return t.push(r),t}),[])).map((function(t,i,o){return " "!==t&&(" "===o[i+1]?t+" ":t)})).filter(Boolean)}},{key:"_setContent",value:function _setContent(t){if(t!==this._content){this._content=t;var i=this._content;t&&!Array.isArray(t)&&(i=function parseInlineContent(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",i=[];if(t&&"string"==typeof t||t.text){var o="string"==typeof t?t:t.text,r=/^{ICON:(.*?)?\|(.*?)?}$/g,a=/^{BADGE:(.*?)}$/g,l=/^{NEWLINE}$/g,c=/^{TEXT:(.*?)?\|(.*?)?}$/g,h=o.split(u);h&&h.length&&h.forEach((function(t){var o=t,u=a.exec(t),h=r.exec(t),d=l.exec(t),p=c.exec(t);u&&u[1]?o={badge:u[1]}:h&&h[1]?o={title:h[1],icon:h[2]||h[1]}:d?o={newline:!0}:p&&p[1]&&(o={text:p[1],style:p[2]}),i.push(o);}));}return i}(t)),this._parsedContent=this._formatSpaces(i);}return t}},{key:"_setBadgeProperties",value:function _setBadgeProperties(t){if("object"===_typeof(t))return t}},{key:"_getBadgeProperties",value:function _getBadgeProperties(){return this._badgeProperties||{}}},{key:"_setContentProperties",value:function _setContentProperties(t){if("object"===_typeof(t))return t}},{key:"_getContentProperties",value:function _getContentProperties(){return this._contentProperties||{}}},{key:"_setCustomStyleMappings",value:function _setCustomStyleMappings(t){if("object"===_typeof(t))return t}},{key:"_getCustomStyleMappings",value:function _getCustomStyleMappings(){return this._customStyleMappings||{}}},{key:"_setMaxLines",value:function _setMaxLines(t){return t>=1?Math.floor(t):0}},{key:"textHeight",get:function get(){return this.style.textStyle.lineHeight||this.style.textStyle.fontSize}},{key:"_marginBottom",get:function get(){return void 0!==this.contentProperties.marginBottom?this.contentProperties.marginBottom:this.style.marginBottom?this.style.marginBottom:0}},{key:"_shouldTruncate",get:function get(){return this.contentWrap&&this.maxLines}},{key:"announce",get:function get(){if(this._announce)return this._announce;var t=this._parsedContent&&this._parsedContent.reduce((function(t,i){return "string"==typeof i?t+=i:i.announce?t+=i.announce:i.text?t+=i.text:i.title?t+=i.title:i.badge&&(t+=i.badge),t+" "}),"");return t?t.replace(/\s+(?=\s)|\s$/g,""):""},set:function set(t){_set(_getPrototypeOf(InlineContent.prototype),"announce",t,this,!0);}}],[{key:"properties",get:function get(){return ["content","contentProperties","badgeY","badgeProperties","justify","contentWrap","customStyleMappings","maxLines","maxLinesSuffix"]}},{key:"__componentName",get:function get(){return "InlineContent"}},{key:"__themeStyle",get:function get(){return xt}},{key:"aliasStyles",get:function get(){return [{prev:"iconH",curr:"iconHeight"},{prev:"iconW",curr:"iconWidth"}]}}]),InlineContent}(),Ct=Object.freeze({__proto__:null,base:function base$I(t){return {fadeWidth:100,offset:t.spacer.xxl,shouldSmooth:!1,textStyle:t.typography.body1}}}),wt=function(i){_inherits(FadeShader,t.shaders.WebGLDefaultShader);var o=_createSuper(FadeShader);function FadeShader(t){var i;return _classCallCheck(this,FadeShader),(i=o.call(this,t))._margin={left:0,right:0},i}return _createClass(FadeShader,[{key:"positionLeft",set:function set(t){this._positionLeft=t;}},{key:"positionRight",set:function set(t){this._positionRight=t;}},{key:"setupUniforms",value:function setupUniforms(t){_get(_getPrototypeOf(FadeShader.prototype),"setupUniforms",this).call(this,t);var i=t.shaderOwner;0===this._positionLeft&&(this._positionLeft=.001),0===this._positionRight&&(this._positionRight=.001);var o=this.ctx.stage.getRenderPrecision();this._setUniform("margin",[this._positionLeft*o,this._positionRight*o],this.gl.uniform1fv),this._setUniform("resolution",new Float32Array([i._w*o,i._h*o]),this.gl.uniform2fv);}}]),FadeShader}();wt.fragmentShaderSource="\n  #ifdef GL_ES\n  # ifdef GL_FRAGMENT_PRECISION_HIGH\n  precision highp float;\n  # else\n  precision lowp float;\n  # endif\n  #endif\n\n  #define PI 3.14159265359\n\n  varying vec2 vTextureCoord;\n  varying vec4 vColor;\n\n  uniform sampler2D uSampler;\n  uniform vec2 resolution;\n  uniform float margin[2];\n\n  void main() {\n      vec4 color = texture2D(uSampler, vTextureCoord) * vColor;\n      vec2 halfRes = 0.5 * resolution.xy;\n      vec2 point = vTextureCoord.xy * resolution;\n\n\n      vec2 pos1 = vec2(point.x, point.y);\n      vec2 pos2 = pos1;\n      pos2.x += margin[0];\n\n      vec2 d = pos2 - pos1;\n      float t = dot(pos1, d) / dot(d, d);\n      t = smoothstep(0.0, 1.0, clamp(t, 0.0, 1.0));\n\n      vec2 pos3 = vec2(vTextureCoord.x * resolution.x, vTextureCoord.y);\n      pos3.x -= resolution.x - margin[1];\n      vec2 pos4 = vec2(vTextureCoord.x + margin[1], vTextureCoord.y);\n\n      vec2 d2 = pos4 - pos3;\n      float t2 = dot(pos3, d2) / dot(d2, d2);\n      t2 = smoothstep(0.0, 1.0, clamp(t2, 0.0, 1.0));\n\n      color = mix(vec4(0.0), color, t);\n      color = mix(color, vec4(0.0), t2);\n\n      gl_FragColor = color;\n  }\n";var Tt=function(t){_inherits(Marquee,tt);var i=_createSuper(Marquee);function Marquee(){return _classCallCheck(this,Marquee),i.apply(this,arguments)}return _createClass(Marquee,[{key:"_construct",value:function _construct(){_get(_getPrototypeOf(Marquee.prototype),"_construct",this).call(this),this._scrolling=!1,this._autoStart=!1,this._centerAlign=!1;}},{key:"_init",value:function _init(){this._Content.on("txLoaded",this._updateContentTexture.bind(this)),_get(_getPrototypeOf(Marquee.prototype),"_init",this).call(this);}},{key:"_updateContentTexture",value:function _updateContentTexture(){var t=this._restartScrolling;this.stopScrolling(),this._currentTexture.h||(this._ContentClipper.h=this._currentTexture.text&&this._currentTexture.text.lineHeight?this._currentTexture.text.lineHeight:this._Content.finalH),this._shouldClip?this._updateShader():(this._ContentClipper.shader=null,this._positionTexture()),t&&this.startScrolling(),this.signal("marqueeContentLoaded");}},{key:"_update",value:function _update(){this._updateColor(),this._updateTexture(),this._updateShader(),this._restartScrolling&&this.startScrolling();}},{key:"_restartScrolling",get:function get(){return this.autoStart||this._scrolling||this._shouldTryScrolling}},{key:"_updateColor",value:function _updateColor(){this.color&&(this._Content.smooth={color:h.getValidColor(this.color)});}},{key:"_currentTexture",get:function get(){return this._Content.text||this._Content.texture||{}}},{key:"_updateTexture",value:function _updateTexture(){var t={rtt:!0};this.contentTexture?t.texture=this.contentTexture:this.title&&(t.text=_objectSpread(_objectSpread(_objectSpread({},this.style.textStyle),this.title),{},{text:this.textContent})),this.patch({ContentClipper:{w:this.w+14,ContentBox:{Content:t,ContentLoopTexture:{}}}}),this.signal("marqueeContentLoaded");}},{key:"_updateShader",value:function _updateShader(){this._ContentClipper.patch({w:this.w>0?this.w+this.style.fadeWidth/2:0,shader:{type:wt,positionLeft:0,positionRight:this.style.fadeWidth},rtt:!0});}},{key:"_updateAnimation",value:function _updateAnimation(){this._scrollAnimation&&this._scrollAnimation.stopNow(),this._scrollAnimation=this.animation({duration:this._loopWidth/50,delay:isNaN(this.delay)?1.5:this.delay,repeat:isNaN(this.repeat)?-1:this.repeat,actions:[{t:"ContentBox",p:"x",v:{sm:0,0:{v:0},.5:{v:-(this._loopWidth+this.style.offset)}}},{t:"ContentClipper",p:"shader.positionLeft",v:{sm:0,0:{v:0},.1:{v:this.style.fadeWidth},.4:{v:this.style.fadeWidth},.5:{v:0}}}]});}},{key:"_positionTexture",value:function _positionTexture(){var t=this._shouldCenter()?(this.w-this._textRenderedW)/2:0;this.style.shouldSmooth?this._ContentBox.smooth={x:t}:this._ContentBox.x=t;}},{key:"startScrolling",value:function startScrolling(){this._Content.off("txLoaded",this.startScrolling.bind(this)),this._shouldTryScrolling=!0,0===this._textRenderedW&&this._Content.on("txLoaded",this.startScrolling.bind(this)),this._shouldClip?(this._scrolling=!0,this._ContentLoopTexture.x=this._loopWidth+this.style.offset,this._ContentLoopTexture.texture=this._Content.getTexture(),this._updateAnimation(),this._scrollAnimation.start()):this._scrolling=!1;}},{key:"stopScrolling",value:function stopScrolling(){this._shouldTryScrolling=!1,this._scrolling=!1,this._scrollAnimation&&(this._scrollAnimation.stopNow(),this._ContentLoopTexture.texture=null);}},{key:"_shouldClip",get:function get(){return this._textRenderedW>this.w-this.style.fadeWidth/4}},{key:"_shouldCenter",value:function _shouldCenter(){return this._centerAlign||this._Content.text&&"center"===this._Content.text.textAlign}},{key:"_setAutoStart",value:function _setAutoStart(t){return this.autoStart&&!t&&this._updateContentTexture(),t}},{key:"_setCenterAlign",value:function _setCenterAlign(t){return this._centerAlign=t,this._updateContentTexture(),t}},{key:"textContent",get:function get(){var t,i,o;return null!==(t=null!==(i=null===(o=this.title)||void 0===o?void 0:o.text)&&void 0!==i?i:this.title)&&void 0!==t?t:""}},{key:"_loopWidth",get:function get(){return this.overrideLoopX||this._textRenderedW}},{key:"_textRenderedW",get:function get(){return this._Content.renderWidth}},{key:"announce",get:function get(){return this._announce||this.title&&this.title.text},set:function set(t){_set(_getPrototypeOf(Marquee.prototype),"announce",t,this,!0);}}],[{key:"_template",value:function _template(){return {ContentClipper:{boundsMargin:[],ContentBox:{Content:{},ContentLoopTexture:{}}}}}},{key:"__componentName",get:function get(){return "Marquee"}},{key:"__themeStyle",get:function get(){return Ct}},{key:"tags",get:function get(){return ["ContentClipper",{name:"ContentBox",path:"ContentClipper.ContentBox"},{name:"Content",path:"ContentClipper.ContentBox.Content"},{name:"ContentLoopTexture",path:"ContentClipper.ContentBox.ContentLoopTexture"}]}},{key:"properties",get:function get(){return ["autoStart","title","contentTexture","color","centerAlign","delay","repeat","overrideLoopX"]}},{key:"aliasStyles",get:function get(){return [{prev:"fadeW",curr:"fadeWidth"}]}}]),Marquee}(),It=Object.entries(Object.getOwnPropertyDescriptors(t.textures.TextTexture.prototype)).reduce((function(i,o){var r=_slicedToArray(o,1)[0],a=t.textures.TextTexture.prototype[r];return r.startsWith("_")||["undefined","function"].includes(_typeof(a))?i:_objectSpread(_defineProperty$1({},r,a),i)}),{}),At=function(t){_inherits(TextBox,tt);var i=_createSuper(TextBox);function TextBox(){return _classCallCheck(this,TextBox),i.apply(this,arguments)}return _createClass(TextBox,[{key:"_setDimensions",value:function _setDimensions(t,i){var o=t,r=i;this._isInlineContent||(o=this._Text.texture.getRenderWidth(),r=this._Text.texture.getRenderHeight());var a=this.w!==o||this.h!==r;o&&r&&a&&(this.h=r,this.fixed||(this.w=o),!this.hideOnLoad&&this.alpha<1&&(this.alpha=1),this._notifyAncestors());}},{key:"_setContent",value:function _setContent(t){return this._isInlineContent=!1,(Array.isArray(t)||h.isMarkupString(t))&&(this._isInlineContent=!0),"string"==typeof t||this._isInlineContent?t:""}},{key:"title",get:function get(){return this._content}},{key:"_notifyAncestors",value:function _notifyAncestors(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.w,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.h;this.fireAncestors("$itemChanged"),this.signal("textBoxChanged",{w:t,h:i});}},{key:"_construct",value:function _construct(){_get(_getPrototypeOf(TextBox.prototype),"_construct",this).call(this),this._marqueeContentListenerAttached=!1,this._marqueeOverrideLoopX=void 0,this._resetMarqueePromise();}},{key:"_update",value:function _update(){this.content?(this._isInlineContent?this._updateInlineContent():this._updateText(),this._updateMarquee()):(this._Text||this._InlineContent)&&(this.w=this.h=0,this._notifyAncestors(),this._updateMarquee(),this.patch({Text:void 0,InlineContent:void 0}));}},{key:"_updateInlineContent",value:function _updateInlineContent(){var t=this;this.patch({Text:void 0});var i=bt.properties.reduce((function(i,o){return null!=t[o]&&(i[o]=t[o]),i}),{style:_objectSpread(_objectSpread({},this.style),{},{textStyle:this._textStyleSet})});this._textStyleSet.wordWrapWidth&&(i.w=this._textStyleSet.wordWrapWidth,i.rtt=!0),this._textStyleSet.maxLines&&(i.maxLines=this._textStyleSet.maxLines),this._textStyleSet.maxLinesSuffix&&(i.maxLinesSuffix=this._textStyleSet.maxLinesSuffix),this.patch({alpha:1,InlineContent:_objectSpread(_objectSpread({type:bt,w:this.w},i),{},{signals:{loadedInlineContent:"_setDimensions"}})});}},{key:"_updateText",value:function _updateText(){this.patch({InlineContent:void 0}),this._Text||(this.patch({Text:{}}),this._Text.on("txLoaded",this._setDimensions.bind(this)));var t=this._textStyleSet;this._Text&&this._Text.patch({y:this.style.offsetY,x:this.style.offsetX,text:_objectSpread(_objectSpread({},It),t)});}},{key:"marqueeOverrideLoopX",get:function get(){return this._marqueeOverrideLoopX},set:function set(t){this._marqueeOverrideLoopX=t,this._Marquee&&(this._Marquee.overrideLoopX=this._marqueeOverrideLoopX),this._resolveAwaitMarqueeOverrideX();}},{key:"_resetMarqueePromise",value:function _resetMarqueePromise(){var t=this;this._awaitMarqueeOverrideX=new Promise((function(i,o){t._resolveAwaitMarqueeOverrideX=i,t._rejectAwaitMarqueeOverrideX=o;}));}},{key:"_loadedMarqueeContent",value:function _loadedMarqueeContent(){this.signal("willMarquee",this._Marquee);}},{key:"_updateMarquee",value:function _updateMarquee(){var t=this;if(this._Marquee&&!this.marquee&&this._toggleMarquee(this._contentTag),this.marquee){this._resetMarqueePromise();var i=_objectSpread(_objectSpread({},this.marqueeProps),{},{w:this._textStyleSet.wordWrapWidth||this.w,h:this.h,y:this.style.offsetY,x:this.style.offsetX,signals:{marqueeContentLoaded:"_loadedMarqueeContent"}});this._Marquee||(i.type=Tt),this._isInlineContent?(this._InlineContent.w=0,i.title=void 0,i.contentTexture=this._contentTag.getTexture(),i.w=this._textStyleSet.wordWrapWidth||this.w):(i.contentTexture=void 0,i.title=_objectSpread(_objectSpread({text:this._contentTag.text.text},this._textStyleSet),{},{wordWrapWidth:0,maxLines:1})),this.patch({Marquee:i}),this._marqueeContentListenerAttached||(this._marqueeContentListenerAttached=!0),void 0!==this._marqueeOverrideLoopX?this._awaitMarqueeOverrideX.then((function(){t._toggleMarquee(t._contentTag);})):this._toggleMarquee(this._contentTag);}}},{key:"_getMarqueeProps",value:function _getMarqueeProps(){var t;return null!==(t=this._marqueeProps)&&void 0!==t?t:{}}},{key:"_textStyleSet",get:function get(){var t=this,i=_objectSpread(_objectSpread({},this.theme.typography.body1),null!==this.style.textStyle&&"object"===_typeof(this.style.textStyle)&&Object.keys(this.style.textStyle)?this.style.textStyle:this.theme.typography[this.style.textStyle]);return this.constructor.properties.forEach((function(o){"fontStyle"!==o&&void 0!==t["_".concat(o)]&&(i["content"===o?"text":o]=t["_".concat(o)]);})),this.w&&!this._isInlineContent&&!this.style.textStyle.wordWrapWidth&&this.fixed&&(i.wordWrapWidth=this.w),i}},{key:"_contentTag",get:function get(){return this._isInlineContent?this._InlineContent:this._Text}},{key:"_toggleMarquee",value:function _toggleMarquee(t){this.marquee?(t&&(t.alpha=.001),this._Marquee&&(this._Marquee.alpha=1,this._Marquee.startScrolling())):(t&&(t.alpha=1),this._Marquee&&(this._Marquee.alpha=.001,this._Marquee.stopScrolling()));}},{key:"toggleMarquee",value:function toggleMarquee(){this._toggleMarquee(this._contentTag);}},{key:"announce",get:function get(){return this._announce||(this._isInlineContent&&this._InlineContent?this._InlineContent.announce:this.content)},set:function set(t){_set(_getPrototypeOf(TextBox.prototype),"announce",t,this,!0);}},{key:"smooth",set:function set(t){I.warn("warning: value smoothing is known to cause bugs with the TextBox - patch updated values instead."),_set(_getPrototypeOf(TextBox.prototype),"smooth",t,this,!0);}}],[{key:"_template",value:function _template(){return {alpha:.001}}},{key:"__componentName",get:function get(){return "TextBox"}},{key:"__themeStyle",get:function get(){return vt}},{key:"tags",get:function get(){return ["InlineContent","Marquee","Text"]}},{key:"properties",get:function get(){return [].concat(_toConsumableArray(bt.properties),["content","fixed","marquee","marqueeProps","hideOnLoad"])}}]),TextBox}(),Pt=function(t){_inherits(Button,mt);var i=_createSuper(Button);function Button(){return _classCallCheck(this,Button),i.apply(this,arguments)}return _createClass(Button,[{key:"_update",value:function _update(){this._updatePrefix(),this._updateTitle(),this._updateSuffix(),this._updateAllPositioning(),this._updateTruncation();}},{key:"_updateAllPositioning",value:function _updateAllPositioning(){this._updatePositions(),this._updateContentDimensions(),this._updateSurfaceDimensions(),this._updateContentPosition(),_get(_getPrototypeOf(Button.prototype),"_update",this).call(this);}},{key:"$itemChanged",value:function $itemChanged(){this._updateAllPositioning(),this._updateTruncation();}},{key:"_onTitleTextBoxChanged",value:function _onTitleTextBoxChanged(){this._updateAllPositioning();}},{key:"_updatePositions",value:function _updatePositions(){this._hasPrefix&&(this._Prefix.x=this._prefixX),this._hasTitle&&(this._TextWrapper.x=this._titleX),this._hasSuffix&&(this._Suffix.x=this._suffixX);}},{key:"_updatePrefix",value:function _updatePrefix(){var t=JSON.stringify(this.prefix);if(this.prefix){var i={style:{itemSpacing:this.style.itemSpacing}};this._Prefix||(i=_objectSpread(_objectSpread({},this._rowProps),i)),this._Content.patch({Prefix:i}),this._updatePrefixSuffixStyles("prefix");}else this._Content.patch({Prefix:void 0});this._prevPrefix=t;}},{key:"_updatePrefixSuffixStyles",value:function _updatePrefixSuffixStyles(){var t=this,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"prefix",o={prefix:{tag:this._Prefix,prop:this.prefix,prevProp:this._prevPrefix},suffix:{tag:this._Suffix,prop:this.suffix,prevProp:this._prevSuffix}},r=o[i],a=r.tag,l=r.prop,c=o[i].prevProp,u=JSON.stringify(l);u!==c?(c=u,a.items=this._addButtonProps(l)):a.Items.children.forEach((function(i,o){i.color=Array.isArray(l)?l[o].color:l.color,i.style=_objectSpread(_objectSpread({},i.style),{},{color:t.style.contentColor});}));}},{key:"_updateTitle",value:function _updateTitle(){if(this._hasTitle){var t={content:this.title,style:{textStyle:this.style.textStyle}};this._Title||(t=_objectSpread({type:At,mountY:.5,y:function y(t){return t/2},signals:{textBoxChanged:"_onTitleTextBoxChanged"}},t)),this._Content.patch({TextWrapper:{mountY:.5,Title:t}});}else this._Content.patch({TextWrapper:{Title:void 0}});}},{key:"_updateSuffix",value:function _updateSuffix(){if(this.suffix){var t={style:{itemSpacing:this.style.itemSpacing}};this._Suffix||(t=_objectSpread(_objectSpread({},this._rowProps),t)),this._Content.patch({Suffix:t}),this._updatePrefixSuffixStyles("suffix");}else this._Content.patch({Suffix:void 0});}},{key:"_updateTruncation",value:function _updateTruncation(){this._Title&&this._Title.patch({style:{textStyle:_objectSpread(_objectSpread({},this.style.textStyle),{},{wordWrap:this.fixed,wordWrapWidth:this.fixed?this._fixedWordWrapWidth:0})}});}},{key:"_updateContentDimensions",value:function _updateContentDimensions(){var t={},i=this.h/2;this._Content.transition("w").targetValue!==this._contentW&&(this._Content.w=this._contentW),this._Content.y!==i&&(t.y=i),Object.keys(t).length>0&&this._Content.patch(t);}},{key:"_updateContentPosition",value:function _updateContentPosition(){this._Content.patch(this._contentProps);}},{key:"_updateSurfaceDimensions",value:function _updateSurfaceDimensions(){var t=this.w;(t=this.fixed?this._w:this._calcDynamicWidth())!==this.w&&(this.w=t),this._hSetByUser||this.style.h||(this._h=this.style.textStyle.lineHeight+2*this.style.paddingY),this.fireAncestors("$itemChanged");}},{key:"_calcDynamicWidth",value:function _calcDynamicWidth(){return !this._hasTitle&&(this._hasPrefix||this._hasSuffix)||this._Title&&!this._Title.visible&&(this._hasPrefix||this._hasSuffix)?this._contentW+this._paddingX:Math.max(this._contentW+this._paddingX,this.style.minWidth)}},{key:"_addButtonProps",value:function _addButtonProps(t){var i=this;return (Array.isArray(t)?t:[t]).map((function(t){return _objectSpread(_objectSpread(_objectSpread({},i._buttonProps),t),{},{style:_objectSpread({color:i.style.contentColor},t.style)})}))}},{key:"_getJustify",value:function _getJustify(){return this._justify?this._justify:this.style.justify}},{key:"_contentProps",get:function get(){var t,i;switch(this.justify){case"left":t=0,i=this._paddingLeft;break;case"right":t=1,i=this.w-this._paddingRight;break;default:t=.5,i=this.w/2;}return {mountX:t,x:i}}},{key:"_buttonProps",get:function get(){return {centerInParent:!0,mode:this.mode}}},{key:"_hasPrefix",get:function get(){return !(!this.prefix||!Object.keys(this.prefix).length)}},{key:"_prefixW",get:function get(){return this._hasPrefix?this._Prefix.w:0}},{key:"_prefixX",get:function get(){return 0}},{key:"_hasTitle",get:function get(){return !!this.title}},{key:"_titleW",get:function get(){return this._hasTitle&&this._Title&&this._Title._Text&&this._Title.visible?this._Title.w:0}},{key:"_titleX",get:function get(){return this._hasPrefix?this._prefixW+this.style.contentSpacing:0}},{key:"_hasSuffix",get:function get(){return !(!this.suffix||!Object.keys(this.suffix).length)}},{key:"_suffixW",get:function get(){return this._hasSuffix?this._Suffix.w:0}},{key:"_suffixX",get:function get(){return this._hasTitle?this._titleW+this._TextWrapper.x+this.style.contentSpacing:this._hasPrefix?this._prefixW+this.style.itemSpacing:0}},{key:"_contentW",get:function get(){return this._hasSuffix?this._suffixX+this._suffixW:this._hasTitle&&this._Title&&this._Title.visible?this._titleX+this._titleW:this._hasPrefix?this._prefixX+this._prefixW:0}},{key:"_rowProps",get:function get(){return {type:ft,mountY:.5,autoResizeHeight:!0,autoResizeWidth:!0}}},{key:"_totalTitlePaddingX",get:function get(){var t=0;return this._hasPrefix&&(t+=this.style.contentSpacing),this._hasSuffix&&(t+=this.style.contentSpacing),t}},{key:"_fixedWordWrapWidth",get:function get(){var t=this.w,i=this._paddingX+this._prefixW+this._suffixW+this._totalTitlePaddingX;return Math.max(1,t-i)}},{key:"announce",get:function get(){if(this._announce)return this._announce;var t=[];return this.title&&t.push(this.title),t.push(this._announceComponentName),this._hasPrefix&&this._Prefix.items.length&&t.push.apply(t,_toConsumableArray(this._Prefix.items.map((function(t){return t.announce})))),this._hasSuffix&&this._Suffix.items.length&&t.push.apply(t,_toConsumableArray(this._Suffix.items.map((function(t){return t.announce})))),t},set:function set(t){_set(_getPrototypeOf(Button.prototype),"announce",t,this,!0);}},{key:"_announceComponentName",get:function get(){return Button.__componentName}},{key:"_paddingX",get:function get(){return this._paddingLeft+this._paddingRight}},{key:"_paddingLeft",get:function get(){return this._hasTitle?this.style.paddingX:this.style.paddingXNoTitle}},{key:"_paddingRight",get:function get(){return this._hasTitle?this.style.paddingX:this.style.paddingXNoTitle}}],[{key:"__componentName",get:function get(){return "Button"}},{key:"__themeStyle",get:function get(){return ut}},{key:"properties",get:function get(){return ["fixed","justify","prefix","suffix","title"]}},{key:"aliasStyles",get:function get(){return [{prev:"titlePadding",curr:"contentSpacing"}]}},{key:"tags",get:function get(){return [].concat(_toConsumableArray(_get(_getPrototypeOf(Button),"tags",this)),["Content",{name:"TextWrapper",path:"Content.TextWrapper"},{name:"Title",path:"Content.TextWrapper.Title"},{name:"Prefix",path:"Content.Prefix"},{name:"Suffix",path:"Content.Suffix"}])}},{key:"_template",value:function _template(){return _objectSpread(_objectSpread({},_get(_getPrototypeOf(Button),"_template",this).call(this)),{},{Content:{mount:.5,x:function x(t){return t/2},y:function y(t){return t/2},zIndex:2}})}}]),Button}(),Lt=Object.freeze({__proto__:null,base:function base$H(t){return {minWidth:getWidthByColumnSpan(t,1),paddingX:t.spacer.xxl,paddingXNoTitle:t.spacer.lg,paddingY:t.spacer.lg,textStyle:t.typography.button2}}}),Bt=function(t){_inherits(ButtonSmall,Pt);var i=_createSuper(ButtonSmall);function ButtonSmall(){return _classCallCheck(this,ButtonSmall),i.apply(this,arguments)}return _createClass(ButtonSmall,null,[{key:"__componentName",get:function get(){return "ButtonSmall"}},{key:"__themeStyle",get:function get(){return Lt}}]),ButtonSmall}(),Ot=Object.freeze({__proto__:null,base:function base$G(t){return {height:12*t.spacer.xxl,paddingHorizontal:t.spacer.xl,paddingVertical:t.spacer.xl,radius:t.radius.md,titleTextStyle:_objectSpread(_objectSpread({},t.typography.headline1),{},{wordWrap:!0,maxLines:2,textColor:t.color.textNeutral}),width:h.getWidthByUpCount(t,6)}},mode:function mode$e(t){return {focused:{tone:{neutral:{backgroundColor:t.color.interactiveNeutralFocusSoft},inverse:{backgroundColor:t.color.interactiveInverseFocusSoft},brand:{backgroundColor:t.color.interactiveBrandFocusSoft}}},disabled:{titleTextStyle:{textColor:t.color.textNeutralDisabled}}}}}),Wt=function(t){_inherits(Card,mt);var i=_createSuper(Card);function Card(){return _classCallCheck(this,Card),i.apply(this,arguments)}return _createClass(Card,[{key:"_update",value:function _update(){_get(_getPrototypeOf(Card.prototype),"_update",this).call(this),this._updateTitle(),this._updatePositions();}},{key:"_updatePositions",value:function _updatePositions(){this._updateTitlePosition();}},{key:"_updateTitle",value:function _updateTitle(){this._Title.patch({content:this.title,style:{textStyle:_objectSpread(_objectSpread({},this.style.titleTextStyle),{},{wordWrapWidth:this._calculateTextWidth()})}});}},{key:"_calculateTextWidth",value:function _calculateTextWidth(){return this.w-2*this.style.paddingHorizontal}},{key:"_updateTitlePosition",value:function _updateTitlePosition(){this._Title.x=this.style.paddingHorizontal,this._Title.y=this.style.paddingVertical;}},{key:"announce",get:function get(){return this._announce||this._Title&&this._Title.announce},set:function set(t){_set(_getPrototypeOf(Card.prototype),"announce",t,this,!0);}}],[{key:"__componentName",get:function get(){return "Card"}},{key:"__themeStyle",get:function get(){return Ot}},{key:"properties",get:function get(){return [].concat(_toConsumableArray(_get(_getPrototypeOf(Card),"properties",this)),["title"])}},{key:"tags",get:function get(){return [].concat(_toConsumableArray(_get(_getPrototypeOf(Card),"tags",this)),["Title"])}},{key:"_template",value:function _template(){return _objectSpread(_objectSpread({},_get(_getPrototypeOf(Card),"_template",this).call(this)),{},{Title:{type:At,signals:{textBoxChanged:"_updatePositions"}}})}}]),Card}(),jt=Object.freeze({__proto__:null,base:function base$F(t){return {titleTextStyle:_objectSpread(_objectSpread({},t.typography.headline3),{},{wordWrap:!0,maxLines:2,textColor:t.color.textNeutral}),descriptionTextStyle:_objectSpread(_objectSpread({},t.typography.body2),{},{textColor:t.color.textNeutral,wordWrap:!0,maxLines:3}),detailsTextStyle:_objectSpread(_objectSpread({},t.typography.body3),{},{textColor:t.color.textNeutral,wordWrap:!0,maxLines:1})}},mode:function mode$d(t){return {disabled:{descriptionTextStyle:{textColor:t.color.textNeutralDisabled},detailsTextStyle:{textColor:t.color.textNeutralDisabled}}}}}),Dt=function(t){_inherits(CardTitle,Wt);var i=_createSuper(CardTitle);function CardTitle(){return _classCallCheck(this,CardTitle),i.apply(this,arguments)}return _createClass(CardTitle,[{key:"_update",value:function _update(){_get(_getPrototypeOf(CardTitle.prototype),"_update",this).call(this),this._updateDescription(),this._updateDetails(),this._updatePositions();}},{key:"_updatePositions",value:function _updatePositions(){_get(_getPrototypeOf(CardTitle.prototype),"_updatePositions",this).call(this),this._updateDescriptionPosition(),this._updateDetailsPosition();}},{key:"_updateDescription",value:function _updateDescription(){this._Description.patch({content:this.description,style:{textStyle:_objectSpread(_objectSpread({},this.style.descriptionTextStyle),{},{wordWrapWidth:this._calculateTextWidth()})}});}},{key:"_updateDescriptionPosition",value:function _updateDescriptionPosition(){this._Description.x=this.style.paddingHorizontal,this._Description.y=this.style.paddingVertical+this._Title.h;}},{key:"_updateDetails",value:function _updateDetails(){this._Details.patch({content:this.details,style:{textStyle:_objectSpread(_objectSpread({},this.style.detailsTextStyle),{},{wordWrapWidth:this._calculateTextWidth()})}});}},{key:"_updateDetailsPosition",value:function _updateDetailsPosition(){this._Details.x=this.style.paddingHorizontal,this._Details.y=this.h-this.style.paddingVertical;}},{key:"announce",get:function get(){return this._announce||[this._Title&&this._Title.announce,this._Description&&this._Description.announce,this._Details&&this._Details.announce]},set:function set(t){_set(_getPrototypeOf(CardTitle.prototype),"announce",t,this,!0);}}],[{key:"__componentName",get:function get(){return "CardTitle"}},{key:"__themeStyle",get:function get(){return jt}},{key:"tags",get:function get(){return [].concat(_toConsumableArray(_get(_getPrototypeOf(CardTitle),"tags",this)),["Description","Details"])}},{key:"properties",get:function get(){return [].concat(_toConsumableArray(_get(_getPrototypeOf(CardTitle),"properties",this)),["description","details"])}},{key:"_template",value:function _template(){return _objectSpread(_objectSpread({},_get(_getPrototypeOf(CardTitle),"_template",this).call(this)),{},{Description:{type:At,signals:{textBoxChanged:"_updatePositions"}},Details:{type:At,mountY:1}})}}]),CardTitle}(),Mt=Object.freeze({__proto__:null,base:function base$E(t){return {descriptionTextStyle:_objectSpread(_objectSpread({},t.typography.body2),{},{textColor:t.color.textNeutralSecondary,wordWrap:!0,maxLines:8}),height:15*t.spacer.xxxl,subtitleTextStyle:_objectSpread(_objectSpread({},t.typography.body3),{},{maxLines:2,textColor:t.color.textNeutral,wordWrap:!0}),width:h.getWidthByColumnSpan(t,4)}},mode:function mode$c(t){return {disabled:{descriptionTextStyle:{textColor:t.color.textNeutralDisabled},subtitleTextStyle:{textColor:t.color.textNeutralDisabled}}}}}),Rt=Object.freeze({__proto__:null,base:function base$D(t){var i=t.spacer.xxl;return {alpha:t.alpha.primary,width:i,height:i,knobHeight:i/2,knobWidth:i/2,radius:i/2,strokeWidth:t.stroke.sm}},mode:function mode$b(t){return {disabled:{alpha:t.alpha.inactive}}},tone:function tone$k(t){return {neutral:{backgroundColor:t.color.fillInverseSecondary,backgroundColorChecked:t.color.fillNeutral,knobColor:t.color.fillInverse,strokeColor:t.color.strokeNeutralSecondary},inverse:{backgroundColor:t.color.fillNeutralSecondary,backgroundColorChecked:t.color.fillInverse,knobColor:t.color.fillNeutral,strokeColor:t.color.strokeInverseSecondary},brand:{backgroundColor:t.color.fillNeutralSecondary,backgroundColorChecked:t.color.fillBrand,knobColor:t.color.fillInverse,strokeColor:t.color.strokeNeutralSecondary}}}}),Nt=function(i){_inherits(Radio,tt);var o=_createSuper(Radio);function Radio(){return _classCallCheck(this,Radio),o.apply(this,arguments)}return _createClass(Radio,[{key:"_update",value:function _update(){this._updateBody(),this._updateStroke(),this._updateKnob(),this._checkedChanged&&(this.fireAncestors("$announce",this.announce),this._checkedChanged=!1),this._updateOpacity();}},{key:"_updateBody",value:function _updateBody(){var i=this.checked?this.style.backgroundColorChecked:this.style.backgroundColor,o=this.style.radius>=this.w/2?(this.w-this.style.strokeWidth-2)/2:0;this._Body.patch({texture:t.Tools.getRoundRect(this.w-2*this.style.strokeWidth-2,this.h-2*this.style.strokeWidth-2,o,null,null,!0,i)});}},{key:"_updateStroke",value:function _updateStroke(){this._Stroke.patch({texture:t.Tools.getRoundRect(this.w-2,this.h-2,this.style.radius,this.style.strokeWidth,this.style.strokeColor,!1)});}},{key:"_updateKnob",value:function _updateKnob(){this._Knob.patch({texture:t.Tools.getRoundRect(this.style.knobWidth,this.style.knobHeight,this.style.knobWidth/2,null,null,!0,this.style.knobColor)}),this.applySmooth(this._Knob,{alpha:this.checked?1:0});}},{key:"_updateOpacity",value:function _updateOpacity(){this.applySmooth(this,{alpha:this.style.alpha});}},{key:"_setChecked",value:function _setChecked(t){return this._checkedChanged=t!==this._checked,t}},{key:"toggle",value:function toggle(){return this._isDisabledMode||(this.checked=!this.checked),this}},{key:"_handleEnter",value:function _handleEnter(){return "function"==typeof this.onEnter?this.onEnter(this):(this.toggle(),!1)}},{key:"announce",get:function get(){return this._announce||(this.checked?"Checked":"Unchecked")},set:function set(t){_set(_getPrototypeOf(Radio.prototype),"announce",t,this,!0);}}],[{key:"__componentName",get:function get(){return "Radio"}},{key:"__themeStyle",get:function get(){return Rt}},{key:"_template",value:function _template(){var t={mount:.5,x:function x(t){return t/2},y:function y(t){return t/2}};return {Body:_objectSpread(_objectSpread({rtt:!0},t),{},{Knob:_objectSpread(_objectSpread({},t),{},{alpha:0})}),Stroke:t}}},{key:"tags",get:function get(){return ["Knob","Body","Stroke"]}},{key:"properties",get:function get(){return ["checked"]}}]),Radio}(),zt=Object.freeze({__proto__:null,base:function base$C(t){var i=t.spacer.xl;return {width:i,height:i,knobHeight:i/2,knobWidth:i/2,radius:i/2}}});(function(t){_inherits(RadioSmall,Nt);var i=_createSuper(RadioSmall);function RadioSmall(){return _classCallCheck(this,RadioSmall),i.apply(this,arguments)}return _createClass(RadioSmall,null,[{key:"__componentName",get:function get(){return "RadioSmall"}},{key:"__themeStyle",get:function get(){return zt}}]),RadioSmall})();(function(t){_inherits(CardRadio,Dt);var i=_createSuper(CardRadio);function CardRadio(){return _classCallCheck(this,CardRadio),i.apply(this,arguments)}return _createClass(CardRadio,[{key:"_update",value:function _update(){_get(_getPrototypeOf(CardRadio.prototype),"_update",this).call(this),this._updateRadio(),this._updateSubtitle(),this._updatePositions();}},{key:"_updatePositions",value:function _updatePositions(){_get(_getPrototypeOf(CardRadio.prototype),"_updatePositions",this).call(this),this._updateSubtitlePosition();}},{key:"_updateSubtitle",value:function _updateSubtitle(){this._Subtitle.patch({content:this.subtitle,style:{textStyle:_objectSpread(_objectSpread({},this.style.subtitleTextStyle),{},{wordWrapWidth:this._calculateTextWidth()})}});}},{key:"_updateRadio",value:function _updateRadio(){var t=_objectSpread(_objectSpread({},this.radio),{},{mode:this.mode,mountX:1,x:this.w-this.style.paddingHorizontal,y:this.style.paddingVertical});this._Radio||(t.type=Nt),this.patch({Radio:t});}},{key:"_updateSubtitlePosition",value:function _updateSubtitlePosition(){this._Subtitle.x=this.style.paddingHorizontal,this._Subtitle.y=this.style.paddingVertical+this._Title.h;}},{key:"_updateDescriptionPosition",value:function _updateDescriptionPosition(){this._Description.x=this.style.paddingHorizontal,this._Description.y=2*this.style.paddingVertical+this._Title.h+this._Subtitle.h;}},{key:"announce",get:function get(){return this._announce||[this._Title&&this._Title.announce,this._Subtitle&&this._Subtitle.announce,this._Description&&this._Description.announce,this._Details&&this._Details.announce]},set:function set(t){_set(_getPrototypeOf(CardRadio.prototype),"announce",t,this,!0);}}],[{key:"__componentName",get:function get(){return "CardRadio"}},{key:"__themeStyle",get:function get(){return Mt}},{key:"properties",get:function get(){return [].concat(_toConsumableArray(_get(_getPrototypeOf(CardRadio),"properties",this)),["radio","subtitle"])}},{key:"tags",get:function get(){return [].concat(_toConsumableArray(_get(_getPrototypeOf(CardRadio),"tags",this)),["Radio","Subtitle"])}},{key:"_template",value:function _template(){return _objectSpread(_objectSpread({},_get(_getPrototypeOf(CardRadio),"_template",this).call(this)),{},{Subtitle:{type:At,signals:{textBoxChanged:"_updatePositions"}}})}}]),CardRadio})();var Ht=Object.freeze({__proto__:null,base:function base$B(t){return {height:5*t.spacer.xxl,iconWidth:t.spacer.xxl,iconHeight:t.spacer.xxl,width:h.getWidthByColumnSpan(t,3)}}});(function(t){_inherits(CardSection,Wt);var i=_createSuper(CardSection);function CardSection(){return _classCallCheck(this,CardSection),i.apply(this,arguments)}return _createClass(CardSection,[{key:"_update",value:function _update(){_get(_getPrototypeOf(CardSection.prototype),"_update",this).call(this),this._updateIcon();}},{key:"_updateIcon",value:function _updateIcon(){var t=this.style,i=t.iconWidth,o=t.iconHeight,r={w:i,h:o,icon:this.iconSrc,x:this.w-i-this.style.paddingHorizontal,y:(this._Title.style.textStyle.lineHeight-o)/2+this.style.paddingVertical};this._Icon||(r.type=st),this.patch({Icon:r});}},{key:"_calculateTextWidth",value:function _calculateTextWidth(){var t=this.w-2*this.style.paddingHorizontal;return this.iconSrc?t-this.iconWidth:t}}],[{key:"__componentName",get:function get(){return "CardSection"}},{key:"__themeStyle",get:function get(){return Ht}},{key:"tags",get:function get(){return [].concat(_toConsumableArray(_get(_getPrototypeOf(CardSection),"tags",this)),["Icon"])}},{key:"properties",get:function get(){return [].concat(_toConsumableArray(_get(_getPrototypeOf(CardSection),"properties",this)),["iconWidth","iconHeight","iconSrc"])}}]),CardSection})();var Kt=Object.freeze({__proto__:null,base:function base$A(t){var i=t.stroke.sm,o=t.spacer.xxl;return {alpha:t.alpha.primary,width:o,height:o,iconWidth:t.spacer.lg,iconHeight:t.spacer.lg,icon:t.asset.check,radius:t.radius.xs,strokeWidth:i}},mode:function mode$a(t){return {disabled:{alpha:t.alpha.inactive}}},tone:function tone$j(t){return {neutral:{strokeColor:t.color.strokeNeutralSecondary,checkColor:t.color.fillInverse,backgroundColor:t.color.fillInverseSecondary,backgroundColorChecked:t.color.fillNeutral},inverse:{strokeColor:t.color.strokeInverseSecondary,checkColor:t.color.fillNeutral,backgroundColor:t.color.fillNeutralSecondary,backgroundColorChecked:t.color.fillInverse},brand:{strokeColor:t.color.strokeNeutralSecondary,checkColor:t.color.fillInverse,backgroundColor:t.color.fillNeutralSecondary,backgroundColorChecked:t.color.fillBrand}}}}),qt=function(i){_inherits(Checkbox,tt);var o=_createSuper(Checkbox);function Checkbox(){return _classCallCheck(this,Checkbox),o.apply(this,arguments)}return _createClass(Checkbox,[{key:"_update",value:function _update(){this._updateBody(),this._updateStroke(),this._updateCheck(),this._checkedChanged&&(this.fireAncestors("$announce",this.announce),this._checkedChanged=!1),this._updateOpacity();}},{key:"_updateCheck",value:function _updateCheck(){this._Check.patch({w:this.style.iconWidth,h:this.style.iconHeight,icon:this.style.icon,style:{color:this.style.checkColor}});var t={alpha:this.checked?1:0};this.applySmooth(this._Check,t);}},{key:"_updateBody",value:function _updateBody(){var i=this.checked?this.style.backgroundColorChecked:this.style.backgroundColor,o=this.style.radius>=this.w/2?(this.w-this.style.strokeWidth-2)/2:0;this._Body.patch({texture:t.Tools.getRoundRect(this.w-2*this.style.strokeWidth-2,this.h-2*this.style.strokeWidth-2,o,0,null,!0,i)});}},{key:"_updateStroke",value:function _updateStroke(){this._Stroke.patch({texture:t.Tools.getRoundRect(this.w-2,this.h-2,this.style.radius,this.style.strokeWidth,this.style.strokeColor,!1)});}},{key:"_updateOpacity",value:function _updateOpacity(){this.applySmooth(this,{alpha:this.style.alpha});}},{key:"_setChecked",value:function _setChecked(t){return this._checkedChanged=t!==this._checked,t}},{key:"toggle",value:function toggle(){return this._isDisabledMode||(this.checked=!this.checked),this}},{key:"_handleEnter",value:function _handleEnter(){return "function"==typeof this.onEnter?this.onEnter(this):(this.toggle(),!1)}},{key:"announce",get:function get(){return this._announce||(this.checked?"Checked":"Unchecked")},set:function set(t){_set(_getPrototypeOf(Checkbox.prototype),"announce",t,this,!0);}}],[{key:"__componentName",get:function get(){return "Checkbox"}},{key:"__themeStyle",get:function get(){return Kt}},{key:"_template",value:function _template(){var t={mount:.5,x:function x(t){return t/2},y:function y(t){return t/2}};return {Body:_objectSpread(_objectSpread({rtt:!0},t),{},{Check:_objectSpread(_objectSpread({type:st},t),{},{alpha:0})}),Stroke:t}}},{key:"tags",get:function get(){return ["Check","Body","Stroke"]}},{key:"properties",get:function get(){return ["checked"]}},{key:"aliasStyles",get:function get(){return [{prev:"checkSrc",curr:"icon"},{prev:"checkH",curr:"iconHeight"},{prev:"checkW",curr:"iconWidth"},{prev:"checkHeight",curr:"iconHeight"},{prev:"checkWidth",curr:"iconWidth"}]}}]),Checkbox}(),Vt=Object.freeze({__proto__:null,base:function base$z(t){return {radius:[t.radius.md,t.radius.md,t.radius.md,t.radius.none],paddingX:t.spacer.lg,paddingY:t.spacer.md,offsetY:t.spacer.xxs,textStyle:t.typography.caption1}},tone:function tone$i(t){return {neutral:{textStyle:{textColor:t.color.textInverse},backgroundColor:t.color.fillNeutral},inverse:{textStyle:{textColor:t.color.textNeutral},backgroundColor:t.color.fillInverse},brand:{textStyle:{textColor:t.color.textNeutral},backgroundColor:t.color.fillBrand}}}}),Xt=function(i){_inherits(Label,tt);var o=_createSuper(Label);function Label(){return _classCallCheck(this,Label),o.apply(this,arguments)}return _createClass(Label,[{key:"_init",value:function _init(){this._Text.on("txLoaded",this._updateBackground.bind(this)),_get(_getPrototypeOf(Label.prototype),"_init",this).call(this);}},{key:"_update",value:function _update(){this._updateBackground(),this._updateText();}},{key:"_updateText",value:function _updateText(){this._Text&&this._Text.patch({text:_objectSpread(_objectSpread({},this.style.textStyle),{},{text:this.title})});}},{key:"_updateBackground",value:function _updateBackground(){this._Text.x=this.w/2,this._Text.y=this.h/2+this.style.offsetY,this.h=this.title?this._Text.renderHeight+2*this.style.paddingY:0,this.w=this.title?this._Text.renderWidth+2*this.style.paddingX:0,this._Background.patch({texture:t.Tools.getRoundRect(this.w-2,this.h-2,this.style.radius,0,null,!0,this.style.backgroundColor)}),this.signal("loadedLabel",this);}},{key:"announce",get:function get(){return this._announce||this._Text&&this._Text.text.text},set:function set(t){_set(_getPrototypeOf(Label.prototype),"announce",t,this,!0);}}],[{key:"_template",value:function _template(){return {Background:{},Text:{mountY:.5,mountX:.5,text:{}}}}},{key:"__componentName",get:function get(){return "Label"}},{key:"__themeStyle",get:function get(){return Vt}},{key:"properties",get:function get(){return ["title"]}},{key:"tags",get:function get(){return ["Background","Text"]}}]),Label}(),Yt=Object.freeze({__proto__:null,base:function base$y(t){return {descriptionTextStyle:_objectSpread(_objectSpread({},t.typography.body2),{},{maxLines:1}),fadeWidth:100,logoWidth:t.typography.body3.lineHeight,logoHeight:t.typography.body3.lineHeight,logoPadding:t.spacer.lg,detailsTextStyle:t.typography.body3,titleTextStyle:_objectSpread(_objectSpread({},t.typography.headline1),{},{maxLines:1}),marqueeSync:!0,alpha:t.alpha.primary}},mode:function mode$9(t){return {disabled:{detailsTextStyle:{textColor:t.color.textNeutralDisabled},alpha:t.alpha.inactive}}},tone:function tone$h(t){return {neutral:{titleTextStyle:{textColor:t.color.textNeutral},detailsTextStyle:{textColor:t.color.textNeutral},descriptionTextStyle:{textColor:t.color.textNeutralSecondary},mode:{disabled:{titleTextStyle:{textColor:t.color.textNeutralDisabled},detailsTextStyle:{textColor:t.color.textNeutralDisabled},descriptionTextStyle:{textColor:t.color.textNeutralDisabled}}}},inverse:{titleTextStyle:{textColor:t.color.textInverse},detailsTextStyle:{textColor:t.color.textInverse},descriptionTextStyle:{textColor:t.color.textInverseSecondary},mode:{disabled:{titleTextStyle:{textColor:t.color.textNeutralDisabled},detailsTextStyle:{textColor:t.color.textNeutralDisabled},descriptionTextStyle:{textColor:t.color.textNeutralDisabled}}}},brand:{titleTextStyle:{textColor:t.color.textNeutral},detailsTextStyle:{textColor:t.color.textNeutral},descriptionTextStyle:{textColor:t.color.textNeutralSecondary},mode:{disabled:{titleTextStyle:{textColor:t.color.textNeutralDisabled},detailsTextStyle:{textColor:t.color.textNeutralDisabled},descriptionTextStyle:{textColor:t.color.textNeutralDisabled}}}}}}}),Gt=withMarqueeSync(function(t){_inherits(MetadataBase,tt);var i=_createSuper(MetadataBase);function MetadataBase(){return _classCallCheck(this,MetadataBase),i.apply(this,arguments)}return _createClass(MetadataBase,[{key:"_titleLoaded",value:function _titleLoaded(){this._updateLayout();}},{key:"_detailsLoaded",value:function _detailsLoaded(t){var i=t.w,o=t.h;this._updateDetailsLayout({w:i,h:o}),this._updateLayout();}},{key:"_descriptionLoaded",value:function _descriptionLoaded(){this._updateLayout();}},{key:"_updateDetailsLayout",value:function _updateDetailsLayout(t){var i=t.w,o=t.h;(this.details||this._Details)&&this._DetailsWrapper&&(this._DetailsWrapper.alpha=this.style.alpha,this._DetailsWrapper.w=i,this._DetailsWrapper.h=o);}},{key:"_update",value:function _update(){this._updateLines(),this._updateLayout();}},{key:"_updateLines",value:function _updateLines(){this._Text.w=this._textW(),this._updateTitle(),this._updateDetails(),this._updateDescription();}},{key:"_updateLayout",value:function _updateLayout(){this._updatePositions(),this._updateMetadataHeight(),this._updateLogo();}},{key:"_updatePositions",value:function _updatePositions(){this._Text.h=this._textH(),this._Text.x=this.logo&&"left"===this.logoPosition?this.logoWidth+this.style.logoPadding:0,this._Text.y=(this.h-this._Text.h)/2;}},{key:"_updateMetadataHeight",value:function _updateMetadataHeight(){var t=Math.max(this.logoHeight,this._Text.h);this.h!==t&&(this.h=t,this.signal("updateComponentDimensions"));}},{key:"_updateTitle",value:function _updateTitle(){(this.title||this._Title)&&(this._Title||this._Text.childList.addAt({ref:"Title",type:At,signals:{textBoxChanged:"_titleLoaded"}},0),this._Title.patch({content:this.title,marquee:this.marquee,style:{textStyle:_objectSpread(_objectSpread({},this.style.titleTextStyle),{},{maxLines:1,wordWrap:!0,wordWrapWidth:this._Text.w})}}));}},{key:"resetMarquee",value:function resetMarquee(){this.marquee&&(this.title&&(this._Title||this._updateTitle(),this._Title.toggleMarquee()),this.description&&(this._Description||this._updateDescription(),this._Description.toggleMarquee()));}},{key:"_updateDetails",value:function _updateDetails(){(this.details||this._Details)&&(this._Details||this._DetailsWrapper.patch({Details:{type:At,signals:{textBoxChanged:"_detailsLoaded"}}}),this._Details.patch({content:this.details,style:{textStyle:this.style.detailsTextStyle}}),this._Details.finalW>this._textW()?this._Details.patch({w:this._textW()+this.style.fadeWidth/2,shader:{type:wt,positionLeft:0,positionRight:this.style.fadeWidth},rtt:!0}):this._DetailsWrapper.shader=void 0,this._DetailsWrapper.visible=!!this.details,this._DetailsWrapper.alpha=this.style.alpha);}},{key:"_updateDescription",value:function _updateDescription(){(this.description||this._Description)&&(this._Description||this._Text.childList.add({ref:"Description",type:At,signals:{textBoxChanged:"_descriptionLoaded"}}),this._Description.patch({content:this.description,marquee:this.marquee,style:{textStyle:_objectSpread(_objectSpread({},this.style.descriptionTextStyle),{},{maxLines:1,wordWrap:!0,wordWrapWidth:this._Text.w})}}));}},{key:"_updateLogo",value:function _updateLogo(){(this.logo||this._Logo)&&(this._Logo||this.patch({Logo:{flexItem:!1,type:st}}),this.logoPosition=this.logoPosition||"right",this._Logo.patch({w:this.logoWidth,h:this.logoHeight,icon:this.logo,alpha:this.style.alpha}),this._Logo.x="left"===this.logoPosition?0:this.w-this._Logo.w,this._Logo.y=(this.h-this.logoHeight)/2);}},{key:"_textW",value:function _textW(){return this.w-(this.logo?this.logoWidth+this.style.logoPadding:0)}},{key:"_textH",value:function _textH(){return (this.title&&this._Title&&this._Title.h||0)+(this.details&&this._DetailsWrapper&&this._DetailsWrapper.h||0)+(this.description&&this._Description&&this._Description.h||0)}},{key:"_getLogoWidth",value:function _getLogoWidth(){return void 0!==this._logoWidth?this._logoWidth:this.style.logoWidth}},{key:"_setLogoWidth",value:function _setLogoWidth(t){return void 0!==t?t:this.logoWidth}},{key:"_getLogoHeight",value:function _getLogoHeight(){return void 0!==this._logoHeight?this._logoHeight:this.style.logoHeight}},{key:"_setLogoHeight",value:function _setLogoHeight(t){return void 0!==t?t:this.logoHeight}},{key:"syncArray",get:function get(){return [].concat(_toConsumableArray(this._Title?[this._Title]:[]),_toConsumableArray(this._Description?[this._Description]:[]),_toConsumableArray(this._Details?[this._Details]:[]))}},{key:"announce",get:function get(){return this._announce||[this._Title&&this._Title.announce,this._Details&&this._Details.announce,this._Description&&this._Description.announce,this.logoTitle]},set:function set(t){_set(_getPrototypeOf(MetadataBase.prototype),"announce",t,this,!0);}}],[{key:"__componentName",get:function get(){return "MetadataBase"}},{key:"__themeStyle",get:function get(){return Yt}},{key:"_template",value:function _template(){return {Text:{flex:{direction:"column",justifyContent:"flex-start"},DetailsWrapper:{}}}}},{key:"properties",get:function get(){return ["description","logo","logoHeight","logoPosition","logoTitle","logoWidth","details","title","marquee"]}},{key:"tags",get:function get(){return ["Text",{name:"Title",path:"Text.Title"},{name:"DetailsWrapper",path:"Text.DetailsWrapper"},{name:"Details",path:"Text.DetailsWrapper.Details"},{name:"Description",path:"Text.Description"},"Logo"]}},{key:"aliasStyles",get:function get(){return [{prev:"subtitleTextStyle",curr:"detailsTextStyle"}]}},{key:"aliasProperties",get:function get(){return [{prev:"subtitle",curr:"details"}]}}]),MetadataBase}()),Qt=Object.freeze({__proto__:null,base:function base$x(t){return {titleTextStyle:t.typography.headline3,descriptionTextStyle:t.typography.body3}},tone:function tone$g(t){return {neutral:{detailsTextStyle:{textColor:t.color.textNeutralSecondary},descriptionTextStyle:{textColor:t.color.textNeutral},mode:{disabled:{detailsTextStyle:{textColor:t.color.textNeutralDisabled},descriptionTextStyle:{textColor:t.color.textNeutralDisabled}}}},inverse:{detailsTextStyle:{textColor:t.color.textInverseSecondary},descriptionTextStyle:{textColor:t.color.textInverse},mode:{disabled:{detailsTextStyle:{textColor:t.color.textNeutralDisabled},descriptionTextStyle:{textColor:t.color.textNeutralDisabled}}}},brand:{detailsTextStyle:{textColor:t.color.textNeutralSecondary},descriptionTextStyle:{textColor:t.color.textNeutral},mode:{disabled:{detailsTextStyle:{textColor:t.color.textNeutralDisabled},descriptionTextStyle:{textColor:t.color.textNeutralDisabled}}}}}}}),$t=function(t){_inherits(MetadataTile,Gt);var i=_createSuper(MetadataTile);function MetadataTile(){return _classCallCheck(this,MetadataTile),i.apply(this,arguments)}return _createClass(MetadataTile,[{key:"_updateDetails",value:function _updateDetails(){(this.details||this._Details)&&(this.description&&this._Details?(this._Details.patch({content:""}),this._Details.alpha=0,this._Details.visible=!1):_get(_getPrototypeOf(MetadataTile.prototype),"_updateDetails",this).call(this));}},{key:"_updateDetailsLayout",value:function _updateDetailsLayout(t){var i=t.h;(this.details||this._Details)&&(this._Details&&!this.description?(this._DetailsWrapper.h=i,this._DetailsWrapper.alpha=this.style.alpha):this._DetailsWrapper.h=0);}},{key:"announce",get:function get(){return this._announce||[this._Title&&this._Title.announce,this._Details&&this._Details.announce||this._Description&&this._Description.announce,this.logoTitle]},set:function set(t){_set(_getPrototypeOf(MetadataTile.prototype),"announce",t,this,!0);}},{key:"_textH",value:function _textH(){return (this.title&&this._Title&&this._Title.h||0)+(this.details&&this._Details&&this._Details.visible&&this._DetailsWrapper.h||0)+(this.description&&this._Description&&this._Description.h||0)}}],[{key:"__componentName",get:function get(){return "MetadataTile"}},{key:"__themeStyle",get:function get(){return Qt}}]),MetadataTile}(),Jt=Object.freeze({__proto__:null,base:function base$w(t){return {height:t.spacer.md,animation:t.animation.utility,radius:t.radius.xs}},tone:function tone$f(t){return {neutral:{barColor:t.color.fillNeutralTertiary,progressColor:t.color.fillNeutral},inverse:{barColor:t.color.fillInverseTertiary,progressColor:t.color.fillInverse},brand:{barColor:t.color.fillNeutralTertiary,progressColor:t.color.fillBrand}}}}),Zt=function(i){_inherits(ProgressBar,tt);var o=_createSuper(ProgressBar);function ProgressBar(){return _classCallCheck(this,ProgressBar),o.apply(this,arguments)}return _createClass(ProgressBar,[{key:"_construct",value:function _construct(){_get(_getPrototypeOf(ProgressBar.prototype),"_construct",this)&&_get(_getPrototypeOf(ProgressBar.prototype),"_construct",this).call(this),this._progress=0;}},{key:"_update",value:function _update(){this._updateTextures(),this._updateProgress(),this._progressChanged&&(this.fireAncestors("$announce",this.announce),this._progressChanged=!1);}},{key:"_updateTextures",value:function _updateTextures(){var i=this._getProgressWidth();this._Bar.texture=t.Tools.getRoundRect(this.w-2,this.h,this.style.radius,0,0,!0,this.style.barColor),this._Progress.texture=t.Tools.getRoundRect(i+1,this.h,this.style.radius,0,0,!0,this.style.progressColor);}},{key:"_updateProgress",value:function _updateProgress(){var t=this._getProgressWidth();this._Progress.smooth={w:[t,this.style.animation],alpha:Number(t>0)};}},{key:"_setProgress",value:function _setProgress(t){return this._progressChanged=t!==this._progress,t}},{key:"announce",get:function get(){if(void 0!==this._announce&&null!==this._announce)return this._announce;var t=this.progress;return t>1?t=1:t<0&&(t=0),"".concat(Math.round(100*t),"%")},set:function set(t){_set(_getPrototypeOf(ProgressBar.prototype),"announce",t,this,!0);}},{key:"_getProgressWidth",value:function _getProgressWidth(){var t=this.w*this._progress;return t<=0?0:Math.min(t,this.w)}}],[{key:"_template",value:function _template(){return {Bar:{zIndex:1},Progress:{alpha:0,zIndex:2}}}},{key:"__themeStyle",get:function get(){return Jt}},{key:"__componentName",get:function get(){return "ProgressBar"}},{key:"properties",get:function get(){return ["progress"]}},{key:"tags",get:function get(){return ["Bar","Progress"]}}]),ProgressBar}(),te=Object.freeze({__proto__:null,base:function base$v(t){return {animationEntrance:t.animation.standardEntrance,animationExit:t.animation.standardExit,logoWidth:5*t.spacer.lg,logoHeight:t.spacer.xxl+t.spacer.md,metadataLocation:"standard",paddingX:t.spacer.xl,paddingY:t.spacer.lg,paddingYProgress:t.spacer.xl,paddingYBetweenContent:t.spacer.md,radius:t.radius.md,alpha:t.alpha.primary}},mode:function mode$8(t){return {disabled:{alpha:t.alpha.inactive}}},tone:function tone$e(t){return {neutral:{mode:{focused:{backgroundColor:t.color.interactiveNeutralFocusSoft}}},inverse:{mode:{focused:{backgroundColor:t.color.interactiveInverseFocusSoft}}},brand:{mode:{focused:{backgroundColor:t.color.interactiveBrandFocusSoft}}}}}}),ee=function(t){_inherits(Tile,mt);var i=_createSuper(Tile);function Tile(){return _classCallCheck(this,Tile),i.apply(this,arguments)}return _createClass(Tile,[{key:"announce",get:function get(){return this._announce||[this._Metadata&&this._Metadata.announce,this._Badge&&this._Badge.announce,this._Label&&this._Label.announce,this._ProgressBar&&this._ProgressBar.announce]},set:function set(t){_set(_getPrototypeOf(Tile.prototype),"announce",t,this,!0);}},{key:"_update",value:function _update(){_get(_getPrototypeOf(Tile.prototype),"_update",this).call(this),this._updateTileColor(),this._updateContent(),this._updateArtwork(),this._updateBadge(),this._updateLabel(),this._updateCheckbox(),this._updateProgressBar(),this._updateMetadata(),this._updateLogo();}},{key:"_getRenderHeight",value:function _getRenderHeight(){var t;return this._isInsetMetadata?_get(_getPrototypeOf(Tile.prototype),"_getRenderHeight",this).call(this):this._h+((null===(t=this._Metadata)||void 0===t?void 0:t.h)+this.style.paddingY||0)}},{key:"innerH",get:function get(){return this._h}},{key:"_shouldShowGradient",get:function get(){var t;return Boolean((this._isInsetMetadata&&this._hasMetadata&&this._shouldShowMetadata||(null===(t=this.progressBar)||void 0===t?void 0:t.progress)>0||this._shouldShowLogo)&&!this._isCircleLayout)}},{key:"_isCircleLayout",get:function get(){return Boolean(this._itemLayout&&this._itemLayout.circle)}},{key:"_foregroundDefaultWidth",get:function get(){return parseFloat(this._w/this._h).toFixed(2)===parseFloat(16/9).toFixed(2)?.5*this.innerW:.75*this.innerW}},{key:"_updateTileColor",value:function _updateTileColor(){this._Tile.alpha=this.style.alpha;}},{key:"_updateContent",value:function _updateContent(){var t=this,i={h:this._h,w:this._w,x:this._w/2,y:this._h/2};this.applySmooth(this._Content,i,Object.keys(i).reduce((function(o,r){return o[r]=[i[r],t._isFocusedMode?t.style.animationEntrance:t.style.animationExit],o}),{}));}},{key:"_updateLogo",value:function _updateLogo(){if(this.logo){var t={w:this.style.logoWidth,h:this.style.logoHeight,icon:this.logo,alpha:this._shouldShowLogo?this.style.alpha:.001,x:this.style.paddingX,y:this._calculateLogoYPosition()};this._Logo?this.applySmooth(this._Logo,t):this.patch({Logo:_objectSpread({type:st,mountY:1},t)});}else this.patch({Logo:void 0});}},{key:"_calculateLogoYPosition",value:function _calculateLogoYPosition(){return this._isInsetMetadata&&this._Metadata?this._metadataY-this._Metadata.h:this._progressBarY?this._progressBarY-this.style.paddingYBetweenContent:this._h-this.style.paddingY}},{key:"_shouldShowLogo",get:function get(){return this.logo&&(this.persistentMetadata||this._isFocusedMode)}},{key:"_updateArtwork",value:function _updateArtwork(){var t,i;this._Artwork.patch(_objectSpread(_objectSpread({mode:this.mode,h:this._h,w:this._w,x:this._w/2,y:this._h/2,src:this.src},this.artwork||{}),{},{style:_objectSpread({radius:null===(t=this.style)||void 0===t?void 0:t.radius},null===(i=this.artwork)||void 0===i?void 0:i.style),gradient:this._shouldShowGradient,shouldScale:this._isFocusedMode}));}},{key:"_getSrc",value:function _getSrc(){return this.artwork&&this.artwork.src||this._src}},{key:"_imageLoaded",value:function _imageLoaded(){this._Background.alpha=0;}},{key:"_updateBadge",value:function _updateBadge(){var t;if(null!==(t=this.badge)&&void 0!==t&&t.title&&!this._isCircleLayout){var i=_objectSpread(_objectSpread({},this.badge),{},{mode:this.mode,x:this.style.paddingX,y:this.style.paddingY,alpha:this._shouldShowBadgeLabel?1:.001});this._Badge?(this._Badge.patch(i),this.applySmooth(this._Badge,i,_objectSpread(_objectSpread({},i),this._badgeLabelTransitions))):this._Content.patch({Badge:_objectSpread(_objectSpread({type:ct},i),{},{signals:{loadedBadge:"_updateBadge"}})});}else this._Badge&&this._Content.patch({Badge:void 0});}},{key:"_updateLabel",value:function _updateLabel(){var t;if(null!==(t=this.label)&&void 0!==t&&t.title&&!this._isCircleLayout){var i=_objectSpread(_objectSpread({},this.label),{},{mode:this.mode,x:this._w-this.style.paddingX,y:this.style.paddingY,alpha:this._shouldShowBadgeLabel?1:.001});this._Label?(this._Label.patch(i),this.applySmooth(this._Label,i,_objectSpread(_objectSpread({},i),{},{x:[i.x,this._shouldShowBadgeLabel?this.style.animationEntrance:this.style.animationExit]},this._badgeLabelTransitions))):this._Content.patch({Label:_objectSpread(_objectSpread({type:Xt,mountX:1},i),{},{signals:{loadedLabel:"_updateLabel"}})});}else this._Label&&this._Content.patch({Label:void 0});}},{key:"_shouldShowBadgeLabel",get:function get(){return this.persistentMetadata||this._isFocusedMode&&!this._isCircleLayout}},{key:"_badgeLabelTransitions",get:function get(){return {y:[this._shouldShowBadgeLabel?this.style.paddingY:0,this._shouldShowBadgeLabel?this.style.animationEntrance:this.style.animationExit],alpha:[this._shouldShowBadgeLabel?1:.001,this._shouldShowBadgeLabel?this.style.animationEntrance:this.style.animationExit]}}},{key:"_updateCheckbox",value:function _updateCheckbox(){var t;if("boolean"==typeof(null===(t=this.checkbox)||void 0===t?void 0:t.checked)&&this.checkbox.checked&&!this._isCircleLayout){var i=_objectSpread(_objectSpread({},this.checkbox),{},{mode:this.mode,x:this._w-this.style.paddingX,y:this._h-this.style.paddingY});this._Checkbox?this.applySmooth(this._Checkbox,i):this._Content.patch({Checkbox:_objectSpread(_objectSpread({},i),{},{type:qt,mount:1})});}else this._Checkbox&&this._Content.patch({Checkbox:void 0});}},{key:"_progressBarY",get:function get(){return (this._ProgressBar&&0!==this._ProgressBar._getTransition("alpha")._targetValue?this._ProgressBar._getTransition("y")._targetValue||this._ProgressBar.y:0)||0}},{key:"_updateProgressBar",value:function _updateProgressBar(){var t,i=this;if("number"==typeof(null===(t=this.progressBar)||void 0===t?void 0:t.progress)&&this.progressBar.progress&&!this._isCircleLayout){if(this.progressBar.progress>0){var o=_objectSpread(_objectSpread({},this.progressBar),{},{mode:this.mode,w:this._w-2*this.style.paddingX,x:this._w/2,y:this._h-this.style.paddingYProgress});if(!this._ProgressBar)return this._Content.patch({ProgressBar:_objectSpread(_objectSpread({},o),{},{type:Zt,mountX:.5,mountY:1,alpha:this._hasMetadata&&this.shouldSmooth?.001:1})}),void(this.shouldSmooth&&(this._ProgressBar.smooth={alpha:[1,{delay:this.style.animationEntrance.duration}]}));this.applySmooth(this._ProgressBar,o,Object.keys(o).reduce((function(t,r){return t[r]=[o[r],i._isFocusedMode?i.style.animationEntrance:i.style.animationExit],t}),{}));}}else this._ProgressBar&&(this.shouldSmooth?(this._ProgressBar._getTransition("alpha").once("finish",(function(){i._removeProgressBar();})),this._ProgressBar.smooth={alpha:0}):this._removeProgressBar());}},{key:"_removeProgressBar",value:function _removeProgressBar(){this._Content.patch({ProgressBar:void 0}),this._updateMetadata();}},{key:"_shouldShowMetadata",get:function get(){return this._hasMetadata&&(this.persistentMetadata&&!this._isInsetMetadata||this._isFocusedMode&&!this._isInsetMetadata||(this.persistentMetadata||this._isFocusedMode)&&this._isInsetMetadata&&!this._isCircleLayout)}},{key:"_isInsetMetadata",get:function get(){return "inset"===this.metadataLocation}},{key:"_metadataTransitions",get:function get(){return {y:[this._metadataY,this._shouldShowMetadata?this.style.animationEntrance:this.style.animationExit],alpha:[this._metadataAlpha,this._shouldShowMetadata?this.style.animationEntrance:this.style.animationExit]}}},{key:"_hasMetadata",get:function get(){var t=this;return $t.properties.some((function(i){return t.metadata&&t.metadata[i]}))}},{key:"_metadataY",get:function get(){return this._shouldShowMetadata&&this._isInsetMetadata?this._progressBarY?this._progressBarY-this.style.paddingYBetweenContent:this._h-this.style.paddingY:this._h+this.style.paddingY}},{key:"_metadataAlpha",get:function get(){return this._shouldShowMetadata?1:.001}},{key:"_metadataPatch",get:function get(){return {alpha:this._metadataAlpha,w:this._w-2*this.style.paddingX,x:this._w/2,y:this._metadataY}}},{key:"_nonSmoothingMetadataPatch",get:function get(){return _objectSpread({mode:this.mode,mountX:.5,mountY:this._isInsetMetadata?1:0,marquee:this._isFocusedMode},this.metadata||{})}},{key:"_getMetadataLocation",value:function _getMetadataLocation(){var t;return null!==(t=this._metadataLocation)&&void 0!==t?t:this.style.metadataLocation}},{key:"_updateMetadata",value:function _updateMetadata(){this._hasMetadata?this._Metadata||!this._hasMetadata?(this._Metadata.patch(this._nonSmoothingMetadataPatch),this._animateMetadata()):this._Content.patch({Metadata:_objectSpread(_objectSpread({type:$t,signals:{updateComponentDimensions:"_metadataLoaded"}},this._nonSmoothingMetadataPatch),this._metadataPatch)}):this._Content.patch({Metadata:void 0});}},{key:"_animateMetadata",value:function _animateMetadata(){this._Metadata&&(this.applySmooth(this._Metadata,this._metadataPatch,this._metadataTransitions),this._isFocusedMode||this._resetMarqueeAnimation());}},{key:"_metadataLoaded",value:function _metadataLoaded(){this._animateMetadata(),this._updateLogo(),this._updateDimensions(),this._isInsetMetadata||this.fireAncestors("$itemChanged");}},{key:"_resetMarqueeAnimation",value:function _resetMarqueeAnimation(){var t=this,i=this._Metadata._getTransition("alpha");i?i.on("finish",(function(){t._Metadata&&t._Metadata.resetMarquee();})):this._Metadata.resetMarquee();}}],[{key:"__componentName",get:function get(){return "Tile"}},{key:"__themeStyle",get:function get(){return te}},{key:"_template",value:function _template(){return _objectSpread(_objectSpread({},_get(_getPrototypeOf(Tile),"_template",this).call(this)),{},{Tile:{Artwork:{type:rt,signals:{imageLoaded:"_imageLoaded"},mount:.5},Content:{mount:.5}}})}},{key:"properties",get:function get(){return ["artwork","badge","checkbox","circle","label","logo","metadata","metadataLocation","persistentMetadata","progressBar","src"]}},{key:"aliasStyles",get:function get(){return [{prev:"iconHeight",curr:"logoHeight"},{prev:"iconWidth",curr:"logoWidth"}]}},{key:"aliasProperties",get:function get(){return [{prev:"iconSrc",curr:"logo"}]}},{key:"tags",get:function get(){return [].concat(_toConsumableArray(_get(_getPrototypeOf(Tile),"tags",this)),["Artwork","Content","Tile",{name:"Badge",path:"Content.Badge"},{name:"Checkbox",path:"Content.Checkbox"},{name:"Logo",path:"Content.Logo"},{name:"Metadata",path:"Content.Metadata"},{name:"ProgressBar",path:"Content.ProgressBar"},{name:"Label",path:"Content.Label"}])}}]),Tile}();var ne=Object.freeze({__proto__:null,base:function base$u(t){return {alpha:t.alpha.primary,counterTextStyle:t.typography.headline3,itemSize:2*t.layout.gutterX,itemSpacing:t.spacer.md,radius:t.radius.sm}},mode:function mode$7(t){return {disabled:{alpha:t.alpha.inactive}}},tone:function tone$d(t){return {neutral:{counterBackgroundColor:t.color.fillInverseSecondary},inverse:{counterBackgroundColor:t.color.fillNeutralSecondary},brand:{counterBackgroundColor:t.color.fillInverseSecondary}}}}),ie=function(i){_inherits(Provider,tt);var o=_createSuper(Provider);function Provider(){return _classCallCheck(this,Provider),o.apply(this,arguments)}return _createClass(Provider,[{key:"providersHidden",get:function get(){return this.providers.length-this._visibleCount}},{key:"_construct",value:function _construct(){this._providers=[],_get(_getPrototypeOf(Provider.prototype),"_construct",this).call(this);}},{key:"_update",value:function _update(){this._updateProviders(),this._updateCounter();}},{key:"_updateProviders",value:function _updateProviders(){var t=this,i=[];this.providers.slice(0,this.visibleCount).forEach((function(o){var r={centerInParent:!0,radius:t.disableRadius?0:t.style.radius,alpha:t.style.alpha,style:o.style||{}};if(o.type===st&&o.icon&&o.w&&o.h){var a=o.w/o.h;r=_objectSpread(_objectSpread({type:st,icon:o.icon},o),{},{w:t.style.itemSize*a,h:t.style.itemSize},r);}else r=_objectSpread({type:st,w:t.style.itemSize,h:t.style.itemSize},r),"object"===_typeof(o)?r=_objectSpread(_objectSpread({},r),o):r.icon=o;i.push(r);})),this._Row.patch({style:{itemSpacing:this.style.itemSpacing},items:i,h:this.style.itemSize});}},{key:"_updateCounter",value:function _updateCounter(){if(this.providers.length>this.visibleCount){var i=this.providersHidden,o={announce:"+".concat(i),alpha:this.style.alpha,w:this.style.itemSize,h:this.style.itemSize,centerInParent:!0,Background:{w:this.style.itemSize,h:this.style.itemSize,texture:t.Tools.getRoundRect(this.style.itemSize,this.style.itemSize,this.style.radius,0,null,!0,this.style.counterBackgroundColor)},Text:{type:At,mountX:.5,mountY:.5,x:this.style.itemSize/2,y:this.style.itemSize/2,content:this.counterText||"+".concat(i),style:{textStyle:this.style.counterTextStyle}}};this._Row.appendItems([o]);}}},{key:"$itemChanged",value:function $itemChanged(){this.signal("providerChanged");}},{key:"_getVisibleCount",value:function _getVisibleCount(){var t=this.providers.length,i=Math.min(Math.max(1,this._visibleCount),t);return this._visibleCount<1&&console.warn("Warning: The specified visible count (".concat(this._visibleCount,") is less than the minimum value (").concat(1,"). Setting it to ").concat(1,".")),this._visibleCount>t&&console.warn("Warning: The specified visible count (".concat(this._visibleCount,") is greater than the maximum value (").concat(t,"). Setting it to ").concat(t,".")),i}},{key:"w",get:function get(){return this._Row.w}},{key:"announce",get:function get(){return this._announce||this._Row.items&&this._Row.items.length&&this._Row.items.map((function(t){return t.announce}))},set:function set(t){_set(_getPrototypeOf(Provider.prototype),"announce",t,this,!0);}}],[{key:"__componentName",get:function get(){return "Provider"}},{key:"__themeStyle",get:function get(){return ne}},{key:"_template",value:function _template(){return {Row:{type:ft,autoResizeWidth:!0}}}},{key:"properties",get:function get(){return ["disableRadius","counterText","providers","visibleCount"]}},{key:"tags",get:function get(){return ["Row"]}}]),Provider}(),oe=Object.freeze({__proto__:null,base:function base$t(t){return {detailsTextStyle:t.typography.body3,descriptionTextStyle:{maxLines:3},descriptionDetailsStyle:{paddingY:5},fadeWidth:t.spacer.md*t.spacer.md,provider:{itemSize:t.spacer.xxxl+t.spacer.md}}},tone:function tone$c(t){return {neutral:{detailsTextStyle:{textColor:t.color.textNeutral},mode:{disabled:{detailsTextStyle:{textColor:t.color.textNeutralDisabled}}}},inverse:{detailsTextStyle:{textColor:t.color.textInverse},mode:{disabled:{detailsTextStyle:{textColor:t.color.textNeutralDisabled}}}},brand:{detailsTextStyle:{textColor:t.color.textNeutral},mode:{disabled:{detailsTextStyle:{textColor:t.color.textNeutralDisabled}}}}}}}),re=function(t){_inherits(MetadataCardContent,Gt);var i,o=_createSuper(MetadataCardContent);function MetadataCardContent(){return _classCallCheck(this,MetadataCardContent),o.apply(this,arguments)}return _createClass(MetadataCardContent,[{key:"_setDetails",value:function _setDetails(t){var i=this;return this._detailsPromise=t?new Promise((function(t){i._detailsPromiseResolver=t;})):void 0,t}},{key:"_setProvider",value:function _setProvider(t){var i=this;return this._providerPromise=t?new Promise((function(t){i._providerPromiseResolver=t;})):void 0,t}},{key:"_update",value:(i=_asyncToGenerator(_regeneratorRuntime().mark((function _callee13(){return _regeneratorRuntime().wrap((function _callee13$(t){for(;;)switch(t.prev=t.next){case 0:return this._updateLines(),this._updateProvider(),t.next=4,Promise.all([this._detailsPromise,this._providerPromise].filter(Boolean));case 4:this._updatePositions();case 5:case"end":return t.stop()}}),_callee13,this)}))),function _update(){return i.apply(this,arguments)})},{key:"_updateLines",value:function _updateLines(){this._Text.w=this.w,this._updateTitle(),this._updateDescription(),this._updateDescriptionDetails(),this._updateDetails();}},{key:"_updateDescription",value:function _updateDescription(){this._Description.patch({content:this.description,style:{textStyle:_objectSpread(_objectSpread({},this.style.descriptionTextStyle),{},{wordWrap:!0,wordWrapWidth:this._Text.w})}});}},{key:"_updateDescriptionDetails",value:function _updateDescriptionDetails(){this._DescriptionDetails.patch({content:this.descriptionDetails,style:{textStyle:_objectSpread(_objectSpread({},this.style.descriptionDetailsTextStyle),{},{maxLines:1,wordWrap:!0,wordWrapWidth:this._Text.w})},y:this.style.descriptionDetailsStyle.paddingY});}},{key:"_updateDetails",value:function _updateDetails(){var t=this._detailsMaxW;this._Details.patch({content:this.details,style:{textStyle:_objectSpread(_objectSpread({},this.style.detailsTextStyle),{},{wordWrap:!0,maxLines:1,wordWrapWidth:t+this.style.fadeWidth/2})}}),this._Details.finalW>t?this._DetailsFader.patch({w:t+this.style.fadeWidth/2,shader:{type:wt,positionLeft:0,positionRight:this.style.fadeWidth}}):this._DetailsFader.shader=void 0;}},{key:"_resolveDetails",value:function _resolveDetails(){this._detailsPromiseResolver&&this._detailsPromiseResolver(),this._updatePositions();}},{key:"_updateProvider",value:function _updateProvider(){this.provider&&this._Provider.patch(_objectSpread(_objectSpread({mode:this.mode},this.provider),{},{style:this.style.provider}));}},{key:"_resolveProvider",value:function _resolveProvider(){this._providerPromiseResolver&&this._providerPromiseResolver(),this._updatePositions();}},{key:"_updatePositions",value:function _updatePositions(){this._Text.h=this._textH,this._Text.w=this._textW,this._DetailsWrapper.w=this._textW,this._DetailsWrapper.h=Math.max(this._providerH,this._Details.h),this._DetailsWrapper.y=this.h-this._DetailsWrapper.h,this._Details.y=this._DetailsWrapper.h/2,this._Provider.x=this._DetailsWrapper.w-this._providerW,this._Provider.y=this._DetailsWrapper.h-this._providerH;}},{key:"_textW",get:function get(){return this.w}},{key:"_textH",get:function get(){return this.h-this._providerH}},{key:"_providerW",get:function get(){return this._Provider.w}},{key:"_providerH",get:function get(){return this._Provider._Row._Items.h}},{key:"_detailsMaxW",get:function get(){return this.w-this._providerW-this.style.fadeWidth/2}},{key:"announce",get:function get(){return this._announce||[this._Title&&this._Title.announce,this._Description&&this._Description.announce,this._DescriptionDetails&&this._DescriptionDetails.announce,this._Details&&this._Details.announce,this._Provider&&this._Provider.announce]},set:function set(t){_set(_getPrototypeOf(MetadataCardContent.prototype),"announce",t,this,!0);}}],[{key:"__componentName",get:function get(){return "MetadataCardContent"}},{key:"__themeStyle",get:function get(){return oe}},{key:"_template",value:function _template(){return {Text:{flex:{direction:"column",justifyContent:"flex-start"},Title:{type:At},Description:{type:At},DescriptionDetails:{type:At}},DetailsWrapper:{DetailsFader:{Details:{mountY:.5,type:At,signals:{textBoxChanged:"_resolveDetails"}}},Provider:{mount:1,type:ie,signals:{providerChanged:"_resolveProvider"}}}}}},{key:"properties",get:function get(){return ["description","descriptionDetails","details","provider","title"]}},{key:"tags",get:function get(){return ["Text",{name:"Title",path:"Text.Title"},{name:"Description",path:"Text.Description"},{name:"DescriptionDetails",path:"Text.DescriptionDetails"},"DetailsWrapper",{name:"DetailsFader",path:"DetailsWrapper.DetailsFader"},{name:"Details",path:"DetailsWrapper.DetailsFader.Details"},{name:"Provider",path:"DetailsWrapper.Provider"}]}}]),MetadataCardContent}(),ae=Object.freeze({__proto__:null,base:function base$s(t){return {expandedWidth:h.getWidthByUpCount(t,2),expandedHeight:h.getDimensions(t,{ratioX:16,ratioY:9,upCount:4}).h,imageSize:{width:h.getDimensions(t,{ratioX:16,ratioY:9,upCount:4}).w,height:h.getDimensions(t,{ratioX:16,ratioY:9,upCount:4}).h},metadata:{descriptionTextStyle:{maxLines:2}},paddingVertical:1.5*t.spacer.md}}}),se=function(t){_inherits(CardContent,Wt);var i=_createSuper(CardContent);function CardContent(){return _classCallCheck(this,CardContent),i.apply(this,arguments)}return _createClass(CardContent,[{key:"_update",value:function _update(){this._updateSize(),this._updateTile(),this._updateRadius(),this._updateMetadata(),_get(_getPrototypeOf(CardContent.prototype),"_update",this).call(this);}},{key:"_updateTitle",value:function _updateTitle(){}},{key:"_updateTitlePosition",value:function _updateTitlePosition(){}},{key:"_updateTile",value:function _updateTile(){var t=this.style.imageSize.w,i=this.style.expandedHeight;"horizontal"!==this._orientation&&(t=this.style.expandedWidth,i=this.style.imageSize.h);var o=this.tile;this.src&&(o=h.clone({src:this.src},this.tile)),this._Tile.patch(_objectSpread(_objectSpread({w:t,h:i},o),{},{persistentMetadata:!0,alpha:this._shouldShowTile?1:0}));}},{key:"_updateMetadata",value:function _updateMetadata(){var t=_objectSpread(_objectSpread(_objectSpread(_objectSpread({},this.metadata),this._metadataPosition),this._metadataDimensions),{},{mode:this.mode,alpha:this._shouldShowMetadata?1:0,style:this.style.metadata});this._Metadata||(t.type=re),this.patch({Metadata:t});}},{key:"_updateSize",value:function _updateSize(){var t=this.style.expandedWidth,i=this.style.expandedHeight;this._collapse&&("horizontal"===this._orientation?t=this._collapseW:i=this._collapseH),this.w=t,this.h=i;}},{key:"_updateRadius",value:function _updateRadius(){var t=Array.isArray(this.style.radius)&&4===this.style.radius.length?this.style.radius:Array(4).fill(this.style.radius),i=t;this._collapse||(i="horizontal"===this._orientation?[t[0],0,0,t[3]]:[t[0],t[1],0,0]),this._Tile.patch({style:{radius:i}});}},{key:"_getSrc",value:function _getSrc(){return this.tile&&(this.tile.artwork&&this.tile.artwork.src||this.tile.src)||this._src}},{key:"_metadataDimensions",get:function get(){var t=2*this.style.paddingHorizontal,i=2*this.style.paddingVertical,o=this.style.expandedWidth-this.style.imageSize.w-t,r=this.style.expandedHeight-i;return "horizontal"!==this.orientation&&(o=this.style.expandedWidth-t,r=this.style.expandedHeight-this.style.imageSize.h-i),{w:o,h:r}}},{key:"_metadataPosition",get:function get(){var t=this.style.paddingHorizontal,i=this.style.paddingVertical,o=t+(this._collapse?0:this.style.imageSize.w),r=i;return "horizontal"!==this.orientation&&(o=t,r=i+(this._collapse?0:this.style.imageSize.h)),{x:o,y:r}}},{key:"_shouldShowMetadata",get:function get(){return !this._collapse||this.collapseToMetadata}},{key:"_shouldShowTile",get:function get(){return !this._collapse||this._collapse&&!this.collapseToMetadata}},{key:"_collapse",get:function get(){return this.shouldCollapse&&!this._isFocusedMode}},{key:"_collapseW",get:function get(){return this.collapseToMetadata?this.style.expandedWidth-this.style.imageSize.w:this.style.imageSize.w}},{key:"_collapseH",get:function get(){return this.collapseToMetadata?this.style.expandedHeight-this.style.imageSize.h:this.style.imageSize.h}},{key:"announce",get:function get(){return this._announce||[this._Metadata&&this._Metadata.announce,this._Tile&&this._Tile.announce]},set:function set(t){_set(_getPrototypeOf(CardContent.prototype),"announce",t,this,!0);}}],[{key:"__componentName",get:function get(){return "CardContent"}},{key:"__themeStyle",get:function get(){return ae}},{key:"_template",value:function _template(){return _objectSpread(_objectSpread({},_get(_getPrototypeOf(CardContent),"_template",this).call(this)),{},{Tile:{type:ee}})}},{key:"properties",get:function get(){return [].concat(_toConsumableArray(_get(_getPrototypeOf(CardContent),"properties",this)),["tile","metadata","orientation","collapseToMetadata","shouldCollapse","src"])}},{key:"tags",get:function get(){return [].concat(_toConsumableArray(_get(_getPrototypeOf(CardContent),"tags",this)),["Metadata","Tile"])}},{key:"aliasStyles",get:function get(){return [{prev:"expandedW",curr:"expandedWidth"},{prev:"expandedH",curr:"expandedHeight"}]}}]),CardContent}(),le=function(t){_inherits(CardContentHorizontal,se);var i=_createSuper(CardContentHorizontal);function CardContentHorizontal(){return _classCallCheck(this,CardContentHorizontal),i.apply(this,arguments)}return _createClass(CardContentHorizontal,[{key:"_init",value:function _init(){this._orientation="horizontal",_get(_getPrototypeOf(CardContentHorizontal.prototype),"_init",this).call(this);}}],[{key:"__componentName",get:function get(){return "CardContentHorizontal"}},{key:"__themeStyle",get:function get(){return ae}}]),CardContentHorizontal}(),ce=Object.freeze({__proto__:null,base:function base$r(t){var i=h.getDimensions(t,{ratioX:16,ratioY:9,upCount:3}),o=i.w,r=i.h;return {expandedWidth:h.getWidthByColumnSpan(t,8),expandedHeight:r,imageSize:{width:o,height:r},metadata:{descriptionTextStyle:{maxLines:3}}}}});(function(t){_inherits(CardContentHorizontalLarge,le);var i=_createSuper(CardContentHorizontalLarge);function CardContentHorizontalLarge(){return _classCallCheck(this,CardContentHorizontalLarge),i.apply(this,arguments)}return _createClass(CardContentHorizontalLarge,null,[{key:"__componentName",get:function get(){return "CardContentHorizontalLarge"}},{key:"__themeStyle",get:function get(){return ce}}]),CardContentHorizontalLarge})();var he=Object.freeze({__proto__:null,base:function base$q(t){return {expandedWidth:h.getWidthByUpCount(t,4),expandedHeight:h.getDimensions(t,{ratioX:16,ratioY:9,upCount:4}).h+7*t.spacer.xxxl+t.spacer.lg+t.spacer.xxs,metadata:{descriptionTextStyle:{maxLines:3}}}}}),de=function(t){_inherits(CardContentVertical,se);var i=_createSuper(CardContentVertical);function CardContentVertical(){return _classCallCheck(this,CardContentVertical),i.apply(this,arguments)}return _createClass(CardContentVertical,[{key:"_init",value:function _init(){this._orientation="vertical",_get(_getPrototypeOf(CardContentVertical.prototype),"_init",this).call(this);}}],[{key:"__componentName",get:function get(){return "CardContentVertical"}},{key:"__themeStyle",get:function get(){return he}}]),CardContentVertical}(),pe=Object.freeze({__proto__:null,base:function base$p(t){return {expandedHeight:h.getDimensions(t,{ratioX:16,ratioY:9,upCount:4}).h+14*t.spacer.md,metadata:{descriptionTextStyle:{maxLines:1}}}}});(function(t){_inherits(CardContentVerticalSmall,de);var i=_createSuper(CardContentVerticalSmall);function CardContentVerticalSmall(){return _classCallCheck(this,CardContentVerticalSmall),i.apply(this,arguments)}return _createClass(CardContentVerticalSmall,[{key:"_setMetadata",value:function _setMetadata(t){return _objectSpread(_objectSpread({},t),{},{details:void 0,provider:void 0})}}],[{key:"__componentName",get:function get(){return "CardContentVerticalSmall"}},{key:"__themeStyle",get:function get(){return pe}}]),CardContentVerticalSmall})();var ye=Object.freeze({__proto__:null,base:function base$o(t){var i=t.stroke.sm,o=t.spacer.xl;return {width:o,height:o,iconWidth:t.spacer.md,iconHeight:t.spacer.md,radius:t.radius.xs,strokeWidth:i}}});(function(t){_inherits(CheckboxSmall,qt);var i=_createSuper(CheckboxSmall);function CheckboxSmall(){return _classCallCheck(this,CheckboxSmall),i.apply(this,arguments)}return _createClass(CheckboxSmall,null,[{key:"__themeStyle",get:function get(){return ye}}]),CheckboxSmall})();var ge=Object.freeze({__proto__:null,base:function base$n(t){return {itemSpacing:t.layout.gutterY,scrollIndex:0,itemTransition:_objectSpread(_objectSpread({},t.animation.standardEntrance),{},{duration:t.animation.duration.fast})}}}),me=function(t){_inherits(Column,_t);var i=_createSuper(Column);function Column(){return _classCallCheck(this,Column),i.apply(this,arguments)}return _createClass(Column,[{key:"_shouldScroll",value:function _shouldScroll(){var t=this.alwaysScroll;t||this.neverScroll||(t=this.Items.childList.last&&(this.shouldScrollUp()||this.shouldScrollDown()));return this.selectedIndex<this.scrollIndex&&(t=!1),t}},{key:"_render",value:function _render(t,i){if(this._prevLastScrollIndex=this._lastScrollIndex,this.plinko&&i&&i.selected&&(0!==this.items.indexOf(i)||!i.skipPlinko)){var o=this.checkSkipPlinko(i,t);t.selectedIndex=this._getIndexOfItemNear(t,o||i);}else t&&!t.selectedIndex&&(t.selectedIndex=0);if(this.Items.children.length){if(this._shouldScroll()){var r=this.selectedIndex>this._lastScrollIndex?this.Items.children[this._lastScrollIndex-this.scrollIndex]:this.selected;this.Items.children[this._firstFocusableIndex()]===r&&(r=this.Items.children[0]);var a=(this.Items.children[this.scrollIndex]||{y:0}).y,l=[-(r||this.Items.childList.first).transition("y").targetValue+(r===this.selected?a:0),this.style.itemTransition],c=-r.y+(r===this.selected?a:0);this.applySmooth(this.Items,{y:c},{y:l}),this.shouldSmooth||this._updateTransitionTarget(this.Items,"y",c);}}else this.applySmooth(this.Items,{y:this.itemPosY}),this.shouldSmooth||this._updateTransitionTarget(this.Items,"y",this.itemPosY);this.onScreenEffect(this.onScreenItems);}},{key:"_performRender",value:function _performRender(){this._render(this.selected,this.prevSelected);}},{key:"checkSkipPlinko",value:function checkSkipPlinko(t,i){var o=this;if(!t||!t.skipPlinko||[0,this.items.length-1].includes(this.items.indexOf(t)))return null;var r=this.items.indexOf(t),a=r-this.items.indexOf(i),l=(a>0?this.items.slice(r).map((function(t){return {skipPlinko:t.skipPlinko,index:o.items.indexOf(t)}})):this.items.slice(0,r+1).map((function(t){return {skipPlinko:t.skipPlinko,index:o.items.indexOf(t)}})).reverse()).find((function(t){return t.skipPlinko&&!o.items[t.index+a].skipPlinko})),c=l?l.index+a:r+a;return this.items[c]}},{key:"_itemsY",get:function get(){return l(this.Items)}},{key:"$removeItem",value:function $removeItem(t){if(t){var i=t===this.selected;this.Items.childList.remove(t),this.queueRequestUpdate(),(i||this.selectedIndex>=this.items.length)&&(this.selectedIndex=this._selectedIndex),this.items.length||this.fireAncestors("$columnEmpty");}}},{key:"$columnChanged",value:function $columnChanged(){this.queueRequestUpdate();}},{key:"_isOnScreen",value:function _isOnScreen(t){return !!t&&this._isComponentVerticallyVisible(t)}},{key:"onScreenEffect",value:function onScreenEffect(){}}],[{key:"__componentName",get:function get(){return "Column"}},{key:"__themeStyle",get:function get(){return ge}},{key:"_template",value:function _template(){return _objectSpread(_objectSpread({},_get(_getPrototypeOf(Column),"_template",this).call(this)),{},{direction:"column"})}}]),Column}(),ve=function base$m(t){var i=t.spacer.lg,o=t.radius.xl,r=Math.max(o-i/2,0);return {height:8*t.spacer.md,iconStyle:{radius:o,width:t.spacer.xxxl,height:t.spacer.xxxl},logoStyle:{radius:r,width:7*t.spacer.md,height:6*t.spacer.md},minWidth:9*t.spacer.md,paddingX:i,paddingXNoTitle:t.spacer.md,prefixPadding:t.spacer.md,radius:o,contentSpacing:t.spacer.md}},xe=Object.freeze({__proto__:null,base:ve}),Se=function(t){_inherits(Control,Bt);var i=_createSuper(Control);function Control(){return _classCallCheck(this,Control),i.apply(this,arguments)}return _createClass(Control,[{key:"_update",value:function _update(){this._updatePrefixStyle(),_get(_getPrototypeOf(Control.prototype),"_update",this).call(this),this._updateCollapseStatus();}},{key:"_updateCollapseStatus",value:function _updateCollapseStatus(){this._Title&&(this._Title.visible=!this._collapse);}},{key:"_updatePrefixStyle",value:function _updatePrefixStyle(){this._prefix&&(this.logo?this._updatePrefixObj(this.logo,{style:_objectSpread({color:void 0},this.style.logoStyle)}):this.icon&&this._updatePrefixObj(this.icon,{style:this.style.iconStyle}));}},{key:"_patchTitle",value:function _patchTitle(t,i){this._Title.patch({x:t,mountX:i});}},{key:"_updateContentPosition",value:function _updateContentPosition(){if(this._prefix&&this._Title)switch(this._Content.patch({mountX:0,x:this._paddingLeft}),this._justify){case"left":this._patchTitle(0,0);break;case"right":if(this.w<this._Prefix.w+this._Title.w)this._patchTitle(0,0);else {var t=this.w-(this._paddingLeft+this._paddingRight+this._Prefix.w+this.style.contentSpacing);this._patchTitle(t,1);}break;default:if(this.fixed)if(this.w<this._Prefix.w+this._Title.w)this._patchTitle(0,0);else {var i=(this.w-(this._paddingLeft+this._Prefix.w+this._paddingRight))/2;this._patchTitle(i,.5);}else {var o=(this.w-(this._paddingLeft+this._Prefix.w+this.style.contentSpacing+this._paddingRight))/2;this._patchTitle(o,.5);}}else _get(_getPrototypeOf(Control.prototype),"_updateContentPosition",this).call(this),this._Title&&this._patchTitle(0,0);}},{key:"_setPrefix",value:function _setPrefix(){}},{key:"_setSuffix",value:function _setSuffix(){}},{key:"_updatePrefixObj",value:function _updatePrefixObj(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this._prefix=_objectSpread({type:st,icon:t},i);}},{key:"_setIcon",value:function _setIcon(t){return this.logo||(t?this._updatePrefixObj(t,{style:this.style.iconStyle}):this._prefix=t),t}},{key:"_setLogo",value:function _setLogo(t){return t?this._updatePrefixObj(t,{style:_objectSpread({color:void 0},this.style.logoStyle)}):this.icon?this._updatePrefixObj(this.icon,{style:this.style.iconStyle}):this._prefix=t,t}},{key:"_paddingLeft",get:function get(){return this.logo?this.style.paddingXNoTitle:this.style.paddingX}},{key:"_paddingRight",get:function get(){return !this.logo||this._hasTitle&&!this._collapse?this.style.paddingX:this.style.paddingXNoTitle}},{key:"_collapse",get:function get(){return this.shouldCollapse&&!this._isFocusedMode}},{key:"_announceComponentName",get:function get(){return Control.__componentName}}],[{key:"__componentName",get:function get(){return "Control"}},{key:"__themeStyle",get:function get(){return xe}},{key:"properties",get:function get(){return [].concat(_toConsumableArray(_get(_getPrototypeOf(Control),"properties",this)),["icon","logo","shouldCollapse"])}},{key:"aliasStyles",get:function get(){return [{prev:"titlePadding",curr:"contentSpacing"}]}}]),Control}(),ke=Object.freeze({__proto__:null,base:function base$l(t){var i=ve(t),o=7*t.spacer.md,r=(i.height-o)/2,a=Math.max(i.radius-r,0);return {height:o,logoStyle:{radius:Math.max(a-i.paddingX/2,0),height:5*t.spacer.md,width:6*t.spacer.md},radius:a,minWidth:8*t.spacer.md,textStyle:t.typography.button2}}});(function(t){_inherits(ControlSmall,Se);var i=_createSuper(ControlSmall);function ControlSmall(){return _classCallCheck(this,ControlSmall),i.apply(this,arguments)}return _createClass(ControlSmall,null,[{key:"__componentName",get:function get(){return "ControlSmall"}},{key:"__themeStyle",get:function get(){return ke}}]),ControlSmall})();var Ce=Object.freeze({__proto__:null,base:function base$k(t){return {width:getWidthByUpCount(t,1),titleMarginLeft:t.layout.gutterX,titleTextStyle:_objectSpread(_objectSpread({},t.typography.headline1),{},{textColor:t.color.textNeutral}),titleMarginBottom:t.spacer.lg}},tone:function tone$b(t){return {neutral:{titleTextStyle:{textColor:t.color.textNeutral}},inverse:{titleTextStyle:{textColor:t.color.textInverse}},brand:{titleTextStyle:{textColor:t.color.textNeutral}}}}}),we=function(t){_inherits(TitleRow,ft);var i=_createSuper(TitleRow);function TitleRow(){return _classCallCheck(this,TitleRow),i.apply(this,arguments)}return _createClass(TitleRow,[{key:"_titleLoaded",value:function _titleLoaded(){this._updateRow();}},{key:"_construct",value:function _construct(){_get(_getPrototypeOf(TitleRow.prototype),"_construct",this).call(this),this._autoResizeHeight=!0;}},{key:"_update",value:function _update(){_get(_getPrototypeOf(TitleRow.prototype),"_update",this).call(this),this._updateTitle(),this._updateRow();}},{key:"_autoResize",value:function _autoResize(){this.w=this.w||this.style.w,this.h=this.autoResizeHeight?this.Items.y+this.Items.h:this.h;}},{key:"_updateTitle",value:function _updateTitle(){this.title?this._Title.patch({x:this.style.titleMarginLeft,content:this.title,style:{textStyle:this.style.titleTextStyle}}):this._Title&&this._Title.patch({h:0,content:""});}},{key:"_updateRow",value:function _updateRow(){this.applySmooth(this.Items,{y:this.title?this._Title.finalH+this.style.titleMarginBottom:0});}},{key:"announce",get:function get(){return this._announce||this._Title&&this._Title.announce},set:function set(t){_set(_getPrototypeOf(TitleRow.prototype),"announce",t,this,!0);}}],[{key:"__componentName",get:function get(){return "TitleRow"}},{key:"__themeStyle",get:function get(){return Ce}},{key:"_template",value:function _template(){return _objectSpread({Title:{type:At,signals:{textBoxChanged:"_titleLoaded"}}},_get(_getPrototypeOf(TitleRow),"_template",this).call(this))}},{key:"properties",get:function get(){return [].concat(_toConsumableArray(_get(_getPrototypeOf(TitleRow),"properties",this)),["title"])}},{key:"tags",get:function get(){return [].concat(_toConsumableArray(_get(_getPrototypeOf(TitleRow),"tags",this)),["Title"])}},{key:"aliasStyles",get:function get(){return [{prev:"rowMarginTop",curr:"titleMarginBottom"}]}}]),TitleRow}(),Te=Object.freeze({__proto__:null,base:function base$j(t){return {extraItemSpacing:t.spacer.lg}}});(function(t){_inherits(ControlRow,we);var i=_createSuper(ControlRow);function ControlRow(){return _classCallCheck(this,ControlRow),i.apply(this,arguments)}return _createClass(ControlRow,[{key:"_construct",value:function _construct(){_get(_getPrototypeOf(ControlRow.prototype),"_construct",this).call(this),this._leftControls=[],this._contentItems=[],this._rightControls=[],this._lastLeftControlIndex=-1,this._lastItemIndex=-1,this._lazyLoadBuffer=0;}},{key:"_updateContent",value:function _updateContent(){var t=[];this.leftControls.length&&t.push.apply(t,_toConsumableArray(this._withExtraSpacing(this.leftControls,!0))),this.contentItems.length&&t.push.apply(t,_toConsumableArray(this._withExtraSpacing(this.contentItems))),this.rightControls.length&&t.push.apply(t,_toConsumableArray(this.rightControls)),t.length&&this.patch({alpha:1,items:t,selectedIndex:this.leftControls.length,startLazyScrollIndex:this.leftControls.length,stopLazyScrollIndex:this.leftControls.length+this.contentItems.length-1});}},{key:"_withExtraSpacing",value:function _withExtraSpacing(t){var i=arguments.length>1&&void 0!==arguments[1]&&arguments[1],o=_toConsumableArray(t),r=i?this._prevLeftControls:this._prevItems;return r&&r.length&&o[r.length-1]&&(o[r.length-1].extraItemSpacing=0),o[o.length-1].extraItemSpacing=null==this.extraItemSpacing?this.style.extraItemSpacing:this.extraItemSpacing,i?this._prevLeftControls=o:this._prevItems=o,o}},{key:"_getMoreItems",value:function _getMoreItems(){if(this.lazyLoadBuffer){var t=this.contentItems.length-1-this.lazyLoadBuffer;this.selectedIndex-this.leftControls.length>=t&&this.selectedIndex<this.leftControls.length+this.contentItems.length&&this.loadMoreItems();}}},{key:"loadMoreItems",value:function loadMoreItems(){this.signal("loadMoreItems");}},{key:"_selectedChange",value:function _selectedChange(t,i){_get(_getPrototypeOf(ControlRow.prototype),"_selectedChange",this).call(this,t,i),this._getMoreItems();}},{key:"_appendItemsAt",value:function _appendItemsAt(t,i,o){var r=_toConsumableArray(t);null!=o&&(this.items[o].extraItemSpacing=void 0,r[r.length-1].extraItemSpacing=null==this.extraItemSpacing?this.style.extraItemSpacing:this.extraItemSpacing),this.appendItemsAt(r,i);}},{key:"addContentItems",value:function addContentItems(t){var i=this._createContentItems(t),o=this._lastItemIndex+1;this._appendItemsAt(i,o,this._lastItemIndex),this._lastItemIndex+=i.length,this._contentItems&&(this._contentItems=[].concat(_toConsumableArray(this.contentItems),_toConsumableArray(i))),this.patch({stopLazyScrollIndex:this.leftControls.length+this.contentItems.length-1});}},{key:"addContentItemsAt",value:function addContentItemsAt(t,i){var o=this._createContentItems(t),r=this._lastLeftControlIndex+1+i;if(r===this._lastItemIndex+1)this.addContentItems(o);else {var a;if(this._appendItemsAt(o,r),this._contentItems)(a=this._contentItems).splice.apply(a,[r,0].concat(_toConsumableArray(o))),this._lastItemIndex=this.contentItems.length-1;this.patch({stopLazyScrollIndex:this.leftControls.length+this.contentItems.length-1});}}},{key:"removeContentItemAt",value:function removeContentItemAt(t){var i=this._lastLeftControlIndex+1+t;this.removeItemAt(i),this._lastItemIndex--,this._contentItems&&this._contentItems.splice(t,1),this.patch({startLazyScrollIndex:this.leftControls.length,stopLazyScrollIndex:this.leftControls.length+this.contentItems.length-1});}},{key:"addLeftControls",value:function addLeftControls(t){var i=this._createControls(t),o=this._lastLeftControlIndex+1;this._appendItemsAt(i,o,this._lastLeftControlIndex),this._leftControls&&(this._leftControls=[].concat(_toConsumableArray(this._leftControls),_toConsumableArray(t)),this._lastLeftControlIndex=this._leftControls.length-1,this._lastItemIndex+=t.length),this.patch({startLazyScrollIndex:this.leftControls.length,stopLazyScrollIndex:this.leftControls.length+this.contentItems.length-1});}},{key:"addLeftControlsAt",value:function addLeftControlsAt(t,i){var o=this._createControls(t);if(i===this._lastLeftControlIndex+1)this.addLeftControls(t);else {var r;if(this._appendItemsAt(o,i),this.leftControls)(r=this._leftControls).splice.apply(r,[i,0].concat(_toConsumableArray(t))),this._lastLeftControlIndex=this._leftControls.length-1,this._lastItemIndex+=t.length;this.patch({startLazyScrollIndex:this.leftControls.length,stopLazyScrollIndex:this.leftControls.length+this.contentItems.length-1});}}},{key:"removeLeftControlAt",value:function removeLeftControlAt(t){this.removeItemAt(t),this._lastLeftControlIndex--,this._lastItemIndex--,this.leftControls&&this._leftControls.splice(t,1),this.patch({startLazyScrollIndex:this.leftControls.length,stopLazyScrollIndex:this.leftControls.length+this.contentItems.length-1});}},{key:"addRightControls",value:function addRightControls(t){var i;(i=this._rightControls).push.apply(i,_toConsumableArray(t)),this._appendItemsAt(this._createControls(t),this.items.length);}},{key:"addRightControlsAt",value:function addRightControlsAt(t,i){var o,r=this._leftControls.length+this._contentItems.length+i;(o=this._rightControls).splice.apply(o,[i,0].concat(_toConsumableArray(t))),this._appendItemsAt(this._createControls(t),r);}},{key:"removeRightControlAt",value:function removeRightControlAt(t){var i=this.leftControls.length+this.contentItems.length+t;this.removeItemAt(i),this.rightControls&&this._rightControls.splice(t,1);}},{key:"_createControls",value:function _createControls(t){return t.map((function(t){return _objectSpread({backgroundType:"fill",centerInParent:!0},t)}))}},{key:"_createContentItems",value:function _createContentItems(t){return t.map((function(t){return _objectSpread(_objectSpread({},t),{},{centerInParent:!0})}))}},{key:"_setLeftControls",value:function _setLeftControls(t){this._leftControls=this._createControls(t),this._lastLeftControlIndex=t.length-1,this._updateContent();}},{key:"_getLeftControls",value:function _getLeftControls(){return this._leftControls}},{key:"_setRightControls",value:function _setRightControls(t){this._rightControls=this._createControls(t),this._updateContent();}},{key:"_getRightControls",value:function _getRightControls(){return this._rightControls}},{key:"_getContentItems",value:function _getContentItems(){return this._contentItems}},{key:"_setContentItems",value:function _setContentItems(t){this._contentItems=this._createContentItems(t),this._lastItemIndex=this._lastLeftControlIndex+t.length,this._updateContent();}},{key:"_getLeftControlItems",value:function _getLeftControlItems(){return this.leftControls.length?this.items.slice(0,this._lastLeftControlIndex+1):[]}},{key:"_getContentItemItems",value:function _getContentItemItems(){return this.contentItems.length?this.items.slice(this._lastLeftControlIndex+1,this._lastItemIndex+1):[]}},{key:"_getRightControlItems",value:function _getRightControlItems(){if(this.rightControls.length){var t=this._lastItemIndex||this._lastLeftControlIndex;return t?this.items.slice(t+1):this.items}return []}},{key:"leftControls",get:function get(){return this._getLeftControls()},set:function set(t){this._setLeftControls(t);}},{key:"rightControls",get:function get(){return this._getRightControls()},set:function set(t){this._setRightControls(t);}},{key:"contentItems",get:function get(){return this._getContentItems()},set:function set(t){this._setContentItems(t);}},{key:"lazyLoadBuffer",get:function get(){return this._lazyLoadBuffer},set:function set(t){this._lazyLoadBuffer=t,this._getMoreItems();}}],[{key:"__componentName",get:function get(){return "ControlRow"}},{key:"__themeStyles",get:function get(){return Te}},{key:"_template",value:function _template(){return _objectSpread(_objectSpread({},_get(_getPrototypeOf(ControlRow),"_template",this).call(this)),{},{alpha:0,lazyScroll:!0,signals:{selectedChange:"_getMoreItems"}})}},{key:"properties",get:function get(){return [].concat(_toConsumableArray(_get(_getPrototypeOf(ControlRow),"properties",this)),["extraItemSpacing"])}}]),ControlRow})();var Ae=Object.freeze({__proto__:null,base:function base$i(t){return {propertyTextStyle:_objectSpread(_objectSpread({},t.typography.headline1),{},{textColor:t.color.textNeutral}),valueTextStyle:_objectSpread(_objectSpread({},t.typography.body1),{},{textColor:t.color.textNeutral})}}}),Pe=function(t){_inherits(Spacer,tt);var i=_createSuper(Spacer);function Spacer(){return _classCallCheck(this,Spacer),i.apply(this,arguments)}return _createClass(Spacer,[{key:"_update",value:function _update(){this._Line.w=this.w,this._TickRight.x=this._Line.w,this.lineColor&&(this._Line.color=this._TickLeft.color=this._TickRight.color=this.lineColor),this.rotation=this.vertical?Math.PI/2:0,this.signal("spacerLoaded");}}],[{key:"__componentName",get:function get(){return "Spacer"}},{key:"_template",value:function _template(){return {Line:{h:Spacer._lineThickness,rect:!0,mountY:.5,TickLeft:_objectSpread(_objectSpread({},Spacer._tick),{},{x:-1*Spacer._lineThickness}),TickRight:Spacer._tick}}}},{key:"properties",get:function get(){return ["lineColor"]}},{key:"tags",get:function get(){return ["Line","TickLeft","TickRight"]}},{key:"_lineThickness",get:function get(){return 3}},{key:"_tickLength",get:function get(){return 25}},{key:"_tick",get:function get(){return {rect:!0,mountY:.5,w:Spacer._lineThickness,h:Spacer._tickLength,y:Spacer._lineThickness/2}}}]),Spacer}();(function(t){_inherits(GridOverlay,tt);var i=_createSuper(GridOverlay);function GridOverlay(){return _classCallCheck(this,GridOverlay),i.apply(this,arguments)}return _createClass(GridOverlay,[{key:"_construct",value:function _construct(){_get(_getPrototypeOf(GridOverlay.prototype),"_construct",this).call(this),this._showColumns=this._showMargins=this._showSafe=this._showGutters=this._showText=!0;}},{key:"_update",value:function _update(){this._updateGlobalThemeProps(),this._updateMargins(),this._updateSafe(),this._updateColumns(),this._updateGutters(),this._updateText(),this._updateVisibility();}},{key:"_updateVisibility",value:function _updateVisibility(){this._Columns.smooth={alpha:Number(this.showColumns)},this._Margins.smooth={alpha:Number(this.showMargins)},this._Safe.smooth={alpha:Number(this.showSafe)},this._Gutters.smooth={alpha:Number(this.showGutters)},this._TextPanel.smooth={alpha:Number(this.showText)};}},{key:"_updateGlobalThemeProps",value:function _updateGlobalThemeProps(){var t=I.theme,i=t.layout,o=t.color,r=i.screenW,a=i.screenH,l=i.columnCount,c=i.marginX,u=i.marginY,h=i.gutterX,d=i.gutterY,p=i.safe;this._screenW=r,this._screenH=a,this._columnCount=l,this._marginX=c,this._marginY=u,this._safe=p,this._gutterX=h,this._gutterY=d,this._columnColor=o.interactiveNeutralFocusSoft,this._marginColor=o.green,this._safeColor=o.red,this._gutterColor=o.blue;}},{key:"_updateMargins",value:function _updateMargins(){var t={lineColor:this._marginColor},i=_objectSpread(_objectSpread({},t),{},{w:this._marginX});this._MarginHorizontal.y=this._screenH/2,this._MarginLeft.patch(i),this._MarginRight.patch(i),this._MarginRight.x=this._screenW-this._marginX;var o=_objectSpread(_objectSpread({},t),{},{w:this._marginY});this._MarginVertical.x=this._marginX-o.w/2,this._MarginTop.patch(o),this._MarginTop.patch(o),this._MarginTop.y=o.w/2;}},{key:"_updateSafe",value:function _updateSafe(){var t={lineColor:this._safeColor,w:this._safe};this._SafeHorizontal.y=this._screenH/4,this._SafeLeft.patch(t),this._SafeRight.patch(t),this._SafeRight.x=this._screenW-this._safe,this._SafeVertical.x=(this._screenW-t.w)/2,this._SafeVertical.y=t.w/2,this._SafeTop.patch(t),this._SafeBottom.patch(t),this._SafeBottom.y=this._screenH-this._safe;}},{key:"_updateColumns",value:function _updateColumns(){this._Columns.patch({w:this._screenW,h:this._screenH,x:this._marginX,style:{itemSpacing:this._gutterX},items:this._columnRects});}},{key:"_columnRects",get:function get(){var t=this;return Array.apply(null,{length:this._columnCount}).map((function(){return {rect:!0,w:getWidthByColumnSpan(t.theme,1),h:t._screenH,color:t._columnColor}}))}},{key:"_updateGutters",value:function _updateGutters(){var t={lineColor:this._gutterColor,w:this._gutterY};this._GutterHorizontal.patch(_objectSpread(_objectSpread({},t),{},{x:(this._screenW-t.w)/2,y:this._screenH/4}));}},{key:"_updatePropertyTextStyle",value:function _updatePropertyTextStyle(t,i){var o={textStyle:_objectSpread({},this.style.propertyTextStyle)};i&&(o.textStyle.textColor=i),t.Items.tag("Property").style=o;}},{key:"_updateValueTextStyle",value:function _updateValueTextStyle(t){t.Items.tag("Value").style={textStyle:this.style.valueTextStyle};}},{key:"_updateText",value:function _updateText(){var t="Property",i="Value";this._TextPanel.x=this._screenW-this._marginX-getWidthByColumnSpan(this.theme,3),this._TextPanel.y=this._safe,this._TextScreenW.Items.tag(t).content="Screen Width",this._TextScreenW.Items.tag(i).content="".concat(this._screenW,"px"),this._updatePropertyTextStyle(this._TextScreenW),this._updateValueTextStyle(this._TextScreenW),this._TextScreenH.Items.tag(t).content="Screen Height",this._TextScreenH.Items.tag(i).content="".concat(this._screenH,"px"),this._updatePropertyTextStyle(this._TextScreenH),this._updateValueTextStyle(this._TextScreenH),this._TextColumnCount.Items.tag(t).content="Columns",this._TextColumnCount.Items.tag(i).content="".concat(this._columnCount,", ").concat(Math.round(getWidthByColumnSpan(this.theme,1)),"px each"),this._updatePropertyTextStyle(this._TextColumnCount),this._updateValueTextStyle(this._TextColumnCount),this._TextMarginX.Items.tag(t).content="Margin-X",this._TextMarginX.Items.tag(i).content="".concat(this._marginX,"px"),this._updatePropertyTextStyle(this._TextMarginX,this._marginColor),this._updateValueTextStyle(this._TextMarginX),this._TextMarginY.Items.tag(t).content="Margin-Y",this._TextMarginY.Items.tag(i).content="".concat(this._marginY,"px"),this._updatePropertyTextStyle(this._TextMarginY,this._marginColor),this._updateValueTextStyle(this._TextMarginY),this._TextGutterX.Items.tag(t).content="Gutter-X",this._TextGutterX.Items.tag(i).content="".concat(this._gutterX,"px"),this._updatePropertyTextStyle(this._TextGutterX,this._gutterColor),this._updateValueTextStyle(this._TextGutterX),this._TextGutterY.Items.tag(t).content="Gutter-Y",this._TextGutterY.Items.tag(i).content="".concat(this._gutterY,"px"),this._updatePropertyTextStyle(this._TextGutterY,this._gutterColor),this._updateValueTextStyle(this._TextGutterY),this._TextSafe.Items.tag(t).content="Safe",this._TextSafe.Items.tag(i).content="".concat(this._safe,"px"),this._updatePropertyTextStyle(this._TextSafe,this._safeColor),this._updateValueTextStyle(this._TextSafe);}}],[{key:"__componentName",get:function get(){return "GridOverlay"}},{key:"__themeStyle",get:function get(){return Ae}},{key:"_template",value:function _template(){var t={type:ft,autoResizeHeight:!0,Items:{Property:{type:At,signals:{textBoxChanged:"_update"}},Value:{type:At,signals:{textBoxChanged:"_update"},centerInParent:!0}}};return {Columns:{alpha:.001,type:ft},Margins:{alpha:.001,Horizontal:{Left:{type:Pe,signals:{spacerLoaded:"_update"}},Right:{type:Pe,signals:{spacerLoaded:"_update"}}},Vertical:{Top:{type:Pe,vertical:!0}}},Safe:{alpha:.001,Horizontal:{Left:{type:Pe,signals:{spacerLoaded:"_update"}},Right:{type:Pe,signals:{spacerLoaded:"_update"}}},Vertical:{Top:{type:Pe,vertical:!0},Bottom:{type:Pe,vertical:!0}}},Gutters:{alpha:.001,Horizontal:{type:Pe,signals:{spacerLoaded:"_update"}}},TextPanel:{alpha:.001,type:me,autoResizeHeight:!0,Items:{ScreenW:t,ScreenH:t,ColumnCount:t,MarginX:t,MarginY:t,GutterX:t,GutterY:t,Safe:t}}}}},{key:"properties",get:function get(){return ["showColumns","showMargins","showSafe","showGutters","showText"]}},{key:"tags",get:function get(){return ["Columns","Margins",{name:"MarginHorizontal",path:"Margins.Horizontal"},{name:"MarginLeft",path:"Margins.Horizontal.Left"},{name:"MarginRight",path:"Margins.Horizontal.Right"},{name:"MarginVertical",path:"Margins.Vertical"},{name:"MarginTop",path:"Margins.Vertical.Top"},"Safe",{name:"SafeHorizontal",path:"Safe.Horizontal"},{name:"SafeLeft",path:"Safe.Horizontal.Left"},{name:"SafeRight",path:"Safe.Horizontal.Right"},{name:"SafeVertical",path:"Safe.Vertical"},{name:"SafeTop",path:"Safe.Vertical.Top"},{name:"SafeBottom",path:"Safe.Vertical.Bottom"},"Gutters",{name:"GutterHorizontal",path:"Gutters.Horizontal"},"TextPanel",{name:"TextScreenW",path:"TextPanel.Items.ScreenW"},{name:"TextScreenH",path:"TextPanel.Items.ScreenH"},{name:"TextColumnCount",path:"TextPanel.Items.ColumnCount"},{name:"TextMarginX",path:"TextPanel.Items.MarginX"},{name:"TextMarginY",path:"TextPanel.Items.MarginY"},{name:"TextGutterX",path:"TextPanel.Items.GutterX"},{name:"TextGutterY",path:"TextPanel.Items.GutterY"},{name:"TextSafe",path:"TextPanel.Items.Safe"}]}}]),GridOverlay})();var Be=Object.freeze({__proto__:null,base:function base$h(t){return {cursorStyle:{textColor:t.color.textNeutral,blink:!0,width:t.spacer.xs,height:t.spacer.xxl},eyebrowTextStyle:_objectSpread(_objectSpread({},t.typography.caption1),{},{maxLines:1,textColor:t.color.textNeutral}),textStyle:_objectSpread(_objectSpread({},t.typography.body1),{},{maxLines:1,textColor:t.color.textNeutral}),helpTextStyle:_objectSpread(_objectSpread({},t.typography.caption1),{},{maxLines:1,textColor:t.color.textNeutralSecondary}),minWidth:getWidthByUpCount(t,4),paddingX:t.spacer.xl,paddingY:t.spacer.xl,backgroundColor:t.color.interactiveNeutral}},mode:function mode$6(t){return {disabled:{eyebrowTextStyle:{textColor:t.color.textNeutralDisabled},helpTextStyle:{textColor:t.color.textNeutralDisabled}},focused:{cursorStyle:{textColor:t.color.textInverse},eyebrowTextStyle:{textColor:t.color.textNeutral},helpTextStyle:{textColor:t.color.textNeutralSecondary}}}},tone:function tone$a(t){return {inverse:{mode:{focused:{eyebrowTextStyle:{textColor:t.color.textNeutral},helpTextStyle:{textColor:t.color.textNeutral}}}}}}}),Oe=function(t){_inherits(Input,Pt);var i=_createSuper(Input);function Input(){return _classCallCheck(this,Input),i.apply(this,arguments)}return _createClass(Input,[{key:"_construct",value:function _construct(){_get(_getPrototypeOf(Input.prototype),"_construct",this).call(this),this._title="",this.actualTitle="",this.position=this.title?this.title.length:0,this._justify="left",this._fixed=!0,this.w=this.style.minWidth;}},{key:"$itemChanged",value:function $itemChanged(){_get(_getPrototypeOf(Input.prototype),"$itemChanged",this).call(this),this._updateTextWrapper(),this._updateHiddenContent(),this._updateCursorPosition(),this._updateTitleScrollPosition();}},{key:"_onTitleTextBoxChanged",value:function _onTitleTextBoxChanged(){this._updateHiddenContent();}},{key:"_onHiddenTextBoxChanged",value:function _onHiddenTextBoxChanged(){this._updateCursorPosition();}},{key:"_update",value:function _update(){this._updatePassword(),_get(_getPrototypeOf(Input.prototype),"_update",this).call(this),this._updateEyebrow(),this._updateHelpText(),this._updateTextWrapper(),this._updateHiddenContent(),this._updateCursor(),this._updateCursorListening(),this._updateCursorBlink(),this._updateCursorPosition(),this._updateTitleScrollPosition();}},{key:"_updatePassword",value:function _updatePassword(){this.title=this.password?this.mask.repeat(this.actualTitle.length):this.actualTitle;}},{key:"_updateTruncation",value:function _updateTruncation(){this._Title&&this._Title.patch({style:{textStyle:_objectSpread(_objectSpread({},this.style.textStyle),{},{wordWrap:!1})}});}},{key:"_updateEyebrow",value:function _updateEyebrow(){this._Eyebrow.patch({content:this.eyebrow,style:{textStyle:this.style.eyebrowTextStyle},mountY:1,x:this.style.paddingX,y:this.y-this.style.paddingY});}},{key:"_updateHelpText",value:function _updateHelpText(){this._HelpText.patch({content:this.helpText,style:{textStyle:this.style.helpTextStyle},x:this.style.paddingX,y:this.y+this.innerH+this.style.paddingY});}},{key:"_updateTextWrapper",value:function _updateTextWrapper(){this._TextWrapper.clipping=!0,this._TextWrapper.w=this._visibleContentWidth,this._Title&&(this._TextWrapper.h=this._Title.h);}},{key:"_updateHiddenContent",value:function _updateHiddenContent(){this._HiddenContent||this._Content.patch({HiddenContent:{type:At,mountY:.5,y:function y(t){return t/2},signals:{textBoxChanged:"_onHiddenTextBoxChanged"}}});var t=this.title,i=void 0===t?"":t,o=this.position,r=this.password,a=this.mask,l=r?a.repeat(i.length).substring(0,o):i.substring(0,o);this._HiddenContent.patch({style:{textStyle:this.style.textStyle},content:l}),this._HiddenContent._Text&&this._HiddenContent._Text.patch({alpha:.001});}},{key:"_updateCursor",value:function _updateCursor(){this.style.cursorStyle&&this.style.cursorStyle.blink&&(this._Cursor||(this._Content.patch({Cursor:{rect:!0,mountY:.5}}),this.cursorBlink=this._Cursor.animation({duration:1.5,repeat:-1,actions:[{p:"alpha",v:{0:0,.5:1,1:0}}]})),this._Cursor.patch(this.style.cursorStyle));}},{key:"_updateCursorListening",value:function _updateCursorListening(){this._isDisabledMode?this.cursorBlink&&(this.isCursorActive?this.cursorBlink.start():this.cursorBlink.stop()):this.cursorBlink&&!this.cursorBlink.isPlaying()&&this.cursorBlink.start(),this._Cursor.smooth={color:this.style.cursorStyle.textColor};}},{key:"_updateCursorBlink",value:function _updateCursorBlink(){this.cursorBlink&&(this.isCursorActive?this.cursorBlink.start():(this.cursorBlink.stop(),this._Cursor.patch({alpha:.001})));}},{key:"_updateCursorPosition",value:function _updateCursorPosition(){this._Cursor.x=this._titleX+(this._isOverflow?this._TextWrapper.w:this._HiddenContent.w);}},{key:"_updateTitleScrollPosition",value:function _updateTitleScrollPosition(){this._Title&&(this._Title.x=this._isOverflow?this._visibleContentWidth-this._HiddenContent.w:0,this._HiddenContent&&this._TextWrapper&&(this._HiddenContent.x=this._TextWrapper.x+this._Title.x));}},{key:"_suffixX",get:function get(){var t=this._hasPrefix?this.w-this._paddingLeft-this._paddingRight-this._prefixW:this.w-this._paddingLeft-this._paddingRight-this.style.paddingX;return t>0?t:0}},{key:"isCursorActive",get:function get(){return this.listening&&(this._isFocusedMode||this._isUnfocusedMode)}},{key:"_isOverflow",get:function get(){return this._HiddenContent.w>this._visibleContentWidth}},{key:"_visibleContentWidth",get:function get(){return this._fixedWordWrapWidth}},{key:"value",get:function get(){return this.actualTitle},set:function set(t){this.title=this.actualTitle=t,this.position=0,this._updatePassword();}},{key:"clear",value:function clear(){this.isCursorActive&&(this.title=this.actualTitle="",this.position=0);}},{key:"insert",value:function insert(t){this.isCursorActive&&(this.actualTitle=this.actualTitle.slice(0,this.position)+t+this.actualTitle.slice(this.position),this._updatePassword(),this.position+=t.length);}},{key:"backspace",value:function backspace(){this.isCursorActive&&this.position>0&&(this.actualTitle=this.actualTitle.slice(0,this.position-1)+this.actualTitle.slice(this.position),this._updatePassword(),this.position--);}},{key:"_handleLeft",value:function _handleLeft(){return !this._isDisabledMode&&(this.moveLeft(),"function"!=typeof this.onLeft||this.onLeft(this))}},{key:"_handleRight",value:function _handleRight(){return !this._isDisabledMode&&(this.moveRight(),"function"!=typeof this.onRight||this.onRight(this))}},{key:"moveLeft",value:function moveLeft(){return this.position>=0&&(this.position--,!0)}},{key:"moveRight",value:function moveRight(){return this.position<this.title.length&&(this.position++,!0)}},{key:"announce",get:function get(){return this._announce?this._announce:this.password?[this.eyebrow,this.helpText]:[this.eyebrow,"Input: "+this.title,this.helpText]},set:function set(t){_set(_getPrototypeOf(Input.prototype),"announce",t,this,!0);}}],[{key:"__componentName",get:function get(){return "Input"}},{key:"__themeStyle",get:function get(){return Be}},{key:"_template",value:function _template(){return _objectSpread(_objectSpread({},_get(_getPrototypeOf(Input),"_template",this).call(this)),{},{Eyebrow:{type:At},HelpText:{type:At}})}},{key:"properties",get:function get(){return [].concat(_toConsumableArray(_get(_getPrototypeOf(Input),"properties",this)),["actualTitle","cursor","eyebrow","helpText","listening","mask","password","position"])}},{key:"tags",get:function get(){return [].concat(_toConsumableArray(_get(_getPrototypeOf(Input),"tags",this)),["Eyebrow","HelpText",{name:"Cursor",path:"Content.Cursor"},{name:"HiddenContent",path:"Content.HiddenContent"}])}}]),Input}(),We=Object.freeze({__proto__:null,base:function base$g(t){var i=t.typography.headline2;return {height:9*t.spacer.md,minWidth:7*t.spacer.md,paddingX:t.spacer.md,textStyle:i,sizes:{sm:1,md:2,lg:3,xl:4,xxl:5},baseWidth:7*t.spacer.md,iconWidth:i.lineHeight,iconHeight:i.lineHeight}}}),je={a:"alpha",b:"bravo",c:"charlie",d:"delta",e:"echo",f:"foxtrot",g:"golf",h:"hotel",i:"india",j:"juliett",k:"kilo",l:"lima",m:"mike",n:"november",o:"oscar",p:"papa",q:"quebec",r:"romeo",s:"sierra",t:"tango",u:"uniform",v:"victor",w:"whiskey",x:"x-ray",y:"yankee",z:"zulu"};function getNato(t){return function isAlphaChar(t){return /^[A-Za-z]$/.test(t)}(t)?"".concat(t,", ").concat(je[t.toLowerCase()]):t}var De=function(t){_inherits(Key,Pt);var i=_createSuper(Key);function Key(){return _classCallCheck(this,Key),i.apply(this,arguments)}return _createClass(Key,[{key:"_construct",value:function _construct(){_get(_getPrototypeOf(Key.prototype),"_construct",this).call(this),this._size="sm",this._keySpacing=0;}},{key:"_update",value:function _update(){this._updatePrefixStyle(),_get(_getPrototypeOf(Key.prototype),"_update",this).call(this);}},{key:"_calcDynamicWidth",value:function _calcDynamicWidth(){var t=this.style.sizes[this.size||"sm"];return this.style.baseWidth*t+this.keySpacing*(t-1)}},{key:"_updatePrefixStyle",value:function _updatePrefixStyle(){this._prefix&&this.icon&&this._updatePrefixObj(this.icon,{style:this.style.iconStyle});}},{key:"_updatePrefixObj",value:function _updatePrefixObj(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this._prefix=_objectSpread({type:st,icon:t,w:this.style.iconWidth,h:this.style.iconHeight},i);}},{key:"_setIcon",value:function _setIcon(t){return t?this._updatePrefixObj(t,{style:this.style.iconStyle}):this._prefix=t,t}},{key:"announce",get:function get(){return this._announce?this._announce:function isUpperCase(t){return /^[A-Z]$/.test(t)}(this.title)?"Capital ".concat(getNato(this.title),", button"):getNato(this.title)+", button"},set:function set(t){_set(_getPrototypeOf(Key.prototype),"announce",t,this,!0);}},{key:"_handleEnter",value:function _handleEnter(){return "function"==typeof this.onEnter?this.onEnter(this):(this.toggle&&this.fireAncestors("$toggleKeyboard",this.toggle),this.fireAncestors("$onSoftKey",{key:this.keyId||this.title,toggle:this.toggle}),!1)}}],[{key:"__componentName",get:function get(){return "Key"}},{key:"__themeStyle",get:function get(){return We}},{key:"properties",get:function get(){return [].concat(_toConsumableArray(_get(_getPrototypeOf(Key),"properties",this)),["icon","size","toggle","keySpacing"])}},{key:"aliasStyles",get:function get(){return [{prev:"iconH",curr:"iconHeight"},{prev:"iconW",curr:"iconWidth"}]}}]),Key}(),Me=Object.freeze({__proto__:null,base:function base$f(t){return {keySpacing:t.spacer.md,screenW:t.layout.screenW,marginX:t.layout.marginX,inputSpacing:10*t.spacer.md+t.spacer.md,inputStyle:{radius:t.radius.md}}}}),Re=function capitalize(t){return t.charAt(0).toUpperCase()+t.slice(1)},Ne=function(t){_inherits(Keyboard,tt);var i=_createSuper(Keyboard);function Keyboard(){return _classCallCheck(this,Keyboard),i.apply(this,arguments)}return _createClass(Keyboard,[{key:"_init",value:function _init(){this._setShouldUpdateThemeBound=this._setShouldUpdateTheme.bind(this),I.on("themeUpdate",this._setShouldUpdateThemeBound),_get(_getPrototypeOf(Keyboard.prototype),"_init",this).call(this);}},{key:"_setShouldUpdateTheme",value:function _setShouldUpdateTheme(){this.shouldUpdateTheme=!0;}},{key:"_detach",value:function _detach(){_get(_getPrototypeOf(Keyboard.prototype),"_detach",this).call(this),I.off("themeUpdate",this._setShouldUpdateThemeBound);}},{key:"_focus",value:function _focus(){_get(_getPrototypeOf(Keyboard.prototype),"_focus",this).call(this),this.fireAncestors("$keyboardFocused",!0);}},{key:"_getFocused",value:function _getFocused(){return this._currentKeyboard||this}},{key:"_update",value:function _update(){this._currentFormat||(this._currentFormat=this.defaultFormat),this.centerKeyboard?this.x=(this.style.screenW-this.w)/2-this.style.marginX:this.x=0,this._formatsChanged||this.shouldUpdateTheme?(this._createFormat(this._currentFormat),this._refocus(),this._formatsChanged=!1,this.shouldUpdateTheme=!1):this._formatKeys();}},{key:"_createFormat",value:function _createFormat(t){var i=this.formats[t];if(i){var o=this._formatKeyboardData(i);this._createKeyboard(t,this._createRows(o,t));}}},{key:"_createKeyboard",value:function _createKeyboard(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];t=Re(t),1===i.length?this.patch(_defineProperty$1({},t,i[0])):this.patch(_defineProperty$1({},t,{type:me,plinko:!0,items:i,style:{itemSpacing:this.style.keySpacing},autoResizeWidth:!0,autoResizeHeight:!0,neverScroll:!0,waitForDimensions:!0}));}},{key:"_createRows",value:function _createRows(){var t=this,i=arguments.length>1?arguments[1]:void 0;return (arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).map((function(o){return {type:ft,autoResizeHeight:!0,autoResizeWidth:!0,centerInParent:t.centerKeyboard,neverScroll:!0,wrapSelected:void 0===t.rowWrap||t.rowWrap,style:{itemSpacing:t.style.keySpacing},items:t._createKeys(o,i),waitForDimensions:!0}}))}},{key:"_createKeys",value:function _createKeys(){var t=this,i=arguments.length>1?arguments[1]:void 0;return (arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).map((function(o){if(!o)return {skipFocus:!0};var r={type:t.keyComponent||De,keySpacing:t.style.keySpacing};if("object"===_typeof(o)){var a,l,c,u=o.keyId||o.title,h=(null===(a=t.style.keyProps)||void 0===a||null===(a=a[i])||void 0===a?void 0:a[u])||(null===(l=t.style.keyProps)||void 0===l?void 0:l[u]);return h&&h.icon?_objectSpread(_objectSpread(_objectSpread(_objectSpread({},r),o),null===(c=t.style.keyProps)||void 0===c?void 0:c[u]),{},{style:{iconStyle:_objectSpread({},h.iconStyle)},size:h.size||o.size}):_objectSpread(_objectSpread({},r),o)}return _objectSpread(_objectSpread({},r),{},{title:o})}))}},{key:"_formatKeyboardData",value:function _formatKeyboardData(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];if(Array.isArray(t)&&t.length){if(!Array.isArray(t[0])&&!this.inline){var i,o,r=[];for(i=0,o=-1;i<t.length;i++)i%this.columnCount==0&&(r[++o]=[]),r[o].push(t[i]);return r}return this.inline?[t]:t}}},{key:"_formatKeys",value:function _formatKeys(){var t=this;Object.keys(this.formats).forEach((function(i){var o=t.tag(Re(i));o&&(o.patch({style:{itemSpacing:t.style.keySpacing}}),o.items.forEach((function(i){i.patch({style:{itemSpacing:t.style.keySpacing},centerInParent:t.centerKeys,wrapSelected:void 0===t.rowWrap||t.rowWrap});})),o.queueRequestUpdate());}));}},{key:"$toggleKeyboard",value:function $toggleKeyboard(t){var i=Re(t);if(t!==this._currentFormat){this._createFormat(t);var o=this.tag(i);this.selectKeyOn(o),this._currentKeyboard.alpha=0,o.alpha=1,this._currentFormat=t;}}},{key:"selectKeyOn",value:function selectKeyOn(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.getSelectedKey(),o=i.row,r=i.column;t&&t.constructor&&("Row"===t.constructor.name?t.selectedIndex=r:(t.selectedIndex=o,t.selected.selectedIndex=r));}},{key:"getSelectedKey",value:function getSelectedKey(){var t,i,o=this._currentKeyboard;return "Row"===o.constructor.name?(t=0,i=o.selectedIndex):(t=o.selectedIndex,i=o.selected.selectedIndex),{row:t,column:i}}},{key:"$itemChanged",value:function $itemChanged(){this.w=this._currentKeyboard.w,this.fireAncestors("$itemChanged"),this.signal("keyboardWidthChanged");}},{key:"_setFormats",value:function _setFormats(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this._formatsChanged=!0,t}},{key:"defaultFormat",get:function get(){return this._defaultFormat||Object.keys(this.formats)[0]},set:function set(t){this._defaultFormat=t;}},{key:"_currentKeyboard",get:function get(){return this.tag(Re(this._currentFormat))}},{key:"columnCount",get:function get(){return this._columnCount?this._columnCount:this.rowCount?this.formats[this.defaultFormat.toLowerCase()].length/this.rowCount:this.inline?this.formats[this.defaultFormat.toLowerCase()].length:11},set:function set(t){this._columnCount=t;}},{key:"announce",get:function get(){return this._announce?this._announce:"Keyboard"+(this.title?", ".concat(this.title):"")},set:function set(t){_set(_getPrototypeOf(Keyboard.prototype),"announce",t,this,!0);}},{key:"announceContext",get:function get(){return this._announceContext||["PAUSE-2","Use arrow keys to choose characters, press center to select"]},set:function set(t){_set(_getPrototypeOf(Keyboard.prototype),"announceContext",t,this,!0);}}],[{key:"__componentName",get:function get(){return "Keyboard"}},{key:"__themeStyle",get:function get(){return Me}},{key:"properties",get:function get(){return ["formats","centerKeyboard","rowWrap","centerKeys","keyComponent"]}}]),Keyboard}();(function(t){_inherits(KeyboardEmail,Ne);var i=_createSuper(KeyboardEmail);function KeyboardEmail(){return _classCallCheck(this,KeyboardEmail),i.apply(this,arguments)}return _createClass(KeyboardEmail,[{key:"_construct",value:function _construct(){_get(_getPrototypeOf(KeyboardEmail.prototype),"_construct",this).call(this),this.formats=this.emailFormat;}},{key:"emailFormat",get:function get(){return {uppercase:[["1","2","3","4","5","6","7","8","9","0",{title:"Delete",size:"md",keyId:"delete",announce:"delete, button"}],["Q","W","E","R","T","Y","U","I","O","P",{title:"#@!",size:"md",toggle:"symbols",announce:"symbol mode, button",keyId:"symbols"}],["A","S","D","F","G","H","J","K","L","@",{title:"áöû",size:"md",toggle:"accents",announce:"accents, button",keyId:"accents"}],["Z","X","C","V","B","N","M",{title:".",announce:"period, button"},{title:"-",announce:"dash, button"},{title:"_",announce:"underscore, button"},{title:"shift",size:"md",toggle:"lowercase",announce:"shift off, button",keyId:"shift"}],[{title:".com",announce:"dot, com",size:"md"},{title:".net",announce:"dot, net",size:"md"},{title:".edu",announce:"dot, edu",size:"md"},{title:".org",announce:"dot, org",size:"md"},{title:".co",announce:"dot, co",size:"md"},{title:".uk",announce:"dot, uk",size:"md"}],[{title:"Clear",size:"lg",keyId:"clear",announce:"clear, button"},{title:"Space",size:"xl",keyId:"space",announce:"space, button"},{title:"Done",size:"lg",keyId:"done",announce:"done, button"}]],lowercase:[["1","2","3","4","5","6","7","8","9","0",{title:"Delete",size:"md",keyId:"delete",announce:"delete, button"}],["q","w","e","r","t","y","u","i","o","p",{title:"#@!",size:"md",toggle:"symbols",announce:"symbol mode, button",keyId:"symbols"}],["a","s","d","f","g","h","j","k","l","@",{title:"áöû",size:"md",toggle:"accents",announce:"accents, button",keyId:"accents"}],["z","x","c","v","b","n","m",{title:"_",announce:"underscore, button"},{title:".",announce:"period, button"},{title:"-",announce:"dash, button"},{title:"shift",size:"md",toggle:"uppercase",announce:"shift on, button",keyId:"shift"}],[{title:".com",announce:"dot, com",size:"md"},{title:".net",announce:"dot, net",size:"md"},{title:".edu",announce:"dot, edu",size:"md"},{title:".org",announce:"dot, org",size:"md"},{title:".co",announce:"dot, co",size:"md"},{title:".uk",announce:"dot, uk",size:"md"}],[{title:"Clear",size:"lg",keyId:"clear",announce:"clear, button"},{title:"Space",size:"xl",keyId:"space",announce:"space, button"},{title:"Done",size:"lg",keyId:"done",announce:"done, button"}]],accents:[["1","2","3","4","5","6","7","8","9","0",{title:"Delete",size:"md",keyId:"delete",announce:"delete, button"}],["ä","ë","ï","ö","ü","ÿ","à","è","ì","ò",{title:"#@!",size:"md",toggle:"symbols",announce:"symbol mode, button",keyId:"symbols"}],["ù","á","é","í","ó","ú","ý","â","ê","@",{title:"abc",size:"md",toggle:"lowercase",announce:"alpha mode, button"}],["î","ô","û","ã","ñ","","","","","","","","","","","","","","","","",{title:"_",announce:"underscore, button"},{title:".",announce:"period, button"},{title:"-",announce:"dash, button"},{title:"shift",size:"md",toggle:"accentsUpper",announce:"shift off, button",keyId:"shift"}],[{title:".com",announce:"dot, com",size:"md"},{title:".net",announce:"dot, net",size:"md"},{title:".edu",announce:"dot, edu",size:"md"},{title:".org",announce:"dot, org",size:"md"},{title:".co",announce:"dot, co",size:"md"},{title:".uk",announce:"dot, uk",size:"md"}],[{title:"Clear",size:"lg",keyId:"clear",announce:"clear, button"},{title:"Space",size:"xl",keyId:"space",announce:"space, button"},{title:"Done",size:"lg",keyId:"done",announce:"done, button"}]],accentsUpper:[["1","2","3","4","5","6","7","8","9","0",{title:"Delete",size:"md",keyId:"delete",announce:"delete, button"}],["Ä","Ë","Ï","Ö","Ü","Ÿ","À","È","Ì","Ò",{title:"#@!",size:"md",toggle:"symbols",announce:"symbol mode, button",keyId:"symbols"}],["Ù","Á","É","Í","Ó","Ú","Ý","Â","Ê","@",{title:"abc",size:"md",toggle:"lowercase",announce:"alpha mode, button"}],["Î","Ô","Û","Ã","Ñ","","","","","","","","","","","","","","","","",{title:"_",announce:"underscore, button"},{title:".",announce:"period, button"},{title:"-",announce:"dash, button"},{title:"shift",size:"md",toggle:"accents",announce:"shift off, button",keyId:"shift"}],[{title:".com",announce:"dot, com",size:"md"},{title:".net",announce:"dot, net",size:"md"},{title:".edu",announce:"dot, edu",size:"md"},{title:".org",announce:"dot, org",size:"md"},{title:".co",announce:"dot, co",size:"md"},{title:".uk",announce:"dot, uk",size:"md"}],[{title:"Clear",size:"lg",keyId:"clear",announce:"clear, button"},{title:"Space",size:"xl",keyId:"space",announce:"space, button"},{title:"Done",size:"lg",keyId:"done",announce:"done, button"}]],symbols:[["1","2","3","4","5","6","7","8","9","0",{title:"Delete",size:"md",keyId:"delete",announce:"delete, button"}],[{title:"!",announce:"exclamation, button"},"@","#","$","%",{title:"^",announce:"caret circumflex, button"},"&","*",{title:"(",announce:"open parenthesis, button"},{title:")",announce:"close parenthesis, button"},{title:"abc",size:"md",toggle:"lowercase",announce:"alpha mode, button"}],[{title:"{",announce:"open brace, button"},{title:"}",announce:"close brace, button"},{title:"[",announce:"open bracket, button"},{title:"]",announce:"close bracket, button"},{title:";",announce:"semicolon, button"},{title:'"',announce:"doublequote, button"},{title:",",announce:"comma, button"},{title:"|",announce:"vertical bar, button"},{title:"\\",announce:"backslash, button"},{title:"/",announce:"forwardslash, button"},{title:"áöû",size:"md",toggle:"accents",announce:"accents, button",keyId:"accents"}],[{title:"<",announce:"less than, button"},{title:">",announce:"greater than, button"},{title:"?",announce:"question mark, button"},{title:"=",announce:"equal sign, button"},{title:"`",announce:"grave accent, button"},{title:"~",announce:"tilde, button"},{title:"_",announce:"underscore, button"},{title:":",announce:"colon, button"},{title:"-",announce:"dash, button"},{title:"+",announce:"plus sign, button"}],[{title:".com",announce:"dot, com",size:"md"},{title:".net",announce:"dot, net",size:"md"},{title:".edu",announce:"dot, edu",size:"md"},{title:".org",announce:"dot, org",size:"md"},{title:".co",announce:"dot, co",size:"md"},{title:".uk",announce:"dot, uk",size:"md"}],[{title:"Clear",size:"lg",keyId:"clear",announce:"clear, button"},{title:"Space",size:"xl",keyId:"space",announce:"space, button"},{title:"Done",size:"lg",keyId:"done",announce:"done, button"}]]}}}],[{key:"__componentName",get:function get(){return "KeyboardEmail"}},{key:"__themeStyle",get:function get(){return Me}}]),KeyboardEmail})();(function(t){_inherits(KeyboardFullScreen,Ne);var i=_createSuper(KeyboardFullScreen);function KeyboardFullScreen(){return _classCallCheck(this,KeyboardFullScreen),i.apply(this,arguments)}return _createClass(KeyboardFullScreen,[{key:"_construct",value:function _construct(){_get(_getPrototypeOf(KeyboardFullScreen.prototype),"_construct",this).call(this),this.formats=this.fullscreenFormat;}},{key:"fullscreenFormat",get:function get(){return {letters:[["","","","","","","","","",{title:"#@!",size:"lg",toggle:"symbols",announce:"symbol mode, button",keyId:"symbols"},{title:"Space",size:"lg",keyId:"space",announce:"space, button"},{title:"Delete",size:"md",keyId:"delete",announce:"delete, button"},"","","","","","","","",""],["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]],symbols:[["","","","","","","","","",{title:"ABC",size:"lg",toggle:"letters",announce:"caps on, button"},{title:"Space",size:"lg",keyId:"space",announce:"space, button"},{title:"Delete",size:"md",keyId:"delete",announce:"delete, button"},"","","","","","","","",""],["1","2","3","4","5","6","7","8","9","0",{title:"!",announce:"exclamation, button"},"@","#","$","%",{title:"^",announce:"caret circumflex, button"},"&","*",{title:"(",announce:"open parenthesis, button"},{title:")",announce:"close parenthesis, button"},{title:"`",announce:"grave accent, button"},"~","_",".","-","+"]]}}}],[{key:"__componentName",get:function get(){return "KeyboardFullScreen"}},{key:"__themeStyle",get:function get(){return Me}}]),KeyboardFullScreen})();(function(t){_inherits(KeyboardNumbers,Ne);var i=_createSuper(KeyboardNumbers);function KeyboardNumbers(){return _classCallCheck(this,KeyboardNumbers),i.apply(this,arguments)}return _createClass(KeyboardNumbers,[{key:"_construct",value:function _construct(){_get(_getPrototypeOf(KeyboardNumbers.prototype),"_construct",this).call(this),this.formats=this.numbersFormat;}},{key:"numbersFormat",get:function get(){return {numbers:["1","2","3","4","5","6","7","8","9","0"],dialpad:[["1","2","3"],["4","5","6"],["7","8","9"],["0"]],dialpadExtended:[["1","2","3"],["4","5","6"],["7","8","9"],["0"],[{title:"Delete",size:"lg",keyId:"delete",announce:"delete, button"}]]}}}],[{key:"__componentName",get:function get(){return "KeyboardNumbers"}},{key:"__themeStyle",get:function get(){return Me}}]),KeyboardNumbers})();(function(t){_inherits(KeyboardQwerty,Ne);var i=_createSuper(KeyboardQwerty);function KeyboardQwerty(){return _classCallCheck(this,KeyboardQwerty),i.apply(this,arguments)}return _createClass(KeyboardQwerty,[{key:"_construct",value:function _construct(){_get(_getPrototypeOf(KeyboardQwerty.prototype),"_construct",this).call(this),this.formats=this.qwertyFormat;}},{key:"qwertyFormat",get:function get(){return {uppercase:[["1","2","3","4","5","6","7","8","9","0",{title:"Delete",size:"md",keyId:"delete",announce:"delete, button"}],["Q","W","E","R","T","Y","U","I","O","P",{title:"#@!",size:"md",toggle:"symbols",announce:"symbol mode, button",keyId:"symbols"}],["A","S","D","F","G","H","J","K","L","@",{title:"áöû",size:"md",toggle:"accents",announce:"accents, button",keyId:"accents"}],["Z","X","C","V","B","N","M",{title:"_",announce:"underscore, button"},{title:".",announce:"period, button"},{title:"-",announce:"dash, button"},{title:"shift",size:"md",toggle:"lowercase",announce:"shift off, button",keyId:"shift"}],[{title:"Clear",size:"lg",keyId:"clear",announce:"clear, button"},{title:"Space",size:"xl",keyId:"space",announce:"space, button"},{title:"Done",size:"lg",keyId:"done",announce:"done, button"}]],lowercase:[["1","2","3","4","5","6","7","8","9","0",{title:"Delete",size:"md",keyId:"delete",announce:"delete, button"}],["q","w","e","r","t","y","u","i","o","p",{title:"#@!",size:"md",toggle:"symbols",announce:"symbol mode, button",keyId:"symbols"}],["a","s","d","f","g","h","j","k","l","@",{title:"áöû",size:"md",toggle:"accents",announce:"accents, button",keyId:"accents"}],["z","x","c","v","b","n","m",{title:"_",announce:"underscore, button"},{title:".",announce:"period, button"},{title:"-",announce:"dash, button"},{title:"shift",size:"md",toggle:"uppercase",announce:"shift on, button",keyId:"shift"}],[{title:"Clear",size:"lg",keyId:"clear",announce:"clear, button"},{title:"Space",size:"xl",keyId:"space",announce:"space, button"},{title:"Done",size:"lg",keyId:"done",announce:"done, button"}]],accents:[["1","2","3","4","5","6","7","8","9","0",{title:"Delete",size:"md",keyId:"delete",announce:"delete, button"}],["ä","ë","ï","ö","ü","ÿ","à","è","ì","ò",{title:"#@!",size:"md",toggle:"symbols",announce:"symbol mode, button",keyId:"symbols"}],["ù","á","é","í","ó","ú","ý","â","ê","@",{title:"abc",size:"md",toggle:"lowercase",announce:"alpha mode, button"}],["î","ô","û","ã","ñ","","","","","","","","","","","","","","","","",{title:"_",announce:"underscore, button"},{title:".",announce:"period, button"},{title:"-",announce:"dash, button"},{title:"shift",size:"md",toggle:"accentsUpper",announce:"shift off, button",keyId:"shift"}],[{title:"Clear",size:"lg",keyId:"clear",announce:"clear, button"},{title:"Space",size:"xl",keyId:"space",announce:"space, button"},{title:"Done",size:"lg",keyId:"done",announce:"done, button"}]],accentsUpper:[["1","2","3","4","5","6","7","8","9","0",{title:"Delete",size:"md",keyId:"delete",announce:"delete, button"}],["Ä","Ë","Ï","Ö","Ü","Ÿ","À","È","Ì","Ò",{title:"#@!",size:"md",toggle:"symbols",announce:"symbol mode, button",keyId:"symbols"}],["Ù","Á","É","Í","Ó","Ú","Ý","Â","Ê","@",{title:"abc",size:"md",toggle:"lowercase",announce:"alpha mode, button"}],["Î","Ô","Û","Ã","Ñ","","","","","","","","","","","","","","","","",{title:".",announce:"period, button"},{title:"-",announce:"dash, button"},{title:"_",announce:"underscore, button"},{title:"shift",size:"md",toggle:"accents",announce:"shift off, button",keyId:"shift"}],[{title:"Clear",size:"lg",keyId:"clear",announce:"clear, button"},{title:"Space",size:"xl",keyId:"space",announce:"space, button"},{title:"Done",size:"lg",keyId:"done",announce:"done, button"}]],symbols:[["1","2","3","4","5","6","7","8","9","0",{title:"Delete",size:"md",keyId:"delete",announce:"delete, button"}],[{title:"!",announce:"exclamation, button"},"@","#","$","%",{title:"^",announce:"caret circumflex, button"},"&","*",{title:"(",announce:"open parenthesis, button"},{title:")",announce:"close parenthesis, button"},{title:"abc",size:"md",toggle:"lowercase",announce:"alpha mode, button"}],[{title:"{",announce:"open brace, button"},{title:"}",announce:"close brace, button"},{title:"[",announce:"open bracket, button"},{title:"]",announce:"close bracket, button"},{title:";",announce:"semicolon, button"},{title:'"',announce:"doublequote, button"},{title:",",announce:"comma, button"},{title:"|",announce:"vertical bar, button"},{title:"\\",announce:"backslash, button"},{title:"/",announce:"forwardslash, button"},{title:"áöû",size:"md",toggle:"accents",announce:"accents, button",keyId:"accents"}],[{title:"<",announce:"less than, button"},{title:">",announce:"greater than, button"},{title:"?",announce:"question mark, button"},{title:"=",announce:"equal sign, button"},{title:"`",announce:"grave accent, button"},{title:"~",announce:"tilde, button"},{title:"_",announce:"underscore, button"},{title:":",announce:"colon, button"},{title:"-",announce:"dash, button"},{title:"+",announce:"plus sign, button"}],[{title:"Clear",size:"lg",keyId:"clear",announce:"clear, button"},{title:"Space",size:"xl",keyId:"space",announce:"space, button"},{title:"Done",size:"lg",keyId:"done",announce:"done, button"}]]}}}],[{key:"__componentName",get:function get(){return "KeyboardQwerty"}},{key:"__themeStyle",get:function get(){return Me}}]),KeyboardQwerty})();(function(t){_inherits(KeyboardInput,tt);var i=_createSuper(KeyboardInput);function KeyboardInput(){return _classCallCheck(this,KeyboardInput),i.apply(this,arguments)}return _createClass(KeyboardInput,[{key:"_update",value:function _update(){this._Wrapper.style.itemSpacing=this.style.inputSpacing,this._updateKeyboardType(),this._updateInput(),this._updateKeyboard(),this._updateCenterKeyboard();}},{key:"_updateKeyboardType",value:function _updateKeyboardType(){this._Keyboard.constructor!==this.keyboardType&&(this._Wrapper._resetItems(),this._Wrapper.items=[{type:Oe,ref:"Input"},{type:this.keyboardType,ref:"Keyboard",passSignals:{keyboardWidthChanged:!0}}]);}},{key:"_updateInput",value:function _updateInput(){this._Input.patch(_objectSpread(_objectSpread({},this.input),{},{centerInParent:this.centerKeyboard,w:this._Keyboard.w,style:_objectSpread({},this.style.inputStyle),listening:this._isFocusedMode}));}},{key:"_updateKeyboard",value:function _updateKeyboard(){this._Keyboard.patch({defaultFormat:this.defaultFormat||"lowercase",centerKeyboard:this.centerKeyboard});}},{key:"_updateWidth",value:function _updateWidth(){this._Input.w=this.w=this._Keyboard.w,this.fireAncestors("$itemChanged");}},{key:"_updateCenterKeyboard",value:function _updateCenterKeyboard(){this.centerKeyboard?this.x=(this.style.screenW-this.w)/2-this.style.marginX:this.x=0;}},{key:"$onSoftKey",value:function $onSoftKey(t){var i=t.key,o=void 0===i?"":i;if(!t.toggle)switch(o.toLowerCase()){case"delete":this._Input.backspace();break;case"done":break;case"space":this._Input.insert(" ");break;case"clear":this._Input.clear();break;default:this._Input.insert(o);}}},{key:"$keyboardFocused",value:function $keyboardFocused(t){this._Input.listening=!!t;}},{key:"_getFocused",value:function _getFocused(){return this._Wrapper||this}}],[{key:"__componentName",get:function get(){return "KeyboardInput"}},{key:"properties",get:function get(){return ["centerKeyboard","defaultFormat","input","keyboardType"]}},{key:"__themeStyle",get:function get(){return Me}},{key:"_template",value:function _template(){return {Wrapper:{type:me,neverScroll:!0,w:this.w,items:[{type:Oe,ref:"Input"},{type:Ne,ref:"Keyboard",passSignals:{keyboardWidthChanged:!0}}],selectedIndex:1,signals:{keyboardWidthChanged:"_updateWidth"}}}}},{key:"tags",get:function get(){return ["Wrapper",{name:"Input",path:"Wrapper.Input"},{name:"Keyboard",path:"Wrapper.Keyboard"}]}}]),KeyboardInput})();(function(t){_inherits(KeyboardSearch,Ne);var i=_createSuper(KeyboardSearch);function KeyboardSearch(){return _classCallCheck(this,KeyboardSearch),i.apply(this,arguments)}return _createClass(KeyboardSearch,[{key:"_construct",value:function _construct(){_get(_getPrototypeOf(KeyboardSearch.prototype),"_construct",this).call(this),this.formats=this.searchFormat;}},{key:"searchFormat",get:function get(){return {uppercase:[["A","B","C","D","E","F"],["G","H","I","J","K","L"],["M","N","O","P","Q","R"],["S","T","U","V","W","X"],["Y","Z","1","2","3","4"],["5","6","7","8","9","0"],[{title:"Space",size:"xl",keyId:"space",announce:"space, button"},{title:"Delete",size:"md",keyId:"delete",announce:"delete, button"}]]}}}],[{key:"__componentName",get:function get(){return "KeyboardSearch"}},{key:"__themeStyle",get:function get(){return Me}}]),KeyboardSearch})();var qe=Object.freeze({__proto__:null,base:function base$e(t){var i=t.spacer.lg;return {width:i,height:i,radius:i/2}},tone:function tone$9(t){return {neutral:{circleColor:t.color.interactiveNeutralFocus,mode:{disabled:{circleColor:t.color.fillNeutralDisabled}}},inverse:{circleColor:t.color.interactiveInverseFocus,mode:{disabled:{circleColor:t.color.fillInverseDisabled}}},brand:{circleColor:t.color.interactiveBrandFocus,mode:{disabled:{circleColor:t.color.fillInverseDisabled}}}}}}),Ve=function(i){_inherits(Knob,tt);var o=_createSuper(Knob);function Knob(){return _classCallCheck(this,Knob),o.apply(this,arguments)}return _createClass(Knob,[{key:"_update",value:function _update(){this._updateCircleLayout();}},{key:"_updateCircleLayout",value:function _updateCircleLayout(){this.patch({texture:t.Tools.getRoundRect(this.w,this.h,this.style.radius,null,null,!0,this.style.circleColor)});}}],[{key:"__componentName",get:function get(){return "Knob"}},{key:"__themeStyle",get:function get(){return qe}},{key:"_template",value:function _template(){return {mount:.5}}}]),Knob}(),Xe=Object.freeze({__proto__:null,base:function base$d(t){return {alpha:t.alpha.primary,descriptionTextStyle:_objectSpread(_objectSpread({},t.typography.body3),{},{maxLines:1,textColor:t.color.textNeutralSecondary}),height:3*t.spacer.xxl,logoStyle:{width:2*t.spacer.xxl,height:2*t.spacer.xxl,radius:t.radius.sm},paddingX:t.spacer.xl,contentSpacing:t.spacer.lg,titleTextStyle:_objectSpread(_objectSpread({},t.typography.headline3),{},{maxLines:1,textColor:t.color.textNeutral}),width:h.getWidthByColumnSpan(t,3)}},mode:function mode$5(t){return {disabled:{alpha:t.alpha.inactive,descriptionTextStyle:{textColor:t.color.textNeutralDisabled},titleTextStyle:{textColor:t.color.textNeutralDisabled}},focused:{descriptionTextStyle:{textColor:t.color.textInverseSecondary},titleTextStyle:{textColor:t.color.textInverse}}}},tone:function tone$8(t){return {inverse:{mode:{focused:{descriptionTextStyle:{textColor:t.color.textNeutral},titleTextStyle:{textColor:t.color.textNeutral}}}}}}}),Ye=function(t){_inherits(ListItem,Pt);var i=_createSuper(ListItem);function ListItem(){return _classCallCheck(this,ListItem),i.apply(this,arguments)}return _createClass(ListItem,[{key:"_onTextBoxChanged",value:function _onTextBoxChanged(){this._updateTitle(),this._updateDescription(),this._updateTruncation();}},{key:"_update",value:function _update(){this._updatePrefixLogo(),this._updateSuffixLogo(),_get(_getPrototypeOf(ListItem.prototype),"_update",this).call(this),this._updateDescription();}},{key:"_updateTitle",value:function _updateTitle(){this._TextWrapper.patch({Title:{content:this.title,style:{textStyle:this.style.titleTextStyle}}});}},{key:"_updateDescription",value:function _updateDescription(){if(this._hasDescription){var t={content:this.description,style:{textStyle:_objectSpread(_objectSpread({},this.style.descriptionTextStyle),{},{wordWrap:!0,wordWrapWidth:this._fixedWordWrapWidth})},visible:!this._collapse};this._Description||(t=_objectSpread({type:At,signals:{textBoxChanged:"_onTextBoxChanged"}},t)),this._TextWrapper.patch({Description:t});}else this._TextWrapper.patch({Description:void 0});}},{key:"_updateTruncation",value:function _updateTruncation(){this._Title&&this._Title.patch({style:{textStyle:_objectSpread(_objectSpread({},this.style.titleTextStyle),{},{wordWrap:this.fixed,wordWrapWidth:this.fixed?this._fixedWordWrapWidth:0})}});}},{key:"_updatePrefixLogo",value:function _updatePrefixLogo(){this._hasPrefixLogo&&(this._prefix=this._addLogoProps(this._prefixLogo));}},{key:"_updateSuffixLogo",value:function _updateSuffixLogo(){this._hasSuffixLogo&&(this._suffix=this._addLogoProps(this._suffixLogo));}},{key:"_addLogoProps",value:function _addLogoProps(t){return {type:st,icon:t,style:_objectSpread({color:void 0},this.style.logoStyle)}}},{key:"_hasPrefixLogo",get:function get(){return this.prefixLogo}},{key:"_hasSuffixLogo",get:function get(){return this.suffixLogo}},{key:"_rowProps",get:function get(){return _objectSpread(_objectSpread({},_get(_getPrototypeOf(ListItem.prototype),"_rowProps",this)),{},{autoResizeHeight:!0})}},{key:"_buttonProps",get:function get(){return _objectSpread(_objectSpread({},_get(_getPrototypeOf(ListItem.prototype),"_buttonProps",this)),{},{alpha:this.style.alpha})}},{key:"_hasDescription",get:function get(){return !!this.description}},{key:"_suffixX",get:function get(){return this.w-this._paddingRight-this._suffixW-this.style.paddingX}},{key:"_collapse",get:function get(){return this.shouldCollapse&&!this._isFocusedMode}},{key:"announce",get:function get(){return this._announce?this._announce:this.title+this.description+", List Item"},set:function set(t){_set(_getPrototypeOf(ListItem.prototype),"announce",t,this,!0);}}],[{key:"__componentName",get:function get(){return "ListItem"}},{key:"__themeStyle",get:function get(){return Xe}},{key:"_template",value:function _template(){return _objectSpread(_objectSpread({},_get(_getPrototypeOf(ListItem),"_template",this).call(this)),{},{justify:"left",fixed:!0,Content:_objectSpread(_objectSpread({},_get(_getPrototypeOf(ListItem),"_template",this).call(this).Content),{},{TextWrapper:{mountY:.5,flex:{direction:"column"},Title:{type:At,signals:{textBoxChanged:"_onTextBoxChanged"}}}})})}},{key:"properties",get:function get(){return [].concat(_toConsumableArray(_get(_getPrototypeOf(ListItem),"properties",this)),["description","prefixLogo","suffixLogo","shouldCollapse"])}},{key:"aliasStyles",get:function get(){return [{prev:"titlePadding",curr:"contentSpacing"}]}},{key:"tags",get:function get(){return [].concat(_toConsumableArray(_get(_getPrototypeOf(ListItem),"tags",this)),[{name:"Description",path:"Content.TextWrapper.Description"}])}}]),ListItem}(),Ge=Object.freeze({__proto__:null,base:function base$c(){return {showArrows:!1,showKnob:!1}},mode:function mode$4(){return {focused:{showArrows:!0}}},tone:function tone$7(t){return {neutral:{mode:{focused:{arrowColor:t.color.fillInverse,progressBar:{barColor:t.color.fillInverseTertiary,progressColor:t.color.fillInverse}}}},inverse:{mode:{focused:{arrowColor:t.color.fillNeutral,progressBar:{barColor:t.color.fillNeutralTertiary,progressColor:t.color.fillNeutral}}}},brand:{mode:{focused:{arrowColor:t.color.fillInverse,progressBar:{barColor:t.color.fillBrandTertiary,progressColor:t.color.fillBrand}}}}}}}),Qe=Object.freeze({__proto__:null,base:function base$b(t){var i=t.spacer.lg;return {arrowAlphaValue:t.alpha.primary,arrowAlphaValueLimit:t.alpha.secondary,arrowHeight:t.spacer.xxl,arrowSpacing:t.spacer.md,arrowWidth:t.spacer.xxl,arrowColor:t.color.fillNeutral,containerHeight:t.spacer.lg+t.spacer.xs,iconLeftSrc:t.asset.arrowLeft,iconRightSrc:t.asset.arrowRight,minWidth:getWidthByColumnSpan(t,2),progressBar:{},width:i,height:i,radius:i/2,showArrows:!0,showKnob:!0,circleAnimation:{}}},mode:function mode$3(){return {disabled:{arrowAlphaValue:0}}},tone:function tone$6(t){return {neutral:{arrowColor:t.color.fillNeutral,circleColor:t.color.interactiveNeutralFocus},inverse:{arrowColor:t.color.fillInverse,circleColor:t.color.interactiveInverseFocus},brand:{arrowColor:t.color.fillNeutral,circleColor:t.color.interactiveNeutralFocus}}}}),$e=function(t){_inherits(Slider,tt);var i=_createSuper(Slider);function Slider(){return _classCallCheck(this,Slider),i.apply(this,arguments)}return _createClass(Slider,[{key:"_construct",value:function _construct(){_get(_getPrototypeOf(Slider.prototype),"_construct",this).call(this),this._min=0,this._max=100,this._step=1,this._value=0,this._vertical=!1;}},{key:"_update",value:function _update(){this._updateDirection(),this._updateSliderLayout(),this._updatePositions(),this._updateArrowAlpha(),this._updateArrows(),this._valueChanged&&(this.signal("onChange",this.value,this),this.fireAncestors("$announce",this.announce),this._valueChanged=!1),this._checkAndSignalSizeChange();}},{key:"_handleLeft",value:function _handleLeft(){return !this._isDisabledMode&&(this._decrementValue(),"function"!=typeof this.onLeft||this.onLeft(this))}},{key:"_handleRight",value:function _handleRight(){return !this._isDisabledMode&&(this._incrementValue(),"function"!=typeof this.onRight||this.onRight(this))}},{key:"_updateDirection",value:function _updateDirection(){this.patch({pivotX:0,rotation:this.vertical?c(90):0,mountY:this.vertical?.5:0});}},{key:"_updateSliderLayout",value:function _updateSliderLayout(){var t=this.w||this.style.minWidth;this._Container.patch({h:this.style.containerHeight,w:t,Bar:{x:this._calculatedSliderX,SliderBar:{y:this.style.containerHeight/2,w:this._calculatedSliderWidth,style:_objectSpread({duration:0},this.style.progressBar)}}}),this.h=Math.max(this.style.containerHeight,this.style.arrowHeight);}},{key:"_checkAndSignalSizeChange",value:function _checkAndSignalSizeChange(){this.h===this.prevH&&this._Container.w===this.prevW&&this.rotation===this.prevRotation||this.signal("onSizeChange",this),this.prevH=this.h,this.prevW=this._Container.w,this.prevRotation=this.rotation;}},{key:"_updatePositions",value:function _updatePositions(){this._updateSliderProgress(),this._updateCirclePosition();}},{key:"_updateSliderProgress",value:function _updateSliderProgress(){var t=this.value<this.min?this.min/this.max:this.value/this.max;this.value>this.max||this.value-this.step>this.max?t=this._calculatedSliderWidth:(this.min<0||this.max<0)&&(t=(this.value-this.min)/(this.max-this.min)),this._SliderBar.progress=t;}},{key:"_updateCirclePosition",value:function _updateCirclePosition(){var t;t=this.value<this.min||this.value+this.step<this.min?this.min/this.max*this._calculatedSliderWidth:this.value>this.max||this.value-this.step>this.max?this._calculatedSliderWidth:this.min<0||this.max<0?(this.value-this.min)/(this.max-this.min)*this._calculatedSliderWidth:this.value/this.max*this._calculatedSliderWidth,this._Circle&&(this._Circle.patch({mode:this.mode,style:{radius:this.style.radius,w:this.style.w,h:this.style.h,circleColor:this.style.circleColor},y:this._SliderBar.y+1,alpha:this._isFocusedMode&&this.style.showKnob?1:0}),this.style.circleAnimation&&Object.keys(this.style.circleAnimation).length?this._Circle.smooth={x:[t,this.style.circleAnimation]}:this._Circle.x=t);}},{key:"_updateArrowAlpha",value:function _updateArrowAlpha(){var t,i,o=this.style.showArrows?this.style.arrowAlphaValue:.001,r=this.style.showArrows?this.style.arrowAlphaValueLimit:.001;t=i=o,!this._isDisabledMode&&this.value<=this.min?(t=r,i=o):!this._isDisabledMode&&this.value>=this.max&&(t=o,i=r),this._LeftArrow.smooth={alpha:t},this._RightArrow.smooth={alpha:i};}},{key:"_updateArrows",value:function _updateArrows(){var t={w:this.style.arrowWidth,h:this.style.arrowHeight,style:{color:this.style.arrowColor}};this._LeftArrow.patch(_objectSpread(_objectSpread({},t),{},{icon:this.style.iconLeftSrc})),this._RightArrow.patch(_objectSpread(_objectSpread({},t),{},{icon:this.style.iconRightSrc})),this._RightArrow.smooth={x:this.style.arrowSpacing+this._calculatedSliderWidth+this._Bar.x};}},{key:"_decrementValue",value:function _decrementValue(){var t=this.value-this.step;this.value=t>=this.min?t:this.min,this._updatePositions();}},{key:"_incrementValue",value:function _incrementValue(){var t=this.value+this.step;this.value=t<=this.max?t:this.max,this._updatePositions();}},{key:"_handleUp",value:function _handleUp(){return !1}},{key:"_handleDown",value:function _handleDown(){return !1}},{key:"_calculatedSliderX",get:function get(){return this.style.showArrows?this.style.arrowSpacing+this.style.arrowWidth:0}},{key:"_calculatedSliderWidth",get:function get(){var t=this.style.showArrows?2*this.style.arrowSpacing+2*this.style.arrowWidth:0;return this.w<t+this._circleW?this.style.minWidth-t:this.w-t}},{key:"_circleW",get:function get(){return this._Circle?this._Circle.w:0}},{key:"_setVertical",value:function _setVertical(t){return this._setState(t?"VerticalSlider":""),t}},{key:"_setValue",value:function _setValue(t){return this._valueChanged=t!==this._value,t}},{key:"announce",get:function get(){return void 0!==this._announce&&null!==this._announce?this._announce:this.value.toString()},set:function set(t){_set(_getPrototypeOf(Slider.prototype),"announce",t,this,!0);}}],[{key:"__componentName",get:function get(){return "Slider"}},{key:"__themeStyle",get:function get(){return Qe}},{key:"_template",value:function _template(){return {Container:{mountY:.5,y:function y(t){return t/2},Bar:{mountY:.5,SliderBar:{type:Zt,progress:.5,mountY:.5,announce:""},Circle:{type:Ve,zIndex:5}},LeftArrow:{type:st,mountY:.5,y:function y(t){return t/2}},RightArrow:{type:st,mountY:.5,y:function y(t){return t/2}}}}}},{key:"properties",get:function get(){return ["max","min","step","value","vertical"]}},{key:"tags",get:function get(){return ["Container",{name:"Bar",path:"Container.Bar"},{name:"SliderBar",path:"Container.Bar.SliderBar"},{name:"Circle",path:"Container.Bar.Circle"},{name:"LeftArrow",path:"Container.LeftArrow"},{name:"RightArrow",path:"Container.RightArrow"}]}},{key:"_states",value:function _states(){return [function(t){_inherits(VerticalSlider,t);var i=_createSuper(VerticalSlider);function VerticalSlider(){return _classCallCheck(this,VerticalSlider),i.apply(this,arguments)}return _createClass(VerticalSlider,[{key:"_handleLeft",value:function _handleLeft(){return !1}},{key:"_handleRight",value:function _handleRight(){return !1}},{key:"_handleUp",value:function _handleUp(){return !this._isDisabledMode&&(this._decrementValue(),"function"!=typeof this.onUp||this.onUp(this))}},{key:"_handleDown",value:function _handleDown(){return !this._isDisabledMode&&(this._incrementValue(),"function"!=typeof this.onDown||this.onDown(this))}}]),VerticalSlider}(this)]}}]),Slider}(),Je=function(t){_inherits(NestedSlider,$e);var i=_createSuper(NestedSlider);function NestedSlider(){return _classCallCheck(this,NestedSlider),i.apply(this,arguments)}return _createClass(NestedSlider,null,[{key:"__componentName",get:function get(){return "NestedSlider"}},{key:"__themeStyle",get:function get(){return Ge}}]),NestedSlider}(),Ze=Object.freeze({__proto__:null,base:function base$a(t){return {paddingY:t.spacer.md+t.spacer.xs,valueTextStyle:_objectSpread(_objectSpread({},t.typography.headline3),{},{maxLines:1,textColor:t.color.textNeutralSecondary})}},mode:function mode$2(t){return {disabled:{valueTextStyle:{textColor:t.color.textNeutralDisabled}},focused:{valueTextStyle:{textColor:t.color.textInverseSecondary}}}},tone:function tone$5(t){return {neutral:{mode:{focused:{valueTextStyle:{textColor:t.color.textInverseSecondary}}}},inverse:{mode:{focused:{valueTextStyle:{textColor:t.color.textNeutralSecondary}}}},brand:{mode:{focused:{valueTextStyle:{textColor:t.color.textInverseSecondary}}}}}}});(function(t){_inherits(ListItemSlider,Ye);var i=_createSuper(ListItemSlider);function ListItemSlider(){return _classCallCheck(this,ListItemSlider),i.apply(this,arguments)}return _createClass(ListItemSlider,[{key:"_construct",value:function _construct(){_get(_getPrototypeOf(ListItemSlider.prototype),"_construct",this).call(this),this.value=50;}},{key:"_update",value:function _update(){_get(_getPrototypeOf(ListItemSlider.prototype),"_update",this).call(this),this._updateSliderPosition(),this._updateValue();}},{key:"_onTextBoxChanged",value:function _onTextBoxChanged(){_get(_getPrototypeOf(ListItemSlider.prototype),"_onTextBoxChanged",this).call(this),this._TextWrapper.h=Math.max(this._Title?this._Title.h:0,this._Value?this._Value.h:0);}},{key:"_updateValue",value:function _updateValue(){if(this._hasValue){var t={content:this.value.toString(),style:{textStyle:_objectSpread({},this.style.valueTextStyle)},mountX:1,x:this.w-this._paddingX};this._Value||(t=_objectSpread({type:At,signals:{textBoxChanged:"_onTextBoxChanged"}},t)),this._TextWrapper.patch({Value:t});}else this._TextWrapper.patch({Value:void 0});}},{key:"_updateSliderPosition",value:function _updateSliderPosition(){var t=this.w-this._paddingLeft-this._paddingRight,i=_objectSpread(_objectSpread({mode:this.mode,tone:this.tone,w:t,x:t/2,visible:!this._collapse,alpha:this.style.alpha},this.slider),{},{value:this.value});this._Slider.patch(i);}},{key:"_hasValue",get:function get(){return null!=this.value||null!=this.value}},{key:"_fixedWordWrapWidth",get:function get(){return this.w-this._paddingLeft-this._paddingRight-this._paddingX}},{key:"_onSliderChanged",value:function _onSliderChanged(t,i){t>=i.max?this.value=i.max:t<=i.min?this.value=i.min:this.value=i.value;}},{key:"_handleLeft",value:function _handleLeft(){return "function"==typeof this.onLeft?this.onLeft(this):!(!this._Slider||this._isDisabledMode)&&this._Slider._handleLeft()}},{key:"_handleRight",value:function _handleRight(){return "function"==typeof this.onRight?this.onRight(this):!(!this._Slider||this._isDisabledMode)&&this._Slider._handleRight()}},{key:"announce",get:function get(){return this._announce?this._announce:this.title+this.value+", List Item Slider"},set:function set(t){_set(_getPrototypeOf(ListItemSlider.prototype),"announce",t,this,!0);}}],[{key:"__componentName",get:function get(){return "ListItemSlider"}},{key:"__themeStyle",get:function get(){return Ze}},{key:"_template",value:function _template(){var t=_get(_getPrototypeOf(ListItemSlider),"_template",this);return _objectSpread(_objectSpread({},t()),{},{Content:_objectSpread(_objectSpread({},t().Content),{},{flex:{direction:"column"},TextWrapper:_objectSpread(_objectSpread({},t().Content.TextWrapper),{},{mountY:0,flex:void 0}),Slider:{type:Je,mountX:.5,signals:{onChange:"_onSliderChanged"}}})})}},{key:"properties",get:function get(){return [].concat(_toConsumableArray(_get(_getPrototypeOf(ListItemSlider),"properties",this)),["slider","value"])}},{key:"aliasStyles",get:function get(){return [{prev:"titlePadding",curr:"contentSpacing"}]}},{key:"tags",get:function get(){return [].concat(_toConsumableArray(_get(_getPrototypeOf(ListItemSlider),"tags",this)),[{name:"Slider",path:"Content.Slider"},{name:"Value",path:"Content.TextWrapper.Value"}])}}]),ListItemSlider})();var en=Object.freeze({__proto__:null,base:function base$9(t){return {arrowAlphaValue:t.alpha.primary,arrowAlphaValueLimit:t.alpha.secondary,arrowWidth:t.spacer.xxl,arrowHeight:t.spacer.xxl,iconLeftSrc:t.asset.arrowLeft,iconRightSrc:t.asset.arrowRight}},tone:function tone$4(t){return {neutral:{mode:{focused:{arrowColor:t.color.fillInverse}}},inverse:{mode:{focused:{arrowColor:t.color.fillNeutral}}},brand:{mode:{focused:{arrowColor:t.color.fillInverse}}}}}});(function(t){_inherits(ListItemPicker,Ye);var i=_createSuper(ListItemPicker);function ListItemPicker(){return _classCallCheck(this,ListItemPicker),i.apply(this,arguments)}return _createClass(ListItemPicker,[{key:"_onTextBoxChanged",value:function _onTextBoxChanged(){_get(_getPrototypeOf(ListItemPicker.prototype),"_onTextBoxChanged",this).call(this),this._alignPicker();}},{key:"_construct",value:function _construct(){_get(_getPrototypeOf(ListItemPicker.prototype),"_construct",this).call(this),this._options=[],this._selectedIndex=0;}},{key:"_update",value:function _update(){_get(_getPrototypeOf(ListItemPicker.prototype),"_update",this).call(this),this._updatePicker(),this._updateArrows(),this._updateArrowsAlpha(),this._updateAlignment();}},{key:"_updateAlignment",value:function _updateAlignment(){this._isFocusedMode?this.patch({justify:"center"}):this.patch({justify:"left"});}},{key:"_updateArrows",value:function _updateArrows(){if(!this._isFocusedMode){return this._LeftArrow&&(this._LeftArrow.alpha=.001),void(this._RightArrow&&(this._RightArrow.alpha=.001))}var t={w:this.style.arrowWidth,h:this.style.arrowHeight,style:{color:this.style.arrowColor},alpha:this.style.arrowAlphaValue};this._LeftArrow||this.patch({LeftArrow:{type:st,mountY:.5,y:function y(t){return t/2}}}),this._LeftArrow.patch(_objectSpread(_objectSpread({},t),{},{icon:this.style.iconLeftSrc})),this._LeftArrow.smooth={x:this.style.paddingX},this._RightArrow||this.patch({RightArrow:{type:st,mountY:.5,mountX:1,y:function y(t){return t/2}}}),this._RightArrow.patch(_objectSpread(_objectSpread({},t),{},{icon:this.style.iconRightSrc})),this._RightArrow.smooth={x:this.w-this.style.paddingX};}},{key:"_updatePicker",value:function _updatePicker(){var t=this,i=this.w-this._paddingX-2*this.style.arrowWidth;this._Picker||this._TextWrapper.patch({Picker:{type:ft,clipping:!0,alwaysScroll:!0,signals:{selectedChange:"_updateArrowsAlpha"}}}),this._Picker.patch({visible:!this._collapse,h:this.style.descriptionTextStyle.lineHeight,w:i,items:this.options.map((function(o){return {type:Tt,h:t.style.descriptionTextStyle.lineHeight,w:i,centerAlign:t._isFocusedMode,title:_objectSpread(_objectSpread({},t.style.descriptionTextStyle),{},{text:o})}})),selectedIndex:this.selectedIndex}),this._alignPicker();}},{key:"_alignPicker",value:function _alignPicker(){this._Picker.patch({mountX:this._isFocusedMode?.5:0,x:this._isFocusedMode?this._Title.w/2:0});}},{key:"_updateArrowsAlpha",value:function _updateArrowsAlpha(){this._Picker&&(this._selectedIndex=this._Picker.selectedIndex);var t=this._isFocusedMode?this.style.arrowAlphaValue:0;this._RightArrow&&(this._RightArrow.alpha=this.selectedIndex===this.options.length-1&&this._isFocusedMode?this.style.arrowAlphaValueLimit:t),this._LeftArrow&&(this._LeftArrow.alpha=0===this.selectedIndex&&this._isFocusedMode?this.style.arrowAlphaValueLimit:t),this.fireAncestors("$announce",this.announce);}},{key:"_fixedWordWrapWidth",get:function get(){var t=this.w-this._paddingX-2*this.style.arrowWidth-2*this.style.contentSpacing,i=this.w-this._paddingLeft-this._paddingRight;return this._isFocusedMode?t:i}},{key:"_collapse",get:function get(){return this.shouldCollapse&&!this._isFocusedMode}},{key:"selectedOption",get:function get(){return this._Picker.selected}},{key:"_handleLeft",value:function _handleLeft(){return "function"==typeof this.onLeft?this.onLeft(this):(this._Picker.selectPrevious(),!0)}},{key:"_handleRight",value:function _handleRight(){return "function"==typeof this.onRight?this.onRight(this):(this._Picker.selectNext(),!0)}},{key:"announce",get:function get(){return this._announce?this._announce:this.title+this.options[this.selectedIndex]+", List Item"},set:function set(t){_set(_getPrototypeOf(ListItemPicker.prototype),"announce",t,this,!0);}}],[{key:"__componentName",get:function get(){return "ListItemPicker"}},{key:"__themeStyle",get:function get(){return en}},{key:"properties",get:function get(){return [].concat(_toConsumableArray(_get(_getPrototypeOf(ListItemPicker),"properties",this)),["options","selectedIndex"])}},{key:"tags",get:function get(){return [].concat(_toConsumableArray(_get(_getPrototypeOf(ListItemPicker),"tags",this)),["LeftArrow","RightArrow",{name:"Picker",path:"Content.TextWrapper.Picker"}])}},{key:"aliasStyles",get:function get(){return [{prev:"titlePadding",curr:"contentSpacing"}]}}]),ListItemPicker})();(function(t){_inherits(MetadataCard,Gt);var i=_createSuper(MetadataCard);function MetadataCard(){return _classCallCheck(this,MetadataCard),i.apply(this,arguments)}return _createClass(MetadataCard,null,[{key:"__componentName",get:function get(){return "MetadataCard"}}]),MetadataCard})();var an=function base$8(t){return {textStyle:t.typography.body2,fadeHeight:100,scroll:{timingFunction:"linear",duration:t.animation.duration.xfast},contentMarginTop:t.spacer.md,contentMarginLeft:t.spacer.xl,sliderMarginLeft:t.spacer.lg+t.spacer.xxs}},sn=Object.freeze({__proto__:null,base:an}),ln=Object.freeze({__proto__:null,base:function base$7(t){var i=an(t).scroll;return {progressBar:{animation:i},circleAnimation:i}}}),cn=function(t){_inherits(ScrollSlider,$e);var i=_createSuper(ScrollSlider);function ScrollSlider(){return _classCallCheck(this,ScrollSlider),i.apply(this,arguments)}return _createClass(ScrollSlider,null,[{key:"__componentName",get:function get(){return "ScrollSlider"}},{key:"__themeStyle",get:function get(){return ln}}]),ScrollSlider}();(function(i){_inherits(ScrollWrapper,tt);var o=_createSuper(ScrollWrapper);function ScrollWrapper(){return _classCallCheck(this,ScrollWrapper),o.apply(this,arguments)}return _createClass(ScrollWrapper,[{key:"_construct",value:function _construct(){_get(_getPrototypeOf(ScrollWrapper.prototype),"_construct",this).call(this),this._scrollStep=10,this._shouldWrap=!1,this._flexDirection="column",this._fadeContent=!0,this._sliderWidth=0;}},{key:"_afterTextBoxUpdate",value:function _afterTextBoxUpdate(t){this._prevW===t.finalW&&this._prevH===t.finalH||(this._prevW=t.finalW,this._prevH=t.finalH,this._updateScrollWrapperLayout(),this._updateAlpha());}},{key:"_resetFlexContainer",value:function _resetFlexContainer(){this._FadeContainer.patch({ScrollContainer:void 0}),this._FadeContainer.patch({ScrollContainer:{w:function w(t){return t},wordWrap:!0}});}},{key:"_update",value:function _update(){this._contentChanged&&(this._resetFlexContainer(),this._updateAutoScroll()),this._updateScrollContainer(),this._updateScrollWrapperLayout(),this._updateAlpha();}},{key:"_updateAutoScroll",value:function _updateAutoScroll(){this.resetScroll(),this._setupAutoScroll(),this._contentChanged=!1;}},{key:"_updateScrollWrapperLayout",value:function _updateScrollWrapperLayout(){this._ScrollContainer.patch({w:this._contentWidth}),this._updateFadeContainer(),this._updateSlider();}},{key:"_updateAlpha",value:function _updateAlpha(){this._Slider.smooth={alpha:this.showScrollBar&&this._isFocusedMode?1:0};}},{key:"_updateFadeContainer",value:function _updateFadeContainer(){var i=this._ScrollContainer.finalH>this.h,o=this.fadeContent&&i&&!this._isEndContentVisible;this._FadeContainer.patch({h:this.h,w:this._contentWidth,y:this.style.contentMarginTop,x:this.style.contentMarginLeft,rtt:!0,shader:o?{type:t.shaders.FadeOut,bottom:this.style.fadeHeight}:void 0});}},{key:"_scrollContainerLoaded",value:function _scrollContainerLoaded(t){var i=t.h;this._ScrollContainer.h=i,this._updateScrollWrapperLayout();}},{key:"_updateScrollContainer",value:function _updateScrollContainer(){var t=this;if(this.content)if("string"==typeof this.content)this._ScrollContainer.patch({flex:{direction:"column"},ScrollableText:{h:0,w:this._contentWidth,type:At,content:this.content,style:{textStyle:_objectSpread(_objectSpread({},this.style.textStyle),{},{wordWrap:!0,wordWrapWidth:this._contentWidth})},signals:{textBoxChanged:"_scrollContainerLoaded"},onAfterUpdate:this._afterTextBoxUpdate.bind(this)}});else if(Array.isArray(this.content)){var i={};this.content.forEach((function(o,r){var a="ScrollText".concat(r);i[a]=_objectSpread({w:t._contentWidth},o),o.text&&(i[a]={type:At,content:o.text,style:{textStyle:_objectSpread(_objectSpread(_objectSpread({},t.style.textStyle),o.style),{},{wordWrap:!0,wordWrapWidth:t._contentWidth})},onAfterUpdate:t._afterTextBoxUpdate.bind(t)});})),this._ScrollContainer.patch(_objectSpread({flex:{direction:this.flexDirection,wrap:this.shouldWrap}},i));}}},{key:"_scrollDown",value:function _scrollDown(){if(this._scrollContainerY+this._ScrollContainer.finalH>this.renderHeight){var t=this._scrollContainerY-this.scrollStep,i=t+this._ScrollContainer.finalH>this.renderHeight,o=this.renderHeight-this._ScrollContainer.finalH-this.style.contentMarginTop;this._ScrollContainer.patch({smooth:{y:[i?t:o,this._scrollAnimation]}}),this._scrollContainerY+this._ScrollContainer.finalH<=this.h&&(this._isEndContentVisible=!0,this._autoScrollComplete=!0,this.fireAncestors("$scrollChanged","endDown",this),this._updateFadeContainer());}}},{key:"_scrollUp",value:function _scrollUp(){if(this._scrollContainerY<0){var t=this._scrollContainerY+this.scrollStep,i=t<0;this._ScrollContainer.patch({smooth:{y:[i?t:0,this._scrollAnimation]}}),this._scrollContainerY+this._ScrollContainer.finalH>this.renderHeight&&(this._autoScrollComplete=!1),this._scrollContainerY>=0&&this.fireAncestors("$scrollChanged","endUp",this),this._isEndContentVisible&&(this._isEndContentVisible=!1,this._updateFadeContainer());}}},{key:"resetScroll",value:function resetScroll(){this._ScrollContainer.y=0,this._Slider.value=0,this._ScrollContainer.transition("y").finish(),delete this._ScrollContainer._transitions,this._autoScrollComplete=!1;}},{key:"_setAutoScroll",value:function _setAutoScroll(t){return this._autoScroll!==t&&(this._autoScroll=t),this._setupAutoScroll(),t}},{key:"_setupAutoScroll",value:function _setupAutoScroll(){var t=this;clearTimeout(this._startAutoScroll),clearTimeout(this._performAutoScrollTimer),this.autoScroll&&(this._startAutoScroll=setTimeout((function(){return t._performAutoScroll()}),isNaN(this.autoScrollDelay)?2e3:this.autoScrollDelay));}},{key:"_performAutoScroll",value:function _performAutoScroll(){var t=this;this.autoScroll&&!this._autoScrollComplete&&(this._Slider._handleDown(),this._performAutoScrollTimer=setTimeout((function(){return t._performAutoScroll()}),isNaN(this.autoScrollSpeed)?200:this.autoScrollSpeed));}},{key:"_setContent",value:function _setContent(t){return t!==this._content&&this.enabled&&(this._contentChanged=!0),t}},{key:"_updateScrollContainerSize",value:function _updateScrollContainerSize(t){this._sliderWidth!==t._Container.h&&(this._sliderWidth=t._Container.h,this._updateScrollContainer());}},{key:"_updateSlider",value:function _updateSlider(){var t=this._ScrollContainer.finalH-this.renderHeight,i=Math.ceil(t/this.scrollStep),o=this.renderHeight,r=o/i;this._Slider.patch({x:this.w-this._sliderWidth,w:o,min:0,max:o,step:r,onUp:this._scrollUp.bind(this),onDown:this._scrollDown.bind(this)});}},{key:"_contentWidth",get:function get(){return this.w-this.style.contentMarginLeft-this.style.sliderMarginLeft-this._sliderWidth}},{key:"_scrollContainerY",get:function get(){return this._ScrollContainer.transition("y").targetValue}},{key:"_scrollAnimation",get:function get(){var t=isNaN(this.scrollDuration)?this.style.scroll.duration:this.scrollDuration;return _objectSpread(_objectSpread({},this.style.scroll),{},{duration:t})}},{key:"_getFocused",value:function _getFocused(){return this._Slider}},{key:"announce",get:function get(){return this._announce?this._announce:Array.isArray(this.content)?this._ScrollContainer&&this._ScrollContainer.children&&this._ScrollContainer.children.length?this._ScrollContainer.children.map((function(t){return t.announce})):this.content.map((function(t){return t.announce||t.text})):this.content},set:function set(t){_set(_getPrototypeOf(ScrollWrapper.prototype),"announce",t,this,!0);}}],[{key:"__themeStyle",get:function get(){return sn}},{key:"_template",value:function _template(){return {clipping:!0,FadeContainer:{ScrollContainer:{w:function w(t){return t},wordWrap:!0}},Slider:{type:cn,vertical:!0,signals:{onSizeChange:"_updateScrollContainerSize"},announce:" "}}}},{key:"__componentName",get:function get(){return "ScrollWrapper"}},{key:"properties",get:function get(){return ["autoScroll","autoScrollDelay","autoScrollSpeed","content","fadeContent","scrollDuration","scrollStep","showScrollBar","shouldWrap","flexDirection"]}},{key:"tags",get:function get(){return ["FadeContainer","Slider",{name:"ScrollContainer",path:"FadeContainer.ScrollContainer"},{name:"ScrollableText",path:"ScrollContainer.ScrollableText"}]}}]),ScrollWrapper})();var hn=Object.freeze({__proto__:null,base:function base$6(t){return {alpha:t.alpha.none,animation:t.animation.standardEntrance,blur:t.spacer.xxl,color:t.color.shadowNeutralFocus,offsetX:0,offsetY:t.spacer.lg,radius:t.radius.md,spread:-1*t.spacer.md,maxOffsetY:t.spacer.xxl,maxOffsetX:0}},mode:function mode$1(t){return {focused:{alpha:t.alpha.secondary,offsetY:t.spacer.xxl}}},tone:function tone$3(t){return {neutral:{color:t.color.shadowNeutralFocus},inverse:{color:t.color.shadowInverseFocus},brand:{color:t.color.shadowBrandFocus}}}});(function(i){_inherits(Shadow,tt);var o=_createSuper(Shadow);function Shadow(){return _classCallCheck(this,Shadow),o.apply(this,arguments)}return _createClass(Shadow,[{key:"_updateFocusStyle",value:function _updateFocusStyle(){this._Shadow&&this.applySmooth(this._Shadow,{alpha:this.style.alpha,y:this.style.offsetY,x:this.style.offsetX},{alpha:[this.style.alpha,this.style.animation],y:[this.style.offsetY,this.style.animation],x:[this.style.offsetX,this.style.animation]});}},{key:"_update",value:function _update(){var i=this.style.spread+2*this.style.blur,o=this.style.maxOffsetY,r=this.style.maxOffsetX;this.patch({Frame:{w:this.w+2*i+r,h:this.h+2*i+o,x:(this.w+r)/2,y:(this.h+o)/2,mount:.5,rtt:this.maskShadow,shader:this.maskShadow?{type:t.shaders.Hole,w:this.w-4,h:this.h-4,x:i+2,y:i+2,radius:this.style.radius}:void 0,Shadow:{color:this.style.color,texture:t.Tools.getShadowRect(this.w+2*this.style.spread,this.h+2*this.style.spread,this.style.radius,this.style.blur)}}}),void 0===this.shouldSmooth&&(this.shouldSmooth=!0),this._updateFocusStyle();}}],[{key:"__componentName",get:function get(){return "Shadow"}},{key:"__themeStyle",get:function get(){return hn}},{key:"properties",get:function get(){return ["maskShadow"]}},{key:"tags",get:function get(){return ["Frame",{name:"Shadow",path:"Frame.Shadow"}]}}]),Shadow})();var pn=Object.freeze({__proto__:null,base:function base$5(t){var i=t.spacer.xxl;return {width:i,height:i,radius:i/2}}});(function(t){_inherits(SliderLarge,$e);var i=_createSuper(SliderLarge);function SliderLarge(){return _classCallCheck(this,SliderLarge),i.apply(this,arguments)}return _createClass(SliderLarge,null,[{key:"__componentName",get:function get(){return "SliderLarge"}},{key:"__themeStyle",get:function get(){return pn}}]),SliderLarge})();var yn=function(t){_inherits(ContentSwitcher,tt);var i=_createSuper(ContentSwitcher);function ContentSwitcher(){return _classCallCheck(this,ContentSwitcher),i.apply(this,arguments)}return _createClass(ContentSwitcher,[{key:"_construct",value:function _construct(){_get(_getPrototypeOf(ContentSwitcher.prototype),"_construct",this).call(this),this._selectedIndex=0,this._contentItems=[];}},{key:"_update",value:function _update(){_get(_getPrototypeOf(ContentSwitcher.prototype),"_update",this).call(this),this._updateSelected();}},{key:"_updateSelected",value:function _updateSelected(){var t=this;if(this._preveSelectedIndex!==this.selectedIndex){if(void 0!==this._preveSelectedIndex){var i=this.tag("Content".concat(this._preveSelectedIndex));i.smooth={alpha:0},this._hasContent?i._getTransition("alpha").once("finish",(function(){t._fadeInContent();})):void 0!==this.selectedIndex&&this._fadeInContent();}else this._hasContent&&this._fadeInContent();this._preveSelectedIndex=this.selectedIndex;}}},{key:"_fadeInContent",value:function _fadeInContent(){var t=this;this._selectedContent.smooth={alpha:1},this._selectedContent._getTransition("alpha").once("finish",(function(){t.h=t._selectedContent.h,t.signal("contentHeightChange",t.h);}));}},{key:"_updateContent",value:function _updateContent(){var t=this,i=this.contentItems.reduce((function(i,o,r){var a,l="Content".concat(r);if("function"==typeof o){var c=o();c.then?t._loadAsyncComponent(c,r):a=c;}else a=o;return a&&(i[l]=_objectSpread(_objectSpread({},a),{},{alpha:0})),i}),{});this.patch(i);}},{key:"_loadAsyncComponent",value:function _loadAsyncComponent(t,i){var o=this;t.then((function(t){var r="Content".concat(i);o.patch(_defineProperty$1({},r,_objectSpread(_objectSpread({},t),{},{alpha:0})));}));}},{key:"contentItems",get:function get(){return this._contentItems},set:function set(t){stringifyCompare(t,this._contentItems)||(this._contentItems=t,this._updateContent());}},{key:"_hasContent",get:function get(){return this._selectedContent&&this._selectedContent.children.length>0}},{key:"_selectedContent",get:function get(){return this.tag("Content".concat(this.selectedIndex))}},{key:"_getFocused",value:function _getFocused(){if(this._hasContent)return this._selectedContent}}],[{key:"__componentName",get:function get(){return "ContentSwitcher"}},{key:"properties",get:function get(){return ["selectedIndex"]}}]),ContentSwitcher}(),fn=Object.freeze({__proto__:null,base:function base$4(t){return {tabSpacing:t.spacer.lg,tabsMarginBottom:t.spacer.xxl}}});(function(t){_inherits(TabBar,tt);var i=_createSuper(TabBar);function TabBar(){return _classCallCheck(this,TabBar),i.apply(this,arguments)}return _createClass(TabBar,[{key:"_construct",value:function _construct(){_get(_getPrototypeOf(TabBar.prototype),"_construct",this).call(this),this._tabContent=[],this._isTabsFocused=!0;}},{key:"_selectedTabChange",value:function _selectedTabChange(t,i){return this.fireAncestors("$tabChanged",t,i,this),"object"===_typeof(this._tabContent)&&"function"==typeof this._tabContent.then?this._tabContent.then(this.queueRequestUpdate):this.queueRequestUpdate()}},{key:"_update",value:function _update(){this._updateTabsLayout(),this._updateTabs(),this._updateTabContent(),this._updateTabBarHeight();}},{key:"_updateTabsLayout",value:function _updateTabsLayout(){var t=this,i={style:{itemSpacing:this.style.tabSpacing}},o=ft.properties.reduce((function(i,o){return null!=t[o]&&(i[o]=t[o]),i}),i);this._Tabs.patch(o);}},{key:"_updateTabs",value:function _updateTabs(){var t=this;this._Tabs.wrapSelected=this.wrapSelected,this._Tabs.items.forEach((function(i){var o=i===t._Tabs.selected;t._isUnfocusedMode?i.mode="unfocused":t._isFocusedMode&&(t._isTabsFocused?i.mode=o?"focused":"unfocused":i.mode=o?"selected":"unfocused");})),this.alphaSelectedTab&&this._updateTabAlphas();}},{key:"_updateTabAlphas",value:function _updateTabAlphas(){var t=this;this._isTabsFocused?this._Tabs.items.forEach((function(t){t.patch({alpha:1});})):this._Tabs.items.forEach((function(i){i.patch({alpha:i===t._Tabs.selected?1:.3});}));}},{key:"_updateTabContent",value:function _updateTabContent(){var t=this.style.tabsMarginBottom;this._TabContent.patch({y:this._Tabs.h+t,contentItems:this._tabContent,selectedIndex:this._isFocusedMode?this._Tabs.selectedIndex:void 0});}},{key:"$itemChanged",value:function $itemChanged(){this._updateTabBarHeight(),this._updateTabContent();}},{key:"_updateTabBarHeight",value:function _updateTabBarHeight(){var t;t=this.collapse?this._isFocusedMode&&this._tabContent.filter((function(t){return Object.keys(t).length})).length?this._expandedHeight:this._collapsedHeight:this._expandedHeight,this._TabContent.smooth={alpha:!this.collapse||this._isFocusedMode?1:.001},this.h!==t&&(this.h=t,this.fireAncestors("$itemChanged"));}},{key:"selectTabs",value:function selectTabs(){this._isTabsFocused||(this._isTabsFocused=!0,this._updateTabs(),this._updateTabBarHeight());}},{key:"resetTabs",value:function resetTabs(){this._Tabs.selectedIndex=0;}},{key:"_handleDown",value:function _handleDown(){return this._isTabsFocused&&this._TabContent._hasContent&&(this._isTabsFocused=!1,this._updateTabs(),this._updateTabBarHeight()),!1}},{key:"_handleUp",value:function _handleUp(){return this.selectTabs(),!1}},{key:"_setTabs",value:function _setTabs(t){return this._tabContent=[],this._tabContent=t.map((function(t){return t.tabContent||{}})),this._Tabs.items=t,t}},{key:"_collapsedHeight",get:function get(){return this._Tabs.h}},{key:"_expandedHeight",get:function get(){return this._Tabs.h+this.style.tabsMarginBottom+this._TabContent.h}},{key:"_getFocused",value:function _getFocused(){return this._isTabsFocused?this._Tabs:this._TabContent}},{key:"_unfocus",value:function _unfocus(){_get(_getPrototypeOf(TabBar.prototype),"_unfocus",this).call(this),this.reset&&this.resetTabs();}}],[{key:"_template",value:function _template(){return {Tabs:{type:ft,autoResizeHeight:!0,signals:{selectedChange:"_selectedTabChange"}},TabContent:{type:yn,signals:{contentHeightChange:"_updateTabBarHeight"}}}}},{key:"__themeStyle",get:function get(){return fn}},{key:"__componentName",get:function get(){return "TabBar"}},{key:"properties",get:function get(){return ["alphaSelectedTab","collapse","reset","tabs"].concat(_toConsumableArray(ft.properties))}},{key:"tags",get:function get(){return ["Tabs","TabContent"]}}]),TabBar})();var mn=Object.freeze({__proto__:null,base:function base$3(t){return {radius:t.radius.xl,paddingX:t.spacer.xxxl+t.spacer.xxs,paddingY:t.spacer.md+t.spacer.xs,noTitlePaddingX:t.spacer.xl,iconSize:t.spacer.xxxl,iconMarginRight:t.spacer.md,textStyle:_objectSpread(_objectSpread({},t.typography.headline3),{},{textColor:t.color.textNeutral}),backgroundColor:t.color.fillTransparent,contentColor:t.color.fillNeutral}},mode:function mode(t){return {focused:{backgroundColor:t.color.interactiveNeutralFocus,contentColor:t.color.fillInverse,textStyle:{textColor:t.color.textInverse}},selected:{backgroundColor:t.color.interactiveNeutralFocusSoft,contentColor:t.color.fillNeutral,textStyle:{textColor:t.color.textNeutral}},disabled:{backgroundColor:t.color.fillTransparent,contentColor:t.color.fillNeutralDisabled,textStyle:{textColor:t.color.textNeutralDisabled}}}},tone:function tone$2(t){return {neutral:{},inverse:{mode:{focused:{contentColor:t.color.fillNeutral,textStyle:{textColor:t.color.textNeutral}}}},brand:{mode:{focused:{contentColor:t.color.fillNeutral,textStyle:{textColor:t.color.textNeutral}}}}}}});(function(t){_inherits(Tab,mt);var i=_createSuper(Tab);function Tab(){return _classCallCheck(this,Tab),i.apply(this,arguments)}return _createClass(Tab,[{key:"_onTextBoxChanged",value:function _onTextBoxChanged(){this._updateContent(),this._updateTabSize();}},{key:"_update",value:function _update(){_get(_getPrototypeOf(Tab.prototype),"_update",this).call(this),this._updateIcon(),this._updateText(),this._updateContent(),this._updateTabSize();}},{key:"_updateIcon",value:function _updateIcon(){if(this.icon){var t={icon:this.icon,w:this.style.iconSize,h:this.style.iconSize,y:this._Content.h/2,style:{color:this.style.contentColor}};this.title?(t.x=0,t.mountX=0):(t.x=this._Content.w/2,t.mountX=.5),this._Icon?this._Icon.patch(t):this._Content.patch({Icon:_objectSpread({type:st,mountY:.5},t)});}else this._Content.patch({Icon:void 0});}},{key:"_updateText",value:function _updateText(){var t={content:this.title,style:{textStyle:this.style.textStyle},y:this._Content.h/2};this.icon?(t.x=this._iconW+this.style.iconMarginRight,t.mountX=0):(t.x=this._Content.w/2,t.mountX=.5),this._Text.patch(t);}},{key:"_updateContent",value:function _updateContent(){this._Content.patch({w:this._iconW+(this.title?this.style.iconMarginRight:0)+this._textW,h:Math.max(this._iconH,this._Text.h)});}},{key:"_updateTabSize",value:function _updateTabSize(){this.title||this.icon?this.patch({w:2*this._paddingX+this._Content.w,h:2*this.style.paddingY+this._Content.h}):this.patch({w:0,h:0});}},{key:"_textW",get:function get(){return this.title?this._Text.w:0}},{key:"_iconW",get:function get(){return this.icon?this._Icon.w:0}},{key:"_iconH",get:function get(){return this.icon?this._Icon.h:0}},{key:"_paddingX",get:function get(){return this.title?this.style.paddingX:this.style.noTitlePaddingX}},{key:"announce",get:function get(){return this._announce||this._Text&&this._Text.announce},set:function set(t){_set(_getPrototypeOf(Tab.prototype),"announce",t,this,!0);}}],[{key:"_template",value:function _template(){return _objectSpread(_objectSpread({},_get(_getPrototypeOf(Tab),"_template",this).call(this)),{},{Content:{mount:.5,x:function x(t){return t/2},y:function y(t){return t/2},Text:{type:At,mountY:.5,signals:{textBoxChanged:"_onTextBoxChanged"}}}})}},{key:"__themeStyle",get:function get(){return mn}},{key:"__componentName",get:function get(){return "Tab"}},{key:"properties",get:function get(){return ["icon","title"]}},{key:"tags",get:function get(){return [].concat(_toConsumableArray(_get(_getPrototypeOf(Tab),"tags",this)),["Content",{name:"Icon",path:"Content.Icon"},{name:"Text",path:"Content.Text"}])}}]),Tab})();var xn=Object.freeze({__proto__:null,base:function base$2(t){var i=t.spacer.xl,o=t.spacer.xs,r=t.stroke.sm;return {height:i+2*(o+r),knobWidth:i,knobHeight:i,knobRadius:i/2,knobPadding:o,strokeWidth:r,width:2*(r+2*o+i)}},tone:function tone$1(t){return {neutral:{strokeColor:t.color.fillNeutral,backgroundColor:t.color.fillInverseTertiary,backgroundColorChecked:t.color.fillNeutral,knobColor:t.color.fillNeutral,knobColorChecked:t.color.fillInverse,mode:{disabled:{strokeColor:t.color.fillNeutralDisabled,backgroundColor:t.color.fillInverselDisabled,backgroundColorChecked:t.color.fillNeutralDisabled,knobColor:t.color.fillNeutralDisabled,knobColorChecked:t.color.fillInverseDisabled}}},inverse:{strokeColor:t.color.fillInverse,backgroundColor:t.color.fillNeutralTertiary,backgroundColorChecked:t.color.fillInverse,knobColor:t.color.fillInverse,knobColorChecked:t.color.fillNeutral,mode:{disabled:{strokeColor:t.color.fillInverseDisabled,backgroundColor:t.color.fillNeutralDisabled,backgroundColorChecked:t.color.fillInverseDisabled,knobColor:t.color.fillInverseDisabled,knobColorChecked:t.color.fillNeutralDisabled}}},brand:{strokeColor:t.color.fillBrand,backgroundColor:t.color.fillBrandTertiary,backgroundColorChecked:t.color.fillBrand,knobColor:t.color.fillBrand,knobColorChecked:t.color.fillInverse,mode:{disabled:{strokeColor:t.color.fillNeutralDisabled,backgroundColor:t.color.fillInverselDisabled,backgroundColorChecked:t.color.fillNeutralDisabled,knobColor:t.color.fillNeutralDisabled,knobColorChecked:t.color.fillInverseDisabled}}}}}}),Sn=function(i){_inherits(Toggle,tt);var o=_createSuper(Toggle);function Toggle(){return _classCallCheck(this,Toggle),o.apply(this,arguments)}return _createClass(Toggle,[{key:"_construct",value:function _construct(){_get(_getPrototypeOf(Toggle.prototype),"_construct",this)&&_get(_getPrototypeOf(Toggle.prototype),"_construct",this).call(this),this._checked=!1;}},{key:"_update",value:function _update(){this._updateKnobPosition(),this._updateColors(),this._updateContainer(),this._updateStroke(),this._updateKnob(),this._checkedChanged&&(this.fireAncestors("$announce",this.announce),this._checkedChanged=!1);}},{key:"_updateKnobPosition",value:function _updateKnobPosition(){var t=this.style,i=t.knobPadding,o=t.knobWidth,r=t.strokeWidth;this.applySmooth(this._Knob,{x:this.checked?this.w-r-i-o:r+i});}},{key:"_updateColors",value:function _updateColors(){var t=this.style,i=t.backgroundColor,o=t.backgroundColorChecked,r=t.knobColor,a=t.knobColorChecked,l=this.checked?a:r,c=this.checked?o:i;this.applySmooth(this._Knob,{color:l}),this.applySmooth(this._Container,{color:c});}},{key:"_updateContainer",value:function _updateContainer(){var i=this.style,o=i.knobRadius,r=i.knobPadding,a=i.strokeRadius,l=i.strokeWidth,c=void 0!==a?0===a?a:Math.max(0,a-l):Math.max(0,o+r+l);this._Container.patch({w:this.w,h:this.h,texture:t.Tools.getRoundRect(this.w-2*l-2,this.h-2*l-2,c,l,0,!0,!1)});}},{key:"_updateStroke",value:function _updateStroke(){var i=this.style,o=i.knobRadius,r=i.knobPadding,a=i.strokeColor,l=i.strokeRadius,c=i.strokeWidth;this._Stroke.patch({w:this.w,h:this.h,texture:t.Tools.getRoundRect(this.w-2,this.h-2,void 0!==l?l:o+r+c,c,a,!1,!1)});}},{key:"_updateKnob",value:function _updateKnob(){var i=this.style,o=i.knobHeight,r=i.knobWidth,a=i.knobRadius;this._Knob.patch({zIndex:2,y:(this.h-o)/2,texture:t.Tools.getRoundRect(r-2,o-2,a,0,0,!0,!1)});}},{key:"_setChecked",value:function _setChecked(t){return this._checkedChanged=t!==this._checked,t}},{key:"toggle",value:function toggle(){return this._isDisabledMode||(this.checked=!this.checked),this}},{key:"_handleEnter",value:function _handleEnter(){return "function"==typeof this.onEnter?this.onEnter(this):(this.toggle(),!1)}},{key:"announce",get:function get(){return this._announce||(this.checked?"Checked":"Unchecked")},set:function set(t){_set(_getPrototypeOf(Toggle.prototype),"announce",t,this,!0);}}],[{key:"__componentName",get:function get(){return "Toggle"}},{key:"__themeStyle",get:function get(){return xn}},{key:"_template",value:function _template(){return {Container:{Stroke:{},Knob:{}}}}},{key:"tags",get:function get(){return ["Container",{name:"Knob",path:"Container.Knob"},{name:"Stroke",path:"Container.Stroke"}]}},{key:"properties",get:function get(){return ["checked"]}},{key:"aliasStyles",get:function get(){return [{prev:"strokeWeight",curr:"strokeWidth"}]}}]),Toggle}(),kn=Object.freeze({__proto__:null,base:function base$1(t){var i=t.spacer.lg,o=t.spacer.xxs,r=t.stroke.sm;return {height:i+2*(o+r),knobWidth:i,knobHeight:i,knobRadius:i/2,knobPadding:o,strokeWidth:r,width:2*(r+2*o+i)}}});(function(t){_inherits(ToggleSmall,Sn);var i=_createSuper(ToggleSmall);function ToggleSmall(){return _classCallCheck(this,ToggleSmall),i.apply(this,arguments)}return _createClass(ToggleSmall,null,[{key:"__componentName",get:function get(){return "ToggleSmall"}},{key:"__themeStyle",get:function get(){return kn}}]),ToggleSmall})();(function(i){_inherits(Circle,t.Texture);var o=_createSuper(Circle);function Circle(t){var i;return _classCallCheck(this,Circle),(i=o.call(this,t))._color="rgb(0,0,0)",i._fill=!0,i._radius=100,i._stroke=!1,i._strokeColor="rgb(0,0,0)",i._strokeWidth=1,i}return _createClass(Circle,[{key:"fill",get:function get(){return this._fill},set:function set(t){this._fill=t,this._changed();}},{key:"radius",get:function get(){return this._radius},set:function set(t){this._radius=t,this._changed();}},{key:"color",get:function get(){return this._color},set:function set(t){this._color=t,this._changed();}},{key:"stroke",get:function get(){return this._stroke},set:function set(t){this._stroke=t,this._changed();}},{key:"strokeWidth",get:function get(){return this._strokeWidth},set:function set(t){this._strokeWidth=t,this._changed();}},{key:"strokeColor",get:function get(){return this._strokeColor},set:function set(t){this._strokeColor=t,this._changed();}},{key:"_getLookupId",value:function _getLookupId(){return "__circle_".concat(this._radius)}},{key:"_getSourceLoader",value:function _getSourceLoader(){var t=this._color,i=this._fill,o=this._radius,r=this._stroke,a=this._strokeColor,l=this._strokeWidth,c=this.stage.platform.getDrawingCanvas(),u=o;return r&&(u=o+2*l),c.width=2*u,c.height=2*u,function(h){var d=c.getContext("2d");d.lineWidth=l,d.strokeStyle=a,d.fillStyle=t,d.beginPath(),d.arc(u,u,o,0,2*Math.PI),i&&d.fill(),r&&d.stroke(),h(null,{source:c,radius:o});}}}]),Circle})();(function(i){_inherits(Arrow,t.Texture);var o=_createSuper(Arrow);function Arrow(t){var i;return _classCallCheck(this,Arrow),(i=o.call(this,t))._color="rgb(13, 13, 15)",i._w=0,i._h=0,i._direction="right",i}return _createClass(Arrow,[{key:"w",get:function get(){return this._w},set:function set(t){this._w=t,this._changed();}},{key:"h",get:function get(){return this._h},set:function set(t){this._h=t,this._changed();}},{key:"direction",get:function get(){return this._direction},set:function set(t){this._direction=t,this._changed();}},{key:"color",get:function get(){return this._color},set:function set(t){this._color=t,this._changed();}},{key:"_getLookupId",value:function _getLookupId(){return "__triangle_".concat(this._direction,"_").concat(this._w,"x").concat(this._h)}},{key:"_getSourceLoader",value:function _getSourceLoader(){var t=this._color,i=this._w,o=this._h,r=this._direction,a=this.stage.platform.getDrawingCanvas();return function(l){var c=a.getContext("2d");a.width=i,a.height=o,c.fillStyle=t,c.strokeStyle=c.fillStyle,c.lineWidth=2,c.lineCap="round",c.lineJoin="round";var u=c.lineWidth/2;c.beginPath(),"right"===r?(c.moveTo(u,u),c.lineTo(u,o-u),c.lineTo(i-u,o/2)):"down"===r?(c.moveTo(u,u),c.lineTo(i-u,u),c.lineTo(i/2,o-u)):(c.moveTo(u,o/2),c.lineTo(i-u,u),c.lineTo(i-u,o-u)),c.closePath(),c.stroke(),c.fill(),l(null,{source:a,w:i,h:o,direction:r});}}}]),Arrow})();(function(i){_inherits(Line,t.Texture);var o=_createSuper(Line);function Line(t){var i;return _classCallCheck(this,Line),(i=o.call(this,t))._w=0,i._h=0,i._rounded=!1,i}return _createClass(Line,[{key:"w",get:function get(){return this._w},set:function set(t){this._w=t,this._changed();}},{key:"h",get:function get(){return this._h},set:function set(t){this._h=t,this._changed();}},{key:"rounded",get:function get(){return this._rounded},set:function set(t){this._rounded=t,this._changed();}},{key:"_getLookupId",value:function _getLookupId(){return "__line_".concat(this._w,"x").concat(this._h).concat(this._rounded?"_rounded":"")}},{key:"_getSourceLoader",value:function _getSourceLoader(){var t=this._w,i=this._h,o=this._rounded,r=this.stage.platform.getDrawingCanvas();return function(a){var l=r.getContext("2d");r.width=t,r.height=i,l.lineWidth=i,o&&(l.lineCap="round"),l.strokeStyle="white",l.beginPath(),l.moveTo(o?2:0,i/2),l.lineTo(o?t-2:t,i/2),l.stroke(),a(null,{source:r,w:t,h:i,rounded:o});}}}]),Line})();var In=function(i){_inherits(Bubble,t.Texture);var o=_createSuper(Bubble);function Bubble(t){var i;return _classCallCheck(this,Bubble),(i=o.call(this,t))._w=0,i._h=0,i._radius=0,i._pointerWidth=0,i._pointerHeight=0,i._strokeWidth=0,i._color="white",i}return _createClass(Bubble,[{key:"w",get:function get(){return this._w},set:function set(t){this._w=t,this._changed();}},{key:"h",get:function get(){return this._h},set:function set(t){this._h=t,this._changed();}},{key:"radius",get:function get(){return this._radius},set:function set(t){Array.isArray(t)?this._radius=new Array(4).fill().map((function(i,o){return t[o]||0})):this._radius=t,this._changed();}},{key:"pointerWidth",get:function get(){return this._pointerWidth},set:function set(t){this._pointerWidth=t,this._changed();}},{key:"pointerHeight",get:function get(){return this._pointerHeight},set:function set(t){this._pointerHeight=t,this._changed();}},{key:"strokeWidth",get:function get(){return this._strokeWidth},set:function set(t){this._strokeWidth=t,this._changed();}},{key:"color",get:function get(){return this._color},set:function set(i){this._color=t.StageUtils.getRgbaString(i),this._changed();}},{key:"createBubble",value:function createBubble(t){var i=t.stage,o=t.w,r=void 0===o?0:o,a=t.h,l=void 0===a?0:a,c=t.radius,u=void 0===c?0:c,h=t.pointerWidth,d=void 0===h?0:h,p=t.pointerHeight,_=void 0===p?0:p,g=t.strokeWidth,m=void 0===g?1:g,v=t.color,S=void 0===v?"white":v,k=i.platform.getDrawingCanvas(),b=k.getContext("2d");k.width=r+m+4,k.height=l+m+4,b.imageSmoothingEnabled=!0,b.fillStyle=S,b.strokeStyle=S,b.lineWidth=m,b.lineCap="round",b.lineJoin="round";var C=.5*m+1,T=C,I=T+r,A=C,P=A+l,L=P-_,B=Array.isArray(u);return b.beginPath(),b.moveTo(T+(B?u[0]:u),A),b.lineTo(I-(B?u[0]:u),A),b.arcTo(I,A,I,A+(B?u[1]:u),B?u[1]:u),b.lineTo(I,L-(B?u[2]:u)),b.arcTo(I,L,I-(B?u[2]:u),L,B?u[2]:u),b.lineTo(r/2+d/2,L),b.arcTo(r/2,P,r/2-d/2,L,2),b.lineTo(r/2-d/2,L),b.lineTo(T+(B?u[3]:u),L),b.arcTo(T,L,T,L-(B?u[3]:u),B?u[3]:u),b.lineTo(T,A+(B?u[0]:u)),b.arcTo(T,A,T+(B?u[0]:u),A,B?u[0]:u),b.stroke(),b.fill(),k}},{key:"_getLookupId",value:function _getLookupId(){var t=this.w,i=this.h,o=this.radius,r=this.pointerWidth,a=this.pointerHeight,l=this.color;return "__bubble_".concat(t,"x").concat(i,"_radius-").concat(o,"_pointer-").concat(r,"x").concat(a,"_fill-").concat(l)}},{key:"_getSourceLoader",value:function _getSourceLoader(){var t=this;return function(i){i(null,{source:t.createBubble(t)});}}}]),Bubble}(),An=Object.freeze({__proto__:null,base:function base(t){return {marginBottom:t.spacer.xl,paddingX:t.spacer.lg,paddingY:t.spacer.md,pointerWidth:t.spacer.xxl,pointerHeight:t.spacer.lg,radius:t.radius.sm,textStyle:_objectSpread(_objectSpread({},t.typography.body3),{},{textColor:t.color.textInverse}),transition:t.animation.utility}},tone:function tone(t){return {neutral:{backgroundColor:t.color.fillNeutral,textStyle:{textColor:t.color.textInverse}},inverse:{backgroundColor:t.color.fillInverse,textStyle:{textColor:t.color.textNeutral}},brand:{backgroundColor:t.color.fillBrand,textStyle:{textColor:t.color.textNeutral}}}}});(function(t){_inherits(Tooltip,tt);var i=_createSuper(Tooltip);function Tooltip(){return _classCallCheck(this,Tooltip),i.apply(this,arguments)}return _createClass(Tooltip,[{key:"_update",value:function _update(){this._updateText(),this._updateBackground();}},{key:"_updateText",value:function _updateText(){this._Text&&this._Text.patch({content:this.title,style:{textStyle:this.style.textStyle}});}},{key:"_textLoaded",value:function _textLoaded(){this._updateBackgroundHeight(),this._updateTextPosition();}},{key:"_updateBackground",value:function _updateBackground(){this.patch({Background:{w:this._Background.w,h:this._Background.h,texture:{type:In,w:this._Background.w,h:this._Background.h,radius:this.style.radius,pointerWidth:this.style.pointerWidth,pointerHeight:this.style.pointerHeight,color:this.style.backgroundColor}}});}},{key:"_updateBackgroundHeight",value:function _updateBackgroundHeight(){var t=this._Text.finalH+2*this.style.paddingY+this.style.pointerHeight,i=this._Text.finalW+2*this.style.paddingX;this.patch({w:i,h:t,mountY:1,y:-this.style.marginBottom,Background:{w:i,h:t,texture:{type:In,w:i,h:t}}});}},{key:"_updateTextPosition",value:function _updateTextPosition(){this._Text&&this._Text.patch({mount:.5,x:this._Background.w/2,y:(this._Background.h-this.style.pointerHeight)/2});}},{key:"_clearTimers",value:function _clearTimers(){clearTimeout(this._hideTimer),clearTimeout(this._showTimer);}},{key:"_transitionIn",value:function _transitionIn(){var t=this,i={smooth:{alpha:[1,this.style.transition],scale:[1,this.style.transition]}};this.delayVisible?this._showTimer=setTimeout((function(){t.patch({smooth:i});}),this.delayVisible):(this._showTimer=void 0,this.patch({smooth:i})),this._hideTimer=this.timeVisible?setTimeout((function(){t._unfocus();}),this.timeVisible+(this.delayVisible||0)):void 0;}},{key:"_transitionOut",value:function _transitionOut(){this.patch({smooth:{alpha:[0,this.style.transition],scale:[.5,this.style.transition]}});}},{key:"_focus",value:function _focus(){this._clearTimers(),this._transitionIn();}},{key:"_unfocus",value:function _unfocus(){this._clearTimers(),this._transitionOut();}},{key:"announce",get:function get(){return this._announce||this._Text&&this._Text.announce},set:function set(t){_set(_getPrototypeOf(Tooltip.prototype),"announce",t,this,!0);}}],[{key:"__componentName",get:function get(){return "Tooltip"}},{key:"__themeStyle",get:function get(){return An}},{key:"_template",value:function _template(){return {alpha:0,scale:.5,mountX:.5,x:function x(t){return t/2},Background:{Text:{type:At,signals:{textBoxChanged:"_textLoaded"}}}}}},{key:"properties",get:function get(){return ["title","delayVisible","timeVisible"]}},{key:"tags",get:function get(){return ["Background",{name:"Text",path:"Background.Text"}]}},{key:"aliasStyles",get:function get(){return [{prev:"pointerH",curr:"pointerHeight"},{prev:"pointerW",curr:"pointerWidth"}]}}]),Tooltip})();(function(t){_inherits(SignalButton,Pt);var i=_createSuper(SignalButton);function SignalButton(){return _classCallCheck(this,SignalButton),i.apply(this,arguments)}return _createClass(SignalButton,[{key:"onEnter",value:function onEnter(){this.signal(this.signalName);}},{key:"signalName",get:function get(){return this._signalName},set:function set(t){this._signalName=t;}}]),SignalButton})();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNzk1NDQ4NThlYzIyZjYyNTY0NGZkNjQ5YzExMTZlYSIsInN1YiI6IjY1MmFjYzdmMDI0ZWM4MDEwMTUxOTM3MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kYbm0Fk71ToKQegQ4V5QevENkW-I7Yc9YraX630BqAI'
    }
  };

  class BackgroundComponent extends t.Component {
    static _template() {
      return {
        Background: {
          rect: true,
          w: 1920,
          h: 1080,
          color: 0xFF000000
          // colorTop: 0xff7CB9E8,
          // colorBottom: 0xff2a52be,
          // In any case of background, uncomment this and put a custom background
          // src: Utils.asset('images/background.png'),
        }
      };
    }
    _init() {}
  }

  class HeaderComponent extends t.Component {
    static _template() {
      return {
        Header: {
          rect: true,
          w: 1920,
          h: 100,
          color: 0xFF43c48b,
          Title: {
            x: 960,
            y: 50,
            mountY: 0.5,
            mountX: 0.5,
            text: {
              text: 'Lightning Demo App',
              fontFace: 'Bold',
              textAlign: 'center',
              textColor: '0xFFFFFFFF'
            }
          }
        }
      };
    }
    _init() {}
  }

  class MenuComponent extends t.Component {
    static _template() {
      return {
        Menu: {
          rect: true,
          h: 1080,
          w: 300,
          y: 0,
          x: 0,
          rect: true,
          color: 0xFF000000,
          Logo: {
            y: 50,
            x: 50,
            w: 200,
            h: 60,
            src: Utils.asset('images/logo-green.png')
          },
          Title: {
            x: 150,
            y: 250,
            mountY: 0.5,
            mountX: 0.5,
            text: {
              text: 'Categories',
              fontFace: 'Bold',
              textAlign: 'center',
              textColor: '0xFFFAFAFA',
              fontSize: 32
            }
          },
          MenuButtons: {
            type: me,
            h: 1080,
            w: 50,
            y: 300,
            x: 50,
            items: [{
              type: Pt,
              y: 0,
              fixed: true,
              w: 200,
              h: 50,
              title: "NEW",
              color: 0xFF24BD7E
            }, {
              type: Pt,
              y: 0,
              fixed: true,
              w: 200,
              h: 50,
              title: "POPULAR"
            }, {
              type: Pt,
              y: 0,
              fixed: true,
              w: 200,
              h: 50,
              title: "VOTES"
            }, {
              type: Pt,
              y: 0,
              fixed: true,
              w: 200,
              h: 50,
              title: "REVENUE"
            }]
          }
        }
      };
    }
    _getFocused() {
      return this.tag("Menu.MenuButtons");
    }
    _init() {}
  }

  class PosterComponent extends t.Component {
    static _template() {
      return {
        rect: true,
        color: 0xFF13885b,
        w: 500,
        h: 370,
        x: 0,
        y: 0,
        PlaceholderBg: {
          w: 500,
          h: 282,
          x: 250,
          y: 125,
          rect: true,
          color: 0xFF3d3d3d,
          mountX: 0.5,
          mountY: 0.5
        },
        PlaceholderImg: {
          w: 500,
          h: 282,
          x: 250,
          y: 125,
          mountX: 0.5,
          mountY: 0.5,
          texture: {
            w: 500,
            h: 282,
            type: lng.textures.ImageTexture,
            src: Utils.asset("images/placeholder.png")
          }
        },
        Poster: {
          assetId: 0,
          w: 500,
          h: 282,
          x: 250,
          y: 125,
          mountX: 0.5,
          mountY: 0.5,
          color: 0xFF858585,
          texture: {
            w: 500,
            h: 282,
            type: lng.textures.ImageTexture,
            src: "https://image.tmdb.org/t/p/w220_and_h330_face/sERwJxz0sqsbcUoTm66l9pI6HcH.jpg"
          }
        },
        PosterTitle: {
          y: 300,
          x: 0,
          text: {
            w: 500,
            text: "Poster title",
            fontSize: 24,
            fontFace: 'Bold',
            maxLines: 2,
            textAlign: 'center'
          }
        },
        PosterReleaseDate: {
          y: 275,
          x: 0,
          text: {
            w: 500,
            text: "2023-12-14",
            fontSize: 22,
            fontFace: 'Bold',
            textAlign: 'center'
          }
        }
      };
    }
    _init() {}
    _handleEnter() {
      Router.navigate("movie/details/".concat(this.tag("Poster").assetId));
      console.log(this.tag("Poster").assetId);
    }
    pageTransition() {
      return "fade";
    }
    _focus() {
      this.patch({
        color: 0xFF24BD7E
      });
      this.tag("Poster").patch({
        color: 0xFFFFFFFF
      });
    }
    _unfocus() {
      this.patch({
        color: 0xFF13885b
      });
      this.tag("Poster").patch({
        color: 0xFF858585
      });
    }
    set posterID(id) {
      this.tag("Poster").patch({
        assetId: id
      });
    }
    set posterUrl(url) {
      this.tag("Poster").patch({
        src: url
      });
    }
    set posterTitle(title) {
      this.tag("PosterTitle").patch({
        text: {
          text: title
        }
      });
    }
    set posterReleaseDate(releaseDate) {
      this.tag("PosterReleaseDate.text").patch({
        text: releaseDate
      });
    }
    set posterPosition(idx) {
      this.patch({
        x: idx
      });
    }
  }

  class ExitModalComponent extends t.Component {
    static _template() {
      return {
        Glass: {
          x: 0,
          y: 0,
          w: 1920,
          h: 1080,
          rect: true,
          alpha: 0.8,
          shader: {
            type: t.shaders.LinearBlur,
            x: 45
          }
        },
        ModalBg: {
          rect: true,
          color: 0xFF000000,
          w: 600,
          h: 200,
          mountX: 0.5,
          mountY: 0.5,
          x: 960,
          y: 540,
          shader: {
            type: t.shaders.RoundedRectangle,
            radius: 40
          }
        },
        ModalText: {
          x: 750,
          y: 475,
          text: {
            text: "Do you want to exit the app?",
            fontFace: "Bold",
            fontSize: 32
          }
        },
        ModalElements: {
          x: 700,
          y: 400,
          BtnDeny: {
            type: Pt,
            x: 50,
            y: 150,
            fixed: true,
            w: 150,
            h: 50,
            title: "No"
          },
          BtnConfirm: {
            type: Pt,
            x: 325,
            y: 150,
            fixed: true,
            w: 150,
            h: 50,
            title: "Yes"
          }
        }
      };
    }
    _init() {
      this._setState("BtnConfirm");
    }
    static _states() {
      return [class BtnConfirm extends this {
        _getFocused() {
          return this.tag("BtnConfirm");
        }
        _handleLeft() {
          this._setState("BtnDeny");
        }
        _handleEnter() {
          this.application.closeApp();
        }
      }, class BtnDeny extends this {
        _getFocused() {
          return this.tag("BtnDeny");
        }
        _handleRight() {
          this._setState("BtnConfirm");
        }
      }];
    }
  }

  // Methods
  const createItems = async (element, pageToLook) => {
    const response = await fetch("https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=".concat(pageToLook, "&sort_by=popularity.desc"), options);
    await response.json();
    switch (element) {
      case 'cardContentV':
        try {
          const response = await fetch("https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=".concat(pageToLook, "&sort_by=popularity.desc"), options);
          const data = await response.json();
          const cards = data.results.map((poster, idx) => ({
            type: PosterComponent,
            posterUrl: "https://image.tmdb.org/t/p/w1280_and_h720_multi_faces".concat(poster.backdrop_path),
            posterTitle: poster.title,
            posterDesc: poster.overview,
            posterID: poster.id,
            y: 165
          }));
          return {
            items: cards
          };
        } catch (err) {
          console.error(err);
          return {
            items: []
          };
        }
    }
  };
  class Home extends t.Component {
    static _template() {
      return {
        //Background
        Background: {
          type: BackgroundComponent
        },
        //SuperContainer
        ContainerInstance: {
          type: me,
          h: 1080,
          w: 1920,
          y: 300,
          x: 350,
          alwaysScroll: true,
          wrapSelected: true,
          items: [{
            type: ft,
            h: 390,
            items: [],
            alwaysScroll: true
          }, {
            type: ft,
            h: 390,
            items: [],
            alwaysScroll: true
          }, {
            type: ft,
            h: 390,
            items: [],
            alwaysScroll: true
          }, {
            type: ft,
            h: 390,
            items: [],
            alwaysScroll: true
          }]
        },
        //Black box wrapping the header and text, also ensures that when the row goes up does the appareance that hides
        TextWrapper: {
          rect: true,
          w: 1920,
          h: 300,
          x: 0,
          color: 0xFF000000
        },
        //Header
        Header: {
          type: HeaderComponent
        },
        WelcomeText: {
          x: 350,
          y: 120,
          text: {
            fontSize: 24,
            text: "Welcome, user",
            color: 0xff0000,
            fontFace: 'Bold'
          }
        },
        DeviceSpecs: {
          x: 350,
          y: 160,
          ResolutionText: {
            y: 0,
            text: {
              fontSize: 24,
              text: "Screen Resolution: ",
              color: 0xff3C57B9
            }
          },
          DevNameText: {
            x: 200,
            y: -40,
            text: {
              fontSize: 24,
              text: "Current device: ",
              color: 0xff3C57B9
            }
          },
          VersionsText: {
            x: 350,
            y: 0,
            text: {
              fontSize: 24,
              text: "OS Version: ",
              color: 0xff3C57B9
            }
          },
          ConnectedText: {
            x: 0,
            y: 40,
            text: {
              fontSize: 24,
              text: "Network status: ",
              color: 0xff3C57B9
            }
          }
        },
        BrowserLabel: {
          x: 1650,
          y: 120,
          text: {
            fontSize: 48,
            text: "BROWSE",
            color: 0xff0000,
            fontFace: 'Bold'
          }
        },
        //Menu Container
        MenuInstance: {
          type: MenuComponent
        },
        //Exit modal
        ModalInstance: {
          type: ExitModalComponent,
          x: 0,
          y: 0,
          alpha: 0
        }
      };
    }
    _init() {
      Lifecycle.ready().then(result => {
        // console.log(result)
        // console.log("App is ready to go")

        Device.network().then(async networkInfo => {
          if (networkInfo.state === "connected") ;
          this.tag("ConnectedText").patch({
            text: "Network status: ".concat(networkInfo.state.toUpperCase())
          });
        });
        Device.screenResolution().then(screenRes => {
          this.tag("ResolutionText").patch({
            text: "Screen Resolution: ".concat(screenRes[0], "x").concat(screenRes[1])
          });
        });
        Device.version().then(versions => {
          this.tag("VersionsText").patch({
            text: "OS Version: ".concat(versions.os.readable)
          });
        });
        Device.name().then(value => {
          this.tag("DevNameText").patch({
            text: "Current device: ".concat(value)
          });
        });
      });
      var rowLength = this.tag("ContainerInstance").items.length;
      for (let i = 0; i < rowLength; i++) {
        createItems("cardContentV", i + 1).then(result => {
          this.tag("ContainerInstance").items[i].items = result.items;
        }).catch(error => {
          console.error(error);
        });
      }
      super._init();
      this._setState("MenuInstance");
    }
    _handleBack() {
      this._setState("ModalInstance");
      this.tag("ModalInstance").patch({
        alpha: 1
      });
      this.tag("MenuInstance").patch({
        visible: false
      });
      this.tag("ContainerInstance").patch({
        x: 50
      });
      this.tag("WelcomeText").patch({
        x: 50
      });
      this.tag("DeviceSpecs").patch({
        x: 50
      });
    }
    static _states() {
      return [class ContainerInstance extends this {
        _getFocused() {
          return this.tag("ContainerInstance");
        }
        _handleLeft() {
          this.tag("MenuInstance").patch({
            visible: true
          });
          this.tag("ContainerInstance").patch({
            x: 350
          });
          this.tag("WelcomeText").patch({
            x: 350
          });
          this.tag("DeviceSpecs").patch({
            x: 350
          });
          this._setState("MenuInstance");
        }
      }, class MenuInstance extends this {
        _getFocused() {
          return this.tag("MenuInstance");
        }
        _handleRight() {
          this._setState("ContainerInstance");
          this.tag("MenuInstance").patch({
            visible: false
          });
          this.tag("ContainerInstance").patch({
            x: 50
          });
          this.tag("WelcomeText").patch({
            x: 50
          });
          this.tag("DeviceSpecs").patch({
            x: 50
          });
        }
      }, class ModalInstance extends this {
        _getFocused() {
          return this.tag("ModalInstance");
        }
        _handleBack() {
          this._setState("MenuInstance");
          this.tag("ModalInstance").patch({
            alpha: 0
          });
          this.tag("MenuInstance").patch({
            visible: true
          });
          this.tag("ContainerInstance").patch({
            x: 350
          });
          this.tag("WelcomeText").patch({
            x: 350
          });
          this.tag("DeviceSpecs").patch({
            x: 350
          });
        }
        _handleEnter() {
          this._setState("MenuInstance");
          this.tag("ModalInstance").patch({
            alpha: 0
          });
          this.tag("MenuInstance").patch({
            visible: true
          });
          this.tag("ContainerInstance").patch({
            x: 350
          });
          this.tag("WelcomeText").patch({
            x: 350
          });
          this.tag("DeviceSpecs").patch({
            x: 350
          });
        }
      }];
    }
    pageTransition() {
      return 'down';
    }
  }

  const getAssetDetails = async assetId => {
    const response = await fetch("https://api.themoviedb.org/3/movie/".concat(assetId, "?language=en-US"), options);
    const data = await response.json();
    return data;
  };
  class Details extends t.Component {
    static _template() {
      return {
        //Foreground Img
        AssetImgBackground: {
          w: 1920,
          h: 800,
          colorTop: 0xFF858585,
          colorBottom: 0xFF858585,
          src: "https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/sERwJxz0sqsbcUoTm66l9pI6HcH.jpg"
        },
        //Rest of Foreground as solid color
        AssetColorBackground: {
          rect: true,
          w: 1920,
          h: 1080,
          y: 400,
          color: 0xFF000000
          // colorTop: 0xff7CB9E8,
          // colorBottom: 0xff2a52be,
        },
        Header: {
          type: HeaderComponent
        },
        //Asset details (title, release date, overview, poster and buttons to play or add favourite)
        AssetTitle: {
          rect: true,
          w: 1920,
          h: 100,
          y: 400,
          color: 0xFF24BD7E,
          ATitle: {
            y: 25,
            x: 550,
            text: {
              text: "Title",
              fontFace: 'Bold'
            }
          }
        },
        AssetButtons: {
          type: ft,
          y: 520,
          x: 550,
          wrapSelected: true,
          items: [{
            type: Bt,
            fixed: true,
            w: 250,
            h: 50,
            title: "Watch Trailer"
          }, {
            type: Bt,
            fixed: true,
            w: 300,
            h: 50,
            x: 100,
            title: "Add Favourite"
          }]
        },
        AssetReleaseDate: {
          y: 590,
          x: 550,
          text: {
            text: "2023-12-14",
            fontFace: 'Bold',
            fontSize: 24
          }
        },
        AssetOverview: {
          y: 625,
          x: 550,
          text: {
            w: 600,
            text: "Lorem Ipsum",
            fontFace: 'Bold',
            fontSize: 24,
            maxLines: 10
          }
        },
        AssetPoster: {
          w: 320,
          h: 430,
          y: 230,
          x: 200,
          src: "https://image.tmdb.org/t/p/w500/sERwJxz0sqsbcUoTm66l9pI6HcH.jpg"
        }
      };
    }
    _getFocused() {
      return this.tag("AssetButtons");
    }
    _init() {}
    _handleBack() {
      Router.back();
    }
    _handleEnter() {
      Router.navigate("movie/details/play/".concat(this.tag("AssetPoster").assetId));
    }
    pageTransition() {
      return "up";
    }
    _onUrlParams(args) {
      const assetResult = new Promise(async (resolve, reject) => {
        try {
          const result = await getAssetDetails(args.assetId);
          resolve(result);
        } catch (error) {
          reject(error);
        }
      });
      assetResult.then(assetData => {
        this.tag("AssetImgBackground").patch({
          src: "https://image.tmdb.org/t/p/w1920_and_h800_multi_faces".concat(assetData.backdrop_path)
        });
        this.tag("AssetTitle.ATitle").patch({
          text: {
            text: assetData.title
          }
        });
        this.tag("AssetReleaseDate").patch({
          text: {
            text: assetData.release_date
          }
        });
        this.tag("AssetOverview").patch({
          text: {
            text: assetData.overview
          }
        });
        this.tag("AssetPoster").patch({
          src: "https://image.tmdb.org/t/p/w500/".concat(assetData.poster_path)
        });
        this.tag("AssetPoster").patch({
          assetId: assetData.id
        });
      }).catch(error => {
        console.error("Error fetching asset details:", error);
      });
    }
  }

  function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function _toPrimitive(input, hint) {
    if (typeof input !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
      var res = prim.call(input, hint || "default");
      if (typeof res !== "object") return res;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
  }
  function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return typeof key === "symbol" ? key : String(key);
  }

  // const videoPlayer = document.getElementById("video-player")
  // console.log(videoPlayer)

  // videoPlayer.addEventListener('timeupdate', () => {
  //     // You can use this event to track the progress of the video.
  //     // It is fired regularly as the video is playing.
  //     console.log('Current time:', videoPlayer.currentTime);
  //   });

  class Player extends t.Component {
    static _template() {
      return {
        SkipBBtn: {
          type: De,
          mountX: 0.5,
          x: 810,
          y: 900,
          fixed: true,
          size: "sm",
          w: 100,
          h: 100,
          icon: Utils.asset("images/icons_player/back-gray.svg")
        },
        PlayPauseBtn: {
          type: De,
          mountX: 0.5,
          x: 960,
          y: 900,
          fixed: true,
          size: "sm",
          w: 100,
          h: 100,
          icon: Utils.asset("images/icons_player/pause-gray.svg")
        },
        SkipFBtn: {
          type: De,
          mountX: 0.5,
          x: 1110,
          y: 900,
          fixed: true,
          size: "sm",
          w: 100,
          h: 100,
          icon: Utils.asset("images/icons_player/forward-gray.svg")
        },
        Spinner: {
          src: Utils.asset("images/spinner.png"),
          mountX: 0.5,
          mountY: 0.5,
          x: 960,
          y: 540,
          w: 100,
          h: 100,
          alpha: 0.001,
          color: 0xaaffffff,
          transitions: {
            alpha: {
              duration: 1,
              timingFunction: "cubic-bezier(0.20, 1.00, 0.80, 1.00)"
            }
          }
        }
      };
    }
    _init() {
      this._spinnerAnimation = this.animation({
        duration: 1,
        repeat: -1,
        actions: [{
          t: "Spinner",
          p: "rotation",
          sm: 0,
          v: function (t) {
            if (t < 0.125) {
              return 45 * (Math.PI / 180);
            } else if (t < 0.25) {
              return 90 * (Math.PI / 180);
            } else if (t < 0.375) {
              return 135 * (Math.PI / 180);
            } else if (t < 0.5) {
              return 180 * (Math.PI / 180);
            } else if (t < 0.625) {
              return 225 * (Math.PI / 180);
            } else if (t < 0.75) {
              return 270 * (Math.PI / 180);
            } else if (t < 0.875) {
              return 315 * (Math.PI / 180);
            } else if (t < 1) {
              return 360 * (Math.PI / 180);
            }
          }
        }]
      });
    }
    _firstActive() {
      const videoUrl = 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4';
      VideoPlayer.consumer(this);
      VideoPlayer.show();
      VideoPlayer.open(videoUrl);
      VideoPlayer.play(videoUrl);
      const videoPlayer = document.getElementById("video-player");
      videoPlayer.addEventListener('timeupdate', () => {
        // You can use this event to track the progress of the video.
        // It is fired regularly as the video is playing.
        console.log('Current time:', videoPlayer.currentTime);
      });
      videoPlayer.addEventListener("waiting", () => {
        this.tag("Spinner").setSmooth("alpha", 1);
        this._spinnerAnimation.start();
      });
      videoPlayer.addEventListener("canplay", () => {
        this.tag("Spinner").setSmooth("alpha", 0);
        this._spinnerAnimation.stop();
      });
      this._setState("PlayPauseBtn");
    }
    _active() {}
    static _states() {
      return [class SkipBBtn extends this {
        _getFocused() {
          return this.tag("SkipBBtn");
        }
        _handleEnter() {
          VideoPlayer.skip(-20);
        }
        _handleRight() {
          this._setState("PlayPauseBtn");
        }
        _focus() {
          this.tag("SkipBBtn").patch({
            icon: Utils.asset("images/icons_player/back-black.svg")
          });
        }
        _unfocus() {
          this.tag("SkipBBtn").patch({
            icon: Utils.asset("images/icons_player/back-gray.svg")
          });
        }
      }, class PlayPauseBtn extends this {
        _getFocused() {
          return this.tag("PlayPauseBtn");
        }
        _handleLeft() {
          this._setState("SkipBBtn");
        }
        _handleEnter() {
          if (VideoPlayer.playing) {
            this.tag("PlayPauseBtn").patch({
              icon: Utils.asset("images/icons_player/play-gray.svg")
            });
          } else {
            this.tag("PlayPauseBtn").patch({
              icon: Utils.asset("images/icons_player/pause-gray.svg")
            });
          }
          VideoPlayer.playPause();
        }
        _handleRight() {
          this._setState("SkipFBtn");
        }
        _focus() {
          this.tag("PlayPauseBtn").patch({
            icon: Utils.asset("images/icons_player/pause-gray.svg")
          });
        }
        _unfocus() {
          this.tag("PlayPauseBtn").patch({
            icon: Utils.asset("images/icons_player/pause-gray.svg")
          });
        }
      }, class SkipFBtn extends this {
        _getFocused() {
          return this.tag("SkipFBtn");
        }
        _handleLeft() {
          this._setState("PlayPauseBtn");
        }
        _handleEnter() {
          VideoPlayer.skip(20);
        }
        _focus() {
          this.tag("SkipFBtn").patch({
            icon: Utils.asset("images/icons_player/forward-black.svg")
          });
        }
        _unfocus() {
          this.tag("SkipFBtn").patch({
            icon: Utils.asset("images/icons_player/forward-gray.svg")
          });
        }
      }];
    }
    _handleBack() {
      VideoPlayer.reload();
      setTimeout(() => {
        VideoPlayer.pause();
      }, 100);
      VideoPlayer.hide();
      Router.back();
    }
    pageTransition() {
      return "up";
    }
    _onUrlParams(args) {
      this.assetID = args.assetId;
    }
  }
  _defineProperty(Player, "assetID", void 0);

  class Boot extends t.Component {
    static _template() {
      return {
        rect: true,
        w: 1920,
        h: 1080,
        color: 0xFFFF6B00,
        Header: {
          mount: 0.5,
          x: 960,
          y: 540,
          text: {
            text: 'Boot Page',
            fontFace: "Bold",
            fontSize: 128
          }
        },
        Arrows: {
          Enter: {
            mountX: 0.5,
            x: 960,
            y: 980,
            text: {
              text: "press [enter] to resume to link / deeplink",
              fontFace: "Regular"
            }
          }
        }
      };
    }
    _handleEnter() {
      Router.resume();
    }
  }

  class Splash extends t.Component {
    static _template() {
      return {
        // rect: true, w: 1920, h: 1080,
        // color: 0xFF000000,
        Background: {
          w: 1920,
          h: 1080,
          color: 0xff43c48b,
          src: Utils.asset('images/background.png')
        },
        Logo: {
          mount: 0.5,
          x: 960,
          y: 500,
          w: 457,
          h: 142,
          src: Utils.asset("images/logo-green.png")
          // text:{
          //     text:'Boot Page', fontFace: "Bold", fontSize: 128
          // }
        },
        // Title: {
        //     mount: 0.5, x: 960, y: 640,
        //     text: {
        //         text: "OTT O-RAMA DEMO",
        //         fontFace: "Bold",
        //         fontSize: 64
        //     }
        // },
        Arrows: {
          Enter: {
            mountX: 0.5,
            x: 960,
            y: 980,
            text: {
              text: "Loading",
              fontFace: "Regular"
            }
          }
        }
      };
    }
    _init() {
      this.tag('Background').animation({
        duration: 15,
        repeat: -1,
        actions: [{
          t: '',
          p: 'color',
          v: {
            0: {
              v: 0xff43c48b
            },
            0.5: {
              v: 0xff0f6d4b
            },
            0.8: {
              v: 0xff43c48b
            }
          }
        }]
      }).start();
      this.tag("Logo").animation({
        duration: 5,
        repeat: -1,
        actions: [{
          t: "",
          p: "scale",
          v: {
            0: {
              v: 1
            },
            0.5: {
              v: 0.8
            },
            0.8: {
              v: 1
            }
          }
        }]
      }).start();
      setTimeout(() => {
        Router.navigate("home", false);
      }, 1000);
    }
    _handleEnter() {
      Router.resume();
    }
  }

  var routes = {
    root: '$',
    routes: [{
      path: '$',
      component: Splash
    }, {
      path: 'home',
      component: Home
    }, {
      path: 'movie/details/:assetId',
      component: Details
    }, {
      path: 'movie/details/play/:assetId',
      component: Player
    }]
  };

  // first thing is we import the Router from the SDK
  class App extends Router.App {
    static getFonts() {
      return [{
        family: 'Regular',
        url: Utils.asset('fonts/Arial.ttf')
      }, {
        family: 'Bold',
        url: Utils.asset('fonts/Arial-Bold.ttf')
      }];
    }
    _setup() {
      Router.startRouter(routes, this);
    }
    static _template() {
      return {
        ...super._template(),
        Widgets: {
          Menu: {
            type: MenuComponent
          }
        }
      };
    }
    _handleAppClose() {
      this.application.closeApp();
    }
  }

  function index () {
    return Launch(App, ...arguments);
  }

  return index;

})();
//# sourceMappingURL=appBundle.js.map
