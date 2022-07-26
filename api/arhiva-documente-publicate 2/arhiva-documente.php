<div class="wrap">
    <div class="wp-list-table widefat fixed striped table-view-list" style="padding: 10px !important; font-size: 20px !important; max-width:100% !important;">    
        <h1 class="wp-heading-inline"> Documente PDF Publicate pe Webiste-ul Primariei </h1>   

        
        <?php 
            // Query documents
            $query_images_args = array(
                'post_type'      => 'attachment',
                'post_mime_type' => 'application/pdf',
                'post_status'    => 'inherit',
                'hide_empty'     => 0
            );
            $get_categories = get_categories($query_images_args);

            foreach ( $get_categories as $category_name ) {
                ?>
                <?php
                
                // Query documents
                $query_images_args = array(
                    'post_type'      => 'attachment',
                    'post_mime_type' => 'application/pdf',
                    'post_status'    => 'inherit',
                    'category_name'  => $category_name->slug,
                    'author'         => get_current_user_id(),
                );
                $query_images = new WP_Query( $query_images_args );
                ?> 
                <table rules="all" style="width:100%; border:1px solid black; border-collapse: collapse;" id="<?php echo $category_name->slug ?>">
                <h4> <?php echo $category_name->name ?> </h4>
                <input style="margin-bottom: 10px !important;" class='button-secondary' type="button" onclick="javascript:printData('<?php echo $category_name->slug ?>')" value="Imprimare registru <?php echo $category_name->name ?>">
                    <tr style="border:1px solid black;">
                        <th style="border:1px solid black; font-weight: bold;">Denumire</th>
                        <th style="border:1px solid black; font-weight: bold;">Descriere</th>
                        <th style="border:1px solid black; font-weight: bold;">Data</th>
                    </tr>
                <?php
                foreach ( $query_images->posts as $pdf ) {
                    ?>
                    <tr style="border:1px solid black;">
                        <th style="border:1px solid black;"> <a target="_blank" href="<?php echo $pdf->guid ?>"><?php echo $pdf->post_title ?></a> </th>
                        <th style="border:1px solid black;"> <?php echo $pdf->post_content ?>  </th> 
                        <th style="border:1px solid black;"> <?php echo $pdf->post_date ?>  </th>
                    </tr>
                    <?php
                }
            }
        ?>
        </table>
    </div> 
</div>

<script>
function printData(select_table) {
    var divToPrint=document.getElementById(select_table);
    newWin= window.open("");
    newWin.document.write(divToPrint.outerHTML);
    newWin.print();
    newWin.close();
}
</script>