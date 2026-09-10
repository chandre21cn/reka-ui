import { cva as e } from "class-variance-authority";
import { Fragment as t, computed as n, createBlock as r, createCommentVNode as i, createElementBlock as a, createElementVNode as o, createTextVNode as s, createVNode as c, defineComponent as l, guardReactiveProps as u, h as d, mergeModels as f, mergeProps as p, normalizeClass as m, normalizeProps as h, normalizeStyle as g, onBeforeUnmount as _, onMounted as v, openBlock as y, reactive as b, ref as x, render as S, renderList as C, renderSlot as w, toDisplayString as T, unref as E, useModel as D, useSlots as O, useTemplateRef as k, vModelDynamic as A, vShow as j, watch as M, withCtx as N, withDirectives as P, withModifiers as F } from "vue";
import { AutocompleteAnchor as ee, AutocompleteContent as te, AutocompleteInput as ne, AutocompleteItem as re, AutocompletePortal as ie, AutocompleteRoot as ae, AutocompleteTrigger as oe, AutocompleteViewport as se, DialogContent as ce, DialogDescription as le, DialogOverlay as ue, DialogPortal as de, DialogRoot as fe, DialogTitle as pe, DialogTrigger as me, DropdownMenuContent as he, DropdownMenuItem as ge, DropdownMenuPortal as _e, DropdownMenuRoot as ve, DropdownMenuSeparator as ye, DropdownMenuTrigger as be, Primitive as xe, ProgressIndicator as Se, ProgressRoot as Ce, ScrollAreaRoot as we, ScrollAreaScrollbar as I, ScrollAreaThumb as L, ScrollAreaViewport as Te, SelectContent as Ee, SelectItem as De, SelectItemIndicator as Oe, SelectItemText as ke, SelectPortal as Ae, SelectRoot as je, SelectScrollDownButton as Me, SelectScrollUpButton as Ne, SelectTrigger as Pe, SelectValue as Fe, SelectViewport as Ie, SliderRange as Le, SliderRoot as Re, SliderThumb as ze, SliderTrack as Be, SplitterGroup as R, SplitterPanel as z, SplitterResizeHandle as B, TabsIndicator as Ve, TabsList as He, TabsRoot as Ue, TabsTrigger as We, ToastDescription as Ge, ToastProvider as Ke, ToastRoot as qe, ToastViewport as Je, useForwardPropsEmits as V } from "reka-ui";
import { AlertCircleIcon as Ye, ArrowRight as Xe, Check as H, CheckCircle2 as Ze, ChevronDown as U, ChevronUp as Qe, Eye as $e, EyeClosed as et, InfoIcon as tt, Loader2 as nt, Loader2Icon as rt, X as W, XCircleIcon as it } from "lucide-vue-next";
//#endregion
//#region src/components/Button/Button.vue
var G = /* @__PURE__ */ l({
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
		let n = e;
		return (o, c) => (y(), r(E(xe), {
			as: e.as,
			"as-child": e.asChild,
			class: m([E(K)(n), o.$attrs.class]),
			disabled: e.isLoading || o.$attrs.disabled
		}, {
			default: N(() => [e.isLoading ? (y(), r(E(rt), {
				key: 0,
				class: "ui-button_loader"
			})) : i("", !0), !e.isLoading || e.isLoading && !e.loadingText ? w(o.$slots, "default", {}, void 0, void 0, 1) : (y(), a(t, { key: 2 }, [s(T(e.loadingText), 1)], 64))]),
			_: 3
		}, 8, [
			"as",
			"as-child",
			"class",
			"disabled"
		]));
	}
}), K = e("ui-button", {
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
}), at = { class: "ui-dialog-header" }, ot = {
	key: 0,
	class: "ui-dialog-footer"
}, q = /* @__PURE__ */ l({
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
		confirmText: { default: "确定" },
		cancelText: { default: "取消" },
		escToClose: { type: Boolean },
		overlayToClose: { type: Boolean },
		onCancel: {},
		onConfirm: {}
	},
	emits: [
		"escapeKeyDown",
		"pointerDownOutside",
		"focusOutside",
		"interactOutside",
		"openAutoFocus",
		"closeAutoFocus"
	],
	setup(e, { expose: t, emit: l }) {
		let u = x(!1), d = e;
		t({
			show() {
				u.value = !0;
			},
			hide() {
				u.value = !1;
			}
		});
		let f = n(() => {
			let e = "auto";
			return typeof d.width == "number" && (e = d.width + "px"), { width: e };
		});
		function p(e) {
			d.escToClose || e.preventDefault();
		}
		function m(e) {
			d.overlayToClose || e.preventDefault();
		}
		function h(e) {
			e.preventDefault(), u.value = !1;
		}
		async function _() {
			d.onCancel && typeof d.onCancel == "function" ? await d.onCancel() ? u.value = !1 : u.value = !0 : u.value = !1;
		}
		async function v(e) {
			e.preventDefault(), d.onConfirm && typeof d.onConfirm == "function" ? await d.onConfirm() ? u.value = !1 : u.value = !0 : u.value = !1;
		}
		return (t, n) => (y(), r(E(fe), {
			open: u.value,
			"onUpdate:open": n[0] ||= (e) => u.value = e
		}, {
			default: N(() => [t.$slots.trigger ? (y(), r(E(me), {
				key: 0,
				"as-child": ""
			}, {
				default: N(() => [w(t.$slots, "trigger")]),
				_: 3
			})) : i("", !0), c(E(de), null, {
				default: N(() => [e.hideOverlay ? i("", !0) : (y(), r(E(ue), {
					key: 0,
					class: "ui-dialog-overlay"
				})), c(E(ce), {
					class: "ui-dialog-content",
					style: g(f.value),
					onEscapeKeyDown: p,
					onPointerDownOutside: m
				}, {
					default: N(() => [
						o("div", at, [c(E(pe), { class: "ui-dialog-header_title" }, {
							default: N(() => [w(t.$slots, "title", {}, () => [s(T(e.title), 1)])]),
							_: 3
						}), P(c(E(le), { class: "ui-dialog-header_description" }, {
							default: N(() => [w(t.$slots, "description", {}, () => [s(T(e.description), 1)])]),
							_: 3
						}, 512), [[j, !!e.description]])]),
						w(t.$slots, "default"),
						!e.hideFooter || !t.$slots.footer ? (y(), a("div", ot, [w(t.$slots, "footer", {}, () => [c(E(G), { onClick: _ }, {
							default: N(() => [s(T(e.cancelText), 1)]),
							_: 1
						}), c(E(G), {
							variant: "primary",
							onClick: v
						}, {
							default: N(() => [s(T(e.confirmText), 1)]),
							_: 1
						})])])) : i("", !0),
						e.closable ? (y(), a("button", {
							key: 1,
							class: "ui-dialog-close",
							onClick: h
						}, [c(E(W), { size: 16 })])) : i("", !0)
					]),
					_: 3
				}, 8, ["style"])]),
				_: 3
			})]),
			_: 3
		}, 8, ["open"]));
	}
}), J = b({
	type: "info",
	title: "",
	message: "",
	confirmText: "确定",
	cancelText: "取消",
	onConfirm: void 0
}), st = null, Y = null;
function ct() {
	return Y || (Y = document.createElement("div"), Y.className = "ui-alert", document.body.appendChild(Y)), Y;
}
function X(e = "info", t, n, r) {
	let i = ct();
	J.type = e, J.title = t, J.message = n, J.confirmText = r?.confirmText ?? "确定", J.cancelText = r?.cancelText ?? "取消", J.onConfirm = r?.onConfirm;
	let a = c(ut, J);
	S(a, i), st = a.component?.exposed, st?.open();
}
var lt = {
	info(e, t, n) {
		X("info", e, t, n);
	},
	success(e, t, n) {
		X("success", e, t, n);
	},
	warn(e, t, n) {
		X("warn", e, t, n);
	},
	error(e, t, n) {
		X("error", e, t, n);
	}
}, ut = /* @__PURE__ */ l({
	__name: "Alert",
	props: {
		type: { default: "info" },
		title: {},
		message: {},
		confirmText: { default: "确定" },
		cancelText: { default: "取消" },
		onConfirm: {}
	},
	setup(e, { expose: t }) {
		let i = e, a = n(() => {
			switch (i.type) {
				case "error": return "danger";
				case "warn": return "warning";
				case "success": return "success";
				default: return "normal";
			}
		}), o = k("dialogRef");
		t({
			open: () => o.value?.show(),
			close: () => o.value?.hide()
		});
		async function l() {
			o.value?.hide();
		}
		async function u() {
			i.onConfirm && typeof i.onConfirm == "function" && !await i.onConfirm() || o.value?.hide();
		}
		return (e, t) => (y(), r(E(q), {
			ref_key: "dialogRef",
			ref: o,
			width: 360,
			title: i.title,
			description: i.message,
			closable: !1
		}, {
			footer: N(() => [c(E(G), { onClick: l }, {
				default: N(() => [s(T(i.cancelText), 1)]),
				_: 1
			}), c(E(G), {
				variant: "primary",
				status: a.value,
				onClick: u
			}, {
				default: N(() => [s(T(i.confirmText), 1)]),
				_: 1
			}, 8, ["status"])]),
			_: 1
		}, 8, ["title", "description"]));
	}
}), dt = /* @__PURE__ */ l({
	__name: "DropdownMenu",
	props: {
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
		let n = V(e, t);
		return (e, t) => (y(), r(E(ve), null, {
			default: N(({ open: t }) => [c(E(be), { "as-child": "" }, {
				default: N(() => [w(e.$slots, "default", { open: t })]),
				_: 2
			}, 1024), c(E(_e), null, {
				default: N(() => [c(E(he), p({ class: "ui-listbox-content" }, E(n)), {
					default: N(() => [w(e.$slots, "content")]),
					_: 3
				}, 16)]),
				_: 3
			})]),
			_: 3
		}));
	}
}), ft = /* @__PURE__ */ l({
	__name: "DropdownMenuItem",
	props: {
		disabled: { type: Boolean },
		textValue: {},
		asChild: { type: Boolean },
		as: {}
	},
	emits: ["select"],
	setup(e, { emit: t }) {
		let n = V(e, t);
		return (e, t) => (y(), r(E(ge), p({ class: "ui-listbox-item no-indicator" }, E(n)), {
			default: N(() => [w(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), pt = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, mt = {}, ht = { class: "ui-listbox-shortcut" };
function gt(e, t) {
	return y(), a("span", ht, [w(e.$slots, "default")]);
}
var _t = /*#__PURE__*/ pt(mt, [["render", gt]]), vt = /* @__PURE__ */ l({
	__name: "DropdownMenuSeparator",
	setup(e) {
		return (e, t) => (y(), r(E(ye)));
	}
}), yt = {}, bt = { class: "ui-form" };
function xt(e, t) {
	return y(), a("div", bt, [w(e.$slots, "default")]);
}
var St = /*#__PURE__*/ pt(yt, [["render", xt]]), Ct = { class: "ui-form-item" }, wt = {
	key: 0,
	class: "ui-form-item-header"
}, Tt = { class: "ui-form-item_title" }, Et = { class: "ui-form-item_description" }, Dt = { class: "ui-form-item_extra" }, Ot = /* @__PURE__ */ l({
	__name: "FormItem",
	props: {
		label: {},
		description: {}
	},
	setup(e) {
		return (t, n) => (y(), a("div", Ct, [e.label || e.description || t.$slots.extra ? (y(), a("div", wt, [
			o("span", Tt, T(e.label), 1),
			o("span", Et, T(e.description), 1),
			o("div", Dt, [w(t.$slots, "extra")])
		])) : i("", !0), w(t.$slots, "default")]));
	}
}), kt = {
	key: 0,
	class: "ui-input-prefix"
}, At = {
	key: 0,
	class: "ui-input-icon"
}, jt = [
	"placeholder",
	"name",
	"type",
	"disabled"
], Mt = {
	key: 1,
	class: "ui-input-suffix"
}, Nt = ["disabled"], Pt = /* @__PURE__ */ l({
	__name: "Input",
	props: /*@__PURE__*/ f({
		name: {},
		type: {},
		size: {},
		placeholder: { default: "" },
		disabled: { type: Boolean }
	}, {
		modelValue: {},
		modelModifiers: {}
	}),
	emits: /*@__PURE__*/ f(["input", "change"], ["update:modelValue"]),
	setup(e, { emit: t }) {
		let s = e, c = k("inputRef"), l = x(!1), u = D(e, "modelValue"), d = n(() => s.type === "password" ? l.value ? "text" : "password" : s.type);
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
		return (t, n) => (y(), a("div", {
			class: m([E(Z)(s), t.$attrs.class]),
			onPointerdown: p
		}, [
			t.$slots.prefix || t.$slots.icon ? (y(), a("span", kt, [t.$slots.icon ? (y(), a("span", At, [w(t.$slots, "icon")])) : w(t.$slots, "prefix", {}, void 0, void 0, 1)])) : i("", !0),
			P(o("input", {
				ref_key: "inputRef",
				ref: c,
				"onUpdate:modelValue": n[0] ||= (e) => u.value = e,
				autocomplete: "off",
				spellCheck: "false",
				class: "ui-input-native",
				placeholder: e.placeholder,
				name: e.name,
				type: d.value,
				disabled: e.disabled
			}, null, 8, jt), [[A, u.value]]),
			t.$slots.suffix ? (y(), a("span", Mt, [w(t.$slots, "suffix")])) : i("", !0),
			e.type === "password" ? (y(), a("button", {
				key: 2,
				type: "button",
				tabindex: "-1",
				class: "ui-input-button",
				disabled: e.disabled,
				onPointerdown: n[1] ||= F(() => {}, ["prevent"]),
				onMousedown: n[2] ||= F(() => {}, ["prevent"]),
				onClick: F(f, ["stop"])
			}, [l.value ? (y(), r(E($e), {
				key: 0,
				class: "ui-input-icon"
			})) : (y(), r(E(et), {
				key: 1,
				class: "ui-input-icon"
			}))], 40, Nt)) : i("", !0)
		], 34));
	}
}), Ft = {
	key: 0,
	class: "ui-input-prefix"
}, It = {
	key: 0,
	class: "ui-input-icon"
}, Lt = { class: "ui-listbox-label" }, Rt = ["onClick"], zt = /* @__PURE__ */ l({
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
	setup(e, { emit: s }) {
		let l = e, d = s, f = V(l, d), p = k("inputRef"), g = n(() => l.options?.map((e) => typeof e == "string" || typeof e == "number" ? {
			value: e,
			label: String(e)
		} : e) ?? []);
		function _(e) {
			if (e.target.closest("input, button, a")) return;
			let t = p.value?.$el;
			if (!t) return;
			let n = t.value.length;
			requestAnimationFrame(() => {
				try {
					t.setSelectionRange(n, n);
				} catch {}
				t.focus();
			});
		}
		function v(e) {
			d("remove", e);
		}
		return (n, s) => (y(), r(E(ae), h(u(E(f))), {
			default: N(() => [c(E(ee), {
				class: m([E(Z)(l), n.$attrs.class]),
				onPointerdown: _
			}, {
				default: N(() => [
					n.$slots.prefix || n.$slots.icon ? (y(), a("span", Ft, [n.$slots.icon ? (y(), a("span", It, [w(n.$slots, "icon")])) : w(n.$slots, "prefix", {}, void 0, void 0, 1)])) : i("", !0),
					c(E(ne), {
						ref_key: "inputRef",
						ref: p,
						name: e.name,
						placeholder: e.placeholder,
						type: "text",
						class: "ui-input-native"
					}, null, 8, ["name", "placeholder"]),
					c(E(oe), { class: "ui-input-button" }, {
						default: N(() => [c(E(U), { class: "ui-input-icon" })]),
						_: 1
					})
				]),
				_: 3
			}, 8, ["class"]), c(E(ie), null, {
				default: N(() => [c(E(te), {
					position: "popper",
					"side-offset": 4,
					align: "start",
					class: "ui-listbox-content"
				}, {
					default: N(() => [c(E(se), { class: "ui-listbox-viewport" }, {
						default: N(() => [(y(!0), a(t, null, C(g.value, (e) => (y(), r(E(re), {
							class: "ui-listbox-item no-indicator",
							value: e.value
						}, {
							default: N(() => [o("span", Lt, T(e.label), 1), o("button", {
								class: "ui-listbox-right-button",
								onClick: F((t) => v(e), ["stop"])
							}, " 删除 ", 8, Rt)]),
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
}), Bt = {
	key: 0,
	class: "ui-input-prefix"
}, Vt = { class: "ui-input-button" }, Ht = /* @__PURE__ */ l({
	__name: "Select",
	props: {
		placeholder: { default: "请选择" },
		size: { default: "base" },
		data: {},
		open: { type: Boolean },
		defaultOpen: { type: Boolean },
		defaultValue: {},
		modelValue: {},
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
	setup(e, { emit: l }) {
		let d = e, f = V(d, l), p = n(() => d.data.map((e) => typeof e == "string" || typeof e == "number" ? {
			value: e,
			label: String(e)
		} : e));
		return (e, n) => (y(), r(E(je), h(u(E(f))), {
			default: N(() => [c(E(Pe), {
				class: m([
					"ui-select",
					E(Z)(d),
					e.$attrs.class
				]),
				style: g(e.$attrs.style)
			}, {
				default: N(() => [
					e.$slots.prefix ? (y(), a("span", Bt, [w(e.$slots, "prefix")])) : i("", !0),
					c(E(Fe), {
						placeholder: d.placeholder,
						class: "ui-input-native"
					}, null, 8, ["placeholder"]),
					o("span", Vt, [w(e.$slots, "suffix", {}, () => [c(E(U), {
						size: 14,
						class: "ui-input-icon"
					})])])
				]),
				_: 3
			}, 8, ["class", "style"]), c(E(Ae), null, {
				default: N(() => [c(E(Ee), {
					position: "item-aligned",
					class: "ui-listbox-content"
				}, {
					default: N(() => [
						c(E(Ne), { class: "ui-listbox-scroll-button" }, {
							default: N(() => [c(E(Qe), { size: 14 })]),
							_: 1
						}),
						c(E(Ie), null, {
							default: N(() => [(y(!0), a(t, null, C(p.value, (e) => (y(), r(E(De), {
								class: "ui-listbox-item",
								value: e.value
							}, {
								default: N(() => [c(E(Oe), { class: "ui-listbox-indicator" }, {
									default: N(() => [c(E(H), { size: 14 })]),
									_: 1
								}), c(E(ke), { class: "ui-listbox-label" }, {
									default: N(() => [s(T(e.label ?? e.value), 1)]),
									_: 2
								}, 1024)]),
								_: 2
							}, 1032, ["value"]))), 256))]),
							_: 1
						}),
						c(E(Me), { class: "ui-listbox-scroll-button" }, {
							default: N(() => [c(E(U), { size: 14 })]),
							_: 1
						})
					]),
					_: 1
				})]),
				_: 1
			})]),
			_: 3
		}, 16));
	}
}), Z = e("ui-input", {
	variants: { size: {
		base: "ui-input-base",
		small: "ui-input-small",
		medium: "ui-input-medium",
		large: "ui-input-large"
	} },
	defaultVariants: { size: "base" }
}), Ut = /* @__PURE__ */ l({
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
		let i = e, a = V(i, t), o = k("progressRef"), s = n(() => o.value?.getValueLabel ? o.value.getValueLabel(i.modelValue, i.max ?? 100) : 0);
		return (e, t) => (y(), r(E(Ce), p({
			class: "ui-progress",
			ref_key: "progressRef",
			ref: o
		}, E(a)), {
			default: N(() => [c(E(Se), {
				class: "ui-progress-indicator",
				style: g({ width: s.value })
			}, null, 8, ["style"])]),
			_: 1
		}, 16));
	}
}), Wt = /* @__PURE__ */ l({
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
		let n = e, i = V(n, t);
		return (e, t) => (y(), r(E(Ue), p({ class: [E(Kt)(n), e.$attrs.class] }, E(i)), {
			default: N(() => [c(E(He), null, {
				default: N(() => [c(E(Ve), { class: "ui-segmented-indicator" }), w(e.$slots, "default")]),
				_: 3
			})]),
			_: 3
		}, 16, ["class"]));
	}
}), Gt = /* @__PURE__ */ l({
	__name: "SegmentedItem",
	props: {
		label: {},
		value: {},
		disabled: { type: Boolean },
		asChild: { type: Boolean },
		as: {}
	},
	setup(e) {
		let t = V(e);
		return (n, i) => (y(), r(E(We), p(E(t), { class: "ui-segmented-item" }), {
			default: N(() => [s(T(e.label), 1)]),
			_: 1
		}, 16));
	}
}), Kt = e("ui-segmented", {
	variants: { size: {
		base: "",
		small: "ui-segmented_small",
		medium: "ui-segmented_medium",
		large: "ui-segmented_large"
	} },
	defaultVariants: { size: "base" }
}), qt = /* @__PURE__ */ l({
	__name: "Slider",
	props: {
		defaultValue: {},
		modelValue: {},
		disabled: { type: Boolean },
		orientation: {},
		dir: {},
		inverted: { type: Boolean },
		min: {},
		max: {},
		step: {},
		minStepsBetweenThumbs: {},
		thumbAlignment: {},
		asChild: { type: Boolean },
		as: {},
		name: {},
		required: { type: Boolean }
	},
	emits: ["update:modelValue", "valueCommit"],
	setup(e, { emit: n }) {
		let i = V(e, n);
		return (n, o) => (y(), r(E(Re), p({ class: "ui-slider" }, E(i)), {
			default: N(() => [c(E(Be), { class: "ui-slider_track" }, {
				default: N(() => [c(E(Le), { class: "ui-slider_range" })]),
				_: 1
			}), (y(!0), a(t, null, C(e.modelValue, (e, t) => (y(), r(E(ze), {
				key: t,
				class: "ui-slider_thumb"
			}))), 128))]),
			_: 1
		}, 16));
	}
}), Jt = /* @__PURE__ */ l({
	__name: "Space",
	props: {
		size: { default: 8 },
		direction: { default: "horizontal" }
	},
	setup(e) {
		let n = e, r = O(), i = () => {
			let e = r.default ? r.default() : [], n = [], i = (e) => {
				e.forEach((e) => {
					e.type === t && Array.isArray(e.children) ? i(e.children) : n.push(e);
				});
			};
			return i(e), n.map((e, t) => d("div", {
				class: "ui-space-item",
				key: e.key ?? t
			}, [e]));
		};
		return (t, r) => (y(), a("div", {
			class: m([E(Yt)(n), t.$attrs.class]),
			style: g({ gap: `${e.size}px` })
		}, [c(i)], 6));
	}
}), Yt = e("ui-space", {
	variants: { direction: {
		horizontal: "ui-space-horizontal",
		vertical: "ui-space-vertical"
	} },
	defaultVariants: { direction: "horizontal" }
}), Xt = /* @__PURE__ */ l({
	__name: "Splitter",
	setup(e) {
		return (e, t) => (y(), r(E(R), { direction: "horizontal" }, {
			default: N(() => [
				c(E(z), { class: "ui-splitter-panel" }, {
					default: N(() => [w(e.$slots, "default")]),
					_: 3
				}),
				c(E(B), { class: "ui-splitter-handle" }),
				c(E(z), null, {
					default: N(() => [c(E(R), { direction: "vertical" }, {
						default: N(() => [
							c(E(z), { class: "ui-splitter-panel" }, {
								default: N(() => [w(e.$slots, "top")]),
								_: 3
							}),
							c(E(B), { class: "ui-splitter-handle" }),
							c(E(z), { class: "ui-splitter-panel" }, {
								default: N(() => [w(e.$slots, "bottom")]),
								_: 3
							})
						]),
						_: 3
					})]),
					_: 3
				})
			]),
			_: 3
		}));
	}
}), Zt = /* @__PURE__ */ l({
	__name: "Toast",
	props: {
		message: { default: "" },
		type: { default: "info" },
		duration: { default: 3e3 },
		onDestroy: {}
	},
	setup(e) {
		let t = e, n = x(!1);
		return v(() => {
			n.value = !0;
		}), M(n, (e) => {
			!e && t.onDestroy && setTimeout(() => {
				t.onDestroy?.();
			}, 200);
		}), (a, o) => (y(), r(E(qe), {
			open: n.value,
			"onUpdate:open": o[0] ||= (e) => n.value = e,
			duration: t.duration,
			class: "ui-toast-root"
		}, {
			default: N(() => [e.type === "success" ? (y(), r(E(Ze), {
				key: 0,
				class: m(["ui-toast-icon", e.type])
			}, null, 8, ["class"])) : e.type === "error" ? (y(), r(E(it), {
				key: 1,
				class: m(["ui-toast-icon", e.type])
			}, null, 8, ["class"])) : e.type === "warning" ? (y(), r(E(Ye), {
				key: 2,
				class: m(["ui-toast-icon", e.type])
			}, null, 8, ["class"])) : (y(), r(E(tt), {
				key: 3,
				class: m(["ui-toast-icon", e.type])
			}, null, 8, ["class"])), t.message ? (y(), r(E(Ge), {
				key: 4,
				class: "ui-toast-message"
			}, {
				default: N(() => [s(T(t.message), 1)]),
				_: 1
			})) : i("", !0)]),
			_: 1
		}, 8, ["open", "duration"]));
	}
}), Q = x([]), Qt = !1, $t = l({
	name: "GlobalToastContainer",
	setup() {
		return () => d(Ke, { swipeDirection: "up" }, () => [Q.value.map((e) => d(Zt, {
			key: e.id,
			...e,
			onDestroy: () => {
				Q.value = Q.value.filter((t) => t.id !== e.id);
			}
		})), d(Je, { class: "ui-toast-viewport" })]);
	}
}), en = () => {
	if (!Qt) {
		let e = document.createElement("div");
		e.id = "ui-toast-global-container", document.body.appendChild(e), S(d($t), e), Qt = !0;
	}
}, tn = 0, $ = (e) => {
	en();
	let t = `ui-toast-${Date.now()}_${tn++}`;
	Q.value.push({
		...e,
		id: t
	});
}, nn = {
	info(e, t) {
		$({
			type: "info",
			message: e,
			duration: t
		});
	},
	success(e, t) {
		$({
			type: "success",
			message: e,
			duration: t
		});
	},
	error(e, t) {
		$({
			type: "error",
			message: e,
			duration: t
		});
	},
	warning(e, t) {
		$({
			type: "warning",
			message: e,
			duration: t
		});
	}
}, rn = /* @__PURE__ */ l({
	__name: "Tag",
	props: { type: { default: "default" } },
	setup(e) {
		return (t, n) => (y(), a("span", { class: m(["ui-tag", `ui-tag_${e.type}`]) }, [w(t.$slots, "default")], 2));
	}
}), an = /* @__PURE__ */ l({
	__name: "ScrollArea",
	setup(e) {
		return (e, t) => (y(), r(E(we), { class: "ui-scrollArea" }, {
			default: N(() => [
				c(E(Te), { class: "ui-scrollArea-viewport" }, {
					default: N(() => [w(e.$slots, "default")]),
					_: 3
				}),
				c(E(I), {
					class: "ui-scrollArea-bar",
					orientation: "vertical"
				}, {
					default: N(() => [c(E(L), { class: "ui-scrollArea-thumb" })]),
					_: 1
				}),
				c(E(I), {
					class: "ui-scrollArea-bar",
					orientation: "horizontal"
				}, {
					default: N(() => [c(E(L), { class: "ui-scrollArea-thumb" })]),
					_: 1
				})
			]),
			_: 3
		}));
	}
}), on = {
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
}, sn = { key: 0 }, cn = { key: 1 }, ln = { key: 2 }, un = { key: 3 }, dn = /* @__PURE__ */ l({
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
		}, i = e, s = x(null), c = x(null), l = x(0), u = x(t.READY), d = 0, f = 0, p = 0, h = [], b = null, S = n(() => u.value === t.READY), C = n(() => u.value === t.PENDING), w = n(() => u.value === t.CHECKING), T = n(() => u.value === t.SUCCESS), D = n(() => u.value === t.ERROR), O = n(() => l.value + (c.value?.offsetWidth ? c.value.offsetWidth - 1 : 0));
		function k(e, t) {
			let n = Date.now();
			n - p > 16 && (h.push([
				e,
				t,
				n
			]), p = n);
		}
		function A() {
			u.value = t.READY, l.value = 0, f = 0, p = 0, h = [], b &&= (clearTimeout(b), null);
		}
		async function j() {
			if (i.request) {
				u.value = t.CHECKING;
				try {
					let e = on.encrypt(h), n = await i.request(e);
					u.value = t.SUCCESS, b = setTimeout(A, n.ttl * 999);
				} catch {
					u.value = t.ERROR, setTimeout(() => {
						A();
					}, 1e3);
				}
			}
		}
		function M() {
			s.value && c.value && (d = s.value.offsetWidth - c.value.offsetWidth);
		}
		function N(e) {
			S.value && (M(), u.value = t.PENDING, c.value && c.value.setPointerCapture(e.pointerId), f = e.clientX, k(Math.floor(e.clientX), Math.floor(e.clientY)));
		}
		function P(e) {
			if (!C.value) return;
			let t = Math.max(0, Math.min(d, e.clientX - f));
			k(Math.floor(e.clientX), Math.floor(e.clientY)), l.value = t;
		}
		function F(e) {
			if (C.value) {
				if (c.value && c.value.releasePointerCapture(e.pointerId), k(Math.floor(e.clientX), Math.floor(e.clientY)), l.value < d || h.length < 8) {
					A();
					return;
				}
				j();
			}
		}
		return v(() => {
			document.addEventListener("pointermove", P), document.addEventListener("pointerup", F), document.addEventListener("pointercancel", F), M();
		}), _(() => {
			b && clearTimeout(b), document.removeEventListener("pointermove", P), document.removeEventListener("pointerup", F), document.removeEventListener("pointercancel", F);
		}), (t, n) => (y(), a("div", {
			class: m(["SliderCaptcha", `SliderCaptcha-${e.size}`]),
			ref_key: "wrapRef",
			ref: s
		}, [
			o("div", {
				class: m(["SliderCaptcha-Mask", {
					error: D.value,
					success: T.value,
					transition: S.value
				}]),
				style: g({ width: O.value + "px" })
			}, null, 6),
			o("div", { class: m(["SliderCaptcha-Tips", { ready: S.value || C.value }]) }, [w.value ? (y(), a("span", sn, "验证中...")) : T.value ? (y(), a("span", cn, "验证成功")) : D.value ? (y(), a("span", ln, "验证失败")) : (y(), a("span", un, "拖动滑块到最右边"))], 2),
			o("div", {
				ref_key: "btnRef",
				ref: c,
				class: m(["SliderCaptcha-Btn", {
					transition: S.value,
					checking: w.value,
					error: D.value,
					success: T.value
				}]),
				style: g({
					left: l.value + "px",
					"touch-action": "none"
				}),
				onPointerdown: N
			}, [w.value ? (y(), r(E(nt), {
				key: 0,
				size: 16,
				class: "SliderCaptcha_loader"
			})) : T.value ? (y(), r(E(H), {
				key: 1,
				size: 16
			})) : D.value ? (y(), r(E(W), {
				key: 2,
				size: 16
			})) : (y(), r(E(Xe), {
				key: 3,
				size: 16
			}))], 38)
		], 2));
	}
});
//#endregion
export { lt as Alert, zt as Autocomplete, G as Button, q as Dialog, dt as DropdownMenu, ft as DropdownMenuItem, vt as DropdownMenuSeparator, _t as DropdownMenuShortcut, St as Form, Ot as FormItem, Pt as Input, Ut as Progress, an as ScrollArea, Wt as Segmented, Gt as SegmentedItem, Ht as Select, qt as Slider, dn as SliderCaptcha, Jt as Space, Xt as Splitter, rn as Tag, nn as Toast, K as buttonVariants, Z as inputVariants, Kt as segmentedVariants, Yt as spaceVariants };
