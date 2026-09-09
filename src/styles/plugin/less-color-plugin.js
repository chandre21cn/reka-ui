
const Colors = {
    gray: [
        "#fcfcfc", "#f9f9f9", "#f0f0f0", "#e8e8e8", "#e0e0e0", "#d9d9d9", "#cecece", "#bbbbbb", "#8d8d8d",
        "#838383", "#646464", "#202020"
    ],
    grayA: [
        "#00000003", "#00000006", "#0000000f", "#00000017", "#0000001f", "#00000026", "#00000031",
        "#00000044", "#00000072", "#0000007c", "#0000009b", "#000000df"
    ],
    grayDark: [
        "#111111", "#191919", "#222222", "#2a2a2a", "#313131", "#3a3a3a", "#484848", "#606060", "#6e6e6e",
        "#7b7b7b", "#b4b4b4", "#eeeeee"
    ],
    grayDarkA: [
        "#00000000", "#ffffff09", "#ffffff12", "#ffffff1b", "#ffffff22", "#ffffff2c", "#ffffff3b",
        "#ffffff55", "#ffffff64", "#ffffff72", "#ffffffaf", "#ffffffed"
    ],
    mauve: [
        "#fdfcfd", "#faf9fb", "#f2eff3", "#eae7ec", "#e3dfe6", "#dbd8e0", "#d0cdd7", "#bcbac7", "#8e8c99",
        "#84828e", "#65636d", "#211f26"
    ],
    mauveA: [
        "#55005503", "#2b005506", "#30004010", "#20003618", "#20003820", "#14003527", "#10003332",
        "#08003145", "#05001d73", "#0500197d", "#0400119c", "#020008e0"
    ],
    mauveDark: [
        "#121113", "#1a191b", "#232225", "#2b292d", "#323035", "#3c393f", "#49474e", "#625f69", "#6f6d78",
        "#7c7a85", "#b5b2bc", "#eeeef0"
    ],
    mauveDarkA: [
        "#00000000", "#f5f4f609", "#ebeaf814", "#eee5f81d", "#efe6fe25", "#f1e6fd30", "#eee9ff40",
        "#eee7ff5d", "#eae6fd6e", "#ece9fd7c", "#f5f1ffb7", "#fdfdffef"
    ],
    slate: [
        "#fcfcfd", "#f9f9fb", "#f0f0f3", "#e8e8ec", "#e0e1e6", "#d9d9e0", "#cdced6", "#b9bbc6", "#8b8d98",
        "#80838d", "#60646c", "#1c2024"
    ],
    slateA: [
        "#00005503", "#00005506", "#0000330f", "#00002d17", "#0009321f", "#00002f26", "#00062e32",
        "#00083046", "#00051d74", "#00071b7f", "#0007149f", "#000509e3"
    ],
    slateDark: [
        "#111113", "#18191b", "#212225", "#272a2d", "#2e3135", "#363a3f", "#43484e", "#5a6169", "#696e77",
        "#777b84", "#b0b4ba", "#edeef0"
    ],
    slateDarkA: [
        "#00000000", "#d8f4f609", "#ddeaf814", "#d3edf81d", "#d9edfe25", "#d6ebfd30", "#d9edff40",
        "#d9edff5d", "#dfebfd6d", "#e5edfd7b", "#f1f7feb5", "#fcfdffef"
    ],
    sage: [
        "#fbfdfc", "#f7f9f8", "#eef1f0", "#e6e9e8", "#dfe2e0", "#d7dad9", "#cbcfcd", "#b8bcba", "#868e8b",
        "#7c8481", "#5f6563", "#1a211e"
    ],
    sageA: [
        "#00804004", "#00402008", "#002d1e11", "#001f1519", "#00180820", "#00140d28", "#00140a34",
        "#000f0847", "#00110b79", "#00100a83", "#000a07a0", "#000805e5"
    ],
    sageDark: [
        "#101211", "#171918", "#202221", "#272a29", "#2e3130", "#373b39", "#444947", "#5b625f", "#63706b",
        "#717d79", "#adb5b2", "#eceeed"
    ],
    sageDarkA: [
        "#00000000", "#f0f2f108", "#f3f5f412", "#f2fefd1a", "#f1fbfa22", "#edfbf42d", "#edfcf73c",
        "#ebfdf657", "#dffdf266", "#e5fdf674", "#f4fefbb0", "#fdfffeed"
    ],
    olive: [
        "#fcfdfc", "#f8faf8", "#eff1ef", "#e7e9e7", "#dfe2df", "#d7dad7", "#cccfcc", "#b9bcb8", "#898e87",
        "#7f847d", "#60655f", "#1d211c"
    ],
    oliveA: [
        "#00550003", "#00490007", "#00200010", "#00160018", "#00180020", "#00140028", "#000f0033",
        "#040f0047", "#050f0078", "#040e0082", "#020a00a0", "#010600e3"
    ],
    oliveDark: [
        "#111210", "#181917", "#212220", "#282a27", "#2f312e", "#383a36", "#454843", "#5c625b", "#687066",
        "#767d74", "#afb5ad", "#eceeec"
    ],
    oliveDarkA: [
        "#00000000", "#f1f2f008", "#f4f5f312", "#f3fef21a", "#f2fbf122", "#f4faed2c", "#f2fced3b",
        "#edfdeb57", "#ebfde766", "#f0fdec74", "#f6fef4b0", "#fdfffded"
    ],
    sand: [
        "#fdfdfc", "#f9f9f8", "#f1f0ef", "#e9e8e6", "#e2e1de", "#dad9d6", "#cfceca", "#bcbbb5", "#8d8d86",
        "#82827c", "#63635e", "#21201c"
    ],
    sandA: [
        "#55550003", "#25250007", "#20100010", "#1f150019", "#1f180021", "#19130029", "#19140035",
        "#1915014a", "#0f0f0079", "#0c0c0083", "#080800a1", "#060500e3"
    ],
    sandDark: [
        "#111110", "#191918", "#222221", "#2a2a28", "#31312e", "#3b3a37", "#494844", "#62605b", "#6f6d66",
        "#7c7b74", "#b5b3ad", "#eeeeec"
    ],
    sandDarkA: [
        "#00000000", "#f4f4f309", "#f6f6f513", "#fefef31b", "#fbfbeb23", "#fffaed2d", "#fffbed3c",
        "#fff9eb57", "#fffae965", "#fffdee73", "#fffcf4b0", "#fffffded"
    ],
    tomato: [
        "#fffcfc", "#fff8f7", "#feebe7", "#ffdcd3", "#ffcdc2", "#fdbdaf", "#f5a898", "#ec8e7b", "#e54d2e",
        "#dd4425", "#d13415", "#5c271f"
    ],
    tomatoA: [
        "#ff000003", "#ff200008", "#f52b0018", "#ff35002c", "#ff2e003d", "#f92d0050", "#e7280067",
        "#db250084", "#df2600d1", "#d72400da", "#cd2200ea", "#460900e0"
    ],
    tomatoDark: [
        "#181111", "#1f1513", "#391714", "#4e1511", "#5e1c16", "#6e2920", "#853a2d", "#ac4d39", "#e54d2e",
        "#ec6142", "#ff977d", "#fbd3cb"
    ],
    tomatoDarkA: [
        "#f1121208", "#ff55330f", "#ff35232b", "#fd201142", "#fe332153", "#ff4f3864", "#fd644a7d",
        "#fe6d4ea7", "#fe5431e4", "#ff6847eb", "#ff977d", "#ffd6cefb"
    ],
    red: [
        "#fffcfc", "#fff7f7", "#feebec", "#ffdbdc", "#ffcdce", "#fdbdbe", "#f4a9aa", "#eb8e90", "#e5484d",
        "#dc3e42", "#ce2c31", "#641723"
    ],
    redA: [
        "#ff000003", "#ff000008", "#f3000d14", "#ff000824", "#ff000632", "#f8000442", "#df000356",
        "#d2000571", "#db0007b7", "#d10005c1", "#c40006d3", "#55000de8"
    ],
    redDark: [
        "#191111", "#201314", "#3b1219", "#500f1c", "#611623", "#72232d", "#8c333a", "#b54548", "#e5484d",
        "#ec5d5e", "#ff9592", "#ffd1d9"
    ],
    redDarkA: [
        "#f4121209", "#f22f3e11", "#ff173f2d", "#fe0a3b44", "#ff204756", "#ff3e5668", "#ff536184",
        "#ff5d61b0", "#fe4e54e4", "#ff6465eb", "#ff9592", "#ffd1d9"
    ],
    ruby: [
        "#fffcfd", "#fff7f8", "#feeaed", "#ffdce1", "#ffced6", "#f8bfc8", "#efacb8", "#e592a3", "#e54666",
        "#dc3b5d", "#ca244d", "#64172b"
    ],
    rubyA: [
        "#ff005503", "#ff002008", "#f3002515", "#ff002523", "#ff002a31", "#e4002440", "#ce002553",
        "#c300286d", "#db002cb9", "#d2002cc4", "#c10030db", "#550016e8"
    ],
    rubyDark: [
        "#191113", "#1e1517", "#3a141e", "#4e1325", "#5e1a2e", "#6f2539", "#883447", "#b3445a", "#e54666",
        "#ec5a72", "#ff949d", "#fed2e1"
    ],
    rubyDarkA: [
        "#f4124a09", "#fe5a7f0e", "#ff235d2c", "#fd195e42", "#fe2d6b53", "#ff447665", "#ff577d80",
        "#ff5c7cae", "#fe4c70e4", "#ff617beb", "#ff949d", "#ffd3e2fe"
    ],
    crimson: [
        "#fffcfd", "#fef7f9", "#ffe9f0", "#fedce7", "#facedd", "#f3bed1", "#eaacc3", "#e093b2", "#e93d82",
        "#df3478", "#cb1d63", "#621639"
    ],
    crimsonA: [
        "#ff005503", "#e0004008", "#ff005216", "#f8005123", "#e5004f31", "#d0004b41", "#bf004753",
        "#b6004a6c", "#e2005bc2", "#d70056cb", "#c4004fe2", "#530026e9"
    ],
    crimsonDark: [
        "#191114", "#201318", "#381525", "#4d122f", "#5c1839", "#6d2545", "#873356", "#b0436e", "#e93d82",
        "#ee518a", "#ff92ad", "#fdd3e8"
    ],
    crimsonDarkA: [
        "#f4126709", "#f22f7a11", "#fe2a8b2a", "#fd158741", "#fd278f51", "#fe459763", "#fd559b7f",
        "#fe5b9bab", "#fe418de8", "#ff5693ed", "#ff92ad", "#ffd5eafd"
    ],
    pink: [
        "#fffcfe", "#fef7fb", "#fee9f5", "#fbdcef", "#f6cee7", "#efbfdd", "#e7acd0", "#dd93c2", "#d6409f",
        "#cf3897", "#c2298a", "#651249"
    ],
    pinkA: [
        "#ff00aa03", "#e0008008", "#f4008c16", "#e2008b23", "#d1008331", "#c0007840", "#b6006f53",
        "#af006f6c", "#c8007fbf", "#c2007ac7", "#b60074d6", "#59003bed"
    ],
    pinkDark: [
        "#191117", "#21121d", "#37172f", "#4b143d", "#591c47", "#692955", "#833869", "#a84885", "#d6409f",
        "#de51a8", "#ff8dcc", "#fdd1ea"
    ],
    pinkDarkA: [
        "#f412bc09", "#f420bb12", "#fe37cc29", "#fc1ec43f", "#fd35c24e", "#fd51c75f", "#fd62c87b",
        "#ff68c8a2", "#fe49bcd4", "#ff5cc0dc", "#ff8dcc", "#ffd3ecfd"
    ],
    plum: [
        "#fefcff", "#fdf7fd", "#fbebfb", "#f7def8", "#f2d1f3", "#e9c2ec", "#deade3", "#cf91d8", "#ab4aba",
        "#a144af", "#953ea3", "#53195d"
    ],
    plumA: [
        "#aa00ff03", "#c000c008", "#cc00cc14", "#c200c921", "#b700bd2e", "#a400b03d", "#9900a852",
        "#9000a56e", "#89009eb5", "#7f0092bb", "#730086c1", "#40004be6"
    ],
    plumDark: [
        "#181118", "#201320", "#351a35", "#451d47", "#512454", "#5e3061", "#734079", "#92549c", "#ab4aba",
        "#b658c4", "#e796f3", "#f4d4f4"
    ],
    plumDarkA: [
        "#f112f108", "#f22ff211", "#fd4cfd27", "#f646ff3a", "#f455ff48", "#f66dff56", "#f07cfd70",
        "#ee84ff95", "#e961feb6", "#ed70ffc0", "#f19cfef3", "#feddfef4"
    ],
    purple: [
        "#fefcfe", "#fbf7fe", "#f7edfe", "#f2e2fc", "#ead5f9", "#e0c4f4", "#d1afec", "#be93e4", "#8e4ec6",
        "#8347b9", "#8145b5", "#402060"
    ],
    purpleA: [
        "#aa00aa03", "#8000e008", "#8e00f112", "#8d00e51d", "#8000db2a", "#7a01d03b", "#6d00c350",
        "#6600c06c", "#5c00adb1", "#53009eb8", "#52009aba", "#250049df"
    ],
    purpleDark: [
        "#18111b", "#1e1523", "#301c3b", "#3d224e", "#48295c", "#54346b", "#664282", "#8457aa", "#8e4ec6",
        "#9a5cd0", "#d19dff", "#ecd9fa"
    ],
    purpleDarkA: [
        "#b412f90b", "#b744f714", "#c150ff2d", "#bb53fd42", "#be5cfd51", "#c16dfd61", "#c378fd7a",
        "#c47effa4", "#b661ffc2", "#bc6fffcd", "#d19dff", "#f1ddfffa"
    ],
    violet: [
        "#fdfcfe", "#faf8ff", "#f4f0fe", "#ebe4ff", "#e1d9ff", "#d4cafe", "#c2b5f5", "#aa99ec", "#6e56cf",
        "#654dc4", "#6550b9", "#2f265f"
    ],
    violetA: [
        "#5500aa03", "#4900ff07", "#4400ee0f", "#4300ff1b", "#3600ff26", "#3100fb35", "#2d01dd4a",
        "#2b00d066", "#2400b7a9", "#2300abb2", "#1f0099af", "#0b0043d9"
    ],
    violetDark: [
        "#14121f", "#1b1525", "#291f43", "#33255b", "#3c2e69", "#473876", "#56468b", "#6958ad", "#6e56cf",
        "#7d66d9", "#baa7ff", "#e2ddfe"
    ],
    violetDarkA: [
        "#4422ff0f", "#853ff916", "#8354fe36", "#7d51fd50", "#845ffd5f", "#8f6cfd6d", "#9879ff83",
        "#977dfea8", "#8668ffcc", "#9176fed7", "#baa7ff", "#e3defffe"
    ],
    iris: [
        "#fdfdff", "#f8f8ff", "#f0f1fe", "#e6e7ff", "#dadcff", "#cbcdff", "#b8baf8", "#9b9ef0", "#5b5bd6",
        "#5151cd", "#5753c6", "#272962"
    ],
    irisA: [
        "#0000ff02", "#0000ff07", "#0011ee0f", "#000bff19", "#000eff25", "#000aff34", "#0008e647",
        "#0008d964", "#0000c0a4", "#0000b6ae", "#0600abac", "#000246d8"
    ],
    irisDark: [
        "#13131e", "#171625", "#202248", "#262a65", "#303374", "#3d3e82", "#4a4a95", "#5958b1", "#5b5bd6",
        "#6e6ade", "#b1a9ff", "#e0dffe"
    ],
    irisDarkA: [
        "#3636fe0e", "#564bf916", "#525bff3b", "#4d58ff5a", "#5b62fd6b", "#6d6ffd7a", "#7777fe8e",
        "#7b7afeac", "#6a6afed4", "#7d79ffdc", "#b1a9ff", "#e1e0fffe"
    ],
    indigo: [
        "#fdfdfe", "#f7f9ff", "#edf2fe", "#e1e9ff", "#d2deff", "#c1d0ff", "#abbdf9", "#8da4ef", "#3e63dd",
        "#3358d4", "#3a5bc7", "#1f2d5c"
    ],
    indigoA: [
        "#00008002", "#0040ff08", "#0047f112", "#0044ff1e", "#0044ff2d", "#003eff3e", "#0037ed54",
        "#0034dc72", "#0031d2c1", "#002ec9cc", "#002bb7c5", "#001046e0"
    ],
    indigoDark: [
        "#11131f", "#141726", "#182449", "#1d2e62", "#253974", "#304384", "#3a4f97", "#435db1", "#3e63dd",
        "#5472e4", "#9eb1ff", "#d6e1ff"
    ],
    indigoDarkA: [
        "#1133ff0f", "#3354fa17", "#2f62ff3c", "#3566ff57", "#4171fd6b", "#5178fd7c", "#5a7fff90",
        "#5b81feac", "#4671ffdb", "#5c7efee3", "#9eb1ff", "#d6e1ff"
    ],
    blue: [
        "#fbfdff", "#f4faff", "#e6f4fe", "#d5efff", "#c2e5ff", "#acd8fc", "#8ec8f6", "#5eb1ef", "#0090ff",
        "#0588f0", "#0d74ce", "#113264"
    ],
    blueA: [
        "#0080ff04", "#008cff0b", "#008ff519", "#009eff2a", "#0093ff3d", "#0088f653", "#0083eb71",
        "#0084e6a1", "#0090ff", "#0086f0fa", "#006dcbf2", "#002359ee"
    ],
    blueDark: [
        "#0d1520", "#111927", "#0d2847", "#003362", "#004074", "#104d87", "#205d9e", "#2870bd", "#0090ff",
        "#3b9eff", "#70b8ff", "#c2e6ff"
    ],
    blueDarkA: [
        "#004df211", "#1166fb18", "#0077ff3a", "#0075ff57", "#0081fd6b", "#0f89fd7f", "#2a91fe98",
        "#3094feb9", "#0090ff", "#3b9eff", "#70b8ff", "#c2e6ff"
    ],
    cyan: [
        "#fafdfe", "#f2fafb", "#def7f9", "#caf1f6", "#b5e9f0", "#9ddde7", "#7dcedc", "#3db9cf", "#00a2c7",
        "#0797b9", "#107d98", "#0d3c48"
    ],
    cyanA: [
        "#0099cc05", "#009db10d", "#00c2d121", "#00bcd435", "#01b4cc4a", "#00a7c162", "#009fbb82",
        "#00a3c0c2", "#00a2c7", "#0094b7f8", "#007491ef", "#00323ef2"
    ],
    cyanDark: [
        "#0b161a", "#101b20", "#082c36", "#003848", "#004558", "#045468", "#12677e", "#11809c", "#00a2c7",
        "#23afd0", "#4ccce6", "#b6ecf7"
    ],
    cyanDarkA: [
        "#0091f70a", "#02a7f211", "#00befd28", "#00baff3b", "#00befd4d", "#00c7fd5e", "#14cdff75",
        "#11cfff95", "#00cfffc3", "#28d6ffcd", "#52e1fee5", "#bbf3fef7"
    ],
    teal: [
        "#fafefd", "#f3fbf9", "#e0f8f3", "#ccf3ea", "#b8eae0", "#a1ded2", "#83cdc1", "#53b9ab", "#12a594",
        "#0d9b8a", "#008573", "#0d3d38"
    ],
    tealA: [
        "#00cc9905", "#00aa800c", "#00c69d1f", "#00c39633", "#00b49047", "#00a6855e", "#0099807c",
        "#009783ac", "#009e8ced", "#009684f2", "#008573", "#00332df2"
    ],
    tealDark: [
        "#0d1514", "#111c1b", "#0d2d2a", "#023b37", "#084843", "#145750", "#1c6961", "#207e73", "#12a594",
        "#0eb39e", "#0bd8b6", "#adf0dd"
    ],
    tealDarkA: [
        "#00deab05", "#12fbe60c", "#00ffe61e", "#00ffe92d", "#00ffea3b", "#1cffe84b", "#2efde85f",
        "#32ffe775", "#13ffe49f", "#0dffe0ae", "#0afed5d6", "#b8ffebef"
    ],
    jade: [
        "#fbfefd", "#f4fbf7", "#e6f7ed", "#d6f1e3", "#c3e9d7", "#acdec8", "#8bceb6", "#56ba9f", "#29a383",
        "#26997b", "#208368", "#1d3b31"
    ],
    jadeA: [
        "#00c08004", "#00a3460b", "#00ae4819", "#00a85129", "#00a2553c", "#009a5753", "#00945f74",
        "#00976ea9", "#00916bd6", "#008764d9", "#007152df", "#002217e2"
    ],
    jadeDark: [
        "#0d1512", "#121c18", "#0f2e22", "#0b3b2c", "#114837", "#1b5745", "#246854", "#2a7e68", "#29a383",
        "#27b08b", "#1fd8a4", "#adf0d4"
    ],
    jadeDarkA: [
        "#00de4505", "#27fba60c", "#02f99920", "#00ffaa2d", "#11ffb63b", "#34ffc24b", "#45fdc75e",
        "#48ffcf75", "#38feca9d", "#31fec7ab", "#21fec0d6", "#b8ffe1ef"
    ],
    green: [
        "#fbfefc", "#f4fbf6", "#e6f6eb", "#d6f1df", "#c4e8d1", "#adddc0", "#8eceaa", "#5bb98b", "#30a46c",
        "#2b9a66", "#218358", "#193b2d"
    ],
    greenA: [
        "#00c04004", "#00a32f0b", "#00a43319", "#00a83829", "#019c393b", "#00963c52", "#00914071",
        "#00924ba4", "#008f4acf", "#008647d4", "#00713fde", "#002616e6"
    ],
    greenDark: [
        "#0e1512", "#121b17", "#132d21", "#113b29", "#174933", "#20573e", "#28684a", "#2f7c57", "#30a46c",
        "#33b074", "#3dd68c", "#b1f1cb"
    ],
    greenDarkA: [
        "#00de4505", "#29f99d0b", "#22ff991e", "#11ff992d", "#2bffa23c", "#44ffaa4b", "#50fdac5e",
        "#54ffad73", "#44ffa49e", "#43fea4ab", "#46fea5d4", "#bbffd7f0"
    ],
    grass: [
        "#fbfefb", "#f5fbf5", "#e9f6e9", "#daf1db", "#c9e8ca", "#b2ddb5", "#94ce9a", "#65ba74", "#46a758",
        "#3e9b4f", "#2a7e3b", "#203c25"
    ],
    grassA: [
        "#00c00004", "#0099000a", "#00970016", "#009f0725", "#00930536", "#008f0a4d", "#018b0f6b",
        "#008d199a", "#008619b9", "#007b17c1", "#006514d5", "#002006df"
    ],
    grassDark: [
        "#0e1511", "#141a15", "#1b2a1e", "#1d3a24", "#25482d", "#2d5736", "#366740", "#3e7949", "#46a758",
        "#53b365", "#71d083", "#c2f0c2"
    ],
    grassDarkA: [
        "#00de1205", "#5ef7780a", "#70fe8c1b", "#57ff802c", "#68ff8b3b", "#71ff8f4b", "#77fd925d",
        "#77fd9070", "#65ff82a1", "#72ff8dae", "#89ff9fcd", "#ceffceef"
    ],
    brown: [
        "#fefdfc", "#fcf9f6", "#f6eee7", "#f0e4d9", "#ebdaca", "#e4cdb7", "#dcbc9f", "#cea37e", "#ad7f58",
        "#a07553", "#815e46", "#3e332e"
    ],
    brownA: [
        "#aa550003", "#aa550009", "#a04b0018", "#9b4a0026", "#9f4d0035", "#a04e0048", "#a34e0060",
        "#9f4a0081", "#823c00a7", "#723300ac", "#522100b9", "#140600d1"
    ],
    brownDark: [
        "#12110f", "#1c1816", "#28211d", "#322922", "#3e3128", "#4d3c2f", "#614a39", "#7c5f46", "#ad7f58",
        "#b88c67", "#dbb594", "#f2e1ca"
    ],
    brownDarkA: [
        "#91110002", "#fba67c0c", "#fcb58c19", "#fbbb8a24", "#fcb88931", "#fdba8741", "#ffbb8856",
        "#ffbe8773", "#feb87da8", "#ffc18cb3", "#fed1aad9", "#feecd4f2"
    ],
    orange: [
        "#fefcfb", "#fff7ed", "#ffefd6", "#ffdfb5", "#ffd19a", "#ffc182", "#f5ae73", "#ec9455", "#f76b15",
        "#ef5f00", "#cc4e00", "#582d1d"
    ],
    orangeA: [
        "#c0400004", "#ff8e0012", "#ff9c0029", "#ff91014a", "#ff8b0065", "#ff81007d", "#ed6c008c",
        "#e35f00aa", "#f65e00ea", "#ef5f00", "#cc4e00", "#431200e2"
    ],
    orangeDark: [
        "#17120e", "#1e160f", "#331e0b", "#462100", "#562800", "#66350c", "#7e451d", "#a35829", "#f76b15",
        "#ff801f", "#ffa057", "#ffe0c2"
    ],
    orangeDarkA: [
        "#ec360007", "#fe6d000e", "#fb6a0025", "#ff590039", "#ff61004a", "#fd75045c", "#ff832c75",
        "#fe84389d", "#fe6d15f7", "#ff801f", "#ffa057", "#ffe0c2"
    ],
    sky: [
        "#f9feff", "#f1fafd", "#e1f6fd", "#d1f0fa", "#bee7f5", "#a9daed", "#8dcae3", "#60b3d7", "#7ce2fe",
        "#74daf8", "#00749e", "#1d3e56"
    ],
    skyA: [
        "#00d5ff06", "#00a4db0e", "#00b3ee1e", "#00ace42e", "#00a1d841", "#0092ca56", "#0089c172",
        "#0085bf9f", "#00c7fe83", "#00bcf38b", "#00749e", "#002540e2"
    ],
    skyDark: [
        "#0d141f", "#111a27", "#112840", "#113555", "#154467", "#1b537b", "#1f6692", "#197cae", "#7ce2fe",
        "#a8eeff", "#75c7f0", "#c2f3ff"
    ],
    skyDarkA: [
        "#0044ff0f", "#1171fb18", "#1184fc33", "#128fff49", "#1c9dfd5d", "#28a5ff72", "#2badfe8b",
        "#1db2fea9", "#7ce3fffe", "#a8eeff", "#7cd3ffef", "#c2f3ff"
    ],
    mint: [
        "#f9fefd", "#f2fbf9", "#ddf9f2", "#c8f4e9", "#b3ecde", "#9ce0d0", "#7ecfbd", "#4cbba5", "#86ead4",
        "#7de0cb", "#027864", "#16433c"
    ],
    mintA: [
        "#00d5aa06", "#00b18a0d", "#00d29e22", "#00cc9937", "#00c0914c", "#00b08663", "#00a17d81",
        "#009e7fb3", "#00d3a579", "#00c39982", "#007763fd", "#00312ae9"
    ],
    mintDark: [
        "#0e1515", "#0f1b1b", "#092c2b", "#003a38", "#004744", "#105650", "#1e685f", "#277f70", "#86ead4",
        "#a8f5e5", "#58d5ba", "#c4f5e1"
    ],
    mintDarkA: [
        "#00dede05", "#00f9f90b", "#00fff61d", "#00fff42c", "#00fff23a", "#0effeb4a", "#34fde55e",
        "#41ffdf76", "#92ffe7e9", "#aefeedf5", "#67ffded2", "#cbfee9f5"
    ],
    lime: [
        "#fcfdfa", "#f8faf3", "#eef6d6", "#e2f0bd", "#d3e7a6", "#c2da91", "#abc978", "#8db654", "#bdee63",
        "#b0e64c", "#5c7c2f", "#37401c"
    ],
    limeA: [
        "#66990005", "#6b95000c", "#96c80029", "#8fc60042", "#81bb0059", "#72aa006e", "#61990087",
        "#559200ab", "#93e4009c", "#8fdc00b3", "#375f00d0", "#1e2900e3"
    ],
    limeDark: [
        "#11130c", "#151a10", "#1f2917", "#29371d", "#334423", "#3d522a", "#496231", "#577538", "#bdee63",
        "#d4ff70", "#bde56c", "#e3f7ba"
    ],
    limeDarkA: [
        "#11bb0003", "#78f7000a", "#9bfd4c1a", "#a7fe5c29", "#affe6537", "#b2fe6d46", "#b6ff6f57",
        "#b6fd6d6c", "#caff69ed", "#d4ff70", "#d1fe77e4", "#e9febff7"
    ],
    yellow: [
        "#fdfdf9", "#fefce9", "#fffab8", "#fff394", "#ffe770", "#f3d768", "#e4c767", "#d5ae39", "#ffe629",
        "#ffdc00", "#9e6c00", "#473b1f"
    ],
    yellowA: [
        "#aaaa0006", "#f4dd0016", "#ffee0047", "#ffe3016b", "#ffd5008f", "#ebbc0097", "#d2a10098",
        "#c99700c6", "#ffe100d6", "#ffdc00", "#9e6c00", "#2e2000e0"
    ],
    yellowDark: [
        "#14120b", "#1b180f", "#2d2305", "#362b00", "#433500", "#524202", "#665417", "#836a21", "#ffe629",
        "#ffff57", "#f5e147", "#f6eeb4"
    ],
    yellowDarkA: [
        "#d1510004", "#f9b4000b", "#ffaa001e", "#fdb70028", "#febb0036", "#fec40046", "#fdcb225c",
        "#fdca327b", "#ffe629", "#ffff57", "#fee949f5", "#fef6baf6"
    ],
    amber: [
        "#fefdfb", "#fefbe9", "#fff7c2", "#ffee9c", "#fbe577", "#f3d673", "#e9c162", "#e2a336", "#ffc53d",
        "#ffba18", "#ab6400", "#4f3422"
    ],
    amberA: [
        "#c0800004", "#f4d10016", "#ffde003d", "#ffd40063", "#f8cf0088", "#eab5008c", "#dc9b009d",
        "#da8a00c9", "#ffb300c2", "#ffb300e7", "#ab6400", "#341500dd"
    ],
    amberDark: [
        "#16120c", "#1d180f", "#302008", "#3f2700", "#4d3000", "#5c3d05", "#714f19", "#8f6424", "#ffc53d",
        "#ffd60a", "#ffca16", "#ffe7b3"
    ],
    amberDarkA: [
        "#e63c0006", "#fd9b000d", "#fa820022", "#fc820032", "#fd8b0041", "#fd9b0051", "#ffab2567",
        "#ffae3587", "#ffc53d", "#ffd60a", "#ffca16", "#ffe7b3"
    ],
    whiteA: [
        "rgba(255, 255, 255, 0.05)", "rgba(255, 255, 255, 0.1)", "rgba(255, 255, 255, 0.15)",
        "rgba(255, 255, 255, 0.2)", "rgba(255, 255, 255, 0.3)", "rgba(255, 255, 255, 0.4)",
        "rgba(255, 255, 255, 0.5)", "rgba(255, 255, 255, 0.6)", "rgba(255, 255, 255, 0.7)",
        "rgba(255, 255, 255, 0.8)", "rgba(255, 255, 255, 0.9)", "rgba(255, 255, 255, 0.95)"
    ],
    blackA: [
        "rgba(0, 0, 0, 0.05)", "rgba(0, 0, 0, 0.1)", "rgba(0, 0, 0, 0.15)", "rgba(0, 0, 0, 0.2)",
        "rgba(0, 0, 0, 0.3)", "rgba(0, 0, 0, 0.4)", "rgba(0, 0, 0, 0.5)", "rgba(0, 0, 0, 0.6)",
        "rgba(0, 0, 0, 0.7)", "rgba(0, 0, 0, 0.8)", "rgba(0, 0, 0, 0.9)", "rgba(0, 0, 0, 0.95)"
    ],
}

const getNodeValue = (node, defaultValue) => {
    if (node === undefined || node === null) return defaultValue;
    if (typeof node === 'string' || typeof node === 'number' || typeof node == 'boolean') return node;
    if (node.type === 'Dimension') {
        return node.value;
    }
    if (node.type === 'Quoted' || node.type === 'Anonymous') {
        return node.value;
    }
    if (typeof node.toCSS === 'function') {
        return node.toCSS();
    }
    return node.value !== undefined ? node.value : defaultValue;
};

function install(less, pluginManager, functions) {

    functions.add('getColor', function (nameNode = "indigo", indexNode = 9, appearanceNode = 'light') {
        const name = getNodeValue(nameNode, 'indigo');
        const index = getNodeValue(indexNode, 9);
        const appearance = getNodeValue(appearanceNode, 'light');
        let colorKey = appearance == 'dark' ? name + 'Dark' : name;

        const scale = Colors[colorKey];
        if (!scale) {
            throw new Error(`Color scale "${colorKey}" not found in colors map.`);
        }

        const idx = parseInt(index, 10) - 1;
        const hexColor = scale[idx];

        if (!hexColor) {
            throw new Error(`Step index "${index}" is out of bounds for color scale "${name}".`);
        }
        return hexColor
    })

    functions.add('getAlphaColor', function(nameNode = "indigo", indexNode = 9, appearanceNode = 'light') {
        const name = getNodeValue(nameNode, 'indigo');
        const index = getNodeValue(indexNode, 9);
        const appearance = getNodeValue(appearanceNode, 'light');
        let colorKey = appearance == 'dark' ? name + 'DarkA' : name + 'A';
        
        const scale = Colors[colorKey];
        if (!scale) {
            throw new Error(`Color scale "${colorKey}" not found in colors map.`);
        }
        const idx = parseInt(index, 10) - 1;
        const hexColor = scale[idx];

        if (!hexColor) {
            throw new Error(`Step index "${index}" is out of bounds for color scale "${name}".`);
        }
        return hexColor
    })

}


module.exports = {
    install
}