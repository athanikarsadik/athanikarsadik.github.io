'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "669edabbc505c8025954aa6fbd046bf6",
".git/config": "7967219706710613994cb0ea4c8218b7",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "679f19eb5293bd5665ada07aef7a3e73",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "5d6d777c05beda60630ef13950c98a27",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "0a13e7b2f7ffc8d7f9dd6bacf03b1f9e",
".git/logs/refs/heads/main": "fba5f4663a10ce6a488e752aba7afefc",
".git/logs/refs/remotes/origin/main": "c4a092232a2729ba6ec1563a4e0ebf67",
".git/objects/03/8e6b0061371934b1e5aca78fa192c2ff79e295": "4eb02eb72bc15071c0e7de0c3d609fde",
".git/objects/06/608787f51de0804e12cf1579483661a906fe2c": "dde33dbaac4784594d1525dc22b6a79e",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/0a/2674939c05ee057afd976ea7b874bf21061a3a": "893dbe67cb0120e4d8a7a4dac1c518f7",
".git/objects/0b/6833a09f88989f0fe82948d5bd8647093fcf7e": "9ac3ff3f04664463067b97526ca0510a",
".git/objects/0e/9157d288b836bea4b5a42be990128e8dd935f9": "7f2392ee39d10ed9537818ad739f147f",
".git/objects/12/9542d5027f5723081d90e5118452e435190206": "419a083f9ccebb66742e4ce4d5643d5f",
".git/objects/15/387661f29f135fab72b656b784ff82c61eaead": "0a8d87d9eeee2b7355ff63884ece018a",
".git/objects/16/d2842a0de7ffe33c1b54dfefbf1644a26e83cc": "9f34ada58d79a09790c9be3985696921",
".git/objects/19/14e4e4970adbbee25420b0cb0fa07de42c1e73": "044836445ff4701ab3b496b3ff74befb",
".git/objects/1b/790242469f1bb389d0b43450e1cc45e94c9d61": "54228b8ab59ea6eccc114e6214521362",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/2c/d4ae22dbb35db6d8ddddab1f303f4f595bb51c": "d98e69ce7a7c5d53ee82b9785022fb12",
".git/objects/2f/789061cf07c4e02847c3021be7fbe881b37dd0": "3e182cd0ae1124ff5ebf207933a2055e",
".git/objects/2f/b49095b1e1cffefd27acd31e277b5db2b54159": "5f19afa5c0322357131f4ffe586beded",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/33/b87b1025138f1bee8aacfe3c1837e08ad40100": "b89bc56d9f49b7df04ed9f6958a313e3",
".git/objects/34/fe34c34bfbd603dd0ca47e65cb803db309b39e": "ab8cd2e6580d2e4ed92340c6fa1849cd",
".git/objects/37/29d1b5bad0158500208da1d6d03db710993fcd": "74c4a32dd7ccfc62d5402104e4aac41f",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3e/bb87b223a8149e2da2c0bb2ee52e9669df33fb": "550287ebedc22b9a0d9bd9508a075033",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/44/7cc520c4f8ee49a054a81490407fcd4c9a757e": "38d7904b1ea9af0ba384a1d8118a0237",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/45/f7570f138895c1d761bae34522a872033e4b13": "2ac53ef4cf142dfb5d0664361e7da090",
".git/objects/4b/8988714ee69f3528d13105107a243629bacc9a": "4a059bfc7fa2f9fbaac6db36c1e42657",
".git/objects/4c/44041efa48d68f8480a832e313d134512fd641": "9f0bc1ca78807b01b33ef12cb1b8d205",
".git/objects/52/4e75123dd766daf1fb2ccab9fe21cc2b719f65": "b2e591496ab6776b8561647a76902516",
".git/objects/54/8523420d09dd1b9fc422781a832a0664401818": "d849f99267f517e7f5e483f6c75da090",
".git/objects/55/a68d9d09bd6b39b9db8712296f8d7fc62b0ebb": "40415baa9e194a881d715452c09a8271",
".git/objects/56/c65beb13294c8e58a5ec705214ec53230a5eea": "b1b5229b7a95dacf04eceac0cfa03690",
".git/objects/58/1dc7d24b7b39635a26d0adf34078c2dd4b0961": "c81256340b4c3c5dfce4952f05cfb92c",
".git/objects/5a/013d95b5f8c785187b872c4f8405576c2397f8": "cf5b5b982ef472b1b7802e4f79d2971e",
".git/objects/5a/9cf66eae352fe1d22c95abdc96e533499e0ec9": "72fc74c25ebb96dea16d97d7969deb37",
".git/objects/5f/d2bca3bb9b0fbb305839dbf900381660d9aa20": "da0c35795ce63d1226302eb330a16ef1",
".git/objects/61/7e2131cc8be665df2675013f0c421665b964d8": "a6db1d8ce4659315f8d12af58d6de768",
".git/objects/61/c54c22e4284a807618bf010a73c8833d04ccf6": "865053c78713bf2bb621d1dec765756e",
".git/objects/6a/582341b8db59d48f4940207651707b2c040e27": "a82cce56d16808591e05772ea6b897a8",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6d/920299f2402f937ff692d0f50c6f0b8ba9c8f8": "93189327f2d13bdb4e48117822ef5fe7",
".git/objects/74/1005df1152bfe49e46710d066aab8dff6f7979": "e482b6bdc508da1a58922b36aaeb8bd1",
".git/objects/74/438dd4a6ce78222b1dc03cbb0ab2113fca0e85": "95fd1cff5873b7e9f42d88a6b3565123",
".git/objects/7a/ee448795e67e478cb60f14fb050975c37acfe5": "3de303b9c2b773bb4bcaa6675698b914",
".git/objects/7c/611341b4d477f460ee5020c9ac83278873365c": "3f892b2acf355852ed1e824d3855c575",
".git/objects/7e/ff91349180208b139d88eec9bf73e7ec004be1": "450438389f64f75538b3f10c1681cf79",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/85/f3f6fc96a7135c0f37c21b691b0cb6918b42af": "d8e59ae9507efb93d9865a08f15fbe4f",
".git/objects/87/ec766ea458f1e7e28142496b43ee9f05cdc741": "cbf7257945c971ef86d27148ad07f050",
".git/objects/87/efe71f161bd835381346c8f333c1bff33d72d6": "66a696054250e50ee740f95b58c9cd0a",
".git/objects/88/75b4040365ba6428fe9e5b621a2cd8aae6c142": "9bd7aa5127c70a5ea1725de01e58f83f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/60bd3c11a11e382d1f1556fda801a682293cf8": "77e78c4eea756d2f0cb35afed951f405",
".git/objects/8b/9cd5b33e068574cbd509e669858e3cf948e1f3": "4428ba936504146442045f7c30421150",
".git/objects/8e/2ef1ea9cc62d5dcff462072b0d0404761f5c40": "b2e734c2438df496ea1bcf2d84d0dbcf",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/96/596cc0d539b0781a319ef963e036c50afe77c3": "dbaab12d94e07b1b86684c142c1e68db",
".git/objects/97/3e4b480b4adefc524e23b12b72122ee552c2db": "ebb95747f77501504b7936b87be78b72",
".git/objects/97/f0f6d781429585b85fb9db37017520430dc649": "3622daf3674276c2d133550f5b167592",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/9a/5345916c56e6744353c0337ec3af1ce06e6cd6": "182d74e2f8d304bf7d585b2e09edba24",
".git/objects/9f/48813cef8758ec25ebb3617f238d1d3ed214f7": "8ad64f58bf39148ca74e89b115cf4ec0",
".git/objects/a5/cdb5cfdaa0fe0e1b9d5cd21eddb2e280d1b0a5": "8cc2a76696fe779a10981efb86408311",
".git/objects/a6/4864b4359a6ec686788bb32a61a20f3f970db6": "a89c360603c4b516c5bf6ca2acb6c02d",
".git/objects/a6/59e00463e0ed62a497a207126495512bf62fee": "1b9c3a5403c57bd6db85d23b5ef8741a",
".git/objects/a7/2a90a97c615b5eb7d2a80bc632be4b3a284518": "40d04a416aa8c7493da26b46e553f1f0",
".git/objects/ad/2030abdb7c8559519bf2339bd1c3eaeba35db7": "e20f3274833edfa707c4983044c4f14e",
".git/objects/ad/20dc79b0a7b06274f871d49e5737a5f69d8b21": "7fb6b22c28f2e5f867d1f0c0aceef0bf",
".git/objects/af/bd53256cb156223f747d251a707cd5606fc40f": "7a8d8efbe4ab255351adbdc7c6e1cf1e",
".git/objects/b0/194b56be5cbfc8211d117880bfa5cfe67d4561": "556ce45e072c4ca718f3c817c13e3cc7",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/a1d0e787aa88f0084ab09889bd3e77676c4ded": "4f2bd2fd33217a86497a587584d5be29",
".git/objects/b1/aec66275fa21ad85ed8c6f5ac7332546f85808": "2678af2ad0a78d0fa2dd404c914333ee",
".git/objects/b5/ed96e7490fa7d1c13ff7b8270286b2dc43d1bf": "35acb235306d836e97388367daac6a40",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/2bc2aa11737dd91ffcee50f451fa968b193ab6": "a3985a6b9f5bd76fd57f7238de41efe2",
".git/objects/b8/ab1cb8c18e7a30417a44147a6837393204383d": "98145213a35f1200c4a2edad1fcdc5ae",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bd/d59a421cec364d7ed93f44df3c0a0826f3e76f": "3a378491a1a24eed27b8a466e880601f",
".git/objects/c2/9acd8cd0060b09918061a3588b570497e20980": "d6235787482aada96cffdf5c8ccf1652",
".git/objects/c2/c1a1eb8bcf276c28e34354256c1038c080bf2d": "2d643f21978387ce1d590fda3764a2ec",
".git/objects/c6/897d6802711e55599efa0f1502418071a1ebaa": "7a7fde1bddccff2490c5aa1829091acb",
".git/objects/c6/c20ec570c21bb30ccb6424bc383c580002adb4": "00db04992f5740bc505aecc681162e6c",
".git/objects/c8/bfd54751d135f273690fcd83fd48d38af51225": "9c75fd4450fab3957723cc8cd5f51560",
".git/objects/ce/523db4313f36d5bd9f7b65321ef508a116b71e": "6cd75bfae5243d687652779a8b4a5be8",
".git/objects/ce/5fe09fcf6a630bd28bb5dcfd3f8aedc9cb8b38": "ae6d53c913531467a0c261065771c092",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/a34c2f17f6979cd8c0f834f21f614c2af0fa25": "87060b13d615493d3380c649dc836153",
".git/objects/d5/b52f5ea9a2686c79a9b0801223981e2b8381d5": "7997b2bf1bd941ba1a41873f66b8ea6e",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/6e589e14a4f964294ba366fce72be9d6d1d26b": "fcf7dd00928feb8f8220d715d68ce421",
".git/objects/d8/41dc5a36ca6b18b60aed358ce1c731d3d95133": "65441a363a32885bab682ded77c45fb4",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/dc/39119c2170e26121d57815b9ac2d576086a824": "2e150fcdf3d5b4b52f120b234f44ed04",
".git/objects/e2/3449bd8221c0a0e91643a12800516627407504": "b5ef2ba0a07f15d11214e3675d062d4c",
".git/objects/e2/e73f19776ea3f1a6dc74431140b16464e4d71d": "0d51f8872513f58ac70d442eb460a622",
".git/objects/e4/1182cf5500a772dcc94a9ee8df68f10913003a": "5461af3a06f7e35d9480f61c41572dd3",
".git/objects/e5/0c1c8a1f98fd54891ae829f0408e6ba6306037": "7f816ff0cd66b0fae94ff8631c821d06",
".git/objects/e7/a7dbc8917ef1cc503ec6698b14bfdc81fb83a7": "44dc637f04af8a028a2f6d7d26b0dfaf",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/a5c5369e3304d595b9b69c908473609e3cb067": "ca5560a275568e7eae07140140a7c5bf",
".git/objects/f0/10f551d0eb2c5c6b4dd242dce33918751da79b": "e30bd21c9721dba977d4178b2f87a0ec",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/c891f00c8f18cbd4c077a5a60ceef84cd22955": "d469fc429424a60e61469680f269e77c",
".git/objects/f9/e35185b9213765331c62b0bda49b541d1dd80d": "4720ccac4d971d6d740dd9092ffa2147",
".git/objects/fb/d9f22a0e59fae3b28da67240e9710d45aca3c2": "96749c10ee9ab0ca59480d06ac0af926",
".git/objects/fd/d6ba3f0c3bf59fc27f4b072d45fe475dc0058c": "054ac90dde09baece82f6a424f52f410",
".git/ORIG_HEAD": "8383f60d092f81bfc551bd6c6d9c90bf",
".git/refs/heads/main": "8383f60d092f81bfc551bd6c6d9c90bf",
".git/refs/remotes/origin/main": "8383f60d092f81bfc551bd6c6d9c90bf",
"assets/AssetManifest.bin": "b28ab4cb14e5e76557ab4dfae09b780c",
"assets/AssetManifest.bin.json": "f6d8abd87a33a5d020018a6aee51ff84",
"assets/AssetManifest.json": "d0804316f1f285fb1aa3388617711ef8",
"assets/assets/images/test.png": "cb4f36468ba2eb435f6e891ed3156600",
"assets/assets/lottie/ai.json": "2dbb8becdab761137771650f03eb0ff2",
"assets/assets/lottie/loading.json": "62dddaecbd819bce0e2d594a0b613c0f",
"assets/assets/lottie/streaming.json": "5b939dd90fc6e4bd97171024740d1716",
"assets/assets/svg/add_page.svg": "cc95e28a8ca48f9131a7711a8297676c",
"assets/assets/svg/arrow.svg": "2a61e8280bfbdcc3b73a3dadfcbfc721",
"assets/assets/svg/chat.svg": "f9de21fce1fe4b59751095900c78f1ce",
"assets/assets/svg/circle.svg": "f36acc26b85d35c0cd7cca7e33c0fef3",
"assets/assets/svg/contract.svg": "ff293f3a4f079fe2125795ceff3709a3",
"assets/assets/svg/download.svg": "b77abb75a93a46a4c5fb32617304fdee",
"assets/assets/svg/eraser.svg": "690b91bf68816cec08be61daa64bb29d",
"assets/assets/svg/expand.svg": "d3f09ff6ac3acc6060169b2b16679106",
"assets/assets/svg/export_png.svg": "6575cf0e300cee4ef6774bdefd06875f",
"assets/assets/svg/file.svg": "e8b152d099afd2b1d9e714d038f31c08",
"assets/assets/svg/hand.svg": "86f29ef230130077da88407f28a14c8c",
"assets/assets/svg/image.svg": "0e2dae58ae86fb1246e6a49f2c34faca",
"assets/assets/svg/line.svg": "bc471f810140db74464e65a731bab5cd",
"assets/assets/svg/menu.svg": "277d1f43246bd191eb721764addd9e83",
"assets/assets/svg/mic.svg": "b245aacd6e39e959fac19c7431d81e13",
"assets/assets/svg/pencil.svg": "faaeab0e0c20c31a9776c6524de1bf93",
"assets/assets/svg/rectangle.svg": "987106ed78b6c92edb7247aaed0d5e10",
"assets/assets/svg/redo.svg": "a68cf676c2cd7f0c7197cd06c1a57816",
"assets/assets/svg/reset.svg": "0ca26a92d27f40cbaf445cbe6b714d7c",
"assets/assets/svg/select.svg": "5ebbda2b78827c1f86c72fbc8c0515d6",
"assets/assets/svg/send.svg": "919a182409167aea8706cfc93cd7d697",
"assets/assets/svg/text.svg": "2f0060cf7aeb80f26dd5c66b2e4a317f",
"assets/assets/svg/undo.svg": "ccc2af448eb08f321d97263772b0697c",
"assets/FontManifest.json": "e5e39936e8313fa5c49b97b1f2c66c2f",
"assets/fonts/MaterialIcons-Regular.otf": "8ea80b815445259f4239b169d17d8edd",
"assets/fonts/spinnaker/Spinnaker-Regular.ttf": "8dd138b325468d5d39f0e98c9e0ac809",
"assets/NOTICES": "702044821cd0b59d64dd1c6149440d5f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "17ee8e30dde24e349e70ffcdc0073fb0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "04f83c01dded195a11d21c2edf643455",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "513f54555f5bb434cf6b16ed3e8acda6",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "b77c8e4d5ef9c19dab25ecf3c8156abb",
"/": "b77c8e4d5ef9c19dab25ecf3c8156abb",
"main.dart.js": "18c1767fb81500241e81de09558617f3",
"manifest.json": "f8f82abcd43984ed8b709c7ee0174ef2",
"README.md": "0a43d2d40f0f9a3a40aa546f7278b5e5",
"version.json": "321ce64d2a98dbfe902dba3e3fa6ed79"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
