(function() {var implementors = {};
implementors["nekolib"] = [{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"nekolib/ds/struct.BicrementalMedian.html\" title=\"struct nekolib::ds::BicrementalMedian\">BicrementalMedian</a>&lt;T&gt;","synthetic":false,"types":["nekolib::ds::bicremental_median::BicrementalMedian"]},{"text":"impl&lt;M:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"nekolib/traits/trait.CommutativeGroup.html\" title=\"trait nekolib::traits::CommutativeGroup\">CommutativeGroup</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"nekolib/ds/struct.BicrementalMedianDev.html\" title=\"struct nekolib::ds::BicrementalMedianDev\">BicrementalMedianDev</a>&lt;M&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;M::<a class=\"type\" href=\"nekolib/traits/trait.Magma.html#associatedtype.Set\" title=\"type nekolib::traits::Magma::Set\">Set</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;M::<a class=\"type\" href=\"nekolib/traits/trait.Magma.html#associatedtype.Set\" title=\"type nekolib::traits::Magma::Set\">Set</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;M::<a class=\"type\" href=\"nekolib/traits/trait.Magma.html#associatedtype.Set\" title=\"type nekolib::traits::Magma::Set\">Set</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;M::<a class=\"type\" href=\"nekolib/traits/trait.Magma.html#associatedtype.Set\" title=\"type nekolib::traits::Magma::Set\">Set</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;M::<a class=\"type\" href=\"nekolib/traits/trait.Magma.html#associatedtype.Set\" title=\"type nekolib::traits::Magma::Set\">Set</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,&nbsp;</span>","synthetic":false,"types":["nekolib::ds::bicremental_median_dev::BicrementalMedianDev"]},{"text":"impl&lt;K:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"nekolib/ds/struct.BTreeMultiset.html\" title=\"struct nekolib::ds::BTreeMultiset\">BTreeMultiset</a>&lt;K&gt;","synthetic":false,"types":["nekolib::ds::btree_multiset::BTreeMultiset"]},{"text":"impl&lt;K:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>, V:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"nekolib/ds/struct.CuckooHashMap.html\" title=\"struct nekolib::ds::CuckooHashMap\">CuckooHashMap</a>&lt;K, V&gt;","synthetic":false,"types":["nekolib::ds::cuckoo_hash_map::CuckooHashMap"]},{"text":"impl&lt;K:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"nekolib/ds/struct.CuckooHashSet.html\" title=\"struct nekolib::ds::CuckooHashSet\">CuckooHashSet</a>&lt;K&gt;","synthetic":false,"types":["nekolib::ds::cuckoo_hash_set::CuckooHashSet"]},{"text":"impl&lt;M:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"nekolib/traits/trait.Monoid.html\" title=\"trait nekolib::traits::Monoid\">Monoid</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"nekolib/ds/struct.FoldableDeque.html\" title=\"struct nekolib::ds::FoldableDeque\">FoldableDeque</a>&lt;M&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;M::<a class=\"type\" href=\"nekolib/traits/trait.Magma.html#associatedtype.Set\" title=\"type nekolib::traits::Magma::Set\">Set</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;M::<a class=\"type\" href=\"nekolib/traits/trait.Magma.html#associatedtype.Set\" title=\"type nekolib::traits::Magma::Set\">Set</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;M::<a class=\"type\" href=\"nekolib/traits/trait.Magma.html#associatedtype.Set\" title=\"type nekolib::traits::Magma::Set\">Set</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;M::<a class=\"type\" href=\"nekolib/traits/trait.Magma.html#associatedtype.Set\" title=\"type nekolib::traits::Magma::Set\">Set</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,&nbsp;</span>","synthetic":false,"types":["nekolib::ds::foldable_deque::FoldableDeque"]},{"text":"impl&lt;M:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"nekolib/traits/trait.Monoid.html\" title=\"trait nekolib::traits::Monoid\">Monoid</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"nekolib/ds/struct.FoldableQueue.html\" title=\"struct nekolib::ds::FoldableQueue\">FoldableQueue</a>&lt;M&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;M::<a class=\"type\" href=\"nekolib/traits/trait.Magma.html#associatedtype.Set\" title=\"type nekolib::traits::Magma::Set\">Set</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;M::<a class=\"type\" href=\"nekolib/traits/trait.Magma.html#associatedtype.Set\" title=\"type nekolib::traits::Magma::Set\">Set</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;M::<a class=\"type\" href=\"nekolib/traits/trait.Magma.html#associatedtype.Set\" title=\"type nekolib::traits::Magma::Set\">Set</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;M::<a class=\"type\" href=\"nekolib/traits/trait.Magma.html#associatedtype.Set\" title=\"type nekolib::traits::Magma::Set\">Set</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,&nbsp;</span>","synthetic":false,"types":["nekolib::ds::foldable_queue::FoldableQueue"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"nekolib/ds/interval_map/struct.Interval.html\" title=\"struct nekolib::ds::interval_map::Interval\">Interval</a>&lt;T&gt;","synthetic":false,"types":["nekolib::ds::interval_map::Interval"]},{"text":"impl&lt;K:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>, V:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"nekolib/ds/struct.IntervalMap.html\" title=\"struct nekolib::ds::IntervalMap\">IntervalMap</a>&lt;K, V&gt;","synthetic":false,"types":["nekolib::ds::interval_map::IntervalMap"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"nekolib/ds/struct.IntervalSet.html\" title=\"struct nekolib::ds::IntervalSet\">IntervalSet</a>&lt;T&gt;","synthetic":false,"types":["nekolib::ds::interval_set::IntervalSet"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"nekolib/ds/struct.RsDict.html\" title=\"struct nekolib::ds::RsDict\">RsDict</a>","synthetic":false,"types":["nekolib::ds::rs_dict::RsDict"]},{"text":"impl&lt;A&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"nekolib/ds/struct.VecActSegtree.html\" title=\"struct nekolib::ds::VecActSegtree\">VecActSegtree</a>&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: <a class=\"trait\" href=\"nekolib/traits/trait.MonoidAction.html\" title=\"trait nekolib::traits::MonoidAction\">MonoidAction</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;A::<a class=\"type\" href=\"nekolib/traits/trait.MonoidAction.html#associatedtype.Operator\" title=\"type nekolib::traits::MonoidAction::Operator\">Operator</a> as <a class=\"trait\" href=\"nekolib/traits/trait.Magma.html\" title=\"trait nekolib::traits::Magma\">Magma</a>&gt;::<a class=\"type\" href=\"nekolib/traits/trait.Magma.html#associatedtype.Set\" title=\"type nekolib::traits::Magma::Set\">Set</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;A::<a class=\"type\" href=\"nekolib/traits/trait.MonoidAction.html#associatedtype.Operand\" title=\"type nekolib::traits::MonoidAction::Operand\">Operand</a> as <a class=\"trait\" href=\"nekolib/traits/trait.Magma.html\" title=\"trait nekolib::traits::Magma\">Magma</a>&gt;::<a class=\"type\" href=\"nekolib/traits/trait.Magma.html#associatedtype.Set\" title=\"type nekolib::traits::Magma::Set\">Set</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,&nbsp;</span>","synthetic":false,"types":["nekolib::ds::vec_act_segtree::VecActSegtree"]},{"text":"impl&lt;M&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"nekolib/ds/struct.VecSegtree.html\" title=\"struct nekolib::ds::VecSegtree\">VecSegtree</a>&lt;M&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;M: <a class=\"trait\" href=\"nekolib/traits/trait.Monoid.html\" title=\"trait nekolib::traits::Monoid\">Monoid</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;M::<a class=\"type\" href=\"nekolib/traits/trait.Magma.html#associatedtype.Set\" title=\"type nekolib::traits::Magma::Set\">Set</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,&nbsp;</span>","synthetic":false,"types":["nekolib::ds::vec_segtree::VecSegtree"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"nekolib/graph/struct.FunctionalGraph.html\" title=\"struct nekolib::graph::FunctionalGraph\">FunctionalGraph</a>","synthetic":false,"types":["nekolib::graph::functional_graph::FunctionalGraph"]},{"text":"impl&lt;M:&nbsp;<a class=\"trait\" href=\"nekolib/traits/trait.AssocVal.html\" title=\"trait nekolib::traits::AssocVal\">AssocVal</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.58.1/std/primitive.i64.html\">i64</a>&gt;&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"nekolib/math/struct.ModInt.html\" title=\"struct nekolib::math::ModInt\">ModInt</a>&lt;M&gt;","synthetic":false,"types":["nekolib::math::modint::ModInt"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"nekolib/math/struct.ConstDiv2.html\" title=\"struct nekolib::math::ConstDiv2\">ConstDiv2</a>","synthetic":false,"types":["nekolib::math::const_div::ConstDiv2"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"nekolib/math/struct.ConstDiv.html\" title=\"struct nekolib::math::ConstDiv\">ConstDiv</a>","synthetic":false,"types":["nekolib::math::const_div::ConstDiv"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"nekolib/math/struct.HarmonicFloorSum.html\" title=\"struct nekolib::math::HarmonicFloorSum\">HarmonicFloorSum</a>","synthetic":false,"types":["nekolib::math::harmonic_floor_sum::HarmonicFloorSum"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"nekolib/math/struct.IncrementalLineSet.html\" title=\"struct nekolib::math::IncrementalLineSet\">IncrementalLineSet</a>","synthetic":false,"types":["nekolib::math::incremental_line_set::IncrementalLineSet"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"nekolib/math/struct.SieveN2Plus1.html\" title=\"struct nekolib::math::SieveN2Plus1\">SieveN2Plus1</a>","synthetic":false,"types":["nekolib::math::sieve_n2_plus_1::SieveN2Plus1"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"nekolib/math/struct.SieveN2PlusNPlus1.html\" title=\"struct nekolib::math::SieveN2PlusNPlus1\">SieveN2PlusNPlus1</a>","synthetic":false,"types":["nekolib::math::sieve_n2_plus_n_plus_1::SieveN2PlusNPlus1"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"nekolib/math/struct.SlopeFunction.html\" title=\"struct nekolib::math::SlopeFunction\">SlopeFunction</a>","synthetic":false,"types":["nekolib::math::slope_function::SlopeFunction"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"nekolib/seq/struct.KmpSearcher.html\" title=\"struct nekolib::seq::KmpSearcher\">KmpSearcher</a>&lt;T&gt;","synthetic":false,"types":["nekolib::seq::kmp::KmpSearcher"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"nekolib/seq/struct.SuffixArray.html\" title=\"struct nekolib::seq::SuffixArray\">SuffixArray</a>&lt;T&gt;","synthetic":false,"types":["nekolib::seq::suffix_array::SuffixArray"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"nekolib/seq/struct.ZSearcher.html\" title=\"struct nekolib::seq::ZSearcher\">ZSearcher</a>&lt;T&gt;","synthetic":false,"types":["nekolib::seq::z_algo::ZSearcher"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"nekolib/traits/count/struct.Count3wayResult.html\" title=\"struct nekolib::traits::count::Count3wayResult\">Count3wayResult</a>","synthetic":false,"types":["nekolib::traits::count::Count3wayResult"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"enum\" href=\"nekolib/utils/enum.OpAdd.html\" title=\"enum nekolib::utils::OpAdd\">OpAdd</a>&lt;T&gt;","synthetic":false,"types":["nekolib::utils::op_add::OpAdd"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"enum\" href=\"nekolib/utils/enum.OpAddCount.html\" title=\"enum nekolib::utils::OpAddCount\">OpAddCount</a>&lt;T&gt;","synthetic":false,"types":["nekolib::utils::op_add_count::OpAddCount"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"nekolib/utils/struct.OpAddOnOpAddCount.html\" title=\"struct nekolib::utils::OpAddOnOpAddCount\">OpAddOnOpAddCount</a>&lt;T&gt;","synthetic":false,"types":["nekolib::utils::op_add_on_op_add_count::OpAddOnOpAddCount"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"nekolib/utils/struct.OpAddOnOpMax.html\" title=\"struct nekolib::utils::OpAddOnOpMax\">OpAddOnOpMax</a>&lt;T&gt;","synthetic":false,"types":["nekolib::utils::op_add_on_op_max::OpAddOnOpMax"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"nekolib/utils/struct.OpAddOnOpMin.html\" title=\"struct nekolib::utils::OpAddOnOpMin\">OpAddOnOpMin</a>&lt;T&gt;","synthetic":false,"types":["nekolib::utils::op_add_on_op_min::OpAddOnOpMin"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"enum\" href=\"nekolib/utils/enum.OpAffine.html\" title=\"enum nekolib::utils::OpAffine\">OpAffine</a>&lt;T&gt;","synthetic":false,"types":["nekolib::utils::op_affine::OpAffine"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"nekolib/utils/struct.OpAffineOnOpAddCount.html\" title=\"struct nekolib::utils::OpAffineOnOpAddCount\">OpAffineOnOpAddCount</a>&lt;T&gt;","synthetic":false,"types":["nekolib::utils::op_affine_on_op_add_count::OpAffineOnOpAddCount"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>, Op:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/ops/function/trait.Fn.html\" title=\"trait core::ops::function::Fn\">Fn</a>(T, T) -&gt; T, Id:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/ops/function/trait.Fn.html\" title=\"trait core::ops::function::Fn\">Fn</a>() -&gt; T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"nekolib/utils/struct.OpClosure.html\" title=\"struct nekolib::utils::OpClosure\">OpClosure</a>&lt;T, Op, Id&gt;","synthetic":false,"types":["nekolib::utils::op_closure::OpClosure"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>, OpT:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>, IdT:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>, U:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>, OpU:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>, IdU:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>, Act:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"nekolib/utils/struct.OpClosureOnOpClosure.html\" title=\"struct nekolib::utils::OpClosureOnOpClosure\">OpClosureOnOpClosure</a>&lt;T, OpT, IdT, U, OpU, IdU, Act&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;OpT: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/ops/function/trait.Fn.html\" title=\"trait core::ops::function::Fn\">Fn</a>(T, T) -&gt; T,<br>&nbsp;&nbsp;&nbsp;&nbsp;IdT: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/ops/function/trait.Fn.html\" title=\"trait core::ops::function::Fn\">Fn</a>() -&gt; T,<br>&nbsp;&nbsp;&nbsp;&nbsp;OpU: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/ops/function/trait.Fn.html\" title=\"trait core::ops::function::Fn\">Fn</a>(U, U) -&gt; U,<br>&nbsp;&nbsp;&nbsp;&nbsp;IdU: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/ops/function/trait.Fn.html\" title=\"trait core::ops::function::Fn\">Fn</a>() -&gt; U,<br>&nbsp;&nbsp;&nbsp;&nbsp;Act: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/ops/function/trait.Fn.html\" title=\"trait core::ops::function::Fn\">Fn</a>(T, U) -&gt; T,&nbsp;</span>","synthetic":false,"types":["nekolib::utils::op_closure_on_op_closure::OpClosureOnOpClosure"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"enum\" href=\"nekolib/utils/enum.OpMax.html\" title=\"enum nekolib::utils::OpMax\">OpMax</a>&lt;T&gt;","synthetic":false,"types":["nekolib::utils::op_max::OpMax"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"enum\" href=\"nekolib/utils/enum.OpMin.html\" title=\"enum nekolib::utils::OpMin\">OpMin</a>&lt;T&gt;","synthetic":false,"types":["nekolib::utils::op_min::OpMin"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"enum\" href=\"nekolib/utils/enum.OpMul.html\" title=\"enum nekolib::utils::OpMul\">OpMul</a>&lt;T&gt;","synthetic":false,"types":["nekolib::utils::op_mul::OpMul"]},{"text":"impl&lt;const B:&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.58.1/std/primitive.u64.html\">u64</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"enum\" href=\"nekolib/utils/enum.OpRollHash.html\" title=\"enum nekolib::utils::OpRollHash\">OpRollHash</a>&lt;B&gt;","synthetic":false,"types":["nekolib::utils::op_roll_hash::OpRollHash"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"nekolib/utils/scanner/struct.ScanTupleError.html\" title=\"struct nekolib::utils::scanner::ScanTupleError\">ScanTupleError</a>","synthetic":false,"types":["nekolib::utils::scanner::ScanTupleError"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()