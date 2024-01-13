import {SVGProps} from "react";

export function RubleIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
            <path fill="currentColor"
                  d="M7 21v-3H5v-2h2v-2H5v-2h2V3h6.5q2.3 0 3.9 1.6T19 8.5q0 2.3-1.6 3.9T13.5 14H9v2h4v2H9v3zm2-9h4.5q1.45 0 2.475-1.025T17 8.5q0-1.45-1.025-2.475T13.5 5H9z"></path>
        </svg>
    )
}