import { cva as e } from "class-variance-authority";
import { Comment as t, Fragment as n, computed as r, createBlock as i, createCommentVNode as a, createElementBlock as o, createElementVNode as s, createTextVNode as c, createVNode as l, defineComponent as u, guardReactiveProps as d, h as f, mergeModels as p, mergeProps as m, normalizeClass as h, normalizeProps as g, normalizeStyle as _, onBeforeUnmount as v, onMounted as y, openBlock as b, reactive as x, ref as S, render as C, renderList as w, renderSlot as T, toDisplayString as E, unref as D, useModel as ee, useSlots as O, useTemplateRef as k, vModelDynamic as A, vShow as j, watch as te, withCtx as M, withDirectives as N, withModifiers as P } from "vue";
import { AutocompleteAnchor as ne, AutocompleteContent as re, AutocompleteInput as ie, AutocompleteItem as ae, AutocompletePortal as oe, AutocompleteRoot as se, AutocompleteTrigger as ce, AutocompleteViewport as le, DialogContent as ue, DialogDescription as de, DialogOverlay as fe, DialogPortal as pe, DialogRoot as me, DialogTitle as he, DialogTrigger as ge, DropdownMenuContent as _e, DropdownMenuItem as ve, DropdownMenuPortal as ye, DropdownMenuRoot as be, DropdownMenuSeparator as xe, DropdownMenuTrigger as Se, Primitive as Ce, ProgressIndicator as we, ProgressRoot as Te, ScrollAreaRoot as Ee, ScrollAreaScrollbar as F, ScrollAreaThumb as I, ScrollAreaViewport as De, SelectContent as Oe, SelectItem as ke, SelectItemIndicator as Ae, SelectItemText as je, SelectPortal as Me, SelectRoot as Ne, SelectScrollDownButton as Pe, SelectScrollUpButton as Fe, SelectTrigger as Ie, SelectValue as Le, SelectViewport as Re, SliderRange as ze, SliderRoot as Be, SliderThumb as Ve, SliderTrack as He, SplitterGroup as L, SplitterPanel as R, SplitterResizeHandle as z, TabsIndicator as Ue, TabsList as We, TabsRoot as Ge, TabsTrigger as Ke, ToastDescription as qe, ToastProvider as Je, ToastRoot as Ye, ToastViewport as Xe, useForwardPropsEmits as B } from "reka-ui";
import { AlertCircleIcon as Ze, ArrowRight as Qe, Check as V, CheckCircle2 as $e, ChevronDown as H, ChevronUp as et, Eye as tt, EyeClosed as nt, InfoIcon as rt, Loader2 as it, Loader2Icon as at, X as U, XCircleIcon as ot } from "lucide-vue-next";
//#endregion
//#region src/components/Button/Button.vue
var W = /* @__PURE__ */ u({
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
		return (r, s) => (b(), i(D(Ce), {
			as: e.as,
			"as-child": e.asChild,
			class: h([D(G)(t), r.$attrs.class]),
			disabled: e.isLoading || r.$attrs.disabled
		}, {
			default: M(() => [e.isLoading ? (b(), i(D(at), {
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
}), G = e("ui-button", {
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
}), st = { class: "ui-dialog-header" }, ct = {
	key: 0,
	class: "ui-dialog-footer"
}, K = /* @__PURE__ */ u({
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
		let u = S(!1), d = e;
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
		return (t, n) => (b(), i(D(me), {
			open: u.value,
			"onUpdate:open": n[0] ||= (e) => u.value = e
		}, {
			default: M(() => [t.$slots.trigger ? (b(), i(D(ge), {
				key: 0,
				"as-child": ""
			}, {
				default: M(() => [T(t.$slots, "trigger")]),
				_: 3
			})) : a("", !0), l(D(pe), null, {
				default: M(() => [e.hideOverlay ? a("", !0) : (b(), i(D(fe), {
					key: 0,
					class: "ui-dialog-overlay"
				})), l(D(ue), {
					class: "ui-dialog-content",
					style: _(f.value),
					onEscapeKeyDown: p,
					onPointerDownOutside: m
				}, {
					default: M(() => [
						s("div", st, [l(D(he), { class: "ui-dialog-header_title" }, {
							default: M(() => [T(t.$slots, "title", {}, () => [c(E(e.title), 1)])]),
							_: 3
						}), N(l(D(de), { class: "ui-dialog-header_description" }, {
							default: M(() => [T(t.$slots, "description", {}, () => [c(E(e.description), 1)])]),
							_: 3
						}, 512), [[j, !!e.description]])]),
						T(t.$slots, "default"),
						!e.hideFooter || !t.$slots.footer ? (b(), o("div", ct, [T(t.$slots, "footer", {}, () => [l(D(W), { onClick: g }, {
							default: M(() => [c(E(e.cancelText), 1)]),
							_: 1
						}), l(D(W), {
							variant: "primary",
							onClick: v
						}, {
							default: M(() => [c(E(e.confirmText), 1)]),
							_: 1
						})])])) : a("", !0),
						e.closable ? (b(), o("button", {
							key: 1,
							class: "ui-dialog-close",
							onClick: h
						}, [l(D(U), { size: 16 })])) : a("", !0)
					]),
					_: 3
				}, 8, ["style"])]),
				_: 3
			})]),
			_: 3
		}, 8, ["open"]));
	}
}), q = x({
	type: "info",
	title: "",
	message: "",
	confirmText: "确定",
	cancelText: "取消",
	onConfirm: void 0
}), J = null, Y = null;
function lt() {
	return Y || (Y = document.createElement("div"), Y.className = "ui-alert", document.body.appendChild(Y)), Y;
}
function X(e = "info", t, n, r) {
	let i = lt();
	q.type = e, q.title = t, q.message = n, q.confirmText = r?.confirmText ?? "确定", q.cancelText = r?.cancelText ?? "取消", q.onConfirm = r?.onConfirm;
	let a = l(dt, q);
	C(a, i), J = a.component?.exposed, J?.open();
}
var ut = {
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
}, dt = /* @__PURE__ */ u({
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
		return (e, t) => (b(), i(D(K), {
			ref_key: "dialogRef",
			ref: o,
			width: 360,
			title: n.title,
			description: n.message,
			closable: !1
		}, {
			footer: M(() => [l(D(W), { onClick: s }, {
				default: M(() => [c(E(n.cancelText), 1)]),
				_: 1
			}), l(D(W), {
				variant: "primary",
				status: a.value,
				onClick: u
			}, {
				default: M(() => [c(E(n.confirmText), 1)]),
				_: 1
			}, 8, ["status"])]),
			_: 1
		}, 8, ["title", "description"]));
	}
}), ft = /* @__PURE__ */ u({
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
		let n = B(e, t);
		return (e, t) => (b(), i(D(be), null, {
			default: M(({ open: t }) => [l(D(Se), { "as-child": "" }, {
				default: M(() => [T(e.$slots, "default", { open: t })]),
				_: 2
			}, 1024), l(D(ye), null, {
				default: M(() => [l(D(_e), m({ class: "ui-listbox-content" }, D(n)), {
					default: M(() => [T(e.$slots, "content")]),
					_: 3
				}, 16)]),
				_: 3
			})]),
			_: 3
		}));
	}
}), pt = /* @__PURE__ */ u({
	__name: "DropdownMenuItem",
	props: {
		disabled: { type: Boolean },
		textValue: {},
		asChild: { type: Boolean },
		as: {}
	},
	emits: ["select"],
	setup(e, { emit: t }) {
		let n = B(e, t);
		return (e, t) => (b(), i(D(ve), m({ class: "ui-listbox-item no-indicator" }, D(n)), {
			default: M(() => [T(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), mt = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, ht = {}, gt = { class: "ui-listbox-shortcut" };
function _t(e, t) {
	return b(), o("span", gt, [T(e.$slots, "default")]);
}
var vt = /*#__PURE__*/ mt(ht, [["render", _t]]), yt = /* @__PURE__ */ u({
	__name: "DropdownMenuSeparator",
	setup(e) {
		return (e, t) => (b(), i(D(xe)));
	}
}), bt = {}, xt = { class: "ui-form" };
function St(e, t) {
	return b(), o("div", xt, [T(e.$slots, "default")]);
}
var Ct = /*#__PURE__*/ mt(bt, [["render", St]]), wt = { class: "ui-form-item" }, Tt = {
	key: 0,
	class: "ui-form-item-header"
}, Et = { class: "ui-form-item_title" }, Dt = { class: "ui-form-item_description" }, Ot = { class: "ui-form-item_extra" }, kt = /* @__PURE__ */ u({
	__name: "FormItem",
	props: {
		label: {},
		description: {}
	},
	setup(e) {
		return (t, n) => (b(), o("div", wt, [e.label || e.description || t.$slots.extra ? (b(), o("div", Tt, [
			s("span", Et, E(e.label), 1),
			s("span", Dt, E(e.description), 1),
			s("div", Ot, [T(t.$slots, "extra")])
		])) : a("", !0), T(t.$slots, "default")]));
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
		let n = e, c = k("inputRef"), l = S(!1), u = ee(e, "modelValue"), d = r(() => n.type === "password" ? l.value ? "text" : "password" : n.type);
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
			t.$slots.prefix || t.$slots.icon ? (b(), o("span", At, [t.$slots.icon ? (b(), o("span", jt, [T(t.$slots, "icon")])) : T(t.$slots, "prefix", {}, void 0, void 0, 1)])) : a("", !0),
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
			}, null, 8, Mt), [[A, u.value]]),
			t.$slots.suffix ? (b(), o("span", Nt, [T(t.$slots, "suffix")])) : a("", !0),
			e.type === "password" ? (b(), o("button", {
				key: 2,
				type: "button",
				tabindex: "-1",
				class: "ui-input-button",
				disabled: e.disabled,
				onPointerdown: r[1] ||= P(() => {}, ["prevent"]),
				onMousedown: r[2] ||= P(() => {}, ["prevent"]),
				onClick: P(f, ["stop"])
			}, [l.value ? (b(), i(D(tt), {
				key: 0,
				class: "ui-input-icon"
			})) : (b(), i(D(nt), {
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
		let c = e, u = t, f = B(c, u), p = k("inputRef"), m = r(() => c.options?.map((e) => typeof e == "string" || typeof e == "number" ? {
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
		return (t, r) => (b(), i(D(se), g(d(D(f))), {
			default: M(() => [l(D(ne), {
				class: h([D(Z)(c), t.$attrs.class]),
				onPointerdown: _
			}, {
				default: M(() => [
					t.$slots.prefix || t.$slots.icon ? (b(), o("span", It, [t.$slots.icon ? (b(), o("span", Lt, [T(t.$slots, "icon")])) : T(t.$slots, "prefix", {}, void 0, void 0, 1)])) : a("", !0),
					l(D(ie), {
						ref_key: "inputRef",
						ref: p,
						name: e.name,
						placeholder: e.placeholder,
						type: "text",
						class: "ui-input-native"
					}, null, 8, ["name", "placeholder"]),
					l(D(ce), { class: "ui-input-button" }, {
						default: M(() => [l(D(H), { class: "ui-input-icon" })]),
						_: 1
					})
				]),
				_: 3
			}, 8, ["class"]), l(D(oe), null, {
				default: M(() => [l(D(re), {
					position: "popper",
					"side-offset": 4,
					align: "start",
					class: "ui-listbox-content"
				}, {
					default: M(() => [l(D(le), { class: "ui-listbox-viewport" }, {
						default: M(() => [(b(!0), o(n, null, w(m.value, (e) => (b(), i(D(ae), {
							class: "ui-listbox-item no-indicator",
							value: e.value
						}, {
							default: M(() => [s("span", Rt, E(e.label), 1), s("button", {
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
		let u = e, f = B(u, t), p = r(() => u.data.map((e) => typeof e == "string" || typeof e == "number" ? {
			value: e,
			label: String(e)
		} : e));
		return (e, t) => (b(), i(D(Ne), g(d(D(f))), {
			default: M(() => [l(D(Ie), {
				class: h([
					"ui-select",
					D(Z)(u),
					e.$attrs.class
				]),
				style: _(e.$attrs.style)
			}, {
				default: M(() => [
					e.$slots.prefix ? (b(), o("span", Vt, [T(e.$slots, "prefix")])) : a("", !0),
					l(D(Le), {
						placeholder: u.placeholder,
						class: "ui-input-native"
					}, null, 8, ["placeholder"]),
					s("span", Ht, [T(e.$slots, "suffix", {}, () => [l(D(H), {
						size: 14,
						class: "ui-input-icon"
					})])])
				]),
				_: 3
			}, 8, ["class", "style"]), l(D(Me), null, {
				default: M(() => [l(D(Oe), {
					position: "item-aligned",
					class: "ui-listbox-content"
				}, {
					default: M(() => [
						l(D(Fe), { class: "ui-listbox-scroll-button" }, {
							default: M(() => [l(D(et), { size: 14 })]),
							_: 1
						}),
						l(D(Re), null, {
							default: M(() => [(b(!0), o(n, null, w(p.value, (e) => (b(), i(D(ke), {
								class: "ui-listbox-item",
								value: e.value
							}, {
								default: M(() => [l(D(Ae), { class: "ui-listbox-indicator" }, {
									default: M(() => [l(D(V), { size: 14 })]),
									_: 1
								}), l(D(je), { class: "ui-listbox-label" }, {
									default: M(() => [c(E(e.label ?? e.value), 1)]),
									_: 2
								}, 1024)]),
								_: 2
							}, 1032, ["value"]))), 256))]),
							_: 1
						}),
						l(D(Pe), { class: "ui-listbox-scroll-button" }, {
							default: M(() => [l(D(H), { size: 14 })]),
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
		let n = e, a = B(n, t), o = k("progressRef"), s = r(() => o.value?.getValueLabel ? o.value.getValueLabel(n.modelValue, n.max ?? 100) : 0);
		return (e, t) => (b(), i(D(Te), m({
			class: "ui-progress",
			ref_key: "progressRef",
			ref: o
		}, D(a)), {
			default: M(() => [l(D(we), {
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
		let n = e, r = B(n, t);
		return (e, t) => (b(), i(D(Ge), m({ class: [D(qt)(n), e.$attrs.class] }, D(r)), {
			default: M(() => [l(D(We), null, {
				default: M(() => [l(D(Ue), { class: "ui-segmented-indicator" }), T(e.$slots, "default")]),
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
		let t = B(e);
		return (n, r) => (b(), i(D(Ke), m(D(t), { class: "ui-segmented-item" }), {
			default: M(() => [c(E(e.label), 1)]),
			_: 1
		}, 16));
	}
}), qt = e("ui-segmented", {
	variants: { size: {
		base: "",
		small: "ui-segmented_small",
		medium: "ui-segmented_medium",
		large: "ui-segmented_large"
	} },
	defaultVariants: { size: "base" }
}), Jt = /* @__PURE__ */ u({
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
		let r = B(e, t);
		return (t, a) => (b(), i(D(Be), m({ class: "ui-slider" }, D(r)), {
			default: M(() => [l(D(He), { class: "ui-slider_track" }, {
				default: M(() => [l(D(ze), { class: "ui-slider_range" })]),
				_: 1
			}), (b(!0), o(n, null, w(e.modelValue, (e, t) => (b(), i(D(Ve), {
				key: t,
				class: "ui-slider_thumb"
			}))), 128))]),
			_: 1
		}, 16));
	}
}), Yt = /* @__PURE__ */ u({
	__name: "Space",
	props: {
		size: { default: 8 },
		direction: { default: "horizontal" }
	},
	setup(e) {
		let r = e, a = O(), o = (e) => {
			let r = [];
			return e.forEach((e) => {
				e.type !== t && (e.type === n && Array.isArray(e.children) ? r.push(...o(e.children)) : r.push(e));
			}), r;
		}, s = () => {
			let e = a.default ? a.default() : [], t = o(e).map((e, t) => f("div", {
				class: "ui-space-item",
				key: e.key ?? t
			}, [e]));
			return f("div", {
				class: [Xt(r)],
				style: { gap: `${r.size}px` }
			}, t);
		};
		return (e, t) => (b(), i(s));
	}
}), Xt = e("ui-space", {
	variants: { direction: {
		horizontal: "ui-space-horizontal",
		vertical: "ui-space-vertical"
	} },
	defaultVariants: { direction: "horizontal" }
}), Zt = /* @__PURE__ */ u({
	__name: "Splitter",
	setup(e) {
		return (e, t) => (b(), i(D(L), { direction: "horizontal" }, {
			default: M(() => [
				l(D(R), { class: "ui-splitter-panel" }, {
					default: M(() => [T(e.$slots, "default")]),
					_: 3
				}),
				l(D(z), { class: "ui-splitter-handle" }),
				l(D(R), null, {
					default: M(() => [l(D(L), { direction: "vertical" }, {
						default: M(() => [
							l(D(R), { class: "ui-splitter-panel" }, {
								default: M(() => [T(e.$slots, "top")]),
								_: 3
							}),
							l(D(z), { class: "ui-splitter-handle" }),
							l(D(R), { class: "ui-splitter-panel" }, {
								default: M(() => [T(e.$slots, "bottom")]),
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
		}), te(n, (e) => {
			!e && t.onDestroy && setTimeout(() => {
				t.onDestroy?.();
			}, 200);
		}), (r, o) => (b(), i(D(Ye), {
			open: n.value,
			"onUpdate:open": o[0] ||= (e) => n.value = e,
			duration: t.duration,
			class: "ui-toast-root"
		}, {
			default: M(() => [e.type === "success" ? (b(), i(D($e), {
				key: 0,
				class: h(["ui-toast-icon", e.type])
			}, null, 8, ["class"])) : e.type === "error" ? (b(), i(D(ot), {
				key: 1,
				class: h(["ui-toast-icon", e.type])
			}, null, 8, ["class"])) : e.type === "warning" ? (b(), i(D(Ze), {
				key: 2,
				class: h(["ui-toast-icon", e.type])
			}, null, 8, ["class"])) : (b(), i(D(rt), {
				key: 3,
				class: h(["ui-toast-icon", e.type])
			}, null, 8, ["class"])), t.message ? (b(), i(D(qe), {
				key: 4,
				class: "ui-toast-message"
			}, {
				default: M(() => [c(E(t.message), 1)]),
				_: 1
			})) : a("", !0)]),
			_: 1
		}, 8, ["open", "duration"]));
	}
}), Q = S([]), $t = !1, en = u({
	name: "GlobalToastContainer",
	setup() {
		return () => f(Je, { swipeDirection: "up" }, () => [Q.value.map((e) => f(Qt, {
			key: e.id,
			...e,
			onDestroy: () => {
				Q.value = Q.value.filter((t) => t.id !== e.id);
			}
		})), f(Xe, { class: "ui-toast-viewport" })]);
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
		return (e, t) => (b(), i(D(Ee), { class: "ui-scrollArea" }, {
			default: M(() => [
				l(D(De), { class: "ui-scrollArea-viewport" }, {
					default: M(() => [T(e.$slots, "default")]),
					_: 3
				}),
				l(D(F), {
					class: "ui-scrollArea-bar",
					orientation: "vertical"
				}, {
					default: M(() => [l(D(I), { class: "ui-scrollArea-thumb" })]),
					_: 1
				}),
				l(D(F), {
					class: "ui-scrollArea-bar",
					orientation: "horizontal"
				}, {
					default: M(() => [l(D(I), { class: "ui-scrollArea-thumb" })]),
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
		}, n = e, a = S(null), c = S(null), l = S(0), u = S(t.READY), d = 0, f = 0, p = 0, m = [], g = null, x = r(() => u.value === t.READY), C = r(() => u.value === t.PENDING), w = r(() => u.value === t.CHECKING), T = r(() => u.value === t.SUCCESS), E = r(() => u.value === t.ERROR), ee = r(() => l.value + (c.value?.offsetWidth ? c.value.offsetWidth - 1 : 0));
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
					let e = ln.encrypt(m), r = await n.request(e);
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
		function te(e) {
			x.value && (j(), u.value = t.PENDING, c.value && c.value.setPointerCapture(e.pointerId), f = e.clientX, O(Math.floor(e.clientX), Math.floor(e.clientY)));
		}
		function M(e) {
			if (!C.value) return;
			let t = Math.max(0, Math.min(d, e.clientX - f));
			O(Math.floor(e.clientX), Math.floor(e.clientY)), l.value = t;
		}
		function N(e) {
			if (C.value) {
				if (c.value && c.value.releasePointerCapture(e.pointerId), O(Math.floor(e.clientX), Math.floor(e.clientY)), l.value < d || m.length < 8) {
					k();
					return;
				}
				A();
			}
		}
		return y(() => {
			document.addEventListener("pointermove", M), document.addEventListener("pointerup", N), document.addEventListener("pointercancel", N), j();
		}), v(() => {
			g && clearTimeout(g), document.removeEventListener("pointermove", M), document.removeEventListener("pointerup", N), document.removeEventListener("pointercancel", N);
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
				style: _({ width: ee.value + "px" })
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
				onPointerdown: te
			}, [w.value ? (b(), i(D(it), {
				key: 0,
				size: 16,
				class: "SliderCaptcha_loader"
			})) : T.value ? (b(), i(D(V), {
				key: 1,
				size: 16
			})) : E.value ? (b(), i(D(U), {
				key: 2,
				size: 16
			})) : (b(), i(D(Qe), {
				key: 3,
				size: 16
			}))], 38)
		], 2));
	}
});
//#endregion
export { ut as Alert, Bt as Autocomplete, W as Button, K as Dialog, ft as DropdownMenu, pt as DropdownMenuItem, yt as DropdownMenuSeparator, vt as DropdownMenuShortcut, Ct as Form, kt as FormItem, sn as Icon, Ft as Input, Wt as Progress, cn as ScrollArea, Gt as Segmented, Kt as SegmentedItem, Ut as Select, Jt as Slider, mn as SliderCaptcha, Yt as Space, Zt as Splitter, an as Tag, rn as Toast, G as buttonVariants, Z as inputVariants, qt as segmentedVariants, Xt as spaceVariants };
