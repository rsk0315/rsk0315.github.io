(function() {var implementors = {};
implementors["nekolib"] = [{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"nekolib/ds/struct.BicrementalMedian.html\" title=\"struct nekolib::ds::BicrementalMedian\">BicrementalMedian</a>&lt;T&gt;","synthetic":false,"types":["nekolib::ds::bicremental_median::BicrementalMedian"]},{"text":"impl&lt;M:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"nekolib/traits/trait.CommutativeGroup.html\" title=\"trait nekolib::traits::CommutativeGroup\">CommutativeGroup</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"nekolib/ds/struct.BicrementalMedianDev.html\" title=\"struct nekolib::ds::BicrementalMedianDev\">BicrementalMedianDev</a>&lt;M&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;M::<a class=\"type\" href=\"nekolib/traits/trait.Magma.html#associatedtype.Set\" title=\"type nekolib::traits::Magma::Set\">Set</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;M::<a class=\"type\" href=\"nekolib/traits/trait.Magma.html#associatedtype.Set\" title=\"type nekolib::traits::Magma::Set\">Set</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;M::<a class=\"type\" href=\"nekolib/traits/trait.Magma.html#associatedtype.Set\" title=\"type nekolib::traits::Magma::Set\">Set</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;M::<a class=\"type\" href=\"nekolib/traits/trait.Magma.html#associatedtype.Set\" title=\"type nekolib::traits::Magma::Set\">Set</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;M::<a class=\"type\" href=\"nekolib/traits/trait.Magma.html#associatedtype.Set\" title=\"type nekolib::traits::Magma::Set\">Set</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,&nbsp;</span>","synthetic":false,"types":["nekolib::ds::bicremental_median_dev::BicrementalMedianDev"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"nekolib/ds/struct.BitSet.html\" title=\"struct nekolib::ds::BitSet\">BitSet</a>","synthetic":false,"types":["nekolib::ds::bit_set::BitSet"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"nekolib/ds/struct.IntervalSet.html\" title=\"struct nekolib::ds::IntervalSet\">IntervalSet</a>&lt;T&gt;","synthetic":false,"types":["nekolib::ds::interval_set::IntervalSet"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"nekolib/ds/struct.RsDict.html\" title=\"struct nekolib::ds::RsDict\">RsDict</a>","synthetic":false,"types":["nekolib::ds::rs_dict::RsDict"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"nekolib/ds/struct.UnionFind.html\" title=\"struct nekolib::ds::UnionFind\">UnionFind</a>","synthetic":false,"types":["nekolib::ds::union_find::UnionFind"]},{"text":"impl&lt;A:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"nekolib/ds/struct.VecActSegtree.html\" title=\"struct nekolib::ds::VecActSegtree\">VecActSegtree</a>&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: <a class=\"trait\" href=\"nekolib/traits/trait.MonoidAction.html\" title=\"trait nekolib::traits::MonoidAction\">MonoidAction</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;A::<a class=\"type\" href=\"nekolib/traits/trait.MonoidAction.html#associatedtype.Operator\" title=\"type nekolib::traits::MonoidAction::Operator\">Operator</a> as <a class=\"trait\" href=\"nekolib/traits/trait.Magma.html\" title=\"trait nekolib::traits::Magma\">Magma</a>&gt;::<a class=\"type\" href=\"nekolib/traits/trait.Magma.html#associatedtype.Set\" title=\"type nekolib::traits::Magma::Set\">Set</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;A::<a class=\"type\" href=\"nekolib/traits/trait.MonoidAction.html#associatedtype.Operand\" title=\"type nekolib::traits::MonoidAction::Operand\">Operand</a> as <a class=\"trait\" href=\"nekolib/traits/trait.Magma.html\" title=\"trait nekolib::traits::Magma\">Magma</a>&gt;::<a class=\"type\" href=\"nekolib/traits/trait.Magma.html#associatedtype.Set\" title=\"type nekolib::traits::Magma::Set\">Set</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;A::<a class=\"type\" href=\"nekolib/traits/trait.MonoidAction.html#associatedtype.Operand\" title=\"type nekolib::traits::MonoidAction::Operand\">Operand</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;A::<a class=\"type\" href=\"nekolib/traits/trait.MonoidAction.html#associatedtype.Operator\" title=\"type nekolib::traits::MonoidAction::Operator\">Operator</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,&nbsp;</span>","synthetic":false,"types":["nekolib::ds::vec_act_segtree::VecActSegtree"]},{"text":"impl&lt;M:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"nekolib/ds/struct.VecSegtree.html\" title=\"struct nekolib::ds::VecSegtree\">VecSegtree</a>&lt;M&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;M: <a class=\"trait\" href=\"nekolib/traits/trait.Monoid.html\" title=\"trait nekolib::traits::Monoid\">Monoid</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;M::<a class=\"type\" href=\"nekolib/traits/trait.Magma.html#associatedtype.Set\" title=\"type nekolib::traits::Magma::Set\">Set</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;M::<a class=\"type\" href=\"nekolib/traits/trait.Magma.html#associatedtype.Set\" title=\"type nekolib::traits::Magma::Set\">Set</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,&nbsp;</span>","synthetic":false,"types":["nekolib::ds::vec_segtree::VecSegtree"]},{"text":"impl&lt;M:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"nekolib/traits/trait.AssocVal.html\" title=\"trait nekolib::traits::AssocVal\">AssocVal</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.55.0/std/primitive.i64.html\">i64</a>&gt;&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"nekolib/math/struct.ModInt.html\" title=\"struct nekolib::math::ModInt\">ModInt</a>&lt;M&gt;","synthetic":false,"types":["nekolib::math::modint::ModInt"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"nekolib/math/struct.ConstDiv2.html\" title=\"struct nekolib::math::ConstDiv2\">ConstDiv2</a>","synthetic":false,"types":["nekolib::math::const_div::ConstDiv2"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"nekolib/math/struct.ConstDiv.html\" title=\"struct nekolib::math::ConstDiv\">ConstDiv</a>","synthetic":false,"types":["nekolib::math::const_div::ConstDiv"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"nekolib/math/struct.Crt.html\" title=\"struct nekolib::math::Crt\">Crt</a>","synthetic":false,"types":["nekolib::math::crt::Crt"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"nekolib/math/struct.HarmonicFloorSum.html\" title=\"struct nekolib::math::HarmonicFloorSum\">HarmonicFloorSum</a>","synthetic":false,"types":["nekolib::math::harmonic_floor_sum::HarmonicFloorSum"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"nekolib/math/struct.IncrementalLineSet.html\" title=\"struct nekolib::math::IncrementalLineSet\">IncrementalLineSet</a>","synthetic":false,"types":["nekolib::math::incremental_line_set::IncrementalLineSet"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"nekolib/math/struct.SieveN2Plus1.html\" title=\"struct nekolib::math::SieveN2Plus1\">SieveN2Plus1</a>","synthetic":false,"types":["nekolib::math::sieve_n2_plus_1::SieveN2Plus1"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"nekolib/math/struct.SieveN2PlusNPlus1.html\" title=\"struct nekolib::math::SieveN2PlusNPlus1\">SieveN2PlusNPlus1</a>","synthetic":false,"types":["nekolib::math::sieve_n2_plus_n_plus_1::SieveN2PlusNPlus1"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"nekolib/math/struct.SlopeFunction.html\" title=\"struct nekolib::math::SlopeFunction\">SlopeFunction</a>","synthetic":false,"types":["nekolib::math::slope_function::SlopeFunction"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"nekolib/seq/struct.KmpSearcher.html\" title=\"struct nekolib::seq::KmpSearcher\">KmpSearcher</a>&lt;T&gt;","synthetic":false,"types":["nekolib::seq::kmp::KmpSearcher"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"nekolib/seq/struct.SuffixArray.html\" title=\"struct nekolib::seq::SuffixArray\">SuffixArray</a>&lt;T&gt;","synthetic":false,"types":["nekolib::seq::suffix_array::SuffixArray"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"nekolib/seq/struct.ZSearcher.html\" title=\"struct nekolib::seq::ZSearcher\">ZSearcher</a>&lt;T&gt;","synthetic":false,"types":["nekolib::seq::z_algo::ZSearcher"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"nekolib/traits/count/struct.Count3wayResult.html\" title=\"struct nekolib::traits::count::Count3wayResult\">Count3wayResult</a>","synthetic":false,"types":["nekolib::traits::count::Count3wayResult"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"nekolib/utils/struct.OpAdd.html\" title=\"struct nekolib::utils::OpAdd\">OpAdd</a>&lt;T&gt;","synthetic":false,"types":["nekolib::utils::op_add::OpAdd"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"nekolib/utils/struct.OpMax.html\" title=\"struct nekolib::utils::OpMax\">OpMax</a>&lt;T&gt;","synthetic":false,"types":["nekolib::utils::op_max::OpMax"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"nekolib/utils/struct.OpMin.html\" title=\"struct nekolib::utils::OpMin\">OpMin</a>&lt;T&gt;","synthetic":false,"types":["nekolib::utils::op_min::OpMin"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"nekolib/utils/struct.OpMul.html\" title=\"struct nekolib::utils::OpMul\">OpMul</a>&lt;T&gt;","synthetic":false,"types":["nekolib::utils::op_mul::OpMul"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>, B:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"nekolib/utils/struct.OpRollHash.html\" title=\"struct nekolib::utils::OpRollHash\">OpRollHash</a>&lt;T, B&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;B: <a class=\"trait\" href=\"nekolib/traits/trait.AssocVal.html\" title=\"trait nekolib::traits::AssocVal\">AssocVal</a>&lt;T&gt;,&nbsp;</span>","synthetic":false,"types":["nekolib::utils::op_roll_hash::OpRollHash"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()