import {
    HiOutlineViewGrid,
    HiOutlineDocumentText,
    HiOutlineQuestionMarkCircle,
    HiOutlineStar,
} from 'react-icons/hi'

export const DASHBOARD_SIDEBAR_LINKS = [
    {
        key: 'search',
        label: 'Search',
        path: '/home',
        icon: <HiOutlineViewGrid />
    },
    {
        key: 'history',
        label: 'History',
        path: '/history',
        icon: <HiOutlineDocumentText />
    },
    {
        key: 'favorited',
        label: 'Favorited',
        path: '/favorited',
        icon: <HiOutlineStar />
    },
]

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
    // {
    // 	key: 'settings',
    // 	label: 'Settings',
    // 	path: '/settings',
    // 	icon: <HiOutlineCog />
    // },
    {
        key: 'help',
        label: 'Help & Support',
        path: '/help',
        icon: <HiOutlineQuestionMarkCircle />
    }
]

export const NO_DATA = [
    {
        item_number: '',
        ndc_number: '',
        size_qty: '',
        retail_pack_quantity: '',
        awp_price: '',
        acquisition_price: '',
        retail_price: '',
        wac_price: '',
        contract_flag: '',
        generic_name: '',
        hr: '',
        mmol: '',
        bp: '',
        cal: '',
        usp: '',
        mu: '',
        total_mg: '',
        total_ml: '',
        total_mm: '',
        basic_form: ''
    }
]

// API Responses Constants Tests ... for testing purposes only

export const SAMPLE_HISTORYAPI = [
    [
        10043023,
        0.4,
        0.3,
        0.3,
        true,
        1712080554,
        [
            {
                "Item Number – 8 digit": 10265607,
                "NDC Number": "00406622105",
                "Size Qty": "500     ",
                "Retail Pack Quantity": 1,
                "AWP Price": 9000,
                "Acquisition Price": 5103,
                "Retail Price": 0,
                "WAC Price": 5526,
                "Contract Flag": "N",
                "Generic Name": "methadone",
                "Form": "HCl ORAL SOLUTION 10",
                "Name": "METHADONE HCL",
                "Size": "10MG/5ML SOL 500",
                "True Similarity": 0.6130625008,
                "%": null,
                "MCG": null,
                "M": null,
                "IU": null,
                "MEQ": null,
                "UN": null,
                "HR": null,
                "MMOL": null,
                "BP": null,
                "CAL": null,
                "USP": null,
                "MU": null,
                "Total_MG": 10.0,
                "Total_ML": 5.0,
                "Total_MM": null,
                "Basic Form": "Other/Undefined",
                "Average Price": 6788.7
            },
            {
                "Item Number – 8 digit": 10083467,
                "NDC Number": "66689071216",
                "Size Qty": "500     ",
                "Retail Pack Quantity": 1,
                "AWP Price": 31500,
                "Acquisition Price": 5510,
                "Retail Price": 0,
                "WAC Price": 21000,
                "Contract Flag": "C",
                "Generic Name": "methadone",
                "Form": "HCl ORAL SOLUTION 10",
                "Name": "METHADONE HCL",
                "Size": "10 MG/5 ML SOL 5",
                "True Similarity": 1.0,
                "%": null,
                "MCG": null,
                "M": null,
                "IU": null,
                "MEQ": null,
                "UN": null,
                "HR": null,
                "MMOL": null,
                "BP": null,
                "CAL": null,
                "USP": null,
                "MU": null,
                "Total_MG": 10.0,
                "Total_ML": 5.0,
                "Total_MM": null,
                "Basic Form": "Other/Undefined",
                "Average Price": 20553.0
            }
        ]
    ],
    [
        10043023,
        0.3,
        0.4,
        0.3,
        false,
        1712081516,
        [
            {
                "Item Number – 8 digit": 10265607,
                "NDC Number": "00406622105",
                "Size Qty": "500     ",
                "Retail Pack Quantity": 1,
                "AWP Price": 9000,
                "Acquisition Price": 5103,
                "Retail Price": 0,
                "WAC Price": 5526,
                "Contract Flag": "N",
                "Generic Name": "methadone",
                "Form": "HCl ORAL SOLUTION 10",
                "Name": "METHADONE HCL",
                "Size": "10MG/5ML SOL 500",
                "True Similarity": 0.6130625008,
                "%": null,
                "MCG": null,
                "M": null,
                "IU": null,
                "MEQ": null,
                "UN": null,
                "HR": null,
                "MMOL": null,
                "BP": null,
                "CAL": null,
                "USP": null,
                "MU": null,
                "Total_MG": 10.0,
                "Total_ML": 5.0,
                "Total_MM": null,
                "Basic Form": "Other/Undefined",
                "Average Price": 6399.0
            },
            {
                "Item Number – 8 digit": 10083467,
                "NDC Number": "66689071216",
                "Size Qty": "500     ",
                "Retail Pack Quantity": 1,
                "AWP Price": 31500,
                "Acquisition Price": 5510,
                "Retail Price": 0,
                "WAC Price": 21000,
                "Contract Flag": "C",
                "Generic Name": "methadone",
                "Form": "HCl ORAL SOLUTION 10",
                "Name": "METHADONE HCL",
                "Size": "10 MG/5 ML SOL 5",
                "True Similarity": 1.0,
                "%": null,
                "MCG": null,
                "M": null,
                "IU": null,
                "MEQ": null,
                "UN": null,
                "HR": null,
                "MMOL": null,
                "BP": null,
                "CAL": null,
                "USP": null,
                "MU": null,
                "Total_MG": 10.0,
                "Total_ML": 5.0,
                "Total_MM": null,
                "Basic Form": "Other/Undefined",
                "Average Price": 17954.0
            }
        ]
    ]
]

// export const STRUCTURE = [
// 	{
// 		itemNumber: '',
// 		ndcNumber: '',
// 		sizeQty: '',
// 		retailPackQuantity: '',
// 		awpPrice: '',
// 		acquisitionPrice: '',
// 		retailPrice: '',
// 		wacPrice: '',
// 		contractFlag: '',
// 		genericName: '',
// 		form: '',
// 		size: '',
// 		trueSimilarity: '',
// 		percentage: '',
// 		mcg: '',
// 		m: '',
// 		iu: '',
// 		meq: '',
// 		un: '',
// 		hr: '',
// 		mmol: '',
// 		bp: '',
// 		cal: '',
// 		usp: '',
// 		mu: '',
// 		totalMg: '',
// 		totalMl: '',
// 		totalMm: '',
// 		basicForm: '',
// 		averagePrice: '',
// 	}
// ]

export const SAMPLEDATA = [
    {
        item_number: '12345678',
        ndc_number: '87654321',
        size_qty: '10',
        retail_pack_quantity: '2',
        awp_price: '$50.00',
        acquisition_price: '$40.00',
        retail_price: '$60.00',
        wac_price: '$45.00',
        contract_flag: 'Y',
        generic_name: 'Acetaminophen',
        hr: '24',
        mmol: '0.8',
        bp: '120/80',
        cal: '500',
        usp: 'Standard',
        mu: '1000',
        total_mg: '500',
        total_ml: '250',
        total_mm: '150',
        basic_form: 'Tablet'
    },
    {
        item_number: '12345678',
        ndc_number: '87654321',
        size_qty: '10',
        retail_pack_quantity: '2',
        awp_price: '$50.00',
        acquisition_price: '$40.00',
        retail_price: '$60.00',
        wac_price: '$45.00',
        contract_flag: 'Y',
        generic_name: 'Acetaminophen',
        hr: '24',
        mmol: '0.8',
        bp: '120/80',
        cal: '500',
        usp: 'Standard',
        mu: '1000',
        total_mg: '500',
        total_ml: '250',
        total_mm: '150',
        basic_form: 'Tablet'
    }
]

export const REALHISTORYAPITEST = [
    [
        10083467,
        0.34,
        2.0,
        0.94,
        false,
        1712043327,
        [
            {
                "Item Number – 8 digit": 10043023,
                "NDC Number": "00054355663",
                "Size Qty": "500     ",
                "Retail Pack Quantity": 1,
                "AWP Price": 6907,
                "Acquisition Price": 4428,
                "Retail Price": 0,
                "WAC Price": 5526,
                "Contract Flag": "C",
                "Generic Name": "methadone",
                "Form": "HCl ORAL SOLUTION 10",
                "Name": "METHADONE HCL",
                "Size": "10 MG/5 ML SOL 5",
                "True Similarity": 1.0,
                "%": null,
                "MCG": null,
                "M": null,
                "IU": null,
                "MEQ": null,
                "UN": null,
                "HR": null,
                "MMOL": null,
                "BP": null,
                "CAL": null,
                "USP": null,
                "MU": null,
                "Total_MG": 10.0,
                "Total_ML": 5.0,
                "Total_MM": null,
                "Basic Form": "Other/Undefined",
                "Average Price": 4999.6402439024
            },
            {
                "Item Number – 8 digit": 10265607,
                "NDC Number": "00406622105",
                "Size Qty": "500     ",
                "Retail Pack Quantity": 1,
                "AWP Price": 9000,
                "Acquisition Price": 5103,
                "Retail Price": 0,
                "WAC Price": 5526,
                "Contract Flag": "N",
                "Generic Name": "methadone",
                "Form": "HCl ORAL SOLUTION 10",
                "Name": "METHADONE HCL",
                "Size": "10MG/5ML SOL 500",
                "True Similarity": 0.6130625008,
                "%": null,
                "MCG": null,
                "M": null,
                "IU": null,
                "MEQ": null,
                "UN": null,
                "HR": null,
                "MMOL": null,
                "BP": null,
                "CAL": null,
                "USP": null,
                "MU": null,
                "Total_MG": 10.0,
                "Total_ML": 5.0,
                "Total_MM": null,
                "Basic Form": "Other/Undefined",
                "Average Price": 5628.1829268293
            }
        ]
    ]
]