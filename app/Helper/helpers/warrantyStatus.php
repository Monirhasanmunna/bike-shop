<?php

/**
 * @param $key
 * @return string|string[]
 */
function warrantyStatus ($key=null): array|string
{
    return mapHelperDataSet([
        WARRANTY_APPLIED,
        WARRANTY_CLAIMED,
        WARRANTY_CANCELLED,
    ], $key);
}
