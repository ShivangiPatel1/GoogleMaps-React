// function Search() {
//   const {
//     ready,
//     value,
//     suggestions: { status, data },
//     setValue,
//     clearSuggestions,
//   } = usePlacesAutocomplete({
//     requestOptions: {
//       location: { lat: () => 49.291328, lng: () => -123.142273 },
//       radius: 200000,
//     },
//   });
//   return (
    // <Combobox onSelect={(address) => console.log(address)}>
    //   <ComboboxInput
    //    value={value}
     //onChange={(e) => {
      //setValue(e.target.value);
    //}}
    //     placeholder={"Enter the location"}
    //   ></ComboboxInput>
    //   <ComboboxPopover>
    //     {status === "OK" &&
    //       data.map(({ id, description }) => (
    //         <ComboboxOption key={id} value={description}></ComboboxOption>
    //       ))}
    //   </ComboboxPopover>
    // </Combobox>
    // <div>
    //   <select  >
       
    //     {status === "OK" &&
    //       data.map(({ id, description }) => (
    //       <option key={id} value={description}>{description}</option>
    //     ))}
        
    //   </select>
    // </div>
//   );
// }