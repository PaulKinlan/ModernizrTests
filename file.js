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
 * A suite of tests for the File API's
 */

if("Modernizr" in window) {
  Modernizr.addTest("createobjecturl", function() {
    return ("createObjectURL" in window);
  });

  Modernizr.addTest("blobbuilder", function() {
    return ("blobBuilder" in window);
  });

  Modernizr.addTest("blob", function() {
    return ("Blob" in window);
  });

  Modernizr.addTest("typedarray", function() {
    return ("Uint8Array" in window ||
             "Uint16Array" in window);
  });

  Modernizr.addTest("file", function () {
    return ("File" in window);
  });

  Modernizr.addTest("filereader", function() {
    return ("FileReader" in window);
  });

  Modernizr.addTest("filewriter", function () {
    return ("FileWriter" in window);
  });

  Modernizr.addTest("filesaver", function() {
    return ("FileSaver" in window);
  });

  Modernizr.addTest("filelist", function() {
    return ("FileList" in window);
  });

  Modernizr.addTest("filesystem", function() {
    return ("requestFileSystem" in window);
  });
}

