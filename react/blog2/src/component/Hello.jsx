const Hello = () => {
    
    /* 이벤트 */
    const showName = () => {

    }

    
    const showAge = () => {
        
    }

    // 인풋 핸들러
    const handleInput = (e) => {
        // console.log('인풋에 쓴 값', txt)
        console.log('인풋에 쓴 값', e.target.value)
    }

    return (
        <div>
            <h1>Hello</h1>
            <button onClick={showName}>Show Name</button>
            <button onClick={showAge}>Show age</button>
            <button onClick={() => {console.log('안녕')}}>Show 1111</button>
            <input type="text" onChange={handleInput}></input>
            {/* <input 
                type="text" 
                onChange={(e) => {
                    const txt = e.target.value;
                    handleInput(txt);
                }}>
            </input> */}
            
            
        </div>
    )
}

export default Hello;

