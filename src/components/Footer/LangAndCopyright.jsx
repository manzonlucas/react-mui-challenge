import NativeSelect from '@mui/material/NativeSelect';

export default function LangAndCopyright() {
  return (
    <section className="flex justify-between text-sm">
      <p>© 2023 Customer Products. All rights reserved.</p>
      <div className="flex gap-10">
        <div>Region:
          <NativeSelect
            sx={{
              fontSize: 'inherit',
              paddingLeft: '6px'
            }}
            children=
            {[<option key={1}> United States</option>,
            <option key={2}>Argentina</option>,
            <option key={3}>Mexico</option>]}
          />
        </div>

        <div>Language:
          <NativeSelect
            sx={{
              fontSize: 'inherit',
              paddingLeft: '6px'
            }}
            children={[
              <option key={1}>English</option>,
              <option key={2}>Spanish</option>
            ]} />
        </div>
      </div>
    </section>
  )
}