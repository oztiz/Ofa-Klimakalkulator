const assert=require("node:assert/strict");const {calculate}=require("./engine.js");
const d={year:2026,area:100,harvest:40000,diesel:300,electricity:1000,n:1000,p:100,k:200,inputYear:{},sources:{},evidence:{}};
for(const k of ["diesel","electricity","n","p","k"]){d.inputYear[k]=2026;d.sources[k]="synthetic";d.evidence[k]="estimated";}
assert.equal(calculate(d).subtotal,6191.5);
assert.equal(calculate(d).perDaa,61.915);
assert.equal(calculate({...d,diesel:0}).rows[0].kgCO2e,0);
assert.equal(calculate({...d,diesel:null}).missing.includes("Diesel"),true);
assert.equal(calculate({...d,area:0}).perDaa,null);
assert.throws(()=>calculate({...d,diesel:-1}));
assert.throws(()=>calculate({...d,inputYear:{...d.inputYear,diesel:2027}}));
assert.throws(()=>calculate({...d,sources:{...d.sources,diesel:""}}));
assert.equal(calculate({year:2026,inputYear:{},sources:{},evidence:{}}).subtotal,null);
console.log("9 calculation checks passed.");
