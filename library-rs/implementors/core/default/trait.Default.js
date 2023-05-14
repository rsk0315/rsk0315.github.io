(function() {var implementors = {
"nekolib":[["impl&lt;I: <a class=\"trait\" href=\"nekolib/math/modint/trait.DynamicModIntId.html\" title=\"trait nekolib::math::modint::DynamicModIntId\">DynamicModIntId</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"nekolib/math/modint/struct.DynamicModInt.html\" title=\"struct nekolib::math::modint::DynamicModInt\">DynamicModInt</a>&lt;I&gt;"],["impl&lt;M&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"nekolib/ds/struct.VecSegtree.html\" title=\"struct nekolib::ds::VecSegtree\">VecSegtree</a>&lt;M&gt;<span class=\"where fmt-newline\">where\n    M: <a class=\"trait\" href=\"nekolib/traits/trait.Monoid.html\" title=\"trait nekolib::traits::Monoid\">Monoid</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>,\n    M::<a class=\"associatedtype\" href=\"nekolib/traits/trait.Magma.html#associatedtype.Set\" title=\"type nekolib::traits::Magma::Set\">Set</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,</span>"],["impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>, OpT, IdT, U: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>, OpU, IdU, Act&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"nekolib/utils/struct.OpClosureOnOpClosure.html\" title=\"struct nekolib::utils::OpClosureOnOpClosure\">OpClosureOnOpClosure</a>&lt;T, OpT, IdT, U, OpU, IdU, Act&gt;<span class=\"where fmt-newline\">where\n    OpT: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/ops/function/trait.Fn.html\" title=\"trait core::ops::function::Fn\">Fn</a>(T, T) -&gt; T + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>,\n    IdT: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/ops/function/trait.Fn.html\" title=\"trait core::ops::function::Fn\">Fn</a>() -&gt; T + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>,\n    OpU: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/ops/function/trait.Fn.html\" title=\"trait core::ops::function::Fn\">Fn</a>(U, U) -&gt; U + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>,\n    IdU: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/ops/function/trait.Fn.html\" title=\"trait core::ops::function::Fn\">Fn</a>() -&gt; U + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>,\n    Act: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/ops/function/trait.Fn.html\" title=\"trait core::ops::function::Fn\">Fn</a>(T, U) -&gt; T + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>,</span>"],["impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"enum\" href=\"nekolib/utils/enum.OpAddCount.html\" title=\"enum nekolib::utils::OpAddCount\">OpAddCount</a>&lt;T&gt;"],["impl&lt;M&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"nekolib/ds/struct.FoldableDeque.html\" title=\"struct nekolib::ds::FoldableDeque\">FoldableDeque</a>&lt;M&gt;<span class=\"where fmt-newline\">where\n    M: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> + <a class=\"trait\" href=\"nekolib/traits/trait.Monoid.html\" title=\"trait nekolib::traits::Monoid\">Monoid</a>,\n    M::<a class=\"associatedtype\" href=\"nekolib/traits/trait.Magma.html#associatedtype.Set\" title=\"type nekolib::traits::Magma::Set\">Set</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,</span>"],["impl&lt;const B: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.69.0/std/primitive.u64.html\">u64</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"enum\" href=\"nekolib/utils/enum.OpRollHash.html\" title=\"enum nekolib::utils::OpRollHash\">OpRollHash</a>&lt;B&gt;"],["impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"nekolib/utils/struct.OpAddOnOpMin.html\" title=\"struct nekolib::utils::OpAddOnOpMin\">OpAddOnOpMin</a>&lt;T&gt;"],["impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"enum\" href=\"nekolib/utils/enum.OpAdd.html\" title=\"enum nekolib::utils::OpAdd\">OpAdd</a>&lt;T&gt;"],["impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"nekolib/utils/struct.OpAddOnOpAddCount.html\" title=\"struct nekolib::utils::OpAddOnOpAddCount\">OpAddOnOpAddCount</a>&lt;T&gt;"],["impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"enum\" href=\"nekolib/utils/enum.OpMin.html\" title=\"enum nekolib::utils::OpMin\">OpMin</a>&lt;T&gt;"],["impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"enum\" href=\"nekolib/utils/enum.OpMul.html\" title=\"enum nekolib::utils::OpMul\">OpMul</a>&lt;T&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"nekolib/algo/struct.ExactCover.html\" title=\"struct nekolib::algo::ExactCover\">ExactCover</a>"],["impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"nekolib/utils/struct.OpAddOnOpMax.html\" title=\"struct nekolib::utils::OpAddOnOpMax\">OpAddOnOpMax</a>&lt;T&gt;"],["impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"nekolib/ds/struct.SkewHeap.html\" title=\"struct nekolib::ds::SkewHeap\">SkewHeap</a>&lt;T&gt;"],["impl&lt;M: <a class=\"trait\" href=\"nekolib/math/trait.Modulus.html\" title=\"trait nekolib::math::Modulus\">Modulus</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"nekolib/math/struct.StaticModInt.html\" title=\"struct nekolib::math::StaticModInt\">StaticModInt</a>&lt;M&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"nekolib/ds/struct.BitSet.html\" title=\"struct nekolib::ds::BitSet\">BitSet</a>"],["impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>, Op: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/ops/function/trait.Fn.html\" title=\"trait core::ops::function::Fn\">Fn</a>(T, T) -&gt; T, Id: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/ops/function/trait.Fn.html\" title=\"trait core::ops::function::Fn\">Fn</a>() -&gt; T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"nekolib/utils/struct.OpClosure.html\" title=\"struct nekolib::utils::OpClosure\">OpClosure</a>&lt;T, Op, Id&gt;"],["impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"enum\" href=\"nekolib/utils/enum.OpGcd.html\" title=\"enum nekolib::utils::OpGcd\">OpGcd</a>&lt;T&gt;"],["impl&lt;I: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"nekolib/ds/struct.IncrementalLineSet.html\" title=\"struct nekolib::ds::IncrementalLineSet\">IncrementalLineSet</a>&lt;I&gt;"],["impl&lt;I: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"nekolib/math/struct.SlopeFunction.html\" title=\"struct nekolib::math::SlopeFunction\">SlopeFunction</a>&lt;I&gt;"],["impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"enum\" href=\"nekolib/utils/enum.OpAffine.html\" title=\"enum nekolib::utils::OpAffine\">OpAffine</a>&lt;T&gt;"],["impl&lt;M&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"nekolib/ds/struct.FoldableQueue.html\" title=\"struct nekolib::ds::FoldableQueue\">FoldableQueue</a>&lt;M&gt;<span class=\"where fmt-newline\">where\n    M: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> + <a class=\"trait\" href=\"nekolib/traits/trait.Monoid.html\" title=\"trait nekolib::traits::Monoid\">Monoid</a>,\n    M::<a class=\"associatedtype\" href=\"nekolib/traits/trait.Magma.html#associatedtype.Set\" title=\"type nekolib::traits::Magma::Set\">Set</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,</span>"],["impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"enum\" href=\"nekolib/utils/enum.OpMax.html\" title=\"enum nekolib::utils::OpMax\">OpMax</a>&lt;T&gt;"],["impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"nekolib/utils/struct.OpAffineOnOpAddCount.html\" title=\"struct nekolib::utils::OpAffineOnOpAddCount\">OpAffineOnOpAddCount</a>&lt;T&gt;"],["impl&lt;L: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a>, R: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"nekolib/ds/struct.BTreeBimap.html\" title=\"struct nekolib::ds::BTreeBimap\">BTreeBimap</a>&lt;L, R&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"nekolib/math/modint/struct.Barrett.html\" title=\"struct nekolib::math::modint::Barrett\">Barrett</a>"],["impl&lt;A&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"nekolib/ds/struct.VecActSegtree.html\" title=\"struct nekolib::ds::VecActSegtree\">VecActSegtree</a>&lt;A&gt;<span class=\"where fmt-newline\">where\n    A: <a class=\"trait\" href=\"nekolib/traits/trait.MonoidAction.html\" title=\"trait nekolib::traits::MonoidAction\">MonoidAction</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>,\n    &lt;A::<a class=\"associatedtype\" href=\"nekolib/traits/trait.MonoidAction.html#associatedtype.Operator\" title=\"type nekolib::traits::MonoidAction::Operator\">Operator</a> as <a class=\"trait\" href=\"nekolib/traits/trait.Magma.html\" title=\"trait nekolib::traits::Magma\">Magma</a>&gt;::<a class=\"associatedtype\" href=\"nekolib/traits/trait.Magma.html#associatedtype.Set\" title=\"type nekolib::traits::Magma::Set\">Set</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,\n    &lt;A::<a class=\"associatedtype\" href=\"nekolib/traits/trait.MonoidAction.html#associatedtype.Operand\" title=\"type nekolib::traits::MonoidAction::Operand\">Operand</a> as <a class=\"trait\" href=\"nekolib/traits/trait.Magma.html\" title=\"trait nekolib::traits::Magma\">Magma</a>&gt;::<a class=\"associatedtype\" href=\"nekolib/traits/trait.Magma.html#associatedtype.Set\" title=\"type nekolib::traits::Magma::Set\">Set</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,\n    A::<a class=\"associatedtype\" href=\"nekolib/traits/trait.MonoidAction.html#associatedtype.Operand\" title=\"type nekolib::traits::MonoidAction::Operand\">Operand</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>,\n    A::<a class=\"associatedtype\" href=\"nekolib/traits/trait.MonoidAction.html#associatedtype.Operator\" title=\"type nekolib::traits::MonoidAction::Operator\">Operator</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>,</span>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()