import heaterImageUrl from '/src/assets/heater.jpeg';
import chairImageUrl from '/src/assets/chair.jpg';
import tvImageUrl from '/src/assets/tv.avif';
import toasterImageUrl from '/src/assets/toaster.webp';
import airPurifierImageUrl from '/src/assets/airPurifier.webp';
import nespressoImageUrl from '/src/assets/nespresso.webp';
import steamerImageUrl from '/src/assets/steamer.webp';
import fanImageUrl from '/src/assets/fan.jpg';
import printerImageUrl from '/src/assets/printer.avif';
import ironImageUrl from '/src/assets/iron.avif';
import humidifierImageUrl from '/src/assets/humidifier.webp';
import jewelryCleanerImageUrl from '/src/assets/jewelryCleaner.webp';
import irobotImageUrl from '/src/assets/irobot.webp';
import blenderImageUrl from '/src/assets/blender.jpg';

export type Item = {
    id: number;
    title: string;
    description: string;
    price: string;
    originalPrice?: string; // Optional for items on sale;
    condition?: string; // Optional for additional item details
    image: string;
    available: boolean;
    link?: string; // Optional link for more details
};

const items: Item[] = [
    {
        id: 1,
        title: 'Komoder Massage Chair',
        description: 'Komoder Marina Medical 2',
        price: '$2313',
        originalPrice: '$3005',
        condition: 'Very good',
        image: chairImageUrl,
        available: true,
        link: 'https://www.komoder.com/marina-medical-2-massage-chair',
    },
    {
        id: 2,
        title: 'Radiator',
        description: 'De Longhi TRRS1225',
        price: '$81',
        originalPrice: '$93',
        condition: 'Very good',
        image: heaterImageUrl,
        available: true,
        link: '',
    },
    {
        id: 3,
        title: 'Printer+cartridges',
        description: 'HP Color LaserJet Pro M254dw',
        price: '$100',
        originalPrice: '$227',
        condition: 'Good',
        image: printerImageUrl,
        available: true,
        link: 'https://www.emag.ro/imprimanta-laser-color-hp-laserjet-pro-m254dw-wireless-a4-t6b60a/pd/DWDCX0BBM/',
    },
    {
        id: 4,
        title: 'Toaster',
        description: 'Bosch TAT6A913',
        price: '$35',
        originalPrice: '$75',
        condition: 'Good',
        image: toasterImageUrl,
        available: true,
        link: 'https://www.flanco.ro/prajitor-de-paine-bosch-comfortline-tat6a913-1090-w-2-felii-argintiu-negru.html',
    },
    {
        id: 5,
        title: 'TV',
        description: 'SAMSUNG QLED 75Q70D TV 189 cm',
        price: '$1041',
        originalPrice: '$1538',
        condition: 'Excellent',
        image: tvImageUrl,
        available: true,
        link: 'https://www.emag.ro/televizor-samsung-qled-75q70d-189-cm-smart-4k-ultra-hd-100-hz-clasa-d-qe75q70datxxh/pd/DCQSSPYBM/',
    },
    {
        id: 6,
        title: 'Humidifier+filters',
        description: 'LEVOIT Dual 150 Ultrasonic',
        price: '$30',
        originalPrice: '$52',
        condition: 'Excellent',
        image: humidifierImageUrl,
        available: true,
        link: 'https://www.emag.ro/umidificator-de-aer-levoit-dual-150-ultrasonic-rezervor-3l-silentios-aromaterapie-autonomie-25-ore-dual150/pd/D7JMH1MBM/',
    },
    {
        id: 7,
        title: 'Nespresso',
        description: "De'Longhi Inissia Black Nespresso",
        price: '$70',
        originalPrice: '$103',
        condition: 'Good',
        image: nespressoImageUrl,
        available: true,
        link: 'https://www.emag.ro/espressor-nespresso-by-de-longhi-inissia-black-19-bari-1260-w-negru-set-capsule-degustare-inclus-d40-eu-bk-ne3/pd/DBPL9FBBM/',
    },
    {
        id: 8,
        title: 'Fan',
        description: 'Daewoo DDV166 pedestal fan, 50 W',
        price: '$28',
        originalPrice: '$35',
        condition: 'Excellent',
        image: fanImageUrl,
        available: true,
        link: 'https://www.emag.ro/ventilator-cu-picior-daewoo-ddv166-50-w-40-cm-3-trepte-de-putere-inaltime-reglabila-pana-la-125-cm-gril-frontal-de-protectie-oscilare-la-90-grade-baza-stabila-negru-orange-ddv166/pd/D3449JMBM/',
    },
    {
        id: 9,
        title: 'Iron',
        description: 'Philips Azur DST7041/20 iron',
        price: '$46',
        originalPrice: '$68',
        condition: 'Excellent',
        image: ironImageUrl,
        available: true,
        link: 'https://www.emag.ro/fier-de-calcat-philips-azur-dst7041-20-2800w-debit-de-abur-continuu-de-50g-min-si-jet-de-abur-de-250-g-talpa-steamglide-elite-rezervor-de-300ml-si-sistem-de-curatare-automata-cu-rezervor-integrat-pentru-calcar-oprire-automata-de-siguranta-albastru-dst7041-20/pd/D3R09JMBM/',
    },
    {
        id: 10,
        title: 'Jewelry Cleaner',
        description: 'Ultrasonic cleaner 600ml',
        price: '$42',
        originalPrice: '$52',
        condition: 'Excellent',
        image: jewelryCleanerImageUrl,
        available: true,
        link: 'https://www.emag.ro/cleaner-curatator-ultrasonic-600ml-guc601-curatare-bijuterii-ceasuri-rezistente-la-apa-si-diverse-articole-rezistente-la-apa-cos-de-plastic-si-suport-pentru-ceasuri-inclus-guc601/pd/D3V09JMBM/',
    },
    {
        id: 11,
        title: 'iRobot',
        description: 'Roomba 985 (980 Costco model)',
        price: '$300',
        originalPrice: '$499',
        condition: 'Good',
        image: irobotImageUrl,
        available: true,
        link: '',
    },
    {
        id: 12,
        title: 'Steamer for clothes',
        description: 'Philips GC628/80 all-in-one 8000',
        price: '$208',
        originalPrice: '$342',
        condition: 'Very good',
        image: steamerImageUrl,
        available: true,
        link: 'https://www.emag.ro/aparat-de-calcat-vertical-philips-all-in-one-aio-seria-8000-2200w-tehnologie-de-incalzire-dubla-placa-incalzita-optimaltemp-6-bar-boost-de-abur-90-g-placa-de-calcat-cu-reglaj-in-mai-multe-unghiuri-5-s/pd/D4609JMBM/',
    },
    {
        id: 13,
        title: 'Air purifier',
        description: 'LEVOIT Core 300 True HEPA',
        price: '$93',
        originalPrice: '$131',
        condition: 'Excellent',
        image: airPurifierImageUrl,
        available: true,
        link: 'https://www.emag.ro/purificator-de-aer-levoit-core-300-true-hepa-carbon-activ-super-silent-ozone-free-3-trepte-de-viteza-panou-comanda-touch-screen-core300rac/pd/D4LSN3MBM/',
    },
    {
        id: 14,
        title: 'Blender',
        description: 'Philips HR3652/00 Avance Collection',
        price: '$100',
        originalPrice: '$150',
        condition: 'Excellent',
        image: blenderImageUrl,
        available: false,
        link: 'https://www.emag.ro/blender-philips-hr3652-00-avance-collection-1400w-2l-sticla-4-trepte-de-viteza-5-program-de-mixare-albastru-hr3652-00/pd/D3V09JMBM/',
    },
];

export default items;
