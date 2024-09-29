import {
  AbstractRenderer,
  ApplicationInitHook,
  Filter
} from "./chunk-VJASXKLJ.js";
import {
  AbstractBitmapFont,
  BitmapFontManager,
  Cache,
  CanvasTextMetrics,
  Graphics,
  GraphicsContext,
  GraphicsPath,
  HTMLTextStyle,
  ImageSource,
  LoaderParserPriority,
  MeshGeometry,
  NineSliceGeometry,
  PlaneGeometry,
  Resolver,
  TextStyle,
  VideoSource,
  addMaskBounds,
  addMaskLocalBounds,
  buildCircle,
  buildPolygon,
  buildRectangle,
  buildSimpleUvs,
  buildTriangle,
  buildUvs,
  convertToList,
  copySearchParams,
  detectVideoAlphaMode,
  isSingleItem,
  measureHtmlText,
  path,
  squaredDistanceToLineSegment,
  transformVertices
} from "./chunk-P3YV5OXK.js";
import {
  Bounds,
  Buffer,
  BufferUsage,
  Color,
  Container,
  DOMAdapter,
  ExtensionType,
  Geometry,
  GlProgram,
  GpuProgram,
  Matrix,
  ObservablePoint,
  Point,
  Rectangle,
  RendererType,
  Sprite,
  State,
  Texture,
  TexturePool,
  TextureSource,
  Ticker,
  UPDATE_PRIORITY,
  UniformGroup,
  ViewContainer,
  definedProps,
  deprecation,
  extensions,
  getGlobalBounds,
  groupD8,
  require_earcut,
  v8_0_0,
  warn
} from "./chunk-IMN33NWI.js";
import {
  __commonJS,
  __toESM
} from "./chunk-5WRI5ZAA.js";

// node_modules/@xmldom/xmldom/lib/conventions.js
var require_conventions = __commonJS({
  "node_modules/@xmldom/xmldom/lib/conventions.js"(exports) {
    "use strict";
    function find(list, predicate, ac) {
      if (ac === void 0) {
        ac = Array.prototype;
      }
      if (list && typeof ac.find === "function") {
        return ac.find.call(list, predicate);
      }
      for (var i = 0; i < list.length; i++) {
        if (Object.prototype.hasOwnProperty.call(list, i)) {
          var item = list[i];
          if (predicate.call(void 0, item, i, list)) {
            return item;
          }
        }
      }
    }
    function freeze(object, oc) {
      if (oc === void 0) {
        oc = Object;
      }
      return oc && typeof oc.freeze === "function" ? oc.freeze(object) : object;
    }
    function assign(target, source7) {
      if (target === null || typeof target !== "object") {
        throw new TypeError("target is not an object");
      }
      for (var key in source7) {
        if (Object.prototype.hasOwnProperty.call(source7, key)) {
          target[key] = source7[key];
        }
      }
      return target;
    }
    var MIME_TYPE = freeze({
      /**
       * `text/html`, the only mime type that triggers treating an XML document as HTML.
       *
       * @see DOMParser.SupportedType.isHTML
       * @see https://www.iana.org/assignments/media-types/text/html IANA MimeType registration
       * @see https://en.wikipedia.org/wiki/HTML Wikipedia
       * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMParser/parseFromString MDN
       * @see https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#dom-domparser-parsefromstring WHATWG HTML Spec
       */
      HTML: "text/html",
      /**
       * Helper method to check a mime type if it indicates an HTML document
       *
       * @param {string} [value]
       * @returns {boolean}
       *
       * @see https://www.iana.org/assignments/media-types/text/html IANA MimeType registration
       * @see https://en.wikipedia.org/wiki/HTML Wikipedia
       * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMParser/parseFromString MDN
       * @see https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#dom-domparser-parsefromstring 	 */
      isHTML: function(value) {
        return value === MIME_TYPE.HTML;
      },
      /**
       * `application/xml`, the standard mime type for XML documents.
       *
       * @see https://www.iana.org/assignments/media-types/application/xml IANA MimeType registration
       * @see https://tools.ietf.org/html/rfc7303#section-9.1 RFC 7303
       * @see https://en.wikipedia.org/wiki/XML_and_MIME Wikipedia
       */
      XML_APPLICATION: "application/xml",
      /**
       * `text/html`, an alias for `application/xml`.
       *
       * @see https://tools.ietf.org/html/rfc7303#section-9.2 RFC 7303
       * @see https://www.iana.org/assignments/media-types/text/xml IANA MimeType registration
       * @see https://en.wikipedia.org/wiki/XML_and_MIME Wikipedia
       */
      XML_TEXT: "text/xml",
      /**
       * `application/xhtml+xml`, indicates an XML document that has the default HTML namespace,
       * but is parsed as an XML document.
       *
       * @see https://www.iana.org/assignments/media-types/application/xhtml+xml IANA MimeType registration
       * @see https://dom.spec.whatwg.org/#dom-domimplementation-createdocument WHATWG DOM Spec
       * @see https://en.wikipedia.org/wiki/XHTML Wikipedia
       */
      XML_XHTML_APPLICATION: "application/xhtml+xml",
      /**
       * `image/svg+xml`,
       *
       * @see https://www.iana.org/assignments/media-types/image/svg+xml IANA MimeType registration
       * @see https://www.w3.org/TR/SVG11/ W3C SVG 1.1
       * @see https://en.wikipedia.org/wiki/Scalable_Vector_Graphics Wikipedia
       */
      XML_SVG_IMAGE: "image/svg+xml"
    });
    var NAMESPACE = freeze({
      /**
       * The XHTML namespace.
       *
       * @see http://www.w3.org/1999/xhtml
       */
      HTML: "http://www.w3.org/1999/xhtml",
      /**
       * Checks if `uri` equals `NAMESPACE.HTML`.
       *
       * @param {string} [uri]
       *
       * @see NAMESPACE.HTML
       */
      isHTML: function(uri) {
        return uri === NAMESPACE.HTML;
      },
      /**
       * The SVG namespace.
       *
       * @see http://www.w3.org/2000/svg
       */
      SVG: "http://www.w3.org/2000/svg",
      /**
       * The `xml:` namespace.
       *
       * @see http://www.w3.org/XML/1998/namespace
       */
      XML: "http://www.w3.org/XML/1998/namespace",
      /**
       * The `xmlns:` namespace
       *
       * @see https://www.w3.org/2000/xmlns/
       */
      XMLNS: "http://www.w3.org/2000/xmlns/"
    });
    exports.assign = assign;
    exports.find = find;
    exports.freeze = freeze;
    exports.MIME_TYPE = MIME_TYPE;
    exports.NAMESPACE = NAMESPACE;
  }
});

// node_modules/@xmldom/xmldom/lib/dom.js
var require_dom = __commonJS({
  "node_modules/@xmldom/xmldom/lib/dom.js"(exports) {
    var conventions = require_conventions();
    var find = conventions.find;
    var NAMESPACE = conventions.NAMESPACE;
    function notEmptyString(input) {
      return input !== "";
    }
    function splitOnASCIIWhitespace(input) {
      return input ? input.split(/[\t\n\f\r ]+/).filter(notEmptyString) : [];
    }
    function orderedSetReducer(current, element) {
      if (!current.hasOwnProperty(element)) {
        current[element] = true;
      }
      return current;
    }
    function toOrderedSet(input) {
      if (!input) return [];
      var list = splitOnASCIIWhitespace(input);
      return Object.keys(list.reduce(orderedSetReducer, {}));
    }
    function arrayIncludes(list) {
      return function(element) {
        return list && list.indexOf(element) !== -1;
      };
    }
    function copy(src, dest) {
      for (var p in src) {
        if (Object.prototype.hasOwnProperty.call(src, p)) {
          dest[p] = src[p];
        }
      }
    }
    function _extends(Class, Super) {
      var pt = Class.prototype;
      if (!(pt instanceof Super)) {
        let t2 = function() {
        };
        var t = t2;
        ;
        t2.prototype = Super.prototype;
        t2 = new t2();
        copy(pt, t2);
        Class.prototype = pt = t2;
      }
      if (pt.constructor != Class) {
        if (typeof Class != "function") {
          console.error("unknown Class:" + Class);
        }
        pt.constructor = Class;
      }
    }
    var NodeType = {};
    var ELEMENT_NODE = NodeType.ELEMENT_NODE = 1;
    var ATTRIBUTE_NODE = NodeType.ATTRIBUTE_NODE = 2;
    var TEXT_NODE = NodeType.TEXT_NODE = 3;
    var CDATA_SECTION_NODE = NodeType.CDATA_SECTION_NODE = 4;
    var ENTITY_REFERENCE_NODE = NodeType.ENTITY_REFERENCE_NODE = 5;
    var ENTITY_NODE = NodeType.ENTITY_NODE = 6;
    var PROCESSING_INSTRUCTION_NODE = NodeType.PROCESSING_INSTRUCTION_NODE = 7;
    var COMMENT_NODE = NodeType.COMMENT_NODE = 8;
    var DOCUMENT_NODE = NodeType.DOCUMENT_NODE = 9;
    var DOCUMENT_TYPE_NODE = NodeType.DOCUMENT_TYPE_NODE = 10;
    var DOCUMENT_FRAGMENT_NODE = NodeType.DOCUMENT_FRAGMENT_NODE = 11;
    var NOTATION_NODE = NodeType.NOTATION_NODE = 12;
    var ExceptionCode = {};
    var ExceptionMessage = {};
    var INDEX_SIZE_ERR = ExceptionCode.INDEX_SIZE_ERR = (ExceptionMessage[1] = "Index size error", 1);
    var DOMSTRING_SIZE_ERR = ExceptionCode.DOMSTRING_SIZE_ERR = (ExceptionMessage[2] = "DOMString size error", 2);
    var HIERARCHY_REQUEST_ERR = ExceptionCode.HIERARCHY_REQUEST_ERR = (ExceptionMessage[3] = "Hierarchy request error", 3);
    var WRONG_DOCUMENT_ERR = ExceptionCode.WRONG_DOCUMENT_ERR = (ExceptionMessage[4] = "Wrong document", 4);
    var INVALID_CHARACTER_ERR = ExceptionCode.INVALID_CHARACTER_ERR = (ExceptionMessage[5] = "Invalid character", 5);
    var NO_DATA_ALLOWED_ERR = ExceptionCode.NO_DATA_ALLOWED_ERR = (ExceptionMessage[6] = "No data allowed", 6);
    var NO_MODIFICATION_ALLOWED_ERR = ExceptionCode.NO_MODIFICATION_ALLOWED_ERR = (ExceptionMessage[7] = "No modification allowed", 7);
    var NOT_FOUND_ERR = ExceptionCode.NOT_FOUND_ERR = (ExceptionMessage[8] = "Not found", 8);
    var NOT_SUPPORTED_ERR = ExceptionCode.NOT_SUPPORTED_ERR = (ExceptionMessage[9] = "Not supported", 9);
    var INUSE_ATTRIBUTE_ERR = ExceptionCode.INUSE_ATTRIBUTE_ERR = (ExceptionMessage[10] = "Attribute in use", 10);
    var INVALID_STATE_ERR = ExceptionCode.INVALID_STATE_ERR = (ExceptionMessage[11] = "Invalid state", 11);
    var SYNTAX_ERR = ExceptionCode.SYNTAX_ERR = (ExceptionMessage[12] = "Syntax error", 12);
    var INVALID_MODIFICATION_ERR = ExceptionCode.INVALID_MODIFICATION_ERR = (ExceptionMessage[13] = "Invalid modification", 13);
    var NAMESPACE_ERR = ExceptionCode.NAMESPACE_ERR = (ExceptionMessage[14] = "Invalid namespace", 14);
    var INVALID_ACCESS_ERR = ExceptionCode.INVALID_ACCESS_ERR = (ExceptionMessage[15] = "Invalid access", 15);
    function DOMException(code, message) {
      if (message instanceof Error) {
        var error = message;
      } else {
        error = this;
        Error.call(this, ExceptionMessage[code]);
        this.message = ExceptionMessage[code];
        if (Error.captureStackTrace) Error.captureStackTrace(this, DOMException);
      }
      error.code = code;
      if (message) this.message = this.message + ": " + message;
      return error;
    }
    DOMException.prototype = Error.prototype;
    copy(ExceptionCode, DOMException);
    function NodeList() {
    }
    NodeList.prototype = {
      /**
       * The number of nodes in the list. The range of valid child node indices is 0 to length-1 inclusive.
       * @standard level1
       */
      length: 0,
      /**
       * Returns the indexth item in the collection. If index is greater than or equal to the number of nodes in the list, this returns null.
       * @standard level1
       * @param index  unsigned long
       *   Index into the collection.
       * @return Node
       * 	The node at the indexth position in the NodeList, or null if that is not a valid index.
       */
      item: function(index) {
        return index >= 0 && index < this.length ? this[index] : null;
      },
      toString: function(isHTML, nodeFilter) {
        for (var buf = [], i = 0; i < this.length; i++) {
          serializeToString(this[i], buf, isHTML, nodeFilter);
        }
        return buf.join("");
      },
      /**
       * @private
       * @param {function (Node):boolean} predicate
       * @returns {Node[]}
       */
      filter: function(predicate) {
        return Array.prototype.filter.call(this, predicate);
      },
      /**
       * @private
       * @param {Node} item
       * @returns {number}
       */
      indexOf: function(item) {
        return Array.prototype.indexOf.call(this, item);
      }
    };
    function LiveNodeList(node, refresh) {
      this._node = node;
      this._refresh = refresh;
      _updateLiveList(this);
    }
    function _updateLiveList(list) {
      var inc = list._node._inc || list._node.ownerDocument._inc;
      if (list._inc !== inc) {
        var ls = list._refresh(list._node);
        __set__(list, "length", ls.length);
        if (!list.$$length || ls.length < list.$$length) {
          for (var i = ls.length; i in list; i++) {
            if (Object.prototype.hasOwnProperty.call(list, i)) {
              delete list[i];
            }
          }
        }
        copy(ls, list);
        list._inc = inc;
      }
    }
    LiveNodeList.prototype.item = function(i) {
      _updateLiveList(this);
      return this[i] || null;
    };
    _extends(LiveNodeList, NodeList);
    function NamedNodeMap() {
    }
    function _findNodeIndex(list, node) {
      var i = list.length;
      while (i--) {
        if (list[i] === node) {
          return i;
        }
      }
    }
    function _addNamedNode(el, list, newAttr, oldAttr) {
      if (oldAttr) {
        list[_findNodeIndex(list, oldAttr)] = newAttr;
      } else {
        list[list.length++] = newAttr;
      }
      if (el) {
        newAttr.ownerElement = el;
        var doc = el.ownerDocument;
        if (doc) {
          oldAttr && _onRemoveAttribute(doc, el, oldAttr);
          _onAddAttribute(doc, el, newAttr);
        }
      }
    }
    function _removeNamedNode(el, list, attr) {
      var i = _findNodeIndex(list, attr);
      if (i >= 0) {
        var lastIndex = list.length - 1;
        while (i < lastIndex) {
          list[i] = list[++i];
        }
        list.length = lastIndex;
        if (el) {
          var doc = el.ownerDocument;
          if (doc) {
            _onRemoveAttribute(doc, el, attr);
            attr.ownerElement = null;
          }
        }
      } else {
        throw new DOMException(NOT_FOUND_ERR, new Error(el.tagName + "@" + attr));
      }
    }
    NamedNodeMap.prototype = {
      length: 0,
      item: NodeList.prototype.item,
      getNamedItem: function(key) {
        var i = this.length;
        while (i--) {
          var attr = this[i];
          if (attr.nodeName == key) {
            return attr;
          }
        }
      },
      setNamedItem: function(attr) {
        var el = attr.ownerElement;
        if (el && el != this._ownerElement) {
          throw new DOMException(INUSE_ATTRIBUTE_ERR);
        }
        var oldAttr = this.getNamedItem(attr.nodeName);
        _addNamedNode(this._ownerElement, this, attr, oldAttr);
        return oldAttr;
      },
      /* returns Node */
      setNamedItemNS: function(attr) {
        var el = attr.ownerElement, oldAttr;
        if (el && el != this._ownerElement) {
          throw new DOMException(INUSE_ATTRIBUTE_ERR);
        }
        oldAttr = this.getNamedItemNS(attr.namespaceURI, attr.localName);
        _addNamedNode(this._ownerElement, this, attr, oldAttr);
        return oldAttr;
      },
      /* returns Node */
      removeNamedItem: function(key) {
        var attr = this.getNamedItem(key);
        _removeNamedNode(this._ownerElement, this, attr);
        return attr;
      },
      // raises: NOT_FOUND_ERR,NO_MODIFICATION_ALLOWED_ERR
      //for level2
      removeNamedItemNS: function(namespaceURI, localName) {
        var attr = this.getNamedItemNS(namespaceURI, localName);
        _removeNamedNode(this._ownerElement, this, attr);
        return attr;
      },
      getNamedItemNS: function(namespaceURI, localName) {
        var i = this.length;
        while (i--) {
          var node = this[i];
          if (node.localName == localName && node.namespaceURI == namespaceURI) {
            return node;
          }
        }
        return null;
      }
    };
    function DOMImplementation() {
    }
    DOMImplementation.prototype = {
      /**
       * The DOMImplementation.hasFeature() method returns a Boolean flag indicating if a given feature is supported.
       * The different implementations fairly diverged in what kind of features were reported.
       * The latest version of the spec settled to force this method to always return true, where the functionality was accurate and in use.
       *
       * @deprecated It is deprecated and modern browsers return true in all cases.
       *
       * @param {string} feature
       * @param {string} [version]
       * @returns {boolean} always true
       *
       * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMImplementation/hasFeature MDN
       * @see https://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#ID-5CED94D7 DOM Level 1 Core
       * @see https://dom.spec.whatwg.org/#dom-domimplementation-hasfeature DOM Living Standard
       */
      hasFeature: function(feature, version) {
        return true;
      },
      /**
       * Creates an XML Document object of the specified type with its document element.
       *
       * __It behaves slightly different from the description in the living standard__:
       * - There is no interface/class `XMLDocument`, it returns a `Document` instance.
       * - `contentType`, `encoding`, `mode`, `origin`, `url` fields are currently not declared.
       * - this implementation is not validating names or qualified names
       *   (when parsing XML strings, the SAX parser takes care of that)
       *
       * @param {string|null} namespaceURI
       * @param {string} qualifiedName
       * @param {DocumentType=null} doctype
       * @returns {Document}
       *
       * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMImplementation/createDocument MDN
       * @see https://www.w3.org/TR/DOM-Level-2-Core/core.html#Level-2-Core-DOM-createDocument DOM Level 2 Core (initial)
       * @see https://dom.spec.whatwg.org/#dom-domimplementation-createdocument  DOM Level 2 Core
       *
       * @see https://dom.spec.whatwg.org/#validate-and-extract DOM: Validate and extract
       * @see https://www.w3.org/TR/xml/#NT-NameStartChar XML Spec: Names
       * @see https://www.w3.org/TR/xml-names/#ns-qualnames XML Namespaces: Qualified names
       */
      createDocument: function(namespaceURI, qualifiedName, doctype) {
        var doc = new Document();
        doc.implementation = this;
        doc.childNodes = new NodeList();
        doc.doctype = doctype || null;
        if (doctype) {
          doc.appendChild(doctype);
        }
        if (qualifiedName) {
          var root = doc.createElementNS(namespaceURI, qualifiedName);
          doc.appendChild(root);
        }
        return doc;
      },
      /**
       * Returns a doctype, with the given `qualifiedName`, `publicId`, and `systemId`.
       *
       * __This behavior is slightly different from the in the specs__:
       * - this implementation is not validating names or qualified names
       *   (when parsing XML strings, the SAX parser takes care of that)
       *
       * @param {string} qualifiedName
       * @param {string} [publicId]
       * @param {string} [systemId]
       * @returns {DocumentType} which can either be used with `DOMImplementation.createDocument` upon document creation
       * 				  or can be put into the document via methods like `Node.insertBefore()` or `Node.replaceChild()`
       *
       * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMImplementation/createDocumentType MDN
       * @see https://www.w3.org/TR/DOM-Level-2-Core/core.html#Level-2-Core-DOM-createDocType DOM Level 2 Core
       * @see https://dom.spec.whatwg.org/#dom-domimplementation-createdocumenttype DOM Living Standard
       *
       * @see https://dom.spec.whatwg.org/#validate-and-extract DOM: Validate and extract
       * @see https://www.w3.org/TR/xml/#NT-NameStartChar XML Spec: Names
       * @see https://www.w3.org/TR/xml-names/#ns-qualnames XML Namespaces: Qualified names
       */
      createDocumentType: function(qualifiedName, publicId, systemId) {
        var node = new DocumentType();
        node.name = qualifiedName;
        node.nodeName = qualifiedName;
        node.publicId = publicId || "";
        node.systemId = systemId || "";
        return node;
      }
    };
    function Node() {
    }
    Node.prototype = {
      firstChild: null,
      lastChild: null,
      previousSibling: null,
      nextSibling: null,
      attributes: null,
      parentNode: null,
      childNodes: null,
      ownerDocument: null,
      nodeValue: null,
      namespaceURI: null,
      prefix: null,
      localName: null,
      // Modified in DOM Level 2:
      insertBefore: function(newChild, refChild) {
        return _insertBefore(this, newChild, refChild);
      },
      replaceChild: function(newChild, oldChild) {
        _insertBefore(this, newChild, oldChild, assertPreReplacementValidityInDocument);
        if (oldChild) {
          this.removeChild(oldChild);
        }
      },
      removeChild: function(oldChild) {
        return _removeChild(this, oldChild);
      },
      appendChild: function(newChild) {
        return this.insertBefore(newChild, null);
      },
      hasChildNodes: function() {
        return this.firstChild != null;
      },
      cloneNode: function(deep) {
        return cloneNode(this.ownerDocument || this, this, deep);
      },
      // Modified in DOM Level 2:
      normalize: function() {
        var child = this.firstChild;
        while (child) {
          var next = child.nextSibling;
          if (next && next.nodeType == TEXT_NODE && child.nodeType == TEXT_NODE) {
            this.removeChild(next);
            child.appendData(next.data);
          } else {
            child.normalize();
            child = next;
          }
        }
      },
      // Introduced in DOM Level 2:
      isSupported: function(feature, version) {
        return this.ownerDocument.implementation.hasFeature(feature, version);
      },
      // Introduced in DOM Level 2:
      hasAttributes: function() {
        return this.attributes.length > 0;
      },
      /**
       * Look up the prefix associated to the given namespace URI, starting from this node.
       * **The default namespace declarations are ignored by this method.**
       * See Namespace Prefix Lookup for details on the algorithm used by this method.
       *
       * _Note: The implementation seems to be incomplete when compared to the algorithm described in the specs._
       *
       * @param {string | null} namespaceURI
       * @returns {string | null}
       * @see https://www.w3.org/TR/DOM-Level-3-Core/core.html#Node3-lookupNamespacePrefix
       * @see https://www.w3.org/TR/DOM-Level-3-Core/namespaces-algorithms.html#lookupNamespacePrefixAlgo
       * @see https://dom.spec.whatwg.org/#dom-node-lookupprefix
       * @see https://github.com/xmldom/xmldom/issues/322
       */
      lookupPrefix: function(namespaceURI) {
        var el = this;
        while (el) {
          var map = el._nsMap;
          if (map) {
            for (var n in map) {
              if (Object.prototype.hasOwnProperty.call(map, n) && map[n] === namespaceURI) {
                return n;
              }
            }
          }
          el = el.nodeType == ATTRIBUTE_NODE ? el.ownerDocument : el.parentNode;
        }
        return null;
      },
      // Introduced in DOM Level 3:
      lookupNamespaceURI: function(prefix) {
        var el = this;
        while (el) {
          var map = el._nsMap;
          if (map) {
            if (Object.prototype.hasOwnProperty.call(map, prefix)) {
              return map[prefix];
            }
          }
          el = el.nodeType == ATTRIBUTE_NODE ? el.ownerDocument : el.parentNode;
        }
        return null;
      },
      // Introduced in DOM Level 3:
      isDefaultNamespace: function(namespaceURI) {
        var prefix = this.lookupPrefix(namespaceURI);
        return prefix == null;
      }
    };
    function _xmlEncoder(c) {
      return c == "<" && "&lt;" || c == ">" && "&gt;" || c == "&" && "&amp;" || c == '"' && "&quot;" || "&#" + c.charCodeAt() + ";";
    }
    copy(NodeType, Node);
    copy(NodeType, Node.prototype);
    function _visitNode(node, callback) {
      if (callback(node)) {
        return true;
      }
      if (node = node.firstChild) {
        do {
          if (_visitNode(node, callback)) {
            return true;
          }
        } while (node = node.nextSibling);
      }
    }
    function Document() {
      this.ownerDocument = this;
    }
    function _onAddAttribute(doc, el, newAttr) {
      doc && doc._inc++;
      var ns = newAttr.namespaceURI;
      if (ns === NAMESPACE.XMLNS) {
        el._nsMap[newAttr.prefix ? newAttr.localName : ""] = newAttr.value;
      }
    }
    function _onRemoveAttribute(doc, el, newAttr, remove) {
      doc && doc._inc++;
      var ns = newAttr.namespaceURI;
      if (ns === NAMESPACE.XMLNS) {
        delete el._nsMap[newAttr.prefix ? newAttr.localName : ""];
      }
    }
    function _onUpdateChild(doc, el, newChild) {
      if (doc && doc._inc) {
        doc._inc++;
        var cs = el.childNodes;
        if (newChild) {
          cs[cs.length++] = newChild;
        } else {
          var child = el.firstChild;
          var i = 0;
          while (child) {
            cs[i++] = child;
            child = child.nextSibling;
          }
          cs.length = i;
          delete cs[cs.length];
        }
      }
    }
    function _removeChild(parentNode, child) {
      var previous = child.previousSibling;
      var next = child.nextSibling;
      if (previous) {
        previous.nextSibling = next;
      } else {
        parentNode.firstChild = next;
      }
      if (next) {
        next.previousSibling = previous;
      } else {
        parentNode.lastChild = previous;
      }
      child.parentNode = null;
      child.previousSibling = null;
      child.nextSibling = null;
      _onUpdateChild(parentNode.ownerDocument, parentNode);
      return child;
    }
    function hasValidParentNodeType(node) {
      return node && (node.nodeType === Node.DOCUMENT_NODE || node.nodeType === Node.DOCUMENT_FRAGMENT_NODE || node.nodeType === Node.ELEMENT_NODE);
    }
    function hasInsertableNodeType(node) {
      return node && (isElementNode(node) || isTextNode(node) || isDocTypeNode(node) || node.nodeType === Node.DOCUMENT_FRAGMENT_NODE || node.nodeType === Node.COMMENT_NODE || node.nodeType === Node.PROCESSING_INSTRUCTION_NODE);
    }
    function isDocTypeNode(node) {
      return node && node.nodeType === Node.DOCUMENT_TYPE_NODE;
    }
    function isElementNode(node) {
      return node && node.nodeType === Node.ELEMENT_NODE;
    }
    function isTextNode(node) {
      return node && node.nodeType === Node.TEXT_NODE;
    }
    function isElementInsertionPossible(doc, child) {
      var parentChildNodes = doc.childNodes || [];
      if (find(parentChildNodes, isElementNode) || isDocTypeNode(child)) {
        return false;
      }
      var docTypeNode = find(parentChildNodes, isDocTypeNode);
      return !(child && docTypeNode && parentChildNodes.indexOf(docTypeNode) > parentChildNodes.indexOf(child));
    }
    function isElementReplacementPossible(doc, child) {
      var parentChildNodes = doc.childNodes || [];
      function hasElementChildThatIsNotChild(node) {
        return isElementNode(node) && node !== child;
      }
      if (find(parentChildNodes, hasElementChildThatIsNotChild)) {
        return false;
      }
      var docTypeNode = find(parentChildNodes, isDocTypeNode);
      return !(child && docTypeNode && parentChildNodes.indexOf(docTypeNode) > parentChildNodes.indexOf(child));
    }
    function assertPreInsertionValidity1to5(parent, node, child) {
      if (!hasValidParentNodeType(parent)) {
        throw new DOMException(HIERARCHY_REQUEST_ERR, "Unexpected parent node type " + parent.nodeType);
      }
      if (child && child.parentNode !== parent) {
        throw new DOMException(NOT_FOUND_ERR, "child not in parent");
      }
      if (
        // 4. If `node` is not a DocumentFragment, DocumentType, Element, or CharacterData node, then throw a "HierarchyRequestError" DOMException.
        !hasInsertableNodeType(node) || // 5. If either `node` is a Text node and `parent` is a document,
        // the sax parser currently adds top level text nodes, this will be fixed in 0.9.0
        // || (node.nodeType === Node.TEXT_NODE && parent.nodeType === Node.DOCUMENT_NODE)
        // or `node` is a doctype and `parent` is not a document, then throw a "HierarchyRequestError" DOMException.
        isDocTypeNode(node) && parent.nodeType !== Node.DOCUMENT_NODE
      ) {
        throw new DOMException(
          HIERARCHY_REQUEST_ERR,
          "Unexpected node type " + node.nodeType + " for parent node type " + parent.nodeType
        );
      }
    }
    function assertPreInsertionValidityInDocument(parent, node, child) {
      var parentChildNodes = parent.childNodes || [];
      var nodeChildNodes = node.childNodes || [];
      if (node.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
        var nodeChildElements = nodeChildNodes.filter(isElementNode);
        if (nodeChildElements.length > 1 || find(nodeChildNodes, isTextNode)) {
          throw new DOMException(HIERARCHY_REQUEST_ERR, "More than one element or text in fragment");
        }
        if (nodeChildElements.length === 1 && !isElementInsertionPossible(parent, child)) {
          throw new DOMException(HIERARCHY_REQUEST_ERR, "Element in fragment can not be inserted before doctype");
        }
      }
      if (isElementNode(node)) {
        if (!isElementInsertionPossible(parent, child)) {
          throw new DOMException(HIERARCHY_REQUEST_ERR, "Only one element can be added and only after doctype");
        }
      }
      if (isDocTypeNode(node)) {
        if (find(parentChildNodes, isDocTypeNode)) {
          throw new DOMException(HIERARCHY_REQUEST_ERR, "Only one doctype is allowed");
        }
        var parentElementChild = find(parentChildNodes, isElementNode);
        if (child && parentChildNodes.indexOf(parentElementChild) < parentChildNodes.indexOf(child)) {
          throw new DOMException(HIERARCHY_REQUEST_ERR, "Doctype can only be inserted before an element");
        }
        if (!child && parentElementChild) {
          throw new DOMException(HIERARCHY_REQUEST_ERR, "Doctype can not be appended since element is present");
        }
      }
    }
    function assertPreReplacementValidityInDocument(parent, node, child) {
      var parentChildNodes = parent.childNodes || [];
      var nodeChildNodes = node.childNodes || [];
      if (node.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
        var nodeChildElements = nodeChildNodes.filter(isElementNode);
        if (nodeChildElements.length > 1 || find(nodeChildNodes, isTextNode)) {
          throw new DOMException(HIERARCHY_REQUEST_ERR, "More than one element or text in fragment");
        }
        if (nodeChildElements.length === 1 && !isElementReplacementPossible(parent, child)) {
          throw new DOMException(HIERARCHY_REQUEST_ERR, "Element in fragment can not be inserted before doctype");
        }
      }
      if (isElementNode(node)) {
        if (!isElementReplacementPossible(parent, child)) {
          throw new DOMException(HIERARCHY_REQUEST_ERR, "Only one element can be added and only after doctype");
        }
      }
      if (isDocTypeNode(node)) {
        let hasDoctypeChildThatIsNotChild2 = function(node2) {
          return isDocTypeNode(node2) && node2 !== child;
        };
        var hasDoctypeChildThatIsNotChild = hasDoctypeChildThatIsNotChild2;
        if (find(parentChildNodes, hasDoctypeChildThatIsNotChild2)) {
          throw new DOMException(HIERARCHY_REQUEST_ERR, "Only one doctype is allowed");
        }
        var parentElementChild = find(parentChildNodes, isElementNode);
        if (child && parentChildNodes.indexOf(parentElementChild) < parentChildNodes.indexOf(child)) {
          throw new DOMException(HIERARCHY_REQUEST_ERR, "Doctype can only be inserted before an element");
        }
      }
    }
    function _insertBefore(parent, node, child, _inDocumentAssertion) {
      assertPreInsertionValidity1to5(parent, node, child);
      if (parent.nodeType === Node.DOCUMENT_NODE) {
        (_inDocumentAssertion || assertPreInsertionValidityInDocument)(parent, node, child);
      }
      var cp = node.parentNode;
      if (cp) {
        cp.removeChild(node);
      }
      if (node.nodeType === DOCUMENT_FRAGMENT_NODE) {
        var newFirst = node.firstChild;
        if (newFirst == null) {
          return node;
        }
        var newLast = node.lastChild;
      } else {
        newFirst = newLast = node;
      }
      var pre = child ? child.previousSibling : parent.lastChild;
      newFirst.previousSibling = pre;
      newLast.nextSibling = child;
      if (pre) {
        pre.nextSibling = newFirst;
      } else {
        parent.firstChild = newFirst;
      }
      if (child == null) {
        parent.lastChild = newLast;
      } else {
        child.previousSibling = newLast;
      }
      do {
        newFirst.parentNode = parent;
      } while (newFirst !== newLast && (newFirst = newFirst.nextSibling));
      _onUpdateChild(parent.ownerDocument || parent, parent);
      if (node.nodeType == DOCUMENT_FRAGMENT_NODE) {
        node.firstChild = node.lastChild = null;
      }
      return node;
    }
    function _appendSingleChild(parentNode, newChild) {
      if (newChild.parentNode) {
        newChild.parentNode.removeChild(newChild);
      }
      newChild.parentNode = parentNode;
      newChild.previousSibling = parentNode.lastChild;
      newChild.nextSibling = null;
      if (newChild.previousSibling) {
        newChild.previousSibling.nextSibling = newChild;
      } else {
        parentNode.firstChild = newChild;
      }
      parentNode.lastChild = newChild;
      _onUpdateChild(parentNode.ownerDocument, parentNode, newChild);
      return newChild;
    }
    Document.prototype = {
      //implementation : null,
      nodeName: "#document",
      nodeType: DOCUMENT_NODE,
      /**
       * The DocumentType node of the document.
       *
       * @readonly
       * @type DocumentType
       */
      doctype: null,
      documentElement: null,
      _inc: 1,
      insertBefore: function(newChild, refChild) {
        if (newChild.nodeType == DOCUMENT_FRAGMENT_NODE) {
          var child = newChild.firstChild;
          while (child) {
            var next = child.nextSibling;
            this.insertBefore(child, refChild);
            child = next;
          }
          return newChild;
        }
        _insertBefore(this, newChild, refChild);
        newChild.ownerDocument = this;
        if (this.documentElement === null && newChild.nodeType === ELEMENT_NODE) {
          this.documentElement = newChild;
        }
        return newChild;
      },
      removeChild: function(oldChild) {
        if (this.documentElement == oldChild) {
          this.documentElement = null;
        }
        return _removeChild(this, oldChild);
      },
      replaceChild: function(newChild, oldChild) {
        _insertBefore(this, newChild, oldChild, assertPreReplacementValidityInDocument);
        newChild.ownerDocument = this;
        if (oldChild) {
          this.removeChild(oldChild);
        }
        if (isElementNode(newChild)) {
          this.documentElement = newChild;
        }
      },
      // Introduced in DOM Level 2:
      importNode: function(importedNode, deep) {
        return importNode(this, importedNode, deep);
      },
      // Introduced in DOM Level 2:
      getElementById: function(id) {
        var rtv = null;
        _visitNode(this.documentElement, function(node) {
          if (node.nodeType == ELEMENT_NODE) {
            if (node.getAttribute("id") == id) {
              rtv = node;
              return true;
            }
          }
        });
        return rtv;
      },
      /**
       * The `getElementsByClassName` method of `Document` interface returns an array-like object
       * of all child elements which have **all** of the given class name(s).
       *
       * Returns an empty list if `classeNames` is an empty string or only contains HTML white space characters.
       *
       *
       * Warning: This is a live LiveNodeList.
       * Changes in the DOM will reflect in the array as the changes occur.
       * If an element selected by this array no longer qualifies for the selector,
       * it will automatically be removed. Be aware of this for iteration purposes.
       *
       * @param {string} classNames is a string representing the class name(s) to match; multiple class names are separated by (ASCII-)whitespace
       *
       * @see https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName
       * @see https://dom.spec.whatwg.org/#concept-getelementsbyclassname
       */
      getElementsByClassName: function(classNames) {
        var classNamesSet = toOrderedSet(classNames);
        return new LiveNodeList(this, function(base) {
          var ls = [];
          if (classNamesSet.length > 0) {
            _visitNode(base.documentElement, function(node) {
              if (node !== base && node.nodeType === ELEMENT_NODE) {
                var nodeClassNames = node.getAttribute("class");
                if (nodeClassNames) {
                  var matches = classNames === nodeClassNames;
                  if (!matches) {
                    var nodeClassNamesSet = toOrderedSet(nodeClassNames);
                    matches = classNamesSet.every(arrayIncludes(nodeClassNamesSet));
                  }
                  if (matches) {
                    ls.push(node);
                  }
                }
              }
            });
          }
          return ls;
        });
      },
      //document factory method:
      createElement: function(tagName) {
        var node = new Element();
        node.ownerDocument = this;
        node.nodeName = tagName;
        node.tagName = tagName;
        node.localName = tagName;
        node.childNodes = new NodeList();
        var attrs = node.attributes = new NamedNodeMap();
        attrs._ownerElement = node;
        return node;
      },
      createDocumentFragment: function() {
        var node = new DocumentFragment();
        node.ownerDocument = this;
        node.childNodes = new NodeList();
        return node;
      },
      createTextNode: function(data) {
        var node = new Text2();
        node.ownerDocument = this;
        node.appendData(data);
        return node;
      },
      createComment: function(data) {
        var node = new Comment();
        node.ownerDocument = this;
        node.appendData(data);
        return node;
      },
      createCDATASection: function(data) {
        var node = new CDATASection();
        node.ownerDocument = this;
        node.appendData(data);
        return node;
      },
      createProcessingInstruction: function(target, data) {
        var node = new ProcessingInstruction();
        node.ownerDocument = this;
        node.tagName = node.nodeName = node.target = target;
        node.nodeValue = node.data = data;
        return node;
      },
      createAttribute: function(name) {
        var node = new Attr();
        node.ownerDocument = this;
        node.name = name;
        node.nodeName = name;
        node.localName = name;
        node.specified = true;
        return node;
      },
      createEntityReference: function(name) {
        var node = new EntityReference();
        node.ownerDocument = this;
        node.nodeName = name;
        return node;
      },
      // Introduced in DOM Level 2:
      createElementNS: function(namespaceURI, qualifiedName) {
        var node = new Element();
        var pl = qualifiedName.split(":");
        var attrs = node.attributes = new NamedNodeMap();
        node.childNodes = new NodeList();
        node.ownerDocument = this;
        node.nodeName = qualifiedName;
        node.tagName = qualifiedName;
        node.namespaceURI = namespaceURI;
        if (pl.length == 2) {
          node.prefix = pl[0];
          node.localName = pl[1];
        } else {
          node.localName = qualifiedName;
        }
        attrs._ownerElement = node;
        return node;
      },
      // Introduced in DOM Level 2:
      createAttributeNS: function(namespaceURI, qualifiedName) {
        var node = new Attr();
        var pl = qualifiedName.split(":");
        node.ownerDocument = this;
        node.nodeName = qualifiedName;
        node.name = qualifiedName;
        node.namespaceURI = namespaceURI;
        node.specified = true;
        if (pl.length == 2) {
          node.prefix = pl[0];
          node.localName = pl[1];
        } else {
          node.localName = qualifiedName;
        }
        return node;
      }
    };
    _extends(Document, Node);
    function Element() {
      this._nsMap = {};
    }
    Element.prototype = {
      nodeType: ELEMENT_NODE,
      hasAttribute: function(name) {
        return this.getAttributeNode(name) != null;
      },
      getAttribute: function(name) {
        var attr = this.getAttributeNode(name);
        return attr && attr.value || "";
      },
      getAttributeNode: function(name) {
        return this.attributes.getNamedItem(name);
      },
      setAttribute: function(name, value) {
        var attr = this.ownerDocument.createAttribute(name);
        attr.value = attr.nodeValue = "" + value;
        this.setAttributeNode(attr);
      },
      removeAttribute: function(name) {
        var attr = this.getAttributeNode(name);
        attr && this.removeAttributeNode(attr);
      },
      //four real opeartion method
      appendChild: function(newChild) {
        if (newChild.nodeType === DOCUMENT_FRAGMENT_NODE) {
          return this.insertBefore(newChild, null);
        } else {
          return _appendSingleChild(this, newChild);
        }
      },
      setAttributeNode: function(newAttr) {
        return this.attributes.setNamedItem(newAttr);
      },
      setAttributeNodeNS: function(newAttr) {
        return this.attributes.setNamedItemNS(newAttr);
      },
      removeAttributeNode: function(oldAttr) {
        return this.attributes.removeNamedItem(oldAttr.nodeName);
      },
      //get real attribute name,and remove it by removeAttributeNode
      removeAttributeNS: function(namespaceURI, localName) {
        var old = this.getAttributeNodeNS(namespaceURI, localName);
        old && this.removeAttributeNode(old);
      },
      hasAttributeNS: function(namespaceURI, localName) {
        return this.getAttributeNodeNS(namespaceURI, localName) != null;
      },
      getAttributeNS: function(namespaceURI, localName) {
        var attr = this.getAttributeNodeNS(namespaceURI, localName);
        return attr && attr.value || "";
      },
      setAttributeNS: function(namespaceURI, qualifiedName, value) {
        var attr = this.ownerDocument.createAttributeNS(namespaceURI, qualifiedName);
        attr.value = attr.nodeValue = "" + value;
        this.setAttributeNode(attr);
      },
      getAttributeNodeNS: function(namespaceURI, localName) {
        return this.attributes.getNamedItemNS(namespaceURI, localName);
      },
      getElementsByTagName: function(tagName) {
        return new LiveNodeList(this, function(base) {
          var ls = [];
          _visitNode(base, function(node) {
            if (node !== base && node.nodeType == ELEMENT_NODE && (tagName === "*" || node.tagName == tagName)) {
              ls.push(node);
            }
          });
          return ls;
        });
      },
      getElementsByTagNameNS: function(namespaceURI, localName) {
        return new LiveNodeList(this, function(base) {
          var ls = [];
          _visitNode(base, function(node) {
            if (node !== base && node.nodeType === ELEMENT_NODE && (namespaceURI === "*" || node.namespaceURI === namespaceURI) && (localName === "*" || node.localName == localName)) {
              ls.push(node);
            }
          });
          return ls;
        });
      }
    };
    Document.prototype.getElementsByTagName = Element.prototype.getElementsByTagName;
    Document.prototype.getElementsByTagNameNS = Element.prototype.getElementsByTagNameNS;
    _extends(Element, Node);
    function Attr() {
    }
    Attr.prototype.nodeType = ATTRIBUTE_NODE;
    _extends(Attr, Node);
    function CharacterData() {
    }
    CharacterData.prototype = {
      data: "",
      substringData: function(offset, count) {
        return this.data.substring(offset, offset + count);
      },
      appendData: function(text) {
        text = this.data + text;
        this.nodeValue = this.data = text;
        this.length = text.length;
      },
      insertData: function(offset, text) {
        this.replaceData(offset, 0, text);
      },
      appendChild: function(newChild) {
        throw new Error(ExceptionMessage[HIERARCHY_REQUEST_ERR]);
      },
      deleteData: function(offset, count) {
        this.replaceData(offset, count, "");
      },
      replaceData: function(offset, count, text) {
        var start = this.data.substring(0, offset);
        var end = this.data.substring(offset + count);
        text = start + text + end;
        this.nodeValue = this.data = text;
        this.length = text.length;
      }
    };
    _extends(CharacterData, Node);
    function Text2() {
    }
    Text2.prototype = {
      nodeName: "#text",
      nodeType: TEXT_NODE,
      splitText: function(offset) {
        var text = this.data;
        var newText = text.substring(offset);
        text = text.substring(0, offset);
        this.data = this.nodeValue = text;
        this.length = text.length;
        var newNode = this.ownerDocument.createTextNode(newText);
        if (this.parentNode) {
          this.parentNode.insertBefore(newNode, this.nextSibling);
        }
        return newNode;
      }
    };
    _extends(Text2, CharacterData);
    function Comment() {
    }
    Comment.prototype = {
      nodeName: "#comment",
      nodeType: COMMENT_NODE
    };
    _extends(Comment, CharacterData);
    function CDATASection() {
    }
    CDATASection.prototype = {
      nodeName: "#cdata-section",
      nodeType: CDATA_SECTION_NODE
    };
    _extends(CDATASection, CharacterData);
    function DocumentType() {
    }
    DocumentType.prototype.nodeType = DOCUMENT_TYPE_NODE;
    _extends(DocumentType, Node);
    function Notation() {
    }
    Notation.prototype.nodeType = NOTATION_NODE;
    _extends(Notation, Node);
    function Entity() {
    }
    Entity.prototype.nodeType = ENTITY_NODE;
    _extends(Entity, Node);
    function EntityReference() {
    }
    EntityReference.prototype.nodeType = ENTITY_REFERENCE_NODE;
    _extends(EntityReference, Node);
    function DocumentFragment() {
    }
    DocumentFragment.prototype.nodeName = "#document-fragment";
    DocumentFragment.prototype.nodeType = DOCUMENT_FRAGMENT_NODE;
    _extends(DocumentFragment, Node);
    function ProcessingInstruction() {
    }
    ProcessingInstruction.prototype.nodeType = PROCESSING_INSTRUCTION_NODE;
    _extends(ProcessingInstruction, Node);
    function XMLSerializer() {
    }
    XMLSerializer.prototype.serializeToString = function(node, isHtml, nodeFilter) {
      return nodeSerializeToString.call(node, isHtml, nodeFilter);
    };
    Node.prototype.toString = nodeSerializeToString;
    function nodeSerializeToString(isHtml, nodeFilter) {
      var buf = [];
      var refNode = this.nodeType == 9 && this.documentElement || this;
      var prefix = refNode.prefix;
      var uri = refNode.namespaceURI;
      if (uri && prefix == null) {
        var prefix = refNode.lookupPrefix(uri);
        if (prefix == null) {
          var visibleNamespaces = [
            { namespace: uri, prefix: null }
            //{namespace:uri,prefix:''}
          ];
        }
      }
      serializeToString(this, buf, isHtml, nodeFilter, visibleNamespaces);
      return buf.join("");
    }
    function needNamespaceDefine(node, isHTML, visibleNamespaces) {
      var prefix = node.prefix || "";
      var uri = node.namespaceURI;
      if (!uri) {
        return false;
      }
      if (prefix === "xml" && uri === NAMESPACE.XML || uri === NAMESPACE.XMLNS) {
        return false;
      }
      var i = visibleNamespaces.length;
      while (i--) {
        var ns = visibleNamespaces[i];
        if (ns.prefix === prefix) {
          return ns.namespace !== uri;
        }
      }
      return true;
    }
    function addSerializedAttribute(buf, qualifiedName, value) {
      buf.push(" ", qualifiedName, '="', value.replace(/[<>&"\t\n\r]/g, _xmlEncoder), '"');
    }
    function serializeToString(node, buf, isHTML, nodeFilter, visibleNamespaces) {
      if (!visibleNamespaces) {
        visibleNamespaces = [];
      }
      if (nodeFilter) {
        node = nodeFilter(node);
        if (node) {
          if (typeof node == "string") {
            buf.push(node);
            return;
          }
        } else {
          return;
        }
      }
      switch (node.nodeType) {
        case ELEMENT_NODE:
          var attrs = node.attributes;
          var len = attrs.length;
          var child = node.firstChild;
          var nodeName = node.tagName;
          isHTML = NAMESPACE.isHTML(node.namespaceURI) || isHTML;
          var prefixedNodeName = nodeName;
          if (!isHTML && !node.prefix && node.namespaceURI) {
            var defaultNS;
            for (var ai = 0; ai < attrs.length; ai++) {
              if (attrs.item(ai).name === "xmlns") {
                defaultNS = attrs.item(ai).value;
                break;
              }
            }
            if (!defaultNS) {
              for (var nsi = visibleNamespaces.length - 1; nsi >= 0; nsi--) {
                var namespace = visibleNamespaces[nsi];
                if (namespace.prefix === "" && namespace.namespace === node.namespaceURI) {
                  defaultNS = namespace.namespace;
                  break;
                }
              }
            }
            if (defaultNS !== node.namespaceURI) {
              for (var nsi = visibleNamespaces.length - 1; nsi >= 0; nsi--) {
                var namespace = visibleNamespaces[nsi];
                if (namespace.namespace === node.namespaceURI) {
                  if (namespace.prefix) {
                    prefixedNodeName = namespace.prefix + ":" + nodeName;
                  }
                  break;
                }
              }
            }
          }
          buf.push("<", prefixedNodeName);
          for (var i = 0; i < len; i++) {
            var attr = attrs.item(i);
            if (attr.prefix == "xmlns") {
              visibleNamespaces.push({ prefix: attr.localName, namespace: attr.value });
            } else if (attr.nodeName == "xmlns") {
              visibleNamespaces.push({ prefix: "", namespace: attr.value });
            }
          }
          for (var i = 0; i < len; i++) {
            var attr = attrs.item(i);
            if (needNamespaceDefine(attr, isHTML, visibleNamespaces)) {
              var prefix = attr.prefix || "";
              var uri = attr.namespaceURI;
              addSerializedAttribute(buf, prefix ? "xmlns:" + prefix : "xmlns", uri);
              visibleNamespaces.push({ prefix, namespace: uri });
            }
            serializeToString(attr, buf, isHTML, nodeFilter, visibleNamespaces);
          }
          if (nodeName === prefixedNodeName && needNamespaceDefine(node, isHTML, visibleNamespaces)) {
            var prefix = node.prefix || "";
            var uri = node.namespaceURI;
            addSerializedAttribute(buf, prefix ? "xmlns:" + prefix : "xmlns", uri);
            visibleNamespaces.push({ prefix, namespace: uri });
          }
          if (child || isHTML && !/^(?:meta|link|img|br|hr|input)$/i.test(nodeName)) {
            buf.push(">");
            if (isHTML && /^script$/i.test(nodeName)) {
              while (child) {
                if (child.data) {
                  buf.push(child.data);
                } else {
                  serializeToString(child, buf, isHTML, nodeFilter, visibleNamespaces.slice());
                }
                child = child.nextSibling;
              }
            } else {
              while (child) {
                serializeToString(child, buf, isHTML, nodeFilter, visibleNamespaces.slice());
                child = child.nextSibling;
              }
            }
            buf.push("</", prefixedNodeName, ">");
          } else {
            buf.push("/>");
          }
          return;
        case DOCUMENT_NODE:
        case DOCUMENT_FRAGMENT_NODE:
          var child = node.firstChild;
          while (child) {
            serializeToString(child, buf, isHTML, nodeFilter, visibleNamespaces.slice());
            child = child.nextSibling;
          }
          return;
        case ATTRIBUTE_NODE:
          return addSerializedAttribute(buf, node.name, node.value);
        case TEXT_NODE:
          return buf.push(
            node.data.replace(/[<&>]/g, _xmlEncoder)
          );
        case CDATA_SECTION_NODE:
          return buf.push("<![CDATA[", node.data, "]]>");
        case COMMENT_NODE:
          return buf.push("<!--", node.data, "-->");
        case DOCUMENT_TYPE_NODE:
          var pubid = node.publicId;
          var sysid = node.systemId;
          buf.push("<!DOCTYPE ", node.name);
          if (pubid) {
            buf.push(" PUBLIC ", pubid);
            if (sysid && sysid != ".") {
              buf.push(" ", sysid);
            }
            buf.push(">");
          } else if (sysid && sysid != ".") {
            buf.push(" SYSTEM ", sysid, ">");
          } else {
            var sub = node.internalSubset;
            if (sub) {
              buf.push(" [", sub, "]");
            }
            buf.push(">");
          }
          return;
        case PROCESSING_INSTRUCTION_NODE:
          return buf.push("<?", node.target, " ", node.data, "?>");
        case ENTITY_REFERENCE_NODE:
          return buf.push("&", node.nodeName, ";");
        default:
          buf.push("??", node.nodeName);
      }
    }
    function importNode(doc, node, deep) {
      var node2;
      switch (node.nodeType) {
        case ELEMENT_NODE:
          node2 = node.cloneNode(false);
          node2.ownerDocument = doc;
        case DOCUMENT_FRAGMENT_NODE:
          break;
        case ATTRIBUTE_NODE:
          deep = true;
          break;
      }
      if (!node2) {
        node2 = node.cloneNode(false);
      }
      node2.ownerDocument = doc;
      node2.parentNode = null;
      if (deep) {
        var child = node.firstChild;
        while (child) {
          node2.appendChild(importNode(doc, child, deep));
          child = child.nextSibling;
        }
      }
      return node2;
    }
    function cloneNode(doc, node, deep) {
      var node2 = new node.constructor();
      for (var n in node) {
        if (Object.prototype.hasOwnProperty.call(node, n)) {
          var v = node[n];
          if (typeof v != "object") {
            if (v != node2[n]) {
              node2[n] = v;
            }
          }
        }
      }
      if (node.childNodes) {
        node2.childNodes = new NodeList();
      }
      node2.ownerDocument = doc;
      switch (node2.nodeType) {
        case ELEMENT_NODE:
          var attrs = node.attributes;
          var attrs2 = node2.attributes = new NamedNodeMap();
          var len = attrs.length;
          attrs2._ownerElement = node2;
          for (var i = 0; i < len; i++) {
            node2.setAttributeNode(cloneNode(doc, attrs.item(i), true));
          }
          break;
          ;
        case ATTRIBUTE_NODE:
          deep = true;
      }
      if (deep) {
        var child = node.firstChild;
        while (child) {
          node2.appendChild(cloneNode(doc, child, deep));
          child = child.nextSibling;
        }
      }
      return node2;
    }
    function __set__(object, key, value) {
      object[key] = value;
    }
    try {
      if (Object.defineProperty) {
        let getTextContent2 = function(node) {
          switch (node.nodeType) {
            case ELEMENT_NODE:
            case DOCUMENT_FRAGMENT_NODE:
              var buf = [];
              node = node.firstChild;
              while (node) {
                if (node.nodeType !== 7 && node.nodeType !== 8) {
                  buf.push(getTextContent2(node));
                }
                node = node.nextSibling;
              }
              return buf.join("");
            default:
              return node.nodeValue;
          }
        };
        getTextContent = getTextContent2;
        Object.defineProperty(LiveNodeList.prototype, "length", {
          get: function() {
            _updateLiveList(this);
            return this.$$length;
          }
        });
        Object.defineProperty(Node.prototype, "textContent", {
          get: function() {
            return getTextContent2(this);
          },
          set: function(data) {
            switch (this.nodeType) {
              case ELEMENT_NODE:
              case DOCUMENT_FRAGMENT_NODE:
                while (this.firstChild) {
                  this.removeChild(this.firstChild);
                }
                if (data || String(data)) {
                  this.appendChild(this.ownerDocument.createTextNode(data));
                }
                break;
              default:
                this.data = data;
                this.value = data;
                this.nodeValue = data;
            }
          }
        });
        __set__ = function(object, key, value) {
          object["$$" + key] = value;
        };
      }
    } catch (e) {
    }
    var getTextContent;
    exports.DocumentType = DocumentType;
    exports.DOMException = DOMException;
    exports.DOMImplementation = DOMImplementation;
    exports.Element = Element;
    exports.Node = Node;
    exports.NodeList = NodeList;
    exports.XMLSerializer = XMLSerializer;
  }
});

// node_modules/@xmldom/xmldom/lib/entities.js
var require_entities = __commonJS({
  "node_modules/@xmldom/xmldom/lib/entities.js"(exports) {
    "use strict";
    var freeze = require_conventions().freeze;
    exports.XML_ENTITIES = freeze({
      amp: "&",
      apos: "'",
      gt: ">",
      lt: "<",
      quot: '"'
    });
    exports.HTML_ENTITIES = freeze({
      Aacute: "Á",
      aacute: "á",
      Abreve: "Ă",
      abreve: "ă",
      ac: "∾",
      acd: "∿",
      acE: "∾̳",
      Acirc: "Â",
      acirc: "â",
      acute: "´",
      Acy: "А",
      acy: "а",
      AElig: "Æ",
      aelig: "æ",
      af: "⁡",
      Afr: "𝔄",
      afr: "𝔞",
      Agrave: "À",
      agrave: "à",
      alefsym: "ℵ",
      aleph: "ℵ",
      Alpha: "Α",
      alpha: "α",
      Amacr: "Ā",
      amacr: "ā",
      amalg: "⨿",
      AMP: "&",
      amp: "&",
      And: "⩓",
      and: "∧",
      andand: "⩕",
      andd: "⩜",
      andslope: "⩘",
      andv: "⩚",
      ang: "∠",
      ange: "⦤",
      angle: "∠",
      angmsd: "∡",
      angmsdaa: "⦨",
      angmsdab: "⦩",
      angmsdac: "⦪",
      angmsdad: "⦫",
      angmsdae: "⦬",
      angmsdaf: "⦭",
      angmsdag: "⦮",
      angmsdah: "⦯",
      angrt: "∟",
      angrtvb: "⊾",
      angrtvbd: "⦝",
      angsph: "∢",
      angst: "Å",
      angzarr: "⍼",
      Aogon: "Ą",
      aogon: "ą",
      Aopf: "𝔸",
      aopf: "𝕒",
      ap: "≈",
      apacir: "⩯",
      apE: "⩰",
      ape: "≊",
      apid: "≋",
      apos: "'",
      ApplyFunction: "⁡",
      approx: "≈",
      approxeq: "≊",
      Aring: "Å",
      aring: "å",
      Ascr: "𝒜",
      ascr: "𝒶",
      Assign: "≔",
      ast: "*",
      asymp: "≈",
      asympeq: "≍",
      Atilde: "Ã",
      atilde: "ã",
      Auml: "Ä",
      auml: "ä",
      awconint: "∳",
      awint: "⨑",
      backcong: "≌",
      backepsilon: "϶",
      backprime: "‵",
      backsim: "∽",
      backsimeq: "⋍",
      Backslash: "∖",
      Barv: "⫧",
      barvee: "⊽",
      Barwed: "⌆",
      barwed: "⌅",
      barwedge: "⌅",
      bbrk: "⎵",
      bbrktbrk: "⎶",
      bcong: "≌",
      Bcy: "Б",
      bcy: "б",
      bdquo: "„",
      becaus: "∵",
      Because: "∵",
      because: "∵",
      bemptyv: "⦰",
      bepsi: "϶",
      bernou: "ℬ",
      Bernoullis: "ℬ",
      Beta: "Β",
      beta: "β",
      beth: "ℶ",
      between: "≬",
      Bfr: "𝔅",
      bfr: "𝔟",
      bigcap: "⋂",
      bigcirc: "◯",
      bigcup: "⋃",
      bigodot: "⨀",
      bigoplus: "⨁",
      bigotimes: "⨂",
      bigsqcup: "⨆",
      bigstar: "★",
      bigtriangledown: "▽",
      bigtriangleup: "△",
      biguplus: "⨄",
      bigvee: "⋁",
      bigwedge: "⋀",
      bkarow: "⤍",
      blacklozenge: "⧫",
      blacksquare: "▪",
      blacktriangle: "▴",
      blacktriangledown: "▾",
      blacktriangleleft: "◂",
      blacktriangleright: "▸",
      blank: "␣",
      blk12: "▒",
      blk14: "░",
      blk34: "▓",
      block: "█",
      bne: "=⃥",
      bnequiv: "≡⃥",
      bNot: "⫭",
      bnot: "⌐",
      Bopf: "𝔹",
      bopf: "𝕓",
      bot: "⊥",
      bottom: "⊥",
      bowtie: "⋈",
      boxbox: "⧉",
      boxDL: "╗",
      boxDl: "╖",
      boxdL: "╕",
      boxdl: "┐",
      boxDR: "╔",
      boxDr: "╓",
      boxdR: "╒",
      boxdr: "┌",
      boxH: "═",
      boxh: "─",
      boxHD: "╦",
      boxHd: "╤",
      boxhD: "╥",
      boxhd: "┬",
      boxHU: "╩",
      boxHu: "╧",
      boxhU: "╨",
      boxhu: "┴",
      boxminus: "⊟",
      boxplus: "⊞",
      boxtimes: "⊠",
      boxUL: "╝",
      boxUl: "╜",
      boxuL: "╛",
      boxul: "┘",
      boxUR: "╚",
      boxUr: "╙",
      boxuR: "╘",
      boxur: "└",
      boxV: "║",
      boxv: "│",
      boxVH: "╬",
      boxVh: "╫",
      boxvH: "╪",
      boxvh: "┼",
      boxVL: "╣",
      boxVl: "╢",
      boxvL: "╡",
      boxvl: "┤",
      boxVR: "╠",
      boxVr: "╟",
      boxvR: "╞",
      boxvr: "├",
      bprime: "‵",
      Breve: "˘",
      breve: "˘",
      brvbar: "¦",
      Bscr: "ℬ",
      bscr: "𝒷",
      bsemi: "⁏",
      bsim: "∽",
      bsime: "⋍",
      bsol: "\\",
      bsolb: "⧅",
      bsolhsub: "⟈",
      bull: "•",
      bullet: "•",
      bump: "≎",
      bumpE: "⪮",
      bumpe: "≏",
      Bumpeq: "≎",
      bumpeq: "≏",
      Cacute: "Ć",
      cacute: "ć",
      Cap: "⋒",
      cap: "∩",
      capand: "⩄",
      capbrcup: "⩉",
      capcap: "⩋",
      capcup: "⩇",
      capdot: "⩀",
      CapitalDifferentialD: "ⅅ",
      caps: "∩︀",
      caret: "⁁",
      caron: "ˇ",
      Cayleys: "ℭ",
      ccaps: "⩍",
      Ccaron: "Č",
      ccaron: "č",
      Ccedil: "Ç",
      ccedil: "ç",
      Ccirc: "Ĉ",
      ccirc: "ĉ",
      Cconint: "∰",
      ccups: "⩌",
      ccupssm: "⩐",
      Cdot: "Ċ",
      cdot: "ċ",
      cedil: "¸",
      Cedilla: "¸",
      cemptyv: "⦲",
      cent: "¢",
      CenterDot: "·",
      centerdot: "·",
      Cfr: "ℭ",
      cfr: "𝔠",
      CHcy: "Ч",
      chcy: "ч",
      check: "✓",
      checkmark: "✓",
      Chi: "Χ",
      chi: "χ",
      cir: "○",
      circ: "ˆ",
      circeq: "≗",
      circlearrowleft: "↺",
      circlearrowright: "↻",
      circledast: "⊛",
      circledcirc: "⊚",
      circleddash: "⊝",
      CircleDot: "⊙",
      circledR: "®",
      circledS: "Ⓢ",
      CircleMinus: "⊖",
      CirclePlus: "⊕",
      CircleTimes: "⊗",
      cirE: "⧃",
      cire: "≗",
      cirfnint: "⨐",
      cirmid: "⫯",
      cirscir: "⧂",
      ClockwiseContourIntegral: "∲",
      CloseCurlyDoubleQuote: "”",
      CloseCurlyQuote: "’",
      clubs: "♣",
      clubsuit: "♣",
      Colon: "∷",
      colon: ":",
      Colone: "⩴",
      colone: "≔",
      coloneq: "≔",
      comma: ",",
      commat: "@",
      comp: "∁",
      compfn: "∘",
      complement: "∁",
      complexes: "ℂ",
      cong: "≅",
      congdot: "⩭",
      Congruent: "≡",
      Conint: "∯",
      conint: "∮",
      ContourIntegral: "∮",
      Copf: "ℂ",
      copf: "𝕔",
      coprod: "∐",
      Coproduct: "∐",
      COPY: "©",
      copy: "©",
      copysr: "℗",
      CounterClockwiseContourIntegral: "∳",
      crarr: "↵",
      Cross: "⨯",
      cross: "✗",
      Cscr: "𝒞",
      cscr: "𝒸",
      csub: "⫏",
      csube: "⫑",
      csup: "⫐",
      csupe: "⫒",
      ctdot: "⋯",
      cudarrl: "⤸",
      cudarrr: "⤵",
      cuepr: "⋞",
      cuesc: "⋟",
      cularr: "↶",
      cularrp: "⤽",
      Cup: "⋓",
      cup: "∪",
      cupbrcap: "⩈",
      CupCap: "≍",
      cupcap: "⩆",
      cupcup: "⩊",
      cupdot: "⊍",
      cupor: "⩅",
      cups: "∪︀",
      curarr: "↷",
      curarrm: "⤼",
      curlyeqprec: "⋞",
      curlyeqsucc: "⋟",
      curlyvee: "⋎",
      curlywedge: "⋏",
      curren: "¤",
      curvearrowleft: "↶",
      curvearrowright: "↷",
      cuvee: "⋎",
      cuwed: "⋏",
      cwconint: "∲",
      cwint: "∱",
      cylcty: "⌭",
      Dagger: "‡",
      dagger: "†",
      daleth: "ℸ",
      Darr: "↡",
      dArr: "⇓",
      darr: "↓",
      dash: "‐",
      Dashv: "⫤",
      dashv: "⊣",
      dbkarow: "⤏",
      dblac: "˝",
      Dcaron: "Ď",
      dcaron: "ď",
      Dcy: "Д",
      dcy: "д",
      DD: "ⅅ",
      dd: "ⅆ",
      ddagger: "‡",
      ddarr: "⇊",
      DDotrahd: "⤑",
      ddotseq: "⩷",
      deg: "°",
      Del: "∇",
      Delta: "Δ",
      delta: "δ",
      demptyv: "⦱",
      dfisht: "⥿",
      Dfr: "𝔇",
      dfr: "𝔡",
      dHar: "⥥",
      dharl: "⇃",
      dharr: "⇂",
      DiacriticalAcute: "´",
      DiacriticalDot: "˙",
      DiacriticalDoubleAcute: "˝",
      DiacriticalGrave: "`",
      DiacriticalTilde: "˜",
      diam: "⋄",
      Diamond: "⋄",
      diamond: "⋄",
      diamondsuit: "♦",
      diams: "♦",
      die: "¨",
      DifferentialD: "ⅆ",
      digamma: "ϝ",
      disin: "⋲",
      div: "÷",
      divide: "÷",
      divideontimes: "⋇",
      divonx: "⋇",
      DJcy: "Ђ",
      djcy: "ђ",
      dlcorn: "⌞",
      dlcrop: "⌍",
      dollar: "$",
      Dopf: "𝔻",
      dopf: "𝕕",
      Dot: "¨",
      dot: "˙",
      DotDot: "⃜",
      doteq: "≐",
      doteqdot: "≑",
      DotEqual: "≐",
      dotminus: "∸",
      dotplus: "∔",
      dotsquare: "⊡",
      doublebarwedge: "⌆",
      DoubleContourIntegral: "∯",
      DoubleDot: "¨",
      DoubleDownArrow: "⇓",
      DoubleLeftArrow: "⇐",
      DoubleLeftRightArrow: "⇔",
      DoubleLeftTee: "⫤",
      DoubleLongLeftArrow: "⟸",
      DoubleLongLeftRightArrow: "⟺",
      DoubleLongRightArrow: "⟹",
      DoubleRightArrow: "⇒",
      DoubleRightTee: "⊨",
      DoubleUpArrow: "⇑",
      DoubleUpDownArrow: "⇕",
      DoubleVerticalBar: "∥",
      DownArrow: "↓",
      Downarrow: "⇓",
      downarrow: "↓",
      DownArrowBar: "⤓",
      DownArrowUpArrow: "⇵",
      DownBreve: "̑",
      downdownarrows: "⇊",
      downharpoonleft: "⇃",
      downharpoonright: "⇂",
      DownLeftRightVector: "⥐",
      DownLeftTeeVector: "⥞",
      DownLeftVector: "↽",
      DownLeftVectorBar: "⥖",
      DownRightTeeVector: "⥟",
      DownRightVector: "⇁",
      DownRightVectorBar: "⥗",
      DownTee: "⊤",
      DownTeeArrow: "↧",
      drbkarow: "⤐",
      drcorn: "⌟",
      drcrop: "⌌",
      Dscr: "𝒟",
      dscr: "𝒹",
      DScy: "Ѕ",
      dscy: "ѕ",
      dsol: "⧶",
      Dstrok: "Đ",
      dstrok: "đ",
      dtdot: "⋱",
      dtri: "▿",
      dtrif: "▾",
      duarr: "⇵",
      duhar: "⥯",
      dwangle: "⦦",
      DZcy: "Џ",
      dzcy: "џ",
      dzigrarr: "⟿",
      Eacute: "É",
      eacute: "é",
      easter: "⩮",
      Ecaron: "Ě",
      ecaron: "ě",
      ecir: "≖",
      Ecirc: "Ê",
      ecirc: "ê",
      ecolon: "≕",
      Ecy: "Э",
      ecy: "э",
      eDDot: "⩷",
      Edot: "Ė",
      eDot: "≑",
      edot: "ė",
      ee: "ⅇ",
      efDot: "≒",
      Efr: "𝔈",
      efr: "𝔢",
      eg: "⪚",
      Egrave: "È",
      egrave: "è",
      egs: "⪖",
      egsdot: "⪘",
      el: "⪙",
      Element: "∈",
      elinters: "⏧",
      ell: "ℓ",
      els: "⪕",
      elsdot: "⪗",
      Emacr: "Ē",
      emacr: "ē",
      empty: "∅",
      emptyset: "∅",
      EmptySmallSquare: "◻",
      emptyv: "∅",
      EmptyVerySmallSquare: "▫",
      emsp: " ",
      emsp13: " ",
      emsp14: " ",
      ENG: "Ŋ",
      eng: "ŋ",
      ensp: " ",
      Eogon: "Ę",
      eogon: "ę",
      Eopf: "𝔼",
      eopf: "𝕖",
      epar: "⋕",
      eparsl: "⧣",
      eplus: "⩱",
      epsi: "ε",
      Epsilon: "Ε",
      epsilon: "ε",
      epsiv: "ϵ",
      eqcirc: "≖",
      eqcolon: "≕",
      eqsim: "≂",
      eqslantgtr: "⪖",
      eqslantless: "⪕",
      Equal: "⩵",
      equals: "=",
      EqualTilde: "≂",
      equest: "≟",
      Equilibrium: "⇌",
      equiv: "≡",
      equivDD: "⩸",
      eqvparsl: "⧥",
      erarr: "⥱",
      erDot: "≓",
      Escr: "ℰ",
      escr: "ℯ",
      esdot: "≐",
      Esim: "⩳",
      esim: "≂",
      Eta: "Η",
      eta: "η",
      ETH: "Ð",
      eth: "ð",
      Euml: "Ë",
      euml: "ë",
      euro: "€",
      excl: "!",
      exist: "∃",
      Exists: "∃",
      expectation: "ℰ",
      ExponentialE: "ⅇ",
      exponentiale: "ⅇ",
      fallingdotseq: "≒",
      Fcy: "Ф",
      fcy: "ф",
      female: "♀",
      ffilig: "ﬃ",
      fflig: "ﬀ",
      ffllig: "ﬄ",
      Ffr: "𝔉",
      ffr: "𝔣",
      filig: "ﬁ",
      FilledSmallSquare: "◼",
      FilledVerySmallSquare: "▪",
      fjlig: "fj",
      flat: "♭",
      fllig: "ﬂ",
      fltns: "▱",
      fnof: "ƒ",
      Fopf: "𝔽",
      fopf: "𝕗",
      ForAll: "∀",
      forall: "∀",
      fork: "⋔",
      forkv: "⫙",
      Fouriertrf: "ℱ",
      fpartint: "⨍",
      frac12: "½",
      frac13: "⅓",
      frac14: "¼",
      frac15: "⅕",
      frac16: "⅙",
      frac18: "⅛",
      frac23: "⅔",
      frac25: "⅖",
      frac34: "¾",
      frac35: "⅗",
      frac38: "⅜",
      frac45: "⅘",
      frac56: "⅚",
      frac58: "⅝",
      frac78: "⅞",
      frasl: "⁄",
      frown: "⌢",
      Fscr: "ℱ",
      fscr: "𝒻",
      gacute: "ǵ",
      Gamma: "Γ",
      gamma: "γ",
      Gammad: "Ϝ",
      gammad: "ϝ",
      gap: "⪆",
      Gbreve: "Ğ",
      gbreve: "ğ",
      Gcedil: "Ģ",
      Gcirc: "Ĝ",
      gcirc: "ĝ",
      Gcy: "Г",
      gcy: "г",
      Gdot: "Ġ",
      gdot: "ġ",
      gE: "≧",
      ge: "≥",
      gEl: "⪌",
      gel: "⋛",
      geq: "≥",
      geqq: "≧",
      geqslant: "⩾",
      ges: "⩾",
      gescc: "⪩",
      gesdot: "⪀",
      gesdoto: "⪂",
      gesdotol: "⪄",
      gesl: "⋛︀",
      gesles: "⪔",
      Gfr: "𝔊",
      gfr: "𝔤",
      Gg: "⋙",
      gg: "≫",
      ggg: "⋙",
      gimel: "ℷ",
      GJcy: "Ѓ",
      gjcy: "ѓ",
      gl: "≷",
      gla: "⪥",
      glE: "⪒",
      glj: "⪤",
      gnap: "⪊",
      gnapprox: "⪊",
      gnE: "≩",
      gne: "⪈",
      gneq: "⪈",
      gneqq: "≩",
      gnsim: "⋧",
      Gopf: "𝔾",
      gopf: "𝕘",
      grave: "`",
      GreaterEqual: "≥",
      GreaterEqualLess: "⋛",
      GreaterFullEqual: "≧",
      GreaterGreater: "⪢",
      GreaterLess: "≷",
      GreaterSlantEqual: "⩾",
      GreaterTilde: "≳",
      Gscr: "𝒢",
      gscr: "ℊ",
      gsim: "≳",
      gsime: "⪎",
      gsiml: "⪐",
      Gt: "≫",
      GT: ">",
      gt: ">",
      gtcc: "⪧",
      gtcir: "⩺",
      gtdot: "⋗",
      gtlPar: "⦕",
      gtquest: "⩼",
      gtrapprox: "⪆",
      gtrarr: "⥸",
      gtrdot: "⋗",
      gtreqless: "⋛",
      gtreqqless: "⪌",
      gtrless: "≷",
      gtrsim: "≳",
      gvertneqq: "≩︀",
      gvnE: "≩︀",
      Hacek: "ˇ",
      hairsp: " ",
      half: "½",
      hamilt: "ℋ",
      HARDcy: "Ъ",
      hardcy: "ъ",
      hArr: "⇔",
      harr: "↔",
      harrcir: "⥈",
      harrw: "↭",
      Hat: "^",
      hbar: "ℏ",
      Hcirc: "Ĥ",
      hcirc: "ĥ",
      hearts: "♥",
      heartsuit: "♥",
      hellip: "…",
      hercon: "⊹",
      Hfr: "ℌ",
      hfr: "𝔥",
      HilbertSpace: "ℋ",
      hksearow: "⤥",
      hkswarow: "⤦",
      hoarr: "⇿",
      homtht: "∻",
      hookleftarrow: "↩",
      hookrightarrow: "↪",
      Hopf: "ℍ",
      hopf: "𝕙",
      horbar: "―",
      HorizontalLine: "─",
      Hscr: "ℋ",
      hscr: "𝒽",
      hslash: "ℏ",
      Hstrok: "Ħ",
      hstrok: "ħ",
      HumpDownHump: "≎",
      HumpEqual: "≏",
      hybull: "⁃",
      hyphen: "‐",
      Iacute: "Í",
      iacute: "í",
      ic: "⁣",
      Icirc: "Î",
      icirc: "î",
      Icy: "И",
      icy: "и",
      Idot: "İ",
      IEcy: "Е",
      iecy: "е",
      iexcl: "¡",
      iff: "⇔",
      Ifr: "ℑ",
      ifr: "𝔦",
      Igrave: "Ì",
      igrave: "ì",
      ii: "ⅈ",
      iiiint: "⨌",
      iiint: "∭",
      iinfin: "⧜",
      iiota: "℩",
      IJlig: "Ĳ",
      ijlig: "ĳ",
      Im: "ℑ",
      Imacr: "Ī",
      imacr: "ī",
      image: "ℑ",
      ImaginaryI: "ⅈ",
      imagline: "ℐ",
      imagpart: "ℑ",
      imath: "ı",
      imof: "⊷",
      imped: "Ƶ",
      Implies: "⇒",
      in: "∈",
      incare: "℅",
      infin: "∞",
      infintie: "⧝",
      inodot: "ı",
      Int: "∬",
      int: "∫",
      intcal: "⊺",
      integers: "ℤ",
      Integral: "∫",
      intercal: "⊺",
      Intersection: "⋂",
      intlarhk: "⨗",
      intprod: "⨼",
      InvisibleComma: "⁣",
      InvisibleTimes: "⁢",
      IOcy: "Ё",
      iocy: "ё",
      Iogon: "Į",
      iogon: "į",
      Iopf: "𝕀",
      iopf: "𝕚",
      Iota: "Ι",
      iota: "ι",
      iprod: "⨼",
      iquest: "¿",
      Iscr: "ℐ",
      iscr: "𝒾",
      isin: "∈",
      isindot: "⋵",
      isinE: "⋹",
      isins: "⋴",
      isinsv: "⋳",
      isinv: "∈",
      it: "⁢",
      Itilde: "Ĩ",
      itilde: "ĩ",
      Iukcy: "І",
      iukcy: "і",
      Iuml: "Ï",
      iuml: "ï",
      Jcirc: "Ĵ",
      jcirc: "ĵ",
      Jcy: "Й",
      jcy: "й",
      Jfr: "𝔍",
      jfr: "𝔧",
      jmath: "ȷ",
      Jopf: "𝕁",
      jopf: "𝕛",
      Jscr: "𝒥",
      jscr: "𝒿",
      Jsercy: "Ј",
      jsercy: "ј",
      Jukcy: "Є",
      jukcy: "є",
      Kappa: "Κ",
      kappa: "κ",
      kappav: "ϰ",
      Kcedil: "Ķ",
      kcedil: "ķ",
      Kcy: "К",
      kcy: "к",
      Kfr: "𝔎",
      kfr: "𝔨",
      kgreen: "ĸ",
      KHcy: "Х",
      khcy: "х",
      KJcy: "Ќ",
      kjcy: "ќ",
      Kopf: "𝕂",
      kopf: "𝕜",
      Kscr: "𝒦",
      kscr: "𝓀",
      lAarr: "⇚",
      Lacute: "Ĺ",
      lacute: "ĺ",
      laemptyv: "⦴",
      lagran: "ℒ",
      Lambda: "Λ",
      lambda: "λ",
      Lang: "⟪",
      lang: "⟨",
      langd: "⦑",
      langle: "⟨",
      lap: "⪅",
      Laplacetrf: "ℒ",
      laquo: "«",
      Larr: "↞",
      lArr: "⇐",
      larr: "←",
      larrb: "⇤",
      larrbfs: "⤟",
      larrfs: "⤝",
      larrhk: "↩",
      larrlp: "↫",
      larrpl: "⤹",
      larrsim: "⥳",
      larrtl: "↢",
      lat: "⪫",
      lAtail: "⤛",
      latail: "⤙",
      late: "⪭",
      lates: "⪭︀",
      lBarr: "⤎",
      lbarr: "⤌",
      lbbrk: "❲",
      lbrace: "{",
      lbrack: "[",
      lbrke: "⦋",
      lbrksld: "⦏",
      lbrkslu: "⦍",
      Lcaron: "Ľ",
      lcaron: "ľ",
      Lcedil: "Ļ",
      lcedil: "ļ",
      lceil: "⌈",
      lcub: "{",
      Lcy: "Л",
      lcy: "л",
      ldca: "⤶",
      ldquo: "“",
      ldquor: "„",
      ldrdhar: "⥧",
      ldrushar: "⥋",
      ldsh: "↲",
      lE: "≦",
      le: "≤",
      LeftAngleBracket: "⟨",
      LeftArrow: "←",
      Leftarrow: "⇐",
      leftarrow: "←",
      LeftArrowBar: "⇤",
      LeftArrowRightArrow: "⇆",
      leftarrowtail: "↢",
      LeftCeiling: "⌈",
      LeftDoubleBracket: "⟦",
      LeftDownTeeVector: "⥡",
      LeftDownVector: "⇃",
      LeftDownVectorBar: "⥙",
      LeftFloor: "⌊",
      leftharpoondown: "↽",
      leftharpoonup: "↼",
      leftleftarrows: "⇇",
      LeftRightArrow: "↔",
      Leftrightarrow: "⇔",
      leftrightarrow: "↔",
      leftrightarrows: "⇆",
      leftrightharpoons: "⇋",
      leftrightsquigarrow: "↭",
      LeftRightVector: "⥎",
      LeftTee: "⊣",
      LeftTeeArrow: "↤",
      LeftTeeVector: "⥚",
      leftthreetimes: "⋋",
      LeftTriangle: "⊲",
      LeftTriangleBar: "⧏",
      LeftTriangleEqual: "⊴",
      LeftUpDownVector: "⥑",
      LeftUpTeeVector: "⥠",
      LeftUpVector: "↿",
      LeftUpVectorBar: "⥘",
      LeftVector: "↼",
      LeftVectorBar: "⥒",
      lEg: "⪋",
      leg: "⋚",
      leq: "≤",
      leqq: "≦",
      leqslant: "⩽",
      les: "⩽",
      lescc: "⪨",
      lesdot: "⩿",
      lesdoto: "⪁",
      lesdotor: "⪃",
      lesg: "⋚︀",
      lesges: "⪓",
      lessapprox: "⪅",
      lessdot: "⋖",
      lesseqgtr: "⋚",
      lesseqqgtr: "⪋",
      LessEqualGreater: "⋚",
      LessFullEqual: "≦",
      LessGreater: "≶",
      lessgtr: "≶",
      LessLess: "⪡",
      lesssim: "≲",
      LessSlantEqual: "⩽",
      LessTilde: "≲",
      lfisht: "⥼",
      lfloor: "⌊",
      Lfr: "𝔏",
      lfr: "𝔩",
      lg: "≶",
      lgE: "⪑",
      lHar: "⥢",
      lhard: "↽",
      lharu: "↼",
      lharul: "⥪",
      lhblk: "▄",
      LJcy: "Љ",
      ljcy: "љ",
      Ll: "⋘",
      ll: "≪",
      llarr: "⇇",
      llcorner: "⌞",
      Lleftarrow: "⇚",
      llhard: "⥫",
      lltri: "◺",
      Lmidot: "Ŀ",
      lmidot: "ŀ",
      lmoust: "⎰",
      lmoustache: "⎰",
      lnap: "⪉",
      lnapprox: "⪉",
      lnE: "≨",
      lne: "⪇",
      lneq: "⪇",
      lneqq: "≨",
      lnsim: "⋦",
      loang: "⟬",
      loarr: "⇽",
      lobrk: "⟦",
      LongLeftArrow: "⟵",
      Longleftarrow: "⟸",
      longleftarrow: "⟵",
      LongLeftRightArrow: "⟷",
      Longleftrightarrow: "⟺",
      longleftrightarrow: "⟷",
      longmapsto: "⟼",
      LongRightArrow: "⟶",
      Longrightarrow: "⟹",
      longrightarrow: "⟶",
      looparrowleft: "↫",
      looparrowright: "↬",
      lopar: "⦅",
      Lopf: "𝕃",
      lopf: "𝕝",
      loplus: "⨭",
      lotimes: "⨴",
      lowast: "∗",
      lowbar: "_",
      LowerLeftArrow: "↙",
      LowerRightArrow: "↘",
      loz: "◊",
      lozenge: "◊",
      lozf: "⧫",
      lpar: "(",
      lparlt: "⦓",
      lrarr: "⇆",
      lrcorner: "⌟",
      lrhar: "⇋",
      lrhard: "⥭",
      lrm: "‎",
      lrtri: "⊿",
      lsaquo: "‹",
      Lscr: "ℒ",
      lscr: "𝓁",
      Lsh: "↰",
      lsh: "↰",
      lsim: "≲",
      lsime: "⪍",
      lsimg: "⪏",
      lsqb: "[",
      lsquo: "‘",
      lsquor: "‚",
      Lstrok: "Ł",
      lstrok: "ł",
      Lt: "≪",
      LT: "<",
      lt: "<",
      ltcc: "⪦",
      ltcir: "⩹",
      ltdot: "⋖",
      lthree: "⋋",
      ltimes: "⋉",
      ltlarr: "⥶",
      ltquest: "⩻",
      ltri: "◃",
      ltrie: "⊴",
      ltrif: "◂",
      ltrPar: "⦖",
      lurdshar: "⥊",
      luruhar: "⥦",
      lvertneqq: "≨︀",
      lvnE: "≨︀",
      macr: "¯",
      male: "♂",
      malt: "✠",
      maltese: "✠",
      Map: "⤅",
      map: "↦",
      mapsto: "↦",
      mapstodown: "↧",
      mapstoleft: "↤",
      mapstoup: "↥",
      marker: "▮",
      mcomma: "⨩",
      Mcy: "М",
      mcy: "м",
      mdash: "—",
      mDDot: "∺",
      measuredangle: "∡",
      MediumSpace: " ",
      Mellintrf: "ℳ",
      Mfr: "𝔐",
      mfr: "𝔪",
      mho: "℧",
      micro: "µ",
      mid: "∣",
      midast: "*",
      midcir: "⫰",
      middot: "·",
      minus: "−",
      minusb: "⊟",
      minusd: "∸",
      minusdu: "⨪",
      MinusPlus: "∓",
      mlcp: "⫛",
      mldr: "…",
      mnplus: "∓",
      models: "⊧",
      Mopf: "𝕄",
      mopf: "𝕞",
      mp: "∓",
      Mscr: "ℳ",
      mscr: "𝓂",
      mstpos: "∾",
      Mu: "Μ",
      mu: "μ",
      multimap: "⊸",
      mumap: "⊸",
      nabla: "∇",
      Nacute: "Ń",
      nacute: "ń",
      nang: "∠⃒",
      nap: "≉",
      napE: "⩰̸",
      napid: "≋̸",
      napos: "ŉ",
      napprox: "≉",
      natur: "♮",
      natural: "♮",
      naturals: "ℕ",
      nbsp: " ",
      nbump: "≎̸",
      nbumpe: "≏̸",
      ncap: "⩃",
      Ncaron: "Ň",
      ncaron: "ň",
      Ncedil: "Ņ",
      ncedil: "ņ",
      ncong: "≇",
      ncongdot: "⩭̸",
      ncup: "⩂",
      Ncy: "Н",
      ncy: "н",
      ndash: "–",
      ne: "≠",
      nearhk: "⤤",
      neArr: "⇗",
      nearr: "↗",
      nearrow: "↗",
      nedot: "≐̸",
      NegativeMediumSpace: "​",
      NegativeThickSpace: "​",
      NegativeThinSpace: "​",
      NegativeVeryThinSpace: "​",
      nequiv: "≢",
      nesear: "⤨",
      nesim: "≂̸",
      NestedGreaterGreater: "≫",
      NestedLessLess: "≪",
      NewLine: "\n",
      nexist: "∄",
      nexists: "∄",
      Nfr: "𝔑",
      nfr: "𝔫",
      ngE: "≧̸",
      nge: "≱",
      ngeq: "≱",
      ngeqq: "≧̸",
      ngeqslant: "⩾̸",
      nges: "⩾̸",
      nGg: "⋙̸",
      ngsim: "≵",
      nGt: "≫⃒",
      ngt: "≯",
      ngtr: "≯",
      nGtv: "≫̸",
      nhArr: "⇎",
      nharr: "↮",
      nhpar: "⫲",
      ni: "∋",
      nis: "⋼",
      nisd: "⋺",
      niv: "∋",
      NJcy: "Њ",
      njcy: "њ",
      nlArr: "⇍",
      nlarr: "↚",
      nldr: "‥",
      nlE: "≦̸",
      nle: "≰",
      nLeftarrow: "⇍",
      nleftarrow: "↚",
      nLeftrightarrow: "⇎",
      nleftrightarrow: "↮",
      nleq: "≰",
      nleqq: "≦̸",
      nleqslant: "⩽̸",
      nles: "⩽̸",
      nless: "≮",
      nLl: "⋘̸",
      nlsim: "≴",
      nLt: "≪⃒",
      nlt: "≮",
      nltri: "⋪",
      nltrie: "⋬",
      nLtv: "≪̸",
      nmid: "∤",
      NoBreak: "⁠",
      NonBreakingSpace: " ",
      Nopf: "ℕ",
      nopf: "𝕟",
      Not: "⫬",
      not: "¬",
      NotCongruent: "≢",
      NotCupCap: "≭",
      NotDoubleVerticalBar: "∦",
      NotElement: "∉",
      NotEqual: "≠",
      NotEqualTilde: "≂̸",
      NotExists: "∄",
      NotGreater: "≯",
      NotGreaterEqual: "≱",
      NotGreaterFullEqual: "≧̸",
      NotGreaterGreater: "≫̸",
      NotGreaterLess: "≹",
      NotGreaterSlantEqual: "⩾̸",
      NotGreaterTilde: "≵",
      NotHumpDownHump: "≎̸",
      NotHumpEqual: "≏̸",
      notin: "∉",
      notindot: "⋵̸",
      notinE: "⋹̸",
      notinva: "∉",
      notinvb: "⋷",
      notinvc: "⋶",
      NotLeftTriangle: "⋪",
      NotLeftTriangleBar: "⧏̸",
      NotLeftTriangleEqual: "⋬",
      NotLess: "≮",
      NotLessEqual: "≰",
      NotLessGreater: "≸",
      NotLessLess: "≪̸",
      NotLessSlantEqual: "⩽̸",
      NotLessTilde: "≴",
      NotNestedGreaterGreater: "⪢̸",
      NotNestedLessLess: "⪡̸",
      notni: "∌",
      notniva: "∌",
      notnivb: "⋾",
      notnivc: "⋽",
      NotPrecedes: "⊀",
      NotPrecedesEqual: "⪯̸",
      NotPrecedesSlantEqual: "⋠",
      NotReverseElement: "∌",
      NotRightTriangle: "⋫",
      NotRightTriangleBar: "⧐̸",
      NotRightTriangleEqual: "⋭",
      NotSquareSubset: "⊏̸",
      NotSquareSubsetEqual: "⋢",
      NotSquareSuperset: "⊐̸",
      NotSquareSupersetEqual: "⋣",
      NotSubset: "⊂⃒",
      NotSubsetEqual: "⊈",
      NotSucceeds: "⊁",
      NotSucceedsEqual: "⪰̸",
      NotSucceedsSlantEqual: "⋡",
      NotSucceedsTilde: "≿̸",
      NotSuperset: "⊃⃒",
      NotSupersetEqual: "⊉",
      NotTilde: "≁",
      NotTildeEqual: "≄",
      NotTildeFullEqual: "≇",
      NotTildeTilde: "≉",
      NotVerticalBar: "∤",
      npar: "∦",
      nparallel: "∦",
      nparsl: "⫽⃥",
      npart: "∂̸",
      npolint: "⨔",
      npr: "⊀",
      nprcue: "⋠",
      npre: "⪯̸",
      nprec: "⊀",
      npreceq: "⪯̸",
      nrArr: "⇏",
      nrarr: "↛",
      nrarrc: "⤳̸",
      nrarrw: "↝̸",
      nRightarrow: "⇏",
      nrightarrow: "↛",
      nrtri: "⋫",
      nrtrie: "⋭",
      nsc: "⊁",
      nsccue: "⋡",
      nsce: "⪰̸",
      Nscr: "𝒩",
      nscr: "𝓃",
      nshortmid: "∤",
      nshortparallel: "∦",
      nsim: "≁",
      nsime: "≄",
      nsimeq: "≄",
      nsmid: "∤",
      nspar: "∦",
      nsqsube: "⋢",
      nsqsupe: "⋣",
      nsub: "⊄",
      nsubE: "⫅̸",
      nsube: "⊈",
      nsubset: "⊂⃒",
      nsubseteq: "⊈",
      nsubseteqq: "⫅̸",
      nsucc: "⊁",
      nsucceq: "⪰̸",
      nsup: "⊅",
      nsupE: "⫆̸",
      nsupe: "⊉",
      nsupset: "⊃⃒",
      nsupseteq: "⊉",
      nsupseteqq: "⫆̸",
      ntgl: "≹",
      Ntilde: "Ñ",
      ntilde: "ñ",
      ntlg: "≸",
      ntriangleleft: "⋪",
      ntrianglelefteq: "⋬",
      ntriangleright: "⋫",
      ntrianglerighteq: "⋭",
      Nu: "Ν",
      nu: "ν",
      num: "#",
      numero: "№",
      numsp: " ",
      nvap: "≍⃒",
      nVDash: "⊯",
      nVdash: "⊮",
      nvDash: "⊭",
      nvdash: "⊬",
      nvge: "≥⃒",
      nvgt: ">⃒",
      nvHarr: "⤄",
      nvinfin: "⧞",
      nvlArr: "⤂",
      nvle: "≤⃒",
      nvlt: "<⃒",
      nvltrie: "⊴⃒",
      nvrArr: "⤃",
      nvrtrie: "⊵⃒",
      nvsim: "∼⃒",
      nwarhk: "⤣",
      nwArr: "⇖",
      nwarr: "↖",
      nwarrow: "↖",
      nwnear: "⤧",
      Oacute: "Ó",
      oacute: "ó",
      oast: "⊛",
      ocir: "⊚",
      Ocirc: "Ô",
      ocirc: "ô",
      Ocy: "О",
      ocy: "о",
      odash: "⊝",
      Odblac: "Ő",
      odblac: "ő",
      odiv: "⨸",
      odot: "⊙",
      odsold: "⦼",
      OElig: "Œ",
      oelig: "œ",
      ofcir: "⦿",
      Ofr: "𝔒",
      ofr: "𝔬",
      ogon: "˛",
      Ograve: "Ò",
      ograve: "ò",
      ogt: "⧁",
      ohbar: "⦵",
      ohm: "Ω",
      oint: "∮",
      olarr: "↺",
      olcir: "⦾",
      olcross: "⦻",
      oline: "‾",
      olt: "⧀",
      Omacr: "Ō",
      omacr: "ō",
      Omega: "Ω",
      omega: "ω",
      Omicron: "Ο",
      omicron: "ο",
      omid: "⦶",
      ominus: "⊖",
      Oopf: "𝕆",
      oopf: "𝕠",
      opar: "⦷",
      OpenCurlyDoubleQuote: "“",
      OpenCurlyQuote: "‘",
      operp: "⦹",
      oplus: "⊕",
      Or: "⩔",
      or: "∨",
      orarr: "↻",
      ord: "⩝",
      order: "ℴ",
      orderof: "ℴ",
      ordf: "ª",
      ordm: "º",
      origof: "⊶",
      oror: "⩖",
      orslope: "⩗",
      orv: "⩛",
      oS: "Ⓢ",
      Oscr: "𝒪",
      oscr: "ℴ",
      Oslash: "Ø",
      oslash: "ø",
      osol: "⊘",
      Otilde: "Õ",
      otilde: "õ",
      Otimes: "⨷",
      otimes: "⊗",
      otimesas: "⨶",
      Ouml: "Ö",
      ouml: "ö",
      ovbar: "⌽",
      OverBar: "‾",
      OverBrace: "⏞",
      OverBracket: "⎴",
      OverParenthesis: "⏜",
      par: "∥",
      para: "¶",
      parallel: "∥",
      parsim: "⫳",
      parsl: "⫽",
      part: "∂",
      PartialD: "∂",
      Pcy: "П",
      pcy: "п",
      percnt: "%",
      period: ".",
      permil: "‰",
      perp: "⊥",
      pertenk: "‱",
      Pfr: "𝔓",
      pfr: "𝔭",
      Phi: "Φ",
      phi: "φ",
      phiv: "ϕ",
      phmmat: "ℳ",
      phone: "☎",
      Pi: "Π",
      pi: "π",
      pitchfork: "⋔",
      piv: "ϖ",
      planck: "ℏ",
      planckh: "ℎ",
      plankv: "ℏ",
      plus: "+",
      plusacir: "⨣",
      plusb: "⊞",
      pluscir: "⨢",
      plusdo: "∔",
      plusdu: "⨥",
      pluse: "⩲",
      PlusMinus: "±",
      plusmn: "±",
      plussim: "⨦",
      plustwo: "⨧",
      pm: "±",
      Poincareplane: "ℌ",
      pointint: "⨕",
      Popf: "ℙ",
      popf: "𝕡",
      pound: "£",
      Pr: "⪻",
      pr: "≺",
      prap: "⪷",
      prcue: "≼",
      prE: "⪳",
      pre: "⪯",
      prec: "≺",
      precapprox: "⪷",
      preccurlyeq: "≼",
      Precedes: "≺",
      PrecedesEqual: "⪯",
      PrecedesSlantEqual: "≼",
      PrecedesTilde: "≾",
      preceq: "⪯",
      precnapprox: "⪹",
      precneqq: "⪵",
      precnsim: "⋨",
      precsim: "≾",
      Prime: "″",
      prime: "′",
      primes: "ℙ",
      prnap: "⪹",
      prnE: "⪵",
      prnsim: "⋨",
      prod: "∏",
      Product: "∏",
      profalar: "⌮",
      profline: "⌒",
      profsurf: "⌓",
      prop: "∝",
      Proportion: "∷",
      Proportional: "∝",
      propto: "∝",
      prsim: "≾",
      prurel: "⊰",
      Pscr: "𝒫",
      pscr: "𝓅",
      Psi: "Ψ",
      psi: "ψ",
      puncsp: " ",
      Qfr: "𝔔",
      qfr: "𝔮",
      qint: "⨌",
      Qopf: "ℚ",
      qopf: "𝕢",
      qprime: "⁗",
      Qscr: "𝒬",
      qscr: "𝓆",
      quaternions: "ℍ",
      quatint: "⨖",
      quest: "?",
      questeq: "≟",
      QUOT: '"',
      quot: '"',
      rAarr: "⇛",
      race: "∽̱",
      Racute: "Ŕ",
      racute: "ŕ",
      radic: "√",
      raemptyv: "⦳",
      Rang: "⟫",
      rang: "⟩",
      rangd: "⦒",
      range: "⦥",
      rangle: "⟩",
      raquo: "»",
      Rarr: "↠",
      rArr: "⇒",
      rarr: "→",
      rarrap: "⥵",
      rarrb: "⇥",
      rarrbfs: "⤠",
      rarrc: "⤳",
      rarrfs: "⤞",
      rarrhk: "↪",
      rarrlp: "↬",
      rarrpl: "⥅",
      rarrsim: "⥴",
      Rarrtl: "⤖",
      rarrtl: "↣",
      rarrw: "↝",
      rAtail: "⤜",
      ratail: "⤚",
      ratio: "∶",
      rationals: "ℚ",
      RBarr: "⤐",
      rBarr: "⤏",
      rbarr: "⤍",
      rbbrk: "❳",
      rbrace: "}",
      rbrack: "]",
      rbrke: "⦌",
      rbrksld: "⦎",
      rbrkslu: "⦐",
      Rcaron: "Ř",
      rcaron: "ř",
      Rcedil: "Ŗ",
      rcedil: "ŗ",
      rceil: "⌉",
      rcub: "}",
      Rcy: "Р",
      rcy: "р",
      rdca: "⤷",
      rdldhar: "⥩",
      rdquo: "”",
      rdquor: "”",
      rdsh: "↳",
      Re: "ℜ",
      real: "ℜ",
      realine: "ℛ",
      realpart: "ℜ",
      reals: "ℝ",
      rect: "▭",
      REG: "®",
      reg: "®",
      ReverseElement: "∋",
      ReverseEquilibrium: "⇋",
      ReverseUpEquilibrium: "⥯",
      rfisht: "⥽",
      rfloor: "⌋",
      Rfr: "ℜ",
      rfr: "𝔯",
      rHar: "⥤",
      rhard: "⇁",
      rharu: "⇀",
      rharul: "⥬",
      Rho: "Ρ",
      rho: "ρ",
      rhov: "ϱ",
      RightAngleBracket: "⟩",
      RightArrow: "→",
      Rightarrow: "⇒",
      rightarrow: "→",
      RightArrowBar: "⇥",
      RightArrowLeftArrow: "⇄",
      rightarrowtail: "↣",
      RightCeiling: "⌉",
      RightDoubleBracket: "⟧",
      RightDownTeeVector: "⥝",
      RightDownVector: "⇂",
      RightDownVectorBar: "⥕",
      RightFloor: "⌋",
      rightharpoondown: "⇁",
      rightharpoonup: "⇀",
      rightleftarrows: "⇄",
      rightleftharpoons: "⇌",
      rightrightarrows: "⇉",
      rightsquigarrow: "↝",
      RightTee: "⊢",
      RightTeeArrow: "↦",
      RightTeeVector: "⥛",
      rightthreetimes: "⋌",
      RightTriangle: "⊳",
      RightTriangleBar: "⧐",
      RightTriangleEqual: "⊵",
      RightUpDownVector: "⥏",
      RightUpTeeVector: "⥜",
      RightUpVector: "↾",
      RightUpVectorBar: "⥔",
      RightVector: "⇀",
      RightVectorBar: "⥓",
      ring: "˚",
      risingdotseq: "≓",
      rlarr: "⇄",
      rlhar: "⇌",
      rlm: "‏",
      rmoust: "⎱",
      rmoustache: "⎱",
      rnmid: "⫮",
      roang: "⟭",
      roarr: "⇾",
      robrk: "⟧",
      ropar: "⦆",
      Ropf: "ℝ",
      ropf: "𝕣",
      roplus: "⨮",
      rotimes: "⨵",
      RoundImplies: "⥰",
      rpar: ")",
      rpargt: "⦔",
      rppolint: "⨒",
      rrarr: "⇉",
      Rrightarrow: "⇛",
      rsaquo: "›",
      Rscr: "ℛ",
      rscr: "𝓇",
      Rsh: "↱",
      rsh: "↱",
      rsqb: "]",
      rsquo: "’",
      rsquor: "’",
      rthree: "⋌",
      rtimes: "⋊",
      rtri: "▹",
      rtrie: "⊵",
      rtrif: "▸",
      rtriltri: "⧎",
      RuleDelayed: "⧴",
      ruluhar: "⥨",
      rx: "℞",
      Sacute: "Ś",
      sacute: "ś",
      sbquo: "‚",
      Sc: "⪼",
      sc: "≻",
      scap: "⪸",
      Scaron: "Š",
      scaron: "š",
      sccue: "≽",
      scE: "⪴",
      sce: "⪰",
      Scedil: "Ş",
      scedil: "ş",
      Scirc: "Ŝ",
      scirc: "ŝ",
      scnap: "⪺",
      scnE: "⪶",
      scnsim: "⋩",
      scpolint: "⨓",
      scsim: "≿",
      Scy: "С",
      scy: "с",
      sdot: "⋅",
      sdotb: "⊡",
      sdote: "⩦",
      searhk: "⤥",
      seArr: "⇘",
      searr: "↘",
      searrow: "↘",
      sect: "§",
      semi: ";",
      seswar: "⤩",
      setminus: "∖",
      setmn: "∖",
      sext: "✶",
      Sfr: "𝔖",
      sfr: "𝔰",
      sfrown: "⌢",
      sharp: "♯",
      SHCHcy: "Щ",
      shchcy: "щ",
      SHcy: "Ш",
      shcy: "ш",
      ShortDownArrow: "↓",
      ShortLeftArrow: "←",
      shortmid: "∣",
      shortparallel: "∥",
      ShortRightArrow: "→",
      ShortUpArrow: "↑",
      shy: "­",
      Sigma: "Σ",
      sigma: "σ",
      sigmaf: "ς",
      sigmav: "ς",
      sim: "∼",
      simdot: "⩪",
      sime: "≃",
      simeq: "≃",
      simg: "⪞",
      simgE: "⪠",
      siml: "⪝",
      simlE: "⪟",
      simne: "≆",
      simplus: "⨤",
      simrarr: "⥲",
      slarr: "←",
      SmallCircle: "∘",
      smallsetminus: "∖",
      smashp: "⨳",
      smeparsl: "⧤",
      smid: "∣",
      smile: "⌣",
      smt: "⪪",
      smte: "⪬",
      smtes: "⪬︀",
      SOFTcy: "Ь",
      softcy: "ь",
      sol: "/",
      solb: "⧄",
      solbar: "⌿",
      Sopf: "𝕊",
      sopf: "𝕤",
      spades: "♠",
      spadesuit: "♠",
      spar: "∥",
      sqcap: "⊓",
      sqcaps: "⊓︀",
      sqcup: "⊔",
      sqcups: "⊔︀",
      Sqrt: "√",
      sqsub: "⊏",
      sqsube: "⊑",
      sqsubset: "⊏",
      sqsubseteq: "⊑",
      sqsup: "⊐",
      sqsupe: "⊒",
      sqsupset: "⊐",
      sqsupseteq: "⊒",
      squ: "□",
      Square: "□",
      square: "□",
      SquareIntersection: "⊓",
      SquareSubset: "⊏",
      SquareSubsetEqual: "⊑",
      SquareSuperset: "⊐",
      SquareSupersetEqual: "⊒",
      SquareUnion: "⊔",
      squarf: "▪",
      squf: "▪",
      srarr: "→",
      Sscr: "𝒮",
      sscr: "𝓈",
      ssetmn: "∖",
      ssmile: "⌣",
      sstarf: "⋆",
      Star: "⋆",
      star: "☆",
      starf: "★",
      straightepsilon: "ϵ",
      straightphi: "ϕ",
      strns: "¯",
      Sub: "⋐",
      sub: "⊂",
      subdot: "⪽",
      subE: "⫅",
      sube: "⊆",
      subedot: "⫃",
      submult: "⫁",
      subnE: "⫋",
      subne: "⊊",
      subplus: "⪿",
      subrarr: "⥹",
      Subset: "⋐",
      subset: "⊂",
      subseteq: "⊆",
      subseteqq: "⫅",
      SubsetEqual: "⊆",
      subsetneq: "⊊",
      subsetneqq: "⫋",
      subsim: "⫇",
      subsub: "⫕",
      subsup: "⫓",
      succ: "≻",
      succapprox: "⪸",
      succcurlyeq: "≽",
      Succeeds: "≻",
      SucceedsEqual: "⪰",
      SucceedsSlantEqual: "≽",
      SucceedsTilde: "≿",
      succeq: "⪰",
      succnapprox: "⪺",
      succneqq: "⪶",
      succnsim: "⋩",
      succsim: "≿",
      SuchThat: "∋",
      Sum: "∑",
      sum: "∑",
      sung: "♪",
      Sup: "⋑",
      sup: "⊃",
      sup1: "¹",
      sup2: "²",
      sup3: "³",
      supdot: "⪾",
      supdsub: "⫘",
      supE: "⫆",
      supe: "⊇",
      supedot: "⫄",
      Superset: "⊃",
      SupersetEqual: "⊇",
      suphsol: "⟉",
      suphsub: "⫗",
      suplarr: "⥻",
      supmult: "⫂",
      supnE: "⫌",
      supne: "⊋",
      supplus: "⫀",
      Supset: "⋑",
      supset: "⊃",
      supseteq: "⊇",
      supseteqq: "⫆",
      supsetneq: "⊋",
      supsetneqq: "⫌",
      supsim: "⫈",
      supsub: "⫔",
      supsup: "⫖",
      swarhk: "⤦",
      swArr: "⇙",
      swarr: "↙",
      swarrow: "↙",
      swnwar: "⤪",
      szlig: "ß",
      Tab: "	",
      target: "⌖",
      Tau: "Τ",
      tau: "τ",
      tbrk: "⎴",
      Tcaron: "Ť",
      tcaron: "ť",
      Tcedil: "Ţ",
      tcedil: "ţ",
      Tcy: "Т",
      tcy: "т",
      tdot: "⃛",
      telrec: "⌕",
      Tfr: "𝔗",
      tfr: "𝔱",
      there4: "∴",
      Therefore: "∴",
      therefore: "∴",
      Theta: "Θ",
      theta: "θ",
      thetasym: "ϑ",
      thetav: "ϑ",
      thickapprox: "≈",
      thicksim: "∼",
      ThickSpace: "  ",
      thinsp: " ",
      ThinSpace: " ",
      thkap: "≈",
      thksim: "∼",
      THORN: "Þ",
      thorn: "þ",
      Tilde: "∼",
      tilde: "˜",
      TildeEqual: "≃",
      TildeFullEqual: "≅",
      TildeTilde: "≈",
      times: "×",
      timesb: "⊠",
      timesbar: "⨱",
      timesd: "⨰",
      tint: "∭",
      toea: "⤨",
      top: "⊤",
      topbot: "⌶",
      topcir: "⫱",
      Topf: "𝕋",
      topf: "𝕥",
      topfork: "⫚",
      tosa: "⤩",
      tprime: "‴",
      TRADE: "™",
      trade: "™",
      triangle: "▵",
      triangledown: "▿",
      triangleleft: "◃",
      trianglelefteq: "⊴",
      triangleq: "≜",
      triangleright: "▹",
      trianglerighteq: "⊵",
      tridot: "◬",
      trie: "≜",
      triminus: "⨺",
      TripleDot: "⃛",
      triplus: "⨹",
      trisb: "⧍",
      tritime: "⨻",
      trpezium: "⏢",
      Tscr: "𝒯",
      tscr: "𝓉",
      TScy: "Ц",
      tscy: "ц",
      TSHcy: "Ћ",
      tshcy: "ћ",
      Tstrok: "Ŧ",
      tstrok: "ŧ",
      twixt: "≬",
      twoheadleftarrow: "↞",
      twoheadrightarrow: "↠",
      Uacute: "Ú",
      uacute: "ú",
      Uarr: "↟",
      uArr: "⇑",
      uarr: "↑",
      Uarrocir: "⥉",
      Ubrcy: "Ў",
      ubrcy: "ў",
      Ubreve: "Ŭ",
      ubreve: "ŭ",
      Ucirc: "Û",
      ucirc: "û",
      Ucy: "У",
      ucy: "у",
      udarr: "⇅",
      Udblac: "Ű",
      udblac: "ű",
      udhar: "⥮",
      ufisht: "⥾",
      Ufr: "𝔘",
      ufr: "𝔲",
      Ugrave: "Ù",
      ugrave: "ù",
      uHar: "⥣",
      uharl: "↿",
      uharr: "↾",
      uhblk: "▀",
      ulcorn: "⌜",
      ulcorner: "⌜",
      ulcrop: "⌏",
      ultri: "◸",
      Umacr: "Ū",
      umacr: "ū",
      uml: "¨",
      UnderBar: "_",
      UnderBrace: "⏟",
      UnderBracket: "⎵",
      UnderParenthesis: "⏝",
      Union: "⋃",
      UnionPlus: "⊎",
      Uogon: "Ų",
      uogon: "ų",
      Uopf: "𝕌",
      uopf: "𝕦",
      UpArrow: "↑",
      Uparrow: "⇑",
      uparrow: "↑",
      UpArrowBar: "⤒",
      UpArrowDownArrow: "⇅",
      UpDownArrow: "↕",
      Updownarrow: "⇕",
      updownarrow: "↕",
      UpEquilibrium: "⥮",
      upharpoonleft: "↿",
      upharpoonright: "↾",
      uplus: "⊎",
      UpperLeftArrow: "↖",
      UpperRightArrow: "↗",
      Upsi: "ϒ",
      upsi: "υ",
      upsih: "ϒ",
      Upsilon: "Υ",
      upsilon: "υ",
      UpTee: "⊥",
      UpTeeArrow: "↥",
      upuparrows: "⇈",
      urcorn: "⌝",
      urcorner: "⌝",
      urcrop: "⌎",
      Uring: "Ů",
      uring: "ů",
      urtri: "◹",
      Uscr: "𝒰",
      uscr: "𝓊",
      utdot: "⋰",
      Utilde: "Ũ",
      utilde: "ũ",
      utri: "▵",
      utrif: "▴",
      uuarr: "⇈",
      Uuml: "Ü",
      uuml: "ü",
      uwangle: "⦧",
      vangrt: "⦜",
      varepsilon: "ϵ",
      varkappa: "ϰ",
      varnothing: "∅",
      varphi: "ϕ",
      varpi: "ϖ",
      varpropto: "∝",
      vArr: "⇕",
      varr: "↕",
      varrho: "ϱ",
      varsigma: "ς",
      varsubsetneq: "⊊︀",
      varsubsetneqq: "⫋︀",
      varsupsetneq: "⊋︀",
      varsupsetneqq: "⫌︀",
      vartheta: "ϑ",
      vartriangleleft: "⊲",
      vartriangleright: "⊳",
      Vbar: "⫫",
      vBar: "⫨",
      vBarv: "⫩",
      Vcy: "В",
      vcy: "в",
      VDash: "⊫",
      Vdash: "⊩",
      vDash: "⊨",
      vdash: "⊢",
      Vdashl: "⫦",
      Vee: "⋁",
      vee: "∨",
      veebar: "⊻",
      veeeq: "≚",
      vellip: "⋮",
      Verbar: "‖",
      verbar: "|",
      Vert: "‖",
      vert: "|",
      VerticalBar: "∣",
      VerticalLine: "|",
      VerticalSeparator: "❘",
      VerticalTilde: "≀",
      VeryThinSpace: " ",
      Vfr: "𝔙",
      vfr: "𝔳",
      vltri: "⊲",
      vnsub: "⊂⃒",
      vnsup: "⊃⃒",
      Vopf: "𝕍",
      vopf: "𝕧",
      vprop: "∝",
      vrtri: "⊳",
      Vscr: "𝒱",
      vscr: "𝓋",
      vsubnE: "⫋︀",
      vsubne: "⊊︀",
      vsupnE: "⫌︀",
      vsupne: "⊋︀",
      Vvdash: "⊪",
      vzigzag: "⦚",
      Wcirc: "Ŵ",
      wcirc: "ŵ",
      wedbar: "⩟",
      Wedge: "⋀",
      wedge: "∧",
      wedgeq: "≙",
      weierp: "℘",
      Wfr: "𝔚",
      wfr: "𝔴",
      Wopf: "𝕎",
      wopf: "𝕨",
      wp: "℘",
      wr: "≀",
      wreath: "≀",
      Wscr: "𝒲",
      wscr: "𝓌",
      xcap: "⋂",
      xcirc: "◯",
      xcup: "⋃",
      xdtri: "▽",
      Xfr: "𝔛",
      xfr: "𝔵",
      xhArr: "⟺",
      xharr: "⟷",
      Xi: "Ξ",
      xi: "ξ",
      xlArr: "⟸",
      xlarr: "⟵",
      xmap: "⟼",
      xnis: "⋻",
      xodot: "⨀",
      Xopf: "𝕏",
      xopf: "𝕩",
      xoplus: "⨁",
      xotime: "⨂",
      xrArr: "⟹",
      xrarr: "⟶",
      Xscr: "𝒳",
      xscr: "𝓍",
      xsqcup: "⨆",
      xuplus: "⨄",
      xutri: "△",
      xvee: "⋁",
      xwedge: "⋀",
      Yacute: "Ý",
      yacute: "ý",
      YAcy: "Я",
      yacy: "я",
      Ycirc: "Ŷ",
      ycirc: "ŷ",
      Ycy: "Ы",
      ycy: "ы",
      yen: "¥",
      Yfr: "𝔜",
      yfr: "𝔶",
      YIcy: "Ї",
      yicy: "ї",
      Yopf: "𝕐",
      yopf: "𝕪",
      Yscr: "𝒴",
      yscr: "𝓎",
      YUcy: "Ю",
      yucy: "ю",
      Yuml: "Ÿ",
      yuml: "ÿ",
      Zacute: "Ź",
      zacute: "ź",
      Zcaron: "Ž",
      zcaron: "ž",
      Zcy: "З",
      zcy: "з",
      Zdot: "Ż",
      zdot: "ż",
      zeetrf: "ℨ",
      ZeroWidthSpace: "​",
      Zeta: "Ζ",
      zeta: "ζ",
      Zfr: "ℨ",
      zfr: "𝔷",
      ZHcy: "Ж",
      zhcy: "ж",
      zigrarr: "⇝",
      Zopf: "ℤ",
      zopf: "𝕫",
      Zscr: "𝒵",
      zscr: "𝓏",
      zwj: "‍",
      zwnj: "‌"
    });
    exports.entityMap = exports.HTML_ENTITIES;
  }
});

// node_modules/@xmldom/xmldom/lib/sax.js
var require_sax = __commonJS({
  "node_modules/@xmldom/xmldom/lib/sax.js"(exports) {
    var NAMESPACE = require_conventions().NAMESPACE;
    var nameStartChar = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/;
    var nameChar = new RegExp("[\\-\\.0-9" + nameStartChar.source.slice(1, -1) + "\\u00B7\\u0300-\\u036F\\u203F-\\u2040]");
    var tagNamePattern = new RegExp("^" + nameStartChar.source + nameChar.source + "*(?::" + nameStartChar.source + nameChar.source + "*)?$");
    var S_TAG = 0;
    var S_ATTR = 1;
    var S_ATTR_SPACE = 2;
    var S_EQ = 3;
    var S_ATTR_NOQUOT_VALUE = 4;
    var S_ATTR_END = 5;
    var S_TAG_SPACE = 6;
    var S_TAG_CLOSE = 7;
    function ParseError(message, locator) {
      this.message = message;
      this.locator = locator;
      if (Error.captureStackTrace) Error.captureStackTrace(this, ParseError);
    }
    ParseError.prototype = new Error();
    ParseError.prototype.name = ParseError.name;
    function XMLReader() {
    }
    XMLReader.prototype = {
      parse: function(source7, defaultNSMap, entityMap) {
        var domBuilder = this.domBuilder;
        domBuilder.startDocument();
        _copy(defaultNSMap, defaultNSMap = {});
        parse(
          source7,
          defaultNSMap,
          entityMap,
          domBuilder,
          this.errorHandler
        );
        domBuilder.endDocument();
      }
    };
    function parse(source7, defaultNSMapCopy, entityMap, domBuilder, errorHandler) {
      function fixedFromCharCode(code) {
        if (code > 65535) {
          code -= 65536;
          var surrogate1 = 55296 + (code >> 10), surrogate2 = 56320 + (code & 1023);
          return String.fromCharCode(surrogate1, surrogate2);
        } else {
          return String.fromCharCode(code);
        }
      }
      function entityReplacer(a2) {
        var k = a2.slice(1, -1);
        if (Object.hasOwnProperty.call(entityMap, k)) {
          return entityMap[k];
        } else if (k.charAt(0) === "#") {
          return fixedFromCharCode(parseInt(k.substr(1).replace("x", "0x")));
        } else {
          errorHandler.error("entity not found:" + a2);
          return a2;
        }
      }
      function appendText(end2) {
        if (end2 > start) {
          var xt = source7.substring(start, end2).replace(/&#?\w+;/g, entityReplacer);
          locator && position(start);
          domBuilder.characters(xt, 0, end2 - start);
          start = end2;
        }
      }
      function position(p, m) {
        while (p >= lineEnd && (m = linePattern.exec(source7))) {
          lineStart = m.index;
          lineEnd = lineStart + m[0].length;
          locator.lineNumber++;
        }
        locator.columnNumber = p - lineStart + 1;
      }
      var lineStart = 0;
      var lineEnd = 0;
      var linePattern = /.*(?:\r\n?|\n)|.*$/g;
      var locator = domBuilder.locator;
      var parseStack = [{ currentNSMap: defaultNSMapCopy }];
      var closeMap = {};
      var start = 0;
      while (true) {
        try {
          var tagStart = source7.indexOf("<", start);
          if (tagStart < 0) {
            if (!source7.substr(start).match(/^\s*$/)) {
              var doc = domBuilder.doc;
              var text = doc.createTextNode(source7.substr(start));
              doc.appendChild(text);
              domBuilder.currentElement = text;
            }
            return;
          }
          if (tagStart > start) {
            appendText(tagStart);
          }
          switch (source7.charAt(tagStart + 1)) {
            case "/":
              var end = source7.indexOf(">", tagStart + 3);
              var tagName = source7.substring(tagStart + 2, end).replace(/[ \t\n\r]+$/g, "");
              var config = parseStack.pop();
              if (end < 0) {
                tagName = source7.substring(tagStart + 2).replace(/[\s<].*/, "");
                errorHandler.error("end tag name: " + tagName + " is not complete:" + config.tagName);
                end = tagStart + 1 + tagName.length;
              } else if (tagName.match(/\s</)) {
                tagName = tagName.replace(/[\s<].*/, "");
                errorHandler.error("end tag name: " + tagName + " maybe not complete");
                end = tagStart + 1 + tagName.length;
              }
              var localNSMap = config.localNSMap;
              var endMatch = config.tagName == tagName;
              var endIgnoreCaseMach = endMatch || config.tagName && config.tagName.toLowerCase() == tagName.toLowerCase();
              if (endIgnoreCaseMach) {
                domBuilder.endElement(config.uri, config.localName, tagName);
                if (localNSMap) {
                  for (var prefix in localNSMap) {
                    if (Object.prototype.hasOwnProperty.call(localNSMap, prefix)) {
                      domBuilder.endPrefixMapping(prefix);
                    }
                  }
                }
                if (!endMatch) {
                  errorHandler.fatalError("end tag name: " + tagName + " is not match the current start tagName:" + config.tagName);
                }
              } else {
                parseStack.push(config);
              }
              end++;
              break;
            case "?":
              locator && position(tagStart);
              end = parseInstruction(source7, tagStart, domBuilder);
              break;
            case "!":
              locator && position(tagStart);
              end = parseDCC(source7, tagStart, domBuilder, errorHandler);
              break;
            default:
              locator && position(tagStart);
              var el = new ElementAttributes();
              var currentNSMap = parseStack[parseStack.length - 1].currentNSMap;
              var end = parseElementStartPart(source7, tagStart, el, currentNSMap, entityReplacer, errorHandler);
              var len = el.length;
              if (!el.closed && fixSelfClosed(source7, end, el.tagName, closeMap)) {
                el.closed = true;
                if (!entityMap.nbsp) {
                  errorHandler.warning("unclosed xml attribute");
                }
              }
              if (locator && len) {
                var locator2 = copyLocator(locator, {});
                for (var i = 0; i < len; i++) {
                  var a = el[i];
                  position(a.offset);
                  a.locator = copyLocator(locator, {});
                }
                domBuilder.locator = locator2;
                if (appendElement(el, domBuilder, currentNSMap)) {
                  parseStack.push(el);
                }
                domBuilder.locator = locator;
              } else {
                if (appendElement(el, domBuilder, currentNSMap)) {
                  parseStack.push(el);
                }
              }
              if (NAMESPACE.isHTML(el.uri) && !el.closed) {
                end = parseHtmlSpecialContent(source7, end, el.tagName, entityReplacer, domBuilder);
              } else {
                end++;
              }
          }
        } catch (e) {
          if (e instanceof ParseError) {
            throw e;
          }
          errorHandler.error("element parse error: " + e);
          end = -1;
        }
        if (end > start) {
          start = end;
        } else {
          appendText(Math.max(tagStart, start) + 1);
        }
      }
    }
    function copyLocator(f, t) {
      t.lineNumber = f.lineNumber;
      t.columnNumber = f.columnNumber;
      return t;
    }
    function parseElementStartPart(source7, start, el, currentNSMap, entityReplacer, errorHandler) {
      function addAttribute(qname, value2, startIndex) {
        if (el.attributeNames.hasOwnProperty(qname)) {
          errorHandler.fatalError("Attribute " + qname + " redefined");
        }
        el.addValue(
          qname,
          // @see https://www.w3.org/TR/xml/#AVNormalize
          // since the xmldom sax parser does not "interpret" DTD the following is not implemented:
          // - recursive replacement of (DTD) entity references
          // - trimming and collapsing multiple spaces into a single one for attributes that are not of type CDATA
          value2.replace(/[\t\n\r]/g, " ").replace(/&#?\w+;/g, entityReplacer),
          startIndex
        );
      }
      var attrName;
      var value;
      var p = ++start;
      var s = S_TAG;
      while (true) {
        var c = source7.charAt(p);
        switch (c) {
          case "=":
            if (s === S_ATTR) {
              attrName = source7.slice(start, p);
              s = S_EQ;
            } else if (s === S_ATTR_SPACE) {
              s = S_EQ;
            } else {
              throw new Error("attribute equal must after attrName");
            }
            break;
          case "'":
          case '"':
            if (s === S_EQ || s === S_ATTR) {
              if (s === S_ATTR) {
                errorHandler.warning('attribute value must after "="');
                attrName = source7.slice(start, p);
              }
              start = p + 1;
              p = source7.indexOf(c, start);
              if (p > 0) {
                value = source7.slice(start, p);
                addAttribute(attrName, value, start - 1);
                s = S_ATTR_END;
              } else {
                throw new Error("attribute value no end '" + c + "' match");
              }
            } else if (s == S_ATTR_NOQUOT_VALUE) {
              value = source7.slice(start, p);
              addAttribute(attrName, value, start);
              errorHandler.warning('attribute "' + attrName + '" missed start quot(' + c + ")!!");
              start = p + 1;
              s = S_ATTR_END;
            } else {
              throw new Error('attribute value must after "="');
            }
            break;
          case "/":
            switch (s) {
              case S_TAG:
                el.setTagName(source7.slice(start, p));
              case S_ATTR_END:
              case S_TAG_SPACE:
              case S_TAG_CLOSE:
                s = S_TAG_CLOSE;
                el.closed = true;
              case S_ATTR_NOQUOT_VALUE:
              case S_ATTR:
                break;
              case S_ATTR_SPACE:
                el.closed = true;
                break;
              default:
                throw new Error("attribute invalid close char('/')");
            }
            break;
          case "":
            errorHandler.error("unexpected end of input");
            if (s == S_TAG) {
              el.setTagName(source7.slice(start, p));
            }
            return p;
          case ">":
            switch (s) {
              case S_TAG:
                el.setTagName(source7.slice(start, p));
              case S_ATTR_END:
              case S_TAG_SPACE:
              case S_TAG_CLOSE:
                break;
              case S_ATTR_NOQUOT_VALUE:
              case S_ATTR:
                value = source7.slice(start, p);
                if (value.slice(-1) === "/") {
                  el.closed = true;
                  value = value.slice(0, -1);
                }
              case S_ATTR_SPACE:
                if (s === S_ATTR_SPACE) {
                  value = attrName;
                }
                if (s == S_ATTR_NOQUOT_VALUE) {
                  errorHandler.warning('attribute "' + value + '" missed quot(")!');
                  addAttribute(attrName, value, start);
                } else {
                  if (!NAMESPACE.isHTML(currentNSMap[""]) || !value.match(/^(?:disabled|checked|selected)$/i)) {
                    errorHandler.warning('attribute "' + value + '" missed value!! "' + value + '" instead!!');
                  }
                  addAttribute(value, value, start);
                }
                break;
              case S_EQ:
                throw new Error("attribute value missed!!");
            }
            return p;
          case "":
            c = " ";
          default:
            if (c <= " ") {
              switch (s) {
                case S_TAG:
                  el.setTagName(source7.slice(start, p));
                  s = S_TAG_SPACE;
                  break;
                case S_ATTR:
                  attrName = source7.slice(start, p);
                  s = S_ATTR_SPACE;
                  break;
                case S_ATTR_NOQUOT_VALUE:
                  var value = source7.slice(start, p);
                  errorHandler.warning('attribute "' + value + '" missed quot(")!!');
                  addAttribute(attrName, value, start);
                case S_ATTR_END:
                  s = S_TAG_SPACE;
                  break;
              }
            } else {
              switch (s) {
                case S_ATTR_SPACE:
                  var tagName = el.tagName;
                  if (!NAMESPACE.isHTML(currentNSMap[""]) || !attrName.match(/^(?:disabled|checked|selected)$/i)) {
                    errorHandler.warning('attribute "' + attrName + '" missed value!! "' + attrName + '" instead2!!');
                  }
                  addAttribute(attrName, attrName, start);
                  start = p;
                  s = S_ATTR;
                  break;
                case S_ATTR_END:
                  errorHandler.warning('attribute space is required"' + attrName + '"!!');
                case S_TAG_SPACE:
                  s = S_ATTR;
                  start = p;
                  break;
                case S_EQ:
                  s = S_ATTR_NOQUOT_VALUE;
                  start = p;
                  break;
                case S_TAG_CLOSE:
                  throw new Error("elements closed character '/' and '>' must be connected to");
              }
            }
        }
        p++;
      }
    }
    function appendElement(el, domBuilder, currentNSMap) {
      var tagName = el.tagName;
      var localNSMap = null;
      var i = el.length;
      while (i--) {
        var a = el[i];
        var qName = a.qName;
        var value = a.value;
        var nsp = qName.indexOf(":");
        if (nsp > 0) {
          var prefix = a.prefix = qName.slice(0, nsp);
          var localName = qName.slice(nsp + 1);
          var nsPrefix = prefix === "xmlns" && localName;
        } else {
          localName = qName;
          prefix = null;
          nsPrefix = qName === "xmlns" && "";
        }
        a.localName = localName;
        if (nsPrefix !== false) {
          if (localNSMap == null) {
            localNSMap = {};
            _copy(currentNSMap, currentNSMap = {});
          }
          currentNSMap[nsPrefix] = localNSMap[nsPrefix] = value;
          a.uri = NAMESPACE.XMLNS;
          domBuilder.startPrefixMapping(nsPrefix, value);
        }
      }
      var i = el.length;
      while (i--) {
        a = el[i];
        var prefix = a.prefix;
        if (prefix) {
          if (prefix === "xml") {
            a.uri = NAMESPACE.XML;
          }
          if (prefix !== "xmlns") {
            a.uri = currentNSMap[prefix || ""];
          }
        }
      }
      var nsp = tagName.indexOf(":");
      if (nsp > 0) {
        prefix = el.prefix = tagName.slice(0, nsp);
        localName = el.localName = tagName.slice(nsp + 1);
      } else {
        prefix = null;
        localName = el.localName = tagName;
      }
      var ns = el.uri = currentNSMap[prefix || ""];
      domBuilder.startElement(ns, localName, tagName, el);
      if (el.closed) {
        domBuilder.endElement(ns, localName, tagName);
        if (localNSMap) {
          for (prefix in localNSMap) {
            if (Object.prototype.hasOwnProperty.call(localNSMap, prefix)) {
              domBuilder.endPrefixMapping(prefix);
            }
          }
        }
      } else {
        el.currentNSMap = currentNSMap;
        el.localNSMap = localNSMap;
        return true;
      }
    }
    function parseHtmlSpecialContent(source7, elStartEnd, tagName, entityReplacer, domBuilder) {
      if (/^(?:script|textarea)$/i.test(tagName)) {
        var elEndStart = source7.indexOf("</" + tagName + ">", elStartEnd);
        var text = source7.substring(elStartEnd + 1, elEndStart);
        if (/[&<]/.test(text)) {
          if (/^script$/i.test(tagName)) {
            domBuilder.characters(text, 0, text.length);
            return elEndStart;
          }
          text = text.replace(/&#?\w+;/g, entityReplacer);
          domBuilder.characters(text, 0, text.length);
          return elEndStart;
        }
      }
      return elStartEnd + 1;
    }
    function fixSelfClosed(source7, elStartEnd, tagName, closeMap) {
      var pos = closeMap[tagName];
      if (pos == null) {
        pos = source7.lastIndexOf("</" + tagName + ">");
        if (pos < elStartEnd) {
          pos = source7.lastIndexOf("</" + tagName);
        }
        closeMap[tagName] = pos;
      }
      return pos < elStartEnd;
    }
    function _copy(source7, target) {
      for (var n in source7) {
        if (Object.prototype.hasOwnProperty.call(source7, n)) {
          target[n] = source7[n];
        }
      }
    }
    function parseDCC(source7, start, domBuilder, errorHandler) {
      var next = source7.charAt(start + 2);
      switch (next) {
        case "-":
          if (source7.charAt(start + 3) === "-") {
            var end = source7.indexOf("-->", start + 4);
            if (end > start) {
              domBuilder.comment(source7, start + 4, end - start - 4);
              return end + 3;
            } else {
              errorHandler.error("Unclosed comment");
              return -1;
            }
          } else {
            return -1;
          }
        default:
          if (source7.substr(start + 3, 6) == "CDATA[") {
            var end = source7.indexOf("]]>", start + 9);
            domBuilder.startCDATA();
            domBuilder.characters(source7, start + 9, end - start - 9);
            domBuilder.endCDATA();
            return end + 3;
          }
          var matchs = split(source7, start);
          var len = matchs.length;
          if (len > 1 && /!doctype/i.test(matchs[0][0])) {
            var name = matchs[1][0];
            var pubid = false;
            var sysid = false;
            if (len > 3) {
              if (/^public$/i.test(matchs[2][0])) {
                pubid = matchs[3][0];
                sysid = len > 4 && matchs[4][0];
              } else if (/^system$/i.test(matchs[2][0])) {
                sysid = matchs[3][0];
              }
            }
            var lastMatch = matchs[len - 1];
            domBuilder.startDTD(name, pubid, sysid);
            domBuilder.endDTD();
            return lastMatch.index + lastMatch[0].length;
          }
      }
      return -1;
    }
    function parseInstruction(source7, start, domBuilder) {
      var end = source7.indexOf("?>", start);
      if (end) {
        var match = source7.substring(start, end).match(/^<\?(\S*)\s*([\s\S]*?)\s*$/);
        if (match) {
          var len = match[0].length;
          domBuilder.processingInstruction(match[1], match[2]);
          return end + 2;
        } else {
          return -1;
        }
      }
      return -1;
    }
    function ElementAttributes() {
      this.attributeNames = {};
    }
    ElementAttributes.prototype = {
      setTagName: function(tagName) {
        if (!tagNamePattern.test(tagName)) {
          throw new Error("invalid tagName:" + tagName);
        }
        this.tagName = tagName;
      },
      addValue: function(qName, value, offset) {
        if (!tagNamePattern.test(qName)) {
          throw new Error("invalid attribute:" + qName);
        }
        this.attributeNames[qName] = this.length;
        this[this.length++] = { qName, value, offset };
      },
      length: 0,
      getLocalName: function(i) {
        return this[i].localName;
      },
      getLocator: function(i) {
        return this[i].locator;
      },
      getQName: function(i) {
        return this[i].qName;
      },
      getURI: function(i) {
        return this[i].uri;
      },
      getValue: function(i) {
        return this[i].value;
      }
      //	,getIndex:function(uri, localName)){
      //		if(localName){
      //
      //		}else{
      //			var qName = uri
      //		}
      //	},
      //	getValue:function(){return this.getValue(this.getIndex.apply(this,arguments))},
      //	getType:function(uri,localName){}
      //	getType:function(i){},
    };
    function split(source7, start) {
      var match;
      var buf = [];
      var reg = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
      reg.lastIndex = start;
      reg.exec(source7);
      while (match = reg.exec(source7)) {
        buf.push(match);
        if (match[1]) return buf;
      }
    }
    exports.XMLReader = XMLReader;
    exports.ParseError = ParseError;
  }
});

// node_modules/@xmldom/xmldom/lib/dom-parser.js
var require_dom_parser = __commonJS({
  "node_modules/@xmldom/xmldom/lib/dom-parser.js"(exports) {
    var conventions = require_conventions();
    var dom = require_dom();
    var entities = require_entities();
    var sax = require_sax();
    var DOMImplementation = dom.DOMImplementation;
    var NAMESPACE = conventions.NAMESPACE;
    var ParseError = sax.ParseError;
    var XMLReader = sax.XMLReader;
    function normalizeLineEndings(input) {
      return input.replace(/\r[\n\u0085]/g, "\n").replace(/[\r\u0085\u2028]/g, "\n");
    }
    function DOMParser2(options) {
      this.options = options || { locator: {} };
    }
    DOMParser2.prototype.parseFromString = function(source7, mimeType) {
      var options = this.options;
      var sax2 = new XMLReader();
      var domBuilder = options.domBuilder || new DOMHandler();
      var errorHandler = options.errorHandler;
      var locator = options.locator;
      var defaultNSMap = options.xmlns || {};
      var isHTML = /\/x?html?$/.test(mimeType);
      var entityMap = isHTML ? entities.HTML_ENTITIES : entities.XML_ENTITIES;
      if (locator) {
        domBuilder.setDocumentLocator(locator);
      }
      sax2.errorHandler = buildErrorHandler(errorHandler, domBuilder, locator);
      sax2.domBuilder = options.domBuilder || domBuilder;
      if (isHTML) {
        defaultNSMap[""] = NAMESPACE.HTML;
      }
      defaultNSMap.xml = defaultNSMap.xml || NAMESPACE.XML;
      var normalize = options.normalizeLineEndings || normalizeLineEndings;
      if (source7 && typeof source7 === "string") {
        sax2.parse(
          normalize(source7),
          defaultNSMap,
          entityMap
        );
      } else {
        sax2.errorHandler.error("invalid doc source");
      }
      return domBuilder.doc;
    };
    function buildErrorHandler(errorImpl, domBuilder, locator) {
      if (!errorImpl) {
        if (domBuilder instanceof DOMHandler) {
          return domBuilder;
        }
        errorImpl = domBuilder;
      }
      var errorHandler = {};
      var isCallback = errorImpl instanceof Function;
      locator = locator || {};
      function build(key) {
        var fn = errorImpl[key];
        if (!fn && isCallback) {
          fn = errorImpl.length == 2 ? function(msg) {
            errorImpl(key, msg);
          } : errorImpl;
        }
        errorHandler[key] = fn && function(msg) {
          fn("[xmldom " + key + "]	" + msg + _locator(locator));
        } || function() {
        };
      }
      build("warning");
      build("error");
      build("fatalError");
      return errorHandler;
    }
    function DOMHandler() {
      this.cdata = false;
    }
    function position(locator, node) {
      node.lineNumber = locator.lineNumber;
      node.columnNumber = locator.columnNumber;
    }
    DOMHandler.prototype = {
      startDocument: function() {
        this.doc = new DOMImplementation().createDocument(null, null, null);
        if (this.locator) {
          this.doc.documentURI = this.locator.systemId;
        }
      },
      startElement: function(namespaceURI, localName, qName, attrs) {
        var doc = this.doc;
        var el = doc.createElementNS(namespaceURI, qName || localName);
        var len = attrs.length;
        appendElement(this, el);
        this.currentElement = el;
        this.locator && position(this.locator, el);
        for (var i = 0; i < len; i++) {
          var namespaceURI = attrs.getURI(i);
          var value = attrs.getValue(i);
          var qName = attrs.getQName(i);
          var attr = doc.createAttributeNS(namespaceURI, qName);
          this.locator && position(attrs.getLocator(i), attr);
          attr.value = attr.nodeValue = value;
          el.setAttributeNode(attr);
        }
      },
      endElement: function(namespaceURI, localName, qName) {
        var current = this.currentElement;
        var tagName = current.tagName;
        this.currentElement = current.parentNode;
      },
      startPrefixMapping: function(prefix, uri) {
      },
      endPrefixMapping: function(prefix) {
      },
      processingInstruction: function(target, data) {
        var ins = this.doc.createProcessingInstruction(target, data);
        this.locator && position(this.locator, ins);
        appendElement(this, ins);
      },
      ignorableWhitespace: function(ch, start, length) {
      },
      characters: function(chars, start, length) {
        chars = _toString.apply(this, arguments);
        if (chars) {
          if (this.cdata) {
            var charNode = this.doc.createCDATASection(chars);
          } else {
            var charNode = this.doc.createTextNode(chars);
          }
          if (this.currentElement) {
            this.currentElement.appendChild(charNode);
          } else if (/^\s*$/.test(chars)) {
            this.doc.appendChild(charNode);
          }
          this.locator && position(this.locator, charNode);
        }
      },
      skippedEntity: function(name) {
      },
      endDocument: function() {
        this.doc.normalize();
      },
      setDocumentLocator: function(locator) {
        if (this.locator = locator) {
          locator.lineNumber = 0;
        }
      },
      //LexicalHandler
      comment: function(chars, start, length) {
        chars = _toString.apply(this, arguments);
        var comm = this.doc.createComment(chars);
        this.locator && position(this.locator, comm);
        appendElement(this, comm);
      },
      startCDATA: function() {
        this.cdata = true;
      },
      endCDATA: function() {
        this.cdata = false;
      },
      startDTD: function(name, publicId, systemId) {
        var impl = this.doc.implementation;
        if (impl && impl.createDocumentType) {
          var dt = impl.createDocumentType(name, publicId, systemId);
          this.locator && position(this.locator, dt);
          appendElement(this, dt);
          this.doc.doctype = dt;
        }
      },
      /**
       * @see org.xml.sax.ErrorHandler
       * @link http://www.saxproject.org/apidoc/org/xml/sax/ErrorHandler.html
       */
      warning: function(error) {
        console.warn("[xmldom warning]	" + error, _locator(this.locator));
      },
      error: function(error) {
        console.error("[xmldom error]	" + error, _locator(this.locator));
      },
      fatalError: function(error) {
        throw new ParseError(error, this.locator);
      }
    };
    function _locator(l) {
      if (l) {
        return "\n@" + (l.systemId || "") + "#[line:" + l.lineNumber + ",col:" + l.columnNumber + "]";
      }
    }
    function _toString(chars, start, length) {
      if (typeof chars == "string") {
        return chars.substr(start, length);
      } else {
        if (chars.length >= start + length || start) {
          return new java.lang.String(chars, start, length) + "";
        }
        return chars;
      }
    }
    "endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl".replace(/\w+/g, function(key) {
      DOMHandler.prototype[key] = function() {
        return null;
      };
    });
    function appendElement(hander, node) {
      if (!hander.currentElement) {
        hander.doc.appendChild(node);
      } else {
        hander.currentElement.appendChild(node);
      }
    }
    exports.__DOMHandler = DOMHandler;
    exports.normalizeLineEndings = normalizeLineEndings;
    exports.DOMParser = DOMParser2;
  }
});

// node_modules/@xmldom/xmldom/lib/index.js
var require_lib = __commonJS({
  "node_modules/@xmldom/xmldom/lib/index.js"(exports) {
    var dom = require_dom();
    exports.DOMImplementation = dom.DOMImplementation;
    exports.XMLSerializer = dom.XMLSerializer;
    exports.DOMParser = require_dom_parser().DOMParser;
  }
});

// node_modules/pixi.js/lib/environment-browser/browserExt.mjs
var browserExt = {
  extension: {
    type: ExtensionType.Environment,
    name: "browser",
    priority: -1
  },
  test: () => true,
  load: async () => {
    await import("./browserAll-IYNZOLRJ.js");
  }
};

// node_modules/pixi.js/lib/environment-webworker/webworkerExt.mjs
var webworkerExt = {
  extension: {
    type: ExtensionType.Environment,
    name: "webworker",
    priority: 0
  },
  test: () => typeof self !== "undefined" && self.WorkerGlobalScope !== void 0,
  load: async () => {
    await import("./webworkerAll-HAZNK67A.js");
  }
};

// node_modules/pixi.js/lib/filters/blend-modes/blend-template.frag.mjs
var blendTemplateFrag = "\nin vec2 vTextureCoord;\nin vec4 vColor;\n\nout vec4 finalColor;\n\nuniform float uBlend;\n\nuniform sampler2D uTexture;\nuniform sampler2D uBackTexture;\n\n{FUNCTIONS}\n\nvoid main()\n{ \n    vec4 back = texture(uBackTexture, vTextureCoord);\n    vec4 front = texture(uTexture, vTextureCoord);\n    float blendedAlpha = front.a + back.a * (1.0 - front.a);\n    \n    {MAIN}\n}\n";

// node_modules/pixi.js/lib/filters/blend-modes/blend-template.vert.mjs
var blendTemplateVert = "in vec2 aPosition;\nout vec2 vTextureCoord;\nout vec2 backgroundUv;\n\nuniform vec4 uInputSize;\nuniform vec4 uOutputFrame;\nuniform vec4 uOutputTexture;\n\nvec4 filterVertexPosition( void )\n{\n    vec2 position = aPosition * uOutputFrame.zw + uOutputFrame.xy;\n    \n    position.x = position.x * (2.0 / uOutputTexture.x) - 1.0;\n    position.y = position.y * (2.0*uOutputTexture.z / uOutputTexture.y) - uOutputTexture.z;\n\n    return vec4(position, 0.0, 1.0);\n}\n\nvec2 filterTextureCoord( void )\n{\n    return aPosition * (uOutputFrame.zw * uInputSize.zw);\n}\n\nvoid main(void)\n{\n    gl_Position = filterVertexPosition();\n    vTextureCoord = filterTextureCoord();\n}\n";

// node_modules/pixi.js/lib/filters/blend-modes/blend-template.wgsl.mjs
var blendTemplate = "\nstruct GlobalFilterUniforms {\n  uInputSize:vec4<f32>,\n  uInputPixel:vec4<f32>,\n  uInputClamp:vec4<f32>,\n  uOutputFrame:vec4<f32>,\n  uGlobalFrame:vec4<f32>,\n  uOutputTexture:vec4<f32>,\n};\n\nstruct BlendUniforms {\n  uBlend:f32,\n};\n\n@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;\n@group(0) @binding(1) var uTexture: texture_2d<f32>;\n@group(0) @binding(2) var uSampler : sampler;\n@group(0) @binding(3) var uBackTexture: texture_2d<f32>;\n\n@group(1) @binding(0) var<uniform> blendUniforms : BlendUniforms;\n\n\nstruct VSOutput {\n    @builtin(position) position: vec4<f32>,\n    @location(0) uv : vec2<f32>\n  };\n\nfn filterVertexPosition(aPosition:vec2<f32>) -> vec4<f32>\n{\n    var position = aPosition * gfu.uOutputFrame.zw + gfu.uOutputFrame.xy;\n\n    position.x = position.x * (2.0 / gfu.uOutputTexture.x) - 1.0;\n    position.y = position.y * (2.0*gfu.uOutputTexture.z / gfu.uOutputTexture.y) - gfu.uOutputTexture.z;\n\n    return vec4(position, 0.0, 1.0);\n}\n\nfn filterTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>\n{\n    return aPosition * (gfu.uOutputFrame.zw * gfu.uInputSize.zw);\n}\n\nfn globalTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>\n{\n  return  (aPosition.xy / gfu.uGlobalFrame.zw) + (gfu.uGlobalFrame.xy / gfu.uGlobalFrame.zw);  \n}\n  \n@vertex\nfn mainVertex(\n  @location(0) aPosition : vec2<f32>, \n) -> VSOutput {\n  return VSOutput(\n   filterVertexPosition(aPosition),\n   filterTextureCoord(aPosition)\n  );\n}\n\n{FUNCTIONS}\n\n@fragment\nfn mainFragment(\n  @location(0) uv: vec2<f32>\n) -> @location(0) vec4<f32> {\n\n\n   var back =  textureSample(uBackTexture, uSampler, uv);\n   var front = textureSample(uTexture, uSampler, uv);\n   var blendedAlpha = front.a + back.a * (1.0 - front.a);\n   \n   var out = vec4<f32>(0.0,0.0,0.0,0.0);\n\n   {MAIN}\n\n   return out;\n}";

// node_modules/pixi.js/lib/filters/blend-modes/BlendModeFilter.mjs
var BlendModeFilter = class extends Filter {
  constructor(options) {
    const gpuOptions = options.gpu;
    const gpuSource = compileBlendModeShader({ source: blendTemplate, ...gpuOptions });
    const gpuProgram = GpuProgram.from({
      vertex: {
        source: gpuSource,
        entryPoint: "mainVertex"
      },
      fragment: {
        source: gpuSource,
        entryPoint: "mainFragment"
      }
    });
    const glOptions = options.gl;
    const glSource = compileBlendModeShader({ source: blendTemplateFrag, ...glOptions });
    const glProgram = GlProgram.from({
      vertex: blendTemplateVert,
      fragment: glSource
    });
    const uniformGroup = new UniformGroup({
      uBlend: {
        value: 1,
        type: "f32"
      }
    });
    super({
      gpuProgram,
      glProgram,
      blendRequired: true,
      resources: {
        blendUniforms: uniformGroup,
        uBackTexture: Texture.EMPTY
      }
    });
  }
};
function compileBlendModeShader(options) {
  const { source: source7, functions, main } = options;
  return source7.replace("{FUNCTIONS}", functions).replace("{MAIN}", main);
}

// node_modules/pixi.js/lib/filters/blend-modes/hls/GLhls.mjs
var hslgl = `
	float getLuminosity(vec3 c) {
		return 0.3 * c.r + 0.59 * c.g + 0.11 * c.b;
	}

	vec3 setLuminosity(vec3 c, float lum) {
		float modLum = lum - getLuminosity(c);
		vec3 color = c.rgb + vec3(modLum);

		// clip back into legal range
		modLum = getLuminosity(color);
		vec3 modLumVec = vec3(modLum);

		float cMin = min(color.r, min(color.g, color.b));
		float cMax = max(color.r, max(color.g, color.b));

		if(cMin < 0.0) {
			color = mix(modLumVec, color, modLum / (modLum - cMin));
		}

		if(cMax > 1.0) {
			color = mix(modLumVec, color, (1.0 - modLum) / (cMax - modLum));
		}

		return color;
	}

	float getSaturation(vec3 c) {
		return max(c.r, max(c.g, c.b)) - min(c.r, min(c.g, c.b));
	}

	vec3 setSaturationMinMidMax(vec3 cSorted, float s) {
		vec3 colorSorted = cSorted;

		if(colorSorted.z > colorSorted.x) {
			colorSorted.y = (((colorSorted.y - colorSorted.x) * s) / (colorSorted.z - colorSorted.x));
			colorSorted.z = s;
		}
		else {
			colorSorted.y = 0.0;
			colorSorted.z = 0.0;
		}

		colorSorted.x = 0.0;

		return colorSorted;
	}

	vec3 setSaturation(vec3 c, float s) {
		vec3 color = c;

		if(color.r <= color.g && color.r <= color.b) {
			if(color.g <= color.b) {
				color = setSaturationMinMidMax(color.rgb, s).rgb;
			}
			else {
				color = setSaturationMinMidMax(color.rbg, s).rbg;
			}
		}
		else if(color.g <= color.r && color.g <= color.b) {
			if(color.r <= color.b) {
				color = setSaturationMinMidMax(color.grb, s).grb;
			}
			else {
				color = setSaturationMinMidMax(color.gbr, s).gbr;
			}
		}
		else {
			// Using bgr for both fixes part of hue
			if(color.r <= color.g) {
				color = setSaturationMinMidMax(color.brg, s).brg;
			}
			else {
				color = setSaturationMinMidMax(color.bgr, s).bgr;
			}
		}

		return color;
	}
    `;

// node_modules/pixi.js/lib/filters/blend-modes/hls/GPUhls.mjs
var hslgpu = `
	fn getLuminosity(c: vec3<f32>) -> f32
	{
		return 0.3*c.r + 0.59*c.g + 0.11*c.b;
	}

	fn setLuminosity(c: vec3<f32>, lum: f32) -> vec3<f32>
	{
		var modLum: f32 = lum - getLuminosity(c);
		var color: vec3<f32> = c.rgb + modLum;

		// clip back into legal range
		modLum = getLuminosity(color);
		let modLumVec = vec3<f32>(modLum);

		let cMin: f32 = min(color.r, min(color.g, color.b));
		let cMax: f32 = max(color.r, max(color.g, color.b));

		if(cMin < 0.0)
		{
			color = mix(modLumVec, color, modLum / (modLum - cMin));
		}

		if(cMax > 1.0)
		{
			color = mix(modLumVec, color, (1 - modLum) / (cMax - modLum));
		}

		return color;
	}

	fn getSaturation(c: vec3<f32>) -> f32
	{
		return max(c.r, max(c.g, c.b)) - min(c.r, min(c.g, c.b));
	}

	fn setSaturationMinMidMax(cSorted: vec3<f32>, s: f32) -> vec3<f32>
	{
		var colorSorted = cSorted;

		if(colorSorted.z > colorSorted.x)
		{
			colorSorted.y = (((colorSorted.y - colorSorted.x) * s) / (colorSorted.z - colorSorted.x));
			colorSorted.z = s;
		}
		else
		{
			colorSorted.y = 0;
			colorSorted.z = 0;
		}

		colorSorted.x = 0;

		return colorSorted;
	}

	fn setSaturation(c: vec3<f32>, s: f32) -> vec3<f32>
	{
		var color = c;

		if (color.r <= color.g && color.r <= color.b)
		{
			if (color.g <= color.b)
			{
				color = vec3<f32>(setSaturationMinMidMax(color.rgb, s)).rgb;
			}
			else
			{
				color = vec3<f32>(setSaturationMinMidMax(color.rbg, s)).rbg;
			}
		}
		else if (color.g <= color.r && color.g <= color.b)
		{
			if (color.r <= color.b)
			{
				color = vec3<f32>(setSaturationMinMidMax(color.grb, s)).grb;
			}
			else
			{
				color = vec3<f32>(setSaturationMinMidMax(color.gbr, s)).gbr;
			}
		}
		else
		{
			// Using bgr for both fixes part of hue
			if (color.r <= color.g)
			{
				color = vec3<f32>(setSaturationMinMidMax(color.brg, s)).brg;
			}
			else
			{
				color  = vec3<f32>(setSaturationMinMidMax(color.bgr, s)).bgr;
			}
		}

		return color;
	}
	`;

// node_modules/pixi.js/lib/advanced-blend-modes/ColorBlend.mjs
var ColorBlend = class extends BlendModeFilter {
  constructor() {
    super({
      gl: {
        functions: `
                ${hslgl}

                vec3 blendColor(vec3 base, vec3 blend,  float opacity)
                {
                    return (setLuminosity(blend, getLuminosity(base)) * opacity + base * (1.0 - opacity));
                }
                `,
        main: `
                finalColor = vec4(blendColor(back.rgb, front.rgb,front.a), blendedAlpha) * uBlend;
                `
      },
      gpu: {
        functions: `
                ${hslgpu}

                fn blendColorOpacity(base:vec3<f32>,  blend:vec3<f32>,  opacity:f32) -> vec3<f32>
                {
                    return (setLuminosity(blend, getLuminosity(base)) * opacity + base * (1.0 - opacity));
                }
                `,
        main: `
                out = vec4<f32>(blendColorOpacity(back.rgb, front.rgb, front.a), blendedAlpha) * blendUniforms.uBlend;
                `
      }
    });
  }
};
ColorBlend.extension = {
  name: "color",
  type: ExtensionType.BlendMode
};

// node_modules/pixi.js/lib/advanced-blend-modes/ColorBurnBlend.mjs
var ColorBurnBlend = class extends BlendModeFilter {
  constructor() {
    super({
      gl: {
        functions: `
                float colorBurn(float base, float blend)
                {
                    return max((1.0 - ((1.0 - base) / blend)), 0.0);
                }

                vec3 blendColorBurn(vec3 base, vec3 blend, float opacity)
                {
                    vec3 blended = vec3(
                        colorBurn(base.r, blend.r),
                        colorBurn(base.g, blend.g),
                        colorBurn(base.b, blend.b)
                    );

                    return (blended * opacity + base * (1.0 - opacity));
                }
            `,
        main: `
                finalColor = vec4(blendColorBurn(back.rgb, front.rgb,front.a), blendedAlpha) * uBlend;
            `
      },
      gpu: {
        functions: `
                fn colorBurn(base:f32, blend:f32) -> f32
                {
                    return max((1.0-((1.0-base)/blend)),0.0);
                }

                fn blendColorBurn(base: vec3<f32>, blend: vec3<f32>, opacity: f32) -> vec3<f32>
                {
                    let blended = vec3<f32>(
                        colorBurn(base.r, blend.r),
                        colorBurn(base.g, blend.g),
                        colorBurn(base.b, blend.b)
                    );

                    return (blended * opacity + base * (1.0 - opacity));
                }
            `,
        main: `
                out = vec4<f32>(blendColorBurn(back.rgb, front.rgb, front.a), blendedAlpha) * blendUniforms.uBlend;
            `
      }
    });
  }
};
ColorBurnBlend.extension = {
  name: "color-burn",
  type: ExtensionType.BlendMode
};

// node_modules/pixi.js/lib/advanced-blend-modes/ColorDodgeBlend.mjs
var ColorDodgeBlend = class extends BlendModeFilter {
  constructor() {
    super({
      gl: {
        functions: `
                float colorDodge(float base, float blend)
                {
                    return base / (1.0 - blend);
                }

                vec3 blendColorDodge(vec3 base, vec3 blend, float opacity)
                {
                    vec3 blended = vec3(
                        colorDodge(base.r, blend.r),
                        colorDodge(base.g, blend.g),
                        colorDodge(base.b, blend.b)
                    );

                    return (blended * opacity + base * (1.0 - opacity));
                }
                `,
        main: `
                finalColor = vec4(blendColorDodge(back.rgb, front.rgb,front.a), blendedAlpha) * uBlend;
                `
      },
      gpu: {
        functions: `
                fn colorDodge(base: f32, blend: f32) -> f32
                {
                    return base / (1.0 - blend);
                }

                fn blendColorDodge(base: vec3<f32>, blend: vec3<f32>, opacity: f32) -> vec3<f32>
                {
                    let blended = vec3<f32>(
                        colorDodge(base.r, blend.r),
                        colorDodge(base.g, blend.g),
                        colorDodge(base.b, blend.b)
                    );

                    return (blended * opacity + base * (1.0 - opacity));
                }
                `,
        main: `
                    out = vec4<f32>(blendColorDodge(back.rgb, front.rgb, front.a), blendedAlpha) * blendUniforms.uBlend;
                `
      }
    });
  }
};
ColorDodgeBlend.extension = {
  name: "color-dodge",
  type: ExtensionType.BlendMode
};

// node_modules/pixi.js/lib/advanced-blend-modes/DarkenBlend.mjs
var DarkenBlend = class extends BlendModeFilter {
  constructor() {
    super({
      gl: {
        functions: `
                vec3 blendDarken(vec3 base, vec3 blend, float opacity)
                {
                    return (min(base, blend) * opacity + base * (1.0 - opacity));
                }
                `,
        main: `
                finalColor = vec4(blendDarken(back.rgb, front.rgb,front.a), blendedAlpha) * uBlend;
                `
      },
      gpu: {
        functions: `
                fn blendDarken(base:vec3<f32>,  blend:vec3<f32>,  opacity:f32) -> vec3<f32>
                {
                    return (min(blend,base) * opacity + base * (1.0 - opacity));
                }
                `,
        main: `
                out = vec4<f32>(blendDarken(back.rgb, front.rgb, front.a), blendedAlpha) * blendUniforms.uBlend;
                `
      }
    });
  }
};
DarkenBlend.extension = {
  name: "darken",
  type: ExtensionType.BlendMode
};

// node_modules/pixi.js/lib/advanced-blend-modes/DifferenceBlend.mjs
var DifferenceBlend = class extends BlendModeFilter {
  constructor() {
    super({
      gl: {
        functions: `
                vec3 blendDifference(vec3 base, vec3 blend,  float opacity)
                {
                    return (abs(blend - base) * opacity + base * (1.0 - opacity));
                }
            `,
        main: `
                finalColor = vec4(blendDifference(back.rgb, front.rgb,front.a), blendedAlpha) * uBlend;
            `
      },
      gpu: {
        functions: `
                fn blendDifference(base:vec3<f32>,  blend:vec3<f32>,  opacity:f32) -> vec3<f32>
                {
                    return (abs(blend - base) * opacity + base * (1.0 - opacity));
                }
            `,
        main: `
                out = vec4<f32>(blendDifference(back.rgb, front.rgb, front.a), blendedAlpha) * blendUniforms.uBlend;
            `
      }
    });
  }
};
DifferenceBlend.extension = {
  name: "difference",
  type: ExtensionType.BlendMode
};

// node_modules/pixi.js/lib/advanced-blend-modes/DivideBlend.mjs
var DivideBlend = class extends BlendModeFilter {
  constructor() {
    super({
      gl: {
        functions: `
                float divide(float base, float blend)
                {
                    return (blend > 0.0) ? clamp(base / blend, 0.0, 1.0) : 1.0;
                }

                vec3 blendDivide(vec3 base, vec3 blend, float opacity)
                {
                    vec3 blended = vec3(
                        divide(base.r, blend.r),
                        divide(base.g, blend.g),
                        divide(base.b, blend.b)
                    );

                    return (blended * opacity + base * (1.0 - opacity));
                }
                `,
        main: `
                finalColor = vec4(blendDivide(back.rgb, front.rgb,front.a), blendedAlpha) * uBlend;
                `
      },
      gpu: {
        functions: `
                fn divide(base: f32, blend: f32) -> f32
                {
                    return select(1.0, clamp(base / blend, 0.0, 1.0), blend > 0.0);
                }

                fn blendDivide(base: vec3<f32>, blend: vec3<f32>, opacity: f32) -> vec3<f32>
                {
                    let blended = vec3<f32>(
                        divide(base.r, blend.r),
                        divide(base.g, blend.g),
                        divide(base.b, blend.b)
                    );
                    return (blended * opacity + base * (1.0 - opacity));
                }
            `,
        main: `
                out = vec4<f32>(blendDivide(back.rgb, front.rgb, front.a), blendedAlpha) * blendUniforms.uBlend;
            `
      }
    });
  }
};
DivideBlend.extension = {
  name: "divide",
  type: ExtensionType.BlendMode
};

// node_modules/pixi.js/lib/advanced-blend-modes/ExclusionBlend.mjs
var ExclusionBlend = class extends BlendModeFilter {
  constructor() {
    super({
      gl: {
        functions: `
                vec3 exclusion(vec3 base, vec3 blend)
                {
                    return base + blend - 2.0 * base * blend;
                }

                vec3 blendExclusion(vec3 base, vec3 blend, float opacity)
                {
                    return (exclusion(base, blend) * opacity + base * (1.0 - opacity));
                }
                `,
        main: `
                finalColor = vec4(blendExclusion(back.rgb, front.rgb,front.a), blendedAlpha) * uBlend;
                `
      },
      gpu: {
        functions: `
                fn exclusion(base: vec3<f32>, blend: vec3<f32>) -> vec3<f32>
                {
                    return base+blend-2.0*base*blend;
                }

                fn blendExclusion(base: vec3<f32>, blend: vec3<f32>, opacity: f32) -> vec3<f32>
                {
                    return (exclusion(base, blend) * opacity + base * (1.0 - opacity));
                }
            `,
        main: `
                out = vec4<f32>(blendExclusion(back.rgb, front.rgb, front.a), blendedAlpha) * blendUniforms.uBlend;
            `
      }
    });
  }
};
ExclusionBlend.extension = {
  name: "exclusion",
  type: ExtensionType.BlendMode
};

// node_modules/pixi.js/lib/advanced-blend-modes/HardLightBlend.mjs
var HardLightBlend = class extends BlendModeFilter {
  constructor() {
    super({
      gl: {
        functions: `
                float hardLight(float base, float blend)
                {
                    return (blend < 0.5) ? 2.0 * base * blend : 1.0 - 2.0 * (1.0 - base) * (1.0 - blend);
                }

                vec3 blendHardLight(vec3 base, vec3 blend, float opacity)
                {
                    vec3 blended = vec3(
                        hardLight(base.r, blend.r),
                        hardLight(base.g, blend.g),
                        hardLight(base.b, blend.b)
                    );

                    return (blended * opacity + base * (1.0 - opacity));
                }
            `,
        main: `
                finalColor = vec4(blendHardLight(back.rgb, front.rgb,front.a), blendedAlpha) * uBlend;
            `
      },
      gpu: {
        functions: `
                fn hardLight(base: f32, blend: f32) -> f32
                {
                    return select(1.0 - 2.0 * (1.0 - base) * (1.0 - blend), 2.0 * base * blend, blend < 0.5);
                }

                fn blendHardLight(base: vec3<f32>, blend: vec3<f32>, opacity: f32) -> vec3<f32>
                {
                    let blended = vec3<f32>(
                        hardLight(base.r, blend.r),
                        hardLight(base.g, blend.g),
                        hardLight(base.b, blend.b)
                    );
                    return (blended * opacity + base * (1.0 - opacity));
                }
                `,
        main: `
                out = vec4<f32>(blendHardLight(back.rgb, front.rgb, front.a), blendedAlpha) * blendUniforms.uBlend;
                `
      }
    });
  }
};
HardLightBlend.extension = {
  name: "hard-light",
  type: ExtensionType.BlendMode
};

// node_modules/pixi.js/lib/advanced-blend-modes/HardMixBlend.mjs
var HardMixBlend = class extends BlendModeFilter {
  constructor() {
    super({
      gl: {
        functions: `
                float hardMix(float base, float blend)
                {
                    return (base + blend >= 1.0) ? 1.0 : 0.0;
                }

                vec3 blendHardMix(vec3 base, vec3 blend,  float opacity)
                {
                    vec3 blended = vec3(
                        hardMix(base.r, blend.r),
                        hardMix(base.g, blend.g),
                        hardMix(base.b, blend.b)
                    );
                    return (blended * opacity + base * (1.0 - opacity));
                }
            `,
        main: `
                finalColor = vec4(blendHardMix(back.rgb, front.rgb,front.a), blendedAlpha) * uBlend;
            `
      },
      gpu: {
        functions: `
                fn hardMix(base: f32, blend: f32) -> f32
                {
                    return select(0.0, 1.0, base + blend >= 1.0);
                }

                fn blendHardMix(base:vec3<f32>,  blend:vec3<f32>,  opacity:f32) -> vec3<f32>
                {
                    let blended: vec3<f32> = vec3<f32>(
                        hardMix(base.r, blend.r),
                        hardMix(base.g, blend.g),
                        hardMix(base.b, blend.b)
                    );
                    return (blended * opacity + base * (1.0 - opacity));
                }
            `,
        main: `
                out = vec4<f32>(blendHardMix(back.rgb, front.rgb, front.a), blendedAlpha) * blendUniforms.uBlend;
            `
      }
    });
  }
};
HardMixBlend.extension = {
  name: "hard-mix",
  type: ExtensionType.BlendMode
};

// node_modules/pixi.js/lib/advanced-blend-modes/LightenBlend.mjs
var LightenBlend = class extends BlendModeFilter {
  constructor() {
    super({
      gl: {
        functions: `
                vec3 blendLighten(vec3 base, vec3 blend, float opacity)
                {
                    return (max(base, blend) * opacity + base * (1.0 - opacity));
                }
                `,
        main: `
                finalColor = vec4(blendLighten(back.rgb, front.rgb,front.a), blendedAlpha) * uBlend;
                `
      },
      gpu: {
        functions: `
                fn blendLighten(base:vec3<f32>,  blend:vec3<f32>,  opacity:f32) -> vec3<f32>
                {
                    return (max(base, blend) * opacity + base * (1.0 - opacity));
                }
            `,
        main: `
                out = vec4<f32>(blendLighten(back.rgb, front.rgb, front.a), blendedAlpha) * blendUniforms.uBlend;
            `
      }
    });
  }
};
LightenBlend.extension = {
  name: "lighten",
  type: ExtensionType.BlendMode
};

// node_modules/pixi.js/lib/advanced-blend-modes/LinearBurnBlend.mjs
var LinearBurnBlend = class extends BlendModeFilter {
  constructor() {
    super({
      gl: {
        functions: `
                float linearBurn(float base, float blend)
                {
                    return max(0.0, base + blend - 1.0);
                }

                vec3 blendLinearBurn(vec3 base, vec3 blend, float opacity)
                {
                    vec3 blended = vec3(
                        linearBurn(base.r, blend.r),
                        linearBurn(base.g, blend.g),
                        linearBurn(base.b, blend.b)
                    );

                    return (blended * opacity + base * (1.0 - opacity));
                }
                `,
        main: `
                finalColor = vec4(blendLinearBurn(back.rgb, front.rgb,front.a), blendedAlpha) * uBlend;
                `
      },
      gpu: {
        functions: `
                fn linearBurn(base: f32, blend: f32) -> f32
                {
                    return max(0.0, base + blend - 1.0);
                }

                fn blendLinearBurn(base:vec3<f32>,  blend:vec3<f32>,  opacity:f32) -> vec3<f32>
                {
                    let blended = vec3<f32>(
                        linearBurn(base.r, blend.r),
                        linearBurn(base.g, blend.g),
                        linearBurn(base.b, blend.b)
                    );

                    return (blended * opacity + base * (1.0 - opacity));
                }
                `,
        main: `
                out = vec4<f32>(blendLinearBurn(back.rgb, front.rgb, front.a), blendedAlpha) * blendUniforms.uBlend;
                `
      }
    });
  }
};
LinearBurnBlend.extension = {
  name: "linear-burn",
  type: ExtensionType.BlendMode
};

// node_modules/pixi.js/lib/advanced-blend-modes/LinearDodgeBlend.mjs
var LinearDodgeBlend = class extends BlendModeFilter {
  constructor() {
    super({
      gl: {
        functions: `
                float linearDodge(float base, float blend) {
                    return min(1.0, base + blend);
                }

                vec3 blendLinearDodge(vec3 base, vec3 blend, float opacity) {
                    vec3 blended = vec3(
                        linearDodge(base.r, blend.r),
                        linearDodge(base.g, blend.g),
                        linearDodge(base.b, blend.b)
                    );
                    return (blended * opacity + base * (1.0 - opacity));
                }
                `,
        main: `
                finalColor = vec4(blendLinearDodge(back.rgb, front.rgb,front.a), blendedAlpha) * uBlend;
                `
      },
      gpu: {
        functions: `
                fn linearDodge(base: f32, blend: f32) -> f32
                {
                    return min(1, base + blend);
                }

                fn blendLinearDodge(base:vec3<f32>, blend:vec3<f32>,  opacity:f32) -> vec3<f32>
                {
                    let blended = vec3<f32>(
                        linearDodge(base.r, blend.r),
                        linearDodge(base.g, blend.g),
                        linearDodge(base.b, blend.b)
                    );

                    return (blended * opacity + base * (1.0 - opacity));
                }
            `,
        main: `
                out = vec4<f32>(blendLinearDodge(back.rgb, front.rgb, front.a), blendedAlpha) * blendUniforms.uBlend;
            `
      }
    });
  }
};
LinearDodgeBlend.extension = {
  name: "linear-dodge",
  type: ExtensionType.BlendMode
};

// node_modules/pixi.js/lib/advanced-blend-modes/LinearLightBlend.mjs
var LinearLightBlend = class extends BlendModeFilter {
  constructor() {
    super({
      gl: {
        functions: `
                float linearBurn(float base, float blend) {
                    return max(0.0, base + blend - 1.0);
                }

                float linearDodge(float base, float blend) {
                    return min(1.0, base + blend);
                }

                float linearLight(float base, float blend) {
                    return (blend <= 0.5) ? linearBurn(base,2.0*blend) : linearBurn(base,2.0*(blend-0.5));
                }

                vec3 blendLinearLight(vec3 base, vec3 blend, float opacity) {
                    vec3 blended = vec3(
                        linearLight(base.r, blend.r),
                        linearLight(base.g, blend.g),
                        linearLight(base.b, blend.b)
                    );

                    return (blended * opacity + base * (1.0 - opacity));
                }
            `,
        main: `
                finalColor = vec4(blendLinearLight(back.rgb, front.rgb,front.a), blendedAlpha) * uBlend;
                `
      },
      gpu: {
        functions: `
                fn linearBurn(base: f32, blend: f32) -> f32
                {
                    return max(0.0, base + blend - 1.0);
                }

                fn linearDodge(base: f32, blend: f32) -> f32
                {
                    return min(1.0, base + blend);
                }

                fn linearLight(base: f32, blend: f32) -> f32
                {
                    return select(linearBurn(base,2.0*(blend-0.5)), linearBurn(base,2.0*blend), blend <= 0.5);
                }

                fn blendLinearLightOpacity(base:vec3<f32>,  blend:vec3<f32>,  opacity:f32) -> vec3<f32>
                {
                    let blended = vec3<f32>(
                        linearLight(base.r, blend.r),
                        linearLight(base.g, blend.g),
                        linearLight(base.b, blend.b)
                    );

                    return (blended * opacity + base * (1.0 - opacity));
                }
            `,
        main: `
                out = vec4<f32>(blendLinearLightOpacity(back.rgb, front.rgb, front.a), blendedAlpha) * blendUniforms.uBlend;
            `
      }
    });
  }
};
LinearLightBlend.extension = {
  name: "linear-light",
  type: ExtensionType.BlendMode
};

// node_modules/pixi.js/lib/advanced-blend-modes/LuminosityBlend.mjs
var LuminosityBlend = class extends BlendModeFilter {
  constructor() {
    super({
      gl: {
        functions: `
                ${hslgl}

                vec3 blendLuminosity(vec3 base, vec3 blend,  float opacity)
                {
                    vec3 blendLuminosity = setLuminosity(base, getLuminosity(blend));
                    return (blendLuminosity * opacity + base * (1.0 - opacity));
                }
                `,
        main: `
                finalColor = vec4(blendLuminosity(back.rgb, front.rgb,front.a), blendedAlpha) * uBlend;
                `
      },
      gpu: {
        functions: `
                ${hslgpu}

                fn blendLuminosity(base:vec3<f32>,  blend:vec3<f32>,  opacity:f32) -> vec3<f32>
                {
                    let blendLuminosity: vec3<f32> = setLuminosity(base, getLuminosity(blend));
                    return (blendLuminosity * opacity + base * (1.0 - opacity));
                }
            `,
        main: `
                out = vec4<f32>(blendLuminosity(back.rgb, front.rgb, front.a), blendedAlpha) * blendUniforms.uBlend;
            `
      }
    });
  }
};
LuminosityBlend.extension = {
  name: "luminosity",
  type: ExtensionType.BlendMode
};

// node_modules/pixi.js/lib/advanced-blend-modes/NegationBlend.mjs
var NegationBlend = class extends BlendModeFilter {
  constructor() {
    super({
      gl: {
        functions: `
                vec3 negation(vec3 base, vec3 blend)
                {
                    return 1.0-abs(1.0-base-blend);
                }

                vec3 blendNegation(vec3 base, vec3 blend, float opacity)
                {
                    return (negation(base, blend) * opacity + base * (1.0 - opacity));
                }
                `,
        main: `
                finalColor = vec4(blendNegation(back.rgb, front.rgb, front.a), blendedAlpha) * uBlend;
                `
      },
      gpu: {
        functions: `
                fn blendNegation(base: vec3<f32>, blend: vec3<f32>) -> vec3<f32>
                {
                    return 1.0-abs(1.0-base-blend);
                }

                fn blendNegationOpacity(base: vec3<f32>, blend: vec3<f32>, opacity: f32) -> vec3<f32>
                {
                    return (blendNegation(base, blend) * opacity + base * (1.0 - opacity));
                }
            `,
        main: `
                out = vec4<f32>(blendNegationOpacity(back.rgb, front.rgb, front.a), blendedAlpha) * blendUniforms.uBlend;
            `
      }
    });
  }
};
NegationBlend.extension = {
  name: "negation",
  type: ExtensionType.BlendMode
};

// node_modules/pixi.js/lib/advanced-blend-modes/OverlayBlend.mjs
var OverlayBlend = class extends BlendModeFilter {
  constructor() {
    super({
      gl: {
        functions: `
                float overlay(float base, float blend)
                {
                    return (base < 0.5) ? (2.0*base*blend) : (1.0-2.0*(1.0-base)*(1.0-blend));
                }

                vec3 blendOverlay(vec3 base, vec3 blend, float opacity)
                {
                    vec3 blended = vec3(
                        overlay(base.r, blend.r),
                        overlay(base.g, blend.g),
                        overlay(base.b, blend.b)
                    );
   
                    return (blended * opacity + base * (1.0 - opacity));
                }
                `,
        main: `
                finalColor = vec4(blendOverlay(back.rgb, front.rgb,front.a), blendedAlpha) * uBlend;
                `
      },
      gpu: {
        functions: `
                fn overlay(base: f32, blend: f32) -> f32
                {
                    return select((1.0-2.0*(1.0-base)*(1.0-blend)), (2.0*base*blend), base < 0.5);
                }

                fn blendOverlay(base: vec3<f32>, blend: vec3<f32>, opacity: f32) -> vec3<f32>
                {
                    let blended = vec3<f32>(
                        overlay(base.r, blend.r),
                        overlay(base.g, blend.g),
                        overlay(base.b, blend.b)
                    );

                    return (blended * opacity + base * (1.0 - opacity));
                }
                `,
        main: `
                out = vec4<f32>(blendOverlay(back.rgb, front.rgb, front.a), blendedAlpha) * blendUniforms.uBlend;
                `
      }
    });
  }
};
OverlayBlend.extension = {
  name: "overlay",
  type: ExtensionType.BlendMode
};

// node_modules/pixi.js/lib/advanced-blend-modes/PinLightBlend.mjs
var PinLightBlend = class extends BlendModeFilter {
  constructor() {
    super({
      gl: {
        functions: `
                float pinLight(float base, float blend)
                {
                    return (blend <= 0.5) ? min(base, 2.0 * blend) : max(base, 2.0 * (blend - 0.5));
                }

                vec3 blendPinLight(vec3 base, vec3 blend, float opacity)
                {
                    vec3 blended = vec3(
                        pinLight(base.r, blend.r),
                        pinLight(base.g, blend.g),
                        pinLight(base.b, blend.b)
                    );

                    return (blended * opacity + base * (1.0 - opacity));
                }
            `,
        main: `
                finalColor = vec4(blendPinLight(back.rgb, front.rgb, front.a), blendedAlpha) * uBlend;
                `
      },
      gpu: {
        functions: `
                fn pinLight(base: f32, blend: f32) -> f32
                {
                    return select(max(base,2.0*(blend-0.5)), min(base,2.0*blend), blend <= 0.5);
                }

                fn blendPinLight(base:vec3<f32>,  blend:vec3<f32>,  opacity:f32) -> vec3<f32>
                {
                    let blended = vec3<f32>(
                        pinLight(base.r, blend.r),
                        pinLight(base.g, blend.g),
                        pinLight(base.b, blend.b)
                    );

                    return (blended * opacity + base * (1.0 - opacity));
                }
                `,
        main: `
                out = vec4<f32>(blendPinLight(back.rgb, front.rgb, front.a), blendedAlpha) * blendUniforms.uBlend;
                `
      }
    });
  }
};
PinLightBlend.extension = {
  name: "pin-light",
  type: ExtensionType.BlendMode
};

// node_modules/pixi.js/lib/advanced-blend-modes/SaturationBlend.mjs
var SaturationBlend = class extends BlendModeFilter {
  constructor() {
    super({
      gl: {
        functions: `
                ${hslgl}

                vec3 blendSaturation(vec3 base, vec3 blend,  float opacity)
                {
                    vec3 blendSaturation = setLuminosity(setSaturation(base, getSaturation(blend)), getLuminosity(base));
                    return (blendSaturation * opacity + base * (1.0 - opacity));
                }
            `,
        main: `
                finalColor = vec4(blendSaturation(back.rgb, front.rgb, front.a), blendedAlpha) * uBlend;
            `
      },
      gpu: {
        functions: `
                ${hslgpu}

                fn blendSaturation(base:vec3<f32>,  blend:vec3<f32>,  opacity:f32) -> vec3<f32>
                {
                    let blendSaturation = setLuminosity(setSaturation(base, getSaturation(blend)), getLuminosity(base));
                    return (blendSaturation * opacity + base * (1.0 - opacity));
                }
            `,
        main: `
                out = vec4<f32>(blendSaturation(back.rgb, front.rgb, front.a), blendedAlpha) * blendUniforms.uBlend;
            `
      }
    });
  }
};
SaturationBlend.extension = {
  name: "saturation",
  type: ExtensionType.BlendMode
};

// node_modules/pixi.js/lib/advanced-blend-modes/SoftLightBlend.mjs
var SoftLightBlend = class extends BlendModeFilter {
  constructor() {
    super({
      gl: {
        functions: `
                float softLight(float base, float blend)
                {
                    return (blend < 0.5) ? (2.0 * base * blend + base * base * (1.0 - 2.0 * blend)) : (sqrt(base) * (2.0 * blend - 1.0) + 2.0 * base * (1.0 - blend));
                }

                vec3 blendSoftLight(vec3 base, vec3 blend, float opacity)
                {
                    vec3 blended = vec3(
                        softLight(base.r, blend.r),
                        softLight(base.g, blend.g),
                        softLight(base.b, blend.b)
                    );

                    return (blended * opacity + base * (1.0 - opacity));
                }
                `,
        main: `
                finalColor = vec4(blendSoftLight(back.rgb, front.rgb, front.a), blendedAlpha) * uBlend;
                `
      },
      gpu: {
        functions: `
                fn softLight(base: f32, blend: f32) -> f32
                {
                    return select(2.0 * base * blend + base * base * (1.0 - 2.0 * blend), sqrt(base) * (2.0 * blend - 1.0) + 2.0 * base * (1.0 - blend), blend < 0.5);
                }

                fn blendSoftLight(base:vec3<f32>,  blend:vec3<f32>,  opacity:f32) -> vec3<f32>
                {
                    let blended: vec3<f32> = vec3<f32>(
                        softLight(base.r, blend.r),
                        softLight(base.g, blend.g),
                        softLight(base.b, blend.b)
                    );

                    return (blended * opacity + base * (1.0 - opacity));
                }
                `,
        main: `
                out = vec4<f32>(blendSoftLight(back.rgb, front.rgb, front.a), blendedAlpha) * blendUniforms.uBlend;
                `
      }
    });
  }
};
SoftLightBlend.extension = {
  name: "soft-light",
  type: ExtensionType.BlendMode
};

// node_modules/pixi.js/lib/advanced-blend-modes/SubtractBlend.mjs
var SubtractBlend = class extends BlendModeFilter {
  constructor() {
    super({
      gl: {
        functions: `
                float subtract(float base, float blend)
                {
                    return max(0.0, base - blend);
                }

                vec3 blendSubtract(vec3 base, vec3 blend, float opacity)
                {
                    vec3 blended = vec3(
                        subtract(base.r, blend.r),
                        subtract(base.g, blend.g),
                        subtract(base.b, blend.b)
                    );

                    return (blended * opacity + base * (1.0 - opacity));
                }
                `,
        main: `
                finalColor = vec4(blendSubtract(back.rgb, front.rgb, front.a), blendedAlpha) * uBlend;
                `
      },
      gpu: {
        functions: `
                fn subtract(base: f32, blend: f32) -> f32
                {
                    return max(0, base - blend);
                }

                fn blendSubtract(base:vec3<f32>,  blend:vec3<f32>,  opacity:f32) -> vec3<f32>
                {
                    let blended = vec3<f32>(
                        subtract(base.r, blend.r),
                        subtract(base.g, blend.g),
                        subtract(base.b, blend.b)
                    );

                    return (blended * opacity + base * (1.0 - opacity));
                }
                `,
        main: `
                out = vec4<f32>(blendSubtract(back.rgb, front.rgb, front.a), blendedAlpha) * blendUniforms.uBlend;
                `
      }
    });
  }
};
SubtractBlend.extension = {
  name: "subtract",
  type: ExtensionType.BlendMode
};

// node_modules/pixi.js/lib/advanced-blend-modes/VividLightBlend.mjs
var VividLightBlend = class extends BlendModeFilter {
  constructor() {
    super({
      gl: {
        functions: `
                float colorBurn(float base, float blend)
                {
                    return max((1.0-((1.0-base)/blend)),0.0);
                }

                float colorDodge(float base, float blend)
                {
                    return min(1.0, base / (1.0-blend));
                }

                float vividLight(float base, float blend)
                {
                    return (blend < 0.5) ? colorBurn(base,(2.0*blend)) : colorDodge(base,(2.0*(blend-0.5)));
                }

                vec3 blendVividLight(vec3 base, vec3 blend, float opacity)
                {
                    vec3 blended = vec3(
                        vividLight(base.r, blend.r),
                        vividLight(base.g, blend.g),
                        vividLight(base.b, blend.b)
                    );

                    return (blended * opacity + base * (1.0 - opacity));
                }
            `,
        main: `
                finalColor = vec4(blendVividLight(back.rgb, front.rgb,front.a), blendedAlpha) * uBlend;
            `
      },
      gpu: {
        functions: `
                fn colorBurn(base:f32, blend:f32) -> f32
                {
                    return max((1.0-((1.0-base)/blend)),0.0);
                }

                fn colorDodge(base: f32, blend: f32) -> f32
                {
                    return min(1.0, base / (1.0-blend));
                }

                fn vividLight(base: f32, blend: f32) -> f32
                {
                    return select(colorDodge(base,(2.0*(blend-0.5))), colorBurn(base,(2.0*blend)), blend<0.5);
                }

                fn blendVividLight(base: vec3<f32>, blend: vec3<f32>, opacity: f32) -> vec3<f32>
                {
                    let blended: vec3<f32> = vec3<f32>(
                        vividLight(base.r, blend.r),
                        vividLight(base.g, blend.g),
                        vividLight(base.b, blend.b)
                    );

                    return (blended * opacity + base * (1.0 - opacity));
                }
                `,
        main: `
                out = vec4<f32>(blendVividLight(back.rgb, front.rgb, front.a), blendedAlpha) * blendUniforms.uBlend;
                `
      }
    });
  }
};
VividLightBlend.extension = {
  name: "vivid-light",
  type: ExtensionType.BlendMode
};

// node_modules/pixi.js/lib/utils/browser/isWebGLSupported.mjs
var _isWebGLSupported;
function isWebGLSupported(failIfMajorPerformanceCaveat) {
  if (_isWebGLSupported !== void 0)
    return _isWebGLSupported;
  _isWebGLSupported = (() => {
    var _a;
    const contextOptions = {
      stencil: true,
      failIfMajorPerformanceCaveat: failIfMajorPerformanceCaveat ?? AbstractRenderer.defaultOptions.failIfMajorPerformanceCaveat
    };
    try {
      if (!DOMAdapter.get().getWebGLRenderingContext()) {
        return false;
      }
      const canvas = DOMAdapter.get().createCanvas();
      let gl = canvas.getContext("webgl", contextOptions);
      const success = !!((_a = gl == null ? void 0 : gl.getContextAttributes()) == null ? void 0 : _a.stencil);
      if (gl) {
        const loseContext = gl.getExtension("WEBGL_lose_context");
        if (loseContext) {
          loseContext.loseContext();
        }
      }
      gl = null;
      return success;
    } catch (e) {
      return false;
    }
  })();
  return _isWebGLSupported;
}

// node_modules/pixi.js/lib/utils/browser/isWebGPUSupported.mjs
var _isWebGPUSupported;
async function isWebGPUSupported(options = {}) {
  if (_isWebGPUSupported !== void 0)
    return _isWebGPUSupported;
  _isWebGPUSupported = await (async () => {
    const gpu = DOMAdapter.get().getNavigator().gpu;
    if (!gpu) {
      return false;
    }
    try {
      const adapter = await gpu.requestAdapter(options);
      await adapter.requestDevice();
      return true;
    } catch (e) {
      return false;
    }
  })();
  return _isWebGPUSupported;
}

// node_modules/pixi.js/lib/rendering/renderers/autoDetectRenderer.mjs
var renderPriority = ["webgl", "webgpu", "canvas"];
async function autoDetectRenderer(options) {
  let preferredOrder = [];
  if (options.preference) {
    preferredOrder.push(options.preference);
    renderPriority.forEach((item) => {
      if (item !== options.preference) {
        preferredOrder.push(item);
      }
    });
  } else {
    preferredOrder = renderPriority.slice();
  }
  let RendererClass;
  let finalOptions = {};
  for (let i = 0; i < preferredOrder.length; i++) {
    const rendererType = preferredOrder[i];
    if (rendererType === "webgpu" && await isWebGPUSupported()) {
      const { WebGPURenderer: WebGPURenderer2 } = await import("./WebGPURenderer-FZTFYNEL.js");
      RendererClass = WebGPURenderer2;
      finalOptions = { ...options, ...options.webgpu };
      break;
    } else if (rendererType === "webgl" && isWebGLSupported(
      options.failIfMajorPerformanceCaveat ?? AbstractRenderer.defaultOptions.failIfMajorPerformanceCaveat
    )) {
      const { WebGLRenderer: WebGLRenderer2 } = await import("./WebGLRenderer-XO2ZT3LP.js");
      RendererClass = WebGLRenderer2;
      finalOptions = { ...options, ...options.webgl };
      break;
    } else if (rendererType === "canvas") {
      finalOptions = { ...options };
      throw new Error("CanvasRenderer is not yet implemented");
    }
  }
  delete finalOptions.webgpu;
  delete finalOptions.webgl;
  if (!RendererClass) {
    throw new Error("No available renderer for the current environment");
  }
  const renderer = new RendererClass();
  await renderer.init(finalOptions);
  return renderer;
}

// node_modules/pixi.js/lib/app/Application.mjs
var _Application = class _Application2 {
  /** @ignore */
  constructor(...args) {
    this.stage = new Container();
    if (args[0] !== void 0) {
      deprecation(v8_0_0, "Application constructor options are deprecated, please use Application.init() instead.");
    }
  }
  /**
   * @param options - The optional application and renderer parameters.
   */
  async init(options) {
    options = { ...options };
    this.renderer = await autoDetectRenderer(options);
    _Application2._plugins.forEach((plugin) => {
      plugin.init.call(this, options);
    });
  }
  /** Render the current stage. */
  render() {
    this.renderer.render({ container: this.stage });
  }
  /**
   * Reference to the renderer's canvas element.
   * @readonly
   * @member {HTMLCanvasElement}
   */
  get canvas() {
    return this.renderer.canvas;
  }
  /**
   * Reference to the renderer's canvas element.
   * @member {HTMLCanvasElement}
   * @deprecated since 8.0.0
   */
  get view() {
    deprecation(v8_0_0, "Application.view is deprecated, please use Application.canvas instead.");
    return this.renderer.canvas;
  }
  /**
   * Reference to the renderer's screen rectangle. Its safe to use as `filterArea` or `hitArea` for the whole screen.
   * @readonly
   */
  get screen() {
    return this.renderer.screen;
  }
  /**
   * Destroys the application and all of its resources.
   * @param {object|boolean}[rendererDestroyOptions=false] - The options for destroying the renderer.
   * @param {boolean}[rendererDestroyOptions.removeView=false] - Removes the Canvas element from the DOM.
   * @param {object|boolean} [options=false] - The options for destroying the stage.
   * @param {boolean} [options.children=false] - If set to true, all the children will have their destroy method
   * called as well. `options` will be passed on to those calls.
   * @param {boolean} [options.texture=false] - Only used for children with textures e.g. Sprites.
   * If options.children is set to true,
   * it should destroy the texture of the child sprite.
   * @param {boolean} [options.textureSource=false] - Only used for children with textures e.g. Sprites.
   *  If options.children is set to true,
   * it should destroy the texture source of the child sprite.
   * @param {boolean} [options.context=false] - Only used for children with graphicsContexts e.g. Graphics.
   * If options.children is set to true,
   * it should destroy the context of the child graphics.
   */
  destroy(rendererDestroyOptions = false, options = false) {
    const plugins = _Application2._plugins.slice(0);
    plugins.reverse();
    plugins.forEach((plugin) => {
      plugin.destroy.call(this);
    });
    this.stage.destroy(options);
    this.stage = null;
    this.renderer.destroy(rendererDestroyOptions);
    this.renderer = null;
  }
};
_Application._plugins = [];
var Application = _Application;
extensions.handleByList(ExtensionType.Application, Application._plugins);
extensions.add(ApplicationInitHook);

// node_modules/pixi.js/lib/scene/text-bitmap/BitmapFont.mjs
var BitmapFont = class extends AbstractBitmapFont {
  constructor(options, url) {
    super();
    const { textures, data } = options;
    Object.keys(data.pages).forEach((key) => {
      const pageData = data.pages[parseInt(key, 10)];
      const texture = textures[pageData.id];
      this.pages.push({ texture });
    });
    Object.keys(data.chars).forEach((key) => {
      const charData = data.chars[key];
      const {
        frame: textureFrame,
        source: textureSource
      } = textures[charData.page];
      const frameReal = new Rectangle(
        charData.x + textureFrame.x,
        charData.y + textureFrame.y,
        charData.width,
        charData.height
      );
      const texture = new Texture({
        source: textureSource,
        frame: frameReal
      });
      this.chars[key] = {
        id: key.codePointAt(0),
        xOffset: charData.xOffset,
        yOffset: charData.yOffset,
        xAdvance: charData.xAdvance,
        kerning: charData.kerning ?? {},
        texture
      };
    });
    this.baseRenderedFontSize = data.fontSize;
    this.baseMeasurementFontSize = data.fontSize;
    this.fontMetrics = {
      ascent: 0,
      descent: 0,
      fontSize: data.fontSize
    };
    this.baseLineOffset = data.baseLineOffset;
    this.lineHeight = data.lineHeight;
    this.fontFamily = data.fontFamily;
    this.distanceField = data.distanceField ?? {
      type: "none",
      range: 0
    };
    this.url = url;
  }
  /** Destroys the BitmapFont object. */
  destroy() {
    super.destroy();
    for (let i = 0; i < this.pages.length; i++) {
      const { texture } = this.pages[i];
      texture.destroy(true);
    }
    this.pages = null;
  }
  /**
   * Generates a bitmap-font for the given style and character set
   * @param options - Setup options for font generation.
   * @returns Font generated by style options.
   * @example
   * import { BitmapFont, BitmapText } from 'pixi.js';
   *
   * BitmapFont.install('TitleFont', {
   *     fontFamily: 'Arial',
   *     fontSize: 12,
   *     strokeThickness: 2,
   *     fill: 'purple',
   * });
   *
   * const title = new BitmapText({ text: 'This is the title', fontFamily: 'TitleFont' });
   */
  static install(options) {
    BitmapFontManager.install(options);
  }
  /**
   * Uninstalls a bitmap font from the cache.
   * @param {string} name - The name of the bitmap font to uninstall.
   */
  static uninstall(name) {
    BitmapFontManager.uninstall(name);
  }
};

// node_modules/pixi.js/lib/scene/text-bitmap/asset/bitmapFontTextParser.mjs
var bitmapFontTextParser = {
  test(data) {
    return typeof data === "string" && data.startsWith("info face=");
  },
  parse(txt) {
    const items = txt.match(/^[a-z]+\s+.+$/gm);
    const rawData = {
      info: [],
      common: [],
      page: [],
      char: [],
      chars: [],
      kerning: [],
      kernings: [],
      distanceField: []
    };
    for (const i in items) {
      const name = items[i].match(/^[a-z]+/gm)[0];
      const attributeList = items[i].match(/[a-zA-Z]+=([^\s"']+|"([^"]*)")/gm);
      const itemData = {};
      for (const i2 in attributeList) {
        const split = attributeList[i2].split("=");
        const key = split[0];
        const strValue = split[1].replace(/"/gm, "");
        const floatValue = parseFloat(strValue);
        const value = isNaN(floatValue) ? strValue : floatValue;
        itemData[key] = value;
      }
      rawData[name].push(itemData);
    }
    const font = {
      chars: {},
      pages: [],
      lineHeight: 0,
      fontSize: 0,
      fontFamily: "",
      distanceField: null,
      baseLineOffset: 0
    };
    const [info] = rawData.info;
    const [common] = rawData.common;
    const [distanceField] = rawData.distanceField ?? [];
    if (distanceField) {
      font.distanceField = {
        range: parseInt(distanceField.distanceRange, 10),
        type: distanceField.fieldType
      };
    }
    font.fontSize = parseInt(info.size, 10);
    font.fontFamily = info.face;
    font.lineHeight = parseInt(common.lineHeight, 10);
    const page = rawData.page;
    for (let i = 0; i < page.length; i++) {
      font.pages.push({
        id: parseInt(page[i].id, 10) || 0,
        file: page[i].file
      });
    }
    const map = {};
    font.baseLineOffset = font.lineHeight - parseInt(common.base, 10);
    const char = rawData.char;
    for (let i = 0; i < char.length; i++) {
      const charNode = char[i];
      const id = parseInt(charNode.id, 10);
      let letter = charNode.letter ?? charNode.char ?? String.fromCharCode(id);
      if (letter === "space")
        letter = " ";
      map[id] = letter;
      font.chars[letter] = {
        id,
        // texture deets..
        page: parseInt(charNode.page, 10) || 0,
        x: parseInt(charNode.x, 10),
        y: parseInt(charNode.y, 10),
        width: parseInt(charNode.width, 10),
        height: parseInt(charNode.height, 10),
        xOffset: parseInt(charNode.xoffset, 10),
        yOffset: parseInt(charNode.yoffset, 10),
        xAdvance: parseInt(charNode.xadvance, 10),
        kerning: {}
      };
    }
    const kerning = rawData.kerning || [];
    for (let i = 0; i < kerning.length; i++) {
      const first = parseInt(kerning[i].first, 10);
      const second = parseInt(kerning[i].second, 10);
      const amount = parseInt(kerning[i].amount, 10);
      font.chars[map[second]].kerning[map[first]] = amount;
    }
    return font;
  }
};

// node_modules/pixi.js/lib/scene/text-bitmap/asset/bitmapFontXMLParser.mjs
var bitmapFontXMLParser = {
  test(data) {
    const xml = data;
    return typeof xml !== "string" && "getElementsByTagName" in xml && xml.getElementsByTagName("page").length && xml.getElementsByTagName("info")[0].getAttribute("face") !== null;
  },
  parse(xml) {
    const data = {
      chars: {},
      pages: [],
      lineHeight: 0,
      fontSize: 0,
      fontFamily: "",
      distanceField: null,
      baseLineOffset: 0
    };
    const info = xml.getElementsByTagName("info")[0];
    const common = xml.getElementsByTagName("common")[0];
    const distanceField = xml.getElementsByTagName("distanceField")[0];
    if (distanceField) {
      data.distanceField = {
        type: distanceField.getAttribute("fieldType"),
        range: parseInt(distanceField.getAttribute("distanceRange"), 10)
      };
    }
    const page = xml.getElementsByTagName("page");
    const char = xml.getElementsByTagName("char");
    const kerning = xml.getElementsByTagName("kerning");
    data.fontSize = parseInt(info.getAttribute("size"), 10);
    data.fontFamily = info.getAttribute("face");
    data.lineHeight = parseInt(common.getAttribute("lineHeight"), 10);
    for (let i = 0; i < page.length; i++) {
      data.pages.push({
        id: parseInt(page[i].getAttribute("id"), 10) || 0,
        file: page[i].getAttribute("file")
      });
    }
    const map = {};
    data.baseLineOffset = data.lineHeight - parseInt(common.getAttribute("base"), 10);
    for (let i = 0; i < char.length; i++) {
      const charNode = char[i];
      const id = parseInt(charNode.getAttribute("id"), 10);
      let letter = charNode.getAttribute("letter") ?? charNode.getAttribute("char") ?? String.fromCharCode(id);
      if (letter === "space")
        letter = " ";
      map[id] = letter;
      data.chars[letter] = {
        id,
        // texture deets..
        page: parseInt(charNode.getAttribute("page"), 10) || 0,
        x: parseInt(charNode.getAttribute("x"), 10),
        y: parseInt(charNode.getAttribute("y"), 10),
        width: parseInt(charNode.getAttribute("width"), 10),
        height: parseInt(charNode.getAttribute("height"), 10),
        // render deets..
        xOffset: parseInt(charNode.getAttribute("xoffset"), 10),
        yOffset: parseInt(charNode.getAttribute("yoffset"), 10),
        // + baseLineOffset,
        xAdvance: parseInt(charNode.getAttribute("xadvance"), 10),
        kerning: {}
      };
    }
    for (let i = 0; i < kerning.length; i++) {
      const first = parseInt(kerning[i].getAttribute("first"), 10);
      const second = parseInt(kerning[i].getAttribute("second"), 10);
      const amount = parseInt(kerning[i].getAttribute("amount"), 10);
      data.chars[map[second]].kerning[map[first]] = amount;
    }
    return data;
  }
};

// node_modules/pixi.js/lib/scene/text-bitmap/asset/bitmapFontXMLStringParser.mjs
var bitmapFontXMLStringParser = {
  test(data) {
    if (typeof data === "string" && data.includes("<font>")) {
      return bitmapFontXMLParser.test(DOMAdapter.get().parseXML(data));
    }
    return false;
  },
  parse(data) {
    return bitmapFontXMLParser.parse(DOMAdapter.get().parseXML(data));
  }
};

// node_modules/pixi.js/lib/scene/text-bitmap/asset/loadBitmapFont.mjs
var validExtensions = [".xml", ".fnt"];
var bitmapFontCachePlugin = {
  extension: {
    type: ExtensionType.CacheParser,
    name: "cacheBitmapFont"
  },
  test: (asset) => asset instanceof BitmapFont,
  getCacheableAssets(keys, asset) {
    const out = {};
    keys.forEach((key) => {
      out[key] = asset;
      out[`${key}-bitmap`] = asset;
    });
    out[`${asset.fontFamily}-bitmap`] = asset;
    return out;
  }
};
var loadBitmapFont = {
  extension: {
    type: ExtensionType.LoadParser,
    priority: LoaderParserPriority.Normal
  },
  name: "loadBitmapFont",
  test(url) {
    return validExtensions.includes(path.extname(url).toLowerCase());
  },
  async testParse(data) {
    return bitmapFontTextParser.test(data) || bitmapFontXMLStringParser.test(data);
  },
  async parse(asset, data, loader) {
    const bitmapFontData = bitmapFontTextParser.test(asset) ? bitmapFontTextParser.parse(asset) : bitmapFontXMLStringParser.parse(asset);
    const { src } = data;
    const { pages } = bitmapFontData;
    const textureUrls = [];
    const textureOptions = bitmapFontData.distanceField ? {
      scaleMode: "linear",
      alphaMode: "premultiply-alpha-on-upload",
      autoGenerateMipmaps: false,
      resolution: 1
    } : {};
    for (let i = 0; i < pages.length; ++i) {
      const pageFile = pages[i].file;
      let imagePath = path.join(path.dirname(src), pageFile);
      imagePath = copySearchParams(imagePath, src);
      textureUrls.push({
        src: imagePath,
        data: textureOptions
      });
    }
    const loadedTextures = await loader.load(textureUrls);
    const textures = textureUrls.map((url) => loadedTextures[url.src]);
    const bitmapFont = new BitmapFont({
      data: bitmapFontData,
      textures
    }, src);
    return bitmapFont;
  },
  async load(url, _options) {
    const response = await DOMAdapter.get().fetch(url);
    return await response.text();
  },
  async unload(bitmapFont, _resolvedAsset, loader) {
    await Promise.all(bitmapFont.pages.map((page) => loader.unload(page.texture.source._sourceOrigin)));
    bitmapFont.destroy();
  }
};

// node_modules/pixi.js/lib/assets/BackgroundLoader.mjs
var BackgroundLoader = class {
  /**
   * @param loader
   * @param verbose - should the loader log to the console
   */
  constructor(loader, verbose = false) {
    this._loader = loader;
    this._assetList = [];
    this._isLoading = false;
    this._maxConcurrent = 1;
    this.verbose = verbose;
  }
  /**
   * Adds an array of assets to load.
   * @param assetUrls - assets to load
   */
  add(assetUrls) {
    assetUrls.forEach((a) => {
      this._assetList.push(a);
    });
    if (this.verbose) {
      console.log("[BackgroundLoader] assets: ", this._assetList);
    }
    if (this._isActive && !this._isLoading) {
      void this._next();
    }
  }
  /**
   * Loads the next set of assets. Will try to load as many assets as it can at the same time.
   *
   * The max assets it will try to load at one time will be 4.
   */
  async _next() {
    if (this._assetList.length && this._isActive) {
      this._isLoading = true;
      const toLoad = [];
      const toLoadAmount = Math.min(this._assetList.length, this._maxConcurrent);
      for (let i = 0; i < toLoadAmount; i++) {
        toLoad.push(this._assetList.pop());
      }
      await this._loader.load(toLoad);
      this._isLoading = false;
      void this._next();
    }
  }
  /**
   * Activate/Deactivate the loading. If set to true then it will immediately continue to load the next asset.
   * @returns whether the class is active
   */
  get active() {
    return this._isActive;
  }
  set active(value) {
    if (this._isActive === value)
      return;
    this._isActive = value;
    if (value && !this._isLoading) {
      void this._next();
    }
  }
};

// node_modules/pixi.js/lib/assets/cache/parsers/cacheTextureArray.mjs
var cacheTextureArray = {
  extension: {
    type: ExtensionType.CacheParser,
    name: "cacheTextureArray"
  },
  test: (asset) => Array.isArray(asset) && asset.every((t) => t instanceof Texture),
  getCacheableAssets: (keys, asset) => {
    const out = {};
    keys.forEach((key) => {
      asset.forEach((item, i) => {
        out[key + (i === 0 ? "" : i + 1)] = item;
      });
    });
    return out;
  }
};

// node_modules/pixi.js/lib/assets/detections/utils/testImageFormat.mjs
async function testImageFormat(imageData) {
  if ("Image" in globalThis) {
    return new Promise((resolve) => {
      const image = new Image();
      image.onload = () => {
        resolve(true);
      };
      image.onerror = () => {
        resolve(false);
      };
      image.src = imageData;
    });
  }
  if ("createImageBitmap" in globalThis && "fetch" in globalThis) {
    try {
      const blob = await (await fetch(imageData)).blob();
      await createImageBitmap(blob);
    } catch (e) {
      return false;
    }
    return true;
  }
  return false;
}

// node_modules/pixi.js/lib/assets/detections/parsers/detectAvif.mjs
var detectAvif = {
  extension: {
    type: ExtensionType.DetectionParser,
    priority: 1
  },
  test: async () => testImageFormat(
    // eslint-disable-next-line max-len
    "data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A="
  ),
  add: async (formats) => [...formats, "avif"],
  remove: async (formats) => formats.filter((f) => f !== "avif")
};

// node_modules/pixi.js/lib/assets/detections/parsers/detectDefaults.mjs
var imageFormats = ["png", "jpg", "jpeg"];
var detectDefaults = {
  extension: {
    type: ExtensionType.DetectionParser,
    priority: -1
  },
  test: () => Promise.resolve(true),
  add: async (formats) => [...formats, ...imageFormats],
  remove: async (formats) => formats.filter((f) => !imageFormats.includes(f))
};

// node_modules/pixi.js/lib/assets/detections/utils/testVideoFormat.mjs
var inWorker = "WorkerGlobalScope" in globalThis && globalThis instanceof globalThis.WorkerGlobalScope;
function testVideoFormat(mimeType) {
  if (inWorker) {
    return false;
  }
  const video = document.createElement("video");
  return video.canPlayType(mimeType) !== "";
}

// node_modules/pixi.js/lib/assets/detections/parsers/detectMp4.mjs
var detectMp4 = {
  extension: {
    type: ExtensionType.DetectionParser,
    priority: 0
  },
  test: async () => testVideoFormat("video/mp4"),
  add: async (formats) => [...formats, "mp4", "m4v"],
  remove: async (formats) => formats.filter((f) => f !== "mp4" && f !== "m4v")
};

// node_modules/pixi.js/lib/assets/detections/parsers/detectOgv.mjs
var detectOgv = {
  extension: {
    type: ExtensionType.DetectionParser,
    priority: 0
  },
  test: async () => testVideoFormat("video/ogg"),
  add: async (formats) => [...formats, "ogv"],
  remove: async (formats) => formats.filter((f) => f !== "ogv")
};

// node_modules/pixi.js/lib/assets/detections/parsers/detectWebm.mjs
var detectWebm = {
  extension: {
    type: ExtensionType.DetectionParser,
    priority: 0
  },
  test: async () => testVideoFormat("video/webm"),
  add: async (formats) => [...formats, "webm"],
  remove: async (formats) => formats.filter((f) => f !== "webm")
};

// node_modules/pixi.js/lib/assets/detections/parsers/detectWebp.mjs
var detectWebp = {
  extension: {
    type: ExtensionType.DetectionParser,
    priority: 0
  },
  test: async () => testImageFormat(
    "data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA="
  ),
  add: async (formats) => [...formats, "webp"],
  remove: async (formats) => formats.filter((f) => f !== "webp")
};

// node_modules/pixi.js/lib/assets/loader/Loader.mjs
var Loader = class {
  constructor() {
    this._parsers = [];
    this._parsersValidated = false;
    this.parsers = new Proxy(this._parsers, {
      set: (target, key, value) => {
        this._parsersValidated = false;
        target[key] = value;
        return true;
      }
    });
    this.promiseCache = {};
  }
  /** function used for testing */
  reset() {
    this._parsersValidated = false;
    this.promiseCache = {};
  }
  /**
   * Used internally to generate a promise for the asset to be loaded.
   * @param url - The URL to be loaded
   * @param data - any custom additional information relevant to the asset being loaded
   * @returns - a promise that will resolve to an Asset for example a Texture of a JSON object
   */
  _getLoadPromiseAndParser(url, data) {
    const result = {
      promise: null,
      parser: null
    };
    result.promise = (async () => {
      var _a, _b;
      let asset = null;
      let parser = null;
      if (data.loadParser) {
        parser = this._parserHash[data.loadParser];
        if (!parser) {
          warn(`[Assets] specified load parser "${data.loadParser}" not found while loading ${url}`);
        }
      }
      if (!parser) {
        for (let i = 0; i < this.parsers.length; i++) {
          const parserX = this.parsers[i];
          if (parserX.load && ((_a = parserX.test) == null ? void 0 : _a.call(parserX, url, data, this))) {
            parser = parserX;
            break;
          }
        }
        if (!parser) {
          warn(`[Assets] ${url} could not be loaded as we don't know how to parse it, ensure the correct parser has been added`);
          return null;
        }
      }
      asset = await parser.load(url, data, this);
      result.parser = parser;
      for (let i = 0; i < this.parsers.length; i++) {
        const parser2 = this.parsers[i];
        if (parser2.parse) {
          if (parser2.parse && await ((_b = parser2.testParse) == null ? void 0 : _b.call(parser2, asset, data, this))) {
            asset = await parser2.parse(asset, data, this) || asset;
            result.parser = parser2;
          }
        }
      }
      return asset;
    })();
    return result;
  }
  async load(assetsToLoadIn, onProgress) {
    if (!this._parsersValidated) {
      this._validateParsers();
    }
    let count = 0;
    const assets = {};
    const singleAsset = isSingleItem(assetsToLoadIn);
    const assetsToLoad = convertToList(assetsToLoadIn, (item) => ({
      alias: [item],
      src: item,
      data: {}
    }));
    const total = assetsToLoad.length;
    const promises = assetsToLoad.map(async (asset) => {
      const url = path.toAbsolute(asset.src);
      if (!assets[asset.src]) {
        try {
          if (!this.promiseCache[url]) {
            this.promiseCache[url] = this._getLoadPromiseAndParser(url, asset);
          }
          assets[asset.src] = await this.promiseCache[url].promise;
          if (onProgress)
            onProgress(++count / total);
        } catch (e) {
          delete this.promiseCache[url];
          delete assets[asset.src];
          throw new Error(`[Loader.load] Failed to load ${url}.
${e}`);
        }
      }
    });
    await Promise.all(promises);
    return singleAsset ? assets[assetsToLoad[0].src] : assets;
  }
  /**
   * Unloads one or more assets. Any unloaded assets will be destroyed, freeing up memory for your app.
   * The parser that created the asset, will be the one that unloads it.
   * @example
   * // Single asset:
   * const asset = await Loader.load('cool.png');
   *
   * await Loader.unload('cool.png');
   *
   * console.log(asset.destroyed); // true
   * @param assetsToUnloadIn - urls that you want to unload, or a single one!
   */
  async unload(assetsToUnloadIn) {
    const assetsToUnload = convertToList(assetsToUnloadIn, (item) => ({
      alias: [item],
      src: item
    }));
    const promises = assetsToUnload.map(async (asset) => {
      var _a, _b;
      const url = path.toAbsolute(asset.src);
      const loadPromise = this.promiseCache[url];
      if (loadPromise) {
        const loadedAsset = await loadPromise.promise;
        delete this.promiseCache[url];
        await ((_b = (_a = loadPromise.parser) == null ? void 0 : _a.unload) == null ? void 0 : _b.call(_a, loadedAsset, asset, this));
      }
    });
    await Promise.all(promises);
  }
  /** validates our parsers, right now it only checks for name conflicts but we can add more here as required! */
  _validateParsers() {
    this._parsersValidated = true;
    this._parserHash = this._parsers.filter((parser) => parser.name).reduce((hash, parser) => {
      if (!parser.name) {
        warn(`[Assets] loadParser should have a name`);
      } else if (hash[parser.name]) {
        warn(`[Assets] loadParser name conflict "${parser.name}"`);
      }
      return { ...hash, [parser.name]: parser };
    }, {});
  }
};

// node_modules/pixi.js/lib/assets/utils/checkDataUrl.mjs
function checkDataUrl(url, mimes) {
  if (Array.isArray(mimes)) {
    for (const mime of mimes) {
      if (url.startsWith(`data:${mime}`))
        return true;
    }
    return false;
  }
  return url.startsWith(`data:${mimes}`);
}

// node_modules/pixi.js/lib/assets/utils/checkExtension.mjs
function checkExtension(url, extension) {
  const tempURL = url.split("?")[0];
  const ext = path.extname(tempURL).toLowerCase();
  if (Array.isArray(extension)) {
    return extension.includes(ext);
  }
  return ext === extension;
}

// node_modules/pixi.js/lib/assets/loader/parsers/loadJson.mjs
var validJSONExtension = ".json";
var validJSONMIME = "application/json";
var loadJson = {
  extension: {
    type: ExtensionType.LoadParser,
    priority: LoaderParserPriority.Low
  },
  name: "loadJson",
  test(url) {
    return checkDataUrl(url, validJSONMIME) || checkExtension(url, validJSONExtension);
  },
  async load(url) {
    const response = await DOMAdapter.get().fetch(url);
    const json = await response.json();
    return json;
  }
};

// node_modules/pixi.js/lib/assets/loader/parsers/loadTxt.mjs
var validTXTExtension = ".txt";
var validTXTMIME = "text/plain";
var loadTxt = {
  name: "loadTxt",
  extension: {
    type: ExtensionType.LoadParser,
    priority: LoaderParserPriority.Low,
    name: "loadTxt"
  },
  test(url) {
    return checkDataUrl(url, validTXTMIME) || checkExtension(url, validTXTExtension);
  },
  async load(url) {
    const response = await DOMAdapter.get().fetch(url);
    const txt = await response.text();
    return txt;
  }
};

// node_modules/pixi.js/lib/assets/loader/parsers/loadWebFont.mjs
var validWeights = [
  "normal",
  "bold",
  "100",
  "200",
  "300",
  "400",
  "500",
  "600",
  "700",
  "800",
  "900"
];
var validFontExtensions = [".ttf", ".otf", ".woff", ".woff2"];
var validFontMIMEs = [
  "font/ttf",
  "font/otf",
  "font/woff",
  "font/woff2"
];
var CSS_IDENT_TOKEN_REGEX = /^(--|-?[A-Z_])[0-9A-Z_-]*$/i;
function getFontFamilyName(url) {
  const ext = path.extname(url);
  const name = path.basename(url, ext);
  const nameWithSpaces = name.replace(/(-|_)/g, " ");
  const nameTokens = nameWithSpaces.toLowerCase().split(" ").map((word) => word.charAt(0).toUpperCase() + word.slice(1));
  let valid = nameTokens.length > 0;
  for (const token of nameTokens) {
    if (!token.match(CSS_IDENT_TOKEN_REGEX)) {
      valid = false;
      break;
    }
  }
  let fontFamilyName = nameTokens.join(" ");
  if (!valid) {
    fontFamilyName = `"${fontFamilyName.replace(/[\\"]/g, "\\$&")}"`;
  }
  return fontFamilyName;
}
var validURICharactersRegex = /^[0-9A-Za-z%:/?#\[\]@!\$&'()\*\+,;=\-._~]*$/;
function encodeURIWhenNeeded(uri) {
  if (validURICharactersRegex.test(uri)) {
    return uri;
  }
  return encodeURI(uri);
}
var loadWebFont = {
  extension: {
    type: ExtensionType.LoadParser,
    priority: LoaderParserPriority.Low
  },
  name: "loadWebFont",
  test(url) {
    return checkDataUrl(url, validFontMIMEs) || checkExtension(url, validFontExtensions);
  },
  async load(url, options) {
    var _a, _b, _c;
    const fonts = DOMAdapter.get().getFontFaceSet();
    if (fonts) {
      const fontFaces = [];
      const name = ((_a = options.data) == null ? void 0 : _a.family) ?? getFontFamilyName(url);
      const weights = ((_c = (_b = options.data) == null ? void 0 : _b.weights) == null ? void 0 : _c.filter((weight) => validWeights.includes(weight))) ?? ["normal"];
      const data = options.data ?? {};
      for (let i = 0; i < weights.length; i++) {
        const weight = weights[i];
        const font = new FontFace(name, `url(${encodeURIWhenNeeded(url)})`, {
          ...data,
          weight
        });
        await font.load();
        fonts.add(font);
        fontFaces.push(font);
      }
      Cache.set(`${name}-and-url`, {
        url,
        fontFaces
      });
      return fontFaces.length === 1 ? fontFaces[0] : fontFaces;
    }
    warn("[loadWebFont] FontFace API is not supported. Skipping loading font");
    return null;
  },
  unload(font) {
    (Array.isArray(font) ? font : [font]).forEach((t) => {
      Cache.remove(t.family);
      DOMAdapter.get().getFontFaceSet().delete(t);
    });
  }
};

// node_modules/pixi.js/lib/utils/network/getResolutionOfUrl.mjs
function getResolutionOfUrl(url, defaultValue2 = 1) {
  var _a;
  const resolution = (_a = Resolver.RETINA_PREFIX) == null ? void 0 : _a.exec(url);
  if (resolution) {
    return parseFloat(resolution[1]);
  }
  return defaultValue2;
}

// node_modules/pixi.js/lib/assets/loader/parsers/textures/utils/createTexture.mjs
function createTexture(source7, loader, url) {
  source7.label = url;
  source7._sourceOrigin = url;
  const texture = new Texture({
    source: source7,
    label: url
  });
  const unload = () => {
    delete loader.promiseCache[url];
    if (Cache.has(url)) {
      Cache.remove(url);
    }
  };
  texture.source.once("destroy", () => {
    if (loader.promiseCache[url]) {
      warn("[Assets] A TextureSource managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the TextureSource.");
      unload();
    }
  });
  texture.once("destroy", () => {
    if (!source7.destroyed) {
      warn("[Assets] A Texture managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the Texture.");
      unload();
    }
  });
  return texture;
}

// node_modules/pixi.js/lib/assets/loader/parsers/textures/loadSVG.mjs
var validSVGExtension = ".svg";
var validSVGMIME = "image/svg+xml";
var loadSvg = {
  extension: {
    type: ExtensionType.LoadParser,
    priority: LoaderParserPriority.Low,
    name: "loadSVG"
  },
  name: "loadSVG",
  config: {
    crossOrigin: "anonymous",
    parseAsGraphicsContext: false
  },
  test(url) {
    return checkDataUrl(url, validSVGMIME) || checkExtension(url, validSVGExtension);
  },
  async load(url, asset, loader) {
    if (asset.data.parseAsGraphicsContext ?? this.config.parseAsGraphicsContext) {
      return loadAsGraphics(url);
    }
    return loadAsTexture(url, asset, loader, this.config.crossOrigin);
  },
  unload(asset) {
    asset.destroy(true);
  }
};
async function loadAsTexture(url, asset, loader, crossOrigin2) {
  var _a, _b, _c;
  const response = await DOMAdapter.get().fetch(url);
  const blob = await response.blob();
  const blobUrl = URL.createObjectURL(blob);
  const image = new Image();
  image.src = blobUrl;
  image.crossOrigin = crossOrigin2;
  await image.decode();
  URL.revokeObjectURL(blobUrl);
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  const resolution = ((_a = asset.data) == null ? void 0 : _a.resolution) || getResolutionOfUrl(url);
  const width = ((_b = asset.data) == null ? void 0 : _b.width) ?? image.width;
  const height = ((_c = asset.data) == null ? void 0 : _c.height) ?? image.height;
  canvas.width = width * resolution;
  canvas.height = height * resolution;
  context.drawImage(image, 0, 0, width * resolution, height * resolution);
  const { parseAsGraphicsContext: _p, ...rest } = asset.data;
  const base = new ImageSource({
    resource: canvas,
    alphaMode: "premultiply-alpha-on-upload",
    resolution,
    ...rest
  });
  return createTexture(base, loader, url);
}
async function loadAsGraphics(url) {
  const response = await DOMAdapter.get().fetch(url);
  const svgSource = await response.text();
  const context = new GraphicsContext();
  context.svg(svgSource);
  return context;
}

// node_modules/pixi.js/lib/_virtual/checkImageBitmap.worker.mjs
var WORKER_CODE = `(function () {
    'use strict';

    const WHITE_PNG = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+ip1sAAAAASUVORK5CYII=";
    async function checkImageBitmap() {
      try {
        if (typeof createImageBitmap !== "function")
          return false;
        const response = await fetch(WHITE_PNG);
        const imageBlob = await response.blob();
        const imageBitmap = await createImageBitmap(imageBlob);
        return imageBitmap.width === 1 && imageBitmap.height === 1;
      } catch (e) {
        return false;
      }
    }
    void checkImageBitmap().then((result) => {
      self.postMessage(result);
    });

})();
`;
var WORKER_URL = null;
var WorkerInstance = class {
  constructor() {
    if (!WORKER_URL) {
      WORKER_URL = URL.createObjectURL(new Blob([WORKER_CODE], { type: "application/javascript" }));
    }
    this.worker = new Worker(WORKER_URL);
  }
};
WorkerInstance.revokeObjectURL = function revokeObjectURL() {
  if (WORKER_URL) {
    URL.revokeObjectURL(WORKER_URL);
    WORKER_URL = null;
  }
};

// node_modules/pixi.js/lib/_virtual/loadImageBitmap.worker.mjs
var WORKER_CODE2 = '(function () {\n    \'use strict\';\n\n    async function loadImageBitmap(url, alphaMode) {\n      const response = await fetch(url);\n      if (!response.ok) {\n        throw new Error(`[WorkerManager.loadImageBitmap] Failed to fetch ${url}: ${response.status} ${response.statusText}`);\n      }\n      const imageBlob = await response.blob();\n      return alphaMode === "premultiplied-alpha" ? createImageBitmap(imageBlob, { premultiplyAlpha: "none" }) : createImageBitmap(imageBlob);\n    }\n    self.onmessage = async (event) => {\n      try {\n        const imageBitmap = await loadImageBitmap(event.data.data[0], event.data.data[1]);\n        self.postMessage({\n          data: imageBitmap,\n          uuid: event.data.uuid,\n          id: event.data.id\n        }, [imageBitmap]);\n      } catch (e) {\n        self.postMessage({\n          error: e,\n          uuid: event.data.uuid,\n          id: event.data.id\n        });\n      }\n    };\n\n})();\n';
var WORKER_URL2 = null;
var WorkerInstance2 = class {
  constructor() {
    if (!WORKER_URL2) {
      WORKER_URL2 = URL.createObjectURL(new Blob([WORKER_CODE2], { type: "application/javascript" }));
    }
    this.worker = new Worker(WORKER_URL2);
  }
};
WorkerInstance2.revokeObjectURL = function revokeObjectURL2() {
  if (WORKER_URL2) {
    URL.revokeObjectURL(WORKER_URL2);
    WORKER_URL2 = null;
  }
};

// node_modules/pixi.js/lib/assets/loader/workers/WorkerManager.mjs
var UUID = 0;
var MAX_WORKERS;
var WorkerManagerClass = class {
  constructor() {
    this._initialized = false;
    this._createdWorkers = 0;
    this._workerPool = [];
    this._queue = [];
    this._resolveHash = {};
  }
  isImageBitmapSupported() {
    if (this._isImageBitmapSupported !== void 0)
      return this._isImageBitmapSupported;
    this._isImageBitmapSupported = new Promise((resolve) => {
      const { worker } = new WorkerInstance();
      worker.addEventListener("message", (event) => {
        worker.terminate();
        WorkerInstance.revokeObjectURL();
        resolve(event.data);
      });
    });
    return this._isImageBitmapSupported;
  }
  loadImageBitmap(src, asset) {
    var _a;
    return this._run("loadImageBitmap", [src, (_a = asset == null ? void 0 : asset.data) == null ? void 0 : _a.alphaMode]);
  }
  async _initWorkers() {
    if (this._initialized)
      return;
    this._initialized = true;
  }
  _getWorker() {
    if (MAX_WORKERS === void 0) {
      MAX_WORKERS = navigator.hardwareConcurrency || 4;
    }
    let worker = this._workerPool.pop();
    if (!worker && this._createdWorkers < MAX_WORKERS) {
      this._createdWorkers++;
      worker = new WorkerInstance2().worker;
      worker.addEventListener("message", (event) => {
        this._complete(event.data);
        this._returnWorker(event.target);
        this._next();
      });
    }
    return worker;
  }
  _returnWorker(worker) {
    this._workerPool.push(worker);
  }
  _complete(data) {
    if (data.error !== void 0) {
      this._resolveHash[data.uuid].reject(data.error);
    } else {
      this._resolveHash[data.uuid].resolve(data.data);
    }
    this._resolveHash[data.uuid] = null;
  }
  async _run(id, args) {
    await this._initWorkers();
    const promise = new Promise((resolve, reject) => {
      this._queue.push({ id, arguments: args, resolve, reject });
    });
    this._next();
    return promise;
  }
  _next() {
    if (!this._queue.length)
      return;
    const worker = this._getWorker();
    if (!worker) {
      return;
    }
    const toDo = this._queue.pop();
    const id = toDo.id;
    this._resolveHash[UUID] = { resolve: toDo.resolve, reject: toDo.reject };
    worker.postMessage({
      data: toDo.arguments,
      uuid: UUID++,
      id
    });
  }
};
var WorkerManager = new WorkerManagerClass();

// node_modules/pixi.js/lib/assets/loader/parsers/textures/loadTextures.mjs
var validImageExtensions = [".jpeg", ".jpg", ".png", ".webp", ".avif"];
var validImageMIMEs = [
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/avif"
];
async function loadImageBitmap(url, asset) {
  var _a;
  const response = await DOMAdapter.get().fetch(url);
  if (!response.ok) {
    throw new Error(`[loadImageBitmap] Failed to fetch ${url}: ${response.status} ${response.statusText}`);
  }
  const imageBlob = await response.blob();
  return ((_a = asset == null ? void 0 : asset.data) == null ? void 0 : _a.alphaMode) === "premultiplied-alpha" ? createImageBitmap(imageBlob, { premultiplyAlpha: "none" }) : createImageBitmap(imageBlob);
}
var loadTextures = {
  name: "loadTextures",
  extension: {
    type: ExtensionType.LoadParser,
    priority: LoaderParserPriority.High,
    name: "loadTextures"
  },
  config: {
    preferWorkers: true,
    preferCreateImageBitmap: true,
    crossOrigin: "anonymous"
  },
  test(url) {
    return checkDataUrl(url, validImageMIMEs) || checkExtension(url, validImageExtensions);
  },
  async load(url, asset, loader) {
    var _a;
    let src = null;
    if (globalThis.createImageBitmap && this.config.preferCreateImageBitmap) {
      if (this.config.preferWorkers && await WorkerManager.isImageBitmapSupported()) {
        src = await WorkerManager.loadImageBitmap(url, asset);
      } else {
        src = await loadImageBitmap(url, asset);
      }
    } else {
      src = await new Promise((resolve) => {
        src = new Image();
        src.crossOrigin = this.config.crossOrigin;
        src.src = url;
        if (src.complete) {
          resolve(src);
        } else {
          src.onload = () => {
            resolve(src);
          };
        }
      });
    }
    const base = new ImageSource({
      resource: src,
      alphaMode: "premultiply-alpha-on-upload",
      resolution: ((_a = asset.data) == null ? void 0 : _a.resolution) || getResolutionOfUrl(url),
      ...asset.data
    });
    return createTexture(base, loader, url);
  },
  unload(texture) {
    texture.destroy(true);
  }
};

// node_modules/pixi.js/lib/assets/loader/parsers/textures/loadVideoTextures.mjs
var validVideoExtensions = [".mp4", ".m4v", ".webm", ".ogg", ".ogv", ".h264", ".avi", ".mov"];
var validVideoMIMEs = validVideoExtensions.map((ext) => `video/${ext.substring(1)}`);
function crossOrigin(element, url, crossorigin) {
  if (crossorigin === void 0 && !url.startsWith("data:")) {
    element.crossOrigin = determineCrossOrigin(url);
  } else if (crossorigin !== false) {
    element.crossOrigin = typeof crossorigin === "string" ? crossorigin : "anonymous";
  }
}
function preloadVideo(element) {
  return new Promise((resolve, reject) => {
    element.addEventListener("canplaythrough", loaded);
    element.addEventListener("error", error);
    element.load();
    function loaded() {
      cleanup();
      resolve();
    }
    function error(err) {
      cleanup();
      reject(err);
    }
    function cleanup() {
      element.removeEventListener("canplaythrough", loaded);
      element.removeEventListener("error", error);
    }
  });
}
function determineCrossOrigin(url, loc = globalThis.location) {
  if (url.startsWith("data:")) {
    return "";
  }
  loc = loc || globalThis.location;
  const parsedUrl = new URL(url, document.baseURI);
  if (parsedUrl.hostname !== loc.hostname || parsedUrl.port !== loc.port || parsedUrl.protocol !== loc.protocol) {
    return "anonymous";
  }
  return "";
}
var loadVideoTextures = {
  name: "loadVideo",
  extension: {
    type: ExtensionType.LoadParser,
    name: "loadVideo"
  },
  test(url) {
    const isValidDataUrl = checkDataUrl(url, validVideoMIMEs);
    const isValidExtension = checkExtension(url, validVideoExtensions);
    return isValidDataUrl || isValidExtension;
  },
  async load(url, asset, loader) {
    var _a, _b;
    const options = {
      ...VideoSource.defaultOptions,
      resolution: ((_a = asset.data) == null ? void 0 : _a.resolution) || getResolutionOfUrl(url),
      alphaMode: ((_b = asset.data) == null ? void 0 : _b.alphaMode) || await detectVideoAlphaMode(),
      ...asset.data
    };
    const videoElement = document.createElement("video");
    const attributeMap = {
      preload: options.autoLoad !== false ? "auto" : void 0,
      "webkit-playsinline": options.playsinline !== false ? "" : void 0,
      playsinline: options.playsinline !== false ? "" : void 0,
      muted: options.muted === true ? "" : void 0,
      loop: options.loop === true ? "" : void 0,
      autoplay: options.autoPlay !== false ? "" : void 0
    };
    Object.keys(attributeMap).forEach((key) => {
      const value = attributeMap[key];
      if (value !== void 0)
        videoElement.setAttribute(key, value);
    });
    if (options.muted === true) {
      videoElement.muted = true;
    }
    crossOrigin(videoElement, url, options.crossorigin);
    const sourceElement = document.createElement("source");
    let mime;
    if (url.startsWith("data:")) {
      mime = url.slice(5, url.indexOf(";"));
    } else if (!url.startsWith("blob:")) {
      const ext = url.split("?")[0].slice(url.lastIndexOf(".") + 1).toLowerCase();
      mime = VideoSource.MIME_TYPES[ext] || `video/${ext}`;
    }
    sourceElement.src = url;
    if (mime) {
      sourceElement.type = mime;
    }
    return new Promise((resolve) => {
      const onCanPlay = async () => {
        const base = new VideoSource({ ...options, resource: videoElement });
        videoElement.removeEventListener("canplay", onCanPlay);
        if (asset.data.preload) {
          await preloadVideo(videoElement);
        }
        resolve(createTexture(base, loader, url));
      };
      videoElement.addEventListener("canplay", onCanPlay);
      videoElement.appendChild(sourceElement);
    });
  },
  unload(texture) {
    texture.destroy(true);
  }
};

// node_modules/pixi.js/lib/assets/resolver/parsers/resolveTextureUrl.mjs
var resolveTextureUrl = {
  extension: {
    type: ExtensionType.ResolveParser,
    name: "resolveTexture"
  },
  test: loadTextures.test,
  parse: (value) => {
    var _a;
    return {
      resolution: parseFloat(((_a = Resolver.RETINA_PREFIX.exec(value)) == null ? void 0 : _a[1]) ?? "1"),
      format: value.split(".").pop(),
      src: value
    };
  }
};

// node_modules/pixi.js/lib/assets/resolver/parsers/resolveJsonUrl.mjs
var resolveJsonUrl = {
  extension: {
    type: ExtensionType.ResolveParser,
    priority: -2,
    name: "resolveJson"
  },
  test: (value) => Resolver.RETINA_PREFIX.test(value) && value.endsWith(".json"),
  parse: resolveTextureUrl.parse
};

// node_modules/pixi.js/lib/assets/Assets.mjs
var AssetsClass = class {
  constructor() {
    this._detections = [];
    this._initialized = false;
    this.resolver = new Resolver();
    this.loader = new Loader();
    this.cache = Cache;
    this._backgroundLoader = new BackgroundLoader(this.loader);
    this._backgroundLoader.active = true;
    this.reset();
  }
  /**
   * Best practice is to call this function before any loading commences
   * Initiating is the best time to add any customization to the way things are loaded.
   *
   * you do not need to call this for the Assets class to work, only if you want to set any initial properties
   * @param options - options to initialize the Assets manager with
   */
  async init(options = {}) {
    var _a, _b;
    if (this._initialized) {
      warn("[Assets]AssetManager already initialized, did you load before calling this Assets.init()?");
      return;
    }
    this._initialized = true;
    if (options.defaultSearchParams) {
      this.resolver.setDefaultSearchParams(options.defaultSearchParams);
    }
    if (options.basePath) {
      this.resolver.basePath = options.basePath;
    }
    if (options.bundleIdentifier) {
      this.resolver.setBundleIdentifier(options.bundleIdentifier);
    }
    if (options.manifest) {
      let manifest = options.manifest;
      if (typeof manifest === "string") {
        manifest = await this.load(manifest);
      }
      this.resolver.addManifest(manifest);
    }
    const resolutionPref = ((_a = options.texturePreference) == null ? void 0 : _a.resolution) ?? 1;
    const resolution = typeof resolutionPref === "number" ? [resolutionPref] : resolutionPref;
    const formats = await this._detectFormats({
      preferredFormats: (_b = options.texturePreference) == null ? void 0 : _b.format,
      skipDetections: options.skipDetections,
      detections: this._detections
    });
    this.resolver.prefer({
      params: {
        format: formats,
        resolution
      }
    });
    if (options.preferences) {
      this.setPreferences(options.preferences);
    }
  }
  /**
   * Allows you to specify how to resolve any assets load requests.
   * There are a few ways to add things here as shown below:
   * @example
   * import { Assets } from 'pixi.js';
   *
   * // Simple
   * Assets.add({alias: 'bunnyBooBoo', src: 'bunny.png'});
   * const bunny = await Assets.load('bunnyBooBoo');
   *
   * // Multiple keys:
   * Assets.add({alias: ['burger', 'chicken'], src: 'bunny.png'});
   *
   * const bunny = await Assets.load('burger');
   * const bunny2 = await Assets.load('chicken');
   *
   * // passing options to to the object
   * Assets.add({
   *     alias: 'bunnyBooBooSmooth',
   *     src: 'bunny{png,webp}',
   *     data: { scaleMode: SCALE_MODES.NEAREST }, // Base texture options
   * });
   *
   * // Multiple assets
   *
   * // The following all do the same thing:
   *
   * Assets.add({alias: 'bunnyBooBoo', src: 'bunny{png,webp}'});
   *
   * Assets.add({
   *     alias: 'bunnyBooBoo',
   *     src: [
   *         'bunny.png',
   *         'bunny.webp',
   *    ],
   * });
   *
   * const bunny = await Assets.load('bunnyBooBoo'); // Will try to load WebP if available
   * @param assets - the unresolved assets to add to the resolver
   */
  add(assets) {
    this.resolver.add(assets);
  }
  async load(urls, onProgress) {
    if (!this._initialized) {
      await this.init();
    }
    const singleAsset = isSingleItem(urls);
    const urlArray = convertToList(urls).map((url) => {
      if (typeof url !== "string") {
        const aliases = this.resolver.getAlias(url);
        if (aliases.some((alias) => !this.resolver.hasKey(alias))) {
          this.add(url);
        }
        return Array.isArray(aliases) ? aliases[0] : aliases;
      }
      if (!this.resolver.hasKey(url))
        this.add({ alias: url, src: url });
      return url;
    });
    const resolveResults = this.resolver.resolve(urlArray);
    const out = await this._mapLoadToResolve(resolveResults, onProgress);
    return singleAsset ? out[urlArray[0]] : out;
  }
  /**
   * This adds a bundle of assets in one go so that you can load them as a group.
   * For example you could add a bundle for each screen in you pixi app
   * @example
   * import { Assets } from 'pixi.js';
   *
   * Assets.addBundle('animals', [
   *  { alias: 'bunny', src: 'bunny.png' },
   *  { alias: 'chicken', src: 'chicken.png' },
   *  { alias: 'thumper', src: 'thumper.png' },
   * ]);
   * // or
   * Assets.addBundle('animals', {
   *     bunny: 'bunny.png',
   *     chicken: 'chicken.png',
   *     thumper: 'thumper.png',
   * });
   *
   * const assets = await Assets.loadBundle('animals');
   * @param bundleId - the id of the bundle to add
   * @param assets - a record of the asset or assets that will be chosen from when loading via the specified key
   */
  addBundle(bundleId, assets) {
    this.resolver.addBundle(bundleId, assets);
  }
  /**
   * Bundles are a way to load multiple assets at once.
   * If a manifest has been provided to the init function then you can load a bundle, or bundles.
   * you can also add bundles via `addBundle`
   * @example
   * import { Assets } from 'pixi.js';
   *
   * // Manifest Example
   * const manifest = {
   *     bundles: [
   *         {
   *             name: 'load-screen',
   *             assets: [
   *                 {
   *                     alias: 'background',
   *                     src: 'sunset.png',
   *                 },
   *                 {
   *                     alias: 'bar',
   *                     src: 'load-bar.{png,webp}',
   *                 },
   *             ],
   *         },
   *         {
   *             name: 'game-screen',
   *             assets: [
   *                 {
   *                     alias: 'character',
   *                     src: 'robot.png',
   *                 },
   *                 {
   *                     alias: 'enemy',
   *                     src: 'bad-guy.png',
   *                 },
   *             ],
   *         },
   *     ]
   * };
   *
   * await Assets.init({ manifest });
   *
   * // Load a bundle...
   * loadScreenAssets = await Assets.loadBundle('load-screen');
   * // Load another bundle...
   * gameScreenAssets = await Assets.loadBundle('game-screen');
   * @param bundleIds - the bundle id or ids to load
   * @param onProgress - Optional function that is called when progress on asset loading is made.
   * The function is passed a single parameter, `progress`, which represents the percentage (0.0 - 1.0)
   * of the assets loaded. Do not use this function to detect when assets are complete and available,
   * instead use the Promise returned by this function.
   * @returns all the bundles assets or a hash of assets for each bundle specified
   */
  async loadBundle(bundleIds, onProgress) {
    if (!this._initialized) {
      await this.init();
    }
    let singleAsset = false;
    if (typeof bundleIds === "string") {
      singleAsset = true;
      bundleIds = [bundleIds];
    }
    const resolveResults = this.resolver.resolveBundle(bundleIds);
    const out = {};
    const keys = Object.keys(resolveResults);
    let count = 0;
    let total = 0;
    const _onProgress = () => {
      onProgress == null ? void 0 : onProgress(++count / total);
    };
    const promises = keys.map((bundleId) => {
      const resolveResult = resolveResults[bundleId];
      total += Object.keys(resolveResult).length;
      return this._mapLoadToResolve(resolveResult, _onProgress).then((resolveResult2) => {
        out[bundleId] = resolveResult2;
      });
    });
    await Promise.all(promises);
    return singleAsset ? out[bundleIds[0]] : out;
  }
  /**
   * Initiate a background load of some assets. It will passively begin to load these assets in the background.
   * So when you actually come to loading them you will get a promise that resolves to the loaded assets immediately
   *
   * An example of this might be that you would background load game assets after your initial load.
   * then when you got to actually load your game screen assets when a player goes to the game - the loading
   * would already have stared or may even be complete, saving you having to show an interim load bar.
   * @example
   * import { Assets } from 'pixi.js';
   *
   * Assets.backgroundLoad('bunny.png');
   *
   * // later on in your app...
   * await Assets.loadBundle('bunny.png'); // Will resolve quicker as loading may have completed!
   * @param urls - the url / urls you want to background load
   */
  async backgroundLoad(urls) {
    if (!this._initialized) {
      await this.init();
    }
    if (typeof urls === "string") {
      urls = [urls];
    }
    const resolveResults = this.resolver.resolve(urls);
    this._backgroundLoader.add(Object.values(resolveResults));
  }
  /**
   * Initiate a background of a bundle, works exactly like backgroundLoad but for bundles.
   * this can only be used if the loader has been initiated with a manifest
   * @example
   * import { Assets } from 'pixi.js';
   *
   * await Assets.init({
   *     manifest: {
   *         bundles: [
   *             {
   *                 name: 'load-screen',
   *                 assets: [...],
   *             },
   *             ...
   *         ],
   *     },
   * });
   *
   * Assets.backgroundLoadBundle('load-screen');
   *
   * // Later on in your app...
   * await Assets.loadBundle('load-screen'); // Will resolve quicker as loading may have completed!
   * @param bundleIds - the bundleId / bundleIds you want to background load
   */
  async backgroundLoadBundle(bundleIds) {
    if (!this._initialized) {
      await this.init();
    }
    if (typeof bundleIds === "string") {
      bundleIds = [bundleIds];
    }
    const resolveResults = this.resolver.resolveBundle(bundleIds);
    Object.values(resolveResults).forEach((resolveResult) => {
      this._backgroundLoader.add(Object.values(resolveResult));
    });
  }
  /**
   * Only intended for development purposes.
   * This will wipe the resolver and caches.
   * You will need to reinitialize the Asset
   */
  reset() {
    this.resolver.reset();
    this.loader.reset();
    this.cache.reset();
    this._initialized = false;
  }
  get(keys) {
    if (typeof keys === "string") {
      return Cache.get(keys);
    }
    const assets = {};
    for (let i = 0; i < keys.length; i++) {
      assets[i] = Cache.get(keys[i]);
    }
    return assets;
  }
  /**
   * helper function to map resolved assets back to loaded assets
   * @param resolveResults - the resolve results from the resolver
   * @param onProgress - the progress callback
   */
  async _mapLoadToResolve(resolveResults, onProgress) {
    const resolveArray = [...new Set(Object.values(resolveResults))];
    this._backgroundLoader.active = false;
    const loadedAssets = await this.loader.load(resolveArray, onProgress);
    this._backgroundLoader.active = true;
    const out = {};
    resolveArray.forEach((resolveResult) => {
      const asset = loadedAssets[resolveResult.src];
      const keys = [resolveResult.src];
      if (resolveResult.alias) {
        keys.push(...resolveResult.alias);
      }
      keys.forEach((key) => {
        out[key] = asset;
      });
      Cache.set(keys, asset);
    });
    return out;
  }
  /**
   * Unload an asset or assets. As the Assets class is responsible for creating the assets via the `load` function
   * this will make sure to destroy any assets and release them from memory.
   * Once unloaded, you will need to load the asset again.
   *
   * Use this to help manage assets if you find that you have a large app and you want to free up memory.
   *
   * - it's up to you as the developer to make sure that textures are not actively being used when you unload them,
   * Pixi won't break but you will end up with missing assets. Not a good look for the user!
   * @example
   * import { Assets } from 'pixi.js';
   *
   * // Load a URL:
   * const myImageTexture = await Assets.load('http://some.url.com/image.png'); // => returns a texture
   *
   * await Assets.unload('http://some.url.com/image.png')
   *
   * // myImageTexture will be destroyed now.
   *
   * // Unload multiple assets:
   * const textures = await Assets.unload(['thumper', 'chicko']);
   * @param urls - the urls to unload
   */
  async unload(urls) {
    if (!this._initialized) {
      await this.init();
    }
    const urlArray = convertToList(urls).map((url) => typeof url !== "string" ? url.src : url);
    const resolveResults = this.resolver.resolve(urlArray);
    await this._unloadFromResolved(resolveResults);
  }
  /**
   * Bundles are a way to manage multiple assets at once.
   * this will unload all files in a bundle.
   *
   * once a bundle has been unloaded, you need to load it again to have access to the assets.
   * @example
   * import { Assets } from 'pixi.js';
   *
   * Assets.addBundle({
   *     'thumper': 'http://some.url.com/thumper.png',
   * })
   *
   * const assets = await Assets.loadBundle('thumper');
   *
   * // Now to unload...
   *
   * await Assets.unloadBundle('thumper');
   *
   * // All assets in the assets object will now have been destroyed and purged from the cache
   * @param bundleIds - the bundle id or ids to unload
   */
  async unloadBundle(bundleIds) {
    if (!this._initialized) {
      await this.init();
    }
    bundleIds = convertToList(bundleIds);
    const resolveResults = this.resolver.resolveBundle(bundleIds);
    const promises = Object.keys(resolveResults).map((bundleId) => this._unloadFromResolved(resolveResults[bundleId]));
    await Promise.all(promises);
  }
  async _unloadFromResolved(resolveResult) {
    const resolveArray = Object.values(resolveResult);
    resolveArray.forEach((resolveResult2) => {
      Cache.remove(resolveResult2.src);
    });
    await this.loader.unload(resolveArray);
  }
  /**
   * Detects the supported formats for the browser, and returns an array of supported formats, respecting
   * the users preferred formats order.
   * @param options - the options to use when detecting formats
   * @param options.preferredFormats - the preferred formats to use
   * @param options.skipDetections - if we should skip the detections altogether
   * @param options.detections - the detections to use
   * @returns - the detected formats
   */
  async _detectFormats(options) {
    let formats = [];
    if (options.preferredFormats) {
      formats = Array.isArray(options.preferredFormats) ? options.preferredFormats : [options.preferredFormats];
    }
    for (const detection of options.detections) {
      if (options.skipDetections || await detection.test()) {
        formats = await detection.add(formats);
      } else if (!options.skipDetections) {
        formats = await detection.remove(formats);
      }
    }
    formats = formats.filter((format, index) => formats.indexOf(format) === index);
    return formats;
  }
  /** All the detection parsers currently added to the Assets class. */
  get detections() {
    return this._detections;
  }
  /**
   * General setter for preferences. This is a helper function to set preferences on all parsers.
   * @param preferences - the preferences to set
   */
  setPreferences(preferences) {
    this.loader.parsers.forEach((parser) => {
      if (!parser.config)
        return;
      Object.keys(parser.config).filter((key) => key in preferences).forEach((key) => {
        parser.config[key] = preferences[key];
      });
    });
  }
};
var Assets = new AssetsClass();
extensions.handleByList(ExtensionType.LoadParser, Assets.loader.parsers).handleByList(ExtensionType.ResolveParser, Assets.resolver.parsers).handleByList(ExtensionType.CacheParser, Assets.cache.parsers).handleByList(ExtensionType.DetectionParser, Assets.detections);
extensions.add(
  cacheTextureArray,
  detectDefaults,
  detectAvif,
  detectWebp,
  detectMp4,
  detectOgv,
  detectWebm,
  loadJson,
  loadTxt,
  loadWebFont,
  loadSvg,
  loadTextures,
  loadVideoTextures,
  loadBitmapFont,
  bitmapFontCachePlugin,
  resolveTextureUrl,
  resolveJsonUrl
);
var assetKeyMap = {
  loader: ExtensionType.LoadParser,
  resolver: ExtensionType.ResolveParser,
  cache: ExtensionType.CacheParser,
  detection: ExtensionType.DetectionParser
};
extensions.handle(ExtensionType.Asset, (extension) => {
  const ref = extension.ref;
  Object.entries(assetKeyMap).filter(([key]) => !!ref[key]).forEach(([key, type]) => extensions.add(Object.assign(
    ref[key],
    // Allow the function to optionally define it's own
    // ExtensionMetadata, the use cases here is priority for LoaderParsers
    { extension: ref[key].extension ?? type }
  )));
}, (extension) => {
  const ref = extension.ref;
  Object.keys(assetKeyMap).filter((key) => !!ref[key]).forEach((key) => extensions.remove(ref[key]));
});

// node_modules/pixi.js/lib/compressed-textures/basis/detectBasis.mjs
var detectBasis = {
  extension: {
    type: ExtensionType.DetectionParser,
    priority: 3
  },
  test: async () => {
    if (await isWebGPUSupported())
      return true;
    if (isWebGLSupported())
      return true;
    return false;
  },
  add: async (formats) => [...formats, "basis"],
  remove: async (formats) => formats.filter((f) => f !== "basis")
};

// node_modules/pixi.js/lib/rendering/renderers/shared/texture/sources/CompressedSource.mjs
var CompressedSource = class extends TextureSource {
  constructor(options) {
    super(options);
    this.uploadMethodId = "compressed";
    this.resource = options.resource;
    this.mipLevelCount = this.resource.length;
  }
};

// node_modules/pixi.js/lib/rendering/renderers/gl/texture/utils/getSupportedGlCompressedTextureFormats.mjs
var supportedGLCompressedTextureFormats;
function getSupportedGlCompressedTextureFormats() {
  if (supportedGLCompressedTextureFormats)
    return supportedGLCompressedTextureFormats;
  const canvas = document.createElement("canvas");
  const gl = canvas.getContext("webgl");
  if (!gl) {
    return [];
  }
  supportedGLCompressedTextureFormats = [
    // BC compressed formats usable if "texture-compression-bc" is both
    // supported by the device/user agent and enabled in requestDevice.
    // 'bc6h-rgb-ufloat'
    // 'bc6h-rgb-float'
    // 'bc7-rgba-unorm',
    // 'bc7-rgba-unorm-srgb',
    ...gl.getExtension("EXT_texture_compression_bptc") ? [
      "bc6h-rgb-ufloat",
      "bc6h-rgb-float",
      "bc7-rgba-unorm",
      "bc7-rgba-unorm-srgb"
    ] : [],
    // BC compressed formats usable if "texture-compression-bc" is both
    // supported by the device/user agent and enabled in requestDevice.
    // 'bc1-rgba-unorm',
    // 'bc1-rgba-unorm-srgb',
    // 'bc4-r-unorm'
    // 'bc4-r-snorm'
    // 'bc5-rg-unorm'
    // 'bc5-rg-snorm'
    ...gl.getExtension("WEBGL_compressed_texture_s3tc") ? [
      "bc1-rgba-unorm",
      "bc2-rgba-unorm",
      "bc3-rgba-unorm"
    ] : [],
    ...gl.getExtension("WEBGL_compressed_texture_s3tc_srgb") ? [
      "bc1-rgba-unorm-srgb",
      "bc2-rgba-unorm-srgb",
      "bc3-rgba-unorm-srgb"
    ] : [],
    ...gl.getExtension("EXT_texture_compression_rgtc") ? [
      "bc4-r-unorm",
      "bc4-r-snorm",
      "bc5-rg-unorm",
      "bc5-rg-snorm"
    ] : [],
    // ETC2 compressed formats usable if "texture-compression-etc2" is both
    // supported by the device/user agent and enabled in requestDevice.
    ...gl.getExtension("WEBGL_compressed_texture_etc") ? [
      "etc2-rgb8unorm",
      "etc2-rgb8unorm-srgb",
      "etc2-rgba8unorm",
      "etc2-rgba8unorm-srgb",
      "etc2-rgb8a1unorm",
      "etc2-rgb8a1unorm-srgb",
      "eac-r11unorm",
      "eac-rg11unorm"
    ] : [],
    // 'eac-r11snorm',
    // 'eac-rg11snorm',
    // ASTC compressed formats usable if "texture-compression-astc" is both
    // supported by the device/user agent and enabled in requestDevice.
    ...gl.getExtension("WEBGL_compressed_texture_astc") ? [
      "astc-4x4-unorm",
      "astc-4x4-unorm-srgb",
      "astc-5x4-unorm",
      "astc-5x4-unorm-srgb",
      "astc-5x5-unorm",
      "astc-5x5-unorm-srgb",
      "astc-6x5-unorm",
      "astc-6x5-unorm-srgb",
      "astc-6x6-unorm",
      "astc-6x6-unorm-srgb",
      "astc-8x5-unorm",
      "astc-8x5-unorm-srgb",
      "astc-8x6-unorm",
      "astc-8x6-unorm-srgb",
      "astc-8x8-unorm",
      "astc-8x8-unorm-srgb",
      "astc-10x5-unorm",
      "astc-10x5-unorm-srgb",
      "astc-10x6-unorm",
      "astc-10x6-unorm-srgb",
      "astc-10x8-unorm",
      "astc-10x8-unorm-srgb",
      "astc-10x10-unorm",
      "astc-10x10-unorm-srgb",
      "astc-12x10-unorm",
      "astc-12x10-unorm-srgb",
      "astc-12x12-unorm",
      "astc-12x12-unorm-srgb"
    ] : []
  ];
  return supportedGLCompressedTextureFormats;
}

// node_modules/pixi.js/lib/rendering/renderers/gpu/texture/utils/getSupportedGPUCompressedTextureFormats.mjs
var supportedGPUCompressedTextureFormats;
async function getSupportedGPUCompressedTextureFormats() {
  if (supportedGPUCompressedTextureFormats)
    return supportedGPUCompressedTextureFormats;
  const adapter = await DOMAdapter.get().getNavigator().gpu.requestAdapter();
  supportedGPUCompressedTextureFormats = [
    ...adapter.features.has("texture-compression-bc") ? [
      // BC compressed formats usable if "texture-compression-bc" is both
      // supported by the device/user agent and enabled in requestDevice.
      "bc1-rgba-unorm",
      "bc1-rgba-unorm-srgb",
      "bc2-rgba-unorm",
      "bc2-rgba-unorm-srgb",
      "bc3-rgba-unorm",
      "bc3-rgba-unorm-srgb",
      "bc4-r-unorm",
      "bc4-r-snorm",
      "bc5-rg-unorm",
      "bc5-rg-snorm",
      "bc6h-rgb-ufloat",
      "bc6h-rgb-float",
      "bc7-rgba-unorm",
      "bc7-rgba-unorm-srgb"
    ] : [],
    ...adapter.features.has("texture-compression-etc2") ? [
      // ETC2 compressed formats usable if "texture-compression-etc2" is both
      // supported by the device/user agent and enabled in requestDevice.
      "etc2-rgb8unorm",
      "etc2-rgb8unorm-srgb",
      "etc2-rgb8a1unorm",
      "etc2-rgb8a1unorm-srgb",
      "etc2-rgba8unorm",
      "etc2-rgba8unorm-srgb",
      "eac-r11unorm",
      "eac-r11snorm",
      "eac-rg11unorm",
      "eac-rg11snorm"
    ] : [],
    ...adapter.features.has("texture-compression-astc") ? [
      // ASTC compressed formats usable if "texture-compression-astc" is both
      // supported by the device/user agent and enabled in requestDevice.
      "astc-4x4-unorm",
      "astc-4x4-unorm-srgb",
      "astc-5x4-unorm",
      "astc-5x4-unorm-srgb",
      "astc-5x5-unorm",
      "astc-5x5-unorm-srgb",
      "astc-6x5-unorm",
      "astc-6x5-unorm-srgb",
      "astc-6x6-unorm",
      "astc-6x6-unorm-srgb",
      "astc-8x5-unorm",
      "astc-8x5-unorm-srgb",
      "astc-8x6-unorm",
      "astc-8x6-unorm-srgb",
      "astc-8x8-unorm",
      "astc-8x8-unorm-srgb",
      "astc-10x5-unorm",
      "astc-10x5-unorm-srgb",
      "astc-10x6-unorm",
      "astc-10x6-unorm-srgb",
      "astc-10x8-unorm",
      "astc-10x8-unorm-srgb",
      "astc-10x10-unorm",
      "astc-10x10-unorm-srgb",
      "astc-12x10-unorm",
      "astc-12x10-unorm-srgb",
      "astc-12x12-unorm",
      "astc-12x12-unorm-srgb"
    ] : []
  ];
  return supportedGPUCompressedTextureFormats;
}

// node_modules/pixi.js/lib/rendering/renderers/shared/texture/utils/getSupportedCompressedTextureFormats.mjs
var supportedCompressedTextureFormats;
async function getSupportedCompressedTextureFormats() {
  if (supportedCompressedTextureFormats !== void 0)
    return supportedCompressedTextureFormats;
  supportedCompressedTextureFormats = await (async () => {
    const _isWebGPUSupported2 = await isWebGPUSupported();
    const _isWebGLSupported2 = isWebGLSupported();
    if (_isWebGPUSupported2 && _isWebGLSupported2) {
      const gpuTextureFormats = await getSupportedGPUCompressedTextureFormats();
      const glTextureFormats = getSupportedGlCompressedTextureFormats();
      return gpuTextureFormats.filter((format) => glTextureFormats.includes(format));
    } else if (_isWebGPUSupported2) {
      return await getSupportedGPUCompressedTextureFormats();
    } else if (_isWebGLSupported2) {
      return getSupportedGlCompressedTextureFormats();
    }
    return [];
  })();
  return supportedCompressedTextureFormats;
}

// node_modules/pixi.js/lib/rendering/renderers/shared/texture/utils/getSupportedTextureFormats.mjs
var nonCompressedFormats = [
  // 8-bit formats
  "r8unorm",
  "r8snorm",
  "r8uint",
  "r8sint",
  // 16-bit formats
  "r16uint",
  "r16sint",
  "r16float",
  "rg8unorm",
  "rg8snorm",
  "rg8uint",
  "rg8sint",
  // 32-bit formats
  "r32uint",
  "r32sint",
  "r32float",
  "rg16uint",
  "rg16sint",
  "rg16float",
  "rgba8unorm",
  "rgba8unorm-srgb",
  "rgba8snorm",
  "rgba8uint",
  "rgba8sint",
  "bgra8unorm",
  "bgra8unorm-srgb",
  // Packed 32-bit formats
  "rgb9e5ufloat",
  "rgb10a2unorm",
  "rg11b10ufloat",
  // 64-bit formats
  "rg32uint",
  "rg32sint",
  "rg32float",
  "rgba16uint",
  "rgba16sint",
  "rgba16float",
  // 128-bit formats
  "rgba32uint",
  "rgba32sint",
  "rgba32float",
  // Depth/stencil formats
  "stencil8",
  "depth16unorm",
  "depth24plus",
  "depth24plus-stencil8",
  "depth32float",
  // "depth32float-stencil8" feature
  "depth32float-stencil8"
];
var supportedTextureFormats;
async function getSupportedTextureFormats() {
  if (supportedTextureFormats !== void 0)
    return supportedTextureFormats;
  const compressedTextureFormats = await getSupportedCompressedTextureFormats();
  supportedTextureFormats = [
    ...nonCompressedFormats,
    ...compressedTextureFormats
  ];
  return supportedTextureFormats;
}

// node_modules/pixi.js/lib/_virtual/basis.worker.mjs
var WORKER_CODE3 = '(function () {\n    \'use strict\';\n\n    function createLevelBuffers(basisTexture, basisTranscoderFormat) {\n      const images = basisTexture.getNumImages();\n      const levels = basisTexture.getNumLevels(0);\n      const success = basisTexture.startTranscoding();\n      if (!success) {\n        throw new Error("startTranscoding failed");\n      }\n      const levelBuffers = [];\n      for (let levelIndex = 0; levelIndex < levels; ++levelIndex) {\n        for (let sliceIndex = 0; sliceIndex < images; ++sliceIndex) {\n          const transcodeSize = basisTexture.getImageTranscodedSizeInBytes(sliceIndex, levelIndex, basisTranscoderFormat);\n          const levelBuffer = new Uint8Array(transcodeSize);\n          const success2 = basisTexture.transcodeImage(levelBuffer, sliceIndex, levelIndex, basisTranscoderFormat, 1, 0);\n          if (!success2) {\n            throw new Error("transcodeImage failed");\n          }\n          levelBuffers.push(levelBuffer);\n        }\n      }\n      return levelBuffers;\n    }\n\n    const gpuFormatToBasisTranscoderFormatMap = {\n      "bc3-rgba-unorm": 3,\n      // cTFBC3_RGBA\n      "bc7-rgba-unorm": 6,\n      // cTFBC7_RGBA,\n      "etc2-rgba8unorm": 1,\n      // cTFETC2_RGBA,\n      "astc-4x4-unorm": 10,\n      // cTFASTC_4x4_RGBA,\n      // Uncompressed\n      rgba8unorm: 13,\n      // cTFRGBA32,\n      rgba4unorm: 16\n      // cTFRGBA4444,\n    };\n    function gpuFormatToBasisTranscoderFormat(transcoderFormat) {\n      const format = gpuFormatToBasisTranscoderFormatMap[transcoderFormat];\n      if (format) {\n        return format;\n      }\n      throw new Error(`Unsupported transcoderFormat: ${transcoderFormat}`);\n    }\n\n    const settings = {\n      jsUrl: "basis/basis_transcoder.js",\n      wasmUrl: "basis/basis_transcoder.wasm"\n    };\n    let basisTranscoderFormat;\n    let basisTranscodedTextureFormat;\n    let basisPromise;\n    async function getBasis() {\n      if (!basisPromise) {\n        const absoluteJsUrl = new URL(settings.jsUrl, location.origin).href;\n        const absoluteWasmUrl = new URL(settings.wasmUrl, location.origin).href;\n        importScripts(absoluteJsUrl);\n        basisPromise = new Promise((resolve) => {\n          BASIS({\n            locateFile: (_file) => absoluteWasmUrl\n          }).then((module) => {\n            module.initializeBasis();\n            resolve(module.BasisFile);\n          });\n        });\n      }\n      return basisPromise;\n    }\n    async function fetchBasisTexture(url, BasisTexture) {\n      const basisResponse = await fetch(url);\n      if (basisResponse.ok) {\n        const basisArrayBuffer = await basisResponse.arrayBuffer();\n        return new BasisTexture(new Uint8Array(basisArrayBuffer));\n      }\n      throw new Error(`Failed to load Basis texture: ${url}`);\n    }\n    const preferredTranscodedFormat = [\n      "bc7-rgba-unorm",\n      "astc-4x4-unorm",\n      "etc2-rgba8unorm",\n      "bc3-rgba-unorm",\n      "rgba8unorm"\n    ];\n    async function load(url) {\n      const BasisTexture = await getBasis();\n      const basisTexture = await fetchBasisTexture(url, BasisTexture);\n      const levelBuffers = createLevelBuffers(basisTexture, basisTranscoderFormat);\n      return {\n        width: basisTexture.getImageWidth(0, 0),\n        height: basisTexture.getImageHeight(0, 0),\n        format: basisTranscodedTextureFormat,\n        resource: levelBuffers,\n        alphaMode: "no-premultiply-alpha"\n      };\n    }\n    async function init(jsUrl, wasmUrl, supportedTextures) {\n      if (jsUrl)\n        settings.jsUrl = jsUrl;\n      if (wasmUrl)\n        settings.wasmUrl = wasmUrl;\n      basisTranscodedTextureFormat = preferredTranscodedFormat.filter((format) => supportedTextures.includes(format))[0];\n      basisTranscoderFormat = gpuFormatToBasisTranscoderFormat(basisTranscodedTextureFormat);\n      await getBasis();\n    }\n    const messageHandlers = {\n      init: async (data) => {\n        const { jsUrl, wasmUrl, supportedTextures } = data;\n        await init(jsUrl, wasmUrl, supportedTextures);\n      },\n      load: async (data) => {\n        try {\n          const textureOptions = await load(data.url);\n          return {\n            type: "load",\n            url: data.url,\n            success: true,\n            textureOptions,\n            transferables: textureOptions.resource?.map((arr) => arr.buffer)\n          };\n        } catch (e) {\n          throw e;\n        }\n      }\n    };\n    self.onmessage = async (messageEvent) => {\n      const message = messageEvent.data;\n      const response = await messageHandlers[message.type](message);\n      if (response) {\n        self.postMessage(response, response.transferables);\n      }\n    };\n\n})();\n';
var WORKER_URL3 = null;
var WorkerInstance3 = class {
  constructor() {
    if (!WORKER_URL3) {
      WORKER_URL3 = URL.createObjectURL(new Blob([WORKER_CODE3], { type: "application/javascript" }));
    }
    this.worker = new Worker(WORKER_URL3);
  }
};
WorkerInstance3.revokeObjectURL = function revokeObjectURL3() {
  if (WORKER_URL3) {
    URL.revokeObjectURL(WORKER_URL3);
    WORKER_URL3 = null;
  }
};

// node_modules/pixi.js/lib/compressed-textures/basis/utils/setBasisTranscoderPath.mjs
var basisTranscoderUrls = {
  jsUrl: "https://files.pixijs.download/transcoders/basis/basis_transcoder.js",
  wasmUrl: "https://files.pixijs.download/transcoders/basis/basis_transcoder.wasm"
};
function setBasisTranscoderPath(config) {
  Object.assign(basisTranscoderUrls, config);
}

// node_modules/pixi.js/lib/compressed-textures/basis/worker/loadBasisOnWorker.mjs
var basisWorker;
var urlHash = {};
function getBasisWorker(supportedTextures) {
  if (!basisWorker) {
    basisWorker = new WorkerInstance3().worker;
    basisWorker.onmessage = (messageEvent) => {
      const { success, url, textureOptions } = messageEvent.data;
      if (!success) {
        console.warn("Failed to load Basis texture", url);
      }
      urlHash[url](textureOptions);
    };
    basisWorker.postMessage({
      type: "init",
      jsUrl: basisTranscoderUrls.jsUrl,
      wasmUrl: basisTranscoderUrls.wasmUrl,
      supportedTextures
    });
  }
  return basisWorker;
}
function loadBasisOnWorker(url, supportedTextures) {
  const ktxWorker2 = getBasisWorker(supportedTextures);
  return new Promise((resolve) => {
    urlHash[url] = resolve;
    ktxWorker2.postMessage({ type: "load", url });
  });
}

// node_modules/pixi.js/lib/compressed-textures/basis/loadBasis.mjs
var loadBasis = {
  extension: {
    type: ExtensionType.LoadParser,
    priority: LoaderParserPriority.High,
    name: "loadBasis"
  },
  name: "loadBasis",
  test(url) {
    return checkExtension(url, [".basis"]);
  },
  async load(url, _asset, loader) {
    const supportedTextures = await getSupportedTextureFormats();
    const textureOptions = await loadBasisOnWorker(url, supportedTextures);
    const compressedTextureSource = new CompressedSource(textureOptions);
    return createTexture(compressedTextureSource, loader, url);
  },
  unload(texture) {
    if (Array.isArray(texture)) {
      texture.forEach((t) => t.destroy(true));
    } else {
      texture.destroy(true);
    }
  }
};

// node_modules/pixi.js/lib/compressed-textures/basis/utils/createLevelBuffers.mjs
function createLevelBuffers(basisTexture, basisTranscoderFormat) {
  const images = basisTexture.getNumImages();
  const levels = basisTexture.getNumLevels(0);
  const success = basisTexture.startTranscoding();
  if (!success) {
    throw new Error("startTranscoding failed");
  }
  const levelBuffers = [];
  for (let levelIndex = 0; levelIndex < levels; ++levelIndex) {
    for (let sliceIndex = 0; sliceIndex < images; ++sliceIndex) {
      const transcodeSize = basisTexture.getImageTranscodedSizeInBytes(sliceIndex, levelIndex, basisTranscoderFormat);
      const levelBuffer = new Uint8Array(transcodeSize);
      const success2 = basisTexture.transcodeImage(levelBuffer, sliceIndex, levelIndex, basisTranscoderFormat, 1, 0);
      if (!success2) {
        throw new Error("transcodeImage failed");
      }
      levelBuffers.push(levelBuffer);
    }
  }
  return levelBuffers;
}

// node_modules/pixi.js/lib/compressed-textures/basis/utils/gpuFormatToBasisTranscoderFormat.mjs
var gpuFormatToBasisTranscoderFormatMap = {
  "bc3-rgba-unorm": 3,
  // cTFBC3_RGBA
  "bc7-rgba-unorm": 6,
  // cTFBC7_RGBA,
  "etc2-rgba8unorm": 1,
  // cTFETC2_RGBA,
  "astc-4x4-unorm": 10,
  // cTFASTC_4x4_RGBA,
  // Uncompressed
  rgba8unorm: 13,
  // cTFRGBA32,
  rgba4unorm: 16
  // cTFRGBA4444,
};
function gpuFormatToBasisTranscoderFormat(transcoderFormat) {
  const format = gpuFormatToBasisTranscoderFormatMap[transcoderFormat];
  if (format) {
    return format;
  }
  throw new Error(`Unsupported transcoderFormat: ${transcoderFormat}`);
}

// node_modules/pixi.js/lib/compressed-textures/dds/const.mjs
var DDS_HEADER_FIELDS = {
  MAGIC: 0,
  SIZE: 1,
  FLAGS: 2,
  HEIGHT: 3,
  WIDTH: 4,
  MIPMAP_COUNT: 7,
  PIXEL_FORMAT: 19,
  PF_FLAGS: 20,
  FOURCC: 21,
  RGB_BITCOUNT: 22,
  R_BIT_MASK: 23,
  G_BIT_MASK: 24,
  B_BIT_MASK: 25,
  A_BIT_MASK: 26
};
var DDS_DX10_FIELDS = {
  DXGI_FORMAT: 0,
  RESOURCE_DIMENSION: 1,
  MISC_FLAG: 2,
  ARRAY_SIZE: 3,
  MISC_FLAGS2: 4
};
var DXGI_FORMAT = ((DXGI_FORMAT2) => {
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_UNKNOWN"] = 0] = "DXGI_FORMAT_UNKNOWN";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_R32G32B32A32_TYPELESS"] = 1] = "DXGI_FORMAT_R32G32B32A32_TYPELESS";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_R32G32B32A32_FLOAT"] = 2] = "DXGI_FORMAT_R32G32B32A32_FLOAT";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_R32G32B32A32_UINT"] = 3] = "DXGI_FORMAT_R32G32B32A32_UINT";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_R32G32B32A32_SINT"] = 4] = "DXGI_FORMAT_R32G32B32A32_SINT";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_R32G32B32_TYPELESS"] = 5] = "DXGI_FORMAT_R32G32B32_TYPELESS";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_R32G32B32_FLOAT"] = 6] = "DXGI_FORMAT_R32G32B32_FLOAT";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_R32G32B32_UINT"] = 7] = "DXGI_FORMAT_R32G32B32_UINT";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_R32G32B32_SINT"] = 8] = "DXGI_FORMAT_R32G32B32_SINT";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_R16G16B16A16_TYPELESS"] = 9] = "DXGI_FORMAT_R16G16B16A16_TYPELESS";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_R16G16B16A16_FLOAT"] = 10] = "DXGI_FORMAT_R16G16B16A16_FLOAT";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_R16G16B16A16_UNORM"] = 11] = "DXGI_FORMAT_R16G16B16A16_UNORM";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_R16G16B16A16_UINT"] = 12] = "DXGI_FORMAT_R16G16B16A16_UINT";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_R16G16B16A16_SNORM"] = 13] = "DXGI_FORMAT_R16G16B16A16_SNORM";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_R16G16B16A16_SINT"] = 14] = "DXGI_FORMAT_R16G16B16A16_SINT";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_R32G32_TYPELESS"] = 15] = "DXGI_FORMAT_R32G32_TYPELESS";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_R32G32_FLOAT"] = 16] = "DXGI_FORMAT_R32G32_FLOAT";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_R32G32_UINT"] = 17] = "DXGI_FORMAT_R32G32_UINT";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_R32G32_SINT"] = 18] = "DXGI_FORMAT_R32G32_SINT";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_R32G8X24_TYPELESS"] = 19] = "DXGI_FORMAT_R32G8X24_TYPELESS";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_D32_FLOAT_S8X24_UINT"] = 20] = "DXGI_FORMAT_D32_FLOAT_S8X24_UINT";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_R32_FLOAT_X8X24_TYPELESS"] = 21] = "DXGI_FORMAT_R32_FLOAT_X8X24_TYPELESS";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_X32_TYPELESS_G8X24_UINT"] = 22] = "DXGI_FORMAT_X32_TYPELESS_G8X24_UINT";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_R10G10B10A2_TYPELESS"] = 23] = "DXGI_FORMAT_R10G10B10A2_TYPELESS";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_R10G10B10A2_UNORM"] = 24] = "DXGI_FORMAT_R10G10B10A2_UNORM";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_R10G10B10A2_UINT"] = 25] = "DXGI_FORMAT_R10G10B10A2_UINT";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_R11G11B10_FLOAT"] = 26] = "DXGI_FORMAT_R11G11B10_FLOAT";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_R8G8B8A8_TYPELESS"] = 27] = "DXGI_FORMAT_R8G8B8A8_TYPELESS";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_R8G8B8A8_UNORM"] = 28] = "DXGI_FORMAT_R8G8B8A8_UNORM";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_R8G8B8A8_UNORM_SRGB"] = 29] = "DXGI_FORMAT_R8G8B8A8_UNORM_SRGB";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_R8G8B8A8_UINT"] = 30] = "DXGI_FORMAT_R8G8B8A8_UINT";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_R8G8B8A8_SNORM"] = 31] = "DXGI_FORMAT_R8G8B8A8_SNORM";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_R8G8B8A8_SINT"] = 32] = "DXGI_FORMAT_R8G8B8A8_SINT";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_R16G16_TYPELESS"] = 33] = "DXGI_FORMAT_R16G16_TYPELESS";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_R16G16_FLOAT"] = 34] = "DXGI_FORMAT_R16G16_FLOAT";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_R16G16_UNORM"] = 35] = "DXGI_FORMAT_R16G16_UNORM";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_R16G16_UINT"] = 36] = "DXGI_FORMAT_R16G16_UINT";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_R16G16_SNORM"] = 37] = "DXGI_FORMAT_R16G16_SNORM";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_R16G16_SINT"] = 38] = "DXGI_FORMAT_R16G16_SINT";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_R32_TYPELESS"] = 39] = "DXGI_FORMAT_R32_TYPELESS";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_D32_FLOAT"] = 40] = "DXGI_FORMAT_D32_FLOAT";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_R32_FLOAT"] = 41] = "DXGI_FORMAT_R32_FLOAT";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_R32_UINT"] = 42] = "DXGI_FORMAT_R32_UINT";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_R32_SINT"] = 43] = "DXGI_FORMAT_R32_SINT";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_R24G8_TYPELESS"] = 44] = "DXGI_FORMAT_R24G8_TYPELESS";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_D24_UNORM_S8_UINT"] = 45] = "DXGI_FORMAT_D24_UNORM_S8_UINT";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_R24_UNORM_X8_TYPELESS"] = 46] = "DXGI_FORMAT_R24_UNORM_X8_TYPELESS";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_X24_TYPELESS_G8_UINT"] = 47] = "DXGI_FORMAT_X24_TYPELESS_G8_UINT";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_R8G8_TYPELESS"] = 48] = "DXGI_FORMAT_R8G8_TYPELESS";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_R8G8_UNORM"] = 49] = "DXGI_FORMAT_R8G8_UNORM";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_R8G8_UINT"] = 50] = "DXGI_FORMAT_R8G8_UINT";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_R8G8_SNORM"] = 51] = "DXGI_FORMAT_R8G8_SNORM";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_R8G8_SINT"] = 52] = "DXGI_FORMAT_R8G8_SINT";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_R16_TYPELESS"] = 53] = "DXGI_FORMAT_R16_TYPELESS";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_R16_FLOAT"] = 54] = "DXGI_FORMAT_R16_FLOAT";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_D16_UNORM"] = 55] = "DXGI_FORMAT_D16_UNORM";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_R16_UNORM"] = 56] = "DXGI_FORMAT_R16_UNORM";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_R16_UINT"] = 57] = "DXGI_FORMAT_R16_UINT";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_R16_SNORM"] = 58] = "DXGI_FORMAT_R16_SNORM";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_R16_SINT"] = 59] = "DXGI_FORMAT_R16_SINT";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_R8_TYPELESS"] = 60] = "DXGI_FORMAT_R8_TYPELESS";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_R8_UNORM"] = 61] = "DXGI_FORMAT_R8_UNORM";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_R8_UINT"] = 62] = "DXGI_FORMAT_R8_UINT";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_R8_SNORM"] = 63] = "DXGI_FORMAT_R8_SNORM";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_R8_SINT"] = 64] = "DXGI_FORMAT_R8_SINT";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_A8_UNORM"] = 65] = "DXGI_FORMAT_A8_UNORM";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_R1_UNORM"] = 66] = "DXGI_FORMAT_R1_UNORM";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_R9G9B9E5_SHAREDEXP"] = 67] = "DXGI_FORMAT_R9G9B9E5_SHAREDEXP";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_R8G8_B8G8_UNORM"] = 68] = "DXGI_FORMAT_R8G8_B8G8_UNORM";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_G8R8_G8B8_UNORM"] = 69] = "DXGI_FORMAT_G8R8_G8B8_UNORM";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_BC1_TYPELESS"] = 70] = "DXGI_FORMAT_BC1_TYPELESS";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_BC1_UNORM"] = 71] = "DXGI_FORMAT_BC1_UNORM";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_BC1_UNORM_SRGB"] = 72] = "DXGI_FORMAT_BC1_UNORM_SRGB";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_BC2_TYPELESS"] = 73] = "DXGI_FORMAT_BC2_TYPELESS";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_BC2_UNORM"] = 74] = "DXGI_FORMAT_BC2_UNORM";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_BC2_UNORM_SRGB"] = 75] = "DXGI_FORMAT_BC2_UNORM_SRGB";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_BC3_TYPELESS"] = 76] = "DXGI_FORMAT_BC3_TYPELESS";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_BC3_UNORM"] = 77] = "DXGI_FORMAT_BC3_UNORM";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_BC3_UNORM_SRGB"] = 78] = "DXGI_FORMAT_BC3_UNORM_SRGB";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_BC4_TYPELESS"] = 79] = "DXGI_FORMAT_BC4_TYPELESS";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_BC4_UNORM"] = 80] = "DXGI_FORMAT_BC4_UNORM";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_BC4_SNORM"] = 81] = "DXGI_FORMAT_BC4_SNORM";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_BC5_TYPELESS"] = 82] = "DXGI_FORMAT_BC5_TYPELESS";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_BC5_UNORM"] = 83] = "DXGI_FORMAT_BC5_UNORM";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_BC5_SNORM"] = 84] = "DXGI_FORMAT_BC5_SNORM";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_B5G6R5_UNORM"] = 85] = "DXGI_FORMAT_B5G6R5_UNORM";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_B5G5R5A1_UNORM"] = 86] = "DXGI_FORMAT_B5G5R5A1_UNORM";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_B8G8R8A8_UNORM"] = 87] = "DXGI_FORMAT_B8G8R8A8_UNORM";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_B8G8R8X8_UNORM"] = 88] = "DXGI_FORMAT_B8G8R8X8_UNORM";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_R10G10B10_XR_BIAS_A2_UNORM"] = 89] = "DXGI_FORMAT_R10G10B10_XR_BIAS_A2_UNORM";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_B8G8R8A8_TYPELESS"] = 90] = "DXGI_FORMAT_B8G8R8A8_TYPELESS";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_B8G8R8A8_UNORM_SRGB"] = 91] = "DXGI_FORMAT_B8G8R8A8_UNORM_SRGB";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_B8G8R8X8_TYPELESS"] = 92] = "DXGI_FORMAT_B8G8R8X8_TYPELESS";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_B8G8R8X8_UNORM_SRGB"] = 93] = "DXGI_FORMAT_B8G8R8X8_UNORM_SRGB";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_BC6H_TYPELESS"] = 94] = "DXGI_FORMAT_BC6H_TYPELESS";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_BC6H_UF16"] = 95] = "DXGI_FORMAT_BC6H_UF16";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_BC6H_SF16"] = 96] = "DXGI_FORMAT_BC6H_SF16";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_BC7_TYPELESS"] = 97] = "DXGI_FORMAT_BC7_TYPELESS";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_BC7_UNORM"] = 98] = "DXGI_FORMAT_BC7_UNORM";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_BC7_UNORM_SRGB"] = 99] = "DXGI_FORMAT_BC7_UNORM_SRGB";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_AYUV"] = 100] = "DXGI_FORMAT_AYUV";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_Y410"] = 101] = "DXGI_FORMAT_Y410";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_Y416"] = 102] = "DXGI_FORMAT_Y416";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_NV12"] = 103] = "DXGI_FORMAT_NV12";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_P010"] = 104] = "DXGI_FORMAT_P010";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_P016"] = 105] = "DXGI_FORMAT_P016";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_420_OPAQUE"] = 106] = "DXGI_FORMAT_420_OPAQUE";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_YUY2"] = 107] = "DXGI_FORMAT_YUY2";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_Y210"] = 108] = "DXGI_FORMAT_Y210";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_Y216"] = 109] = "DXGI_FORMAT_Y216";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_NV11"] = 110] = "DXGI_FORMAT_NV11";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_AI44"] = 111] = "DXGI_FORMAT_AI44";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_IA44"] = 112] = "DXGI_FORMAT_IA44";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_P8"] = 113] = "DXGI_FORMAT_P8";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_A8P8"] = 114] = "DXGI_FORMAT_A8P8";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_B4G4R4A4_UNORM"] = 115] = "DXGI_FORMAT_B4G4R4A4_UNORM";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_P208"] = 116] = "DXGI_FORMAT_P208";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_V208"] = 117] = "DXGI_FORMAT_V208";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_V408"] = 118] = "DXGI_FORMAT_V408";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_SAMPLER_FEEDBACK_MIN_MIP_OPAQUE"] = 119] = "DXGI_FORMAT_SAMPLER_FEEDBACK_MIN_MIP_OPAQUE";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_SAMPLER_FEEDBACK_MIP_REGION_USED_OPAQUE"] = 120] = "DXGI_FORMAT_SAMPLER_FEEDBACK_MIP_REGION_USED_OPAQUE";
  DXGI_FORMAT2[DXGI_FORMAT2["DXGI_FORMAT_FORCE_UINT"] = 121] = "DXGI_FORMAT_FORCE_UINT";
  return DXGI_FORMAT2;
})(DXGI_FORMAT || {});
var D3D10_RESOURCE_DIMENSION = ((D3D10_RESOURCE_DIMENSION2) => {
  D3D10_RESOURCE_DIMENSION2[D3D10_RESOURCE_DIMENSION2["DDS_DIMENSION_TEXTURE1D"] = 2] = "DDS_DIMENSION_TEXTURE1D";
  D3D10_RESOURCE_DIMENSION2[D3D10_RESOURCE_DIMENSION2["DDS_DIMENSION_TEXTURE2D"] = 3] = "DDS_DIMENSION_TEXTURE2D";
  D3D10_RESOURCE_DIMENSION2[D3D10_RESOURCE_DIMENSION2["DDS_DIMENSION_TEXTURE3D"] = 6] = "DDS_DIMENSION_TEXTURE3D";
  return D3D10_RESOURCE_DIMENSION2;
})(D3D10_RESOURCE_DIMENSION || {});
function fourCCToInt32(value) {
  return value.charCodeAt(0) + (value.charCodeAt(1) << 8) + (value.charCodeAt(2) << 16) + (value.charCodeAt(3) << 24);
}
var D3DFMT = ((D3DFMT2) => {
  D3DFMT2[D3DFMT2["UNKNOWN"] = 0] = "UNKNOWN";
  D3DFMT2[D3DFMT2["R8G8B8"] = 20] = "R8G8B8";
  D3DFMT2[D3DFMT2["A8R8G8B8"] = 21] = "A8R8G8B8";
  D3DFMT2[D3DFMT2["X8R8G8B8"] = 22] = "X8R8G8B8";
  D3DFMT2[D3DFMT2["R5G6B5"] = 23] = "R5G6B5";
  D3DFMT2[D3DFMT2["X1R5G5B5"] = 24] = "X1R5G5B5";
  D3DFMT2[D3DFMT2["A1R5G5B5"] = 25] = "A1R5G5B5";
  D3DFMT2[D3DFMT2["A4R4G4B4"] = 26] = "A4R4G4B4";
  D3DFMT2[D3DFMT2["R3G3B2"] = 27] = "R3G3B2";
  D3DFMT2[D3DFMT2["A8"] = 28] = "A8";
  D3DFMT2[D3DFMT2["A8R3G3B2"] = 29] = "A8R3G3B2";
  D3DFMT2[D3DFMT2["X4R4G4B4"] = 30] = "X4R4G4B4";
  D3DFMT2[D3DFMT2["A2B10G10R10"] = 31] = "A2B10G10R10";
  D3DFMT2[D3DFMT2["A8B8G8R8"] = 32] = "A8B8G8R8";
  D3DFMT2[D3DFMT2["X8B8G8R8"] = 33] = "X8B8G8R8";
  D3DFMT2[D3DFMT2["G16R16"] = 34] = "G16R16";
  D3DFMT2[D3DFMT2["A2R10G10B10"] = 35] = "A2R10G10B10";
  D3DFMT2[D3DFMT2["A16B16G16R16"] = 36] = "A16B16G16R16";
  D3DFMT2[D3DFMT2["A8P8"] = 40] = "A8P8";
  D3DFMT2[D3DFMT2["P8"] = 41] = "P8";
  D3DFMT2[D3DFMT2["L8"] = 50] = "L8";
  D3DFMT2[D3DFMT2["A8L8"] = 51] = "A8L8";
  D3DFMT2[D3DFMT2["A4L4"] = 52] = "A4L4";
  D3DFMT2[D3DFMT2["V8U8"] = 60] = "V8U8";
  D3DFMT2[D3DFMT2["L6V5U5"] = 61] = "L6V5U5";
  D3DFMT2[D3DFMT2["X8L8V8U8"] = 62] = "X8L8V8U8";
  D3DFMT2[D3DFMT2["Q8W8V8U8"] = 63] = "Q8W8V8U8";
  D3DFMT2[D3DFMT2["V16U16"] = 64] = "V16U16";
  D3DFMT2[D3DFMT2["A2W10V10U10"] = 67] = "A2W10V10U10";
  D3DFMT2[D3DFMT2["Q16W16V16U16"] = 110] = "Q16W16V16U16";
  D3DFMT2[D3DFMT2["R16F"] = 111] = "R16F";
  D3DFMT2[D3DFMT2["G16R16F"] = 112] = "G16R16F";
  D3DFMT2[D3DFMT2["A16B16G16R16F"] = 113] = "A16B16G16R16F";
  D3DFMT2[D3DFMT2["R32F"] = 114] = "R32F";
  D3DFMT2[D3DFMT2["G32R32F"] = 115] = "G32R32F";
  D3DFMT2[D3DFMT2["A32B32G32R32F"] = 116] = "A32B32G32R32F";
  D3DFMT2[D3DFMT2["UYVY"] = fourCCToInt32("UYVY")] = "UYVY";
  D3DFMT2[D3DFMT2["R8G8_B8G8"] = fourCCToInt32("RGBG")] = "R8G8_B8G8";
  D3DFMT2[D3DFMT2["YUY2"] = fourCCToInt32("YUY2")] = "YUY2";
  D3DFMT2[D3DFMT2["D3DFMT_G8R8_G8B8"] = fourCCToInt32("GRGB")] = "D3DFMT_G8R8_G8B8";
  D3DFMT2[D3DFMT2["DXT1"] = fourCCToInt32("DXT1")] = "DXT1";
  D3DFMT2[D3DFMT2["DXT2"] = fourCCToInt32("DXT2")] = "DXT2";
  D3DFMT2[D3DFMT2["DXT3"] = fourCCToInt32("DXT3")] = "DXT3";
  D3DFMT2[D3DFMT2["DXT4"] = fourCCToInt32("DXT4")] = "DXT4";
  D3DFMT2[D3DFMT2["DXT5"] = fourCCToInt32("DXT5")] = "DXT5";
  D3DFMT2[D3DFMT2["ATI1"] = fourCCToInt32("ATI1")] = "ATI1";
  D3DFMT2[D3DFMT2["AT1N"] = fourCCToInt32("AT1N")] = "AT1N";
  D3DFMT2[D3DFMT2["ATI2"] = fourCCToInt32("ATI2")] = "ATI2";
  D3DFMT2[D3DFMT2["AT2N"] = fourCCToInt32("AT2N")] = "AT2N";
  D3DFMT2[D3DFMT2["BC4U"] = fourCCToInt32("BC4U")] = "BC4U";
  D3DFMT2[D3DFMT2["BC4S"] = fourCCToInt32("BC4S")] = "BC4S";
  D3DFMT2[D3DFMT2["BC5U"] = fourCCToInt32("BC5U")] = "BC5U";
  D3DFMT2[D3DFMT2["BC5S"] = fourCCToInt32("BC5S")] = "BC5S";
  D3DFMT2[D3DFMT2["DX10"] = fourCCToInt32("DX10")] = "DX10";
  return D3DFMT2;
})(D3DFMT || {});
var FOURCC_TO_TEXTURE_FORMAT = {
  [D3DFMT.DXT1]: "bc1-rgba-unorm",
  [D3DFMT.DXT2]: "bc2-rgba-unorm",
  [D3DFMT.DXT3]: "bc2-rgba-unorm",
  [D3DFMT.DXT4]: "bc3-rgba-unorm",
  [D3DFMT.DXT5]: "bc3-rgba-unorm",
  [D3DFMT.ATI1]: "bc4-r-unorm",
  [D3DFMT.BC4U]: "bc4-r-unorm",
  [D3DFMT.BC4S]: "bc4-r-snorm",
  [D3DFMT.ATI2]: "bc5-rg-unorm",
  [D3DFMT.BC5U]: "bc5-rg-unorm",
  [D3DFMT.BC5S]: "bc5-rg-snorm",
  [
    36
    /* A16B16G16R16 */
  ]: "rgba16uint",
  [
    110
    /* Q16W16V16U16 */
  ]: "rgba16sint",
  [
    111
    /* R16F */
  ]: "r16float",
  [
    112
    /* G16R16F */
  ]: "rg16float",
  [
    113
    /* A16B16G16R16F */
  ]: "rgba16float",
  [
    114
    /* R32F */
  ]: "r32float",
  [
    115
    /* G32R32F */
  ]: "rg32float",
  [
    116
    /* A32B32G32R32F */
  ]: "rgba32float"
};
var DXGI_TO_TEXTURE_FORMAT = {
  [
    70
    /* DXGI_FORMAT_BC1_TYPELESS */
  ]: "bc1-rgba-unorm",
  [
    71
    /* DXGI_FORMAT_BC1_UNORM */
  ]: "bc1-rgba-unorm",
  [
    72
    /* DXGI_FORMAT_BC1_UNORM_SRGB */
  ]: "bc1-rgba-unorm-srgb",
  [
    73
    /* DXGI_FORMAT_BC2_TYPELESS */
  ]: "bc2-rgba-unorm",
  [
    74
    /* DXGI_FORMAT_BC2_UNORM */
  ]: "bc2-rgba-unorm",
  [
    75
    /* DXGI_FORMAT_BC2_UNORM_SRGB */
  ]: "bc2-rgba-unorm-srgb",
  [
    76
    /* DXGI_FORMAT_BC3_TYPELESS */
  ]: "bc3-rgba-unorm",
  [
    77
    /* DXGI_FORMAT_BC3_UNORM */
  ]: "bc3-rgba-unorm",
  [
    78
    /* DXGI_FORMAT_BC3_UNORM_SRGB */
  ]: "bc3-rgba-unorm-srgb",
  [
    79
    /* DXGI_FORMAT_BC4_TYPELESS */
  ]: "bc4-r-unorm",
  [
    80
    /* DXGI_FORMAT_BC4_UNORM */
  ]: "bc4-r-unorm",
  [
    81
    /* DXGI_FORMAT_BC4_SNORM */
  ]: "bc4-r-snorm",
  [
    82
    /* DXGI_FORMAT_BC5_TYPELESS */
  ]: "bc5-rg-unorm",
  [
    83
    /* DXGI_FORMAT_BC5_UNORM */
  ]: "bc5-rg-unorm",
  [
    84
    /* DXGI_FORMAT_BC5_SNORM */
  ]: "bc5-rg-snorm",
  [
    94
    /* DXGI_FORMAT_BC6H_TYPELESS */
  ]: "bc6h-rgb-ufloat",
  [
    95
    /* DXGI_FORMAT_BC6H_UF16 */
  ]: "bc6h-rgb-ufloat",
  [
    96
    /* DXGI_FORMAT_BC6H_SF16 */
  ]: "bc6h-rgb-float",
  [
    97
    /* DXGI_FORMAT_BC7_TYPELESS */
  ]: "bc7-rgba-unorm",
  [
    98
    /* DXGI_FORMAT_BC7_UNORM */
  ]: "bc7-rgba-unorm",
  [
    99
    /* DXGI_FORMAT_BC7_UNORM_SRGB */
  ]: "bc7-rgba-unorm-srgb",
  [
    28
    /* DXGI_FORMAT_R8G8B8A8_UNORM */
  ]: "rgba8unorm",
  [
    29
    /* DXGI_FORMAT_R8G8B8A8_UNORM_SRGB */
  ]: "rgba8unorm-srgb",
  [
    87
    /* DXGI_FORMAT_B8G8R8A8_UNORM */
  ]: "bgra8unorm",
  [
    91
    /* DXGI_FORMAT_B8G8R8A8_UNORM_SRGB */
  ]: "bgra8unorm-srgb",
  [
    41
    /* DXGI_FORMAT_R32_FLOAT */
  ]: "r32float",
  [
    49
    /* DXGI_FORMAT_R8G8_UNORM */
  ]: "rg8unorm",
  [
    56
    /* DXGI_FORMAT_R16_UNORM */
  ]: "r16uint",
  [
    61
    /* DXGI_FORMAT_R8_UNORM */
  ]: "r8unorm",
  [
    24
    /* DXGI_FORMAT_R10G10B10A2_UNORM */
  ]: "rgb10a2unorm",
  [
    11
    /* DXGI_FORMAT_R16G16B16A16_UNORM */
  ]: "rgba16uint",
  [
    13
    /* DXGI_FORMAT_R16G16B16A16_SNORM */
  ]: "rgba16sint",
  [
    10
    /* DXGI_FORMAT_R16G16B16A16_FLOAT */
  ]: "rgba16float",
  [
    54
    /* DXGI_FORMAT_R16_FLOAT */
  ]: "r16float",
  [
    34
    /* DXGI_FORMAT_R16G16_FLOAT */
  ]: "rg16float",
  [
    16
    /* DXGI_FORMAT_R32G32_FLOAT */
  ]: "rg32float",
  [
    2
    /* DXGI_FORMAT_R32G32B32A32_FLOAT */
  ]: "rgba32float"
};
var DDS = {
  MAGIC_VALUE: 542327876,
  MAGIC_SIZE: 4,
  HEADER_SIZE: 124,
  HEADER_DX10_SIZE: 20,
  PIXEL_FORMAT_FLAGS: {
    // PIXEL_FORMAT flags
    // https://github.com/Microsoft/DirectXTex/blob/main/DirectXTex/DDS.h
    // https://learn.microsoft.com/en-us/windows/win32/direct3ddds/dds-pixelformat
    ALPHAPIXELS: 1,
    ALPHA: 2,
    FOURCC: 4,
    RGB: 64,
    RGBA: 65,
    YUV: 512,
    LUMINANCE: 131072,
    LUMINANCEA: 131073
  },
  RESOURCE_MISC_TEXTURECUBE: 4,
  HEADER_FIELDS: DDS_HEADER_FIELDS,
  HEADER_DX10_FIELDS: DDS_DX10_FIELDS,
  DXGI_FORMAT,
  D3D10_RESOURCE_DIMENSION,
  D3DFMT
};
var TEXTURE_FORMAT_BLOCK_SIZE = {
  "bc1-rgba-unorm": 8,
  "bc1-rgba-unorm-srgb": 8,
  "bc2-rgba-unorm": 16,
  "bc2-rgba-unorm-srgb": 16,
  "bc3-rgba-unorm": 16,
  "bc3-rgba-unorm-srgb": 16,
  "bc4-r-unorm": 8,
  "bc4-r-snorm": 8,
  "bc5-rg-unorm": 16,
  "bc5-rg-snorm": 16,
  "bc6h-rgb-ufloat": 16,
  "bc6h-rgb-float": 16,
  "bc7-rgba-unorm": 16,
  "bc7-rgba-unorm-srgb": 16
};

// node_modules/pixi.js/lib/compressed-textures/dds/parseDDS.mjs
function parseDDS(arrayBuffer, supportedFormats) {
  const {
    format,
    fourCC,
    width,
    height,
    dataOffset,
    mipmapCount
  } = parseDDSHeader(arrayBuffer);
  if (!supportedFormats.includes(format)) {
    throw new Error(`Unsupported texture format: ${fourCC} ${format}, supported: ${supportedFormats}`);
  }
  if (mipmapCount <= 1) {
    return {
      format,
      width,
      height,
      resource: [new Uint8Array(arrayBuffer, dataOffset)],
      alphaMode: "no-premultiply-alpha"
    };
  }
  const levelBuffers = getMipmapLevelBuffers(format, width, height, dataOffset, mipmapCount, arrayBuffer);
  const textureOptions = {
    format,
    width,
    height,
    resource: levelBuffers,
    alphaMode: "no-premultiply-alpha"
  };
  return textureOptions;
}
function getMipmapLevelBuffers(format, width, height, dataOffset, mipmapCount, arrayBuffer) {
  const levelBuffers = [];
  const blockBytes = TEXTURE_FORMAT_BLOCK_SIZE[format];
  let mipWidth = width;
  let mipHeight = height;
  let offset = dataOffset;
  for (let level = 0; level < mipmapCount; ++level) {
    const byteLength = blockBytes ? Math.max(4, mipWidth) / 4 * Math.max(4, mipHeight) / 4 * blockBytes : mipWidth * mipHeight * 4;
    const levelBuffer = new Uint8Array(arrayBuffer, offset, byteLength);
    levelBuffers.push(levelBuffer);
    offset += byteLength;
    mipWidth = Math.max(mipWidth >> 1, 1);
    mipHeight = Math.max(mipHeight >> 1, 1);
  }
  return levelBuffers;
}
function parseDDSHeader(buffer) {
  const header = new Uint32Array(buffer, 0, DDS.HEADER_SIZE / Uint32Array.BYTES_PER_ELEMENT);
  if (header[DDS.HEADER_FIELDS.MAGIC] !== DDS.MAGIC_VALUE) {
    throw new Error("Invalid magic number in DDS header");
  }
  const height = header[DDS.HEADER_FIELDS.HEIGHT];
  const width = header[DDS.HEADER_FIELDS.WIDTH];
  const mipmapCount = Math.max(1, header[DDS.HEADER_FIELDS.MIPMAP_COUNT]);
  const flags = header[DDS.HEADER_FIELDS.PF_FLAGS];
  const fourCC = header[DDS.HEADER_FIELDS.FOURCC];
  const format = getTextureFormat(header, flags, fourCC, buffer);
  const dataOffset = DDS.MAGIC_SIZE + DDS.HEADER_SIZE + (fourCC === DDS.D3DFMT.DX10 ? DDS.HEADER_DX10_SIZE : 0);
  return {
    format,
    fourCC,
    width,
    height,
    dataOffset,
    mipmapCount
  };
}
function getTextureFormat(header, flags, fourCC, buffer) {
  if (flags & DDS.PIXEL_FORMAT_FLAGS.FOURCC) {
    if (fourCC === DDS.D3DFMT.DX10) {
      const dx10Header = new Uint32Array(
        buffer,
        DDS.MAGIC_SIZE + DDS.HEADER_SIZE,
        // there is a 20-byte DDS_HEADER_DX10 after DDS_HEADER
        DDS.HEADER_DX10_SIZE / Uint32Array.BYTES_PER_ELEMENT
      );
      const miscFlag = dx10Header[DDS.HEADER_DX10_FIELDS.MISC_FLAG];
      if (miscFlag === DDS.RESOURCE_MISC_TEXTURECUBE) {
        throw new Error("DDSParser does not support cubemap textures");
      }
      const resourceDimension = dx10Header[DDS.HEADER_DX10_FIELDS.RESOURCE_DIMENSION];
      if (resourceDimension === DDS.D3D10_RESOURCE_DIMENSION.DDS_DIMENSION_TEXTURE3D) {
        throw new Error("DDSParser does not supported 3D texture data");
      }
      const dxgiFormat = dx10Header[DDS.HEADER_DX10_FIELDS.DXGI_FORMAT];
      if (dxgiFormat in DXGI_TO_TEXTURE_FORMAT) {
        return DXGI_TO_TEXTURE_FORMAT[dxgiFormat];
      }
      throw new Error(`DDSParser cannot parse texture data with DXGI format ${dxgiFormat}`);
    }
    if (fourCC in FOURCC_TO_TEXTURE_FORMAT) {
      return FOURCC_TO_TEXTURE_FORMAT[fourCC];
    }
    throw new Error(`DDSParser cannot parse texture data with fourCC format ${fourCC}`);
  }
  if (flags & DDS.PIXEL_FORMAT_FLAGS.RGB || flags & DDS.PIXEL_FORMAT_FLAGS.RGBA) {
    return getUncompressedTextureFormat(header);
  }
  if (flags & DDS.PIXEL_FORMAT_FLAGS.YUV) {
    throw new Error("DDSParser does not supported YUV uncompressed texture data.");
  }
  if (flags & DDS.PIXEL_FORMAT_FLAGS.LUMINANCE || flags & DDS.PIXEL_FORMAT_FLAGS.LUMINANCEA) {
    throw new Error("DDSParser does not support single-channel (lumninance) texture data!");
  }
  if (flags & DDS.PIXEL_FORMAT_FLAGS.ALPHA || flags & DDS.PIXEL_FORMAT_FLAGS.ALPHAPIXELS) {
    throw new Error("DDSParser does not support single-channel (alpha) texture data!");
  }
  throw new Error("DDSParser failed to load a texture file due to an unknown reason!");
}
function getUncompressedTextureFormat(header) {
  const bitCount = header[DDS.HEADER_FIELDS.RGB_BITCOUNT];
  const rBitMask = header[DDS.HEADER_FIELDS.R_BIT_MASK];
  const gBitMask = header[DDS.HEADER_FIELDS.G_BIT_MASK];
  const bBitMask = header[DDS.HEADER_FIELDS.B_BIT_MASK];
  const aBitMask = header[DDS.HEADER_FIELDS.A_BIT_MASK];
  switch (bitCount) {
    case 32:
      if (rBitMask === 255 && gBitMask === 65280 && bBitMask === 16711680 && aBitMask === 4278190080) {
        return DXGI_TO_TEXTURE_FORMAT[DDS.DXGI_FORMAT.DXGI_FORMAT_R8G8B8A8_UNORM];
      }
      if (rBitMask === 16711680 && gBitMask === 65280 && bBitMask === 255 && aBitMask === 4278190080) {
        return DXGI_TO_TEXTURE_FORMAT[DDS.DXGI_FORMAT.DXGI_FORMAT_B8G8R8A8_UNORM];
      }
      if (rBitMask === 1072693248 && gBitMask === 1047552 && bBitMask === 1023 && aBitMask === 3221225472) {
        return DXGI_TO_TEXTURE_FORMAT[DDS.DXGI_FORMAT.DXGI_FORMAT_R10G10B10A2_UNORM];
      }
      if (rBitMask === 65535 && gBitMask === 4294901760 && bBitMask === 0 && aBitMask === 0) {
        return DXGI_TO_TEXTURE_FORMAT[DDS.DXGI_FORMAT.DXGI_FORMAT_R16G16_UNORM];
      }
      if (rBitMask === 4294967295 && gBitMask === 0 && bBitMask === 0 && aBitMask === 0) {
        return DXGI_TO_TEXTURE_FORMAT[DDS.DXGI_FORMAT.DXGI_FORMAT_R32_FLOAT];
      }
      break;
    case 24:
      if (rBitMask === 16711680 && gBitMask === 65280 && bBitMask === 255 && aBitMask === 32768) {
      }
      break;
    case 16:
      if (rBitMask === 31744 && gBitMask === 992 && bBitMask === 31 && aBitMask === 32768) {
        return DXGI_TO_TEXTURE_FORMAT[DDS.DXGI_FORMAT.DXGI_FORMAT_B5G5R5A1_UNORM];
      }
      if (rBitMask === 63488 && gBitMask === 2016 && bBitMask === 31 && aBitMask === 0) {
        return DXGI_TO_TEXTURE_FORMAT[DDS.DXGI_FORMAT.DXGI_FORMAT_B5G6R5_UNORM];
      }
      if (rBitMask === 3840 && gBitMask === 240 && bBitMask === 15 && aBitMask === 61440) {
        return DXGI_TO_TEXTURE_FORMAT[DDS.DXGI_FORMAT.DXGI_FORMAT_B4G4R4A4_UNORM];
      }
      if (rBitMask === 255 && gBitMask === 0 && bBitMask === 0 && aBitMask === 65280) {
        return DXGI_TO_TEXTURE_FORMAT[DDS.DXGI_FORMAT.DXGI_FORMAT_R8G8_UNORM];
      }
      if (rBitMask === 65535 && gBitMask === 0 && bBitMask === 0 && aBitMask === 0) {
        return DXGI_TO_TEXTURE_FORMAT[DDS.DXGI_FORMAT.DXGI_FORMAT_R16_UNORM];
      }
      break;
    case 8:
      if (rBitMask === 255 && gBitMask === 0 && bBitMask === 0 && aBitMask === 0) {
        return DXGI_TO_TEXTURE_FORMAT[DDS.DXGI_FORMAT.DXGI_FORMAT_R8_UNORM];
      }
      break;
  }
  throw new Error(`DDSParser does not support uncompressed texture with configuration:
                bitCount = ${bitCount}, rBitMask = ${rBitMask}, gBitMask = ${gBitMask}, aBitMask = ${aBitMask}`);
}

// node_modules/pixi.js/lib/compressed-textures/dds/loadDDS.mjs
var loadDDS = {
  extension: {
    type: ExtensionType.LoadParser,
    priority: LoaderParserPriority.High,
    name: "loadDDS"
  },
  name: "loadDDS",
  test(url) {
    return checkExtension(url, [".dds"]);
  },
  async load(url, _asset, loader) {
    const supportedTextures = await getSupportedTextureFormats();
    const ddsResponse = await fetch(url);
    const ddsArrayBuffer = await ddsResponse.arrayBuffer();
    const textureOptions = parseDDS(ddsArrayBuffer, supportedTextures);
    const compressedTextureSource = new CompressedSource(textureOptions);
    return createTexture(compressedTextureSource, loader, url);
  },
  unload(texture) {
    if (Array.isArray(texture)) {
      texture.forEach((t) => t.destroy(true));
    } else {
      texture.destroy(true);
    }
  }
};

// node_modules/pixi.js/lib/compressed-textures/ktx2/const.mjs
var GL_INTERNAL_FORMAT = ((GL_INTERNAL_FORMAT2) => {
  GL_INTERNAL_FORMAT2[GL_INTERNAL_FORMAT2["RGBA8_SNORM"] = 36759] = "RGBA8_SNORM";
  GL_INTERNAL_FORMAT2[GL_INTERNAL_FORMAT2["RGBA"] = 6408] = "RGBA";
  GL_INTERNAL_FORMAT2[GL_INTERNAL_FORMAT2["RGBA8UI"] = 36220] = "RGBA8UI";
  GL_INTERNAL_FORMAT2[GL_INTERNAL_FORMAT2["SRGB8_ALPHA8"] = 35907] = "SRGB8_ALPHA8";
  GL_INTERNAL_FORMAT2[GL_INTERNAL_FORMAT2["RGBA8I"] = 36238] = "RGBA8I";
  GL_INTERNAL_FORMAT2[GL_INTERNAL_FORMAT2["RGBA8"] = 32856] = "RGBA8";
  GL_INTERNAL_FORMAT2[GL_INTERNAL_FORMAT2["COMPRESSED_RGB_S3TC_DXT1_EXT"] = 33776] = "COMPRESSED_RGB_S3TC_DXT1_EXT";
  GL_INTERNAL_FORMAT2[GL_INTERNAL_FORMAT2["COMPRESSED_RGBA_S3TC_DXT1_EXT"] = 33777] = "COMPRESSED_RGBA_S3TC_DXT1_EXT";
  GL_INTERNAL_FORMAT2[GL_INTERNAL_FORMAT2["COMPRESSED_RGBA_S3TC_DXT3_EXT"] = 33778] = "COMPRESSED_RGBA_S3TC_DXT3_EXT";
  GL_INTERNAL_FORMAT2[GL_INTERNAL_FORMAT2["COMPRESSED_RGBA_S3TC_DXT5_EXT"] = 33779] = "COMPRESSED_RGBA_S3TC_DXT5_EXT";
  GL_INTERNAL_FORMAT2[GL_INTERNAL_FORMAT2["COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT"] = 35917] = "COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT";
  GL_INTERNAL_FORMAT2[GL_INTERNAL_FORMAT2["COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT"] = 35918] = "COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT";
  GL_INTERNAL_FORMAT2[GL_INTERNAL_FORMAT2["COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT"] = 35919] = "COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT";
  GL_INTERNAL_FORMAT2[GL_INTERNAL_FORMAT2["COMPRESSED_SRGB_S3TC_DXT1_EXT"] = 35916] = "COMPRESSED_SRGB_S3TC_DXT1_EXT";
  GL_INTERNAL_FORMAT2[GL_INTERNAL_FORMAT2["COMPRESSED_RED_RGTC1_EXT"] = 36283] = "COMPRESSED_RED_RGTC1_EXT";
  GL_INTERNAL_FORMAT2[GL_INTERNAL_FORMAT2["COMPRESSED_SIGNED_RED_RGTC1_EXT"] = 36284] = "COMPRESSED_SIGNED_RED_RGTC1_EXT";
  GL_INTERNAL_FORMAT2[GL_INTERNAL_FORMAT2["COMPRESSED_RED_GREEN_RGTC2_EXT"] = 36285] = "COMPRESSED_RED_GREEN_RGTC2_EXT";
  GL_INTERNAL_FORMAT2[GL_INTERNAL_FORMAT2["COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT"] = 36286] = "COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT";
  GL_INTERNAL_FORMAT2[GL_INTERNAL_FORMAT2["COMPRESSED_R11_EAC"] = 37488] = "COMPRESSED_R11_EAC";
  GL_INTERNAL_FORMAT2[GL_INTERNAL_FORMAT2["COMPRESSED_SIGNED_R11_EAC"] = 37489] = "COMPRESSED_SIGNED_R11_EAC";
  GL_INTERNAL_FORMAT2[GL_INTERNAL_FORMAT2["COMPRESSED_RG11_EAC"] = 37490] = "COMPRESSED_RG11_EAC";
  GL_INTERNAL_FORMAT2[GL_INTERNAL_FORMAT2["COMPRESSED_SIGNED_RG11_EAC"] = 37491] = "COMPRESSED_SIGNED_RG11_EAC";
  GL_INTERNAL_FORMAT2[GL_INTERNAL_FORMAT2["COMPRESSED_RGB8_ETC2"] = 37492] = "COMPRESSED_RGB8_ETC2";
  GL_INTERNAL_FORMAT2[GL_INTERNAL_FORMAT2["COMPRESSED_RGBA8_ETC2_EAC"] = 37496] = "COMPRESSED_RGBA8_ETC2_EAC";
  GL_INTERNAL_FORMAT2[GL_INTERNAL_FORMAT2["COMPRESSED_SRGB8_ETC2"] = 37493] = "COMPRESSED_SRGB8_ETC2";
  GL_INTERNAL_FORMAT2[GL_INTERNAL_FORMAT2["COMPRESSED_SRGB8_ALPHA8_ETC2_EAC"] = 37497] = "COMPRESSED_SRGB8_ALPHA8_ETC2_EAC";
  GL_INTERNAL_FORMAT2[GL_INTERNAL_FORMAT2["COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2"] = 37494] = "COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2";
  GL_INTERNAL_FORMAT2[GL_INTERNAL_FORMAT2["COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2"] = 37495] = "COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2";
  GL_INTERNAL_FORMAT2[GL_INTERNAL_FORMAT2["COMPRESSED_RGBA_ASTC_4x4_KHR"] = 37808] = "COMPRESSED_RGBA_ASTC_4x4_KHR";
  GL_INTERNAL_FORMAT2[GL_INTERNAL_FORMAT2["COMPRESSED_RGBA_ASTC_5x4_KHR"] = 37809] = "COMPRESSED_RGBA_ASTC_5x4_KHR";
  GL_INTERNAL_FORMAT2[GL_INTERNAL_FORMAT2["COMPRESSED_RGBA_ASTC_5x5_KHR"] = 37810] = "COMPRESSED_RGBA_ASTC_5x5_KHR";
  GL_INTERNAL_FORMAT2[GL_INTERNAL_FORMAT2["COMPRESSED_RGBA_ASTC_6x5_KHR"] = 37811] = "COMPRESSED_RGBA_ASTC_6x5_KHR";
  GL_INTERNAL_FORMAT2[GL_INTERNAL_FORMAT2["COMPRESSED_RGBA_ASTC_6x6_KHR"] = 37812] = "COMPRESSED_RGBA_ASTC_6x6_KHR";
  GL_INTERNAL_FORMAT2[GL_INTERNAL_FORMAT2["COMPRESSED_RGBA_ASTC_8x5_KHR"] = 37813] = "COMPRESSED_RGBA_ASTC_8x5_KHR";
  GL_INTERNAL_FORMAT2[GL_INTERNAL_FORMAT2["COMPRESSED_RGBA_ASTC_8x6_KHR"] = 37814] = "COMPRESSED_RGBA_ASTC_8x6_KHR";
  GL_INTERNAL_FORMAT2[GL_INTERNAL_FORMAT2["COMPRESSED_RGBA_ASTC_8x8_KHR"] = 37815] = "COMPRESSED_RGBA_ASTC_8x8_KHR";
  GL_INTERNAL_FORMAT2[GL_INTERNAL_FORMAT2["COMPRESSED_RGBA_ASTC_10x5_KHR"] = 37816] = "COMPRESSED_RGBA_ASTC_10x5_KHR";
  GL_INTERNAL_FORMAT2[GL_INTERNAL_FORMAT2["COMPRESSED_RGBA_ASTC_10x6_KHR"] = 37817] = "COMPRESSED_RGBA_ASTC_10x6_KHR";
  GL_INTERNAL_FORMAT2[GL_INTERNAL_FORMAT2["COMPRESSED_RGBA_ASTC_10x8_KHR"] = 37818] = "COMPRESSED_RGBA_ASTC_10x8_KHR";
  GL_INTERNAL_FORMAT2[GL_INTERNAL_FORMAT2["COMPRESSED_RGBA_ASTC_10x10_KHR"] = 37819] = "COMPRESSED_RGBA_ASTC_10x10_KHR";
  GL_INTERNAL_FORMAT2[GL_INTERNAL_FORMAT2["COMPRESSED_RGBA_ASTC_12x10_KHR"] = 37820] = "COMPRESSED_RGBA_ASTC_12x10_KHR";
  GL_INTERNAL_FORMAT2[GL_INTERNAL_FORMAT2["COMPRESSED_RGBA_ASTC_12x12_KHR"] = 37821] = "COMPRESSED_RGBA_ASTC_12x12_KHR";
  GL_INTERNAL_FORMAT2[GL_INTERNAL_FORMAT2["COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR"] = 37840] = "COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR";
  GL_INTERNAL_FORMAT2[GL_INTERNAL_FORMAT2["COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR"] = 37841] = "COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR";
  GL_INTERNAL_FORMAT2[GL_INTERNAL_FORMAT2["COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR"] = 37842] = "COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR";
  GL_INTERNAL_FORMAT2[GL_INTERNAL_FORMAT2["COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR"] = 37843] = "COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR";
  GL_INTERNAL_FORMAT2[GL_INTERNAL_FORMAT2["COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR"] = 37844] = "COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR";
  GL_INTERNAL_FORMAT2[GL_INTERNAL_FORMAT2["COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR"] = 37845] = "COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR";
  GL_INTERNAL_FORMAT2[GL_INTERNAL_FORMAT2["COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR"] = 37846] = "COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR";
  GL_INTERNAL_FORMAT2[GL_INTERNAL_FORMAT2["COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR"] = 37847] = "COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR";
  GL_INTERNAL_FORMAT2[GL_INTERNAL_FORMAT2["COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR"] = 37848] = "COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR";
  GL_INTERNAL_FORMAT2[GL_INTERNAL_FORMAT2["COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR"] = 37849] = "COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR";
  GL_INTERNAL_FORMAT2[GL_INTERNAL_FORMAT2["COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR"] = 37850] = "COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR";
  GL_INTERNAL_FORMAT2[GL_INTERNAL_FORMAT2["COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR"] = 37851] = "COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR";
  GL_INTERNAL_FORMAT2[GL_INTERNAL_FORMAT2["COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR"] = 37852] = "COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR";
  GL_INTERNAL_FORMAT2[GL_INTERNAL_FORMAT2["COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR"] = 37853] = "COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR";
  GL_INTERNAL_FORMAT2[GL_INTERNAL_FORMAT2["COMPRESSED_RGBA_BPTC_UNORM_EXT"] = 36492] = "COMPRESSED_RGBA_BPTC_UNORM_EXT";
  GL_INTERNAL_FORMAT2[GL_INTERNAL_FORMAT2["COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT"] = 36493] = "COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT";
  GL_INTERNAL_FORMAT2[GL_INTERNAL_FORMAT2["COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT"] = 36494] = "COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT";
  GL_INTERNAL_FORMAT2[GL_INTERNAL_FORMAT2["COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT"] = 36495] = "COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT";
  return GL_INTERNAL_FORMAT2;
})(GL_INTERNAL_FORMAT || {});
var GL_FORMATS = ((GL_FORMATS22) => {
  GL_FORMATS22[GL_FORMATS22["RGBA"] = 6408] = "RGBA";
  GL_FORMATS22[GL_FORMATS22["RGB"] = 6407] = "RGB";
  GL_FORMATS22[GL_FORMATS22["RG"] = 33319] = "RG";
  GL_FORMATS22[GL_FORMATS22["RED"] = 6403] = "RED";
  GL_FORMATS22[GL_FORMATS22["RGBA_INTEGER"] = 36249] = "RGBA_INTEGER";
  GL_FORMATS22[GL_FORMATS22["RGB_INTEGER"] = 36248] = "RGB_INTEGER";
  GL_FORMATS22[GL_FORMATS22["RG_INTEGER"] = 33320] = "RG_INTEGER";
  GL_FORMATS22[GL_FORMATS22["RED_INTEGER"] = 36244] = "RED_INTEGER";
  GL_FORMATS22[GL_FORMATS22["ALPHA"] = 6406] = "ALPHA";
  GL_FORMATS22[GL_FORMATS22["LUMINANCE"] = 6409] = "LUMINANCE";
  GL_FORMATS22[GL_FORMATS22["LUMINANCE_ALPHA"] = 6410] = "LUMINANCE_ALPHA";
  GL_FORMATS22[GL_FORMATS22["DEPTH_COMPONENT"] = 6402] = "DEPTH_COMPONENT";
  GL_FORMATS22[GL_FORMATS22["DEPTH_STENCIL"] = 34041] = "DEPTH_STENCIL";
  return GL_FORMATS22;
})(GL_FORMATS || {});
var GL_TYPES = ((GL_TYPES22) => {
  GL_TYPES22[GL_TYPES22["UNSIGNED_BYTE"] = 5121] = "UNSIGNED_BYTE";
  GL_TYPES22[GL_TYPES22["UNSIGNED_SHORT"] = 5123] = "UNSIGNED_SHORT";
  GL_TYPES22[GL_TYPES22["UNSIGNED_SHORT_5_6_5"] = 33635] = "UNSIGNED_SHORT_5_6_5";
  GL_TYPES22[GL_TYPES22["UNSIGNED_SHORT_4_4_4_4"] = 32819] = "UNSIGNED_SHORT_4_4_4_4";
  GL_TYPES22[GL_TYPES22["UNSIGNED_SHORT_5_5_5_1"] = 32820] = "UNSIGNED_SHORT_5_5_5_1";
  GL_TYPES22[GL_TYPES22["UNSIGNED_INT"] = 5125] = "UNSIGNED_INT";
  GL_TYPES22[GL_TYPES22["UNSIGNED_INT_10F_11F_11F_REV"] = 35899] = "UNSIGNED_INT_10F_11F_11F_REV";
  GL_TYPES22[GL_TYPES22["UNSIGNED_INT_2_10_10_10_REV"] = 33640] = "UNSIGNED_INT_2_10_10_10_REV";
  GL_TYPES22[GL_TYPES22["UNSIGNED_INT_24_8"] = 34042] = "UNSIGNED_INT_24_8";
  GL_TYPES22[GL_TYPES22["UNSIGNED_INT_5_9_9_9_REV"] = 35902] = "UNSIGNED_INT_5_9_9_9_REV";
  GL_TYPES22[GL_TYPES22["BYTE"] = 5120] = "BYTE";
  GL_TYPES22[GL_TYPES22["SHORT"] = 5122] = "SHORT";
  GL_TYPES22[GL_TYPES22["INT"] = 5124] = "INT";
  GL_TYPES22[GL_TYPES22["FLOAT"] = 5126] = "FLOAT";
  GL_TYPES22[GL_TYPES22["FLOAT_32_UNSIGNED_INT_24_8_REV"] = 36269] = "FLOAT_32_UNSIGNED_INT_24_8_REV";
  GL_TYPES22[GL_TYPES22["HALF_FLOAT"] = 36193] = "HALF_FLOAT";
  return GL_TYPES22;
})(GL_TYPES || {});
var INTERNAL_FORMAT_TO_TEXTURE_FORMATS = {
  [
    33776
    /* COMPRESSED_RGB_S3TC_DXT1_EXT */
  ]: "bc1-rgba-unorm",
  // TODO: ???
  [
    33777
    /* COMPRESSED_RGBA_S3TC_DXT1_EXT */
  ]: "bc1-rgba-unorm",
  [
    33778
    /* COMPRESSED_RGBA_S3TC_DXT3_EXT */
  ]: "bc2-rgba-unorm",
  [
    33779
    /* COMPRESSED_RGBA_S3TC_DXT5_EXT */
  ]: "bc3-rgba-unorm",
  [
    35916
    /* COMPRESSED_SRGB_S3TC_DXT1_EXT */
  ]: "bc1-rgba-unorm-srgb",
  // TODO: ???
  [
    35917
    /* COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT */
  ]: "bc1-rgba-unorm-srgb",
  [
    35918
    /* COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT */
  ]: "bc2-rgba-unorm-srgb",
  [
    35919
    /* COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT */
  ]: "bc3-rgba-unorm-srgb",
  [
    36283
    /* COMPRESSED_RED_RGTC1_EXT */
  ]: "bc4-r-unorm",
  [
    36284
    /* COMPRESSED_SIGNED_RED_RGTC1_EXT */
  ]: "bc4-r-snorm",
  [
    36285
    /* COMPRESSED_RED_GREEN_RGTC2_EXT */
  ]: "bc5-rg-unorm",
  [
    36286
    /* COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT */
  ]: "bc5-rg-snorm",
  [
    37488
    /* COMPRESSED_R11_EAC */
  ]: "eac-r11unorm",
  // [GL_INTERNAL_FORMAT.COMPRESSED_SIGNED_R11_EAC]: 'eac-r11snorm',
  [
    37490
    /* COMPRESSED_RG11_EAC */
  ]: "eac-rg11snorm",
  // [GL_INTERNAL_FORMAT.COMPRESSED_SIGNED_RG11_EAC]: 'eac-rg11unorm',
  [
    37492
    /* COMPRESSED_RGB8_ETC2 */
  ]: "etc2-rgb8unorm",
  [
    37496
    /* COMPRESSED_RGBA8_ETC2_EAC */
  ]: "etc2-rgba8unorm",
  [
    37493
    /* COMPRESSED_SRGB8_ETC2 */
  ]: "etc2-rgb8unorm-srgb",
  [
    37497
    /* COMPRESSED_SRGB8_ALPHA8_ETC2_EAC */
  ]: "etc2-rgba8unorm-srgb",
  [
    37494
    /* COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2 */
  ]: "etc2-rgb8a1unorm",
  [
    37495
    /* COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2 */
  ]: "etc2-rgb8a1unorm-srgb",
  [
    37808
    /* COMPRESSED_RGBA_ASTC_4x4_KHR */
  ]: "astc-4x4-unorm",
  [
    37840
    /* COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR */
  ]: "astc-4x4-unorm-srgb",
  [
    37809
    /* COMPRESSED_RGBA_ASTC_5x4_KHR */
  ]: "astc-5x4-unorm",
  [
    37841
    /* COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR */
  ]: "astc-5x4-unorm-srgb",
  [
    37810
    /* COMPRESSED_RGBA_ASTC_5x5_KHR */
  ]: "astc-5x5-unorm",
  [
    37842
    /* COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR */
  ]: "astc-5x5-unorm-srgb",
  [
    37811
    /* COMPRESSED_RGBA_ASTC_6x5_KHR */
  ]: "astc-6x5-unorm",
  [
    37843
    /* COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR */
  ]: "astc-6x5-unorm-srgb",
  [
    37812
    /* COMPRESSED_RGBA_ASTC_6x6_KHR */
  ]: "astc-6x6-unorm",
  [
    37844
    /* COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR */
  ]: "astc-6x6-unorm-srgb",
  [
    37813
    /* COMPRESSED_RGBA_ASTC_8x5_KHR */
  ]: "astc-8x5-unorm",
  [
    37845
    /* COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR */
  ]: "astc-8x5-unorm-srgb",
  [
    37814
    /* COMPRESSED_RGBA_ASTC_8x6_KHR */
  ]: "astc-8x6-unorm",
  [
    37846
    /* COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR */
  ]: "astc-8x6-unorm-srgb",
  [
    37815
    /* COMPRESSED_RGBA_ASTC_8x8_KHR */
  ]: "astc-8x8-unorm",
  [
    37847
    /* COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR */
  ]: "astc-8x8-unorm-srgb",
  [
    37816
    /* COMPRESSED_RGBA_ASTC_10x5_KHR */
  ]: "astc-10x5-unorm",
  [
    37848
    /* COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR */
  ]: "astc-10x5-unorm-srgb",
  [
    37817
    /* COMPRESSED_RGBA_ASTC_10x6_KHR */
  ]: "astc-10x6-unorm",
  [
    37849
    /* COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR */
  ]: "astc-10x6-unorm-srgb",
  [
    37818
    /* COMPRESSED_RGBA_ASTC_10x8_KHR */
  ]: "astc-10x8-unorm",
  [
    37850
    /* COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR */
  ]: "astc-10x8-unorm-srgb",
  [
    37819
    /* COMPRESSED_RGBA_ASTC_10x10_KHR */
  ]: "astc-10x10-unorm",
  [
    37851
    /* COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR */
  ]: "astc-10x10-unorm-srgb",
  [
    37820
    /* COMPRESSED_RGBA_ASTC_12x10_KHR */
  ]: "astc-12x10-unorm",
  [
    37852
    /* COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR */
  ]: "astc-12x10-unorm-srgb",
  [
    37821
    /* COMPRESSED_RGBA_ASTC_12x12_KHR */
  ]: "astc-12x12-unorm",
  [
    37853
    /* COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR */
  ]: "astc-12x12-unorm-srgb",
  [
    36492
    /* COMPRESSED_RGBA_BPTC_UNORM_EXT */
  ]: "bc7-rgba-unorm",
  [
    36493
    /* COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT */
  ]: "bc7-rgba-unorm-srgb",
  [
    36494
    /* COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT */
  ]: "bc6h-rgb-float",
  [
    36495
    /* COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT */
  ]: "bc6h-rgb-ufloat",
  [
    35907
    /* SRGB8_ALPHA8 */
  ]: "rgba8unorm-srgb",
  [
    36759
    /* RGBA8_SNORM */
  ]: "rgba8snorm",
  [
    36220
    /* RGBA8UI */
  ]: "rgba8uint",
  [
    36238
    /* RGBA8I */
  ]: "rgba8sint",
  [
    6408
    /* RGBA */
  ]: "rgba8unorm"
  // [GL_INTERNAL_FORMAT.RGBA8]: 'bgra8unorm'
};
var FILE_IDENTIFIER = [171, 75, 84, 88, 32, 49, 49, 187, 13, 10, 26, 10];
var FIELDS = {
  FILE_IDENTIFIER: 0,
  ENDIANNESS: 12,
  GL_TYPE: 16,
  GL_TYPE_SIZE: 20,
  GL_FORMAT: 24,
  GL_INTERNAL_FORMAT: 28,
  GL_BASE_INTERNAL_FORMAT: 32,
  PIXEL_WIDTH: 36,
  PIXEL_HEIGHT: 40,
  PIXEL_DEPTH: 44,
  NUMBER_OF_ARRAY_ELEMENTS: 48,
  NUMBER_OF_FACES: 52,
  NUMBER_OF_MIPMAP_LEVELS: 56,
  BYTES_OF_KEY_VALUE_DATA: 60
};
var FILE_HEADER_SIZE = 64;
var ENDIANNESS = 67305985;
var TYPES_TO_BYTES_PER_COMPONENT = {
  [
    5121
    /* UNSIGNED_BYTE */
  ]: 1,
  [
    5123
    /* UNSIGNED_SHORT */
  ]: 2,
  [
    5124
    /* INT */
  ]: 4,
  [
    5125
    /* UNSIGNED_INT */
  ]: 4,
  [
    5126
    /* FLOAT */
  ]: 4,
  [
    36193
    /* HALF_FLOAT */
  ]: 8
};
var FORMATS_TO_COMPONENTS = {
  [
    6408
    /* RGBA */
  ]: 4,
  [
    6407
    /* RGB */
  ]: 3,
  [
    33319
    /* RG */
  ]: 2,
  [
    6403
    /* RED */
  ]: 1,
  [
    6409
    /* LUMINANCE */
  ]: 1,
  [
    6410
    /* LUMINANCE_ALPHA */
  ]: 2,
  [
    6406
    /* ALPHA */
  ]: 1
};
var TYPES_TO_BYTES_PER_PIXEL = {
  [
    32819
    /* UNSIGNED_SHORT_4_4_4_4 */
  ]: 2,
  [
    32820
    /* UNSIGNED_SHORT_5_5_5_1 */
  ]: 2,
  [
    33635
    /* UNSIGNED_SHORT_5_6_5 */
  ]: 2
};
var INTERNAL_FORMAT_TO_BYTES_PER_PIXEL = {
  [
    33776
    /* COMPRESSED_RGB_S3TC_DXT1_EXT */
  ]: 0.5,
  [
    33777
    /* COMPRESSED_RGBA_S3TC_DXT1_EXT */
  ]: 0.5,
  [
    33778
    /* COMPRESSED_RGBA_S3TC_DXT3_EXT */
  ]: 1,
  [
    33779
    /* COMPRESSED_RGBA_S3TC_DXT5_EXT */
  ]: 1,
  [
    35916
    /* COMPRESSED_SRGB_S3TC_DXT1_EXT */
  ]: 0.5,
  [
    35917
    /* COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT */
  ]: 0.5,
  [
    35918
    /* COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT */
  ]: 1,
  [
    35919
    /* COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT */
  ]: 1,
  [
    36283
    /* COMPRESSED_RED_RGTC1_EXT */
  ]: 0.5,
  [
    36284
    /* COMPRESSED_SIGNED_RED_RGTC1_EXT */
  ]: 0.5,
  [
    36285
    /* COMPRESSED_RED_GREEN_RGTC2_EXT */
  ]: 1,
  [
    36286
    /* COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT */
  ]: 1,
  [
    37488
    /* COMPRESSED_R11_EAC */
  ]: 0.5,
  [
    37489
    /* COMPRESSED_SIGNED_R11_EAC */
  ]: 0.5,
  [
    37490
    /* COMPRESSED_RG11_EAC */
  ]: 1,
  [
    37491
    /* COMPRESSED_SIGNED_RG11_EAC */
  ]: 1,
  [
    37492
    /* COMPRESSED_RGB8_ETC2 */
  ]: 0.5,
  [
    37496
    /* COMPRESSED_RGBA8_ETC2_EAC */
  ]: 1,
  [
    37493
    /* COMPRESSED_SRGB8_ETC2 */
  ]: 0.5,
  [
    37497
    /* COMPRESSED_SRGB8_ALPHA8_ETC2_EAC */
  ]: 1,
  [
    37494
    /* COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2 */
  ]: 0.5,
  [
    37495
    /* COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2 */
  ]: 0.5,
  [
    37808
    /* COMPRESSED_RGBA_ASTC_4x4_KHR */
  ]: 1,
  [
    37840
    /* COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR */
  ]: 1,
  [
    37809
    /* COMPRESSED_RGBA_ASTC_5x4_KHR */
  ]: 0.8,
  [
    37841
    /* COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR */
  ]: 0.8,
  [
    37810
    /* COMPRESSED_RGBA_ASTC_5x5_KHR */
  ]: 0.64,
  [
    37842
    /* COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR */
  ]: 0.64,
  [
    37811
    /* COMPRESSED_RGBA_ASTC_6x5_KHR */
  ]: 0.53375,
  [
    37843
    /* COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR */
  ]: 0.53375,
  [
    37812
    /* COMPRESSED_RGBA_ASTC_6x6_KHR */
  ]: 0.445,
  [
    37844
    /* COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR */
  ]: 0.445,
  [
    37813
    /* COMPRESSED_RGBA_ASTC_8x5_KHR */
  ]: 0.4,
  [
    37845
    /* COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR */
  ]: 0.4,
  [
    37814
    /* COMPRESSED_RGBA_ASTC_8x6_KHR */
  ]: 0.33375,
  [
    37846
    /* COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR */
  ]: 0.33375,
  [
    37815
    /* COMPRESSED_RGBA_ASTC_8x8_KHR */
  ]: 0.25,
  [
    37847
    /* COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR */
  ]: 0.25,
  [
    37816
    /* COMPRESSED_RGBA_ASTC_10x5_KHR */
  ]: 0.32,
  [
    37848
    /* COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR */
  ]: 0.32,
  [
    37817
    /* COMPRESSED_RGBA_ASTC_10x6_KHR */
  ]: 0.26625,
  [
    37849
    /* COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR */
  ]: 0.26625,
  [
    37818
    /* COMPRESSED_RGBA_ASTC_10x8_KHR */
  ]: 0.2,
  [
    37850
    /* COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR */
  ]: 0.2,
  [
    37819
    /* COMPRESSED_RGBA_ASTC_10x10_KHR */
  ]: 0.16,
  [
    37851
    /* COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR */
  ]: 0.16,
  [
    37820
    /* COMPRESSED_RGBA_ASTC_12x10_KHR */
  ]: 0.13375,
  [
    37852
    /* COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR */
  ]: 0.13375,
  [
    37821
    /* COMPRESSED_RGBA_ASTC_12x12_KHR */
  ]: 0.11125,
  [
    37853
    /* COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR */
  ]: 0.11125,
  [
    36492
    /* COMPRESSED_RGBA_BPTC_UNORM_EXT */
  ]: 1,
  [
    36493
    /* COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT */
  ]: 1,
  [
    36494
    /* COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT */
  ]: 1,
  [
    36495
    /* COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT */
  ]: 1
};
var KTX = {
  FILE_HEADER_SIZE,
  FILE_IDENTIFIER,
  FORMATS_TO_COMPONENTS,
  INTERNAL_FORMAT_TO_BYTES_PER_PIXEL,
  INTERNAL_FORMAT_TO_TEXTURE_FORMATS,
  FIELDS,
  TYPES_TO_BYTES_PER_COMPONENT,
  TYPES_TO_BYTES_PER_PIXEL,
  ENDIANNESS
};

// node_modules/pixi.js/lib/compressed-textures/ktx/parseKTX.mjs
function parseKTX(arrayBuffer, supportedFormats) {
  const dataView = new DataView(arrayBuffer);
  if (!validate(dataView)) {
    throw new Error("Invalid KTX identifier in header");
  }
  const {
    littleEndian,
    glType,
    glFormat,
    glInternalFormat,
    pixelWidth,
    pixelHeight,
    numberOfMipmapLevels,
    offset
  } = parseKTXHeader(dataView);
  const textureFormat = KTX.INTERNAL_FORMAT_TO_TEXTURE_FORMATS[glInternalFormat];
  if (!textureFormat) {
    throw new Error(`Unknown texture format ${glInternalFormat}`);
  }
  if (!supportedFormats.includes(textureFormat)) {
    throw new Error(`Unsupported texture format: ${textureFormat}, supportedFormats: ${supportedFormats}`);
  }
  const imagePixelByteSize = getImagePixelByteSize(glType, glFormat, glInternalFormat);
  const imageBuffers = getImageBuffers(
    dataView,
    glType,
    imagePixelByteSize,
    pixelWidth,
    pixelHeight,
    offset,
    numberOfMipmapLevels,
    littleEndian
  );
  return {
    format: textureFormat,
    width: pixelWidth,
    height: pixelHeight,
    resource: imageBuffers,
    alphaMode: "no-premultiply-alpha"
  };
}
function getImageBuffers(dataView, glType, imagePixelByteSize, pixelWidth, pixelHeight, offset, numberOfMipmapLevels, littleEndian) {
  const alignedWidth = pixelWidth + 3 & ~3;
  const alignedHeight = pixelHeight + 3 & ~3;
  let imagePixels = pixelWidth * pixelHeight;
  if (glType === 0) {
    imagePixels = alignedWidth * alignedHeight;
  }
  let mipByteSize = imagePixels * imagePixelByteSize;
  let mipWidth = pixelWidth;
  let mipHeight = pixelHeight;
  let alignedMipWidth = alignedWidth;
  let alignedMipHeight = alignedHeight;
  let imageOffset = offset;
  const imageBuffers = new Array(numberOfMipmapLevels);
  for (let mipmapLevel = 0; mipmapLevel < numberOfMipmapLevels; mipmapLevel++) {
    const imageSize = dataView.getUint32(imageOffset, littleEndian);
    let elementOffset = imageOffset + 4;
    imageBuffers[mipmapLevel] = new Uint8Array(dataView.buffer, elementOffset, mipByteSize);
    elementOffset += mipByteSize;
    imageOffset += imageSize + 4;
    imageOffset = imageOffset % 4 !== 0 ? imageOffset + 4 - imageOffset % 4 : imageOffset;
    mipWidth = mipWidth >> 1 || 1;
    mipHeight = mipHeight >> 1 || 1;
    alignedMipWidth = mipWidth + 4 - 1 & ~(4 - 1);
    alignedMipHeight = mipHeight + 4 - 1 & ~(4 - 1);
    mipByteSize = alignedMipWidth * alignedMipHeight * imagePixelByteSize;
  }
  return imageBuffers;
}
function getImagePixelByteSize(glType, glFormat, glInternalFormat) {
  let imagePixelByteSize = KTX.INTERNAL_FORMAT_TO_BYTES_PER_PIXEL[glInternalFormat];
  if (glType !== 0) {
    if (KTX.TYPES_TO_BYTES_PER_COMPONENT[glType]) {
      imagePixelByteSize = KTX.TYPES_TO_BYTES_PER_COMPONENT[glType] * KTX.FORMATS_TO_COMPONENTS[glFormat];
    } else {
      imagePixelByteSize = KTX.TYPES_TO_BYTES_PER_PIXEL[glType];
    }
  }
  if (imagePixelByteSize === void 0) {
    throw new Error("Unable to resolve the pixel format stored in the *.ktx file!");
  }
  return imagePixelByteSize;
}
function parseKTXHeader(dataView) {
  const littleEndian = dataView.getUint32(KTX.FIELDS.ENDIANNESS, true) === KTX.ENDIANNESS;
  const glType = dataView.getUint32(KTX.FIELDS.GL_TYPE, littleEndian);
  const glFormat = dataView.getUint32(KTX.FIELDS.GL_FORMAT, littleEndian);
  const glInternalFormat = dataView.getUint32(KTX.FIELDS.GL_INTERNAL_FORMAT, littleEndian);
  const pixelWidth = dataView.getUint32(KTX.FIELDS.PIXEL_WIDTH, littleEndian);
  const pixelHeight = dataView.getUint32(KTX.FIELDS.PIXEL_HEIGHT, littleEndian) || 1;
  const pixelDepth = dataView.getUint32(KTX.FIELDS.PIXEL_DEPTH, littleEndian) || 1;
  const numberOfArrayElements = dataView.getUint32(KTX.FIELDS.NUMBER_OF_ARRAY_ELEMENTS, littleEndian) || 1;
  const numberOfFaces = dataView.getUint32(KTX.FIELDS.NUMBER_OF_FACES, littleEndian);
  const numberOfMipmapLevels = dataView.getUint32(KTX.FIELDS.NUMBER_OF_MIPMAP_LEVELS, littleEndian);
  const bytesOfKeyValueData = dataView.getUint32(KTX.FIELDS.BYTES_OF_KEY_VALUE_DATA, littleEndian);
  if (pixelHeight === 0 || pixelDepth !== 1) {
    throw new Error("Only 2D textures are supported");
  }
  if (numberOfFaces !== 1) {
    throw new Error("CubeTextures are not supported by KTXLoader yet!");
  }
  if (numberOfArrayElements !== 1) {
    throw new Error("WebGL does not support array textures");
  }
  return {
    littleEndian,
    glType,
    glFormat,
    glInternalFormat,
    pixelWidth,
    pixelHeight,
    numberOfMipmapLevels,
    offset: KTX.FILE_HEADER_SIZE + bytesOfKeyValueData
  };
}
function validate(dataView) {
  for (let i = 0; i < KTX.FILE_IDENTIFIER.length; i++) {
    if (dataView.getUint8(i) !== KTX.FILE_IDENTIFIER[i]) {
      return false;
    }
  }
  return true;
}

// node_modules/pixi.js/lib/compressed-textures/ktx/loadKTX.mjs
var loadKTX = {
  extension: {
    type: ExtensionType.LoadParser,
    priority: LoaderParserPriority.High,
    name: "loadKTX"
  },
  name: "loadKTX",
  test(url) {
    return checkExtension(url, ".ktx");
  },
  async load(url, _asset, loader) {
    const supportedTextures = await getSupportedTextureFormats();
    const ktxResponse = await fetch(url);
    const ktxArrayBuffer = await ktxResponse.arrayBuffer();
    const textureOptions = parseKTX(ktxArrayBuffer, supportedTextures);
    const compressedTextureSource = new CompressedSource(textureOptions);
    return createTexture(compressedTextureSource, loader, url);
  },
  unload(texture) {
    if (Array.isArray(texture)) {
      texture.forEach((t) => t.destroy(true));
    } else {
      texture.destroy(true);
    }
  }
};

// node_modules/pixi.js/lib/_virtual/ktx.worker.mjs
var WORKER_CODE4 = '(function () {\n    \'use strict\';\n\n    const converters = {\n      rgb8unorm: {\n        convertedFormat: "rgba8unorm",\n        convertFunction: convertRGBtoRGBA\n      },\n      "rgb8unorm-srgb": {\n        convertedFormat: "rgba8unorm-srgb",\n        convertFunction: convertRGBtoRGBA\n      }\n    };\n    function convertFormatIfRequired(textureOptions) {\n      const format = textureOptions.format;\n      if (converters[format]) {\n        const convertFunction = converters[format].convertFunction;\n        const levelBuffers = textureOptions.resource;\n        for (let i = 0; i < levelBuffers.length; i++) {\n          levelBuffers[i] = convertFunction(levelBuffers[i]);\n        }\n        textureOptions.format = converters[format].convertedFormat;\n      }\n    }\n    function convertRGBtoRGBA(levelBuffer) {\n      const pixelCount = levelBuffer.byteLength / 3;\n      const levelBufferWithAlpha = new Uint32Array(pixelCount);\n      for (let i = 0; i < pixelCount; ++i) {\n        levelBufferWithAlpha[i] = levelBuffer[i * 3] + (levelBuffer[i * 3 + 1] << 8) + (levelBuffer[i * 3 + 2] << 16) + 4278190080;\n      }\n      return new Uint8Array(levelBufferWithAlpha.buffer);\n    }\n\n    function createLevelBuffersFromKTX(ktxTexture) {\n      const levelBuffers = [];\n      for (let i = 0; i < ktxTexture.numLevels; i++) {\n        const imageData = ktxTexture.getImageData(i, 0, 0);\n        const levelBuffer = new Uint8Array(imageData.byteLength);\n        levelBuffer.set(imageData);\n        levelBuffers.push(levelBuffer);\n      }\n      return levelBuffers;\n    }\n\n    const glFormatToGPUFormatMap = {\n      6408: "rgba8unorm",\n      32856: "bgra8unorm",\n      //\n      32857: "rgb10a2unorm",\n      33189: "depth16unorm",\n      33190: "depth24plus",\n      33321: "r8unorm",\n      33323: "rg8unorm",\n      33325: "r16float",\n      33326: "r32float",\n      33327: "rg16float",\n      33328: "rg32float",\n      33329: "r8sint",\n      33330: "r8uint",\n      33331: "r16sint",\n      33332: "r16uint",\n      33333: "r32sint",\n      33334: "r32uint",\n      33335: "rg8sint",\n      33336: "rg8uint",\n      33337: "rg16sint",\n      33338: "rg16uint",\n      33339: "rg32sint",\n      33340: "rg32uint",\n      33778: "bc2-rgba-unorm",\n      33779: "bc3-rgba-unorm",\n      34836: "rgba32float",\n      34842: "rgba16float",\n      35056: "depth24plus-stencil8",\n      35898: "rg11b10ufloat",\n      35901: "rgb9e5ufloat",\n      35907: "rgba8unorm-srgb",\n      // bgra8unorm-srgb\n      36012: "depth32float",\n      36013: "depth32float-stencil8",\n      36168: "stencil8",\n      36208: "rgba32uint",\n      36214: "rgba16uint",\n      36220: "rgba8uint",\n      36226: "rgba32sint",\n      36232: "rgba16sint",\n      36238: "rgba8sint",\n      36492: "bc7-rgba-unorm",\n      36756: "r8snorm",\n      36757: "rg8snorm",\n      36759: "rgba8snorm",\n      37496: "etc2-rgba8unorm",\n      37808: "astc-4x4-unorm"\n    };\n    function glFormatToGPUFormat(glInternalFormat) {\n      const format = glFormatToGPUFormatMap[glInternalFormat];\n      if (format) {\n        return format;\n      }\n      throw new Error(`Unsupported glInternalFormat: ${glInternalFormat}`);\n    }\n\n    const vkFormatToGPUFormatMap = {\n      23: "rgb8unorm",\n      // VK_FORMAT_R8G8B8_UNORM\n      37: "rgba8unorm",\n      // VK_FORMAT_R8G8B8A8_UNORM\n      43: "rgba8unorm-srgb"\n      // VK_FORMAT_R8G8B8A8_SRGB\n      // TODO add more!\n    };\n    function vkFormatToGPUFormat(vkFormat) {\n      const format = vkFormatToGPUFormatMap[vkFormat];\n      if (format) {\n        return format;\n      }\n      throw new Error(`Unsupported VkFormat: ${vkFormat}`);\n    }\n\n    function getTextureFormatFromKTXTexture(ktxTexture) {\n      if (ktxTexture.classId === 2) {\n        return vkFormatToGPUFormat(ktxTexture.vkFormat);\n      }\n      return glFormatToGPUFormat(ktxTexture.glInternalformat);\n    }\n\n    const gpuFormatToBasisTranscoderFormatMap = {\n      "bc3-rgba-unorm": "BC3_RGBA",\n      "bc7-rgba-unorm": "BC7_M5_RGBA",\n      "etc2-rgba8unorm": "ETC2_RGBA",\n      "astc-4x4-unorm": "ASTC_4x4_RGBA",\n      // Uncompressed\n      rgba8unorm: "RGBA32",\n      rg11b10ufloat: "R11F_G11F_B10F"\n    };\n    function gpuFormatToKTXBasisTranscoderFormat(transcoderFormat) {\n      const format = gpuFormatToBasisTranscoderFormatMap[transcoderFormat];\n      if (format) {\n        return format;\n      }\n      throw new Error(`Unsupported transcoderFormat: ${transcoderFormat}`);\n    }\n\n    const settings = {\n      jsUrl: "",\n      wasmUrl: ""\n    };\n    let basisTranscoderFormat;\n    let basisTranscodedTextureFormat;\n    let ktxPromise;\n    async function getKTX() {\n      if (!ktxPromise) {\n        const absoluteJsUrl = new URL(settings.jsUrl, location.origin).href;\n        const absoluteWasmUrl = new URL(settings.wasmUrl, location.origin).href;\n        importScripts(absoluteJsUrl);\n        ktxPromise = new Promise((resolve) => {\n          LIBKTX({\n            locateFile: (_file) => absoluteWasmUrl\n          }).then((libktx) => {\n            resolve(libktx);\n          });\n        });\n      }\n      return ktxPromise;\n    }\n    async function fetchKTXTexture(url, ktx) {\n      const ktx2Response = await fetch(url);\n      if (ktx2Response.ok) {\n        const ktx2ArrayBuffer = await ktx2Response.arrayBuffer();\n        return new ktx.ktxTexture(new Uint8Array(ktx2ArrayBuffer));\n      }\n      throw new Error(`Failed to load KTX(2) texture: ${url}`);\n    }\n    const preferredTranscodedFormat = [\n      "bc7-rgba-unorm",\n      "astc-4x4-unorm",\n      "etc2-rgba8unorm",\n      "bc3-rgba-unorm",\n      "rgba8unorm"\n    ];\n    async function load(url) {\n      const ktx = await getKTX();\n      const ktxTexture = await fetchKTXTexture(url, ktx);\n      let format;\n      if (ktxTexture.needsTranscoding) {\n        format = basisTranscodedTextureFormat;\n        const transcodeFormat = ktx.TranscodeTarget[basisTranscoderFormat];\n        const result = ktxTexture.transcodeBasis(transcodeFormat, 0);\n        if (result !== ktx.ErrorCode.SUCCESS) {\n          throw new Error("Unable to transcode basis texture.");\n        }\n      } else {\n        format = getTextureFormatFromKTXTexture(ktxTexture);\n      }\n      const levelBuffers = createLevelBuffersFromKTX(ktxTexture);\n      const textureOptions = {\n        width: ktxTexture.baseWidth,\n        height: ktxTexture.baseHeight,\n        format,\n        mipLevelCount: ktxTexture.numLevels,\n        resource: levelBuffers,\n        alphaMode: "no-premultiply-alpha"\n      };\n      convertFormatIfRequired(textureOptions);\n      return textureOptions;\n    }\n    async function init(jsUrl, wasmUrl, supportedTextures) {\n      if (jsUrl)\n        settings.jsUrl = jsUrl;\n      if (wasmUrl)\n        settings.wasmUrl = wasmUrl;\n      basisTranscodedTextureFormat = preferredTranscodedFormat.filter((format) => supportedTextures.includes(format))[0];\n      basisTranscoderFormat = gpuFormatToKTXBasisTranscoderFormat(basisTranscodedTextureFormat);\n      await getKTX();\n    }\n    const messageHandlers = {\n      init: async (data) => {\n        const { jsUrl, wasmUrl, supportedTextures } = data;\n        await init(jsUrl, wasmUrl, supportedTextures);\n      },\n      load: async (data) => {\n        try {\n          const textureOptions = await load(data.url);\n          return {\n            type: "load",\n            url: data.url,\n            success: true,\n            textureOptions,\n            transferables: textureOptions.resource?.map((arr) => arr.buffer)\n          };\n        } catch (e) {\n          throw e;\n        }\n      }\n    };\n    self.onmessage = async (messageEvent) => {\n      const message = messageEvent.data;\n      const response = await messageHandlers[message.type]?.(message);\n      if (response) {\n        self.postMessage(response, response.transferables);\n      }\n    };\n\n})();\n';
var WORKER_URL4 = null;
var WorkerInstance4 = class {
  constructor() {
    if (!WORKER_URL4) {
      WORKER_URL4 = URL.createObjectURL(new Blob([WORKER_CODE4], { type: "application/javascript" }));
    }
    this.worker = new Worker(WORKER_URL4);
  }
};
WorkerInstance4.revokeObjectURL = function revokeObjectURL4() {
  if (WORKER_URL4) {
    URL.revokeObjectURL(WORKER_URL4);
    WORKER_URL4 = null;
  }
};

// node_modules/pixi.js/lib/compressed-textures/ktx2/utils/setKTXTranscoderPath.mjs
var ktxTranscoderUrls = {
  jsUrl: "https://files.pixijs.download/transcoders/ktx/libktx.js",
  wasmUrl: "https://files.pixijs.download/transcoders/ktx/libktx.wasm"
};
function setKTXTranscoderPath(config) {
  Object.assign(ktxTranscoderUrls, config);
}

// node_modules/pixi.js/lib/compressed-textures/ktx2/worker/loadKTX2onWorker.mjs
var ktxWorker;
var urlHash2 = {};
function getKTX2Worker(supportedTextures) {
  if (!ktxWorker) {
    ktxWorker = new WorkerInstance4().worker;
    ktxWorker.onmessage = (messageEvent) => {
      const { success, url, textureOptions } = messageEvent.data;
      if (!success) {
        console.warn("Failed to load KTX texture", url);
      }
      urlHash2[url](textureOptions);
    };
    ktxWorker.postMessage({
      type: "init",
      jsUrl: ktxTranscoderUrls.jsUrl,
      wasmUrl: ktxTranscoderUrls.wasmUrl,
      supportedTextures
    });
  }
  return ktxWorker;
}
function loadKTX2onWorker(url, supportedTextures) {
  const ktxWorker2 = getKTX2Worker(supportedTextures);
  return new Promise((resolve) => {
    urlHash2[url] = resolve;
    ktxWorker2.postMessage({ type: "load", url });
  });
}

// node_modules/pixi.js/lib/compressed-textures/ktx2/loadKTX2.mjs
var loadKTX2 = {
  extension: {
    type: ExtensionType.LoadParser,
    priority: LoaderParserPriority.High,
    name: "loadKTX2"
  },
  name: "loadKTX2",
  test(url) {
    return checkExtension(url, ".ktx2");
  },
  async load(url, _asset, loader) {
    const supportedTextures = await getSupportedTextureFormats();
    const textureOptions = await loadKTX2onWorker(url, supportedTextures);
    const compressedTextureSource = new CompressedSource(textureOptions);
    return createTexture(compressedTextureSource, loader, url);
  },
  async unload(texture) {
    if (Array.isArray(texture)) {
      texture.forEach((t) => t.destroy(true));
    } else {
      texture.destroy(true);
    }
  }
};

// node_modules/pixi.js/lib/compressed-textures/ktx2/utils/convertFormatIfRequired.mjs
var converters = {
  rgb8unorm: {
    convertedFormat: "rgba8unorm",
    convertFunction: convertRGBtoRGBA
  },
  "rgb8unorm-srgb": {
    convertedFormat: "rgba8unorm-srgb",
    convertFunction: convertRGBtoRGBA
  }
};
function convertFormatIfRequired(textureOptions) {
  const format = textureOptions.format;
  if (converters[format]) {
    const convertFunction = converters[format].convertFunction;
    const levelBuffers = textureOptions.resource;
    for (let i = 0; i < levelBuffers.length; i++) {
      levelBuffers[i] = convertFunction(levelBuffers[i]);
    }
    textureOptions.format = converters[format].convertedFormat;
  }
}
function convertRGBtoRGBA(levelBuffer) {
  const pixelCount = levelBuffer.byteLength / 3;
  const levelBufferWithAlpha = new Uint32Array(pixelCount);
  for (let i = 0; i < pixelCount; ++i) {
    levelBufferWithAlpha[i] = levelBuffer[i * 3] + (levelBuffer[i * 3 + 1] << 8) + (levelBuffer[i * 3 + 2] << 16) + 4278190080;
  }
  return new Uint8Array(levelBufferWithAlpha.buffer);
}

// node_modules/pixi.js/lib/compressed-textures/ktx2/utils/createLevelBuffersFromKTX.mjs
function createLevelBuffersFromKTX(ktxTexture) {
  const levelBuffers = [];
  for (let i = 0; i < ktxTexture.numLevels; i++) {
    const imageData = ktxTexture.getImageData(i, 0, 0);
    const levelBuffer = new Uint8Array(imageData.byteLength);
    levelBuffer.set(imageData);
    levelBuffers.push(levelBuffer);
  }
  return levelBuffers;
}

// node_modules/pixi.js/lib/compressed-textures/ktx2/utils/glFormatToGPUFormat.mjs
var glFormatToGPUFormatMap = {
  6408: "rgba8unorm",
  32856: "bgra8unorm",
  //
  32857: "rgb10a2unorm",
  33189: "depth16unorm",
  33190: "depth24plus",
  33321: "r8unorm",
  33323: "rg8unorm",
  33325: "r16float",
  33326: "r32float",
  33327: "rg16float",
  33328: "rg32float",
  33329: "r8sint",
  33330: "r8uint",
  33331: "r16sint",
  33332: "r16uint",
  33333: "r32sint",
  33334: "r32uint",
  33335: "rg8sint",
  33336: "rg8uint",
  33337: "rg16sint",
  33338: "rg16uint",
  33339: "rg32sint",
  33340: "rg32uint",
  33778: "bc2-rgba-unorm",
  33779: "bc3-rgba-unorm",
  34836: "rgba32float",
  34842: "rgba16float",
  35056: "depth24plus-stencil8",
  35898: "rg11b10ufloat",
  35901: "rgb9e5ufloat",
  35907: "rgba8unorm-srgb",
  // bgra8unorm-srgb
  36012: "depth32float",
  36013: "depth32float-stencil8",
  36168: "stencil8",
  36208: "rgba32uint",
  36214: "rgba16uint",
  36220: "rgba8uint",
  36226: "rgba32sint",
  36232: "rgba16sint",
  36238: "rgba8sint",
  36492: "bc7-rgba-unorm",
  36756: "r8snorm",
  36757: "rg8snorm",
  36759: "rgba8snorm",
  37496: "etc2-rgba8unorm",
  37808: "astc-4x4-unorm"
};
function glFormatToGPUFormat(glInternalFormat) {
  const format = glFormatToGPUFormatMap[glInternalFormat];
  if (format) {
    return format;
  }
  throw new Error(`Unsupported glInternalFormat: ${glInternalFormat}`);
}

// node_modules/pixi.js/lib/compressed-textures/ktx2/utils/vkFormatToGPUFormat.mjs
var vkFormatToGPUFormatMap = {
  23: "rgb8unorm",
  // VK_FORMAT_R8G8B8_UNORM
  37: "rgba8unorm",
  // VK_FORMAT_R8G8B8A8_UNORM
  43: "rgba8unorm-srgb"
  // VK_FORMAT_R8G8B8A8_SRGB
  // TODO add more!
};
function vkFormatToGPUFormat(vkFormat) {
  const format = vkFormatToGPUFormatMap[vkFormat];
  if (format) {
    return format;
  }
  throw new Error(`Unsupported VkFormat: ${vkFormat}`);
}

// node_modules/pixi.js/lib/compressed-textures/ktx2/utils/getTextureFormatFromKTXTexture.mjs
function getTextureFormatFromKTXTexture(ktxTexture) {
  if (ktxTexture.classId === 2) {
    return vkFormatToGPUFormat(ktxTexture.vkFormat);
  }
  return glFormatToGPUFormat(ktxTexture.glInternalformat);
}

// node_modules/pixi.js/lib/compressed-textures/ktx2/utils/gpuFormatToKTXBasisTranscoderFormat.mjs
var gpuFormatToBasisTranscoderFormatMap2 = {
  "bc3-rgba-unorm": "BC3_RGBA",
  "bc7-rgba-unorm": "BC7_M5_RGBA",
  "etc2-rgba8unorm": "ETC2_RGBA",
  "astc-4x4-unorm": "ASTC_4x4_RGBA",
  // Uncompressed
  rgba8unorm: "RGBA32",
  rg11b10ufloat: "R11F_G11F_B10F"
};
function gpuFormatToKTXBasisTranscoderFormat(transcoderFormat) {
  const format = gpuFormatToBasisTranscoderFormatMap2[transcoderFormat];
  if (format) {
    return format;
  }
  throw new Error(`Unsupported transcoderFormat: ${transcoderFormat}`);
}

// node_modules/pixi.js/lib/compressed-textures/shared/resolveCompressedTextureUrl.mjs
var validFormats = ["basis", "bc7", "bc6h", "astc", "etc2", "bc5", "bc4", "bc3", "bc2", "bc1", "eac"];
var resolveCompressedTextureUrl = {
  extension: ExtensionType.ResolveParser,
  test: (value) => checkExtension(value, [".ktx", ".ktx2", ".dds"]),
  parse: (value) => {
    var _a;
    let format;
    const splitValue = value.split(".");
    if (splitValue.length > 2) {
      const newFormat = splitValue[splitValue.length - 2];
      if (validFormats.includes(newFormat)) {
        format = newFormat;
      }
    } else {
      format = splitValue[splitValue.length - 1];
    }
    return {
      resolution: parseFloat(((_a = Resolver.RETINA_PREFIX.exec(value)) == null ? void 0 : _a[1]) ?? "1"),
      format,
      src: value
    };
  }
};

// node_modules/pixi.js/lib/compressed-textures/shared/detectCompressed.mjs
var compressedTextureExtensions;
var detectCompressed = {
  extension: {
    type: ExtensionType.DetectionParser,
    priority: 2
  },
  test: async () => {
    if (await isWebGPUSupported())
      return true;
    if (isWebGLSupported())
      return true;
    return false;
  },
  add: async (formats) => {
    const supportedCompressedTextureFormats2 = await getSupportedCompressedTextureFormats();
    compressedTextureExtensions = extractExtensionsForCompressedTextureFormats(supportedCompressedTextureFormats2);
    return [...compressedTextureExtensions, ...formats];
  },
  remove: async (formats) => {
    if (compressedTextureExtensions) {
      return formats.filter((f) => !(f in compressedTextureExtensions));
    }
    return formats;
  }
};
function extractExtensionsForCompressedTextureFormats(formats) {
  const extensions2 = ["basis"];
  const dupeMap = {};
  formats.forEach((format) => {
    const extension = format.split("-")[0];
    if (extension && !dupeMap[extension]) {
      dupeMap[extension] = true;
      extensions2.push(extension);
    }
  });
  extensions2.sort((a, b) => {
    const aIndex = validFormats.indexOf(a);
    const bIndex = validFormats.indexOf(b);
    if (aIndex === -1) {
      return 1;
    }
    if (bIndex === -1) {
      return -1;
    }
    return aIndex - bIndex;
  });
  return extensions2;
}

// node_modules/pixi.js/lib/culling/Culler.mjs
var tempBounds = new Bounds();
var _Culler = class _Culler2 {
  /**
   * Culls the children of a specific container based on the given view. This will also cull items that are not
   * being explicitly managed by the culler.
   * @param container - The container to cull.
   * @param view - The view rectangle.
   * @param skipUpdateTransform - Whether to skip updating the transform.
   */
  cull(container, view, skipUpdateTransform = true) {
    this._cullRecursive(container, view, skipUpdateTransform);
  }
  _cullRecursive(container, view, skipUpdateTransform = true) {
    if (container.cullable && container.measurable && container.includeInBuild) {
      const bounds = container.cullArea ?? getGlobalBounds(container, skipUpdateTransform, tempBounds);
      container.culled = bounds.x >= view.x + view.width || bounds.y >= view.y + view.height || bounds.x + bounds.width <= view.x || bounds.y + bounds.height <= view.y;
    } else {
      container.culled = false;
    }
    if (!container.cullableChildren || container.culled || !container.renderable || !container.measurable || !container.includeInBuild)
      return;
    for (let i = 0; i < container.children.length; i++) {
      this._cullRecursive(container.children[i], view, skipUpdateTransform);
    }
  }
};
_Culler.shared = new _Culler();
var Culler = _Culler;

// node_modules/pixi.js/lib/culling/CullerPlugin.mjs
var CullerPlugin = class {
  static init() {
    this._renderRef = this.render.bind(this);
    this.render = () => {
      Culler.shared.cull(this.stage, this.renderer.screen);
      this.renderer.render({ container: this.stage });
    };
  }
  static destroy() {
    this.render = this._renderRef;
  }
};
CullerPlugin.extension = {
  priority: 10,
  type: ExtensionType.Application,
  name: "culler"
};

// node_modules/pixi.js/lib/environment-webworker/WebWorkerAdapter.mjs
var import_xmldom = __toESM(require_lib(), 1);
var WebWorkerAdapter = {
  createCanvas: (width, height) => new OffscreenCanvas(width ?? 0, height ?? 0),
  getCanvasRenderingContext2D: () => OffscreenCanvasRenderingContext2D,
  getWebGLRenderingContext: () => WebGLRenderingContext,
  getNavigator: () => navigator,
  getBaseUrl: () => globalThis.location.href,
  getFontFaceSet: () => globalThis.fonts,
  fetch: (url, options) => fetch(url, options),
  parseXML: (xml) => {
    const parser = new import_xmldom.DOMParser();
    return parser.parseFromString(xml, "text/xml");
  }
};

// node_modules/pixi.js/lib/filters/defaults/defaultFilter.vert.mjs
var vertex = "in vec2 aPosition;\nout vec2 vTextureCoord;\n\nuniform vec4 uInputSize;\nuniform vec4 uOutputFrame;\nuniform vec4 uOutputTexture;\n\nvec4 filterVertexPosition( void )\n{\n    vec2 position = aPosition * uOutputFrame.zw + uOutputFrame.xy;\n    \n    position.x = position.x * (2.0 / uOutputTexture.x) - 1.0;\n    position.y = position.y * (2.0*uOutputTexture.z / uOutputTexture.y) - uOutputTexture.z;\n\n    return vec4(position, 0.0, 1.0);\n}\n\nvec2 filterTextureCoord( void )\n{\n    return aPosition * (uOutputFrame.zw * uInputSize.zw);\n}\n\nvoid main(void)\n{\n    gl_Position = filterVertexPosition();\n    vTextureCoord = filterTextureCoord();\n}\n";

// node_modules/pixi.js/lib/filters/defaults/alpha/alpha.frag.mjs
var fragment = "\nin vec2 vTextureCoord;\n\nout vec4 finalColor;\n\nuniform float uAlpha;\nuniform sampler2D uTexture;\n\nvoid main()\n{\n    finalColor =  texture(uTexture, vTextureCoord) * uAlpha;\n}\n";

// node_modules/pixi.js/lib/filters/defaults/alpha/alpha.wgsl.mjs
var source = "struct GlobalFilterUniforms {\n  uInputSize:vec4<f32>,\n  uInputPixel:vec4<f32>,\n  uInputClamp:vec4<f32>,\n  uOutputFrame:vec4<f32>,\n  uGlobalFrame:vec4<f32>,\n  uOutputTexture:vec4<f32>,\n};\n\nstruct AlphaUniforms {\n  uAlpha:f32,\n};\n\n@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;\n@group(0) @binding(1) var uTexture: texture_2d<f32>;\n@group(0) @binding(2) var uSampler : sampler;\n\n@group(1) @binding(0) var<uniform> alphaUniforms : AlphaUniforms;\n\nstruct VSOutput {\n    @builtin(position) position: vec4<f32>,\n    @location(0) uv : vec2<f32>\n  };\n\nfn filterVertexPosition(aPosition:vec2<f32>) -> vec4<f32>\n{\n    var position = aPosition * gfu.uOutputFrame.zw + gfu.uOutputFrame.xy;\n\n    position.x = position.x * (2.0 / gfu.uOutputTexture.x) - 1.0;\n    position.y = position.y * (2.0*gfu.uOutputTexture.z / gfu.uOutputTexture.y) - gfu.uOutputTexture.z;\n\n    return vec4(position, 0.0, 1.0);\n}\n\nfn filterTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>\n{\n    return aPosition * (gfu.uOutputFrame.zw * gfu.uInputSize.zw);\n}\n\nfn globalTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>\n{\n  return  (aPosition.xy / gfu.uGlobalFrame.zw) + (gfu.uGlobalFrame.xy / gfu.uGlobalFrame.zw);  \n}\n\nfn getSize() -> vec2<f32>\n{\n  return gfu.uGlobalFrame.zw;\n}\n  \n@vertex\nfn mainVertex(\n  @location(0) aPosition : vec2<f32>, \n) -> VSOutput {\n  return VSOutput(\n   filterVertexPosition(aPosition),\n   filterTextureCoord(aPosition)\n  );\n}\n\n@fragment\nfn mainFragment(\n  @location(0) uv: vec2<f32>,\n  @builtin(position) position: vec4<f32>\n) -> @location(0) vec4<f32> {\n \n    var sample = textureSample(uTexture, uSampler, uv);\n    \n    return sample * alphaUniforms.uAlpha;\n}";

// node_modules/pixi.js/lib/filters/defaults/alpha/AlphaFilter.mjs
var _AlphaFilter = class _AlphaFilter2 extends Filter {
  constructor(options) {
    options = { ..._AlphaFilter2.defaultOptions, ...options };
    const gpuProgram = GpuProgram.from({
      vertex: {
        source,
        entryPoint: "mainVertex"
      },
      fragment: {
        source,
        entryPoint: "mainFragment"
      }
    });
    const glProgram = GlProgram.from({
      vertex,
      fragment,
      name: "alpha-filter"
    });
    const { alpha, ...rest } = options;
    const alphaUniforms = new UniformGroup({
      uAlpha: { value: alpha, type: "f32" }
    });
    super({
      ...rest,
      gpuProgram,
      glProgram,
      resources: {
        alphaUniforms
      }
    });
  }
  /**
   * Coefficient for alpha multiplication
   * @default 1
   */
  get alpha() {
    return this.resources.alphaUniforms.uniforms.uAlpha;
  }
  set alpha(value) {
    this.resources.alphaUniforms.uniforms.uAlpha = value;
  }
};
_AlphaFilter.defaultOptions = {
  /** Amount of alpha from 0 to 1, where 0 is transparent */
  alpha: 1
};
var AlphaFilter = _AlphaFilter;

// node_modules/pixi.js/lib/filters/defaults/blur/const.mjs
var GAUSSIAN_VALUES = {
  5: [0.153388, 0.221461, 0.250301],
  7: [0.071303, 0.131514, 0.189879, 0.214607],
  9: [0.028532, 0.067234, 0.124009, 0.179044, 0.20236],
  11: [93e-4, 0.028002, 0.065984, 0.121703, 0.175713, 0.198596],
  13: [2406e-6, 9255e-6, 0.027867, 0.065666, 0.121117, 0.174868, 0.197641],
  15: [489e-6, 2403e-6, 9246e-6, 0.02784, 0.065602, 0.120999, 0.174697, 0.197448]
};

// node_modules/pixi.js/lib/filters/defaults/blur/gl/generateBlurFragSource.mjs
var fragTemplate = [
  "in vec2 vBlurTexCoords[%size%];",
  "uniform sampler2D uTexture;",
  "out vec4 finalColor;",
  "void main(void)",
  "{",
  "    finalColor = vec4(0.0);",
  "    %blur%",
  "}"
].join("\n");
function generateBlurFragSource(kernelSize) {
  const kernel = GAUSSIAN_VALUES[kernelSize];
  const halfLength = kernel.length;
  let fragSource = fragTemplate;
  let blurLoop = "";
  const template = "finalColor += texture(uTexture, vBlurTexCoords[%index%]) * %value%;";
  let value;
  for (let i = 0; i < kernelSize; i++) {
    let blur = template.replace("%index%", i.toString());
    value = i;
    if (i >= halfLength) {
      value = kernelSize - i - 1;
    }
    blur = blur.replace("%value%", kernel[value].toString());
    blurLoop += blur;
    blurLoop += "\n";
  }
  fragSource = fragSource.replace("%blur%", blurLoop);
  fragSource = fragSource.replace("%size%", kernelSize.toString());
  return fragSource;
}

// node_modules/pixi.js/lib/filters/defaults/blur/gl/generateBlurVertSource.mjs
var vertTemplate = `
    in vec2 aPosition;

    uniform float uStrength;

    out vec2 vBlurTexCoords[%size%];

    uniform vec4 uInputSize;
    uniform vec4 uOutputFrame;
    uniform vec4 uOutputTexture;

    vec4 filterVertexPosition( void )
{
    vec2 position = aPosition * uOutputFrame.zw + uOutputFrame.xy;
    
    position.x = position.x * (2.0 / uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*uOutputTexture.z / uOutputTexture.y) - uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

    vec2 filterTextureCoord( void )
    {
        return aPosition * (uOutputFrame.zw * uInputSize.zw);
    }

    void main(void)
    {
        gl_Position = filterVertexPosition();

        float pixelStrength = uInputSize.%dimension% * uStrength;

        vec2 textureCoord = filterTextureCoord();
        %blur%
    }`;
function generateBlurVertSource(kernelSize, x) {
  const halfLength = Math.ceil(kernelSize / 2);
  let vertSource = vertTemplate;
  let blurLoop = "";
  let template;
  if (x) {
    template = "vBlurTexCoords[%index%] =  textureCoord + vec2(%sampleIndex% * pixelStrength, 0.0);";
  } else {
    template = "vBlurTexCoords[%index%] =  textureCoord + vec2(0.0, %sampleIndex% * pixelStrength);";
  }
  for (let i = 0; i < kernelSize; i++) {
    let blur = template.replace("%index%", i.toString());
    blur = blur.replace("%sampleIndex%", `${i - (halfLength - 1)}.0`);
    blurLoop += blur;
    blurLoop += "\n";
  }
  vertSource = vertSource.replace("%blur%", blurLoop);
  vertSource = vertSource.replace("%size%", kernelSize.toString());
  vertSource = vertSource.replace("%dimension%", x ? "z" : "w");
  return vertSource;
}

// node_modules/pixi.js/lib/filters/defaults/blur/gl/generateBlurGlProgram.mjs
function generateBlurGlProgram(horizontal, kernelSize) {
  const vertex4 = generateBlurVertSource(kernelSize, horizontal);
  const fragment6 = generateBlurFragSource(kernelSize);
  return GlProgram.from({
    vertex: vertex4,
    fragment: fragment6,
    name: `blur-${horizontal ? "horizontal" : "vertical"}-pass-filter`
  });
}

// node_modules/pixi.js/lib/filters/defaults/blur/gpu/blur-template.wgsl.mjs
var source2 = "\n\nstruct GlobalFilterUniforms {\n  uInputSize:vec4<f32>,\n  uInputPixel:vec4<f32>,\n  uInputClamp:vec4<f32>,\n  uOutputFrame:vec4<f32>,\n  uGlobalFrame:vec4<f32>,\n  uOutputTexture:vec4<f32>,\n};\n\nstruct BlurUniforms {\n  uStrength:f32,\n};\n\n@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;\n@group(0) @binding(1) var uTexture: texture_2d<f32>;\n@group(0) @binding(2) var uSampler : sampler;\n\n@group(1) @binding(0) var<uniform> blurUniforms : BlurUniforms;\n\n\nstruct VSOutput {\n    @builtin(position) position: vec4<f32>,\n    %blur-struct%\n  };\n\nfn filterVertexPosition(aPosition:vec2<f32>) -> vec4<f32>\n{\n    var position = aPosition * gfu.uOutputFrame.zw + gfu.uOutputFrame.xy;\n\n    position.x = position.x * (2.0 / gfu.uOutputTexture.x) - 1.0;\n    position.y = position.y * (2.0*gfu.uOutputTexture.z / gfu.uOutputTexture.y) - gfu.uOutputTexture.z;\n\n    return vec4(position, 0.0, 1.0);\n}\n\nfn filterTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>\n{\n    return aPosition * (gfu.uOutputFrame.zw * gfu.uInputSize.zw);\n}\n\nfn globalTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>\n{\n  return  (aPosition.xy / gfu.uGlobalFrame.zw) + (gfu.uGlobalFrame.xy / gfu.uGlobalFrame.zw);  \n}\n\nfn getSize() -> vec2<f32>\n{\n  return gfu.uGlobalFrame.zw;\n}\n\n\n@vertex\nfn mainVertex(\n  @location(0) aPosition : vec2<f32>, \n) -> VSOutput {\n\n  let filteredCord = filterTextureCoord(aPosition);\n\n  let pixelStrength = gfu.uInputSize.%dimension% * blurUniforms.uStrength;\n\n  return VSOutput(\n   filterVertexPosition(aPosition),\n    %blur-vertex-out%\n  );\n}\n\n@fragment\nfn mainFragment(\n  @builtin(position) position: vec4<f32>,\n  %blur-fragment-in%\n) -> @location(0) vec4<f32> {\n\n    var   finalColor = vec4(0.0);\n\n    %blur-sampling%\n\n    return finalColor;\n}";

// node_modules/pixi.js/lib/filters/defaults/blur/gpu/generateBlurProgram.mjs
function generateBlurProgram(horizontal, kernelSize) {
  const kernel = GAUSSIAN_VALUES[kernelSize];
  const halfLength = kernel.length;
  const blurStructSource = [];
  const blurOutSource = [];
  const blurSamplingSource = [];
  for (let i = 0; i < kernelSize; i++) {
    blurStructSource[i] = `@location(${i}) offset${i}: vec2<f32>,`;
    if (horizontal) {
      blurOutSource[i] = `filteredCord + vec2(${i - halfLength + 1} * pixelStrength, 0.0),`;
    } else {
      blurOutSource[i] = `filteredCord + vec2(0.0, ${i - halfLength + 1} * pixelStrength),`;
    }
    const kernelIndex = i < halfLength ? i : kernelSize - i - 1;
    const kernelValue = kernel[kernelIndex].toString();
    blurSamplingSource[i] = `finalColor += textureSample(uTexture, uSampler, offset${i}) * ${kernelValue};`;
  }
  const blurStruct = blurStructSource.join("\n");
  const blurOut = blurOutSource.join("\n");
  const blurSampling = blurSamplingSource.join("\n");
  const finalSource = source2.replace("%blur-struct%", blurStruct).replace("%blur-vertex-out%", blurOut).replace("%blur-fragment-in%", blurStruct).replace("%blur-sampling%", blurSampling).replace("%dimension%", horizontal ? "z" : "w");
  return GpuProgram.from({
    vertex: {
      source: finalSource,
      entryPoint: "mainVertex"
    },
    fragment: {
      source: finalSource,
      entryPoint: "mainFragment"
    }
  });
}

// node_modules/pixi.js/lib/filters/defaults/blur/BlurFilterPass.mjs
var _BlurFilterPass = class _BlurFilterPass2 extends Filter {
  /**
   * @param options
   * @param options.horizontal - Do pass along the x-axis (`true`) or y-axis (`false`).
   * @param options.strength - The strength of the blur filter.
   * @param options.quality - The quality of the blur filter.
   * @param options.kernelSize - The kernelSize of the blur filter.Options: 5, 7, 9, 11, 13, 15.
   */
  constructor(options) {
    options = { ..._BlurFilterPass2.defaultOptions, ...options };
    const glProgram = generateBlurGlProgram(options.horizontal, options.kernelSize);
    const gpuProgram = generateBlurProgram(options.horizontal, options.kernelSize);
    super({
      glProgram,
      gpuProgram,
      resources: {
        blurUniforms: {
          uStrength: { value: 0, type: "f32" }
        }
      },
      ...options
    });
    this.horizontal = options.horizontal;
    this._quality = 0;
    this.quality = options.quality;
    this.blur = options.strength;
    this._uniforms = this.resources.blurUniforms.uniforms;
  }
  /**
   * Applies the filter.
   * @param filterManager - The manager.
   * @param input - The input target.
   * @param output - The output target.
   * @param clearMode - How to clear
   */
  apply(filterManager, input, output, clearMode) {
    this._uniforms.uStrength = this.strength / this.passes;
    if (this.passes === 1) {
      filterManager.applyFilter(this, input, output, clearMode);
    } else {
      const tempTexture = TexturePool.getSameSizeTexture(input);
      let flip = input;
      let flop = tempTexture;
      this._state.blend = false;
      const shouldClear = filterManager.renderer.type === RendererType.WEBGPU;
      for (let i = 0; i < this.passes - 1; i++) {
        filterManager.applyFilter(this, flip, flop, i === 0 ? true : shouldClear);
        const temp = flop;
        flop = flip;
        flip = temp;
      }
      this._state.blend = true;
      filterManager.applyFilter(this, flip, output, clearMode);
      TexturePool.returnTexture(tempTexture);
    }
  }
  /**
   * Sets the strength of both the blur.
   * @default 16
   */
  get blur() {
    return this.strength;
  }
  set blur(value) {
    this.padding = 1 + Math.abs(value) * 2;
    this.strength = value;
  }
  /**
   * Sets the quality of the blur by modifying the number of passes. More passes means higher
   * quality blurring but the lower the performance.
   * @default 4
   */
  get quality() {
    return this._quality;
  }
  set quality(value) {
    this._quality = value;
    this.passes = value;
  }
};
_BlurFilterPass.defaultOptions = {
  /** The strength of the blur filter. */
  strength: 8,
  /** The quality of the blur filter. */
  quality: 4,
  /** The kernelSize of the blur filter.Options: 5, 7, 9, 11, 13, 15. */
  kernelSize: 5
};
var BlurFilterPass = _BlurFilterPass;

// node_modules/pixi.js/lib/filters/defaults/blur/BlurFilter.mjs
var BlurFilter = class extends Filter {
  constructor(...args) {
    let options = args[0] ?? {};
    if (typeof options === "number") {
      deprecation(v8_0_0, "BlurFilter constructor params are now options object. See params: { strength, quality, resolution, kernelSize }");
      options = { strength: options };
      if (args[1] !== void 0)
        options.quality = args[1];
      if (args[2] !== void 0)
        options.resolution = args[2] || "inherit";
      if (args[3] !== void 0)
        options.kernelSize = args[3];
    }
    options = { ...BlurFilterPass.defaultOptions, ...options };
    const { strength, strengthX, strengthY, quality, ...rest } = options;
    super({
      ...rest,
      compatibleRenderers: RendererType.BOTH,
      resources: {}
    });
    this._repeatEdgePixels = false;
    this.blurXFilter = new BlurFilterPass({ horizontal: true, ...options });
    this.blurYFilter = new BlurFilterPass({ horizontal: false, ...options });
    this.quality = quality;
    this.strengthX = strengthX ?? strength;
    this.strengthY = strengthY ?? strength;
    this.repeatEdgePixels = false;
  }
  /**
   * Applies the filter.
   * @param filterManager - The manager.
   * @param input - The input target.
   * @param output - The output target.
   * @param clearMode - How to clear
   */
  apply(filterManager, input, output, clearMode) {
    const xStrength = Math.abs(this.blurXFilter.strength);
    const yStrength = Math.abs(this.blurYFilter.strength);
    if (xStrength && yStrength) {
      const tempTexture = TexturePool.getSameSizeTexture(input);
      this.blurXFilter.blendMode = "normal";
      this.blurXFilter.apply(filterManager, input, tempTexture, true);
      this.blurYFilter.blendMode = this.blendMode;
      this.blurYFilter.apply(filterManager, tempTexture, output, clearMode);
      TexturePool.returnTexture(tempTexture);
    } else if (yStrength) {
      this.blurYFilter.blendMode = this.blendMode;
      this.blurYFilter.apply(filterManager, input, output, clearMode);
    } else {
      this.blurXFilter.blendMode = this.blendMode;
      this.blurXFilter.apply(filterManager, input, output, clearMode);
    }
  }
  updatePadding() {
    if (this._repeatEdgePixels) {
      this.padding = 0;
    } else {
      this.padding = Math.max(Math.abs(this.blurXFilter.blur), Math.abs(this.blurYFilter.blur)) * 2;
    }
  }
  /**
   * Sets the strength of both the blurX and blurY properties simultaneously
   * @default 8
   */
  get strength() {
    if (this.strengthX !== this.strengthY) {
      throw new Error("BlurFilter's strengthX and strengthY are different");
    }
    return this.strengthX;
  }
  set strength(value) {
    this.blurXFilter.blur = this.blurYFilter.blur = value;
    this.updatePadding();
  }
  /**
   * Sets the number of passes for blur. More passes means higher quality bluring.
   * @default 1
   */
  get quality() {
    return this.blurXFilter.quality;
  }
  set quality(value) {
    this.blurXFilter.quality = this.blurYFilter.quality = value;
  }
  /**
   * Sets the strength of horizontal blur
   * @default 8
   */
  get strengthX() {
    return this.blurXFilter.blur;
  }
  set strengthX(value) {
    this.blurXFilter.blur = value;
    this.updatePadding();
  }
  /**
   * Sets the strength of the vertical blur
   * @default 8
   */
  get strengthY() {
    return this.blurYFilter.blur;
  }
  set strengthY(value) {
    this.blurYFilter.blur = value;
    this.updatePadding();
  }
  /**
   * Sets the strength of both the blurX and blurY properties simultaneously
   * @default 2
   * @deprecated since 8.3.0
   * @see BlurFilter.strength
   */
  get blur() {
    deprecation("8.3.0", "BlurFilter.blur is deprecated, please use BlurFilter.strength instead.");
    return this.strength;
  }
  set blur(value) {
    deprecation("8.3.0", "BlurFilter.blur is deprecated, please use BlurFilter.strength instead.");
    this.strength = value;
  }
  /**
   * Sets the strength of the blurX property
   * @default 2
   * @deprecated since 8.3.0
   * @see BlurFilter.strengthX
   */
  get blurX() {
    deprecation("8.3.0", "BlurFilter.blurX is deprecated, please use BlurFilter.strengthX instead.");
    return this.strengthX;
  }
  set blurX(value) {
    deprecation("8.3.0", "BlurFilter.blurX is deprecated, please use BlurFilter.strengthX instead.");
    this.strengthX = value;
  }
  /**
   * Sets the strength of the blurY property
   * @default 2
   * @deprecated since 8.3.0
   * @see BlurFilter.strengthY
   */
  get blurY() {
    deprecation("8.3.0", "BlurFilter.blurY is deprecated, please use BlurFilter.strengthY instead.");
    return this.strengthY;
  }
  set blurY(value) {
    deprecation("8.3.0", "BlurFilter.blurY is deprecated, please use BlurFilter.strengthY instead.");
    this.strengthY = value;
  }
  /**
   * If set to true the edge of the target will be clamped
   * @default false
   */
  get repeatEdgePixels() {
    return this._repeatEdgePixels;
  }
  set repeatEdgePixels(value) {
    this._repeatEdgePixels = value;
    this.updatePadding();
  }
};
BlurFilter.defaultOptions = {
  /** The strength of the blur filter. */
  strength: 8,
  /** The quality of the blur filter. */
  quality: 4,
  /** The kernelSize of the blur filter.Options: 5, 7, 9, 11, 13, 15. */
  kernelSize: 5
};

// node_modules/pixi.js/lib/filters/defaults/color-matrix/colorMatrixFilter.frag.mjs
var fragment2 = "\nin vec2 vTextureCoord;\nin vec4 vColor;\n\nout vec4 finalColor;\n\nuniform float uColorMatrix[20];\nuniform float uAlpha;\n\nuniform sampler2D uTexture;\n\nfloat rand(vec2 co)\n{\n    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);\n}\n\nvoid main()\n{\n    vec4 color = texture(uTexture, vTextureCoord);\n    float randomValue = rand(gl_FragCoord.xy * 0.2);\n    float diff = (randomValue - 0.5) *  0.5;\n\n    if (uAlpha == 0.0) {\n        finalColor = color;\n        return;\n    }\n\n    if (color.a > 0.0) {\n        color.rgb /= color.a;\n    }\n\n    vec4 result;\n\n    result.r = (uColorMatrix[0] * color.r);\n        result.r += (uColorMatrix[1] * color.g);\n        result.r += (uColorMatrix[2] * color.b);\n        result.r += (uColorMatrix[3] * color.a);\n        result.r += uColorMatrix[4];\n\n    result.g = (uColorMatrix[5] * color.r);\n        result.g += (uColorMatrix[6] * color.g);\n        result.g += (uColorMatrix[7] * color.b);\n        result.g += (uColorMatrix[8] * color.a);\n        result.g += uColorMatrix[9];\n\n    result.b = (uColorMatrix[10] * color.r);\n       result.b += (uColorMatrix[11] * color.g);\n       result.b += (uColorMatrix[12] * color.b);\n       result.b += (uColorMatrix[13] * color.a);\n       result.b += uColorMatrix[14];\n\n    result.a = (uColorMatrix[15] * color.r);\n       result.a += (uColorMatrix[16] * color.g);\n       result.a += (uColorMatrix[17] * color.b);\n       result.a += (uColorMatrix[18] * color.a);\n       result.a += uColorMatrix[19];\n\n    vec3 rgb = mix(color.rgb, result.rgb, uAlpha);\n\n    // Premultiply alpha again.\n    rgb *= result.a;\n\n    finalColor = vec4(rgb, result.a);\n}\n";

// node_modules/pixi.js/lib/filters/defaults/color-matrix/colorMatrixFilter.wgsl.mjs
var source3 = "struct GlobalFilterUniforms {\n  uInputSize:vec4<f32>,\n  uInputPixel:vec4<f32>,\n  uInputClamp:vec4<f32>,\n  uOutputFrame:vec4<f32>,\n  uGlobalFrame:vec4<f32>,\n  uOutputTexture:vec4<f32>,\n};\n\nstruct ColorMatrixUniforms {\n  uColorMatrix:array<vec4<f32>, 5>,\n  uAlpha:f32,\n};\n\n\n@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;\n@group(0) @binding(1) var uTexture: texture_2d<f32>;\n@group(0) @binding(2) var uSampler : sampler;\n@group(1) @binding(0) var<uniform> colorMatrixUniforms : ColorMatrixUniforms;\n\n\nstruct VSOutput {\n    @builtin(position) position: vec4<f32>,\n    @location(0) uv : vec2<f32>,\n  };\n  \nfn filterVertexPosition(aPosition:vec2<f32>) -> vec4<f32>\n{\n    var position = aPosition * gfu.uOutputFrame.zw + gfu.uOutputFrame.xy;\n\n    position.x = position.x * (2.0 / gfu.uOutputTexture.x) - 1.0;\n    position.y = position.y * (2.0*gfu.uOutputTexture.z / gfu.uOutputTexture.y) - gfu.uOutputTexture.z;\n\n    return vec4(position, 0.0, 1.0);\n}\n\nfn filterTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>\n{\n  return aPosition * (gfu.uOutputFrame.zw * gfu.uInputSize.zw);\n}\n\n@vertex\nfn mainVertex(\n  @location(0) aPosition : vec2<f32>, \n) -> VSOutput {\n  return VSOutput(\n   filterVertexPosition(aPosition),\n   filterTextureCoord(aPosition),\n  );\n}\n\n\n@fragment\nfn mainFragment(\n  @location(0) uv: vec2<f32>,\n) -> @location(0) vec4<f32> {\n\n\n  var c = textureSample(uTexture, uSampler, uv);\n  \n  if (colorMatrixUniforms.uAlpha == 0.0) {\n    return c;\n  }\n\n \n    // Un-premultiply alpha before applying the color matrix. See issue #3539.\n    if (c.a > 0.0) {\n      c.r /= c.a;\n      c.g /= c.a;\n      c.b /= c.a;\n    }\n\n    var cm = colorMatrixUniforms.uColorMatrix;\n\n\n    var result = vec4<f32>(0.);\n\n    result.r = (cm[0][0] * c.r);\n    result.r += (cm[0][1] * c.g);\n    result.r += (cm[0][2] * c.b);\n    result.r += (cm[0][3] * c.a);\n    result.r += cm[1][0];\n\n    result.g = (cm[1][1] * c.r);\n    result.g += (cm[1][2] * c.g);\n    result.g += (cm[1][3] * c.b);\n    result.g += (cm[2][0] * c.a);\n    result.g += cm[2][1];\n\n    result.b = (cm[2][2] * c.r);\n    result.b += (cm[2][3] * c.g);\n    result.b += (cm[3][0] * c.b);\n    result.b += (cm[3][1] * c.a);\n    result.b += cm[3][2];\n\n    result.a = (cm[3][3] * c.r);\n    result.a += (cm[4][0] * c.g);\n    result.a += (cm[4][1] * c.b);\n    result.a += (cm[4][2] * c.a);\n    result.a += cm[4][3];\n\n    var rgb = mix(c.rgb, result.rgb, colorMatrixUniforms.uAlpha);\n\n    rgb.r *= result.a;\n    rgb.g *= result.a;\n    rgb.b *= result.a;\n\n    return vec4(rgb, result.a);\n}";

// node_modules/pixi.js/lib/filters/defaults/color-matrix/ColorMatrixFilter.mjs
var ColorMatrixFilter = class extends Filter {
  constructor(options = {}) {
    const colorMatrixUniforms = new UniformGroup({
      uColorMatrix: {
        value: [
          1,
          0,
          0,
          0,
          0,
          0,
          1,
          0,
          0,
          0,
          0,
          0,
          1,
          0,
          0,
          0,
          0,
          0,
          1,
          0
        ],
        type: "f32",
        size: 20
      },
      uAlpha: {
        value: 1,
        type: "f32"
      }
    });
    const gpuProgram = GpuProgram.from({
      vertex: {
        source: source3,
        entryPoint: "mainVertex"
      },
      fragment: {
        source: source3,
        entryPoint: "mainFragment"
      }
    });
    const glProgram = GlProgram.from({
      vertex,
      fragment: fragment2,
      name: "color-matrix-filter"
    });
    super({
      ...options,
      gpuProgram,
      glProgram,
      resources: {
        colorMatrixUniforms
      }
    });
    this.alpha = 1;
  }
  /**
   * Transforms current matrix and set the new one
   * @param {number[]} matrix - 5x4 matrix
   * @param multiply - if true, current matrix and matrix are multiplied. If false,
   *  just set the current matrix with @param matrix
   */
  _loadMatrix(matrix, multiply = false) {
    let newMatrix = matrix;
    if (multiply) {
      this._multiply(newMatrix, this.matrix, matrix);
      newMatrix = this._colorMatrix(newMatrix);
    }
    this.resources.colorMatrixUniforms.uniforms.uColorMatrix = newMatrix;
    this.resources.colorMatrixUniforms.update();
  }
  /**
   * Multiplies two mat5's
   * @private
   * @param out - 5x4 matrix the receiving matrix
   * @param a - 5x4 matrix the first operand
   * @param b - 5x4 matrix the second operand
   * @returns {number[]} 5x4 matrix
   */
  _multiply(out, a, b) {
    out[0] = a[0] * b[0] + a[1] * b[5] + a[2] * b[10] + a[3] * b[15];
    out[1] = a[0] * b[1] + a[1] * b[6] + a[2] * b[11] + a[3] * b[16];
    out[2] = a[0] * b[2] + a[1] * b[7] + a[2] * b[12] + a[3] * b[17];
    out[3] = a[0] * b[3] + a[1] * b[8] + a[2] * b[13] + a[3] * b[18];
    out[4] = a[0] * b[4] + a[1] * b[9] + a[2] * b[14] + a[3] * b[19] + a[4];
    out[5] = a[5] * b[0] + a[6] * b[5] + a[7] * b[10] + a[8] * b[15];
    out[6] = a[5] * b[1] + a[6] * b[6] + a[7] * b[11] + a[8] * b[16];
    out[7] = a[5] * b[2] + a[6] * b[7] + a[7] * b[12] + a[8] * b[17];
    out[8] = a[5] * b[3] + a[6] * b[8] + a[7] * b[13] + a[8] * b[18];
    out[9] = a[5] * b[4] + a[6] * b[9] + a[7] * b[14] + a[8] * b[19] + a[9];
    out[10] = a[10] * b[0] + a[11] * b[5] + a[12] * b[10] + a[13] * b[15];
    out[11] = a[10] * b[1] + a[11] * b[6] + a[12] * b[11] + a[13] * b[16];
    out[12] = a[10] * b[2] + a[11] * b[7] + a[12] * b[12] + a[13] * b[17];
    out[13] = a[10] * b[3] + a[11] * b[8] + a[12] * b[13] + a[13] * b[18];
    out[14] = a[10] * b[4] + a[11] * b[9] + a[12] * b[14] + a[13] * b[19] + a[14];
    out[15] = a[15] * b[0] + a[16] * b[5] + a[17] * b[10] + a[18] * b[15];
    out[16] = a[15] * b[1] + a[16] * b[6] + a[17] * b[11] + a[18] * b[16];
    out[17] = a[15] * b[2] + a[16] * b[7] + a[17] * b[12] + a[18] * b[17];
    out[18] = a[15] * b[3] + a[16] * b[8] + a[17] * b[13] + a[18] * b[18];
    out[19] = a[15] * b[4] + a[16] * b[9] + a[17] * b[14] + a[18] * b[19] + a[19];
    return out;
  }
  /**
   * Create a Float32 Array and normalize the offset component to 0-1
   * @param {number[]} matrix - 5x4 matrix
   * @returns {number[]} 5x4 matrix with all values between 0-1
   */
  _colorMatrix(matrix) {
    const m = new Float32Array(matrix);
    m[4] /= 255;
    m[9] /= 255;
    m[14] /= 255;
    m[19] /= 255;
    return m;
  }
  /**
   * Adjusts brightness
   * @param b - value of the brightness (0-1, where 0 is black)
   * @param multiply - if true, current matrix and matrix are multiplied. If false,
   *  just set the current matrix with @param matrix
   */
  brightness(b, multiply) {
    const matrix = [
      b,
      0,
      0,
      0,
      0,
      0,
      b,
      0,
      0,
      0,
      0,
      0,
      b,
      0,
      0,
      0,
      0,
      0,
      1,
      0
    ];
    this._loadMatrix(matrix, multiply);
  }
  /**
   * Sets each channel on the diagonal of the color matrix.
   * This can be used to achieve a tinting effect on Containers similar to the tint field of some
   * display objects like Sprite, Text, Graphics, and Mesh.
   * @param color - Color of the tint. This is a hex value.
   * @param multiply - if true, current matrix and matrix are multiplied. If false,
   *  just set the current matrix with @param matrix
   */
  tint(color, multiply) {
    const [r, g, b] = Color.shared.setValue(color).toArray();
    const matrix = [
      r,
      0,
      0,
      0,
      0,
      0,
      g,
      0,
      0,
      0,
      0,
      0,
      b,
      0,
      0,
      0,
      0,
      0,
      1,
      0
    ];
    this._loadMatrix(matrix, multiply);
  }
  /**
   * Set the matrices in grey scales
   * @param scale - value of the grey (0-1, where 0 is black)
   * @param multiply - if true, current matrix and matrix are multiplied. If false,
   *  just set the current matrix with @param matrix
   */
  greyscale(scale, multiply) {
    const matrix = [
      scale,
      scale,
      scale,
      0,
      0,
      scale,
      scale,
      scale,
      0,
      0,
      scale,
      scale,
      scale,
      0,
      0,
      0,
      0,
      0,
      1,
      0
    ];
    this._loadMatrix(matrix, multiply);
  }
  /**
   * for our american friends!
   * @param scale
   * @param multiply
   */
  grayscale(scale, multiply) {
    this.greyscale(scale, multiply);
  }
  /**
   * Set the black and white matrice.
   * @param multiply - if true, current matrix and matrix are multiplied. If false,
   *  just set the current matrix with @param matrix
   */
  blackAndWhite(multiply) {
    const matrix = [
      0.3,
      0.6,
      0.1,
      0,
      0,
      0.3,
      0.6,
      0.1,
      0,
      0,
      0.3,
      0.6,
      0.1,
      0,
      0,
      0,
      0,
      0,
      1,
      0
    ];
    this._loadMatrix(matrix, multiply);
  }
  /**
   * Set the hue property of the color
   * @param rotation - in degrees
   * @param multiply - if true, current matrix and matrix are multiplied. If false,
   *  just set the current matrix with @param matrix
   */
  hue(rotation, multiply) {
    rotation = (rotation || 0) / 180 * Math.PI;
    const cosR = Math.cos(rotation);
    const sinR = Math.sin(rotation);
    const sqrt = Math.sqrt;
    const w = 1 / 3;
    const sqrW = sqrt(w);
    const a00 = cosR + (1 - cosR) * w;
    const a01 = w * (1 - cosR) - sqrW * sinR;
    const a02 = w * (1 - cosR) + sqrW * sinR;
    const a10 = w * (1 - cosR) + sqrW * sinR;
    const a11 = cosR + w * (1 - cosR);
    const a12 = w * (1 - cosR) - sqrW * sinR;
    const a20 = w * (1 - cosR) - sqrW * sinR;
    const a21 = w * (1 - cosR) + sqrW * sinR;
    const a22 = cosR + w * (1 - cosR);
    const matrix = [
      a00,
      a01,
      a02,
      0,
      0,
      a10,
      a11,
      a12,
      0,
      0,
      a20,
      a21,
      a22,
      0,
      0,
      0,
      0,
      0,
      1,
      0
    ];
    this._loadMatrix(matrix, multiply);
  }
  /**
   * Set the contrast matrix, increase the separation between dark and bright
   * Increase contrast : shadows darker and highlights brighter
   * Decrease contrast : bring the shadows up and the highlights down
   * @param amount - value of the contrast (0-1)
   * @param multiply - if true, current matrix and matrix are multiplied. If false,
   *  just set the current matrix with @param matrix
   */
  contrast(amount, multiply) {
    const v = (amount || 0) + 1;
    const o = -0.5 * (v - 1);
    const matrix = [
      v,
      0,
      0,
      0,
      o,
      0,
      v,
      0,
      0,
      o,
      0,
      0,
      v,
      0,
      o,
      0,
      0,
      0,
      1,
      0
    ];
    this._loadMatrix(matrix, multiply);
  }
  /**
   * Set the saturation matrix, increase the separation between colors
   * Increase saturation : increase contrast, brightness, and sharpness
   * @param amount - The saturation amount (0-1)
   * @param multiply - if true, current matrix and matrix are multiplied. If false,
   *  just set the current matrix with @param matrix
   */
  saturate(amount = 0, multiply) {
    const x = amount * 2 / 3 + 1;
    const y = (x - 1) * -0.5;
    const matrix = [
      x,
      y,
      y,
      0,
      0,
      y,
      x,
      y,
      0,
      0,
      y,
      y,
      x,
      0,
      0,
      0,
      0,
      0,
      1,
      0
    ];
    this._loadMatrix(matrix, multiply);
  }
  /** Desaturate image (remove color) Call the saturate function */
  desaturate() {
    this.saturate(-1);
  }
  /**
   * Negative image (inverse of classic rgb matrix)
   * @param multiply - if true, current matrix and matrix are multiplied. If false,
   *  just set the current matrix with @param matrix
   */
  negative(multiply) {
    const matrix = [
      -1,
      0,
      0,
      1,
      0,
      0,
      -1,
      0,
      1,
      0,
      0,
      0,
      -1,
      1,
      0,
      0,
      0,
      0,
      1,
      0
    ];
    this._loadMatrix(matrix, multiply);
  }
  /**
   * Sepia image
   * @param multiply - if true, current matrix and matrix are multiplied. If false,
   *  just set the current matrix with @param matrix
   */
  sepia(multiply) {
    const matrix = [
      0.393,
      0.7689999,
      0.18899999,
      0,
      0,
      0.349,
      0.6859999,
      0.16799999,
      0,
      0,
      0.272,
      0.5339999,
      0.13099999,
      0,
      0,
      0,
      0,
      0,
      1,
      0
    ];
    this._loadMatrix(matrix, multiply);
  }
  /**
   * Color motion picture process invented in 1916 (thanks Dominic Szablewski)
   * @param multiply - if true, current matrix and matrix are multiplied. If false,
   *  just set the current matrix with @param matrix
   */
  technicolor(multiply) {
    const matrix = [
      1.9125277891456083,
      -0.8545344976951645,
      -0.09155508482755585,
      0,
      11.793603434377337,
      -0.3087833385928097,
      1.7658908555458428,
      -0.10601743074722245,
      0,
      -70.35205161461398,
      -0.231103377548616,
      -0.7501899197440212,
      1.847597816108189,
      0,
      30.950940869491138,
      0,
      0,
      0,
      1,
      0
    ];
    this._loadMatrix(matrix, multiply);
  }
  /**
   * Polaroid filter
   * @param multiply - if true, current matrix and matrix are multiplied. If false,
   *  just set the current matrix with @param matrix
   */
  polaroid(multiply) {
    const matrix = [
      1.438,
      -0.062,
      -0.062,
      0,
      0,
      -0.122,
      1.378,
      -0.122,
      0,
      0,
      -0.016,
      -0.016,
      1.483,
      0,
      0,
      0,
      0,
      0,
      1,
      0
    ];
    this._loadMatrix(matrix, multiply);
  }
  /**
   * Filter who transforms : Red -> Blue and Blue -> Red
   * @param multiply - if true, current matrix and matrix are multiplied. If false,
   *  just set the current matrix with @param matrix
   */
  toBGR(multiply) {
    const matrix = [
      0,
      0,
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      0
    ];
    this._loadMatrix(matrix, multiply);
  }
  /**
   * Color reversal film introduced by Eastman Kodak in 1935. (thanks Dominic Szablewski)
   * @param multiply - if true, current matrix and matrix are multiplied. If false,
   *  just set the current matrix with @param matrix
   */
  kodachrome(multiply) {
    const matrix = [
      1.1285582396593525,
      -0.3967382283601348,
      -0.03992559172921793,
      0,
      63.72958762196502,
      -0.16404339962244616,
      1.0835251566291304,
      -0.05498805115633132,
      0,
      24.732407896706203,
      -0.16786010706155763,
      -0.5603416277695248,
      1.6014850761964943,
      0,
      35.62982807460946,
      0,
      0,
      0,
      1,
      0
    ];
    this._loadMatrix(matrix, multiply);
  }
  /**
   * Brown delicious browni filter (thanks Dominic Szablewski)
   * @param multiply - if true, current matrix and matrix are multiplied. If false,
   *  just set the current matrix with @param matrix
   */
  browni(multiply) {
    const matrix = [
      0.5997023498159715,
      0.34553243048391263,
      -0.2708298674538042,
      0,
      47.43192855600873,
      -0.037703249837783157,
      0.8609577587992641,
      0.15059552388459913,
      0,
      -36.96841498319127,
      0.24113635128153335,
      -0.07441037908422492,
      0.44972182064877153,
      0,
      -7.562075277591283,
      0,
      0,
      0,
      1,
      0
    ];
    this._loadMatrix(matrix, multiply);
  }
  /**
   * Vintage filter (thanks Dominic Szablewski)
   * @param multiply - if true, current matrix and matrix are multiplied. If false,
   *  just set the current matrix with @param matrix
   */
  vintage(multiply) {
    const matrix = [
      0.6279345635605994,
      0.3202183420819367,
      -0.03965408211312453,
      0,
      9.651285835294123,
      0.02578397704808868,
      0.6441188644374771,
      0.03259127616149294,
      0,
      7.462829176470591,
      0.0466055556782719,
      -0.0851232987247891,
      0.5241648018700465,
      0,
      5.159190588235296,
      0,
      0,
      0,
      1,
      0
    ];
    this._loadMatrix(matrix, multiply);
  }
  /**
   * We don't know exactly what it does, kind of gradient map, but funny to play with!
   * @param desaturation - Tone values.
   * @param toned - Tone values.
   * @param lightColor - Tone values, example: `0xFFE580`
   * @param darkColor - Tone values, example: `0xFFE580`
   * @param multiply - if true, current matrix and matrix are multiplied. If false,
   *  just set the current matrix with @param matrix
   */
  colorTone(desaturation, toned, lightColor, darkColor, multiply) {
    desaturation = desaturation || 0.2;
    toned = toned || 0.15;
    lightColor = lightColor || 16770432;
    darkColor = darkColor || 3375104;
    const temp = Color.shared;
    const [lR, lG, lB] = temp.setValue(lightColor).toArray();
    const [dR, dG, dB] = temp.setValue(darkColor).toArray();
    const matrix = [
      0.3,
      0.59,
      0.11,
      0,
      0,
      lR,
      lG,
      lB,
      desaturation,
      0,
      dR,
      dG,
      dB,
      toned,
      0,
      lR - dR,
      lG - dG,
      lB - dB,
      0,
      0
    ];
    this._loadMatrix(matrix, multiply);
  }
  /**
   * Night effect
   * @param intensity - The intensity of the night effect.
   * @param multiply - if true, current matrix and matrix are multiplied. If false,
   *  just set the current matrix with @param matrix
   */
  night(intensity, multiply) {
    intensity = intensity || 0.1;
    const matrix = [
      intensity * -2,
      -intensity,
      0,
      0,
      0,
      -intensity,
      0,
      intensity,
      0,
      0,
      0,
      intensity,
      intensity * 2,
      0,
      0,
      0,
      0,
      0,
      1,
      0
    ];
    this._loadMatrix(matrix, multiply);
  }
  /**
   * Predator effect
   *
   * Erase the current matrix by setting a new independent one
   * @param amount - how much the predator feels his future victim
   * @param multiply - if true, current matrix and matrix are multiplied. If false,
   *  just set the current matrix with @param matrix
   */
  predator(amount, multiply) {
    const matrix = [
      // row 1
      11.224130630493164 * amount,
      -4.794486999511719 * amount,
      -2.8746118545532227 * amount,
      0 * amount,
      0.40342438220977783 * amount,
      // row 2
      -3.6330697536468506 * amount,
      9.193157196044922 * amount,
      -2.951810836791992 * amount,
      0 * amount,
      -1.316135048866272 * amount,
      // row 3
      -3.2184197902679443 * amount,
      -4.2375030517578125 * amount,
      7.476448059082031 * amount,
      0 * amount,
      0.8044459223747253 * amount,
      // row 4
      0,
      0,
      0,
      1,
      0
    ];
    this._loadMatrix(matrix, multiply);
  }
  /**
   * LSD effect
   *
   * Multiply the current matrix
   * @param multiply - if true, current matrix and matrix are multiplied. If false,
   *  just set the current matrix with @param matrix
   */
  lsd(multiply) {
    const matrix = [
      2,
      -0.4,
      0.5,
      0,
      0,
      -0.5,
      2,
      -0.4,
      0,
      0,
      -0.4,
      -0.5,
      3,
      0,
      0,
      0,
      0,
      0,
      1,
      0
    ];
    this._loadMatrix(matrix, multiply);
  }
  /** Erase the current matrix by setting the default one. */
  reset() {
    const matrix = [
      1,
      0,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      0,
      1,
      0
    ];
    this._loadMatrix(matrix, false);
  }
  /**
   * The matrix of the color matrix filter
   * @member {number[]}
   * @default [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0]
   */
  get matrix() {
    return this.resources.colorMatrixUniforms.uniforms.uColorMatrix;
  }
  set matrix(value) {
    this.resources.colorMatrixUniforms.uniforms.uColorMatrix = value;
  }
  /**
   * The opacity value to use when mixing the original and resultant colors.
   *
   * When the value is 0, the original color is used without modification.
   * When the value is 1, the result color is used.
   * When in the range (0, 1) the color is interpolated between the original and result by this amount.
   * @default 1
   */
  get alpha() {
    return this.resources.colorMatrixUniforms.uniforms.uAlpha;
  }
  set alpha(value) {
    this.resources.colorMatrixUniforms.uniforms.uAlpha = value;
  }
};

// node_modules/pixi.js/lib/filters/defaults/displacement/displacement.frag.mjs
var fragment3 = "\nin vec2 vTextureCoord;\nin vec2 vFilterUv;\n\nout vec4 finalColor;\n\nuniform sampler2D uTexture;\nuniform sampler2D uMapTexture;\n\nuniform vec4 uInputClamp;\nuniform highp vec4 uInputSize;\nuniform mat2 uRotation;\nuniform vec2 uScale;\n\nvoid main()\n{\n    vec4 map = texture(uMapTexture, vFilterUv);\n    \n    vec2 offset = uInputSize.zw * (uRotation * (map.xy - 0.5)) * uScale; \n\n    finalColor = texture(uTexture, clamp(vTextureCoord + offset, uInputClamp.xy, uInputClamp.zw));\n}\n";

// node_modules/pixi.js/lib/filters/defaults/displacement/displacement.vert.mjs
var vertex2 = "in vec2 aPosition;\nout vec2 vTextureCoord;\nout vec2 vFilterUv;\n\n\nuniform vec4 uInputSize;\nuniform vec4 uOutputFrame;\nuniform vec4 uOutputTexture;\n\nuniform mat3 uFilterMatrix;\n\nvec4 filterVertexPosition( void )\n{\n    vec2 position = aPosition * uOutputFrame.zw + uOutputFrame.xy;\n    \n    position.x = position.x * (2.0 / uOutputTexture.x) - 1.0;\n    position.y = position.y * (2.0*uOutputTexture.z / uOutputTexture.y) - uOutputTexture.z;\n\n    return vec4(position, 0.0, 1.0);\n}\n\nvec2 filterTextureCoord( void )\n{\n    return aPosition * (uOutputFrame.zw * uInputSize.zw);\n}\n\nvec2 getFilterCoord( void )\n{\n  return ( uFilterMatrix * vec3( filterTextureCoord(), 1.0)  ).xy;\n}\n\n\nvoid main(void)\n{\n    gl_Position = filterVertexPosition();\n    vTextureCoord = filterTextureCoord();\n    vFilterUv = getFilterCoord();\n}\n";

// node_modules/pixi.js/lib/filters/defaults/displacement/displacement.wgsl.mjs
var source4 = "\nstruct GlobalFilterUniforms {\n  uInputSize:vec4<f32>,\n  uInputPixel:vec4<f32>,\n  uInputClamp:vec4<f32>,\n  uOutputFrame:vec4<f32>,\n  uGlobalFrame:vec4<f32>,\n  uOutputTexture:vec4<f32>,\n};\n\nstruct DisplacementUniforms {\n  uFilterMatrix:mat3x3<f32>,\n  uScale:vec2<f32>,\n  uRotation:mat2x2<f32>\n};\n\n\n\n@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;\n@group(0) @binding(1) var uTexture: texture_2d<f32>;\n@group(0) @binding(2) var uSampler : sampler;\n\n@group(1) @binding(0) var<uniform> filterUniforms : DisplacementUniforms;\n@group(1) @binding(1) var uMapTexture: texture_2d<f32>;\n@group(1) @binding(2) var uMapSampler : sampler;\n\nstruct VSOutput {\n    @builtin(position) position: vec4<f32>,\n    @location(0) uv : vec2<f32>,\n    @location(1) filterUv : vec2<f32>,\n  };\n\nfn filterVertexPosition(aPosition:vec2<f32>) -> vec4<f32>\n{\n    var position = aPosition * gfu.uOutputFrame.zw + gfu.uOutputFrame.xy;\n\n    position.x = position.x * (2.0 / gfu.uOutputTexture.x) - 1.0;\n    position.y = position.y * (2.0*gfu.uOutputTexture.z / gfu.uOutputTexture.y) - gfu.uOutputTexture.z;\n\n    return vec4(position, 0.0, 1.0);\n}\n\nfn filterTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>\n{\n    return aPosition * (gfu.uOutputFrame.zw * gfu.uInputSize.zw);\n}\n\nfn globalTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>\n{\n  return  (aPosition.xy / gfu.uGlobalFrame.zw) + (gfu.uGlobalFrame.xy / gfu.uGlobalFrame.zw);  \n}\n\nfn getFilterCoord(aPosition:vec2<f32> ) -> vec2<f32>\n{\n  return ( filterUniforms.uFilterMatrix * vec3( filterTextureCoord(aPosition), 1.0)  ).xy;\n}\n\nfn getSize() -> vec2<f32>\n{\n\n  \n  return gfu.uGlobalFrame.zw;\n}\n  \n@vertex\nfn mainVertex(\n  @location(0) aPosition : vec2<f32>, \n) -> VSOutput {\n  return VSOutput(\n   filterVertexPosition(aPosition),\n   filterTextureCoord(aPosition),\n   getFilterCoord(aPosition)\n  );\n}\n\n@fragment\nfn mainFragment(\n  @location(0) uv: vec2<f32>,\n  @location(1) filterUv: vec2<f32>,\n  @builtin(position) position: vec4<f32>\n) -> @location(0) vec4<f32> {\n\n    var map = textureSample(uMapTexture, uMapSampler, filterUv);\n\n    var offset =  gfu.uInputSize.zw * (filterUniforms.uRotation * (map.xy - 0.5)) * filterUniforms.uScale; \n   \n    return textureSample(uTexture, uSampler, clamp(uv + offset, gfu.uInputClamp.xy, gfu.uInputClamp.zw));\n}";

// node_modules/pixi.js/lib/filters/defaults/displacement/DisplacementFilter.mjs
var DisplacementFilter = class extends Filter {
  constructor(...args) {
    let options = args[0];
    if (options instanceof Sprite) {
      if (args[1]) {
        deprecation(v8_0_0, "DisplacementFilter now uses options object instead of params. {sprite, scale}");
      }
      options = { sprite: options, scale: args[1] };
    }
    const { sprite, scale: scaleOption, ...rest } = options;
    let scale = scaleOption ?? 20;
    if (typeof scale === "number") {
      scale = new Point(scale, scale);
    }
    const filterUniforms = new UniformGroup({
      uFilterMatrix: { value: new Matrix(), type: "mat3x3<f32>" },
      uScale: { value: scale, type: "vec2<f32>" },
      uRotation: { value: new Float32Array([0, 0, 0, 0]), type: "mat2x2<f32>" }
    });
    const glProgram = GlProgram.from({
      vertex: vertex2,
      fragment: fragment3,
      name: "displacement-filter"
    });
    const gpuProgram = GpuProgram.from({
      vertex: {
        source: source4,
        entryPoint: "mainVertex"
      },
      fragment: {
        source: source4,
        entryPoint: "mainFragment"
      }
    });
    const textureSource = sprite.texture.source;
    super({
      ...rest,
      gpuProgram,
      glProgram,
      resources: {
        filterUniforms,
        uMapTexture: textureSource,
        uMapSampler: textureSource.style
      }
    });
    this._sprite = options.sprite;
    this._sprite.renderable = false;
  }
  /**
   * Applies the filter.
   * @param filterManager - The manager.
   * @param input - The input target.
   * @param output - The output target.
   * @param clearMode - clearMode.
   */
  apply(filterManager, input, output, clearMode) {
    const uniforms = this.resources.filterUniforms.uniforms;
    filterManager.calculateSpriteMatrix(
      uniforms.uFilterMatrix,
      this._sprite
    );
    const wt = this._sprite.worldTransform;
    const lenX = Math.sqrt(wt.a * wt.a + wt.b * wt.b);
    const lenY = Math.sqrt(wt.c * wt.c + wt.d * wt.d);
    if (lenX !== 0 && lenY !== 0) {
      uniforms.uRotation[0] = wt.a / lenX;
      uniforms.uRotation[1] = wt.b / lenX;
      uniforms.uRotation[2] = wt.c / lenY;
      uniforms.uRotation[3] = wt.d / lenY;
    }
    this.resources.uMapTexture = this._sprite.texture.source;
    filterManager.applyFilter(this, input, output, clearMode);
  }
  /** scaleX, scaleY for displacements */
  get scale() {
    return this.resources.filterUniforms.uniforms.uScale;
  }
};

// node_modules/pixi.js/lib/filters/defaults/noise/noise.frag.mjs
var fragment4 = "\nin vec2 vTextureCoord;\nin vec4 vColor;\n\nout vec4 finalColor;\n\nuniform float uNoise;\nuniform float uSeed;\nuniform sampler2D uTexture;\n\nfloat rand(vec2 co)\n{\n    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);\n}\n\nvoid main()\n{\n    vec4 color = texture(uTexture, vTextureCoord);\n    float randomValue = rand(gl_FragCoord.xy * uSeed);\n    float diff = (randomValue - 0.5) *  uNoise;\n\n    // Un-premultiply alpha before applying the color matrix. See issue #3539.\n    if (color.a > 0.0) {\n        color.rgb /= color.a;\n    }\n\n    color.r += diff;\n    color.g += diff;\n    color.b += diff;\n\n    // Premultiply alpha again.\n    color.rgb *= color.a;\n\n    finalColor = color;\n}\n";

// node_modules/pixi.js/lib/filters/defaults/noise/noise.wgsl.mjs
var source5 = "\n\nstruct GlobalFilterUniforms {\n  uInputSize:vec4<f32>,\n  uInputPixel:vec4<f32>,\n  uInputClamp:vec4<f32>,\n  uOutputFrame:vec4<f32>,\n  uGlobalFrame:vec4<f32>,\n  uOutputTexture:vec4<f32>,\n};\n\nstruct NoiseUniforms {\n  uNoise:f32,\n  uSeed:f32,\n};\n\n@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;\n@group(0) @binding(1) var uTexture: texture_2d<f32>;\n@group(0) @binding(2) var uSampler : sampler;\n\n@group(1) @binding(0) var<uniform> noiseUniforms : NoiseUniforms;\n\nstruct VSOutput {\n    @builtin(position) position: vec4<f32>,\n    @location(0) uv : vec2<f32>\n  };\n\nfn filterVertexPosition(aPosition:vec2<f32>) -> vec4<f32>\n{\n    var position = aPosition * gfu.uOutputFrame.zw + gfu.uOutputFrame.xy;\n\n    position.x = position.x * (2.0 / gfu.uOutputTexture.x) - 1.0;\n    position.y = position.y * (2.0*gfu.uOutputTexture.z / gfu.uOutputTexture.y) - gfu.uOutputTexture.z;\n\n    return vec4(position, 0.0, 1.0);\n}\n\nfn filterTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>\n{\n    return aPosition * (gfu.uOutputFrame.zw * gfu.uInputSize.zw);\n}\n\nfn globalTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>\n{\n  return  (aPosition.xy / gfu.uGlobalFrame.zw) + (gfu.uGlobalFrame.xy / gfu.uGlobalFrame.zw);  \n}\n\nfn getSize() -> vec2<f32>\n{\n  return gfu.uGlobalFrame.zw;\n}\n  \n@vertex\nfn mainVertex(\n  @location(0) aPosition : vec2<f32>, \n) -> VSOutput {\n  return VSOutput(\n   filterVertexPosition(aPosition),\n   filterTextureCoord(aPosition)\n  );\n}\n\nfn rand(co:vec2<f32>) -> f32\n{\n  return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);\n}\n\n\n\n@fragment\nfn mainFragment(\n  @location(0) uv: vec2<f32>,\n  @builtin(position) position: vec4<f32>\n) -> @location(0) vec4<f32> {\n\n    var pixelPosition =  globalTextureCoord(position.xy);// / (getSize());//-  gfu.uOutputFrame.xy);\n  \n    \n    var sample = textureSample(uTexture, uSampler, uv);\n    var randomValue =  rand(pixelPosition.xy * noiseUniforms.uSeed);\n    var diff = (randomValue - 0.5) * noiseUniforms.uNoise;\n  \n    // Un-premultiply alpha before applying the color matrix. See issue #3539.\n    if (sample.a > 0.0) {\n      sample.r /= sample.a;\n      sample.g /= sample.a;\n      sample.b /= sample.a;\n    }\n\n    sample.r += diff;\n    sample.g += diff;\n    sample.b += diff;\n\n    // Premultiply alpha again.\n    sample.r *= sample.a;\n    sample.g *= sample.a;\n    sample.b *= sample.a;\n    \n    return sample;\n}";

// node_modules/pixi.js/lib/filters/defaults/noise/NoiseFilter.mjs
var _NoiseFilter = class _NoiseFilter2 extends Filter {
  /**
   * @param options - The options of the noise filter.
   */
  constructor(options = {}) {
    options = { ..._NoiseFilter2.defaultOptions, ...options };
    const gpuProgram = GpuProgram.from({
      vertex: {
        source: source5,
        entryPoint: "mainVertex"
      },
      fragment: {
        source: source5,
        entryPoint: "mainFragment"
      }
    });
    const glProgram = GlProgram.from({
      vertex,
      fragment: fragment4,
      name: "noise-filter"
    });
    const { noise, seed, ...rest } = options;
    super({
      ...rest,
      gpuProgram,
      glProgram,
      resources: {
        noiseUniforms: new UniformGroup({
          uNoise: { value: 1, type: "f32" },
          uSeed: { value: 1, type: "f32" }
        })
      }
    });
    this.noise = noise;
    this.seed = seed ?? Math.random();
  }
  /**
   * The amount of noise to apply, this value should be in the range (0, 1].
   * @default 0.5
   */
  get noise() {
    return this.resources.noiseUniforms.uniforms.uNoise;
  }
  set noise(value) {
    this.resources.noiseUniforms.uniforms.uNoise = value;
  }
  /** A seed value to apply to the random noise generation. `Math.random()` is a good value to use. */
  get seed() {
    return this.resources.noiseUniforms.uniforms.uSeed;
  }
  set seed(value) {
    this.resources.noiseUniforms.uniforms.uSeed = value;
  }
};
_NoiseFilter.defaultOptions = {
  noise: 0.5
};
var NoiseFilter = _NoiseFilter;

// node_modules/pixi.js/lib/filters/blend-modes/hsl.wgsl.mjs
var hsl = "fn getLuminosity(c: vec3<f32>) -> f32 {\n  return 0.3 * c.r + 0.59 * c.g + 0.11 * c.b;\n}\n\nfn setLuminosity(c: vec3<f32>, lum: f32) -> vec3<f32> {\n  let d: f32 = lum - getLuminosity(c);\n  let newColor: vec3<f32> = c.rgb + vec3<f32>(d, d, d);\n\n  // clip back into legal range\n  let newLum: f32 = getLuminosity(newColor);\n  let cMin: f32 = min(newColor.r, min(newColor.g, newColor.b));\n  let cMax: f32 = max(newColor.r, max(newColor.g, newColor.b));\n\n  let t1: f32 = newLum / (newLum - cMin);\n  let t2: f32 = (1.0 - newLum) / (cMax - newLum);\n\n  let finalColor = mix(vec3<f32>(newLum, newLum, newLum), newColor, select(select(1.0, t2, cMax > 1.0), t1, cMin < 0.0));\n\n  return finalColor;\n}\n\nfn getSaturation(c: vec3<f32>) -> f32 {\n  return max(c.r, max(c.g, c.b)) - min(c.r, min(c.g, c.b));\n}\n\n// Set saturation if color components are sorted in ascending order.\nfn setSaturationMinMidMax(cSorted: vec3<f32>, s: f32) -> vec3<f32> {\n  var result: vec3<f32>;\n  if (cSorted.z > cSorted.x) {\n    let newY = (((cSorted.y - cSorted.x) * s) / (cSorted.z - cSorted.x));\n    result = vec3<f32>(0.0, newY, s);\n  } else {\n    result = vec3<f32>(0.0, 0.0, 0.0);\n  }\n  return vec3<f32>(result.x, result.y, result.z);\n}\n\nfn setSaturation(c: vec3<f32>, s: f32) -> vec3<f32> {\n    var result: vec3<f32> = c;\n\n    if (c.r <= c.g && c.r <= c.b) {\n        if (c.g <= c.b) {\n            result = setSaturationMinMidMax(result, s);\n        } else {\n            var temp: vec3<f32> = vec3<f32>(result.r, result.b, result.g);\n            temp = setSaturationMinMidMax(temp, s);\n            result = vec3<f32>(temp.r, temp.b, temp.g);\n        }\n    } else if (c.g <= c.r && c.g <= c.b) {\n        if (c.r <= c.b) {\n            var temp: vec3<f32> = vec3<f32>(result.g, result.r, result.b);\n            temp = setSaturationMinMidMax(temp, s);\n            result = vec3<f32>(temp.g, temp.r, temp.b);\n        } else {\n            var temp: vec3<f32> = vec3<f32>(result.g, result.b, result.r);\n            temp = setSaturationMinMidMax(temp, s);\n            result = vec3<f32>(temp.g, temp.b, temp.r);\n        }\n    } else {\n        if (c.r <= c.g) {\n            var temp: vec3<f32> = vec3<f32>(result.b, result.r, result.g);\n            temp = setSaturationMinMidMax(temp, s);\n            result = vec3<f32>(temp.b, temp.r, temp.g);\n        } else {\n            var temp: vec3<f32> = vec3<f32>(result.b, result.g, result.r);\n            temp = setSaturationMinMidMax(temp, s);\n            result = vec3<f32>(temp.b, temp.g, temp.r);\n        }\n    }\n\n    return result;\n}";

// node_modules/pixi.js/lib/maths/point/pointInTriangle.mjs
function pointInTriangle(px, py, x1, y1, x2, y2, x3, y3) {
  const v2x = x3 - x1;
  const v2y = y3 - y1;
  const v1x = x2 - x1;
  const v1y = y2 - y1;
  const v0x = px - x1;
  const v0y = py - y1;
  const dot00 = v2x * v2x + v2y * v2y;
  const dot01 = v2x * v1x + v2y * v1y;
  const dot02 = v2x * v0x + v2y * v0y;
  const dot11 = v1x * v1x + v1y * v1y;
  const dot12 = v1x * v0x + v1y * v0y;
  const invDenom = 1 / (dot00 * dot11 - dot01 * dot01);
  const u = (dot11 * dot02 - dot01 * dot12) * invDenom;
  const v = (dot00 * dot12 - dot01 * dot02) * invDenom;
  return u >= 0 && v >= 0 && u + v < 1;
}

// node_modules/pixi.js/lib/maths/shapes/Triangle.mjs
var Triangle = class _Triangle {
  /**
   * @param x - The X coord of the first point.
   * @param y - The Y coord of the first point.
   * @param x2 - The X coord of the second point.
   * @param y2 - The Y coord of the second point.
   * @param x3 - The X coord of the third point.
   * @param y3 - The Y coord of the third point.
   */
  constructor(x = 0, y = 0, x2 = 0, y2 = 0, x3 = 0, y3 = 0) {
    this.type = "triangle";
    this.x = x;
    this.y = y;
    this.x2 = x2;
    this.y2 = y2;
    this.x3 = x3;
    this.y3 = y3;
  }
  /**
   * Checks whether the x and y coordinates given are contained within this triangle
   * @param x - The X coordinate of the point to test
   * @param y - The Y coordinate of the point to test
   * @returns Whether the x/y coordinates are within this Triangle
   */
  contains(x, y) {
    const s = (this.x - this.x3) * (y - this.y3) - (this.y - this.y3) * (x - this.x3);
    const t = (this.x2 - this.x) * (y - this.y) - (this.y2 - this.y) * (x - this.x);
    if (s < 0 !== t < 0 && s !== 0 && t !== 0) {
      return false;
    }
    const d = (this.x3 - this.x2) * (y - this.y2) - (this.y3 - this.y2) * (x - this.x2);
    return d === 0 || d < 0 === s + t <= 0;
  }
  /**
   * Checks whether the x and y coordinates given are contained within this triangle including the stroke.
   * @param pointX - The X coordinate of the point to test
   * @param pointY - The Y coordinate of the point to test
   * @param strokeWidth - The width of the line to check
   * @returns Whether the x/y coordinates are within this triangle
   */
  strokeContains(pointX, pointY, strokeWidth) {
    const halfStrokeWidth = strokeWidth / 2;
    const halfStrokeWidthSquared = halfStrokeWidth * halfStrokeWidth;
    const { x, x2, x3, y, y2, y3 } = this;
    if (squaredDistanceToLineSegment(pointX, pointY, x, y, x2, y3) <= halfStrokeWidthSquared || squaredDistanceToLineSegment(pointX, pointY, x2, y2, x3, y3) <= halfStrokeWidthSquared || squaredDistanceToLineSegment(pointX, pointY, x3, y3, x, y) <= halfStrokeWidthSquared) {
      return true;
    }
    return false;
  }
  /**
   * Creates a clone of this Triangle
   * @returns a copy of the triangle
   */
  clone() {
    const triangle = new _Triangle(
      this.x,
      this.y,
      this.x2,
      this.y2,
      this.x3,
      this.y3
    );
    return triangle;
  }
  /**
   * Copies another triangle to this one.
   * @param triangle - The triangle to copy from.
   * @returns Returns itself.
   */
  copyFrom(triangle) {
    this.x = triangle.x;
    this.y = triangle.y;
    this.x2 = triangle.x2;
    this.y2 = triangle.y2;
    this.x3 = triangle.x3;
    this.y3 = triangle.y3;
    return this;
  }
  /**
   * Copies this triangle to another one.
   * @param triangle - The triangle to copy to.
   * @returns Returns given parameter.
   */
  copyTo(triangle) {
    triangle.copyFrom(this);
    return triangle;
  }
  /**
   * Returns the framing rectangle of the triangle as a Rectangle object
   * @param out - optional rectangle to store the result
   * @returns The framing rectangle
   */
  getBounds(out) {
    out = out || new Rectangle();
    const minX = Math.min(this.x, this.x2, this.x3);
    const maxX = Math.max(this.x, this.x2, this.x3);
    const minY = Math.min(this.y, this.y2, this.y3);
    const maxY = Math.max(this.y, this.y2, this.y3);
    out.x = minX;
    out.y = minY;
    out.width = maxX - minX;
    out.height = maxY - minY;
    return out;
  }
};

// node_modules/pixi.js/lib/prepare/PrepareBase.mjs
var _PrepareBase = class _PrepareBase2 {
  /**
   * @param {rendering.Renderer} renderer - A reference to the current renderer
   */
  constructor(renderer) {
    this._tick = () => {
      this.timeout = setTimeout(this._processQueue, 0);
    };
    this._processQueue = () => {
      const { queue } = this;
      let itemsProcessed = 0;
      while (queue.length && itemsProcessed < _PrepareBase2.uploadsPerFrame) {
        const queueItem = queue.shift();
        this.uploadQueueItem(queueItem);
        itemsProcessed++;
      }
      if (queue.length) {
        Ticker.system.addOnce(this._tick, this, UPDATE_PRIORITY.UTILITY);
      } else {
        this._resolve();
      }
    };
    this.renderer = renderer;
    this.queue = [];
    this.resolves = [];
  }
  /**
   * Return a copy of the queue
   * @returns {PrepareQueueItem[]} The queue
   */
  getQueue() {
    return [...this.queue];
  }
  /**
   * Add a textures or graphics resource to the queue
   * @param {PrepareSourceItem | PrepareSourceItem[]} resource
   */
  add(resource) {
    const resourceArray = Array.isArray(resource) ? resource : [resource];
    for (const resourceItem of resourceArray) {
      if (resourceItem instanceof Container) {
        this._addContainer(resourceItem);
      } else {
        this.resolveQueueItem(resourceItem, this.queue);
      }
    }
    return this;
  }
  /**
   * Recursively add a container and its children to the queue
   * @param {Container} container - The container to add to the queue
   */
  _addContainer(container) {
    this.resolveQueueItem(container, this.queue);
    for (const child of container.children) {
      this._addContainer(child);
    }
  }
  /**
   * Upload all the textures and graphics to the GPU (optionally add more resources to the queue first)
   * @param {PrepareSourceItem | PrepareSourceItem[] | undefined} resource
   */
  upload(resource) {
    if (resource) {
      this.add(resource);
    }
    return new Promise((resolve) => {
      if (this.queue.length) {
        this.resolves.push(resolve);
        this.dedupeQueue();
        Ticker.system.addOnce(this._tick, this, UPDATE_PRIORITY.UTILITY);
      } else {
        resolve();
      }
    });
  }
  /** eliminate duplicates before processing */
  dedupeQueue() {
    const hash = /* @__PURE__ */ Object.create(null);
    let nextUnique = 0;
    for (let i = 0; i < this.queue.length; i++) {
      const current = this.queue[i];
      if (!hash[current.uid]) {
        hash[current.uid] = true;
        this.queue[nextUnique++] = current;
      }
    }
    this.queue.length = nextUnique;
  }
  /** Call all the resolve callbacks */
  _resolve() {
    const { resolves } = this;
    const array = resolves.slice(0);
    resolves.length = 0;
    for (const resolve of array) {
      resolve();
    }
  }
};
_PrepareBase.uploadsPerFrame = 4;
var PrepareBase = _PrepareBase;

// node_modules/pixi.js/lib/scene/mesh/shared/Mesh.mjs
var Mesh = class extends ViewContainer {
  constructor(...args) {
    let options = args[0];
    if (options instanceof Geometry) {
      deprecation(v8_0_0, "Mesh: use new Mesh({ geometry, shader }) instead");
      options = {
        geometry: options,
        shader: args[1]
      };
      if (args[3]) {
        deprecation(v8_0_0, "Mesh: drawMode argument has been removed, use geometry.topology instead");
        options.geometry.topology = args[3];
      }
    }
    const { geometry, shader, texture, roundPixels, state, ...rest } = options;
    super({
      label: "Mesh",
      ...rest
    });
    this.renderPipeId = "mesh";
    this._shader = null;
    this.allowChildren = false;
    this.shader = shader ?? null;
    this.texture = texture ?? (shader == null ? void 0 : shader.texture) ?? Texture.WHITE;
    this.state = state ?? State.for2d();
    this._geometry = geometry;
    this._geometry.on("update", this.onViewUpdate, this);
    this.roundPixels = roundPixels ?? false;
  }
  /** Alias for {@link scene.Mesh#shader}. */
  get material() {
    deprecation(v8_0_0, "mesh.material property has been removed, use mesh.shader instead");
    return this._shader;
  }
  /**
   * Represents the vertex and fragment shaders that processes the geometry and runs on the GPU.
   * Can be shared between multiple Mesh objects.
   */
  set shader(value) {
    if (this._shader === value)
      return;
    this._shader = value;
    this.onViewUpdate();
  }
  get shader() {
    return this._shader;
  }
  /**
   * Includes vertex positions, face indices, colors, UVs, and
   * custom attributes within buffers, reducing the cost of passing all
   * this data to the GPU. Can be shared between multiple Mesh objects.
   */
  set geometry(value) {
    var _a;
    if (this._geometry === value)
      return;
    (_a = this._geometry) == null ? void 0 : _a.off("update", this.onViewUpdate, this);
    value.on("update", this.onViewUpdate, this);
    this._geometry = value;
    this.onViewUpdate();
  }
  get geometry() {
    return this._geometry;
  }
  /** The texture that the Mesh uses. Null for non-MeshMaterial shaders */
  set texture(value) {
    value || (value = Texture.EMPTY);
    const currentTexture = this._texture;
    if (currentTexture === value)
      return;
    if (currentTexture && currentTexture.dynamic)
      currentTexture.off("update", this.onViewUpdate, this);
    if (value.dynamic)
      value.on("update", this.onViewUpdate, this);
    if (this.shader) {
      this.shader.texture = value;
    }
    this._texture = value;
    this.onViewUpdate();
  }
  get texture() {
    return this._texture;
  }
  get batched() {
    if (this._shader)
      return false;
    if ((this.state.data & 12) !== 0)
      return false;
    if (this._geometry instanceof MeshGeometry) {
      if (this._geometry.batchMode === "auto") {
        return this._geometry.positions.length / 2 <= 100;
      }
      return this._geometry.batchMode === "batch";
    }
    return false;
  }
  /**
   * The local bounds of the mesh.
   * @type {rendering.Bounds}
   */
  get bounds() {
    return this._geometry.bounds;
  }
  /**
   * Adds the bounds of this object to the bounds object.
   * @param bounds - The output bounds object.
   */
  addBounds(bounds) {
    bounds.addBounds(this.geometry.bounds);
  }
  /**
   * Checks if the object contains the given point.
   * @param point - The point to check
   */
  containsPoint(point) {
    const { x, y } = point;
    if (!this.bounds.containsPoint(x, y))
      return false;
    const vertices = this.geometry.getBuffer("aPosition").data;
    const step = this.geometry.topology === "triangle-strip" ? 3 : 1;
    if (this.geometry.getIndex()) {
      const indices = this.geometry.getIndex().data;
      const len = indices.length;
      for (let i = 0; i + 2 < len; i += step) {
        const ind0 = indices[i] * 2;
        const ind1 = indices[i + 1] * 2;
        const ind2 = indices[i + 2] * 2;
        if (pointInTriangle(
          x,
          y,
          vertices[ind0],
          vertices[ind0 + 1],
          vertices[ind1],
          vertices[ind1 + 1],
          vertices[ind2],
          vertices[ind2 + 1]
        )) {
          return true;
        }
      }
    } else {
      const len = vertices.length / 2;
      for (let i = 0; i + 2 < len; i += step) {
        const ind0 = i * 2;
        const ind1 = (i + 1) * 2;
        const ind2 = (i + 2) * 2;
        if (pointInTriangle(
          x,
          y,
          vertices[ind0],
          vertices[ind0 + 1],
          vertices[ind1],
          vertices[ind1 + 1],
          vertices[ind2],
          vertices[ind2 + 1]
        )) {
          return true;
        }
      }
    }
    return false;
  }
  /** @ignore */
  onViewUpdate() {
    this._didViewChangeTick++;
    if (this.didViewUpdate)
      return;
    this.didViewUpdate = true;
    const renderGroup = this.renderGroup || this.parentRenderGroup;
    if (renderGroup) {
      renderGroup.onChildViewUpdate(this);
    }
  }
  /**
   * Destroys this sprite renderable and optionally its texture.
   * @param options - Options parameter. A boolean will act as if all options
   *  have been set to that value
   * @param {boolean} [options.texture=false] - Should it destroy the current texture of the renderable as well
   * @param {boolean} [options.textureSource=false] - Should it destroy the textureSource of the renderable as well
   */
  destroy(options) {
    var _a;
    super.destroy(options);
    const destroyTexture = typeof options === "boolean" ? options : options == null ? void 0 : options.texture;
    if (destroyTexture) {
      const destroyTextureSource = typeof options === "boolean" ? options : options == null ? void 0 : options.textureSource;
      this._texture.destroy(destroyTextureSource);
    }
    (_a = this._geometry) == null ? void 0 : _a.off("update", this.onViewUpdate, this);
    this._texture = null;
    this._geometry = null;
    this._shader = null;
  }
};

// node_modules/pixi.js/lib/scene/sprite-animated/AnimatedSprite.mjs
var AnimatedSprite = class _AnimatedSprite extends Sprite {
  /** @ignore */
  constructor(...args) {
    let options = args[0];
    if (Array.isArray(args[0])) {
      options = {
        textures: args[0],
        autoUpdate: args[1]
      };
    }
    const { textures, autoUpdate, ...rest } = options;
    const [firstFrame] = textures;
    super({
      ...rest,
      texture: firstFrame instanceof Texture ? firstFrame : firstFrame.texture
    });
    this._textures = null;
    this._durations = null;
    this._autoUpdate = autoUpdate ?? true;
    this._isConnectedToTicker = false;
    this.animationSpeed = 1;
    this.loop = true;
    this.updateAnchor = false;
    this.onComplete = null;
    this.onFrameChange = null;
    this.onLoop = null;
    this._currentTime = 0;
    this._playing = false;
    this._previousFrame = null;
    this.textures = textures;
  }
  /** Stops the AnimatedSprite. */
  stop() {
    if (!this._playing) {
      return;
    }
    this._playing = false;
    if (this._autoUpdate && this._isConnectedToTicker) {
      Ticker.shared.remove(this.update, this);
      this._isConnectedToTicker = false;
    }
  }
  /** Plays the AnimatedSprite. */
  play() {
    if (this._playing) {
      return;
    }
    this._playing = true;
    if (this._autoUpdate && !this._isConnectedToTicker) {
      Ticker.shared.add(this.update, this, UPDATE_PRIORITY.HIGH);
      this._isConnectedToTicker = true;
    }
  }
  /**
   * Stops the AnimatedSprite and goes to a specific frame.
   * @param frameNumber - Frame index to stop at.
   */
  gotoAndStop(frameNumber) {
    this.stop();
    this.currentFrame = frameNumber;
  }
  /**
   * Goes to a specific frame and begins playing the AnimatedSprite.
   * @param frameNumber - Frame index to start at.
   */
  gotoAndPlay(frameNumber) {
    this.currentFrame = frameNumber;
    this.play();
  }
  /**
   * Updates the object transform for rendering.
   * @param ticker - the ticker to use to update the object.
   */
  update(ticker) {
    if (!this._playing) {
      return;
    }
    const deltaTime = ticker.deltaTime;
    const elapsed = this.animationSpeed * deltaTime;
    const previousFrame = this.currentFrame;
    if (this._durations !== null) {
      let lag = this._currentTime % 1 * this._durations[this.currentFrame];
      lag += elapsed / 60 * 1e3;
      while (lag < 0) {
        this._currentTime--;
        lag += this._durations[this.currentFrame];
      }
      const sign = Math.sign(this.animationSpeed * deltaTime);
      this._currentTime = Math.floor(this._currentTime);
      while (lag >= this._durations[this.currentFrame]) {
        lag -= this._durations[this.currentFrame] * sign;
        this._currentTime += sign;
      }
      this._currentTime += lag / this._durations[this.currentFrame];
    } else {
      this._currentTime += elapsed;
    }
    if (this._currentTime < 0 && !this.loop) {
      this.gotoAndStop(0);
      if (this.onComplete) {
        this.onComplete();
      }
    } else if (this._currentTime >= this._textures.length && !this.loop) {
      this.gotoAndStop(this._textures.length - 1);
      if (this.onComplete) {
        this.onComplete();
      }
    } else if (previousFrame !== this.currentFrame) {
      if (this.loop && this.onLoop) {
        if (this.animationSpeed > 0 && this.currentFrame < previousFrame || this.animationSpeed < 0 && this.currentFrame > previousFrame) {
          this.onLoop();
        }
      }
      this._updateTexture();
    }
  }
  /** Updates the displayed texture to match the current frame index. */
  _updateTexture() {
    const currentFrame = this.currentFrame;
    if (this._previousFrame === currentFrame) {
      return;
    }
    this._previousFrame = currentFrame;
    this.texture = this._textures[currentFrame];
    if (this.updateAnchor) {
      this.anchor.copyFrom(this.texture.defaultAnchor);
    }
    if (this.onFrameChange) {
      this.onFrameChange(this.currentFrame);
    }
  }
  /** Stops the AnimatedSprite and destroys it. */
  destroy() {
    this.stop();
    super.destroy();
    this.onComplete = null;
    this.onFrameChange = null;
    this.onLoop = null;
  }
  /**
   * A short hand way of creating an AnimatedSprite from an array of frame ids.
   * @param frames - The array of frames ids the AnimatedSprite will use as its texture frames.
   * @returns - The new animated sprite with the specified frames.
   */
  static fromFrames(frames) {
    const textures = [];
    for (let i = 0; i < frames.length; ++i) {
      textures.push(Texture.from(frames[i]));
    }
    return new _AnimatedSprite(textures);
  }
  /**
   * A short hand way of creating an AnimatedSprite from an array of image ids.
   * @param images - The array of image urls the AnimatedSprite will use as its texture frames.
   * @returns The new animate sprite with the specified images as frames.
   */
  static fromImages(images) {
    const textures = [];
    for (let i = 0; i < images.length; ++i) {
      textures.push(Texture.from(images[i]));
    }
    return new _AnimatedSprite(textures);
  }
  /**
   * The total number of frames in the AnimatedSprite. This is the same as number of textures
   * assigned to the AnimatedSprite.
   * @readonly
   * @default 0
   */
  get totalFrames() {
    return this._textures.length;
  }
  /** The array of textures used for this AnimatedSprite. */
  get textures() {
    return this._textures;
  }
  set textures(value) {
    if (value[0] instanceof Texture) {
      this._textures = value;
      this._durations = null;
    } else {
      this._textures = [];
      this._durations = [];
      for (let i = 0; i < value.length; i++) {
        this._textures.push(value[i].texture);
        this._durations.push(value[i].time);
      }
    }
    this._previousFrame = null;
    this.gotoAndStop(0);
    this._updateTexture();
  }
  /** The AnimatedSprite's current frame index. */
  get currentFrame() {
    let currentFrame = Math.floor(this._currentTime) % this._textures.length;
    if (currentFrame < 0) {
      currentFrame += this._textures.length;
    }
    return currentFrame;
  }
  set currentFrame(value) {
    if (value < 0 || value > this.totalFrames - 1) {
      throw new Error(`[AnimatedSprite]: Invalid frame index value ${value}, expected to be between 0 and totalFrames ${this.totalFrames}.`);
    }
    const previousFrame = this.currentFrame;
    this._currentTime = value;
    if (previousFrame !== this.currentFrame) {
      this._updateTexture();
    }
  }
  /**
   * Indicates if the AnimatedSprite is currently playing.
   * @readonly
   */
  get playing() {
    return this._playing;
  }
  /** Whether to use Ticker.shared to auto update animation time. */
  get autoUpdate() {
    return this._autoUpdate;
  }
  set autoUpdate(value) {
    if (value !== this._autoUpdate) {
      this._autoUpdate = value;
      if (!this._autoUpdate && this._isConnectedToTicker) {
        Ticker.shared.remove(this.update, this);
        this._isConnectedToTicker = false;
      } else if (this._autoUpdate && !this._isConnectedToTicker && this._playing) {
        Ticker.shared.add(this.update, this);
        this._isConnectedToTicker = true;
      }
    }
  }
};

// node_modules/pixi.js/lib/utils/misc/Transform.mjs
var Transform = class {
  /**
   * @param options - Options for the transform.
   * @param options.matrix - The matrix to use.
   * @param options.observer - The observer to use.
   */
  constructor({ matrix, observer } = {}) {
    this.dirty = true;
    this._matrix = matrix ?? new Matrix();
    this.observer = observer;
    this.position = new ObservablePoint(this, 0, 0);
    this.scale = new ObservablePoint(this, 1, 1);
    this.pivot = new ObservablePoint(this, 0, 0);
    this.skew = new ObservablePoint(this, 0, 0);
    this._rotation = 0;
    this._cx = 1;
    this._sx = 0;
    this._cy = 0;
    this._sy = 1;
  }
  /**
   * This matrix is computed by combining this Transforms position, scale, rotation, skew, and pivot
   * properties into a single matrix.
   * @readonly
   */
  get matrix() {
    const lt = this._matrix;
    if (!this.dirty)
      return lt;
    lt.a = this._cx * this.scale.x;
    lt.b = this._sx * this.scale.x;
    lt.c = this._cy * this.scale.y;
    lt.d = this._sy * this.scale.y;
    lt.tx = this.position.x - (this.pivot.x * lt.a + this.pivot.y * lt.c);
    lt.ty = this.position.y - (this.pivot.x * lt.b + this.pivot.y * lt.d);
    this.dirty = false;
    return lt;
  }
  /**
   * Called when a value changes.
   * @param point
   * @internal
   * @private
   */
  _onUpdate(point) {
    var _a;
    this.dirty = true;
    if (point === this.skew) {
      this.updateSkew();
    }
    (_a = this.observer) == null ? void 0 : _a._onUpdate(this);
  }
  /** Called when the skew or the rotation changes. */
  updateSkew() {
    this._cx = Math.cos(this._rotation + this.skew.y);
    this._sx = Math.sin(this._rotation + this.skew.y);
    this._cy = -Math.sin(this._rotation - this.skew.x);
    this._sy = Math.cos(this._rotation - this.skew.x);
    this.dirty = true;
  }
  toString() {
    return `[pixi.js/math:Transform position=(${this.position.x}, ${this.position.y}) rotation=${this.rotation} scale=(${this.scale.x}, ${this.scale.y}) skew=(${this.skew.x}, ${this.skew.y}) ]`;
  }
  /**
   * Decomposes a matrix and sets the transforms properties based on it.
   * @param matrix - The matrix to decompose
   */
  setFromMatrix(matrix) {
    matrix.decompose(this);
    this.dirty = true;
  }
  /** The rotation of the object in radians. */
  get rotation() {
    return this._rotation;
  }
  set rotation(value) {
    if (this._rotation !== value) {
      this._rotation = value;
      this._onUpdate(this.skew);
    }
  }
};

// node_modules/pixi.js/lib/scene/sprite-tiling/TilingSprite.mjs
var _TilingSprite = class _TilingSprite2 extends ViewContainer {
  constructor(...args) {
    let options = args[0] || {};
    if (options instanceof Texture) {
      options = { texture: options };
    }
    if (args.length > 1) {
      deprecation(v8_0_0, "use new TilingSprite({ texture, width:100, height:100 }) instead");
      options.width = args[1];
      options.height = args[2];
    }
    options = { ..._TilingSprite2.defaultOptions, ...options };
    const {
      texture,
      anchor,
      tilePosition,
      tileScale,
      tileRotation,
      width,
      height,
      applyAnchorToTexture,
      roundPixels,
      ...rest
    } = options ?? {};
    super({
      label: "TilingSprite",
      ...rest
    });
    this.renderPipeId = "tilingSprite";
    this.batched = true;
    this.allowChildren = false;
    this._anchor = new ObservablePoint(
      {
        _onUpdate: () => {
          this.onViewUpdate();
        }
      }
    );
    this._applyAnchorToTexture = applyAnchorToTexture;
    this.texture = texture;
    this._width = width ?? texture.width;
    this._height = height ?? texture.height;
    this._tileTransform = new Transform({
      observer: {
        _onUpdate: () => this.onViewUpdate()
      }
    });
    if (anchor)
      this.anchor = anchor;
    this.tilePosition = tilePosition;
    this.tileScale = tileScale;
    this.tileRotation = tileRotation;
    this.roundPixels = roundPixels ?? false;
  }
  /**
   * Creates a new tiling sprite.
   * @param source - The source to create the texture from.
   * @param options - The options for creating the tiling sprite.
   * @returns A new tiling sprite.
   */
  static from(source7, options = {}) {
    if (typeof source7 === "string") {
      return new _TilingSprite2({
        texture: Cache.get(source7),
        ...options
      });
    }
    return new _TilingSprite2({
      texture: source7,
      ...options
    });
  }
  /**
   * Changes frame clamping in corresponding textureMatrix
   * Change to -0.5 to add a pixel to the edge, recommended for transparent trimmed textures in atlas
   * @default 0.5
   * @member {number}
   */
  get clampMargin() {
    return this._texture.textureMatrix.clampMargin;
  }
  set clampMargin(value) {
    this._texture.textureMatrix.clampMargin = value;
  }
  /**
   * The anchor sets the origin point of the sprite. The default value is taken from the {@link Texture}
   * and passed to the constructor.
   *
   * The default is `(0,0)`, this means the sprite's origin is the top left.
   *
   * Setting the anchor to `(0.5,0.5)` means the sprite's origin is centered.
   *
   * Setting the anchor to `(1,1)` would mean the sprite's origin point will be the bottom right corner.
   *
   * If you pass only single parameter, it will set both x and y to the same value as shown in the example below.
   * @example
   * import { TilingSprite } from 'pixi.js';
   *
   * const sprite = new TilingSprite({texture: Texture.WHITE});
   * sprite.anchor.set(0.5); // This will set the origin to center. (0.5) is same as (0.5, 0.5).
   */
  get anchor() {
    return this._anchor;
  }
  set anchor(value) {
    typeof value === "number" ? this._anchor.set(value) : this._anchor.copyFrom(value);
  }
  /** The offset of the image that is being tiled. */
  get tilePosition() {
    return this._tileTransform.position;
  }
  set tilePosition(value) {
    this._tileTransform.position.copyFrom(value);
  }
  /** The scaling of the image that is being tiled. */
  get tileScale() {
    return this._tileTransform.scale;
  }
  set tileScale(value) {
    typeof value === "number" ? this._tileTransform.scale.set(value) : this._tileTransform.scale.copyFrom(value);
  }
  set tileRotation(value) {
    this._tileTransform.rotation = value;
  }
  /** The rotation of the image that is being tiled. */
  get tileRotation() {
    return this._tileTransform.rotation;
  }
  /** The transform of the image that is being tiled. */
  get tileTransform() {
    return this._tileTransform;
  }
  /**
   * The local bounds of the sprite.
   * @type {rendering.Bounds}
   */
  get bounds() {
    if (this._boundsDirty) {
      this._updateBounds();
      this._boundsDirty = false;
    }
    return this._bounds;
  }
  set texture(value) {
    value || (value = Texture.EMPTY);
    const currentTexture = this._texture;
    if (currentTexture === value)
      return;
    if (currentTexture && currentTexture.dynamic)
      currentTexture.off("update", this.onViewUpdate, this);
    if (value.dynamic)
      value.on("update", this.onViewUpdate, this);
    this._texture = value;
    this.onViewUpdate();
  }
  /** The texture that the sprite is using. */
  get texture() {
    return this._texture;
  }
  /** The width of the tiling area. */
  set width(value) {
    this._width = value;
    this.onViewUpdate();
  }
  get width() {
    return this._width;
  }
  set height(value) {
    this._height = value;
    this.onViewUpdate();
  }
  /** The height of the tiling area. */
  get height() {
    return this._height;
  }
  /**
   * Sets the size of the TilingSprite to the specified width and height.
   * This is faster than setting the width and height separately.
   * @param value - This can be either a number or a [Size]{@link Size} object.
   * @param height - The height to set. Defaults to the value of `width` if not provided.
   */
  setSize(value, height) {
    if (typeof value === "object") {
      height = value.height ?? value.width;
      value = value.width;
    }
    this._width = value;
    this._height = height ?? value;
    this.onViewUpdate();
  }
  /**
   * Retrieves the size of the TilingSprite as a [Size]{@link Size} object.
   * This is faster than get the width and height separately.
   * @param out - Optional object to store the size in.
   * @returns - The size of the TilingSprite.
   */
  getSize(out) {
    out || (out = {});
    out.width = this._width;
    out.height = this._height;
    return out;
  }
  _updateBounds() {
    const bounds = this._bounds;
    const anchor = this._anchor;
    const width = this._width;
    const height = this._height;
    bounds.maxX = -anchor._x * width;
    bounds.minX = bounds.maxX + width;
    bounds.maxY = -anchor._y * height;
    bounds.minY = bounds.maxY + height;
  }
  /**
   * Adds the bounds of this object to the bounds object.
   * @param bounds - The output bounds object.
   */
  addBounds(bounds) {
    const _bounds = this.bounds;
    bounds.addFrame(
      _bounds.minX,
      _bounds.minY,
      _bounds.maxX,
      _bounds.maxY
    );
  }
  /**
   * Checks if the object contains the given point.
   * @param point - The point to check
   */
  containsPoint(point) {
    const width = this._width;
    const height = this._height;
    const x1 = -width * this._anchor._x;
    let y1 = 0;
    if (point.x >= x1 && point.x <= x1 + width) {
      y1 = -height * this._anchor._y;
      if (point.y >= y1 && point.y <= y1 + height)
        return true;
    }
    return false;
  }
  onViewUpdate() {
    this._boundsDirty = true;
    this._didTilingSpriteUpdate = true;
    this._didViewChangeTick++;
    if (this.didViewUpdate)
      return;
    this.didViewUpdate = true;
    const renderGroup = this.renderGroup || this.parentRenderGroup;
    if (renderGroup) {
      renderGroup.onChildViewUpdate(this);
    }
  }
  /**
   * Destroys this sprite renderable and optionally its texture.
   * @param options - Options parameter. A boolean will act as if all options
   *  have been set to that value
   * @param {boolean} [options.texture=false] - Should it destroy the current texture of the renderable as well
   * @param {boolean} [options.textureSource=false] - Should it destroy the textureSource of the renderable as well
   */
  destroy(options = false) {
    super.destroy(options);
    this._anchor = null;
    this._tileTransform = null;
    this._bounds = null;
    const destroyTexture = typeof options === "boolean" ? options : options == null ? void 0 : options.texture;
    if (destroyTexture) {
      const destroyTextureSource = typeof options === "boolean" ? options : options == null ? void 0 : options.textureSource;
      this._texture.destroy(destroyTextureSource);
    }
    this._texture = null;
  }
};
_TilingSprite.defaultOptions = {
  /** The texture to use for the sprite. */
  texture: Texture.EMPTY,
  /** The anchor point of the sprite */
  anchor: { x: 0, y: 0 },
  /** The offset of the image that is being tiled. */
  tilePosition: { x: 0, y: 0 },
  /** Scaling of the image that is being tiled. */
  tileScale: { x: 1, y: 1 },
  /** The rotation of the image that is being tiled. */
  tileRotation: 0,
  /** TODO */
  applyAnchorToTexture: false
};
var TilingSprite = _TilingSprite;

// node_modules/pixi.js/lib/scene/text/AbstractText.mjs
var AbstractText = class extends ViewContainer {
  constructor(options, styleClass) {
    const { text, resolution, style, anchor, width, height, roundPixels, ...rest } = options;
    super({
      ...rest
    });
    this.batched = true;
    this._resolution = null;
    this._autoResolution = true;
    this._didTextUpdate = true;
    this._styleClass = styleClass;
    this.text = text ?? "";
    this.style = style;
    this.resolution = resolution ?? null;
    this.allowChildren = false;
    this._anchor = new ObservablePoint(
      {
        _onUpdate: () => {
          this.onViewUpdate();
        }
      }
    );
    if (anchor)
      this.anchor = anchor;
    this.roundPixels = roundPixels ?? false;
    if (width !== void 0)
      this.width = width;
    if (height !== void 0)
      this.height = height;
  }
  /**
   * The anchor sets the origin point of the text.
   * The default is `(0,0)`, this means the text's origin is the top left.
   *
   * Setting the anchor to `(0.5,0.5)` means the text's origin is centered.
   *
   * Setting the anchor to `(1,1)` would mean the text's origin point will be the bottom right corner.
   *
   * If you pass only single parameter, it will set both x and y to the same value as shown in the example below.
   * @example
   * import { Text } from 'pixi.js';
   *
   * const text = new Text('hello world');
   * text.anchor.set(0.5); // This will set the origin to center. (0.5) is same as (0.5, 0.5).
   */
  get anchor() {
    return this._anchor;
  }
  set anchor(value) {
    typeof value === "number" ? this._anchor.set(value) : this._anchor.copyFrom(value);
  }
  /** Set the copy for the text object. To split a line you can use '\n'. */
  set text(value) {
    value = value.toString();
    if (this._text === value)
      return;
    this._text = value;
    this.onViewUpdate();
  }
  get text() {
    return this._text;
  }
  /**
   * The resolution / device pixel ratio of the canvas.
   * @default 1
   */
  set resolution(value) {
    this._autoResolution = value === null;
    this._resolution = value;
    this.onViewUpdate();
  }
  get resolution() {
    return this._resolution;
  }
  get style() {
    return this._style;
  }
  /**
   * Set the style of the text.
   *
   * Set up an event listener to listen for changes on the style object and mark the text as dirty.
   *
   * If setting the `style` can also be partial {@link AnyTextStyleOptions}.
   * @type {
   * text.TextStyle |
   * Partial<text.TextStyle> |
   * text.TextStyleOptions |
   * text.HTMLTextStyle |
   * Partial<text.HTMLTextStyle> |
   * text.HTMLTextStyleOptions
   * }
   */
  set style(style) {
    var _a;
    style = style || {};
    (_a = this._style) == null ? void 0 : _a.off("update", this.onViewUpdate, this);
    if (style instanceof this._styleClass) {
      this._style = style;
    } else {
      this._style = new this._styleClass(style);
    }
    this._style.on("update", this.onViewUpdate, this);
    this.onViewUpdate();
  }
  /**
   * The local bounds of the Text.
   * @type {rendering.Bounds}
   */
  get bounds() {
    if (this._boundsDirty) {
      this._updateBounds();
      this._boundsDirty = false;
    }
    return this._bounds;
  }
  /** The width of the sprite, setting this will actually modify the scale to achieve the value set. */
  get width() {
    return Math.abs(this.scale.x) * this.bounds.width;
  }
  set width(value) {
    this._setWidth(value, this.bounds.width);
  }
  /** The height of the sprite, setting this will actually modify the scale to achieve the value set. */
  get height() {
    return Math.abs(this.scale.y) * this.bounds.height;
  }
  set height(value) {
    this._setHeight(value, this.bounds.height);
  }
  /**
   * Retrieves the size of the Text as a [Size]{@link Size} object.
   * This is faster than get the width and height separately.
   * @param out - Optional object to store the size in.
   * @returns - The size of the Text.
   */
  getSize(out) {
    out || (out = {});
    out.width = Math.abs(this.scale.x) * this.bounds.width;
    out.height = Math.abs(this.scale.y) * this.bounds.height;
    return out;
  }
  /**
   * Sets the size of the Text to the specified width and height.
   * This is faster than setting the width and height separately.
   * @param value - This can be either a number or a [Size]{@link Size} object.
   * @param height - The height to set. Defaults to the value of `width` if not provided.
   */
  setSize(value, height) {
    if (typeof value === "object") {
      height = value.height ?? value.width;
      value = value.width;
    } else {
      height ?? (height = value);
    }
    value !== void 0 && this._setWidth(value, this.bounds.width);
    height !== void 0 && this._setHeight(height, this.bounds.height);
  }
  /**
   * Adds the bounds of this text to the bounds object.
   * @param bounds - The output bounds object.
   */
  addBounds(bounds) {
    const _bounds = this.bounds;
    bounds.addFrame(
      _bounds.minX,
      _bounds.minY,
      _bounds.maxX,
      _bounds.maxY
    );
  }
  /**
   * Checks if the text contains the given point.
   * @param point - The point to check
   */
  containsPoint(point) {
    const width = this.bounds.width;
    const height = this.bounds.height;
    const x1 = -width * this.anchor.x;
    let y1 = 0;
    if (point.x >= x1 && point.x <= x1 + width) {
      y1 = -height * this.anchor.y;
      if (point.y >= y1 && point.y <= y1 + height)
        return true;
    }
    return false;
  }
  onViewUpdate() {
    this._didViewChangeTick++;
    this._boundsDirty = true;
    if (this.didViewUpdate)
      return;
    this.didViewUpdate = true;
    this._didTextUpdate = true;
    const renderGroup = this.renderGroup || this.parentRenderGroup;
    if (renderGroup) {
      renderGroup.onChildViewUpdate(this);
    }
  }
  _getKey() {
    return `${this.text}:${this._style.styleKey}:${this._resolution}`;
  }
  /**
   * Destroys this text renderable and optionally its style texture.
   * @param options - Options parameter. A boolean will act as if all options
   *  have been set to that value
   * @param {boolean} [options.texture=false] - Should it destroy the texture of the text style
   * @param {boolean} [options.textureSource=false] - Should it destroy the textureSource of the text style
   * @param {boolean} [options.style=false] - Should it destroy the style of the text
   */
  destroy(options = false) {
    super.destroy(options);
    this.owner = null;
    this._bounds = null;
    this._anchor = null;
    if (typeof options === "boolean" ? options : options == null ? void 0 : options.style) {
      this._style.destroy(options);
    }
    this._style = null;
    this._text = null;
  }
};
function ensureOptions(args, name) {
  let options = args[0] ?? {};
  if (typeof options === "string" || args[1]) {
    deprecation(v8_0_0, `use new ${name}({ text: "hi!", style }) instead`);
    options = {
      text: options,
      style: args[1]
    };
  }
  return options;
}

// node_modules/pixi.js/lib/scene/text/Text.mjs
var Text = class extends AbstractText {
  constructor(...args) {
    const options = ensureOptions(args, "Text");
    super(options, TextStyle);
    this.renderPipeId = "text";
  }
  _updateBounds() {
    const bounds = this._bounds;
    const anchor = this._anchor;
    const canvasMeasurement = CanvasTextMetrics.measureText(
      this._text,
      this._style
    );
    const { width, height } = canvasMeasurement;
    bounds.minX = -anchor._x * width;
    bounds.maxX = bounds.minX + width;
    bounds.minY = -anchor._y * height;
    bounds.maxY = bounds.minY + height;
  }
};

// node_modules/pixi.js/lib/prepare/PrepareQueue.mjs
var PrepareQueue = class extends PrepareBase {
  /**
   * Resolve the given resource type and return an item for the queue
   * @param source
   * @param queue
   */
  resolveQueueItem(source7, queue) {
    if (source7 instanceof Container) {
      this.resolveContainerQueueItem(source7, queue);
    } else if (source7 instanceof TextureSource || source7 instanceof Texture) {
      queue.push(source7.source);
    } else if (source7 instanceof GraphicsContext) {
      queue.push(source7);
    }
    return null;
  }
  /**
   * Resolve the given container and return an item for the queue
   * @param container
   * @param queue
   */
  resolveContainerQueueItem(container, queue) {
    if (container instanceof Sprite || container instanceof TilingSprite || container instanceof Mesh) {
      queue.push(container.texture.source);
    } else if (container instanceof Text) {
      queue.push(container);
    } else if (container instanceof Graphics) {
      queue.push(container.context);
    } else if (container instanceof AnimatedSprite) {
      container.textures.forEach((textureOrFrame) => {
        if (textureOrFrame.source) {
          queue.push(textureOrFrame.source);
        } else {
          queue.push(textureOrFrame.texture.source);
        }
      });
    }
  }
  /**
   * Resolve the given graphics context and return an item for the queue
   * @param graphicsContext
   */
  resolveGraphicsContextQueueItem(graphicsContext) {
    this.renderer.graphicsContext.getContextRenderData(graphicsContext);
    const { instructions } = graphicsContext;
    for (const instruction of instructions) {
      if (instruction.action === "texture") {
        const { image } = instruction.data;
        return image.source;
      } else if (instruction.action === "fill") {
        const { texture } = instruction.data.style;
        return texture.source;
      }
    }
    return null;
  }
};

// node_modules/pixi.js/lib/scene/text-bitmap/BitmapText.mjs
var BitmapText = class extends AbstractText {
  constructor(...args) {
    var _a;
    const options = ensureOptions(args, "BitmapText");
    options.style ?? (options.style = options.style || {});
    (_a = options.style).fill ?? (_a.fill = 16777215);
    super(options, TextStyle);
    this.renderPipeId = "bitmapText";
  }
  _updateBounds() {
    const bounds = this._bounds;
    const anchor = this._anchor;
    const bitmapMeasurement = BitmapFontManager.measureText(this.text, this._style);
    const scale = bitmapMeasurement.scale;
    const offset = bitmapMeasurement.offsetY * scale;
    let width = bitmapMeasurement.width * scale;
    let height = bitmapMeasurement.height * scale;
    const stroke = this._style._stroke;
    if (stroke) {
      width += stroke.width;
      height += stroke.width;
    }
    bounds.minX = -anchor._x * width;
    bounds.maxX = bounds.minX + width;
    bounds.minY = -anchor._y * (height + offset);
    bounds.maxY = bounds.minY + height;
  }
};

// node_modules/pixi.js/lib/scene/text-html/HTMLText.mjs
var HTMLText = class extends AbstractText {
  constructor(...args) {
    const options = ensureOptions(args, "HtmlText");
    super(options, HTMLTextStyle);
    this.renderPipeId = "htmlText";
  }
  _updateBounds() {
    const bounds = this._bounds;
    const anchor = this._anchor;
    const htmlMeasurement = measureHtmlText(this.text, this._style);
    const { width, height } = htmlMeasurement;
    bounds.minX = -anchor._x * width;
    bounds.maxX = bounds.minX + width;
    bounds.minY = -anchor._y * height;
    bounds.maxY = bounds.minY + height;
  }
};

// node_modules/pixi.js/lib/prepare/PrepareUpload.mjs
var PrepareUpload = class extends PrepareQueue {
  /**
   * Upload the given queue item
   * @param item
   */
  uploadQueueItem(item) {
    if (item instanceof TextureSource) {
      this.uploadTextureSource(item);
    } else if (item instanceof Text) {
      this.uploadText(item);
    } else if (item instanceof HTMLText) {
      this.uploadHTMLText(item);
    } else if (item instanceof BitmapText) {
      this.uploadBitmapText(item);
    } else if (item instanceof GraphicsContext) {
      this.uploadGraphicsContext(item);
    }
  }
  uploadTextureSource(textureSource) {
    this.renderer.texture.initSource(textureSource);
  }
  uploadText(_text) {
    this.renderer.renderPipes.text.initGpuText(_text);
  }
  uploadBitmapText(_text) {
    this.renderer.renderPipes.bitmapText.initGpuText(_text);
  }
  uploadHTMLText(_text) {
    this.renderer.renderPipes.htmlText.initGpuText(_text);
  }
  /**
   * Resolve the given graphics context and return an item for the queue
   * @param graphicsContext
   */
  uploadGraphicsContext(graphicsContext) {
    this.renderer.graphicsContext.getContextRenderData(graphicsContext);
    const { instructions } = graphicsContext;
    for (const instruction of instructions) {
      if (instruction.action === "texture") {
        const { image } = instruction.data;
        this.uploadTextureSource(image.source);
      } else if (instruction.action === "fill") {
        const { texture } = instruction.data.style;
        this.uploadTextureSource(texture.source);
      }
    }
    return null;
  }
};

// node_modules/pixi.js/lib/prepare/PrepareSystem.mjs
var PrepareSystem = class extends PrepareUpload {
  /** Destroys the plugin, don't use after this. */
  destroy() {
    clearTimeout(this.timeout);
    this.renderer = null;
    this.queue = null;
    this.resolves = null;
  }
};
PrepareSystem.extension = {
  type: [
    ExtensionType.WebGLSystem,
    ExtensionType.WebGPUSystem
  ],
  name: "prepare"
};

// node_modules/pixi.js/lib/rendering/batcher/gpu/generateGPULayout.mjs
function generateGPULayout(maxTextures) {
  const gpuLayout = [];
  let bindIndex = 0;
  for (let i = 0; i < maxTextures; i++) {
    gpuLayout[bindIndex] = {
      texture: {
        sampleType: "float",
        viewDimension: "2d",
        multisampled: false
      },
      binding: bindIndex,
      visibility: GPUShaderStage.FRAGMENT
    };
    bindIndex++;
    gpuLayout[bindIndex] = {
      sampler: {
        type: "filtering"
      },
      binding: bindIndex,
      visibility: GPUShaderStage.FRAGMENT
    };
    bindIndex++;
  }
  return gpuLayout;
}

// node_modules/pixi.js/lib/rendering/batcher/gpu/generateLayout.mjs
function generateLayout(maxTextures) {
  const layout = {};
  let bindIndex = 0;
  for (let i = 0; i < maxTextures; i++) {
    layout[`textureSource${i + 1}`] = bindIndex++;
    layout[`textureSampler${i + 1}`] = bindIndex++;
  }
  return layout;
}

// node_modules/pixi.js/lib/rendering/high-shader/compiler/utils/formatShader.mjs
function formatShader(shader) {
  const spl = shader.split(/([\n{}])/g).map((a) => a.trim()).filter((a) => a.length);
  let indent = "";
  const formatted = spl.map((a) => {
    let indentedLine = indent + a;
    if (a === "{") {
      indent += "    ";
    } else if (a === "}") {
      indent = indent.substr(0, indent.length - 4);
      indentedLine = indent + a;
    }
    return indentedLine;
  }).join("\n");
  return formatted;
}

// node_modules/pixi.js/lib/rendering/mask/scissor/ScissorMask.mjs
var ScissorMask = class {
  constructor(mask) {
    this.priority = 0;
    this.pipe = "scissorMask";
    this.mask = mask;
    this.mask.renderable = false;
    this.mask.measurable = false;
  }
  addBounds(bounds, skipUpdateTransform) {
    addMaskBounds(this.mask, bounds, skipUpdateTransform);
  }
  addLocalBounds(bounds, localRoot) {
    addMaskLocalBounds(this.mask, bounds, localRoot);
  }
  containsPoint(point, hitTestFn) {
    const mask = this.mask;
    return hitTestFn(mask, point);
  }
  reset() {
    this.mask.measurable = true;
    this.mask = null;
  }
  destroy() {
    this.reset();
  }
};

// node_modules/pixi.js/lib/rendering/renderers/gl/shader/migrateFragmentFromV7toV8.mjs
function migrateFragmentFromV7toV8(fragmentShader) {
  fragmentShader = fragmentShader.replaceAll("texture2D", "texture").replaceAll("gl_FragColor", "finalColor").replaceAll("varying", "in");
  fragmentShader = `
        out vec4 finalColor;
    ${fragmentShader}
    `;
  return fragmentShader;
}

// node_modules/pixi.js/lib/rendering/renderers/gl/shader/program/mapSize.mjs
var GLSL_TO_SIZE = {
  float: 1,
  vec2: 2,
  vec3: 3,
  vec4: 4,
  int: 1,
  ivec2: 2,
  ivec3: 3,
  ivec4: 4,
  uint: 1,
  uvec2: 2,
  uvec3: 3,
  uvec4: 4,
  bool: 1,
  bvec2: 2,
  bvec3: 3,
  bvec4: 4,
  mat2: 4,
  mat3: 9,
  mat4: 16,
  sampler2D: 1
};
function mapSize(type) {
  return GLSL_TO_SIZE[type];
}

// node_modules/pixi.js/lib/rendering/renderers/gpu/buffer/GpuReadBuffer.mjs
function GpuReadBuffer(buffer, renderer) {
  const bufferSize = buffer.descriptor.size;
  const device = renderer.gpu.device;
  const stagingBuffer = new Buffer({
    data: new Float32Array(24e5),
    usage: BufferUsage.MAP_READ | BufferUsage.COPY_DST
  });
  const stagingGPUBuffer = renderer.buffer.createGPUBuffer(stagingBuffer);
  const commandEncoder = device.createCommandEncoder();
  commandEncoder.copyBufferToBuffer(
    renderer.buffer.getGPUBuffer(buffer),
    0,
    // Source offset
    stagingGPUBuffer,
    0,
    // Destination offset
    bufferSize
  );
  device.queue.submit([commandEncoder.finish()]);
  void stagingGPUBuffer.mapAsync(
    GPUMapMode.READ,
    0,
    // Offset
    bufferSize
    // Length
  ).then(() => {
    stagingGPUBuffer.getMappedRange(0, bufferSize);
    stagingGPUBuffer.unmap();
  });
}

// node_modules/pixi.js/lib/rendering/renderers/shared/geometry/const.mjs
var DEPRECATED_DRAW_MODES = {
  POINTS: "point-list",
  LINES: "line-list",
  LINE_STRIP: "line-strip",
  TRIANGLES: "triangle-list",
  TRIANGLE_STRIP: "triangle-strip"
};
var DRAW_MODES = new Proxy(DEPRECATED_DRAW_MODES, {
  get(target, prop) {
    deprecation(v8_0_0, `DRAW_MODES.${prop} is deprecated, use '${DEPRECATED_DRAW_MODES[prop]}' instead`);
    return target[prop];
  }
});

// node_modules/pixi.js/lib/rendering/renderers/shared/renderTarget/viewportFromFrame.mjs
var fullFrame = new Rectangle(0, 0, 1, 1);
function viewportFromFrame(viewport, source7, frame) {
  frame || (frame = fullFrame);
  const pixelWidth = source7.pixelWidth;
  const pixelHeight = source7.pixelHeight;
  viewport.x = frame.x * pixelWidth | 0;
  viewport.y = frame.y * pixelHeight | 0;
  viewport.width = frame.width * pixelWidth | 0;
  viewport.height = frame.height * pixelHeight | 0;
  return viewport;
}

// node_modules/pixi.js/lib/rendering/renderers/shared/texture/const.mjs
var MSAA_QUALITY = ((MSAA_QUALITY2) => {
  MSAA_QUALITY2[MSAA_QUALITY2["NONE"] = 0] = "NONE";
  MSAA_QUALITY2[MSAA_QUALITY2["LOW"] = 2] = "LOW";
  MSAA_QUALITY2[MSAA_QUALITY2["MEDIUM"] = 4] = "MEDIUM";
  MSAA_QUALITY2[MSAA_QUALITY2["HIGH"] = 8] = "HIGH";
  return MSAA_QUALITY2;
})(MSAA_QUALITY || {});
var DEPRECATED_WRAP_MODES = ((DEPRECATED_WRAP_MODES2) => {
  DEPRECATED_WRAP_MODES2["CLAMP"] = "clamp-to-edge";
  DEPRECATED_WRAP_MODES2["REPEAT"] = "repeat";
  DEPRECATED_WRAP_MODES2["MIRRORED_REPEAT"] = "mirror-repeat";
  return DEPRECATED_WRAP_MODES2;
})(DEPRECATED_WRAP_MODES || {});
var WRAP_MODES = new Proxy(DEPRECATED_WRAP_MODES, {
  get(target, prop) {
    deprecation(v8_0_0, `DRAW_MODES.${prop} is deprecated, use '${DEPRECATED_WRAP_MODES[prop]}' instead`);
    return target[prop];
  }
});
var DEPRECATED_SCALE_MODES = ((DEPRECATED_SCALE_MODES2) => {
  DEPRECATED_SCALE_MODES2["NEAREST"] = "nearest";
  DEPRECATED_SCALE_MODES2["LINEAR"] = "linear";
  return DEPRECATED_SCALE_MODES2;
})(DEPRECATED_SCALE_MODES || {});
var SCALE_MODES = new Proxy(DEPRECATED_SCALE_MODES, {
  get(target, prop) {
    deprecation(v8_0_0, `DRAW_MODES.${prop} is deprecated, use '${DEPRECATED_SCALE_MODES[prop]}' instead`);
    return target[prop];
  }
});

// node_modules/pixi.js/lib/rendering/renderers/shared/texture/TextureUvs.mjs
var TextureUvs = class {
  constructor() {
    this.x0 = 0;
    this.y0 = 0;
    this.x1 = 1;
    this.y1 = 0;
    this.x2 = 1;
    this.y2 = 1;
    this.x3 = 0;
    this.y3 = 1;
    this.uvsFloat32 = new Float32Array(8);
  }
  /**
   * Sets the texture Uvs based on the given frame information.
   * @protected
   * @param frame - The frame of the texture
   * @param baseFrame - The base frame of the texture
   * @param rotate - Rotation of frame, see {@link groupD8}
   */
  set(frame, baseFrame, rotate) {
    const tw = baseFrame.width;
    const th = baseFrame.height;
    if (rotate) {
      const w2 = frame.width / 2 / tw;
      const h2 = frame.height / 2 / th;
      const cX = frame.x / tw + w2;
      const cY = frame.y / th + h2;
      rotate = groupD8.add(rotate, groupD8.NW);
      this.x0 = cX + w2 * groupD8.uX(rotate);
      this.y0 = cY + h2 * groupD8.uY(rotate);
      rotate = groupD8.add(rotate, 2);
      this.x1 = cX + w2 * groupD8.uX(rotate);
      this.y1 = cY + h2 * groupD8.uY(rotate);
      rotate = groupD8.add(rotate, 2);
      this.x2 = cX + w2 * groupD8.uX(rotate);
      this.y2 = cY + h2 * groupD8.uY(rotate);
      rotate = groupD8.add(rotate, 2);
      this.x3 = cX + w2 * groupD8.uX(rotate);
      this.y3 = cY + h2 * groupD8.uY(rotate);
    } else {
      this.x0 = frame.x / tw;
      this.y0 = frame.y / th;
      this.x1 = (frame.x + frame.width) / tw;
      this.y1 = frame.y / th;
      this.x2 = (frame.x + frame.width) / tw;
      this.y2 = (frame.y + frame.height) / th;
      this.x3 = frame.x / tw;
      this.y3 = (frame.y + frame.height) / th;
    }
    this.uvsFloat32[0] = this.x0;
    this.uvsFloat32[1] = this.y0;
    this.uvsFloat32[2] = this.x1;
    this.uvsFloat32[3] = this.y1;
    this.uvsFloat32[4] = this.x2;
    this.uvsFloat32[5] = this.y2;
    this.uvsFloat32[6] = this.x3;
    this.uvsFloat32[7] = this.y3;
  }
  toString() {
    return `[pixi.js/core:TextureUvs x0=${this.x0} y0=${this.y0} x1=${this.x1} y1=${this.y1} x2=${this.x2} y2=${this.y2} x3=${this.x3} y3=${this.y3}]`;
  }
};

// node_modules/pixi.js/lib/rendering/renderers/shared/texture/utils/generateUID.mjs
var uidCount = 0;
function generateUID() {
  return uidCount++;
}

// node_modules/pixi.js/lib/rendering/renderers/shared/utils/parseFunctionBody.mjs
function parseFunctionBody(fn) {
  const fnStr = fn.toString();
  const bodyStart = fnStr.indexOf("{");
  const bodyEnd = fnStr.lastIndexOf("}");
  if (bodyStart === -1 || bodyEnd === -1) {
    throw new Error("getFunctionBody: No body found in function definition");
  }
  return fnStr.slice(bodyStart + 1, bodyEnd).trim();
}

// node_modules/pixi.js/lib/scene/container/RenderContainer.mjs
var RenderContainer = class extends Container {
  /**
   * @param options - The options for the container.
   */
  constructor(options) {
    if (typeof options === "function") {
      options = { render: options };
    }
    const { render, ...rest } = options;
    super({
      label: "RenderContainer",
      ...rest
    });
    this.batched = false;
    this._lastUsed = 0;
    this._lastInstructionTick = -1;
    this.bounds = new Bounds();
    this.canBundle = false;
    this.renderPipeId = "customRender";
    if (render)
      this.render = render;
    this.containsPoint = options.containsPoint ?? (() => false);
    this.addBounds = options.addBounds ?? (() => false);
  }
  /**
   * An overridable function that can be used to render the object using the current renderer.
   * @param _renderer - The current renderer
   */
  render(_renderer) {
  }
};

// node_modules/pixi.js/lib/scene/container/utils/updateLocalTransform.mjs
function updateLocalTransform(lt, container) {
  const scale = container._scale;
  const pivot = container._pivot;
  const position = container._position;
  const sx = scale._x;
  const sy = scale._y;
  const px = pivot._x;
  const py = pivot._y;
  lt.a = container._cx * sx;
  lt.b = container._sx * sx;
  lt.c = container._cy * sy;
  lt.d = container._sy * sy;
  lt.tx = position._x - (px * lt.a + py * lt.c);
  lt.ty = position._y - (px * lt.b + py * lt.d);
}

// node_modules/pixi.js/lib/scene/container/utils/updateWorldTransform.mjs
function updateWorldTransform(local, parent, world) {
  const lta = local.a;
  const ltb = local.b;
  const ltc = local.c;
  const ltd = local.d;
  const lttx = local.tx;
  const ltty = local.ty;
  const pta = parent.a;
  const ptb = parent.b;
  const ptc = parent.c;
  const ptd = parent.d;
  world.a = lta * pta + ltb * ptc;
  world.b = lta * ptb + ltb * ptd;
  world.c = ltc * pta + ltd * ptc;
  world.d = ltc * ptb + ltd * ptd;
  world.tx = lttx * pta + ltty * ptc + parent.tx;
  world.ty = lttx * ptb + ltty * ptd + parent.ty;
}

// node_modules/pixi.js/lib/scene/graphics/shared/utils/buildGeometryFromPath.mjs
var buildMap = {
  rectangle: buildRectangle,
  polygon: buildPolygon,
  triangle: buildTriangle,
  circle: buildCircle,
  ellipse: buildCircle,
  roundedRectangle: buildCircle
};
function buildGeometryFromPath(options) {
  if (options instanceof GraphicsPath) {
    options = {
      path: options,
      textureMatrix: null,
      out: null
    };
  }
  const vertices = [];
  const uvs = [];
  const indices = [];
  const shapePath = options.path.shapePath;
  const textureMatrix = options.textureMatrix;
  shapePath.shapePrimitives.forEach(({ shape, transform: matrix }) => {
    const indexOffset = indices.length;
    const vertOffset = vertices.length / 2;
    const points = [];
    const build = buildMap[shape.type];
    build.build(shape, points);
    if (matrix) {
      transformVertices(points, matrix);
    }
    build.triangulate(points, vertices, 2, vertOffset, indices, indexOffset);
    const uvsOffset = uvs.length / 2;
    if (textureMatrix) {
      if (matrix) {
        textureMatrix.append(matrix.clone().invert());
      }
      buildUvs(vertices, 2, vertOffset, uvs, uvsOffset, 2, vertices.length / 2 - vertOffset, textureMatrix);
    } else {
      buildSimpleUvs(uvs, uvsOffset, 2, vertices.length / 2 - vertOffset);
    }
  });
  const out = options.out;
  if (out) {
    out.positions = new Float32Array(vertices);
    out.uvs = new Float32Array(uvs);
    out.indices = new Uint32Array(indices);
    return out;
  }
  const geometry = new MeshGeometry({
    positions: new Float32Array(vertices),
    uvs: new Float32Array(uvs),
    indices: new Uint32Array(indices)
  });
  return geometry;
}

// node_modules/pixi.js/lib/scene/mesh-perspective/utils/applyProjectiveTransformationToPlane.mjs
function applyProjectiveTransformationToPlane(width, height, geometry, transformationMatrix) {
  const buffer = geometry.buffers[0];
  const vertices = buffer.data;
  const { verticesX, verticesY } = geometry;
  const sizeX = width / (verticesX - 1);
  const sizeY = height / (verticesY - 1);
  let index = 0;
  const a00 = transformationMatrix[0];
  const a01 = transformationMatrix[1];
  const a02 = transformationMatrix[2];
  const a10 = transformationMatrix[3];
  const a11 = transformationMatrix[4];
  const a12 = transformationMatrix[5];
  const a20 = transformationMatrix[6];
  const a21 = transformationMatrix[7];
  const a22 = transformationMatrix[8];
  for (let i = 0; i < vertices.length; i += 2) {
    const x = index % verticesX * sizeX;
    const y = (index / verticesX | 0) * sizeY;
    const newX = a00 * x + a01 * y + a02;
    const newY = a10 * x + a11 * y + a12;
    const w = a20 * x + a21 * y + a22;
    vertices[i] = newX / w;
    vertices[i + 1] = newY / w;
    index++;
  }
  buffer.update();
}

// node_modules/pixi.js/lib/scene/mesh-perspective/utils/compute2DProjections.mjs
function computeAdjugate(out, matrix) {
  const a00 = matrix[0];
  const a01 = matrix[1];
  const a02 = matrix[2];
  const a10 = matrix[3];
  const a11 = matrix[4];
  const a12 = matrix[5];
  const a20 = matrix[6];
  const a21 = matrix[7];
  const a22 = matrix[8];
  out[0] = a11 * a22 - a12 * a21;
  out[1] = a02 * a21 - a01 * a22;
  out[2] = a01 * a12 - a02 * a11;
  out[3] = a12 * a20 - a10 * a22;
  out[4] = a00 * a22 - a02 * a20;
  out[5] = a02 * a10 - a00 * a12;
  out[6] = a10 * a21 - a11 * a20;
  out[7] = a01 * a20 - a00 * a21;
  out[8] = a00 * a11 - a01 * a10;
  return out;
}
function multiplyMatrix3x3(out, a, b) {
  const a00 = a[0];
  const a01 = a[1];
  const a02 = a[2];
  const a10 = a[3];
  const a11 = a[4];
  const a12 = a[5];
  const a20 = a[6];
  const a21 = a[7];
  const a22 = a[8];
  const b00 = b[0];
  const b01 = b[1];
  const b02 = b[2];
  const b10 = b[3];
  const b11 = b[4];
  const b12 = b[5];
  const b20 = b[6];
  const b21 = b[7];
  const b22 = b[8];
  out[0] = b00 * a00 + b01 * a10 + b02 * a20;
  out[1] = b00 * a01 + b01 * a11 + b02 * a21;
  out[2] = b00 * a02 + b01 * a12 + b02 * a22;
  out[3] = b10 * a00 + b11 * a10 + b12 * a20;
  out[4] = b10 * a01 + b11 * a11 + b12 * a21;
  out[5] = b10 * a02 + b11 * a12 + b12 * a22;
  out[6] = b20 * a00 + b21 * a10 + b22 * a20;
  out[7] = b20 * a01 + b21 * a11 + b22 * a21;
  out[8] = b20 * a02 + b21 * a12 + b22 * a22;
  return out;
}
function multiplyMatrixAndVector(out, m, v) {
  const x = v[0];
  const y = v[1];
  const z = v[2];
  out[0] = m[0] * x + m[1] * y + m[2] * z;
  out[1] = m[3] * x + m[4] * y + m[5] * z;
  out[2] = m[6] * x + m[7] * y + m[8] * z;
  return out;
}
var tempMatrix = [0, 0, 0, 0, 0, 0, 0, 0, 0];
var tempVec = [0, 0, 0];
var tempVec2 = [0, 0, 0];
function generateBasisToPointsMatrix(out, x1, y1, x2, y2, x3, y3, x4, y4) {
  const m = tempMatrix;
  m[0] = x1;
  m[1] = x2;
  m[2] = x3;
  m[3] = y1;
  m[4] = y2;
  m[5] = y3;
  m[6] = 1;
  m[7] = 1;
  m[8] = 1;
  const adjugateM = computeAdjugate(
    out,
    // reusing out as adjugateM is only used once
    m
  );
  tempVec2[0] = x4;
  tempVec2[1] = y4;
  tempVec2[2] = 1;
  const v = multiplyMatrixAndVector(
    tempVec,
    adjugateM,
    tempVec2
  );
  const diagonalMatrix = out;
  out[0] = v[0];
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = v[1];
  out[5] = 0;
  out[6] = 0;
  out[7] = 0;
  out[8] = v[2];
  return multiplyMatrix3x3(out, diagonalMatrix, m);
}
var tempSourceMatrix = [0, 0, 0, 0, 0, 0, 0, 0, 0];
var tempDestinationMatrix = [0, 0, 0, 0, 0, 0, 0, 0, 0];
function compute2DProjection(out, x1s, y1s, x1d, y1d, x2s, y2s, x2d, y2d, x3s, y3s, x3d, y3d, x4s, y4s, x4d, y4d) {
  const sourceMatrix = generateBasisToPointsMatrix(
    tempSourceMatrix,
    x1s,
    y1s,
    x2s,
    y2s,
    x3s,
    y3s,
    x4s,
    y4s
  );
  const destinationMatrix = generateBasisToPointsMatrix(
    tempDestinationMatrix,
    x1d,
    y1d,
    x2d,
    y2d,
    x3d,
    y3d,
    x4d,
    y4d
  );
  return multiplyMatrix3x3(
    out,
    computeAdjugate(sourceMatrix, sourceMatrix),
    destinationMatrix
  );
}

// node_modules/pixi.js/lib/scene/mesh-perspective/PerspectivePlaneGeometry.mjs
var PerspectivePlaneGeometry = class extends PlaneGeometry {
  /**
   * @param options - Options to be applied to MeshPlane
   * @param options.width - The width of the plane
   * @param options.height - The height of the plane
   * @param options.verticesX - The amount of vertices on the x axis
   * @param options.verticesY - The amount of vertices on the y axis
   */
  constructor(options) {
    super(options);
    this._projectionMatrix = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    const { width, height } = options;
    this.corners = [0, 0, width, 0, width, height, 0, height];
  }
  /**
   * Will set the corners of the quad to the given coordinates
   * Calculating the perspective so it looks correct!
   * @param x0 - x coordinate of the first corner
   * @param y0 - y coordinate of the first corner
   * @param x1 - x coordinate of the second corner
   * @param y1 - y coordinate of the second corner
   * @param x2 - x coordinate of the third corner
   * @param y2 - y coordinate of the third corner
   * @param x3 - x coordinate of the fourth corner
   * @param y3 - y coordinate of the fourth corner
   */
  setCorners(x0, y0, x1, y1, x2, y2, x3, y3) {
    const corners = this.corners;
    corners[0] = x0;
    corners[1] = y0;
    corners[2] = x1;
    corners[3] = y1;
    corners[4] = x2;
    corners[5] = y2;
    corners[6] = x3;
    corners[7] = y3;
    this.updateProjection();
  }
  /** Update the projection matrix based on the corners */
  updateProjection() {
    const { width, height } = this;
    const corners = this.corners;
    const projectionMatrix = compute2DProjection(
      this._projectionMatrix,
      0,
      0,
      // top-left source
      corners[0],
      corners[1],
      // top-left dest
      width,
      0,
      // top-right source
      corners[2],
      corners[3],
      // top-right dest
      width,
      height,
      // bottom-right source
      corners[4],
      corners[5],
      // bottom-right dest
      0,
      height,
      // bottom-left source
      corners[6],
      corners[7]
      // bottom-left dest
    );
    applyProjectiveTransformationToPlane(
      width,
      height,
      this,
      projectionMatrix
    );
  }
};

// node_modules/pixi.js/lib/scene/mesh-perspective/PerspectiveMesh.mjs
var _PerspectiveMesh = class _PerspectiveMesh2 extends Mesh {
  /**
   * @param options - Options to be applied to PerspectiveMesh
   */
  constructor(options) {
    options = { ..._PerspectiveMesh2.defaultOptions, ...options };
    const { texture, verticesX, verticesY, ...rest } = options;
    const planeGeometry = new PerspectivePlaneGeometry(definedProps({
      width: texture.width,
      height: texture.height,
      verticesX,
      verticesY
    }));
    super(definedProps({ ...rest, geometry: planeGeometry }));
    this._texture = texture;
    this.geometry.setCorners(
      options.x0,
      options.y0,
      options.x1,
      options.y1,
      options.x2,
      options.y2,
      options.x3,
      options.y3
    );
  }
  /** Update the geometry when the texture is updated */
  textureUpdated() {
    const geometry = this.geometry;
    if (!geometry)
      return;
    const { width, height } = this.texture;
    if (geometry.width !== width || geometry.height !== height) {
      geometry.width = width;
      geometry.height = height;
      geometry.updateProjection();
    }
  }
  set texture(value) {
    if (this._texture === value)
      return;
    super.texture = value;
    this.textureUpdated();
  }
  /** The texture that the mesh uses */
  get texture() {
    return this._texture;
  }
  /**
   * Set the corners of the quad to the given coordinates
   * The mesh will then calculate the perspective so it looks correct!
   * @param x0 - x coordinate of the first corner
   * @param y0 - y coordinate of the first corner
   * @param x1 - x coordinate of the second corner
   * @param y1 - y coordinate of the second corner
   * @param x2 - x coordinate of the third corner
   * @param y2 - y coordinate of the third corner
   * @param x3 - x coordinate of the fourth corner
   * @param y3 - y coordinate of the fourth corner
   */
  setCorners(x0, y0, x1, y1, x2, y2, x3, y3) {
    this.geometry.setCorners(x0, y0, x1, y1, x2, y2, x3, y3);
  }
};
_PerspectiveMesh.defaultOptions = {
  texture: Texture.WHITE,
  verticesX: 10,
  verticesY: 10,
  x0: 0,
  y0: 0,
  x1: 100,
  y1: 0,
  x2: 100,
  y2: 100,
  x3: 0,
  y3: 100
};
var PerspectiveMesh = _PerspectiveMesh;

// node_modules/pixi.js/lib/scene/mesh-plane/MeshPlane.mjs
var MeshPlane = class extends Mesh {
  /**
   * @param options - Options to be applied to MeshPlane
   */
  constructor(options) {
    const { texture, verticesX, verticesY, ...rest } = options;
    const planeGeometry = new PlaneGeometry(definedProps({
      width: texture.width,
      height: texture.height,
      verticesX,
      verticesY
    }));
    super(definedProps({ ...rest, geometry: planeGeometry, texture }));
    this.texture = texture;
    this.autoResize = true;
  }
  /**
   * Method used for overrides, to do something in case texture frame was changed.
   * Meshes based on plane can override it and change more details based on texture.
   */
  textureUpdated() {
    const geometry = this.geometry;
    const { width, height } = this.texture;
    if (this.autoResize && (geometry.width !== width || geometry.height !== height)) {
      geometry.width = width;
      geometry.height = height;
      geometry.build({});
    }
  }
  set texture(value) {
    var _a;
    (_a = this._texture) == null ? void 0 : _a.off("update", this.textureUpdated, this);
    super.texture = value;
    value.on("update", this.textureUpdated, this);
    this.textureUpdated();
  }
  /** The texture of the MeshPlane */
  get texture() {
    return this._texture;
  }
  /**
   * Destroys this sprite renderable and optionally its texture.
   * @param options - Options parameter. A boolean will act as if all options
   *  have been set to that value
   * @param {boolean} [options.texture=false] - Should it destroy the current texture of the renderable as well
   * @param {boolean} [options.textureSource=false] - Should it destroy the textureSource of the renderable as well
   */
  destroy(options) {
    this.texture.off("update", this.textureUpdated, this);
    super.destroy(options);
  }
};

// node_modules/pixi.js/lib/scene/mesh-simple/RopeGeometry.mjs
var _RopeGeometry = class _RopeGeometry2 extends MeshGeometry {
  /**
   * @param options - Options to be applied to rope geometry
   */
  constructor(options) {
    const { width, points, textureScale } = { ..._RopeGeometry2.defaultOptions, ...options };
    super({
      positions: new Float32Array(points.length * 4),
      uvs: new Float32Array(points.length * 4),
      indices: new Uint32Array((points.length - 1) * 6)
    });
    this.points = points;
    this._width = width;
    this.textureScale = textureScale;
    this._build();
  }
  /**
   * The width (i.e., thickness) of the rope.
   * @readonly
   */
  get width() {
    return this._width;
  }
  /** Refreshes Rope indices and uvs */
  _build() {
    const points = this.points;
    if (!points)
      return;
    const vertexBuffer = this.getBuffer("aPosition");
    const uvBuffer = this.getBuffer("aUV");
    const indexBuffer = this.getIndex();
    if (points.length < 1) {
      return;
    }
    if (vertexBuffer.data.length / 4 !== points.length) {
      vertexBuffer.data = new Float32Array(points.length * 4);
      uvBuffer.data = new Float32Array(points.length * 4);
      indexBuffer.data = new Uint16Array((points.length - 1) * 6);
    }
    const uvs = uvBuffer.data;
    const indices = indexBuffer.data;
    uvs[0] = 0;
    uvs[1] = 0;
    uvs[2] = 0;
    uvs[3] = 1;
    let amount = 0;
    let prev = points[0];
    const textureWidth = this._width * this.textureScale;
    const total = points.length;
    for (let i = 0; i < total; i++) {
      const index = i * 4;
      if (this.textureScale > 0) {
        const dx = prev.x - points[i].x;
        const dy = prev.y - points[i].y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        prev = points[i];
        amount += distance / textureWidth;
      } else {
        amount = i / (total - 1);
      }
      uvs[index] = amount;
      uvs[index + 1] = 0;
      uvs[index + 2] = amount;
      uvs[index + 3] = 1;
    }
    let indexCount = 0;
    for (let i = 0; i < total - 1; i++) {
      const index = i * 2;
      indices[indexCount++] = index;
      indices[indexCount++] = index + 1;
      indices[indexCount++] = index + 2;
      indices[indexCount++] = index + 2;
      indices[indexCount++] = index + 1;
      indices[indexCount++] = index + 3;
    }
    uvBuffer.update();
    indexBuffer.update();
    this.updateVertices();
  }
  /** refreshes vertices of Rope mesh */
  updateVertices() {
    const points = this.points;
    if (points.length < 1) {
      return;
    }
    let lastPoint = points[0];
    let nextPoint;
    let perpX = 0;
    let perpY = 0;
    const vertices = this.buffers[0].data;
    const total = points.length;
    const halfWidth = this.textureScale > 0 ? this.textureScale * this._width / 2 : this._width / 2;
    for (let i = 0; i < total; i++) {
      const point = points[i];
      const index = i * 4;
      if (i < points.length - 1) {
        nextPoint = points[i + 1];
      } else {
        nextPoint = point;
      }
      perpY = -(nextPoint.x - lastPoint.x);
      perpX = nextPoint.y - lastPoint.y;
      let ratio = (1 - i / (total - 1)) * 10;
      if (ratio > 1) {
        ratio = 1;
      }
      const perpLength = Math.sqrt(perpX * perpX + perpY * perpY);
      if (perpLength < 1e-6) {
        perpX = 0;
        perpY = 0;
      } else {
        perpX /= perpLength;
        perpY /= perpLength;
        perpX *= halfWidth;
        perpY *= halfWidth;
      }
      vertices[index] = point.x + perpX;
      vertices[index + 1] = point.y + perpY;
      vertices[index + 2] = point.x - perpX;
      vertices[index + 3] = point.y - perpY;
      lastPoint = point;
    }
    this.buffers[0].update();
  }
  /** Refreshes Rope indices and uvs */
  update() {
    if (this.textureScale > 0) {
      this._build();
    } else {
      this.updateVertices();
    }
  }
};
_RopeGeometry.defaultOptions = {
  /** The width (i.e., thickness) of the rope. */
  width: 200,
  /** An array of points that determine the rope. */
  points: [],
  /** Rope texture scale, if zero then the rope texture is stretched. */
  textureScale: 0
};
var RopeGeometry = _RopeGeometry;

// node_modules/pixi.js/lib/scene/mesh-simple/MeshRope.mjs
var _MeshRope = class _MeshRope2 extends Mesh {
  /**
   * Note: The wrap mode of the texture is set to REPEAT if `textureScale` is positive.
   * @param options
   * @param options.texture - The texture to use on the rope.
   * @param options.points - An array of {@link math.Point} objects to construct this rope.
   * @param {number} options.textureScale - Optional. Positive values scale rope texture
   * keeping its aspect ratio. You can reduce alpha channel artifacts by providing a larger texture
   * and downsampling here. If set to zero, texture will be stretched instead.
   */
  constructor(options) {
    const { texture, points, textureScale, ...rest } = { ..._MeshRope2.defaultOptions, ...options };
    const ropeGeometry = new RopeGeometry(definedProps({ width: texture.height, points, textureScale }));
    if (textureScale > 0) {
      texture.source.style.addressMode = "repeat";
    }
    super(definedProps({
      ...rest,
      texture,
      geometry: ropeGeometry
    }));
    this.autoUpdate = true;
    this.onRender = this._render;
  }
  _render() {
    const geometry = this.geometry;
    if (this.autoUpdate || geometry._width !== this.texture.height) {
      geometry._width = this.texture.height;
      geometry.update();
    }
  }
};
_MeshRope.defaultOptions = {
  textureScale: 0
};
var MeshRope = _MeshRope;

// node_modules/pixi.js/lib/scene/mesh-simple/MeshSimple.mjs
var MeshSimple = class extends Mesh {
  /**
   * @param options - Options to be used for construction
   */
  constructor(options) {
    const { texture, vertices, uvs, indices, topology, ...rest } = options;
    const geometry = new MeshGeometry(definedProps({
      positions: vertices,
      uvs,
      indices,
      topology
    }));
    super(definedProps({
      ...rest,
      texture,
      geometry
    }));
    this.autoUpdate = true;
    this.onRender = this._render;
  }
  /**
   * Collection of vertices data.
   * @type {Float32Array}
   */
  get vertices() {
    return this.geometry.getBuffer("aPosition").data;
  }
  set vertices(value) {
    this.geometry.getBuffer("aPosition").data = value;
  }
  _render() {
    if (this.autoUpdate) {
      this.geometry.getBuffer("aPosition").update();
    }
  }
};

// node_modules/pixi.js/lib/scene/mesh/shared/getTextureDefaultMatrix.mjs
function getTextureDefaultMatrix(texture, out) {
  const { width, height } = texture.frame;
  out.scale(1 / width, 1 / height);
  return out;
}

// node_modules/pixi.js/lib/scene/sprite-nine-slice/NineSliceSprite.mjs
var _NineSliceSprite = class _NineSliceSprite2 extends ViewContainer {
  /**
   * @param {scene.NineSliceSpriteOptions|Texture} options - Options to use
   * @param options.texture - The texture to use on the NineSliceSprite.
   * @param options.leftWidth - Width of the left vertical bar (A)
   * @param options.topHeight - Height of the top horizontal bar (C)
   * @param options.rightWidth - Width of the right vertical bar (B)
   * @param options.bottomHeight - Height of the bottom horizontal bar (D)
   * @param options.width - Width of the NineSliceSprite,
   * setting this will actually modify the vertices and not the UV's of this plane.
   * @param options.height - Height of the NineSliceSprite,
   * setting this will actually modify the vertices and not UV's of this plane.
   */
  constructor(options) {
    var _a, _b, _c, _d;
    if (options instanceof Texture) {
      options = { texture: options };
    }
    const {
      width,
      height,
      leftWidth,
      rightWidth,
      topHeight,
      bottomHeight,
      texture,
      roundPixels,
      ...rest
    } = options;
    super({
      label: "NineSliceSprite",
      ...rest
    });
    this.renderPipeId = "nineSliceSprite";
    this.batched = true;
    this._didSpriteUpdate = true;
    this._leftWidth = leftWidth ?? ((_a = texture == null ? void 0 : texture.defaultBorders) == null ? void 0 : _a.left) ?? NineSliceGeometry.defaultOptions.leftWidth;
    this._topHeight = topHeight ?? ((_b = texture == null ? void 0 : texture.defaultBorders) == null ? void 0 : _b.top) ?? NineSliceGeometry.defaultOptions.topHeight;
    this._rightWidth = rightWidth ?? ((_c = texture == null ? void 0 : texture.defaultBorders) == null ? void 0 : _c.right) ?? NineSliceGeometry.defaultOptions.rightWidth;
    this._bottomHeight = bottomHeight ?? ((_d = texture == null ? void 0 : texture.defaultBorders) == null ? void 0 : _d.bottom) ?? NineSliceGeometry.defaultOptions.bottomHeight;
    this.bounds.maxX = this._width = width ?? texture.width ?? NineSliceGeometry.defaultOptions.width;
    this.bounds.maxY = this._height = height ?? texture.height ?? NineSliceGeometry.defaultOptions.height;
    this.allowChildren = false;
    this.texture = texture ?? _NineSliceSprite2.defaultOptions.texture;
    this.roundPixels = roundPixels ?? false;
  }
  /** The local bounds of the view. */
  get bounds() {
    return this._bounds;
  }
  /** The width of the NineSliceSprite, setting this will actually modify the vertices and UV's of this plane. */
  get width() {
    return this._width;
  }
  set width(value) {
    this.bounds.maxX = this._width = value;
    this.onViewUpdate();
  }
  /** The height of the NineSliceSprite, setting this will actually modify the vertices and UV's of this plane. */
  get height() {
    return this._height;
  }
  set height(value) {
    this.bounds.maxY = this._height = value;
    this.onViewUpdate();
  }
  /**
   * Sets the size of the NiceSliceSprite to the specified width and height.
   * setting this will actually modify the vertices and UV's of this plane
   * This is faster than setting the width and height separately.
   * @param value - This can be either a number or a [Size]{@link Size} object.
   * @param height - The height to set. Defaults to the value of `width` if not provided.
   */
  setSize(value, height) {
    if (typeof value === "object") {
      height = value.height ?? value.width;
      value = value.width;
    }
    this.bounds.maxX = this._width = value;
    this.bounds.maxY = this._height = height ?? value;
    this.onViewUpdate();
  }
  /**
   * Retrieves the size of the NineSliceSprite as a [Size]{@link Size} object.
   * This is faster than get the width and height separately.
   * @param out - Optional object to store the size in.
   * @returns - The size of the NineSliceSprite.
   */
  getSize(out) {
    out || (out = {});
    out.width = this._width;
    out.height = this._height;
    return out;
  }
  /** The width of the left column (a) of the NineSliceSprite. */
  get leftWidth() {
    return this._leftWidth;
  }
  set leftWidth(value) {
    this._leftWidth = value;
    this.onViewUpdate();
  }
  /** The width of the right column (b) of the NineSliceSprite. */
  get topHeight() {
    return this._topHeight;
  }
  set topHeight(value) {
    this._topHeight = value;
    this.onViewUpdate();
  }
  /** The width of the right column (b) of the NineSliceSprite. */
  get rightWidth() {
    return this._rightWidth;
  }
  set rightWidth(value) {
    this._rightWidth = value;
    this.onViewUpdate();
  }
  /** The width of the right column (b) of the NineSliceSprite. */
  get bottomHeight() {
    return this._bottomHeight;
  }
  set bottomHeight(value) {
    this._bottomHeight = value;
    this.onViewUpdate();
  }
  /** The texture that the NineSliceSprite is using. */
  get texture() {
    return this._texture;
  }
  set texture(value) {
    value || (value = Texture.EMPTY);
    const currentTexture = this._texture;
    if (currentTexture === value)
      return;
    if (currentTexture && currentTexture.dynamic)
      currentTexture.off("update", this.onViewUpdate, this);
    if (value.dynamic)
      value.on("update", this.onViewUpdate, this);
    this._texture = value;
    this.onViewUpdate();
  }
  /** The original width of the texture */
  get originalWidth() {
    return this._texture.width;
  }
  /** The original height of the texture */
  get originalHeight() {
    return this._texture.height;
  }
  onViewUpdate() {
    this._didViewChangeTick++;
    this._didSpriteUpdate = true;
    if (this.didViewUpdate)
      return;
    this.didViewUpdate = true;
    const renderGroup = this.renderGroup || this.parentRenderGroup;
    if (renderGroup) {
      renderGroup.onChildViewUpdate(this);
    }
  }
  /**
   * Adds the bounds of this object to the bounds object.
   * @param bounds - The output bounds object.
   */
  addBounds(bounds) {
    const _bounds = this.bounds;
    bounds.addFrame(_bounds.minX, _bounds.minY, _bounds.maxX, _bounds.maxY);
  }
  /**
   * Destroys this sprite renderable and optionally its texture.
   * @param options - Options parameter. A boolean will act as if all options
   *  have been set to that value
   * @param {boolean} [options.texture=false] - Should it destroy the current texture of the renderable as well
   * @param {boolean} [options.textureSource=false] - Should it destroy the textureSource of the renderable as well
   */
  destroy(options) {
    super.destroy(options);
    const destroyTexture = typeof options === "boolean" ? options : options == null ? void 0 : options.texture;
    if (destroyTexture) {
      const destroyTextureSource = typeof options === "boolean" ? options : options == null ? void 0 : options.textureSource;
      this._texture.destroy(destroyTextureSource);
    }
    this._texture = null;
  }
};
_NineSliceSprite.defaultOptions = {
  /** @default Texture.EMPTY */
  texture: Texture.EMPTY
};
var NineSliceSprite = _NineSliceSprite;
var NineSlicePlane = class extends NineSliceSprite {
  constructor(...args) {
    let options = args[0];
    if (options instanceof Texture) {
      deprecation(v8_0_0, "NineSlicePlane now uses the options object {texture, leftWidth, rightWidth, topHeight, bottomHeight}");
      options = {
        texture: options,
        leftWidth: args[1],
        topHeight: args[2],
        rightWidth: args[3],
        bottomHeight: args[4]
      };
    }
    deprecation(v8_0_0, "NineSlicePlane is deprecated. Use NineSliceSprite instead.");
    super(options);
  }
};

// node_modules/pixi.js/lib/scene/text/utils/ensureTextStyle.mjs
function ensureTextStyle(renderMode, style) {
  if (style instanceof TextStyle || style instanceof HTMLTextStyle) {
    return style;
  }
  return renderMode === "html" ? new HTMLTextStyle(style) : new TextStyle(style);
}

// node_modules/pixi.js/lib/utils/logging/logDebugTexture.mjs
async function logDebugTexture(texture, renderer, size = 200) {
  const base64 = await renderer.extract.base64(texture);
  await renderer.encoder.commandFinished;
  const width = size;
  console.log(`logging texture ${texture.source.width}px ${texture.source.height}px`);
  const style = [
    "font-size: 1px;",
    `padding: ${width}px ${300}px;`,
    `background: url(${base64}) no-repeat;`,
    "background-size: contain;"
  ].join(" ");
  console.log("%c ", style);
}

// node_modules/pixi.js/lib/utils/logging/logScene.mjs
var colors = [
  "#000080",
  // Navy Blue
  "#228B22",
  // Forest Green
  "#8B0000",
  // Dark Red
  "#4169E1",
  // Royal Blue
  "#008080",
  // Teal
  "#800000",
  // Maroon
  "#9400D3",
  // Dark Violet
  "#FF8C00",
  // Dark Orange
  "#556B2F",
  // Olive Green
  "#8B008B"
  // Dark Magenta
];
var colorTick = 0;
function logScene(container, depth = 0, data = { color: "#000000" }) {
  if (container.renderGroup) {
    data.color = colors[colorTick++];
  }
  let spaces = "";
  for (let i = 0; i < depth; i++) {
    spaces += "    ";
  }
  let label = container.label;
  if (!label && container instanceof Sprite) {
    label = `sprite:${container.texture.label}`;
  }
  let output = `%c ${spaces}|- ${label} (worldX:${container.worldTransform.tx}, relativeRenderX:${container.relativeGroupTransform.tx}, renderX:${container.groupTransform.tx}, localX:${container.x})`;
  if (container.renderGroup) {
    output += " (RenderGroup)";
  }
  if (container.filters) {
    output += "(*filters)";
  }
  console.log(output, `color:${data.color}; font-weight:bold;`);
  depth++;
  for (let i = 0; i < container.children.length; i++) {
    const child = container.children[i];
    logScene(child, depth, { ...data });
  }
}
function logRenderGroupScene(renderGroup, depth = 0, data = { index: 0, color: "#000000" }) {
  let spaces = "";
  for (let i = 0; i < depth; i++) {
    spaces += "    ";
  }
  const output = `%c ${spaces}- ${data.index}: ${renderGroup.root.label} worldX:${renderGroup.worldTransform.tx}`;
  console.log(output, `color:${data.color}; font-weight:bold;`);
  depth++;
  for (let i = 0; i < renderGroup.renderGroupChildren.length; i++) {
    const child = renderGroup.renderGroupChildren[i];
    logRenderGroupScene(child, depth, { ...data, index: i });
  }
}

// node_modules/pixi.js/lib/index.mjs
var import_earcut = __toESM(require_earcut(), 1);
extensions.add(browserExt, webworkerExt);

export {
  browserExt,
  webworkerExt,
  blendTemplateFrag,
  blendTemplateVert,
  blendTemplate,
  BlendModeFilter,
  hslgl,
  hslgpu,
  ColorBlend,
  ColorBurnBlend,
  ColorDodgeBlend,
  DarkenBlend,
  DifferenceBlend,
  DivideBlend,
  ExclusionBlend,
  HardLightBlend,
  HardMixBlend,
  LightenBlend,
  LinearBurnBlend,
  LinearDodgeBlend,
  LinearLightBlend,
  LuminosityBlend,
  NegationBlend,
  OverlayBlend,
  PinLightBlend,
  SaturationBlend,
  SoftLightBlend,
  SubtractBlend,
  VividLightBlend,
  isWebGLSupported,
  isWebGPUSupported,
  autoDetectRenderer,
  Application,
  BitmapFont,
  bitmapFontTextParser,
  bitmapFontXMLParser,
  bitmapFontXMLStringParser,
  bitmapFontCachePlugin,
  loadBitmapFont,
  BackgroundLoader,
  cacheTextureArray,
  testImageFormat,
  detectAvif,
  detectDefaults,
  testVideoFormat,
  detectMp4,
  detectOgv,
  detectWebm,
  detectWebp,
  Loader,
  checkDataUrl,
  checkExtension,
  loadJson,
  loadTxt,
  getFontFamilyName,
  loadWebFont,
  getResolutionOfUrl,
  createTexture,
  loadSvg,
  WorkerManager,
  loadImageBitmap,
  loadTextures,
  crossOrigin,
  preloadVideo,
  determineCrossOrigin,
  loadVideoTextures,
  resolveTextureUrl,
  resolveJsonUrl,
  AssetsClass,
  Assets,
  detectBasis,
  CompressedSource,
  getSupportedGlCompressedTextureFormats,
  getSupportedGPUCompressedTextureFormats,
  getSupportedCompressedTextureFormats,
  nonCompressedFormats,
  getSupportedTextureFormats,
  basisTranscoderUrls,
  setBasisTranscoderPath,
  loadBasisOnWorker,
  loadBasis,
  createLevelBuffers,
  gpuFormatToBasisTranscoderFormat,
  DXGI_FORMAT,
  D3D10_RESOURCE_DIMENSION,
  D3DFMT,
  FOURCC_TO_TEXTURE_FORMAT,
  DXGI_TO_TEXTURE_FORMAT,
  DDS,
  TEXTURE_FORMAT_BLOCK_SIZE,
  parseDDS,
  loadDDS,
  GL_INTERNAL_FORMAT,
  KTX,
  parseKTX,
  loadKTX,
  ktxTranscoderUrls,
  setKTXTranscoderPath,
  loadKTX2onWorker,
  loadKTX2,
  convertFormatIfRequired,
  createLevelBuffersFromKTX,
  glFormatToGPUFormat,
  vkFormatToGPUFormat,
  getTextureFormatFromKTXTexture,
  gpuFormatToKTXBasisTranscoderFormat,
  validFormats,
  resolveCompressedTextureUrl,
  detectCompressed,
  Culler,
  CullerPlugin,
  WebWorkerAdapter,
  vertex,
  fragment,
  source,
  AlphaFilter,
  GAUSSIAN_VALUES,
  generateBlurFragSource,
  generateBlurVertSource,
  generateBlurGlProgram,
  source2,
  generateBlurProgram,
  BlurFilterPass,
  BlurFilter,
  fragment2,
  source3,
  ColorMatrixFilter,
  fragment3,
  vertex2,
  source4,
  DisplacementFilter,
  fragment4,
  source5,
  NoiseFilter,
  hsl,
  pointInTriangle,
  Triangle,
  PrepareBase,
  Mesh,
  AnimatedSprite,
  Transform,
  TilingSprite,
  AbstractText,
  ensureOptions,
  Text,
  PrepareQueue,
  BitmapText,
  HTMLText,
  PrepareUpload,
  PrepareSystem,
  generateGPULayout,
  generateLayout,
  formatShader,
  ScissorMask,
  migrateFragmentFromV7toV8,
  mapSize,
  GpuReadBuffer,
  DRAW_MODES,
  viewportFromFrame,
  MSAA_QUALITY,
  DEPRECATED_WRAP_MODES,
  WRAP_MODES,
  DEPRECATED_SCALE_MODES,
  SCALE_MODES,
  TextureUvs,
  generateUID,
  parseFunctionBody,
  RenderContainer,
  updateLocalTransform,
  updateWorldTransform,
  buildGeometryFromPath,
  applyProjectiveTransformationToPlane,
  compute2DProjection,
  PerspectivePlaneGeometry,
  PerspectiveMesh,
  MeshPlane,
  RopeGeometry,
  MeshRope,
  MeshSimple,
  getTextureDefaultMatrix,
  NineSliceSprite,
  NineSlicePlane,
  ensureTextStyle,
  logDebugTexture,
  logScene,
  logRenderGroupScene,
  import_earcut
};
//# sourceMappingURL=chunk-ORRGNBIM.js.map
