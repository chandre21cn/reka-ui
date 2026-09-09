import { cva as e } from "class-variance-authority";
import { Fragment as t, computed as n, createBlock as r, createCommentVNode as i, createElementBlock as a, createElementVNode as o, createTextVNode as s, createVNode as c, defineComponent as l, guardReactiveProps as u, h as d, mergeModels as f, mergeProps as p, normalizeClass as m, normalizeProps as h, normalizeStyle as g, onMounted as _, openBlock as v, reactive as y, ref as b, render as x, renderList as S, renderSlot as C, toDisplayString as w, unref as T, useModel as ee, useSlots as te, useTemplateRef as E, vModelDynamic as ne, vShow as re, watch as ie, withCtx as D, withDirectives as O, withModifiers as k } from "vue";
import { AutocompleteAnchor as ae, AutocompleteContent as oe, AutocompleteInput as se, AutocompleteItem as ce, AutocompletePortal as le, AutocompleteRoot as ue, AutocompleteTrigger as de, AutocompleteViewport as fe, DialogContent as pe, DialogDescription as me, DialogOverlay as he, DialogPortal as ge, DialogRoot as _e, DialogTitle as ve, DialogTrigger as ye, DropdownMenuContent as be, DropdownMenuItem as A, DropdownMenuPortal as j, DropdownMenuRoot as M, DropdownMenuSeparator as N, DropdownMenuTrigger as xe, Primitive as Se, ProgressIndicator as Ce, ProgressRoot as we, SelectContent as Te, SelectItem as Ee, SelectItemIndicator as De, SelectItemText as Oe, SelectPortal as ke, SelectRoot as Ae, SelectScrollDownButton as je, SelectScrollUpButton as Me, SelectTrigger as Ne, SelectValue as Pe, SelectViewport as Fe, SliderRange as Ie, SliderRoot as Le, SliderThumb as Re, SliderTrack as ze, SplitterGroup as P, SplitterPanel as F, SplitterResizeHandle as I, TabsIndicator as Be, TabsList as Ve, TabsRoot as He, TabsTrigger as Ue, ToastDescription as We, ToastProvider as Ge, ToastRoot as Ke, ToastViewport as qe, useForwardPropsEmits as L } from "reka-ui";
import { AlertCircleIcon as Je, Check as Ye, CheckCircle2 as Xe, ChevronDown as R, ChevronUp as Ze, Eye as Qe, EyeClosed as $e, InfoIcon as et, Loader2Icon as tt, X as nt, XCircleIcon as rt } from "lucide-vue-next";
//#endregion
//#region src/components/Button/Button.vue
var z = /* @__PURE__ */ l({
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
		return (o, c) => (v(), r(T(Se), {
			as: e.as,
			"as-child": e.asChild,
			class: m([T(B)(n), o.$attrs.class]),
			disabled: e.isLoading || o.$attrs.disabled
		}, {
			default: D(() => [e.isLoading ? (v(), r(T(tt), {
				key: 0,
				class: "ui-button_loader"
			})) : i("", !0), !e.isLoading || e.isLoading && !e.loadingText ? C(o.$slots, "default", {}, void 0, void 0, 1) : (v(), a(t, { key: 2 }, [s(w(e.loadingText), 1)], 64))]),
			_: 3
		}, 8, [
			"as",
			"as-child",
			"class",
			"disabled"
		]));
	}
}), B = e("ui-button", {
	variants: {
		variant: {
			primary: "ui-button-primary",
			secondary: "ui-button-secondary"
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
}, V = /* @__PURE__ */ l({
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
		let u = b(!1), d = e;
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
		async function y(e) {
			e.preventDefault(), d.onConfirm && typeof d.onConfirm == "function" ? await d.onConfirm() ? u.value = !1 : u.value = !0 : u.value = !1;
		}
		return (t, n) => (v(), r(T(_e), {
			open: u.value,
			"onUpdate:open": n[0] ||= (e) => u.value = e
		}, {
			default: D(() => [t.$slots.trigger ? (v(), r(T(ye), {
				key: 0,
				"as-child": ""
			}, {
				default: D(() => [C(t.$slots, "trigger")]),
				_: 3
			})) : i("", !0), c(T(ge), null, {
				default: D(() => [e.hideOverlay ? i("", !0) : (v(), r(T(he), {
					key: 0,
					class: "ui-dialog-overlay"
				})), c(T(pe), {
					class: "ui-dialog-content",
					style: g(f.value),
					onEscapeKeyDown: p,
					onPointerDownOutside: m
				}, {
					default: D(() => [
						o("div", it, [c(T(ve), { class: "ui-dialog-header_title" }, {
							default: D(() => [C(t.$slots, "title", {}, () => [s(w(e.title), 1)])]),
							_: 3
						}), O(c(T(me), { class: "ui-dialog-header_description" }, {
							default: D(() => [C(t.$slots, "description", {}, () => [s(w(e.description), 1)])]),
							_: 3
						}, 512), [[re, !!e.description]])]),
						C(t.$slots, "default"),
						!e.hideFooter || !t.$slots.footer ? (v(), a("div", at, [C(t.$slots, "footer", {}, () => [c(T(z), { onClick: _ }, {
							default: D(() => [s(w(e.cancelText), 1)]),
							_: 1
						}), c(T(z), {
							variant: "primary",
							onClick: y
						}, {
							default: D(() => [s(w(e.confirmText), 1)]),
							_: 1
						})])])) : i("", !0),
						e.closable ? (v(), a("button", {
							key: 1,
							class: "ui-dialog-close",
							onClick: h
						}, [c(T(nt), { size: 16 })])) : i("", !0)
					]),
					_: 3
				}, 8, ["style"])]),
				_: 3
			})]),
			_: 3
		}, 8, ["open"]));
	}
}), H = y({
	type: "info",
	title: "",
	message: "",
	confirmText: "确定",
	cancelText: "取消",
	onConfirm: void 0
}), U = null, W = null;
function ot() {
	return W || (W = document.createElement("div"), W.className = "ui-alert", document.body.appendChild(W)), W;
}
function G(e = "info", t, n, r) {
	let i = ot();
	H.type = e, H.title = t, H.message = n, H.confirmText = r?.confirmText ?? "确定", H.cancelText = r?.cancelText ?? "取消", H.onConfirm = r?.onConfirm;
	let a = c(ct, H);
	x(a, i), U = a.component?.exposed, U?.open();
}
var st = {
	info(e, t, n) {
		G("info", e, t, n);
	},
	success(e, t, n) {
		G("success", e, t, n);
	},
	warn(e, t, n) {
		G("warn", e, t, n);
	},
	error(e, t, n) {
		G("error", e, t, n);
	}
}, ct = /* @__PURE__ */ l({
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
		}), o = E("dialogRef");
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
		return (e, t) => (v(), r(T(V), {
			ref_key: "dialogRef",
			ref: o,
			width: 360,
			title: i.title,
			description: i.message,
			closable: !1
		}, {
			footer: D(() => [c(T(z), { onClick: l }, {
				default: D(() => [s(w(i.cancelText), 1)]),
				_: 1
			}), c(T(z), {
				variant: "primary",
				status: a.value,
				onClick: u
			}, {
				default: D(() => [s(w(i.confirmText), 1)]),
				_: 1
			}, 8, ["status"])]),
			_: 1
		}, 8, ["title", "description"]));
	}
}), lt = /* @__PURE__ */ l({
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
		let n = L(e, t);
		return (e, t) => (v(), r(T(M), null, {
			default: D(({ open: t }) => [c(T(xe), { "as-child": "" }, {
				default: D(() => [C(e.$slots, "default", { open: t })]),
				_: 2
			}, 1024), c(T(j), null, {
				default: D(() => [c(T(be), p({ class: "ui-listbox-content" }, T(n)), {
					default: D(() => [C(e.$slots, "content")]),
					_: 3
				}, 16)]),
				_: 3
			})]),
			_: 3
		}));
	}
}), ut = /* @__PURE__ */ l({
	__name: "DropdownMenuItem",
	props: {
		disabled: { type: Boolean },
		textValue: {},
		asChild: { type: Boolean },
		as: {}
	},
	emits: ["select"],
	setup(e, { emit: t }) {
		let n = L(e, t);
		return (e, t) => (v(), r(T(A), p({ class: "ui-listbox-item no-indicator" }, T(n)), {
			default: D(() => [C(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), K = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, dt = {}, ft = { class: "ui-listbox-shortcut" };
function pt(e, t) {
	return v(), a("span", ft, [C(e.$slots, "default")]);
}
var mt = /*#__PURE__*/ K(dt, [["render", pt]]), ht = /* @__PURE__ */ l({
	__name: "DropdownMenuSeparator",
	setup(e) {
		return (e, t) => (v(), r(T(N)));
	}
}), gt = {}, _t = { class: "ui-form" };
function vt(e, t) {
	return v(), a("div", _t, [C(e.$slots, "default")]);
}
var yt = /*#__PURE__*/ K(gt, [["render", vt]]), bt = { class: "ui-form-item" }, xt = {
	key: 0,
	class: "ui-form-item-header"
}, St = { class: "ui-form-item_title" }, Ct = { class: "ui-form-item_description" }, wt = { class: "ui-form-item_extra" }, Tt = /* @__PURE__ */ l({
	__name: "FormItem",
	props: {
		label: {},
		description: {}
	},
	setup(e) {
		return (t, n) => (v(), a("div", bt, [e.label || e.description || t.$slots.extra ? (v(), a("div", xt, [
			o("span", St, w(e.label), 1),
			o("span", Ct, w(e.description), 1),
			o("div", wt, [C(t.$slots, "extra")])
		])) : i("", !0), C(t.$slots, "default")]));
	}
}), Et = {
	key: 0,
	class: "ui-input-prefix"
}, Dt = {
	key: 0,
	class: "ui-input-icon"
}, Ot = [
	"placeholder",
	"name",
	"type",
	"disabled"
], kt = {
	key: 1,
	class: "ui-input-suffix"
}, At = ["disabled"], jt = /* @__PURE__ */ l({
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
		let s = e, c = E("inputRef"), l = b(!1), u = ee(e, "modelValue"), d = n(() => s.type === "password" ? l.value ? "text" : "password" : s.type);
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
		return (t, n) => (v(), a("div", {
			class: m([T(q)(s), t.$attrs.class]),
			onPointerdown: p
		}, [
			t.$slots.prefix || t.$slots.icon ? (v(), a("span", Et, [t.$slots.icon ? (v(), a("span", Dt, [C(t.$slots, "icon")])) : C(t.$slots, "prefix", {}, void 0, void 0, 1)])) : i("", !0),
			O(o("input", {
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
			}, null, 8, Ot), [[ne, u.value]]),
			t.$slots.suffix ? (v(), a("span", kt, [C(t.$slots, "suffix")])) : i("", !0),
			e.type === "password" ? (v(), a("button", {
				key: 2,
				type: "button",
				tabindex: "-1",
				class: "ui-input-button",
				disabled: e.disabled,
				onPointerdown: n[1] ||= k(() => {}, ["prevent"]),
				onMousedown: n[2] ||= k(() => {}, ["prevent"]),
				onClick: k(f, ["stop"])
			}, [l.value ? (v(), r(T(Qe), {
				key: 0,
				class: "ui-input-icon"
			})) : (v(), r(T($e), {
				key: 1,
				class: "ui-input-icon"
			}))], 40, At)) : i("", !0)
		], 34));
	}
}), Mt = {
	key: 0,
	class: "ui-input-prefix"
}, Nt = {
	key: 0,
	class: "ui-input-icon"
}, Pt = { class: "ui-listbox-label" }, Ft = ["onClick"], It = /* @__PURE__ */ l({
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
		let l = e, d = s, f = L(l, d), p = E("inputRef"), g = n(() => l.options?.map((e) => typeof e == "string" || typeof e == "number" ? {
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
		function y(e) {
			d("remove", e);
		}
		return (n, s) => (v(), r(T(ue), h(u(T(f))), {
			default: D(() => [c(T(ae), {
				class: m([T(q)(l), n.$attrs.class]),
				onPointerdown: _
			}, {
				default: D(() => [
					n.$slots.prefix || n.$slots.icon ? (v(), a("span", Mt, [n.$slots.icon ? (v(), a("span", Nt, [C(n.$slots, "icon")])) : C(n.$slots, "prefix", {}, void 0, void 0, 1)])) : i("", !0),
					c(T(se), {
						ref_key: "inputRef",
						ref: p,
						name: e.name,
						placeholder: e.placeholder,
						type: "text",
						class: "ui-input-native"
					}, null, 8, ["name", "placeholder"]),
					c(T(de), { class: "ui-input-button" }, {
						default: D(() => [c(T(R), { class: "ui-input-icon" })]),
						_: 1
					})
				]),
				_: 3
			}, 8, ["class"]), c(T(le), null, {
				default: D(() => [c(T(oe), {
					position: "popper",
					"side-offset": 4,
					align: "start",
					class: "ui-listbox-content"
				}, {
					default: D(() => [c(T(fe), { class: "ui-listbox-viewport" }, {
						default: D(() => [(v(!0), a(t, null, S(g.value, (e) => (v(), r(T(ce), {
							class: "ui-listbox-item no-indicator",
							value: e.value
						}, {
							default: D(() => [o("span", Pt, w(e.label), 1), o("button", {
								class: "ui-listbox-right-button",
								onClick: k((t) => y(e), ["stop"])
							}, " 删除 ", 8, Ft)]),
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
}), Lt = {
	key: 0,
	class: "ui-input-prefix"
}, Rt = { class: "ui-input-button" }, zt = /* @__PURE__ */ l({
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
		let d = e, f = L(d, l), p = n(() => d.data.map((e) => typeof e == "string" || typeof e == "number" ? {
			value: e,
			label: String(e)
		} : e));
		return (e, n) => (v(), r(T(Ae), h(u(T(f))), {
			default: D(() => [c(T(Ne), {
				class: m([
					"ui-select",
					T(q)(d),
					e.$attrs.class
				]),
				style: g(e.$attrs.style)
			}, {
				default: D(() => [
					e.$slots.prefix ? (v(), a("span", Lt, [C(e.$slots, "prefix")])) : i("", !0),
					c(T(Pe), {
						placeholder: d.placeholder,
						class: "ui-input-native"
					}, null, 8, ["placeholder"]),
					o("span", Rt, [C(e.$slots, "suffix", {}, () => [c(T(R), {
						size: 14,
						class: "ui-input-icon"
					})])])
				]),
				_: 3
			}, 8, ["class", "style"]), c(T(ke), null, {
				default: D(() => [c(T(Te), {
					position: "item-aligned",
					class: "ui-listbox-content"
				}, {
					default: D(() => [
						c(T(Me), { class: "ui-listbox-scroll-button" }, {
							default: D(() => [c(T(Ze), { size: 14 })]),
							_: 1
						}),
						c(T(Fe), null, {
							default: D(() => [(v(!0), a(t, null, S(p.value, (e) => (v(), r(T(Ee), {
								class: "ui-listbox-item",
								value: e.value
							}, {
								default: D(() => [c(T(De), { class: "ui-listbox-indicator" }, {
									default: D(() => [c(T(Ye), { size: 14 })]),
									_: 1
								}), c(T(Oe), { class: "ui-listbox-label" }, {
									default: D(() => [s(w(e.label ?? e.value), 1)]),
									_: 2
								}, 1024)]),
								_: 2
							}, 1032, ["value"]))), 256))]),
							_: 1
						}),
						c(T(je), { class: "ui-listbox-scroll-button" }, {
							default: D(() => [c(T(R), { size: 14 })]),
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
}), q = e("ui-input", {
	variants: { size: {
		base: "ui-input-base",
		small: "ui-input-small",
		medium: "ui-input-medium",
		large: "ui-input-large"
	} },
	defaultVariants: { size: "base" }
}), Bt = /* @__PURE__ */ l({
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
		let i = e, a = L(i, t), o = E("progressRef"), s = n(() => o.value?.getValueLabel ? o.value.getValueLabel(i.modelValue, i.max ?? 100) : 0);
		return (e, t) => (v(), r(T(we), p({
			class: "ui-progress",
			ref_key: "progressRef",
			ref: o
		}, T(a)), {
			default: D(() => [c(T(Ce), {
				class: "ui-progress-indicator",
				style: g({ width: s.value })
			}, null, 8, ["style"])]),
			_: 1
		}, 16));
	}
}), Vt = /* @__PURE__ */ l({
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
		let n = e, i = L(n, t);
		return (e, t) => (v(), r(T(He), p({ class: [T(J)(n), e.$attrs.class] }, T(i)), {
			default: D(() => [c(T(Ve), null, {
				default: D(() => [c(T(Be), { class: "ui-segmented-indicator" }), C(e.$slots, "default")]),
				_: 3
			})]),
			_: 3
		}, 16, ["class"]));
	}
}), Ht = /* @__PURE__ */ l({
	__name: "SegmentedItem",
	props: {
		label: {},
		value: {},
		disabled: { type: Boolean },
		asChild: { type: Boolean },
		as: {}
	},
	setup(e) {
		let t = L(e);
		return (n, i) => (v(), r(T(Ue), p(T(t), { class: "ui-segmented-item" }), {
			default: D(() => [s(w(e.label), 1)]),
			_: 1
		}, 16));
	}
}), J = e("ui-segmented", {
	variants: { size: {
		base: "",
		small: "ui-segmented_small",
		medium: "ui-segmented_medium",
		large: "ui-segmented_large"
	} },
	defaultVariants: { size: "base" }
}), Ut = /* @__PURE__ */ l({
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
		let i = L(e, n);
		return (n, o) => (v(), r(T(Le), p({ class: "ui-slider" }, T(i)), {
			default: D(() => [c(T(ze), { class: "ui-slider_track" }, {
				default: D(() => [c(T(Ie), { class: "ui-slider_range" })]),
				_: 1
			}), (v(!0), a(t, null, S(e.modelValue, (e, t) => (v(), r(T(Re), {
				key: t,
				class: "ui-slider_thumb"
			}))), 128))]),
			_: 1
		}, 16));
	}
}), Y = /* @__PURE__ */ l({
	__name: "Space",
	props: {
		size: { default: 8 },
		direction: { default: "horizontal" }
	},
	setup(e) {
		let n = e, r = te(), i = () => {
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
		return (t, r) => (v(), a("div", {
			class: m([T(X)(n), t.$attrs.class]),
			style: g({ gap: `${e.size}px` })
		}, [c(i)], 6));
	}
}), X = e("ui-space", {
	variants: { direction: {
		horizontal: "ui-space-horizontal",
		vertical: "ui-space-vertical"
	} },
	defaultVariants: { direction: "horizontal" }
}), Wt = /* @__PURE__ */ l({
	__name: "Splitter",
	setup(e) {
		return (e, t) => (v(), r(T(P), { direction: "horizontal" }, {
			default: D(() => [
				c(T(F), { class: "ui-splitter-panel" }, {
					default: D(() => [C(e.$slots, "default")]),
					_: 3
				}),
				c(T(I), { class: "ui-splitter-handle" }),
				c(T(F), null, {
					default: D(() => [c(T(P), { direction: "vertical" }, {
						default: D(() => [
							c(T(F), { class: "ui-splitter-panel" }, {
								default: D(() => [C(e.$slots, "top")]),
								_: 3
							}),
							c(T(I), { class: "ui-splitter-handle" }),
							c(T(F), { class: "ui-splitter-panel" }, {
								default: D(() => [C(e.$slots, "bottom")]),
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
}), Gt = /* @__PURE__ */ l({
	__name: "Toast",
	props: {
		message: { default: "" },
		type: { default: "info" },
		duration: { default: 3e3 },
		onDestroy: {}
	},
	setup(e) {
		let t = e, n = b(!1);
		return _(() => {
			n.value = !0;
		}), ie(n, (e) => {
			!e && t.onDestroy && setTimeout(() => {
				t.onDestroy?.();
			}, 200);
		}), (a, o) => (v(), r(T(Ke), {
			open: n.value,
			"onUpdate:open": o[0] ||= (e) => n.value = e,
			duration: t.duration,
			class: "ui-toast-root"
		}, {
			default: D(() => [e.type === "success" ? (v(), r(T(Xe), {
				key: 0,
				class: m(["ui-toast-icon", e.type])
			}, null, 8, ["class"])) : e.type === "error" ? (v(), r(T(rt), {
				key: 1,
				class: m(["ui-toast-icon", e.type])
			}, null, 8, ["class"])) : e.type === "warning" ? (v(), r(T(Je), {
				key: 2,
				class: m(["ui-toast-icon", e.type])
			}, null, 8, ["class"])) : (v(), r(T(et), {
				key: 3,
				class: m(["ui-toast-icon", e.type])
			}, null, 8, ["class"])), t.message ? (v(), r(T(We), {
				key: 4,
				class: "ui-toast-message"
			}, {
				default: D(() => [s(w(t.message), 1)]),
				_: 1
			})) : i("", !0)]),
			_: 1
		}, 8, ["open", "duration"]));
	}
}), Z = b([]), Q = !1, Kt = l({
	name: "GlobalToastContainer",
	setup() {
		return () => d(Ge, { swipeDirection: "up" }, () => [Z.value.map((e) => d(Gt, {
			key: e.id,
			...e,
			onDestroy: () => {
				Z.value = Z.value.filter((t) => t.id !== e.id);
			}
		})), d(qe, { class: "ui-toast-viewport" })]);
	}
}), qt = () => {
	if (!Q) {
		let e = document.createElement("div");
		e.id = "ui-toast-global-container", document.body.appendChild(e), x(d(Kt), e), Q = !0;
	}
}, Jt = 0, $ = (e) => {
	qt();
	let t = `ui-toast-${Date.now()}_${Jt++}`;
	Z.value.push({
		...e,
		id: t
	});
}, Yt = {
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
};
//#endregion
export { st as Alert, It as Autocomplete, z as Button, V as Dialog, lt as DropdownMenu, ut as DropdownMenuItem, ht as DropdownMenuSeparator, mt as DropdownMenuShortcut, yt as Form, Tt as FormItem, jt as Input, Bt as Progress, Vt as Segmented, Ht as SegmentedItem, zt as Select, Ut as Slider, Y as Space, Wt as Splitter, Yt as Toast, B as buttonVariants, q as inputVariants, J as segmentedVariants, X as spaceVariants };
