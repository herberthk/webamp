import MakiObject from "./MakiObject";
import GuiObject from "./GuiObject";
import { findDescendantByTypeAndId, unimplementedWarning } from "../utils";
import { XmlNode } from "../types";
import Layout from "./Layout";

class Container extends MakiObject {
  visible: boolean;
  constructor(node: XmlNode, parent: MakiObject, annotations: Object = {}) {
    super(node, parent, annotations);

    this.visible = true;
  }

  /**
   * getclassname()
   *
   * Returns the class name for the object.
   * @ret The class name.
   */
  getclassname() {
    return "Container";
  }

  show(): void {
    this.visible = true;
    this.js_trigger("js_update");
  }

  hide(): void {
    this.visible = false;
    this.js_trigger("js_update");
  }

  setxmlparam(param: string, value: string): void {
    this.attributes[param] = value;
    this.js_trigger("js_update");
  }

  getlayout(id: string) {
    const self: MakiObject = this;
    return findDescendantByTypeAndId(self, "layout", id);
  }

  onswitchtolayout(newlayout: Layout): void {
    this.js_trigger("onSwitchToLayout", newlayout);
  }

  onbeforeswitchtolayout(oldlayout: Layout, newlayout: Layout): void {
    this.js_trigger("onBeforeSwitchToLayout", oldlayout, newlayout);
  }

  onhidelayout(_layout: Layout): void {
    this.js_trigger("onHideLayout", _layout);
  }

  onshowlayout(_layout: Layout): void {
    this.js_trigger("onShowLayout", _layout);
  }

  getnumlayouts() {
    unimplementedWarning("getnumlayouts");
    return;
  }

  enumlayout(num: number) {
    unimplementedWarning("enumlayout");
    return;
  }

  switchtolayout(layout_id: string) {
    unimplementedWarning("switchtolayout");
    return;
  }

  close() {
    unimplementedWarning("close");
    return;
  }

  toggle() {
    unimplementedWarning("toggle");
    return;
  }

  isdynamic() {
    unimplementedWarning("isdynamic");
    return;
  }

  setname(name: string) {
    unimplementedWarning("setname");
    return;
  }

  getcurlayout() {
    unimplementedWarning("getcurlayout");
    // TODO: For now we just always show the first layout. I think that's the default.
    return this.js_getChildren().find(childNode => {
      return childNode.getclassname() === "Layout";
    });
  }

  getname() {
    unimplementedWarning("getname");
    return;
  }

  getguid() {
    unimplementedWarning("getguid");
    return;
  }

  onaddcontent(wnd: GuiObject, id: string, guid: string) {
    unimplementedWarning("onaddcontent");
    return;
  }
}

export default Container;
