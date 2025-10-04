interface TelaProps {
    children: React.ReactNode;
    centralizar?: boolean;
    id: string;
}

export const Tela = ({ children, centralizar, id }: TelaProps) => {
    return(
        <div id={id} className="tela" style={{ display: centralizar ? 'flex' : 'block', justifyContent: centralizar ? 'center' : 'flex-start', alignItems: centralizar ? 'center' : 'flex-start' }}>
            {children}
        </div>
    )
}

interface TelaContainerProps {
    children: React.ReactNode;
    backgroundColor?: string;
}


export const TelaContainer = ({ children, backgroundColor }: TelaContainerProps) => {
    return(
        <div className="tela-container" style={{ backgroundColor: backgroundColor ? backgroundColor : 'transparent' }}>
            { children }
        </div>
    )
}