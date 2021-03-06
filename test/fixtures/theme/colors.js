export function generateRandomColors(NUM_SWATCHES = 1000) {
    const randomColors = [];

    for (let i = 0; i < NUM_SWATCHES; i += 1) {
        // eslint-disable-next-line no-bitwise
        const colorKey = `#${`000000${((Math.random() * 0xffffff) << 0).toString(16)}`.slice(-6)}`;
        randomColors.push(colorKey);
    }

    return randomColors;
}

const colors = [
    '#2ab640',
    '#c19d56',
    '#f49e91',
    '#11e0ac',
    '#1013a9',
    '#7a5230',
    '#48c771',
    '#5e5464',
    '#4205c0',
    '#01b8a2',
    '#cc54d0',
    '#1f252d',
    '#286d9b',
    '#91dd56',
    '#2abcde',
    '#67918f',
    '#2ed9d6',
    '#a23749',
    '#002937',
    '#7794a8',
    '#0d1411',
    '#c63b66',
    '#3e7ff7',
    '#28c5bb',
    '#11cb43',
    '#755b94',
    '#724d13',
    '#2198e8',
    '#93ec34',
    '#4f957d',
    '#244805',
    '#06216c',
    '#7cef50',
    '#edb7e4',
    '#95928b',
    '#bb6ad4',
    '#6b0a92',
    '#feeaa7',
    '#a49eb7',
    '#509d6d',
    '#debc41',
    '#690707',
    '#35b12a',
    '#dcd218',
    '#13334b',
    '#8270ca',
    '#661359',
    '#a705b1',
    '#bc9f0c',
    '#9aafe0',
    '#767e66',
    '#e27101',
    '#78ba85',
    '#2c32ed',
    '#cdc12c',
    '#ccb677',
    '#e46644',
    '#d2c7c9',
    '#45b4c8',
    '#d93e41',
    '#4f2f99',
    '#c2277d',
    '#568953',
    '#fcf845',
    '#318483',
    '#971484',
    '#1b1a5b',
    '#2f6f09',
    '#bdf4b4',
    '#7b76c3',
    '#287ee1',
    '#dac1f4',
    '#f509ef',
    '#668afe',
    '#9af8f7',
    '#4ca8d3',
    '#99c59c',
    '#f095f9',
    '#0e38fe',
    '#2dea23',
    '#68b25e',
    '#9385ff',
    '#d6c72f',
    '#7d97d0',
    '#90d42a',
    '#2bbe0f',
    '#d4f02a',
    '#74877e',
    '#5e1ba7',
    '#3bab11',
    '#0162da',
    '#967e6e',
    '#91a019',
    '#7037cc',
    '#b8380b',
    '#e8cfa7',
    '#b158b3',
    '#d7064a',
    '#2adcb0',
    '#ad27cb',
    '#30060f',
    '#3bbb61',
    '#fba766',
    '#4d310c',
    '#3bf59e',
    '#2847c4',
    '#49d0f4',
    '#ccbfa0',
    '#c6f53d',
    '#87e546',
    '#025988',
    '#ff331f',
    '#a9502f',
    '#d87c66',
    '#03431c',
    '#04ca03',
    '#b6459c',
    '#6d244d',
    '#aa2c22',
    '#36e061',
    '#2b8b29',
    '#5b1166',
    '#a96e71',
    '#f8624b',
    '#fdf6be',
    '#095d00',
    '#7702ba',
    '#98d397',
    '#73b384',
    '#dad14b',
    '#89ebb5',
    '#0669c2',
    '#0304bb',
    '#0e1a74',
    '#7d5b60',
    '#d564f4',
    '#43d60f',
    '#ee5fd2',
    '#fc7369',
    '#446a80',
    '#ba28b1',
    '#056907',
    '#b970cf',
    '#427855',
    '#23534d',
    '#0c7adc',
    '#caffe3',
    '#cbe4c0',
    '#813326',
    '#d9108a',
    '#9aafbc',
    '#443e41',
    '#6011c5',
    '#09b4f2',
    '#283c92',
    '#ed7390',
    '#a7cac2',
    '#22e426',
    '#3b6bb3',
    '#bfe1f2',
    '#277015',
    '#379587',
    '#8852c8',
    '#05361d',
    '#16a7f3',
    '#8d21d6',
    '#f77137',
    '#68b867',
    '#3cddb9',
    '#e16fc6',
    '#583880',
    '#aecb4f',
    '#9c8e86',
    '#485e06',
    '#176859',
    '#6ef639',
    '#e2162c',
    '#128aeb',
    '#57013a',
    '#4d0a41',
    '#d90b5a',
    '#7f980f',
    '#eeaa73',
    '#64552b',
    '#72df93',
    '#15be7f',
    '#688419',
    '#c50f08',
    '#467a95',
    '#166071',
    '#abc8c3',
    '#601b5f',
    '#04a841',
    '#3b9c70',
    '#9592a8',
    '#e8fe71',
    '#b11884',
    '#e54ae4',
    '#7c7233',
    '#493c71',
    '#7d0b12',
    '#e752f6',
    '#3a3a7d',
    '#418426',
    '#19cdd8',
    '#c498a2',
    '#4acd96',
    '#ef2777',
    '#02fcd3',
    '#9a55ba',
    '#48c42f',
    '#14d59e',
    '#29494f',
    '#465a74',
    '#cbe6da',
    '#dbeec9',
    '#a86dc0',
    '#2e54bc',
    '#bbf1c7',
    '#925faf',
    '#d83383',
    '#30babc',
    '#f5a14d',
    '#4c2288',
    '#8d8aa7',
    '#5a125c',
    '#67d9da',
    '#080b50',
    '#8003a3',
    '#8d076f',
    '#77f9fe',
    '#7ad886',
    '#393f6e',
    '#93b425',
    '#8836cb',
    '#e40203',
    '#35132a',
    '#e25da1',
    '#7017b4',
    '#3bc899',
    '#1b73f4',
    '#963452',
    '#9515e9',
    '#0f0dda',
    '#8d4965',
    '#7d6fa5',
    '#3ffb7b',
    '#a1b201',
    '#d8135d',
    '#5303f6',
    '#f44dfc',
    '#e9222d',
    '#70b484',
    '#56863d',
    '#6a257c',
    '#19076e',
    '#586fef',
    '#e34004',
    '#7ce927',
    '#09af3d',
    '#76ba17',
    '#2f4f1e',
    '#55191f',
    '#74f447',
    '#ded5cb',
    '#bf0ee5',
    '#bba5c6',
    '#103688',
    '#bed16d',
    '#c2de54',
    '#1582ee',
    '#2eef2b',
    '#4d558a',
    '#959dbd',
    '#2e3f03',
    '#9805df',
    '#97b2b9',
    '#035f86',
    '#beadf9',
    '#d56d6b',
    '#1ad0d8',
    '#206bc7',
    '#b2940e',
    '#991d3d',
    '#681488',
    '#4967cf',
    '#748e54',
    '#f24300',
    '#d3c3a9',
    '#63e146',
    '#e48f53',
    '#8bd54d',
    '#728d33',
    '#e39d41',
    '#e77924',
    '#2f1aba',
    '#44b908',
    '#c735e8',
    '#0a9b2d',
    '#342f03',
    '#f91dd0',
    '#7b9ff8',
    '#b64853',
    '#0c1c01',
    '#694c8f',
    '#b39784',
    '#57da3a',
    '#31440f',
    '#b2d464',
    '#5453ff',
    '#83daf4',
    '#1d8617',
    '#69afd9',
    '#3bd250',
    '#c44f2a',
    '#284b9d',
    '#438cc3',
    '#b93128',
    '#53e990',
    '#fc7117',
    '#47310d',
    '#82043b',
    '#01c075',
    '#a2bbd1',
    '#058827',
    '#c9348c',
    '#ebd817',
    '#7b0d0e',
    '#7cd083',
    '#2e566e',
    '#6712c4',
    '#0959d6',
    '#2f4574',
    '#beb516',
    '#7266a7',
    '#da2387',
    '#0c6b27',
    '#d716f1',
    '#dfe5bb',
    '#6b5144',
    '#ea18e7',
    '#65ccd3',
    '#939b57',
    '#44fcff',
    '#6176c7',
    '#babbc2',
    '#52cf94',
    '#51af45',
    '#fc1513',
    '#ebeb5b',
    '#1a9a1c',
    '#09b775',
    '#3a82c4',
    '#433194',
    '#323c98',
    '#3b6a50',
    '#dcef7e',
    '#8f4d96',
    '#fbfae8',
    '#7d9f41',
    '#69e875',
    '#090812',
    '#4a0002',
    '#a448f5',
    '#c17669',
    '#de6d40',
    '#5be56e',
    '#60726d',
    '#e22abc',
    '#84a23d',
    '#b5dbcc',
    '#22128e',
    '#fd2799',
    '#d436e9',
    '#875924',
    '#cfa9a4',
    '#bb5099',
    '#29de48',
    '#e807e6',
    '#bcf664',
    '#60e4e6',
    '#b5eeb4',
    '#d7783b',
    '#661247',
    '#954337',
    '#a4b2f8',
    '#afb86e',
    '#6c8c56',
    '#38a93d',
    '#35114e',
    '#a7b90e',
    '#c94e65',
    '#60ff2b',
    '#4569bd',
    '#02e722',
    '#2c448e',
    '#be47c8',
    '#57d001',
    '#9b581c',
    '#fff8d3',
    '#36efd4',
    '#be970e',
    '#35b4ed',
    '#ad93fe',
    '#f79a85',
    '#c51b5a',
    '#660718',
    '#c59fe2',
    '#795f5d',
    '#41ac0d',
    '#4f175e',
    '#b8aad6',
    '#20f165',
    '#2b50ff',
    '#087e91',
    '#a20b5e',
    '#d728d8',
    '#459012',
    '#68955b',
    '#2dcc3f',
    '#3fd622',
    '#5a6cd6',
    '#fa18d0',
    '#7d63cd',
    '#fcaaa1',
    '#431479',
    '#2b328e',
    '#a25e22',
    '#9a530d',
    '#d12ef3',
    '#b8373d',
    '#d45f5e',
    '#4ba3d8',
    '#da192b',
    '#fe2279',
    '#39c834',
    '#a331da',
    '#e148f6',
    '#b3a67f',
    '#a391db',
    '#437cd2',
    '#864bee',
    '#c009bd',
    '#16e3c6',
    '#f6a6c7',
    '#b487f5',
    '#b29987',
    '#119708',
    '#92b24d',
    '#e59359',
    '#284148',
    '#59b782',
    '#9daf8d',
    '#9d62a2',
    '#aa1380',
    '#b973b4',
    '#dda55c',
    '#f3252a',
    '#75abe6',
    '#badc33',
    '#b73498',
    '#1549ba',
    '#5c73c7',
    '#4bca93',
    '#1a21fe',
    '#ce91ac',
    '#902515',
    '#e4ca47',
    '#bb69de',
    '#d956d8',
    '#54c938',
    '#df6abf',
    '#be8145',
    '#9a8cc7',
    '#4a802e',
    '#059607',
    '#38ef4a',
    '#e1c604',
    '#1c494f',
    '#05b01b',
    '#b36bf8',
    '#328cb0',
    '#0aea5f',
    '#9c79ec',
    '#ab427f',
    '#fa09e0',
    '#8345c5',
    '#8bcb15',
    '#144afe',
    '#f83199',
    '#f20f87',
    '#6e0936',
    '#e1e296',
    '#5d164d',
    '#bf928b',
    '#23caf1',
    '#7fa44d',
    '#9bd27e',
    '#5e6609',
    '#f12d3b',
    '#09f305',
    '#e02837',
    '#c0b53d',
    '#383e7b',
    '#c55365',
    '#61f008',
    '#0c514b',
    '#3c5328',
    '#e008ca',
    '#09b83d',
    '#14b9b1',
    '#24f302',
    '#b06d50',
    '#1a660d',
    '#749121',
    '#0cc532',
    '#223a5c',
    '#e47228',
    '#60563e',
    '#8b775d',
    '#bdb8e3',
    '#a4cfb8',
    '#3a9fc8',
    '#540ad7',
    '#8937e1',
    '#194d7d',
    '#f30e87',
    '#c4057b',
    '#ed02aa',
    '#77147a',
    '#521ae9',
    '#8a82e5',
    '#8a5a85',
    '#eb65f0',
    '#7eac99',
    '#b69039',
    '#c34313',
    '#d6691e',
    '#f29344',
    '#d40b5d',
    '#2ab5e3',
    '#542feb',
    '#377f4a',
    '#2bc0b6',
    '#98542c',
    '#1f05a3',
    '#8ebd77',
    '#097b45',
    '#66e7c5',
    '#e78faa',
    '#772dab',
    '#bd86c7',
    '#018ce9',
    '#32b1be',
    '#af2510',
    '#093ced',
    '#e22465',
    '#0fd433',
    '#69520e',
    '#dc87c8',
    '#48a8a7',
    '#1dfd2e',
    '#794d25',
    '#feb692',
    '#3c50e3',
    '#72be3e',
    '#431297',
    '#489b0e',
    '#80342e',
    '#1421a9',
    '#6f81c1',
    '#a7402d',
    '#5a7038',
    '#a861a0',
    '#c62dc3',
    '#53a370',
    '#41e667',
    '#442490',
    '#ebed0c',
    '#c79036',
    '#986e6e',
    '#a5d89d',
    '#e78fcc',
    '#5b4b55',
    '#24fc95',
    '#84ab6d',
    '#7d9577',
    '#71e6b4',
    '#baf5bc',
    '#99be06',
    '#5f5fea',
    '#5e8016',
    '#a09e6a',
    '#700b14',
    '#9ce2f5',
    '#bb8596',
    '#ab8bc1',
    '#2a59a2',
    '#0944b9',
    '#b14dc0',
    '#df04c9',
    '#0daa3e',
    '#59aba0',
    '#73b98d',
    '#98771e',
    '#627ee2',
    '#689764',
    '#386e5a',
    '#82092d',
    '#a3a3d7',
    '#52884c',
    '#30f1eb',
    '#7d4d4f',
    '#b616a9',
    '#2e2569',
    '#6bb92b',
    '#841828',
    '#50043b',
    '#1753c1',
    '#cc7b82',
    '#18d7f1',
    '#e70c11',
    '#5ed7c6',
    '#2f6316',
    '#46da20',
    '#6a4571',
    '#3c901b',
    '#b34fbf',
    '#2c90fb',
    '#4d9b2b',
    '#a099a6',
    '#91a44a',
    '#a198fa',
    '#f88132',
    '#726c15',
    '#1b8d61',
    '#1a6fbc',
    '#669198',
    '#71227f',
    '#598798',
    '#4a029e',
    '#da2ce6',
    '#ad3749',
    '#8056bf',
    '#8e5f26',
    '#bbed74',
    '#10757e',
    '#0f6197',
    '#cc8ac8',
    '#854a8a',
    '#33ba96',
    '#ad1a91',
    '#7b3853',
    '#581e90',
    '#1101f6',
    '#c0f01e',
    '#f9cf93',
    '#49e954',
    '#cce808',
    '#9c70a1',
    '#7780fc',
    '#b3e419',
    '#35a7ef',
    '#7f63cd',
    '#7103b4',
    '#60a2ea',
    '#6bd6f4',
    '#c39890',
    '#163897',
    '#a493dc',
    '#230c87',
    '#b7b4ab',
    '#40cd99',
    '#a4f528',
    '#8a6cf6',
    '#e2cd00',
    '#d8d7d4',
    '#8fe79c',
    '#301f7e',
    '#2d784e',
    '#320acc',
    '#409666',
    '#9758e9',
    '#ce3c03',
    '#ee31c4',
    '#8a87d4',
    '#403148',
    '#97d86a',
    '#ce70b3',
    '#12e410',
    '#3a1fed',
    '#90b15a',
    '#9e1f6d',
    '#0e7479',
    '#2425c1',
    '#a90e90',
    '#f4dc11',
    '#726edb',
    '#30b399',
    '#3defa6',
    '#8e4596',
    '#579ef5',
    '#a0cc6e',
    '#a422be',
    '#d2d5f8',
    '#a0d6e7',
    '#89e481',
    '#c46ca7',
    '#a33591',
    '#d5de12',
    '#56d041',
    '#ab4ed7',
    '#073eb1',
    '#0cae13',
    '#9e0d02',
    '#ffd635',
    '#200940',
    '#e3be73',
    '#3f42f5',
    '#f91bbf',
    '#26d249',
    '#eea045',
    '#e7adf3',
    '#531a49',
    '#55aeaf',
    '#b70162',
    '#60541a',
    '#27fc45',
    '#1e82d4',
    '#24ad52',
    '#1d2a22',
    '#6b60e2',
    '#dcd164',
    '#43d9a7',
    '#e49ad6',
    '#7726f9',
    '#bdf95b',
    '#3d0a25',
    '#4ef913',
    '#337c44',
    '#10baf4',
    '#3b5405',
    '#dc0f19',
    '#69e6c6',
    '#98568d',
    '#462eef',
    '#55abc0',
    '#d580e4',
    '#7c1b1b',
    '#22671c',
    '#383134',
    '#b46a56',
    '#673c65',
    '#eadc69',
    '#f2ae2e',
    '#de3ef8',
    '#c55b4b',
    '#3587da',
    '#a4e706',
    '#37a2a5',
    '#8d1671',
    '#3290ae',
    '#e95251',
    '#b6ab36',
    '#569631',
    '#46915d',
    '#cd40ce',
    '#d77183',
    '#21f406',
    '#3caf0b',
    '#0e9600',
    '#412f08',
    '#7c3013',
    '#d585e4',
    '#3f9e12',
    '#15456f',
    '#73cc70',
    '#7de311',
    '#f85242',
    '#92348b',
    '#fb08a6',
    '#1c6162',
    '#d80aa3',
    '#9cb7ba',
    '#7cce69',
    '#11999d',
    '#5a9516',
    '#c59d48',
    '#353252',
    '#96c91a',
    '#559163',
    '#038b91',
    '#94e380',
    '#136a1e',
    '#558e11',
    '#ec9114',
    '#78fa1f',
    '#29d183',
    '#970958',
    '#1911af',
    '#2a5f31',
    '#93b820',
    '#3299d8',
    '#a84851',
    '#cbdd71',
    '#e5f922',
    '#bff2c4',
    '#d62322',
    '#2531a4',
    '#bf2553',
    '#b5c9c1',
    '#8d8558',
    '#7f290c',
    '#c268fd',
    '#3c6ef4',
    '#8d85fa',
    '#0eeb73',
    '#7be087',
    '#48cf70',
    '#00bf32',
    '#e9262a',
    '#5d768d',
    '#0ca185',
    '#81a135',
    '#d6d8df',
    '#1ac406',
    '#510e26',
    '#9e3c8b',
    '#74b739',
    '#eb1c7b',
    '#9165e9',
    '#1f88cc',
    '#d1eb95',
    '#769782',
    '#a67a63',
    '#a6d394',
    '#b73c9e',
    '#76f6f2',
    '#40235a',
    '#ddc512',
    '#05c017',
    '#4c99e2',
    '#895ade',
    '#25679b',
    '#ae143d',
    '#51fe5b',
    '#b38811',
    '#078007',
    '#22a0ad',
    '#c4dd2e',
    '#255c99',
    '#8bf094',
    '#459da3',
    '#0cd8af',
    '#4c32fd',
    '#d3a2fc',
    '#6eaf3d',
    '#807b11',
    '#7cd4b2',
    '#69daaa',
    '#79cf7c',
    '#eb9193',
    '#fa6277',
    '#122d05',
    '#ed68eb',
    '#f51eed',
    '#5d78c8',
    '#ad1b37',
    '#6004c4',
    '#7bbdea',
    '#210440',
    '#792b0d',
    '#2d85a6',
    '#2596c6',
    '#3df37e',
    '#1e1ce7',
    '#eb3f38',
    '#6136a2',
    '#c36753',
    '#717927',
    '#3add0c',
    '#5a8e11',
    '#6772d3',
    '#49e3d6',
    '#9f3374',
    '#06e8f9',
    '#240e45',
    '#8c6df8',
    '#79ed8b',
    '#e4c385',
    '#5348d5',
    '#629551',
    '#e355c8',
    '#d2ae17',
    '#84ff6c',
    '#223c26',
    '#8134b9',
    '#a16abf',
    '#5f5b8e',
    '#81e294',
    '#5e13b8',
    '#c6e7d7',
    '#92a15d',
    '#2d41e6',
    '#317664',
    '#cf4976',
    '#96719e',
    '#2c9a4c',
    '#4002ad',
    '#872879',
    '#47af10',
    '#137dc3',
    '#bad65f',
    '#1bce4f',
    '#75fc25',
    '#29e529',
    '#9ccf3b',
    '#458e59',
    '#458444',
    '#db6a3c',
    '#17d328',
    '#4ed256',
    '#4f48c1',
    '#ab88c4',
    '#60bd60',
    '#baa31e',
    '#9c0587',
    '#f55b36',
    '#89572b',
    '#f6f584',
    '#0700e8',
    '#41b991',
    '#467b21',
    '#05a74b',
    '#1270d8',
    '#cf8e7c',
    '#dc4585',
    '#f4ffb4',
    '#3d2faf',
    '#19c947',
    '#f0d942',
    '#7fe1f6',
    '#5ebced',
    '#82f582',
    '#7e4b1e',
    '#358487',
    '#0fb718',
    '#953ee0',
    '#4e5c03',
    '#c75b8d',
    '#bff585',
    '#b77b80',
    '#b14d6e',
    '#d16c6e',
    '#9770ed',
    '#ef0ab8',
    '#683993',
    '#ce4c83',
    '#272c2a',
    '#9dc7d6',
    '#1fd351',
    '#0d2c3b',
    '#09cfe2',
    '#acb60c',
    '#250a16',
    '#237881',
    '#afa328',
    '#cda637',
    '#f494b4',
    '#1f3986',
    '#995718',
    '#466b99',
    '#46febc',
    '#43201e',
    '#fdf258',
    '#736559',
    '#803119',
    '#9f6006',
    '#63ece0',
    '#1992c2',
    '#4c28b5',
    '#48a0c5',
    '#9ca718',
    '#868dee',
    '#e50a1f',
    '#984195',
    '#230f94',
    '#afa7e1',
    '#f3ece8',
    '#1e44ec',
    '#79b8d4',
    '#7c74eb',
    '#0e81de',
    '#efc724',
    '#288589',
    '#a93c92',
    '#bf78b7',
    '#dcd5a2',
    '#80ae3d',
    '#86eaf1',
];

export default colors;
