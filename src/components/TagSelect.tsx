import { FormLabel, HStack, Select, Tag, TagCloseButton, TagLabel } from '@chakra-ui/react'
import { useEffect, useState } from 'react'



function TagSelect() {

    
    const tags = ['Green', 'Red', 'Yellow', 'Blue']
    const [tagArr, setTagArr]: any[] = useState([])
    const handleTag = (value: any) => {
        setTagArr([...tagArr, value])
    }

    const removeTag = (value : string) => {
        const filteredTagArr  = tagArr.filter((tag : string) => tag !== value)
        setTagArr(filteredTagArr)
    }

    useEffect(() => {
     console.log(tagArr);
    }, [tagArr])
    
    return (
        <>
        <FormLabel ml={{base:'10px', sm:'0'}}>Tags</FormLabel>
            <HStack spacing={2}>

                {tagArr.map((item : string, index : number) => {
                    
                  return  <Tag
                        size={'md'}
                        key={index}
                        borderRadius='full'
                        variant='solid'
                        colorScheme={item.toLocaleLowerCase()}
                    >
                        <TagLabel>{item}</TagLabel>
                        <TagCloseButton onClick={() => {
                            removeTag(item);
                        }} />
                    </Tag>
                })}
            </HStack>

            {tagArr.length !== tags.length &&
                <Select mt={2} placeholder='Select tag' onChange={(e) => { handleTag(e.target.value) }}>
                    {
                        tags.map((tag, index) => {
                            if (!tagArr.includes(tag)) {
                                return <option key={index} value={tag}>{tag}</option>
                            }else{
                                return ''
                            }
                        })
                    }
                </Select>
            }
        </>
    )
}

export default TagSelect