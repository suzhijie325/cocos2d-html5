/****************************************************************************
 Copyright (c) 2010-2012 cocos2d-x.org
 Copyright (c) 2008-2010 Ricardo Quesada
 Copyright (c) 2011      Zynga Inc.

 http://www.cocos2d-x.org

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 ****************************************************************************/

/**
 * PI is the ratio of a circle's circumference to its diameter.
 * @constant
 * @type Number
 */
cc.PI = Math.PI;

/**
 * @constant
 * @type Number
 */
cc.RAD = cc.PI / 180;

/**
 * @constant
 * @type Number
 */
cc.DEG = 180 / cc.PI;

/**
 * <p>
 * simple macro that swaps 2 variables<br/>
 *  modified from c++ macro, you need to pass in the x and y variables names in string, <br/>
 *  and then a reference to the whole object as third variable
 * </p>
 * @param x
 * @param y
 * @param ref
 * @function
 * @deprecated
 */
cc.SWAP = function (x, y, ref) {
    if ((typeof ref) == 'object' && (typeof ref.x) != 'undefined' && (typeof ref.y) != 'undefined') {
        var tmp = ref[x];
        ref[x] = ref[y];
        ref[y] = tmp;
    } else {
        cc.Assert(false, "CC_SWAP is being modified from original macro, please check usage");
    }
};

/**
 * returns a random float between -1 and 1
 * @return {Number}
 * @function
 */
cc.RANDOM_MINUS1_1 = function () {
    return (Math.random() - 0.5) * 2;
};

/**
 * returns a random float between 0 and 1
 * @return {Number}
 * @function
 */
cc.RANDOM_0_1 = function () {
    return Math.random();
};

/**
 * converts degrees to radians
 * @param {Number} angle
 * @return {Number}
 * @function
 */
cc.DEGREES_TO_RADIANS = function (angle) {
    return angle * cc.RAD;
};

/**
 * converts radians to degrees
 * @param {Number} angle
 * @return {Number}
 * @function
 */
cc.RADIANS_TO_DEGREES = function (angle) {
    return angle * cc.DEG;
};

/**
 * default gl blend src function. Compatible with premultiplied alpha images.
 * @constant
 * @type Number
 */
cc.BLEND_SRC = cc.OPTIMIZE_BLEND_FUNC_FOR_PREMULTIPLIED_ALPHA ? 1 : 0x0302;

/**
 * default gl blend dst function. Compatible with premultiplied alpha images.
 * @constant
 * @type Number
 */
cc.BLEND_DST = 0x0303;

/**
 * <p>
 *     GL states that are enabled:<br/>
 *       - GL_TEXTURE_2D<br/>
 *       - GL_VERTEX_ARRAY<br/>
 *       - GL_TEXTURE_COORD_ARRAY<br/>
 *       - GL_COLOR_ARRAY<br/>
 * </p>
 * @function
 */
cc.ENABLE_DEFAULT_GL_STATES = function () {
    //TODO OPENGL STUFF
    /*
     glEnableClientState(GL_VERTEX_ARRAY);
     glEnableClientState(GL_COLOR_ARRAY);
     glEnableClientState(GL_TEXTURE_COORD_ARRAY);
     glEnable(GL_TEXTURE_2D);*/
};

/**
 * <p>
 *   Disable default GL states:<br/>
 *     - GL_TEXTURE_2D<br/>
 *     - GL_TEXTURE_COORD_ARRAY<br/>
 *     - GL_COLOR_ARRAY<br/>
 * </p>
 * @function
 */
cc.DISABLE_DEFAULT_GL_STATES = function () {
    //TODO OPENGL
    /*
     glDisable(GL_TEXTURE_2D);
     glDisableClientState(GL_COLOR_ARRAY);
     glDisableClientState(GL_TEXTURE_COORD_ARRAY);
     glDisableClientState(GL_VERTEX_ARRAY);
     */
};

/**
 * @constant
 * @type Number
 */
cc.FLT_EPSILON = 0.0000001192092896;

/**
 * <p>
 *     On Mac it returns 1;<br/>
 *     On iPhone it returns 2 if RetinaDisplay is On. Otherwise it returns 1
 * </p>
 * @function
 */
cc.CONTENT_SCALE_FACTOR = cc.IS_RETINA_DISPLAY_SUPPORTED ? function () {
    return cc.Director.sharedDirector().getContentScaleFactor();
} : function () {
    return 1;
};

/**
 * Converts a rect in pixels to points
 * @param {cc.Rect} pixel
 * @function
 */
cc.RECT_PIXELS_TO_POINTS = cc.IS_RETINA_DISPLAY_SUPPORTED ? function (pixel) {
    return cc.RectMake(pixel.origin.x / cc.CONTENT_SCALE_FACTOR(), pixel.origin.y / cc.CONTENT_SCALE_FACTOR(),
        pixel.size.width / cc.CONTENT_SCALE_FACTOR(), pixel.size.height / cc.CONTENT_SCALE_FACTOR());
} : function (p) {
    return p;
};

/**
 * Converts a rect in points to pixels
 * @param {cc.Rect} point
 * @function
 */
cc.RECT_POINTS_TO_PIXELS = cc.IS_RETINA_DISPLAY_SUPPORTED ? function (point) {
    return cc.RectMake(point.origin.x * cc.CONTENT_SCALE_FACTOR(), point.origin.y * cc.CONTENT_SCALE_FACTOR(),
        point.size.width * cc.CONTENT_SCALE_FACTOR(), point.size.height * cc.CONTENT_SCALE_FACTOR());
} : function (p) {
    return p;
};


/**
 * Converts a rect in pixels to points
 *
 */
cc.POINT_PIXELS_TO_POINTS = cc.IS_RETINA_DISPLAY_SUPPORTED ? function (point) {
    return cc.PointMake((point).x / cc.CONTENT_SCALE_FACTOR(), (point).y / cc.CONTENT_SCALE_FACTOR())
} : function (p) {
    return p;
};

/**
 Converts a rect in points to pixels
 */
cc.POINT_POINTS_TO_PIXELS = cc.IS_RETINA_DISPLAY_SUPPORTED ? function (point) {
    cc.PointMake((point).x * cc.CONTENT_SCALE_FACTOR(), (point).y * cc.CONTENT_SCALE_FACTOR())
} : function (p) {
    return p;
};