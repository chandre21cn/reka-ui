import { cva as e } from "class-variance-authority";
import { Comment as t, Fragment as n, computed as r, createBlock as i, createCommentVNode as a, createElementBlock as o, createElementVNode as s, createTextVNode as c, createVNode as l, defineComponent as u, guardReactiveProps as d, h as f, mergeModels as p, mergeProps as m, normalizeClass as h, normalizeProps as g, normalizeStyle as _, onBeforeUnmount as v, onMounted as ee, openBlock as y, reactive as b, ref as x, render as S, renderList as C, renderSlot as w, toDisplayString as T, unref as E, useModel as D, useTemplateRef as O, vModelDynamic as k, vShow as A, watch as j, withCtx as M, withDirectives as N, withModifiers as P } from "vue";
import { AutocompleteAnchor as te, AutocompleteContent as ne, AutocompleteInput as re, AutocompleteItem as ie, AutocompletePortal as ae, AutocompleteRoot as oe, AutocompleteTrigger as se, AutocompleteViewport as ce, DialogContent as le, DialogDescription as ue, DialogOverlay as de, DialogPortal as fe, DialogRoot as pe, DialogTitle as me, DialogTrigger as he, DropdownMenuContent as ge, DropdownMenuItem as _e, DropdownMenuPortal as ve, DropdownMenuRoot as ye, DropdownMenuSeparator as be, DropdownMenuTrigger as xe, Primitive as Se, ProgressIndicator as Ce, ProgressRoot as we, ScrollAreaRoot as Te, ScrollAreaScrollbar as F, ScrollAreaThumb as I, ScrollAreaViewport as Ee, SelectContent as De, SelectItem as Oe, SelectItemIndicator as ke, SelectItemText as Ae, SelectPortal as je, SelectRoot as Me, SelectScrollDownButton as Ne, SelectScrollUpButton as Pe, SelectTrigger as Fe, SelectValue as Ie, SelectViewport as Le, SliderRange as Re, SliderRoot as ze, SliderThumb as Be, SliderTrack as Ve, SplitterGroup as L, SplitterPanel as R, SplitterResizeHandle as He, TabsIndicator as Ue, TabsList as We, TabsRoot as Ge, TabsTrigger as Ke, ToastDescription as qe, ToastProvider as Je, ToastRoot as Ye, ToastViewport as Xe, useForwardPropsEmits as z } from "reka-ui";
import { AlertCircleIcon as Ze, ArrowRight as Qe, Check as $e, CheckCircle2 as et, ChevronDown as B, ChevronUp as tt, Eye as nt, EyeClosed as rt, InfoIcon as it, Loader2 as at, Loader2Icon as ot, X as V, XCircleIcon as st } from "lucide-vue-next";
//#endregion
//#region src/components/Button/Button.vue
var H = /* @__PURE__ */ u({
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
		return (r, s) => (y(), i(E(Se), {
			as: e.as,
			"as-child": e.asChild,
			class: h([E(U)(t), r.$attrs.class]),
			disabled: e.isLoading || r.$attrs.disabled
		}, {
			default: M(() => [e.isLoading ? (y(), i(E(ot), {
				key: 0,
				class: "ui-button_loader"
			})) : a("", !0), !e.isLoading || e.isLoading && !e.loadingText ? w(r.$slots, "default", {}, void 0, void 0, 1) : (y(), o(n, { key: 2 }, [c(T(e.loadingText), 1)], 64))]),
			_: 3
		}, 8, [
			"as",
			"as-child",
			"class",
			"disabled"
		]));
	}
}), U = e("ui-button", {
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
}), ct = { class: "ui-dialog-header" }, lt = {
	key: 0,
	class: "ui-dialog-footer"
}, W = /* @__PURE__ */ u({
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
	setup(e, { expose: t, emit: n }) {
		let u = x(!1), d = e;
		t({
			show() {
				u.value = !0;
			},
			hide() {
				u.value = !1;
			}
		});
		let f = r(() => {
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
		async function g() {
			d.onCancel && typeof d.onCancel == "function" ? await d.onCancel() ? u.value = !1 : u.value = !0 : u.value = !1;
		}
		async function v(e) {
			e.preventDefault(), d.onConfirm && typeof d.onConfirm == "function" ? await d.onConfirm() ? u.value = !1 : u.value = !0 : u.value = !1;
		}
		return (t, n) => (y(), i(E(pe), {
			open: u.value,
			"onUpdate:open": n[0] ||= (e) => u.value = e
		}, {
			default: M(() => [t.$slots.trigger ? (y(), i(E(he), {
				key: 0,
				"as-child": ""
			}, {
				default: M(() => [w(t.$slots, "trigger")]),
				_: 3
			})) : a("", !0), l(E(fe), null, {
				default: M(() => [e.hideOverlay ? a("", !0) : (y(), i(E(de), {
					key: 0,
					class: "ui-dialog-overlay"
				})), l(E(le), {
					class: "ui-dialog-content",
					style: _(f.value),
					onEscapeKeyDown: p,
					onPointerDownOutside: m
				}, {
					default: M(() => [
						s("div", ct, [l(E(me), { class: "ui-dialog-header_title" }, {
							default: M(() => [w(t.$slots, "title", {}, () => [c(T(e.title), 1)])]),
							_: 3
						}), N(l(E(ue), { class: "ui-dialog-header_description" }, {
							default: M(() => [w(t.$slots, "description", {}, () => [c(T(e.description), 1)])]),
							_: 3
						}, 512), [[A, !!e.description]])]),
						w(t.$slots, "default"),
						!e.hideFooter || !t.$slots.footer ? (y(), o("div", lt, [w(t.$slots, "footer", {}, () => [l(E(H), { onClick: g }, {
							default: M(() => [c(T(e.cancelText), 1)]),
							_: 1
						}), l(E(H), {
							variant: "primary",
							onClick: v
						}, {
							default: M(() => [c(T(e.confirmText), 1)]),
							_: 1
						})])])) : a("", !0),
						e.closable ? (y(), o("button", {
							key: 1,
							class: "ui-dialog-close",
							onClick: h
						}, [l(E(V), { size: 16 })])) : a("", !0)
					]),
					_: 3
				}, 8, ["style"])]),
				_: 3
			})]),
			_: 3
		}, 8, ["open"]));
	}
}), G = b({
	type: "info",
	title: "",
	message: "",
	confirmText: "确定",
	cancelText: "取消",
	onConfirm: void 0
}), K = null, q = null;
function ut() {
	return q || (q = document.createElement("div"), q.className = "ui-alert", document.body.appendChild(q)), q;
}
function J(e = "info", t, n, r) {
	let i = ut();
	G.type = e, G.title = t, G.message = n, G.confirmText = r?.confirmText ?? "确定", G.cancelText = r?.cancelText ?? "取消", G.onConfirm = r?.onConfirm;
	let a = l(ft, G);
	S(a, i), K = a.component?.exposed, K?.open();
}
var dt = {
	info(e, t, n) {
		J("info", e, t, n);
	},
	success(e, t, n) {
		J("success", e, t, n);
	},
	warn(e, t, n) {
		J("warn", e, t, n);
	},
	error(e, t, n) {
		J("error", e, t, n);
	}
}, ft = /* @__PURE__ */ u({
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
		}), o = O("dialogRef");
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
		return (e, t) => (y(), i(E(W), {
			ref_key: "dialogRef",
			ref: o,
			width: 360,
			title: n.title,
			description: n.message,
			closable: !1
		}, {
			footer: M(() => [l(E(H), { onClick: s }, {
				default: M(() => [c(T(n.cancelText), 1)]),
				_: 1
			}), l(E(H), {
				variant: "primary",
				status: a.value,
				onClick: u
			}, {
				default: M(() => [c(T(n.confirmText), 1)]),
				_: 1
			}, 8, ["status"])]),
			_: 1
		}, 8, ["title", "description"]));
	}
}), pt = /* @__PURE__ */ u({
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
		let n = z(e, t);
		return (e, t) => (y(), i(E(ye), null, {
			default: M(({ open: t }) => [l(E(xe), { "as-child": "" }, {
				default: M(() => [w(e.$slots, "default", { open: t })]),
				_: 2
			}, 1024), l(E(ve), null, {
				default: M(() => [l(E(ge), m({ class: "ui-listbox-content" }, E(n)), {
					default: M(() => [w(e.$slots, "content")]),
					_: 3
				}, 16)]),
				_: 3
			})]),
			_: 3
		}));
	}
}), mt = /* @__PURE__ */ u({
	__name: "DropdownMenuItem",
	props: {
		disabled: { type: Boolean },
		textValue: {},
		asChild: { type: Boolean },
		as: {}
	},
	emits: ["select"],
	setup(e, { emit: t }) {
		let n = z(e, t);
		return (e, t) => (y(), i(E(_e), m({ class: "ui-listbox-item no-indicator" }, E(n)), {
			default: M(() => [w(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), Y = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, ht = {}, gt = { class: "ui-listbox-shortcut" };
function _t(e, t) {
	return y(), o("span", gt, [w(e.$slots, "default")]);
}
var vt = /*#__PURE__*/ Y(ht, [["render", _t]]), yt = /* @__PURE__ */ u({
	__name: "DropdownMenuSeparator",
	setup(e) {
		return (e, t) => (y(), i(E(be)));
	}
}), bt = {}, xt = { class: "ui-form" };
function St(e, t) {
	return y(), o("div", xt, [w(e.$slots, "default")]);
}
var Ct = /*#__PURE__*/ Y(bt, [["render", St]]), wt = { class: "ui-form-item" }, Tt = {
	key: 0,
	class: "ui-form-item-header"
}, Et = { class: "ui-form-item_title" }, Dt = { class: "ui-form-item_description" }, Ot = { class: "ui-form-item_extra" }, kt = /* @__PURE__ */ u({
	__name: "FormItem",
	props: {
		label: {},
		description: {}
	},
	setup(e) {
		return (t, n) => (y(), o("div", wt, [e.label || e.description || t.$slots.extra ? (y(), o("div", Tt, [
			s("span", Et, T(e.label), 1),
			s("span", Dt, T(e.description), 1),
			s("div", Ot, [w(t.$slots, "extra")])
		])) : a("", !0), w(t.$slots, "default")]));
	}
}), At = {
	key: 0,
	class: "ui-input-prefix"
}, jt = {
	key: 0,
	class: "ui-input-icon"
}, Mt = [
	"placeholder",
	"name",
	"type",
	"disabled"
], Nt = {
	key: 1,
	class: "ui-input-suffix"
}, Pt = ["disabled"], Ft = /* @__PURE__ */ u({
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
		let n = e, c = O("inputRef"), l = x(!1), u = D(e, "modelValue"), d = r(() => n.type === "password" ? l.value ? "text" : "password" : n.type);
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
		return (t, r) => (y(), o("div", {
			class: h([E(X)(n), t.$attrs.class]),
			onPointerdown: p
		}, [
			t.$slots.prefix || t.$slots.icon ? (y(), o("span", At, [t.$slots.icon ? (y(), o("span", jt, [w(t.$slots, "icon")])) : w(t.$slots, "prefix", {}, void 0, void 0, 1)])) : a("", !0),
			N(s("input", {
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
			}, null, 8, Mt), [[k, u.value]]),
			t.$slots.suffix ? (y(), o("span", Nt, [w(t.$slots, "suffix")])) : a("", !0),
			e.type === "password" ? (y(), o("button", {
				key: 2,
				type: "button",
				tabindex: "-1",
				class: "ui-input-button",
				disabled: e.disabled,
				onPointerdown: r[1] ||= P(() => {}, ["prevent"]),
				onMousedown: r[2] ||= P(() => {}, ["prevent"]),
				onClick: P(f, ["stop"])
			}, [l.value ? (y(), i(E(nt), {
				key: 0,
				class: "ui-input-icon"
			})) : (y(), i(E(rt), {
				key: 1,
				class: "ui-input-icon"
			}))], 40, Pt)) : a("", !0)
		], 34));
	}
}), It = {
	key: 0,
	class: "ui-input-prefix"
}, Lt = {
	key: 0,
	class: "ui-input-icon"
}, Rt = { class: "ui-listbox-label" }, zt = ["onClick"], Bt = /* @__PURE__ */ u({
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
		let c = e, u = t, f = z(c, u), p = O("inputRef"), m = r(() => c.options?.map((e) => typeof e == "string" || typeof e == "number" ? {
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
		return (t, r) => (y(), i(E(oe), g(d(E(f))), {
			default: M(() => [l(E(te), {
				class: h([E(X)(c), t.$attrs.class]),
				onPointerdown: _
			}, {
				default: M(() => [
					t.$slots.prefix || t.$slots.icon ? (y(), o("span", It, [t.$slots.icon ? (y(), o("span", Lt, [w(t.$slots, "icon")])) : w(t.$slots, "prefix", {}, void 0, void 0, 1)])) : a("", !0),
					l(E(re), {
						ref_key: "inputRef",
						ref: p,
						name: e.name,
						placeholder: e.placeholder,
						type: "text",
						class: "ui-input-native"
					}, null, 8, ["name", "placeholder"]),
					l(E(se), { class: "ui-input-button" }, {
						default: M(() => [l(E(B), { class: "ui-input-icon" })]),
						_: 1
					})
				]),
				_: 3
			}, 8, ["class"]), l(E(ae), null, {
				default: M(() => [l(E(ne), {
					position: "popper",
					"side-offset": 4,
					align: "start",
					class: "ui-listbox-content"
				}, {
					default: M(() => [l(E(ce), { class: "ui-listbox-viewport" }, {
						default: M(() => [(y(!0), o(n, null, C(m.value, (e) => (y(), i(E(ie), {
							class: "ui-listbox-item no-indicator",
							value: e.value
						}, {
							default: M(() => [s("span", Rt, T(e.label), 1), s("button", {
								class: "ui-listbox-right-button",
								onClick: P((t) => v(e), ["stop"])
							}, " 删除 ", 8, zt)]),
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
}), Vt = {
	key: 0,
	class: "ui-input-prefix"
}, Ht = { class: "ui-input-button" }, Ut = /* @__PURE__ */ u({
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
	setup(e, { emit: t }) {
		let u = e, f = z(u, t), p = r(() => u.data.map((e) => typeof e == "string" || typeof e == "number" ? {
			value: e,
			label: String(e)
		} : e));
		return (e, t) => (y(), i(E(Me), g(d(E(f))), {
			default: M(() => [l(E(Fe), {
				class: h([
					"ui-select",
					E(X)(u),
					e.$attrs.class
				]),
				style: _(e.$attrs.style)
			}, {
				default: M(() => [
					e.$slots.prefix ? (y(), o("span", Vt, [w(e.$slots, "prefix")])) : a("", !0),
					l(E(Ie), {
						placeholder: u.placeholder,
						class: "ui-input-native"
					}, null, 8, ["placeholder"]),
					s("span", Ht, [w(e.$slots, "suffix", {}, () => [l(E(B), {
						size: 14,
						class: "ui-input-icon"
					})])])
				]),
				_: 3
			}, 8, ["class", "style"]), l(E(je), null, {
				default: M(() => [l(E(De), {
					position: "item-aligned",
					class: "ui-listbox-content"
				}, {
					default: M(() => [
						l(E(Pe), { class: "ui-listbox-scroll-button" }, {
							default: M(() => [l(E(tt), { size: 14 })]),
							_: 1
						}),
						l(E(Le), null, {
							default: M(() => [(y(!0), o(n, null, C(p.value, (e) => (y(), i(E(Oe), {
								class: "ui-listbox-item",
								value: e.value
							}, {
								default: M(() => [l(E(ke), { class: "ui-listbox-indicator" }, {
									default: M(() => [l(E($e), { size: 14 })]),
									_: 1
								}), l(E(Ae), { class: "ui-listbox-label" }, {
									default: M(() => [c(T(e.label ?? e.value), 1)]),
									_: 2
								}, 1024)]),
								_: 2
							}, 1032, ["value"]))), 256))]),
							_: 1
						}),
						l(E(Ne), { class: "ui-listbox-scroll-button" }, {
							default: M(() => [l(E(B), { size: 14 })]),
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
}), X = e("ui-input", {
	variants: { size: {
		base: "ui-input-base",
		small: "ui-input-small",
		medium: "ui-input-medium",
		large: "ui-input-large"
	} },
	defaultVariants: { size: "base" }
}), Wt = /* @__PURE__ */ u({
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
		let n = e, a = z(n, t), o = O("progressRef"), s = r(() => o.value?.getValueLabel ? o.value.getValueLabel(n.modelValue, n.max ?? 100) : 0);
		return (e, t) => (y(), i(E(we), m({
			class: "ui-progress",
			ref_key: "progressRef",
			ref: o
		}, E(a)), {
			default: M(() => [l(E(Ce), {
				class: "ui-progress-indicator",
				style: _({ width: s.value })
			}, null, 8, ["style"])]),
			_: 1
		}, 16));
	}
}), Gt = /* @__PURE__ */ u({
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
		let n = e, r = z(n, t);
		return (e, t) => (y(), i(E(Ge), m({ class: [E(Z)(n), e.$attrs.class] }, E(r)), {
			default: M(() => [l(E(We), null, {
				default: M(() => [l(E(Ue), { class: "ui-segmented-indicator" }), w(e.$slots, "default")]),
				_: 3
			})]),
			_: 3
		}, 16, ["class"]));
	}
}), Kt = /* @__PURE__ */ u({
	__name: "SegmentedItem",
	props: {
		label: {},
		value: {},
		disabled: { type: Boolean },
		asChild: { type: Boolean },
		as: {}
	},
	setup(e) {
		let t = z(e);
		return (n, r) => (y(), i(E(Ke), m(E(t), { class: "ui-segmented-item" }), {
			default: M(() => [c(T(e.label), 1)]),
			_: 1
		}, 16));
	}
}), Z = e("ui-segmented", {
	variants: { size: {
		base: "",
		small: "ui-segmented_small",
		medium: "ui-segmented_medium",
		large: "ui-segmented_large"
	} },
	defaultVariants: { size: "base" }
}), qt = /* @__PURE__ */ u({
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
	setup(e, { emit: t }) {
		let r = z(e, t);
		return (t, a) => (y(), i(E(ze), m({ class: "ui-slider" }, E(r)), {
			default: M(() => [l(E(Ve), { class: "ui-slider_track" }, {
				default: M(() => [l(E(Re), { class: "ui-slider_range" })]),
				_: 1
			}), (y(!0), o(n, null, C(e.modelValue, (e, t) => (y(), i(E(Be), {
				key: t,
				class: "ui-slider_thumb"
			}))), 128))]),
			_: 1
		}, 16));
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
	variants: { direction: {
		horizontal: "ui-space-horizontal",
		vertical: "ui-space-vertical"
	} },
	defaultVariants: { direction: "horizontal" }
}), Xt = /* @__PURE__ */ u({
	__name: "Splitter",
	setup(e) {
		return (e, t) => (y(), i(E(L), { direction: "horizontal" }, {
			default: M(() => [
				l(E(R), { class: "ui-splitter-panel" }, {
					default: M(() => [w(e.$slots, "default")]),
					_: 3
				}),
				l(E(He), { class: "ui-splitter-handle" }),
				l(E(R), null, {
					default: M(() => [l(E(L), { direction: "vertical" }, {
						default: M(() => [
							l(E(R), { class: "ui-splitter-panel" }, {
								default: M(() => [w(e.$slots, "top")]),
								_: 3
							}),
							l(E(He), { class: "ui-splitter-handle" }),
							l(E(R), { class: "ui-splitter-panel" }, {
								default: M(() => [w(e.$slots, "bottom")]),
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
}), Zt = /* @__PURE__ */ u({
	__name: "Toast",
	props: {
		message: { default: "" },
		type: { default: "info" },
		duration: { default: 3e3 },
		onDestroy: {}
	},
	setup(e) {
		let t = e, n = x(!1);
		return ee(() => {
			n.value = !0;
		}), j(n, (e) => {
			!e && t.onDestroy && setTimeout(() => {
				t.onDestroy?.();
			}, 200);
		}), (r, o) => (y(), i(E(Ye), {
			open: n.value,
			"onUpdate:open": o[0] ||= (e) => n.value = e,
			duration: t.duration,
			class: "ui-toast-root"
		}, {
			default: M(() => [e.type === "success" ? (y(), i(E(et), {
				key: 0,
				class: h(["ui-toast-icon", e.type])
			}, null, 8, ["class"])) : e.type === "error" ? (y(), i(E(st), {
				key: 1,
				class: h(["ui-toast-icon", e.type])
			}, null, 8, ["class"])) : e.type === "warning" ? (y(), i(E(Ze), {
				key: 2,
				class: h(["ui-toast-icon", e.type])
			}, null, 8, ["class"])) : (y(), i(E(it), {
				key: 3,
				class: h(["ui-toast-icon", e.type])
			}, null, 8, ["class"])), t.message ? (y(), i(E(qe), {
				key: 4,
				class: "ui-toast-message"
			}, {
				default: M(() => [c(T(t.message), 1)]),
				_: 1
			})) : a("", !0)]),
			_: 1
		}, 8, ["open", "duration"]));
	}
}), Q = x([]), Qt = !1, $t = u({
	name: "GlobalToastContainer",
	setup() {
		return () => f(Je, { swipeDirection: "up" }, () => [Q.value.map((e) => f(Zt, {
			key: e.id,
			...e,
			onDestroy: () => {
				Q.value = Q.value.filter((t) => t.id !== e.id);
			}
		})), f(Xe, { class: "ui-toast-viewport" })]);
	}
}), en = () => {
	if (!Qt) {
		let e = document.createElement("div");
		e.id = "ui-toast-global-container", document.body.appendChild(e), S(f($t), e), Qt = !0;
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
}, rn = /* @__PURE__ */ u({
	__name: "Tag",
	props: { type: { default: "default" } },
	setup(e) {
		return (t, n) => (y(), o("span", { class: h(["ui-tag", `ui-tag_${e.type}`]) }, [w(t.$slots, "default")], 2));
	}
}), an = ["href", "fill"], on = /* @__PURE__ */ u({
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
		return (t, r) => (y(), o("svg", {
			"aria-hidden": "true",
			style: _(n.value)
		}, [s("use", {
			href: i.value,
			fill: e.color
		}, null, 8, an)], 4));
	}
}), sn = /* @__PURE__ */ u({
	__name: "ScrollArea",
	setup(e) {
		return (e, t) => (y(), i(E(Te), { class: "ui-scrollArea" }, {
			default: M(() => [
				l(E(Ee), { class: "ui-scrollArea-viewport" }, {
					default: M(() => [w(e.$slots, "default")]),
					_: 3
				}),
				l(E(F), {
					class: "ui-scrollArea-bar",
					orientation: "vertical"
				}, {
					default: M(() => [l(E(I), { class: "ui-scrollArea-thumb" })]),
					_: 1
				}),
				l(E(F), {
					class: "ui-scrollArea-bar",
					orientation: "horizontal"
				}, {
					default: M(() => [l(E(I), { class: "ui-scrollArea-thumb" })]),
					_: 1
				})
			]),
			_: 3
		}));
	}
}), cn = {
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
}, ln = { key: 0 }, un = { key: 1 }, dn = { key: 2 }, fn = { key: 3 }, pn = /* @__PURE__ */ u({
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
		}, n = e, a = x(null), c = x(null), l = x(0), u = x(t.READY), d = 0, f = 0, p = 0, m = [], g = null, b = r(() => u.value === t.READY), S = r(() => u.value === t.PENDING), C = r(() => u.value === t.CHECKING), w = r(() => u.value === t.SUCCESS), T = r(() => u.value === t.ERROR), D = r(() => l.value + (c.value?.offsetWidth ? c.value.offsetWidth - 1 : 0));
		function O(e, t) {
			let n = Date.now();
			n - p > 16 && (m.push([
				e,
				t,
				n
			]), p = n);
		}
		function k() {
			u.value = t.READY, l.value = 0, f = 0, p = 0, m = [], g &&= (clearTimeout(g), null);
		}
		async function A() {
			if (n.request) {
				u.value = t.CHECKING;
				try {
					let e = cn.encrypt(m), r = await n.request(e);
					u.value = t.SUCCESS, g = setTimeout(k, r.ttl * 999);
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
			b.value && (j(), u.value = t.PENDING, c.value && c.value.setPointerCapture(e.pointerId), f = e.clientX, O(Math.floor(e.clientX), Math.floor(e.clientY)));
		}
		function N(e) {
			if (!S.value) return;
			let t = Math.max(0, Math.min(d, e.clientX - f));
			O(Math.floor(e.clientX), Math.floor(e.clientY)), l.value = t;
		}
		function P(e) {
			if (S.value) {
				if (c.value && c.value.releasePointerCapture(e.pointerId), O(Math.floor(e.clientX), Math.floor(e.clientY)), l.value < d || m.length < 8) {
					k();
					return;
				}
				A();
			}
		}
		return ee(() => {
			document.addEventListener("pointermove", N), document.addEventListener("pointerup", P), document.addEventListener("pointercancel", P), j();
		}), v(() => {
			g && clearTimeout(g), document.removeEventListener("pointermove", N), document.removeEventListener("pointerup", P), document.removeEventListener("pointercancel", P);
		}), (t, n) => (y(), o("div", {
			class: h(["SliderCaptcha", `SliderCaptcha-${e.size}`]),
			ref_key: "wrapRef",
			ref: a
		}, [
			s("div", {
				class: h(["SliderCaptcha-Mask", {
					error: T.value,
					success: w.value,
					transition: b.value
				}]),
				style: _({ width: D.value + "px" })
			}, null, 6),
			s("div", { class: h(["SliderCaptcha-Tips", { ready: b.value || S.value }]) }, [C.value ? (y(), o("span", ln, "验证中...")) : w.value ? (y(), o("span", un, "验证成功")) : T.value ? (y(), o("span", dn, "验证失败")) : (y(), o("span", fn, "拖动滑块到最右边"))], 2),
			s("div", {
				ref_key: "btnRef",
				ref: c,
				class: h(["SliderCaptcha-Btn", {
					transition: b.value,
					checking: C.value,
					error: T.value,
					success: w.value
				}]),
				style: _({
					left: l.value + "px",
					"touch-action": "none"
				}),
				onPointerdown: M
			}, [C.value ? (y(), i(E(at), {
				key: 0,
				size: 16,
				class: "SliderCaptcha_loader"
			})) : w.value ? (y(), i(E($e), {
				key: 1,
				size: 16
			})) : T.value ? (y(), i(E(V), {
				key: 2,
				size: 16
			})) : (y(), i(E(Qe), {
				key: 3,
				size: 16
			}))], 38)
		], 2));
	}
});
//#endregion
export { dt as Alert, Bt as Autocomplete, H as Button, W as Dialog, pt as DropdownMenu, mt as DropdownMenuItem, yt as DropdownMenuSeparator, vt as DropdownMenuShortcut, Ct as Form, kt as FormItem, on as Icon, Ft as Input, Wt as Progress, sn as ScrollArea, Gt as Segmented, Kt as SegmentedItem, Ut as Select, qt as Slider, pn as SliderCaptcha, Jt as Space, Xt as Splitter, rn as Tag, nn as Toast, U as buttonVariants, X as inputVariants, Z as segmentedVariants, Yt as spaceVariants };
