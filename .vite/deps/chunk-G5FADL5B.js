import {
  BitmapTextPipe,
  CanvasTextPipe,
  CanvasTextSystem,
  FilterPipe,
  FilterSystem,
  GraphicsContextSystem,
  GraphicsPipe,
  HTMLTextPipe,
  HTMLTextSystem,
  MeshPipe,
  NineSliceSpritePipe,
  ResizePlugin,
  TickerPlugin,
  TilingSpritePipe
} from "./chunk-P3YV5OXK.js";
import {
  extensions
} from "./chunk-IMN33NWI.js";

// node_modules/pixi.js/lib/app/init.mjs
extensions.add(ResizePlugin);
extensions.add(TickerPlugin);

// node_modules/pixi.js/lib/scene/graphics/init.mjs
extensions.add(GraphicsPipe);
extensions.add(GraphicsContextSystem);

// node_modules/pixi.js/lib/scene/mesh/init.mjs
extensions.add(MeshPipe);

// node_modules/pixi.js/lib/scene/text/init.mjs
extensions.add(CanvasTextSystem);
extensions.add(CanvasTextPipe);

// node_modules/pixi.js/lib/scene/text-bitmap/init.mjs
extensions.add(BitmapTextPipe);

// node_modules/pixi.js/lib/scene/text-html/init.mjs
extensions.add(HTMLTextSystem);
extensions.add(HTMLTextPipe);

// node_modules/pixi.js/lib/scene/sprite-tiling/init.mjs
extensions.add(TilingSpritePipe);

// node_modules/pixi.js/lib/scene/sprite-nine-slice/init.mjs
extensions.add(NineSliceSpritePipe);

// node_modules/pixi.js/lib/filters/init.mjs
extensions.add(FilterSystem);
extensions.add(FilterPipe);
//# sourceMappingURL=chunk-G5FADL5B.js.map
