import NativeSelect from '@mui/material/NativeSelect';

export default function LangAndCopyright() {
  return (
    <section className="flex justify-between text-sm">
      <p>© 2023 Customer Products. All rights reserved.</p>
      <div className="flex gap-10">
        <p>Region:
          <NativeSelect
            sx={{
              fontSize: 'inherit',
              paddingLeft: '6px'
            }}
            children=
            {[<option> United States</option>,
            <option>Argentina</option>,
            <option>Mexico</option>]}
          />
        </p>

        <p>Language:
          <NativeSelect
            sx={{
              fontSize: 'inherit',
              paddingLeft: '6px'
            }}
            children={[
              <option>English</option>,
              <option>Spanish</option>
            ]} />
        </p>
      </div>
    </section>
  )
}