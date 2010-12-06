/*
 * Modernizr Tests 
 * http://www.modernizr.com
 *
 * Modernizr Developed by: 
 * - Faruk Ates  http://farukat.es/
 * - Paul Irish  http://paulirish.com/
 *
 * Modernizr Tests Developed by:
 * - Paul Kinlan http://paul.kinlan.me
 *
 * Copyright (c) 2010
 * Dual-licensed under the BSD or MIT licenses.
 * http://www.modernizr.com/license/
 */

/*
 * A suite of tests for DOM API's
 */

if("Modernizr" in window) {
  Modernizr.addTest("classlist", function() {
    return ("classList" in window && "DOMTokenList" in window);
  });
}

