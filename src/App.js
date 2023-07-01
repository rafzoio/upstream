import "./App.css";

function App() {
  return (
    <div className="App">
      <audio
        controls
        src="https://upstreamdata.s3.eu-west-2.amazonaws.com/Jazz%20at%20Mladost%20Club%20-%20Caravan.mp3?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCWV1LXdlc3QtMiJHMEUCIQDe7VYX4fPF3XRYHh0Jov2EN40UPoX7PktQfEIkpWkSQgIgJL%2FKiq4EmbOBy46GGdfSdMUWrh0cVCz6PKYrLwc7kIQq7QIIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxNDQxOTE4Njc0NzAiDPgre50uiqY%2Fs5d3mirBAlY3pdm9XYGn7N9O9R4UOKummIrSr1%2FW9x1RYnQc8BvwOIJIZNzA6bHLyM8jtwlpOWT2WidMIZloB%2B2KBAMVej78nwreBDScD1cGFmIDpp3C1emnIJEgd9MCZoSchW548DycUlKUdR36yMM7WYnK1OhAaaN06wyrF9XrA9L0I39vYQzOKNu7PfDsi7dsrSklrbhGVf1l%2F3DlO35TfKgqv68jwVBxBNU4OTNH1z0VYOzV8OUttybi2qISoJ1ObuwZXejmRz09mk3MfQhqxnbzc8r4a7zBwewssODu4R%2BL%2FCzjguMEmYdCJdqHIfvYnzsX9by%2BaYidB4%2Fn0RI6rHi5WHywcu%2FMVXylBT0KJiGHtS4EFVLclIqyG4yO7YJGYuz2rceflYdyOa5rYRuXwkoZmH1XRvobD%2FkO5zcLIi%2BbzHKl1zCkioGlBjqzAlpUlHxUC7lhfwx7uIoDOKXHWTckk%2BsbblbcR8nqQPiZze6RZP3c1UNc6WUrI0Vfjmxh%2BEqhoMtmAdWwzNTscdKyaQsTxEKKUCFV8i1GJqaPMOJVhhF%2FKtNkjBvHiOYNSza1NmbrPFM1XgkDAMqcsgHPSLy4TMZ%2Fa6bNzPvdxhQVQvJzkse1ZXU5PZYpKdrs%2BxgDgzfNH5urXE%2BFBxB4d9GOMteVUHIXd8z70dPPIEX0x3ZrkcYN9A2oV6r1KdiHpAz%2F%2FtbCr%2Boff6Ar13%2BnUc5li8ZsTsI5esI4Ynl38RXHCcPI3tUxcEXnwVCp3RFmjH2UBPAuT%2BtOXiWU8JgaZTDJvB9Ftk304iFOvDNpKeuAash6uNn%2FFq6Hg%2F25HLDVIqFTGvmkb2qvEsqeFOzvSRSDaOo%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230701T160419Z&X-Amz-SignedHeaders=host&X-Amz-Expires=600&X-Amz-Credential=ASIASDEUBJJHOALAS4GA%2F20230701%2Feu-west-2%2Fs3%2Faws4_request&X-Amz-Signature=80f3f880c0df900d7e05f859e0fc9fcb93e49f48d92b15baf9ae2c678f48092f"
        preload="auto"
        id="audio_player"
        type="audio/mp3"
      ></audio>
    </div>
  );
}

export default App;
