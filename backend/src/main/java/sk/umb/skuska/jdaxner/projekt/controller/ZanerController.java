package sk.umb.skuska.jdaxner.projekt.controller;

import org.springframework.web.bind.annotation.*;
import sk.umb.skuska.jdaxner.projekt.domain.Zaner;
import sk.umb.skuska.jdaxner.projekt.domain.ZanerDto;
import sk.umb.skuska.jdaxner.projekt.service.ZanerService;

import java.util.List;

@RestController
@CrossOrigin("*")
public class ZanerController {

    public ZanerController(ZanerService zanerService) {
        this.zanerService = zanerService;
    }

    private ZanerService zanerService;

    @PostMapping("/api/add-zaner")
    public String addZaner(@RequestBody ZanerDto dto) {
        Zaner zaner = new Zaner();

        zaner.setId(dto.getId());
        zaner.setNazov(dto.getNazov());

        zanerService.addZaner(zaner);
        return new String("zaner bol pridany!");
    }

    @GetMapping("/api/get-zanre")
    public List<Zaner> getAllZanre() {
        List<Zaner> zanre = zanerService.getAllZanre();
        return zanre;
    }
}
