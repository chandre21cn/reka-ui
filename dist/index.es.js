import { cva as e } from "class-variance-authority";
import { Comment as t, Fragment as n, computed as r, createBlock as i, createCommentVNode as a, createElementBlock as o, createElementVNode as s, createTextVNode as c, createVNode as l, defineComponent as u, getCurrentInstance as d, getCurrentScope as f, guardReactiveProps as p, h as m, mergeModels as h, mergeProps as g, nextTick as _, normalizeClass as v, normalizeProps as y, normalizeStyle as b, onBeforeUnmount as ee, onMounted as x, onScopeDispose as S, openBlock as C, reactive as w, ref as T, render as E, renderList as D, renderSlot as O, shallowReadonly as k, shallowRef as A, toDisplayString as j, toValue as M, unref as N, useModel as P, useTemplateRef as F, vModelDynamic as te, vShow as ne, watch as I, watchEffect as re, withCtx as L, withDirectives as ie, withModifiers as R } from "vue";
import { AutocompleteAnchor as z, AutocompleteContent as B, AutocompleteInput as ae, AutocompleteItem as oe, AutocompletePortal as se, AutocompleteRoot as V, AutocompleteTrigger as H, AutocompleteViewport as ce, DialogContent as U, DialogDescription as le, DialogOverlay as ue, DialogPortal as de, DialogRoot as fe, DialogTitle as pe, DialogTrigger as me, DropdownMenuContent as he, DropdownMenuItem as ge, DropdownMenuPortal as _e, DropdownMenuRoot as ve, DropdownMenuSeparator as ye, DropdownMenuTrigger as be, Primitive as xe, ProgressIndicator as Se, ProgressRoot as Ce, ScrollAreaRoot as we, ScrollAreaScrollbar as Te, ScrollAreaThumb as Ee, ScrollAreaViewport as De, SelectContent as Oe, SelectItem as ke, SelectItemIndicator as Ae, SelectItemText as je, SelectPortal as Me, SelectRoot as Ne, SelectScrollDownButton as Pe, SelectScrollUpButton as Fe, SelectTrigger as Ie, SelectValue as Le, SelectViewport as Re, SliderRange as ze, SliderRoot as Be, SliderThumb as Ve, SliderTrack as He, SplitterGroup as Ue, SplitterPanel as W, SplitterResizeHandle as We, TabsIndicator as Ge, TabsList as Ke, TabsRoot as qe, TabsTrigger as Je, ToastDescription as Ye, ToastProvider as Xe, ToastRoot as Ze, ToastViewport as Qe, useForwardPropsEmits as G } from "reka-ui";
import { AlertCircleIcon as $e, ArrowRight as et, Check as tt, CheckCircle2 as nt, ChevronDown as rt, ChevronUp as it, Eye as at, EyeClosed as ot, InfoIcon as st, Loader2 as ct, Loader2Icon as lt, X as ut, XCircleIcon as dt } from "lucide-vue-next";
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
		return (r, s) => (C(), i(N(xe), {
			as: e.as,
			"as-child": e.asChild,
			class: v([N(ft)(t), r.$attrs.class]),
			disabled: e.isLoading || r.$attrs.disabled
		}, {
			default: L(() => [e.isLoading ? (C(), i(N(lt), {
				key: 0,
				class: "ui-button_loader"
			})) : a("", !0), !e.isLoading || e.isLoading && !e.loadingText ? O(r.$slots, "default", {}, void 0, void 0, 1) : (C(), o(n, { key: 2 }, [c(j(e.loadingText), 1)], 64))]),
			_: 3
		}, 8, [
			"as",
			"as-child",
			"class",
			"disabled"
		]));
	}
}), ft = e("ui-button", {
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
}), pt = { class: "ui-dialog-header" }, mt = {
	key: 0,
	class: "ui-dialog-footer"
}, ht = /* @__PURE__ */ u({
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
		let u = T(!1), d = e, f = n;
		t({
			show() {
				u.value = !0;
			},
			hide() {
				u.value = !1;
			}
		}), I(u, (e) => {
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
		return (t, n) => (C(), i(N(fe), {
			open: u.value,
			"onUpdate:open": n[0] ||= (e) => u.value = e
		}, {
			default: L(() => [t.$slots.trigger ? (C(), i(N(me), {
				key: 0,
				"as-child": ""
			}, {
				default: L(() => [O(t.$slots, "trigger")]),
				_: 3
			})) : a("", !0), l(N(de), null, {
				default: L(() => [e.hideOverlay ? a("", !0) : (C(), i(N(ue), {
					key: 0,
					class: "ui-dialog-overlay"
				})), l(N(U), {
					class: "ui-dialog-content",
					style: b(p.value),
					onEscapeKeyDown: m,
					onPointerDownOutside: h
				}, {
					default: L(() => [
						s("div", pt, [l(N(pe), { class: "ui-dialog-header_title" }, {
							default: L(() => [O(t.$slots, "title", {}, () => [c(j(e.title), 1)])]),
							_: 3
						}), ie(l(N(le), { class: "ui-dialog-header_description" }, {
							default: L(() => [O(t.$slots, "description", {}, () => [c(j(e.description), 1)])]),
							_: 3
						}, 512), [[ne, !!e.description]])]),
						O(t.$slots, "default"),
						e.hideFooter ? a("", !0) : (C(), o("div", mt, [O(t.$slots, "footer", {}, () => [l(N(K), { onClick: _ }, {
							default: L(() => [c(j(e.cancelText), 1)]),
							_: 1
						}), l(N(K), {
							variant: "primary",
							onClick: v
						}, {
							default: L(() => [c(j(e.confirmText), 1)]),
							_: 1
						})])])),
						e.closable ? (C(), o("button", {
							key: 1,
							class: "ui-dialog-close",
							onClick: g
						}, [l(N(ut), { size: 16 })])) : a("", !0)
					]),
					_: 3
				}, 8, ["style"])]),
				_: 3
			})]),
			_: 3
		}, 8, ["open"]));
	}
}), q = w({
	type: "info",
	title: "",
	message: "",
	confirmText: "确定",
	cancelText: "取消",
	onConfirm: void 0
}), gt = null, J = null;
function _t() {
	return J || (J = document.createElement("div"), J.className = "ui-alert", document.body.appendChild(J)), J;
}
function vt(e = "info", t, n, r) {
	let i = _t();
	q.type = e, q.title = t, q.message = n, q.confirmText = r?.confirmText ?? "确定", q.cancelText = r?.cancelText ?? "取消", q.onConfirm = r?.onConfirm;
	let a = l(bt, q);
	E(a, i), gt = a.component?.exposed, gt?.open();
}
var yt = {
	info(e, t, n) {
		vt("info", e, t, n);
	},
	success(e, t, n) {
		vt("success", e, t, n);
	},
	warn(e, t, n) {
		vt("warn", e, t, n);
	},
	error(e, t, n) {
		vt("error", e, t, n);
	}
}, bt = /* @__PURE__ */ u({
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
		}), o = F("dialogRef");
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
		return (e, t) => (C(), i(N(ht), {
			ref_key: "dialogRef",
			ref: o,
			width: 360,
			title: n.title,
			description: n.message,
			closable: !1
		}, {
			footer: L(() => [l(N(K), { onClick: s }, {
				default: L(() => [c(j(n.cancelText), 1)]),
				_: 1
			}), l(N(K), {
				variant: "primary",
				status: a.value,
				onClick: u
			}, {
				default: L(() => [c(j(n.confirmText), 1)]),
				_: 1
			}, 8, ["status"])]),
			_: 1
		}, 8, ["title", "description"]));
	}
}), xt = /* @__PURE__ */ u({
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
		let n = G(e, t);
		return (e, t) => (C(), i(N(ve), null, {
			default: L(({ open: t }) => [l(N(be), { "as-child": "" }, {
				default: L(() => [O(e.$slots, "default", { open: t })]),
				_: 2
			}, 1024), l(N(_e), null, {
				default: L(() => [l(N(he), g({ class: "ui-listbox-content" }, N(n)), {
					default: L(() => [O(e.$slots, "content")]),
					_: 3
				}, 16)]),
				_: 3
			})]),
			_: 3
		}));
	}
}), St = /* @__PURE__ */ u({
	__name: "DropdownMenuItem",
	props: {
		disabled: { type: Boolean },
		textValue: {},
		asChild: { type: Boolean },
		as: {}
	},
	emits: ["select"],
	setup(e, { emit: t }) {
		let n = G(e, t);
		return (e, t) => (C(), i(N(ge), g({ class: "ui-listbox-item no-indicator" }, N(n)), {
			default: L(() => [O(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), Ct = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, wt = {}, Tt = { class: "ui-listbox-shortcut" };
function Et(e, t) {
	return C(), o("span", Tt, [O(e.$slots, "default")]);
}
var Dt = /*#__PURE__*/ Ct(wt, [["render", Et]]), Ot = /* @__PURE__ */ u({
	__name: "DropdownMenuSeparator",
	setup(e) {
		return (e, t) => (C(), i(N(ye)));
	}
}), kt = {}, At = { class: "ui-form" };
function jt(e, t) {
	return C(), o("div", At, [O(e.$slots, "default")]);
}
var Mt = /*#__PURE__*/ Ct(kt, [["render", jt]]), Nt = { class: "ui-form-item" }, Pt = {
	key: 0,
	class: "ui-form-item-header"
}, Ft = { class: "ui-form-item_title" }, It = { class: "ui-form-item_description" }, Lt = { class: "ui-form-item_extra" }, Rt = /* @__PURE__ */ u({
	__name: "FormItem",
	props: {
		label: {},
		description: {}
	},
	setup(e) {
		return (t, n) => (C(), o("div", Nt, [e.label || e.description || t.$slots.extra ? (C(), o("div", Pt, [
			s("span", Ft, j(e.label), 1),
			s("span", It, j(e.description), 1),
			s("div", Lt, [O(t.$slots, "extra")])
		])) : a("", !0), O(t.$slots, "default")]));
	}
}), zt = {
	key: 0,
	class: "ui-input-prefix"
}, Bt = {
	key: 0,
	class: "ui-input-icon"
}, Vt = [
	"placeholder",
	"name",
	"type",
	"disabled"
], Ht = {
	key: 1,
	class: "ui-input-suffix"
}, Ut = ["disabled"], Wt = /* @__PURE__ */ u({
	__name: "Input",
	props: /*@__PURE__*/ h({
		name: {},
		type: {},
		size: {},
		placeholder: { default: "" },
		disabled: { type: Boolean }
	}, {
		modelValue: {},
		modelModifiers: {}
	}),
	emits: /*@__PURE__*/ h(["input", "change"], ["update:modelValue"]),
	setup(e, { emit: t }) {
		let n = e, c = F("inputRef"), l = T(!1), u = P(e, "modelValue"), d = r(() => n.type === "password" ? l.value ? "text" : "password" : n.type);
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
		return (t, r) => (C(), o("div", {
			class: v([N($t)(n), t.$attrs.class]),
			onPointerdown: p
		}, [
			t.$slots.prefix || t.$slots.icon ? (C(), o("span", zt, [t.$slots.icon ? (C(), o("span", Bt, [O(t.$slots, "icon")])) : O(t.$slots, "prefix", {}, void 0, void 0, 1)])) : a("", !0),
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
			}, null, 8, Vt), [[te, u.value]]),
			t.$slots.suffix ? (C(), o("span", Ht, [O(t.$slots, "suffix")])) : a("", !0),
			e.type === "password" ? (C(), o("button", {
				key: 2,
				type: "button",
				tabindex: "-1",
				class: "ui-input-button",
				disabled: e.disabled,
				onPointerdown: r[1] ||= R(() => {}, ["prevent"]),
				onMousedown: r[2] ||= R(() => {}, ["prevent"]),
				onClick: R(f, ["stop"])
			}, [l.value ? (C(), i(N(at), {
				key: 0,
				class: "ui-input-icon"
			})) : (C(), i(N(ot), {
				key: 1,
				class: "ui-input-icon"
			}))], 40, Ut)) : a("", !0)
		], 34));
	}
}), Gt = {
	key: 0,
	class: "ui-input-prefix"
}, Kt = {
	key: 0,
	class: "ui-input-icon"
}, qt = { class: "ui-listbox-label" }, Jt = ["onClick"], Yt = /* @__PURE__ */ u({
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
		let c = e, u = t, d = G(c, u), f = F("inputRef"), m = r(() => c.options?.map((e) => typeof e == "string" || typeof e == "number" ? {
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
		return (t, r) => (C(), i(N(V), y(p(N(d))), {
			default: L(() => [l(N(z), {
				class: v([N($t)(c), t.$attrs.class]),
				onPointerdown: h
			}, {
				default: L(() => [
					t.$slots.prefix || t.$slots.icon ? (C(), o("span", Gt, [t.$slots.icon ? (C(), o("span", Kt, [O(t.$slots, "icon")])) : O(t.$slots, "prefix", {}, void 0, void 0, 1)])) : a("", !0),
					l(N(ae), {
						ref_key: "inputRef",
						ref: f,
						name: e.name,
						placeholder: e.placeholder,
						type: "text",
						class: "ui-input-native"
					}, null, 8, ["name", "placeholder"]),
					l(N(H), { class: "ui-input-button" }, {
						default: L(() => [l(N(rt), { class: "ui-input-icon" })]),
						_: 1
					})
				]),
				_: 3
			}, 8, ["class"]), l(N(se), null, {
				default: L(() => [l(N(B), {
					position: "popper",
					"side-offset": 4,
					align: "start",
					class: "ui-listbox-content"
				}, {
					default: L(() => [l(N(ce), { class: "ui-listbox-viewport" }, {
						default: L(() => [(C(!0), o(n, null, D(m.value, (e) => (C(), i(N(oe), {
							class: "ui-listbox-item no-indicator",
							value: e.value
						}, {
							default: L(() => [s("span", qt, j(e.label), 1), s("button", {
								class: "ui-listbox-right-button",
								onClick: R((t) => g(e), ["stop"])
							}, " 删除 ", 8, Jt)]),
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
}), Xt = {
	key: 0,
	class: "ui-input-prefix"
}, Zt = { class: "ui-input-suffix" }, Qt = /* @__PURE__ */ u({
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
		}), p = G(f, d), m = r(() => u.data.map((e) => typeof e == "string" || typeof e == "number" ? {
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
		return (e, t) => (C(), i(N(Ne), g(N(p), { "model-value": u.modelValue ? String(u.modelValue) : void 0 }), {
			default: L(() => [l(N(Ie), {
				class: v([
					"ui-select",
					N($t)(u),
					e.$attrs.class
				]),
				style: b(e.$attrs.style)
			}, {
				default: L(() => [
					e.$slots.prefix ? (C(), o("span", Xt, [O(e.$slots, "prefix")])) : a("", !0),
					h.value ? (C(), i(N(Le), {
						key: 2,
						class: "ui-input-native"
					}, {
						default: L(() => [c(j(h.value), 1)]),
						_: 1
					})) : (C(), i(N(Le), {
						key: 1,
						placeholder: u.placeholder,
						class: "ui-input-native"
					}, null, 8, ["placeholder"])),
					s("span", Zt, [O(e.$slots, "suffix", {}, () => [l(N(rt), {
						size: 14,
						class: "ui-input-icon"
					})])])
				]),
				_: 3
			}, 8, ["class", "style"]), l(N(Me), null, {
				default: L(() => [l(N(Oe), {
					position: "popper",
					"side-offset": 4,
					class: "ui-listbox-content"
				}, {
					default: L(() => [
						l(N(Fe), { class: "ui-listbox-scroll-button" }, {
							default: L(() => [l(N(it), { size: 14 })]),
							_: 1
						}),
						l(N(Re), null, {
							default: L(() => [(C(!0), o(n, null, D(m.value, (e) => (C(), i(N(ke), {
								key: e.value,
								class: "ui-listbox-item",
								value: e.value
							}, {
								default: L(() => [l(N(Ae), { class: "ui-listbox-indicator" }, {
									default: L(() => [l(N(tt), { size: 14 })]),
									_: 1
								}), l(N(je), { class: "ui-listbox-label" }, {
									default: L(() => [c(j(e.label), 1)]),
									_: 2
								}, 1024)]),
								_: 2
							}, 1032, ["value"]))), 128))]),
							_: 1
						}),
						l(N(Pe), { class: "ui-listbox-scroll-button" }, {
							default: L(() => [l(N(rt), { size: 14 })]),
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
}), $t = e("ui-input", {
	variants: { size: {
		base: "ui-input-base",
		small: "ui-input-small",
		medium: "ui-input-medium",
		large: "ui-input-large"
	} },
	defaultVariants: { size: "base" }
}), en = /* @__PURE__ */ u({
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
		let n = e, a = G(n, t), o = F("progressRef"), s = r(() => o.value?.getValueLabel ? o.value.getValueLabel(n.modelValue, n.max ?? 100) : 0);
		return (e, t) => (C(), i(N(Ce), g({
			class: "ui-progress",
			ref_key: "progressRef",
			ref: o
		}, N(a)), {
			default: L(() => [l(N(Se), {
				class: "ui-progress-indicator",
				style: b({ width: s.value })
			}, null, 8, ["style"])]),
			_: 1
		}, 16));
	}
}), tn = /* @__PURE__ */ u({
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
		let n = e, r = G(n, t);
		return (e, t) => (C(), i(N(qe), g({ class: [N(rn)(n), e.$attrs.class] }, N(r)), {
			default: L(() => [l(N(Ke), null, {
				default: L(() => [l(N(Ge), { class: "ui-segmented-indicator" }), O(e.$slots, "default")]),
				_: 3
			})]),
			_: 3
		}, 16, ["class"]));
	}
}), nn = /* @__PURE__ */ u({
	__name: "SegmentedItem",
	props: {
		label: {},
		value: {},
		disabled: { type: Boolean },
		asChild: { type: Boolean },
		as: {}
	},
	setup(e) {
		let t = G(e);
		return (n, r) => (C(), i(N(Je), g(N(t), { class: "ui-segmented-item" }), {
			default: L(() => [c(j(e.label), 1)]),
			_: 1
		}, 16));
	}
}), rn = e("ui-segmented", {
	variants: { size: {
		base: "",
		small: "ui-segmented_small",
		medium: "ui-segmented_medium",
		large: "ui-segmented_large"
	} },
	defaultVariants: { size: "base" }
}), an = /* @__PURE__ */ u({
	__name: "Slider",
	props: /*@__PURE__*/ h({
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
	emits: /*@__PURE__*/ h(["change"], ["update:modelValue"]),
	setup(e, { emit: t }) {
		let a = e, s = P(e, "modelValue"), c = t, u = r(() => Array.isArray(a.values) && a.values.length > 0), d = r(() => u.value ? 0 : a.min), f = r(() => u.value ? a.values.length - 1 : a.max), p = r(() => u.value ? 1 : a.step), m = r({
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
		return (e, t) => (C(), i(N(Be), {
			class: "ui-slider",
			modelValue: m.value,
			"onUpdate:modelValue": t[0] ||= (e) => m.value = e,
			min: d.value,
			max: f.value,
			step: p.value,
			disabled: a.disabled
		}, {
			default: L(() => [l(N(He), { class: "ui-slider_track" }, {
				default: L(() => [l(N(ze), { class: "ui-slider_range" })]),
				_: 1
			}), (C(!0), o(n, null, D(m.value, (e, t) => (C(), i(N(Ve), {
				key: t,
				class: v(["ui-slider_thumb"])
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
}), on = u({
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
				class: [sn(e), i.class],
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
}), sn = e("ui-space", {
	variants: {
		direction: {
			horizontal: "ui-space-horizontal",
			vertical: "ui-space-vertical"
		},
		fill: { true: "ui-space-fill" }
	},
	defaultVariants: { direction: "horizontal" }
}), cn = { class: "ui-splitter-extra" }, ln = /* @__PURE__ */ u({
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
		return (t, a) => (C(), i(N(Ue), { direction: "horizontal" }, {
			default: L(() => [
				l(N(W), g({ class: "ui-splitter-panel" }, e.main), {
					default: L(() => [O(t.$slots, "default")]),
					_: 3
				}, 16),
				l(N(We), { class: "ui-splitter-handle" }),
				l(N(W), g({ class: "ui-splitter-aside" }, e.aside, {
					onCollapse: a[0] ||= (e) => n("collapse"),
					onExpand: a[1] ||= (e) => n("expand"),
					onResize: r
				}), {
					default: L(() => [l(N(Ue), { direction: "vertical" }, {
						default: L(() => [
							l(N(W), g({ class: "ui-splitter-panel" }, e.asideTop), {
								default: L(() => [O(t.$slots, "top")]),
								_: 3
							}, 16),
							l(N(We), { class: "ui-splitter-handle" }),
							l(N(W), g({ class: "ui-splitter-panel" }, e.asideBottom), {
								default: L(() => [O(t.$slots, "bottom")]),
								_: 3
							}, 16)
						]),
						_: 3
					}), s("div", cn, [O(t.$slots, "extra")])]),
					_: 3
				}, 16)
			]),
			_: 3
		}));
	}
}), un = /* @__PURE__ */ u({
	__name: "Toast",
	props: {
		message: { default: "" },
		type: { default: "info" },
		duration: { default: 3e3 },
		onDestroy: {}
	},
	setup(e) {
		let t = e, n = T(!1);
		return x(() => {
			n.value = !0;
		}), I(n, (e) => {
			!e && t.onDestroy && setTimeout(() => {
				t.onDestroy?.();
			}, 200);
		}), (r, o) => (C(), i(N(Ze), {
			open: n.value,
			"onUpdate:open": o[0] ||= (e) => n.value = e,
			duration: t.duration,
			class: "ui-toast-root"
		}, {
			default: L(() => [e.type === "success" ? (C(), i(N(nt), {
				key: 0,
				class: v(["ui-toast-icon", e.type])
			}, null, 8, ["class"])) : e.type === "error" ? (C(), i(N(dt), {
				key: 1,
				class: v(["ui-toast-icon", e.type])
			}, null, 8, ["class"])) : e.type === "warning" ? (C(), i(N($e), {
				key: 2,
				class: v(["ui-toast-icon", e.type])
			}, null, 8, ["class"])) : (C(), i(N(st), {
				key: 3,
				class: v(["ui-toast-icon", e.type])
			}, null, 8, ["class"])), t.message ? (C(), i(N(Ye), {
				key: 4,
				class: "ui-toast-message"
			}, {
				default: L(() => [c(j(t.message), 1)]),
				_: 1
			})) : a("", !0)]),
			_: 1
		}, 8, ["open", "duration"]));
	}
}), dn = T([]), fn = !1, pn = u({
	name: "GlobalToastContainer",
	setup() {
		return () => m(Xe, { swipeDirection: "up" }, () => [dn.value.map((e) => m(un, {
			key: e.id,
			...e,
			onDestroy: () => {
				dn.value = dn.value.filter((t) => t.id !== e.id);
			}
		})), m(Qe, { class: "ui-toast-viewport" })]);
	}
}), mn = () => {
	if (!fn) {
		let e = document.createElement("div");
		e.id = "ui-toast-global-container", document.body.appendChild(e), E(m(pn), e), fn = !0;
	}
}, hn = 0, gn = (e) => {
	mn();
	let t = `ui-toast-${Date.now()}_${hn++}`;
	dn.value.push({
		...e,
		id: t
	});
}, _n = {
	info(e, t) {
		gn({
			type: "info",
			message: e,
			duration: t
		});
	},
	success(e, t) {
		gn({
			type: "success",
			message: e,
			duration: t
		});
	},
	error(e, t) {
		gn({
			type: "error",
			message: e,
			duration: t
		});
	},
	warning(e, t) {
		gn({
			type: "warning",
			message: e,
			duration: t
		});
	}
}, vn = /* @__PURE__ */ u({
	__name: "Tag",
	props: { type: { default: "default" } },
	setup(e) {
		return (t, n) => (C(), o("span", { class: v(["ui-tag", `ui-tag_${e.type}`]) }, [O(t.$slots, "default")], 2));
	}
}), yn = ["href", "fill"], bn = /* @__PURE__ */ u({
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
		return (t, r) => (C(), o("svg", {
			"aria-hidden": "true",
			style: b(n.value)
		}, [s("use", {
			href: i.value,
			fill: e.color
		}, null, 8, yn)], 4));
	}
}), xn = /* @__PURE__ */ u({
	__name: "ScrollArea",
	setup(e) {
		return (e, t) => (C(), i(N(we), { class: "ui-scrollArea" }, {
			default: L(() => [
				l(N(De), { class: "ui-scrollArea-viewport" }, {
					default: L(() => [O(e.$slots, "default")]),
					_: 3
				}),
				l(N(Te), {
					class: "ui-scrollArea-bar",
					orientation: "vertical"
				}, {
					default: L(() => [l(N(Ee), { class: "ui-scrollArea-thumb" })]),
					_: 1
				}),
				l(N(Te), {
					class: "ui-scrollArea-bar",
					orientation: "horizontal"
				}, {
					default: L(() => [l(N(Ee), { class: "ui-scrollArea-thumb" })]),
					_: 1
				})
			]),
			_: 3
		}));
	}
}), Sn = {
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
}, Cn = { key: 0 }, wn = { key: 1 }, Tn = { key: 2 }, En = { key: 3 }, Dn = /* @__PURE__ */ u({
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
		}, n = e, a = T(null), c = T(null), l = T(0), u = T(t.READY), d = 0, f = 0, p = 0, m = [], h = null, g = r(() => u.value === t.READY), _ = r(() => u.value === t.PENDING), y = r(() => u.value === t.CHECKING), S = r(() => u.value === t.SUCCESS), w = r(() => u.value === t.ERROR), E = r(() => l.value + (c.value?.offsetWidth ? c.value.offsetWidth - 1 : 0));
		function D(e, t) {
			let n = Date.now();
			n - p > 16 && (m.push([
				e,
				t,
				n
			]), p = n);
		}
		function O() {
			u.value = t.READY, l.value = 0, f = 0, p = 0, m = [], h &&= (clearTimeout(h), null);
		}
		async function k() {
			if (n.request) {
				u.value = t.CHECKING;
				try {
					let e = Sn.encrypt(m), r = await n.request(e);
					u.value = t.SUCCESS, h = setTimeout(O, r.ttl * 999);
				} catch {
					u.value = t.ERROR, setTimeout(() => {
						O();
					}, 1e3);
				}
			}
		}
		function A() {
			a.value && c.value && (d = a.value.offsetWidth - c.value.offsetWidth);
		}
		function j(e) {
			g.value && (A(), u.value = t.PENDING, c.value && c.value.setPointerCapture(e.pointerId), f = e.clientX, D(Math.floor(e.clientX), Math.floor(e.clientY)));
		}
		function M(e) {
			if (!_.value) return;
			let t = Math.max(0, Math.min(d, e.clientX - f));
			D(Math.floor(e.clientX), Math.floor(e.clientY)), l.value = t;
		}
		function P(e) {
			if (_.value) {
				if (c.value && c.value.releasePointerCapture(e.pointerId), D(Math.floor(e.clientX), Math.floor(e.clientY)), l.value < d || m.length < 8) {
					O();
					return;
				}
				k();
			}
		}
		return x(() => {
			document.addEventListener("pointermove", M), document.addEventListener("pointerup", P), document.addEventListener("pointercancel", P), A();
		}), ee(() => {
			h && clearTimeout(h), document.removeEventListener("pointermove", M), document.removeEventListener("pointerup", P), document.removeEventListener("pointercancel", P);
		}), (t, n) => (C(), o("div", {
			class: v(["SliderCaptcha", `SliderCaptcha-${e.size}`]),
			ref_key: "wrapRef",
			ref: a
		}, [
			s("div", {
				class: v(["SliderCaptcha-Mask", {
					error: w.value,
					success: S.value,
					transition: g.value
				}]),
				style: b({ width: E.value + "px" })
			}, null, 6),
			s("div", { class: v(["SliderCaptcha-Tips", { ready: g.value || _.value }]) }, [y.value ? (C(), o("span", Cn, "验证中...")) : S.value ? (C(), o("span", wn, "验证成功")) : w.value ? (C(), o("span", Tn, "验证失败")) : (C(), o("span", En, "拖动滑块到最右边"))], 2),
			s("div", {
				ref_key: "btnRef",
				ref: c,
				class: v(["SliderCaptcha-Btn", {
					transition: g.value,
					checking: y.value,
					error: w.value,
					success: S.value
				}]),
				style: b({
					left: l.value + "px",
					"touch-action": "none"
				}),
				onPointerdown: j
			}, [y.value ? (C(), i(N(ct), {
				key: 0,
				size: 16,
				class: "SliderCaptcha_loader"
			})) : S.value ? (C(), i(N(tt), {
				key: 1,
				size: 16
			})) : w.value ? (C(), i(N(ut), {
				key: 2,
				size: 16
			})) : (C(), i(N(et), {
				key: 3,
				size: 16
			}))], 38)
		], 2));
	}
});
//#endregion
//#region node_modules/@vueuse/shared/dist/index.js
function On(e, t) {
	return f() ? (S(e, t), !0) : !1;
}
var kn = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
var An = (e) => e != null, jn = Object.prototype.toString, Mn = (e) => jn.call(e) === "[object Object]", Y = () => {};
function Nn(e, t) {
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
var Pn = (e) => e();
function Fn(e, t = {}) {
	let n, r, i = Y, a = Y, o = A(!1), s = (e) => {
		clearTimeout(e), i(), i = Y;
	}, c;
	return Object.assign((l) => {
		let u = M(e), d = M(t.maxWait);
		return n && s(n), u <= 0 || d !== void 0 && d <= 0 ? (r &&= (s(r), void 0), o.value = !1, Promise.resolve(l())) : (o.value = !0, new Promise((e, f) => {
			i = t.rejectOnCancel ? f : e, a = e, c = l, d && !r && (r = setTimeout(() => {
				n && s(n), r = void 0, o.value = !1, e(c());
			}, d)), n = setTimeout(() => {
				r && s(r), r = void 0, o.value = !1, e(l());
			}, u);
		}));
	}, {
		cancel: () => {
			n &&= (s(n), void 0), r &&= (s(r), void 0), o.value = !1, a = Y;
		},
		flush: () => {
			if (o.value) {
				n &&= (clearTimeout(n), void 0), r &&= (clearTimeout(r), void 0), o.value = !1;
				let e = a;
				i = Y, a = Y, e(c());
			}
		},
		isPending: k(o)
	});
}
function X(e) {
	return Array.isArray(e) ? e : [e];
}
function In(e, t, n = {}) {
	let { eventFilter: r = Pn, ...i } = n;
	return I(e, Nn(r, t), i);
}
function Ln(e, t, n = {}) {
	let { debounce: r = 0, maxWait: i = void 0, ...a } = n;
	return In(e, t, {
		...a,
		eventFilter: Fn(r, { maxWait: i })
	});
}
function Rn(e, t, n) {
	return I(e, t, {
		...n,
		immediate: !0
	});
}
//#endregion
//#region node_modules/@vueuse/core/dist/index.js
var Z = kn ? window : void 0;
kn && window.document, kn && window.navigator, kn && window.location;
function Q(e) {
	let t = M(e);
	return t?.$el ?? t;
}
function $(...e) {
	let t = (e, t, n, r) => (e.addEventListener(t, n, r), () => e.removeEventListener(t, n, r)), n = r(() => {
		let t = X(M(e[0])).filter((e) => e != null);
		return t.every((e) => typeof e != "string") ? t : void 0;
	});
	return Rn(() => [
		n.value?.map((e) => Q(e)) ?? [Z].filter((e) => e != null),
		X(M(n.value ? e[1] : e[0])),
		X(N(n.value ? e[2] : e[1])),
		M(n.value ? e[3] : e[2])
	], ([e, n, r, i], a, o) => {
		if (!e?.length || !n?.length || !r?.length) return;
		let s = Mn(i) ? { ...i } : i, c = e.flatMap((e) => n.flatMap((n) => r.map((r) => t(e, n, r, s))));
		o(() => {
			c.forEach((e) => e());
		});
	}, { flush: "post" });
}
function zn() {
	let e = A(!1), t = d();
	return t && x(() => {
		e.value = !0;
	}, t), e;
}
/* @__NO_SIDE_EFFECTS__ */
function Bn(e) {
	let t = zn();
	return r(() => (t.value, !!e()));
}
function Vn(e, t, n = {}) {
	let { window: i = Z, ...a } = n, o, s = /* @__PURE__ */ Bn(() => i && "MutationObserver" in i), c = () => {
		o &&= (o.disconnect(), void 0);
	}, l = I(r(() => {
		let t = X(M(e)).map(Q).filter(An);
		return new Set(t);
	}), (e) => {
		c(), s.value && e.size && (o = new MutationObserver(t), e.forEach((e) => o.observe(e, a)));
	}, {
		immediate: !0,
		flush: "post"
	}), u = () => o?.takeRecords(), d = () => {
		l(), c();
	};
	return On(d), {
		isSupported: s,
		stop: d,
		takeRecords: u
	};
}
function Hn(e, t, n = {}) {
	let { window: r = Z, document: i = r?.document, flush: a = "sync" } = n;
	if (!r || !i) return Y;
	let o, s = (e) => {
		o?.(), o = e;
	}, c = re(() => {
		let n = Q(e);
		if (n) {
			let { stop: e } = Vn(i, (e) => {
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
	return On(l), l;
}
function Un(e, t, n = {}) {
	let { window: i = Z, ...a } = n, o, s = /* @__PURE__ */ Bn(() => i && "ResizeObserver" in i), c = () => {
		o &&= (o.disconnect(), void 0);
	}, l = I(r(() => {
		let t = M(e);
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
	return On(u), {
		isSupported: s,
		stop: u
	};
}
function Wn(e, t = {}) {
	let { delayEnter: n = 0, delayLeave: i = 0, triggerOnRemoval: a = !1, window: o = Z } = t, s = A(!1), c, l = (e) => {
		let t = e ? n : i;
		c &&= (clearTimeout(c), void 0), t ? c = setTimeout(() => s.value = e, t) : s.value = e;
	};
	return o ? ($(e, "mouseenter", () => l(!0), { passive: !0 }), $(e, "mouseleave", () => l(!1), { passive: !0 }), a && Hn(r(() => Q(e)), () => l(!1)), s) : s;
}
var Gn = {
	ctrl: "control",
	command: "meta",
	cmd: "meta",
	option: "alt",
	up: "arrowup",
	down: "arrowdown",
	left: "arrowleft",
	right: "arrowright"
};
function Kn(e = {}) {
	let { reactive: t = !1, target: n = Z, aliasMap: i = Gn, passive: a = !0, onEventFired: o = Y } = e, s = w(/* @__PURE__ */ new Set()), c = {
		toJSON() {
			return {};
		},
		current: s
	}, l = t ? w(c) : c, u = /* @__PURE__ */ new Set(), d = /* @__PURE__ */ new Map([
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
				l[n] = r(() => e.map((e) => M(v[e])).every(Boolean));
			} else l[n] = A(!1);
		}
		let o = Reflect.get(e, n, a);
		return t ? M(o) : o;
	} });
	return v;
}
//#endregion
//#region src/components/Zoom/Zoom.vue?vue&type=script&setup=true&lang.ts
var qn = 1, Jn = /* @__PURE__ */ u({
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
		let i = e, a = n, c = F("zoomRef"), l = F("containerRef"), u = T({
			width: 0,
			height: 0
		}), d = T(null), f = Wn(c), p = T({
			scale: 1,
			tx: 0,
			ty: 0
		}), m = T(!1), h = T(!1), g = T(!1), _ = T({
			scale: 1,
			centerX: .5,
			centerY: .5
		}), v = null, y = (e) => Number(e.toFixed(5)), ee = () => {
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
		Un(c, (e) => {
			let { width: t, height: n } = e[0].contentRect;
			u.value.width !== 0 && (p.value.tx *= t / u.value.width, p.value.ty *= n / u.value.height), u.value = {
				width: t,
				height: n
			}, w(), ee();
		});
		let E = () => {
			D(), p.value = {
				scale: 1,
				tx: 0,
				ty: 0
			}, S();
		}, D = () => {
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
			let o = Math.min(Math.max(t, qn), i.maxScale);
			if (n) {
				g.value = !1;
				let t = o / p.value.scale, n = (e.x - .5) * r, i = (e.y - .5) * a;
				p.value.tx = n - (n - p.value.tx) * t, p.value.ty = i - (i - p.value.ty) * t, p.value.scale = o;
			} else {
				D();
				let t = Math.max(0, Math.min(1, e.x)), n = Math.max(0, Math.min(1, e.y)), i = -(t - .5) * r * o, s = -(n - .5) * a * o, c = Math.max(0, (r * o - r) / 2), l = Math.max(0, (a * o - a) / 2);
				p.value.tx = Math.max(-c, Math.min(c, i)), p.value.ty = Math.max(-l, Math.min(l, s)), p.value.scale = o;
			}
			w();
		};
		t({
			reset: E,
			setZoom: k
		});
		let A = r(() => ({
			transform: `matrix(${p.value.scale}, 0, 0, ${p.value.scale}, ${p.value.tx}, ${p.value.ty})`,
			cursor: i.enable ? m.value ? "grabbing" : "grab" : "default",
			transition: g.value ? "transform 0.15s cubic-bezier(0.25, 1, 0.5, 1)" : "none"
		})), j = (e) => {
			h.value ? (e.stopImmediatePropagation(), e.preventDefault(), h.value = !1) : a("left", e);
		}, M = (e) => a("right", e);
		return $(c, "wheel", (e) => {
			if (e.shiftKey || e.ctrlKey) return;
			if (!i.enable) {
				a("wheel", e);
				return;
			}
			if (e.preventDefault(), !c.value) return;
			let t = 1.1 ** (e.deltaY > 0 ? -1 : 1), n = p.value.scale, r = Math.min(Math.max(n * t, qn), i.maxScale), o = c.value.getBoundingClientRect(), s = o.width / u.value.width, l = o.height / u.value.height, d = (e.clientX - o.left) / (s || 1), f = (e.clientY - o.top) / (l || 1), m = d / u.value.width, h = f / u.value.height;
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
		}), x(() => {
			let e = l.value;
			e && (u.value = {
				width: e.clientWidth,
				height: e.clientHeight
			}, ee());
		}), (e, t) => (C(), o("div", {
			class: "ui-zoom",
			ref_key: "zoomRef",
			ref: c,
			onContextmenu: R(M, ["prevent"]),
			onClickCapture: j
		}, [s("div", {
			class: "ui-zoom-container",
			ref_key: "containerRef",
			ref: l,
			style: b(A.value)
		}, [O(e.$slots, "default")], 4)], 544));
	}
}), Yn = ["data-view-id"], Xn = 1, Zn = 5, Qn = .2, $n = /* @__PURE__ */ u({
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
		let a = e, c = i, l = F("scrollerRef"), u = F("wrapperRef"), d = T(1), f = T(0), p = T(0), m = T(!1), h = T(!1), g = {
			width: 0,
			height: 0,
			left: 0,
			top: 0
		}, y = {
			width: 0,
			height: 0
		}, S = null, w = null, E = null, k = 0, A = !1, j = null, { shift: M } = Kn(), N = r(() => M.value), P = r(() => ({
			transform: `translate3d(${f.value.toFixed(2)}px, ${p.value.toFixed(2)}px, 0) scale(${d.value.toFixed(4)})`,
			transformOrigin: "0 0",
			transition: h.value ? "transform 0.2s cubic-bezier(0.25, 1, 0.5, 1)" : "none"
		})), te = r(() => d.value !== 1 || Math.round(f.value) !== 0 || Math.round(p.value) !== 0), ne = () => {
			if (te.value) {
				if (E === !0) return;
				w &&= (clearTimeout(w), null), E = !0, c("zoom", !0);
				return;
			}
			if (N.value) {
				A = !0;
				return;
			}
			A = !1, E !== !1 && (w &&= (clearTimeout(w), null), w = setTimeout(() => {
				E = !1, c("zoom", !1), w = null;
			}, 250));
		};
		Ln(N, (e) => {
			e || (m.value && H(), A && (A = !1, ne()));
		}, { debounce: 50 }), I(() => [
			d.value,
			f.value,
			p.value
		], () => ne(), { flush: "sync" });
		let re = (e, t, n) => Math.min(n, Math.max(t, e)), L = () => {
			if (!l.value || !u.value) return;
			let e = l.value.getBoundingClientRect();
			g.width = e.width, g.height = e.height, g.left = e.left, g.top = e.top, y.width = u.value.scrollWidth, y.height = u.value.scrollHeight;
		}, ie = () => {
			j = null;
		}, R = () => j || (j = a.data.map((e) => {
			let t = l.value?.querySelector(`[data-view-id="${e.viewId}"]`);
			return t ? {
				viewId: e.viewId,
				left: t.offsetLeft,
				top: t.offsetTop,
				width: t.clientWidth,
				height: t.clientHeight
			} : null;
		}).filter((e) => e !== null), j), z = (e, t) => {
			if (g.width <= 0 || y.width === 0) return 0;
			let n = g.width - y.width * t;
			return n >= 0 ? 0 : re(e, n, 0);
		}, B = (e, t) => {
			if (g.height <= 0 || y.height === 0) return 0;
			let n = g.height - y.height * t;
			return n >= 0 ? 0 : re(e, n, 0);
		}, ae = (e) => u.value ? {
			left: e.offsetLeft,
			top: e.offsetTop,
			width: e.clientWidth,
			height: e.clientHeight
		} : null, oe = (e) => {
			let t = ae(e);
			return !t || g.height <= 0 || t.height <= 0 ? Zn : Math.min(Zn, Math.max(Xn, g.height / t.height));
		}, se = (e) => {
			let t = l.value?.querySelector(`[data-view-id="${e}"]`);
			if (!t || g.width === 0) return;
			let n = ae(t);
			if (!n) return;
			let r = g.width / 2 - (n.left + n.width / 2) * d.value, i = g.height / 2 - (n.top + n.height / 2) * d.value;
			f.value = z(r, d.value), p.value = B(i, d.value);
		};
		I([
			() => a.data?.length,
			() => a.data,
			() => a.gridLayoutStyles
		], () => de(), { deep: !1 }), I(() => a.activeViewId, () => {
			h.value || m.value || _(() => se(a.activeViewId));
		}, { immediate: !1 }), Un(l, () => {
			if (m.value) return;
			ie();
			let e = d.value, t = g.width || 1, n = g.height || 1, r = y.width || 1, i = y.height || 1, a = t - r * e, o = n - i * e, s = a < 0 ? f.value / a : .5, c = o < 0 ? p.value / o : .5;
			L(), d.value = e;
			let l = g.width - y.width * e, u = g.height - y.height * e, h = l < 0 ? s * l : 0, _ = u < 0 ? c * u : 0;
			f.value = z(h, e), p.value = B(_, e);
		}), $(l, "wheel", (e) => {
			if (!l.value || !e.shiftKey) return;
			e.preventDefault();
			let t = e.clientX - g.left, n = e.clientY - g.top, r = d.value, i = (t - f.value) / r, a = (n - p.value) / r, o = null;
			for (let e of R()) if (i >= e.left && i <= e.left + e.width && a >= e.top && a <= e.top + e.height) {
				o = e;
				break;
			}
			if (!o) return;
			let s = l.value.querySelector(`[data-view-id="${o.viewId}"]`);
			if (!s) return;
			let c = (Math.abs(e.deltaY) >= Math.abs(e.deltaX) ? e.deltaY : e.deltaX) < 0, u = c ? oe(s) : Zn, m = Math.min(u, Math.max(Xn, r + (c ? Qn : -.2)));
			if (m === r) return;
			S && clearTimeout(S);
			let _ = m / r, v = t - (t - f.value) * _, y = n - (n - p.value) * _;
			if (c) {
				let e = o.left * m + v, t = e + o.width * m, n = o.top * m + y, r = n + o.height * m;
				o.width * m <= g.width ? e < 0 ? v -= e : t > g.width && (v -= t - g.width) : e > 0 ? v -= e : t < g.width && (v += g.width - t), o.height * m <= g.height ? n < 0 ? y -= n : r > g.height && (y -= r - g.height) : n > 0 ? y -= n : r < g.height && (y += g.height - r);
			}
			f.value = z(v, m), p.value = B(y, m), d.value = m, h.value = !0, S = setTimeout(() => {
				h.value = !1, S = null;
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
		x(() => {
			_(() => {
				L(), a.activeViewId !== void 0 && se(a.activeViewId);
			});
		}), ee(() => {
			H(), S && clearTimeout(S), w && clearTimeout(w);
		});
		let de = () => {
			let e = ++k;
			ie(), d.value = 1, f.value = 0, p.value = 0, H(), h.value = !1, S && clearTimeout(S), w && clearTimeout(w), _(() => {
				e === k && (L(), E !== !1 && (E = !1, c("zoom", !1)));
			});
		};
		return t({ reset: de }), (t, r) => (C(), o("div", {
			ref_key: "scrollerRef",
			ref: l,
			class: v(["ui-ZoomGrid-scroller", { "is-grabbing": m.value }]),
			onPointerdown: ue
		}, [s("div", {
			ref_key: "wrapperRef",
			ref: u,
			class: "ui-ZoomGrid-wrapper",
			style: b(P.value)
		}, [s("div", {
			class: v(["ui-ZoomGrid-grid", { "is-shift-active": N.value }]),
			style: b(e.gridLayoutStyles)
		}, [(C(!0), o(n, null, D(e.data, (e) => (C(), o("div", {
			key: e.viewId,
			"data-view-id": e.viewId,
			class: "ui-ZoomGrid-item"
		}, [O(t.$slots, "default", { item: e })], 8, Yn))), 128))], 6)], 4)], 34));
	}
});
//#endregion
export { yt as Alert, Yt as Autocomplete, K as Button, ht as Dialog, xt as DropdownMenu, St as DropdownMenuItem, Ot as DropdownMenuSeparator, Dt as DropdownMenuShortcut, Mt as Form, Rt as FormItem, bn as Icon, Wt as Input, en as Progress, xn as ScrollArea, tn as Segmented, nn as SegmentedItem, Qt as Select, an as Slider, Dn as SliderCaptcha, on as Space, ln as Splitter, vn as Tag, _n as Toast, Jn as Zoom, $n as ZoomGrid, ft as buttonVariants, $t as inputVariants, rn as segmentedVariants, sn as spaceVariants };
