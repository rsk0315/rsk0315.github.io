(function() {var implementors = {
"nekolib":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"nekolib/utils/struct.PdepPextMaskU16.html\" title=\"struct nekolib::utils::PdepPextMaskU16\">PdepPextMaskU16</a>"],["impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>, Op: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/ops/function/trait.Fn.html\" title=\"trait core::ops::function::Fn\">Fn</a>(T, T) -&gt; T, Id: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/ops/function/trait.Fn.html\" title=\"trait core::ops::function::Fn\">Fn</a>() -&gt; T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"nekolib/utils/struct.OpClosure.html\" title=\"struct nekolib::utils::OpClosure\">OpClosure</a>&lt;T, Op, Id&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"nekolib/utils/struct.PdepPextMaskU32.html\" title=\"struct nekolib::utils::PdepPextMaskU32\">PdepPextMaskU32</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"nekolib/utils/rand_gen_macro/struct.Ascii.html\" title=\"struct nekolib::utils::rand_gen_macro::Ascii\">Ascii</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"nekolib/math/struct.ConstDiv.html\" title=\"struct nekolib::math::ConstDiv\">ConstDiv</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"nekolib/utils/struct.PdepPextMaskU8.html\" title=\"struct nekolib::utils::PdepPextMaskU8\">PdepPextMaskU8</a>"],["impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"enum\" href=\"nekolib/utils/enum.OpGcd.html\" title=\"enum nekolib::utils::OpGcd\">OpGcd</a>&lt;T&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"nekolib/utils/struct.PdepPextMaskU128.html\" title=\"struct nekolib::utils::PdepPextMaskU128\">PdepPextMaskU128</a>"],["impl&lt;const B: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.74.1/std/primitive.u64.html\">u64</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"enum\" href=\"nekolib/utils/enum.OpRollHash.html\" title=\"enum nekolib::utils::OpRollHash\">OpRollHash</a>&lt;B&gt;"],["impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>, OpT, IdT, U: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>, OpU, IdU, Act&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"nekolib/utils/struct.OpClosureOnOpClosure.html\" title=\"struct nekolib::utils::OpClosureOnOpClosure\">OpClosureOnOpClosure</a>&lt;T, OpT, IdT, U, OpU, IdU, Act&gt;<span class=\"where fmt-newline\">where\n    OpT: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/ops/function/trait.Fn.html\" title=\"trait core::ops::function::Fn\">Fn</a>(T, T) -&gt; T + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>,\n    IdT: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/ops/function/trait.Fn.html\" title=\"trait core::ops::function::Fn\">Fn</a>() -&gt; T + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>,\n    OpU: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/ops/function/trait.Fn.html\" title=\"trait core::ops::function::Fn\">Fn</a>(U, U) -&gt; U + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>,\n    IdU: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/ops/function/trait.Fn.html\" title=\"trait core::ops::function::Fn\">Fn</a>() -&gt; U + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>,\n    Act: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/ops/function/trait.Fn.html\" title=\"trait core::ops::function::Fn\">Fn</a>(T, U) -&gt; T + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>,</span>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"enum\" href=\"nekolib/graph/enum.HlEdge.html\" title=\"enum nekolib::graph::HlEdge\">HlEdge</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"nekolib/utils/rand_gen_macro/struct.AsciiGen.html\" title=\"struct nekolib::utils::rand_gen_macro::AsciiGen\">AsciiGen</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"nekolib/utils/rand_gen_macro/struct.AsciiString.html\" title=\"struct nekolib::utils::rand_gen_macro::AsciiString\">AsciiString</a>"],["impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"enum\" href=\"nekolib/utils/enum.OpMul.html\" title=\"enum nekolib::utils::OpMul\">OpMul</a>&lt;T&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"nekolib/utils/rand_gen_macro/struct.Permutation.html\" title=\"struct nekolib::utils::rand_gen_macro::Permutation\">Permutation</a>"],["impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"enum\" href=\"nekolib/utils/enum.OpMin.html\" title=\"enum nekolib::utils::OpMin\">OpMin</a>&lt;T&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"nekolib/traits/count/struct.Count3wayResult.html\" title=\"struct nekolib::traits::count::Count3wayResult\">Count3wayResult</a>"],["impl&lt;I: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"nekolib/math/struct.DynamicModInt.html\" title=\"struct nekolib::math::DynamicModInt\">DynamicModInt</a>&lt;I&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"nekolib/utils/struct.PdepPextMaskU64.html\" title=\"struct nekolib::utils::PdepPextMaskU64\">PdepPextMaskU64</a>"],["impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"nekolib/utils/struct.OpAddOnOpAddCount.html\" title=\"struct nekolib::utils::OpAddOnOpAddCount\">OpAddOnOpAddCount</a>&lt;T&gt;"],["impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"nekolib/utils/struct.OpAddOnOpMax.html\" title=\"struct nekolib::utils::OpAddOnOpMax\">OpAddOnOpMax</a>&lt;T&gt;"],["impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"nekolib/utils/struct.OpAddOnOpMin.html\" title=\"struct nekolib::utils::OpAddOnOpMin\">OpAddOnOpMin</a>&lt;T&gt;"],["impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"enum\" href=\"nekolib/utils/enum.OpMax.html\" title=\"enum nekolib::utils::OpMax\">OpMax</a>&lt;T&gt;"],["impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"enum\" href=\"nekolib/utils/enum.OpAffine.html\" title=\"enum nekolib::utils::OpAffine\">OpAffine</a>&lt;T&gt;"],["impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"nekolib/ds/interval_map/struct.Interval.html\" title=\"struct nekolib::ds::interval_map::Interval\">Interval</a>&lt;T&gt;"],["impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"enum\" href=\"nekolib/utils/enum.OpAddCount.html\" title=\"enum nekolib::utils::OpAddCount\">OpAddCount</a>&lt;T&gt;"],["impl&lt;M: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"nekolib/math/struct.StaticModInt.html\" title=\"struct nekolib::math::StaticModInt\">StaticModInt</a>&lt;M&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"nekolib/math/struct.Mod998244353.html\" title=\"struct nekolib::math::Mod998244353\">Mod998244353</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"enum\" href=\"nekolib/math/enum.DefaultId.html\" title=\"enum nekolib::math::DefaultId\">DefaultId</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"nekolib/math/struct.ConstDiv2.html\" title=\"struct nekolib::math::ConstDiv2\">ConstDiv2</a>"],["impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"nekolib/utils/struct.OpAffineOnOpAddCount.html\" title=\"struct nekolib::utils::OpAffineOnOpAddCount\">OpAffineOnOpAddCount</a>&lt;T&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"nekolib/utils/rand_gen_macro/struct.AsciiStringOfCharset.html\" title=\"struct nekolib::utils::rand_gen_macro::AsciiStringOfCharset\">AsciiStringOfCharset</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"nekolib/math/struct.Mod1000000007.html\" title=\"struct nekolib::math::Mod1000000007\">Mod1000000007</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"enum\" href=\"nekolib/graph/enum.Direction.html\" title=\"enum nekolib::graph::Direction\">Direction</a>"],["impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.1/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"enum\" href=\"nekolib/utils/enum.OpAdd.html\" title=\"enum nekolib::utils::OpAdd\">OpAdd</a>&lt;T&gt;"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()