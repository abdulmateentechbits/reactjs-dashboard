
const Divider = ({ message }: { message: string }) => {
    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            marginTop: "10px",
        }}>
            <hr style={{ flex: 1, marginRight: "10px", borderWidth: "1px", borderStyle: "solid" }} />
            <p style={{ margin: 0, color: "red", fontWeight: 'bold' }}>{message}</p>
            <hr style={{ flex: 1, marginLeft: "10px", borderWidth: "1px", borderStyle: "solid" }} />
        </div>
    )
}

export default Divider