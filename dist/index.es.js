import { cva as e } from "class-variance-authority";
import { Comment as t, Fragment as n, computed as r, createBlock as i, createCommentVNode as a, createElementBlock as o, createElementVNode as s, createTextVNode as c, createVNode as l, defineComponent as u, guardReactiveProps as d, h as f, mergeModels as p, mergeProps as m, normalizeClass as h, normalizeProps as g, normalizeStyle as _, onBeforeUnmount as v, onMounted as y, openBlock as b, reactive as x, ref as S, render as C, renderList as w, renderSlot as T, toDisplayString as E, unref as D, useModel as O, useTemplateRef as k, vModelDynamic as A, vShow as j, watch as M, withCtx as N, withDirectives as P, withModifiers as F } from "vue";
import { AutocompleteAnchor as ee, AutocompleteContent as te, AutocompleteInput as ne, AutocompleteItem as re, AutocompletePortal as ie, AutocompleteRoot as ae, AutocompleteTrigger as oe, AutocompleteViewport as se, DialogContent as ce, DialogDescription as le, DialogOverlay as ue, DialogPortal as de, DialogRoot as fe, DialogTitle as pe, DialogTrigger as me, DropdownMenuContent as he, DropdownMenuItem as ge, DropdownMenuPortal as _e, DropdownMenuRoot as ve, DropdownMenuSeparator as ye, DropdownMenuTrigger as be, Primitive as xe, ProgressIndicator as Se, ProgressRoot as Ce, ScrollAreaRoot as we, ScrollAreaScrollbar as I, ScrollAreaThumb as L, ScrollAreaViewport as Te, SelectContent as Ee, SelectItem as De, SelectItemIndicator as Oe, SelectItemText as ke, SelectPortal as Ae, SelectRoot as je, SelectScrollDownButton as Me, SelectScrollUpButton as Ne, SelectTrigger as Pe, SelectValue as R, SelectViewport as Fe, SliderRange as Ie, SliderRoot as Le, SliderThumb as Re, SliderTrack as ze, SplitterGroup as z, SplitterPanel as B, SplitterResizeHandle as V, TabsIndicator as Be, TabsList as Ve, TabsRoot as He, TabsTrigger as Ue, ToastDescription as We, ToastProvider as Ge, ToastRoot as Ke, ToastViewport as qe, useForwardPropsEmits as H } from "reka-ui";
import { AlertCircleIcon as Je, ArrowRight as Ye, Check as U, CheckCircle2 as Xe, ChevronDown as W, ChevronUp as Ze, Eye as Qe, EyeClosed as $e, InfoIcon as et, Loader2 as tt, Loader2Icon as nt, X as G, XCircleIcon as rt } from "lucide-vue-next";
//#endregion
//#region src/components/Button/Button.vue
var K = /* @__PURE__ */ u({
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
		return (r, s) => (b(), i(D(xe), {
			as: e.as,
			"as-child": e.asChild,
			class: h([D(q)(t), r.$attrs.class]),
			disabled: e.isLoading || r.$attrs.disabled
		}, {
			default: N(() => [e.isLoading ? (b(), i(D(nt), {
				key: 0,
				class: "ui-button_loader"
			})) : a("", !0), !e.isLoading || e.isLoading && !e.loadingText ? T(r.$slots, "default", {}, void 0, void 0, 1) : (b(), o(n, { key: 2 }, [c(E(e.loadingText), 1)], 64))]),
			_: 3
		}, 8, [
			"as",
			"as-child",
			"class",
			"disabled"
		]));
	}
}), q = e("ui-button", {
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
}), it = { class: "ui-dialog-header" }, at = {
	key: 0,
	class: "ui-dialog-footer"
}, ot = /* @__PURE__ */ u({
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
	emits: ["close"],
	setup(e, { expose: t, emit: n }) {
		let u = S(!1), d = e, f = n;
		t({
			show() {
				u.value = !0;
			},
			hide() {
				u.value = !1;
			}
		}), M(u, (e) => {
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
		async function v() {
			d.onCancel && typeof d.onCancel == "function" ? await d.onCancel() ? u.value = !1 : u.value = !0 : u.value = !1;
		}
		async function y(e) {
			e.preventDefault(), d.onConfirm && typeof d.onConfirm == "function" ? await d.onConfirm() ? u.value = !1 : u.value = !0 : u.value = !1;
		}
		return (t, n) => (b(), i(D(fe), {
			open: u.value,
			"onUpdate:open": n[0] ||= (e) => u.value = e
		}, {
			default: N(() => [t.$slots.trigger ? (b(), i(D(me), {
				key: 0,
				"as-child": ""
			}, {
				default: N(() => [T(t.$slots, "trigger")]),
				_: 3
			})) : a("", !0), l(D(de), null, {
				default: N(() => [e.hideOverlay ? a("", !0) : (b(), i(D(ue), {
					key: 0,
					class: "ui-dialog-overlay"
				})), l(D(ce), {
					class: "ui-dialog-content",
					style: _(p.value),
					onEscapeKeyDown: m,
					onPointerDownOutside: h
				}, {
					default: N(() => [
						s("div", it, [l(D(pe), { class: "ui-dialog-header_title" }, {
							default: N(() => [T(t.$slots, "title", {}, () => [c(E(e.title), 1)])]),
							_: 3
						}), P(l(D(le), { class: "ui-dialog-header_description" }, {
							default: N(() => [T(t.$slots, "description", {}, () => [c(E(e.description), 1)])]),
							_: 3
						}, 512), [[j, !!e.description]])]),
						T(t.$slots, "default"),
						e.hideFooter ? a("", !0) : (b(), o("div", at, [T(t.$slots, "footer", {}, () => [l(D(K), { onClick: v }, {
							default: N(() => [c(E(e.cancelText), 1)]),
							_: 1
						}), l(D(K), {
							variant: "primary",
							onClick: y
						}, {
							default: N(() => [c(E(e.confirmText), 1)]),
							_: 1
						})])])),
						e.closable ? (b(), o("button", {
							key: 1,
							class: "ui-dialog-close",
							onClick: g
						}, [l(D(G), { size: 16 })])) : a("", !0)
					]),
					_: 3
				}, 8, ["style"])]),
				_: 3
			})]),
			_: 3
		}, 8, ["open"]));
	}
}), J = x({
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
	let a = l(ut, J);
	C(a, i), st = a.component?.exposed, st?.open();
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
}, ut = /* @__PURE__ */ u({
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
		let n = e, a = r(() => {
			switch (n.type) {
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
		async function s() {
			o.value?.hide();
		}
		async function u() {
			n.onConfirm && typeof n.onConfirm == "function" && !await n.onConfirm() || o.value?.hide();
		}
		return (e, t) => (b(), i(D(ot), {
			ref_key: "dialogRef",
			ref: o,
			width: 360,
			title: n.title,
			description: n.message,
			closable: !1
		}, {
			footer: N(() => [l(D(K), { onClick: s }, {
				default: N(() => [c(E(n.cancelText), 1)]),
				_: 1
			}), l(D(K), {
				variant: "primary",
				status: a.value,
				onClick: u
			}, {
				default: N(() => [c(E(n.confirmText), 1)]),
				_: 1
			}, 8, ["status"])]),
			_: 1
		}, 8, ["title", "description"]));
	}
}), dt = /* @__PURE__ */ u({
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
		let n = H(e, t);
		return (e, t) => (b(), i(D(ve), null, {
			default: N(({ open: t }) => [l(D(be), { "as-child": "" }, {
				default: N(() => [T(e.$slots, "default", { open: t })]),
				_: 2
			}, 1024), l(D(_e), null, {
				default: N(() => [l(D(he), m({ class: "ui-listbox-content" }, D(n)), {
					default: N(() => [T(e.$slots, "content")]),
					_: 3
				}, 16)]),
				_: 3
			})]),
			_: 3
		}));
	}
}), ft = /* @__PURE__ */ u({
	__name: "DropdownMenuItem",
	props: {
		disabled: { type: Boolean },
		textValue: {},
		asChild: { type: Boolean },
		as: {}
	},
	emits: ["select"],
	setup(e, { emit: t }) {
		let n = H(e, t);
		return (e, t) => (b(), i(D(ge), m({ class: "ui-listbox-item no-indicator" }, D(n)), {
			default: N(() => [T(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), pt = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, mt = {}, ht = { class: "ui-listbox-shortcut" };
function gt(e, t) {
	return b(), o("span", ht, [T(e.$slots, "default")]);
}
var _t = /*#__PURE__*/ pt(mt, [["render", gt]]), vt = /* @__PURE__ */ u({
	__name: "DropdownMenuSeparator",
	setup(e) {
		return (e, t) => (b(), i(D(ye)));
	}
}), yt = {}, bt = { class: "ui-form" };
function xt(e, t) {
	return b(), o("div", bt, [T(e.$slots, "default")]);
}
var St = /*#__PURE__*/ pt(yt, [["render", xt]]), Ct = { class: "ui-form-item" }, wt = {
	key: 0,
	class: "ui-form-item-header"
}, Tt = { class: "ui-form-item_title" }, Et = { class: "ui-form-item_description" }, Dt = { class: "ui-form-item_extra" }, Ot = /* @__PURE__ */ u({
	__name: "FormItem",
	props: {
		label: {},
		description: {}
	},
	setup(e) {
		return (t, n) => (b(), o("div", Ct, [e.label || e.description || t.$slots.extra ? (b(), o("div", wt, [
			s("span", Tt, E(e.label), 1),
			s("span", Et, E(e.description), 1),
			s("div", Dt, [T(t.$slots, "extra")])
		])) : a("", !0), T(t.$slots, "default")]));
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
}, Nt = ["disabled"], Pt = /* @__PURE__ */ u({
	__name: "Input",
	props: /*@__PURE__*/ p({
		name: {},
		type: {},
		size: {},
		placeholder: { default: "" },
		disabled: { type: Boolean }
	}, {
		modelValue: {},
		modelModifiers: {}
	}),
	emits: /*@__PURE__*/ p(["input", "change"], ["update:modelValue"]),
	setup(e, { emit: t }) {
		let n = e, c = k("inputRef"), l = S(!1), u = O(e, "modelValue"), d = r(() => n.type === "password" ? l.value ? "text" : "password" : n.type);
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
		return (t, r) => (b(), o("div", {
			class: h([D(Z)(n), t.$attrs.class]),
			onPointerdown: p
		}, [
			t.$slots.prefix || t.$slots.icon ? (b(), o("span", kt, [t.$slots.icon ? (b(), o("span", At, [T(t.$slots, "icon")])) : T(t.$slots, "prefix", {}, void 0, void 0, 1)])) : a("", !0),
			P(s("input", {
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
			}, null, 8, jt), [[A, u.value]]),
			t.$slots.suffix ? (b(), o("span", Mt, [T(t.$slots, "suffix")])) : a("", !0),
			e.type === "password" ? (b(), o("button", {
				key: 2,
				type: "button",
				tabindex: "-1",
				class: "ui-input-button",
				disabled: e.disabled,
				onPointerdown: r[1] ||= F(() => {}, ["prevent"]),
				onMousedown: r[2] ||= F(() => {}, ["prevent"]),
				onClick: F(f, ["stop"])
			}, [l.value ? (b(), i(D(Qe), {
				key: 0,
				class: "ui-input-icon"
			})) : (b(), i(D($e), {
				key: 1,
				class: "ui-input-icon"
			}))], 40, Nt)) : a("", !0)
		], 34));
	}
}), Ft = {
	key: 0,
	class: "ui-input-prefix"
}, It = {
	key: 0,
	class: "ui-input-icon"
}, Lt = { class: "ui-listbox-label" }, Rt = ["onClick"], zt = /* @__PURE__ */ u({
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
		let c = e, u = t, f = H(c, u), p = k("inputRef"), m = r(() => c.options?.map((e) => typeof e == "string" || typeof e == "number" ? {
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
			u("remove", e);
		}
		return (t, r) => (b(), i(D(ae), g(d(D(f))), {
			default: N(() => [l(D(ee), {
				class: h([D(Z)(c), t.$attrs.class]),
				onPointerdown: _
			}, {
				default: N(() => [
					t.$slots.prefix || t.$slots.icon ? (b(), o("span", Ft, [t.$slots.icon ? (b(), o("span", It, [T(t.$slots, "icon")])) : T(t.$slots, "prefix", {}, void 0, void 0, 1)])) : a("", !0),
					l(D(ne), {
						ref_key: "inputRef",
						ref: p,
						name: e.name,
						placeholder: e.placeholder,
						type: "text",
						class: "ui-input-native"
					}, null, 8, ["name", "placeholder"]),
					l(D(oe), { class: "ui-input-button" }, {
						default: N(() => [l(D(W), { class: "ui-input-icon" })]),
						_: 1
					})
				]),
				_: 3
			}, 8, ["class"]), l(D(ie), null, {
				default: N(() => [l(D(te), {
					position: "popper",
					"side-offset": 4,
					align: "start",
					class: "ui-listbox-content"
				}, {
					default: N(() => [l(D(se), { class: "ui-listbox-viewport" }, {
						default: N(() => [(b(!0), o(n, null, w(m.value, (e) => (b(), i(D(re), {
							class: "ui-listbox-item no-indicator",
							value: e.value
						}, {
							default: N(() => [s("span", Lt, E(e.label), 1), s("button", {
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
}, Vt = { class: "ui-input-suffix" }, Ht = /* @__PURE__ */ u({
	__name: "Select",
	props: {
		placeholder: { default: "请选择" },
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
		}), p = H(f, d), g = r(() => u.data.map((e) => typeof e == "string" || typeof e == "number" ? {
			value: String(e),
			label: String(e)
		} : {
			...e,
			value: String(e.value),
			label: e.label ?? String(e.value)
		})), v = r(() => {
			if (u.modelValue === void 0 || u.modelValue === null || u.modelValue === "") return;
			let e = String(u.modelValue), t = g.value.find((t) => t.value === e);
			return t ? t.label : void 0;
		});
		return (e, t) => (b(), i(D(je), m(D(p), { "model-value": u.modelValue ? String(u.modelValue) : void 0 }), {
			default: N(() => [l(D(Pe), {
				class: h([
					"ui-select",
					D(Z)(u),
					e.$attrs.class
				]),
				style: _(e.$attrs.style)
			}, {
				default: N(() => [
					e.$slots.prefix ? (b(), o("span", Bt, [T(e.$slots, "prefix")])) : a("", !0),
					v.value ? (b(), i(D(R), {
						key: 2,
						class: "ui-input-native"
					}, {
						default: N(() => [c(E(v.value), 1)]),
						_: 1
					})) : (b(), i(D(R), {
						key: 1,
						placeholder: u.placeholder,
						class: "ui-input-native"
					}, null, 8, ["placeholder"])),
					s("span", Vt, [T(e.$slots, "suffix", {}, () => [l(D(W), {
						size: 14,
						class: "ui-input-icon"
					})])])
				]),
				_: 3
			}, 8, ["class", "style"]), l(D(Ae), null, {
				default: N(() => [l(D(Ee), {
					position: "popper",
					"side-offset": 4,
					class: "ui-listbox-content"
				}, {
					default: N(() => [
						l(D(Ne), { class: "ui-listbox-scroll-button" }, {
							default: N(() => [l(D(Ze), { size: 14 })]),
							_: 1
						}),
						l(D(Fe), null, {
							default: N(() => [(b(!0), o(n, null, w(g.value, (e) => (b(), i(D(De), {
								key: e.value,
								class: "ui-listbox-item",
								value: e.value
							}, {
								default: N(() => [l(D(Oe), { class: "ui-listbox-indicator" }, {
									default: N(() => [l(D(U), { size: 14 })]),
									_: 1
								}), l(D(ke), { class: "ui-listbox-label" }, {
									default: N(() => [c(E(e.label), 1)]),
									_: 2
								}, 1024)]),
								_: 2
							}, 1032, ["value"]))), 128))]),
							_: 1
						}),
						l(D(Me), { class: "ui-listbox-scroll-button" }, {
							default: N(() => [l(D(W), { size: 14 })]),
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
}), Z = e("ui-input", {
	variants: { size: {
		base: "ui-input-base",
		small: "ui-input-small",
		medium: "ui-input-medium",
		large: "ui-input-large"
	} },
	defaultVariants: { size: "base" }
}), Ut = /* @__PURE__ */ u({
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
		let n = e, a = H(n, t), o = k("progressRef"), s = r(() => o.value?.getValueLabel ? o.value.getValueLabel(n.modelValue, n.max ?? 100) : 0);
		return (e, t) => (b(), i(D(Ce), m({
			class: "ui-progress",
			ref_key: "progressRef",
			ref: o
		}, D(a)), {
			default: N(() => [l(D(Se), {
				class: "ui-progress-indicator",
				style: _({ width: s.value })
			}, null, 8, ["style"])]),
			_: 1
		}, 16));
	}
}), Wt = /* @__PURE__ */ u({
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
		let n = e, r = H(n, t);
		return (e, t) => (b(), i(D(He), m({ class: [D(Kt)(n), e.$attrs.class] }, D(r)), {
			default: N(() => [l(D(Ve), null, {
				default: N(() => [l(D(Be), { class: "ui-segmented-indicator" }), T(e.$slots, "default")]),
				_: 3
			})]),
			_: 3
		}, 16, ["class"]));
	}
}), Gt = /* @__PURE__ */ u({
	__name: "SegmentedItem",
	props: {
		label: {},
		value: {},
		disabled: { type: Boolean },
		asChild: { type: Boolean },
		as: {}
	},
	setup(e) {
		let t = H(e);
		return (n, r) => (b(), i(D(Ue), m(D(t), { class: "ui-segmented-item" }), {
			default: N(() => [c(E(e.label), 1)]),
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
}), qt = /* @__PURE__ */ u({
	__name: "Slider",
	props: /*@__PURE__*/ p({
		min: { default: 0 },
		max: { default: 100 },
		step: { default: 1 },
		disabled: {
			type: Boolean,
			default: !1
		},
		values: {}
	}, {
		modelValue: {},
		modelModifiers: {}
	}),
	emits: /*@__PURE__*/ p(["change"], ["update:modelValue"]),
	setup(e, { emit: t }) {
		let a = e, s = O(e, "modelValue"), c = t, u = r(() => Array.isArray(a.values) && a.values.length > 0), d = r(() => u.value ? 0 : a.min), f = r(() => u.value ? a.values.length - 1 : a.max), p = r(() => u.value ? 1 : a.step), m = r({
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
		return (e, t) => (b(), i(D(Le), {
			class: "ui-slider",
			modelValue: m.value,
			"onUpdate:modelValue": t[0] ||= (e) => m.value = e,
			min: d.value,
			max: f.value,
			step: p.value,
			disabled: a.disabled
		}, {
			default: N(() => [l(D(ze), { class: "ui-slider_track" }, {
				default: N(() => [l(D(Ie), { class: "ui-slider_range" })]),
				_: 1
			}), (b(!0), o(n, null, w(m.value, (e, t) => (b(), i(D(Re), {
				key: t,
				class: "ui-slider_thumb"
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
}), Jt = u({
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
			return f("div", {
				...i,
				class: [Yt(e), i.class],
				style: [{ gap: `${e.size}px` }, i.style || {}]
			}, n.map((e, t) => {
				let n = e.key !== null && e.key !== void 0 ? e.key : typeof e.type == "object" && e.type.__name || t;
				return f("div", {
					class: "ui-space-item",
					key: `space-item-${n}-${t}`
				}, [e]);
			}));
		};
	}
}), Yt = e("ui-space", {
	variants: {
		direction: {
			horizontal: "ui-space-horizontal",
			vertical: "ui-space-vertical"
		},
		fill: { true: "ui-space-fill" }
	},
	defaultVariants: { direction: "horizontal" }
}), Xt = { class: "ui-splitter-extra" }, Zt = /* @__PURE__ */ u({
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
		return (t, a) => (b(), i(D(z), { direction: "horizontal" }, {
			default: N(() => [
				l(D(B), m({ class: "ui-splitter-panel" }, e.main), {
					default: N(() => [T(t.$slots, "default")]),
					_: 3
				}, 16),
				l(D(V), { class: "ui-splitter-handle" }),
				l(D(B), m({ class: "ui-splitter-aside" }, e.aside, {
					onCollapse: a[0] ||= (e) => n("collapse"),
					onExpand: a[1] ||= (e) => n("expand"),
					onResize: r
				}), {
					default: N(() => [l(D(z), { direction: "vertical" }, {
						default: N(() => [
							l(D(B), m({ class: "ui-splitter-panel" }, e.asideTop), {
								default: N(() => [T(t.$slots, "top")]),
								_: 3
							}, 16),
							l(D(V), { class: "ui-splitter-handle" }),
							l(D(B), m({ class: "ui-splitter-panel" }, e.asideBottom), {
								default: N(() => [T(t.$slots, "bottom")]),
								_: 3
							}, 16)
						]),
						_: 3
					}), s("div", Xt, [T(t.$slots, "extra")])]),
					_: 3
				}, 16)
			]),
			_: 3
		}));
	}
}), Qt = /* @__PURE__ */ u({
	__name: "Toast",
	props: {
		message: { default: "" },
		type: { default: "info" },
		duration: { default: 3e3 },
		onDestroy: {}
	},
	setup(e) {
		let t = e, n = S(!1);
		return y(() => {
			n.value = !0;
		}), M(n, (e) => {
			!e && t.onDestroy && setTimeout(() => {
				t.onDestroy?.();
			}, 200);
		}), (r, o) => (b(), i(D(Ke), {
			open: n.value,
			"onUpdate:open": o[0] ||= (e) => n.value = e,
			duration: t.duration,
			class: "ui-toast-root"
		}, {
			default: N(() => [e.type === "success" ? (b(), i(D(Xe), {
				key: 0,
				class: h(["ui-toast-icon", e.type])
			}, null, 8, ["class"])) : e.type === "error" ? (b(), i(D(rt), {
				key: 1,
				class: h(["ui-toast-icon", e.type])
			}, null, 8, ["class"])) : e.type === "warning" ? (b(), i(D(Je), {
				key: 2,
				class: h(["ui-toast-icon", e.type])
			}, null, 8, ["class"])) : (b(), i(D(et), {
				key: 3,
				class: h(["ui-toast-icon", e.type])
			}, null, 8, ["class"])), t.message ? (b(), i(D(We), {
				key: 4,
				class: "ui-toast-message"
			}, {
				default: N(() => [c(E(t.message), 1)]),
				_: 1
			})) : a("", !0)]),
			_: 1
		}, 8, ["open", "duration"]));
	}
}), Q = S([]), $t = !1, en = u({
	name: "GlobalToastContainer",
	setup() {
		return () => f(Ge, { swipeDirection: "up" }, () => [Q.value.map((e) => f(Qt, {
			key: e.id,
			...e,
			onDestroy: () => {
				Q.value = Q.value.filter((t) => t.id !== e.id);
			}
		})), f(qe, { class: "ui-toast-viewport" })]);
	}
}), tn = () => {
	if (!$t) {
		let e = document.createElement("div");
		e.id = "ui-toast-global-container", document.body.appendChild(e), C(f(en), e), $t = !0;
	}
}, nn = 0, $ = (e) => {
	tn();
	let t = `ui-toast-${Date.now()}_${nn++}`;
	Q.value.push({
		...e,
		id: t
	});
}, rn = {
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
}, an = /* @__PURE__ */ u({
	__name: "Tag",
	props: { type: { default: "default" } },
	setup(e) {
		return (t, n) => (b(), o("span", { class: h(["ui-tag", `ui-tag_${e.type}`]) }, [T(t.$slots, "default")], 2));
	}
}), on = ["href", "fill"], sn = /* @__PURE__ */ u({
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
		return (t, r) => (b(), o("svg", {
			"aria-hidden": "true",
			style: _(n.value)
		}, [s("use", {
			href: i.value,
			fill: e.color
		}, null, 8, on)], 4));
	}
}), cn = /* @__PURE__ */ u({
	__name: "ScrollArea",
	setup(e) {
		return (e, t) => (b(), i(D(we), { class: "ui-scrollArea" }, {
			default: N(() => [
				l(D(Te), { class: "ui-scrollArea-viewport" }, {
					default: N(() => [T(e.$slots, "default")]),
					_: 3
				}),
				l(D(I), {
					class: "ui-scrollArea-bar",
					orientation: "vertical"
				}, {
					default: N(() => [l(D(L), { class: "ui-scrollArea-thumb" })]),
					_: 1
				}),
				l(D(I), {
					class: "ui-scrollArea-bar",
					orientation: "horizontal"
				}, {
					default: N(() => [l(D(L), { class: "ui-scrollArea-thumb" })]),
					_: 1
				})
			]),
			_: 3
		}));
	}
}), ln = {
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
}, un = { key: 0 }, dn = { key: 1 }, fn = { key: 2 }, pn = { key: 3 }, mn = /* @__PURE__ */ u({
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
		}, n = e, a = S(null), c = S(null), l = S(0), u = S(t.READY), d = 0, f = 0, p = 0, m = [], g = null, x = r(() => u.value === t.READY), C = r(() => u.value === t.PENDING), w = r(() => u.value === t.CHECKING), T = r(() => u.value === t.SUCCESS), E = r(() => u.value === t.ERROR), O = r(() => l.value + (c.value?.offsetWidth ? c.value.offsetWidth - 1 : 0));
		function k(e, t) {
			let n = Date.now();
			n - p > 16 && (m.push([
				e,
				t,
				n
			]), p = n);
		}
		function A() {
			u.value = t.READY, l.value = 0, f = 0, p = 0, m = [], g &&= (clearTimeout(g), null);
		}
		async function j() {
			if (n.request) {
				u.value = t.CHECKING;
				try {
					let e = ln.encrypt(m), r = await n.request(e);
					u.value = t.SUCCESS, g = setTimeout(A, r.ttl * 999);
				} catch {
					u.value = t.ERROR, setTimeout(() => {
						A();
					}, 1e3);
				}
			}
		}
		function M() {
			a.value && c.value && (d = a.value.offsetWidth - c.value.offsetWidth);
		}
		function N(e) {
			x.value && (M(), u.value = t.PENDING, c.value && c.value.setPointerCapture(e.pointerId), f = e.clientX, k(Math.floor(e.clientX), Math.floor(e.clientY)));
		}
		function P(e) {
			if (!C.value) return;
			let t = Math.max(0, Math.min(d, e.clientX - f));
			k(Math.floor(e.clientX), Math.floor(e.clientY)), l.value = t;
		}
		function F(e) {
			if (C.value) {
				if (c.value && c.value.releasePointerCapture(e.pointerId), k(Math.floor(e.clientX), Math.floor(e.clientY)), l.value < d || m.length < 8) {
					A();
					return;
				}
				j();
			}
		}
		return y(() => {
			document.addEventListener("pointermove", P), document.addEventListener("pointerup", F), document.addEventListener("pointercancel", F), M();
		}), v(() => {
			g && clearTimeout(g), document.removeEventListener("pointermove", P), document.removeEventListener("pointerup", F), document.removeEventListener("pointercancel", F);
		}), (t, n) => (b(), o("div", {
			class: h(["SliderCaptcha", `SliderCaptcha-${e.size}`]),
			ref_key: "wrapRef",
			ref: a
		}, [
			s("div", {
				class: h(["SliderCaptcha-Mask", {
					error: E.value,
					success: T.value,
					transition: x.value
				}]),
				style: _({ width: O.value + "px" })
			}, null, 6),
			s("div", { class: h(["SliderCaptcha-Tips", { ready: x.value || C.value }]) }, [w.value ? (b(), o("span", un, "验证中...")) : T.value ? (b(), o("span", dn, "验证成功")) : E.value ? (b(), o("span", fn, "验证失败")) : (b(), o("span", pn, "拖动滑块到最右边"))], 2),
			s("div", {
				ref_key: "btnRef",
				ref: c,
				class: h(["SliderCaptcha-Btn", {
					transition: x.value,
					checking: w.value,
					error: E.value,
					success: T.value
				}]),
				style: _({
					left: l.value + "px",
					"touch-action": "none"
				}),
				onPointerdown: N
			}, [w.value ? (b(), i(D(tt), {
				key: 0,
				size: 16,
				class: "SliderCaptcha_loader"
			})) : T.value ? (b(), i(D(U), {
				key: 1,
				size: 16
			})) : E.value ? (b(), i(D(G), {
				key: 2,
				size: 16
			})) : (b(), i(D(Ye), {
				key: 3,
				size: 16
			}))], 38)
		], 2));
	}
});
//#endregion
export { lt as Alert, zt as Autocomplete, K as Button, ot as Dialog, dt as DropdownMenu, ft as DropdownMenuItem, vt as DropdownMenuSeparator, _t as DropdownMenuShortcut, St as Form, Ot as FormItem, sn as Icon, Pt as Input, Ut as Progress, cn as ScrollArea, Wt as Segmented, Gt as SegmentedItem, Ht as Select, qt as Slider, mn as SliderCaptcha, Jt as Space, Zt as Splitter, an as Tag, rn as Toast, q as buttonVariants, Z as inputVariants, Kt as segmentedVariants, Yt as spaceVariants };
