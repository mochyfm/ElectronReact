const Message = ({ mesg, bgColor }) => {
    const styles = {
      padding: '1rem',
      marginBottom: '1rem',
      textAlign: 'center',
      color: '#FFF',
      fontWeight: 'bold',
      backgroundColor: bgColor
    };
  
    return (
      <div style={styles}>
        <p dangerouslySetInnerHTML={{ __html: mesg }}></p>
      </div>
    );
  };
  
  export default Message;