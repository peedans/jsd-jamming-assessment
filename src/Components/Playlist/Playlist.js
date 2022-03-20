import "./Playlist.css"
import Tracklist from "../Tracklist/Tracklist";

const Playlist = ({playlistName,playlistTracks,onRemove,onNameChange,onSave}) => {
    const handleNameChange = (e) => {
        onNameChange(e.target.value);

    }
    return (
        <div className="Playlist">
            <input value={playlistName} onChange={handleNameChange} />
            <Tracklist lists={playlistTracks} onRemove={onRemove} isRemoval={true}/>
            <button className="Playlist-save" onClick={onSave}>SAVE TO SPOTIFY</button>
        </div>
    );
};

export default Playlist;