//import react
import React from 'react'

/*videoId, title, description*/
function EditForm() {
  return (
    <form onSubmit= { () => {
        //editVideos()
    }}>
        <div className='flex gap-4'>
            <label htmlFor="title">Title</label>
            <input type="text" name="title" />
        </div>
        <div className='flex gap-4'>
            <label htmlFor="description">Description</label>
            <input type="text" name='description'/>
        </div>
        <input type="submit" value='Edit Video' />
    </form>
  )
}

export default EditForm;