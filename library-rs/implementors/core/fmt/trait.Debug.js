(function() {var implementors = {
"nekolib":[["impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"enum\" href=\"nekolib/utils/enum.OpAffine.html\" title=\"enum nekolib::utils::OpAffine\">OpAffine</a>&lt;T&gt;"],["impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>, Op: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/ops/function/trait.Fn.html\" title=\"trait core::ops::function::Fn\">Fn</a>(T, T) -&gt; T, Id: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/ops/function/trait.Fn.html\" title=\"trait core::ops::function::Fn\">Fn</a>() -&gt; T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"nekolib/utils/struct.OpClosure.html\" title=\"struct nekolib::utils::OpClosure\">OpClosure</a>&lt;T, Op, Id&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"nekolib/math/struct.SieveN2PlusNPlus1.html\" title=\"struct nekolib::math::SieveN2PlusNPlus1\">SieveN2PlusNPlus1</a>"],["impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"nekolib/utils/struct.OpAffineOnOpAddCount.html\" title=\"struct nekolib::utils::OpAffineOnOpAddCount\">OpAffineOnOpAddCount</a>&lt;T&gt;"],["impl&lt;K: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"nekolib/ds/struct.CuckooHashSet.html\" title=\"struct nekolib::ds::CuckooHashSet\">CuckooHashSet</a>&lt;K&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"nekolib/ds/struct.RsDict.html\" title=\"struct nekolib::ds::RsDict\">RsDict</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"nekolib/math/struct.SegmentedFactorSieve.html\" title=\"struct nekolib::math::SegmentedFactorSieve\">SegmentedFactorSieve</a>"],["impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"nekolib/seq/struct.ZSearcher.html\" title=\"struct nekolib::seq::ZSearcher\">ZSearcher</a>&lt;T&gt;"],["impl&lt;const B: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.69.0/std/primitive.u64.html\">u64</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"enum\" href=\"nekolib/utils/enum.OpRollHash.html\" title=\"enum nekolib::utils::OpRollHash\">OpRollHash</a>&lt;B&gt;"],["impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"nekolib/seq/struct.KmpSearcher.html\" title=\"struct nekolib::seq::KmpSearcher\">KmpSearcher</a>&lt;T&gt;"],["impl&lt;'a, D&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"nekolib/utils/struct.SpaceSep.html\" title=\"struct nekolib::utils::SpaceSep\">SpaceSep</a>&lt;'a, D&gt;<span class=\"where fmt-newline\">where\n    D: ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a> + 'a,\n    <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.69.0/std/primitive.reference.html\">&amp;'a D</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/iter/traits/collect/trait.IntoIterator.html\" title=\"trait core::iter::traits::collect::IntoIterator\">IntoIterator</a>,\n    &lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.69.0/std/primitive.reference.html\">&amp;'a D</a> as <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/iter/traits/collect/trait.IntoIterator.html\" title=\"trait core::iter::traits::collect::IntoIterator\">IntoIterator</a>&gt;::<a class=\"associatedtype\" href=\"https://doc.rust-lang.org/1.69.0/core/iter/traits/collect/trait.IntoIterator.html#associatedtype.Item\" title=\"type core::iter::traits::collect::IntoIterator::Item\">Item</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,</span>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"nekolib/graph/struct.Hld.html\" title=\"struct nekolib::graph::Hld\">Hld</a>"],["impl&lt;'a, D&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"nekolib/utils/struct.StrSep.html\" title=\"struct nekolib::utils::StrSep\">StrSep</a>&lt;'a, D&gt;<span class=\"where fmt-newline\">where\n    D: ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a> + 'a,\n    <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.69.0/std/primitive.reference.html\">&amp;'a D</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/iter/traits/collect/trait.IntoIterator.html\" title=\"trait core::iter::traits::collect::IntoIterator\">IntoIterator</a>,\n    &lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.69.0/std/primitive.reference.html\">&amp;'a D</a> as <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/iter/traits/collect/trait.IntoIterator.html\" title=\"trait core::iter::traits::collect::IntoIterator\">IntoIterator</a>&gt;::<a class=\"associatedtype\" href=\"https://doc.rust-lang.org/1.69.0/core/iter/traits/collect/trait.IntoIterator.html#associatedtype.Item\" title=\"type core::iter::traits::collect::IntoIterator::Item\">Item</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,</span>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"nekolib/traits/count/struct.Count3wayResult.html\" title=\"struct nekolib::traits::count::Count3wayResult\">Count3wayResult</a>"],["impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"nekolib/utils/struct.OpAddOnOpMax.html\" title=\"struct nekolib::utils::OpAddOnOpMax\">OpAddOnOpMax</a>&lt;T&gt;"],["impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"enum\" href=\"nekolib/utils/enum.OpGcd.html\" title=\"enum nekolib::utils::OpGcd\">OpGcd</a>&lt;T&gt;"],["impl&lt;I: <a class=\"trait\" href=\"nekolib/ds/incremental_line_set/trait.ChtInt.html\" title=\"trait nekolib::ds::incremental_line_set::ChtInt\">ChtInt</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"nekolib/ds/struct.IncrementalLineSet.html\" title=\"struct nekolib::ds::IncrementalLineSet\">IncrementalLineSet</a>&lt;I&gt;"],["impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"nekolib/ds/struct.BicrementalMedian.html\" title=\"struct nekolib::ds::BicrementalMedian\">BicrementalMedian</a>&lt;T&gt;"],["impl&lt;A&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"nekolib/ds/struct.VecActSegtree.html\" title=\"struct nekolib::ds::VecActSegtree\">VecActSegtree</a>&lt;A&gt;<span class=\"where fmt-newline\">where\n    A: <a class=\"trait\" href=\"nekolib/traits/trait.MonoidAction.html\" title=\"trait nekolib::traits::MonoidAction\">MonoidAction</a>,\n    &lt;A::<a class=\"associatedtype\" href=\"nekolib/traits/trait.MonoidAction.html#associatedtype.Operator\" title=\"type nekolib::traits::MonoidAction::Operator\">Operator</a> as <a class=\"trait\" href=\"nekolib/traits/trait.Magma.html\" title=\"trait nekolib::traits::Magma\">Magma</a>&gt;::<a class=\"associatedtype\" href=\"nekolib/traits/trait.Magma.html#associatedtype.Set\" title=\"type nekolib::traits::Magma::Set\">Set</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,\n    &lt;A::<a class=\"associatedtype\" href=\"nekolib/traits/trait.MonoidAction.html#associatedtype.Operand\" title=\"type nekolib::traits::MonoidAction::Operand\">Operand</a> as <a class=\"trait\" href=\"nekolib/traits/trait.Magma.html\" title=\"trait nekolib::traits::Magma\">Magma</a>&gt;::<a class=\"associatedtype\" href=\"nekolib/traits/trait.Magma.html#associatedtype.Set\" title=\"type nekolib::traits::Magma::Set\">Set</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,</span>"],["impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"enum\" href=\"nekolib/utils/enum.OpAddCount.html\" title=\"enum nekolib::utils::OpAddCount\">OpAddCount</a>&lt;T&gt;"],["impl&lt;M&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"nekolib/ds/struct.VecSegtree.html\" title=\"struct nekolib::ds::VecSegtree\">VecSegtree</a>&lt;M&gt;<span class=\"where fmt-newline\">where\n    M: <a class=\"trait\" href=\"nekolib/traits/trait.Monoid.html\" title=\"trait nekolib::traits::Monoid\">Monoid</a>,\n    M::<a class=\"associatedtype\" href=\"nekolib/traits/trait.Magma.html#associatedtype.Set\" title=\"type nekolib::traits::Magma::Set\">Set</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,</span>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"nekolib/utils/scanner/struct.ScanTupleError.html\" title=\"struct nekolib::utils::scanner::ScanTupleError\">ScanTupleError</a>"],["impl&lt;M: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"nekolib/traits/trait.Monoid.html\" title=\"trait nekolib::traits::Monoid\">Monoid</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"nekolib/ds/struct.FoldableQueue.html\" title=\"struct nekolib::ds::FoldableQueue\">FoldableQueue</a>&lt;M&gt;<span class=\"where fmt-newline\">where\n    M::<a class=\"associatedtype\" href=\"nekolib/traits/trait.Magma.html#associatedtype.Set\" title=\"type nekolib::traits::Magma::Set\">Set</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,</span>"],["impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"nekolib/utils/struct.OpAddOnOpMin.html\" title=\"struct nekolib::utils::OpAddOnOpMin\">OpAddOnOpMin</a>&lt;T&gt;"],["impl&lt;M: <a class=\"trait\" href=\"nekolib/math/trait.Modulus.html\" title=\"trait nekolib::math::Modulus\">Modulus</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"nekolib/math/struct.StaticModInt.html\" title=\"struct nekolib::math::StaticModInt\">StaticModInt</a>&lt;M&gt;"],["impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"nekolib/ds/interval_map/struct.Interval.html\" title=\"struct nekolib::ds::interval_map::Interval\">Interval</a>&lt;T&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"nekolib/math/struct.ConstDiv2.html\" title=\"struct nekolib::math::ConstDiv2\">ConstDiv2</a>"],["impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"enum\" href=\"nekolib/utils/enum.OpMax.html\" title=\"enum nekolib::utils::OpMax\">OpMax</a>&lt;T&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"nekolib/ds/struct.BitSet.html\" title=\"struct nekolib::ds::BitSet\">BitSet</a>"],["impl&lt;K: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>, V: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"nekolib/ds/struct.CuckooHashMap.html\" title=\"struct nekolib::ds::CuckooHashMap\">CuckooHashMap</a>&lt;K, V&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"enum\" href=\"nekolib/graph/enum.Direction.html\" title=\"enum nekolib::graph::Direction\">Direction</a>"],["impl&lt;I: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"enum\" href=\"nekolib/math/enum.ApproxFrac.html\" title=\"enum nekolib::math::ApproxFrac\">ApproxFrac</a>&lt;I&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"enum\" href=\"nekolib/math/modint/enum.DefaultId.html\" title=\"enum nekolib::math::modint::DefaultId\">DefaultId</a>"],["impl&lt;M: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"nekolib/traits/trait.Monoid.html\" title=\"trait nekolib::traits::Monoid\">Monoid</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"nekolib/ds/struct.FoldableDeque.html\" title=\"struct nekolib::ds::FoldableDeque\">FoldableDeque</a>&lt;M&gt;<span class=\"where fmt-newline\">where\n    M::<a class=\"associatedtype\" href=\"nekolib/traits/trait.Magma.html#associatedtype.Set\" title=\"type nekolib::traits::Magma::Set\">Set</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,</span>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"nekolib/graph/struct.FunctionalGraph.html\" title=\"struct nekolib::graph::FunctionalGraph\">FunctionalGraph</a>"],["impl&lt;M: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"nekolib/traits/trait.CommutativeGroup.html\" title=\"trait nekolib::traits::CommutativeGroup\">CommutativeGroup</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"nekolib/ds/struct.BicrementalMedianDev.html\" title=\"struct nekolib::ds::BicrementalMedianDev\">BicrementalMedianDev</a>&lt;M&gt;<span class=\"where fmt-newline\">where\n    M::<a class=\"associatedtype\" href=\"nekolib/traits/trait.Magma.html#associatedtype.Set\" title=\"type nekolib::traits::Magma::Set\">Set</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,</span>"],["impl&lt;I: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"nekolib/math/struct.SlopeFunction.html\" title=\"struct nekolib::math::SlopeFunction\">SlopeFunction</a>&lt;I&gt;"],["impl&lt;K: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>, V: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"nekolib/ds/struct.IntervalMap.html\" title=\"struct nekolib::ds::IntervalMap\">IntervalMap</a>&lt;K, V&gt;"],["impl&lt;'a, I: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"nekolib/ds/binary_trie/struct.Iter.html\" title=\"struct nekolib::ds::binary_trie::Iter\">Iter</a>&lt;'a, I&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"nekolib/math/struct.SieveN2Plus1.html\" title=\"struct nekolib::math::SieveN2Plus1\">SieveN2Plus1</a>"],["impl&lt;'a, D&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"nekolib/utils/struct.PerLine.html\" title=\"struct nekolib::utils::PerLine\">PerLine</a>&lt;'a, D&gt;<span class=\"where fmt-newline\">where\n    D: ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a> + 'a,\n    <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.69.0/std/primitive.reference.html\">&amp;'a D</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/iter/traits/collect/trait.IntoIterator.html\" title=\"trait core::iter::traits::collect::IntoIterator\">IntoIterator</a>,\n    &lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.69.0/std/primitive.reference.html\">&amp;'a D</a> as <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/iter/traits/collect/trait.IntoIterator.html\" title=\"trait core::iter::traits::collect::IntoIterator\">IntoIterator</a>&gt;::<a class=\"associatedtype\" href=\"https://doc.rust-lang.org/1.69.0/core/iter/traits/collect/trait.IntoIterator.html#associatedtype.Item\" title=\"type core::iter::traits::collect::IntoIterator::Item\">Item</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,</span>"],["impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"nekolib/seq/struct.SuffixArray.html\" title=\"struct nekolib::seq::SuffixArray\">SuffixArray</a>&lt;T&gt;"],["impl&lt;I: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"nekolib/ds/struct.BinaryTrie.html\" title=\"struct nekolib::ds::BinaryTrie\">BinaryTrie</a>&lt;I&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"nekolib/math/struct.ConstDiv.html\" title=\"struct nekolib::math::ConstDiv\">ConstDiv</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"enum\" href=\"nekolib/graph/enum.HlEdge.html\" title=\"enum nekolib::graph::HlEdge\">HlEdge</a>"],["impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"enum\" href=\"nekolib/utils/enum.OpMul.html\" title=\"enum nekolib::utils::OpMul\">OpMul</a>&lt;T&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"nekolib/math/struct.HarmonicFloorSum.html\" title=\"struct nekolib::math::HarmonicFloorSum\">HarmonicFloorSum</a>"],["impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"enum\" href=\"nekolib/utils/enum.OpMin.html\" title=\"enum nekolib::utils::OpMin\">OpMin</a>&lt;T&gt;"],["impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>, OpT, IdT, U: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>, OpU, IdU, Act&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"nekolib/utils/struct.OpClosureOnOpClosure.html\" title=\"struct nekolib::utils::OpClosureOnOpClosure\">OpClosureOnOpClosure</a>&lt;T, OpT, IdT, U, OpU, IdU, Act&gt;<span class=\"where fmt-newline\">where\n    OpT: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/ops/function/trait.Fn.html\" title=\"trait core::ops::function::Fn\">Fn</a>(T, T) -&gt; T + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,\n    IdT: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/ops/function/trait.Fn.html\" title=\"trait core::ops::function::Fn\">Fn</a>() -&gt; T + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,\n    OpU: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/ops/function/trait.Fn.html\" title=\"trait core::ops::function::Fn\">Fn</a>(U, U) -&gt; U + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,\n    IdU: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/ops/function/trait.Fn.html\" title=\"trait core::ops::function::Fn\">Fn</a>() -&gt; U + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,\n    Act: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/ops/function/trait.Fn.html\" title=\"trait core::ops::function::Fn\">Fn</a>(T, U) -&gt; T + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,</span>"],["impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"nekolib/utils/struct.OpAddOnOpAddCount.html\" title=\"struct nekolib::utils::OpAddOnOpAddCount\">OpAddOnOpAddCount</a>&lt;T&gt;"],["impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"nekolib/ds/struct.IntervalSet.html\" title=\"struct nekolib::ds::IntervalSet\">IntervalSet</a>&lt;T&gt;"],["impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"nekolib/ds/struct.SkewHeap.html\" title=\"struct nekolib::ds::SkewHeap\">SkewHeap</a>&lt;T&gt;"],["impl&lt;I: <a class=\"trait\" href=\"nekolib/math/modint/trait.DynamicModIntId.html\" title=\"trait nekolib::math::modint::DynamicModIntId\">DynamicModIntId</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"nekolib/math/modint/struct.DynamicModInt.html\" title=\"struct nekolib::math::modint::DynamicModInt\">DynamicModInt</a>&lt;I&gt;"],["impl&lt;L: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a>, R: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"nekolib/ds/struct.BTreeBimap.html\" title=\"struct nekolib::ds::BTreeBimap\">BTreeBimap</a>&lt;L, R&gt;"],["impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"enum\" href=\"nekolib/utils/enum.OpAdd.html\" title=\"enum nekolib::utils::OpAdd\">OpAdd</a>&lt;T&gt;"],["impl&lt;K: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"nekolib/ds/struct.BTreeMultiset.html\" title=\"struct nekolib::ds::BTreeMultiset\">BTreeMultiset</a>&lt;K&gt;"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()