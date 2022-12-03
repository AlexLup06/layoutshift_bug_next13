import Link from "next/link";

export default function Test2() {
    return (
        <div style={{ color: "red", padding: "20rem" }}>
            <Link href="/withmodule">Click me to get to see the bug -- linked page uses css module -- REFRESH FIRST</Link>
        </div>
    );
}