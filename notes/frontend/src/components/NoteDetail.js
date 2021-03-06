import React, {useState, useEffect} from 'react'


function NoteDetail(props){

    const[note, setNote] = useState()

    useEffect( () => {
        fetch("https://eazynote.herokuapp.com/notes/"+props.id,
          {
            method: 'GET',
            headers: { 'Accept' : 'application/json',
            'Content-type': 'application/json',
           }})
           .then(resp => resp.json())
          .then((resp) => setNote(resp))
          .catch(error => console.log(error)) 
        },[props])

    const editNote=() => {
        props.editNote(note)
    }

    const deleteNote = () => {
        
        fetch(
            "https://eazynote.herokuapp.com/notes/deletenote/"+props.id, 
            {
                method: 'DELETE',
                headers: { 'Accept' : 'application/json',
                'Content-type': 'application/json',
             }
            }
         )
         .then(()=>props.deleteSuccess("note",null))
        
    }

      return(
        <div className="detail">

            {note && 

            <div>
              <h2>{note.note.title}</h2>

              <div className="row">

                <div className="col">
                  <small>{note.note.created_on}</small>
                </div>

                <div className="col">
                {note.note.tags && note.note.tags.map(tag =>
                  {
                      return(
                      
                      <span key={tag} className="badge rounded-pill bg-warning text-dark">{tag}</span>
                    
                      )
                  }
                )}
                </div>

              </div>
              
              <p className="note-detail">{note.note.detail}</p>
              
              <div className="row">

                  <div className="col">  
                  </div>

                  <div className="col">

                      <button className="btn btn-info btn-sm btn-detail"  onClick={() => editNote() }>Edit</button>

                      <button className="btn btn-danger btn-sm btn-detail"
                      onClick={() => deleteNote()}>Delete</button>
                      
                  </div>

              </div>

            </div>
            }
        </div>
      )

}

export default NoteDetail