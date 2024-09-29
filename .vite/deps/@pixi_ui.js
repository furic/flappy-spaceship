import {
  NineSliceSprite,
  Text
} from "./chunk-ORRGNBIM.js";
import "./chunk-5GWNOAMS.js";
import "./chunk-BE6YIHCX.js";
import "./chunk-VJASXKLJ.js";
import {
  require_dist
} from "./chunk-RHSISHZD.js";
import {
  isMobile
} from "./chunk-CBS7UKQU.js";
import {
  Graphics
} from "./chunk-P3YV5OXK.js";
import "./chunk-LQXUUTA4.js";
import {
  Container,
  DEG_TO_RAD,
  ObservablePoint,
  Point,
  Rectangle,
  Sprite,
  Texture,
  Ticker
} from "./chunk-IMN33NWI.js";
import {
  __toESM
} from "./chunk-5WRI5ZAA.js";

// node_modules/@pixi/ui/lib/ButtonEvents.mjs
var import_typed_signals = __toESM(require_dist(), 1);
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
var ButtonEvents = class {
  constructor() {
    __publicField(this, "_isMouseIn");
    __publicField(this, "_isDown");
    __publicField(this, "onDown");
    __publicField(this, "onUp");
    __publicField(this, "onUpOut");
    __publicField(this, "onOut");
    __publicField(this, "onPress");
    __publicField(this, "onHover");
    this.onPress = new import_typed_signals.Signal();
    this.onDown = new import_typed_signals.Signal();
    this.onUp = new import_typed_signals.Signal();
    this.onHover = new import_typed_signals.Signal();
    this.onOut = new import_typed_signals.Signal();
    this.onUpOut = new import_typed_signals.Signal();
  }
  connectEvents(view) {
    if (isMobile.any) {
      view.on("pointerdown", this.processDown, this);
      view.on("pointerup", this.processUp, this);
      view.on("pointerupoutside", this.processUpOut, this);
      view.on("pointerout", this.processOut, this);
      view.on("pointertap", this.processPress, this);
      view.on("pointerover", this.processOver, this);
    } else {
      view.on("mousedown", this.processDown, this);
      view.on("mouseup", this.processUp, this);
      view.on("mouseupoutside", this.processUpOut, this);
      view.on("mouseout", this.processOut, this);
      view.on("click", this.processPress, this);
      view.on("mouseover", this.processOver, this);
    }
  }
  disconnectEvents(view) {
    if (isMobile.any) {
      view.off("pointerdown", this.processDown, this);
      view.off("pointerup", this.processUp, this);
      view.off("pointerupoutside", this.processUpOut, this);
      view.off("pointerout", this.processOut, this);
      view.off("pointertap", this.processPress, this);
      view.off("pointerover", this.processOver, this);
    } else {
      view.off("mousedown", this.processDown, this);
      view.off("mouseup", this.processUp, this);
      view.off("mouseupoutside", this.processUpOut, this);
      view.off("mouseout", this.processOut, this);
      view.off("click", this.processPress, this);
      view.off("mouseover", this.processOver, this);
    }
  }
  processDown(e) {
    this._isDown = true;
    this.onDown.emit(this, e);
    this.down(e);
  }
  processUp(e) {
    if (this._isDown) {
      this.onUp.emit(this, e);
      this.up(e);
    }
    this._isDown = false;
  }
  processUpOut(e) {
    if (this._isDown) {
      this.onUp.emit(this, e);
      this.onUpOut.emit(this, e);
      this.up(e);
      this.upOut(e);
    }
    this._isDown = false;
  }
  processOut(e) {
    if (this._isMouseIn) {
      this._isMouseIn = false;
      this.onOut.emit(this, e);
      this.out(e);
    }
  }
  processPress(e) {
    this._isDown = false;
    this.onPress.emit(this, e);
    this.press(e);
  }
  processOver(e) {
    if (isMobile.any)
      return;
    this._isMouseIn = true;
    this.onHover.emit(this, e);
    this.hover(e);
  }
  /**
   * Method called when the button pressed.
   * To be overridden.
   * @param {FederatedPointerEvent} _e - event data
   */
  down(_e) {
  }
  /**
   * Method called when the button is up.
   * To be overridden.
   * @param {FederatedPointerEvent} _e - event data
   */
  up(_e) {
  }
  /**
   * Method called when the up event happens outside of the button,
   * after the down event happened inside the button boundaries.
   * To be overridden.
   * @param {FederatedPointerEvent} _e - event data
   */
  upOut(_e) {
  }
  /**
   * Method called when the mouse leaves the button.
   * To be overridden.
   * @param {FederatedPointerEvent} _e - event data
   */
  out(_e) {
  }
  /**
   * Method called when the mouse press down the button.
   * To be overridden.
   * @param {FederatedPointerEvent} _e - event data
   */
  press(_e) {
  }
  /**
   * Method called when the mouse hovers the button.
   * To be overridden.
   * Fired only if device is not mobile.
   * @param {FederatedPointerEvent} _e - event data
   */
  hover(_e) {
  }
  /** Getter that returns if the button is down. */
  get isDown() {
    return this._isDown;
  }
};

// node_modules/@pixi/ui/lib/Button.mjs
var __defProp2 = Object.defineProperty;
var __defNormalProp2 = (obj, key, value) => key in obj ? __defProp2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField2 = (obj, key, value) => {
  __defNormalProp2(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
var Button = class extends ButtonEvents {
  /**
   * Turns a given container-based view into a button by adding all button events.
   * @param {Container} view - instance of container, to be turned into button.
   */
  constructor(view) {
    super();
    __publicField2(this, "_view");
    if (view) {
      this.view = view;
      this.enabled = true;
    }
  }
  /** Set button view, that all the interaction events are applied to. */
  set view(view) {
    const wasItInitiated = !!this._view;
    if (wasItInitiated)
      this.disconnectEvents(this._view);
    this._view = view;
    this.connectEvents(this._view);
  }
  /** Get button view, thar all the interaction events are applied to. */
  get view() {
    return this._view;
  }
  /**
   * Switcher, which prevents all button events from firing if off.
   * @param {boolean} enabled
   */
  set enabled(enabled) {
    if (!this.view) {
      console.error("Button view is not set. Please set it before enabling the button.");
      return;
    }
    this.view.eventMode = enabled ? "static" : "auto";
    this.view.cursor = enabled ? "pointer" : "default";
    if (!enabled && this.isDown) {
      this.processUp();
    }
  }
  /** Getter that returns button state. */
  get enabled() {
    return this.view.eventMode === "static";
  }
};
var ButtonContainer = class extends Container {
  constructor(view) {
    super();
    __publicField2(this, "button");
    __publicField2(this, "onDown");
    __publicField2(this, "onUp");
    __publicField2(this, "onUpOut");
    __publicField2(this, "onOut");
    __publicField2(this, "onPress");
    __publicField2(this, "onHover");
    this.button = new Button(this);
    this.button.enabled = true;
    if (view) {
      this.addChild(view);
    }
    this.onPress = this.button.onPress;
    this.onDown = this.button.onDown;
    this.onUp = this.button.onUp;
    this.onHover = this.button.onHover;
    this.onOut = this.button.onOut;
    this.onUpOut = this.button.onUpOut;
  }
  set enabled(enabled) {
    this.button.enabled = enabled;
  }
  get enabled() {
    return this.button.enabled;
  }
};

// node_modules/@pixi/ui/lib/CheckBox.mjs
var import_typed_signals3 = __toESM(require_dist(), 1);

// node_modules/@pixi/ui/lib/Switcher.mjs
var import_typed_signals2 = __toESM(require_dist(), 1);

// node_modules/@pixi/ui/lib/utils/helpers/view.mjs
function getView(view) {
  if (typeof view === "string") {
    return Sprite.from(view);
  }
  return view;
}
function getSpriteView(view) {
  if (typeof view === "string") {
    return Sprite.from(view);
  }
  return view;
}

// node_modules/@pixi/ui/lib/Switcher.mjs
var __defProp3 = Object.defineProperty;
var __defNormalProp3 = (obj, key, value) => key in obj ? __defProp3(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField3 = (obj, key, value) => {
  __defNormalProp3(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
var Switcher = class extends Container {
  /**
   * @param {Array<Container | string>} views - Array of views or textures that will be switching.
   * @param triggerEvents - Button events, to switch views (can be one event or an array of events).
   * @param activeViewID - The id of the view, visible by default.
   */
  constructor(views, triggerEvents, activeViewID) {
    super();
    __publicField3(this, "_triggerEvents", /* @__PURE__ */ new Set(["onPress"]));
    __publicField3(this, "innerView");
    __publicField3(this, "_active");
    __publicField3(this, "onChange");
    this.innerView = new Container();
    this.addChild(this.innerView);
    this.onChange = new import_typed_signals2.Signal();
    if (views)
      this.views = views;
    if (triggerEvents)
      this.triggerEvents = triggerEvents;
    if (activeViewID && this.views.length > 0)
      this.active = activeViewID;
    this.setInteractionEvents();
  }
  setInteractionEvents() {
    this.innerView.eventMode = "static";
    this.innerView.on("pointerdown", () => this.handleEvents("onDown"));
    this.innerView.on("pointerup", () => this.handleEvents("onUp"));
    this.innerView.on("pointerupoutside", () => this.handleEvents("onUpOut"));
    this.innerView.on("pointerout", () => this.handleEvents("onOut"));
    this.innerView.on("pointertap", () => this.handleEvents("onPress"));
    this.innerView.on("pointerover", () => this.handleEvents("onHover"));
  }
  handleEvents(event) {
    if (this._triggerEvents.has(event)) {
      this.switch();
    }
  }
  /** Returns the active view. */
  get activeView() {
    if (this.views && this.views[this.active]) {
      return this.views[this.active];
    }
    return void 0;
  }
  /** Sets the list of instances for switching. */
  set views(views) {
    this.innerView.removeChildren();
    views.forEach((stateView) => this.add(stateView));
  }
  /** Returns all the switchable views */
  get views() {
    return this.innerView.children;
  }
  /**
   * Adds view instance to a switching list.
   * @param view
   */
  add(view) {
    const viewInstance = getView(view);
    this.innerView.addChild(viewInstance);
    viewInstance.visible = false;
    if (this.views.length === 1) {
      this.active = 0;
    }
  }
  /**
   * Removes view instance from a switching list by id.
   * @param id - id of the view to remove.
   */
  remove(id) {
    if (this.views[id]) {
      this.innerView.removeChild(this.views[id]);
    }
  }
  /**
   * Sets a list of events that will make a switcher switch to the next view.
   * @param {ButtonEvent | ButtonEvent[]} triggerEvents - Button events,
   * to switch views (can be one event or an array of events).
   */
  set triggerEvents(triggerEvents) {
    this._triggerEvents = new Set(Array.isArray(triggerEvents) ? triggerEvents : [triggerEvents]);
  }
  /** Returns a list of events that will make a switcher switch to the next view. */
  get triggerEvents() {
    return Array.from(this._triggerEvents);
  }
  /**
   * Show a view by id, or to next one by order, if no ID provided.
   * @param {number} id - optional id of the view to show. If not set, will switch to the next view.
   */
  switch(id) {
    if (id !== void 0 && id === this.active)
      return;
    const exID = this.active;
    this.forceSwitch(id);
    if (exID !== this.active) {
      const res = this.views.length > 2 ? this.active : this.active === 1;
      this.onChange.emit(res);
    }
  }
  /**
   * Switches a view to a given one without triggering the onChange event.
   * @param {number} id - optional id of the view to show. If not set, will switch to the next view.
   */
  forceSwitch(id) {
    if (id !== void 0 && id === this.active)
      return;
    if (this.activeView) {
      this.activeView.visible = false;
    }
    if (id !== void 0 && !this.views[id]) {
      throw new Error(`View with id ${id} does not exist.`);
    }
    this._active = id !== void 0 ? id : this.nextActive;
    if (this._active === void 0) {
      return;
    }
    this.views[this.active].visible = true;
  }
  /** Returns the id of the next view in order. Or undefined, if order is empty. */
  get nextActive() {
    if (this.views.length === 0)
      return void 0;
    return this.active < this.views.length - 1 ? this.active + 1 : 0;
  }
  /** Sets the id of the visible(active) view and shows to it. */
  set active(id) {
    this.switch(id);
  }
  /** Gets the id of the visible(active) view. */
  get active() {
    return this._active;
  }
};

// node_modules/@pixi/ui/lib/utils/helpers/cleanup.mjs
function cleanup(element) {
  if (!element)
    return;
  if (element.parent) {
    element.parent.removeChild(element);
  }
  element.destroy();
  element = null;
}

// node_modules/@pixi/ui/lib/CheckBox.mjs
var __defProp4 = Object.defineProperty;
var __defNormalProp4 = (obj, key, value) => key in obj ? __defProp4(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField4 = (obj, key, value) => {
  __defNormalProp4(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
var CheckBox = class extends Switcher {
  constructor(options) {
    super();
    __publicField4(this, "labelText");
    __publicField4(this, "onCheck");
    __publicField4(this, "_style");
    __publicField4(this, "_textClass");
    this._textClass = options.TextClass ?? Text;
    this.text = options.text;
    this.style = options.style;
    this.checked = options.checked;
    this.triggerEvents = ["onPress"];
    this.innerView.cursor = "pointer";
    this.onCheck = new import_typed_signals3.Signal();
    this.onChange.connect(() => this.onCheck.emit(this.checked));
  }
  addLabel(text, style) {
    var _a;
    if (!text)
      return;
    this.labelText = new this._textClass({
      text: text ?? "",
      style: style ?? ((_a = this._style) == null ? void 0 : _a.text)
    });
    this.addChild(this.labelText);
    this.labelText.cursor = "pointer";
    this.labelText.eventMode = "static";
    this.labelText.on("pointertap", () => this.checked = !this.checked);
  }
  /** Setter, which sets a checkbox text. */
  set text(text) {
    if (!text) {
      cleanup(this.labelText);
      return;
    }
    this.labelText ? this.labelText.text = text : this.addLabel(text);
  }
  /** Getter, which returns a checkbox text. */
  get text() {
    var _a;
    return ((_a = this.labelText) == null ? void 0 : _a.text) ?? "";
  }
  /** Setter, which sets a checkbox style settings. */
  set style(style) {
    var _a, _b;
    const wasChecked = this.checked;
    this._style = style;
    const { unchecked, checked } = style;
    const uncheckedView = getView(unchecked);
    const checkedView = getView(checked);
    this.views = [uncheckedView, checkedView];
    if (wasChecked) {
      checkedView.visible = true;
      this.active = 1;
    } else {
      uncheckedView.visible = true;
    }
    if (this.labelText) {
      checkedView.visible = true;
      this.active = 1;
      if (style.text) {
        this.labelText.style = style.text;
      }
      this.labelText.x = uncheckedView.width + 10 + (((_a = style.textOffset) == null ? void 0 : _a.x) ?? 0);
      this.labelText.y = (uncheckedView.height - this.labelText.height) / 2 + (((_b = style.textOffset) == null ? void 0 : _b.y) ?? 0);
    } else {
      uncheckedView.visible = true;
    }
  }
  /** Getter, which returns a checkbox style settings. */
  get style() {
    return this._style;
  }
  /** Getter, which returns a checkbox state. */
  get checked() {
    return this.active === 1;
  }
  /** Setter, which sets a checkbox state. */
  set checked(checked) {
    this.switch(checked ? 1 : 0);
  }
  /**
   * Setter, that sets a checkbox state without emitting a signal.
   * @param checked
   */
  forceCheck(checked) {
    this.forceSwitch(checked ? 1 : 0);
  }
};

// node_modules/@pixi/ui/lib/CircularProgressBar.mjs
var __defProp5 = Object.defineProperty;
var __defNormalProp5 = (obj, key, value) => key in obj ? __defProp5(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField5 = (obj, key, value) => {
  __defNormalProp5(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
var CircularProgressBar = class extends Container {
  /**
   * Creates a Circular ProgressBar.
   * @param { number } options - Options object to use.
   * @param { ColorSource } options.backgroundColor - Background color.
   * @param { ColorSource } options.fillColor - Fill color.
   * @param { number } options.lineWidth - Line width.
   * @param { number } options.radius - Radius.
   * @param { number } options.value - Progress value.
   * @param { number } options.backgroundAlpha - Background alpha.
   * @param { number } options.fillAlpha - Fill alpha.
   * @param { 'butt' | 'round' | 'square' } options.cap - Line cap.
   */
  constructor(options) {
    super();
    __publicField5(this, "_progress", 0);
    __publicField5(this, "options");
    __publicField5(this, "bgCircle", new Graphics());
    __publicField5(this, "fillCircle", new Graphics());
    __publicField5(this, "innerView", new Container());
    this.options = options;
    this.addChild(this.innerView);
    this.innerView.addChild(this.bgCircle, this.fillCircle);
    this.addBackground();
    if (options.value) {
      this.progress = options.value;
    }
  }
  addBackground() {
    const {
      backgroundColor,
      lineWidth,
      radius,
      backgroundAlpha
    } = this.options;
    let alpha = 1;
    if (backgroundAlpha > 0) {
      alpha = backgroundAlpha;
    }
    if (backgroundColor === void 0) {
      alpha = 1e-6;
    }
    this.bgCircle.circle(0, 0, radius).stroke({
      width: lineWidth,
      color: backgroundColor,
      alpha
    });
  }
  /**
   * Set progress value.
   * @param { number } value - Progress value.
   */
  set progress(value) {
    if (value > 100) {
      value = 100;
    }
    if (value < 0) {
      value = 0;
    }
    this._progress = value;
    const {
      lineWidth,
      radius,
      fillColor,
      fillAlpha,
      cap
    } = this.options;
    if (value === 0 && fillAlpha === 0) {
      this.fillCircle.clear();
      return;
    }
    const startAngle = 0;
    const endAngle = 360 / 100 * value;
    this.fillCircle.clear().arc(0, 0, radius, (0 - 90 + startAngle) * DEG_TO_RAD, (0 - 90 + startAngle + endAngle) * DEG_TO_RAD).stroke({
      width: lineWidth,
      color: fillColor,
      cap,
      alpha: fillAlpha
    });
  }
  /**
   * Current progress value.
   * @returns { number } - Progress value.
   */
  get progress() {
    return this._progress;
  }
};

// node_modules/@pixi/ui/lib/DoubleSlider.mjs
var import_typed_signals4 = __toESM(require_dist(), 1);

// node_modules/@pixi/ui/lib/ProgressBar.mjs
var __defProp6 = Object.defineProperty;
var __defNormalProp6 = (obj, key, value) => key in obj ? __defProp6(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField6 = (obj, key, value) => {
  __defNormalProp6(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
var ProgressBar = class extends Container {
  /**
   * Creates a ProgressBar.
   * @param options - Options.
   * @param { Sprite | Graphics | string } options.bg - Background of the ProgressBar.
   * @param { Sprite | Graphics | string } options.fill - Fill of the ProgressBar.
   * @param { FillPaddings } options.fillPaddings - Fill offsets.
   * @param { number } options.fillPaddings.top - Fill top offset.
   * @param { number } options.fillPaddings.right - Fill right offset.
   * @param { number } options.fillPaddings.bottom - Fill bottom offset.
   * @param { number } options.fillPaddings.left - Fill left offset.
   * @param { NineSliceSprite } options.nineSliceSprite - NineSliceSprite values for bg and fill.
   * @param { Array } options.nineSliceSprite.bg - NineSliceSprite config for bg ([number, number, number, number]).
   * @param { Array } options.nineSliceSprite.fill - NineSliceSprite config fill ([number, number, number, number]).
   * @param { number } options.progress - Initial progress value.
   */
  constructor(options) {
    super();
    __publicField6(this, "bg");
    __publicField6(this, "fill");
    __publicField6(this, "fillMask");
    __publicField6(this, "progressStart", 0);
    __publicField6(this, "_progress", 0);
    __publicField6(this, "options");
    __publicField6(this, "innerView");
    __publicField6(this, "_view");
    this.options = options;
    this.innerView = new Container();
    this.addChild(this.innerView);
    if ((options == null ? void 0 : options.bg) && (options == null ? void 0 : options.fill)) {
      this.init(options);
    }
  }
  /**
   * Initialize ProgressBar.
   * @param root0
   * @param root0.bg - Background texture.
   * @param root0.fill - Fill texture.
   * @param root0.fillPaddings - Fill offset.
   * @param root0.progress - Initial progress value.
   */
  init({ bg, fill, fillPaddings, progress }) {
    this.setBackground(bg);
    this.setFill(fill, fillPaddings);
    this.progress = progress;
  }
  /**
   * Set bg.
   * @param bg
   */
  setBackground(bg) {
    var _a;
    if (this.bg) {
      this.bg.destroy();
    }
    if ((_a = this.options) == null ? void 0 : _a.nineSliceSprite) {
      if (typeof bg === "string") {
        this.bg = new NineSliceSprite({
          texture: Texture.from(bg),
          leftWidth: this.options.nineSliceSprite.bg[0],
          topHeight: this.options.nineSliceSprite.bg[1],
          rightWidth: this.options.nineSliceSprite.bg[2],
          bottomHeight: this.options.nineSliceSprite.bg[3]
        });
      } else {
        console.warn("NineSliceSprite can not be used with views set as Container.");
      }
    }
    if (bg instanceof Graphics) {
      this.bg = bg;
    }
    if (!this.bg && (typeof bg === "string" || bg instanceof Sprite)) {
      this.bg = getSpriteView(bg);
    }
    this.innerView.addChildAt(this.bg, 0);
  }
  /**
   * Set fill.
   * @param fill
   * @param fillPadding
   */
  setFill(fill, fillPadding) {
    var _a;
    if (this.fill) {
      this.fill.destroy();
    }
    if (this.bg instanceof Sprite && fill === this.bg) {
      console.warn("Can not use same Sprite instance for bg and fill.");
      return;
    }
    if ((_a = this.options) == null ? void 0 : _a.nineSliceSprite) {
      if (typeof fill === "string") {
        this.fill = new NineSliceSprite({
          texture: Texture.from(fill),
          leftWidth: this.options.nineSliceSprite.fill[0],
          topHeight: this.options.nineSliceSprite.fill[1],
          rightWidth: this.options.nineSliceSprite.fill[2],
          bottomHeight: this.options.nineSliceSprite.fill[3]
        });
      } else {
        console.warn("NineSliceSprite can not be used with views set as Container.");
      }
    }
    if (!this.fill) {
      if (fill instanceof Graphics) {
        this.fill = fill;
      } else {
        this.fill = getSpriteView(fill);
      }
    }
    this.innerView.addChildAt(this.fill, 1);
    const offsetX = (fillPadding == null ? void 0 : fillPadding.left) ?? 0;
    const offsetY = (fillPadding == null ? void 0 : fillPadding.top) ?? 0;
    this.fill.x = offsetX;
    this.fill.y = offsetY;
    if (this.fillMask) {
      this.fill.mask = null;
      this.fillMask.destroy();
    }
    const leftWidth = this.fill.width / 2;
    const rightWidth = this.fill.width / 2;
    const topHeight = this.fill.height / 2;
    const bottomHeight = this.fill.height / 2;
    let texture = Texture.WHITE;
    if (this.fill instanceof Sprite && this.fill.texture) {
      texture = this.fill.texture;
    }
    this.fillMask = new NineSliceSprite({ texture, leftWidth, topHeight, rightWidth, bottomHeight });
    this.fillMask.position.copyFrom(this.fill);
    this.addChild(this.fillMask);
    this.fill.mask = this.fillMask;
  }
  validate(progress) {
    progress = Math.round(progress);
    if (progress < 0) {
      return 0;
    }
    if (progress > 100) {
      return 100;
    }
    return progress;
  }
  /** Set current progress percentage value. */
  set progress(progress) {
    this._progress = this.validate(progress);
    if (!this.fill)
      return;
    if (this.fillMask) {
      this.fill.mask = null;
      this.fillMask.width = this.fill.width / 100 * (this._progress - this.progressStart);
      this.fillMask.x = this.progressStart / 100 * this.fill.width + this.fill.x;
      this.fillMask.height = this.fill.height;
      this.fill.mask = this.fillMask;
    }
  }
  /** Return current progress percentage value. */
  get progress() {
    return this._progress;
  }
  /**
   * Sets width of a ProgressBars background and fill.
   * If nineSliceSprite is set, then width will be set to nineSliceSprite.
   * If nineSliceSprite is not set, then width will control components width as Container.
   * @param width - Width value.
   */
  set width(width) {
    var _a, _b, _c;
    if ((_a = this.options) == null ? void 0 : _a.nineSliceSprite) {
      if (this.bg) {
        this.bg.width = width;
      }
      if (this.fill) {
        const leftPadding = ((_b = this.options.fillPaddings) == null ? void 0 : _b.left) ?? 0;
        const rightPadding = ((_c = this.options.fillPaddings) == null ? void 0 : _c.right) ?? 0;
        this.fill.width = width - leftPadding - rightPadding;
        this.fillMask.width = width - leftPadding - rightPadding;
      }
      this.progress = this._progress;
    } else {
      super.width = width;
    }
  }
  /** Gets width of a ProgressBar. */
  get width() {
    return super.width;
  }
  /**
   * Sets height of a ProgressBars background and fill.
   * If nineSliceSprite is set, then height will be set to nineSliceSprite.
   * If nineSliceSprite is not set, then height will control components height as Container.
   * @param height - Height value.
   */
  set height(height) {
    var _a, _b, _c;
    if ((_a = this.options) == null ? void 0 : _a.nineSliceSprite) {
      if (this.bg) {
        this.bg.height = height;
      }
      if (this.fill) {
        const topPadding = ((_b = this.options.fillPaddings) == null ? void 0 : _b.top) ?? 0;
        const bottomPadding = ((_c = this.options.fillPaddings) == null ? void 0 : _c.bottom) ?? 0;
        this.fill.height = height - topPadding - bottomPadding;
        this.fillMask.height = height - topPadding - bottomPadding;
      }
      this.progress = this._progress;
    } else {
      super.height = height;
    }
  }
  /** Gets height of a ProgressBar. */
  get height() {
    return super.height;
  }
  setSize(value, height) {
    var _a, _b, _c, _d, _e;
    if ((_a = this.options) == null ? void 0 : _a.nineSliceSprite) {
      if (this.bg) {
        this.bg.setSize(value, height);
      }
      if (this.fill) {
        if (typeof value === "object") {
          height = value.height ?? value.width;
          value = value.width;
        } else {
          height = height ?? value;
        }
        const topPadding = ((_b = this.options.fillPaddings) == null ? void 0 : _b.top) ?? 0;
        const bottomPadding = ((_c = this.options.fillPaddings) == null ? void 0 : _c.bottom) ?? 0;
        const leftPadding = ((_d = this.options.fillPaddings) == null ? void 0 : _d.left) ?? 0;
        const rightPadding = ((_e = this.options.fillPaddings) == null ? void 0 : _e.right) ?? 0;
        this.fill.setSize(value - leftPadding - rightPadding, height - topPadding - bottomPadding);
        this.fillMask.setSize(value - leftPadding - rightPadding, height - topPadding - bottomPadding);
      }
      this.progress = this._progress;
    } else {
      super.setSize(value, height);
    }
  }
};

// node_modules/@pixi/ui/lib/SliderBase.mjs
var __defProp7 = Object.defineProperty;
var __defNormalProp7 = (obj, key, value) => key in obj ? __defProp7(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField7 = (obj, key, value) => {
  __defNormalProp7(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
var SliderBase = class extends ProgressBar {
  constructor(options) {
    super(options);
    __publicField7(this, "_slider1");
    __publicField7(this, "_slider2");
    __publicField7(this, "value1Text");
    __publicField7(this, "value2Text");
    __publicField7(this, "_value1");
    __publicField7(this, "_value2");
    __publicField7(this, "dragging", 0);
    __publicField7(this, "_min", 0);
    __publicField7(this, "_max", 100);
    __publicField7(this, "_step", 1);
    __publicField7(this, "startX");
    __publicField7(this, "startUpdateValue1");
    __publicField7(this, "startUpdateValue2");
    __publicField7(this, "settings");
    this.settings = options;
    this.slider1 = options.slider1;
    this.slider2 = options.slider2;
    this.min = options.min ?? 0;
    this.max = options.max ?? 100;
  }
  init(progressBarOptions) {
    super.init(progressBarOptions);
    if (this.fill) {
      this.fill.eventMode = "none";
    }
  }
  /**
   * Sets Slider1 instance.
   * @param value - Container or string with texture name.
   */
  set slider1(value) {
    if (!value)
      return;
    if (this._slider1) {
      this.slider1.removeAllListeners();
      this.slider1.destroy();
    }
    this._slider1 = this.createSlider(value);
    if (this.settings.showValue && !this.value1Text) {
      const TextClass = this.settings.valueTextClass ?? Text;
      this.value1Text = new TextClass({ text: "", style: this.settings.valueTextStyle || { fill: 16777215 } });
      this.value1Text.anchor.set(0.5);
      this.addChild(this.value1Text);
    }
  }
  /** Get Slider1 instance. */
  get slider1() {
    return this._slider1;
  }
  /**
   * Sets Slider2 instance.
   * @param value - Container or string with texture name.
   */
  set slider2(value) {
    if (!value)
      return;
    if (this._slider2) {
      this.slider2.removeAllListeners();
      this.slider2.destroy();
    }
    this._slider2 = this.createSlider(value);
    if (this.settings.showValue && !this.value2Text) {
      const TextClass = this.settings.valueTextClass ?? Text;
      this.value2Text = new TextClass({ text: "", style: this.settings.valueTextStyle || { fill: 16777215 } });
      this.value2Text.anchor.set(0.5);
      this.addChild(this.value2Text);
    }
  }
  /** Get Slider2 instance. */
  get slider2() {
    return this._slider2;
  }
  /**
   * Set bg.
   * @param bg
   */
  setBackground(bg) {
    if (this.bg) {
      this.bg.removeAllListeners();
    }
    super.setBackground(bg);
    this.activateBG();
  }
  activateBG() {
    this.bg.eventMode = "static";
    this.bg.on("pointerdown", this.startUpdate, this).on("globalpointermove", this.update, this).on("pointerup", this.endUpdate, this).on("pointerupoutside", this.endUpdate, this);
  }
  createSlider(sliderData) {
    var _a;
    const slider = getView(sliderData);
    const onPointerDown = (event) => {
      if (this.bg) {
        event.currentTarget = this.bg;
      }
      this.startUpdate(event);
    };
    slider.eventMode = "static";
    slider.on("pointerdown", onPointerDown).on("pointerup", this.endUpdate, this).on("pointerupoutside", this.endUpdate, this);
    slider.x = slider.width / 2;
    const container = new Container();
    container.addChild(slider);
    if (slider instanceof Sprite) {
      slider.anchor.set(0.5);
    }
    container.y = ((_a = this.bg) == null ? void 0 : _a.height) / 2;
    this.addChild(container);
    return container;
  }
  startUpdate(event) {
    this.dragging = 1;
    const obj = event.currentTarget;
    this.startX = obj.parent.worldTransform.applyInverse(event.global).x;
    this.startUpdateValue1 = this._value1;
    this.startUpdateValue2 = this._value2;
    this.update(event);
  }
  endUpdate() {
    if (!this.dragging)
      return;
    this.dragging = 0;
    if (!!this.startX || (this.startUpdateValue1 !== this._value1 || this.startUpdateValue2 !== this._value2)) {
      this.change();
    }
    this.startUpdateValue1 = null;
    this.startUpdateValue2 = null;
  }
  onClick() {
    this.change();
  }
  /* Called when dragging started and on every move. */
  update(_event) {
    const obj = _event.currentTarget;
    const { x } = obj.parent.worldTransform.applyInverse(_event.global);
    if (x !== this.startX) {
      this.startX = null;
    }
  }
  /** Called when dragging stopped. */
  change() {
  }
  /**
   * Set max value.
   * @param value
   */
  set max(value) {
    this._max = value;
  }
  /** Get max value. */
  get max() {
    return this._max;
  }
  /**
   * Set min value.
   * @param value
   */
  set min(value) {
    this._min = value;
  }
  /** Get min value. */
  get min() {
    return this._min;
  }
  /**
   * Set step value.
   * @param value
   */
  set step(value) {
    this._step = value;
  }
  /** Get step value. */
  get step() {
    return this._step;
  }
};

// node_modules/@pixi/ui/lib/DoubleSlider.mjs
var __defProp8 = Object.defineProperty;
var __defNormalProp8 = (obj, key, value) => key in obj ? __defProp8(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField8 = (obj, key, value) => {
  __defNormalProp8(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
var DoubleSlider = class extends SliderBase {
  constructor(options) {
    super(options);
    __publicField8(this, "sliderOptions");
    __publicField8(this, "activeValue");
    __publicField8(this, "onChange", new import_typed_signals4.Signal());
    __publicField8(this, "onUpdate", new import_typed_signals4.Signal());
    this.sliderOptions = options;
    this.setInitialState();
  }
  setInitialState() {
    this.validateValues();
    const { value1, value2 } = this.sliderOptions;
    this.updateProgress(value1, value2);
    this.value2 = value2;
    this.value1 = value1;
  }
  updateProgress(value1 = this.value1, value2 = this.value2) {
    this.progressStart = (value1 - this.min) / (this.max - this.min) * 100;
    this.progress = (value2 - this.min) / (this.max - this.min) * 100;
  }
  validateValues() {
    if (!this.sliderOptions.value1) {
      this.sliderOptions.value1 = this.min;
    }
    if (!this.sliderOptions.value2) {
      this.sliderOptions.value2 = this.sliderOptions.max;
    }
    if (this.sliderOptions.value2 < this.sliderOptions.value1) {
      this.sliderOptions.value2 = this.sliderOptions.value1;
    }
    if (this.sliderOptions.value1 < this.sliderOptions.min) {
      this.sliderOptions.value1 = this.sliderOptions.min;
    }
    if (this.sliderOptions.value1 > this.sliderOptions.max) {
      this.sliderOptions.value1 = this.sliderOptions.max;
    }
    if (this.sliderOptions.value2 > this.sliderOptions.max) {
      this.sliderOptions.value2 = this.sliderOptions.max;
    }
  }
  /** Returns left value. */
  get value1() {
    return this._value1;
  }
  /** Sets left value. */
  set value1(value1) {
    var _a;
    if (value1 === this._value1)
      return;
    if (value1 < this.min)
      value1 = this.min;
    if (value1 > this._value2)
      value1 = this._value2;
    this._value1 = value1;
    this.updateSlider1();
    (_a = this.onUpdate) == null ? void 0 : _a.emit(this.value1, this.value2);
  }
  /** Returns right value. */
  get value2() {
    return this._value2;
  }
  /** Sets right value. */
  set value2(value2) {
    var _a;
    if (value2 === this._value2)
      return;
    if (value2 < this._value1)
      value2 = this._value1;
    if (value2 > this.max)
      value2 = this.max;
    this._value2 = value2;
    this.updateSlider2();
    (_a = this.onUpdate) == null ? void 0 : _a.emit(this.value1, this.value2);
  }
  update(event) {
    var _a;
    super.update(event);
    if (!this.dragging)
      return;
    const obj = event.currentTarget;
    const { x } = obj.parent.worldTransform.applyInverse(event.global);
    const slider1Dist = Math.abs(x - this._slider1.x - this._slider1.width);
    const slider2Dist = Math.abs(x - this._slider2.x);
    if (!this.activeValue) {
      if (this.slider1 && x < this.slider1.x) {
        this.activeValue = "value1";
      } else if (this.slider2 && x > this.slider2.x) {
        this.activeValue = "value2";
      } else {
        this.activeValue = slider1Dist < slider2Dist ? "value1" : "value2";
      }
    }
    const progress = this.validate(x / ((_a = this.bg) == null ? void 0 : _a.width) * 100);
    if (this.activeValue === "value1") {
      this.progressStart = progress;
      this.value1 = this.min + (this.max - this.min) / 100 * progress;
      this.updateProgress(this.value1, this.value2);
    } else {
      this.progress = progress;
      this.value2 = this.min + (this.max - this.min) / 100 * progress;
      this.updateProgress(this.value1, this.value2);
    }
  }
  endUpdate() {
    super.endUpdate();
    this.activeValue = null;
  }
  change() {
    var _a;
    (_a = this.onChange) == null ? void 0 : _a.emit(this.value1, this.value2);
  }
  /**
   * Set Slider1 instance.
   * @param value - Container or string with texture name.
   */
  set slider1(value) {
    super.slider1 = value;
    this.updateSlider1();
  }
  /** Get Slider1 instance. */
  get slider1() {
    return this._slider1;
  }
  /**
   * Sets Slider instance.
   * @param value - Container or string with texture name.
   */
  set slider2(value) {
    super.slider2 = value;
    this.updateSlider2();
  }
  /** Get Slider2 instance. */
  get slider2() {
    return this._slider2;
  }
  updateSlider1() {
    var _a, _b, _c, _d, _e;
    this.updateProgress(this.value1, this.value2);
    this._slider1.x = ((_a = this.bg) == null ? void 0 : _a.width) / 100 * this.progressStart - this._slider1.width / 2;
    this._slider1.y = ((_b = this.bg) == null ? void 0 : _b.height) / 2;
    if (this._slider2 && this._slider1.x > this._slider2.x) {
      this._slider1.x = this._slider2.x;
    }
    if ((_c = this.sliderOptions) == null ? void 0 : _c.showValue) {
      this.value1Text.text = `${Math.round(this.value1)}`;
      const sliderPosX = this._slider1.x + this._slider1.width / 2;
      const sliderPosY = this._slider1.y;
      this.value1Text.x = sliderPosX + (((_d = this.sliderOptions.valueTextOffset) == null ? void 0 : _d.x) ?? 0);
      this.value1Text.y = sliderPosY + (((_e = this.sliderOptions.valueTextOffset) == null ? void 0 : _e.y) ?? 0);
    }
  }
  updateSlider2() {
    var _a, _b, _c, _d, _e;
    this.updateProgress(this.value1, this.value2);
    this._slider2.x = ((_a = this.bg) == null ? void 0 : _a.width) / 100 * this.progress - this._slider2.width / 2;
    this._slider2.y = ((_b = this.bg) == null ? void 0 : _b.height) / 2;
    if (this._slider2.x < this._slider1.x) {
      this._slider2.x = this._slider1.x;
    }
    if ((_c = this.sliderOptions) == null ? void 0 : _c.showValue) {
      this.value2Text.text = `${Math.round(this.value2)}`;
      const sliderPosX = this._slider2.x + this._slider2.width / 2;
      const sliderPosY = this._slider2.y;
      this.value2Text.x = sliderPosX + (((_d = this.sliderOptions.valueTextOffset) == null ? void 0 : _d.x) ?? 0);
      this.value2Text.y = sliderPosY + (((_e = this.sliderOptions.valueTextOffset) == null ? void 0 : _e.y) ?? 0);
    }
  }
  /**
   * Sets width of a Sliders background and fill.
   * If nineSliceSprite is set, then width will be set to nineSliceSprite.
   * If nineSliceSprite is not set, then width will control components width as Container.
   * @param value - Width value.
   */
  set width(value) {
    super.width = value;
    this.updateSlider1();
    this.updateSlider2();
  }
  /** Gets width of a Slider. */
  get width() {
    return super.width;
  }
  /**
   * Sets height of a Sliders background and fill.
   * If nineSliceSprite is set, then height will be set to nineSliceSprite.
   * If nineSliceSprite is not set, then height will control components height as Container.
   * @param value - Height value.
   */
  set height(value) {
    super.height = value;
    this.updateSlider1();
    this.updateSlider2();
  }
  /** Gets height of a Slider. */
  get height() {
    return super.height;
  }
  setSize(value, height) {
    super.setSize(value, height);
    this.updateSlider1();
    this.updateSlider2();
  }
};

// node_modules/tweedle.js/dist/tweedle.es.js
var NOW;
if (typeof self == "undefined" && typeof process !== "undefined" && process.hrtime) {
  NOW = function() {
    const time = process.hrtime();
    return time[0] * 1e3 + time[1] / 1e6;
  };
} else if (typeof self !== "undefined" && self.performance !== void 0 && self.performance.now !== void 0) {
  NOW = self.performance.now.bind(self.performance);
} else if (Date.now !== void 0) {
  NOW = Date.now;
} else {
  NOW = function() {
    return (/* @__PURE__ */ new Date()).getTime();
  };
}
var Group = class _Group {
  constructor() {
    _Group.prototype.__init.call(this);
    _Group.prototype.__init2.call(this);
    _Group.prototype.__init3.call(this);
    _Group.prototype.__init4.call(this);
  }
  __init() {
    this._tweens = {};
  }
  /**
   * A tween without an explicit group will default to this shared static one.
   */
  static get shared() {
    if (!_Group._shared) {
      _Group._shared = new _Group();
    }
    return _Group._shared;
  }
  __init2() {
    this._paused = false;
  }
  /**
   * A paused group will skip updating all the asociated tweens.
   * _To control all tweens, use {@link Group.getAll} to get an array with all tweens._
   * @returns returns true if this group is paused.
   */
  isPaused() {
    return this._paused;
  }
  /**
   * Pauses this group. If a group was already paused, this has no effect.
   * A paused group will skip updating all the asociated tweens.
   * _To control all tweens, use {@link Group.getAll} to get an array with all tweens._
   */
  pause() {
    this._paused = true;
  }
  /**
   * Resumes this group. If a group was not paused, this has no effect.
   * A paused group will skip updating all the asociated tweens.
   * _To control all tweens, use {@link Group.getAll} to get an array with all tweens._
   */
  resume() {
    this._paused = false;
  }
  __init3() {
    this._lastUpdateTime = void 0;
  }
  /**
   * Function used by the group to know what time is it.
   * Used to calculate the deltaTime in case you call update without the parameter.
   */
  __init4() {
    this.now = NOW;
  }
  // used to calculate deltatime in case you stop providing one
  /**
   * Returns all the tweens in this group.
   *
   * _note: only **running** tweens are in a group._
   * @returns all the running tweens.
   */
  getAll() {
    return Object.keys(this._tweens).map((tweenId) => this._tweens[tweenId]);
  }
  /**
   * Removes all the tweens in this group.
   *
   * _note: this will not modify the group reference inside the tween object_
   */
  removeAll() {
    this._tweens = {};
  }
  /**
   * Adds a tween to this group.
   *
   * _note: this will not modify the group reference inside the tween object_
   * @param tween Tween to add.
   */
  add(tween) {
    this._tweens[tween.getId()] = tween;
  }
  /**
   * Removes a tween from this group.
   *
   * _note: this will not modify the group reference inside the tween object_
   * @param tween
   */
  remove(tween) {
    delete this._tweens[tween.getId()];
  }
  /**
   * Updates all the tweens in this group.
   *
   * If a tween is stopped, paused, finished or non started it will be removed from the group.
   *
   *  Tweens are updated in "batches". If you add a new tween during an
   *  update, then the new tween will be updated in the next batch.
   *  If you remove a tween during an update, it may or may not be updated.
   *  However, if the removed tween was added during the current batch,
   *  then it will not be updated.
   * @param deltaTime - Amount of **miliseconds** that have passed since last excecution. If not provided it will be calculated using the {@link Group.now} function
   * @param preserve - Prevent the removal of stopped, paused, finished or non started tweens.
   * @returns returns true if the group is not empty and it is not paused.
   */
  update(deltaTime, preserve = false) {
    if (deltaTime == void 0) {
      if (this._lastUpdateTime == void 0) {
        this._lastUpdateTime = this.now();
        deltaTime = 0;
      } else {
        deltaTime = this.now() - this._lastUpdateTime;
      }
    }
    this._lastUpdateTime = this.now();
    if (this._paused) {
      return false;
    }
    const tweenIds = Object.keys(this._tweens);
    if (tweenIds.length == 0) {
      return false;
    }
    for (let i = 0; i < tweenIds.length; i++) {
      const tween = this._tweens[tweenIds[i]];
      if (tween && tween.update(deltaTime, true) == false && !preserve) {
        delete this._tweens[tweenIds[i]];
      }
    }
    return true;
  }
};
var Easing = {
  Step: {
    None(amount) {
      return amount < 0.5 ? 0 : 1;
    }
  },
  Linear: {
    None(amount) {
      return amount;
    }
  },
  Quadratic: {
    In(amount) {
      return amount * amount;
    },
    Out(amount) {
      return amount * (2 - amount);
    },
    InOut(amount) {
      if ((amount *= 2) < 1) {
        return 0.5 * amount * amount;
      }
      return -0.5 * (--amount * (amount - 2) - 1);
    }
  },
  Cubic: {
    In(amount) {
      return amount * amount * amount;
    },
    Out(amount) {
      return --amount * amount * amount + 1;
    },
    InOut(amount) {
      if ((amount *= 2) < 1) {
        return 0.5 * amount * amount * amount;
      }
      return 0.5 * ((amount -= 2) * amount * amount + 2);
    }
  },
  Quartic: {
    In(amount) {
      return amount * amount * amount * amount;
    },
    Out(amount) {
      return 1 - --amount * amount * amount * amount;
    },
    InOut(amount) {
      if ((amount *= 2) < 1) {
        return 0.5 * amount * amount * amount * amount;
      }
      return -0.5 * ((amount -= 2) * amount * amount * amount - 2);
    }
  },
  Quintic: {
    In(amount) {
      return amount * amount * amount * amount * amount;
    },
    Out(amount) {
      return --amount * amount * amount * amount * amount + 1;
    },
    InOut(amount) {
      if ((amount *= 2) < 1) {
        return 0.5 * amount * amount * amount * amount * amount;
      }
      return 0.5 * ((amount -= 2) * amount * amount * amount * amount + 2);
    }
  },
  Sinusoidal: {
    In(amount) {
      return 1 - Math.cos(amount * Math.PI / 2);
    },
    Out(amount) {
      return Math.sin(amount * Math.PI / 2);
    },
    InOut(amount) {
      return 0.5 * (1 - Math.cos(Math.PI * amount));
    }
  },
  Exponential: {
    In(amount) {
      return amount == 0 ? 0 : Math.pow(1024, amount - 1);
    },
    Out(amount) {
      return amount == 1 ? 1 : 1 - Math.pow(2, -10 * amount);
    },
    InOut(amount) {
      if (amount == 0) {
        return 0;
      }
      if (amount == 1) {
        return 1;
      }
      if ((amount *= 2) < 1) {
        return 0.5 * Math.pow(1024, amount - 1);
      }
      return 0.5 * (-Math.pow(2, -10 * (amount - 1)) + 2);
    }
  },
  Circular: {
    In(amount) {
      return 1 - Math.sqrt(1 - amount * amount);
    },
    Out(amount) {
      return Math.sqrt(1 - --amount * amount);
    },
    InOut(amount) {
      if ((amount *= 2) < 1) {
        return -0.5 * (Math.sqrt(1 - amount * amount) - 1);
      }
      return 0.5 * (Math.sqrt(1 - (amount -= 2) * amount) + 1);
    }
  },
  Elastic: {
    In(amount) {
      if (amount == 0) {
        return 0;
      }
      if (amount == 1) {
        return 1;
      }
      return -Math.pow(2, 10 * (amount - 1)) * Math.sin((amount - 1.1) * 5 * Math.PI);
    },
    Out(amount) {
      if (amount == 0) {
        return 0;
      }
      if (amount == 1) {
        return 1;
      }
      return Math.pow(2, -10 * amount) * Math.sin((amount - 0.1) * 5 * Math.PI) + 1;
    },
    InOut(amount) {
      if (amount == 0) {
        return 0;
      }
      if (amount == 1) {
        return 1;
      }
      amount *= 2;
      if (amount < 1) {
        return -0.5 * Math.pow(2, 10 * (amount - 1)) * Math.sin((amount - 1.1) * 5 * Math.PI);
      }
      return 0.5 * Math.pow(2, -10 * (amount - 1)) * Math.sin((amount - 1.1) * 5 * Math.PI) + 1;
    }
  },
  Back: {
    In(amount) {
      const s = 1.70158;
      return amount * amount * ((s + 1) * amount - s);
    },
    Out(amount) {
      const s = 1.70158;
      return --amount * amount * ((s + 1) * amount + s) + 1;
    },
    InOut(amount) {
      const s = 1.70158 * 1.525;
      if ((amount *= 2) < 1) {
        return 0.5 * (amount * amount * ((s + 1) * amount - s));
      }
      return 0.5 * ((amount -= 2) * amount * ((s + 1) * amount + s) + 2);
    }
  },
  Bounce: {
    In(amount) {
      return 1 - Easing.Bounce.Out(1 - amount);
    },
    Out(amount) {
      if (amount < 1 / 2.75) {
        return 7.5625 * amount * amount;
      } else if (amount < 2 / 2.75) {
        return 7.5625 * (amount -= 1.5 / 2.75) * amount + 0.75;
      } else if (amount < 2.5 / 2.75) {
        return 7.5625 * (amount -= 2.25 / 2.75) * amount + 0.9375;
      }
      return 7.5625 * (amount -= 2.625 / 2.75) * amount + 0.984375;
    },
    InOut(amount) {
      if (amount < 0.5) {
        return Easing.Bounce.In(amount * 2) * 0.5;
      }
      return Easing.Bounce.Out(amount * 2 - 1) * 0.5 + 0.5;
    }
  }
};
var Interpolation = {
  /**
   * Geometric interpolation functions. Good for interpolating positions in space.
   */
  Geom: {
    /**
     * Linear interpolation is like drawing straight lines between the points.
     */
    Linear(v, k) {
      const m = v.length - 1;
      const f = m * k;
      const i = Math.floor(f);
      const fn = Interpolation.Utils.Linear;
      if (k < 0) {
        return fn(v[0], v[1], f);
      }
      if (k > 1) {
        return fn(v[m], v[m - 1], m - f);
      }
      return fn(v[i], v[i + 1 > m ? m : i + 1], f - i);
    },
    /**
     * A Bézier curve is defined by a set of control points P0 through Pn, where n is called its order.
     * The first and last control points are always the end points of the curve; however, the intermediate control points (if any) generally do not lie on the curve.
     *
     * https://en.wikipedia.org/wiki/B%C3%A9zier_curve#Explicit_definition
     */
    Bezier(v, k) {
      let b = 0;
      const n = v.length - 1;
      const pw = Math.pow;
      const bn = Interpolation.Utils.Bernstein;
      for (let i = 0; i <= n; i++) {
        b += bn(n, i) * pw(1 - k, n - i) * pw(k, i) * v[i];
      }
      return b;
    },
    /**
     * Assumes your points are a succession of quadratic bezier curves where the endpoint of one is the start point of the next one.
     * for example: `[Point in the curve, Control point, Point in the curve, Control point, Point in the curve]`
     */
    QuadraticBezier(v, k) {
      let b = 0;
      const n = v.length - 1;
      if (k == 1) {
        return v[n];
      }
      const pw = Math.pow;
      const bn = Interpolation.Utils.Bernstein;
      const f = n * k;
      const i = Math.floor(f);
      const t = (f - i) * 0.5 + 0.5 * (i % 2);
      const i0 = i - i % 2;
      const i1 = i0 + 1;
      const i2 = i0 + 2;
      b += bn(2, 0) * pw(1 - t, 2 - 0) * pw(t, 0) * v[i0];
      b += bn(2, 1) * pw(1 - t, 2 - 1) * pw(t, 1) * v[i1];
      b += bn(2, 2) * pw(1 - t, 2 - 2) * pw(t, 2) * v[i2];
      return b;
    },
    /**
     * Assumes your points are a succession of cubic bezier curves where the endpoint of one is the start point of the next one.
     * for example: `[Point in the curve, Control point, Control point, Point in the curve, Control point, Control point, Point in the curve]`
     */
    CubicBezier(v, k) {
      let b = 0;
      const n = v.length - 1;
      if (k == 1) {
        return v[n];
      }
      const pw = Math.pow;
      const bn = Interpolation.Utils.Bernstein;
      const f = n * k;
      const i = Math.floor(f);
      const t = (f - i) * (1 / 3) + 1 / 3 * (i % 3);
      const i0 = i - i % 3;
      const i1 = i0 + 1;
      const i2 = i0 + 2;
      const i3 = i0 + 3;
      b += bn(3, 0) * pw(1 - t, 3 - 0) * pw(t, 0) * v[i0];
      b += bn(3, 1) * pw(1 - t, 3 - 1) * pw(t, 1) * v[i1];
      b += bn(3, 2) * pw(1 - t, 3 - 2) * pw(t, 2) * v[i2];
      b += bn(3, 3) * pw(1 - t, 3 - 3) * pw(t, 3) * v[i3];
      return b;
    },
    /**
     * A Catmullrom spline is a curve where the original set of points is also used as control points.
     * Usually Catmullrom splines need two extra elements at the beginning and the end of the point set. This function contemplates that and doesn't need them.
     *
     * https://en.wikipedia.org/wiki/Cubic_Hermite_spline#Catmull%E2%80%93Rom_spline
     */
    CatmullRom(v, k) {
      const m = v.length - 1;
      let f = m * k;
      let i = Math.floor(f);
      const fn = Interpolation.Utils.CatmullRom;
      if (v[0] == v[m]) {
        if (k < 0) {
          i = Math.floor(f = m * (1 + k));
        }
        return fn(v[(i - 1 + m) % m], v[i], v[(i + 1) % m], v[(i + 2) % m], f - i);
      }
      if (k < 0) {
        return v[0] - (fn(v[0], v[0], v[1], v[1], -f) - v[0]);
      }
      if (k > 1) {
        return v[m] - (fn(v[m], v[m], v[m - 1], v[m - 1], f - m) - v[m]);
      }
      return fn(v[i ? i - 1 : 0], v[i], v[m < i + 1 ? m : i + 1], v[m < i + 2 ? m : i + 2], f - i);
    }
  },
  /**
   * Given the spinny nature of angles, sometimes it's better to go back to get to the right place earlier.
   * This functions help with that.
   */
  Angle: {
    /**
     * Normalizes angles between 0 and 2pi and then rotates the object in the shortest direction.
     */
    Radians(v, k) {
      const m = v.length - 1;
      const f = m * k;
      const i = Math.floor(f);
      const fn = Interpolation.Utils.WrapLinear;
      if (k < 0) {
        return fn(v[0], v[1], f, 2 * Math.PI);
      }
      if (k > 1) {
        return fn(v[m], v[m - 1], m - f, 2 * Math.PI);
      }
      return fn(v[i], v[i + 1 > m ? m : i + 1], f - i, 2 * Math.PI);
    },
    /**
     * Normalizes angles between 0 and 360 and then rotates the object in the shortest direction.
     */
    Degrees(v, k) {
      const m = v.length - 1;
      const f = m * k;
      const i = Math.floor(f);
      const fn = Interpolation.Utils.WrapLinear;
      if (k < 0) {
        return fn(v[0], v[1], f, 360);
      }
      if (k > 1) {
        return fn(v[m], v[m - 1], m - f, 360);
      }
      return fn(v[i], v[i + 1 > m ? m : i + 1], f - i, 360);
    }
  },
  /**
   * Even if colors are numbers, interpolating them can be tricky.
   */
  Color: {
    /**
     * Interpolates the color by their channels Red, Green, and Blue.
     */
    RGB(v, k) {
      const m = v.length - 1;
      const f = m * k;
      const i = Math.floor(f);
      const fn = Interpolation.Utils.RGBLinear;
      if (k < 0) {
        return fn(v[0], v[1], f);
      }
      if (k > 1) {
        return fn(v[m], v[m - 1], m - f);
      }
      return fn(v[i], v[i + 1 > m ? m : i + 1], f - i);
    },
    /**
     * Interpolates the color by their Hue, Saturation, and Value.
     */
    HSV(v, k) {
      const m = v.length - 1;
      const f = m * k;
      const i = Math.floor(f);
      const fn = Interpolation.Utils.HSVLinear;
      if (k < 0) {
        return fn(v[0], v[1], f);
      }
      if (k > 1) {
        return fn(v[m], v[m - 1], m - f);
      }
      return fn(v[i], v[i + 1 > m ? m : i + 1], f - i);
    },
    /**
     * Interpolates the color by their Hue, Chroma, and Lightness.
     */
    HCL(v, k) {
      const m = v.length - 1;
      const f = m * k;
      const i = Math.floor(f);
      const fn = Interpolation.Utils.HCLLinear;
      if (k < 0) {
        return fn(v[0], v[1], f);
      }
      if (k > 1) {
        return fn(v[m], v[m - 1], m - f);
      }
      return fn(v[i], v[i + 1 > m ? m : i + 1], f - i);
    }
  },
  /**
   * Helper functions used to calculate the different interpolations
   */
  Utils: {
    RGBsplit(color) {
      const a = color >> 24 & 255;
      const r = color >> 16 & 255;
      const g = color >> 8 & 255;
      const b = color & 255;
      return { a, r, g, b };
    },
    HSVsplit(color) {
      const rgb = Interpolation.Utils.RGBsplit(color);
      rgb.r /= 255, rgb.g /= 255, rgb.b /= 255;
      const max = Math.max(rgb.r, rgb.g, rgb.b);
      const min = Math.min(rgb.r, rgb.g, rgb.b);
      let h;
      const v = max;
      const d = max - min;
      const s = max == 0 ? 0 : d / max;
      if (max == min) {
        h = 0;
      } else {
        switch (max) {
          case rgb.r:
            h = (rgb.g - rgb.b) / d + (rgb.g < rgb.b ? 6 : 0);
            break;
          case rgb.g:
            h = (rgb.b - rgb.r) / d + 2;
            break;
          case rgb.b:
            h = (rgb.r - rgb.g) / d + 4;
            break;
        }
        h /= 6;
      }
      return { a: rgb.a, h, s, v };
    },
    HSVJoin(color) {
      let r, g, b;
      const i = Math.floor(color.h * 6);
      const f = color.h * 6 - i;
      const p = color.v * (1 - color.s);
      const q = color.v * (1 - f * color.s);
      const t = color.v * (1 - (1 - f) * color.s);
      switch (i % 6) {
        case 0:
          r = color.v, g = t, b = p;
          break;
        case 1:
          r = q, g = color.v, b = p;
          break;
        case 2:
          r = p, g = color.v, b = t;
          break;
        case 3:
          r = p, g = q, b = color.v;
          break;
        case 4:
          r = t, g = p, b = color.v;
          break;
        case 5:
          r = color.v, g = p, b = q;
          break;
      }
      return color.a << 24 | r << 16 | g << 8 | b;
    },
    HCLSplit(color) {
      const HCLgamma = 3;
      const HCLy0 = 100;
      const HCLmaxL = 0.530454533953517;
      const RGB = Interpolation.Utils.RGBsplit(color);
      const HCL = { a: RGB.a, h: 0, c: 0, l: 0 };
      let H = 0;
      const U = Math.min(RGB.r, Math.min(RGB.g, RGB.b));
      const V = Math.max(RGB.r, Math.max(RGB.g, RGB.b));
      let Q = HCLgamma / HCLy0;
      HCL.c = V - U;
      if (HCL.c != 0) {
        H = Math.atan2(RGB.g - RGB.b, RGB.r - RGB.g) / Math.PI;
        Q *= U / V;
      }
      Q = Math.exp(Q);
      HCL.h = (H / 2 - Math.min(H % 1, -H % 1) / 6) % 1;
      HCL.c *= Q;
      HCL.l = Interpolation.Utils.Linear(-U, V, Q) / (HCLmaxL * 2);
      return HCL;
    },
    HCLJoin(HCL) {
      const HCLgamma = 3;
      const HCLy0 = 100;
      const HCLmaxL = 0.530454533953517;
      const RGB = { a: HCL.a, r: 0, g: 0, b: 0 };
      if (HCL.l != 0) {
        let H = HCL.h;
        const C = HCL.c;
        const L = HCL.l * HCLmaxL;
        const Q = Math.exp((1 - C / (2 * L)) * (HCLgamma / HCLy0));
        const U = (2 * L - C) / (2 * Q - 1);
        const V = C / Q;
        const A = (H + Math.min(2 * H % 1 / 4, -2 * H % 1 / 8)) * Math.PI * 2;
        let T;
        H *= 6;
        if (H <= 0.999) {
          T = Math.tan(A);
          RGB.r = 1;
          RGB.g = T / (1 + T);
        } else if (H <= 1.001) {
          RGB.r = 1;
          RGB.g = 1;
        } else if (H <= 2) {
          T = Math.tan(A);
          RGB.r = (1 + T) / T;
          RGB.g = 1;
        } else if (H <= 3) {
          T = Math.tan(A);
          RGB.g = 1;
          RGB.b = 1 + T;
        } else if (H <= 3.999) {
          T = Math.tan(A);
          RGB.g = 1 / (1 + T);
          RGB.b = 1;
        } else if (H <= 4.001) {
          RGB.g = 0;
          RGB.b = 1;
        } else if (H <= 5) {
          T = Math.tan(A);
          RGB.r = -1 / T;
          RGB.b = 1;
        } else {
          T = Math.tan(A);
          RGB.r = 1;
          RGB.b = -T;
        }
        RGB.r = RGB.r * V + U;
        RGB.g = RGB.g * V + U;
        RGB.b = RGB.b * V + U;
      }
      return RGB.a << 24 | RGB.r << 16 | RGB.g << 8 | RGB.b;
    },
    WrapLinear(value1, value2, t, maxValue) {
      let retval;
      value1 = (value1 + maxValue * Math.trunc(Math.abs(value1 / maxValue))) % maxValue;
      value2 = (value2 + maxValue * Math.trunc(Math.abs(value2 / maxValue))) % maxValue;
      if (Math.abs(value1 - value2) <= 0.5 * maxValue) {
        retval = Interpolation.Utils.Linear(value1, value2, t);
      } else {
        if (value1 < value2) {
          retval = Interpolation.Utils.Linear(value1 + maxValue, value2, t);
        } else {
          retval = Interpolation.Utils.Linear(value1, value2 + maxValue, t);
        }
        retval = retval % maxValue;
      }
      return retval;
    },
    RGBLinear(color1, color2, t) {
      const argb1 = Interpolation.Utils.RGBsplit(color1);
      const argb2 = Interpolation.Utils.RGBsplit(color2);
      const a = Interpolation.Utils.Linear(argb1.a, argb2.a, t);
      const r = Interpolation.Utils.Linear(argb1.r, argb2.r, t);
      const g = Interpolation.Utils.Linear(argb1.g, argb2.g, t);
      const b = Interpolation.Utils.Linear(argb1.b, argb2.b, t);
      return a << 24 | r << 16 | g << 8 | b;
    },
    HSVLinear(color1, color2, t) {
      const ahsv1 = Interpolation.Utils.HSVsplit(color1);
      const ahsv2 = Interpolation.Utils.HSVsplit(color2);
      let h;
      if (Math.abs(ahsv1.h - ahsv2.h) <= 0.5) {
        h = Interpolation.Utils.Linear(ahsv1.h, ahsv2.h, t);
      } else {
        if (ahsv1.h < ahsv2.h) {
          h = Interpolation.Utils.Linear(ahsv1.h + 1, ahsv2.h, t);
        } else {
          h = Interpolation.Utils.Linear(ahsv1.h, ahsv2.h + 1, t);
        }
        h = h % 1;
      }
      const s = Interpolation.Utils.Linear(ahsv1.s, ahsv2.s, t);
      const v = Interpolation.Utils.Linear(ahsv1.v, ahsv2.v, t);
      const a = Interpolation.Utils.Linear(ahsv1.a, ahsv2.a, t);
      return Interpolation.Utils.HSVJoin({ a, h, s, v });
    },
    HCLLinear(color1, color2, t) {
      const ahcl1 = Interpolation.Utils.HCLSplit(color1);
      const ahcl2 = Interpolation.Utils.HCLSplit(color2);
      let h;
      if (Math.abs(ahcl1.h - ahcl2.h) <= 0.5) {
        h = Interpolation.Utils.Linear(ahcl1.h, ahcl2.h, t);
      } else {
        if (ahcl1.h < ahcl2.h) {
          h = Interpolation.Utils.Linear(ahcl1.h + 1, ahcl2.h, t);
        } else {
          h = Interpolation.Utils.Linear(ahcl1.h, ahcl2.h + 1, t);
        }
        h = h % 1;
      }
      const s = Interpolation.Utils.Linear(ahcl1.c, ahcl2.c, t);
      const v = Interpolation.Utils.Linear(ahcl1.l, ahcl2.l, t);
      const a = Interpolation.Utils.Linear(ahcl1.a, ahcl2.a, t);
      return Interpolation.Utils.HSVJoin({ a, h, s, v });
    },
    Linear(p0, p1, t) {
      return (p1 - p0) * t + p0;
    },
    Bernstein(n, i) {
      const fc = Interpolation.Utils.Factorial;
      return fc(n) / fc(i) / fc(n - i);
    },
    Factorial: /* @__PURE__ */ function() {
      const a = [1];
      return function(n) {
        let s = 1;
        if (a[n]) {
          return a[n];
        }
        for (let i = n; i > 1; i--) {
          s *= i;
        }
        a[n] = s;
        return s;
      };
    }(),
    CatmullRom(p0, p1, p2, p3, t) {
      const v0 = (p2 - p0) * 0.5;
      const v1 = (p3 - p1) * 0.5;
      const t2 = t * t;
      const t3 = t * t2;
      return (2 * p1 - 2 * p2 + v0 + v1) * t3 + (-3 * p1 + 3 * p2 - 2 * v0 - v1) * t2 + v0 * t + p1;
    }
  }
};
var Sequence = class _Sequence {
  static __initStatic() {
    this._nextId = 0;
  }
  static nextId() {
    return _Sequence._nextId++;
  }
};
Sequence.__initStatic();
var DEFAULTS = {
  safetyCheckFunction: (_) => true,
  easingFunction: Easing.Linear.None,
  yoyoEasingFunction: void 0,
  interpolationFunction: Interpolation.Geom.Linear
};
var Tween = class _Tween {
  __init() {
    this._isPaused = false;
  }
  __init2() {
    this._valuesStart = {};
  }
  __init3() {
    this._valuesEnd = {};
  }
  __init4() {
    this._valuesStartRepeat = {};
  }
  __init5() {
    this._duration = 0;
  }
  __init6() {
    this._repeatCount = 0;
  }
  __init7() {
    this._repeat = 0;
  }
  __init8() {
    this._yoyo = false;
  }
  __init9() {
    this._isPlaying = false;
  }
  get _reversed() {
    return this.yoyo && this._repeatCount % 2 !== 0;
  }
  __init10() {
    this._delayTime = 0;
  }
  __init11() {
    this._startTime = 0;
  }
  __init12() {
    this._elapsedTime = 0;
  }
  __init13() {
    this._timescale = 1;
  }
  __init14() {
    this._safetyCheckFunction = DEFAULTS.safetyCheckFunction;
  }
  __init15() {
    this._easingFunction = DEFAULTS.easingFunction;
  }
  __init16() {
    this._yoyoEasingFunction = DEFAULTS.yoyoEasingFunction;
  }
  __init17() {
    this._interpolationFunction = DEFAULTS.interpolationFunction;
  }
  __init18() {
    this._chainedTweens = [];
  }
  __init19() {
    this._onStartCallbackFired = false;
  }
  __init20() {
    this._onAfterDelayCallbackFired = false;
  }
  __init21() {
    this._id = Sequence.nextId();
  }
  __init22() {
    this._isChainStopped = false;
  }
  get _group() {
    if (this._groupRef) {
      return this._groupRef;
    } else {
      return Group.shared;
    }
  }
  set _group(value) {
    this._groupRef = value;
  }
  /**
   * Creates an instance of tween.
   * @param object - The target object which properties you want to animate
   * @param group - The {@link Group} this new Tween will belong to. If none is provided it will default to the static {@link Group.shared}
   */
  constructor(object, group) {
    _Tween.prototype.__init.call(this);
    _Tween.prototype.__init2.call(this);
    _Tween.prototype.__init3.call(this);
    _Tween.prototype.__init4.call(this);
    _Tween.prototype.__init5.call(this);
    _Tween.prototype.__init6.call(this);
    _Tween.prototype.__init7.call(this);
    _Tween.prototype.__init8.call(this);
    _Tween.prototype.__init9.call(this);
    _Tween.prototype.__init10.call(this);
    _Tween.prototype.__init11.call(this);
    _Tween.prototype.__init12.call(this);
    _Tween.prototype.__init13.call(this);
    _Tween.prototype.__init14.call(this);
    _Tween.prototype.__init15.call(this);
    _Tween.prototype.__init16.call(this);
    _Tween.prototype.__init17.call(this);
    _Tween.prototype.__init18.call(this);
    _Tween.prototype.__init19.call(this);
    _Tween.prototype.__init20.call(this);
    _Tween.prototype.__init21.call(this);
    _Tween.prototype.__init22.call(this);
    this._object = object;
    this._group = group;
  }
  /**
   * Gets the id for this tween. A tween id is a number that increases perpetually with each tween created. It is used inside {@link Group} to keep track of tweens
   * @returns returns the id for this tween.
   */
  getId() {
    return this._id;
  }
  /**
   * Gets {@link Group} that this tween belongs to.
   * @returns returns the {@link Group} for this tween.
   */
  getGroup() {
    return this._group;
  }
  /**
   * Gets the timescale for this tween. The timescale is a factor by which each deltatime is multiplied, allowing to speed up or slow down the tween.
   * @returns returns the timescale for this tween.
   */
  getTimescale() {
    return this._timescale;
  }
  /**
   * A tween is playing when it has been started but hasn't ended yet. This has nothing to do with pausing. For that see {@link Tween.isPaused}.
   * @returns returns true if this tween is playing.
   */
  isPlaying() {
    return this._isPlaying;
  }
  /**
   * A tween can only be paused if it was playing.
   * @returns returns true if this tween is paused.
   */
  isPaused() {
    return this._isPaused;
  }
  /**
   * Writes the starting values of the tween.
   *
   * **Starting values generated from {@link Tween.start} will be overwritten.**
   * @param properties - Starting values for this tween.
   * @returns returns this tween for daisy chaining methods.
   */
  from(properties) {
    try {
      JSON.stringify(properties);
    } catch (e) {
      throw new Error("The object you provided to the from() method has a circular reference!");
    }
    this._setupProperties(properties, this._valuesStart, properties, this._valuesStartRepeat, true);
    return this;
  }
  /**
   * Set the final values for the target object's properties by copy.
   * This will try to create a deep copy of the `properties` parameter.
   * If you want the tween to keep a reference to the final values use {@link Tween.dynamicTo}.
   *
   * If an array value is provided for a value that originally wasn't an array, it will be interpreted as an interpolable curve and the values inside the array will be interpolated using the function provided in {@link Tween.interpolation}
   *
   * If a string value that starts with either `+` or `-`is provided it will be taken as a _relative value_ to the start value.
   * @param properties - final values for the target object.
   * @param duration - if given it will be used as the duration in **miliseconds**. if not, a call to {@link Tween.duration} will be needed.
   * @returns returns this tween for daisy chaining methods.
   */
  to(properties, duration) {
    try {
      this._valuesEnd = JSON.parse(JSON.stringify(properties));
    } catch (e) {
      console.warn("The object you provided to the to() method has a circular reference!. It can't be cloned. Falling back to dynamic targeting");
      return this.dynamicTo(properties, duration);
    }
    if (duration !== void 0) {
      this._duration = duration;
    }
    return this;
  }
  /**
   * Set the final values for the target object's properties by reference.
   * This will store a reference to the properties object allowing you to change the final values while the tween is running.
   * If you want the tween to make a copy of the final values use {@link Tween.to}.
   * @param properties - final values for the target object.
   * @param duration - if given it will be used as the duration in **miliseconds**. if not, a call to {@link Tween.duration} will be needed.
   * @returns returns this tween for daisy chaining methods.
   */
  dynamicTo(properties, duration) {
    this._valuesEnd = properties;
    if (duration !== void 0) {
      this._duration = duration;
    }
    return this;
  }
  /**
   * Sets the duration for this tween in **miliseconds**.
   * @param d - The duration for this tween in **miliseconds**.
   * @returns returns this tween for daisy chaining methods.
   */
  duration(d) {
    this._duration = d;
    return this;
  }
  /**
   * Tweens won't start by themselves when created. Call this to start the tween.
   * Starting values for the animation will be stored at this moment.
   *
   * **This function can't overwrite the starting values set by {@link Tween.from}**
   *
   * You can call this method on a finished tween to restart it without changing the starting values.
   * To restart a tween and reset the starting values use {@link Tween.restart}
   * @param delay - if given it will be used as the delay in **miliseconds**.
   * @returns returns this tween for daisy chaining methods.
   */
  start(delay) {
    if (this._isPlaying) {
      return this;
    }
    if (delay != void 0) {
      this._delayTime = delay;
    }
    this._group.add(this);
    if (this._reversed) {
      this._swapEndStartRepeatValues(this._valuesStartRepeat, this._valuesEnd);
      this._valuesStart = JSON.parse(JSON.stringify(this._valuesStartRepeat));
    }
    this._repeatCount = 0;
    this._isPlaying = true;
    this._isPaused = false;
    this._onStartCallbackFired = false;
    this._onAfterDelayCallbackFired = false;
    this._isChainStopped = false;
    this._startTime = -this._delayTime;
    this._elapsedTime = 0;
    this._setupProperties(this._object, this._valuesStart, this._valuesEnd, this._valuesStartRepeat, false);
    return this;
  }
  /**
   * @experimental
   * Forces a tween to restart.
   * Starting values for the animation will be stored at this moment.
   * This literally calls {@link Tween.reset} and then {@link Tween.start}.
   *
   * **Starting values will be cleared!. This function will erase all values created from {@link Tween.from} and/or {@link Tween.start}**
   * @param delay - if given it will be used as the delay in **miliseconds**.
   * @returns returns this tween for daisy chaining methods.
   */
  restart(delay) {
    this.reset();
    return this.start(delay);
  }
  /**
   * @experimental
   * Clears the starting and loop starting values.
   *
   * **Starting values will be cleared!. This function will erase all values created from {@link Tween.from} and/or {@link Tween.start}**
   * @returns returns this tween for daisy chaining methods.
   */
  reset() {
    if (this._isPlaying) {
      this.stop();
    }
    this._valuesStart = {};
    this._valuesStartRepeat = {};
    return this;
  }
  /**
   * @experimental
   * Stops the tween and sets the values to the starting ones.
   *
   * @returns returns this tween for daisy chaining methods.
   */
  rewind() {
    if (this._isPlaying) {
      this.stop();
    }
    if (this._reversed) {
      this._swapEndStartRepeatValues(this._valuesStartRepeat, this._valuesEnd);
    }
    const value = this._easingFunction(0);
    this._updateProperties(this._object, this._valuesStart, this._valuesEnd, value);
    return this;
  }
  _setupProperties(_object, _valuesStart, _valuesEnd, _valuesStartRepeat, overwrite) {
    for (const property in _valuesEnd) {
      const startValue = _object[property];
      const startValueIsArray = Array.isArray(startValue);
      const startValueIsNumber = !Number.isNaN(Number(startValue));
      const propType = startValueIsArray ? "array" : typeof startValue;
      const startValueIsObject = propType == "object";
      const endValueIsObject = typeof _valuesEnd[property] == "object";
      const isInterpolationList = !startValueIsArray && Array.isArray(_valuesEnd[property]);
      if (propType == "undefined" || propType == "function" || _valuesEnd[property] == void 0 || !startValueIsArray && !startValueIsNumber && !startValueIsObject) {
        continue;
      }
      if ((startValueIsObject || startValueIsArray || endValueIsObject) && startValue && !isInterpolationList) {
        if (typeof _valuesStart[property] == "undefined") {
          _valuesStart[property] = startValueIsArray ? [] : {};
        }
        if (typeof _valuesStartRepeat[property] == "undefined") {
          _valuesStartRepeat[property] = startValueIsArray ? [] : {};
        }
        this._setupProperties(startValue, _valuesStart[property], _valuesEnd[property], _valuesStartRepeat[property], overwrite);
      } else {
        if (typeof _valuesStart[property] == "undefined" || overwrite) {
          _valuesStart[property] = startValue;
        }
        if (typeof _valuesStartRepeat[property] == "undefined" || overwrite) {
          if (isInterpolationList) {
            _valuesStartRepeat[property] = _valuesEnd[property].slice().reverse()[0];
          } else {
            _valuesStartRepeat[property] = _valuesStart[property] || 0;
          }
        }
      }
    }
  }
  /**
   * Stops this tween
   * @returns returns this tween for daisy chaining methods.
   */
  stop() {
    if (!this._isChainStopped) {
      this._isChainStopped = true;
      this.stopChainedTweens();
    }
    if (!this._isPlaying) {
      return this;
    }
    this._group.remove(this);
    this._isPlaying = false;
    this._isPaused = false;
    if (this._onStopCallback) {
      this._onStopCallback(this._object, this);
    }
    return this;
  }
  /**
   * Fastforwards this tween to the end by triggering an update with an infinite value.
   * This will work even on paused tweens.
   * @returns returns this tween for daisy chaining methods.
   */
  end(endChainedTweens = false) {
    let protectedChainedTweens = [];
    if (!endChainedTweens) {
      protectedChainedTweens = this._chainedTweens;
      this._chainedTweens = [];
    }
    this.resume();
    this.update(Infinity);
    if (!endChainedTweens) {
      this._chainedTweens = protectedChainedTweens;
      for (let i = 0, numChainedTweens = this._chainedTweens.length; i < numChainedTweens; i++) {
        this._chainedTweens[i].start();
      }
    }
    return this;
  }
  /**
   * @experimental
   * Skips forward the in the repeats of this tween by triggering a biiiiig update.
   * Think of this as a less agressive {@link Tween.end}.
   *
   * @param amount - The amount of repeats to skip.
   * @param resetCurrentLoop - If true, the time will become zero and the object will return to the initial value in the next update.
   * @returns returns this tween for daisy chaining methods.
   */
  skip(amount, resetCurrentLoop = false) {
    this.resume();
    this.update(amount * this._duration - (resetCurrentLoop ? this._elapsedTime : 0));
    return this;
  }
  /**
   * Pauses this tween. Does nothing is if the tween was already paused or wasn't playing.
   * Paused tweens ignore all update calls.
   * @returns returns this tween for daisy chaining methods.
   */
  pause() {
    if (this._isPaused || !this._isPlaying) {
      return this;
    }
    this._isPaused = true;
    this._group.remove(this);
    return this;
  }
  /**
   * Resumes this tween. Does nothing if the tween wasn't paused nor running.
   * @returns returns this tween for daisy chaining methods.
   */
  resume() {
    if (!this._isPaused || !this._isPlaying) {
      return this;
    }
    this._isPaused = false;
    this._group.add(this);
    return this;
  }
  /**
   * @experimental
   * Stops tweens chained to this tween. To chain a tween see {@link Tween.chain}.
   *
   * @returns returns this tween for daisy chaining methods.
   */
  stopChainedTweens() {
    for (let i = 0, numChainedTweens = this._chainedTweens.length; i < numChainedTweens; i++) {
      this._chainedTweens[i].stop();
    }
    return this;
  }
  /**
   * @experimental
   * Starts all tweens chained to this tween. To chain a tween see {@link Tween.chain}.
   *
   * @param stopThis - If true, this tween will be stopped before it starts the chained tweens.
   * @returns returns this tween for daisy chaining methods.
   */
  startChainedTweens(stopThis = false) {
    if (stopThis) {
      this.stop();
    }
    for (let i = 0, numChainedTweens = this._chainedTweens.length; i < numChainedTweens; i++) {
      this._chainedTweens[i].start();
    }
    return this;
  }
  /**
   * Sets the {@link Group} for this tween.
   * @param group - the group for this tween. If undefined or null is given, the group will default to {@link Group.shared}.
   * @returns returns this tween for daisy chaining methods.
   */
  group(group) {
    this._group = group;
    return this;
  }
  /**
   * Sets the delay for this tween.
   *
   * This will only be applied at the start of the tween. For delaying the repeating of a tween, see {@link Tween.repeatDelay}
   *
   * **This will only work before calling {@link Tween.start}.**
   * @param amount - the delay for this tween.
   * @returns returns this tween for daisy chaining methods.
   */
  delay(amount) {
    this._delayTime = amount;
    return this;
  }
  /**
   * Sets the timescale for this tween.
   * The deltaTime inside the update will be multiplied by this value allowing to speed up or slow down the flow of time.
   * @param multiplier - the timescale value for this tween.
   * @returns returns this tween for daisy chaining methods.
   */
  timescale(multiplier) {
    this._timescale = multiplier;
    return this;
  }
  /**
   * Sets the number of times this tween will loop
   * @param times - the number of loops. For endless loops use `Infinity`
   * @returns returns this tween for daisy chaining methods.
   */
  repeat(times = Infinity) {
    this._repeat = times;
    return this;
  }
  /**
   * Sets the repeat delay for this tween.
   *
   * This will only be applied at the start of every repeat. For delaying only the start, see {@link Tween.delay}
   * @param amount - the repeat delay for this tween.
   * @returns returns this tween for daisy chaining methods.
   */
  repeatDelay(amount) {
    this._repeatDelayTime = amount;
    return this;
  }
  /**
   * Sets if this tween should yoyo (reflect) itself when repeating.
   * @param yoyo - the yoyo value for this tween.
   * @returns returns this tween for daisy chaining methods.
   */
  yoyo(yoyo = true) {
    this._yoyo = yoyo;
    return this;
  }
  /**
   * Sets the easing function to interpolate the starting values with the final values.
   *
   * You can use the functions inside the {@link Easing} object.
   * @param easingFunction - a function that takes a number between 0 and 1 and returns another number between 0 and 1
   * @returns returns this tween for daisy chaining methods.
   */
  easing(easingFunction) {
    this._easingFunction = easingFunction;
    return this;
  }
  /**
   * @experimental
   * Sets the safety check function to test if the tweening object is still valid.
   * If the function returns a non-truthy value, the tween will skip the update loop.
   * @param safetyCheckFunction - a function that takes the target object for this tween and returns true if the object is still valid.
   * @returns returns this tween for daisy chaining methods.
   */
  safetyCheck(safetyCheckFunction) {
    this._safetyCheckFunction = safetyCheckFunction;
    return this;
  }
  /**
   * @experimental
   * Sets the easing function to interpolate the starting values with the final values on the way back due to a yoyo tween.
   *
   * You can use the functions inside the {@link Easing} object.
   * @param easingFunction - a function that takes a number between 0 and 1 and returns another number between 0 and 1
   * @returns returns this tween for daisy chaining methods.
   */
  yoyoEasing(easingFunction) {
    this._yoyoEasingFunction = easingFunction;
    return this;
  }
  /**
   * Sets the easing function to interpolate the starting values with the final values when the final value is an array of objects.
   * Use this to create bezier curves or interpolate colors.
   *
   * You can use the functions inside the {@link Interpolation} object.
   * @param interpolationFunction
   * @returns returns this tween for daisy chaining methods.
   */
  interpolation(interpolationFunction) {
    this._interpolationFunction = interpolationFunction;
    return this;
  }
  /**
   * Adds tweens to be called when this tween ends.
   * The tweens here will be called all at the same time.
   * @param tweens - tweens to be started when this tween ends
   * @returns returns this tween for daisy chaining methods.
   */
  chain(...tweens) {
    this._chainedTweens = tweens;
    return this;
  }
  /**
   * Sets the onStart callback. This will be called as soon as you call {@link Tween.start}.
   * @param callback - the function to call on start. It will recieve the target object and this tween as a parameter.
   * @returns returns this tween for daisy chaining methods.
   */
  onStart(callback) {
    this._onStartCallback = callback;
    return this;
  }
  /**
   * Sets the onAfterDelay callback. This will be called when the delay is over.
   * @param callback - the function to call on start. It will recieve the target object and this tween as a parameter.
   * @returns returns this tween for daisy chaining methods.
   */
  onAfterDelay(callback) {
    this._onAfterDelayCallback = callback;
    return this;
  }
  /**
   * Sets the onStart callback
   * @param callback - the function to call on start. It will recieve the target object, this tween, and a number between 0 and 1 determining the progress as a parameter.
   * @returns returns this tween for daisy chaining methods.
   */
  onUpdate(callback) {
    this._onUpdateCallback = callback;
    return this;
  }
  /**
   * Sets the onRepeat callback
   * @param callback - the function to call on repeat. It will recieve the target object and this tween as a parameter.
   * @returns returns this tween for daisy chaining methods.
   */
  onRepeat(callback) {
    this._onRepeatCallback = callback;
    return this;
  }
  /**
   * Sets the onComplete callback
   * @param callback - the function to call on complete. It will recieve the target object and this tween as a parameter.
   * @returns returns this tween for daisy chaining methods.
   */
  onComplete(callback) {
    this._onCompleteCallback = callback;
    return this;
  }
  /**
   * Sets the onStop callback
   * @param callback - the function to call on stop. It will recieve the target object and this tween as a parameter.
   * @returns returns this tween for daisy chaining methods.
   */
  onStop(callback) {
    this._onStopCallback = callback;
    return this;
  }
  /**
   * Updates this tween
   * @param deltaTime - the amount of time that passed since last update in **miliseconds**
   * @param preserve - Prevent the removal of stopped, paused, finished or non started tweens from their group.
   * @returns returns true if the tween hasn't finished yet.
   */
  update(deltaTime, preserve = false) {
    const retval = this._internalUpdate(deltaTime);
    if (!retval && !preserve) {
      this._group.remove(this);
    }
    return retval;
  }
  _internalUpdate(deltaTime) {
    if (!this._safetyCheckFunction(this._object)) {
      return false;
    }
    if (this._isPaused) {
      return false;
    }
    deltaTime *= this._timescale;
    let elapsed;
    this._elapsedTime += deltaTime;
    const endTime = this._duration;
    const currentTime = this._startTime + this._elapsedTime;
    if (currentTime > endTime && !this._isPlaying) {
      return false;
    }
    if (!this.isPlaying) {
      this.start();
    }
    if (this._onStartCallbackFired == false) {
      if (this._onStartCallback) {
        this._onStartCallback(this._object, this);
      }
      this._onStartCallbackFired = true;
    }
    if (this._onAfterDelayCallbackFired == false && currentTime >= 0) {
      if (this._onAfterDelayCallback) {
        this._onAfterDelayCallback(this._object, this);
      }
      this._onAfterDelayCallbackFired = true;
    }
    elapsed = currentTime / this._duration;
    if (this._duration == 0) {
      if (currentTime >= 0) {
        elapsed = 1;
      } else {
        elapsed = 0;
      }
    }
    elapsed = Math.min(1, elapsed);
    elapsed = Math.max(0, elapsed);
    let leftOverTime = Number.isFinite(currentTime) ? currentTime % this._duration : currentTime;
    if (Number.isNaN(leftOverTime)) {
      leftOverTime = 0;
    }
    const loopsMade = Math.floor(currentTime / this._duration);
    let value;
    if (this._reversed && this._yoyoEasingFunction) {
      value = this._yoyoEasingFunction(elapsed);
    } else {
      value = this._easingFunction(elapsed);
    }
    this._updateProperties(this._object, this._valuesStart, this._valuesEnd, value);
    if (this._onUpdateCallback && (elapsed != 1 || this._repeat - this._repeatCount <= 0)) {
      this._onUpdateCallback(this._object, elapsed, this);
    }
    if (elapsed == 1) {
      if (this._repeat - this._repeatCount > 0) {
        const oldCount = this._repeatCount;
        this._repeatCount = Math.min(this._repeat + 1, this._repeatCount + loopsMade);
        if (this._onUpdateCallback && (this._repeat - this._repeatCount < 0 || leftOverTime <= 0)) {
          this._onUpdateCallback(this._object, elapsed, this);
        }
        if (this._yoyo) {
          this._swapEndStartRepeatValues(this._valuesStartRepeat, this._valuesEnd);
        } else {
          this._moveForwardStartRepeatValues(this._valuesStartRepeat, this._valuesEnd);
        }
        this._valuesStart = JSON.parse(JSON.stringify(this._valuesStartRepeat));
        if (this._repeatDelayTime !== void 0) {
          this._startTime = -this._repeatDelayTime;
        } else {
          this._startTime = 0;
        }
        if (this._onRepeatCallback) {
          let callbackCount = 1;
          if (Number.isFinite(loopsMade)) {
            callbackCount = this._repeatCount - oldCount;
          } else if (Number.isFinite(this._repeat)) {
            callbackCount = this._repeat - oldCount;
          }
          for (let i = 0; i < callbackCount; i++) {
            this._onRepeatCallback(this._object, oldCount + 1 + i, this);
          }
        }
        this._elapsedTime = 0;
        if (this._repeat - this._repeatCount >= 0) {
          if (leftOverTime > 0 && Number.isFinite(this._repeat)) {
            this._internalUpdate(leftOverTime);
          }
          return true;
        }
      }
      if (this._onCompleteCallback) {
        this._onCompleteCallback(this._object, this);
      }
      for (let i = 0, numChainedTweens = this._chainedTweens.length; i < numChainedTweens; i++) {
        this._chainedTweens[i].start();
        if (leftOverTime > 0) {
          this._chainedTweens[i].update(leftOverTime);
        }
      }
      this._isPlaying = false;
      return false;
    }
    return true;
  }
  _updateProperties(_object, _valuesStart, _valuesEnd, value) {
    for (const property in _valuesEnd) {
      if (_valuesStart[property] == void 0) {
        continue;
      }
      const start = _valuesStart[property];
      let end = _valuesEnd[property];
      const startIsArray = Array.isArray(_object[property]);
      const endIsArray = Array.isArray(end);
      const isInterpolationList = !startIsArray && endIsArray;
      if (isInterpolationList) {
        if (this._reversed) {
          _object[property] = this._interpolationFunction(end.concat([start]), value);
        } else {
          _object[property] = this._interpolationFunction([start].concat(end), value);
        }
      } else if (typeof end == "object" && end) {
        this._updateProperties(_object[property], start, end, value);
      } else {
        end = this._handleRelativeValue(start, end);
        if (typeof end == "number" && (typeof start == "number" || typeof start == "string")) {
          _object[property] = Number(start) + (end - Number(start)) * value;
          if (typeof start == "string") {
            _object[property] = String(_object[property]);
          }
        }
      }
    }
  }
  _handleRelativeValue(start, end) {
    if (typeof end !== "string") {
      return end;
    }
    if (end.charAt(0) == "+" || end.charAt(0) == "-") {
      return start + Number(end);
    }
    return Number(end);
  }
  _swapEndStartRepeatValues(_valuesStartRepeat, _valuesEnd) {
    for (const property in _valuesStartRepeat) {
      const isInterpolationList = !Array.isArray(_valuesStartRepeat[property]) && Array.isArray(_valuesEnd[property]);
      if (typeof _valuesStartRepeat[property] == "object") {
        this._swapEndStartRepeatValues(_valuesStartRepeat[property], _valuesEnd[property]);
      } else {
        const tmp = _valuesStartRepeat[property];
        if (typeof _valuesEnd[property] == "string") {
          _valuesStartRepeat[property] = Number(_valuesStartRepeat[property]) + Number(_valuesEnd[property]);
          _valuesEnd[property] = tmp;
        } else if (isInterpolationList) {
          const aux = _valuesEnd[property].slice().reverse();
          _valuesStartRepeat[property] = aux[0];
          _valuesEnd[property] = aux;
        } else {
          _valuesStartRepeat[property] = _valuesEnd[property];
          _valuesEnd[property] = tmp;
        }
      }
    }
  }
  _moveForwardStartRepeatValues(_valuesStartRepeat, _valuesEnd) {
    for (const property in _valuesStartRepeat) {
      if (typeof _valuesEnd[property] == "object") {
        this._moveForwardStartRepeatValues(_valuesStartRepeat[property], _valuesEnd[property]);
      } else {
        if (typeof _valuesEnd[property] == "string") {
          _valuesStartRepeat[property] = Number(_valuesStartRepeat[property]) + Number(_valuesEnd[property]);
        }
      }
    }
  }
};

// node_modules/@pixi/ui/lib/utils/helpers/fit.mjs
function fitToView(parent, child, padding = 0, uniformScaling = true) {
  let scaleX = child.scale.x;
  let scaleY = child.scale.y;
  if (!parent) {
    throw new Error("Parent is not defined");
  }
  const maxWidth = parent.width - padding * 2;
  const maxHeight = parent.height - padding * 2;
  const widthOverflow = maxWidth - Math.round(child.width);
  const heightOverflow = maxHeight - Math.round(child.height);
  if (widthOverflow < 0) {
    scaleX = maxWidth / (child.width / scaleX);
  }
  if (heightOverflow < 0) {
    scaleY = maxHeight / (child.height / scaleY);
  }
  if (scaleX <= 0 || scaleY <= 0) {
    child.scale.set(0);
    return;
  }
  if (uniformScaling || child.scale.x === child.scale.y) {
    const scale = Math.min(scaleX, scaleY);
    child.scale.set(scale, scale);
  } else {
    const ratio = child.scale.x / child.scale.y;
    if (widthOverflow < heightOverflow) {
      child.scale.set(scaleX, scaleX / ratio);
    } else {
      child.scale.set(scaleY * ratio, scaleY);
    }
  }
}

// node_modules/@pixi/ui/lib/utils/helpers/text.mjs
function getTextView(text) {
  if (typeof text === "string" || typeof text === "number") {
    return new Text({ text: String(text) });
  }
  return text;
}

// node_modules/@pixi/ui/lib/FancyButton.mjs
var __defProp9 = Object.defineProperty;
var __defNormalProp9 = (obj, key, value) => key in obj ? __defProp9(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField9 = (obj, key, value) => {
  __defNormalProp9(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
var FancyButton = class extends ButtonContainer {
  /**
   * Creates a button with a lot of tweaks.
   * @param {object} options - Button options.
   * @param {Container} options.defaultView - Container-based view that is shown when non of the button events are active.
   * @param {Container} options.hoverView - Container-based view that is shown when the mouse hovers over the button.
   * @param {Container} options.pressedView - Container-based view, shown when the mouse press on the component.
   * @param {Container} options.disabledView - Container-based view shown when the button is disabled.
   * @param {Container} options.icon - Container-based view for the button icon.
   * @param {Text} options.text - Text-based view for the button text.
   * @param {number} options.padding - Padding of the button text and icon views.
   * If button text or icon does not fit active view + padding it will scale down to fit.
   * @param {Point} options.offset - Offset of the button state views.
   * @param {Point} options.textOffset - Offset of the text view.
   * @param {Point} options.iconOffset - Offset of the icon view.
   * @param {number} options.scale - Scale of the button. Scale will be applied to a main container,
   * when all animations scales will be applied to the inner view.
   * @param {number} options.defaultTextScale - Base text scaling to take into account when fitting inside the button.
   * @param {number} options.defaultIconScale - Base icon scaling to take into account when fitting inside the button.
   * @param {number} options.defaultTextAnchor - Base text anchor to take into account when fitting and placing inside the button.
   * @param {number} options.defaultIconAnchor - Base icon anchor to take into account when fitting and placing inside the button.
   * @param {number} options.anchor - Anchor point of the button.
   * @param {number} options.anchorX - Horizontal anchor point of the button.
   * @param {number} options.anchorY - Vertical anchor point of the button.
   * @param options.animations - Animations that will be played when the button state changes.
   */
  constructor(options) {
    super();
    __publicField9(this, "animations");
    __publicField9(this, "originalInnerViewState");
    __publicField9(this, "defaultDuration", 100);
    __publicField9(this, "options");
    __publicField9(this, "_padding");
    __publicField9(this, "_offset");
    __publicField9(this, "_textOffset");
    __publicField9(this, "iconOffset");
    __publicField9(this, "innerView", new Container());
    __publicField9(this, "_views", {});
    __publicField9(this, "state");
    __publicField9(this, "anchor");
    __publicField9(this, "_defaultTextScale", { x: 1, y: 1 });
    __publicField9(this, "_defaultIconScale", { x: 1, y: 1 });
    __publicField9(this, "_defaultTextAnchor", { x: 0.5, y: 0.5 });
    __publicField9(this, "_defaultIconAnchor", { x: 0.5, y: 0.5 });
    this.options = options ?? {};
    const {
      defaultView,
      hoverView,
      pressedView,
      disabledView,
      text,
      padding,
      offset,
      textOffset,
      iconOffset,
      defaultTextScale: textScale,
      defaultIconScale: iconScale,
      defaultTextAnchor: textAnchor,
      defaultIconAnchor: iconAnchor,
      scale,
      anchor,
      anchorX,
      anchorY,
      icon,
      animations
    } = options ?? {};
    this.addChild(this.innerView);
    this.anchor = new ObservablePoint({
      _onUpdate: () => this.updateAnchor()
    });
    this.anchor.set(anchorX ?? anchor ?? 0, anchorY ?? anchor ?? 0);
    this.padding = padding ?? 0;
    this.offset = offset;
    this.textOffset = textOffset;
    this.iconOffset = iconOffset;
    this.defaultTextScale = textScale;
    this.defaultIconScale = iconScale;
    this.defaultTextAnchor = textAnchor;
    this.defaultIconAnchor = iconAnchor;
    this.scale.set(scale ?? 1);
    if (animations) {
      this.animations = animations;
      Ticker.shared.add(() => Group.shared.update());
    }
    this.setState("default");
    this.defaultView = defaultView;
    this.hoverView = hoverView;
    this.pressedView = pressedView;
    this.disabledView = disabledView;
    this.text = text;
    this.iconView = icon;
    this.initStateControl();
  }
  /**
   * Updates the text of the button and updates its scaling basing on the new size.
   * @param {string | number} text
   */
  set text(text) {
    if (!text || text === 0) {
      this.removeView("textView");
      return;
    }
    if (!this._views.textView) {
      this.createTextView(text);
      return;
    }
    this._views.textView.text = text.toString();
  }
  /** Returns the text string of the button text element. */
  get text() {
    var _a;
    return (_a = this._views.textView) == null ? void 0 : _a.text;
  }
  /**
   * Setter, that prevents all button events from firing.
   * @param {boolean} enabled
   */
  set enabled(enabled) {
    this.button.enabled = enabled;
    this.setState(enabled ? "default" : "disabled");
  }
  get enabled() {
    return this.button.enabled;
  }
  /**
   * Updates button state and shows the according views.
   *
   * Updates positions and offsets of the views.
   *
   * Plays animations if they are set.
   * @param {State} newState
   * @param force
   */
  setState(newState, force = false) {
    if (!force && this.state === newState) {
      return;
    }
    const currentView = this.getStateView(this.state);
    if (currentView)
      currentView.visible = false;
    this.state = newState;
    const activeView = this.getStateView(newState);
    if (activeView) {
      this.setOffset(activeView, newState, this.offset);
      activeView.visible = true;
    }
    this.updateAnchor();
    this.playAnimations(newState);
  }
  /**
   *
   * Manage button text view.
   * @param {string | Text} text - can be a string, Text, BitmapText ot HTMLText (Container-based element).
   */
  createTextView(text) {
    var _a;
    this._views.textView = getTextView(text);
    if (((_a = this.options) == null ? void 0 : _a.defaultTextScale) === void 0) {
      const { x, y } = this._views.textView.scale;
      this._defaultTextScale = { x, y };
    }
    this.innerView.addChild(this._views.textView);
    this.adjustTextView(this.state);
  }
  /**
   * Manages views offsets if it's set.
   * @param view
   * @param state
   * @param offset
   */
  setOffset(view, state, offset) {
    const stateOffset = offset ? offset[state] : {
      x: 0,
      y: 0
    };
    const defaultStateOffset = offset == null ? void 0 : offset.default;
    if (stateOffset) {
      view.x += stateOffset.x ?? 0;
      view.y += stateOffset.y ?? 0;
    } else if (defaultStateOffset) {
      view.x += defaultStateOffset.x ?? 0;
      view.y += defaultStateOffset.y ?? 0;
    } else if (offset.x || offset.y) {
      view.x += offset.x ?? 0;
      view.y += offset.y ?? 0;
    }
  }
  /**
   * Returns active view for the state.
   * @param state
   */
  getStateView(state) {
    if (!this._views)
      return void 0;
    switch (state) {
      case "hover":
        return this._views.hoverView ?? this._views.defaultView ?? void 0;
      case "pressed":
        return this._views.pressedView ?? this._views.hoverView ?? this._views.defaultView ?? void 0;
      case "disabled":
        return this._views.disabledView ?? this._views.defaultView ?? void 0;
      case "default":
        return this._views.defaultView ?? void 0;
      default:
        return void 0;
    }
  }
  /**
   * Adjusts text view position and scale.
   * @param {State} state
   */
  adjustTextView(state) {
    var _a;
    if (!this.text)
      return;
    const activeView = this.getStateView(this.state);
    const { x: anchorX, y: anchorY } = this._defaultTextAnchor;
    if (activeView) {
      if (!((_a = this.options) == null ? void 0 : _a.ignoreRefitting)) {
        this._views.textView.scale.set(this._defaultTextScale.x, this._defaultTextScale.y);
      }
      fitToView(activeView, this._views.textView, this.padding, false);
      this._views.textView.x = activeView.x + activeView.width / 2;
      this._views.textView.y = activeView.y + activeView.height / 2;
    }
    this._views.textView.anchor.set(anchorX, anchorY);
    this.setOffset(this._views.textView, state, this.textOffset);
  }
  /**
   * Adjusts icon view position and scale.
   * @param {State} state
   */
  adjustIconView(state) {
    var _a;
    if (!this._views.iconView) {
      return;
    }
    const activeView = this.getStateView(state);
    if (!activeView) {
      return;
    }
    if (!((_a = this.options) == null ? void 0 : _a.ignoreRefitting)) {
      this._views.iconView.scale.set(this._defaultIconScale.x, this._defaultIconScale.y);
    }
    const { x: anchorX, y: anchorY } = this._defaultIconAnchor;
    fitToView(activeView, this._views.iconView, this.padding, false);
    if ("anchor" in this._views.iconView) {
      this._views.iconView.anchor.set(anchorX, anchorY);
    } else {
      this._views.iconView.pivot.set(
        anchorX * (this._views.iconView.width / this._views.iconView.scale.x),
        anchorY * (this._views.iconView.height / this._views.iconView.scale.y)
      );
    }
    this._views.iconView.x = activeView.x + activeView.width / 2;
    this._views.iconView.y = activeView.y + activeView.height / 2;
    this.setOffset(this._views.iconView, state, this.iconOffset);
  }
  /**
   * Reset views positions according to the button anchor setting.
   * We have to set the anchor position for each view individually, as each of them
   * can be a different type of view (container without anchor, sprite with anchor, etc)
   * we have to reset all anchors to 0,0 and then set the positions manually.
   */
  updateAnchor() {
    if (!this._views)
      return;
    const anchorX = this.anchor.x ?? 0;
    const anchorY = this.anchor.y ?? 0;
    const views = [this._views.defaultView, this._views.hoverView, this._views.pressedView, this._views.disabledView];
    views.forEach((view) => {
      var _a;
      if (!view)
        return;
      (_a = view.anchor) == null ? void 0 : _a.set(0);
      view.x = -view.width * anchorX;
      view.y = -view.height * anchorY;
    });
    if (this._views.defaultView) {
      const { x, y, width, height } = this._views.defaultView;
      this.hitArea = new Rectangle(x, y, width, height);
    }
    this.adjustIconView(this.state);
    this.adjustTextView(this.state);
  }
  /**
   * Sets the default view of the button.
   * @param { string | Container } view - string (path to the image) or a Container-based view
   */
  set defaultView(view) {
    this.updateView("defaultView", view);
  }
  /** Returns the default view of the button. */
  get defaultView() {
    return this._views.defaultView;
  }
  /**
   * Sets the hover view of the button.
   * @param { string | Container } view - string (path to the image) or a Container-based view
   */
  set hoverView(view) {
    this.updateView("hoverView", view);
    if (this._views.hoverView && this.state !== "hover") {
      this._views.hoverView.visible = false;
    }
  }
  /** Returns the hover view of the button. */
  get hoverView() {
    return this._views.hoverView;
  }
  /** Sets the pressed view of the button. */
  set pressedView(view) {
    this.updateView("pressedView", view);
    if (this._views.pressedView) {
      this._views.pressedView.visible = false;
    }
  }
  /** Returns the pressed view of the button. */
  get pressedView() {
    return this._views.pressedView;
  }
  /** Sets the disabled view of the button. */
  set disabledView(view) {
    this.updateView("disabledView", view);
    if (this._views.disabledView) {
      this._views.disabledView.visible = false;
    }
  }
  /** Returns the disabled view of the button. */
  get disabledView() {
    return this._views.disabledView;
  }
  /**
   * Helper method to update or cleanup button views.
   * @param { 'defaultView' | 'hoverView' | 'pressedView' | 'disabledView' } viewType - type of the view to update
   * @param { string | Container | null } view - new view
   */
  updateView(viewType, view) {
    var _a;
    if (view === void 0)
      return;
    this.removeView(viewType);
    if (view === null) {
      return;
    }
    if ((_a = this.options) == null ? void 0 : _a.nineSliceSprite) {
      if (typeof view === "string") {
        this._views[viewType] = new NineSliceSprite({
          texture: Texture.from(view),
          leftWidth: this.options.nineSliceSprite[0],
          topHeight: this.options.nineSliceSprite[1],
          rightWidth: this.options.nineSliceSprite[2],
          bottomHeight: this.options.nineSliceSprite[3]
        });
      } else {
        console.warn("NineSliceSprite can not be used with views set as Container.");
      }
    }
    if (!this._views[viewType]) {
      this._views[viewType] = getView(view);
    }
    this.setOffset(this._views[viewType], this.state, this.offset);
    if (!this._views[viewType].parent) {
      this.innerView.addChild(this._views[viewType]);
    }
    this.updateAnchor();
    if (this._views.iconView) {
      this.innerView.addChild(this._views.iconView);
    }
    if (this._views.textView) {
      this.innerView.addChild(this._views.textView);
    }
    this.setState(this.state, true);
  }
  /**
   * Removes button view by type
   * @param {'defaultView' | 'hoverView' | 'pressedView' | 'disabledView'} viewType - type of the view to remove
   */
  removeView(viewType) {
    if (this._views[viewType]) {
      this.innerView.removeChild(this._views[viewType]);
      this._views[viewType] = null;
    }
  }
  /**
   * Sets the textView of the button.
   * @param { string | number | PixiText | Text | BitmapText | HTMLText } textView - string, text or pixi text instance.
   */
  set textView(textView) {
    if (textView === void 0)
      return;
    this.removeView("textView");
    if (textView === null) {
      return;
    }
    this.createTextView(textView);
  }
  /**
   * Returns the text view of the button.
   * @returns pixi text instance or undefined.
   */
  get textView() {
    return this._views.textView;
  }
  /**
   * Sets the iconView of the button.
   * @param { string | Container } view - string (path to the image) or a Container-based view
   */
  set iconView(view) {
    var _a;
    if (view === void 0)
      return;
    this.removeView("iconView");
    if (view === null) {
      return;
    }
    this._views.iconView = getView(view);
    if (((_a = this.options) == null ? void 0 : _a.defaultIconScale) === void 0) {
      const { x, y } = this._views.iconView.scale;
      this._defaultIconScale = { x, y };
    }
    if (!this._views.iconView.parent) {
      this.innerView.addChild(this._views.iconView);
    }
    this.setState(this.state, true);
  }
  /** Returns the icon view of the button. */
  get iconView() {
    return this._views.iconView;
  }
  /**
   * Starts animation for the current button state if configured.
   * @param {State} state
   */
  playAnimations(state) {
    var _a;
    if (!this.animations)
      return;
    if (state === "default" && !this.originalInnerViewState) {
      this.originalInnerViewState = {
        x: this.innerView.x,
        y: this.innerView.y,
        width: this.innerView.width,
        height: this.innerView.height,
        scale: {
          x: this.innerView.scale.x,
          y: this.innerView.scale.y
        }
      };
      const defaultStateAnimation = (_a = this.animations) == null ? void 0 : _a.default;
      if (defaultStateAnimation) {
        this.innerView.x = defaultStateAnimation.props.x ?? this.originalInnerViewState.x;
        this.innerView.y = defaultStateAnimation.props.y ?? this.originalInnerViewState.y;
        this.innerView.width = defaultStateAnimation.props.width ?? this.originalInnerViewState.width;
        this.innerView.height = defaultStateAnimation.props.height ?? this.originalInnerViewState.height;
        this.innerView.scale.x = defaultStateAnimation.props.scale.x ?? this.originalInnerViewState.scale.x;
        this.innerView.scale.y = defaultStateAnimation.props.scale.y ?? this.originalInnerViewState.scale.y;
        return;
      }
    }
    const stateAnimation = this.animations[state] ?? this.animations.default;
    if (stateAnimation) {
      const data = stateAnimation;
      this.defaultDuration = data.duration;
      new Tween(this.innerView).to(data.props, data.duration).start();
      return;
    }
    new Tween(this.innerView).to(this.originalInnerViewState, this.defaultDuration).start();
  }
  initStateControl() {
    this.onDown.connect(() => {
      this.setState("pressed");
    });
    this.onUp.connect(() => {
      isMobile.any ? this.setState("default") : this.setState("hover");
    });
    this.onUpOut.connect(() => {
      this.setState("default");
    });
    this.onOut.connect(() => {
      if (!this.button.isDown) {
        this.setState("default");
      }
    });
    this.onPress.connect(() => {
      isMobile.any ? this.setState("default") : this.setState("hover");
    });
    this.onHover.connect(() => {
      if (!this.button.isDown) {
        isMobile.any ? this.setState("default") : this.setState("hover");
      }
    });
  }
  /**
   * Sets the button padding.
   * @param {number} padding - padding of the button text and icon views.
   */
  set padding(padding) {
    this._padding = padding;
    this.adjustTextView(this.state);
    this.adjustIconView(this.state);
  }
  /** Returns the button padding. */
  get padding() {
    return this._padding;
  }
  /**
   * Sets the button offset.
   * @param { { x?: number; y?: number } } offset - offset of the button.
   * Can be set for each state of the button.
   */
  set offset(offset) {
    this._offset = offset;
    this.updateAnchor();
  }
  /** Returns the button offset. */
  get offset() {
    return this._offset;
  }
  /**
   * Sets the button text offset.
   * @param { { x?: number; y?: number } } textOffset - offsets of the button text view.
   * can be set for each state of the button.
   */
  set textOffset(textOffset) {
    this._textOffset = textOffset;
    this.adjustTextView(this.state);
  }
  /** Returns the button text offset. */
  get textOffset() {
    return this._textOffset;
  }
  /**
   * Sets the base scale for the text view to take into account when fitting inside the button.
   * @param {Pos | number} scale - base scale of the text view.
   */
  set defaultTextScale(scale) {
    if (scale === void 0)
      return;
    this.options.defaultTextScale = scale;
    const isNumber = typeof scale === "number";
    this._defaultTextScale.x = isNumber ? scale : scale.x ?? 1;
    this._defaultTextScale.y = isNumber ? scale : scale.y ?? 1;
    this.adjustTextView(this.state);
  }
  /** Returns the text view base scale. */
  get defaultTextScale() {
    return this.defaultTextScale;
  }
  /**
   * Sets the base scale for the icon view to take into account when fitting inside the button.
   * @param {Pos | number} scale - base scale of the icon view.
   */
  set defaultIconScale(scale) {
    if (scale === void 0)
      return;
    this.options.defaultIconScale = scale;
    const isNumber = typeof scale === "number";
    this._defaultIconScale.x = isNumber ? scale : scale.x ?? 1;
    this._defaultIconScale.y = isNumber ? scale : scale.y ?? 1;
    this.adjustIconView(this.state);
  }
  /** Returns the icon view base scale. */
  get defaultIconScale() {
    return this.defaultIconScale;
  }
  /**
   * Sets the base anchor for the text view to take into account when fitting and placing inside the button.
   * @param {Pos | number} anchor - base anchor of the text view.
   */
  set defaultTextAnchor(anchor) {
    if (anchor === void 0)
      return;
    this.options.defaultTextAnchor = anchor;
    const isNumber = typeof anchor === "number";
    this._defaultTextAnchor.x = isNumber ? anchor : anchor.x ?? 1;
    this._defaultTextAnchor.y = isNumber ? anchor : anchor.y ?? 1;
    this.adjustTextView(this.state);
  }
  /** Returns the text view base anchor. */
  get defaultTextAnchor() {
    return this.defaultTextAnchor;
  }
  /**
   * Sets the base anchor for the icon view to take into account when fitting and placing inside the button.
   * @param {Pos | number} anchor - base anchor of the icon view.
   */
  set defaultIconAnchor(anchor) {
    if (anchor === void 0)
      return;
    this.options.defaultIconAnchor = anchor;
    const isNumber = typeof anchor === "number";
    this._defaultIconAnchor.x = isNumber ? anchor : anchor.x ?? 1;
    this._defaultIconAnchor.y = isNumber ? anchor : anchor.y ?? 1;
    this.adjustIconView(this.state);
  }
  /** Returns the icon view base anchor. */
  get defaultIconAnchor() {
    return this.defaultIconAnchor;
  }
  /**
   * Sets width of a FancyButtons state views.
   * If nineSliceSprite is set, then width will be set to nineSliceSprites of a views.
   * If nineSliceSprite is not set, then width will control components width as Container.
   * @param width - Width value.
   */
  set width(width) {
    var _a;
    if ((_a = this.options) == null ? void 0 : _a.nineSliceSprite) {
      if (this._views.defaultView) {
        this._views.defaultView.width = width;
      }
      if (this._views.hoverView) {
        this._views.hoverView.width = width;
      }
      if (this._views.pressedView) {
        this._views.pressedView.width = width;
      }
      if (this._views.disabledView) {
        this._views.disabledView.width = width;
      }
      this.adjustTextView(this.state);
      this.adjustIconView(this.state);
      this.updateAnchor();
    } else {
      super.width = width;
    }
  }
  /** Gets width of a FancyButton. */
  get width() {
    return super.width;
  }
  /**
   * Sets height of a FancyButtons state views.
   * If nineSliceSprite is set, then height will be set to nineSliceSprites of a views.
   * If nineSliceSprite is not set, then height will control components height as Container.
   * @param height - Height value.
   */
  set height(height) {
    var _a;
    if ((_a = this.options) == null ? void 0 : _a.nineSliceSprite) {
      if (this._views.defaultView) {
        this._views.defaultView.height = height;
      }
      if (this._views.hoverView) {
        this._views.hoverView.height = height;
      }
      if (this._views.pressedView) {
        this._views.pressedView.height = height;
      }
      if (this._views.disabledView) {
        this._views.disabledView.height = height;
      }
      this.adjustTextView(this.state);
      this.adjustIconView(this.state);
      this.updateAnchor();
    } else {
      super.height = height;
    }
  }
  /** Gets height of a FancyButton. */
  get height() {
    return super.height;
  }
  setSize(value, height) {
    var _a;
    if ((_a = this.options) == null ? void 0 : _a.nineSliceSprite) {
      if (this._views.defaultView) {
        this._views.defaultView.setSize(value, height);
      }
      if (this._views.hoverView) {
        this._views.hoverView.setSize(value, height);
      }
      if (this._views.pressedView) {
        this._views.pressedView.setSize(value, height);
      }
      if (this._views.disabledView) {
        this._views.disabledView.setSize(value, height);
      }
      this.adjustTextView(this.state);
      this.adjustIconView(this.state);
      this.updateAnchor();
    } else {
      super.setSize(value, height);
    }
  }
};

// node_modules/@pixi/ui/lib/Input.mjs
var import_typed_signals5 = __toESM(require_dist(), 1);
var __defProp10 = Object.defineProperty;
var __defNormalProp10 = (obj, key, value) => key in obj ? __defProp10(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField10 = (obj, key, value) => {
  __defNormalProp10(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
var Input = class extends Container {
  /**
   * Creates an input.
   * @param { number } options - Options object to use.
   * @param { Sprite | Graphics | string } options.bg - Background of the Input.
   * @param { PixiTextStyle } options.textStyle - Text style of the Input.
   * @param { string } options.placeholder - Placeholder of the Input.
   * @param { string } options.value - Value of the Input.
   * @param { number } options.maxLength - Max length of the Input.
   * @param { 'left' | 'center' | 'right' } options.align - Align of the Input.
   * @param { Padding } options.padding - Padding of the Input.
   * @param { number } options.padding.top - Top padding of the Input.
   * @param { number } options.padding.right - Right padding of the Input.
   * @param { number } options.padding.bottom - Bottom padding of the Input.
   * @param { number } options.padding.left - Left padding of the Input.
   * @param { boolean } options.cleanOnFocus - Clean Input on focus.
   * @param { Array } options.nineSliceSprite - NineSliceSprite values for bg and fill ([number, number, number, number]).
   */
  constructor(options) {
    super();
    __publicField10(this, "_bg");
    __publicField10(this, "inputMask");
    __publicField10(this, "_cursor");
    __publicField10(this, "inputField");
    __publicField10(this, "placeholder");
    __publicField10(this, "editing", false);
    __publicField10(this, "tick", 0);
    __publicField10(this, "lastInputData");
    __publicField10(this, "activation", false);
    __publicField10(this, "options");
    __publicField10(this, "input");
    __publicField10(this, "handleActivationBinding", this.handleActivation.bind(this));
    __publicField10(this, "onKeyUpBinding", this.onKeyUp.bind(this));
    __publicField10(this, "stopEditingBinding", this.stopEditing.bind(this));
    __publicField10(this, "onInputBinding", this.onInput.bind(this));
    __publicField10(this, "onEnter");
    __publicField10(this, "onChange");
    __publicField10(this, "paddingTop", 0);
    __publicField10(this, "paddingRight", 0);
    __publicField10(this, "paddingBottom", 0);
    __publicField10(this, "paddingLeft", 0);
    this.options = options;
    this.options = options;
    this.padding = options.padding;
    this.cursor = "text";
    this.interactive = true;
    this.on("pointertap", () => {
      this.activation = true;
      isMobile.any && this.handleActivation();
    });
    if (isMobile.any) {
      window.addEventListener("touchstart", this.handleActivationBinding);
    } else if (!isMobile.any) {
      window.addEventListener("click", this.handleActivationBinding);
      window.addEventListener("keyup", this.onKeyUpBinding);
      window.addEventListener("input", this.onInputBinding);
    }
    this.onEnter = new import_typed_signals5.Signal();
    this.onChange = new import_typed_signals5.Signal();
    Ticker.shared.add((ticker) => this.update(ticker.deltaTime));
    if (options.bg) {
      this.bg = options.bg;
    } else {
      console.error("Input: bg is not defined, please define it.");
    }
  }
  onInput(e) {
    this.lastInputData = e.data;
  }
  onKeyUp(e) {
    const key = e.key;
    if (key === "Backspace") {
      this._delete();
    } else if (key === "Escape" || key === "Enter") {
      this.stopEditing();
    } else if (key.length === 1) {
      this._add(key);
    } else if (this.lastInputData && this.lastInputData.length === 1) {
      this._add(this.lastInputData);
    }
  }
  init() {
    const options = this.options;
    const defaultTextStyle = {
      fill: 0,
      align: "center"
    };
    this.options.textStyle = options.textStyle ?? defaultTextStyle;
    this.options.TextClass = options.TextClass ?? Text;
    const textStyle = { ...defaultTextStyle, ...options.textStyle };
    this.inputField = new this.options.TextClass({ text: "", style: textStyle });
    this._cursor = new Sprite(Texture.WHITE);
    this._cursor.tint = Number(options.textStyle.fill) || 0;
    this._cursor.anchor.set(0.5);
    this._cursor.width = 2;
    this._cursor.height = this.inputField.height * 0.8;
    this._cursor.alpha = 0;
    this.placeholder = new this.options.TextClass({ text: options.placeholder, style: textStyle ?? defaultTextStyle });
    this.placeholder.visible = !!options.placeholder;
    this.addChild(this.inputField, this.placeholder, this._cursor);
    this.value = options.value ?? "";
    this.align();
  }
  set bg(bg) {
    var _a, _b;
    if (this._bg) {
      this._bg.destroy();
    }
    if ((_a = this.options) == null ? void 0 : _a.nineSliceSprite) {
      if (typeof bg === "string") {
        this._bg = new NineSliceSprite({
          texture: Texture.from(bg),
          leftWidth: this.options.nineSliceSprite[0],
          topHeight: this.options.nineSliceSprite[1],
          rightWidth: this.options.nineSliceSprite[2],
          bottomHeight: this.options.nineSliceSprite[3]
        });
      } else {
        console.warn("NineSliceSprite can not be used with views set as Container.");
      }
    }
    if (!this._bg) {
      this._bg = getView(bg);
    }
    this._bg.cursor = "text";
    this._bg.interactive = true;
    this.addChildAt(this._bg, 0);
    if (!this.inputField) {
      this.init();
    }
    if (this.options.addMask) {
      if (this.inputMask) {
        this.inputField.mask = null;
        this._cursor.mask = null;
        this.inputMask.destroy();
      }
      if (((_b = this.options) == null ? void 0 : _b.nineSliceSprite) && typeof bg === "string") {
        this.inputMask = new NineSliceSprite({
          texture: Texture.from(bg),
          leftWidth: this.options.nineSliceSprite[0],
          topHeight: this.options.nineSliceSprite[1],
          rightWidth: this.options.nineSliceSprite[2],
          bottomHeight: this.options.nineSliceSprite[3]
        });
      } else if (bg instanceof Sprite) {
        this.inputMask = new Sprite(bg.texture);
      } else if (bg instanceof Graphics) {
        this.inputMask = bg.clone(true);
      } else {
        this.inputMask = getView(bg);
      }
      this.inputField.mask = this.inputMask;
      this._cursor.mask = this.inputMask;
      this.addChildAt(this.inputMask, 0);
    }
  }
  get bg() {
    return this._bg;
  }
  _add(key) {
    if (!this.editing) {
      return;
    }
    if (this.options.maxLength && this.value.length >= this.options.maxLength) {
      return;
    }
    this.value = this.value + key;
    this.onChange.emit(this.value);
  }
  _delete() {
    if (!this.editing || this.value.length === 0)
      return;
    const array = this.value.split("");
    array.pop();
    this.value = array.join("");
    this.onChange.emit(this.value);
  }
  _startEditing() {
    if (this.options.cleanOnFocus) {
      this.value = "";
    }
    this.tick = 0;
    this.editing = true;
    this.placeholder.visible = false;
    this._cursor.alpha = 1;
    if (isMobile.any) {
      this.createInputField();
    }
    this.align();
  }
  createInputField() {
    var _a, _b;
    if (this.input) {
      this.input.removeEventListener("blur", this.stopEditingBinding);
      this.input.removeEventListener("keyup", this.onKeyUpBinding);
      this.input.removeEventListener("input", this.onInputBinding);
      (_a = this.input) == null ? void 0 : _a.blur();
      (_b = this.input) == null ? void 0 : _b.remove();
      this.input = null;
    }
    const input = document.createElement("input");
    document.body.appendChild(input);
    input.style.position = "fixed";
    input.style.left = `${this.getGlobalPosition().x}px`;
    input.style.top = `${this.getGlobalPosition().y}px`;
    input.style.opacity = "0.0000001";
    input.style.width = `${this._bg.width}px`;
    input.style.height = `${this._bg.height}px`;
    input.style.border = "none";
    input.style.outline = "none";
    input.style.background = "white";
    if (isMobile.android.device) {
      setTimeout(() => {
        input.focus();
        input.click();
      }, 100);
    } else {
      input.focus();
      input.click();
    }
    input.addEventListener("blur", this.stopEditingBinding);
    input.addEventListener("keyup", this.onKeyUpBinding);
    input.addEventListener("input", this.onInputBinding);
    this.input = input;
    this.align();
  }
  handleActivation() {
    this.stopEditing();
    if (this.activation) {
      this._startEditing();
      this.activation = false;
    }
  }
  stopEditing() {
    var _a, _b;
    if (!this.editing)
      return;
    this._cursor.alpha = 0;
    this.editing = false;
    if (this.inputField.text === "") {
      this.placeholder.visible = true;
    }
    if (this.value.length === 0)
      this.placeholder.visible = true;
    if (isMobile.any) {
      (_a = this.input) == null ? void 0 : _a.blur();
      (_b = this.input) == null ? void 0 : _b.remove();
      this.input = null;
    }
    this.align();
    this.onEnter.emit(this.value);
  }
  update(dt) {
    if (!this.editing)
      return;
    this.tick += dt * 0.1;
    this._cursor.alpha = Math.round(Math.sin(this.tick) * 0.5 + 0.5);
  }
  align() {
    if (!this._bg)
      return;
    const align = this.getAlign();
    this.inputField.anchor.set(align, 0.5);
    this.inputField.x = this._bg.width * align + (align === 1 ? -this.paddingRight : this.paddingLeft);
    this.inputField.y = this._bg.height / 2 + this.paddingTop - this.paddingBottom;
    this.placeholder.anchor.set(align, 0.5);
    this.placeholder.x = this._bg.width * align + (align === 1 ? -this.paddingRight : this.paddingLeft);
    this.placeholder.y = this._bg.height / 2;
    this._cursor.x = this.getCursorPosX();
    this._cursor.y = this.inputField.y;
  }
  getAlign() {
    const maxWidth = this._bg.width * 0.95;
    const paddings = this.paddingLeft + this.paddingRight - 10;
    const isOverflowed = this.inputField.width + paddings > maxWidth;
    if (isOverflowed) {
      return this.editing ? 1 : 0;
    }
    switch (this.options.align) {
      case "left":
        return 0;
      case "center":
        return 0.5;
      case "right":
        return 1;
      default:
        return 0;
    }
  }
  getCursorPosX() {
    const align = this.getAlign();
    switch (align) {
      case 0:
        return this.inputField.x + this.inputField.width;
      case 0.5:
        return this.inputField.x + this.inputField.width * 0.5;
      case 1:
        return this.inputField.x;
      default:
        return 0;
    }
  }
  /** Sets the input text. */
  set value(text) {
    this.inputField.text = text;
    if (text.length !== 0) {
      this.placeholder.visible = false;
    } else {
      this.placeholder.visible = !this.editing;
    }
    this.align();
  }
  /** Return text of the input. */
  get value() {
    return this.inputField.text;
  }
  /**
   * Set paddings
   * @param value - number, array of 4 numbers or object with keys: top, right, bottom, left
   * or: [top, right, bottom, left]
   * or: [top&bottom, right&left]
   * or: {
   *  left: 10,
   *  right: 10,
   *  top: 10,
   *  bottom: 10,
   * }
   */
  set padding(value) {
    if (typeof value === "number") {
      this.paddingTop = value;
      this.paddingRight = value;
      this.paddingBottom = value;
      this.paddingLeft = value;
    }
    if (Array.isArray(value)) {
      this.paddingTop = value[0] ?? 0;
      this.paddingRight = value[1] ?? value[0] ?? 0;
      this.paddingBottom = value[2] ?? value[0] ?? 0;
      this.paddingLeft = value[3] ?? value[1] ?? value[0] ?? 0;
    } else if (typeof value === "object") {
      this.paddingTop = value.top ?? 0;
      this.paddingRight = value.right ?? 0;
      this.paddingBottom = value.bottom ?? 0;
      this.paddingLeft = value.left ?? 0;
    }
  }
  // Return array of paddings [top, right, bottom, left]
  get padding() {
    return [this.paddingTop, this.paddingRight, this.paddingBottom, this.paddingLeft];
  }
  destroy(options) {
    this.off("pointertap");
    if (isMobile.any) {
      window.removeEventListener("touchstart", this.handleActivationBinding);
    } else if (!isMobile.any) {
      window.removeEventListener("click", this.handleActivationBinding);
      window.removeEventListener("keyup", this.onKeyUpBinding);
      window.removeEventListener("input", this.onInputBinding);
    }
    super.destroy(options);
  }
  /**
   * Sets width of a Input.
   * If nineSliceSprite is set, then width will be set to nineSliceSprite.
   * If nineSliceSprite is not set, then width will control components width as Container.
   * @param width - Width value.
   */
  set width(width) {
    var _a;
    if ((_a = this.options) == null ? void 0 : _a.nineSliceSprite) {
      if (this._bg) {
        this._bg.width = width;
      }
      if (this.inputMask) {
        this.inputMask.width = width - this.paddingLeft - this.paddingRight;
        this.inputMask.x = this.paddingLeft;
      }
      this.align();
    } else {
      super.width = width;
    }
  }
  /** Gets width of Input. */
  get width() {
    return super.width;
  }
  /**
   * Sets height of a Input.
   * If nineSliceSprite is set, then height will be set to nineSliceSprite.
   * If nineSliceSprite is not set, then height will control components height as Container.
   * @param height - Height value.
   */
  set height(height) {
    var _a;
    if ((_a = this.options) == null ? void 0 : _a.nineSliceSprite) {
      if (this._bg) {
        this._bg.height = height;
      }
      if (this.inputMask) {
        this.inputMask.height = height - this.paddingTop - this.paddingBottom;
        this.inputMask.y = this.paddingTop;
      }
      this.align();
    } else {
      super.height = height;
    }
  }
  /** Gets height of Input. */
  get height() {
    return super.height;
  }
  setSize(value, height) {
    var _a;
    if ((_a = this.options) == null ? void 0 : _a.nineSliceSprite) {
      if (this._bg) {
        this._bg.setSize(value, height);
      }
      if (this.inputMask) {
        if (typeof value === "object") {
          height = value.height ?? value.width;
          value = value.width;
        } else {
          height = height ?? value;
        }
        this.inputMask.setSize(
          value - this.paddingLeft - this.paddingRight,
          height - this.paddingTop - this.paddingBottom
        );
        this.inputMask.position.set(this.paddingLeft, this.paddingTop);
      }
      this.align();
    } else {
      super.setSize(value, height);
    }
  }
};

// node_modules/@pixi/ui/lib/List.mjs
var __defProp11 = Object.defineProperty;
var __defNormalProp11 = (obj, key, value) => key in obj ? __defProp11(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField11 = (obj, key, value) => {
  __defNormalProp11(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
var List = class extends Container {
  constructor(options) {
    var _a;
    super();
    __publicField11(this, "options");
    __publicField11(this, "view");
    __publicField11(this, "_type");
    __publicField11(this, "children", []);
    if (options) {
      this.init(options);
    }
    (_a = options == null ? void 0 : options.items) == null ? void 0 : _a.forEach((item) => this.addChild(item));
    this.on("added", () => this.arrangeChildren());
    this.on("childAdded", () => this.arrangeChildren());
  }
  /**
   * Initiates list component.
   * @param options
   */
  init(options) {
    this.options = options;
    if (options == null ? void 0 : options.type) {
      this.type = options.type;
    }
    if (options == null ? void 0 : options.children) {
      options.children.forEach((child) => this.addChild(child));
    }
  }
  /**
   * Set items arrange direction.
   * @param type - Arrange direction.
   */
  set type(type) {
    this._type = type;
    this.arrangeChildren();
  }
  /**
   * Get items arrange direction.
   * @returns Arrange direction.
   */
  get type() {
    return this._type;
  }
  /**
   * Set element margin.
   * @param margin - Margin between elements.
   */
  set elementsMargin(margin) {
    if (!this.options)
      throw new Error("List has not been initiated!");
    this.options.elementsMargin = margin;
    this.arrangeChildren();
  }
  /**
   * Get element margin.
   * @returns Margin between elements.
   */
  get elementsMargin() {
    var _a;
    return ((_a = this.options) == null ? void 0 : _a.elementsMargin) ?? 0;
  }
  /**
   * Set padding, overriding all padding options.
   * @param padding - Padding surrounding list elements and its border.
   */
  set padding(padding) {
    if (!this.options)
      throw new Error("List has not been initiated!");
    this.options.padding = padding;
    this.options.vertPadding = padding;
    this.options.horPadding = padding;
    this.options.leftPadding = padding;
    this.options.rightPadding = padding;
    this.options.topPadding = padding;
    this.options.bottomPadding = padding;
    this.arrangeChildren();
  }
  /**
   * Get padding.
   * @returns Padding surrounding list elements and its border.
   */
  get padding() {
    var _a;
    return ((_a = this.options) == null ? void 0 : _a.padding) ?? 0;
  }
  /**
   * Set vertical padding, overriding all top and bottom padding options.
   * @param padding - Vertical padding between list border and its elements.
   */
  set vertPadding(padding) {
    if (!this.options)
      throw new Error("List has not been initiated!");
    this.options.vertPadding = padding;
    this.options.topPadding = padding;
    this.options.bottomPadding = padding;
    this.arrangeChildren();
  }
  /**
   * Get vertical padding.
   * @returns Vertical padding between list border and its elements.
   */
  get vertPadding() {
    var _a;
    return ((_a = this.options) == null ? void 0 : _a.vertPadding) ?? this.padding ?? 0;
  }
  /**
   * Set horizontal padding, overriding all left and right padding options.
   * @param padding - Horizontal padding between list border and its elements.
   */
  set horPadding(padding) {
    if (!this.options)
      throw new Error("List has not been initiated!");
    this.options.horPadding = padding;
    this.options.leftPadding = padding;
    this.options.rightPadding = padding;
    this.arrangeChildren();
  }
  /**
   * Get horizontal padding.
   * @returns Horizontal padding between list border and its elements.
   */
  get horPadding() {
    var _a;
    return ((_a = this.options) == null ? void 0 : _a.horPadding) ?? this.padding ?? 0;
  }
  /**
   * Set left padding.
   * @param padding - Left padding between list border and its elements.
   */
  set leftPadding(padding) {
    if (!this.options)
      throw new Error("List has not been initiated!");
    this.options.leftPadding = padding;
    this.arrangeChildren();
  }
  /**
   * Get left padding.
   * @returns Left padding between list border and its elements.
   */
  get leftPadding() {
    var _a;
    return ((_a = this.options) == null ? void 0 : _a.leftPadding) ?? this.horPadding;
  }
  /**
   * Set right padding.
   * @param padding - Right padding between list border and its elements.
   */
  set rightPadding(padding) {
    if (!this.options)
      throw new Error("List has not been initiated!");
    this.options.rightPadding = padding;
    this.arrangeChildren();
  }
  /**
   * Get right padding.
   * @returns Right padding between list border and its elements.
   */
  get rightPadding() {
    var _a;
    return ((_a = this.options) == null ? void 0 : _a.rightPadding) ?? this.horPadding;
  }
  /**
   * Set top padding.
   * @param padding - Top padding between list border and its elements.
   */
  set topPadding(padding) {
    if (!this.options)
      throw new Error("List has not been initiated!");
    this.options.topPadding = padding;
    this.arrangeChildren();
  }
  /**
   * Get top padding.
   * @returns Top padding between list border and its elements.
   */
  get topPadding() {
    var _a;
    return ((_a = this.options) == null ? void 0 : _a.topPadding) ?? this.vertPadding;
  }
  /**
   * Set bottom padding.
   * @param padding - Bottom padding between list border and its elements.
   */
  set bottomPadding(padding) {
    if (!this.options)
      throw new Error("List has not been initiated!");
    this.options.bottomPadding = padding;
    this.arrangeChildren();
  }
  /**
   * Get bottom padding.
   * @returns Bottom padding between list border and its elements.
   */
  get bottomPadding() {
    var _a;
    return ((_a = this.options) == null ? void 0 : _a.bottomPadding) ?? this.vertPadding;
  }
  /**
   * Arrange all elements basing in their sizes and component options.
   * Can be arranged vertically, horizontally or bidirectional.
   */
  arrangeChildren() {
    var _a, _b;
    let maxHeight = 0;
    let x = this.leftPadding;
    let y = this.topPadding;
    const elementsMargin = ((_a = this.options) == null ? void 0 : _a.elementsMargin) ?? 0;
    let maxWidth = (_b = this.parent) == null ? void 0 : _b.width;
    if (this.rightPadding) {
      maxWidth -= this.rightPadding;
    }
    this.children.forEach((child, id) => {
      switch (this.type) {
        case "vertical":
          child.y = y;
          child.x = x;
          y += elementsMargin + child.height;
          break;
        case "horizontal":
          child.x = x;
          child.y = y;
          x += elementsMargin + child.width;
          break;
        default:
          child.x = x;
          child.y = y;
          if (child.x + child.width > maxWidth && id > 0) {
            y += elementsMargin + maxHeight;
            x = this.leftPadding;
            child.x = x;
            child.y = y;
            maxHeight = 0;
          }
          maxHeight = Math.max(maxHeight, child.height);
          x += elementsMargin + child.width;
          break;
      }
    });
  }
  /**
   * Removes items from the list. (Does not destroy them)
   * @param itemID - Item to remove (starting from 0).
   */
  removeItem(itemID) {
    const child = this.children[itemID];
    if (!child) {
      return;
    }
    this.removeChild(child);
    this.arrangeChildren();
  }
};

// node_modules/@pixi/ui/lib/MaskedFrame.mjs
var __defProp12 = Object.defineProperty;
var __defNormalProp12 = (obj, key, value) => key in obj ? __defProp12(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField12 = (obj, key, value) => {
  __defNormalProp12(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
var MaskedFrame = class extends Container {
  constructor(options) {
    super();
    __publicField12(this, "target");
    __publicField12(this, "border", new Graphics());
    __publicField12(this, "_targetMask");
    __publicField12(this, "maskData");
    __publicField12(this, "borderWidth");
    __publicField12(this, "borderColor");
    if (options == null ? void 0 : options.target) {
      this.init(options);
    }
  }
  /**
   * Initializes a component.
   * @param root0
   * @param root0.target - Container to apply a mask or a border.
   * @param root0.mask - Mask.
   * @param root0.borderWidth - Border width.
   * @param root0.borderColor - Border color.
   */
  init({ target, mask, borderWidth, borderColor }) {
    if (this.target) {
      this.removeChild(this.target);
    }
    this.target = getView(target);
    this.addChild(this.border, this.target);
    if (mask)
      this.setMask(mask);
    if (borderWidth)
      this.setBorder(borderWidth, borderColor);
  }
  /**
   * Applies a mask to a target container.
   * @param mask
   */
  setMask(mask) {
    this.maskData = mask;
    this._targetMask = getView(mask);
    this.addChild(this._targetMask);
    this.target.mask = this._targetMask;
  }
  /**
   * Shows a border around the target Container, same shape as the mask.
   * @param borderWidth
   * @param borderColor
   */
  setBorder(borderWidth, borderColor) {
    this.borderWidth = borderWidth;
    this.borderColor = borderColor;
    this.showBorder();
    if (this.maskData) {
      const borderMask = typeof this.maskData === "string" ? Sprite.from(this.maskData) : this.maskData.clone(true);
      borderMask.width += borderWidth * 2;
      borderMask.height += borderWidth * 2;
      this.mask = borderMask;
      this.addChild(borderMask);
      this._targetMask.position.set(borderWidth);
    }
  }
  /** Hides a border. */
  showBorder() {
    const width = this.borderWidth * 2;
    this.border.clear().rect(0, 0, this.target.width + width, this.target.height + width).fill(this.borderColor);
    this.target.x = this.borderWidth;
    this.target.y = this.borderWidth;
  }
  /** Hides a border. */
  hideBorder() {
    this.border.clear();
  }
};

// node_modules/@pixi/ui/lib/RadioGroup.mjs
var import_typed_signals6 = __toESM(require_dist(), 1);
var __defProp13 = Object.defineProperty;
var __defNormalProp13 = (obj, key, value) => key in obj ? __defProp13(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField13 = (obj, key, value) => {
  __defNormalProp13(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
var RadioGroup = class extends Container {
  constructor(options) {
    super();
    __publicField13(this, "items", []);
    __publicField13(this, "innerView");
    __publicField13(this, "value");
    __publicField13(this, "selected");
    __publicField13(this, "onChange");
    __publicField13(this, "options");
    if (options) {
      this.init(options);
    }
    this.onChange = new import_typed_signals6.Signal();
  }
  /**
   * Initiates a group.
   * @param options
   */
  init(options) {
    var _a;
    this.options = options;
    this.value = (_a = options.items[options.selectedItem || 0].labelText) == null ? void 0 : _a.text;
    this.selected = options.selectedItem ?? 0;
    if (this.innerView) {
      this.innerView.type = options.type;
      this.innerView.elementsMargin = options.elementsMargin;
    } else {
      this.innerView = new List({
        type: options.type,
        elementsMargin: options.elementsMargin
      });
    }
    this.addItems(options.items);
    this.addChild(this.innerView);
    this.selectItem(this.selected);
  }
  /**
   * Add items to a group.
   * @param {CheckBox[]} items - array of {@link CheckBox} instances.
   */
  addItems(items) {
    items.forEach((checkBox, id) => {
      checkBox.onChange.connect(() => this.selectItem(id));
      this.items.push(checkBox);
      this.innerView.addChild(checkBox);
    });
  }
  /**
   * Remove items from a group.
   * @param ids
   */
  removeItems(ids) {
    ids.forEach((id) => {
      const item = this.items[id];
      if (!item)
        return;
      item.onChange.disconnectAll();
      this.innerView.removeChild(item);
      this.items.splice(id, 1);
    });
  }
  /**
   * Select item by ID.
   * @param id
   */
  selectItem(id) {
    var _a, _b;
    this.items.forEach((item, key) => {
      item.forceCheck(key === id);
    });
    if (this.selected !== id) {
      this.onChange.emit(id, (_a = this.items[id].labelText) == null ? void 0 : _a.text);
    }
    this.value = (_b = this.options.items[id].labelText) == null ? void 0 : _b.text;
    this.selected = id;
  }
};

// node_modules/@pixi/ui/lib/ScrollBox.mjs
var import_typed_signals7 = __toESM(require_dist(), 1);

// node_modules/@pixi/ui/lib/utils/trackpad/Spring.mjs
var __defProp14 = Object.defineProperty;
var __defNormalProp14 = (obj, key, value) => key in obj ? __defProp14(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField14 = (obj, key, value) => {
  __defNormalProp14(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
var Spring = class {
  constructor(options = {}) {
    __publicField14(this, "x");
    __publicField14(this, "ax");
    __publicField14(this, "dx");
    __publicField14(this, "tx");
    __publicField14(this, "_options");
    this.x = 0;
    this.ax = 0;
    this.dx = 0;
    this.tx = 0;
    this._options = options;
    this._options.max = options.max || 160;
    this._options.damp = options.damp || 0.8;
    this._options.springiness = options.springiness || 0.1;
  }
  update() {
    this.ax = (this.tx - this.x) * this._options.springiness;
    this.dx += this.ax;
    this.dx *= this._options.damp;
    if (this.dx < -this._options.max)
      this.dx = -this._options.max;
    else if (this.dx > this._options.max)
      this.dx = this._options.max;
    this.x += this.dx;
  }
  reset() {
    this.x = 0;
    this.ax = 0;
    this.dx = 0;
    this.tx = 0;
  }
  get max() {
    return this._options.max;
  }
  set max(value) {
    this._options.max = value;
  }
  get damp() {
    return this._options.damp;
  }
  set damp(value) {
    this._options.damp = value;
  }
  get springiness() {
    return this._options.springiness;
  }
  set springiness(value) {
    this._options.springiness = value;
  }
};

// node_modules/@pixi/ui/lib/utils/trackpad/ScrollSpring.mjs
var __defProp15 = Object.defineProperty;
var __defNormalProp15 = (obj, key, value) => key in obj ? __defProp15(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField15 = (obj, key, value) => {
  __defNormalProp15(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
var ScrollSpring = class {
  constructor() {
    __publicField15(this, "done");
    __publicField15(this, "to");
    __publicField15(this, "_spring");
    __publicField15(this, "_pos");
    __publicField15(this, "_speed");
    __publicField15(this, "_correctSpeed");
    this._spring = new Spring();
    this._pos = 0;
    this.to = 0;
  }
  start(speed, pos, to) {
    this._speed = speed;
    this._pos = pos;
    this.to = to;
    this.done = false;
    this._spring.x = this._pos;
    this._spring.tx = this.to;
    const diff = this.to - this._pos;
    const toDirection = Math.abs(diff) / diff;
    const currentDirection = Math.abs(this._speed) / this._speed;
    if (toDirection !== currentDirection) {
      this._correctSpeed = true;
    } else {
      this._correctSpeed = false;
    }
  }
  update() {
    if (this._correctSpeed) {
      this._speed *= 0.6;
      if (Math.abs(this._speed) < 2) {
        this._correctSpeed = false;
      }
      this._pos += this._speed;
      this._spring.x = this._pos;
    } else {
      const diff = this.to - this._pos;
      if (Math.abs(diff) < 0.05) {
        this._pos = this.to;
        this.done = true;
      } else {
        this._spring.tx = this.to;
        this._spring.update();
        this._pos = this._spring.x;
      }
    }
    return this._pos;
  }
  cancel() {
  }
};

// node_modules/@pixi/ui/lib/utils/trackpad/SlidingNumber.mjs
var __defProp16 = Object.defineProperty;
var __defNormalProp16 = (obj, key, value) => key in obj ? __defProp16(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField16 = (obj, key, value) => {
  __defNormalProp16(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
var SlidingNumber = class {
  constructor(options = {}) {
    __publicField16(this, "position", 0);
    __publicField16(this, "constrain", true);
    __publicField16(this, "min", 0);
    __publicField16(this, "max", 0);
    __publicField16(this, "maxSpeed", 400);
    __publicField16(this, "_ease");
    __publicField16(this, "_offset", 0);
    __publicField16(this, "_prev", 0);
    __publicField16(this, "_speed", 0);
    __publicField16(this, "_hasStopped");
    __publicField16(this, "_targetSpeed", 0);
    __publicField16(this, "_speedChecker", 0);
    __publicField16(this, "_grab", 0);
    __publicField16(this, "_activeEase");
    this.constrain = options.constrain ?? true;
    this.maxSpeed = options.maxSpeed ?? 400;
    this._ease = options.ease ?? new ScrollSpring();
  }
  set value(n) {
    this._speed = 0;
    this.position = n;
  }
  get value() {
    return this.position;
  }
  grab(offset) {
    this._grab = offset;
    this._offset = this.position - offset;
    this._speedChecker = 0;
    this._targetSpeed = this._speed = 0;
    this._hasStopped = false;
  }
  hold(newPosition) {
    this._speedChecker++;
    this.position = newPosition + this._offset;
    if (this._speedChecker > 1) {
      this._targetSpeed = this.position - this._prev;
    }
    this._speed += (this._targetSpeed - this._speed) / 2;
    if (this._speed > this.maxSpeed)
      this._speed = this.maxSpeed;
    else if (this._speed < -this.maxSpeed)
      this._speed = -this.maxSpeed;
    this._prev = this.position;
    if (this.constrain) {
      this._activeEase = null;
      if (this.position > this.min) {
        this.position -= (this.position - this.min) / 1.5;
      } else if (this.position < this.max) {
        this.position += (this.max - this.position) / 1.5;
      }
    }
  }
  slide(instant = false) {
    if (this._hasStopped)
      return;
    if (this.constrain) {
      this._updateConstrain(instant);
    } else {
      this._updateDefault();
    }
  }
  get moveAmount() {
    return -(this.position - this._offset - this._grab);
  }
  _updateDefault() {
    this._speed *= 0.9;
    this.position += this._speed;
    if ((this._speed < 0 ? this._speed * -1 : this._speed) < 0.01) {
      this._hasStopped = true;
    }
  }
  _updateConstrain(instant = false) {
    const max = this.max;
    if (instant) {
      if (this.value > 0) {
        this.value = 0;
      }
      if (this.value > 0) {
        this.value = 0;
      }
      if (this.value < this.max) {
        this.value = this.max;
      }
      if (this.value < this.max) {
        this.value = this.max;
      }
    } else if (this.position > this.min || this.position < max || this._activeEase) {
      if (!this._activeEase) {
        this._activeEase = this._ease;
        if (this.position > this.min) {
          this._activeEase.start(this._speed, this.position, this.min);
        } else {
          this._activeEase.start(this._speed, this.position, max);
        }
      }
      this.position = this._activeEase.update();
      if (this._activeEase.done) {
        this.position = this._activeEase.to;
        this._speed = 0;
        this._activeEase = null;
      }
    } else {
      this._updateDefault();
    }
  }
};

// node_modules/@pixi/ui/lib/utils/trackpad/Trackpad.mjs
var __defProp17 = Object.defineProperty;
var __defNormalProp17 = (obj, key, value) => key in obj ? __defProp17(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField17 = (obj, key, value) => {
  __defNormalProp17(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
var Trackpad = class {
  constructor(options) {
    __publicField17(this, "xAxis");
    __publicField17(this, "yAxis");
    __publicField17(this, "_isDown");
    __publicField17(this, "_globalPosition");
    __publicField17(this, "_frame");
    __publicField17(this, "_bounds");
    __publicField17(this, "_dirty");
    __publicField17(this, "disableEasing", false);
    this.xAxis = new SlidingNumber({
      ease: options.xEase,
      maxSpeed: options.maxSpeed,
      constrain: options.constrain
    });
    this.yAxis = new SlidingNumber({
      ease: options.yEase,
      maxSpeed: options.maxSpeed,
      constrain: options.constrain
    });
    this.disableEasing = options.disableEasing ?? false;
    this._frame = new Rectangle();
    this._bounds = new Rectangle();
    this._globalPosition = new Point();
  }
  pointerDown(pos) {
    this._globalPosition = pos;
    this.xAxis.grab(pos.x);
    this.yAxis.grab(pos.y);
    this._isDown = true;
  }
  pointerUp() {
    this._isDown = false;
  }
  pointerMove(pos) {
    this._globalPosition = pos;
  }
  update() {
    if (this._dirty) {
      this._dirty = false;
      this.xAxis.min = this._bounds.left;
      this.xAxis.min = this._bounds.right - this._frame.width;
      this.xAxis.min = this._bounds.top;
      this.xAxis.min = this._bounds.bottom - this._frame.height;
    }
    if (this._isDown) {
      this.xAxis.hold(this._globalPosition.x);
      this.yAxis.hold(this._globalPosition.y);
    } else {
      this.xAxis.slide(this.disableEasing);
      this.yAxis.slide(this.disableEasing);
    }
  }
  resize(w, h) {
    this._frame.x = 0;
    this._frame.width = w;
    this._frame.y = 0;
    this._frame.height = h;
    this._dirty = true;
  }
  setBounds(minX, maxX, minY, maxY) {
    this._bounds.x = minX;
    this._bounds.width = maxX - minX;
    this._bounds.y = minY;
    this._bounds.height = maxY - minY;
    this._dirty = true;
  }
  get x() {
    return this.xAxis.value;
  }
  get y() {
    return this.yAxis.value;
  }
};

// node_modules/@pixi/ui/lib/ScrollBox.mjs
var __defProp18 = Object.defineProperty;
var __defNormalProp18 = (obj, key, value) => key in obj ? __defProp18(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField18 = (obj, key, value) => {
  __defNormalProp18(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
var ScrollBox = class extends Container {
  /**
   * @param options
   * @param {number} options.background - background color of the ScrollBox.
   * @param {number} options.width - width of the ScrollBox.
   * @param {number} options.height - height of the ScrollBox.
   * @param {number} options.radius - radius of the ScrollBox and its masks corners.
   * @param {number} options.elementsMargin - margin between elements.
   * @param {number} options.vertPadding - vertical padding of the ScrollBox.
   * @param {number} options.horPadding - horizontal padding of the ScrollBox.
   * @param {number} options.padding - padding of the ScrollBox (same horizontal and vertical).
   * @param {boolean} options.disableDynamicRendering - disables dynamic rendering of the ScrollBox,
   * so even elements the are not visible will be rendered. Be careful with this options as it can impact performance.
   * @param {boolean} [options.globalScroll=true] - if true, the ScrollBox will scroll even if the mouse is not over it.
   * @param {boolean} [options.shiftScroll=false] - if true, the ScrollBox will only scroll horizontally if the shift key
   * is pressed, and the type is set to 'horizontal'.
   */
  constructor(options) {
    super();
    __publicField18(this, "background");
    __publicField18(this, "borderMask");
    __publicField18(this, "lastWidth");
    __publicField18(this, "lastHeight");
    __publicField18(this, "__width", 0);
    __publicField18(this, "__height", 0);
    __publicField18(this, "_dimensionChanged", false);
    __publicField18(this, "list");
    __publicField18(this, "_trackpad");
    __publicField18(this, "isDragging", 0);
    __publicField18(this, "interactiveStorage", []);
    __publicField18(this, "visibleItems", []);
    __publicField18(this, "pressedChild");
    __publicField18(this, "ticker", Ticker.shared);
    __publicField18(this, "options");
    __publicField18(this, "stopRenderHiddenItemsTimeout");
    __publicField18(this, "onMouseScrollBinding", this.onMouseScroll.bind(this));
    __publicField18(this, "dragStarTouchPoint");
    __publicField18(this, "isOver", false);
    __publicField18(this, "proximityRange");
    __publicField18(this, "proximityStatusCache", []);
    __publicField18(this, "lastScrollX");
    __publicField18(this, "lastScrollY");
    __publicField18(this, "proximityCheckFrameCounter", 0);
    __publicField18(this, "onProximityChange", new import_typed_signals7.Signal());
    __publicField18(this, "onScroll", new import_typed_signals7.Signal());
    if (options) {
      this.init(options);
    }
    this.ticker.add(this.update, this);
  }
  /**
   * Initiates ScrollBox.
   * @param options
   * @param {number} options.background - background color of the ScrollBox.
   * @param {number} options.width - width of the ScrollBox.
   * @param {number} options.height - height of the ScrollBox.
   * @param {number} options.radius - radius of the ScrollBox and its masks corners.
   * @param {number} options.elementsMargin - margin between elements.
   * @param {number} options.vertPadding - vertical padding of the ScrollBox.
   * @param {number} options.horPadding - horizontal padding of the ScrollBox.
   * @param {number} options.padding - padding of the ScrollBox (same horizontal and vertical).
   * @param {boolean} options.disableDynamicRendering - disables dynamic rendering of the ScrollBox,
   * so even elements the are not visible will be rendered. Be careful with this options as it can impact performance.
   * @param {boolean} [options.globalScroll=true] - if true, the ScrollBox will scroll even if the mouse is not over it.
   * @param {boolean} [options.shiftScroll=false] - if true, the ScrollBox will only scroll horizontally if the shift key
   */
  init(options) {
    this.options = options;
    this.setBackground(options.background);
    this.__width = options.width | this.background.width;
    this.__height = options.height | this.background.height;
    this.proximityRange = options.proximityRange ?? 0;
    if (!this.list) {
      this.list = new List();
      super.addChild(this.list);
    }
    this.list.init({
      type: options.type,
      elementsMargin: options.elementsMargin,
      padding: options.padding,
      vertPadding: options.vertPadding,
      horPadding: options.horPadding,
      topPadding: options.topPadding,
      bottomPadding: options.bottomPadding,
      leftPadding: options.leftPadding,
      rightPadding: options.rightPadding
    });
    this.addItems(options.items);
    if (this.hasBounds) {
      this.addMask();
      this.makeScrollable();
    }
    this._trackpad.xAxis.value = 0;
    this._trackpad.yAxis.value = 0;
    this.options.globalScroll = options.globalScroll ?? true;
    this.options.shiftScroll = options.shiftScroll ?? false;
    this.resize();
  }
  get hasBounds() {
    return !!this.__width || !!this.__height;
  }
  /**
   *  Adds array of items to a scrollable list.
   * @param {Container[]} items - items to add.
   */
  addItems(items) {
    if (!(items == null ? void 0 : items.length))
      return;
    items.forEach((item) => this.addItem(item));
  }
  /** Remove all items from a scrollable list. */
  removeItems() {
    this.proximityStatusCache.length = 0;
    this.list.removeChildren();
  }
  /**
   * Adds one or more items to a scrollable list.
   * @param {Container} items - one or more items to add.
   */
  addItem(...items) {
    if (items.length > 1) {
      items.forEach((item) => this.addItem(item));
    } else {
      const child = items[0];
      if (!child.width || !child.height) {
        console.error("ScrollBox item should have size");
      }
      child.eventMode = "static";
      this.list.addChild(child);
      this.proximityStatusCache.push(false);
      if (!this.options.disableDynamicRendering) {
        child.renderable = this.isItemVisible(child);
      }
    }
    this.resize();
    return items[0];
  }
  /**
   * Removes an item from a scrollable list.
   * @param {number} itemID - id of the item to remove.
   */
  removeItem(itemID) {
    this.list.removeItem(itemID);
    this.proximityStatusCache.splice(itemID, 1);
    this.resize();
  }
  /**
   * Checks if the item is visible or scrolled out of the visible part of the view.* Adds an item to a scrollable list.
   * @param {Container} item - item to check.
   * @param padding - proximity padding to consider the item visible.
   */
  isItemVisible(item, padding = 0) {
    const isVertical = this.options.type === "vertical" || !this.options.type;
    let isVisible = false;
    const list = this.list;
    if (isVertical) {
      const posY = item.y + list.y;
      if (posY + item.height >= -padding && posY <= this.options.height + padding) {
        isVisible = true;
      }
    } else {
      const posX = item.x + list.x;
      if (posX + item.width >= -padding && posX <= this.options.width + padding) {
        isVisible = true;
      }
    }
    return isVisible;
  }
  /**
   * Returns all inner items in a list.
   * @returns {Array<Container> | Array} - list of items.
   */
  get items() {
    var _a;
    return ((_a = this.list) == null ? void 0 : _a.children) ?? [];
  }
  /**
   * Set ScrollBox background.
   * @param {number | string} background - background color or texture.
   */
  setBackground(background) {
    if (this.background) {
      this.removeChild(this.background);
    }
    this.options.background = background;
    this.background = new Graphics();
    this.addChildAt(this.background, 0);
    this.resize();
  }
  addMask() {
    if (!this.borderMask) {
      this.borderMask = new Graphics();
      super.addChild(this.borderMask);
      this.mask = this.borderMask;
    }
    this.resize();
  }
  makeScrollable() {
    if (!this._trackpad) {
      this._trackpad = new Trackpad({
        disableEasing: this.options.disableEasing
      });
    }
    this.on("pointerdown", (e) => {
      this.renderAllItems();
      this.isDragging = 1;
      this.dragStarTouchPoint = this.worldTransform.applyInverse(e.global);
      this._trackpad.pointerDown(this.dragStarTouchPoint);
      const listTouchPoint = this.list.worldTransform.applyInverse(e.global);
      this.visibleItems.forEach((item) => {
        if (item.x < listTouchPoint.x && item.x + item.width > listTouchPoint.x && item.y < listTouchPoint.y && item.y + item.height > listTouchPoint.y) {
          this.pressedChild = item;
        }
      });
    });
    this.on("pointerup", () => {
      this.isDragging = 0;
      this._trackpad.pointerUp();
      this.restoreItemsInteractivity();
      this.pressedChild = null;
      this.stopRenderHiddenItems();
    });
    this.on("pointerover", () => {
      this.isOver = true;
    });
    this.on("pointerout", () => {
      this.isOver = false;
    });
    this.on("pointerupoutside", () => {
      this.isDragging = 0;
      this._trackpad.pointerUp();
      this.restoreItemsInteractivity();
      this.pressedChild = null;
      this.stopRenderHiddenItems();
    });
    this.on("globalpointermove", (e) => {
      var _a;
      if (!this.isDragging)
        return;
      const isVertical = this.options.type !== "horizontal";
      const touchPoint = this.worldTransform.applyInverse(e.global);
      if (this.dragStarTouchPoint) {
        const dragTrashHold = this.options.dragTrashHold ?? 10;
        if (this.options.type === "horizontal") {
          const xDist = touchPoint.x - this.dragStarTouchPoint.x;
          if (Math.abs(xDist) > dragTrashHold) {
            this.isDragging = 2;
          }
        } else {
          const yDist = touchPoint.y - this.dragStarTouchPoint.y;
          if (Math.abs(yDist) > dragTrashHold) {
            this.isDragging = 2;
          }
        }
      }
      if (this.dragStarTouchPoint && this.isDragging !== 2)
        return;
      this._trackpad.pointerMove(touchPoint);
      if (this.pressedChild) {
        this.revertClick(this.pressedChild);
        this.pressedChild = null;
      }
      (_a = this.onScroll) == null ? void 0 : _a.emit(isVertical ? this.scrollY : this.scrollX);
    });
    document.addEventListener("wheel", this.onMouseScrollBinding, true);
  }
  setInteractive(interactive) {
    this.eventMode = interactive ? "static" : "auto";
  }
  get listHeight() {
    return this.list.height + this.list.topPadding + this.list.bottomPadding;
  }
  get listWidth() {
    return this.list.width + this.list.leftPadding + this.list.rightPadding;
  }
  /**
   * Controls item positions and visibility.
   * @param force
   */
  resize(force = false) {
    if (!this.hasBounds)
      return;
    this.renderAllItems();
    if (this.borderMask && (force || this._dimensionChanged || this.lastWidth !== this.listWidth || this.lastHeight !== this.listHeight)) {
      if (!this.options.width) {
        this.__width += this.listWidth;
      }
      if (!this.options.height) {
        this.__height += this.listHeight;
      }
      this.borderMask.clear().roundRect(
        0,
        0,
        this.__width,
        this.__height,
        this.options.radius | 0
      ).fill(16711935).stroke(0);
      this.borderMask.eventMode = "none";
      const color = this.options.background;
      this.background.clear().roundRect(
        0,
        0,
        this.__width,
        this.__height,
        this.options.radius | 0
      ).fill({
        color: color ?? 0,
        alpha: color ? 1 : 1e-7
        // if color is not set, set alpha to 0 to be able to drag by click on bg
      });
      if (this.options.type === "horizontal") {
        this.setInteractive(this.listWidth > this.__width);
      } else {
        this.setInteractive(this.listHeight > this.__height);
      }
      this.lastWidth = this.listWidth;
      this.lastHeight = this.listHeight;
    }
    if (this._trackpad) {
      const maxWidth = this.borderMask.width - this.list.width - this.list.leftPadding - this.list.rightPadding;
      const maxHeight = this.borderMask.height - this.list.height - this.list.topPadding - this.list.bottomPadding;
      if (this.options.type === "vertical") {
        this._trackpad.yAxis.max = -Math.abs(maxHeight);
      } else if (this.options.type === "horizontal") {
        this._trackpad.xAxis.max = -Math.abs(maxWidth);
      } else {
        this._trackpad.yAxis.max = -Math.abs(maxHeight);
        this._trackpad.xAxis.max = -Math.abs(maxWidth);
      }
    }
    if (this._dimensionChanged) {
      this.list.arrangeChildren();
      this.stopRenderHiddenItems();
      this._dimensionChanged = false;
    } else
      this.updateVisibleItems();
    this.lastScrollX = null;
    this.lastScrollY = null;
  }
  onMouseScroll(event) {
    var _a, _b;
    if (!this.isOver && !this.options.globalScroll)
      return;
    this.renderAllItems();
    const scrollOnX = this.options.shiftScroll ? typeof event.deltaX !== "undefined" || typeof event.deltaY !== "undefined" : typeof event.deltaX !== "undefined";
    if (this.options.type === "horizontal" && scrollOnX) {
      const delta = this.options.shiftScroll ? event.deltaX : event.deltaY;
      const targetPos = this.list.x - delta;
      if (this.listWidth < this.__width) {
        this._trackpad.xAxis.value = 0;
      } else {
        const min = this.__width - this.listWidth;
        const max = 0;
        this._trackpad.xAxis.value = Math.min(max, Math.max(min, targetPos));
      }
      (_a = this.onScroll) == null ? void 0 : _a.emit(this._trackpad.xAxis.value);
    } else if (typeof event.deltaY !== "undefined") {
      const targetPos = this.list.y - event.deltaY;
      if (this.listHeight < this.__height) {
        this._trackpad.yAxis.value = 0;
      } else {
        const min = this.__height - this.listHeight;
        const max = 0;
        this._trackpad.yAxis.value = Math.min(max, Math.max(min, targetPos));
      }
      (_b = this.onScroll) == null ? void 0 : _b.emit(this._trackpad.yAxis.value);
    }
    this.stopRenderHiddenItems();
  }
  /** Makes it scroll down to the last element. */
  scrollBottom() {
    if (!this.interactive) {
      this.scrollTop();
    } else {
      this.scrollTo(this.list.children.length - 1);
    }
  }
  /** Makes it scroll up to the first element. */
  scrollTop() {
    this.renderAllItems();
    this._trackpad.xAxis.value = 0;
    this._trackpad.yAxis.value = 0;
    this.stopRenderHiddenItems();
  }
  renderAllItems() {
    clearTimeout(this.stopRenderHiddenItemsTimeout);
    this.stopRenderHiddenItemsTimeout = null;
    if (this.options.disableDynamicRendering) {
      return;
    }
    this.items.forEach((child) => {
      child.renderable = true;
    });
  }
  stopRenderHiddenItems() {
    if (this.options.disableDynamicRendering) {
      return;
    }
    if (this.stopRenderHiddenItemsTimeout) {
      clearTimeout(this.stopRenderHiddenItemsTimeout);
      this.stopRenderHiddenItemsTimeout = null;
    }
    this.stopRenderHiddenItemsTimeout = setTimeout(() => this.updateVisibleItems(), 2e3);
  }
  updateVisibleItems() {
    this.visibleItems.length = 0;
    this.items.forEach((child) => {
      child.renderable = this.isItemVisible(child);
      this.visibleItems.push(child);
    });
  }
  /**
   * Scrolls to the element with the given ID.
   * @param elementID
   */
  scrollTo(elementID) {
    if (!this.interactive) {
      return;
    }
    const target = this.list.children[elementID];
    if (!target) {
      return;
    }
    this.renderAllItems();
    this._trackpad.xAxis.value = this.options.type === "horizontal" ? this.__width - target.x - target.width - this.list.rightPadding : 0;
    this._trackpad.yAxis.value = !this.options.type || this.options.type === "vertical" ? this.__height - target.y - target.height - this.list.bottomPadding : 0;
    this.stopRenderHiddenItems();
  }
  /**
   * Scrolls to the given position.
   * @param position - x and y position object.
   * @param position.x - x position.
   * @param position.y - y position.
   */
  scrollToPosition({ x, y }) {
    if (x === void 0 && y === void 0)
      return;
    this.renderAllItems();
    if (x !== void 0)
      this.scrollX = -x;
    if (y !== void 0)
      this.scrollY = -y;
    this.stopRenderHiddenItems();
  }
  /** Gets component height. */
  get height() {
    return this.__height;
  }
  set height(value) {
    this.__height = value;
    this._dimensionChanged = true;
    this.resize();
    this.scrollTop();
  }
  /** Gets component width. */
  get width() {
    return this.__width;
  }
  set width(value) {
    this.__width = value;
    this._dimensionChanged = true;
    this.resize();
    this.scrollTop();
  }
  setSize(value, height) {
    if (typeof value === "object") {
      height = value.height ?? value.width;
      value = value.width;
    } else {
      height = height ?? value;
    }
    this.__width = value;
    this.__height = height;
    this._dimensionChanged = true;
    this.resize();
    this.scrollTop();
  }
  getSize(out) {
    out = out || { width: 0, height: 0 };
    out.width = this.__width;
    out.height = this.__height;
    return out;
  }
  /** Gets the current raw scroll position on the x-axis (Negated Value). */
  get scrollX() {
    return this._trackpad.xAxis.value;
  }
  /** Sets the current raw scroll position on the x-axis (Negated Value). */
  set scrollX(value) {
    this._trackpad.xAxis.value = value;
  }
  /** Gets the current raw scroll position on the y-axis (Negated Value). */
  get scrollY() {
    return this._trackpad.yAxis.value;
  }
  /** Sets the current raw scroll position on the y-axis (Negated Value). */
  set scrollY(value) {
    this._trackpad.yAxis.value = value;
  }
  update() {
    if (!this.list)
      return;
    this._trackpad.update();
    const type = this.options.type === "horizontal" ? "x" : "y";
    if (this.list[type] !== this._trackpad[type]) {
      this.list[type] = this._trackpad[type];
    }
    if (!this.options.disableProximityCheck && (this._trackpad.x !== this.lastScrollX || this._trackpad.y !== this.lastScrollY)) {
      this.proximityCheckFrameCounter++;
      if (this.proximityCheckFrameCounter >= (this.options.proximityDebounce ?? 10)) {
        this.items.forEach((item, index) => {
          const inRange = this.isItemVisible(item, this.proximityRange);
          const wasInRange = this.proximityStatusCache[index];
          if (inRange !== wasInRange) {
            this.proximityStatusCache[index] = inRange;
            this.onProximityChange.emit({ item, index, inRange });
          }
        });
        this.lastScrollX = this._trackpad.x;
        this.lastScrollY = this._trackpad.y;
        this.proximityCheckFrameCounter = 0;
      }
    }
  }
  /**
   * Destroys the component.
   * @param {boolean | DestroyOptions} [options] - Options parameter.
   * A boolean will act as if all options have been set to that value
   */
  destroy(options) {
    this.ticker.remove(this.update, this);
    document.removeEventListener("wheel", this.onMouseScrollBinding, true);
    this.background.destroy();
    this.list.destroy();
    super.destroy(options);
  }
  restoreItemsInteractivity() {
    this.interactiveStorage.forEach((element) => {
      element.item.eventMode = element.eventMode;
    });
    this.interactiveStorage.length = 0;
  }
  revertClick(item) {
    if (item.eventMode !== "auto") {
      isMobile.any ? item.emit("pointerupoutside", null) : item.emit("mouseupoutside", null);
      this.interactiveStorage.push({
        item,
        eventMode: item.eventMode
      });
      item.eventMode = "auto";
    }
    if (item instanceof Container && item.children) {
      item.children.forEach((child) => this.revertClick(child));
    }
  }
  get scrollHeight() {
    return this.list.height;
  }
  get scrollWidth() {
    return this.list.width;
  }
};

// node_modules/@pixi/ui/lib/Select.mjs
var import_typed_signals8 = __toESM(require_dist(), 1);
var __defProp19 = Object.defineProperty;
var __defNormalProp19 = (obj, key, value) => key in obj ? __defProp19(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField19 = (obj, key, value) => {
  __defNormalProp19(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
var defaultVisibleItems = 5;
var Select = class extends Container {
  constructor(options) {
    super();
    __publicField19(this, "view", new Container());
    __publicField19(this, "openButton");
    __publicField19(this, "closeButton");
    __publicField19(this, "openView");
    __publicField19(this, "scrollBox");
    __publicField19(this, "value");
    __publicField19(this, "onSelect");
    this.addChild(this.view);
    this.onSelect = new import_typed_signals8.Signal();
    if (options) {
      this.init(options);
    }
  }
  /**
   * Initiates Select.
   * @param root0
   * @param root0.closedBG
   * @param root0.textStyle
   * @param root0.items
   * @param root0.openBG
   * @param root0.selected
   * @param root0.selectedTextOffset
   * @param root0.scrollBox
   * @param root0.visibleItems
   * @param root0.TextClass
   */
  init({
    closedBG,
    textStyle,
    TextClass,
    items,
    openBG,
    selected,
    selectedTextOffset,
    scrollBox,
    visibleItems
  }) {
    TextClass = TextClass ?? Text;
    if (this.openView && this.openView !== openBG) {
      this.view.removeChild(this.openView);
    }
    if (!this.openButton) {
      this.openButton = new FancyButton({
        defaultView: getView(closedBG),
        text: new TextClass({ text: (items == null ? void 0 : items.items) ? items.items[0] : "", style: textStyle }),
        textOffset: selectedTextOffset
      });
      this.openButton.onPress.connect(() => this.toggle());
      this.addChild(this.openButton);
    } else {
      this.openButton.defaultView = getView(closedBG);
      this.openButton.textView = new TextClass({ text: (items == null ? void 0 : items.items) ? items.items[0] : "", style: textStyle });
      this.openButton.textOffset = selectedTextOffset;
    }
    if (this.openView !== openBG) {
      this.openView = getView(openBG);
      this.view.visible = false;
      this.view.addChild(this.openView);
    }
    if (!this.closeButton) {
      this.closeButton = new FancyButton({
        defaultView: new Graphics().rect(0, 0, this.openButton.width, this.openButton.height).fill({ color: 0, alpha: 1e-5 }),
        text: new TextClass({ text: (items == null ? void 0 : items.items) ? items.items[0] : "", style: textStyle }),
        textOffset: selectedTextOffset
      });
      this.closeButton.onPress.connect(() => this.toggle());
      this.view.addChild(this.closeButton);
    } else {
      this.closeButton.defaultView = new Graphics().rect(0, 0, this.openButton.width, this.openButton.height).fill({ color: 0, alpha: 1e-5 });
      this.closeButton.textView = new TextClass({ text: (items == null ? void 0 : items.items) ? items.items[0] : "", style: textStyle });
      this.openButton.textOffset = selectedTextOffset;
    }
    if (!this.scrollBox) {
      this.scrollBox = new ScrollBox();
      this.view.addChild(this.scrollBox);
    } else {
      this.scrollBox.removeItems();
    }
    this.scrollBox.init({
      type: "vertical",
      elementsMargin: 0,
      width: this.openButton.width,
      height: this.openButton.height * (visibleItems ?? defaultVisibleItems),
      radius: 0,
      padding: 0,
      ...scrollBox
    });
    this.scrollBox.y = this.openButton.height;
    if (scrollBox == null ? void 0 : scrollBox.offset) {
      this.scrollBox.x = scrollBox.offset.x ?? 0;
      this.scrollBox.y += scrollBox.offset.y ?? 0;
    }
    this.addItems(items, selected);
  }
  /**
   * Adds items to the dropdown.
   * @param items
   * @param selected
   */
  addItems(items, selected = 0) {
    this.convertItemsToButtons(items).forEach((button, id) => {
      const text = button.text;
      if (id === selected) {
        this.openButton.text = text;
        this.closeButton.text = text;
      }
      button.onPress.connect(() => {
        this.value = id;
        this.onSelect.emit(id, text);
        this.openButton.text = text;
        this.closeButton.text = text;
        this.close();
      });
      this.scrollBox.addItem(button);
    });
  }
  /**
   * Remove items from the dropdown.
   * @param itemID - Item to remove (starting from 0).
   */
  removeItem(itemID) {
    this.scrollBox.removeItem(itemID);
  }
  /** Toggle the select state (open if closed, closes - id open). */
  toggle() {
    this.view.visible = !this.view.visible;
    this.openButton.visible = !this.openButton.visible;
  }
  /** Show dropdown. */
  open() {
    this.view.visible = true;
    this.openButton.visible = false;
  }
  /** Hide dropdown. */
  close() {
    this.view.visible = false;
    this.openButton.visible = true;
  }
  convertItemsToButtons({
    items,
    backgroundColor,
    hoverColor,
    width,
    height,
    textStyle,
    TextClass,
    radius
  }) {
    TextClass = TextClass ?? Text;
    const buttons = [];
    items.forEach((item) => {
      const defaultView = new Graphics().roundRect(0, 0, width, height, radius).fill(backgroundColor);
      const color = hoverColor ?? backgroundColor;
      const hoverView = new Graphics().roundRect(0, 0, width, height, radius).fill(color);
      const text = new TextClass({ text: item, style: textStyle });
      const button = new FancyButton({ defaultView, hoverView, text });
      buttons.push(button);
    });
    return buttons;
  }
};

// node_modules/@pixi/ui/lib/Slider.mjs
var import_typed_signals9 = __toESM(require_dist(), 1);
var __defProp20 = Object.defineProperty;
var __defNormalProp20 = (obj, key, value) => key in obj ? __defProp20(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField20 = (obj, key, value) => {
  __defNormalProp20(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
var Slider = class extends SliderBase {
  constructor(options) {
    super({
      slider1: options.slider,
      value1: options.value,
      ...options
    });
    __publicField20(this, "sliderOptions");
    __publicField20(this, "onUpdate", new import_typed_signals9.Signal());
    __publicField20(this, "onChange", new import_typed_signals9.Signal());
    this.sliderOptions = options;
    this.step = options.step || 1;
    this.value = options.value ?? this.min;
    this.updateSlider();
  }
  /** Return selected value. */
  get value() {
    return this._value1;
  }
  /** Set selected value. */
  set value(value) {
    var _a;
    if (value === this._value1)
      return;
    if (value < this.min)
      value = this.min;
    if (value > this.max)
      value = this.max;
    this._value1 = value;
    this.updateSlider();
    (_a = this.onUpdate) == null ? void 0 : _a.emit(this.value);
  }
  set max(value) {
    super.max = value;
    this.updateSlider();
  }
  get max() {
    return super.max;
  }
  set min(value) {
    super.min = value;
    this.updateSlider();
  }
  get min() {
    return super.min;
  }
  set step(value) {
    super.step = value;
    this.updateSlider();
  }
  get step() {
    return super.step;
  }
  /** Set slider instance ot texture. */
  // eslint-disable-next-line accessor-pairs
  set slider(value) {
    this.slider1 = value;
    this.updateSlider();
  }
  update(event) {
    var _a;
    super.update(event);
    if (!this.dragging)
      return;
    const obj = event.currentTarget;
    const { x } = obj.parent.worldTransform.applyInverse(event.global);
    const positionRatio = x / (((_a = this.bg) == null ? void 0 : _a.width) || 1);
    const rawValue = this.min + positionRatio * (this.max - this.min);
    this.value = Math.round(rawValue / this.step) * this.step;
  }
  change() {
    var _a;
    (_a = this.onChange) == null ? void 0 : _a.emit(this.value);
  }
  updateSlider() {
    var _a, _b, _c, _d, _e;
    this.progress = ((this.value ?? this.min) - this.min) / (this.max - this.min) * 100;
    this._slider1.x = ((_a = this.bg) == null ? void 0 : _a.width) / 100 * this.progress - this._slider1.width / 2;
    this._slider1.y = ((_b = this.bg) == null ? void 0 : _b.height) / 2;
    if ((_c = this.sliderOptions) == null ? void 0 : _c.showValue) {
      this.value1Text.text = `${Math.round(this.value)}`;
      const sliderPosX = this._slider1.x + this._slider1.width / 2;
      const sliderPosY = this._slider1.y;
      this.value1Text.x = sliderPosX + (((_d = this.sliderOptions.valueTextOffset) == null ? void 0 : _d.x) ?? 0);
      this.value1Text.y = sliderPosY + (((_e = this.sliderOptions.valueTextOffset) == null ? void 0 : _e.y) ?? 0);
    }
  }
  /**
   * Sets width of a Sliders background and fill.
   * If nineSliceSprite is set, then width will be set to nineSliceSprite.
   * If nineSliceSprite is not set, then width will control components width as Container.
   * @param value - Width value.
   */
  set width(value) {
    super.width = value;
    this.updateSlider();
  }
  /** Gets width of a Slider. */
  get width() {
    return super.width;
  }
  /**
   * Sets height of a Sliders background and fill.
   * If nineSliceSprite is set, then height will be set to nineSliceSprite.
   * If nineSliceSprite is not set, then height will control components height as Container.
   * @param value - Height value.
   */
  set height(value) {
    super.height = value;
    this.updateSlider();
  }
  /** Gets height of a Slider. */
  get height() {
    return super.height;
  }
  setSize(value, height) {
    super.setSize(value, height);
    this.updateSlider();
  }
};
export {
  Button,
  ButtonContainer,
  CheckBox,
  CircularProgressBar,
  DoubleSlider,
  FancyButton,
  Input,
  List,
  MaskedFrame,
  ProgressBar,
  RadioGroup,
  ScrollBox,
  Select,
  Slider,
  Switcher
};
/*! Bundled license information:

tweedle.js/dist/tweedle.es.js:
  (*!
   * tweedle.js - v2.1.0
   * Compiled Wed, 05 Apr 2023 15:21:25 UTC
   *
   * tweedle.js is licensed under the MIT License.
   * http://www.opensource.org/licenses/mit-license
   * 
   * Copyright 2019-2021, Milton Candelero <miltoncandelero@gmail.com>, All Rights Reserved
   *)
*/
//# sourceMappingURL=@pixi_ui.js.map
