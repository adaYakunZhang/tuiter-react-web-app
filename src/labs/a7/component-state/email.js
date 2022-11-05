const Email = ({email, changeEmail, editingEmail, setEditingEmail}) => {
    return(
        <>
            <h4>Email</h4>
            <input type="checkbox"
                   onChange={(e) => setEditingEmail(e.target.checked)}
                   checked={editingEmail}/>
            {
                editingEmail && <input value={email} onChange={changeEmail}/>
            }
            {
                !editingEmail && <span>{email}</span>
            }
        </>
    )
}
export default Email;