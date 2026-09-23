import { cva as e } from "class-variance-authority";
import { Comment as t, Fragment as n, computed as r, createBlock as i, createCommentVNode as a, createElementBlock as o, createElementVNode as s, createTextVNode as c, createVNode as l, defineComponent as u, getCurrentInstance as d, getCurrentScope as f, guardReactiveProps as p, h as m, isRef as h, mergeModels as g, mergeProps as _, nextTick as v, normalizeClass as y, normalizeProps as b, normalizeStyle as x, onBeforeUnmount as S, onMounted as C, onScopeDispose as w, openBlock as T, reactive as E, ref as D, render as O, renderList as k, renderSlot as A, shallowReadonly as j, shallowRef as M, toDisplayString as N, toValue as P, unref as F, useModel as ee, useTemplateRef as I, vModelDynamic as te, vShow as ne, watch as L, watchEffect as re, withCtx as R, withDirectives as ie, withKeys as z, withModifiers as B } from "vue";
import { AutocompleteAnchor as ae, AutocompleteContent as oe, AutocompleteInput as se, AutocompleteItem as V, AutocompletePortal as H, AutocompleteRoot as ce, AutocompleteTrigger as U, AutocompleteViewport as le, DialogContent as ue, DialogDescription as de, DialogOverlay as fe, DialogPortal as pe, DialogRoot as me, DialogTitle as he, DialogTrigger as ge, DropdownMenuContent as _e, DropdownMenuItem as ve, DropdownMenuPortal as ye, DropdownMenuRoot as be, DropdownMenuSeparator as xe, DropdownMenuTrigger as Se, Primitive as Ce, ProgressIndicator as we, ProgressRoot as Te, ScrollAreaRoot as Ee, ScrollAreaScrollbar as De, ScrollAreaThumb as Oe, ScrollAreaViewport as ke, SelectContent as Ae, SelectItem as je, SelectItemIndicator as Me, SelectItemText as Ne, SelectPortal as Pe, SelectRoot as Fe, SelectScrollDownButton as Ie, SelectScrollUpButton as Le, SelectTrigger as Re, SelectValue as ze, SelectViewport as Be, SliderRange as Ve, SliderRoot as He, SliderThumb as Ue, SliderTrack as We, SplitterGroup as Ge, SplitterPanel as Ke, SplitterResizeHandle as qe, TabsIndicator as Je, TabsList as Ye, TabsRoot as Xe, TabsTrigger as Ze, ToastDescription as Qe, ToastProvider as $e, ToastRoot as et, ToastViewport as tt, useForwardPropsEmits as W } from "reka-ui";
import { AlertCircleIcon as nt, ArrowRight as rt, Check as it, CheckCircle2 as at, ChevronDown as ot, ChevronUp as st, Eye as ct, EyeClosed as lt, InfoIcon as ut, Loader2 as dt, Loader2Icon as ft, X as pt, XCircleIcon as mt } from "lucide-vue-next";
//#endregion
//#region src/components/Button/Button.vue
var G = /* @__PURE__ */ u({
	__name: "Button",
	props: {
		variant: { default: "secondary" },
		status: { default: "normal" },
		size: { default: "base" },
		isLoading: {
			type: Boolean,
			default: !1
		},
		loadingText: { default: "" },
		long: { type: Boolean },
		asChild: { type: Boolean },
		as: { default: "button" }
	},
	setup(e) {
		let t = e;
		return (r, s) => (T(), i(F(Ce), {
			as: e.as,
			"as-child": e.asChild,
			class: y([F(ht)(t), r.$attrs.class]),
			disabled: e.isLoading || r.$attrs.disabled,
			onKeydown: s[0] ||= z(B(() => {}, ["prevent", "stop"]), ["space"])
		}, {
			default: R(() => [e.isLoading ? (T(), i(F(ft), {
				key: 0,
				class: "ui-button_loader"
			})) : a("", !0), !e.isLoading || e.isLoading && !e.loadingText ? A(r.$slots, "default", {}, void 0, void 0, 1) : (T(), o(n, { key: 2 }, [c(N(e.loadingText), 1)], 64))]),
			_: 3
		}, 8, [
			"as",
			"as-child",
			"class",
			"disabled"
		]));
	}
}), ht = e("ui-button", {
	variants: {
		variant: {
			primary: "ui-button-primary",
			secondary: "ui-button-secondary",
			text: "ui-button-text"
		},
		status: {
			normal: "ui-button-status_normal",
			primary: "ui-button-status_primary",
			success: "ui-button-status_success",
			danger: "ui-button-status_danger",
			warning: "ui-button-status_warning"
		},
		size: {
			base: "ui-button-size_base",
			small: "ui-button-size_small",
			medium: "ui-button-size_medium",
			large: "ui-button-size_large"
		},
		long: { true: "ui-button-long" }
	},
	defaultVariants: {
		variant: "secondary",
		status: "normal",
		size: "base",
		long: !1
	}
}), gt = { class: "ui-dialog-header" }, _t = {
	key: 0,
	class: "ui-dialog-footer"
}, vt = /* @__PURE__ */ u({
	__name: "Dialog",
	props: {
		title: { default: "标题" },
		width: { default: "500px" },
		description: {},
		closable: {
			type: Boolean,
			default: !0
		},
		hideTitle: { type: Boolean },
		hideFooter: { type: Boolean },
		hideOverlay: { type: Boolean },
		hideCancel: { type: Boolean },
		hideConfirm: { type: Boolean },
		confirmText: { default: "确定" },
		cancelText: { default: "取消" },
		escToClose: { type: Boolean },
		overlayToClose: { type: Boolean },
		onCancel: {},
		onConfirm: {}
	},
	emits: ["close"],
	setup(e, { expose: t, emit: n }) {
		let u = D(!1), d = e, f = n;
		t({
			show() {
				u.value = !0;
			},
			hide() {
				u.value = !1;
			}
		}), L(u, (e) => {
			e || f("close");
		});
		let p = r(() => {
			let e = "auto";
			return typeof d.width == "number" && (e = d.width + "px"), { width: e };
		});
		function m(e) {
			d.escToClose || e.preventDefault();
		}
		function h(e) {
			d.overlayToClose || e.preventDefault();
		}
		function g(e) {
			e.preventDefault(), u.value = !1;
		}
		async function _() {
			d.onCancel && typeof d.onCancel == "function" ? await d.onCancel() ? u.value = !1 : u.value = !0 : u.value = !1;
		}
		async function v(e) {
			e.preventDefault(), d.onConfirm && typeof d.onConfirm == "function" ? await d.onConfirm() ? u.value = !1 : u.value = !0 : u.value = !1;
		}
		return (t, n) => (T(), i(F(me), {
			open: u.value,
			"onUpdate:open": n[0] ||= (e) => u.value = e
		}, {
			default: R(() => [t.$slots.trigger ? (T(), i(F(ge), {
				key: 0,
				"as-child": ""
			}, {
				default: R(() => [A(t.$slots, "trigger")]),
				_: 3
			})) : a("", !0), l(F(pe), null, {
				default: R(() => [e.hideOverlay ? a("", !0) : (T(), i(F(fe), {
					key: 0,
					class: "ui-dialog-overlay"
				})), l(F(ue), {
					class: "ui-dialog-content",
					style: x(p.value),
					onEscapeKeyDown: m,
					onPointerDownOutside: h
				}, {
					default: R(() => [
						s("div", gt, [l(F(he), { class: "ui-dialog-header_title" }, {
							default: R(() => [A(t.$slots, "title", {}, () => [c(N(e.title), 1)])]),
							_: 3
						}), ie(l(F(de), { class: "ui-dialog-header_description" }, {
							default: R(() => [A(t.$slots, "description", {}, () => [c(N(e.description), 1)])]),
							_: 3
						}, 512), [[ne, !!e.description]])]),
						A(t.$slots, "default"),
						e.hideFooter ? a("", !0) : (T(), o("div", _t, [A(t.$slots, "footer", {}, () => [e.hideCancel ? a("", !0) : (T(), i(F(G), {
							key: 0,
							onClick: _
						}, {
							default: R(() => [c(N(e.cancelText), 1)]),
							_: 1
						})), e.hideConfirm ? a("", !0) : (T(), i(F(G), {
							key: 1,
							variant: "primary",
							onClick: v
						}, {
							default: R(() => [c(N(e.confirmText), 1)]),
							_: 1
						}))])])),
						e.closable ? (T(), o("button", {
							key: 1,
							class: "ui-dialog-close",
							onClick: g
						}, [l(F(pt), { size: 16 })])) : a("", !0)
					]),
					_: 3
				}, 8, ["style"])]),
				_: 3
			})]),
			_: 3
		}, 8, ["open"]));
	}
}), K = E({
	type: "info",
	title: "",
	message: "",
	confirmText: "确定",
	cancelText: "取消",
	onConfirm: void 0,
	hideCancel: !1,
	hideConfirm: !1
}), yt = null, q = null;
function bt() {
	return q || (q = document.createElement("div"), q.className = "ui-alert", document.body.appendChild(q)), q;
}
function xt(e = "info", t, n, r) {
	let i = bt();
	K.type = e, K.title = t, K.message = n, K.confirmText = r?.confirmText ?? "确定", K.cancelText = r?.cancelText ?? "取消", K.onConfirm = r?.onConfirm, K.hideCancel = r?.hideCancel, K.hideConfirm = r?.hideConfirm;
	let a = l(Ct, K);
	O(a, i), yt = a.component?.exposed, yt?.open();
}
var St = {
	info(e, t, n) {
		xt("info", e, t, n);
	},
	success(e, t, n) {
		xt("success", e, t, n);
	},
	warn(e, t, n) {
		xt("warn", e, t, n);
	},
	error(e, t, n) {
		xt("error", e, t, n);
	}
}, Ct = /* @__PURE__ */ u({
	__name: "Alert",
	props: {
		type: { default: "info" },
		title: {},
		message: {},
		confirmText: { default: "确定" },
		cancelText: { default: "取消" },
		hideCancel: { type: Boolean },
		hideConfirm: { type: Boolean },
		onConfirm: {}
	},
	setup(e, { expose: t }) {
		let n = e, o = r(() => {
			switch (n.type) {
				case "error": return "danger";
				case "warn": return "warning";
				case "success": return "success";
				default: return "normal";
			}
		}), s = I("dialogRef");
		t({
			open: () => s.value?.show(),
			close: () => s.value?.hide()
		});
		async function l() {
			s.value?.hide();
		}
		async function u() {
			n.onConfirm && typeof n.onConfirm == "function" && !await n.onConfirm() || s.value?.hide();
		}
		return (t, r) => (T(), i(F(vt), {
			ref_key: "dialogRef",
			ref: s,
			width: 360,
			title: n.title,
			description: n.message,
			closable: !1
		}, {
			footer: R(() => [e.hideCancel ? a("", !0) : (T(), i(F(G), {
				key: 0,
				onClick: l
			}, {
				default: R(() => [c(N(n.cancelText), 1)]),
				_: 1
			})), e.hideConfirm ? a("", !0) : (T(), i(F(G), {
				key: 1,
				variant: "primary",
				status: o.value,
				onClick: u
			}, {
				default: R(() => [c(N(n.confirmText), 1)]),
				_: 1
			}, 8, ["status"]))]),
			_: 1
		}, 8, ["title", "description"]));
	}
}), wt = /* @__PURE__ */ u({
	__name: "DropdownMenu",
	props: {
		isDark: { type: Boolean },
		forceMount: { type: Boolean },
		loop: { type: Boolean },
		memoDependencies: {},
		side: { default: "bottom" },
		sideOffset: { default: 4 },
		sideFlip: { type: Boolean },
		align: { default: "start" },
		alignOffset: {},
		alignFlip: { type: Boolean },
		avoidCollisions: { type: Boolean },
		collisionBoundary: {},
		collisionPadding: {},
		arrowPadding: {},
		hideShiftedArrow: { type: Boolean },
		sticky: {},
		hideWhenDetached: { type: Boolean },
		positionStrategy: {},
		updatePositionStrategy: {},
		disableUpdateOnLayoutShift: { type: Boolean },
		prioritizePosition: { type: Boolean },
		reference: {},
		asChild: { type: Boolean },
		as: {}
	},
	emits: [
		"escapeKeyDown",
		"pointerDownOutside",
		"focusOutside",
		"interactOutside",
		"closeAutoFocus"
	],
	setup(e, { emit: t }) {
		let n = W(e, t);
		function r(e) {
			e || setTimeout(() => {
				document.activeElement?.blur();
			});
		}
		return (t, a) => (T(), i(F(be), { "onUpdate:open": r }, {
			default: R(({ open: r }) => [l(F(Se), { "as-child": "" }, {
				default: R(() => [A(t.$slots, "default", { open: r })]),
				_: 2
			}, 1024), l(F(ye), null, {
				default: R(() => [l(F(_e), _({ class: "ui-listbox-content" }, F(n), { "data-theme": e.isDark ? "dark" : void 0 }), {
					default: R(() => [A(t.$slots, "content")]),
					_: 3
				}, 16, ["data-theme"])]),
				_: 3
			})]),
			_: 3
		}));
	}
}), Tt = /* @__PURE__ */ u({
	__name: "DropdownMenuItem",
	props: {
		disabled: { type: Boolean },
		textValue: {},
		asChild: { type: Boolean },
		as: {}
	},
	emits: ["select"],
	setup(e, { emit: t }) {
		let n = W(e, t);
		return (e, t) => (T(), i(F(ve), _({ class: "ui-listbox-item no-indicator" }, F(n)), {
			default: R(() => [A(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), Et = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, Dt = {}, Ot = { class: "ui-listbox-shortcut" };
function kt(e, t) {
	return T(), o("span", Ot, [A(e.$slots, "default")]);
}
var At = /*#__PURE__*/ Et(Dt, [["render", kt]]), jt = /* @__PURE__ */ u({
	__name: "DropdownMenuSeparator",
	setup(e) {
		return (e, t) => (T(), i(F(xe)));
	}
}), Mt = {}, Nt = { class: "ui-form" };
function Pt(e, t) {
	return T(), o("div", Nt, [A(e.$slots, "default")]);
}
var Ft = /*#__PURE__*/ Et(Mt, [["render", Pt]]), It = { class: "ui-form-item" }, Lt = {
	key: 0,
	class: "ui-form-item-header"
}, Rt = {
	key: 0,
	class: "ui-form-item_title"
}, zt = {
	key: 1,
	class: "ui-form-item_description"
}, Bt = {
	key: 2,
	class: "ui-form-item_extra"
}, Vt = { class: "ui-form-item-container" }, Ht = { class: "ui-form-item_content" }, Ut = {
	key: 0,
	class: "ui-form-item_helper"
}, Wt = /* @__PURE__ */ u({
	__name: "FormItem",
	props: {
		label: {},
		description: {}
	},
	setup(e) {
		return (t, n) => (T(), o("div", It, [e.label || e.description || t.$slots.extra ? (T(), o("div", Lt, [
			e.label ? (T(), o("span", Rt, N(e.label), 1)) : a("", !0),
			e.description ? (T(), o("span", zt, N(e.description), 1)) : a("", !0),
			t.$slots.extra ? (T(), o("div", Bt, [A(t.$slots, "extra")])) : a("", !0)
		])) : a("", !0), s("div", Vt, [s("div", Ht, [A(t.$slots, "default")]), t.$slots.helper ? (T(), o("div", Ut, [A(t.$slots, "helper")])) : a("", !0)])]));
	}
}), Gt = {
	key: 0,
	class: "ui-input-prefix"
}, Kt = {
	key: 0,
	class: "ui-input-icon"
}, qt = [
	"placeholder",
	"name",
	"type",
	"disabled"
], Jt = {
	key: 1,
	class: "ui-input-suffix"
}, Yt = ["disabled"], Xt = /* @__PURE__ */ u({
	__name: "Input",
	props: /*@__PURE__*/ g({
		name: {},
		type: {},
		size: {},
		placeholder: { default: "" },
		disabled: { type: Boolean }
	}, {
		modelValue: {},
		modelModifiers: {}
	}),
	emits: /*@__PURE__*/ g(["input", "change"], ["update:modelValue"]),
	setup(e, { emit: t }) {
		let n = e, c = I("inputRef"), l = D(!1), u = ee(e, "modelValue"), d = r(() => n.type === "password" ? l.value ? "text" : "password" : n.type);
		function f() {
			l.value = !l.value;
			let e = c.value;
			if (!e) return;
			let t = e.value.length;
			requestAnimationFrame(() => {
				try {
					e.setSelectionRange(t, t);
				} catch {}
				e.focus();
			});
		}
		function p(e) {
			if (e.target.closest("input, button, a")) return;
			let t = c.value;
			if (!t) return;
			let n = t.value.length;
			requestAnimationFrame(() => {
				try {
					t.setSelectionRange(n, n);
				} catch {}
				t.focus();
			});
		}
		return (t, r) => (T(), o("div", {
			class: y([F(on)(n), t.$attrs.class]),
			onPointerdown: p
		}, [
			t.$slots.prefix || t.$slots.icon ? (T(), o("span", Gt, [t.$slots.icon ? (T(), o("span", Kt, [A(t.$slots, "icon")])) : A(t.$slots, "prefix", {}, void 0, void 0, 1)])) : a("", !0),
			ie(s("input", {
				ref_key: "inputRef",
				ref: c,
				"onUpdate:modelValue": r[0] ||= (e) => u.value = e,
				autocomplete: "off",
				spellCheck: "false",
				class: "ui-input-native",
				placeholder: e.placeholder,
				name: e.name,
				type: d.value,
				disabled: e.disabled
			}, null, 8, qt), [[te, u.value]]),
			t.$slots.suffix ? (T(), o("span", Jt, [A(t.$slots, "suffix")])) : a("", !0),
			e.type === "password" ? (T(), o("button", {
				key: 2,
				type: "button",
				tabindex: "-1",
				class: "ui-input-button",
				disabled: e.disabled,
				onPointerdown: r[1] ||= B(() => {}, ["prevent"]),
				onMousedown: r[2] ||= B(() => {}, ["prevent"]),
				onClick: B(f, ["stop"])
			}, [l.value ? (T(), i(F(ct), {
				key: 0,
				class: "ui-input-icon"
			})) : (T(), i(F(lt), {
				key: 1,
				class: "ui-input-icon"
			}))], 40, Yt)) : a("", !0)
		], 34));
	}
}), Zt = {
	key: 0,
	class: "ui-input-prefix"
}, Qt = {
	key: 0,
	class: "ui-input-icon"
}, $t = { class: "ui-listbox-label" }, en = ["onClick"], tn = /* @__PURE__ */ u({
	__name: "Autocomplete",
	props: {
		size: {},
		name: {},
		placeholder: {},
		options: {},
		modelValue: {},
		defaultValue: {},
		open: { type: Boolean },
		defaultOpen: { type: Boolean },
		disabled: { type: Boolean },
		dir: {},
		required: { type: Boolean },
		resetSearchTermOnBlur: { type: Boolean },
		openOnFocus: { type: Boolean },
		openOnClick: { type: Boolean },
		ignoreFilter: { type: Boolean },
		highlightOnHover: { type: Boolean },
		asChild: {
			type: Boolean,
			default: !0
		},
		as: {}
	},
	emits: [
		"remove",
		"update:modelValue",
		"highlight",
		"update:open"
	],
	setup(e, { emit: t }) {
		let c = e, u = t, d = W(c, u), f = I("inputRef"), m = r(() => c.options?.map((e) => typeof e == "string" || typeof e == "number" ? {
			value: e,
			label: String(e)
		} : e) ?? []);
		function h(e) {
			if (e.target.closest("input, button, a")) return;
			let t = f.value?.$el;
			if (!t) return;
			let n = t.value.length;
			requestAnimationFrame(() => {
				try {
					t.setSelectionRange(n, n);
				} catch {}
				t.focus();
			});
		}
		function g(e) {
			u("remove", e);
		}
		return (t, r) => (T(), i(F(ce), b(p(F(d))), {
			default: R(() => [l(F(ae), {
				class: y([F(on)(c), t.$attrs.class]),
				onPointerdown: h
			}, {
				default: R(() => [
					t.$slots.prefix || t.$slots.icon ? (T(), o("span", Zt, [t.$slots.icon ? (T(), o("span", Qt, [A(t.$slots, "icon")])) : A(t.$slots, "prefix", {}, void 0, void 0, 1)])) : a("", !0),
					l(F(se), {
						ref_key: "inputRef",
						ref: f,
						name: e.name,
						placeholder: e.placeholder,
						type: "text",
						class: "ui-input-native"
					}, null, 8, ["name", "placeholder"]),
					l(F(U), { class: "ui-input-button" }, {
						default: R(() => [l(F(ot), { class: "ui-input-icon" })]),
						_: 1
					})
				]),
				_: 3
			}, 8, ["class"]), l(F(H), null, {
				default: R(() => [l(F(oe), {
					position: "popper",
					"side-offset": 4,
					align: "start",
					class: "ui-listbox-content"
				}, {
					default: R(() => [l(F(le), { class: "ui-listbox-viewport" }, {
						default: R(() => [(T(!0), o(n, null, k(m.value, (e) => (T(), i(F(V), {
							class: "ui-listbox-item no-indicator",
							value: e.value
						}, {
							default: R(() => [s("span", $t, N(e.label), 1), s("button", {
								class: "ui-listbox-right-button",
								onClick: B((t) => g(e), ["stop"])
							}, " 删除 ", 8, en)]),
							_: 2
						}, 1032, ["value"]))), 256))]),
						_: 1
					})]),
					_: 1
				})]),
				_: 1
			})]),
			_: 3
		}, 16));
	}
}), nn = {
	key: 0,
	class: "ui-input-prefix"
}, rn = { class: "ui-input-suffix" }, an = /* @__PURE__ */ u({
	__name: "Select",
	props: {
		placeholder: { default: "" },
		size: { default: "base" },
		data: {},
		modelValue: {},
		open: { type: Boolean },
		defaultOpen: { type: Boolean },
		defaultValue: {},
		nullableValue: {},
		by: {},
		dir: {},
		multiple: { type: Boolean },
		autocomplete: {},
		disabled: { type: Boolean },
		name: {},
		required: { type: Boolean }
	},
	emits: ["update:modelValue", "update:open"],
	setup(e, { emit: t }) {
		let u = e, d = t, f = r(() => {
			let { data: e, placeholder: t, size: n, modelValue: r, ...i } = u;
			return i;
		}), p = W(f, d), m = r(() => u.data.map((e) => typeof e == "string" || typeof e == "number" ? {
			value: String(e),
			label: String(e)
		} : {
			...e,
			value: String(e.value),
			label: e.label ?? String(e.value)
		})), h = r(() => {
			if (u.modelValue === void 0 || u.modelValue === null || u.modelValue === "") return;
			let e = String(u.modelValue), t = m.value.find((t) => t.value === e);
			return t ? t.label : void 0;
		});
		function g(e) {
			e || setTimeout(() => {
				document.activeElement?.blur();
			});
		}
		return (e, t) => (T(), i(F(Fe), _(F(p), {
			"model-value": u.modelValue ? String(u.modelValue) : void 0,
			"onUpdate:open": g
		}), {
			default: R(() => [l(F(Re), {
				class: y([
					"ui-select",
					F(on)(u),
					e.$attrs.class
				]),
				style: x(e.$attrs.style)
			}, {
				default: R(() => [
					e.$slots.prefix ? (T(), o("span", nn, [A(e.$slots, "prefix")])) : a("", !0),
					h.value ? (T(), i(F(ze), {
						key: 2,
						class: "ui-input-native"
					}, {
						default: R(() => [c(N(h.value), 1)]),
						_: 1
					})) : (T(), i(F(ze), {
						key: 1,
						placeholder: u.placeholder,
						class: "ui-input-native"
					}, null, 8, ["placeholder"])),
					s("span", rn, [A(e.$slots, "suffix", {}, () => [l(F(ot), {
						size: 14,
						class: "ui-input-icon"
					})])])
				]),
				_: 3
			}, 8, ["class", "style"]), l(F(Pe), null, {
				default: R(() => [l(F(Ae), {
					position: "popper",
					"side-offset": 4,
					class: "ui-listbox-content"
				}, {
					default: R(() => [
						l(F(Le), { class: "ui-listbox-scroll-button" }, {
							default: R(() => [l(F(st), { size: 14 })]),
							_: 1
						}),
						l(F(Be), null, {
							default: R(() => [(T(!0), o(n, null, k(m.value, (e) => (T(), i(F(je), {
								key: e.value,
								class: "ui-listbox-item",
								value: e.value
							}, {
								default: R(() => [l(F(Me), { class: "ui-listbox-indicator" }, {
									default: R(() => [l(F(it), { size: 14 })]),
									_: 1
								}), l(F(Ne), { class: "ui-listbox-label" }, {
									default: R(() => [c(N(e.label), 1)]),
									_: 2
								}, 1024)]),
								_: 2
							}, 1032, ["value"]))), 128))]),
							_: 1
						}),
						l(F(Ie), { class: "ui-listbox-scroll-button" }, {
							default: R(() => [l(F(ot), { size: 14 })]),
							_: 1
						})
					]),
					_: 1
				})]),
				_: 1
			})]),
			_: 3
		}, 16, ["model-value"]));
	}
}), on = e("ui-input", {
	variants: { size: {
		base: "ui-input-base",
		small: "ui-input-small",
		medium: "ui-input-medium",
		large: "ui-input-large"
	} },
	defaultVariants: { size: "base" }
}), sn = /* @__PURE__ */ u({
	__name: "Progress",
	props: {
		modelValue: {},
		max: {},
		getValueLabel: {},
		getValueText: {},
		asChild: { type: Boolean },
		as: {}
	},
	emits: ["update:modelValue", "update:max"],
	setup(e, { emit: t }) {
		let n = e, a = W(n, t), o = I("progressRef"), s = r(() => o.value?.getValueLabel ? o.value.getValueLabel(n.modelValue, n.max ?? 100) : 0);
		return (e, t) => (T(), i(F(Te), _({
			class: "ui-progress",
			ref_key: "progressRef",
			ref: o
		}, F(a)), {
			default: R(() => [l(F(we), {
				class: "ui-progress-indicator",
				style: x({ width: s.value })
			}, null, 8, ["style"])]),
			_: 1
		}, 16));
	}
}), cn = /* @__PURE__ */ u({
	__name: "Segmented",
	props: {
		modelValue: {},
		size: { default: "base" },
		defaultValue: {},
		orientation: {},
		dir: {},
		activationMode: { default: "automatic" },
		unmountOnHide: { type: Boolean },
		asChild: {
			type: Boolean,
			default: !0
		},
		as: {}
	},
	emits: ["update:modelValue"],
	setup(e, { emit: t }) {
		let n = e, r = W(n, t);
		function a() {
			document.activeElement?.blur();
		}
		return (e, t) => (T(), i(F(Xe), _({ class: [F(un)(n), e.$attrs.class] }, F(r), { "onUpdate:modelValue": a }), {
			default: R(() => [l(F(Ye), null, {
				default: R(() => [l(F(Je), { class: "ui-segmented-indicator" }), A(e.$slots, "default")]),
				_: 3
			})]),
			_: 3
		}, 16, ["class"]));
	}
}), ln = /* @__PURE__ */ u({
	__name: "SegmentedItem",
	props: {
		label: {},
		value: {},
		disabled: { type: Boolean },
		asChild: { type: Boolean },
		as: {}
	},
	setup(e) {
		let t = W(e);
		return (n, r) => (T(), i(F(Ze), _(F(t), { class: "ui-segmented-item" }), {
			default: R(() => [c(N(e.label), 1)]),
			_: 1
		}, 16));
	}
}), un = e("ui-segmented", {
	variants: { size: {
		base: "",
		small: "ui-segmented_small",
		medium: "ui-segmented_medium",
		large: "ui-segmented_large"
	} },
	defaultVariants: { size: "base" }
}), dn = /* @__PURE__ */ u({
	__name: "Slider",
	props: /*@__PURE__*/ g({
		min: { default: 0 },
		max: { default: 100 },
		step: { default: 1 },
		disabled: {
			type: Boolean,
			default: !1
		},
		values: {},
		hideThumb: {
			type: Boolean,
			default: !1
		}
	}, {
		modelValue: {},
		modelModifiers: {}
	}),
	emits: /*@__PURE__*/ g(["change"], ["update:modelValue"]),
	setup(e, { emit: t }) {
		let a = e, s = ee(e, "modelValue"), c = t, u = r(() => Array.isArray(a.values) && a.values.length > 0), d = r(() => u.value ? 0 : a.min), f = r(() => u.value ? a.values.length - 1 : a.max), p = r(() => u.value ? 1 : a.step), m = r({
			get() {
				if (u.value) {
					let e = a.values.findIndex((e) => e === s.value);
					return [e === -1 ? 0 : e];
				}
				return typeof s.value == "number" ? [s.value] : [a.min];
			},
			set(e) {
				let t = e[0] ?? 0, n;
				n = u.value ? a.values[t] ?? a.values[0] : t, s.value = n, c("change", n);
			}
		});
		return (e, t) => (T(), i(F(He), {
			class: "ui-slider",
			modelValue: m.value,
			"onUpdate:modelValue": t[0] ||= (e) => m.value = e,
			min: d.value,
			max: f.value,
			step: p.value,
			disabled: a.disabled
		}, {
			default: R(() => [l(F(We), { class: "ui-slider_track" }, {
				default: R(() => [l(F(Ve), { class: "ui-slider_range" })]),
				_: 1
			}), (T(!0), o(n, null, k(m.value, (e, t) => (T(), i(F(Ue), {
				key: t,
				class: y(["ui-slider_thumb"])
			}))), 128))]),
			_: 1
		}, 8, [
			"modelValue",
			"min",
			"max",
			"step",
			"disabled"
		]));
	}
}), fn = u({
	name: "Space",
	props: {
		size: {
			type: Number,
			default: 8
		},
		direction: {
			type: String,
			default: "horizontal"
		},
		fill: {
			type: Boolean,
			default: !1
		}
	},
	setup(e, { slots: r, attrs: i }) {
		let a = (e) => {
			let r = [];
			return e.forEach((e) => {
				e.type !== t && (e.type === n && Array.isArray(e.children) ? r.push(...a(e.children)) : r.push(e));
			}), r;
		};
		return () => {
			let t = r.default ? r.default() : [], n = a(t);
			return m("div", {
				...i,
				class: [pn(e), i.class],
				style: [{ gap: `${e.size}px` }, i.style || {}]
			}, n.map((e, t) => {
				let n = e.key !== null && e.key !== void 0 ? e.key : typeof e.type == "object" && e.type.__name || t;
				return m("div", {
					class: "ui-space-item",
					key: `space-item-${n}-${t}`
				}, [e]);
			}));
		};
	}
}), pn = e("ui-space", {
	variants: {
		direction: {
			horizontal: "ui-space-horizontal",
			vertical: "ui-space-vertical"
		},
		fill: { true: "ui-space-fill" }
	},
	defaultVariants: { direction: "horizontal" }
}), mn = { class: "ui-splitter-extra" }, hn = /* @__PURE__ */ u({
	__name: "Splitter",
	props: {
		main: {},
		aside: {},
		asideTop: {},
		asideBottom: {}
	},
	emits: [
		"collapse",
		"expand",
		"resize"
	],
	setup(e, { emit: t }) {
		let n = t;
		function r(e, t) {
			n("resize", e, t);
		}
		return (t, a) => (T(), i(F(Ge), { direction: "horizontal" }, {
			default: R(() => [
				l(F(Ke), _({ class: "ui-splitter-panel" }, e.main), {
					default: R(() => [A(t.$slots, "default")]),
					_: 3
				}, 16),
				l(F(qe), { class: "ui-splitter-handle" }),
				l(F(Ke), _({ class: "ui-splitter-aside" }, e.aside, {
					onCollapse: a[0] ||= (e) => n("collapse"),
					onExpand: a[1] ||= (e) => n("expand"),
					onResize: r
				}), {
					default: R(() => [l(F(Ge), { direction: "vertical" }, {
						default: R(() => [
							l(F(Ke), _({ class: "ui-splitter-panel" }, e.asideTop), {
								default: R(() => [A(t.$slots, "top")]),
								_: 3
							}, 16),
							l(F(qe), { class: "ui-splitter-handle" }),
							l(F(Ke), _({ class: "ui-splitter-panel" }, e.asideBottom), {
								default: R(() => [A(t.$slots, "bottom")]),
								_: 3
							}, 16)
						]),
						_: 3
					}), s("div", mn, [A(t.$slots, "extra")])]),
					_: 3
				}, 16)
			]),
			_: 3
		}));
	}
}), gn = /* @__PURE__ */ u({
	__name: "Toast",
	props: {
		message: { default: "" },
		type: { default: "info" },
		duration: { default: 3e3 },
		persistent: {
			type: Boolean,
			default: !1
		}
	},
	emits: ["destroy"],
	setup(e, { emit: t }) {
		let n = e, o = t, s = D(!1), l = r(() => n.persistent ? Infinity : n.duration);
		C(() => {
			s.value = !0;
		});
		let u = (e) => {
			s.value = e, e || setTimeout(() => {
				o("destroy");
			}, 200);
		};
		return (t, r) => (T(), i(F(et), {
			open: s.value,
			"onUpdate:open": u,
			type: "background",
			duration: l.value,
			class: "ui-toast-root"
		}, {
			default: R(() => [e.type === "success" ? (T(), i(F(at), {
				key: 0,
				class: y(["ui-toast-icon", e.type])
			}, null, 8, ["class"])) : e.type === "error" ? (T(), i(F(mt), {
				key: 1,
				class: y(["ui-toast-icon", e.type])
			}, null, 8, ["class"])) : e.type === "warning" ? (T(), i(F(nt), {
				key: 2,
				class: y(["ui-toast-icon", e.type])
			}, null, 8, ["class"])) : e.type === "loading" ? (T(), i(F(ft), {
				key: 3,
				class: y(["ui-toast-icon", e.type])
			}, null, 8, ["class"])) : (T(), i(F(ut), {
				key: 4,
				class: y(["ui-toast-icon", e.type])
			}, null, 8, ["class"])), n.message ? (T(), i(F(Qe), {
				key: 5,
				class: "ui-toast-message"
			}, {
				default: R(() => [c(N(n.message), 1)]),
				_: 1
			})) : a("", !0)]),
			_: 1
		}, 8, ["open", "duration"]));
	}
}), J = D([]), _n = !1, vn = u({
	name: "GlobalToastContainer",
	setup() {
		return () => m($e, { swipeDirection: "up" }, () => [J.value.map((e) => m(gn, {
			key: e.id,
			...e,
			onDestroy: () => {
				J.value = J.value.filter((t) => t.id !== e.id);
			}
		})), m(tt, { class: "ui-toast-viewport" })]);
	}
}), yn = () => {
	if (!_n) {
		let e = document.createElement("div");
		e.id = "ui-toast-global-container", document.body.appendChild(e), O(m(vn), e), _n = !0;
	}
}, bn = 0, xn = (e) => {
	yn();
	let t = `ui-toast-${Date.now()}_${bn++}`;
	J.value.push({
		...e,
		id: t
	});
}, Sn = {
	info(e, t) {
		xn({
			type: "info",
			message: e,
			duration: t
		});
	},
	success(e, t) {
		xn({
			type: "success",
			message: e,
			duration: t
		});
	},
	error(e, t) {
		xn({
			type: "error",
			message: e,
			duration: t
		});
	},
	warning(e, t) {
		xn({
			type: "warning",
			message: e,
			duration: t
		});
	},
	loading(e) {
		yn();
		let t = `ui-toast-${Date.now()}_${bn++}`, n = E({
			id: t,
			type: "loading",
			message: e,
			persistent: !0
		});
		return J.value.push(n), {
			id: t,
			update(e) {
				Object.assign(n, e);
			},
			hide() {
				J.value = J.value.filter((e) => e.id !== t);
			}
		};
	}
}, Cn = /* @__PURE__ */ u({
	__name: "Tag",
	props: { type: { default: "default" } },
	setup(e) {
		return (t, n) => (T(), o("span", { class: y(["ui-tag", `ui-tag_${e.type}`]) }, [A(t.$slots, "default")], 2));
	}
}), wn = ["href", "fill"], Tn = /* @__PURE__ */ u({
	__name: "Icon",
	props: {
		prefix: { default: "icon" },
		name: {},
		color: { default: "currentColor" },
		size: { default: 14 }
	},
	setup(e) {
		let t = e, n = r(() => {
			let e = typeof t.size == "string" ? t.size : t.size + "px";
			return {
				width: e,
				height: e
			};
		}), i = r(() => `#${t.prefix}-${t.name}`);
		return (t, r) => (T(), o("svg", {
			"aria-hidden": "true",
			style: x(n.value)
		}, [s("use", {
			href: i.value,
			fill: e.color
		}, null, 8, wn)], 4));
	}
}), En = /* @__PURE__ */ u({
	__name: "ScrollArea",
	setup(e) {
		return (e, t) => (T(), i(F(Ee), { class: "ui-scrollArea" }, {
			default: R(() => [
				l(F(ke), { class: "ui-scrollArea-viewport" }, {
					default: R(() => [A(e.$slots, "default")]),
					_: 3
				}),
				l(F(De), {
					class: "ui-scrollArea-bar",
					orientation: "vertical"
				}, {
					default: R(() => [l(F(Oe), { class: "ui-scrollArea-thumb" })]),
					_: 1
				}),
				l(F(De), {
					class: "ui-scrollArea-bar",
					orientation: "horizontal"
				}, {
					default: R(() => [l(F(Oe), { class: "ui-scrollArea-thumb" })]),
					_: 1
				})
			]),
			_: 3
		}));
	}
}), Dn = {
	fp: function(e) {
		let t = [];
		for (let n in e) Object.prototype.hasOwnProperty.call(e, n) && t.push(encodeURIComponent(n) + "=" + encodeURIComponent(String(e[n])));
		return t.push(("v=" + Math.random()).replace(".", "")), t.join("&");
	},
	st: function(e) {
		let t = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-~".split(""), n = t.length, r = Math.floor(+e), i = [];
		do {
			let e = r % n;
			r = (r - e) / n, i.unshift(t[e]);
		} while (r);
		return i.join("");
	},
	pi: function(e, t) {
		return (Array(t).join("0") + e).slice(-t);
	},
	pm: function(e, t, n) {
		let r = this.st(Math.abs(e)), i = "";
		return n || (i += e >= 0 ? "1" : "0"), i += this.pi(r, t), i;
	},
	encrypt: function(e) {
		let t = [];
		for (let n = 0; n < e.length; n++) if (n === 0) t.push(this.pm(e[n][0] < 262143 ? e[n][0] : 262143, 3, !0)), t.push(this.pm(e[n][1] < 16777215 ? e[n][1] : 16777215, 4, !0)), t.push(this.pm(e[n][2] < 4398046511103 ? e[n][2] : 4398046511103, 7, !0));
		else {
			let r = e[n][0] - e[n - 1][0], i = e[n][1] - e[n - 1][1], a = e[n][2] - e[n - 1][2];
			t.push(this.pm(Math.abs(r) < 4095 ? r : r > 0 ? 4095 : -4095, 2, !1)), t.push(this.pm(Math.abs(i) < 4095 ? i : i > 0 ? 4095 : -4095, 2, !1)), t.push(this.pm(a < 16777215 ? a : 16777215, 4, !0));
		}
		return t.join("");
	},
	parseSt: function(e, t) {
		let n = 0, r = t.length;
		for (let i of e) {
			let e = t.indexOf(i);
			if (e === -1) throw Error(`无效字符: ${i}`);
			n = n * r + e;
		}
		return n;
	},
	decrypt: function(e) {
		let t = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-~".split(""), n = [], r = 0, i = this.parseSt(e.substring(r, r + 3), t);
		r += 3;
		let a = this.parseSt(e.substring(r, r + 4), t);
		r += 4;
		let o = this.parseSt(e.substring(r, r + 7), t);
		for (r += 7, n.push([
			i,
			a,
			o
		]); r + 10 <= e.length;) {
			let i = n[n.length - 1], a = e[r] === "1" ? 1 : -1, o = this.parseSt(e.substring(r + 1, r + 3), t);
			r += 3;
			let s = e[r] === "1" ? 1 : -1, c = this.parseSt(e.substring(r + 1, r + 3), t);
			r += 3;
			let l = this.parseSt(e.substring(r, r + 4), t);
			r += 4, n.push([
				i[0] + a * o,
				i[1] + s * c,
				i[2] + l
			]);
		}
		return n;
	}
}, On = { key: 0 }, kn = { key: 1 }, An = { key: 2 }, jn = { key: 3 }, Mn = /* @__PURE__ */ u({
	__name: "SliderCaptcha",
	props: {
		size: { default: "base" },
		request: {}
	},
	setup(e) {
		let t = {
			READY: 1,
			PENDING: 2,
			CHECKING: 3,
			SUCCESS: 4,
			ERROR: 5
		}, n = e, a = D(null), c = D(null), l = D(0), u = D(t.READY), d = 0, f = 0, p = 0, m = [], h = null, g = r(() => u.value === t.READY), _ = r(() => u.value === t.PENDING), v = r(() => u.value === t.CHECKING), b = r(() => u.value === t.SUCCESS), w = r(() => u.value === t.ERROR), E = r(() => l.value + (c.value?.offsetWidth ? c.value.offsetWidth - 1 : 0));
		function O(e, t) {
			let n = Date.now();
			n - p > 16 && (m.push([
				e,
				t,
				n
			]), p = n);
		}
		function k() {
			u.value = t.READY, l.value = 0, f = 0, p = 0, m = [], h &&= (clearTimeout(h), null);
		}
		async function A() {
			if (n.request) {
				u.value = t.CHECKING;
				try {
					let e = Dn.encrypt(m), r = await n.request(e);
					u.value = t.SUCCESS, h = setTimeout(k, r.ttl * 999);
				} catch {
					u.value = t.ERROR, setTimeout(() => {
						k();
					}, 1e3);
				}
			}
		}
		function j() {
			a.value && c.value && (d = a.value.offsetWidth - c.value.offsetWidth);
		}
		function M(e) {
			g.value && (j(), u.value = t.PENDING, c.value && c.value.setPointerCapture(e.pointerId), f = e.clientX, O(Math.floor(e.clientX), Math.floor(e.clientY)));
		}
		function N(e) {
			if (!_.value) return;
			let t = Math.max(0, Math.min(d, e.clientX - f));
			O(Math.floor(e.clientX), Math.floor(e.clientY)), l.value = t;
		}
		function P(e) {
			if (_.value) {
				if (c.value && c.value.releasePointerCapture(e.pointerId), O(Math.floor(e.clientX), Math.floor(e.clientY)), l.value < d || m.length < 8) {
					k();
					return;
				}
				A();
			}
		}
		return C(() => {
			document.addEventListener("pointermove", N), document.addEventListener("pointerup", P), document.addEventListener("pointercancel", P), j();
		}), S(() => {
			h && clearTimeout(h), document.removeEventListener("pointermove", N), document.removeEventListener("pointerup", P), document.removeEventListener("pointercancel", P);
		}), (t, n) => (T(), o("div", {
			class: y(["SliderCaptcha", `SliderCaptcha-${e.size}`]),
			ref_key: "wrapRef",
			ref: a
		}, [
			s("div", {
				class: y(["SliderCaptcha-Mask", {
					error: w.value,
					success: b.value,
					transition: g.value
				}]),
				style: x({ width: E.value + "px" })
			}, null, 6),
			s("div", { class: y(["SliderCaptcha-Tips", { ready: g.value || _.value }]) }, [v.value ? (T(), o("span", On, "验证中...")) : b.value ? (T(), o("span", kn, "验证成功")) : w.value ? (T(), o("span", An, "验证失败")) : (T(), o("span", jn, "拖动滑块到最右边"))], 2),
			s("div", {
				ref_key: "btnRef",
				ref: c,
				class: y(["SliderCaptcha-Btn", {
					transition: g.value,
					checking: v.value,
					error: w.value,
					success: b.value
				}]),
				style: x({
					left: l.value + "px",
					"touch-action": "none"
				}),
				onPointerdown: M
			}, [v.value ? (T(), i(F(dt), {
				key: 0,
				size: 16,
				class: "SliderCaptcha_loader"
			})) : b.value ? (T(), i(F(it), {
				key: 1,
				size: 16
			})) : w.value ? (T(), i(F(pt), {
				key: 2,
				size: 16
			})) : (T(), i(F(rt), {
				key: 3,
				size: 16
			}))], 38)
		], 2));
	}
});
//#endregion
//#region node_modules/@vueuse/shared/dist/index.js
function Nn(e, t) {
	return f() ? (w(e, t), !0) : !1;
}
var Y = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
var Pn = (e) => e != null, Fn = Object.prototype.toString, In = (e) => Fn.call(e) === "[object Object]", X = () => {};
function Ln(e, t) {
	function n(...n) {
		return new Promise((r, i) => {
			Promise.resolve(e(() => t.apply(this, n), {
				fn: t,
				thisArg: this,
				args: n
			})).then(r).catch(i);
		});
	}
	return "cancel" in e && Object.assign(n, {
		cancel: e.cancel,
		flush: e.flush,
		isPending: e.isPending
	}), n;
}
var Rn = (e) => e();
function zn(e, t = {}) {
	let n, r, i = X, a = X, o = M(!1), s = (e) => {
		clearTimeout(e), i(), i = X;
	}, c;
	return Object.assign((l) => {
		let u = P(e), d = P(t.maxWait);
		return n && s(n), u <= 0 || d !== void 0 && d <= 0 ? (r &&= (s(r), void 0), o.value = !1, Promise.resolve(l())) : (o.value = !0, new Promise((e, f) => {
			i = t.rejectOnCancel ? f : e, a = e, c = l, d && !r && (r = setTimeout(() => {
				n && s(n), r = void 0, o.value = !1, e(c());
			}, d)), n = setTimeout(() => {
				r && s(r), r = void 0, o.value = !1, e(l());
			}, u);
		}));
	}, {
		cancel: () => {
			n &&= (s(n), void 0), r &&= (s(r), void 0), o.value = !1, a = X;
		},
		flush: () => {
			if (o.value) {
				n &&= (clearTimeout(n), void 0), r &&= (clearTimeout(r), void 0), o.value = !1;
				let e = a;
				i = X, a = X, e(c());
			}
		},
		isPending: j(o)
	});
}
function Bn(...e) {
	let t = 0, n, r = !0, i = X, a, o, s, c, l;
	!h(e[0]) && typeof e[0] == "object" ? {delay: o, trailing: s = !0, leading: c = !0, rejectOnCancel: l = !1} = e[0] : [o, s = !0, c = !0, l = !1] = e;
	let u = () => {
		n && (clearTimeout(n), n = void 0, i(), i = X);
	};
	return (e) => {
		let d = P(o), f = Date.now() - t, p = () => a = e();
		return u(), d <= 0 ? (t = Date.now(), p()) : (f > d ? (t = Date.now(), (c || !r) && p()) : s && (a = new Promise((e, a) => {
			i = l ? a : e, n = setTimeout(() => {
				t = Date.now(), r = !0, e(p()), u();
			}, Math.max(0, d - f));
		})), !c && !n && (n = setTimeout(() => r = !0, d)), r = !1, a);
	};
}
function Vn(e) {
	return Array.isArray(e) ? e : [e];
}
function Hn(e, t = 200, n = !1, r = !0, i = !1) {
	return Ln(Bn(t, n, r, i), e);
}
function Un(e, t, n = {}) {
	let { eventFilter: r = Rn, ...i } = n;
	return L(e, Ln(r, t), i);
}
function Wn(e, t, n = {}) {
	let { debounce: r = 0, maxWait: i = void 0, ...a } = n;
	return Un(e, t, {
		...a,
		eventFilter: zn(r, { maxWait: i })
	});
}
function Gn(e, t, n) {
	return L(e, t, {
		...n,
		immediate: !0
	});
}
//#endregion
//#region node_modules/@vueuse/core/dist/index.js
var Z = Y ? window : void 0;
Y && window.document, Y && window.navigator, Y && window.location;
function Q(e) {
	let t = P(e);
	return t?.$el ?? t;
}
function $(...e) {
	let t = (e, t, n, r) => (e.addEventListener(t, n, r), () => e.removeEventListener(t, n, r)), n = r(() => {
		let t = Vn(P(e[0])).filter((e) => e != null);
		return t.every((e) => typeof e != "string") ? t : void 0;
	});
	return Gn(() => [
		n.value?.map((e) => Q(e)) ?? [Z].filter((e) => e != null),
		Vn(P(n.value ? e[1] : e[0])),
		Vn(F(n.value ? e[2] : e[1])),
		P(n.value ? e[3] : e[2])
	], ([e, n, r, i], a, o) => {
		if (!e?.length || !n?.length || !r?.length) return;
		let s = In(i) ? { ...i } : i, c = e.flatMap((e) => n.flatMap((n) => r.map((r) => t(e, n, r, s))));
		o(() => {
			c.forEach((e) => e());
		});
	}, { flush: "post" });
}
function Kn() {
	let e = M(!1), t = d();
	return t && C(() => {
		e.value = !0;
	}, t), e;
}
/* @__NO_SIDE_EFFECTS__ */
function qn(e) {
	let t = Kn();
	return r(() => (t.value, !!e()));
}
function Jn(e, t, n = {}) {
	let { window: i = Z, ...a } = n, o, s = /* @__PURE__ */ qn(() => i && "MutationObserver" in i), c = () => {
		o &&= (o.disconnect(), void 0);
	}, l = L(r(() => {
		let t = Vn(P(e)).map(Q).filter(Pn);
		return new Set(t);
	}), (e) => {
		c(), s.value && e.size && (o = new MutationObserver(t), e.forEach((e) => o.observe(e, a)));
	}, {
		immediate: !0,
		flush: "post"
	}), u = () => o?.takeRecords(), d = () => {
		l(), c();
	};
	return Nn(d), {
		isSupported: s,
		stop: d,
		takeRecords: u
	};
}
function Yn(e, t, n = {}) {
	let { window: r = Z, document: i = r?.document, flush: a = "sync" } = n;
	if (!r || !i) return X;
	let o, s = (e) => {
		o?.(), o = e;
	}, c = re(() => {
		let n = Q(e);
		if (n) {
			let { stop: e } = Jn(i, (e) => {
				e.map((e) => [...e.removedNodes]).flat().some((e) => e === n || e.contains(n)) && t(e);
			}, {
				window: r,
				childList: !0,
				subtree: !0
			});
			s(e);
		}
	}, { flush: a }), l = () => {
		c(), s();
	};
	return Nn(l), l;
}
function Xn(e, t, n = {}) {
	let { window: i = Z, ...a } = n, o, s = /* @__PURE__ */ qn(() => i && "ResizeObserver" in i), c = () => {
		o &&= (o.disconnect(), void 0);
	}, l = L(r(() => {
		let t = P(e);
		return Array.isArray(t) ? t.map((e) => Q(e)) : [Q(t)];
	}), (e) => {
		if (c(), s.value && i) {
			o = new ResizeObserver(t);
			for (let t of e) t && o.observe(t, a);
		}
	}, {
		immediate: !0,
		flush: "post"
	}), u = () => {
		c(), l();
	};
	return Nn(u), {
		isSupported: s,
		stop: u
	};
}
function Zn(e, t = {}) {
	let { delayEnter: n = 0, delayLeave: i = 0, triggerOnRemoval: a = !1, window: o = Z } = t, s = M(!1), c, l = (e) => {
		let t = e ? n : i;
		c &&= (clearTimeout(c), void 0), t ? c = setTimeout(() => s.value = e, t) : s.value = e;
	};
	return o ? ($(e, "mouseenter", () => l(!0), { passive: !0 }), $(e, "mouseleave", () => l(!1), { passive: !0 }), a && Yn(r(() => Q(e)), () => l(!1)), s) : s;
}
var Qn = {
	ctrl: "control",
	command: "meta",
	cmd: "meta",
	option: "alt",
	up: "arrowup",
	down: "arrowdown",
	left: "arrowleft",
	right: "arrowright"
};
function $n(e = {}) {
	let { reactive: t = !1, target: n = Z, aliasMap: i = Qn, passive: a = !0, onEventFired: o = X } = e, s = E(/* @__PURE__ */ new Set()), c = {
		toJSON() {
			return {};
		},
		current: s
	}, l = t ? E(c) : c, u = /* @__PURE__ */ new Set(), d = /* @__PURE__ */ new Map([
		["Meta", u],
		["Shift", /* @__PURE__ */ new Set()],
		["Alt", /* @__PURE__ */ new Set()]
	]), f = /* @__PURE__ */ new Set();
	function p(e, n) {
		e in l && (t ? l[e] = n : l[e].value = n);
	}
	function m() {
		s.clear();
		for (let e of f) p(e, !1);
	}
	function h(e, t, n) {
		if (!(!e || typeof t.getModifierState != "function")) {
			for (let [e, r] of d) if (t.getModifierState(e)) {
				n.forEach((e) => r.add(e));
				break;
			}
		}
	}
	function g(e, t) {
		if (e) return;
		let n = `${t[0].toUpperCase()}${t.slice(1)}`, r = d.get(n);
		if (!["shift", "alt"].includes(t) || !r) return;
		let i = Array.from(r), a = i.indexOf(t);
		i.forEach((e, t) => {
			t >= a && (s.delete(e), p(e, !1));
		}), r.clear();
	}
	function _(e, t) {
		let n = e.key?.toLowerCase(), r = [e.code?.toLowerCase(), n].filter(Boolean);
		if (n) {
			n && (t ? s.add(n) : s.delete(n));
			for (let e of r) f.add(e), p(e, t);
			h(t, e, [...s, ...r]), g(t, n), n === "meta" && !t && (u.forEach((e) => {
				s.delete(e), p(e, !1);
			}), u.clear());
		}
	}
	$(n, "keydown", (e) => (_(e, !0), o(e)), { passive: a }), $(n, "keyup", (e) => (_(e, !1), o(e)), { passive: a }), $("blur", m, { passive: a }), $("focus", m, { passive: a });
	let v = new Proxy(l, { get(e, n, a) {
		if (typeof n != "string") return Reflect.get(e, n, a);
		if (n = n.toLowerCase(), n in i && (n = i[n]), !(n in l)) {
			if (/[+_-]/.test(n)) {
				let e = n.split(/[+_-]/g).map((e) => e.trim());
				l[n] = r(() => e.map((e) => P(v[e])).every(Boolean));
			} else l[n] = M(!1);
		}
		let o = Reflect.get(e, n, a);
		return t ? P(o) : o;
	} });
	return v;
}
//#endregion
//#region src/components/Zoom/Zoom.vue?vue&type=script&setup=true&lang.ts
var er = 1, tr = /* @__PURE__ */ u({
	__name: "Zoom",
	props: {
		enable: {
			type: Boolean,
			default: !0
		},
		maxScale: { default: 5 }
	},
	emits: [
		"left",
		"right",
		"wheel",
		"change"
	],
	setup(e, { expose: t, emit: n }) {
		let i = e, a = n, c = I("zoomRef"), l = I("containerRef"), u = D({
			width: 0,
			height: 0
		}), d = D(null), f = Zn(c), p = D({
			scale: 1,
			tx: 0,
			ty: 0
		}), m = D(!1), h = D(!1), g = D(!1), _ = D({
			scale: 1,
			centerX: .5,
			centerY: .5
		}), v = null, y = (e) => Number(e.toFixed(5)), b = () => {
			if (d.value && u.value.width > 0 && u.value.height > 0) {
				let { center: e, scale: t } = d.value;
				d.value = null, k(e, t);
			}
		}, S = () => {
			let { width: e, height: t } = u.value;
			if (e === 0 || t === 0) return;
			let n = -p.value.tx / p.value.scale / e + .5, r = -p.value.ty / p.value.scale / t + .5, i = y(Math.max(0, Math.min(1, n))), o = y(Math.max(0, Math.min(1, r))), s = y(p.value.scale);
			(s !== _.value.scale || i !== _.value.centerX || o !== _.value.centerY) && (_.value = {
				scale: s,
				centerX: i,
				centerY: o
			}, a("change", {
				scale: s,
				center: {
					x: i,
					y: o
				}
			}));
		}, w = () => {
			let { scale: e, tx: t, ty: n } = p.value, { width: r, height: i } = u.value;
			if (r === 0 || i === 0) return;
			let a = Math.max(0, (r * e - r) / 2), o = Math.max(0, (i * e - i) / 2);
			p.value.tx = Math.max(-a, Math.min(a, t)), p.value.ty = Math.max(-o, Math.min(o, n)), S();
		};
		Xn(c, (e) => {
			let { width: t, height: n } = e[0].contentRect;
			u.value.width !== 0 && (p.value.tx *= t / u.value.width, p.value.ty *= n / u.value.height), u.value = {
				width: t,
				height: n
			}, w(), b();
		});
		let E = () => {
			O(), p.value = {
				scale: 1,
				tx: 0,
				ty: 0
			}, S();
		}, O = () => {
			v && clearTimeout(v), g.value = !0, v = setTimeout(() => {
				g.value = !1;
			}, 300);
		}, k = (e, t, n = !1) => {
			let { width: r, height: a } = u.value;
			if (r === 0 || a === 0) {
				d.value = {
					center: e,
					scale: t
				};
				return;
			}
			let o = Math.min(Math.max(t, er), i.maxScale);
			if (n) {
				g.value = !1;
				let t = o / p.value.scale, n = (e.x - .5) * r, i = (e.y - .5) * a;
				p.value.tx = n - (n - p.value.tx) * t, p.value.ty = i - (i - p.value.ty) * t, p.value.scale = o;
			} else {
				O();
				let t = Math.max(0, Math.min(1, e.x)), n = Math.max(0, Math.min(1, e.y)), i = -(t - .5) * r * o, s = -(n - .5) * a * o, c = Math.max(0, (r * o - r) / 2), l = Math.max(0, (a * o - a) / 2);
				p.value.tx = Math.max(-c, Math.min(c, i)), p.value.ty = Math.max(-l, Math.min(l, s)), p.value.scale = o;
			}
			w();
		};
		t({
			reset: E,
			setZoom: k
		});
		let j = r(() => ({
			transform: `matrix(${p.value.scale}, 0, 0, ${p.value.scale}, ${p.value.tx}, ${p.value.ty})`,
			cursor: i.enable ? m.value ? "grabbing" : "grab" : "default",
			transition: g.value ? "transform 0.15s cubic-bezier(0.25, 1, 0.5, 1)" : "none"
		})), M = (e) => {
			h.value ? (e.stopImmediatePropagation(), e.preventDefault(), h.value = !1) : a("left", e);
		}, N = (e) => a("right", e);
		return $(c, "wheel", (e) => {
			if (e.shiftKey || e.ctrlKey) return;
			if (!i.enable) {
				a("wheel", e);
				return;
			}
			if (e.preventDefault(), !c.value) return;
			let t = 1.1 ** (e.deltaY > 0 ? -1 : 1), n = p.value.scale, r = Math.min(Math.max(n * t, er), i.maxScale), o = c.value.getBoundingClientRect(), s = o.width / u.value.width, l = o.height / u.value.height, d = (e.clientX - o.left) / (s || 1), f = (e.clientY - o.top) / (l || 1), m = d / u.value.width, h = f / u.value.height;
			k({
				x: m,
				y: h
			}, r, !0);
		}, { passive: !1 }), $(window, "keydown", (e) => {
			if (!f.value) return;
			let t = document.activeElement;
			if (t) {
				let e = t.tagName.toLowerCase();
				if (e === "input" || e === "textarea" || t.hasAttribute("contenteditable")) return;
			}
			e.key === "ArrowLeft" ? (e.preventDefault(), a("left", e)) : e.key === "ArrowRight" && (e.preventDefault(), a("right", e));
		}), $(c, "pointerdown", (e) => {
			if (!i.enable || e.pointerType === "mouse" && e.button !== 0 || !c.value) return;
			g.value = !1, v && clearTimeout(v);
			let t = c.value.getBoundingClientRect(), n = t.width / u.value.width, r = t.height / u.value.height, a = e.clientX - p.value.tx * (n || 1), o = e.clientY - p.value.ty * (r || 1), s = e.clientX, l = e.clientY;
			h.value = !1, m.value = !0;
			let d = e.target;
			try {
				d.setPointerCapture(e.pointerId);
			} catch {}
			let f = (e) => {
				(Math.abs(e.clientX - s) > 3 || Math.abs(e.clientY - l) > 3) && (h.value = !0), p.value.tx = (e.clientX - a) / (n || 1), p.value.ty = (e.clientY - o) / (r || 1), w();
			}, _ = (e) => {
				m.value = !1, window.removeEventListener("pointermove", f), window.removeEventListener("pointerup", _), window.removeEventListener("pointercancel", _);
				try {
					d.releasePointerCapture(e.pointerId);
				} catch {}
			};
			window.addEventListener("pointermove", f), window.addEventListener("pointerup", _), window.addEventListener("pointercancel", _);
		}), C(() => {
			let e = l.value;
			e && (u.value = {
				width: e.clientWidth,
				height: e.clientHeight
			}, b());
		}), (e, t) => (T(), o("div", {
			class: "ui-zoom",
			ref_key: "zoomRef",
			ref: c,
			onContextmenu: B(N, ["prevent"]),
			onClickCapture: M
		}, [s("div", {
			class: "ui-zoom-container",
			ref_key: "containerRef",
			ref: l,
			style: x(j.value)
		}, [A(e.$slots, "default")], 4)], 544));
	}
}), nr = ["data-view-id"], rr = 1, ir = 5, ar = .2, or = /* @__PURE__ */ u({
	__name: "ZoomGrid",
	props: {
		activeViewId: {},
		gridLayoutStyles: {
			type: [
				Boolean,
				null,
				String,
				Object,
				Array
			],
			default: ""
		},
		data: { default: () => [] }
	},
	emits: ["zoom"],
	setup(e, { expose: t, emit: i }) {
		let a = e, c = i, l = I("scrollerRef"), u = I("wrapperRef"), d = D(1), f = D(0), p = D(0), m = D(!1), h = D(!1), g = {
			width: 0,
			height: 0,
			left: 0,
			top: 0
		}, _ = {
			width: 0,
			height: 0
		}, b = null, w = null, E = null, O = 0, j = !1, M = null, { shift: N } = $n(), P = r(() => N.value), F = r(() => ({
			transform: `translate3d(${f.value.toFixed(2)}px, ${p.value.toFixed(2)}px, 0) scale(${d.value.toFixed(4)})`,
			transformOrigin: "0 0",
			transition: h.value ? "transform 0.2s cubic-bezier(0.25, 1, 0.5, 1)" : "none"
		})), ee = r(() => d.value !== 1 || Math.round(f.value) !== 0 || Math.round(p.value) !== 0), te = () => {
			if (ee.value) {
				if (E === !0) return;
				w &&= (clearTimeout(w), null), E = !0, c("zoom", !0);
				return;
			}
			if (P.value) {
				j = !0;
				return;
			}
			j = !1, E !== !1 && (w &&= (clearTimeout(w), null), w = setTimeout(() => {
				E = !1, c("zoom", !1), w = null;
			}, 250));
		};
		Wn(P, (e) => {
			e || (m.value && H(), j && (j = !1, te()));
		}, { debounce: 50 }), L(() => [
			d.value,
			f.value,
			p.value
		], () => te(), { flush: "sync" });
		let ne = (e, t, n) => Math.min(n, Math.max(t, e)), re = () => {
			if (!l.value || !u.value) return;
			let e = l.value.getBoundingClientRect();
			g.width = e.width, g.height = e.height, g.left = e.left, g.top = e.top, _.width = u.value.scrollWidth, _.height = u.value.scrollHeight;
		}, R = () => {
			M = null;
		}, ie = () => M || (M = a.data.map((e) => {
			let t = l.value?.querySelector(`[data-view-id="${e.viewId}"]`);
			return t ? {
				viewId: e.viewId,
				left: t.offsetLeft,
				top: t.offsetTop,
				width: t.clientWidth,
				height: t.clientHeight
			} : null;
		}).filter((e) => e !== null), M), z = (e, t) => {
			if (g.width <= 0 || _.width === 0) return 0;
			let n = g.width - _.width * t;
			return n >= 0 ? 0 : ne(e, n, 0);
		}, B = (e, t) => {
			if (g.height <= 0 || _.height === 0) return 0;
			let n = g.height - _.height * t;
			return n >= 0 ? 0 : ne(e, n, 0);
		}, ae = (e) => u.value ? {
			left: e.offsetLeft,
			top: e.offsetTop,
			width: e.clientWidth,
			height: e.clientHeight
		} : null, oe = (e) => {
			let t = ae(e);
			return !t || g.height <= 0 || t.height <= 0 ? ir : Math.min(ir, Math.max(rr, g.height / t.height));
		}, se = (e) => {
			let t = l.value?.querySelector(`[data-view-id="${e}"]`);
			if (!t || g.width === 0) return;
			let n = ae(t);
			if (!n) return;
			let r = g.width / 2 - (n.left + n.width / 2) * d.value, i = g.height / 2 - (n.top + n.height / 2) * d.value;
			f.value = z(r, d.value), p.value = B(i, d.value);
		};
		L([
			() => a.data?.length,
			() => a.data,
			() => a.gridLayoutStyles
		], () => de(), { deep: !1 }), L(() => a.activeViewId, () => {
			h.value || m.value || v(() => se(a.activeViewId));
		}, { immediate: !1 }), Xn(l, () => {
			if (m.value) return;
			R();
			let e = d.value, t = g.width || 1, n = g.height || 1, r = _.width || 1, i = _.height || 1, a = t - r * e, o = n - i * e, s = a < 0 ? f.value / a : .5, c = o < 0 ? p.value / o : .5;
			re(), d.value = e;
			let l = g.width - _.width * e, u = g.height - _.height * e, h = l < 0 ? s * l : 0, v = u < 0 ? c * u : 0;
			f.value = z(h, e), p.value = B(v, e);
		}), $(l, "wheel", (e) => {
			if (!l.value || !e.shiftKey) return;
			e.preventDefault();
			let t = e.clientX - g.left, n = e.clientY - g.top, r = d.value, i = (t - f.value) / r, a = (n - p.value) / r, o = null;
			for (let e of ie()) if (i >= e.left && i <= e.left + e.width && a >= e.top && a <= e.top + e.height) {
				o = e;
				break;
			}
			if (!o) return;
			let s = l.value.querySelector(`[data-view-id="${o.viewId}"]`);
			if (!s) return;
			let c = (Math.abs(e.deltaY) >= Math.abs(e.deltaX) ? e.deltaY : e.deltaX) < 0, u = c ? oe(s) : ir, m = Math.min(u, Math.max(rr, r + (c ? ar : -.2)));
			if (m === r) return;
			b && clearTimeout(b);
			let _ = m / r, v = t - (t - f.value) * _, y = n - (n - p.value) * _;
			if (c) {
				let e = o.left * m + v, t = e + o.width * m, n = o.top * m + y, r = n + o.height * m;
				o.width * m <= g.width ? e < 0 ? v -= e : t > g.width && (v -= t - g.width) : e > 0 ? v -= e : t < g.width && (v += g.width - t), o.height * m <= g.height ? n < 0 ? y -= n : r > g.height && (y -= r - g.height) : n > 0 ? y -= n : r < g.height && (y += g.height - r);
			}
			f.value = z(v, m), p.value = B(y, m), d.value = m, h.value = !0, b = setTimeout(() => {
				h.value = !1, b = null;
			}, 150);
		}, {
			passive: !1,
			capture: !0
		});
		let V = {
			x: 0,
			y: 0,
			tx: 0,
			ty: 0,
			pointerId: -1
		}, H = () => {
			m.value && (V.tx = f.value, V.ty = p.value), m.value = !1, V.pointerId = -1, window.removeEventListener("pointermove", ce, { capture: !0 }), window.removeEventListener("pointerup", U, { capture: !0 }), window.removeEventListener("pointercancel", U, { capture: !0 }), window.removeEventListener("blur", le, { capture: !0 });
		}, ce = (e) => {
			!m.value || e.pointerId !== V.pointerId || (f.value = z(V.tx + e.clientX - V.x, d.value), p.value = B(V.ty + e.clientY - V.y, d.value));
		}, U = (e) => {
			e.pointerId === V.pointerId && H();
		}, le = () => H(), ue = (e) => {
			!e.shiftKey || e.button !== 0 || !l.value || (m.value = !0, V.x = e.clientX, V.y = e.clientY, V.tx = f.value, V.ty = p.value, V.pointerId = e.pointerId, window.addEventListener("pointermove", ce, {
				capture: !0,
				passive: !0
			}), window.addEventListener("pointerup", U, { capture: !0 }), window.addEventListener("pointercancel", U, { capture: !0 }), window.addEventListener("blur", le, { capture: !0 }), e.preventDefault());
		};
		C(() => {
			v(() => {
				re(), a.activeViewId !== void 0 && se(a.activeViewId);
			});
		}), S(() => {
			H(), b && clearTimeout(b), w && clearTimeout(w);
		});
		let de = () => {
			let e = ++O;
			R(), d.value = 1, f.value = 0, p.value = 0, H(), h.value = !1, b && clearTimeout(b), w && clearTimeout(w), v(() => {
				e === O && (re(), E !== !1 && (E = !1, c("zoom", !1)));
			});
		};
		return t({ reset: de }), (t, r) => (T(), o("div", {
			ref_key: "scrollerRef",
			ref: l,
			class: y(["ui-ZoomGrid-scroller", { "is-grabbing": m.value }]),
			onPointerdown: ue
		}, [s("div", {
			ref_key: "wrapperRef",
			ref: u,
			class: "ui-ZoomGrid-wrapper",
			style: x(F.value)
		}, [s("div", {
			class: y(["ui-ZoomGrid-grid", { "is-shift-active": P.value }]),
			style: x(e.gridLayoutStyles)
		}, [(T(!0), o(n, null, k(e.data, (e) => (T(), o("div", {
			key: e.viewId,
			"data-view-id": e.viewId,
			class: "ui-ZoomGrid-item"
		}, [A(t.$slots, "default", { item: e })], 8, nr))), 128))], 6)], 4)], 34));
	}
}), sr = /* @__PURE__ */ u({
	__name: "Ruler",
	props: /*@__PURE__*/ g({ values: {} }, {
		modelValue: {},
		modelModifiers: {}
	}),
	emits: /*@__PURE__*/ g(["change"], ["update:modelValue"]),
	setup(e, { emit: t }) {
		let i = e, a = ee(e, "modelValue"), c = t, l = I("rulerRef"), u = D(0), d = D(!1), f = r(() => i.values.length - 1);
		L(() => a.value, (e) => {
			let t = i.values.indexOf(e);
			u.value = t === -1 ? 0 : t;
		}, { immediate: !0 });
		let p = Hn((e) => {
			let t = i.values[e];
			a.value != t && (a.value = t, c("change", t));
		}, 80), m = (e) => {
			if (!l.value) return;
			let t = l.value.getBoundingClientRect(), n = Math.max(0, Math.min(e.clientX - t.left, t.width)) / t.width, r = Math.round(n * f.value);
			u.value = r, p(r);
		}, h = (e) => {
			d.value = !0, e.target.setPointerCapture(e.pointerId), m(e);
		}, g = (e) => {
			d.value && m(e);
		}, _ = (e) => {
			d.value && (d.value = !1, e.target.releasePointerCapture(e.pointerId));
		};
		return (t, r) => (T(), o("div", {
			class: "ui-ruler",
			ref_key: "rulerRef",
			ref: l,
			onPointerdown: h,
			onPointermove: g,
			onPointerup: _,
			onPointerleave: _,
			onPointercancel: _
		}, [(T(!0), o(n, null, k(e.values, (e, t) => (T(), o("span", {
			class: "ui-ruler_tick",
			key: t,
			style: x({ left: `${t / f.value * 100}%` })
		}, null, 4))), 128)), s("span", {
			class: "ui-ruler_indicator",
			style: x({ left: `${u.value / f.value * 100}%` })
		}, null, 4)], 544));
	}
});
//#endregion
export { St as Alert, tn as Autocomplete, G as Button, vt as Dialog, wt as DropdownMenu, Tt as DropdownMenuItem, jt as DropdownMenuSeparator, At as DropdownMenuShortcut, Ft as Form, Wt as FormItem, Tn as Icon, Xt as Input, sn as Progress, sr as Ruler, En as ScrollArea, cn as Segmented, ln as SegmentedItem, an as Select, dn as Slider, Mn as SliderCaptcha, fn as Space, hn as Splitter, Cn as Tag, Sn as Toast, tr as Zoom, or as ZoomGrid, ht as buttonVariants, on as inputVariants, un as segmentedVariants, pn as spaceVariants };
