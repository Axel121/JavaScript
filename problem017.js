function compose(...aa) { 
    return aa.reduceRight((pop, nas) => (...args) => nas(pop(...args)),
    w => w);
}