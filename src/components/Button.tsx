type ButtonProps={
	style:{};
	children:React.ReactNode;
	onClick:(e:React.MouseEvent<HTMLButtonElement>)=>void;
}

export default function Button({ style, children, onClick }:ButtonProps) {
	return (		
			<button className="border-4 border-black hover:border-none" onClick={onClick} style={style}>{children}</button>
		
	)
}
