export default function Titulo(props) {
    return (
        <div className="flex flex-col justify-center">
            <h1 className="px-5 py-2 text-2xl">
                {props.children}
            </h1>
            <hr className="bord-2 border-gray-400"/>
        </div>
    )
}