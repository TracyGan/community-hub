import type { SVGProps } from "react";
import { twMerge } from "tailwind-merge";

export const Icons = {
	UserIconCircle: (props: SVGProps<SVGSVGElement>) => {
		return (
			// biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
			<svg
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				{...props}
			>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M12 4C7.58172 4 4 7.58172 4 12C4 14.0991 4.80806 16.0099 6.13199 17.4377C6.18198 17.2724 6.24846 17.1099 6.33518 16.9549C6.62917 16.4292 7.00004 15.9432 7.44009 15.5134C7.88171 15.082 8.37995 14.7201 8.91734 14.4341C8.09887 13.6506 7.58716 12.5557 7.58716 11.3333C7.58716 8.91801 9.58521 7 12 7C14.4148 7 16.4128 8.91801 16.4128 11.3333C16.4128 12.5557 15.9011 13.6506 15.0827 14.4341C15.6201 14.7201 16.1183 15.082 16.5599 15.5134C17 15.9432 17.3708 16.4292 17.6648 16.9549C17.7515 17.1099 17.818 17.2724 17.868 17.4377C19.1919 16.0099 20 14.0991 20 12C20 7.58172 16.4183 4 12 4ZM15.9411 18.9637C15.9799 18.7639 15.9994 18.5764 16 18.4103C16.0009 18.1358 15.9507 17.9872 15.9193 17.9312C15.7187 17.5726 15.465 17.2397 15.1625 16.9442C14.3277 16.1288 13.1905 15.6667 12 15.6667C10.8095 15.6667 9.67234 16.1288 8.83754 16.9442C8.535 17.2396 8.28126 17.5726 8.0807 17.9312C8.04934 17.9872 7.99905 18.1358 8.00001 18.4103C8.0006 18.5764 8.02005 18.7639 8.05888 18.9637C9.22151 19.6233 10.5655 20 12 20C13.4345 20 14.7785 19.6233 15.9411 18.9637ZM12 13.6667C13.3549 13.6667 14.4128 12.5999 14.4128 11.3333C14.4128 10.0668 13.3549 9 12 9C10.6451 9 9.58716 10.0668 9.58716 11.3333C9.58716 12.5999 10.6451 13.6667 12 13.6667ZM2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 15.5573 20.1419 18.6798 17.348 20.4512C15.8007 21.4321 13.9651 22 12 22C10.0349 22 8.19929 21.4321 6.65202 20.4512C3.85814 18.6798 2 15.5573 2 12Z"
					fill="black"
				/>
			</svg>
		);
	},

	PencilIcon: (props: SVGProps<SVGSVGElement>) => {
		return (
			// biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
			<svg
				width="48"
				height="48"
				viewBox="0 0 48 48"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				{...props}
			>
				<mask id="path-1-inside-1_1_375" fill="white">
					<path d="M26.8853 16.0853C26.9178 16.0528 26.952 16.0228 26.9903 15.9974C27.3586 15.7525 29.485 14.5145 31.799 16.8284C34.113 19.1424 32.8749 21.2688 32.6301 21.6371C32.6046 21.6754 32.5746 21.7096 32.5421 21.7421L22.8217 31.4625C22.6993 31.585 22.5471 31.6736 22.3801 31.7195L16.5253 33.3317C15.7772 33.5377 15.0897 32.8503 15.2957 32.1021L16.9079 26.2473C16.9539 26.0803 17.0424 25.9281 17.1649 25.8057L26.8853 16.0853Z" />
				</mask>
				<path
					d="M25.2279 19.299L29.4706 23.5416L30.8848 22.1274L26.6422 17.8848L25.2279 19.299ZM16.5253 33.3317L15.9943 31.4035L16.5253 33.3317ZM15.2957 32.1021L17.2239 32.6331L15.2957 32.1021ZM16.9079 26.2473L18.8361 26.7783L16.9079 26.2473ZM22.3801 31.7195L21.8492 29.7913L22.3801 31.7195ZM32.6301 21.6371L34.2956 22.7443L32.6301 21.6371ZM31.1279 20.3279L21.4075 30.0483L24.236 32.8767L33.9564 23.1563L31.1279 20.3279ZM18.5791 27.2199L28.2995 17.4995L25.4711 14.6711L15.7507 24.3915L18.5791 27.2199ZM21.8492 29.7913L15.9943 31.4035L17.0562 35.26L22.9111 33.6478L21.8492 29.7913ZM17.2239 32.6331L18.8361 26.7783L14.9796 25.7163L13.3674 31.5712L17.2239 32.6331ZM28.0975 17.6629C28.1292 17.6418 28.4074 17.4719 28.7822 17.4499C29.0609 17.4335 29.6188 17.4767 30.3848 18.2426L33.2132 15.4142C31.6652 13.8662 30.0029 13.3714 28.5479 13.4568C27.1889 13.5365 26.2197 14.108 25.8831 14.3318L28.0975 17.6629ZM30.3848 18.2426C31.1508 19.0086 31.1939 19.5665 31.1775 19.8452C31.1555 20.22 30.9856 20.4982 30.9645 20.5299L34.2956 22.7443C34.5194 22.4077 35.0909 21.4386 35.1706 20.0796C35.256 18.6245 34.7612 16.9622 33.2132 15.4142L30.3848 18.2426ZM15.9943 31.4035C16.7424 31.1975 17.4299 31.885 17.2239 32.6331L13.3674 31.5712C12.7494 33.8155 14.8119 35.878 17.0562 35.26L15.9943 31.4035ZM15.7507 24.3915C15.3833 24.7589 15.1176 25.2154 14.9796 25.7163L18.8361 26.7783C18.7901 26.9452 18.7016 27.0974 18.5791 27.2199L15.7507 24.3915ZM21.4075 30.0483C21.53 29.9258 21.6822 29.8373 21.8492 29.7913L22.9111 33.6478C23.412 33.5098 23.8686 33.2441 24.236 32.8767L21.4075 30.0483ZM33.9564 23.1563C34.0484 23.0643 34.1741 22.9271 34.2956 22.7443L30.9645 20.5299C31.0351 20.4237 31.1009 20.355 31.1279 20.3279L33.9564 23.1563ZM28.2995 17.4995C28.2725 17.5265 28.2037 17.5923 28.0975 17.6629L25.8831 14.3318C25.7003 14.4533 25.5631 14.579 25.4711 14.6711L28.2995 17.4995Z"
					fill="#222222"
					mask="url(#path-1-inside-1_1_375)"
				/>
			</svg>
		);
	},

	TrashIcon: (props: SVGProps<SVGSVGElement>) => {
		return (
			// biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
			<svg
				width="48"
				height="48"
				viewBox="0 0 48 48"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				{...props}
			>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M23.4415 15C22.1502 15 21.0038 15.8263 20.5955 17.0513L20.2792 18H19H18C17.4477 18 17 18.4477 17 19C17 19.5523 17.4477 20 18 20V32C18 32.5523 18.4477 33 19 33H29C29.5523 33 30 32.5523 30 32V20C30.5523 20 31 19.5523 31 19C31 18.4477 30.5523 18 30 18H29H27.7208L27.4045 17.0513C26.9962 15.8263 25.8498 15 24.5585 15H23.4415ZM28 20H27H21H20V31H28V20ZM25.6126 18L25.5072 17.6838C25.3711 17.2754 24.9889 17 24.5585 17H23.4415C23.0111 17 22.6289 17.2754 22.4928 17.6838L22.3874 18H25.6126Z"
					fill="#222222"
				/>
			</svg>
		);
	},
};
