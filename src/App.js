import { Container, GridItem, SimpleGrid } from "@chakra-ui/react";
import { useState , useEffect} from "react";
import { Route, Switch , BrowserRouter, Link} from "react-router-dom";
import { createBrowserHistory } from "history";
import preRenderMovies from "./hooks/preRenderMovies";
import CategoriesNav from "./components/CategoriesNav";
import Footer from "./components/Footer";
import MovieDetails from "./components/MovieDetails";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import NotFound from "./pages/NotFound"; // Import your 404 page component
import ReactGA from "react-ga4";

const trackingId = "G-Z090Q2W49P";
ReactGA.initialize(trackingId);

const history = createBrowserHistory();
history.listen(location => {

  ReactGA.send({ hitType: "pageview", page: location.pathname, title: location.pathname });
});

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [movies, setMovies] = useState(["/movie_id/60794","/movie_id/60793","/movie_id/60792","/movie_id/60791","/movie_id/60790","/movie_id/60789","/movie_id/60788","/movie_id/60787","/movie_id/60786","/movie_id/60785","/movie_id/60784","/movie_id/60783","/movie_id/60782","/movie_id/60781","/movie_id/60780","/movie_id/60779","/movie_id/60778","/movie_id/60777","/movie_id/60776","/movie_id/60775","/movie_id/60774","/movie_id/60773","/movie_id/60772","/movie_id/60771","/movie_id/60770","/movie_id/60769","/movie_id/60768","/movie_id/60767","/movie_id/60765","/movie_id/60764","/movie_id/60763","/movie_id/60761","/movie_id/60760","/movie_id/60759","/movie_id/60758","/movie_id/60757","/movie_id/60755","/movie_id/60756","/movie_id/60754","/movie_id/60753","/movie_id/60752","/movie_id/60751","/movie_id/60750","/movie_id/60749","/movie_id/60748","/movie_id/60747","/movie_id/60746","/movie_id/60745","/movie_id/60744","/movie_id/60743","/movie_id/60742","/movie_id/60740","/movie_id/60739","/movie_id/60738","/movie_id/60737","/movie_id/60736","/movie_id/60735","/movie_id/60734","/movie_id/60733","/movie_id/60732","/movie_id/60731","/movie_id/60730","/movie_id/60729","/movie_id/60728","/movie_id/60727","/movie_id/60726","/movie_id/60725","/movie_id/60724","/movie_id/60723","/movie_id/60722","/movie_id/60721","/movie_id/60720","/movie_id/60718","/movie_id/60717","/movie_id/60716","/movie_id/60715","/movie_id/60714","/movie_id/60713","/movie_id/60712","/movie_id/60711","/movie_id/60710","/movie_id/60709","/movie_id/60708","/movie_id/60706","/movie_id/60705","/movie_id/60704","/movie_id/60703","/movie_id/60702","/movie_id/60701","/movie_id/60700","/movie_id/60699","/movie_id/60698","/movie_id/60697","/movie_id/60694","/movie_id/60695","/movie_id/60696","/movie_id/60693","/movie_id/60692","/movie_id/60691","/movie_id/60689","/movie_id/60688","/movie_id/60687","/movie_id/60686","/movie_id/60685","/movie_id/60684","/movie_id/60683","/movie_id/60682","/movie_id/60681","/movie_id/60680","/movie_id/60679","/movie_id/60678","/movie_id/60677","/movie_id/60675","/movie_id/60674","/movie_id/60676","/movie_id/60673","/movie_id/60672","/movie_id/60671","/movie_id/60670","/movie_id/60669","/movie_id/60668","/movie_id/60667","/movie_id/60666","/movie_id/60665","/movie_id/60664","/movie_id/60662","/movie_id/60661","/movie_id/60660","/movie_id/60659","/movie_id/60658","/movie_id/60657","/movie_id/60656","/movie_id/60655","/movie_id/60654","/movie_id/60653","/movie_id/60652","/movie_id/60651","/movie_id/60650","/movie_id/60649","/movie_id/60648","/movie_id/60647","/movie_id/60646","/movie_id/60645","/movie_id/60644","/movie_id/60643","/movie_id/60640","/movie_id/60641","/movie_id/60642","/movie_id/60638","/movie_id/60639","/movie_id/60635","/movie_id/60636","/movie_id/60637","/movie_id/60633","/movie_id/60634","/movie_id/60630","/movie_id/60632","/movie_id/60629","/movie_id/60628","/movie_id/60626","/movie_id/60624","/movie_id/60625","/movie_id/60623","/movie_id/60619","/movie_id/60620","/movie_id/60621","/movie_id/60622","/movie_id/60618","/movie_id/60616","/movie_id/60617","/movie_id/60615","/movie_id/60613","/movie_id/60614","/movie_id/60612","/movie_id/60611","/movie_id/60610","/movie_id/60609","/movie_id/60608","/movie_id/60607","/movie_id/60606","/movie_id/60605","/movie_id/60604","/movie_id/60603","/movie_id/60602","/movie_id/60601","/movie_id/60600","/movie_id/60599","/movie_id/60598","/movie_id/60597","/movie_id/60596","/movie_id/60595","/movie_id/60594","/movie_id/60593","/movie_id/60592","/movie_id/60591","/movie_id/60590","/movie_id/60588","/movie_id/60589","/movie_id/60587","/movie_id/60586","/movie_id/60585","/movie_id/60584","/movie_id/60583","/movie_id/60582","/movie_id/60581","/movie_id/60579","/movie_id/60580","/movie_id/60578","/movie_id/60577","/movie_id/60576","/movie_id/60575","/movie_id/60574","/movie_id/60573","/movie_id/60572","/movie_id/60571","/movie_id/60567","/movie_id/60568","/movie_id/60569","/movie_id/60570","/movie_id/60566","/movie_id/60565","/movie_id/60561","/movie_id/60562","/movie_id/60563","/movie_id/60564","/movie_id/60557","/movie_id/60558","/movie_id/60559","/movie_id/60560","/movie_id/60556","/movie_id/60555","/movie_id/60554","/movie_id/60552","/movie_id/60553","/movie_id/60551","/movie_id/60549","/movie_id/60550","/movie_id/60548","/movie_id/60547","/movie_id/60545","/movie_id/60546","/movie_id/60544","/movie_id/60543","/movie_id/60542","/movie_id/60541","/movie_id/60540","/movie_id/60539","/movie_id/60538","/movie_id/60537","/movie_id/60534","/movie_id/60533","/movie_id/60532","/movie_id/60531","/movie_id/60530","/movie_id/60529","/movie_id/60528","/movie_id/60527","/movie_id/60526","/movie_id/60524","/movie_id/60523","/movie_id/60521","/movie_id/60522","/movie_id/60520","/movie_id/60518","/movie_id/60519","/movie_id/60517","/movie_id/60516","/movie_id/60515","/movie_id/60513","/movie_id/60514","/movie_id/60512","/movie_id/60510","/movie_id/60511","/movie_id/60509","/movie_id/60507","/movie_id/60508","/movie_id/60506","/movie_id/60502","/movie_id/60503","/movie_id/60504","/movie_id/60505","/movie_id/60501","/movie_id/60500","/movie_id/60499","/movie_id/60498","/movie_id/60497","/movie_id/60496","/movie_id/60495","/movie_id/60493","/movie_id/60494","/movie_id/60492","/movie_id/60491","/movie_id/60490","/movie_id/60489","/movie_id/60488","/movie_id/60487","/movie_id/60486","/movie_id/60484","/movie_id/60485","/movie_id/60483","/movie_id/60482","/movie_id/60481","/movie_id/60480","/movie_id/60479","/movie_id/60478","/movie_id/60477","/movie_id/60476","/movie_id/60475","/movie_id/60474","/movie_id/60473","/movie_id/60472","/movie_id/60471","/movie_id/60470","/movie_id/60469","/movie_id/60468","/movie_id/60467","/movie_id/60466","/movie_id/60465","/movie_id/60464","/movie_id/60463","/movie_id/60462","/movie_id/60461","/movie_id/60460","/movie_id/60459","/movie_id/60458","/movie_id/60457","/movie_id/60456","/movie_id/60455","/movie_id/60454","/movie_id/60453","/movie_id/60452","/movie_id/60451","/movie_id/60450","/movie_id/60449","/movie_id/60448","/movie_id/60447","/movie_id/60446","/movie_id/60445","/movie_id/60444","/movie_id/60443","/movie_id/60442","/movie_id/60441","/movie_id/60440","/movie_id/60439","/movie_id/60438","/movie_id/60437","/movie_id/60436","/movie_id/60435","/movie_id/60434","/movie_id/60433","/movie_id/60432","/movie_id/60431","/movie_id/60430","/movie_id/60429","/movie_id/60428","/movie_id/60427","/movie_id/60426","/movie_id/60425","/movie_id/60424","/movie_id/60423","/movie_id/60422","/movie_id/60421","/movie_id/60420","/movie_id/60419","/movie_id/60418","/movie_id/60417","/movie_id/60416","/movie_id/60415","/movie_id/60414","/movie_id/60413","/movie_id/60412","/movie_id/60411","/movie_id/60410","/movie_id/60409","/movie_id/60408","/movie_id/60407","/movie_id/60406","/movie_id/60405","/movie_id/60404","/movie_id/60403","/movie_id/60402","/movie_id/60401","/movie_id/60400","/movie_id/60399","/movie_id/60398","/movie_id/60397","/movie_id/60396","/movie_id/60395","/movie_id/60394","/movie_id/60393","/movie_id/60392","/movie_id/60391","/movie_id/60390","/movie_id/60389","/movie_id/60388","/movie_id/60387","/movie_id/60386","/movie_id/60385","/movie_id/60384","/movie_id/60383","/movie_id/60382","/movie_id/60381","/movie_id/60380","/movie_id/60379","/movie_id/60378","/movie_id/60377","/movie_id/60376","/movie_id/60375","/movie_id/60374","/movie_id/60373","/movie_id/60372","/movie_id/60371","/movie_id/60370","/movie_id/60369","/movie_id/60368","/movie_id/60367","/movie_id/60366","/movie_id/60365","/movie_id/60364","/movie_id/60363","/movie_id/60362","/movie_id/60361","/movie_id/60360","/movie_id/60359","/movie_id/60358","/movie_id/60357","/movie_id/60356","/movie_id/60355","/movie_id/60354","/movie_id/60353","/movie_id/60352","/movie_id/60351","/movie_id/60350","/movie_id/60349","/movie_id/60348","/movie_id/60346","/movie_id/60345","/movie_id/60344","/movie_id/60343","/movie_id/60342","/movie_id/60341","/movie_id/60340","/movie_id/60339","/movie_id/60338","/movie_id/60337","/movie_id/60335","/movie_id/60332","/movie_id/60331","/movie_id/60330","/movie_id/60329","/movie_id/60328","/movie_id/60327","/movie_id/60326","/movie_id/60325","/movie_id/60324","/movie_id/60323","/movie_id/60322","/movie_id/60321","/movie_id/60320","/movie_id/60319","/movie_id/60318","/movie_id/60317","/movie_id/60316","/movie_id/60314","/movie_id/60313","/movie_id/60312","/movie_id/60311","/movie_id/60310","/movie_id/60309","/movie_id/60308","/movie_id/60307","/movie_id/60306","/movie_id/60305","/movie_id/60304","/movie_id/60303","/movie_id/60302","/movie_id/60301","/movie_id/60300","/movie_id/60299","/movie_id/60298","/movie_id/60297","/movie_id/60296","/movie_id/60295","/movie_id/60294","/movie_id/60293","/movie_id/60292","/movie_id/60291","/movie_id/60290","/movie_id/60289","/movie_id/60288","/movie_id/60287","/movie_id/60286","/movie_id/60285","/movie_id/60284","/movie_id/60283","/movie_id/60282","/movie_id/60281","/movie_id/60280","/movie_id/60279","/movie_id/60278","/movie_id/60277","/movie_id/60276","/movie_id/60275","/movie_id/60274","/movie_id/60273","/movie_id/60272","/movie_id/60271","/movie_id/60270","/movie_id/60269","/movie_id/60268","/movie_id/60267","/movie_id/60265","/movie_id/60264","/movie_id/60263","/movie_id/60262","/movie_id/60261","/movie_id/60260","/movie_id/60259","/movie_id/60258","/movie_id/60257","/movie_id/60256","/movie_id/60255","/movie_id/60254","/movie_id/60253","/movie_id/60252","/movie_id/60251","/movie_id/60250","/movie_id/60249","/movie_id/60248","/movie_id/60247","/movie_id/60246","/movie_id/60245","/movie_id/60244","/movie_id/60243","/movie_id/60242","/movie_id/60241","/movie_id/60240","/movie_id/60239","/movie_id/60238","/movie_id/60237","/movie_id/60236","/movie_id/60235","/movie_id/60234","/movie_id/60233","/movie_id/60232","/movie_id/60231","/movie_id/60230","/movie_id/60229","/movie_id/60228","/movie_id/60227","/movie_id/60226","/movie_id/60225","/movie_id/60224","/movie_id/60223","/movie_id/60222","/movie_id/60221","/movie_id/60220","/movie_id/60219","/movie_id/60217","/movie_id/60216","/movie_id/60215","/movie_id/60214","/movie_id/60213","/movie_id/60212","/movie_id/60210","/movie_id/60209","/movie_id/60208","/movie_id/60207","/movie_id/60206","/movie_id/60205","/movie_id/60204","/movie_id/60203","/movie_id/60202","/movie_id/60201","/movie_id/60200","/movie_id/60199","/movie_id/60198","/movie_id/60197","/movie_id/60195","/movie_id/60194","/movie_id/60193","/movie_id/60192","/movie_id/60191","/movie_id/60190","/movie_id/60189","/movie_id/60188","/movie_id/60187","/movie_id/60185","/movie_id/60184","/movie_id/60183","/movie_id/60182","/movie_id/60181","/movie_id/60180","/movie_id/60179","/movie_id/60178","/movie_id/60177","/movie_id/60176","/movie_id/60175","/movie_id/60174","/movie_id/60173","/movie_id/60172","/movie_id/60171","/movie_id/60170","/movie_id/60169","/movie_id/60168","/movie_id/60167","/movie_id/60166","/movie_id/60165","/movie_id/60164","/movie_id/60163","/movie_id/60161","/movie_id/60160","/movie_id/60159","/movie_id/60158","/movie_id/60157","/movie_id/60156","/movie_id/60155","/movie_id/60154","/movie_id/60153","/movie_id/60152","/movie_id/60151","/movie_id/60150","/movie_id/60149","/movie_id/60148","/movie_id/60147","/movie_id/60146","/movie_id/60145","/movie_id/60144","/movie_id/60143","/movie_id/60142","/movie_id/60141","/movie_id/60140","/movie_id/60139","/movie_id/60138","/movie_id/60137","/movie_id/60136","/movie_id/60135","/movie_id/60134","/movie_id/60133","/movie_id/60132","/movie_id/60131","/movie_id/60130","/movie_id/60129","/movie_id/60128","/movie_id/60127","/movie_id/60126","/movie_id/60125","/movie_id/60124","/movie_id/60123","/movie_id/60122","/movie_id/60121","/movie_id/60120","/movie_id/60119","/movie_id/60118","/movie_id/60117","/movie_id/60116","/movie_id/60115","/movie_id/60114","/movie_id/60113","/movie_id/60112","/movie_id/60111","/movie_id/60110","/movie_id/60109","/movie_id/60108","/movie_id/60107","/movie_id/60106","/movie_id/60105","/movie_id/60104","/movie_id/60103","/movie_id/60102","/movie_id/60101","/movie_id/60100","/movie_id/60098","/movie_id/60097","/movie_id/60096","/movie_id/60094","/movie_id/60093","/movie_id/60092","/movie_id/60091","/movie_id/60090","/movie_id/60089","/movie_id/60088","/movie_id/60087","/movie_id/60086","/movie_id/60085","/movie_id/60084","/movie_id/60083","/movie_id/60082","/movie_id/60081","/movie_id/60080","/movie_id/60079","/movie_id/60078","/movie_id/60077","/movie_id/60075","/movie_id/60074","/movie_id/60073","/movie_id/60072","/movie_id/60071","/movie_id/60070","/movie_id/60069","/movie_id/60068","/movie_id/60067","/movie_id/60066","/movie_id/60065","/movie_id/60064","/movie_id/60063","/movie_id/60062","/movie_id/60061","/movie_id/60060","/movie_id/60059","/movie_id/60058","/movie_id/60057","/movie_id/60056","/movie_id/60055","/movie_id/60054","/movie_id/60053","/movie_id/60052","/movie_id/60051","/movie_id/60050","/movie_id/60049","/movie_id/60048","/movie_id/60047","/movie_id/60046","/movie_id/60045","/movie_id/60044","/movie_id/60042","/movie_id/60041","/movie_id/60040","/movie_id/60039","/movie_id/60038","/movie_id/60037","/movie_id/60036","/movie_id/60035","/movie_id/60034","/movie_id/60033","/movie_id/60032","/movie_id/60031","/movie_id/60030","/movie_id/60029","/movie_id/60028","/movie_id/60027","/movie_id/60026","/movie_id/60025","/movie_id/60024","/movie_id/60023","/movie_id/60022","/movie_id/60021","/movie_id/60019","/movie_id/60018","/movie_id/60017","/movie_id/60016","/movie_id/60015","/movie_id/60014","/movie_id/60010","/movie_id/60011","/movie_id/60013","/movie_id/60012","/movie_id/60008","/movie_id/60007","/movie_id/60006","/movie_id/60005","/movie_id/60004","/movie_id/60003","/movie_id/60002","/movie_id/60001","/movie_id/60000","/movie_id/59999","/movie_id/59998","/movie_id/59997","/movie_id/59996","/movie_id/59995","/movie_id/59994","/movie_id/59993","/movie_id/59992","/movie_id/59991","/movie_id/59990","/movie_id/59989","/movie_id/59988","/movie_id/59987","/movie_id/59986","/movie_id/59985","/movie_id/59984","/movie_id/59983","/movie_id/59982","/movie_id/59981","/movie_id/59980","/movie_id/59979","/movie_id/59978","/movie_id/59977","/movie_id/59976","/movie_id/59975","/movie_id/59974","/movie_id/59973","/movie_id/59972","/movie_id/59971","/movie_id/59970","/movie_id/59969","/movie_id/59968","/movie_id/59967","/movie_id/59966","/movie_id/59965","/movie_id/59964","/movie_id/59962","/movie_id/59961","/movie_id/59960","/movie_id/59959","/movie_id/59958","/movie_id/59957","/movie_id/59956","/movie_id/59955","/movie_id/59954","/movie_id/59953","/movie_id/59952","/movie_id/59951","/movie_id/59950","/movie_id/59949","/movie_id/59948","/movie_id/59947","/movie_id/59946","/movie_id/59945","/movie_id/59944","/movie_id/59943","/movie_id/59941","/movie_id/59940","/movie_id/59939","/movie_id/59938","/movie_id/59937","/movie_id/59936","/movie_id/59935","/movie_id/59934","/movie_id/59933","/movie_id/59932","/movie_id/59931","/movie_id/59930","/movie_id/59929","/movie_id/59928","/movie_id/59927","/movie_id/59926","/movie_id/59925","/movie_id/59924","/movie_id/59923","/movie_id/59922","/movie_id/59921","/movie_id/59920","/movie_id/59919","/movie_id/59918","/movie_id/59917","/movie_id/59915","/movie_id/59914","/movie_id/59913","/movie_id/59912","/movie_id/59911","/movie_id/59910","/movie_id/59909","/movie_id/59908","/movie_id/59907","/movie_id/59905","/movie_id/59904","/movie_id/59902","/movie_id/59901","/movie_id/59900","/movie_id/59899","/movie_id/59898","/movie_id/59897","/movie_id/59896","/movie_id/59895","/movie_id/59894","/movie_id/59893","/movie_id/59892","/movie_id/59891","/movie_id/59890","/movie_id/59889","/movie_id/59888","/movie_id/59887","/movie_id/59886","/movie_id/59885","/movie_id/59884","/movie_id/59883","/movie_id/59882","/movie_id/59881","/movie_id/59880","/movie_id/59879","/movie_id/59878","/movie_id/59877","/movie_id/59876","/movie_id/59875","/movie_id/59874","/movie_id/59873","/movie_id/59872","/movie_id/59871","/movie_id/59870","/movie_id/59869","/movie_id/59868","/movie_id/59866","/movie_id/59865","/movie_id/59864","/movie_id/59863","/movie_id/59862","/movie_id/59861","/movie_id/59860","/movie_id/59859","/movie_id/59858","/movie_id/59857","/movie_id/59856","/movie_id/59855","/movie_id/59854","/movie_id/59853","/movie_id/59852","/movie_id/59851","/movie_id/59850","/movie_id/59849","/movie_id/59848","/movie_id/59847","/movie_id/59846","/movie_id/59845","/movie_id/59844","/movie_id/59843","/movie_id/59841","/movie_id/59842","/movie_id/59840","/movie_id/59839","/movie_id/59838","/movie_id/59837","/movie_id/59836","/movie_id/59835","/movie_id/59834","/movie_id/59832","/movie_id/59833","/movie_id/59831","/movie_id/59830","/movie_id/59829","/movie_id/59828","/movie_id/59826","/movie_id/59827","/movie_id/59825","/movie_id/59824","/movie_id/59823","/movie_id/59821","/movie_id/59822","/movie_id/59820","/movie_id/59819","/movie_id/59818","/movie_id/59817","/movie_id/59816","/movie_id/59815","/movie_id/59814","/movie_id/59813","/movie_id/59812","/movie_id/59811","/movie_id/59809","/movie_id/59810","/movie_id/59807","/movie_id/59808","/movie_id/59806","/movie_id/59804","/movie_id/59805","/movie_id/59803","/movie_id/59802","/movie_id/59801","/movie_id/59800","/movie_id/59797","/movie_id/59798","/movie_id/59799","/movie_id/59796","/movie_id/59794","/movie_id/59795","/movie_id/59792","/movie_id/59793","/movie_id/59791","/movie_id/59790","/movie_id/59788","/movie_id/59789","/movie_id/59787","/movie_id/59786","/movie_id/59785","/movie_id/59784","/movie_id/59783","/movie_id/59782","/movie_id/59781","/movie_id/59780","/movie_id/59779","/movie_id/59777","/movie_id/59778","/movie_id/59776","/movie_id/59772","/movie_id/59773","/movie_id/59774","/movie_id/59775","/movie_id/59771","/movie_id/59770","/movie_id/59768","/movie_id/59769","/movie_id/59767","/movie_id/59766","/movie_id/59765","/movie_id/59764"]);

  // useEffect(() => {
  //   const fetchMovies = async () => {
  //     const moviesData = await preRenderMovies();
  //     setMovies(moviesData);
  //   };
  //   fetchMovies();
  // }, []);

  // console.log(pre_render_movies);
  const toggleSideNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Container
      as="main"
      maxW={{
        xs: "full",
        md: "720px",
        lg: "960px",
        xl: "1140px",
        xxl: "1320px",
      }}
    >
      <BrowserRouter history={history}>
      {/* <HashRouter> */}
        <Navbar toggleSideNav={toggleSideNav} />
        <GridItem>
        {movies.map((movie, index) => (
            <Link key={index} to={`${movie}`}>
              {movie.title}
            </Link>
          ))}
        </GridItem>
        <SimpleGrid columns={5} row={1} spacing={6}>
          <GridItem colSpan={{ base: 5, md: 4 }}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/movies/" component={Movies} />
              <Route path="/movie_id/:movie_id" component={MovieDetails} />
              <Route component={NotFound} />

            </Switch>
          </GridItem>
          <GridItem>
            
            <CategoriesNav
              isOpen={isOpen}
              toggleSideNav={toggleSideNav}
              setIsOpen={setIsOpen}
            />
          </GridItem>
        </SimpleGrid>
        <MovieDetails />
        {/* <Link to="/movie_id/42950">L</Link> */}
        <Footer />
        
      {/* </HashRouter> */}
      </BrowserRouter>
      {/* <Link to="/?movie_id=42950">L</Link> */}
    </Container>
  );
};

export default App;